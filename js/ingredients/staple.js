/**
 * @fileoverview 主食類食材
 * 包含：麵條、米飯、麵包等主食類別
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 烏龍麵 ──────────────────────────────────────────────
  {
    id: 'udon',
    name: '烏龍麵',
    name_en: 'Udon Noodles',
    categories: ['主食'],
    variants: [
      { id: 'udon--raw',    label: '生烏龍麵',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'udon--frozen', label: '冷凍烏龍麵', state: 'frozen', yield_ratio: 1.0 },
      { id: 'udon--dried',  label: '乾燥烏龍麵', state: 'dried',  yield_ratio: 0.35 },
      { id: 'udon--cooked', label: '熟烏龍麵',   state: 'cooked', yield_ratio: 1.0 },
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

];
