import {
  CATEGORY_LIST as categoryListRaw,
  CUISINE_LIST as cuisineListRaw,
  DIFFICULTY_LIST as difficultyListRaw,
  MEALTYPE_LIST as mealTypeListRaw
} from '../../js/recipes.js';

export const CUISINE_LIST = cuisineListRaw as string[];
export const MEALTYPE_LIST = mealTypeListRaw as string[];
export const CATEGORY_LIST = categoryListRaw as string[];
export const DIFFICULTY_LIST = difficultyListRaw as string[];
