import { beforeEach, describe, expect, it } from 'vitest';
import { addMyRecipe, deleteMyRecipe, loadMyRecipes, MY_RECIPES_STORAGE_KEY } from '../../domain/myRecipes';

beforeEach(() => {
  localStorage.clear();
});

describe('my recipes storage', () => {
  it('adds and loads a custom recipe', () => {
    addMyRecipe({
      my_id: 'my_1',
      source: 'custom',
      title: 'My Recipe',
      image: null,
      tags: [],
      added_at: new Date().toISOString()
    });

    const loaded = loadMyRecipes();
    expect(loaded).toHaveLength(1);
    expect(loaded[0].title).toBe('My Recipe');
  });

  it('prevents duplicate online recipe', () => {
    const first = addMyRecipe({
      my_id: 'my_2',
      source: 'online',
      source_id: 1,
      title: 'Online Recipe',
      image: null,
      tags: [],
      added_at: new Date().toISOString()
    });

    expect(first).not.toBeNull();

    const second = addMyRecipe({
      my_id: 'my_3',
      source: 'online',
      source_id: 1,
      title: 'Online Recipe duplicate',
      image: null,
      tags: [],
      added_at: new Date().toISOString()
    });

    expect(second).toBeNull();
  });

  it('deletes recipe by id', () => {
    localStorage.setItem(
      MY_RECIPES_STORAGE_KEY,
      JSON.stringify([
        {
          my_id: 'my_9',
          source: 'custom',
          title: 'Delete me',
          image: null,
          tags: [],
          added_at: new Date().toISOString()
        }
      ])
    );

    const next = deleteMyRecipe('my_9');
    expect(next).toHaveLength(0);
  });
});
