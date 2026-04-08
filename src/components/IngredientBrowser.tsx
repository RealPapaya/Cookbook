import { useMemo, useState } from 'react';
import { INGREDIENTS, INGREDIENT_CATEGORIES, INGREDIENT_TAG_COLORS, getSubstitutes } from '../domain/ingredients';
import type { Ingredient, IngredientVariant } from '../domain/types';

function NutritionRow({ label, value, unit }: { label: string; value: number | undefined; unit: string }) {
  if (!value) return null;
  return (
    <div className="ing-browser-nutr-row">
      <span className="ing-browser-nutr-label">{label}</span>
      <span className="ing-browser-nutr-val">{value.toFixed(1)} {unit}</span>
    </div>
  );
}

function VariantBadge({ variant }: { variant: IngredientVariant }) {
  return (
    <div className="ing-browser-variant">
      <span className="ing-browser-variant-label">{variant.label}</span>
      <span className="ing-browser-variant-state">{variant.state}</span>
      {variant.yield_ratio !== undefined && variant.yield_ratio !== 1 && (
        <span className="ing-browser-variant-yield">×{variant.yield_ratio.toFixed(2)}</span>
      )}
    </div>
  );
}

function IngredientModal({ ingredient, onClose }: { ingredient: Ingredient; onClose: () => void }) {
  const substitutes = useMemo(() => getSubstitutes(ingredient.id), [ingredient.id]);
  const nutr = ingredient.nutrition_per_100g;

  return (
    <div className="ing-browser-modal-overlay" onClick={onClose} role="button" tabIndex={-1}
      onKeyDown={(e) => { if (e.key === 'Escape') onClose(); }}>
      <div className="ing-browser-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="ing-browser-modal-header">
          <div>
            <div className="ing-browser-modal-title">{ingredient.name}</div>
            {ingredient.name_en && <div className="ing-browser-modal-en">{ingredient.name_en}</div>}
            <div className="ing-browser-modal-cats">
              {ingredient.categories.map((cat) => {
                const color = INGREDIENT_TAG_COLORS[cat];
                return (
                  <span key={cat} className="ing-browser-cat-badge" style={color ? { background: color.bg, borderColor: color.border, color: color.text } : {}}>
                    {cat}
                  </span>
                );
              })}
            </div>
          </div>
          <button className="ing-browser-modal-close" type="button" onClick={onClose}>✕</button>
        </div>

        <div className="ing-browser-modal-body">
          {(ingredient.season || ingredient.storage_tip) && (
            <div className="ing-browser-info-row">
              {ingredient.season && (
                <div className="ing-browser-info-item">
                  <span className="ing-browser-info-label">產季</span>
                  <span className="ing-browser-info-val">{ingredient.season}</span>
                </div>
              )}
              {ingredient.storage_tip && (
                <div className="ing-browser-info-item">
                  <span className="ing-browser-info-label">保存方式</span>
                  <span className="ing-browser-info-val">{ingredient.storage_tip}</span>
                </div>
              )}
            </div>
          )}

          {(ingredient.tastes?.length || ingredient.textures?.length) && (
            <div className="ing-browser-tags-row">
              {ingredient.tastes?.map((t) => (
                <span key={t} className="ing-browser-taste-tag">{t}</span>
              ))}
              {ingredient.textures?.map((t) => (
                <span key={t} className="ing-browser-texture-tag">{t}</span>
              ))}
            </div>
          )}

          {ingredient.allergens?.length ? (
            <div className="ing-browser-allergen-row">
              <span className="ing-browser-allergen-label">⚠️ 過敏原</span>
              {ingredient.allergens.map((a) => (
                <span key={a} className="ing-browser-allergen-tag">{a}</span>
              ))}
            </div>
          ) : null}

          <div className="ing-browser-section-title">變體（Variants）</div>
          <div className="ing-browser-variants">
            {ingredient.variants.map((v) => (
              <VariantBadge key={v.id} variant={v} />
            ))}
          </div>

          {nutr && (
            <>
              <div className="ing-browser-section-title">每 100g 營養素</div>
              <div className="ing-browser-nutr-grid">
                <NutritionRow label="熱量" value={nutr.calories} unit="kcal" />
                <NutritionRow label="蛋白質" value={nutr.protein} unit="g" />
                <NutritionRow label="脂肪" value={nutr.fat} unit="g" />
                <NutritionRow label="碳水化合物" value={nutr.carbs} unit="g" />
                <NutritionRow label="膳食纖維" value={nutr.fiber} unit="g" />
                <NutritionRow label="鈉" value={nutr.sodium} unit="mg" />
              </div>
            </>
          )}

          {substitutes.length > 0 && (
            <>
              <div className="ing-browser-section-title">可替代食材</div>
              <div className="ing-browser-substitutes">
                {substitutes.map((sub) => (
                  <span key={sub.id} className="ing-browser-sub-chip">{sub.name}</span>
                ))}
              </div>
            </>
          )}

          {ingredient.verified_source && (
            <div className="ing-browser-source">
              資料來源：{ingredient.verified_source}
              {ingredient.verified_at && ` (${ingredient.verified_at})`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function IngredientBrowser() {
  const [selectedCat, setSelectedCat] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Ingredient | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return INGREDIENTS.filter((ing) => {
      // 安全防護：確保 categories 是陣列
      if (!Array.isArray(ing.categories)) return false;
      // 分類篩選：必須是非空字串才過濾，null 表示全部
      const catMatch = typeof selectedCat !== 'string' || selectedCat.length === 0
        ? true
        : ing.categories.some(c => c === selectedCat);
      // 搜尋篩選：只比對名稱
      const searchMatch = !q ||
        ing.name.toLowerCase().includes(q) ||
        (ing.name_en?.toLowerCase().includes(q) ?? false);
      return catMatch && searchMatch;
    });
  }, [selectedCat, search]);

  return (
    <div className="ing-browser-section">
      <div className="ing-browser-header">
        <div>
          <div className="ing-browser-title">食材百科</div>
          <div className="ing-browser-subtitle">瀏覽所有食材詳細資訊、變體、營養素與替代食材</div>
        </div>
        <div className="ing-browser-search-wrap">
          <input
            type="search"
            className="ing-browser-search"
            placeholder="搜尋名稱或分類..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && (
            <button className="ing-browser-search-clear" onClick={() => setSearch('')}>✕</button>
          )}
        </div>
      </div>

      <div className="ing-browser-cats">
        <button
          type="button"
          className={`ing-browser-cat-btn ${!selectedCat ? 'active' : ''}`}
          onClick={() => setSelectedCat(null)}
        >
          全部（{INGREDIENTS.length}）
        </button>
        {INGREDIENT_CATEGORIES.map((cat) => {
          const count = INGREDIENTS.filter((i) => i.categories.includes(cat)).length;
          const color = INGREDIENT_TAG_COLORS[cat];
          return (
            <button
              key={cat}
              type="button"
              className={`ing-browser-cat-btn ${selectedCat === cat ? 'active' : ''}`}
              style={selectedCat === cat && color ? { background: color.bg, borderColor: color.border, color: color.text } : {}}
              onClick={() => {
                const next = selectedCat === cat ? null : cat;
                setSelectedCat(next);
                setSearch(''); // 切換分類時清空搜尋
              }}
            >
              {cat}（{count}）
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <div className="ing-browser-empty">找不到「{search}」相關食材</div>
      ) : (
        <div className="ing-browser-grid">
          {filtered.map((ing) => {
            const color = INGREDIENT_TAG_COLORS[ing.categories[0]];
            const hasNutr = !!ing.nutrition_per_100g;
            return (
              <button
                key={ing.id}
                type="button"
                className="ing-browser-card"
                onClick={() => setSelected(ing)}
              >
                <div className="ing-browser-card-top" style={color ? { borderLeftColor: color.border } : {}}>
                  <div className="ing-browser-card-name">{ing.name}</div>
                  {ing.name_en && <div className="ing-browser-card-en">{ing.name_en}</div>}
                </div>
                <div className="ing-browser-card-bottom">
                  <span className="ing-browser-card-variants">{ing.variants.length} 種變體</span>
                  {hasNutr && <span className="ing-browser-card-nutr-dot" title="含有營養素資料">●</span>}
                  {ing.allergens?.length ? <span className="ing-browser-card-allergen">⚠</span> : null}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {selected && <IngredientModal ingredient={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
