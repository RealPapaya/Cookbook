/**
 * @fileoverview 發酵食品類食材
 * 包含：泡菜、味噌、納豆、醬油等發酵製品
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 泡菜 ─────────────────────────────────────────────────
  {
    id: 'kimchi',
    name: '泡菜',
    name_en: 'Kimchi',
    categories: ['發酵食品', '蔬菜'],
    variants: [
      { id: 'kimchi--fermented',      label: '泡菜（一般）',     state: 'fermented', yield_ratio: 1.0 },
      { id: 'kimchi--well_fermented', label: '熟成泡菜',         state: 'fermented', yield_ratio: 1.0 },
      { id: 'kimchi--fresh',          label: '新鮮泡菜（白菜）', state: 'raw',       yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 15, protein: 1.1, fat: 0.5, carbs: 2.4, fiber: 1.6, sodium: 498,
    },
    substitutes: ['pickled_cabbage', 'sauerkraut'],
    allergens: ['fish'],
    tastes: ['酸', '辣', '鹹'],
    textures: ['清脆', '嚼勁'],
    season: '全年',
    storage_tip: '冷藏密封保存，發酵越久味道越酸。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/1100535/nutrients',
    verified_at: '2024-11-01',
  },

];
