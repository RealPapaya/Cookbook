import { FormEvent, useMemo, useState } from 'react';
import { addMyRecipe } from '../domain/myRecipes';
import { CATEGORY_LIST, CUISINE_LIST, DIFFICULTY_LIST, MEALTYPE_LIST } from '../domain/recipesCatalog';
import type { MyRecipe, RecipeIndexEntry } from '../domain/types';

interface AddRecipeModalProps {
  open: boolean;
  recipes: RecipeIndexEntry[];
  myRecipes: MyRecipe[];
  onClose: () => void;
  onRecipesChanged: () => void;
  onToast: (message: string) => void;
}

export default function AddRecipeModal({
  open,
  recipes,
  myRecipes,
  onClose,
  onRecipesChanged,
  onToast
}: AddRecipeModalProps) {
  const [tab, setTab] = useState<'online' | 'custom'>('online');

  const addedOnlineIds = useMemo(() => {
    return new Set(myRecipes.filter((item) => item.source === 'online').map((item) => item.source_id));
  }, [myRecipes]);

  const addOnlineRecipe = (recipe: RecipeIndexEntry): void => {
    const saved = addMyRecipe({
      my_id: `my_${Date.now()}`,
      source: 'online',
      source_id: recipe.id,
      title: recipe.title,
      subtitle: recipe.subtitle,
      description: recipe.description,
      image: recipe.image,
      category: recipe.category,
      cuisine: recipe.cuisine,
      meal_type: recipe.meal_type,
      tags: [...recipe.tags],
      time_estimate: recipe.time_estimate,
      difficulty: recipe.difficulty,
      base_servings: recipe.base_servings,
      added_at: new Date().toISOString()
    });

    if (!saved) {
      onToast('Recipe already saved.');
      return;
    }

    onRecipesChanged();
    onToast(`Added: ${recipe.title}`);
  };

  const submitCustomRecipe = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = String(data.get('title') || '').trim();
    if (!title) return;

    const recipe = {
      my_id: `my_${Date.now()}`,
      source: 'custom' as const,
      title,
      subtitle: String(data.get('subtitle') || '').trim(),
      description: String(data.get('description') || '').trim(),
      cuisine: String(data.get('cuisine') || 'Other'),
      meal_type: String(data.get('meal_type') || 'General'),
      category: String(data.get('category') || 'Dinner'),
      difficulty: String(data.get('difficulty') || 'Medium'),
      time_estimate: String(data.get('time_estimate') || '').trim(),
      base_servings: Number(data.get('base_servings') || 1),
      tags: String(data.get('tags') || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
      text_ingredients: String(data.get('text_ingredients') || '').trim(),
      text_steps: String(data.get('text_steps') || '').trim(),
      tips: String(data.get('tips') || '').trim(),
      image: null,
      added_at: new Date().toISOString()
    };

    addMyRecipe(recipe);
    onRecipesChanged();
    onToast(`Created: ${title}`);
    onClose();
    event.currentTarget.reset();
    setTab('online');
  };

  return (
    <div
      id="add-recipe-modal"
      className="modal-overlay"
      style={{ display: open ? 'flex' : 'none' }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-box" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h3>Add Recipe</h3>
          <button className="modal-close-btn" type="button" onClick={onClose}>
            X
          </button>
        </div>

        <div className="modal-tabs">
          <button
            className={`modal-tab ${tab === 'online' ? 'active' : ''}`}
            id="modal-tab-online"
            type="button"
            onClick={() => setTab('online')}
          >
            Add from Online List
          </button>
          <button
            className={`modal-tab ${tab === 'custom' ? 'active' : ''}`}
            id="modal-tab-custom"
            type="button"
            onClick={() => setTab('custom')}
          >
            Create Custom Recipe
          </button>
        </div>

        <div id="modal-content-online" className="modal-tab-content" style={{ display: tab === 'online' ? 'block' : 'none' }}>
          <div className="online-recipe-picker" id="online-recipe-picker">
            {recipes.map((recipe) => {
              const added = addedOnlineIds.has(recipe.id);
              return (
                <div
                  key={recipe.id}
                  className={`online-pick-card ${added ? 'already-added' : ''}`}
                  onClick={() => {
                    if (added) return;
                    addOnlineRecipe(recipe);
                  }}
                >
                  <div className="online-pick-img">
                    <img src={recipe.image} alt={recipe.title} loading="lazy" />
                  </div>
                  <div className="online-pick-info">
                    <div className="online-pick-title">{recipe.title}</div>
                    <div className="online-pick-meta">
                      {recipe.cuisine} | {recipe.category} | {recipe.time_estimate}
                    </div>
                  </div>
                  <div className="online-pick-action">
                    {added ? (
                      <span className="pick-added-badge">Added</span>
                    ) : (
                      <button className="pick-add-btn" type="button">
                        Add
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="modal-content-custom" className="modal-tab-content" style={{ display: tab === 'custom' ? 'block' : 'none' }}>
          <form id="custom-recipe-form" onSubmit={submitCustomRecipe}>
            <div className="form-row">
              <div className="form-field">
                <label>
                  Title <span className="required-star">*</span>
                </label>
                <input type="text" name="title" placeholder="Example: Garlic Butter Shrimp" required />
              </div>
              <div className="form-field">
                <label>Subtitle</label>
                <input type="text" name="subtitle" placeholder="Optional subtitle" />
              </div>
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea name="description" rows={2} placeholder="Short summary" />
            </div>

            <div className="form-row three-col">
              <div className="form-field">
                <label>Cuisine</label>
                <select name="cuisine">
                  {CUISINE_LIST.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>Category</label>
                <select name="category">
                  {CATEGORY_LIST.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>Meal Type</label>
                <select name="meal_type">
                  {MEALTYPE_LIST.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row three-col">
              <div className="form-field">
                <label>Difficulty</label>
                <select name="difficulty">
                  {DIFFICULTY_LIST.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>Time</label>
                <input type="text" name="time_estimate" placeholder="Example: 30 min" />
              </div>

              <div className="form-field">
                <label>Servings</label>
                <input type="number" name="base_servings" defaultValue={1} min={1} max={50} />
              </div>
            </div>

            <div className="form-field">
              <label>
                Tags <span className="form-hint">comma separated</span>
              </label>
              <input type="text" name="tags" placeholder="Example: quick, weekday" />
            </div>

            <div className="form-field">
              <label>
                Ingredients <span className="form-hint">one per line</span>
              </label>
              <textarea name="text_ingredients" rows={5} placeholder="Chicken breast 200g&#10;Garlic 1 tsp" />
            </div>

            <div className="form-field">
              <label>
                Steps <span className="form-hint">one per line</span>
              </label>
              <textarea name="text_steps" rows={6} placeholder="Heat oil&#10;Add garlic and stir" />
            </div>

            <div className="form-field">
              <label>
                Tips <span className="form-hint">optional</span>
              </label>
              <textarea name="tips" rows={2} placeholder="Optional cooking notes" />
            </div>

            <div className="form-actions">
              <button className="filter-clear-btn" type="button" onClick={onClose}>
                Cancel
              </button>
              <button className="submit-recipe-btn" type="submit">
                Save Recipe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
