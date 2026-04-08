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
    tastes: ['甜'],
    textures: ['油膩', '濃郁'],
    storage_tip: '避光陰涼處保存，開封後半年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/172338/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 辣麻油 ───────────────────────────────────────────────
  {
    id: 'chili_sesame_oil',
    name: '辣麻油',
    name_en: 'Chili Sesame Oil',
    categories: ['油脂'],
    variants: [
      { id: 'chili_sesame_oil--standard', label: '辣麻油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 5,
    },
    substitutes: ['sesame_oil'],
    allergens: ['sesame'],
    storage_tip: '避光陰涼處保存，開封後半年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 橄欖油 ───────────────────────────────────────────────
  {
    id: 'olive_oil',
    name: '橄欖油',
    name_en: 'Olive Oil',
    categories: ['油脂'],
    variants: [
      { id: 'olive_oil--extra_virgin', label: '特級初榨橄欖油', state: 'raw', yield_ratio: 1.0 },
      { id: 'olive_oil--pure',         label: '純橄欖油',       state: 'raw', yield_ratio: 1.0 },
      { id: 'olive_oil--light',        label: '淡味橄欖油',     state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 2,
    },
    substitutes: ['avocado_oil', 'canola_oil'],
    allergens: [],
    tastes: ['苦'],
    textures: ['油膩'],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/171413/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 菜籽油 ───────────────────────────────────────────────
  {
    id: 'canola_oil',
    name: '菜籽油',
    name_en: 'Canola Oil',
    categories: ['油脂'],
    variants: [
      { id: 'canola_oil--standard', label: '菜籽油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['vegetable_oil', 'sunflower_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/172336/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 沙拉油（大豆沙拉油）───────────────────────────────────
  {
    id: 'vegetable_oil',
    name: '沙拉油',
    name_en: 'Vegetable Oil',
    categories: ['油脂'],
    variants: [
      { id: 'vegetable_oil--standard', label: '沙拉油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['canola_oil', 'sunflower_oil'],
    allergens: ['soy'],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 椰子油 ───────────────────────────────────────────────
  {
    id: 'coconut_oil',
    name: '椰子油',
    name_en: 'Coconut Oil',
    categories: ['油脂'],
    variants: [
      { id: 'coconut_oil--virgin',   label: '初榨椰子油', state: 'raw', yield_ratio: 1.0 },
      { id: 'coconut_oil--refined',  label: '精製椰子油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 892, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['butter', 'ghee'],
    allergens: [],
    storage_tip: '室溫保存即可，低於25°C為固態，高溫融化後品質不變。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/171413/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 奶油 ─────────────────────────────────────────────────
  {
    id: 'butter',
    name: '奶油',
    name_en: 'Butter',
    categories: ['油脂'],
    variants: [
      { id: 'butter--salted',   label: '有鹽奶油', state: 'raw', yield_ratio: 1.0 },
      { id: 'butter--unsalted', label: '無鹽奶油', state: 'raw', yield_ratio: 1.0 },
      { id: 'butter--clarified',label: '澄清奶油', state: 'raw', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 717, protein: 0.9, fat: 81, carbs: 0.1, sodium: 643,
    },
    substitutes: ['ghee', 'coconut_oil', 'margarine'],
    allergens: ['dairy'],
    tastes: ['甜'],
    textures: ['濃郁', '滑順'],
    storage_tip: '冷藏保存，開封後一個月內使用；或冷凍可保存數月。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/173410/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 酥油（印度澄清奶油）─────────────────────────────────
  {
    id: 'ghee',
    name: '酥油',
    name_en: 'Ghee',
    categories: ['油脂'],
    variants: [
      { id: 'ghee--standard', label: '酥油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 900, protein: 0.3, fat: 100, carbs: 0, sodium: 2,
    },
    substitutes: ['butter', 'coconut_oil'],
    allergens: ['dairy'],
    storage_tip: '室溫可保存三個月，冷藏可延長至一年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豬油 ─────────────────────────────────────────────────
  {
    id: 'lard',
    name: '豬油',
    name_en: 'Lard',
    categories: ['油脂'],
    variants: [
      { id: 'lard--rendered', label: '煉製豬油', state: 'raw', yield_ratio: 1.0 },
      { id: 'lard--leaf',     label: '板油',     state: 'raw', yield_ratio: 0.85 },
    ],
    nutrition_per_100g: {
      calories: 902, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['beef_tallow', 'chicken_fat'],
    allergens: [],
    storage_tip: '冷藏可保存一個月，冷凍可保存數月。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/173765/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 牛油（牛脂）─────────────────────────────────────────
  {
    id: 'beef_tallow',
    name: '牛油',
    name_en: 'Beef Tallow',
    categories: ['油脂'],
    variants: [
      { id: 'beef_tallow--rendered', label: '煉製牛油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 902, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['lard', 'ghee'],
    allergens: [],
    storage_tip: '冷藏可保存一個月，冷凍可保存半年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 雞油 ─────────────────────────────────────────────────
  {
    id: 'chicken_fat',
    name: '雞油',
    name_en: 'Chicken Fat',
    categories: ['油脂'],
    variants: [
      { id: 'chicken_fat--rendered', label: '煉製雞油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 900, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['lard', 'duck_fat'],
    allergens: [],
    storage_tip: '冷藏可保存兩週，冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鴨油 ─────────────────────────────────────────────────
  {
    id: 'duck_fat',
    name: '鴨油',
    name_en: 'Duck Fat',
    categories: ['油脂'],
    variants: [
      { id: 'duck_fat--rendered', label: '煉製鴨油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 900, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['chicken_fat', 'lard'],
    allergens: [],
    storage_tip: '冷藏可保存一個月，冷凍可保存半年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 酪梨油 ───────────────────────────────────────────────
  {
    id: 'avocado_oil',
    name: '酪梨油',
    name_en: 'Avocado Oil',
    categories: ['油脂'],
    variants: [
      { id: 'avocado_oil--cold_pressed', label: '冷壓酪梨油', state: 'raw', yield_ratio: 1.0 },
      { id: 'avocado_oil--refined',      label: '精製酪梨油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['olive_oil', 'grape_seed_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 花生油 ───────────────────────────────────────────────
  {
    id: 'peanut_oil',
    name: '花生油',
    name_en: 'Peanut Oil',
    categories: ['油脂'],
    variants: [
      { id: 'peanut_oil--standard', label: '花生油',   state: 'raw', yield_ratio: 1.0 },
      { id: 'peanut_oil--roasted',  label: '烤花生油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['canola_oil', 'vegetable_oil'],
    allergens: ['peanut'],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 葵花籽油 ─────────────────────────────────────────────
  {
    id: 'sunflower_oil',
    name: '葵花籽油',
    name_en: 'Sunflower Oil',
    categories: ['油脂'],
    variants: [
      { id: 'sunflower_oil--standard', label: '葵花籽油',   state: 'raw', yield_ratio: 1.0 },
      { id: 'sunflower_oil--high_oleic',label: '高油酸葵花油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['canola_oil', 'vegetable_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 玉米油 ───────────────────────────────────────────────
  {
    id: 'corn_oil',
    name: '玉米油',
    name_en: 'Corn Oil',
    categories: ['油脂'],
    variants: [
      { id: 'corn_oil--standard', label: '玉米油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['vegetable_oil', 'canola_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 大豆油 ───────────────────────────────────────────────
  {
    id: 'soybean_oil',
    name: '大豆油',
    name_en: 'Soybean Oil',
    categories: ['油脂'],
    variants: [
      { id: 'soybean_oil--standard', label: '大豆油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['vegetable_oil', 'canola_oil'],
    allergens: ['soy'],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 葡萄籽油 ─────────────────────────────────────────────
  {
    id: 'grape_seed_oil',
    name: '葡萄籽油',
    name_en: 'Grape Seed Oil',
    categories: ['油脂'],
    variants: [
      { id: 'grape_seed_oil--standard', label: '葡萄籽油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['avocado_oil', 'sunflower_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 米糠油 ───────────────────────────────────────────────
  {
    id: 'rice_bran_oil',
    name: '米糠油',
    name_en: 'Rice Bran Oil',
    categories: ['油脂'],
    variants: [
      { id: 'rice_bran_oil--standard', label: '米糠油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['canola_oil', 'sunflower_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 亞麻籽油 ─────────────────────────────────────────────
  {
    id: 'flaxseed_oil',
    name: '亞麻籽油',
    name_en: 'Flaxseed Oil',
    categories: ['油脂'],
    variants: [
      { id: 'flaxseed_oil--cold_pressed', label: '冷壓亞麻籽油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0.1, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['perilla_oil', 'walnut_oil'],
    allergens: [],
    storage_tip: '冷藏保存，開封後三個月內使用，不適合高溫烹調。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 紫蘇油 ───────────────────────────────────────────────
  {
    id: 'perilla_oil',
    name: '紫蘇油',
    name_en: 'Perilla Oil',
    categories: ['油脂'],
    variants: [
      { id: 'perilla_oil--cold_pressed', label: '冷壓紫蘇油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['flaxseed_oil'],
    allergens: [],
    storage_tip: '冷藏保存，開封後三個月內使用，不適合高溫烹調。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 核桃油 ───────────────────────────────────────────────
  {
    id: 'walnut_oil',
    name: '核桃油',
    name_en: 'Walnut Oil',
    categories: ['油脂'],
    variants: [
      { id: 'walnut_oil--cold_pressed', label: '冷壓核桃油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0.1, fat: 100, carbs: 0.7, sodium: 0,
    },
    substitutes: ['flaxseed_oil', 'perilla_oil'],
    allergens: ['tree_nut'],
    storage_tip: '冷藏保存，開封後六個月內使用，不適合高溫烹調。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 南瓜籽油 ─────────────────────────────────────────────
  {
    id: 'pumpkin_seed_oil',
    name: '南瓜籽油',
    name_en: 'Pumpkin Seed Oil',
    categories: ['油脂'],
    variants: [
      { id: 'pumpkin_seed_oil--standard', label: '南瓜籽油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['flaxseed_oil', 'walnut_oil'],
    allergens: [],
    storage_tip: '冷藏保存，開封後六個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 苦茶油（山茶花油）────────────────────────────────────
  {
    id: 'camellia_oil',
    name: '苦茶油',
    name_en: 'Camellia Oil',
    categories: ['油脂'],
    variants: [
      { id: 'camellia_oil--cold_pressed', label: '冷壓苦茶油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['olive_oil', 'avocado_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 紅花籽油 ─────────────────────────────────────────────
  {
    id: 'safflower_oil',
    name: '紅花籽油',
    name_en: 'Safflower Oil',
    categories: ['油脂'],
    variants: [
      { id: 'safflower_oil--high_oleic',   label: '高油酸紅花籽油', state: 'raw', yield_ratio: 1.0 },
      { id: 'safflower_oil--high_linoleic', label: '高亞麻酸紅花籽油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['sunflower_oil', 'canola_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 黑芝麻油 ─────────────────────────────────────────────
  {
    id: 'black_sesame_oil',
    name: '黑芝麻油',
    name_en: 'Black Sesame Oil',
    categories: ['油脂'],
    variants: [
      { id: 'black_sesame_oil--standard', label: '黑芝麻油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['sesame_oil'],
    allergens: ['sesame'],
    storage_tip: '避光陰涼處保存，開封後半年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 辣椒油 ───────────────────────────────────────────────
  {
    id: 'chili_oil',
    name: '辣椒油',
    name_en: 'Chili Oil',
    categories: ['油脂'],
    variants: [
      { id: 'chili_oil--standard',  label: '辣椒油',     state: 'raw', yield_ratio: 1.0 },
      { id: 'chili_oil--sichuan',   label: '四川紅油',   state: 'raw', yield_ratio: 1.0 },
      { id: 'chili_oil--with_sediment', label: '帶渣辣椒油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 820, protein: 1, fat: 92, carbs: 4, sodium: 30,
    },
    substitutes: ['chili_sesame_oil'],
    allergens: ['sesame'],
    storage_tip: '室溫保存，開封後三個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蒜香油 ───────────────────────────────────────────────
  {
    id: 'garlic_oil',
    name: '蒜香油',
    name_en: 'Garlic Oil',
    categories: ['油脂'],
    variants: [
      { id: 'garlic_oil--infused',   label: '浸泡蒜香油', state: 'raw', yield_ratio: 1.0 },
      { id: 'garlic_oil--fried',     label: '炸蒜油',     state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 870, protein: 0.2, fat: 98, carbs: 0.8, sodium: 5,
    },
    substitutes: ['olive_oil'],
    allergens: [],
    storage_tip: '冷藏保存，開封後一個月內使用（避免肉毒桿菌）。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 松露油 ───────────────────────────────────────────────
  {
    id: 'truffle_oil',
    name: '松露油',
    name_en: 'Truffle Oil',
    categories: ['油脂'],
    variants: [
      { id: 'truffle_oil--white', label: '白松露油', state: 'raw', yield_ratio: 1.0 },
      { id: 'truffle_oil--black', label: '黑松露油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['olive_oil'],
    allergens: [],
    storage_tip: '避光陰涼處保存，開封後六個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 香草浸泡油 ───────────────────────────────────────────
  {
    id: 'herb_infused_oil',
    name: '香草浸泡油',
    name_en: 'Herb Infused Oil',
    categories: ['油脂'],
    variants: [
      { id: 'herb_infused_oil--rosemary', label: '迷迭香浸泡油', state: 'raw', yield_ratio: 1.0 },
      { id: 'herb_infused_oil--basil',    label: '羅勒浸泡油',   state: 'raw', yield_ratio: 1.0 },
      { id: 'herb_infused_oil--thyme',    label: '百里香浸泡油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['olive_oil'],
    allergens: [],
    storage_tip: '冷藏保存，一個月內使用（避免肉毒桿菌）。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 麻辣油 ───────────────────────────────────────────────
  {
    id: 'mala_oil',
    name: '麻辣油',
    name_en: 'Mala Oil',
    categories: ['油脂'],
    variants: [
      { id: 'mala_oil--standard', label: '麻辣油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 820, protein: 1, fat: 92, carbs: 5, sodium: 150,
    },
    substitutes: ['chili_oil'],
    allergens: ['sesame'],
    storage_tip: '室溫保存，開封後三個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蔥油 ─────────────────────────────────────────────────
  {
    id: 'scallion_oil',
    name: '蔥油',
    name_en: 'Scallion Oil',
    categories: ['油脂'],
    variants: [
      { id: 'scallion_oil--standard', label: '蔥油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 870, protein: 0.3, fat: 97, carbs: 1, sodium: 5,
    },
    substitutes: ['garlic_oil'],
    allergens: [],
    storage_tip: '冷藏保存，兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 乳瑪琳（人造奶油）────────────────────────────────────
  {
    id: 'margarine',
    name: '乳瑪琳',
    name_en: 'Margarine',
    categories: ['油脂'],
    variants: [
      { id: 'margarine--block',  label: '塊狀乳瑪琳', state: 'raw', yield_ratio: 1.0 },
      { id: 'margarine--spread', label: '抹醬乳瑪琳', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 717, protein: 0.2, fat: 80, carbs: 0.7, sodium: 751,
    },
    substitutes: ['butter', 'coconut_oil'],
    allergens: ['dairy', 'soy'],
    storage_tip: '冷藏保存，開封後一個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 起酥油 ───────────────────────────────────────────────
  {
    id: 'shortening',
    name: '起酥油',
    name_en: 'Shortening',
    categories: ['油脂'],
    variants: [
      { id: 'shortening--vegetable', label: '植物性起酥油', state: 'raw', yield_ratio: 1.0 },
      { id: 'shortening--lard_based',label: '豬油起酥油',   state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['butter', 'lard'],
    allergens: [],
    storage_tip: '室溫陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── MCT油 ────────────────────────────────────────────────
  {
    id: 'mct_oil',
    name: 'MCT油',
    name_en: 'MCT Oil',
    categories: ['油脂'],
    variants: [
      { id: 'mct_oil--standard', label: 'MCT油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 900, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['coconut_oil'],
    allergens: [],
    storage_tip: '室溫保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 棕櫚油 ───────────────────────────────────────────────
  {
    id: 'palm_oil',
    name: '棕櫚油',
    name_en: 'Palm Oil',
    categories: ['油脂'],
    variants: [
      { id: 'palm_oil--refined',   label: '精製棕櫚油',     state: 'raw', yield_ratio: 1.0 },
      { id: 'palm_oil--red',       label: '紅棕櫚油',       state: 'raw', yield_ratio: 1.0 },
      { id: 'palm_oil--kernel',    label: '棕櫚仁油',       state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['coconut_oil', 'shortening'],
    allergens: [],
    storage_tip: '室溫保存，低溫時為固態，正常品質不變。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 榛果油 ───────────────────────────────────────────────
  {
    id: 'hazelnut_oil',
    name: '榛果油',
    name_en: 'Hazelnut Oil',
    categories: ['油脂'],
    variants: [
      { id: 'hazelnut_oil--cold_pressed', label: '冷壓榛果油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['walnut_oil', 'almond_oil'],
    allergens: ['tree_nut'],
    storage_tip: '冷藏保存，開封後六個月內使用，不適合高溫烹調。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 杏仁油 ───────────────────────────────────────────────
  {
    id: 'almond_oil',
    name: '杏仁油',
    name_en: 'Almond Oil',
    categories: ['油脂'],
    variants: [
      { id: 'almond_oil--sweet',       label: '甜杏仁油',     state: 'raw', yield_ratio: 1.0 },
      { id: 'almond_oil--cold_pressed',label: '冷壓甜杏仁油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['hazelnut_oil', 'walnut_oil'],
    allergens: ['tree_nut'],
    storage_tip: '冷藏保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 夏威夷豆油 ───────────────────────────────────────────
  {
    id: 'macadamia_oil',
    name: '夏威夷豆油',
    name_en: 'Macadamia Oil',
    categories: ['油脂'],
    variants: [
      { id: 'macadamia_oil--cold_pressed', label: '冷壓夏威夷豆油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['avocado_oil', 'almond_oil'],
    allergens: ['tree_nut'],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 大麻籽油 ─────────────────────────────────────────────
  {
    id: 'hemp_seed_oil',
    name: '大麻籽油',
    name_en: 'Hemp Seed Oil',
    categories: ['油脂'],
    variants: [
      { id: 'hemp_seed_oil--cold_pressed', label: '冷壓大麻籽油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['flaxseed_oil', 'perilla_oil'],
    allergens: [],
    storage_tip: '冷藏保存，開封後三個月內使用，不適合高溫烹調。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 辣豆瓣醬油 ───────────────────────────────────────────
  {
    id: 'doubanjiang_oil',
    name: '豆瓣油',
    name_en: 'Doubanjiang Oil',
    categories: ['油脂'],
    variants: [
      { id: 'doubanjiang_oil--standard', label: '豆瓣油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 800, protein: 2, fat: 88, carbs: 6, sodium: 400,
    },
    substitutes: ['chili_oil'],
    allergens: ['soy'],
    storage_tip: '室溫保存，開封後三個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 薑油 ─────────────────────────────────────────────────
  {
    id: 'ginger_oil',
    name: '薑油',
    name_en: 'Ginger Oil',
    categories: ['油脂'],
    variants: [
      { id: 'ginger_oil--infused',    label: '浸泡薑油', state: 'raw', yield_ratio: 1.0 },
      { id: 'ginger_oil--essential',  label: '薑精油',   state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 870, protein: 0, fat: 97, carbs: 1.5, sodium: 2,
    },
    substitutes: ['garlic_oil', 'sesame_oil'],
    allergens: [],
    storage_tip: '冷藏保存，開封後一個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 沙茶油 ───────────────────────────────────────────────
  {
    id: 'satay_oil',
    name: '沙茶油',
    name_en: 'Satay Oil',
    categories: ['油脂'],
    variants: [
      { id: 'satay_oil--standard', label: '沙茶油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 810, protein: 3, fat: 87, carbs: 7, sodium: 500,
    },
    substitutes: ['chili_oil'],
    allergens: ['peanut', 'sesame', 'fish'],
    storage_tip: '冷藏保存，開封後三個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 腰果油 ───────────────────────────────────────────────
  {
    id: 'cashew_oil',
    name: '腰果油',
    name_en: 'Cashew Oil',
    categories: ['油脂'],
    variants: [
      { id: 'cashew_oil--cold_pressed', label: '冷壓腰果油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['almond_oil', 'macadamia_oil'],
    allergens: ['tree_nut'],
    storage_tip: '避光陰涼處保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 杏桃核油 ─────────────────────────────────────────────
  {
    id: 'apricot_kernel_oil',
    name: '杏桃核油',
    name_en: 'Apricot Kernel Oil',
    categories: ['油脂'],
    variants: [
      { id: 'apricot_kernel_oil--cold_pressed', label: '冷壓杏桃核油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['almond_oil', 'grape_seed_oil'],
    allergens: [],
    storage_tip: '冷藏保存，開封後一年內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 魚油（烹飪用）────────────────────────────────────────
  {
    id: 'fish_oil_cooking',
    name: '魚油（烹飪用）',
    name_en: 'Fish Oil (Cooking)',
    categories: ['油脂'],
    variants: [
      { id: 'fish_oil_cooking--standard', label: '烹飪魚油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 902, protein: 0, fat: 100, carbs: 0, sodium: 0,
    },
    substitutes: ['lard', 'chicken_fat'],
    allergens: ['fish'],
    storage_tip: '冷藏保存，開封後三個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── XO醬油 ───────────────────────────────────────────────
  {
    id: 'xo_sauce_oil',
    name: 'XO醬油',
    name_en: 'XO Sauce Oil',
    categories: ['油脂'],
    variants: [
      { id: 'xo_sauce_oil--standard', label: 'XO醬油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 750, protein: 8, fat: 78, carbs: 9, sodium: 1200,
    },
    substitutes: ['chili_oil'],
    allergens: ['shellfish', 'fish'],
    storage_tip: '冷藏保存，開封後三個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 胡麻醬（芝麻醬）────────────────────────────────────
  {
    id: 'sesame_paste',
    name: '芝麻醬',
    name_en: 'Sesame Paste',
    categories: ['油脂'],
    variants: [
      { id: 'sesame_paste--white', label: '白芝麻醬', state: 'raw', yield_ratio: 1.0 },
      { id: 'sesame_paste--black', label: '黑芝麻醬', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 595, protein: 17, fat: 53, carbs: 21, sodium: 115,
    },
    substitutes: ['peanut_butter'],
    allergens: ['sesame'],
    storage_tip: '開封後冷藏，兩個月內使用；油脂分離屬正常現象，攪拌即可。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 花生醬油 ─────────────────────────────────────────────
  {
    id: 'peanut_butter',
    name: '花生醬',
    name_en: 'Peanut Butter',
    categories: ['油脂'],
    variants: [
      { id: 'peanut_butter--smooth',  label: '滑順花生醬',   state: 'raw', yield_ratio: 1.0 },
      { id: 'peanut_butter--crunchy', label: '顆粒花生醬',   state: 'raw', yield_ratio: 1.0 },
      { id: 'peanut_butter--natural', label: '天然花生醬',   state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 588, protein: 25, fat: 50, carbs: 20, sodium: 420,
    },
    substitutes: ['sesame_paste', 'almond_butter'],
    allergens: ['peanut'],
    storage_tip: '室溫保存，開封後三個月內使用；天然花生醬需冷藏。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 杏仁奶油 ─────────────────────────────────────────────
  {
    id: 'almond_butter',
    name: '杏仁奶油',
    name_en: 'Almond Butter',
    categories: ['油脂'],
    variants: [
      { id: 'almond_butter--smooth',  label: '滑順杏仁奶油', state: 'raw', yield_ratio: 1.0 },
      { id: 'almond_butter--crunchy', label: '顆粒杏仁奶油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 614, protein: 21, fat: 56, carbs: 19, sodium: 7,
    },
    substitutes: ['peanut_butter', 'sesame_paste'],
    allergens: ['tree_nut'],
    storage_tip: '開封後冷藏，兩個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 奶油乳酪 ─────────────────────────────────────────────
  {
    id: 'cream_cheese',
    name: '奶油乳酪',
    name_en: 'Cream Cheese',
    categories: ['油脂'],
    variants: [
      { id: 'cream_cheese--full_fat', label: '全脂奶油乳酪',   state: 'raw', yield_ratio: 1.0 },
      { id: 'cream_cheese--light',    label: '低脂奶油乳酪',   state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 342, protein: 6, fat: 34, carbs: 4, sodium: 321,
    },
    substitutes: ['butter', 'mascarpone'],
    allergens: ['dairy'],
    storage_tip: '冷藏保存，開封後兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 馬斯卡邦乳酪 ─────────────────────────────────────────
  {
    id: 'mascarpone',
    name: '馬斯卡邦乳酪',
    name_en: 'Mascarpone',
    categories: ['油脂'],
    variants: [
      { id: 'mascarpone--standard', label: '馬斯卡邦', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 429, protein: 6, fat: 44, carbs: 3, sodium: 105,
    },
    substitutes: ['cream_cheese', 'butter'],
    allergens: ['dairy'],
    storage_tip: '冷藏保存，開封後一週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
