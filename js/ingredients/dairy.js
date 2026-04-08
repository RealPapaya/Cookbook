/**
 * @fileoverview 乳製品類食材
 * 包含：牛奶、起司、奶油、優格等乳製品
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 牛奶 ─────────────────────────────────────────────────
  {
    id: 'milk',
    name: '牛奶',
    name_en: 'Cow Milk',
    categories: ['乳製品'],
    variants: [
      { id: 'milk--raw',          label: '全脂牛奶', state: 'raw',          yield_ratio: 1.0 },
      { id: 'milk--concentrated', label: '煉奶',     state: 'concentrated', yield_ratio: 0.4 },
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
      { id: 'cheese_slice--raw',    label: '起司片（常溫）', state: 'raw',    yield_ratio: 1.0 },
      { id: 'cheese_slice--melted', label: '融化起司',       state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 316, protein: 19, fat: 25, carbs: 3.7, sodium: 1200,
    },
    substitutes: ['mozzarella', 'cheddar', 'parmesan'],
    allergens: ['dairy'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
