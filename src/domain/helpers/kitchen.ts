import type { RecipeIndexEntry } from '../types';

export interface KitchenResult {
  recipe: RecipeIndexEntry;
  matchCount: number;
  recipeTotal: number;
  matchRate: number;
}

export function getKitchenResults(
  recipes: RecipeIndexEntry[],
  selectedIngredientIds: Set<string>
): KitchenResult[] {
  if (selectedIngredientIds.size === 0) return [];

  return recipes
    .map((recipe) => {
      const ids = new Set(recipe.ingredient_ids || []);
      const recipeTotal = ids.size || 1;
      let matchCount = 0;

      selectedIngredientIds.forEach((id) => {
        if (ids.has(id)) matchCount += 1;
      });

      return {
        recipe,
        matchCount,
        recipeTotal,
        matchRate: matchCount / recipeTotal
      };
    })
    .filter((entry) => entry.matchCount > 0)
    .sort((a, b) => {
      if (b.matchRate !== a.matchRate) return b.matchRate - a.matchRate;
      return b.matchCount - a.matchCount;
    });
}
