import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { INGREDIENTS } from '../js/ingredients/_registry.js';
import { COOKING_METHODS } from '../js/cooking-methods.js';

interface RecipeFile {
  id: number;
  slug?: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  cuisine: string;
  meal_type: string;
  tags: string[];
  difficulty: string;
  time_estimate: string;
  base_servings: number;
  ingredients: Array<{ ingredient_id: string }>;
  versions: Array<{ steps: Array<{ method_id?: string }> }>;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '../public/data/recipes');
const destinationDir = path.join(__dirname, '../public/data/recipes');

if (!fs.existsSync(destinationDir)) {
  fs.mkdirSync(destinationDir, { recursive: true });
}

const ingredientMap = new Map((INGREDIENTS as Array<Record<string, unknown>>).map((item) => [item.id as string, item]));
const methodTypeMap = new Map(
  (COOKING_METHODS as Array<Record<string, unknown>>).map((item) => [item.id as string, item.type as string])
);

const files = fs
  .readdirSync(sourceDir)
  .filter((name) => name.endsWith('.json') && name !== 'index.json')
  .sort((a, b) => a.localeCompare(b));

const indexData: Record<string, unknown>[] = [];

for (const fileName of files) {
  const sourcePath = path.join(sourceDir, fileName);
  const raw = fs.readFileSync(sourcePath, 'utf8');
  const recipe = JSON.parse(raw) as RecipeFile;

  const slug = recipe.slug || fileName.replace('.json', '');
  recipe.slug = slug;

  fs.writeFileSync(path.join(destinationDir, `${slug}.json`), JSON.stringify(recipe, null, 2));

  const methodTypes = new Set<string>();
  recipe.versions.forEach((version) => {
    version.steps.forEach((step) => {
      if (!step.method_id) return;
      const methodType = methodTypeMap.get(step.method_id);
      if (methodType) methodTypes.add(methodType);
    });
  });

  const tastes = new Set<string>();
  const textures = new Set<string>();
  recipe.ingredients.forEach((ingredientRef) => {
    const ingredient = ingredientMap.get(ingredientRef.ingredient_id);
    const ingTastes = ((ingredient?.tastes as string[]) || []).filter(Boolean);
    const ingTextures = ((ingredient?.textures as string[]) || []).filter(Boolean);
    ingTastes.forEach((item) => tastes.add(item));
    ingTextures.forEach((item) => textures.add(item));
  });

  indexData.push({
    id: recipe.id,
    slug,
    title: recipe.title,
    subtitle: recipe.subtitle,
    description: recipe.description,
    category: recipe.category,
    cuisine: recipe.cuisine,
    meal_type: recipe.meal_type,
    tags: recipe.tags,
    difficulty: recipe.difficulty,
    time_estimate: recipe.time_estimate,
    base_servings: recipe.base_servings,
    image: recipe.image,
    ingredient_ids: recipe.ingredients.map((ingredientRef) => ingredientRef.ingredient_id),
    tastes: [...tastes],
    textures: [...textures],
    method_types: [...methodTypes],
    ingredients: recipe.ingredients,
    versions: recipe.versions
  });
}

fs.writeFileSync(path.join(destinationDir, 'index.json'), JSON.stringify(indexData, null, 2));
console.log(`Migration complete. Generated ${indexData.length} recipes.`);
