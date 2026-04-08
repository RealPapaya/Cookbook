/**
 * @fileoverview 油脂類食材
 * 包含：麻油、橄欖油、菜籽油、奶油等各類食用油脂
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 麻油 ─────────────────────────────────────────────────
  {
    id: 'sesame_oil',
    name: '麻油',
    name_en: 'Sesame Oil',
    categories: ['油脂'],
    variants: [
      { id: 'sesame_oil--pure',    label: '純麻油',   state: 'raw', yield_ratio: 1.0 },
      { id: 'sesame_oil--roasted', label: '烤芝麻油', state: 'raw', yield_ratio: 1.0 },
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

];
