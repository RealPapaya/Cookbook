import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getCookingMethod, METHOD_TYPES } from '../domain/cookingMethods';
import { getIngredient, INGREDIENT_TAG_COLORS } from '../domain/ingredients';
import { baseJoin, fetchRecipeDetailById } from '../domain/recipeApi';
import { aggregateNutrition, estimateIngredientCalories, estimateScaledTime, formatQty, scaleQty } from '../domain/helpers/servings';
import type { RecipeDetail, RecipeIngredientRef } from '../domain/types';

function getIngredientName(ref: RecipeIngredientRef): string {
  return getIngredient(ref.ingredient_id)?.name || ref.ingredient_id;
}

function getIngredientVariantLabel(ref: RecipeIngredientRef): string | null {
  const ingredient = getIngredient(ref.ingredient_id);
  if (!ingredient) return null;
  const variant = ingredient.variants.find((item) => item.id === ref.variant_id);
  if (!variant || variant.label === ingredient.name) return null;
  return variant.label;
}

function getIngredientCategories(ref: RecipeIngredientRef): string[] {
  return getIngredient(ref.ingredient_id)?.categories || [];
}

export default function RecipeDetailPage() {
  const navigate = useNavigate();
  const params = useParams();
  const recipeId = Number(params.recipeId || 0);

  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState<RecipeDetail | null>(null);
  const [servings, setServings] = useState(1);
  const [versionId, setVersionId] = useState<string | null>(null);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [doneSteps, setDoneSteps] = useState<Set<number>>(new Set());
  const [nutritionOpen, setNutritionOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchRecipeDetailById(recipeId)
      .then((data) => {
        if (!mounted) return;
        setRecipe(data);
        if (data) {
          setServings(1);
          setVersionId(data.versions[0]?.id || null);
        }
        setCheckedIngredients(new Set());
        setDoneSteps(new Set());
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, [recipeId]);

  const currentVersion = useMemo(() => {
    if (!recipe) return null;
    return recipe.versions.find((version) => version.id === versionId) || recipe.versions[0] || null;
  }, [recipe, versionId]);

  const ratio = recipe ? servings / recipe.base_servings : 1;
  const stepTotal = currentVersion?.steps.length || 0;

  const methodTags = useMemo(() => {
    if (!currentVersion) return [];
    const set = new Set<string>();
    currentVersion.steps.forEach((step) => {
      if (!step.method_id) return;
      const method = getCookingMethod(step.method_id);
      if (!method) return;
      set.add(METHOD_TYPES[method.type] || method.type);
    });
    return [...set];
  }, [currentVersion]);

  const totalCalories = useMemo(() => {
    if (!recipe) return 0;
    return Math.round(
      recipe.ingredients.reduce((sum, ingredient) => {
        return sum + estimateIngredientCalories(ingredient, recipe.base_servings, servings);
      }, 0)
    );
  }, [recipe, servings]);

  const nutrition = useMemo(() => {
    if (!recipe) return { calories: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, sodium: 0 };
    return aggregateNutrition(recipe, servings);
  }, [recipe, servings]);

  if (loading) {
    return (
      <div className="page-view active" id="view-detail">
        <div className="empty-state" style={{ marginTop: 80 }}>
          <div className="empty-icon"></div>
          <p>載入食譜中...</p>
        </div>
      </div>
    );
  }

  if (!recipe || !currentVersion) {
    return (
      <div className="page-view active" id="view-detail">
        <div className="empty-state" style={{ marginTop: 80 }}>
          <div className="empty-icon"></div>
          <p>找不到該食譜。</p>
          <button className="filter-clear-btn" type="button" style={{ marginTop: 10 }} onClick={() => navigate('/')}>
            回到首頁
          </button>
        </div>
      </div>
    );
  }

  const scaledTime = estimateScaledTime(recipe.time_estimate, ratio);
  const difficultyLabels = ['簡單', '中等', '困難', '極難', '地獄'];
  const difficultyIndex = Math.max(0, difficultyLabels.indexOf(recipe.difficulty));

  // logarithmic scaling: grows fast at first but flattens significantly at large servings
  // ratio=1 => shift=0, ratio=2 => shift~1, ratio=4 => shift~2, ratio=8 => shift~3
  const logShift = Math.log2(ratio) * 0.8;
  const scaledIndex = Math.min(difficultyLabels.length - 1, difficultyIndex + logShift);
  const currentDifficulty = difficultyLabels[Math.round(scaledIndex)];
  const difficultyPct = Math.min(100, Math.round((scaledIndex / (difficultyLabels.length - 1)) * 100));

  return (
    <div className="page-view active" id="view-detail">
      <button className="detail-back" type="button" onClick={() => navigate('/')}>
        回到首頁
      </button>

      <div className="detail-hero">
        <img src={baseJoin(recipe.image)} alt={recipe.title} />
        <div className="detail-hero-overlay">
          <div className="detail-title">{recipe.title}</div>
          <div className="detail-subtitle">{recipe.subtitle}</div>
        </div>
      </div>

      <div className="detail-info-panel">
        <div className="detail-panel-row detail-panel-row--top">
          <div className="detail-badges">
            <span className="category-badge">{recipe.category}</span>
            <span className="cuisine-badge">{recipe.cuisine}</span>
            <span className="mealtype-badge">{recipe.meal_type}</span>
          </div>
          <div className="servings-ctrl">
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginRight: 4 }}>份量</span>
            <button className="srv-btn" type="button" onClick={() => setServings((value) => Math.max(1, value - 1))}>-</button>
            <span className="srv-num" id="srv-display">{servings}</span>
            <button className="srv-btn" type="button" onClick={() => setServings((value) => Math.min(50, value + 1))}>+</button>
          </div>
        </div>

        <div className="detail-panel-row detail-panel-row--bars">
          <div className="detail-bar-item">
            <div className="detail-bar-label">
              <span>時間</span>
              <span className="detail-bar-value">{scaledTime} 分鐘</span>
            </div>
            <div className="detail-bar-track">
              <div
                className="detail-bar-fill"
                style={{ width: `${Math.min(100, Math.round((scaledTime / 60) * 100))}%`, background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }}
              />
            </div>
          </div>

          <div className="detail-bar-item">
            <div className="detail-bar-label">
              <span>難度</span>
              <span className="detail-bar-value">{currentDifficulty}</span>
            </div>
            <div className="detail-bar-track">
              <div
                className="detail-bar-fill"
                style={{ 
                  width: `${Math.max(5, difficultyPct)}%`, 
                  background: difficultyPct <= 30 ? '#4ade80' : difficultyPct <= 55 ? 'var(--accent)' : difficultyPct <= 80 ? '#f97316' : '#f87171' 
                }}
              />
            </div>
          </div>
        </div>

        <div
          className="nutrition-accordion-toggle detail-panel-row"
          role="button"
          tabIndex={0}
          onClick={() => setNutritionOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') setNutritionOpen((open) => !open);
          }}
        >
          <div className="nutrition-summary-head">
            <span className="nutr-title">{servings} 人份營養標示</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontSize: '.9rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>
                {totalCalories > 0 ? `${totalCalories} kcal` : '--'}
              </span>
            </div>
          </div>
          <span className="nutr-expand-icon" style={{ fontSize: '.75rem', color: 'var(--accent)' }}>
            {nutritionOpen ? '隱藏' : '展開'}
          </span>
        </div>

        {nutritionOpen && (
          <div className="nutrition-panel detail-panel-row" style={{ background: 'rgba(255,255,255,0.015)', paddingTop: 16 }}>
            <div className="nutr-grid">
              <div className="nutr-item"><span className="nutr-val">{Math.round(nutrition.calories)}</span><span className="nutr-label">大卡</span></div>
              <div className="nutr-item"><span className="nutr-val">{nutrition.protein.toFixed(1)}</span><span className="nutr-label">蛋白質 (g)</span></div>
              <div className="nutr-item"><span className="nutr-val">{nutrition.fat.toFixed(1)}</span><span className="nutr-label">脂肪 (g)</span></div>
              <div className="nutr-item"><span className="nutr-val">{nutrition.carbs.toFixed(1)}</span><span className="nutr-label">碳水 (g)</span></div>
              {nutrition.fiber > 0 && <div className="nutr-item"><span className="nutr-val">{nutrition.fiber.toFixed(1)}</span><span className="nutr-label">纖維 (g)</span></div>}
              {nutrition.sodium > 0 && <div className="nutr-item"><span className="nutr-val">{Math.round(nutrition.sodium)}</span><span className="nutr-label">鈉 (mg)</span></div>}
            </div>
          </div>
        )}

        <div className="detail-panel-row">
          <div className="detail-tag-section">
            <span className="detail-tag-label">烹調方式</span>
            <div className="detail-tag-list">
              {methodTags.length === 0 ? <span className="detail-tag-none">無</span> : methodTags.map((tag) => <span key={tag} className="detail-tag detail-tag--method">{tag}</span>)}
            </div>
          </div>
        </div>
      </div>

      <div className="detail-desc">{recipe.description}</div>

      <div className="section-title">食材</div>
      <div className="ingredients-grid" id="ing-grid">
        {recipe.ingredients.map((ingredientRef, index) => {
          const scaledQty = ingredientRef.scalable ? scaleQty(ingredientRef.qty, recipe.base_servings, servings) : ingredientRef.qty;
          const checked = checkedIngredients.has(index);
          const categories = getIngredientCategories(ingredientRef);
          const variantLabel = getIngredientVariantLabel(ingredientRef);
          const calories = estimateIngredientCalories(ingredientRef, recipe.base_servings, servings);

          return (
            <button
              key={`${ingredientRef.ingredient_id}_${index}`}
              type="button"
              className={`ingredient-item ${checked ? 'checked' : ''}`}
              id={`ing-${index}`}
              style={{ textAlign: 'left' }}
              onClick={() => {
                setCheckedIngredients((current) => {
                  const next = new Set(current);
                  if (next.has(index)) next.delete(index);
                  else next.add(index);
                  return next;
                });
              }}
            >
              <div className="ingredient-left">
                <div className="ing-check">{checked ? 'v' : ''}</div>
                <div className="ing-info">
                  <div className="ing-name-wrap">
                    <span className="ing-name">{getIngredientName(ingredientRef)}</span>
                    {ingredientRef.is_seasoning ? <span className="ing-star">*</span> : null}
                  </div>
                  {variantLabel ? <span className="ing-variant">{variantLabel}</span> : null}
                  <div className="ing-tags">
                    {categories.map((category) => {
                      const color = INGREDIENT_TAG_COLORS[category];
                      return (
                        <span key={`${ingredientRef.ingredient_id}_${category}`} className="ing-tag" style={color ? { background: color.bg, borderColor: color.border, color: color.text } : {}}>
                          {category}
                        </span>
                      );
                    })}
                    {ingredientRef.optional ? <span className="ing-tag" style={{ opacity: 0.6 }}>可選</span> : null}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                <span className={`ing-amount ${ingredientRef.scalable ? 'scalable' : ''}`} id={`ing-amount-${index}`}>
                  {formatQty(scaledQty, ingredientRef.unit, ingredientRef.unit_note)}
                </span>
                {calories > 0 && <span className="ing-cal-meta">{Math.round(calories)} kcal</span>}
              </div>
            </button>
          );
        })}
      </div>

      {recipe.versions.length > 1 && (
        <div className="version-tabs">
          {recipe.versions.map((version) => (
            <button key={version.id} type="button" className={`version-tab ${version.id === currentVersion.id ? 'active' : ''}`} onClick={() => { setVersionId(version.id); setDoneSteps(new Set()); }}>
              {version.label}
            </button>
          ))}
        </div>
      )}

      <div className="progress-wrap">
        <div className="progress-label"><span>步驟進度</span><span id="step-progress-text">{doneSteps.size} / {stepTotal}</span></div>
        <div className="progress-bar"><div className="progress-fill" id="step-progress-fill" style={{ width: `${stepTotal ? Math.round((doneSteps.size / stepTotal) * 100) : 0}%` }} /></div>
      </div>

      <div className="section-title">步驟</div>

      <div className="steps-list" id="steps-list">
        {currentVersion.steps.map((step, index) => {
          const done = doneSteps.has(index);
          const method = step.method_id ? getCookingMethod(step.method_id) : undefined;

          return (
            <button
              key={`${step.order}_${index}`}
              type="button"
              className={`step-item ${done ? 'done' : ''}`}
              id={`step-${index}`}
              style={{ textAlign: 'left' }}
              onClick={() => {
                setDoneSteps((current) => {
                  const next = new Set(current);
                  if (next.has(index)) next.delete(index);
                  else next.add(index);
                  return next;
                });
              }}
            >
              <div className="step-num" id={`step-num-${index}`}>{done ? 'v' : step.order}</div>
              <div className="step-content">
                <div className="step-text">{step.instruction}</div>
                {method ? (
                  <div className="step-method">
                    <span className="method-badge">{method.name}</span>
                    {step.duration_s ? <span className="method-time">{Math.ceil(step.duration_s / 60)} min</span> : null}
                    {method.params?.vessel ? <span className="method-vessel">{method.params.vessel}</span> : null}
                    {method.safety_note ? <span className="method-safety">CAUTION {method.safety_note}</span> : null}
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>

      {recipe.tips ? (
        <div className="tips-box">
          <div className="tips-label">小撇步</div>
          <p>{recipe.tips}</p>
        </div>
      ) : null}

      <div className="card-tags" style={{ marginBottom: 40 }}>
        {recipe.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

