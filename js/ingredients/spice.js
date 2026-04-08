/**
 * @fileoverview 香料類食材（40 種）
 *
 * 包含：
 *  - 新鮮香草與香辛植物（薑、蒜、辣椒、香菜等）
 *  - 乾燥香料粉（八角、肉桂、孜然等）
 *  - 柑橘類（檸檬、萊姆）—— 烹飪中主要作為增香
 *  - 特殊日式/韓式香料（七味粉、山椒等）
 *
 * 尚未有 verified_source 的項目請使用 verify-ingredient skill 補充。
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 黑胡椒 ───────────────────────────────────────────────
  {
    id: 'black_pepper',
    name: '黑胡椒',
    name_en: 'Black Pepper',
    categories: ['香料'],
    variants: [
      { id: 'black_pepper--ground',  label: '黑胡椒粉',   state: 'powdered' },
      { id: 'black_pepper--whole',   label: '黑胡椒粒',   state: 'raw' },
      { id: 'black_pepper--cracked', label: '粗粒黑胡椒', state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 251, protein: 10.4, fat: 3.3, carbs: 64, fiber: 25.3, sodium: 20 },
    allergens: [],
    tastes: ['辣', '苦'],
    textures: ['顆粒'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170931/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 蒜泥 ─────────────────────────────────────────────────
  {
    id: 'garlic_paste',
    name: '蒜泥',
    name_en: 'Garlic Paste',
    categories: ['香料'],
    variants: [
      { id: 'garlic_paste--tube',  label: '管裝蒜泥', state: 'paste' },
      { id: 'garlic_paste--fresh', label: '自磨蒜泥', state: 'paste' },
    ],
    substitutes: ['garlic_raw'],
    allergens: [],
    tastes: ['辣', '苦'],
    textures: ['黏稠'],
  },

  // ── 白芝麻 ───────────────────────────────────────────────
  {
    id: 'sesame_seed_white',
    name: '白芝麻',
    name_en: 'White Sesame Seed',
    categories: ['香料'],
    variants: [
      { id: 'sesame_seed_white--raw',     label: '生白芝麻', state: 'raw' },
      { id: 'sesame_seed_white--toasted', label: '熟白芝麻', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 573, protein: 17.7, fat: 49.7, carbs: 23.4, fiber: 11.8, sodium: 11 },
    allergens: ['sesame'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170148/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 大蒜（鮮）───────────────────────────────────────────
  {
    id: 'garlic_raw',
    name: '大蒜',
    name_en: 'Garlic',
    categories: ['香料', '蔬菜'],
    variants: [
      { id: 'garlic_raw--whole',   label: '整顆大蒜',   state: 'raw' },
      { id: 'garlic_raw--minced',  label: '蒜末',       state: 'minced' },
      { id: 'garlic_raw--sliced',  label: '蒜片',       state: 'sliced' },
      { id: 'garlic_raw--roasted', label: '烤大蒜',     state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 149, protein: 6.4, fat: 0.5, carbs: 33, fiber: 2.1, sodium: 17 },
    substitutes: ['garlic_paste'],
    allergens: [],
    tastes: ['辣', '苦'],
    textures: ['清脆'],
    storage_tip: '放置室溫陰涼通風處，避免潮濕。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/169230/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 薑 ───────────────────────────────────────────────────
  {
    id: 'ginger',
    name: '薑',
    name_en: 'Ginger',
    categories: ['香料'],
    variants: [
      { id: 'ginger--fresh',   label: '生薑',     state: 'raw',     yield_ratio: 1.0 },
      { id: 'ginger--sliced',  label: '薑片',     state: 'sliced',  yield_ratio: 1.0 },
      { id: 'ginger--paste',   label: '薑泥',     state: 'paste',   yield_ratio: 1.0 },
      { id: 'ginger--dried',   label: '乾薑片',   state: 'dried',   yield_ratio: 0.15 },
      { id: 'ginger--powder',  label: '薑粉',     state: 'powdered',yield_ratio: 0.1 },
      { id: 'ginger--pickled', label: '壽司薑片', state: 'pickled', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 80, protein: 1.8, fat: 0.8, carbs: 18, fiber: 2, sodium: 13 },
    substitutes: ['ginger_powder'],
    allergens: [],
    storage_tip: '冷藏可放 2 週，冷凍磨泥可保存數個月。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/169231/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 辣椒（新鮮）─────────────────────────────────────────
  {
    id: 'chili_fresh',
    name: '辣椒',
    name_en: 'Fresh Chili Pepper',
    categories: ['香料', '蔬菜'],
    variants: [
      { id: 'chili_fresh--red',        label: '紅辣椒',       state: 'raw' },
      { id: 'chili_fresh--green',      label: '青辣椒',       state: 'raw' },
      { id: 'chili_fresh--birds_eye',  label: '朝天椒',       state: 'raw' },
      { id: 'chili_fresh--jalapeno',   label: '墨西哥辣椒',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 40, protein: 1.9, fat: 0.4, carbs: 8.8, fiber: 1.5, sodium: 9 },
    substitutes: ['dried_chili', 'chili_flakes'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170913/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 乾辣椒 ───────────────────────────────────────────────
  {
    id: 'dried_chili',
    name: '乾辣椒',
    name_en: 'Dried Chili',
    categories: ['香料'],
    variants: [
      { id: 'dried_chili--whole',  label: '乾辣椒（整根）', state: 'dried' },
      { id: 'dried_chili--flakes', label: '辣椒片',         state: 'dried' },
      { id: 'dried_chili--powder', label: '辣椒粉',         state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 318, protein: 12, fat: 17, carbs: 56, fiber: 28, sodium: 30 },
    substitutes: ['chili_fresh'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170915/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 檸檬 ─────────────────────────────────────────────────
  {
    id: 'lemon',
    name: '檸檬',
    name_en: 'Lemon',
    categories: ['香料', '水果'],
    variants: [
      { id: 'lemon--slice',   label: '檸檬片',     state: 'sliced' },
      { id: 'lemon--juice',   label: '檸檬汁',     state: 'raw' },
      { id: 'lemon--zest',    label: '檸檬皮絲',   state: 'raw' },
      { id: 'lemon--whole',   label: '整顆檸檬',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 29, protein: 1.1, fat: 0.3, carbs: 9.3, fiber: 2.8, sodium: 2 },
    substitutes: ['lime', 'rice_vinegar'],
    allergens: [],
    tastes: ['酸'],
    textures: ['多汁'],
    storage_tip: '室溫 1 週，冷藏可延長至 1 個月。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/167747/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 萊姆 ─────────────────────────────────────────────────
  {
    id: 'lime',
    name: '萊姆',
    name_en: 'Lime',
    categories: ['香料', '水果'],
    variants: [
      { id: 'lime--juice',  label: '萊姆汁',   state: 'raw' },
      { id: 'lime--zest',   label: '萊姆皮絲', state: 'raw' },
      { id: 'lime--whole',  label: '整顆萊姆', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 30, protein: 0.7, fat: 0.2, carbs: 10.5, fiber: 2.8, sodium: 2 },
    substitutes: ['lemon'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/167751/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 香茅 ─────────────────────────────────────────────────
  {
    id: 'lemongrass',
    name: '香茅',
    name_en: 'Lemongrass',
    categories: ['香料'],
    variants: [
      { id: 'lemongrass--fresh',  label: '新鮮香茅', state: 'raw' },
      { id: 'lemongrass--paste',  label: '香茅泥',   state: 'paste' },
      { id: 'lemongrass--dried',  label: '乾香茅',   state: 'dried' },
    ],
    nutrition_per_100g: { calories: 99, protein: 1.8, fat: 0.5, carbs: 25.3, fiber: 0, sodium: 6 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172232/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 九層塔（羅勒）────────────────────────────────────────
  {
    id: 'basil',
    name: '九層塔',
    name_en: 'Thai Basil / Basil',
    categories: ['香料'],
    variants: [
      { id: 'basil--thai',   label: '泰式九層塔（台灣九層塔）', state: 'raw' },
      { id: 'basil--sweet',  label: '甜羅勒（義式）',           state: 'raw' },
      { id: 'basil--dried',  label: '乾燥羅勒',                 state: 'dried' },
    ],
    nutrition_per_100g: { calories: 23, protein: 3.2, fat: 0.6, carbs: 2.7, fiber: 1.6, sodium: 4 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172232/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 香菜 ─────────────────────────────────────────────────
  {
    id: 'cilantro',
    name: '香菜',
    name_en: 'Cilantro (Coriander Leaves)',
    categories: ['香料', '蔬菜'],
    variants: [
      { id: 'cilantro--fresh',   label: '新鮮香菜', state: 'raw' },
      { id: 'cilantro--dried',   label: '乾燥香菜', state: 'dried' },
    ],
    nutrition_per_100g: { calories: 23, protein: 2.1, fat: 0.5, carbs: 3.7, fiber: 2.8, sodium: 46 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169997/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 紫蘇 ─────────────────────────────────────────────────
  {
    id: 'shiso',
    name: '紫蘇',
    name_en: 'Perilla / Shiso',
    categories: ['香料'],
    variants: [
      { id: 'shiso--green',   label: '青紫蘇',     state: 'raw' },
      { id: 'shiso--red',     label: '紅紫蘇',     state: 'raw' },
      { id: 'shiso--pickled', label: '醃紫蘇葉',   state: 'pickled' },
    ],
    nutrition_per_100g: { calories: 37, protein: 3.9, fat: 0.1, carbs: 7, fiber: 7.3, sodium: 1 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 薄荷 ─────────────────────────────────────────────────
  {
    id: 'mint',
    name: '薄荷',
    name_en: 'Mint',
    categories: ['香料'],
    variants: [
      { id: 'mint--fresh',  label: '新鮮薄荷',   state: 'raw' },
      { id: 'mint--dried',  label: '乾燥薄荷',   state: 'dried' },
    ],
    nutrition_per_100g: { calories: 44, protein: 3.3, fat: 0.7, carbs: 8.5, fiber: 6.8, sodium: 31 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/173474/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 月桂葉 ───────────────────────────────────────────────
  {
    id: 'bay_leaf',
    name: '月桂葉',
    name_en: 'Bay Leaf',
    categories: ['香料'],
    variants: [
      { id: 'bay_leaf--dried',  label: '乾燥月桂葉', state: 'dried' },
      { id: 'bay_leaf--fresh',  label: '新鮮月桂葉', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 313, protein: 7.6, fat: 8.4, carbs: 74.9, fiber: 26.3, sodium: 23 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170923/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 八角 ─────────────────────────────────────────────────
  {
    id: 'star_anise',
    name: '八角',
    name_en: 'Star Anise',
    categories: ['香料'],
    variants: [
      { id: 'star_anise--whole',   label: '整顆八角', state: 'dried' },
      { id: 'star_anise--powder',  label: '八角粉',   state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 337, protein: 17.6, fat: 15.9, carbs: 50, fiber: 14.6, sodium: 16 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170918/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 肉桂 ─────────────────────────────────────────────────
  {
    id: 'cinnamon',
    name: '肉桂',
    name_en: 'Cinnamon',
    categories: ['香料'],
    variants: [
      { id: 'cinnamon--powder', label: '肉桂粉',   state: 'powdered' },
      { id: 'cinnamon--stick',  label: '肉桂棒',   state: 'dried' },
    ],
    nutrition_per_100g: { calories: 247, protein: 4, fat: 1.2, carbs: 81, fiber: 53.1, sodium: 10 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/171320/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 孜然 ─────────────────────────────────────────────────
  {
    id: 'cumin',
    name: '孜然',
    name_en: 'Cumin',
    categories: ['香料'],
    variants: [
      { id: 'cumin--seed',   label: '孜然籽',   state: 'dried' },
      { id: 'cumin--powder', label: '孜然粉',   state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 375, protein: 17.8, fat: 22.3, carbs: 44.2, fiber: 10.5, sodium: 168 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170927/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 薑黃 ─────────────────────────────────────────────────
  {
    id: 'turmeric',
    name: '薑黃',
    name_en: 'Turmeric',
    categories: ['香料'],
    variants: [
      { id: 'turmeric--powder', label: '薑黃粉',   state: 'powdered' },
      { id: 'turmeric--fresh',  label: '新鮮薑黃', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 354, protein: 7.8, fat: 9.9, carbs: 64.9, fiber: 21.1, sodium: 38 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172231/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 紅椒粉 ───────────────────────────────────────────────
  {
    id: 'paprika',
    name: '紅椒粉',
    name_en: 'Paprika',
    categories: ['香料'],
    variants: [
      { id: 'paprika--sweet',   label: '甜紅椒粉',   state: 'powdered' },
      { id: 'paprika--smoked',  label: '煙燻紅椒粉', state: 'powdered' },
      { id: 'paprika--hot',     label: '辣紅椒粉',   state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 282, protein: 14.1, fat: 12.9, carbs: 53.9, fiber: 34.9, sodium: 68 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/171328/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 山葵（哇沙比）────────────────────────────────────────
  {
    id: 'wasabi',
    name: '山葵',
    name_en: 'Wasabi',
    categories: ['香料'],
    variants: [
      { id: 'wasabi--paste',  label: '山葵醬（管裝）', state: 'paste' },
      { id: 'wasabi--fresh',  label: '新鮮山葵',       state: 'raw' },
      { id: 'wasabi--powder', label: '山葵粉',         state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 109, protein: 4.8, fat: 0.6, carbs: 23.5, fiber: 7.8, sodium: 17 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 黑芝麻 ───────────────────────────────────────────────
  {
    id: 'sesame_seed_black',
    name: '黑芝麻',
    name_en: 'Black Sesame Seed',
    categories: ['香料'],
    variants: [
      { id: 'sesame_seed_black--raw',     label: '生黑芝麻', state: 'raw' },
      { id: 'sesame_seed_black--toasted', label: '熟黑芝麻', state: 'cooked' },
      { id: 'sesame_seed_black--powder',  label: '黑芝麻粉', state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 573, protein: 17.7, fat: 49.7, carbs: 23.4, fiber: 11.8, sodium: 11 },
    allergens: ['sesame'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170148/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 七味粉 ───────────────────────────────────────────────
  {
    id: 'shichimi',
    name: '七味粉',
    name_en: 'Shichimi Togarashi (Seven Spice)',
    categories: ['香料'],
    variants: [
      { id: 'shichimi--regular', label: '七味唐辛子', state: 'powdered' },
    ],
    allergens: ['sesame'],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 山椒 ─────────────────────────────────────────────────
  {
    id: 'sansho',
    name: '山椒',
    name_en: 'Sansho Pepper (Japanese Pepper)',
    categories: ['香料'],
    variants: [
      { id: 'sansho--powder', label: '山椒粉',   state: 'powdered' },
      { id: 'sansho--whole',  label: '山椒粒',   state: 'dried' },
    ],
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 花椒 ─────────────────────────────────────────────────
  {
    id: 'sichuan_pepper',
    name: '花椒',
    name_en: 'Sichuan Pepper',
    categories: ['香料'],
    variants: [
      { id: 'sichuan_pepper--whole',  label: '花椒粒',   state: 'dried' },
      { id: 'sichuan_pepper--powder', label: '花椒粉',   state: 'powdered' },
      { id: 'sichuan_pepper--oil',    label: '花椒油',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 247, protein: 6.7, fat: 8.9, carbs: 50.1, fiber: 12, sodium: 13 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蒔蘿 ─────────────────────────────────────────────────
  {
    id: 'dill',
    name: '蒔蘿',
    name_en: 'Dill',
    categories: ['香料'],
    variants: [
      { id: 'dill--fresh',  label: '新鮮蒔蘿', state: 'raw' },
      { id: 'dill--dried',  label: '乾燥蒔蘿', state: 'dried' },
      { id: 'dill--seed',   label: '蒔蘿籽',   state: 'dried' },
    ],
    nutrition_per_100g: { calories: 43, protein: 3.5, fat: 1.1, carbs: 7, fiber: 2.1, sodium: 61 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172231/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 百里香 ───────────────────────────────────────────────
  {
    id: 'thyme',
    name: '百里香',
    name_en: 'Thyme',
    categories: ['香料'],
    variants: [
      { id: 'thyme--fresh', label: '新鮮百里香', state: 'raw' },
      { id: 'thyme--dried', label: '乾燥百里香', state: 'dried' },
    ],
    nutrition_per_100g: { calories: 101, protein: 5.6, fat: 1.7, carbs: 24.5, fiber: 14, sodium: 9 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172232/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 迷迭香 ───────────────────────────────────────────────
  {
    id: 'rosemary',
    name: '迷迭香',
    name_en: 'Rosemary',
    categories: ['香料'],
    variants: [
      { id: 'rosemary--fresh', label: '新鮮迷迭香', state: 'raw' },
      { id: 'rosemary--dried', label: '乾燥迷迭香', state: 'dried' },
    ],
    nutrition_per_100g: { calories: 131, protein: 3.3, fat: 5.9, carbs: 20.7, fiber: 14.1, sodium: 26 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/171325/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 奧勒岡 ───────────────────────────────────────────────
  {
    id: 'oregano',
    name: '奧勒岡',
    name_en: 'Oregano',
    categories: ['香料'],
    variants: [
      { id: 'oregano--dried', label: '乾燥奧勒岡',   state: 'dried' },
      { id: 'oregano--fresh', label: '新鮮奧勒岡',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 265, protein: 9, fat: 4.3, carbs: 69, fiber: 42.5, sodium: 25 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/171326/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 巴西里 ───────────────────────────────────────────────
  {
    id: 'parsley',
    name: '巴西里',
    name_en: 'Parsley',
    categories: ['香料'],
    variants: [
      { id: 'parsley--fresh',  label: '新鮮巴西里', state: 'raw' },
      { id: 'parsley--dried',  label: '乾燥巴西里', state: 'dried' },
      { id: 'parsley--curly',  label: '捲葉巴西里', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 36, protein: 3, fat: 0.8, carbs: 6.3, fiber: 3.3, sodium: 56 },
    allergens: [],
    tastes: ['苦'],
    textures: ['清脆'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170416/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 香草莢 ───────────────────────────────────────────────
  {
    id: 'vanilla',
    name: '香草',
    name_en: 'Vanilla',
    categories: ['香料'],
    variants: [
      { id: 'vanilla--pod',     label: '香草莢',   state: 'dried' },
      { id: 'vanilla--extract', label: '香草精',   state: 'raw' },
      { id: 'vanilla--paste',   label: '香草醬',   state: 'paste' },
      { id: 'vanilla--powder',  label: '香草粉',   state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 288, protein: 0.1, fat: 0.1, carbs: 12.7, sodium: 9 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169272/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 肉豆蔻 ───────────────────────────────────────────────
  {
    id: 'nutmeg',
    name: '肉豆蔻',
    name_en: 'Nutmeg',
    categories: ['香料'],
    variants: [
      { id: 'nutmeg--powder', label: '肉豆蔻粉', state: 'powdered' },
      { id: 'nutmeg--whole',  label: '整顆肉豆蔻', state: 'dried' },
    ],
    nutrition_per_100g: { calories: 525, protein: 5.8, fat: 36.3, carbs: 49.3, fiber: 20.8, sodium: 16 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170418/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 丁香 ─────────────────────────────────────────────────
  {
    id: 'clove',
    name: '丁香',
    name_en: 'Clove',
    categories: ['香料'],
    variants: [
      { id: 'clove--whole',   label: '整顆丁香', state: 'dried' },
      { id: 'clove--powder',  label: '丁香粉',   state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 274, protein: 5.9, fat: 13, carbs: 65.5, fiber: 33.9, sodium: 277 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/171322/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 柴魚片 ───────────────────────────────────────────────
  {
    id: 'katsuobushi',
    name: '柴魚片',
    name_en: 'Katsuobushi (Dried Bonito Flakes)',
    categories: ['香料', '湯底'],
    variants: [
      { id: 'katsuobushi--thin',  label: '薄削柴魚片（花鰹）', state: 'dried' },
      { id: 'katsuobushi--thick', label: '厚切柴魚片',         state: 'dried' },
    ],
    nutrition_per_100g: { calories: 335, protein: 77.1, fat: 2.9, carbs: 0.3, sodium: 130 },
    allergens: ['fish'],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 昆布 ─────────────────────────────────────────────────
  {
    id: 'kombu',
    name: '昆布',
    name_en: 'Kombu (Dried Kelp)',
    categories: ['香料', '湯底'],
    variants: [
      { id: 'kombu--dried',  label: '乾昆布', state: 'dried' },
      { id: 'kombu--powder', label: '昆布粉', state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 43, protein: 1.7, fat: 0.6, carbs: 9.6, fiber: 5.8, sodium: 871 },
    allergens: [],
    storage_tip: '乾燥密封保存，避免受潮。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 海苔 ─────────────────────────────────────────────────
  {
    id: 'nori',
    name: '海苔',
    name_en: 'Nori (Dried Seaweed Sheet)',
    categories: ['香料'],
    variants: [
      { id: 'nori--sheet',    label: '整片海苔（壽司用）', state: 'dried' },
      { id: 'nori--shredded', label: '絲狀海苔',           state: 'dried' },
      { id: 'nori--seasoned', label: '調味海苔',           state: 'dried' },
    ],
    nutrition_per_100g: { calories: 35, protein: 5.8, fat: 0.3, carbs: 5.1, fiber: 0.8, sodium: 73 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 茴香籽 ───────────────────────────────────────────────
  {
    id: 'fennel_seed',
    name: '茴香籽',
    name_en: 'Fennel Seed',
    categories: ['香料'],
    variants: [
      { id: 'fennel_seed--whole',  label: '茴香籽',   state: 'dried' },
      { id: 'fennel_seed--powder', label: '茴香粉',   state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 345, protein: 15.8, fat: 14.9, carbs: 52.3, fiber: 39.8, sodium: 88 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170929/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 芥末籽 ───────────────────────────────────────────────
  {
    id: 'mustard_seed',
    name: '芥末籽',
    name_en: 'Mustard Seed',
    categories: ['香料'],
    variants: [
      { id: 'mustard_seed--yellow', label: '黃芥末籽',     state: 'dried' },
      { id: 'mustard_seed--black',  label: '黑芥末籽',     state: 'dried' },
      { id: 'mustard--dijon',       label: '第戎芥末醬',   state: 'paste' },
      { id: 'mustard--yellow',      label: '黃色芥末醬',   state: 'paste' },
    ],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170926/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 小豆蔻 ───────────────────────────────────────────────
  {
    id: 'cardamom',
    name: '小豆蔻',
    name_en: 'Cardamom',
    categories: ['香料'],
    variants: [
      { id: 'cardamom--pod',    label: '豆蔻莢',   state: 'dried' },
      { id: 'cardamom--powder', label: '豆蔻粉',   state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 311, protein: 10.8, fat: 6.7, carbs: 68.5, fiber: 28, sodium: 18 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/171320/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 麻油 ─────────────────────────────────────────────────
  {
    id: 'sesame_oil',
    name: '麻油',
    name_en: 'Sesame Oil',
    categories: ['油脂', '香料'],
    variants: [
      { id: 'sesame_oil--roasted', label: '烤芝麻油（深色）', state: 'raw' },
      { id: 'sesame_oil--pure',    label: '純麻油（淺色）',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0 },
    substitutes: ['chili_sesame_oil'],
    allergens: ['sesame'],
    tastes: ['甜'],
    textures: ['油膩', '濃郁'],
    storage_tip: '避光陰涼處保存，開封後半年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/172338/nutrients',
    verified_at: '2024-11-01',
  },

];
