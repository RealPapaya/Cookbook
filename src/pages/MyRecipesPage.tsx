import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteMyRecipe } from '../domain/myRecipes';
import { baseJoin } from '../domain/recipeApi';
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
          <h2 className="my-recipes-title">我的食譜</h2>
          <p className="my-recipes-sub">你儲存的線上食譜與自訂筆記都在這裡。</p>
        </div>
        <button className="add-recipe-btn" type="button" onClick={onOpenAddModal}>
          新增食譜
        </button>
      </div>

      {sorted.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon"></div>
          <p>目前還沒有儲存的食譜。</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 6 }}>
            你可以從線上食譜清單加入，或是建立你自己的食譜。
          </p>
          <button className="add-recipe-btn" type="button" style={{ marginTop: 16 }} onClick={onOpenAddModal}>
            建立第一份食譜
          </button>
        </div>
      ) : (
        <>
          <div className="my-count-label">共 {sorted.length} 道食譜</div>
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
                    {recipe.image ? <img src={baseJoin(recipe.image)} alt={recipe.title} loading="lazy" /> : <div className="my-card-no-img"></div>}
                    <div className="card-image-overlay" />
                    <span className="card-category">{recipe.category || '食譜'}</span>
                    <span className={`my-source-badge ${isOnline ? 'source-online' : 'source-custom'}`}>
                      {isOnline ? '線上' : '自訂'}
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
                          <span></span>
                          <span>{recipe.time_estimate}</span>
                        </div>
                      ) : null}
                      {recipe.difficulty ? (
                        <div className="card-meta-item">
                          <span></span>
                          <span>{recipe.difficulty}</span>
                        </div>
                      ) : null}
                    </div>

                    <div className="my-card-footer">
                      <span className="my-added-date">儲存於 {new Date(recipe.added_at).toLocaleDateString('zh-TW')}</span>
                      <button
                        className="my-delete-btn"
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          if (!window.confirm('確定要刪除這份食譜嗎？')) return;
                          deleteMyRecipe(recipe.my_id);
                          onDelete();
                        }}
                      >
                        刪除
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
