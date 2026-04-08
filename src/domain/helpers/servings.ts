import { getIngredient } from '../ingredients';
import type { RecipeDetail, RecipeIngredientRef } from '../types';

const VOLUME_TO_GRAMS: Record<string, number> = {
  g: 1,
  ml: 1,
  'c.c.': 1,
  kg: 1000,
  l: 1000,
  tsp: 5,
  t: 5,
  tbsp: 15,
  T: 15,
  cup: 240,
  cm: 2
};

export function scaleQty(qty: number | null, baseServings: number, currentServings: number): number | null {
  if (qty === null) return null;
  return Number((qty * (currentServings / baseServings)).toFixed(2));
}

export function formatQty(qty: number | null, unit: string, unitNote?: string): string {
  if (qty === null) return unit || '';
  if (unitNote) return `${qty} ${unit} (${unitNote})`.trim();
  return `${qty} ${unit}`.trim();
}

function toGrams(qty: number, unitRaw: string): number {
  const unit = unitRaw?.trim() || '';
  if (VOLUME_TO_GRAMS[unit] !== undefined) {
    return qty * VOLUME_TO_GRAMS[unit];
  }

  if (unit === 'slice') return qty * 20;
  if (unit === 'egg') return qty * 50;
  if (unit === 'clove') return qty * 5;
  if (unit === 'bowl') return qty * 240;
  if (unit === 'tbsp_local') return qty * 15;
  if (unit === 'tsp_local') return qty * 5;
  return qty * 10;
}

export function estimateIngredientCalories(
  ingredientRef: RecipeIngredientRef,
  baseServings: number,
  currentServings: number
): number {
  if (ingredientRef.qty === null) return 0;

  const item = getIngredient(ingredientRef.ingredient_id);
  if (!item?.nutrition_per_100g) return 0;

  const qty = ingredientRef.scalable
    ? scaleQty(ingredientRef.qty, baseServings, currentServings)
    : ingredientRef.qty;

  if (qty === null) return 0;
  const grams = toGrams(qty, ingredientRef.unit);
  return (grams / 100) * item.nutrition_per_100g.calories;
}

export function aggregateNutrition(recipe: RecipeDetail, currentServings: number): {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
  sodium: number;
} {
  const totals = {
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
    fiber: 0,
    sodium: 0
  };

  recipe.ingredients.forEach((ingredientRef) => {
    if (ingredientRef.qty === null) return;
    const item = getIngredient(ingredientRef.ingredient_id);
    if (!item?.nutrition_per_100g) return;

    const qty = ingredientRef.scalable
      ? scaleQty(ingredientRef.qty, recipe.base_servings, currentServings)
      : ingredientRef.qty;
    if (qty === null) return;

    const grams = toGrams(qty, ingredientRef.unit);
    const ratio = grams / 100;

    totals.calories += (item.nutrition_per_100g.calories || 0) * ratio;
    totals.protein += (item.nutrition_per_100g.protein || 0) * ratio;
    totals.fat += (item.nutrition_per_100g.fat || 0) * ratio;
    totals.carbs += (item.nutrition_per_100g.carbs || 0) * ratio;
    totals.fiber += (item.nutrition_per_100g.fiber || 0) * ratio;
    totals.sodium += (item.nutrition_per_100g.sodium || 0) * ratio;
  });

  return totals;
}

export function estimateScaledTime(baseEstimate: string, ratio: number): number {
  const baseMinutes = Number.parseInt(baseEstimate, 10) || 30;
  if (ratio === 1) return baseMinutes;

  if (ratio > 1) {
    const multiplier = 1 + (ratio - 1) / (1 + 0.25 * (ratio - 1));
    return Math.round(baseMinutes * multiplier);
  }

  return Math.round(baseMinutes * Math.pow(ratio, 0.65));
}
