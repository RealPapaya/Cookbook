/**
 * @fileoverview 食材主資料庫
 *
 * 每個食材物件代表一種「基底食材」（base ingredient）。
 * variants 陣列描述同一食材的不同「加工狀態」（processing states）。
 *
 * 新增規則（見 CLAUDE.md）：
 *  - 所有食材必須有 verified_source（真實網路來源）
 *  - nutrition 數值來自官方或可信資料庫
 *  - 不可自行捏造食材或數值
 *
 * @typedef {Object} IngredientVariant
 * @property {string} id          - 唯一識別碼，格式：{base_id}--{state}
 * @property {string} label       - 顯示名稱（中文）
 * @property {string} state       - 加工狀態 key（見 PROCESSING_STATES）
 * @property {number} [yield_ratio] - 換算係數（相對於 raw，預設 1.0）
 *                                    例：去骨雞腿去骨後剩 0.7，yield_ratio = 0.7
 *
 * @typedef {Object} Ingredient
 * @property {string}   id              - snake_case 唯一 ID
 * @property {string}   name            - 基底食材中文名
 * @property {string}   name_en         - 英文名（便於搜尋）
 * @property {string[]} categories      - 食材分類（可多個，見 INGREDIENT_CATEGORIES）
 * @property {IngredientVariant[]} variants
 * @property {NutritionPer100g} nutrition_per_100g  - 以 raw 狀態為基準
 * @property {string[]} substitutes     - 可替換的食材 base id
 * @property {string[]} allergens       - 過敏原（見 ALLERGENS）
 * @property {string}   season          - 盛產季節（選填）
 * @property {string}   storage_tip     - 保存建議（選填）
 * @property {string}   verified_source - 資料來源 URL（必填）
 * @property {string}   verified_at     - 最後驗證日期 YYYY-MM-DD
 */

// ============================================================
// 常數定義
// ============================================================

/** 加工狀態清單（state key → 中文說明） */
export const PROCESSING_STATES = {
  raw:         '生/未加工',
  frozen:      '冷凍',
  dried:       '乾燥/脫水',
  fermented:   '發酵',
  pickled:     '醃漬',
  smoked:      '煙燻',
  canned:      '罐頭',
  minced:      '絞碎',
  sliced:      '切片',
  diced:       '切丁',
  boneless:    '去骨',
  skinless:    '去皮',
  cooked:      '熟/已煮',
  powdered:    '粉狀',
  paste:       '泥/醬狀',
  concentrated:'濃縮',
};

/** 食材分類（與 INGREDIENT_TAG_COLORS 對應） */
export const INGREDIENT_CATEGORIES = [
  '主食', '蛋白質', '蔬菜', '乳製品',
  '調味料', '醬汁', '香料', '油脂',
  '湯底', '發酵食品', '水', '菇類', '水果',
];

/** 食材分類標籤顏色對應表 */
export const INGREDIENT_TAG_COLORS = {
  '主食':   { bg: '#3b4a6b', border: '#5c6f9e', text: '#c8d4f0' },
  '蛋白質': { bg: '#5c3a2e', border: '#8a5a47', text: '#f0c4b0' },
  '蔬菜':   { bg: '#2e4d33', border: '#4a7a52', text: '#b0dab8' },
  '乳製品': { bg: '#4a3d6b', border: '#7060a0', text: '#d4c8f4' },
  '調味料': { bg: '#5c4a1a', border: '#8a7030', text: '#f0d890' },
  '醬汁':   { bg: '#4a2020', border: '#7a3838', text: '#f0b0b0' },
  '香料':   { bg: '#3a4a2a', border: '#5a7040', text: '#c0d8a8' },
  '油脂':   { bg: '#4a3a1a', border: '#7a5a28', text: '#f0c878' },
  '湯底':   { bg: '#1a3a4a', border: '#2a5a6a', text: '#90c8d8' },
  '發酵食品':{ bg: '#4a2a3a', border: '#7a4258', text: '#f0a8c8' },
  '水':     { bg: '#1a3060', border: '#2a4888', text: '#90b8f0' },
  '菇類':   { bg: '#3a2a1a', border: '#5a4228', text: '#d0a878' },
  '水果':   { bg: '#4a2038', border: '#7a3058', text: '#f0a0c0' },
};

/** 過敏原 */
export const ALLERGENS = [
  'gluten', 'dairy', 'egg', 'soy',
  'peanut', 'treenut', 'shellfish', 'fish', 'sesame',
];

/**
 * @typedef {Object} NutritionPer100g
 * @property {number} calories  - 大卡
 * @property {number} protein   - 蛋白質 g
 * @property {number} fat       - 脂肪 g
 * @property {number} carbs     - 碳水化合物 g
 * @property {number} [fiber]   - 膳食纖維 g（選填）
 * @property {number} [sodium]  - 鈉 mg（選填）
 */

