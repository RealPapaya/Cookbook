import type { MyRecipe } from './types';

export const MY_RECIPES_STORAGE_KEY = 'cookbook_my_recipes';

export function loadMyRecipes(): MyRecipe[] {
  try {
    const raw = localStorage.getItem(MY_RECIPES_STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as MyRecipe[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveMyRecipes(recipes: MyRecipe[]): void {
  localStorage.setItem(MY_RECIPES_STORAGE_KEY, JSON.stringify(recipes));
}

export function addMyRecipe(recipe: MyRecipe): MyRecipe[] | null {
  const list = loadMyRecipes();
  if (
    recipe.source === 'online' &&
    list.some((item) => item.source === 'online' && item.source_id === recipe.source_id)
  ) {
    return null;
  }

  const next = [recipe, ...list];
  saveMyRecipes(next);
  return next;
}

export function deleteMyRecipe(myId: string): MyRecipe[] {
  const next = loadMyRecipes().filter((recipe) => recipe.my_id !== myId);
  saveMyRecipes(next);
  return next;
}
