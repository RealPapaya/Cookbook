import { useMemo, useState } from 'react';
import { INGREDIENTS, INGREDIENT_CATEGORIES, INGREDIENT_TAG_COLORS } from '../domain/ingredients';
import { getKitchenResults } from '../domain/helpers/kitchen';
import { baseJoin } from '../domain/recipeApi';
import type { Ingredient, RecipeIndexEntry } from '../domain/types';

interface KitchenPanelProps {
  open: boolean;
  recipes: RecipeIndexEntry[];
  onClose: () => void;
  onSelectRecipe: (recipeId: number) => void;
}

function groupIngredientsByCategory(ingredients: Ingredient[]): Record<string, Ingredient[]> {
  const grouped: Record<string, Ingredient[]> = {};
  INGREDIENT_CATEGORIES.forEach((category) => {
    grouped[category] = [];
  });

  const deduped = [...new Map(ingredients.map((ingredient) => [ingredient.id, ingredient])).values()];
  deduped.forEach((ingredient) => {
    ingredient.categories.forEach((category) => {
      if (!grouped[category]) grouped[category] = [];
      grouped[category].push(ingredient);
    });
  });

  return grouped;
}

export default function KitchenPanel({ open, recipes, onClose, onSelectRecipe }: KitchenPanelProps) {
  const [search, setSearch] = useState('');
  const [selectedIngredients, setSelectedIngredients] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const groupedIngredients = useMemo(() => groupIngredientsByCategory(INGREDIENTS), []);

  const filteredGrouped = useMemo(() => {
    const q = search.trim().toLowerCase();
    const result: Record<string, Ingredient[]> = {};

    Object.entries(groupedIngredients).forEach(([category, list]: [string, Ingredient[]]) => {
      const filtered = q ? list.filter((ingredient) => ingredient.name.toLowerCase().includes(q)) : list;
      if (filtered.length > 0) result[category] = filtered;
    });

    return result;
  }, [groupedIngredients, search]);

  const results = useMemo(() => {
    return getKitchenResults(recipes, selectedIngredients);
  }, [recipes, selectedIngredients]);

  const selectedList = useMemo(() => {
    const map = new Map<string, string>();
    INGREDIENTS.forEach((ingredient) => {
      if (selectedIngredients.has(ingredient.id)) {
        map.set(ingredient.id, ingredient.name);
      }
    });
    return [...map.entries()].map(([id, name]) => ({ id, name }));
  }, [selectedIngredients]);

  const toggleIngredient = (ingredientId: string): void => {
    setSelectedIngredients((current) => {
      const next = new Set(current);
      if (next.has(ingredientId)) next.delete(ingredientId);
      else next.add(ingredientId);
      return next;
    });
  };

  return (
    <div id="kitchen-panel" className={`kitchen-panel ${open ? 'open' : ''}`}>
      <div className="kitchen-topbar">
        <div className="kitchen-title-area">
          <span className="kitchen-title">智能廚房</span>
          <span className="kitchen-subtitle">選擇手邊有的食材，快速找出能做的料理。</span>
        </div>
        <button className="kitchen-close-btn" type="button" onClick={onClose}>
          關閉
        </button>
      </div>

      <div className="kitchen-body">
        <div className="kitchen-left">
          <div className="kitchen-left-header">
            <div className="kitchen-left-title">食材分類</div>
            <div className="kitchen-expand-ctrls">
              <button
                className="kitchen-exp-btn"
                type="button"
                onClick={() => {
                  setExpanded(new Set(Object.keys(filteredGrouped)));
                }}
              >
                全部展開
              </button>
              <button className="kitchen-exp-btn" type="button" onClick={() => setExpanded(new Set())}>
                全部收合
              </button>
            </div>
          </div>

          <div className="search-wrap" style={{ marginBottom: 16, padding: '0 20px' }}>
            <span className="search-icon" style={{ left: 34 }}>
              SR
            </span>
            <input
              type="search"
              id="kitchen-search-input"
              placeholder="搜尋食材名稱..."
              autoComplete="off"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>

          <div id="kitchen-categories">
            {Object.entries(filteredGrouped).map(([category, list]: [string, Ingredient[]]) => {
              const opened = expanded.has(category);
              const colors = (INGREDIENT_TAG_COLORS[category] || {}) as { border?: string };

              return (
                <div key={category} className={`kitchen-accordion ${opened ? 'open' : ''}`}>
                  <button
                    className="kitchen-acc-header"
                    type="button"
                    onClick={() => {
                      setExpanded((current) => {
                        const next = new Set(current);
                        if (next.has(category)) next.delete(category);
                        else next.add(category);
                        return next;
                      });
                    }}
                  >
                    <span className="kitchen-acc-cat">
                      <span className="kitchen-acc-dot" style={{ background: colors.border || 'var(--accent)' }} />
                      {category}
                      <span className="kitchen-acc-count">{list.length}</span>
                    </span>
                    <span className="kitchen-acc-arrow">v</span>
                  </button>

                  <div className="kitchen-acc-body">
                    <div className="kitchen-ing-chips">
                      {list.map((ingredient) => {
                        const active = selectedIngredients.has(ingredient.id);
                        return (
                          <button
                            key={ingredient.id}
                            className={`kitchen-ing-chip ${active ? 'active' : ''}`}
                            type="button"
                            onClick={() => toggleIngredient(ingredient.id)}
                          >
                            {ingredient.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="kitchen-right" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflowY: 'hidden' }}>
          <div
            className="kitchen-selected-bar"
            id="kitchen-selected-bar"
            style={{ display: selectedList.length > 0 ? 'flex' : 'none', padding: '12px 24px' }}
          >
            <span className="kitchen-sel-label">已選：</span>
            <div className="kitchen-sel-chips" id="kitchen-sel-chips">
              {selectedList.map((item) => (
                <span
                  key={item.id}
                  className="kitchen-sel-chip"
                  role="button"
                  tabIndex={0}
                  onClick={() => toggleIngredient(item.id)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') toggleIngredient(item.id);
                  }}
                >
                  {item.name} x
                </span>
              ))}
            </div>
            <button
              className="kitchen-clear-sel"
              type="button"
              onClick={() => {
                setSelectedIngredients(new Set());
              }}
            >
              清除
            </button>
          </div>

          <div id="kitchen-results-area" style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
            {results.length === 0 ? (
              <div className="kitchen-placeholder">
                <div className="kitchen-placeholder-icon"></div>
                <p>選擇食材後，這裡會顯示能做的料理</p>
              </div>
            ) : (
              <>
                <div className="kitchen-results-header">
                  找到 <strong>{results.length}</strong> 道相關食譜
                </div>
                <div className="kitchen-results-list">
                  {results.map(({ recipe, matchCount, recipeTotal }) => (
                    <button
                      key={recipe.id}
                      type="button"
                      className="kitchen-result-card"
                      style={{ textAlign: 'left' }}
                      onClick={() => onSelectRecipe(recipe.id)}
                    >
                      <div className="kitchen-result-img">
                        <img src={baseJoin(recipe.image)} alt={recipe.title} loading="lazy" />
                      </div>
                      <div className="kitchen-result-info">
                        <div className="kitchen-result-title">{recipe.title}</div>
                        <div className="kitchen-result-meta">
                          {recipe.cuisine} | {recipe.time_estimate} | {recipe.difficulty}
                        </div>
                        <div className="kitchen-match-wrap">
                          <div className="kitchen-match-bar">
                            <div
                              className="kitchen-match-fill"
                              style={{ width: `${Math.round((matchCount / recipeTotal) * 100)}%` }}
                            />
                          </div>
                          <span className="kitchen-match-label">
                            符合 {matchCount}/{recipeTotal} 項食材
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

