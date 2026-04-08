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

  // ── 味噌 ─────────────────────────────────────────────────
  {
    id: 'miso',
    name: '味噌',
    name_en: 'Miso',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'miso--white', label: '白味噌', state: 'fermented', yield_ratio: 1.0 },
      { id: 'miso--red',   label: '紅味噌', state: 'fermented', yield_ratio: 1.0 },
      { id: 'miso--mixed', label: '合わせ味噌', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 198, protein: 11.7, fat: 6.0, carbs: 26.5, fiber: 4.3, sodium: 3728,
    },
    substitutes: ['doenjang', 'tahini'],
    allergens: ['soy'],
    tastes: ['鹹', '鮮'],
    textures: ['滑順'],
    season: '全年',
    storage_tip: '開封後冷藏，表面貼保鮮膜防止氧化，可保存 3 個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 納豆 ─────────────────────────────────────────────────
  {
    id: 'natto',
    name: '納豆',
    name_en: 'Natto',
    categories: ['發酵食品', '蛋白質'],
    variants: [
      { id: 'natto--regular', label: '納豆', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 200, protein: 16.5, fat: 10.0, carbs: 12.1, fiber: 6.7, sodium: 2,
    },
    substitutes: [],
    allergens: ['soy'],
    tastes: ['鮮', '鹹'],
    textures: ['黏稠', '嚼勁'],
    season: '全年',
    storage_tip: '冷藏保存，開封後當日食用為佳。亦可冷凍延長保存期。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 醬油 ─────────────────────────────────────────────────
  {
    id: 'soy_sauce',
    name: '醬油',
    name_en: 'Soy Sauce',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'soy_sauce--regular',  label: '醬油（一般）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'soy_sauce--light',    label: '薄口醬油',     state: 'fermented', yield_ratio: 1.0 },
      { id: 'soy_sauce--tamari',   label: '濃口醬油',     state: 'fermented', yield_ratio: 1.0 },
      { id: 'soy_sauce--low_salt', label: '減鹽醬油',     state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 53, protein: 8.1, fat: 0.0, carbs: 5.6, sodium: 5687,
    },
    substitutes: ['tamari', 'coconut_aminos', 'fish_sauce'],
    allergens: ['soy', 'wheat'],
    tastes: ['鹹', '鮮'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '開封後冷藏保存，避免光線直射，可保存 1 年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豆腐乳 ───────────────────────────────────────────────
  {
    id: 'fermented_tofu',
    name: '豆腐乳',
    name_en: 'Fermented Tofu',
    categories: ['發酵食品'],
    variants: [
      { id: 'fermented_tofu--red',   label: '紅豆腐乳', state: 'fermented', yield_ratio: 1.0 },
      { id: 'fermented_tofu--white', label: '白豆腐乳', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 133, protein: 9.8, fat: 7.8, carbs: 6.5, sodium: 2960,
    },
    substitutes: ['miso'],
    allergens: ['soy'],
    tastes: ['鹹', '鮮'],
    textures: ['滑順', '細膩'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存數個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豆豉 ─────────────────────────────────────────────────
  {
    id: 'fermented_black_beans',
    name: '豆豉',
    name_en: 'Fermented Black Beans',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'fermented_black_beans--dry', label: '乾豆豉', state: 'fermented', yield_ratio: 1.0 },
      { id: 'fermented_black_beans--wet', label: '濕豆豉', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 224, protein: 18.9, fat: 7.9, carbs: 23.0, sodium: 1330,
    },
    substitutes: ['miso', 'soy_sauce'],
    allergens: ['soy'],
    tastes: ['鹹', '鮮'],
    textures: ['嚼勁'],
    season: '全年',
    storage_tip: '乾豆豉密封常溫保存；濕豆豉冷藏保存。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豆瓣醬 ───────────────────────────────────────────────
  {
    id: 'doubanjiang',
    name: '豆瓣醬',
    name_en: 'Doubanjiang',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'doubanjiang--regular', label: '豆瓣醬',     state: 'fermented', yield_ratio: 1.0 },
      { id: 'doubanjiang--spicy',   label: '辣豆瓣醬',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 68, protein: 4.5, fat: 2.8, carbs: 7.2, sodium: 3700,
    },
    substitutes: ['gochujang', 'miso'],
    allergens: ['soy', 'wheat'],
    tastes: ['鹹', '辣', '鮮'],
    textures: ['滑順'],
    season: '全年',
    storage_tip: '開封後冷藏密封保存，可保存 6 個月以上。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 韓國辣椒醬 ───────────────────────────────────────────
  {
    id: 'gochujang',
    name: '韓國辣椒醬',
    name_en: 'Gochujang',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'gochujang--regular', label: '韓國辣椒醬', state: 'fermented', yield_ratio: 1.0 },
      { id: 'gochujang--mild',    label: '微辣辣椒醬', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 182, protein: 4.3, fat: 1.3, carbs: 38.0, sodium: 1900,
    },
    substitutes: ['doubanjiang', 'sriracha'],
    allergens: ['soy', 'wheat'],
    tastes: ['辣', '甜', '鹹'],
    textures: ['濃稠'],
    season: '全年',
    storage_tip: '開封後冷藏保存，可保存 3-6 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 韓國大醬 ─────────────────────────────────────────────
  {
    id: 'doenjang',
    name: '韓國大醬',
    name_en: 'Doenjang',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'doenjang--regular', label: '韓國大醬', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 190, protein: 12.0, fat: 5.5, carbs: 22.0, sodium: 4100,
    },
    substitutes: ['miso'],
    allergens: ['soy'],
    tastes: ['鹹', '鮮'],
    textures: ['濃稠'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存 1 年以上。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 魚露 ─────────────────────────────────────────────────
  {
    id: 'fish_sauce',
    name: '魚露',
    name_en: 'Fish Sauce',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'fish_sauce--regular', label: '魚露', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 35, protein: 5.1, fat: 0.0, carbs: 3.6, sodium: 7851,
    },
    substitutes: ['soy_sauce', 'worcestershire_sauce'],
    allergens: ['fish'],
    tastes: ['鹹', '鮮'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '開封後置於陰涼處或冷藏，可保存 1 年以上。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蝦醬 ─────────────────────────────────────────────────
  {
    id: 'shrimp_paste',
    name: '蝦醬',
    name_en: 'Shrimp Paste',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'shrimp_paste--regular', label: '蝦醬', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 192, protein: 19.8, fat: 5.1, carbs: 16.0, sodium: 3400,
    },
    substitutes: ['fish_sauce', 'fermented_black_beans'],
    allergens: ['shellfish'],
    tastes: ['鹹', '鮮'],
    textures: ['濃稠'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存數個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 酸菜 ─────────────────────────────────────────────────
  {
    id: 'pickled_cabbage',
    name: '酸菜',
    name_en: 'Pickled Cabbage',
    categories: ['發酵食品', '蔬菜'],
    variants: [
      { id: 'pickled_cabbage--regular', label: '酸菜', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 14, protein: 1.1, fat: 0.1, carbs: 2.8, fiber: 1.8, sodium: 524,
    },
    substitutes: ['kimchi', 'sauerkraut'],
    allergens: [],
    tastes: ['酸', '鹹'],
    textures: ['清脆'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存 1-2 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 榨菜 ─────────────────────────────────────────────────
  {
    id: 'zha_cai',
    name: '榨菜',
    name_en: 'Zha Cai',
    categories: ['發酵食品', '蔬菜'],
    variants: [
      { id: 'zha_cai--whole',   label: '榨菜（整顆）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'zha_cai--shredded', label: '榨菜絲',     state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 29, protein: 2.1, fat: 0.5, carbs: 4.3, fiber: 2.2, sodium: 3000,
    },
    substitutes: ['pickled_cabbage'],
    allergens: [],
    tastes: ['鹹', '鮮'],
    textures: ['清脆', '嚼勁'],
    season: '全年',
    storage_tip: '冷藏密封保存，使用前可用水稍微沖洗降低鹽分。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 德式酸菜 ─────────────────────────────────────────────
  {
    id: 'sauerkraut',
    name: '德式酸菜',
    name_en: 'Sauerkraut',
    categories: ['發酵食品', '蔬菜'],
    variants: [
      { id: 'sauerkraut--regular', label: '德式酸菜', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 19, protein: 0.9, fat: 0.1, carbs: 4.3, fiber: 2.9, sodium: 661,
    },
    substitutes: ['pickled_cabbage', 'kimchi'],
    allergens: [],
    tastes: ['酸', '鹹'],
    textures: ['清脆'],
    season: '全年',
    storage_tip: '冷藏保存，可保存 1-2 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 優格 ─────────────────────────────────────────────────
  {
    id: 'yogurt',
    name: '優格',
    name_en: 'Yogurt',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'yogurt--plain',    label: '原味優格',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'yogurt--greek',    label: '希臘優格',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'yogurt--flavored', label: '調味優格',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 61, protein: 3.5, fat: 3.3, carbs: 4.7, sodium: 46,
    },
    substitutes: ['kefir', 'sour_cream'],
    allergens: ['dairy'],
    tastes: ['酸', '甜'],
    textures: ['滑順', '濃稠'],
    season: '全年',
    storage_tip: '冷藏保存，開封後 3-5 天內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 克菲爾 ───────────────────────────────────────────────
  {
    id: 'kefir',
    name: '克菲爾',
    name_en: 'Kefir',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'kefir--milk',  label: '牛奶克菲爾',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'kefir--water', label: '水克菲爾',     state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 52, protein: 3.6, fat: 1.0, carbs: 5.9, sodium: 40,
    },
    substitutes: ['yogurt'],
    allergens: ['dairy'],
    tastes: ['酸'],
    textures: ['液體', '滑順'],
    season: '全年',
    storage_tip: '冷藏保存，開封後 1 週內飲用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 起司（切達）────────────────────────────────────────────
  {
    id: 'cheese_cheddar',
    name: '切達起司',
    name_en: 'Cheddar Cheese',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'cheese_cheddar--block',   label: '切達起司（塊）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'cheese_cheddar--shredded', label: '切達起司絲',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'cheese_cheddar--sliced',  label: '切達起司片',    state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 404, protein: 24.9, fat: 33.1, carbs: 1.3, sodium: 654,
    },
    substitutes: ['mozzarella', 'colby'],
    allergens: ['dairy'],
    tastes: ['鹹', '鮮'],
    textures: ['嚼勁', '軟嫩'],
    season: '全年',
    storage_tip: '冷藏密封保存，切開後用保鮮膜包緊，可保存 3-4 週。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 起司（莫札瑞拉）──────────────────────────────────────
  {
    id: 'cheese_mozzarella',
    name: '莫札瑞拉起司',
    name_en: 'Mozzarella Cheese',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'cheese_mozzarella--fresh',    label: '新鮮莫札瑞拉',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'cheese_mozzarella--shredded', label: '莫札瑞拉起司絲', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 300, protein: 22.2, fat: 22.4, carbs: 2.5, sodium: 627,
    },
    substitutes: ['cheese_cheddar', 'cheese_provolone'],
    allergens: ['dairy'],
    tastes: ['鹹', '鮮'],
    textures: ['軟嫩', 'Q彈'],
    season: '全年',
    storage_tip: '新鮮莫札瑞拉浸水冷藏，1 週內食用；起司絲冷藏可保存 1 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 起司（帕瑪森）───────────────────────────────────────
  {
    id: 'cheese_parmesan',
    name: '帕瑪森起司',
    name_en: 'Parmesan Cheese',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'cheese_parmesan--block',  label: '帕瑪森起司（塊）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'cheese_parmesan--grated', label: '帕瑪森起司粉',    state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 431, protein: 38.5, fat: 29.0, carbs: 3.2, sodium: 1109,
    },
    substitutes: ['pecorino', 'grana_padano'],
    allergens: ['dairy'],
    tastes: ['鹹', '鮮'],
    textures: ['硬質', '顆粒感'],
    season: '全年',
    storage_tip: '冷藏密封保存，起司塊可保存 4-6 週，起司粉冷藏保存 1 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 起司（奶油起司）──────────────────────────────────────
  {
    id: 'cheese_cream',
    name: '奶油起司',
    name_en: 'Cream Cheese',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'cheese_cream--regular', label: '奶油起司', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 342, protein: 5.9, fat: 34.2, carbs: 4.1, sodium: 321,
    },
    substitutes: ['mascarpone', 'ricotta'],
    allergens: ['dairy'],
    tastes: ['鹹', '微甜'],
    textures: ['滑順', '細膩'],
    season: '全年',
    storage_tip: '冷藏密封保存，開封後 1-2 週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 起司（費達）─────────────────────────────────────────
  {
    id: 'cheese_feta',
    name: '費達起司',
    name_en: 'Feta Cheese',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'cheese_feta--block',     label: '費達起司（塊）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'cheese_feta--crumbled',  label: '費達起司碎',    state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 264, protein: 14.2, fat: 21.3, carbs: 4.1, sodium: 1116,
    },
    substitutes: ['cotija', 'ricotta_salata'],
    allergens: ['dairy'],
    tastes: ['鹹', '酸'],
    textures: ['易碎', '細膩'],
    season: '全年',
    storage_tip: '冷藏浸泡於鹽水中保存，可保存 1 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 起司（藍紋）─────────────────────────────────────────
  {
    id: 'cheese_blue',
    name: '藍紋起司',
    name_en: 'Blue Cheese',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'cheese_blue--gorgonzola',  label: '戈根佐拉起司', state: 'fermented', yield_ratio: 1.0 },
      { id: 'cheese_blue--roquefort',   label: '洛克福起司',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 353, protein: 21.4, fat: 28.7, carbs: 2.3, sodium: 1395,
    },
    substitutes: ['cheese_feta', 'cheese_parmesan'],
    allergens: ['dairy'],
    tastes: ['鹹', '鮮'],
    textures: ['易碎', '濃郁'],
    season: '全年',
    storage_tip: '冷藏密封保存，1-3 週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 酸奶油 ───────────────────────────────────────────────
  {
    id: 'sour_cream',
    name: '酸奶油',
    name_en: 'Sour Cream',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'sour_cream--regular',    label: '酸奶油',     state: 'fermented', yield_ratio: 1.0 },
      { id: 'sour_cream--low_fat',    label: '低脂酸奶油', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 193, protein: 2.1, fat: 19.4, carbs: 4.6, sodium: 53,
    },
    substitutes: ['yogurt', 'creme_fraiche'],
    allergens: ['dairy'],
    tastes: ['酸', '鹹'],
    textures: ['滑順', '濃稠'],
    season: '全年',
    storage_tip: '冷藏保存，開封後 1-2 週內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 米醋 ─────────────────────────────────────────────────
  {
    id: 'rice_vinegar',
    name: '米醋',
    name_en: 'Rice Vinegar',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'rice_vinegar--regular', label: '米醋',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'rice_vinegar--seasoned', label: '壽司醋', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 18, protein: 0.0, fat: 0.0, carbs: 0.9, sodium: 2,
    },
    substitutes: ['apple_cider_vinegar', 'white_vinegar'],
    allergens: [],
    tastes: ['酸'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '常溫陰涼處密封保存，可保存 2 年以上。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蘋果醋 ───────────────────────────────────────────────
  {
    id: 'apple_cider_vinegar',
    name: '蘋果醋',
    name_en: 'Apple Cider Vinegar',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'apple_cider_vinegar--regular',    label: '蘋果醋（一般）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'apple_cider_vinegar--unfiltered', label: '未過濾蘋果醋',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 21, protein: 0.0, fat: 0.0, carbs: 0.9, sodium: 5,
    },
    substitutes: ['rice_vinegar', 'white_wine_vinegar'],
    allergens: [],
    tastes: ['酸'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '常溫陰涼處密封保存，可長期保存。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 黑醋 ─────────────────────────────────────────────────
  {
    id: 'black_vinegar',
    name: '黑醋',
    name_en: 'Black Vinegar',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'black_vinegar--chinkiang', label: '鎮江香醋', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 50, protein: 0.5, fat: 0.0, carbs: 12.0, sodium: 400,
    },
    substitutes: ['balsamic_vinegar', 'rice_vinegar'],
    allergens: ['wheat'],
    tastes: ['酸', '甜'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '常溫陰涼處密封保存，可長期保存。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 巴薩米克醋 ───────────────────────────────────────────
  {
    id: 'balsamic_vinegar',
    name: '巴薩米克醋',
    name_en: 'Balsamic Vinegar',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'balsamic_vinegar--regular',  label: '巴薩米克醋',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'balsamic_vinegar--aged',     label: '陳年巴薩米克醋', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 88, protein: 0.5, fat: 0.0, carbs: 17.0, sodium: 23,
    },
    substitutes: ['black_vinegar', 'red_wine_vinegar'],
    allergens: [],
    tastes: ['酸', '甜'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '常溫密封保存，避光保存，可保存多年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 味醂 ─────────────────────────────────────────────────
  {
    id: 'mirin',
    name: '味醂',
    name_en: 'Mirin',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'mirin--hon_mirin', label: '本味醂',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'mirin--aji_mirin', label: '味醂風調味料', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 241, protein: 0.3, fat: 0.0, carbs: 43.2, sodium: 3,
    },
    substitutes: ['rice_wine', 'dry_sherry'],
    allergens: [],
    tastes: ['甜'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '常溫陰涼密封保存，開封後冷藏，可保存 1 年。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 甜麵醬 ───────────────────────────────────────────────
  {
    id: 'sweet_bean_paste',
    name: '甜麵醬',
    name_en: 'Sweet Bean Paste',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'sweet_bean_paste--regular', label: '甜麵醬', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 136, protein: 5.3, fat: 1.6, carbs: 24.0, sodium: 1500,
    },
    substitutes: ['hoisin_sauce', 'doubanjiang'],
    allergens: ['soy', 'wheat'],
    tastes: ['甜', '鹹'],
    textures: ['濃稠'],
    season: '全年',
    storage_tip: '開封後冷藏密封保存，可保存 3 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 海鮮醬 ───────────────────────────────────────────────
  {
    id: 'hoisin_sauce',
    name: '海鮮醬',
    name_en: 'Hoisin Sauce',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'hoisin_sauce--regular', label: '海鮮醬', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 220, protein: 3.3, fat: 2.0, carbs: 45.5, sodium: 2062,
    },
    substitutes: ['sweet_bean_paste', 'teriyaki_sauce'],
    allergens: ['soy', 'wheat'],
    tastes: ['甜', '鹹'],
    textures: ['濃稠'],
    season: '全年',
    storage_tip: '開封後冷藏密封保存，可保存 1-2 年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 梅子 ─────────────────────────────────────────────────
  {
    id: 'pickled_plum',
    name: '梅子',
    name_en: 'Pickled Plum (Umeboshi)',
    categories: ['發酵食品', '水果'],
    variants: [
      { id: 'pickled_plum--whole',  label: '梅子（整顆）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'pickled_plum--paste',  label: '梅醬',         state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 33, protein: 0.9, fat: 0.2, carbs: 10.5, sodium: 8700,
    },
    substitutes: ['lemon_juice', 'rice_vinegar'],
    allergens: [],
    tastes: ['酸', '鹹'],
    textures: ['軟嫩'],
    season: '全年',
    storage_tip: '常溫或冷藏密封保存，可保存數年。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 米酒 ─────────────────────────────────────────────────
  {
    id: 'rice_wine',
    name: '米酒',
    name_en: 'Rice Wine',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'rice_wine--cooking', label: '料理米酒', state: 'fermented', yield_ratio: 1.0 },
      { id: 'rice_wine--shaoxing', label: '紹興酒',  state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 134, protein: 0.5, fat: 0.0, carbs: 5.0, sodium: 5,
    },
    substitutes: ['dry_sherry', 'mirin', 'sake'],
    allergens: [],
    tastes: ['甜', '酒香'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '常溫陰涼處密封保存，開封後冷藏可保存 1 年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 清酒 ─────────────────────────────────────────────────
  {
    id: 'sake',
    name: '清酒',
    name_en: 'Sake',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'sake--cooking', label: '料理清酒', state: 'fermented', yield_ratio: 1.0 },
      { id: 'sake--drinking', label: '飲用清酒', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 134, protein: 0.5, fat: 0.0, carbs: 5.0, sodium: 2,
    },
    substitutes: ['rice_wine', 'dry_sherry'],
    allergens: [],
    tastes: ['甜', '酒香'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '開封後冷藏，料理用清酒可保存 3 個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 柚子醋（ポン酢）─────────────────────────────────────
  {
    id: 'ponzu',
    name: '柚子醋',
    name_en: 'Ponzu',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'ponzu--regular', label: '柚子醋（ポン酢）', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 48, protein: 2.8, fat: 0.2, carbs: 8.5, sodium: 1750,
    },
    substitutes: ['soy_sauce', 'rice_vinegar'],
    allergens: ['soy', 'fish'],
    tastes: ['酸', '鹹', '鮮'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '開封後冷藏保存，可保存 3-6 個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鹹魚 ─────────────────────────────────────────────────
  {
    id: 'salted_fish',
    name: '鹹魚',
    name_en: 'Salted Fish',
    categories: ['發酵食品', '海鮮'],
    variants: [
      { id: 'salted_fish--regular', label: '鹹魚', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 183, protein: 35.0, fat: 3.5, carbs: 0.0, sodium: 4100,
    },
    substitutes: ['dried_shrimp', 'anchovies'],
    allergens: ['fish'],
    tastes: ['鹹', '鮮'],
    textures: ['嚼勁'],
    season: '全年',
    storage_tip: '冷藏或冷凍保存，可保存數個月至 1 年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蝦米（蝦皮）─────────────────────────────────────────
  {
    id: 'dried_shrimp',
    name: '蝦米',
    name_en: 'Dried Shrimp',
    categories: ['發酵食品', '海鮮'],
    variants: [
      { id: 'dried_shrimp--regular', label: '蝦米',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'dried_shrimp--tiny',    label: '蝦皮',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 263, protein: 52.2, fat: 4.2, carbs: 2.2, sodium: 2000,
    },
    substitutes: ['shrimp_paste', 'fish_sauce'],
    allergens: ['shellfish'],
    tastes: ['鹹', '鮮'],
    textures: ['嚼勁'],
    season: '全年',
    storage_tip: '密封冷藏或冷凍保存，可保存 6 個月至 1 年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鳳梨豆醬 ─────────────────────────────────────────────
  {
    id: 'pineapple_bean_paste',
    name: '鳳梨豆醬',
    name_en: 'Pineapple Bean Paste',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'pineapple_bean_paste--regular', label: '鳳梨豆醬', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 90, protein: 5.5, fat: 1.2, carbs: 14.5, sodium: 2100,
    },
    substitutes: ['doenjang', 'miso'],
    allergens: ['soy'],
    tastes: ['甜', '鹹', '鮮'],
    textures: ['顆粒感'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存 3-6 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 韭菜花醬 ─────────────────────────────────────────────
  {
    id: 'pickled_chive_flower',
    name: '韭菜花醬',
    name_en: 'Pickled Chive Flower Paste',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'pickled_chive_flower--regular', label: '韭菜花醬', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 55, protein: 3.2, fat: 0.8, carbs: 8.5, sodium: 2500,
    },
    substitutes: ['shrimp_paste', 'doubanjiang'],
    allergens: [],
    tastes: ['鹹', '鮮'],
    textures: ['顆粒感'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存 3-6 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 腐乳（白）───────────────────────────────────────────
  {
    id: 'white_fermented_tofu',
    name: '白腐乳',
    name_en: 'White Fermented Tofu',
    categories: ['發酵食品'],
    variants: [
      { id: 'white_fermented_tofu--regular', label: '白腐乳', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 120, protein: 8.8, fat: 7.0, carbs: 5.0, sodium: 2600,
    },
    substitutes: ['miso', 'cream_cheese'],
    allergens: ['soy'],
    tastes: ['鹹', '鮮'],
    textures: ['滑順', '細膩'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存數個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 紹興酒 ───────────────────────────────────────────────
  {
    id: 'shaoxing_wine',
    name: '紹興酒',
    name_en: 'Shaoxing Wine',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'shaoxing_wine--regular', label: '紹興酒',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'shaoxing_wine--aged',    label: '陳年紹興酒', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 125, protein: 0.5, fat: 0.0, carbs: 4.5, sodium: 5,
    },
    substitutes: ['rice_wine', 'sake', 'dry_sherry'],
    allergens: ['wheat'],
    tastes: ['甜', '酒香'],
    textures: ['液體'],
    season: '全年',
    storage_tip: '常溫密封保存，開封後冷藏可保存 6 個月以上。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豆漿（發酵）─────────────────────────────────────────
  {
    id: 'fermented_soy_milk',
    name: '發酵豆漿',
    name_en: 'Fermented Soy Milk',
    categories: ['發酵食品', '乳製品'],
    variants: [
      { id: 'fermented_soy_milk--regular', label: '發酵豆漿', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 54, protein: 3.3, fat: 1.8, carbs: 6.0, sodium: 30,
    },
    substitutes: ['yogurt', 'kefir'],
    allergens: ['soy'],
    tastes: ['酸', '甜'],
    textures: ['液體', '滑順'],
    season: '全年',
    storage_tip: '冷藏保存，開封後 3 天內飲用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 酵母粉 ───────────────────────────────────────────────
  {
    id: 'nutritional_yeast',
    name: '酵母粉',
    name_en: 'Nutritional Yeast',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'nutritional_yeast--flakes',  label: '酵母粉片', state: 'fermented', yield_ratio: 1.0 },
      { id: 'nutritional_yeast--powder',  label: '酵母粉',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 325, protein: 50.0, fat: 5.5, carbs: 28.8, fiber: 24.6, sodium: 30,
    },
    substitutes: ['cheese_parmesan'],
    allergens: [],
    tastes: ['鮮', '鹹'],
    textures: ['顆粒感'],
    season: '全年',
    storage_tip: '密封常溫保存，可保存 1-2 年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 康普茶 ───────────────────────────────────────────────
  {
    id: 'kombucha',
    name: '康普茶',
    name_en: 'Kombucha',
    categories: ['發酵食品', '飲料'],
    variants: [
      { id: 'kombucha--regular', label: '康普茶', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 16, protein: 0.0, fat: 0.0, carbs: 3.6, sodium: 8,
    },
    substitutes: ['kefir', 'water_kefir'],
    allergens: [],
    tastes: ['酸', '甜'],
    textures: ['液體', '氣泡'],
    season: '全年',
    storage_tip: '冷藏保存，開封後 1-2 週內飲用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 甜酒釀 ───────────────────────────────────────────────
  {
    id: 'sweet_rice_wine',
    name: '甜酒釀',
    name_en: 'Sweet Rice Wine (Jiuniang)',
    categories: ['發酵食品'],
    variants: [
      { id: 'sweet_rice_wine--regular', label: '甜酒釀', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 110, protein: 2.2, fat: 0.3, carbs: 25.0, sodium: 5,
    },
    substitutes: ['sake', 'mirin'],
    allergens: [],
    tastes: ['甜', '酒香'],
    textures: ['顆粒感', '滑順'],
    season: '全年',
    storage_tip: '冷藏密封保存，1-2 週內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 印尼天貝 ─────────────────────────────────────────────
  {
    id: 'tempeh',
    name: '天貝',
    name_en: 'Tempeh',
    categories: ['發酵食品', '蛋白質'],
    variants: [
      { id: 'tempeh--regular', label: '天貝', state: 'fermented', yield_ratio: 1.0 },
      { id: 'tempeh--cooked',  label: '熟天貝', state: 'cooked',   yield_ratio: 0.9 },
    ],
    nutrition_per_100g: {
      calories: 193, protein: 19.9, fat: 11.0, carbs: 9.4, fiber: 0.0, sodium: 9,
    },
    substitutes: ['tofu', 'natto'],
    allergens: ['soy'],
    tastes: ['鮮', '堅果香'],
    textures: ['嚼勁', '紮實'],
    season: '全年',
    storage_tip: '冷藏保存，1 週內食用；或冷凍保存 3 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 韓國泡蘿蔔 ───────────────────────────────────────────
  {
    id: 'kkakdugi',
    name: '韓國泡蘿蔔',
    name_en: 'Kkakdugi',
    categories: ['發酵食品', '蔬菜'],
    variants: [
      { id: 'kkakdugi--regular', label: '韓國泡蘿蔔', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 18, protein: 0.9, fat: 0.2, carbs: 3.8, fiber: 1.2, sodium: 520,
    },
    substitutes: ['kimchi', 'pickled_radish'],
    allergens: ['fish'],
    tastes: ['酸', '辣', '鹹'],
    textures: ['清脆'],
    season: '全年',
    storage_tip: '冷藏密封保存，發酵越久味道越酸。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 味噌（田舍）─────────────────────────────────────────
  {
    id: 'miso_inaka',
    name: '田舍味噌',
    name_en: 'Inaka Miso',
    categories: ['發酵食品', '調味料'],
    variants: [
      { id: 'miso_inaka--regular', label: '田舍味噌', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 200, protein: 13.0, fat: 5.5, carbs: 25.0, sodium: 4100,
    },
    substitutes: ['miso', 'doenjang'],
    allergens: ['soy'],
    tastes: ['鹹', '鮮'],
    textures: ['顆粒感', '濃稠'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存 3-6 個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 印度優格（Lassi）────────────────────────────────────
  {
    id: 'lassi',
    name: '印度優格飲',
    name_en: 'Lassi',
    categories: ['發酵食品', '飲料'],
    variants: [
      { id: 'lassi--plain',  label: '原味拉西',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'lassi--mango',  label: '芒果拉西',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'lassi--salty',  label: '鹹味拉西',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 70, protein: 3.0, fat: 2.5, carbs: 9.0, sodium: 80,
    },
    substitutes: ['yogurt', 'kefir'],
    allergens: ['dairy'],
    tastes: ['酸', '甜'],
    textures: ['液體', '滑順'],
    season: '全年',
    storage_tip: '冷藏保存，現做當日飲用最佳。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 橄欖（醃漬）─────────────────────────────────────────
  {
    id: 'pickled_olive',
    name: '醃漬橄欖',
    name_en: 'Pickled Olive',
    categories: ['發酵食品', '水果'],
    variants: [
      { id: 'pickled_olive--green',  label: '綠橄欖', state: 'fermented', yield_ratio: 1.0 },
      { id: 'pickled_olive--black',  label: '黑橄欖', state: 'fermented', yield_ratio: 1.0 },
      { id: 'pickled_olive--kalamata', label: '卡拉馬塔橄欖', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 145, protein: 1.0, fat: 15.0, carbs: 3.8, sodium: 1556,
    },
    substitutes: ['capers', 'pickled_gherkin'],
    allergens: [],
    tastes: ['鹹', '苦'],
    textures: ['嚼勁', '滑順'],
    season: '全年',
    storage_tip: '冷藏浸泡於鹽水或橄欖油中，可保存數個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 醃漬黃瓜（酸黃瓜）───────────────────────────────────
  {
    id: 'pickled_gherkin',
    name: '酸黃瓜',
    name_en: 'Pickled Gherkin',
    categories: ['發酵食品', '蔬菜'],
    variants: [
      { id: 'pickled_gherkin--dill',  label: '蒔蘿酸黃瓜', state: 'fermented', yield_ratio: 1.0 },
      { id: 'pickled_gherkin--sweet', label: '甜酸黃瓜',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 11, protein: 0.3, fat: 0.2, carbs: 2.3, sodium: 457,
    },
    substitutes: ['sauerkraut', 'pickled_cabbage'],
    allergens: [],
    tastes: ['酸', '鹹'],
    textures: ['清脆'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存 1-2 個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 醃漬薑 ───────────────────────────────────────────────
  {
    id: 'pickled_ginger',
    name: '醃漬薑',
    name_en: 'Pickled Ginger (Gari)',
    categories: ['發酵食品', '香料'],
    variants: [
      { id: 'pickled_ginger--regular', label: '醃薑片',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'pickled_ginger--sweet',   label: '甜薑片',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 77, protein: 0.4, fat: 0.4, carbs: 18.2, sodium: 570,
    },
    substitutes: ['ginger_fresh'],
    allergens: [],
    tastes: ['酸', '辛辣', '甜'],
    textures: ['清脆'],
    season: '全年',
    storage_tip: '冷藏密封保存，可保存 1-2 個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

];
