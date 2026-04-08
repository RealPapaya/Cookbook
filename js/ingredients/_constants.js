/**
 * @fileoverview 食材系統常數定義
 *
 * 這個檔案定義所有食材相關的常數，包含：
 * - 加工狀態 (PROCESSING_STATES)
 * - 食材分類 (INGREDIENT_CATEGORIES)
 * - 過敏原 (ALLERGENS)
 * - 分類標籤顏色 (INGREDIENT_TAG_COLORS)
 *
 * 如需新增分類，請同時更新 INGREDIENT_CATEGORIES 和 INGREDIENT_TAG_COLORS。
 */

// ============================================================
// 加工狀態
// ============================================================

/** 加工狀態清單（state key → 中文說明） */
export const PROCESSING_STATES = {
  raw:          '生/未加工',
  frozen:       '冷凍',
  dried:        '乾燥/脫水',
  fermented:    '發酵',
  pickled:      '醃漬',
  smoked:       '煙燻',
  canned:       '罐頭',
  minced:       '絞碎',
  sliced:       '切片',
  diced:        '切丁',
  boneless:     '去骨',
  skinless:     '去皮',
  cooked:       '熟/已煮',
  powdered:     '粉狀',
  paste:        '泥/醬狀',
  concentrated: '濃縮',
};

// ============================================================
// 食材分類
// ============================================================

/**
 * 食材分類清單（與 INGREDIENT_TAG_COLORS 一一對應）
 *
 * 每個食材的 categories[] 可包含多個分類。
 * 食材檔案按「主要分類」分配到對應的 category file，
 * 但 categories[] 可列出全部適用的分類以支援多標籤篩選。
 */
export const INGREDIENT_CATEGORIES = [
  '主食',
  '蛋白質',
  '蔬菜',
  '乳製品',
  '調味料',
  '醬汁',
  '香料',
  '油脂',
  '湯底',
  '發酵食品',
  '水',
  '菇類',
  '水果',
];

// ============================================================
// 過敏原
// ============================================================

export const ALLERGENS = [
  'gluten',
  'dairy',
  'egg',
  'soy',
  'peanut',
  'treenut',
  'shellfish',
  'fish',
  'sesame',
];

// ============================================================
// 食材分類標籤顏色
// ============================================================

/**
 * 食材分類 → 標籤配色
 * 每個分類有三個顏色值：bg（背景）、border（邊框）、text（文字）
 *
 * @type {Record<string, { bg: string, border: string, text: string }>}
 */
export const INGREDIENT_TAG_COLORS = {
  '主食':    { bg: '#3b4a6b', border: '#5c6f9e', text: '#c8d4f0' },
  '蛋白質':  { bg: '#5c3a2e', border: '#8a5a47', text: '#f0c4b0' },
  '蔬菜':    { bg: '#2e4d33', border: '#4a7a52', text: '#b0dab8' },
  '乳製品':  { bg: '#4a3d6b', border: '#7060a0', text: '#d4c8f4' },
  '調味料':  { bg: '#5c4a1a', border: '#8a7030', text: '#f0d890' },
  '醬汁':    { bg: '#4a2020', border: '#7a3838', text: '#f0b0b0' },
  '香料':    { bg: '#3a4a2a', border: '#5a7040', text: '#c0d8a8' },
  '油脂':    { bg: '#4a3a1a', border: '#7a5a28', text: '#f0c878' },
  '湯底':    { bg: '#1a3a4a', border: '#2a5a6a', text: '#90c8d8' },
  '發酵食品':{ bg: '#4a2a3a', border: '#7a4258', text: '#f0a8c8' },
  '水':      { bg: '#1a3060', border: '#2a4888', text: '#90b8f0' },
  '菇類':    { bg: '#3a2a1a', border: '#5a4228', text: '#d0a878' },
  '水果':    { bg: '#4a2038', border: '#7a3058', text: '#f0a0c0' },
};

// ============================================================
// JSDoc 型別定義（供其他檔案參考）
// ============================================================

/**
 * @typedef {Object} IngredientVariant
 * @property {string} id           - 唯一識別碼，格式：{base_id}--{state}
 * @property {string} label        - 顯示名稱（中文）
 * @property {string} state        - 加工狀態 key（見 PROCESSING_STATES）
 * @property {number} [yield_ratio]- 換算係數（相對於 raw，省略時預設 1.0）
 *
 * @typedef {Object} NutritionPer100g
 * @property {number} calories   - 大卡
 * @property {number} protein    - 蛋白質 g
 * @property {number} fat        - 脂肪 g
 * @property {number} carbs      - 碳水化合物 g
 * @property {number} [fiber]    - 膳食纖維 g
 * @property {number} [sodium]   - 鈉 mg
 *
 * @typedef {Object} Ingredient
 * @property {string}   id              - snake_case 唯一 ID
 * @property {string}   name            - 基底食材中文名
 * @property {string}   name_en         - 英文名（便於搜尋）
 * @property {string[]} categories      - 食材分類（可多個）
 * @property {IngredientVariant[]} variants
 * @property {NutritionPer100g} [nutrition_per_100g] - 選填；有填時 verified_source 必填
 * @property {string[]} [substitutes]   - 可替換的食材 base id
 * @property {string[]} [allergens]     - 過敏原
 * @property {string}   [season]        - 盛產季節
 * @property {string}   [storage_tip]   - 保存建議
 * @property {string}   [verified_source] - 資料來源 URL（填寫 nutrition 時必填）
 * @property {string}   [verified_at]   - 最後驗證日期 YYYY-MM-DD
 */
