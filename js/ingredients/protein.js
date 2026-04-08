/**
 * @fileoverview 蛋白質類食材
 * 包含：肉類、蛋類、豆腐、海鮮、肉丸等主要蛋白質來源
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 雞蛋 ─────────────────────────────────────────────────
  {
    id: 'egg_chicken',
    name: '雞蛋',
    name_en: 'Chicken Egg',
    categories: ['蛋白質'],
    variants: [
      { id: 'egg_chicken--raw',       label: '生雞蛋（全蛋）', state: 'raw',    yield_ratio: 1.0  },
      { id: 'egg_chicken--raw_yolk',  label: '生蛋黃',         state: 'raw',    yield_ratio: 0.33 },
      { id: 'egg_chicken--raw_white', label: '生蛋白',         state: 'raw',    yield_ratio: 0.67 },
      { id: 'egg_chicken--cooked',    label: '水煮蛋',         state: 'cooked', yield_ratio: 1.0  },
      { id: 'egg_chicken--onsen',     label: '溫泉蛋',         state: 'cooked', yield_ratio: 1.0  },
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
      { id: 'bacon--raw',    label: '生培根片', state: 'raw',    yield_ratio: 1.0 },
      { id: 'bacon--sliced', label: '培根片',   state: 'sliced', yield_ratio: 1.0 },
      { id: 'bacon--smoked', label: '煙燻培根', state: 'smoked', yield_ratio: 1.0 },
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

  // ── 豬肉片 ───────────────────────────────────────────────
  {
    id: 'pork_slice',
    name: '豬肉片',
    name_en: 'Sliced Pork',
    categories: ['蛋白質'],
    variants: [
      { id: 'pork_slice--raw',    label: '生豬肉片',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'pork_slice--frozen', label: '冷凍豬肉片', state: 'frozen', yield_ratio: 1.0 },
      { id: 'pork_slice--cooked', label: '熟豬肉片',   state: 'cooked', yield_ratio: 0.8 },
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

  // ── 冷凍雞肉丸 ───────────────────────────────────────────
  {
    id: 'chicken_meatball',
    name: '雞肉丸',
    name_en: 'Chicken Meatball',
    categories: ['蛋白質'],
    variants: [
      { id: 'chicken_meatball--frozen', label: '冷凍雞肉丸', state: 'frozen', yield_ratio: 1.0 },
      { id: 'chicken_meatball--raw',    label: '自製雞肉丸', state: 'raw',    yield_ratio: 1.0 },
      { id: 'chicken_meatball--cooked', label: '熟雞肉丸',   state: 'cooked', yield_ratio: 0.9 },
    ],
    nutrition_per_100g: {
      calories: 165, protein: 15, fat: 8, carbs: 7, sodium: 480,
    },
    substitutes: ['pork_meatball', 'fish_cake'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
