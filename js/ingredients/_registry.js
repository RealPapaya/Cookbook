/**
 * @fileoverview 食材資料聚合器（Registry）
 *
 * 這個檔案負責：
 *  1. 匯入所有分類檔的食材陣列，合併成統一的 INGREDIENTS[]
 *  2. 建立 Map 以支援 O(1) 查詢（未來有數百個食材也不會變慢）
 *  3. 重新匯出常數，讓其他檔案只需 import 這一個模組
 *
 * ──────────────────────────────────────────
 * 新增食材的方式（一律在分類檔修改，不動這裡）：
 *   1. 找到對應的分類檔（如 spice.js）
 *   2. 在陣列末尾追加一個 Ingredient 物件（tier-1 只需 5 個欄位）
 *   3. 完成！這個 registry 會自動包含新食材
 * ──────────────────────────────────────────
 */

// ── 常數（重新匯出） ──────────────────────────────────────
export {
  PROCESSING_STATES,
  INGREDIENT_CATEGORIES,
  ALLERGENS,
  INGREDIENT_TAG_COLORS,
} from './_constants.js';

// ── 各分類食材匯入 ────────────────────────────────────────
import staple    from './staple.js';
import protein   from './protein.js';
import dairy     from './dairy.js';
import vegetable from './vegetable.js';
import seasoning from './seasoning.js';
import spice     from './spice.js';
import oil       from './oil.js';
import fermented from './fermented.js';
import other     from './other.js';

// ── 合併陣列 ──────────────────────────────────────────────

/**
 * 所有食材的統一陣列
 * 外部程式碼只需 import { INGREDIENTS } from './ingredients/_registry.js'
 * @type {import('./_constants.js').Ingredient[]}
 */
export const INGREDIENTS = [
  ...staple,
  ...protein,
  ...dairy,
  ...vegetable,
  ...seasoning,
  ...spice,
  ...oil,
  ...fermented,
  ...other,
];

// ── 查詢索引（Map for O(1) lookup） ─────────────────────

/** @type {Map<string, import('./_constants.js').Ingredient>} */
const _byId = new Map(INGREDIENTS.map(i => [i.id, i]));

/**
 * 以 variant id 為 key 的查詢 Map
 * @type {Map<string, { ingredient: import('./_constants.js').Ingredient, variant: import('./_constants.js').IngredientVariant }>}
 */
const _byVariantId = new Map();
for (const ing of INGREDIENTS) {
  for (const v of ing.variants) {
    _byVariantId.set(v.id, { ingredient: ing, variant: v });
  }
}

// ── 查詢函式 ──────────────────────────────────────────────

/**
 * 依 base id 查詢食材
 * @param {string} id
 * @returns {import('./_constants.js').Ingredient|undefined}
 */
export function getIngredient(id) {
  return _byId.get(id);
}

/**
 * 依 variant id 查詢食材與對應變體
 * @param {string} variantId  格式：{base_id}--{state}
 * @returns {{ ingredient: import('./_constants.js').Ingredient, variant: import('./_constants.js').IngredientVariant }|undefined}
 */
export function getIngredientByVariant(variantId) {
  return _byVariantId.get(variantId);
}

/**
 * 取得某食材的所有可替換食材物件
 * @param {string} id
 * @returns {import('./_constants.js').Ingredient[]}
 */
export function getSubstitutes(id) {
  const ing = _byId.get(id);
  if (!ing || !ing.substitutes) return [];
  return ing.substitutes.map(sid => _byId.get(sid)).filter(Boolean);
}
