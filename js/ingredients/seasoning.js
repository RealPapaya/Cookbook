/**
 * @fileoverview 調味料 & 醬汁類食材
 * 包含：美乃滋、韓式辣醬、麵露、雞粉、雞湯粉等
 *
 * 調味料（seasoning）：用量少、用於提味的乾性或液態調味品
 * 醬汁（sauce）：有特定風味、用量較多的液態調味品
 * 兩者可共存於同一個 categories[]。
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 美乃滋 ───────────────────────────────────────────────
  {
    id: 'mayonnaise',
    name: '美乃滋',
    name_en: 'Mayonnaise',
    categories: ['調味料', '醬汁'],
    variants: [
      { id: 'mayonnaise--regular',  label: '一般美乃滋', state: 'raw', yield_ratio: 1.0 },
      { id: 'mayonnaise--light',    label: '低卡美乃滋', state: 'raw', yield_ratio: 1.0 },
      { id: 'mayonnaise--japanese', label: '日式美乃滋', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 680, protein: 1.1, fat: 75, carbs: 2.5, sodium: 610,
    },
    substitutes: ['greek_yogurt', 'tofu_mayo'],
    allergens: ['egg'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172735/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 韓式辣醬 ─────────────────────────────────────────────
  {
    id: 'gochujang',
    name: '韓式辣醬',
    name_en: 'Gochujang',
    categories: ['醬汁', '調味料', '發酵食品'],
    variants: [
      { id: 'gochujang--paste', label: '辣醬（一般）', state: 'paste', yield_ratio: 1.0 },
      { id: 'gochujang--mild',  label: '微辣辣醬',     state: 'paste', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 182, protein: 4.5, fat: 0.5, carbs: 39, fiber: 3.5, sodium: 1880,
    },
    substitutes: ['chili_paste', 'sriracha'],
    allergens: ['gluten', 'soy'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/2103539/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 麵露 ─────────────────────────────────────────────────
  {
    id: 'mentsuyu',
    name: '麵露',
    name_en: 'Mentsuyu (Noodle Soup Base)',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'mentsuyu--2x',  label: '2倍濃縮麵露', state: 'concentrated' },
      { id: 'mentsuyu--3x',  label: '3倍濃縮麵露', state: 'concentrated' },
      { id: 'mentsuyu--raw', label: '麵露（即飲）', state: 'raw' },
    ],
  },

  // ── 雞粉（康寶）─────────────────────────────────────────
  {
    id: 'chicken_powder',
    name: '雞粉',
    name_en: 'Chicken Powder (Bouillon)',
    categories: ['調味料'],
    variants: [
      { id: 'chicken_powder--granule', label: '顆粒雞粉', state: 'powdered' },
      { id: 'chicken_powder--powder',  label: '雞粉',     state: 'powdered' },
    ],
  },

  // ── 雞湯粉 ───────────────────────────────────────────────
  {
    id: 'chicken_soup_powder',
    name: '雞湯粉',
    name_en: 'Chicken Soup Powder',
    categories: ['調味料', '湯底'],
    variants: [
      { id: 'chicken_soup_powder--powder', label: '雞湯粉', state: 'powdered' },
    ],
  },

];
