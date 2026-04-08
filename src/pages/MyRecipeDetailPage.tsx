import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { loadMyRecipes } from '../domain/myRecipes';
import type { MyRecipe } from '../domain/types';

interface MyRecipeDetailPageProps {
  recipes: MyRecipe[];
}

export default function MyRecipeDetailPage({ recipes }: MyRecipeDetailPageProps) {
  const navigate = useNavigate();
  const params = useParams();

  const recipe = useMemo(() => {
    const myId = params.myRecipeId || '';
    return recipes.find((item) => item.my_id === myId) || loadMyRecipes().find((item) => item.my_id === myId);
  }, [params.myRecipeId, recipes]);

  if (!recipe) {
    return (
      <div className="page-view active" id="view-my-detail">
        <div className="empty-state" style={{ marginTop: 80 }}>
          <div className="empty-icon">ERR</div>
          <p>Custom recipe not found.</p>
          <button className="filter-clear-btn" type="button" style={{ marginTop: 12 }} onClick={() => navigate('/my-recipes')}>
            Back to My Recipes
          </button>
        </div>
      </div>
    );
  }

  const ingredientLines = (recipe.source === 'custom' ? recipe.text_ingredients : '')?.split('\n').filter(Boolean) || [];
  const stepLines = (recipe.source === 'custom' ? recipe.text_steps : '')?.split('\n').filter(Boolean) || [];

  return (
    <div className="page-view active" id="view-my-detail">
      <button className="detail-back" type="button" onClick={() => navigate('/my-recipes')}>
        Back to My Recipes
      </button>

      <div className={`detail-hero ${!recipe.image ? 'detail-hero-placeholder' : ''}`}>
        {recipe.image ? <img src={recipe.image} alt={recipe.title} /> : <div className="detail-placeholder-bg">TXT</div>}
        <div className="detail-hero-overlay">
          <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
            {recipe.category ? <span className="category-badge">{recipe.category}</span> : null}
            {recipe.cuisine ? <span className="cuisine-badge">{recipe.cuisine}</span> : null}
            {recipe.meal_type ? <span className="mealtype-badge">{recipe.meal_type}</span> : null}
            <span className="my-source-badge source-custom">Custom</span>
          </div>
          <div className="detail-title">{recipe.title}</div>
          {recipe.subtitle ? <div className="detail-subtitle">{recipe.subtitle}</div> : null}
        </div>
      </div>

      <div className="detail-meta-row">
        {recipe.time_estimate ? (
          <div className="detail-meta-item">
            <span className="meta-label">Time</span>
            <span className="meta-value">{recipe.time_estimate}</span>
          </div>
        ) : null}
        {recipe.difficulty ? (
          <div className="detail-meta-item">
            <span className="meta-label">Difficulty</span>
            <span className="meta-value">{recipe.difficulty}</span>
          </div>
        ) : null}
        {recipe.base_servings ? (
          <div className="detail-meta-item">
            <span className="meta-label">Servings</span>
            <span className="meta-value">{recipe.base_servings}</span>
          </div>
        ) : null}
      </div>

      {recipe.description ? <div className="detail-desc">{recipe.description}</div> : null}

      {ingredientLines.length > 0 ? (
        <>
          <div className="section-title">Ingredients</div>
          <div className="my-ingredient-list">
            {ingredientLines.map((line) => (
              <div key={line} className="my-ingredient-item">
                {line}
              </div>
            ))}
          </div>
        </>
      ) : null}

      {stepLines.length > 0 ? (
        <>
          <div className="section-title">Steps</div>
          <div className="steps-list" style={{ marginBottom: 28 }}>
            {stepLines.map((line, index) => (
              <div key={`${line}_${index}`} className="step-item">
                <div className="step-num">{index + 1}</div>
                <div className="step-content">
                  <div className="step-text">{line}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}

      {recipe.source === 'custom' && recipe.tips ? (
        <div className="tips-box">
          <div className="tips-label">Tips</div>
          <p>{recipe.tips}</p>
        </div>
      ) : null}

      {(recipe.tags || []).length > 0 ? (
        <div className="card-tags" style={{ marginBottom: 40 }}>
          {(recipe.tags || []).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

