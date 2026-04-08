import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

const indexPayload = [
  {
    id: 1,
    slug: 'test-recipe',
    title: 'Test Recipe',
    subtitle: 'Test Subtitle',
    description: 'Description',
    category: 'Dinner',
    cuisine: 'Japanese',
    meal_type: 'Rice',
    tags: ['quick'],
    difficulty: 'Easy',
    time_estimate: '10 min',
    base_servings: 1,
    image: 'images/gyudon.png',
    ingredient_ids: ['udon'],
    tastes: ['salty'],
    textures: ['smooth'],
    method_types: ['mix'],
    ingredients: [
      {
        ingredient_id: 'udon',
        variant_id: 'udon--raw',
        qty: 100,
        unit: 'g',
        scalable: true,
        optional: false,
        is_seasoning: false
      }
    ],
    versions: [
      {
        id: 'base',
        label: 'Base',
        steps: [{ order: 1, instruction: 'Test step', method_id: 'mix_basic' }]
      }
    ]
  }
];

const detailPayload = {
  ...indexPayload[0],
  tips: 'Test tips'
};

beforeEach(() => {
  localStorage.clear();

  vi.stubGlobal(
    'fetch',
    vi.fn(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url.includes('index.json')) {
        return { ok: true, json: async () => indexPayload } as Response;
      }

      if (url.includes('test-recipe.json')) {
        return { ok: true, json: async () => detailPayload } as Response;
      }

      return { ok: true, json: async () => ({}) } as Response;
    })
  );
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe('app integration routes', () => {
  it('renders home route and supports search filter', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await screen.findAllByText('Test Recipe');

    const input = screen.getByPlaceholderText('Search recipes, ingredients, categories');
    await userEvent.type(input, 'non-match');

    await waitFor(() => {
      expect(screen.getByText('No matching recipes')).toBeInTheDocument();
    });
  });

  it('renders detail route by id', async () => {
    render(
      <MemoryRouter initialEntries={['/recipes/1']}>
        <App />
      </MemoryRouter>
    );

    await screen.findAllByText('Test Recipe');
    expect(screen.getByText('Test step')).toBeInTheDocument();
  });

  it('renders my-recipes with persisted localStorage data', async () => {
    localStorage.setItem(
      'cookbook_my_recipes',
      JSON.stringify([
        {
          my_id: 'my_1',
          source: 'custom',
          title: 'My Saved Recipe',
          image: null,
          tags: [],
          added_at: new Date().toISOString()
        }
      ])
    );

    render(
      <MemoryRouter initialEntries={['/my-recipes']}>
        <App />
      </MemoryRouter>
    );

    await screen.findByText('My Saved Recipe');
  });

  it('renders about route', async () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    await screen.findByText('Highlights');
  });
});

