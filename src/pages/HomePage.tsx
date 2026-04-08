import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { METHOD_TYPES } from '../domain/cookingMethods';
import {
  INGREDIENT_CATEGORIES,
  INGREDIENT_TAG_COLORS,
  INGREDIENT_TASTES,
  INGREDIENT_TEXTURES
} from '../domain/ingredients';
import { CATEGORY_LIST, CUISINE_LIST, MEALTYPE_LIST } from '../domain/recipesCatalog';
import { getActiveFilterCount, getFilteredRecipes } from '../domain/helpers/filter';
import { estimateIngredientCalories } from '../domain/helpers/servings';
import { baseJoin } from '../domain/recipeApi';
import type { FilterState, RecipeIndexEntry } from '../domain/types';

interface HomePageProps {
  recipes: RecipeIndexEntry[];
  loading: boolean;
  onOpenKitchenPanel: () => void;
}

const createSet = (): Set<string> => new Set<string>();

function toggleInSet(value: string, set: Set<string>): Set<string> {
  const next = new Set(set);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export default function HomePage({ recipes, loading, onOpenKitchenPanel }: HomePageProps) {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [cuisines, setCuisines] = useState(createSet);
  const [mealTypes, setMealTypes] = useState(createSet);
  const [categories, setCategories] = useState(createSet);
  const [recipeTags, setRecipeTags] = useState(createSet);
  const [ingTags, setIngTags] = useState(createSet);
  const [methodTypes, setMethodTypes] = useState(createSet);
  const [tastes, setTastes] = useState(createSet);
  const [textures, setTextures] = useState(createSet);

  const filters = useMemo<FilterState>(
    () => ({
      search,
      cuisines,
      mealTypes,
      categories,
      recipeTags,
      ingTags,
      methodTypes,
      tastes,
      textures
    }),
    [search, cuisines, mealTypes, categories, recipeTags, ingTags, methodTypes, tastes, textures]
  );

  const recipeTagOptions = useMemo(() => {
    return [...new Set(recipes.flatMap((recipe) => recipe.tags || []))].sort((a, b) => a.localeCompare(b));
  }, [recipes]);

  const ingTagOptions = useMemo(() => {
    return INGREDIENT_CATEGORIES.filter((category) => {
      return recipes.some((recipe) => recipe.ingredient_ids?.some((id) => id.includes(category) || false));
    });
  }, [recipes]);

  const filteredRecipes = useMemo(() => getFilteredRecipes(recipes, filters), [recipes, filters]);
  const activeFilterCount = useMemo(() => getActiveFilterCount(filters), [filters]);

  const clearAllFilters = (): void => {
    setSearch('');
    setCuisines(new Set());
    setMealTypes(new Set());
    setCategories(new Set());
    setRecipeTags(new Set());
    setIngTags(new Set());
    setMethodTypes(new Set());
    setTastes(new Set());
    setTextures(new Set());
  };

  return (
    <div className="page-view active" id="view-home">
      <div className="topbar" style={{ display: 'flex' }}>
        <div className="search-wrap">
          <span className="search-icon">SR</span>
          <input
            type="search"
            id="search-input"
            placeholder="搜尋食譜、食材、分類..."
            autoComplete="off"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <button
          className={`filter-toggle-btn ${filterOpen ? 'active' : ''}`}
          id="filter-toggle-btn"
          type="button"
          onClick={() => setFilterOpen((current) => !current)}
        >
          <span>篩選</span>
          <span className="filter-toggle-icon">FL</span>
          <span
            className="filter-badge"
            id="filter-toggle-badge"
            style={{ display: activeFilterCount > 0 ? 'flex' : 'none' }}
          >
            {activeFilterCount > 0 ? activeFilterCount : ''}
          </span>
        </button>

        <button className="kitchen-toggle-btn" id="kitchen-toggle-btn" type="button" onClick={onOpenKitchenPanel}>
          <span className="kitchen-toggle-icon">KT</span>
          <span>廚房</span>
        </button>

        <span className="count-badge" id="count-badge">
          {loading ? '載入中...' : `${filteredRecipes.length} 道食譜`}
        </span>
      </div>

      <div className={`filter-panel ${filterOpen ? 'open' : ''}`} id="filter-panel">
        <div className="filter-section">
          <div className="filter-section-title">菜系</div>
          <div className="filter-chips">
            {CUISINE_LIST.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-chip ${cuisines.has(value) ? 'active' : ''}`}
                onClick={() => setCuisines((current) => toggleInSet(value, current))}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-title">餐點類型</div>
          <div className="filter-chips">
            {MEALTYPE_LIST.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-chip ${mealTypes.has(value) ? 'active' : ''}`}
                onClick={() => setMealTypes((current) => toggleInSet(value, current))}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-title">分類</div>
          <div className="filter-chips">
            {CATEGORY_LIST.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-chip ${categories.has(value) ? 'active' : ''}`}
                onClick={() => setCategories((current) => toggleInSet(value, current))}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-title">烹飪方式</div>
          <div className="filter-chips">
            {Object.entries(METHOD_TYPES).map(([methodId, label]) => (
              <button
                key={methodId}
                type="button"
                className={`filter-chip ${methodTypes.has(methodId) ? 'active' : ''}`}
                onClick={() => setMethodTypes((current) => toggleInSet(methodId, current))}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-title">食材標籤</div>
          <div className="filter-chips">
            {(ingTagOptions.length ? ingTagOptions : INGREDIENT_CATEGORIES).map((tag) => {
              const colors = INGREDIENT_TAG_COLORS[tag] || { bg: '', border: '', text: '' };
              return (
                <button
                  key={tag}
                  type="button"
                  className={`filter-chip ${ingTags.has(tag) ? 'active' : ''}`}
                  style={colors.bg ? { background: colors.bg, borderColor: colors.border, color: colors.text } : {}}
                  onClick={() => setIngTags((current) => toggleInSet(tag, current))}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-title">口味</div>
          <div className="filter-chips">
            {INGREDIENT_TASTES.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-chip ${tastes.has(value) ? 'active' : ''}`}
                onClick={() => setTastes((current) => toggleInSet(value, current))}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-title">口感</div>
          <div className="filter-chips">
            {INGREDIENT_TEXTURES.map((value) => (
              <button
                key={value}
                type="button"
                className={`filter-chip ${textures.has(value) ? 'active' : ''}`}
                onClick={() => setTextures((current) => toggleInSet(value, current))}
              >
                {value}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-section-title">食譜標籤</div>
          <div className="filter-chips">
            {recipeTagOptions.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`filter-chip ${recipeTags.has(tag) ? 'active' : ''}`}
                onClick={() => setRecipeTags((current) => toggleInSet(tag, current))}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-actions">
          <button className="filter-clear-btn" type="button" onClick={clearAllFilters}>
            清除篩選
          </button>
        </div>
      </div>

      <div id="active-filter-summary" style={{ margin: '0 28px 10px' }}>
        {activeFilterCount > 0 && (
          <div className="card-tags">
            <span className="tag">已套用 {activeFilterCount} 個篩選條件</span>
          </div>
        )}
      </div>

      <div className="recipe-grid" id="recipe-grid">
        {!loading && filteredRecipes.length === 0 && (
          <div className="empty-state" style={{ gridColumn: '1 / -1' }}>
            <div className="empty-icon">NA</div>
            <p>找不到符合的食譜</p>
            <button className="filter-clear-btn" type="button" style={{ marginTop: 12 }} onClick={clearAllFilters}>
              重置
            </button>
          </div>
        )}

        {!loading &&
          filteredRecipes.map((recipe) => {
            const calories = Math.round(
              (recipe.ingredients || []).reduce((sum, ingredient) => {
                return sum + estimateIngredientCalories(ingredient, recipe.base_servings, recipe.base_servings);
              }, 0)
            );

            return (
              <button
                key={recipe.id}
                type="button"
                className="recipe-card"
                style={{ textAlign: 'left' }}
                onClick={() => navigate(`/recipes/${recipe.id}`)}
              >
                <div className="card-image-wrap">
                  <img src={baseJoin(recipe.image)} alt={recipe.title} loading="lazy" />
                  <div className="card-image-overlay" />
                  <span className="card-category">{recipe.category}</span>
                  <span className="card-difficulty">{recipe.difficulty}</span>
                </div>
                <div className="card-body">
                  <div className="card-title">{recipe.title}</div>
                  <div className="card-subtitle">{recipe.subtitle}</div>
                  <div className="card-cuisine-row">
                    <span className="cuisine-badge">{recipe.cuisine}</span>
                    <span className="mealtype-badge">{recipe.meal_type}</span>
                  </div>
                  <div className="card-desc">{recipe.description}</div>
                  <div className="card-meta">
                    <div className="card-meta-item">
                      <span>TM</span>
                      <span>{recipe.time_estimate}</span>
                    </div>
                    <div className="card-meta-item">
                      <span>SV</span>
                      <span>{recipe.base_servings} 人份</span>
                    </div>
                    {calories > 0 && (
                      <div className="card-meta-item card-meta-cals">
                        <span>CL</span>
                        <span>{calories} kcal</span>
                      </div>
                    )}
                  </div>
                  <div className="card-tags">
                    {recipe.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            );
          })}
      </div>
    </div>
  );
}
