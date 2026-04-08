import { getCookingMethod } from '../cookingMethods';
import { getIngredient } from '../ingredients';
import type { FilterState, RecipeIndexEntry } from '../types';

function getIngredientIds(recipe: RecipeIndexEntry): string[] {
  if (recipe.ingredient_ids?.length) return recipe.ingredient_ids;
  return (recipe.ingredients || []).map((item) => item.ingredient_id);
}

function getRecipeIngredientNames(recipe: RecipeIndexEntry): string[] {
  return getIngredientIds(recipe)
    .map((id) => getIngredient(id)?.name)
    .filter(Boolean) as string[];
}

function getRecipeIngredientCategories(recipe: RecipeIndexEntry): string[] {
  const list = getIngredientIds(recipe)
    .map((id) => getIngredient(id)?.categories || [])
    .flat();
  return [...new Set(list)];
}

function getRecipeMethodTypes(recipe: RecipeIndexEntry): Set<string> {
  if (recipe.method_types?.length) return new Set(recipe.method_types);

  const set = new Set<string>();
  (recipe.versions || []).forEach((version) => {
    version.steps.forEach((step) => {
      if (!step.method_id) return;
      const method = getCookingMethod(step.method_id);
      if (method?.type) set.add(method.type);
    });
  });

  return set;
}

export function getFilteredRecipes(recipes: RecipeIndexEntry[], filters: FilterState): RecipeIndexEntry[] {
  const q = filters.search.trim().toLowerCase();

  return recipes.filter((recipe) => {
    const ingCategories = getRecipeIngredientCategories(recipe);

    if (q) {
      const haystack = [
        recipe.title,
        recipe.subtitle,
        recipe.description,
        recipe.cuisine,
        recipe.meal_type,
        recipe.category,
        ...recipe.tags,
        ...getRecipeIngredientNames(recipe),
        ...ingCategories
      ]
        .join(' ')
        .toLowerCase();

      if (!haystack.includes(q)) return false;
    }

    if (filters.cuisines.size && !filters.cuisines.has(recipe.cuisine)) return false;
    if (filters.mealTypes.size && !filters.mealTypes.has(recipe.meal_type)) return false;
    if (filters.categories.size && !filters.categories.has(recipe.category)) return false;

    if (filters.recipeTags.size) {
      for (const tag of filters.recipeTags) {
        if (!recipe.tags.includes(tag)) return false;
      }
    }

    if (filters.ingTags.size) {
      const set = new Set(ingCategories);
      for (const tag of filters.ingTags) {
        if (!set.has(tag)) return false;
      }
    }

    if (filters.methodTypes.size) {
      const methodSet = getRecipeMethodTypes(recipe);
      for (const type of filters.methodTypes) {
        if (!methodSet.has(type)) return false;
      }
    }

    if (filters.tastes.size) {
      const tastes = new Set(recipe.tastes || []);
      for (const taste of filters.tastes) {
        if (!tastes.has(taste)) return false;
      }
    }

    if (filters.textures.size) {
      const textures = new Set(recipe.textures || []);
      for (const texture of filters.textures) {
        if (!textures.has(texture)) return false;
      }
    }

    return true;
  });
}

export function getActiveFilterCount(filters: FilterState): number {
  return (
    filters.cuisines.size +
    filters.mealTypes.size +
    filters.categories.size +
    filters.recipeTags.size +
    filters.ingTags.size +
    filters.methodTypes.size +
    filters.tastes.size +
    filters.textures.size +
    (filters.search.trim() ? 1 : 0)
  );
}
