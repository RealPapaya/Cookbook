import { describe, expect, it } from 'vitest';
import { getKitchenResults } from '../../domain/helpers/kitchen';
import type { RecipeIndexEntry } from '../../domain/types';

const recipes: RecipeIndexEntry[] = [
  {
    id: 1,
    slug: 'a',
    title: 'A',
    subtitle: '',
    description: '',
    category: 'Dinner',
    cuisine: 'Japanese',
    meal_type: 'Rice',
    tags: [],
    base_servings: 1,
    time_estimate: '10 min',
    difficulty: 'Easy',
    image: 'a.webp',
    ingredient_ids: ['x', 'y', 'z'],
    tastes: [],
    textures: [],
    method_types: []
  },
  {
    id: 2,
    slug: 'b',
    title: 'B',
    subtitle: '',
    description: '',
    category: 'Dinner',
    cuisine: 'Japanese',
    meal_type: 'Rice',
    tags: [],
    base_servings: 1,
    time_estimate: '10 min',
    difficulty: 'Easy',
    image: 'b.webp',
    ingredient_ids: ['x', 'y'],
    tastes: [],
    textures: [],
    method_types: []
  }
];

describe('kitchen helper', () => {
  it('sorts by match rate first', () => {
    const selected = new Set(['x', 'y']);
    const results = getKitchenResults(recipes, selected);
    expect(results[0].recipe.id).toBe(2);
    expect(results[0].matchRate).toBe(1);
  });
});
