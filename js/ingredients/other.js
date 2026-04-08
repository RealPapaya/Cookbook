/**
 * @fileoverview 其他類食材
 * 包含：水、水果、菇類、湯底等較小分類，或難以歸入其他分類的食材
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 水 ───────────────────────────────────────────────────
  {
    id: 'water',
    name: '水',
    name_en: 'Water',
    categories: ['水'],
    variants: [
      { id: 'water--cold',    label: '冷開水', state: 'raw' },
      { id: 'water--hot',     label: '熱水',   state: 'cooked' },
      { id: 'water--boiling', label: '滾水',   state: 'cooked' },
    ],
  },

  // ── 檸檬 ─────────────────────────────────────────────────
  {
    id: 'lemon',
    name: '檸檬',
    name_en: 'Lemon',
    categories: ['水果', '香料'],
    variants: [
      { id: 'lemon--raw',    label: '檸檬',   state: 'raw' },
      { id: 'lemon--sliced', label: '檸檬片', state: 'sliced' },
      { id: 'lemon--juice',  label: '檸檬汁', state: 'raw' },
    ],
    allergens: [],
    tastes: ['酸'],
    textures: ['多汁'],
    season: '全年',
    storage_tip: '常溫保存 1-2 週，冷藏可保存 1 個月。',
  },

  // ── 香菇 ─────────────────────────────────────────────────
  {
    id: 'shiitake',
    name: '香菇',
    name_en: 'Shiitake Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'shiitake--fresh', label: '新鮮香菇', state: 'raw',   yield_ratio: 1.0 },
      { id: 'shiitake--dried', label: '乾香菇',   state: 'dried', yield_ratio: 0.3 },
    ],
    nutrition_per_100g: {
      calories: 34, protein: 2.2, fat: 0.5, carbs: 6.8, fiber: 2.5, sodium: 9,
    },
    substitutes: ['king_oyster_mushroom', 'portobello'],
    allergens: [],
    tastes: ['鮮', '鹹'],
    textures: ['嚼勁', '軟嫩'],
    season: '全年',
    storage_tip: '新鮮香菇冷藏 1 週；乾香菇密封常溫保存 1 年。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 金針菇 ───────────────────────────────────────────────
  {
    id: 'enoki',
    name: '金針菇',
    name_en: 'Enoki Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'enoki--raw',    label: '生金針菇', state: 'raw',    yield_ratio: 1.0 },
      { id: 'enoki--cooked', label: '熟金針菇', state: 'cooked', yield_ratio: 0.85 },
    ],
    nutrition_per_100g: {
      calories: 37, protein: 2.7, fat: 0.2, carbs: 7.6, fiber: 2.7, sodium: 3,
    },
    substitutes: ['shimeji', 'bean_sprouts'],
    allergens: [],
    tastes: ['鮮'],
    textures: ['清脆', '嚼勁'],
    season: '全年',
    storage_tip: '冷藏保存，3-5 天內食用；避免沾水。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 杏鮑菇 ───────────────────────────────────────────────
  {
    id: 'king_oyster_mushroom',
    name: '杏鮑菇',
    name_en: 'King Oyster Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'king_oyster_mushroom--raw',    label: '生杏鮑菇',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'king_oyster_mushroom--sliced', label: '杏鮑菇片',   state: 'sliced', yield_ratio: 1.0 },
      { id: 'king_oyster_mushroom--cooked', label: '熟杏鮑菇',   state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 35, protein: 2.8, fat: 0.4, carbs: 6.2, fiber: 3.4, sodium: 4,
    },
    substitutes: ['shiitake', 'portobello'],
    allergens: [],
    tastes: ['鮮'],
    textures: ['嚼勁', '紮實'],
    season: '全年',
    storage_tip: '冷藏保存，5-7 天內食用；不需清洗，以廚房紙巾擦拭即可。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鴻喜菇 ───────────────────────────────────────────────
  {
    id: 'shimeji',
    name: '鴻喜菇',
    name_en: 'Shimeji Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'shimeji--brown', label: '茶色鴻喜菇', state: 'raw', yield_ratio: 1.0 },
      { id: 'shimeji--white', label: '白色鴻喜菇', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 30, protein: 3.0, fat: 0.5, carbs: 4.7, fiber: 3.0, sodium: 3,
    },
    substitutes: ['enoki', 'shiitake'],
    allergens: [],
    tastes: ['鮮'],
    textures: ['嚼勁', '滑順'],
    season: '全年',
    storage_tip: '冷藏保存，5 天內食用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 秀珍菇 ───────────────────────────────────────────────
  {
    id: 'oyster_mushroom',
    name: '秀珍菇',
    name_en: 'Oyster Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'oyster_mushroom--raw',    label: '生秀珍菇', state: 'raw',    yield_ratio: 1.0 },
      { id: 'oyster_mushroom--cooked', label: '熟秀珍菇', state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 33, protein: 3.3, fat: 0.4, carbs: 6.1, fiber: 2.3, sodium: 18,
    },
    substitutes: ['shimeji', 'shiitake'],
    allergens: [],
    tastes: ['鮮'],
    textures: ['嚼勁', '軟嫩'],
    season: '全年',
    storage_tip: '冷藏保存，3-5 天內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蘑菇 ─────────────────────────────────────────────────
  {
    id: 'button_mushroom',
    name: '蘑菇',
    name_en: 'Button Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'button_mushroom--raw',    label: '生蘑菇',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'button_mushroom--sliced', label: '蘑菇片',   state: 'sliced', yield_ratio: 1.0 },
      { id: 'button_mushroom--canned', label: '罐裝蘑菇', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 22, protein: 3.1, fat: 0.3, carbs: 3.3, fiber: 1.0, sodium: 5,
    },
    substitutes: ['shiitake', 'portobello'],
    allergens: [],
    tastes: ['鮮'],
    textures: ['嚼勁', '軟嫩'],
    season: '全年',
    storage_tip: '冷藏保存，5-7 天內食用；存放時勿用密封袋，以紙袋保存為佳。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 木耳 ─────────────────────────────────────────────────
  {
    id: 'wood_ear_mushroom',
    name: '木耳',
    name_en: 'Wood Ear Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'wood_ear_mushroom--fresh', label: '新鮮木耳', state: 'raw',   yield_ratio: 1.0 },
      { id: 'wood_ear_mushroom--dried', label: '乾木耳',   state: 'dried', yield_ratio: 0.15 },
    ],
    nutrition_per_100g: {
      calories: 35, protein: 1.0, fat: 0.2, carbs: 9.0, fiber: 7.4, sodium: 10,
    },
    substitutes: ['shiitake'],
    allergens: [],
    tastes: ['清淡'],
    textures: ['清脆', '嚼勁'],
    season: '全年',
    storage_tip: '乾木耳密封常溫保存 1 年；泡發後冷藏 2-3 天內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 雞高湯 ───────────────────────────────────────────────
  {
    id: 'chicken_broth',
    name: '雞高湯',
    name_en: 'Chicken Broth',
    categories: ['湯底'],
    variants: [
      { id: 'chicken_broth--homemade', label: '自製雞高湯',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'chicken_broth--canned',   label: '罐裝雞高湯',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'chicken_broth--powder',   label: '雞高湯粉',     state: 'dried',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 15, protein: 1.5, fat: 0.5, carbs: 1.2, sodium: 420,
    },
    substitutes: ['vegetable_broth', 'pork_bone_broth'],
    allergens: [],
    tastes: ['鮮', '鹹'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '自製高湯冷藏 3-4 天，冷凍可保存 3 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豬骨高湯 ─────────────────────────────────────────────
  {
    id: 'pork_bone_broth',
    name: '豬骨高湯',
    name_en: 'Pork Bone Broth',
    categories: ['湯底'],
    variants: [
      { id: 'pork_bone_broth--regular', label: '豬骨高湯',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'pork_bone_broth--tonkotsu', label: '豚骨湯底', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 35, protein: 3.0, fat: 2.0, carbs: 0.5, sodium: 380,
    },
    substitutes: ['chicken_broth', 'beef_bone_broth'],
    allergens: [],
    tastes: ['鮮', '鹹'],
    textures: ['液體', '濃稠'],
    season: '全年',
    storage_tip: '冷藏 3-4 天，冷凍可保存 3 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 昆布高湯 ─────────────────────────────────────────────
  {
    id: 'kombu_dashi',
    name: '昆布高湯',
    name_en: 'Kombu Dashi',
    categories: ['湯底'],
    variants: [
      { id: 'kombu_dashi--regular', label: '昆布高湯',       state: 'cooked', yield_ratio: 1.0 },
      { id: 'kombu_dashi--kombu',   label: '昆布（乾燥）',   state: 'dried',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 8, protein: 0.5, fat: 0.0, carbs: 1.5, sodium: 165,
    },
    substitutes: ['vegetable_broth'],
    allergens: [],
    tastes: ['鮮', '清淡'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '高湯冷藏 3 天，冷凍 1 個月；乾昆布密封常溫保存 1 年。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 柴魚高湯 ─────────────────────────────────────────────
  {
    id: 'katsuobushi_dashi',
    name: '柴魚高湯',
    name_en: 'Katsuobushi Dashi',
    categories: ['湯底'],
    variants: [
      { id: 'katsuobushi_dashi--regular',    label: '柴魚高湯',     state: 'cooked', yield_ratio: 1.0 },
      { id: 'katsuobushi_dashi--flakes',     label: '柴魚片',       state: 'dried',  yield_ratio: 1.0 },
      { id: 'katsuobushi_dashi--powder',     label: '柴魚高湯粉',   state: 'dried',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 3, protein: 0.5, fat: 0.0, carbs: 0.3, sodium: 55,
    },
    substitutes: ['kombu_dashi', 'chicken_broth'],
    allergens: ['fish'],
    tastes: ['鮮'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '高湯冷藏 2-3 天；柴魚片密封常溫保存 1 年。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 蔬菜高湯 ─────────────────────────────────────────────
  {
    id: 'vegetable_broth',
    name: '蔬菜高湯',
    name_en: 'Vegetable Broth',
    categories: ['湯底'],
    variants: [
      { id: 'vegetable_broth--homemade', label: '自製蔬菜高湯', state: 'cooked', yield_ratio: 1.0 },
      { id: 'vegetable_broth--canned',   label: '罐裝蔬菜高湯', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 7, protein: 0.2, fat: 0.1, carbs: 1.4, sodium: 330,
    },
    substitutes: ['chicken_broth', 'kombu_dashi'],
    allergens: [],
    tastes: ['鮮', '清淡'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '自製高湯冷藏 3-4 天，冷凍 3 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 番茄 ─────────────────────────────────────────────────
  {
    id: 'tomato',
    name: '番茄',
    name_en: 'Tomato',
    categories: ['蔬菜', '水果'],
    variants: [
      { id: 'tomato--raw',      label: '番茄',       state: 'raw',    yield_ratio: 1.0 },
      { id: 'tomato--cherry',   label: '小番茄',     state: 'raw',    yield_ratio: 1.0 },
      { id: 'tomato--canned',   label: '罐裝番茄',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'tomato--pureed',   label: '番茄泥',     state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 18, protein: 0.9, fat: 0.2, carbs: 3.9, fiber: 1.2, sodium: 5,
    },
    substitutes: ['canned_tomato', 'roasted_red_pepper'],
    allergens: [],
    tastes: ['酸', '甜'],
    textures: ['多汁', '軟嫩'],
    season: '夏季',
    storage_tip: '常溫存放至熟，冷藏可保存 1 週；熟成後儘早食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蘋果 ─────────────────────────────────────────────────
  {
    id: 'apple',
    name: '蘋果',
    name_en: 'Apple',
    categories: ['水果'],
    variants: [
      { id: 'apple--raw',    label: '蘋果',     state: 'raw',    yield_ratio: 1.0 },
      { id: 'apple--sliced', label: '蘋果片',   state: 'sliced', yield_ratio: 0.85 },
      { id: 'apple--cooked', label: '燉蘋果',   state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 52, protein: 0.3, fat: 0.2, carbs: 13.8, fiber: 2.4, sodium: 1,
    },
    substitutes: ['pear', 'quince'],
    allergens: [],
    tastes: ['甜', '微酸'],
    textures: ['清脆', '多汁'],
    season: '秋季',
    storage_tip: '常溫保存 1 週，冷藏可保存 1 個月；切開後淋檸檬汁防止氧化。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 香蕉 ─────────────────────────────────────────────────
  {
    id: 'banana',
    name: '香蕉',
    name_en: 'Banana',
    categories: ['水果'],
    variants: [
      { id: 'banana--raw',    label: '香蕉',     state: 'raw',    yield_ratio: 0.65 },
      { id: 'banana--frozen', label: '冷凍香蕉', state: 'frozen', yield_ratio: 0.65 },
    ],
    nutrition_per_100g: {
      calories: 89, protein: 1.1, fat: 0.3, carbs: 22.8, fiber: 2.6, sodium: 1,
    },
    substitutes: ['plantain'],
    allergens: [],
    tastes: ['甜'],
    textures: ['軟嫩', '綿密'],
    season: '全年',
    storage_tip: '常溫存放至熟成（表皮出現黑斑），熟後放冰箱可延緩過熟。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鳳梨 ─────────────────────────────────────────────────
  {
    id: 'pineapple',
    name: '鳳梨',
    name_en: 'Pineapple',
    categories: ['水果'],
    variants: [
      { id: 'pineapple--raw',    label: '鳳梨',       state: 'raw',    yield_ratio: 0.5 },
      { id: 'pineapple--canned', label: '罐裝鳳梨',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'pineapple--juice',  label: '鳳梨汁',     state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 50, protein: 0.5, fat: 0.1, carbs: 13.1, fiber: 1.4, sodium: 1,
    },
    substitutes: ['mango', 'papaya'],
    allergens: [],
    tastes: ['甜', '酸'],
    textures: ['多汁', '清脆'],
    season: '夏季',
    storage_tip: '整顆常溫保存 2-3 天，切開後冷藏保存 3-5 天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 芒果 ─────────────────────────────────────────────────
  {
    id: 'mango',
    name: '芒果',
    name_en: 'Mango',
    categories: ['水果'],
    variants: [
      { id: 'mango--raw',    label: '芒果',       state: 'raw',    yield_ratio: 0.65 },
      { id: 'mango--frozen', label: '冷凍芒果',   state: 'frozen', yield_ratio: 1.0 },
      { id: 'mango--dried',  label: '芒果乾',     state: 'dried',  yield_ratio: 0.3 },
    ],
    nutrition_per_100g: {
      calories: 60, protein: 0.8, fat: 0.4, carbs: 15.0, fiber: 1.6, sodium: 1,
    },
    substitutes: ['pineapple', 'papaya'],
    allergens: [],
    tastes: ['甜', '微酸'],
    textures: ['多汁', '軟嫩'],
    season: '夏季',
    storage_tip: '未熟常溫催熟，熟成後冷藏 3-5 天。切開後以保鮮膜覆蓋。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 木瓜 ─────────────────────────────────────────────────
  {
    id: 'papaya',
    name: '木瓜',
    name_en: 'Papaya',
    categories: ['水果'],
    variants: [
      { id: 'papaya--ripe',   label: '熟木瓜',   state: 'raw', yield_ratio: 0.6 },
      { id: 'papaya--green',  label: '青木瓜',   state: 'raw', yield_ratio: 0.6 },
    ],
    nutrition_per_100g: {
      calories: 43, protein: 0.5, fat: 0.3, carbs: 10.8, fiber: 1.7, sodium: 8,
    },
    substitutes: ['mango', 'pineapple'],
    allergens: [],
    tastes: ['甜'],
    textures: ['軟嫩', '多汁'],
    season: '全年',
    storage_tip: '未熟常溫催熟，熟成後冷藏 5-7 天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 柳橙 ─────────────────────────────────────────────────
  {
    id: 'orange',
    name: '柳橙',
    name_en: 'Orange',
    categories: ['水果', '香料'],
    variants: [
      { id: 'orange--raw',   label: '柳橙',   state: 'raw', yield_ratio: 0.7 },
      { id: 'orange--juice', label: '柳橙汁', state: 'raw', yield_ratio: 1.0 },
      { id: 'orange--zest',  label: '橙皮',   state: 'raw', yield_ratio: 0.05 },
    ],
    nutrition_per_100g: {
      calories: 47, protein: 0.9, fat: 0.1, carbs: 11.8, fiber: 2.4, sodium: 0,
    },
    substitutes: ['lemon', 'grapefruit'],
    allergens: [],
    tastes: ['甜', '酸'],
    textures: ['多汁'],
    season: '冬季',
    storage_tip: '常溫保存 1 週，冷藏可保存 2-4 週。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 葡萄柚 ───────────────────────────────────────────────
  {
    id: 'grapefruit',
    name: '葡萄柚',
    name_en: 'Grapefruit',
    categories: ['水果'],
    variants: [
      { id: 'grapefruit--raw',   label: '葡萄柚',   state: 'raw', yield_ratio: 0.55 },
      { id: 'grapefruit--juice', label: '葡萄柚汁', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 42, protein: 0.8, fat: 0.1, carbs: 10.7, fiber: 1.6, sodium: 0,
    },
    substitutes: ['orange', 'lemon'],
    allergens: [],
    tastes: ['酸', '苦', '甜'],
    textures: ['多汁'],
    season: '冬季',
    storage_tip: '常溫保存 1 週，冷藏可保存 2-3 週。注意與多種藥物有相互作用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 奇異果 ───────────────────────────────────────────────
  {
    id: 'kiwi',
    name: '奇異果',
    name_en: 'Kiwi',
    categories: ['水果'],
    variants: [
      { id: 'kiwi--green',  label: '綠奇異果', state: 'raw', yield_ratio: 0.85 },
      { id: 'kiwi--golden', label: '黃奇異果', state: 'raw', yield_ratio: 0.85 },
    ],
    nutrition_per_100g: {
      calories: 61, protein: 1.1, fat: 0.5, carbs: 14.7, fiber: 3.0, sodium: 3,
    },
    substitutes: ['strawberry', 'mango'],
    allergens: [],
    tastes: ['酸', '甜'],
    textures: ['軟嫩', '多汁'],
    season: '春季',
    storage_tip: '未熟常溫催熟，熟成後冷藏 1-2 週。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 草莓 ─────────────────────────────────────────────────
  {
    id: 'strawberry',
    name: '草莓',
    name_en: 'Strawberry',
    categories: ['水果'],
    variants: [
      { id: 'strawberry--fresh',  label: '新鮮草莓', state: 'raw',    yield_ratio: 1.0 },
      { id: 'strawberry--frozen', label: '冷凍草莓', state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 32, protein: 0.7, fat: 0.3, carbs: 7.7, fiber: 2.0, sodium: 1,
    },
    substitutes: ['raspberry', 'blueberry'],
    allergens: [],
    tastes: ['甜', '酸'],
    textures: ['軟嫩', '多汁'],
    season: '春季',
    storage_tip: '冷藏保存，2-3 天內食用；洗前不要去蒂。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 藍莓 ─────────────────────────────────────────────────
  {
    id: 'blueberry',
    name: '藍莓',
    name_en: 'Blueberry',
    categories: ['水果'],
    variants: [
      { id: 'blueberry--fresh',  label: '新鮮藍莓', state: 'raw',    yield_ratio: 1.0 },
      { id: 'blueberry--frozen', label: '冷凍藍莓', state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 57, protein: 0.7, fat: 0.3, carbs: 14.5, fiber: 2.4, sodium: 1,
    },
    substitutes: ['strawberry', 'blackberry'],
    allergens: [],
    tastes: ['甜', '微酸'],
    textures: ['軟嫩', '多汁'],
    season: '夏季',
    storage_tip: '冷藏保存，1 週內食用；冷凍可保存 6 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 葡萄 ─────────────────────────────────────────────────
  {
    id: 'grape',
    name: '葡萄',
    name_en: 'Grape',
    categories: ['水果'],
    variants: [
      { id: 'grape--green',  label: '青葡萄',   state: 'raw', yield_ratio: 1.0 },
      { id: 'grape--red',    label: '紅葡萄',   state: 'raw', yield_ratio: 1.0 },
      { id: 'grape--raisin', label: '葡萄乾',   state: 'dried', yield_ratio: 0.25 },
    ],
    nutrition_per_100g: {
      calories: 69, protein: 0.7, fat: 0.2, carbs: 18.1, fiber: 0.9, sodium: 2,
    },
    substitutes: ['currant', 'cherry'],
    allergens: [],
    tastes: ['甜', '微酸'],
    textures: ['多汁', '清脆'],
    season: '秋季',
    storage_tip: '冷藏保存，1-2 週內食用；不要事先清洗。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 椰子 ─────────────────────────────────────────────────
  {
    id: 'coconut',
    name: '椰子',
    name_en: 'Coconut',
    categories: ['水果', '香料'],
    variants: [
      { id: 'coconut--milk',        label: '椰奶',         state: 'raw',    yield_ratio: 1.0 },
      { id: 'coconut--cream',       label: '椰漿',         state: 'raw',    yield_ratio: 1.0 },
      { id: 'coconut--shredded',    label: '椰絲',         state: 'dried',  yield_ratio: 1.0 },
      { id: 'coconut--water',       label: '椰子水',       state: 'raw',    yield_ratio: 1.0 },
      { id: 'coconut--oil',         label: '椰子油',       state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 354, protein: 3.3, fat: 33.5, carbs: 15.2, fiber: 9.0, sodium: 20,
    },
    substitutes: ['cream', 'oat_milk'],
    allergens: ['tree_nuts'],
    tastes: ['甜', '清香'],
    textures: ['滑順', '濃郁'],
    season: '全年',
    storage_tip: '罐裝椰奶開封後冷藏，2-3 天內使用；椰子水開封當日飲用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 百香果 ───────────────────────────────────────────────
  {
    id: 'passion_fruit',
    name: '百香果',
    name_en: 'Passion Fruit',
    categories: ['水果'],
    variants: [
      { id: 'passion_fruit--raw',  label: '百香果',   state: 'raw', yield_ratio: 0.4 },
      { id: 'passion_fruit--juice', label: '百香果汁', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 97, protein: 2.2, fat: 0.7, carbs: 23.4, fiber: 10.4, sodium: 28,
    },
    substitutes: ['mango', 'kiwi'],
    allergens: [],
    tastes: ['酸', '甜'],
    textures: ['多汁'],
    season: '夏季',
    storage_tip: '常溫保存，果皮起皺後最為香甜；可冷凍果肉 3 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 火龍果 ───────────────────────────────────────────────
  {
    id: 'dragon_fruit',
    name: '火龍果',
    name_en: 'Dragon Fruit',
    categories: ['水果'],
    variants: [
      { id: 'dragon_fruit--white', label: '白肉火龍果', state: 'raw', yield_ratio: 0.55 },
      { id: 'dragon_fruit--red',   label: '紅肉火龍果', state: 'raw', yield_ratio: 0.55 },
    ],
    nutrition_per_100g: {
      calories: 60, protein: 1.2, fat: 0.4, carbs: 13.0, fiber: 3.0, sodium: 39,
    },
    substitutes: ['kiwi'],
    allergens: [],
    tastes: ['甜', '清淡'],
    textures: ['多汁', '清脆'],
    season: '夏季',
    storage_tip: '常溫保存至熟，冷藏可保存 5 天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 荔枝 ─────────────────────────────────────────────────
  {
    id: 'lychee',
    name: '荔枝',
    name_en: 'Lychee',
    categories: ['水果'],
    variants: [
      { id: 'lychee--fresh',  label: '新鮮荔枝', state: 'raw',    yield_ratio: 0.6 },
      { id: 'lychee--canned', label: '罐裝荔枝', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 66, protein: 0.8, fat: 0.4, carbs: 16.5, fiber: 1.3, sodium: 1,
    },
    substitutes: ['longan', 'rambutan'],
    allergens: [],
    tastes: ['甜', '微酸'],
    textures: ['多汁', '軟嫩'],
    season: '夏季',
    storage_tip: '冷藏保存，3-5 天內食用；冷凍可保存 3 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 龍眼 ─────────────────────────────────────────────────
  {
    id: 'longan',
    name: '龍眼',
    name_en: 'Longan',
    categories: ['水果'],
    variants: [
      { id: 'longan--fresh',  label: '新鮮龍眼', state: 'raw',   yield_ratio: 0.55 },
      { id: 'longan--dried',  label: '龍眼乾',   state: 'dried', yield_ratio: 0.25 },
    ],
    nutrition_per_100g: {
      calories: 60, protein: 1.3, fat: 0.1, carbs: 15.1, fiber: 1.1, sodium: 0,
    },
    substitutes: ['lychee', 'grape'],
    allergens: [],
    tastes: ['甜'],
    textures: ['多汁', '軟嫩'],
    season: '夏季',
    storage_tip: '冷藏保存，3-5 天內食用；龍眼乾密封常溫保存 1 年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 西瓜 ─────────────────────────────────────────────────
  {
    id: 'watermelon',
    name: '西瓜',
    name_en: 'Watermelon',
    categories: ['水果'],
    variants: [
      { id: 'watermelon--raw',   label: '西瓜',   state: 'raw',    yield_ratio: 0.6 },
      { id: 'watermelon--juice', label: '西瓜汁', state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 30, protein: 0.6, fat: 0.2, carbs: 7.6, fiber: 0.4, sodium: 1,
    },
    substitutes: ['honeydew', 'cantaloupe'],
    allergens: [],
    tastes: ['甜', '清淡'],
    textures: ['多汁', '清脆'],
    season: '夏季',
    storage_tip: '整顆常溫保存 2 週，切開後冷藏 3-5 天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 哈密瓜 ───────────────────────────────────────────────
  {
    id: 'cantaloupe',
    name: '哈密瓜',
    name_en: 'Cantaloupe',
    categories: ['水果'],
    variants: [
      { id: 'cantaloupe--raw', label: '哈密瓜', state: 'raw', yield_ratio: 0.5 },
    ],
    nutrition_per_100g: {
      calories: 34, protein: 0.8, fat: 0.2, carbs: 8.2, fiber: 0.9, sodium: 16,
    },
    substitutes: ['watermelon', 'honeydew'],
    allergens: [],
    tastes: ['甜', '香'],
    textures: ['多汁', '軟嫩'],
    season: '夏季',
    storage_tip: '整顆常溫催熟，熟後冷藏 5 天；切開後保鮮膜覆蓋冷藏。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 梨子 ─────────────────────────────────────────────────
  {
    id: 'pear',
    name: '梨子',
    name_en: 'Pear',
    categories: ['水果'],
    variants: [
      { id: 'pear--raw',      label: '梨子',   state: 'raw',    yield_ratio: 0.9 },
      { id: 'pear--asian',    label: '水梨',   state: 'raw',    yield_ratio: 0.9 },
      { id: 'pear--canned',   label: '罐裝梨', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 57, protein: 0.4, fat: 0.1, carbs: 15.2, fiber: 3.1, sodium: 1,
    },
    substitutes: ['apple', 'quince'],
    allergens: [],
    tastes: ['甜', '微酸'],
    textures: ['多汁', '清脆'],
    season: '秋季',
    storage_tip: '常溫催熟，熟後冷藏 3-5 天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 桃子 ─────────────────────────────────────────────────
  {
    id: 'peach',
    name: '桃子',
    name_en: 'Peach',
    categories: ['水果'],
    variants: [
      { id: 'peach--raw',    label: '桃子',   state: 'raw',    yield_ratio: 0.87 },
      { id: 'peach--canned', label: '罐裝桃', state: 'cooked', yield_ratio: 1.0 },
      { id: 'peach--frozen', label: '冷凍桃', state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 39, protein: 0.9, fat: 0.3, carbs: 9.5, fiber: 1.5, sodium: 0,
    },
    substitutes: ['nectarine', 'apricot', 'pear'],
    allergens: [],
    tastes: ['甜', '微酸'],
    textures: ['軟嫩', '多汁'],
    season: '夏季',
    storage_tip: '常溫催熟，熟後冷藏 3-5 天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 酪梨 ─────────────────────────────────────────────────
  {
    id: 'avocado',
    name: '酪梨',
    name_en: 'Avocado',
    categories: ['水果'],
    variants: [
      { id: 'avocado--raw',    label: '酪梨',   state: 'raw',    yield_ratio: 0.7 },
      { id: 'avocado--mashed', label: '酪梨泥', state: 'raw',    yield_ratio: 0.7 },
    ],
    nutrition_per_100g: {
      calories: 160, protein: 2.0, fat: 14.7, carbs: 8.5, fiber: 6.7, sodium: 7,
    },
    substitutes: ['hummus'],
    allergens: [],
    tastes: ['清淡', '奶香'],
    textures: ['滑順', '綿密'],
    season: '全年',
    storage_tip: '常溫催熟，熟後冷藏 2-3 天；切開後淋檸檬汁防止氧化。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 椎茸（乾）───────────────────────────────────────────
  {
    id: 'dried_shiitake',
    name: '乾香菇',
    name_en: 'Dried Shiitake Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'dried_shiitake--whole',    label: '乾香菇（整朵）', state: 'dried', yield_ratio: 0.3 },
      { id: 'dried_shiitake--sliced',   label: '乾香菇（片）',   state: 'dried', yield_ratio: 0.3 },
    ],
    nutrition_per_100g: {
      calories: 296, protein: 9.6, fat: 1.0, carbs: 63.9, fiber: 26.2, sodium: 13,
    },
    substitutes: ['shiitake', 'porcini'],
    allergens: [],
    tastes: ['鮮'],
    textures: ['嚼勁'],
    season: '全年',
    storage_tip: '密封常溫保存 1 年；泡發後冷藏 3 天內使用，泡發水可留作高湯。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 舞菇 ─────────────────────────────────────────────────
  {
    id: 'maitake',
    name: '舞菇',
    name_en: 'Maitake Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'maitake--raw',    label: '生舞菇', state: 'raw',    yield_ratio: 1.0 },
      { id: 'maitake--cooked', label: '熟舞菇', state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 31, protein: 2.0, fat: 0.1, carbs: 6.9, fiber: 2.7, sodium: 1,
    },
    substitutes: ['shiitake', 'oyster_mushroom'],
    allergens: [],
    tastes: ['鮮'],
    textures: ['嚼勁', '軟嫩'],
    season: '秋季',
    storage_tip: '冷藏保存，3-5 天內食用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 雪白菇 ───────────────────────────────────────────────
  {
    id: 'bunashimeji',
    name: '雪白菇',
    name_en: 'Bunashimeji Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'bunashimeji--raw',    label: '生雪白菇', state: 'raw',    yield_ratio: 1.0 },
      { id: 'bunashimeji--cooked', label: '熟雪白菇', state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 27, protein: 2.7, fat: 0.2, carbs: 4.4, fiber: 2.7, sodium: 2,
    },
    substitutes: ['shimeji', 'enoki'],
    allergens: [],
    tastes: ['鮮'],
    textures: ['嚼勁', '清脆'],
    season: '全年',
    storage_tip: '冷藏保存，3-5 天內食用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 牛肝菌 ───────────────────────────────────────────────
  {
    id: 'porcini',
    name: '牛肝菌',
    name_en: 'Porcini Mushroom',
    categories: ['菇類'],
    variants: [
      { id: 'porcini--fresh', label: '新鮮牛肝菌', state: 'raw',   yield_ratio: 1.0 },
      { id: 'porcini--dried', label: '乾牛肝菌',   state: 'dried', yield_ratio: 0.15 },
    ],
    nutrition_per_100g: {
      calories: 25, protein: 3.7, fat: 0.5, carbs: 3.4, fiber: 2.3, sodium: 5,
    },
    substitutes: ['shiitake', 'portobello'],
    allergens: [],
    tastes: ['鮮', '堅果香'],
    textures: ['嚼勁', '軟嫩'],
    season: '秋季',
    storage_tip: '新鮮品冷藏 2-3 天；乾品密封常溫保存 1 年。泡發後冷藏 2 天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 椰漿湯底 ─────────────────────────────────────────────
  {
    id: 'coconut_milk_broth',
    name: '椰漿湯底',
    name_en: 'Coconut Milk Broth',
    categories: ['湯底'],
    variants: [
      { id: 'coconut_milk_broth--regular', label: '椰漿湯底', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 170, protein: 1.5, fat: 17.0, carbs: 4.0, sodium: 200,
    },
    substitutes: ['chicken_broth', 'vegetable_broth'],
    allergens: ['tree_nuts'],
    tastes: ['甜', '鮮'],
    textures: ['液體', '濃稠'],
    season: '全年',
    storage_tip: '現做現用，剩餘湯底冷藏 1-2 天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 牛骨高湯 ─────────────────────────────────────────────
  {
    id: 'beef_bone_broth',
    name: '牛骨高湯',
    name_en: 'Beef Bone Broth',
    categories: ['湯底'],
    variants: [
      { id: 'beef_bone_broth--regular', label: '牛骨高湯',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'beef_bone_broth--powder',  label: '牛骨高湯粉', state: 'dried',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 20, protein: 3.5, fat: 0.5, carbs: 0.5, sodium: 450,
    },
    substitutes: ['pork_bone_broth', 'chicken_broth'],
    allergens: [],
    tastes: ['鮮', '鹹'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '冷藏 3-4 天，冷凍 3 個月；浮油凝固後可撈除，湯底更清爽。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鳳梨罐頭 ─────────────────────────────────────────────
  {
    id: 'canned_pineapple',
    name: '罐頭鳳梨',
    name_en: 'Canned Pineapple',
    categories: ['水果'],
    variants: [
      { id: 'canned_pineapple--rings',  label: '鳳梨罐頭（圓片）', state: 'cooked', yield_ratio: 1.0 },
      { id: 'canned_pineapple--chunks', label: '鳳梨罐頭（塊）',   state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 60, protein: 0.4, fat: 0.1, carbs: 15.7, fiber: 1.0, sodium: 1,
    },
    substitutes: ['pineapple', 'mango'],
    allergens: [],
    tastes: ['甜', '微酸'],
    textures: ['軟嫩', '多汁'],
    season: '全年',
    storage_tip: '開封後轉入密封容器，冷藏 5-7 天內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 牛蒡 ─────────────────────────────────────────────────
  {
    id: 'burdock',
    name: '牛蒡',
    name_en: 'Burdock Root',
    categories: ['蔬菜'],
    variants: [
      { id: 'burdock--raw',    label: '牛蒡',   state: 'raw',    yield_ratio: 0.85 },
      { id: 'burdock--sliced', label: '牛蒡片', state: 'sliced', yield_ratio: 0.85 },
    ],
    nutrition_per_100g: {
      calories: 72, protein: 1.7, fat: 0.2, carbs: 17.3, fiber: 3.3, sodium: 5,
    },
    substitutes: ['parsnip', 'carrot'],
    allergens: [],
    tastes: ['鮮', '微苦'],
    textures: ['清脆', '嚼勁'],
    season: '冬季',
    storage_tip: '冷藏保存，1-2 週內使用；削皮後泡水防止氧化。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 蓮藕 ─────────────────────────────────────────────────
  {
    id: 'lotus_root',
    name: '蓮藕',
    name_en: 'Lotus Root',
    categories: ['蔬菜'],
    variants: [
      { id: 'lotus_root--raw',    label: '蓮藕',       state: 'raw',    yield_ratio: 0.8 },
      { id: 'lotus_root--sliced', label: '蓮藕片',     state: 'sliced', yield_ratio: 0.8 },
      { id: 'lotus_root--cooked', label: '熟蓮藕',     state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 74, protein: 2.6, fat: 0.1, carbs: 17.2, fiber: 3.1, sodium: 45,
    },
    substitutes: ['burdock', 'water_chestnut'],
    allergens: [],
    tastes: ['清淡', '甜'],
    textures: ['清脆', '粉糯'],
    season: '秋冬',
    storage_tip: '冷藏保存，1-2 週內食用；切開後泡醋水防止氧化。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 水煮罐頭番茄 ─────────────────────────────────────────
  {
    id: 'canned_tomato',
    name: '罐頭番茄',
    name_en: 'Canned Tomato',
    categories: ['蔬菜'],
    variants: [
      { id: 'canned_tomato--whole',   label: '整顆罐頭番茄', state: 'cooked', yield_ratio: 1.0 },
      { id: 'canned_tomato--crushed', label: '碎番茄罐頭',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'canned_tomato--puree',   label: '番茄泥罐頭',   state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 24, protein: 1.2, fat: 0.3, carbs: 5.1, fiber: 1.5, sodium: 230,
    },
    substitutes: ['tomato', 'tomato_passata'],
    allergens: [],
    tastes: ['酸', '甜'],
    textures: ['軟嫩', '多汁'],
    season: '全年',
    storage_tip: '開封後轉入密封容器冷藏，3-4 天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
