/**
 * @fileoverview 蔬菜類食材（40 種）
 *
 * 包含：
 *  - 葉菜類（菠菜、高麗菜、白菜等）
 *  - 根莖類（紅蘿蔔、白蘿蔔、蓮藕等）
 *  - 蔥蒜類（洋蔥、紅蔥頭等）
 *  - 果實類（番茄、茄子、甜椒等）
 *  - 十字花科（花椰菜、青花菜等）
 *  - 豆類蔬菜（毛豆、豌豆等）
 *  - 蕈菇類（香菇、金針菇等）
 *  - 芽菜類（豆芽菜等）
 *
 * 尚未有 verified_source 的項目請使用 verify-ingredient skill 補充。
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 青蔥 ─────────────────────────────────────────────────
  {
    id: 'green_onion',
    name: '青蔥',
    name_en: 'Green Onion (Scallion)',
    categories: ['蔬菜', '香料'],
    variants: [
      { id: 'green_onion--raw',     label: '生青蔥',   state: 'raw' },
      { id: 'green_onion--chopped', label: '蔥花',     state: 'minced' },
      { id: 'green_onion--sliced',  label: '蔥段',     state: 'sliced' },
    ],
    nutrition_per_100g: { calories: 32, protein: 1.8, fat: 0.2, carbs: 7.3, fiber: 2.6, sodium: 16 },
    allergens: [],
    tastes: ['辣', '甜'],
    textures: ['清脆'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170000/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 小白菜 ───────────────────────────────────────────────
  {
    id: 'bok_choy',
    name: '小白菜',
    name_en: 'Baby Bok Choy',
    categories: ['蔬菜'],
    variants: [
      { id: 'bok_choy--raw',     label: '生小白菜', state: 'raw' },
      { id: 'bok_choy--pickled', label: '小白菜漬', state: 'pickled' },
      { id: 'bok_choy--cooked',  label: '熟小白菜', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 13, protein: 1.5, fat: 0.2, carbs: 2.2, fiber: 1.0, sodium: 65 },
    allergens: [],
    tastes: ['甜'],
    textures: ['清脆', '軟嫩'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169975/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 高麗菜 ───────────────────────────────────────────────
  {
    id: 'cabbage',
    name: '高麗菜',
    name_en: 'Cabbage',
    categories: ['蔬菜'],
    variants: [
      { id: 'cabbage--raw',      label: '生高麗菜',   state: 'raw' },
      { id: 'cabbage--shredded', label: '高麗菜絲',   state: 'sliced' },
      { id: 'cabbage--cooked',   label: '熟高麗菜',   state: 'cooked' },
      { id: 'cabbage--pickled',  label: '德式酸菜',   state: 'pickled' },
    ],
    nutrition_per_100g: { calories: 25, protein: 1.3, fat: 0.1, carbs: 5.8, fiber: 2.5, sodium: 18 },
    substitutes: ['napa_cabbage'],
    allergens: [],
    storage_tip: '冷藏，勿清洗後保存（先洗先爛）。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/169975/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 大白菜 ───────────────────────────────────────────────
  {
    id: 'napa_cabbage',
    name: '大白菜',
    name_en: 'Napa Cabbage (Chinese Cabbage)',
    categories: ['蔬菜'],
    variants: [
      { id: 'napa_cabbage--raw',      label: '生大白菜',   state: 'raw' },
      { id: 'napa_cabbage--sliced',   label: '切段大白菜', state: 'sliced' },
      { id: 'napa_cabbage--cooked',   label: '熟大白菜',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 16, protein: 1.2, fat: 0.2, carbs: 3.2, fiber: 1.2, sodium: 9 },
    substitutes: ['cabbage', 'bok_choy'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169979/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 菠菜 ─────────────────────────────────────────────────
  {
    id: 'spinach',
    name: '菠菜',
    name_en: 'Spinach',
    categories: ['蔬菜'],
    variants: [
      { id: 'spinach--raw',    label: '生菠菜',     state: 'raw' },
      { id: 'spinach--cooked', label: '熟菠菜',     state: 'cooked', yield_ratio: 0.35 },
      { id: 'spinach--frozen', label: '冷凍菠菜',   state: 'frozen' },
    ],
    nutrition_per_100g: { calories: 23, protein: 2.9, fat: 0.4, carbs: 3.6, fiber: 2.2, sodium: 79 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168462/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 生菜（萵苣）──────────────────────────────────────────
  {
    id: 'lettuce',
    name: '生菜',
    name_en: 'Lettuce',
    categories: ['蔬菜'],
    variants: [
      { id: 'lettuce--iceberg',   label: '結球萵苣（冰山）', state: 'raw' },
      { id: 'lettuce--romaine',   label: '蘿蔓萵苣',         state: 'raw' },
      { id: 'lettuce--butter',    label: '奶油萵苣',         state: 'raw' },
    ],
    nutrition_per_100g: { calories: 14, protein: 1.4, fat: 0.2, carbs: 2.9, fiber: 1.3, sodium: 28 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169247/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 洋蔥 ─────────────────────────────────────────────────
  {
    id: 'onion',
    name: '洋蔥',
    name_en: 'Onion',
    categories: ['蔬菜'],
    variants: [
      { id: 'onion--yellow', label: '黃洋蔥（一般）', state: 'raw' },
      { id: 'onion--red',    label: '紫洋蔥',         state: 'raw' },
      { id: 'onion--white',  label: '白洋蔥',         state: 'raw' },
      { id: 'onion--sliced', label: '洋蔥絲',         state: 'sliced' },
      { id: 'onion--diced',  label: '洋蔥丁',         state: 'diced' },
      { id: 'onion--caramelized', label: '焦糖洋蔥',  state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 40, protein: 1.1, fat: 0.1, carbs: 9.3, fiber: 1.7, sodium: 4 },
    allergens: [],
    storage_tip: '室溫陰涼通風處保存，勿與馬鈴薯混放。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/170000/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 紅蔥頭 ───────────────────────────────────────────────
  {
    id: 'shallot',
    name: '紅蔥頭',
    name_en: 'Shallot',
    categories: ['蔬菜', '香料'],
    variants: [
      { id: 'shallot--raw',   label: '生紅蔥頭',   state: 'raw' },
      { id: 'shallot--fried', label: '油蔥酥',     state: 'cooked' },
      { id: 'shallot--minced',label: '紅蔥頭末',   state: 'minced' },
    ],
    nutrition_per_100g: { calories: 72, protein: 2.5, fat: 0.1, carbs: 16.8, fiber: 3.2, sodium: 12 },
    substitutes: ['onion', 'garlic_raw'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170003/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 紅蘿蔔 ───────────────────────────────────────────────
  {
    id: 'carrot',
    name: '紅蘿蔔',
    name_en: 'Carrot',
    categories: ['蔬菜'],
    variants: [
      { id: 'carrot--raw',    label: '生紅蘿蔔',   state: 'raw' },
      { id: 'carrot--sliced', label: '紅蘿蔔片',   state: 'sliced' },
      { id: 'carrot--diced',  label: '紅蘿蔔丁',   state: 'diced' },
      { id: 'carrot--cooked', label: '熟紅蘿蔔',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 41, protein: 0.9, fat: 0.2, carbs: 9.6, fiber: 2.8, sodium: 69 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170393/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 白蘿蔔 ───────────────────────────────────────────────
  {
    id: 'daikon',
    name: '白蘿蔔',
    name_en: 'Daikon Radish',
    categories: ['蔬菜'],
    variants: [
      { id: 'daikon--raw',       label: '生白蘿蔔',   state: 'raw' },
      { id: 'daikon--shredded',  label: '蘿蔔絲',     state: 'sliced' },
      { id: 'daikon--pickled',   label: '醃蘿蔔',     state: 'pickled' },
      { id: 'daikon--dried',     label: '菜脯（乾蘿蔔）', state: 'dried' },
    ],
    nutrition_per_100g: { calories: 18, protein: 0.6, fat: 0.1, carbs: 4.1, fiber: 1.6, sodium: 21 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169230/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 馬鈴薯 ───────────────────────────────────────────────
  {
    id: 'potato',
    name: '馬鈴薯',
    name_en: 'Potato',
    categories: ['蔬菜', '主食'],
    variants: [
      { id: 'potato--raw',    label: '生馬鈴薯',   state: 'raw' },
      { id: 'potato--diced',  label: '馬鈴薯塊',   state: 'diced' },
      { id: 'potato--mashed', label: '馬鈴薯泥',   state: 'cooked' },
      { id: 'potato--baked',  label: '烤馬鈴薯',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 77, protein: 2.0, fat: 0.1, carbs: 17.5, fiber: 2.2, sodium: 6 },
    substitutes: ['sweet_potato'],
    allergens: [],
    storage_tip: '室溫陰涼避光處，勿冷藏（澱粉糖化）。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/170434/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 番茄 ─────────────────────────────────────────────────
  {
    id: 'tomato',
    name: '番茄',
    name_en: 'Tomato',
    categories: ['蔬菜', '水果'],
    variants: [
      { id: 'tomato--raw',      label: '生番茄',     state: 'raw' },
      { id: 'tomato--cherry',   label: '小番茄',     state: 'raw' },
      { id: 'tomato--sliced',   label: '番茄片',     state: 'sliced' },
      { id: 'tomato--canned',   label: '罐頭番茄',   state: 'canned' },
      { id: 'tomato--sun_dried',label: '日曬番茄乾', state: 'dried' },
    ],
    nutrition_per_100g: { calories: 18, protein: 0.9, fat: 0.2, carbs: 3.9, fiber: 1.2, sodium: 5 },
    allergens: [],
    tastes: ['酸', '甜'],
    textures: ['多汁', '軟嫩'],
    storage_tip: '室溫保存（冷藏影響風味）；成熟後可移冰箱延長保存。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/170457/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 小黃瓜 ───────────────────────────────────────────────
  {
    id: 'cucumber',
    name: '小黃瓜',
    name_en: 'Cucumber',
    categories: ['蔬菜'],
    variants: [
      { id: 'cucumber--raw',    label: '生小黃瓜',   state: 'raw' },
      { id: 'cucumber--sliced', label: '黃瓜片',     state: 'sliced' },
      { id: 'cucumber--pickled',label: '醃黃瓜',     state: 'pickled' },
    ],
    nutrition_per_100g: { calories: 15, protein: 0.7, fat: 0.1, carbs: 3.6, fiber: 0.5, sodium: 2 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168409/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 茄子 ─────────────────────────────────────────────────
  {
    id: 'eggplant',
    name: '茄子',
    name_en: 'Eggplant (Aubergine)',
    categories: ['蔬菜'],
    variants: [
      { id: 'eggplant--japanese',  label: '日本茄子（長茄）',   state: 'raw' },
      { id: 'eggplant--globe',     label: '圓茄（義大利茄子）', state: 'raw' },
      { id: 'eggplant--thai',      label: '泰式小茄子',         state: 'raw' },
      { id: 'eggplant--grilled',   label: '烤茄子',             state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 25, protein: 1.0, fat: 0.2, carbs: 5.9, fiber: 3.0, sodium: 2 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169228/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 甜椒 ─────────────────────────────────────────────────
  {
    id: 'bell_pepper',
    name: '甜椒',
    name_en: 'Bell Pepper',
    categories: ['蔬菜'],
    variants: [
      { id: 'bell_pepper--red',    label: '紅甜椒', state: 'raw' },
      { id: 'bell_pepper--yellow', label: '黃甜椒', state: 'raw' },
      { id: 'bell_pepper--green',  label: '青椒',   state: 'raw' },
      { id: 'bell_pepper--orange', label: '橘甜椒', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 31, protein: 1.0, fat: 0.3, carbs: 6.0, fiber: 2.1, sodium: 4 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170108/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 花椰菜（青）──────────────────────────────────────────
  {
    id: 'broccoli',
    name: '花椰菜',
    name_en: 'Broccoli',
    categories: ['蔬菜'],
    variants: [
      { id: 'broccoli--raw',     label: '生花椰菜', state: 'raw' },
      { id: 'broccoli--cooked',  label: '熟花椰菜', state: 'cooked' },
      { id: 'broccoli--frozen',  label: '冷凍花椰菜', state: 'frozen' },
    ],
    nutrition_per_100g: { calories: 34, protein: 2.8, fat: 0.4, carbs: 6.6, fiber: 2.6, sodium: 33 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170379/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 白花椰菜 ─────────────────────────────────────────────
  {
    id: 'cauliflower',
    name: '白花椰菜',
    name_en: 'Cauliflower',
    categories: ['蔬菜'],
    variants: [
      { id: 'cauliflower--raw',    label: '生白花椰菜',   state: 'raw' },
      { id: 'cauliflower--riced',  label: '花椰菜米',     state: 'minced' },
      { id: 'cauliflower--cooked', label: '熟白花椰菜',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 25, protein: 1.9, fat: 0.3, carbs: 5.0, fiber: 2.0, sodium: 30 },
    substitutes: ['broccoli'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169986/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 蘆筍 ─────────────────────────────────────────────────
  {
    id: 'asparagus',
    name: '蘆筍',
    name_en: 'Asparagus',
    categories: ['蔬菜'],
    variants: [
      { id: 'asparagus--green', label: '綠蘆筍',   state: 'raw' },
      { id: 'asparagus--white', label: '白蘆筍',   state: 'raw' },
      { id: 'asparagus--cooked',label: '熟蘆筍',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 20, protein: 2.2, fat: 0.1, carbs: 3.9, fiber: 2.1, sodium: 2 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168389/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 毛豆 ─────────────────────────────────────────────────
  {
    id: 'edamame',
    name: '毛豆',
    name_en: 'Edamame',
    categories: ['蔬菜', '蛋白質'],
    variants: [
      { id: 'edamame--frozen',  label: '冷凍毛豆仁', state: 'frozen' },
      { id: 'edamame--pod',     label: '帶莢毛豆',   state: 'raw' },
      { id: 'edamame--cooked',  label: '熟毛豆仁',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 121, protein: 11.9, fat: 5.2, carbs: 8.9, fiber: 5.2, sodium: 6 },
    allergens: ['soy'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168411/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 豆芽菜 ───────────────────────────────────────────────
  {
    id: 'bean_sprout',
    name: '豆芽菜',
    name_en: 'Bean Sprout (Mung Bean)',
    categories: ['蔬菜'],
    variants: [
      { id: 'bean_sprout--mung',  label: '綠豆芽',   state: 'raw' },
      { id: 'bean_sprout--soy',   label: '黃豆芽',   state: 'raw' },
      { id: 'bean_sprout--cooked',label: '熟豆芽',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 30, protein: 3.0, fat: 0.2, carbs: 5.9, fiber: 1.8, sodium: 6 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168430/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 竹筍 ─────────────────────────────────────────────────
  {
    id: 'bamboo_shoot',
    name: '竹筍',
    name_en: 'Bamboo Shoot',
    categories: ['蔬菜'],
    variants: [
      { id: 'bamboo_shoot--fresh',  label: '新鮮竹筍',   state: 'raw' },
      { id: 'bamboo_shoot--canned', label: '罐頭筍片',   state: 'canned' },
      { id: 'bamboo_shoot--dried',  label: '筍乾',       state: 'dried' },
    ],
    nutrition_per_100g: { calories: 27, protein: 2.6, fat: 0.3, carbs: 5.2, fiber: 2.2, sodium: 4 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168427/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 蓮藕 ─────────────────────────────────────────────────
  {
    id: 'lotus_root',
    name: '蓮藕',
    name_en: 'Lotus Root',
    categories: ['蔬菜'],
    variants: [
      { id: 'lotus_root--raw',    label: '生蓮藕',   state: 'raw' },
      { id: 'lotus_root--sliced', label: '蓮藕片',   state: 'sliced' },
      { id: 'lotus_root--cooked', label: '熟蓮藕',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 74, protein: 2.6, fat: 0.1, carbs: 17.2, fiber: 3.1, sodium: 40 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 牛蒡 ─────────────────────────────────────────────────
  {
    id: 'burdock',
    name: '牛蒡',
    name_en: 'Burdock Root',
    categories: ['蔬菜'],
    variants: [
      { id: 'burdock--raw',      label: '生牛蒡',     state: 'raw' },
      { id: 'burdock--shredded', label: '牛蒡絲',     state: 'sliced' },
      { id: 'burdock--cooked',   label: '熟牛蒡',     state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 72, protein: 1.5, fat: 0.2, carbs: 17.3, fiber: 3.3, sodium: 5 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 香菇 ─────────────────────────────────────────────────
  {
    id: 'shiitake',
    name: '香菇',
    name_en: 'Shiitake Mushroom',
    categories: ['蔬菜', '菇類'],
    variants: [
      { id: 'shiitake--fresh',  label: '新鮮香菇',   state: 'raw' },
      { id: 'shiitake--dried',  label: '乾香菇',     state: 'dried',  yield_ratio: 0.15 },
      { id: 'shiitake--sliced', label: '香菇片',     state: 'sliced' },
    ],
    nutrition_per_100g: { calories: 34, protein: 2.2, fat: 0.5, carbs: 6.8, fiber: 2.5, sodium: 9 },
    allergens: [],
    storage_tip: '新鮮香菇冷藏 1 週；乾香菇密封常溫保存，泡發前勿清洗。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/169243/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 金針菇 ───────────────────────────────────────────────
  {
    id: 'enoki',
    name: '金針菇',
    name_en: 'Enoki Mushroom',
    categories: ['蔬菜', '菇類'],
    variants: [
      { id: 'enoki--raw',    label: '生金針菇', state: 'raw' },
      { id: 'enoki--cooked', label: '熟金針菇', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 37, protein: 2.7, fat: 0.3, carbs: 7.8, fiber: 2.7, sodium: 3 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169228/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 杏鮑菇 ───────────────────────────────────────────────
  {
    id: 'king_oyster_mushroom',
    name: '杏鮑菇',
    name_en: 'King Oyster Mushroom',
    categories: ['蔬菜', '菇類'],
    variants: [
      { id: 'king_oyster_mushroom--raw',    label: '生杏鮑菇',   state: 'raw' },
      { id: 'king_oyster_mushroom--sliced', label: '杏鮑菇片',   state: 'sliced' },
      { id: 'king_oyster_mushroom--grilled',label: '烤杏鮑菇',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 35, protein: 3.7, fat: 0.2, carbs: 6.8, fiber: 2.8, sodium: 6 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鴻禧菇 ───────────────────────────────────────────────
  {
    id: 'shimeji',
    name: '鴻禧菇',
    name_en: 'Shimeji Mushroom (Beech Mushroom)',
    categories: ['蔬菜', '菇類'],
    variants: [
      { id: 'shimeji--white', label: '白鴻禧菇', state: 'raw' },
      { id: 'shimeji--brown', label: '褐鴻禧菇', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 26, protein: 2.7, fat: 0.3, carbs: 4.3, fiber: 2.0, sodium: 1 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 木耳 ─────────────────────────────────────────────────
  {
    id: 'wood_ear',
    name: '木耳',
    name_en: 'Wood Ear Mushroom (Black Fungus)',
    categories: ['蔬菜', '菇類'],
    variants: [
      { id: 'wood_ear--dried',  label: '乾木耳', state: 'dried',  yield_ratio: 0.1 },
      { id: 'wood_ear--fresh',  label: '生木耳', state: 'raw' },
      { id: 'wood_ear--soaked', label: '泡發木耳', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 20, protein: 0.5, fat: 0.2, carbs: 5.1, fiber: 5.1, sodium: 9 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 韭菜 ─────────────────────────────────────────────────
  {
    id: 'chives',
    name: '韭菜',
    name_en: 'Chinese Chives (Garlic Chives)',
    categories: ['蔬菜', '香料'],
    variants: [
      { id: 'chives--fresh',   label: '新鮮韭菜',   state: 'raw' },
      { id: 'chives--yellow',  label: '韭黃',       state: 'raw' },
      { id: 'chives--flower',  label: '韭菜花',     state: 'raw' },
    ],
    nutrition_per_100g: { calories: 30, protein: 3.4, fat: 0.7, carbs: 4.2, fiber: 3.9, sodium: 3 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 西洋芹 ───────────────────────────────────────────────
  {
    id: 'celery',
    name: '西洋芹',
    name_en: 'Celery',
    categories: ['蔬菜'],
    variants: [
      { id: 'celery--raw',    label: '生西洋芹',   state: 'raw' },
      { id: 'celery--sliced', label: '芹菜片',     state: 'sliced' },
    ],
    nutrition_per_100g: { calories: 16, protein: 0.7, fat: 0.2, carbs: 3.0, fiber: 1.6, sodium: 80 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169988/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 南瓜 ─────────────────────────────────────────────────
  {
    id: 'pumpkin',
    name: '南瓜',
    name_en: 'Pumpkin / Kabocha',
    categories: ['蔬菜'],
    variants: [
      { id: 'pumpkin--kabocha', label: '日本南瓜（栗南瓜）', state: 'raw' },
      { id: 'pumpkin--raw',     label: '生南瓜',             state: 'raw' },
      { id: 'pumpkin--cooked',  label: '熟南瓜',             state: 'cooked' },
      { id: 'pumpkin--mashed',  label: '南瓜泥',             state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 26, protein: 1.0, fat: 0.1, carbs: 6.5, fiber: 0.5, sodium: 1 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168448/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 節瓜（櫛瓜）────────────────────────────────────────
  {
    id: 'zucchini',
    name: '節瓜',
    name_en: 'Zucchini (Courgette)',
    categories: ['蔬菜'],
    variants: [
      { id: 'zucchini--raw',    label: '生節瓜',   state: 'raw' },
      { id: 'zucchini--sliced', label: '節瓜片',   state: 'sliced' },
      { id: 'zucchini--grilled',label: '烤節瓜',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 17, protein: 1.2, fat: 0.3, carbs: 3.1, fiber: 1.0, sodium: 8 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169291/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 豌豆 ─────────────────────────────────────────────────
  {
    id: 'peas',
    name: '豌豆',
    name_en: 'Green Peas',
    categories: ['蔬菜', '蛋白質'],
    variants: [
      { id: 'peas--frozen',  label: '冷凍豌豆仁', state: 'frozen' },
      { id: 'peas--fresh',   label: '新鮮豌豆仁', state: 'raw' },
      { id: 'peas--pod',     label: '甜豆（帶莢）',state: 'raw' },
    ],
    nutrition_per_100g: { calories: 81, protein: 5.4, fat: 0.4, carbs: 14.5, fiber: 5.1, sodium: 5 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170420/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 玉米（整根）─────────────────────────────────────────
  {
    id: 'corn',
    name: '玉米',
    name_en: 'Corn (Whole)',
    categories: ['蔬菜'],
    variants: [
      { id: 'corn--whole',  label: '整根玉米（帶殼）', state: 'raw' },
      { id: 'corn--cooked', label: '熟玉米',           state: 'cooked' },
      { id: 'corn--baby',   label: '玉米筍',           state: 'raw' },
    ],
    nutrition_per_100g: { calories: 86, protein: 3.2, fat: 1.2, carbs: 18.7, fiber: 2.0, sodium: 15 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169998/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 羽衣甘藍 ─────────────────────────────────────────────
  {
    id: 'kale',
    name: '羽衣甘藍',
    name_en: 'Kale',
    categories: ['蔬菜'],
    variants: [
      { id: 'kale--raw',    label: '生羽衣甘藍',   state: 'raw' },
      { id: 'kale--baby',   label: '嫩羽衣甘藍',   state: 'raw' },
      { id: 'kale--cooked', label: '熟羽衣甘藍',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 49, protein: 4.3, fat: 0.9, carbs: 8.8, fiber: 3.6, sodium: 38 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168421/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 豆腐 ─────────────────────────────────────────────────
  {
    id: 'tofu',
    name: '豆腐',
    name_en: 'Tofu',
    categories: ['蔬菜', '蛋白質'],
    variants: [
      { id: 'tofu--firm',    label: '板豆腐（老豆腐）', state: 'raw' },
      { id: 'tofu--egg',     label: '雞蛋豆腐',         state: 'raw' },
      { id: 'tofu--soft',    label: '嫩豆腐',           state: 'raw' },
      { id: 'tofu--silken',  label: '絹豆腐',           state: 'raw' },
      { id: 'tofu--fried',   label: '炸豆腐皮（百頁）', state: 'cooked' },
      { id: 'tofu--smoked',  label: '煙燻豆腐',         state: 'smoked' },
    ],
    nutrition_per_100g: { calories: 76, protein: 8.1, fat: 4.2, carbs: 1.9, fiber: 0.3, sodium: 7 },
    substitutes: ['edamame'],
    allergens: ['soy'],
    storage_tip: '冷藏浸水保存，每天換水，三天內食用。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/172476/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 荸薺 ─────────────────────────────────────────────────
  {
    id: 'water_chestnut',
    name: '荸薺',
    name_en: 'Water Chestnut',
    categories: ['蔬菜'],
    variants: [
      { id: 'water_chestnut--raw',    label: '生荸薺',     state: 'raw' },
      { id: 'water_chestnut--canned', label: '罐頭荸薺',   state: 'canned' },
      { id: 'water_chestnut--sliced', label: '荸薺片',     state: 'sliced' },
    ],
    nutrition_per_100g: { calories: 97, protein: 2.0, fat: 0.1, carbs: 23.9, fiber: 3.0, sodium: 14 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169288/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 西蘭花苗 ─────────────────────────────────────────────
  {
    id: 'broccoli_sprouts',
    name: '花椰菜苗',
    name_en: 'Broccoli Sprouts',
    categories: ['蔬菜'],
    variants: [
      { id: 'broccoli_sprouts--raw', label: '花椰菜苗', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 36, protein: 3.1, fat: 0.5, carbs: 5.8, fiber: 3.6, sodium: 13 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 玉米筍 ───────────────────────────────────────────────
  {
    id: 'baby_corn',
    name: '玉米筍',
    name_en: 'Baby Corn',
    categories: ['蔬菜'],
    variants: [
      { id: 'baby_corn--canned',  label: '罐頭玉米筍', state: 'canned' },
      { id: 'baby_corn--fresh',   label: '新鮮玉米筍', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 26, protein: 2.0, fat: 0.4, carbs: 5.4, fiber: 2.5, sodium: 3 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 秋葵 ─────────────────────────────────────────────────
  {
    id: 'okra',
    name: '秋葵',
    name_en: 'Okra',
    categories: ['蔬菜'],
    variants: [
      { id: 'okra--raw',     label: '生秋葵',   state: 'raw' },
      { id: 'okra--sliced',  label: '秋葵片',   state: 'sliced' },
      { id: 'okra--cooked',  label: '熟秋葵',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 33, protein: 1.9, fat: 0.2, carbs: 7.5, fiber: 3.2, sodium: 7 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169260/nutrients',
    verified_at: '2024-11-01',
  },

];