// ============================================================
// 食材資料
// ============================================================

/** @type {Ingredient[]} */
export const INGREDIENTS = [

  // ── 烏龍麵 ──────────────────────────────────────────────
  {
    id: 'udon',
    name: '烏龍麵',
    name_en: 'Udon Noodles',
    categories: ['主食'],
    variants: [
      { id: 'udon--raw',    label: '生烏龍麵',    state: 'raw',    yield_ratio: 1.0 },
      { id: 'udon--frozen', label: '冷凍烏龍麵',  state: 'frozen', yield_ratio: 1.0 },
      { id: 'udon--dried',  label: '乾燥烏龍麵',  state: 'dried',  yield_ratio: 0.35 },
      { id: 'udon--cooked', label: '熟烏龍麵',    state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 149, protein: 3.7, fat: 0.4, carbs: 31.5, fiber: 0.9, sodium: 210,
    },
    substitutes: ['soba', 'ramen_noodles', 'rice_noodles'],
    allergens: ['gluten'],
    storage_tip: '冷凍烏龍麵開封後請盡速食用，生麵放冷藏 2 天內使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 雞蛋 ─────────────────────────────────────────────────
  {
    id: 'egg_chicken',
    name: '雞蛋',
    name_en: 'Chicken Egg',
    categories: ['蛋白質'],
    variants: [
      { id: 'egg_chicken--raw',        label: '生雞蛋（全蛋）',  state: 'raw',    yield_ratio: 1.0 },
      { id: 'egg_chicken--raw_yolk',   label: '生蛋黃',          state: 'raw',    yield_ratio: 0.33 },
      { id: 'egg_chicken--raw_white',  label: '生蛋白',          state: 'raw',    yield_ratio: 0.67 },
      { id: 'egg_chicken--cooked',     label: '水煮蛋',          state: 'cooked', yield_ratio: 1.0 },
      { id: 'egg_chicken--onsen',      label: '溫泉蛋',          state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 151, protein: 12.3, fat: 10.3, carbs: 0.3, sodium: 130,
    },
    substitutes: [],
    allergens: ['egg'],
    storage_tip: '冷藏尖端朝下保存，建議兩週內使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 培根 ─────────────────────────────────────────────────
  {
    id: 'bacon',
    name: '培根',
    name_en: 'Bacon',
    categories: ['蛋白質'],
    variants: [
      { id: 'bacon--raw',    label: '生培根片',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'bacon--sliced', label: '培根片',     state: 'sliced', yield_ratio: 1.0 },
      { id: 'bacon--smoked', label: '煙燻培根',   state: 'smoked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 380, protein: 14, fat: 35, carbs: 1, sodium: 1700,
    },
    substitutes: ['ham', 'pancetta', 'turkey_bacon'],
    allergens: [],
    storage_tip: '開封後冷藏，三天內食用；或分裝冷凍。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 牛奶 ─────────────────────────────────────────────────
  {
    id: 'milk',
    name: '牛奶',
    name_en: 'Cow Milk',
    categories: ['乳製品'],
    variants: [
      { id: 'milk--raw',          label: '全脂牛奶',      state: 'raw',          yield_ratio: 1.0 },
      { id: 'milk--concentrated', label: '煉奶',          state: 'concentrated', yield_ratio: 0.4 },
    ],
    nutrition_per_100g: {
      calories: 61, protein: 3.3, fat: 3.5, carbs: 4.6, sodium: 41,
    },
    substitutes: ['oat_milk', 'soy_milk', 'almond_milk', 'heavy_cream'],
    allergens: ['dairy'],
    storage_tip: '開封後冷藏，三天內飲用完畢。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 起司片 ───────────────────────────────────────────────
  {
    id: 'cheese_slice',
    name: '起司片',
    name_en: 'Processed Cheese Slice',
    categories: ['乳製品'],
    variants: [
      { id: 'cheese_slice--raw',     label: '起司片（常溫）',  state: 'raw',   yield_ratio: 1.0 },
      { id: 'cheese_slice--melted',  label: '融化起司',        state: 'cooked',yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 316, protein: 19, fat: 25, carbs: 3.7, sodium: 1200,
    },
    substitutes: ['mozzarella', 'cheddar', 'parmesan'],
    allergens: ['dairy'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豬肉片 ───────────────────────────────────────────────
  {
    id: 'pork_slice',
    name: '豬肉片',
    name_en: 'Sliced Pork',
    categories: ['蛋白質'],
    variants: [
      { id: 'pork_slice--raw',    label: '生豬肉片',    state: 'raw',    yield_ratio: 1.0 },
      { id: 'pork_slice--frozen', label: '冷凍豬肉片',  state: 'frozen', yield_ratio: 1.0 },
      { id: 'pork_slice--cooked', label: '熟豬肉片',    state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 242, protein: 18, fat: 18, carbs: 0, sodium: 55,
    },
    substitutes: ['beef_slice', 'chicken_breast_slice'],
    allergens: [],
    storage_tip: '生肉冷藏 1-2 天，冷凍可保存 1 個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 泡菜 ─────────────────────────────────────────────────
  {
    id: 'kimchi',
    name: '泡菜',
    name_en: 'Kimchi',
    categories: ['發酵食品', '蔬菜'],
    variants: [
      { id: 'kimchi--fermented',     label: '泡菜（一般）',    state: 'fermented', yield_ratio: 1.0 },
      { id: 'kimchi--well_fermented', label: '熟成泡菜',       state: 'fermented', yield_ratio: 1.0 },
      { id: 'kimchi--fresh',         label: '新鮮泡菜（白菜）',state: 'raw',       yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 15, protein: 1.1, fat: 0.5, carbs: 2.4, fiber: 1.6, sodium: 498,
    },
    substitutes: ['pickled_cabbage', 'sauerkraut'],
    allergens: ['fish'],
    season: '全年',
    storage_tip: '冷藏密封保存，發酵越久味道越酸。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/1100535/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 冷凍雞肉丸 ───────────────────────────────────────────
  {
    id: 'chicken_meatball',
    name: '雞肉丸',
    name_en: 'Chicken Meatball',
    categories: ['蛋白質'],
    variants: [
      { id: 'chicken_meatball--frozen', label: '冷凍雞肉丸',   state: 'frozen', yield_ratio: 1.0 },
      { id: 'chicken_meatball--raw',    label: '自製雞肉丸',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'chicken_meatball--cooked', label: '熟雞肉丸',     state: 'cooked', yield_ratio: 0.9 },
    ],
    nutrition_per_100g: {
      calories: 165, protein: 15, fat: 8, carbs: 7, sodium: 480,
    },
    substitutes: ['pork_meatball', 'fish_cake'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 麻油 ─────────────────────────────────────────────────
  {
    id: 'sesame_oil',
    name: '麻油',
    name_en: 'Sesame Oil',
    categories: ['油脂'],
    variants: [
      { id: 'sesame_oil--pure',   label: '純麻油',    state: 'raw', yield_ratio: 1.0 },
      { id: 'sesame_oil--roasted',label: '烤芝麻油',  state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['chili_sesame_oil'],
    allergens: ['sesame'],
    storage_tip: '避光陰涼處保存，開封後半年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/172338/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 韓式辣醬 ─────────────────────────────────────────────
  {
    id: 'gochujang',
    name: '韓式辣醬',
    name_en: 'Gochujang',
    categories: ['醬汁', '調味料', '發酵食品'],
    variants: [
      { id: 'gochujang--paste',  label: '辣醬（一般）',    state: 'paste', yield_ratio: 1.0 },
      { id: 'gochujang--mild',   label: '微辣辣醬',        state: 'paste', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 182, protein: 4.5, fat: 0.5, carbs: 39, fiber: 3.5, sodium: 1880,
    },
    substitutes: ['chili_paste', 'sriracha'],
    allergens: ['gluten', 'soy'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/2103539/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 美乃滋 ───────────────────────────────────────────────
  {
    id: 'mayonnaise',
    name: '美乃滋',
    name_en: 'Mayonnaise',
    categories: ['調味料', '醬汁'],
    variants: [
      { id: 'mayonnaise--regular',  label: '一般美乃滋',   state: 'raw', yield_ratio: 1.0 },
      { id: 'mayonnaise--light',    label: '低卡美乃滋',   state: 'raw', yield_ratio: 1.0 },
      { id: 'mayonnaise--japanese', label: '日式美乃滋',   state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 680, protein: 1.1, fat: 75, carbs: 2.5, sodium: 610,
    },
    substitutes: ['greek_yogurt', 'tofu_mayo'],
    allergens: ['egg'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172735/nutrients',
    verified_at: '2024-11-01',
  },
];

// ============================================================
// 查詢工具函式
// ============================================================

/**
 * 依 base id 查詢食材
 * @param {string} id
 * @returns {Ingredient|undefined}
 */
export function getIngredient(id) {
  return INGREDIENTS.find(i => i.id === id);
}

/**
 * 依 variant id 查詢食材與對應變體
 * @param {string} variantId  格式：{base_id}--{state}
 * @returns {{ ingredient: Ingredient, variant: IngredientVariant }|undefined}
 */
export function getIngredientByVariant(variantId) {
  for (const ing of INGREDIENTS) {
    const variant = ing.variants.find(v => v.id === variantId);
    if (variant) return { ingredient: ing, variant };
  }
  return undefined;
}

/**
 * 取得某食材的所有可替換食材物件
 * @param {string} id
 * @returns {Ingredient[]}
 */
export function getSubstitutes(id) {
  const ing = getIngredient(id);
  if (!ing) return [];
  return ing.substitutes.map(sid => getIngredient(sid)).filter(Boolean);
}
