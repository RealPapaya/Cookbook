export interface IngredientVariant {
  id: string;
  label: string;
  state: string;
  yield_ratio?: number;
}

export interface NutritionPer100g {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber?: number;
  sodium?: number;
}

export interface Ingredient {
  id: string;
  name: string;
  name_en?: string;
  categories: string[];
  variants: IngredientVariant[];
  tastes?: string[];
  textures?: string[];
  nutrition_per_100g?: NutritionPer100g;
  substitutes?: string[];
  allergens?: string[];
  season?: string;
  storage_tip?: string;
  verified_source?: string;
  verified_at?: string;
}

export interface RecipeIngredientRef {
  ingredient_id: string;
  variant_id: string;
  qty: number | null;
  unit: string;
  unit_note?: string;
  scalable: boolean;
  optional: boolean;
  is_seasoning: boolean;
  note?: string;
}

export interface RecipeStep {
  order: number;
  instruction: string;
  method_id?: string;
  duration_s?: number;
  ingredient_ids?: string[];
}

export interface RecipeVersion {
  id: string;
  label: string;
  note?: string;
  method_id?: string;
  steps: RecipeStep[];
}

export interface RecipeBase {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  cuisine: string;
  meal_type: string;
  tags: string[];
  base_servings: number;
  time_estimate: string;
  difficulty: string;
  image: string;
}

export interface RecipeDetail extends RecipeBase {
  slug: string;
  ingredients: RecipeIngredientRef[];
  versions: RecipeVersion[];
  tips?: string;
  source_url?: string;
}

export interface RecipeIndexEntry extends RecipeBase {
  slug: string;
  ingredient_ids: string[];
  tastes: string[];
  textures: string[];
  method_types: string[];
  ingredients?: RecipeIngredientRef[];
  versions?: RecipeVersion[];
}

export interface CookingMethodParams {
  power_w?: number;
  duration_s?: number;
  temp_c?: number;
  vessel?: string;
  cover?: boolean;
  cover_note?: string;
  heat_level?: string;
}

export interface CookingMethod {
  id: string;
  name: string;
  type: string;
  description?: string;
  params: CookingMethodParams;
  suitable_for?: string[];
  tags?: string[];
  safety_note?: string;
}

export interface MyRecipeBase {
  my_id: string;
  source: 'online' | 'custom';
  title: string;
  subtitle?: string;
  description?: string;
  image: string | null;
  category?: string;
  cuisine?: string;
  meal_type?: string;
  tags: string[];
  time_estimate?: string;
  difficulty?: string;
  base_servings?: number;
  added_at: string;
}

export interface MyOnlineRecipe extends MyRecipeBase {
  source: 'online';
  source_id: number;
}

export interface MyCustomRecipe extends MyRecipeBase {
  source: 'custom';
  text_ingredients?: string;
  text_steps?: string;
  tips?: string;
}

export type MyRecipe = MyOnlineRecipe | MyCustomRecipe;

export interface FilterState {
  search: string;
  cuisines: Set<string>;
  mealTypes: Set<string>;
  categories: Set<string>;
  recipeTags: Set<string>;
  ingTags: Set<string>;
  methodTypes: Set<string>;
  tastes: Set<string>;
  textures: Set<string>;
}
