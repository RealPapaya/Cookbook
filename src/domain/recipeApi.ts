import { getCookingMethod } from './cookingMethods';
import type { RecipeDetail, RecipeIndexEntry, RecipeVersion } from './types';

const detailCache = new Map<number, RecipeDetail>();
let indexCache: RecipeIndexEntry[] | null = null;

function baseJoin(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${path.replace(/^\//, '')}`;
}

function normalizeVersions(input: unknown): RecipeVersion[] {
  const versions = Array.isArray(input) ? input : [];
  return versions.map((version, index) => {
    const value = version as Record<string, unknown>;
    const fallbackId = typeof value.method_id === 'string' ? value.method_id : `version_${index + 1}`;
    return {
      id: typeof value.id === 'string' ? value.id : fallbackId,
      label: typeof value.label === 'string' ? value.label : `Version ${index + 1}`,
      note: typeof value.note === 'string' ? value.note : undefined,
      method_id: typeof value.method_id === 'string' ? value.method_id : undefined,
      steps: Array.isArray(value.steps)
        ? (value.steps as RecipeVersion['steps'])
        : []
    };
  });
}

function deriveMethodTypes(versions: RecipeVersion[]): string[] {
  const set = new Set<string>();
  versions.forEach((version) => {
    version.steps.forEach((step) => {
      if (!step.method_id) return;
      const method = getCookingMethod(step.method_id);
      if (method?.type) set.add(method.type);
    });
  });
  return [...set];
}

function normalizeIndexEntry(input: unknown): RecipeIndexEntry {
  const value = input as Record<string, unknown>;
  const versions = normalizeVersions(value.versions);
  const ingredients = Array.isArray(value.ingredients) ? value.ingredients : undefined;
  const ingredientIds = Array.isArray(value.ingredient_ids)
    ? (value.ingredient_ids as string[])
    : (ingredients || []).map((item) => (item as Record<string, string>).ingredient_id).filter(Boolean);

  const methodTypes = Array.isArray(value.method_types)
    ? (value.method_types as string[])
    : deriveMethodTypes(versions);

  return {
    id: Number(value.id),
    slug: String(value.slug),
    title: String(value.title || ''),
    subtitle: String(value.subtitle || ''),
    description: String(value.description || ''),
    category: String(value.category || ''),
    cuisine: String(value.cuisine || ''),
    meal_type: String(value.meal_type || ''),
    tags: Array.isArray(value.tags) ? (value.tags as string[]) : [],
    base_servings: Number(value.base_servings || 1),
    time_estimate: String(value.time_estimate || ''),
    difficulty: String(value.difficulty || ''),
    image: String(value.image || ''),
    ingredient_ids: ingredientIds,
    tastes: Array.isArray(value.tastes) ? (value.tastes as string[]) : [],
    textures: Array.isArray(value.textures) ? (value.textures as string[]) : [],
    method_types: methodTypes,
    ingredients: ingredients as RecipeIndexEntry['ingredients'],
    versions
  };
}

function normalizeRecipeDetail(input: unknown): RecipeDetail {
  const value = input as Record<string, unknown>;
  const versions = normalizeVersions(value.versions);

  return {
    id: Number(value.id),
    slug: String(value.slug),
    title: String(value.title || ''),
    subtitle: String(value.subtitle || ''),
    description: String(value.description || ''),
    category: String(value.category || ''),
    cuisine: String(value.cuisine || ''),
    meal_type: String(value.meal_type || ''),
    tags: Array.isArray(value.tags) ? (value.tags as string[]) : [],
    base_servings: Number(value.base_servings || 1),
    time_estimate: String(value.time_estimate || ''),
    difficulty: String(value.difficulty || ''),
    image: String(value.image || ''),
    ingredients: Array.isArray(value.ingredients) ? (value.ingredients as RecipeDetail['ingredients']) : [],
    versions,
    tips: typeof value.tips === 'string' ? value.tips : undefined,
    source_url: typeof value.source_url === 'string' ? value.source_url : undefined
  };
}

export async function fetchRecipesIndex(force = false): Promise<RecipeIndexEntry[]> {
  if (!force && indexCache) return indexCache;

  const response = await fetch(baseJoin('data/recipes/index.json'));
  const payload = (await response.json()) as unknown[];
  indexCache = payload.map(normalizeIndexEntry);
  return indexCache;
}

export async function fetchRecipeDetailBySlug(slug: string): Promise<RecipeDetail> {
  const response = await fetch(baseJoin(`data/recipes/${slug}.json`));
  const payload = await response.json();
  return normalizeRecipeDetail(payload);
}

export async function fetchRecipeDetailById(recipeId: number): Promise<RecipeDetail | null> {
  if (detailCache.has(recipeId)) {
    return detailCache.get(recipeId) || null;
  }

  const index = await fetchRecipesIndex();
  const target = index.find((item) => item.id === recipeId);
  if (!target) return null;

  try {
    const detail = await fetchRecipeDetailBySlug(target.slug);
    detailCache.set(recipeId, detail);
    return detail;
  } catch {
    if (!target.ingredients || !target.versions) return null;
    const detail: RecipeDetail = {
      ...target,
      ingredients: target.ingredients,
      versions: target.versions
    };
    detailCache.set(recipeId, detail);
    return detail;
  }
}

export function clearRecipeApiCache(): void {
  detailCache.clear();
  indexCache = null;
}

