import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteMyRecipe } from '../domain/myRecipes';
import type { MyRecipe } from '../domain/types';

interface MyRecipesPageProps {
  recipes: MyRecipe[];
  onOpenAddModal: () => void;
  onDelete: () => void;
}

export default function MyRecipesPage({ recipes, onOpenAddModal, onDelete }: MyRecipesPageProps) {
  const navigate = useNavigate();

  const sorted = useMemo(() => {
    return [...recipes].sort((a, b) => new Date(b.added_at).getTime() - new Date(a.added_at).getTime());
  }, [recipes]);

  return (
    <div className="page-view active" id="view-my-recipes">
      <div className="my-recipes-header">
        <div>
          <h2 className="my-recipes-title">My Recipes</h2>
          <p className="my-recipes-sub">Your saved online recipes and custom notes live here.</p>
        </div>
        <button className="add-recipe-btn" type="button" onClick={onOpenAddModal}>
          Add Recipe
        </button>
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">NA</div>
          <p>No saved recipes yet.</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 6 }}>
            Add one from the online list or create your own.
          </p>
          <button className="add-recipe-btn" type="button" style={{ marginTop: 16 }} onClick={onOpenAddModal}>
            Add First Recipe
          </button>
        </div>
      ) : (
        <>
          <div className="my-count-label">{sorted.length} recipes</div>
          <div className="recipe-grid">
            {sorted.map((recipe) => {
              const isOnline = recipe.source === 'online';
              return (
                <div
                  key={recipe.my_id}
                  className="recipe-card my-recipe-card"
                  role="button"
                  tabIndex={0}
                  style={{ textAlign: 'left' }}
                  onClick={() => {
                    if (isOnline) navigate(`/recipes/${recipe.source_id}`);
                    else navigate(`/my-recipes/${recipe.my_id}`);
                  }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      if (isOnline) navigate(`/recipes/${recipe.source_id}`);
                      else navigate(`/my-recipes/${recipe.my_id}`);
                    }
                  }}
                >
                  <div className="card-image-wrap">
                    {recipe.image ? <img src={recipe.image} alt={recipe.title} loading="lazy" /> : <div className="my-card-no-img">TXT</div>}
                    <div className="card-image-overlay" />
                    <span className="card-category">{recipe.category || 'Recipe'}</span>
                    <span className={`my-source-badge ${isOnline ? 'source-online' : 'source-custom'}`}>
                      {isOnline ? 'Online' : 'Custom'}
                    </span>
                  </div>

                  <div className="card-body">
                    <div className="card-title">{recipe.title}</div>
                    {recipe.subtitle ? <div className="card-subtitle">{recipe.subtitle}</div> : null}

                    <div className="card-cuisine-row">
                      {recipe.cuisine ? <span className="cuisine-badge">{recipe.cuisine}</span> : null}
                      {recipe.meal_type ? <span className="mealtype-badge">{recipe.meal_type}</span> : null}
                    </div>

                    {recipe.description ? <div className="card-desc">{recipe.description}</div> : null}

                    <div className="card-meta">
                      {recipe.time_estimate ? (
                        <div className="card-meta-item">
                          <span>TM</span>
                          <span>{recipe.time_estimate}</span>
                        </div>
                      ) : null}
                      {recipe.difficulty ? (
                        <div className="card-meta-item">
                          <span>LV</span>
                          <span>{recipe.difficulty}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="my-card-footer">
                      <span className="my-added-date">Saved on {new Date(recipe.added_at).toLocaleDateString('zh-TW')}</span>
                      <button
                        className="my-delete-btn"
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          if (!window.confirm('Delete this recipe?')) return;
                          deleteMyRecipe(recipe.my_id);
                          onDelete();
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
