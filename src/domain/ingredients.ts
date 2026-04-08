import {
  INGREDIENTS as ingredientsRaw,
  INGREDIENT_CATEGORIES as ingredientCategoriesRaw,
  INGREDIENT_TAG_COLORS as ingredientTagColorsRaw,
  INGREDIENT_TASTES as ingredientTastesRaw,
  INGREDIENT_TEXTURES as ingredientTexturesRaw,
  getIngredient as getIngredientRaw,
  getIngredientByVariant as getIngredientByVariantRaw,
  getSubstitutes as getSubstitutesRaw
} from '../../js/ingredients/_registry.js';
import type { Ingredient } from './types';

export const INGREDIENTS = ingredientsRaw as Ingredient[];
export const INGREDIENT_CATEGORIES = ingredientCategoriesRaw as string[];
export const INGREDIENT_TAG_COLORS = ingredientTagColorsRaw as Record<string, { bg: string; border: string; text: string }>;
export const INGREDIENT_TASTES = ingredientTastesRaw as string[];
export const INGREDIENT_TEXTURES = ingredientTexturesRaw as string[];

export function getIngredient(id: string): Ingredient | undefined {
  return getIngredientRaw(id) as Ingredient | undefined;
}

export function getIngredientByVariant(variantId: string):
  | { ingredient: Ingredient; variant: { id: string; label: string; state: string } }
  | undefined {
  return getIngredientByVariantRaw(variantId) as
    | { ingredient: Ingredient; variant: { id: string; label: string; state: string } }
    | undefined;
}

export function getSubstitutes(id: string): Ingredient[] {
  return getSubstitutesRaw(id) as Ingredient[];
}
