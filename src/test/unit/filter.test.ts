import { describe, expect, it } from 'vitest';
import { getActiveFilterCount, getFilteredRecipes } from '../../domain/helpers/filter';
import type { FilterState, RecipeIndexEntry } from '../../domain/types';

function makeFilters(): FilterState {
  return {
    search: '',
    cuisines: new Set(),
    mealTypes: new Set(),
    categories: new Set(),
    recipeTags: new Set(),
    ingTags: new Set(),
    methodTypes: new Set(),
    tastes: new Set(),
    textures: new Set()
  };
}

const recipes: RecipeIndexEntry[] = [
  {
    id: 1,
    slug: 'a',
    title: 'Gyudon Test',
    subtitle: 'Gyudon',
    description: 'Quick beef rice',
    category: 'Dinner',
    cuisine: 'Japanese',
    meal_type: 'Rice',
    tags: ['quick'],
    base_servings: 2,
    time_estimate: '15 min',
    difficulty: 'Easy',
    image: 'images/gyudon.webp',
    ingredient_ids: ['beef_slice', 'white_rice'],
    tastes: ['salty'],
    textures: ['soft'],
    method_types: ['stir_fry']
  },
  {
    id: 2,
    slug: 'b',
    title: 'Cream Udon',
    subtitle: 'Udon',
    description: 'Cream texture',
    category: 'Lunch',
    cuisine: 'Italian',
    meal_type: 'Noodle',
    tags: ['rich'],
    base_servings: 1,
    time_estimate: '10 min',
    difficulty: 'Medium',
    image: 'images/carbonara_udon.webp',
    ingredient_ids: ['udon', 'milk'],
    tastes: ['sweet'],
    textures: ['smooth'],
    method_types: ['mix']
  }
];

describe('filter helpers', () => {
  it('filters by text search', () => {
    const filters = makeFilters();
    filters.search = 'Gyudon';
    const result = getFilteredRecipes(recipes, filters);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
  });

  it('filters by cuisine and method', () => {
    const filters = makeFilters();
    filters.cuisines.add('Italian');
    filters.methodTypes.add('mix');
    const result = getFilteredRecipes(recipes, filters);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it('counts active filters', () => {
    const filters = makeFilters();
    filters.search = 'test';
    filters.cuisines.add('Japanese');
    filters.textures.add('soft');
    expect(getActiveFilterCount(filters)).toBe(3);
  });
});
