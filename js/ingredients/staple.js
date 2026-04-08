/**
 * @fileoverview 主食類食材（40 種）
 *
 * 包含：
 *  - 米飯類（白米、糙米、糯米等）
 *  - 日式/亞洲麵條（烏龍、拉麵、蕎麥、素麵等）
 *  - 西式麵食（義大利麵系列）
 *  - 麵包與粉類（吐司、法棍、各式麵粉）
 *  - 澱粉類（地瓜、芋頭、蒟蒻麵等）
 *  - 包裝皮類（餃子皮、春捲皮等）
 *
 * 尚未有 verified_source 的項目請使用 verify-ingredient skill 補充。
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
    nutrition_per_100g: { calories: 149, protein: 3.7, fat: 0.4, carbs: 31.5, fiber: 0.9, sodium: 210 },
    substitutes: ['soba', 'ramen_noodles', 'rice_noodles'],
    allergens: ['gluten'],
    tastes: ['鹹'],
    textures: ['嚼勁', '滑順'],
    storage_tip: '冷凍烏龍麵開封後請盡速食用，生麵放冷藏 2 天內使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 白米 ─────────────────────────────────────────────────
  {
    id: 'white_rice',
    name: '白米',
    name_en: 'White Rice',
    categories: ['主食'],
    variants: [
      { id: 'white_rice--raw',    label: '生米',     state: 'raw',    yield_ratio: 1.0 },
      { id: 'white_rice--cooked', label: '熟飯',     state: 'cooked', yield_ratio: 2.2 },
      { id: 'white_rice--frozen', label: '冷凍白飯', state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 130, protein: 2.7, fat: 0.3, carbs: 28.7, fiber: 0.4, sodium: 1 },
    substitutes: ['brown_rice', 'cauliflower_rice'],
    allergens: [],
    storage_tip: '生米置乾燥陰涼處；熟飯冷藏 2 天，冷凍 1 個月。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/168878/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 糙米 ─────────────────────────────────────────────────
  {
    id: 'brown_rice',
    name: '糙米',
    name_en: 'Brown Rice',
    categories: ['主食'],
    variants: [
      { id: 'brown_rice--raw',    label: '生糙米',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'brown_rice--cooked', label: '熟糙米飯', state: 'cooked', yield_ratio: 2.0 },
    ],
    nutrition_per_100g: { calories: 123, protein: 2.7, fat: 1.0, carbs: 25.6, fiber: 1.6, sodium: 4 },
    substitutes: ['white_rice', 'quinoa'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168875/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 糯米 ─────────────────────────────────────────────────
  {
    id: 'sticky_rice',
    name: '糯米',
    name_en: 'Glutinous Rice (Sticky Rice)',
    categories: ['主食'],
    variants: [
      { id: 'sticky_rice--white',  label: '白糯米',     state: 'raw' },
      { id: 'sticky_rice--black',  label: '紫糯米',     state: 'raw' },
      { id: 'sticky_rice--cooked', label: '熟糯米飯',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 165, protein: 3.0, fat: 0.3, carbs: 36.2, fiber: 0.2, sodium: 0 },
    substitutes: ['white_rice'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 拉麵 ─────────────────────────────────────────────────
  {
    id: 'ramen_noodles',
    name: '拉麵',
    name_en: 'Ramen Noodles',
    categories: ['主食'],
    variants: [
      { id: 'ramen_noodles--fresh',  label: '生拉麵',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'ramen_noodles--dried',  label: '乾拉麵',   state: 'dried',  yield_ratio: 0.4 },
      { id: 'ramen_noodles--instant',label: '泡麵',     state: 'dried',  yield_ratio: 0.4 },
    ],
    nutrition_per_100g: { calories: 436, protein: 9.4, fat: 15.6, carbs: 63.5, sodium: 1588 },
    substitutes: ['udon', 'soba'],
    allergens: ['gluten', 'egg'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172696/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 蕎麥麵 ───────────────────────────────────────────────
  {
    id: 'soba',
    name: '蕎麥麵',
    name_en: 'Soba Noodles',
    categories: ['主食'],
    variants: [
      { id: 'soba--dried',  label: '乾蕎麥麵', state: 'dried',  yield_ratio: 0.38 },
      { id: 'soba--fresh',  label: '生蕎麥麵', state: 'raw',    yield_ratio: 1.0 },
      { id: 'soba--cooked', label: '熟蕎麥麵', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 336, protein: 14, fat: 2.1, carbs: 70.4, fiber: 4.3, sodium: 4 },
    substitutes: ['udon', 'ramen_noodles'],
    allergens: ['gluten'],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 素麵 ─────────────────────────────────────────────────
  {
    id: 'somen',
    name: '素麵',
    name_en: 'Somen Noodles',
    categories: ['主食'],
    variants: [
      { id: 'somen--dried',  label: '乾素麵',   state: 'dried',  yield_ratio: 0.38 },
      { id: 'somen--cooked', label: '熟素麵',   state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 356, protein: 10.4, fat: 1.4, carbs: 75.8, sodium: 800 },
    substitutes: ['udon', 'rice_noodles'],
    allergens: ['gluten'],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 米線（河粉）─────────────────────────────────────────
  {
    id: 'rice_noodles',
    name: '米線',
    name_en: 'Rice Noodles (Rice Vermicelli)',
    categories: ['主食'],
    variants: [
      { id: 'rice_noodles--thin',   label: '細米線（米粉）', state: 'dried',  yield_ratio: 0.4 },
      { id: 'rice_noodles--flat',   label: '河粉（扁米粉）', state: 'raw',    yield_ratio: 1.0 },
      { id: 'rice_noodles--cooked', label: '熟米線',         state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 364, protein: 6.3, fat: 0.6, carbs: 80, fiber: 1.8, sodium: 15 },
    substitutes: ['glass_noodles', 'udon'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168880/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 冬粉（玻璃麵）────────────────────────────────────────
  {
    id: 'glass_noodles',
    name: '冬粉',
    name_en: 'Glass Noodles (Mung Bean Vermicelli)',
    categories: ['主食'],
    variants: [
      { id: 'glass_noodles--dried',  label: '乾冬粉',   state: 'dried',  yield_ratio: 0.35 },
      { id: 'glass_noodles--soaked', label: '泡發冬粉', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 335, protein: 0.2, fat: 0.1, carbs: 83.3, sodium: 7 },
    substitutes: ['rice_noodles'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 義大利直麵 ───────────────────────────────────────────
  {
    id: 'pasta_spaghetti',
    name: '義大利直麵',
    name_en: 'Spaghetti',
    categories: ['主食'],
    variants: [
      { id: 'pasta_spaghetti--dried',  label: '乾義大利麵',   state: 'dried',  yield_ratio: 0.45 },
      { id: 'pasta_spaghetti--cooked', label: '熟義大利麵',   state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 371, protein: 13.0, fat: 1.5, carbs: 74.7, fiber: 2.5, sodium: 6 },
    substitutes: ['udon', 'pasta_penne'],
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169736/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 筆管麵 ───────────────────────────────────────────────
  {
    id: 'pasta_penne',
    name: '筆管麵',
    name_en: 'Penne',
    categories: ['主食'],
    variants: [
      { id: 'pasta_penne--dried',  label: '乾筆管麵', state: 'dried',  yield_ratio: 0.45 },
      { id: 'pasta_penne--cooked', label: '熟筆管麵', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 357, protein: 12.5, fat: 1.5, carbs: 73, fiber: 2.7, sodium: 6 },
    substitutes: ['pasta_spaghetti', 'pasta_fettuccine'],
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169730/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 寬扁麵 ───────────────────────────────────────────────
  {
    id: 'pasta_fettuccine',
    name: '寬扁麵',
    name_en: 'Fettuccine',
    categories: ['主食'],
    variants: [
      { id: 'pasta_fettuccine--dried',  label: '乾寬扁麵', state: 'dried',  yield_ratio: 0.45 },
      { id: 'pasta_fettuccine--fresh',  label: '生寬扁麵', state: 'raw',    yield_ratio: 1.0 },
      { id: 'pasta_fettuccine--cooked', label: '熟寬扁麵', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 357, protein: 12.5, fat: 1.5, carbs: 73, fiber: 2.7, sodium: 6 },
    substitutes: ['pasta_spaghetti'],
    allergens: ['gluten', 'egg'],
  },

  // ── 吐司 ─────────────────────────────────────────────────
  {
    id: 'bread_toast',
    name: '吐司',
    name_en: 'White Bread / Toast',
    categories: ['主食'],
    variants: [
      { id: 'bread_toast--white',       label: '白吐司',     state: 'raw' },
      { id: 'bread_toast--whole_wheat', label: '全麥吐司',   state: 'raw' },
      { id: 'bread_toast--toasted',     label: '烤吐司',     state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 265, protein: 9, fat: 3.2, carbs: 50, fiber: 2.7, sodium: 491 },
    substitutes: ['bread_baguette'],
    allergens: ['gluten', 'dairy'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172687/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 法式長棍 ─────────────────────────────────────────────
  {
    id: 'bread_baguette',
    name: '法式長棍',
    name_en: 'Baguette',
    categories: ['主食'],
    variants: [
      { id: 'bread_baguette--fresh',   label: '新鮮法棍',   state: 'raw' },
      { id: 'bread_baguette--toasted', label: '烤法棍',     state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 263, protein: 9, fat: 1.5, carbs: 53, fiber: 2.7, sodium: 505 },
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172700/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 中筋麵粉 ─────────────────────────────────────────────
  {
    id: 'flour_all_purpose',
    name: '中筋麵粉',
    name_en: 'All-Purpose Flour',
    categories: ['主食'],
    variants: [
      { id: 'flour_all_purpose--regular',    label: '中筋麵粉',   state: 'powdered' },
      { id: 'flour_all_purpose--whole_wheat', label: '全麥麵粉',  state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 364, protein: 10.3, fat: 1.0, carbs: 76.3, fiber: 2.7, sodium: 2 },
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169761/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 高筋麵粉 ─────────────────────────────────────────────
  {
    id: 'flour_bread',
    name: '高筋麵粉',
    name_en: 'Bread Flour (High-Gluten Flour)',
    categories: ['主食'],
    variants: [
      { id: 'flour_bread--regular', label: '高筋麵粉', state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 361, protein: 13.3, fat: 1.7, carbs: 72.2, fiber: 2.4, sodium: 2 },
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169761/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 低筋麵粉 ─────────────────────────────────────────────
  {
    id: 'flour_cake',
    name: '低筋麵粉',
    name_en: 'Cake Flour (Low-Gluten Flour)',
    categories: ['主食'],
    variants: [
      { id: 'flour_cake--regular', label: '低筋麵粉', state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 348, protein: 7.7, fat: 0.8, carbs: 75.8, fiber: 1.8, sodium: 2 },
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 米穀粉 ───────────────────────────────────────────────
  {
    id: 'flour_rice',
    name: '米穀粉',
    name_en: 'Rice Flour',
    categories: ['主食'],
    variants: [
      { id: 'flour_rice--regular',  label: '米穀粉（在來米粉）', state: 'powdered' },
      { id: 'flour_rice--glutinous', label: '糯米粉',             state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 366, protein: 5.9, fat: 1.4, carbs: 80, fiber: 2.4, sodium: 0 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168897/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 燕麥片 ───────────────────────────────────────────────
  {
    id: 'oats',
    name: '燕麥片',
    name_en: 'Rolled Oats',
    categories: ['主食'],
    variants: [
      { id: 'oats--rolled',   label: '傳統燕麥片',   state: 'raw' },
      { id: 'oats--instant',  label: '即食燕麥片',   state: 'raw' },
      { id: 'oats--steel_cut',label: '鋼切燕麥',     state: 'raw' },
      { id: 'oats--cooked',   label: '燕麥粥',       state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 389, protein: 16.9, fat: 6.9, carbs: 66.3, fiber: 10.6, sodium: 2 },
    substitutes: ['quinoa', 'brown_rice'],
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/173904/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 藜麥 ─────────────────────────────────────────────────
  {
    id: 'quinoa',
    name: '藜麥',
    name_en: 'Quinoa',
    categories: ['主食'],
    variants: [
      { id: 'quinoa--white',  label: '白藜麥',   state: 'raw' },
      { id: 'quinoa--red',    label: '紅藜麥',   state: 'raw' },
      { id: 'quinoa--cooked', label: '熟藜麥',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 120, protein: 4.4, fat: 1.9, carbs: 21.3, fiber: 2.8, sodium: 7 },
    substitutes: ['brown_rice', 'oats'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168917/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 餃子皮 ───────────────────────────────────────────────
  {
    id: 'dumpling_wrapper',
    name: '餃子皮',
    name_en: 'Dumpling Wrapper (Gyoza Skin)',
    categories: ['主食'],
    variants: [
      { id: 'dumpling_wrapper--thin',    label: '水餃皮（薄）',   state: 'raw' },
      { id: 'dumpling_wrapper--thick',   label: '煎餃皮（厚）',   state: 'raw' },
      { id: 'dumpling_wrapper--gyoza',   label: '日式餃子皮',     state: 'raw' },
    ],
    nutrition_per_100g: { calories: 289, protein: 8.6, fat: 1.2, carbs: 60.5, sodium: 320 },
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 餛飩皮 ───────────────────────────────────────────────
  {
    id: 'wonton_wrapper',
    name: '餛飩皮',
    name_en: 'Wonton Wrapper',
    categories: ['主食'],
    variants: [
      { id: 'wonton_wrapper--thin',   label: '薄餛飩皮', state: 'raw' },
      { id: 'wonton_wrapper--square', label: '方形餛飩皮', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 289, protein: 8.6, fat: 1.2, carbs: 60, sodium: 400 },
    allergens: ['gluten', 'egg'],
  },

  // ── 春捲皮 ───────────────────────────────────────────────
  {
    id: 'spring_roll_wrapper',
    name: '春捲皮',
    name_en: 'Spring Roll Wrapper',
    categories: ['主食'],
    variants: [
      { id: 'spring_roll_wrapper--fresh',  label: '潤餅皮（新鮮）', state: 'raw' },
      { id: 'spring_roll_wrapper--frozen', label: '冷凍春捲皮',     state: 'frozen' },
    ],
    allergens: ['gluten'],
  },

  // ── 越南春捲皮 ───────────────────────────────────────────
  {
    id: 'rice_paper',
    name: '越南春捲皮',
    name_en: 'Rice Paper (Bánh Tráng)',
    categories: ['主食'],
    variants: [
      { id: 'rice_paper--dried',  label: '乾米紙',   state: 'dried' },
      { id: 'rice_paper--soaked', label: '泡軟米紙', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 355, protein: 0, fat: 0, carbs: 85, sodium: 10 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 麵包粉 ───────────────────────────────────────────────
  {
    id: 'bread_crumb',
    name: '麵包粉',
    name_en: 'Breadcrumbs',
    categories: ['主食'],
    variants: [
      { id: 'bread_crumb--regular', label: '一般麵包粉', state: 'dried' },
      { id: 'bread_crumb--panko',   label: '日式麵包粉（panko）', state: 'dried' },
      { id: 'bread_crumb--season',  label: '調味麵包粉', state: 'dried' },
    ],
    nutrition_per_100g: { calories: 395, protein: 13.3, fat: 5.3, carbs: 72.5, fiber: 3.7, sodium: 732 },
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172695/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 年糕 ─────────────────────────────────────────────────
  {
    id: 'rice_cake',
    name: '年糕',
    name_en: 'Rice Cake (Tteok / Mochi)',
    categories: ['主食'],
    variants: [
      { id: 'rice_cake--slice',    label: '年糕片（條）',   state: 'raw' },
      { id: 'rice_cake--tteok',    label: '韓式年糕（떡）', state: 'raw' },
      { id: 'rice_cake--mochi',    label: '日式麻糬',       state: 'raw' },
      { id: 'rice_cake--frozen',   label: '冷凍年糕',       state: 'frozen' },
    ],
    nutrition_per_100g: { calories: 232, protein: 3.8, fat: 0.5, carbs: 52.1, sodium: 10 },
    allergens: [],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 蒟蒻麵 ───────────────────────────────────────────────
  {
    id: 'konjac_noodles',
    name: '蒟蒻麵',
    name_en: 'Konjac Noodles (Shirataki)',
    categories: ['主食'],
    variants: [
      { id: 'konjac_noodles--shirataki', label: '白瀧蒟蒻麵', state: 'raw' },
      { id: 'konjac_noodles--wide',      label: '寬蒟蒻麵',   state: 'raw' },
      { id: 'konjac_noodles--black',     label: '黑蒟蒻絲',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 10, protein: 0, fat: 0, carbs: 3, fiber: 2.9, sodium: 5 },
    substitutes: ['glass_noodles', 'rice_noodles'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 地瓜 ─────────────────────────────────────────────────
  {
    id: 'sweet_potato',
    name: '地瓜',
    name_en: 'Sweet Potato',
    categories: ['主食', '蔬菜'],
    variants: [
      { id: 'sweet_potato--raw',    label: '生地瓜',     state: 'raw' },
      { id: 'sweet_potato--baked',  label: '烤地瓜',     state: 'cooked' },
      { id: 'sweet_potato--purple', label: '紫地瓜',     state: 'raw' },
      { id: 'sweet_potato--mashed', label: '地瓜泥',     state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 86, protein: 1.6, fat: 0.1, carbs: 20.1, fiber: 3, sodium: 55 },
    substitutes: ['potato', 'taro'],
    allergens: [],
    storage_tip: '室溫陰涼處保存，勿冷藏（低溫傷芯）。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/168482/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 芋頭 ─────────────────────────────────────────────────
  {
    id: 'taro',
    name: '芋頭',
    name_en: 'Taro',
    categories: ['主食', '蔬菜'],
    variants: [
      { id: 'taro--raw',    label: '生芋頭',   state: 'raw' },
      { id: 'taro--cooked', label: '熟芋頭',   state: 'cooked' },
      { id: 'taro--mashed', label: '芋泥',     state: 'cooked' },
      { id: 'taro--cubed',  label: '芋頭塊',   state: 'diced' },
    ],
    nutrition_per_100g: { calories: 112, protein: 1.5, fat: 0.2, carbs: 26.5, fiber: 4.1, sodium: 11 },
    substitutes: ['sweet_potato', 'potato'],
    allergens: [],
    storage_tip: '室溫陰涼通風處，避免陽光直射。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/169490/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 大麥 ─────────────────────────────────────────────────
  {
    id: 'barley',
    name: '大麥',
    name_en: 'Barley',
    categories: ['主食'],
    variants: [
      { id: 'barley--pearl',  label: '珍珠大麥', state: 'raw' },
      { id: 'barley--hulled', label: '有穀大麥', state: 'raw' },
      { id: 'barley--cooked', label: '熟大麥',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 123, protein: 2.3, fat: 0.4, carbs: 28.2, fiber: 3.8, sodium: 3 },
    substitutes: ['brown_rice', 'quinoa'],
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170283/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 古斯米 ───────────────────────────────────────────────
  {
    id: 'couscous',
    name: '古斯米',
    name_en: 'Couscous',
    categories: ['主食'],
    variants: [
      { id: 'couscous--regular', label: '古斯米',   state: 'dried' },
      { id: 'couscous--cooked',  label: '泡發古斯米', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 376, protein: 12.8, fat: 0.6, carbs: 77.4, fiber: 5, sodium: 10 },
    substitutes: ['quinoa', 'brown_rice'],
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169699/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 小米 ─────────────────────────────────────────────────
  {
    id: 'millet',
    name: '小米',
    name_en: 'Millet',
    categories: ['主食'],
    variants: [
      { id: 'millet--raw',    label: '生小米',   state: 'raw' },
      { id: 'millet--cooked', label: '熟小米粥', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 119, protein: 3.5, fat: 1.0, carbs: 23.7, fiber: 1.3, sodium: 2 },
    substitutes: ['quinoa', 'white_rice'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168875/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 雞蛋麵 ───────────────────────────────────────────────
  {
    id: 'egg_noodles',
    name: '雞蛋麵',
    name_en: 'Egg Noodles',
    categories: ['主食'],
    variants: [
      { id: 'egg_noodles--fresh',  label: '生雞蛋麵', state: 'raw',    yield_ratio: 1.0 },
      { id: 'egg_noodles--dried',  label: '乾雞蛋麵', state: 'dried',  yield_ratio: 0.4 },
      { id: 'egg_noodles--cooked', label: '熟雞蛋麵', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 138, protein: 4.5, fat: 2.1, carbs: 25.2, fiber: 1.2, sodium: 8 },
    substitutes: ['ramen_noodles', 'udon'],
    allergens: ['gluten', 'egg'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169740/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 中式油麵 ─────────────────────────────────────────────
  {
    id: 'yellow_noodles',
    name: '油麵',
    name_en: 'Yellow Wheat Noodles (Lo Mein)',
    categories: ['主食'],
    variants: [
      { id: 'yellow_noodles--fresh',  label: '生油麵',   state: 'raw' },
      { id: 'yellow_noodles--cooked', label: '熟油麵',   state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 150, protein: 4.5, fat: 2.0, carbs: 28, fiber: 1.5, sodium: 350 },
    substitutes: ['ramen_noodles', 'udon'],
    allergens: ['gluten'],
  },

  // ── 大阪燒粉 ─────────────────────────────────────────────
  {
    id: 'okonomiyaki_flour',
    name: '大阪燒粉',
    name_en: 'Okonomiyaki Flour Mix',
    categories: ['主食'],
    variants: [
      { id: 'okonomiyaki_flour--mix', label: '大阪燒預拌粉', state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 352, protein: 8, fat: 2, carbs: 75, sodium: 680 },
    allergens: ['gluten'],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 玉米粒（罐頭）────────────────────────────────────────
  {
    id: 'corn_kernel',
    name: '玉米粒',
    name_en: 'Corn Kernels',
    categories: ['主食', '蔬菜'],
    variants: [
      { id: 'corn_kernel--canned',  label: '罐頭玉米粒', state: 'canned' },
      { id: 'corn_kernel--frozen',  label: '冷凍玉米粒', state: 'frozen' },
      { id: 'corn_kernel--fresh',   label: '新鮮玉米粒', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 86, protein: 3.2, fat: 1.2, carbs: 18.7, fiber: 2, sodium: 15 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169998/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 印度烤餅 ─────────────────────────────────────────────
  {
    id: 'naan',
    name: '印度烤餅',
    name_en: 'Naan Bread',
    categories: ['主食'],
    variants: [
      { id: 'naan--plain',   label: '原味烤餅', state: 'cooked' },
      { id: 'naan--garlic',  label: '蒜味烤餅', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 317, protein: 9.7, fat: 5.9, carbs: 57, fiber: 2.1, sodium: 480 },
    substitutes: ['bread_toast', 'bread_baguette'],
    allergens: ['gluten', 'dairy'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172689/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 義式薄餅（Pizza 皮）──────────────────────────────────
  {
    id: 'pizza_dough',
    name: 'Pizza 麵團',
    name_en: 'Pizza Dough',
    categories: ['主食'],
    variants: [
      { id: 'pizza_dough--raw',    label: '生麵團',     state: 'raw' },
      { id: 'pizza_dough--frozen', label: '冷凍 Pizza 皮', state: 'frozen' },
      { id: 'pizza_dough--thin',   label: '薄皮 Pizza 皮', state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 266, protein: 8.8, fat: 3.2, carbs: 52, fiber: 2.2, sodium: 500 },
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 白饅頭 ───────────────────────────────────────────────
  {
    id: 'steamed_bun',
    name: '饅頭',
    name_en: 'Chinese Steamed Bun (Mantou)',
    categories: ['主食'],
    variants: [
      { id: 'steamed_bun--plain',  label: '白饅頭',   state: 'cooked' },
      { id: 'steamed_bun--frozen', label: '冷凍饅頭', state: 'frozen' },
      { id: 'steamed_bun--bao',    label: '包子',     state: 'cooked' },
    ],
    nutrition_per_100g: { calories: 218, protein: 6.9, fat: 0.9, carbs: 45.5, fiber: 1.8, sodium: 350 },
    allergens: ['gluten'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豆皮（腐皮）─────────────────────────────────────────
  {
    id: 'tofu_skin',
    name: '豆皮',
    name_en: 'Tofu Skin (Yuba)',
    categories: ['主食', '蛋白質'],
    variants: [
      { id: 'tofu_skin--fresh',  label: '生豆皮',   state: 'raw' },
      { id: 'tofu_skin--dried',  label: '乾豆皮',   state: 'dried' },
      { id: 'tofu_skin--roll',   label: '豆皮捲',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 194, protein: 21.4, fat: 10.1, carbs: 5.8, sodium: 10 },
    substitutes: ['tofu', 'dumpling_wrapper'],
    allergens: ['soy'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
