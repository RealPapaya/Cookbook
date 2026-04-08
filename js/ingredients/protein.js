/**
 * @fileoverview 蛋白質類食材
 * 包含：蛋類、加工肉品（來源同 meat.js）、豆腐與豆製品、豆類、堅果與種子、
 *       蛋白質補充品等主要蛋白質來源（不與 meat / seafood 重疊的品項以植物蛋白為主）
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ══════════════════════════════════════════════════════════
  //  蛋類（與 meat.js 共用，保留作快速查找）
  // ══════════════════════════════════════════════════════════

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
    tastes: ['鹹'],
    textures: ['軟嫩', '滑順'],
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
    tastes: ['鹹'],
    textures: ['酥脆', '嚼勁'],
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
    tastes: ['鹹'],
    textures: ['嚼勁', '軟嫩'],
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
    tastes: ['鹹'],
    textures: ['嚼勁', '軟嫩'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ══════════════════════════════════════════════════════════
  //  豆腐與豆製品
  // ══════════════════════════════════════════════════════════

  // ── 板豆腐 ───────────────────────────────────────────────
  {
    id: 'tofu_firm',
    name: '板豆腐',
    name_en: 'Firm Tofu',
    categories: ['蛋白質'],
    variants: [
      { id: 'tofu_firm--raw',    label: '生板豆腐',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'tofu_firm--cooked', label: '熟板豆腐',   state: 'cooked', yield_ratio: 0.85 },
      { id: 'tofu_firm--frozen', label: '冷凍豆腐',   state: 'frozen', yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 76, protein: 8.0, fat: 4.8, carbs: 1.9, sodium: 7,
    },
    substitutes: ['tofu_silken', 'tempeh', 'seitan'],
    allergens: ['soy'],
    tastes: ['淡'],
    textures: ['嚼勁', '軟嫩'],
    storage_tip: '浸水冷藏，每天換水，三天內使用；冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 嫩豆腐 ───────────────────────────────────────────────
  {
    id: 'tofu_silken',
    name: '嫩豆腐',
    name_en: 'Silken Tofu',
    categories: ['蛋白質'],
    variants: [
      { id: 'tofu_silken--soft',   label: '軟嫩豆腐',   state: 'raw', yield_ratio: 1.0 },
      { id: 'tofu_silken--medium', label: '中硬嫩豆腐', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 55, protein: 5.0, fat: 3.0, carbs: 1.4, sodium: 9,
    },
    substitutes: ['tofu_firm', 'tofu_pudding'],
    allergens: ['soy'],
    tastes: ['淡'],
    textures: ['滑順', '軟嫩'],
    storage_tip: '冷藏保存，開封後當天使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 油豆腐 ───────────────────────────────────────────────
  {
    id: 'tofu_fried',
    name: '油豆腐',
    name_en: 'Fried Tofu',
    categories: ['蛋白質'],
    variants: [
      { id: 'tofu_fried--puff',   label: '豆腐泡（中空）', state: 'cooked', yield_ratio: 1.0 },
      { id: 'tofu_fried--solid',  label: '炸豆腐塊',       state: 'cooked', yield_ratio: 1.0 },
      { id: 'tofu_fried--sheet',  label: '豆腐皮（炸）',   state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 190, protein: 15.0, fat: 14.0, carbs: 3.5, sodium: 10,
    },
    substitutes: ['tofu_firm', 'tofu_dried'],
    allergens: ['soy'],
    tastes: ['淡'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '冷藏保存，三天內使用；或冷凍保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豆乾 ─────────────────────────────────────────────────
  {
    id: 'tofu_dried',
    name: '豆乾',
    name_en: 'Dried Tofu',
    categories: ['蛋白質'],
    variants: [
      { id: 'tofu_dried--white',    label: '白豆乾',     state: 'raw',    yield_ratio: 1.0 },
      { id: 'tofu_dried--five_spice', label: '五香豆乾', state: 'cooked', yield_ratio: 1.0 },
      { id: 'tofu_dried--shredded', label: '豆乾絲',     state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 155, protein: 16.9, fat: 7.4, carbs: 5.4, sodium: 130,
    },
    substitutes: ['tofu_firm', 'seitan'],
    allergens: ['soy'],
    tastes: ['鹹'],
    textures: ['嚼勁'],
    storage_tip: '冷藏保存，開封後三天內使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豆皮 ─────────────────────────────────────────────────
  {
    id: 'tofu_skin',
    name: '豆皮',
    name_en: 'Tofu Skin',
    categories: ['蛋白質'],
    variants: [
      { id: 'tofu_skin--fresh',  label: '新鮮豆皮',   state: 'raw',   yield_ratio: 1.0 },
      { id: 'tofu_skin--dried',  label: '乾燥腐皮',   state: 'dried', yield_ratio: 1.0 },
      { id: 'tofu_skin--rolled', label: '豆腐捲（生）', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 195, protein: 17.0, fat: 8.0, carbs: 14.0, sodium: 6,
    },
    substitutes: ['dried_bean_curd', 'tofu_firm'],
    allergens: ['soy'],
    tastes: ['淡'],
    textures: ['嚼勁', '滑順'],
    storage_tip: '新鮮豆皮冷藏兩天；乾燥腐皮密封常溫保存六個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 腐竹 ─────────────────────────────────────────────────
  {
    id: 'dried_bean_curd',
    name: '腐竹',
    name_en: 'Dried Bean Curd Sticks',
    categories: ['蛋白質'],
    variants: [
      { id: 'dried_bean_curd--stick',   label: '腐竹棒（乾）', state: 'dried', yield_ratio: 1.0 },
      { id: 'dried_bean_curd--soaked',  label: '腐竹（泡發）', state: 'raw',   yield_ratio: 2.5 },
    ],
    nutrition_per_100g: {
      calories: 459, protein: 44.0, fat: 26.0, carbs: 11.0, sodium: 60,
    },
    substitutes: ['tofu_skin', 'seitan'],
    allergens: ['soy'],
    tastes: ['淡'],
    textures: ['嚼勁', '滑順'],
    storage_tip: '乾燥腐竹密封陰涼保存，可達一年；泡發後冷藏當天使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豆花 ─────────────────────────────────────────────────
  {
    id: 'tofu_pudding',
    name: '豆花',
    name_en: 'Tofu Pudding',
    categories: ['蛋白質'],
    variants: [
      { id: 'tofu_pudding--plain',  label: '原味豆花',   state: 'raw', yield_ratio: 1.0 },
      { id: 'tofu_pudding--sweet',  label: '甜豆花',     state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 55, protein: 3.6, fat: 2.8, carbs: 3.8, sodium: 8,
    },
    substitutes: ['tofu_silken'],
    allergens: ['soy'],
    tastes: ['甜', '淡'],
    textures: ['滑順', '軟嫩'],
    storage_tip: '冷藏保存，當天食用風味最佳。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 納豆 ─────────────────────────────────────────────────
  {
    id: 'natto',
    name: '納豆',
    name_en: 'Natto',
    categories: ['蛋白質'],
    variants: [
      { id: 'natto--standard', label: '納豆（小粒）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'natto--large',    label: '納豆（大粒）', state: 'fermented', yield_ratio: 1.0 },
      { id: 'natto--frozen',   label: '冷凍納豆',     state: 'frozen',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 212, protein: 18.0, fat: 11.0, carbs: 14.0, sodium: 12,
    },
    substitutes: ['tofu_firm', 'tempeh'],
    allergens: ['soy'],
    tastes: ['鮮', '鹹'],
    textures: ['黏稠', '嚼勁'],
    storage_tip: '冷藏保存，一週內食用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 天貝 ─────────────────────────────────────────────────
  {
    id: 'tempeh',
    name: '天貝',
    name_en: 'Tempeh',
    categories: ['蛋白質'],
    variants: [
      { id: 'tempeh--original', label: '原味天貝', state: 'fermented', yield_ratio: 1.0 },
      { id: 'tempeh--marinated',label: '醃漬天貝', state: 'marinated', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 193, protein: 19.0, fat: 11.0, carbs: 9.0, sodium: 9,
    },
    substitutes: ['tofu_firm', 'seitan', 'natto'],
    allergens: ['soy'],
    tastes: ['鮮', '堅果香'],
    textures: ['嚼勁'],
    storage_tip: '冷藏保存，一週內食用；或冷凍三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 麵筋（素肉）─────────────────────────────────────────
  {
    id: 'seitan',
    name: '麵筋',
    name_en: 'Seitan',
    categories: ['蛋白質'],
    variants: [
      { id: 'seitan--plain',   label: '原味麵筋', state: 'cooked', yield_ratio: 1.0 },
      { id: 'seitan--seasoned',label: '調味麵筋', state: 'cooked', yield_ratio: 1.0 },
      { id: 'seitan--puff',    label: '麵筋泡',   state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 370, protein: 75.0, fat: 1.9, carbs: 14.0, sodium: 280,
    },
    substitutes: ['tempeh', 'tofu_firm', 'tofu_dried'],
    allergens: ['gluten'],
    tastes: ['鹹'],
    textures: ['嚼勁', '彈牙'],
    storage_tip: '冷藏保存，浸醬汁保存可達五天；冷凍一個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 味噌 ─────────────────────────────────────────────────
  {
    id: 'miso',
    name: '味噌',
    name_en: 'Miso',
    categories: ['蛋白質'],
    variants: [
      { id: 'miso--white',  label: '白味噌', state: 'fermented', yield_ratio: 1.0 },
      { id: 'miso--red',    label: '紅味噌', state: 'fermented', yield_ratio: 1.0 },
      { id: 'miso--mixed',  label: '合わせ味噌', state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 199, protein: 12.0, fat: 6.0, carbs: 27.0, sodium: 3728,
    },
    substitutes: ['fermented_black_bean'],
    allergens: ['soy', 'gluten'],
    tastes: ['鹹', '鮮'],
    textures: ['黏稠'],
    storage_tip: '冷藏密封保存，可達一年。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豆豉 ─────────────────────────────────────────────────
  {
    id: 'fermented_black_bean',
    name: '豆豉',
    name_en: 'Fermented Black Beans',
    categories: ['蛋白質'],
    variants: [
      { id: 'fermented_black_bean--dry',    label: '乾豆豉',   state: 'fermented', yield_ratio: 1.0 },
      { id: 'fermented_black_bean--in_oil', label: '豆豉醬',   state: 'fermented', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 127, protein: 11.0, fat: 6.0, carbs: 8.0, sodium: 2720,
    },
    substitutes: ['miso'],
    allergens: ['soy'],
    tastes: ['鹹', '鮮'],
    textures: ['嚼勁'],
    storage_tip: '密封冷藏，可保存六個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ══════════════════════════════════════════════════════════
  //  豆類
  // ══════════════════════════════════════════════════════════

  // ── 毛豆 ─────────────────────────────────────────────────
  {
    id: 'edamame',
    name: '毛豆',
    name_en: 'Edamame',
    categories: ['蛋白質'],
    variants: [
      { id: 'edamame--fresh',  label: '帶莢毛豆（鮮）', state: 'raw',    yield_ratio: 0.55 },
      { id: 'edamame--frozen', label: '冷凍去莢毛豆',   state: 'frozen', yield_ratio: 1.0  },
      { id: 'edamame--cooked', label: '水煮毛豆',       state: 'cooked', yield_ratio: 0.9  },
    ],
    nutrition_per_100g: {
      calories: 121, protein: 11.0, fat: 5.0, carbs: 9.0, sodium: 63,
    },
    substitutes: ['green_pea', 'soybean'],
    allergens: ['soy'],
    tastes: ['鹹', '甜'],
    textures: ['嚼勁', '軟嫩'],
    storage_tip: '新鮮毛豆冷藏兩天；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 黃豆 ─────────────────────────────────────────────────
  {
    id: 'soybean',
    name: '黃豆',
    name_en: 'Soybean',
    categories: ['蛋白質'],
    variants: [
      { id: 'soybean--dried',  label: '乾黃豆',   state: 'dried',  yield_ratio: 1.0 },
      { id: 'soybean--cooked', label: '熟黃豆',   state: 'cooked', yield_ratio: 2.4 },
      { id: 'soybean--canned', label: '罐裝黃豆', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 173, protein: 17.0, fat: 9.0, carbs: 10.0, sodium: 2,
    },
    substitutes: ['edamame', 'chickpea', 'black_bean'],
    allergens: ['soy'],
    tastes: ['淡', '鮮'],
    textures: ['嚼勁', '軟嫩'],
    storage_tip: '乾豆密封常溫保存一年；熟豆冷藏四天。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 黑豆 ─────────────────────────────────────────────────
  {
    id: 'black_bean',
    name: '黑豆',
    name_en: 'Black Bean',
    categories: ['蛋白質'],
    variants: [
      { id: 'black_bean--dried',  label: '乾黑豆',   state: 'dried',  yield_ratio: 1.0 },
      { id: 'black_bean--cooked', label: '熟黑豆',   state: 'cooked', yield_ratio: 2.2 },
      { id: 'black_bean--canned', label: '罐裝黑豆', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 132, protein: 8.9, fat: 0.5, carbs: 24.0, sodium: 2,
    },
    substitutes: ['soybean', 'kidney_bean'],
    allergens: [],
    tastes: ['淡'],
    textures: ['嚼勁', '軟嫩'],
    storage_tip: '乾豆密封常溫保存一年；熟豆冷藏四天。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 紅豆 ─────────────────────────────────────────────────
  {
    id: 'red_bean',
    name: '紅豆',
    name_en: 'Red Bean (Adzuki)',
    categories: ['蛋白質'],
    variants: [
      { id: 'red_bean--dried',   label: '乾紅豆',     state: 'dried',  yield_ratio: 1.0 },
      { id: 'red_bean--cooked',  label: '熟紅豆',     state: 'cooked', yield_ratio: 2.5 },
      { id: 'red_bean--paste',   label: '紅豆泥（甜）', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 127, protein: 7.5, fat: 0.5, carbs: 23.0, sodium: 1,
    },
    substitutes: ['mung_bean', 'black_bean'],
    allergens: [],
    tastes: ['甜', '淡'],
    textures: ['軟嫩', '嚼勁'],
    storage_tip: '乾豆密封常溫保存一年；熟豆冷藏四天。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 綠豆 ─────────────────────────────────────────────────
  {
    id: 'mung_bean',
    name: '綠豆',
    name_en: 'Mung Bean',
    categories: ['蛋白質'],
    variants: [
      { id: 'mung_bean--dried',  label: '乾綠豆',     state: 'dried',  yield_ratio: 1.0 },
      { id: 'mung_bean--cooked', label: '熟綠豆',     state: 'cooked', yield_ratio: 2.5 },
      { id: 'mung_bean--sprout', label: '綠豆芽',     state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 105, protein: 7.0, fat: 0.4, carbs: 19.0, sodium: 2,
    },
    substitutes: ['red_bean', 'chickpea'],
    allergens: [],
    tastes: ['甜', '淡'],
    textures: ['軟嫩', '嚼勁'],
    storage_tip: '乾豆密封常溫保存一年；豆芽冷藏兩天。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鷹嘴豆 ───────────────────────────────────────────────
  {
    id: 'chickpea',
    name: '鷹嘴豆',
    name_en: 'Chickpea',
    categories: ['蛋白質'],
    variants: [
      { id: 'chickpea--dried',  label: '乾鷹嘴豆',   state: 'dried',  yield_ratio: 1.0 },
      { id: 'chickpea--cooked', label: '熟鷹嘴豆',   state: 'cooked', yield_ratio: 2.3 },
      { id: 'chickpea--canned', label: '罐裝鷹嘴豆', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 164, protein: 9.0, fat: 2.6, carbs: 27.0, sodium: 7,
    },
    substitutes: ['soybean', 'lentil', 'white_bean'],
    allergens: [],
    tastes: ['淡', '堅果香'],
    textures: ['嚼勁', '軟嫩'],
    storage_tip: '乾豆密封常溫保存一年；熟豆冷藏四天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 扁豆 ─────────────────────────────────────────────────
  {
    id: 'lentil',
    name: '扁豆',
    name_en: 'Lentil',
    categories: ['蛋白質'],
    variants: [
      { id: 'lentil--green',   label: '綠扁豆',     state: 'dried',  yield_ratio: 1.0 },
      { id: 'lentil--red',     label: '紅扁豆',     state: 'dried',  yield_ratio: 1.0 },
      { id: 'lentil--black',   label: '黑扁豆',     state: 'dried',  yield_ratio: 1.0 },
      { id: 'lentil--cooked',  label: '熟扁豆',     state: 'cooked', yield_ratio: 2.5 },
    ],
    nutrition_per_100g: {
      calories: 116, protein: 9.0, fat: 0.4, carbs: 20.0, sodium: 2,
    },
    substitutes: ['chickpea', 'mung_bean'],
    allergens: [],
    tastes: ['淡', '鮮'],
    textures: ['軟嫩', '嚼勁'],
    storage_tip: '乾豆密封常溫保存一年；熟豆冷藏四天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 腰豆 ─────────────────────────────────────────────────
  {
    id: 'kidney_bean',
    name: '腰豆',
    name_en: 'Kidney Bean',
    categories: ['蛋白質'],
    variants: [
      { id: 'kidney_bean--red_dried',  label: '紅腰豆（乾）', state: 'dried',  yield_ratio: 1.0 },
      { id: 'kidney_bean--red_cooked', label: '紅腰豆（熟）', state: 'cooked', yield_ratio: 2.3 },
      { id: 'kidney_bean--canned',     label: '罐裝腰豆',     state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 127, protein: 8.7, fat: 0.5, carbs: 23.0, sodium: 2,
    },
    substitutes: ['black_bean', 'white_bean'],
    allergens: [],
    tastes: ['淡'],
    textures: ['嚼勁', '軟嫩'],
    storage_tip: '乾豆密封常溫保存一年；熟豆冷藏四天。生腰豆含有毒素，必須充分烹煮。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 白腰豆 ───────────────────────────────────────────────
  {
    id: 'white_bean',
    name: '白腰豆',
    name_en: 'White Bean (Cannellini)',
    categories: ['蛋白質'],
    variants: [
      { id: 'white_bean--dried',  label: '白腰豆（乾）', state: 'dried',  yield_ratio: 1.0 },
      { id: 'white_bean--cooked', label: '白腰豆（熟）', state: 'cooked', yield_ratio: 2.3 },
      { id: 'white_bean--canned', label: '罐裝白腰豆',   state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 139, protein: 9.7, fat: 0.4, carbs: 25.0, sodium: 2,
    },
    substitutes: ['kidney_bean', 'chickpea'],
    allergens: [],
    tastes: ['淡', '甜'],
    textures: ['軟嫩', '嚼勁'],
    storage_tip: '乾豆密封常溫保存一年；熟豆冷藏四天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 青豆仁 ───────────────────────────────────────────────
  {
    id: 'green_pea',
    name: '青豆仁',
    name_en: 'Green Pea',
    categories: ['蛋白質'],
    variants: [
      { id: 'green_pea--fresh',  label: '新鮮青豆仁', state: 'raw',    yield_ratio: 1.0 },
      { id: 'green_pea--frozen', label: '冷凍青豆仁', state: 'frozen', yield_ratio: 1.0 },
      { id: 'green_pea--canned', label: '罐裝青豆仁', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 81, protein: 5.4, fat: 0.4, carbs: 14.0, sodium: 5,
    },
    substitutes: ['edamame', 'mung_bean'],
    allergens: [],
    tastes: ['甜', '淡'],
    textures: ['嚼勁', '軟嫩'],
    storage_tip: '新鮮青豆仁冷藏兩天；冷凍可保存六個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 藜麥 ─────────────────────────────────────────────────
  {
    id: 'quinoa',
    name: '藜麥',
    name_en: 'Quinoa',
    categories: ['蛋白質'],
    variants: [
      { id: 'quinoa--white',  label: '白藜麥（乾）', state: 'dried',  yield_ratio: 1.0 },
      { id: 'quinoa--red',    label: '紅藜麥（乾）', state: 'dried',  yield_ratio: 1.0 },
      { id: 'quinoa--cooked', label: '熟藜麥',       state: 'cooked', yield_ratio: 3.0 },
    ],
    nutrition_per_100g: {
      calories: 120, protein: 4.4, fat: 1.9, carbs: 21.3, sodium: 7,
    },
    substitutes: ['lentil', 'chickpea'],
    allergens: [],
    tastes: ['淡', '堅果香'],
    textures: ['嚼勁', '軟嫩'],
    storage_tip: '乾藜麥密封常溫保存兩年；熟藜麥冷藏三天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ══════════════════════════════════════════════════════════
  //  堅果類
  // ══════════════════════════════════════════════════════════

  // ── 花生 ─────────────────────────────────────────────────
  {
    id: 'peanut',
    name: '花生',
    name_en: 'Peanut',
    categories: ['蛋白質'],
    variants: [
      { id: 'peanut--raw',     label: '生花生',   state: 'raw',    yield_ratio: 0.7  },
      { id: 'peanut--roasted', label: '熟花生',   state: 'cooked', yield_ratio: 1.0  },
      { id: 'peanut--butter',  label: '花生醬',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'peanut--boiled',  label: '水煮花生', state: 'cooked', yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 567, protein: 26.0, fat: 49.0, carbs: 16.0, sodium: 18,
    },
    substitutes: ['almond', 'cashew'],
    allergens: ['peanut'],
    tastes: ['甜', '堅果香'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '密封陰涼保存，可達六個月；花生醬開封後冷藏。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 杏仁 ─────────────────────────────────────────────────
  {
    id: 'almond',
    name: '杏仁',
    name_en: 'Almond',
    categories: ['蛋白質'],
    variants: [
      { id: 'almond--raw',       label: '生杏仁',     state: 'raw',    yield_ratio: 1.0 },
      { id: 'almond--roasted',   label: '烤杏仁',     state: 'cooked', yield_ratio: 1.0 },
      { id: 'almond--sliced',    label: '杏仁片',     state: 'raw',    yield_ratio: 1.0 },
      { id: 'almond--flour',     label: '杏仁粉',     state: 'dried',  yield_ratio: 1.0 },
      { id: 'almond--butter',    label: '杏仁醬',     state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 579, protein: 21.0, fat: 50.0, carbs: 22.0, sodium: 1,
    },
    substitutes: ['cashew', 'walnut', 'peanut'],
    allergens: ['tree_nut'],
    tastes: ['甜', '堅果香'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '密封陰涼保存，可達一年；杏仁粉密封冷藏。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 核桃 ─────────────────────────────────────────────────
  {
    id: 'walnut',
    name: '核桃',
    name_en: 'Walnut',
    categories: ['蛋白質'],
    variants: [
      { id: 'walnut--raw',      label: '生核桃仁',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'walnut--roasted',  label: '烤核桃',     state: 'cooked', yield_ratio: 1.0 },
      { id: 'walnut--halved',   label: '核桃對半',   state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 654, protein: 15.0, fat: 65.0, carbs: 14.0, sodium: 2,
    },
    substitutes: ['almond', 'pecan'],
    allergens: ['tree_nut'],
    tastes: ['苦', '堅果香'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '密封冷藏可達六個月；冷凍可保存一年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 腰果 ─────────────────────────────────────────────────
  {
    id: 'cashew',
    name: '腰果',
    name_en: 'Cashew',
    categories: ['蛋白質'],
    variants: [
      { id: 'cashew--raw',     label: '生腰果',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'cashew--roasted', label: '烤腰果',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'cashew--butter',  label: '腰果醬',   state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 553, protein: 18.0, fat: 44.0, carbs: 30.0, sodium: 12,
    },
    substitutes: ['almond', 'macadamia'],
    allergens: ['tree_nut'],
    tastes: ['甜', '堅果香'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '密封陰涼保存，可達一年；冷藏可延長保存期。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 開心果 ───────────────────────────────────────────────
  {
    id: 'pistachio',
    name: '開心果',
    name_en: 'Pistachio',
    categories: ['蛋白質'],
    variants: [
      { id: 'pistachio--roasted_salted',   label: '烤鹽味開心果（帶殼）', state: 'cooked', yield_ratio: 0.55 },
      { id: 'pistachio--roasted_unsalted', label: '烤原味開心果（去殼）', state: 'cooked', yield_ratio: 1.0  },
      { id: 'pistachio--raw',              label: '生開心果仁',           state: 'raw',    yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 562, protein: 20.0, fat: 45.0, carbs: 28.0, sodium: 1,
    },
    substitutes: ['almond', 'cashew'],
    allergens: ['tree_nut'],
    tastes: ['甜', '堅果香'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '密封陰涼保存，可達三個月；冷凍可保存一年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ══════════════════════════════════════════════════════════
  //  種子類
  // ══════════════════════════════════════════════════════════

  // ── 葵花籽 ───────────────────────────────────────────────
  {
    id: 'sunflower_seed',
    name: '葵花籽',
    name_en: 'Sunflower Seed',
    categories: ['蛋白質'],
    variants: [
      { id: 'sunflower_seed--raw',     label: '生葵花籽（去殼）', state: 'raw',    yield_ratio: 1.0 },
      { id: 'sunflower_seed--roasted', label: '烤葵花籽',         state: 'cooked', yield_ratio: 1.0 },
      { id: 'sunflower_seed--butter',  label: '葵花籽醬',         state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 584, protein: 21.0, fat: 51.0, carbs: 20.0, sodium: 9,
    },
    substitutes: ['pumpkin_seed', 'hemp_seed'],
    allergens: [],
    tastes: ['堅果香'],
    textures: ['酥脆'],
    storage_tip: '密封陰涼保存，可達六個月；冷凍可保存一年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 南瓜子 ───────────────────────────────────────────────
  {
    id: 'pumpkin_seed',
    name: '南瓜子',
    name_en: 'Pumpkin Seed',
    categories: ['蛋白質'],
    variants: [
      { id: 'pumpkin_seed--raw',     label: '生南瓜子（去殼）', state: 'raw',    yield_ratio: 1.0 },
      { id: 'pumpkin_seed--roasted', label: '烤南瓜子',         state: 'cooked', yield_ratio: 1.0 },
      { id: 'pumpkin_seed--shelled', label: '帶殼南瓜子（烤）', state: 'cooked', yield_ratio: 0.7 },
    ],
    nutrition_per_100g: {
      calories: 559, protein: 30.0, fat: 49.0, carbs: 11.0, sodium: 7,
    },
    substitutes: ['sunflower_seed', 'hemp_seed'],
    allergens: [],
    tastes: ['堅果香'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '密封陰涼保存，可達六個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 奇亞籽 ───────────────────────────────────────────────
  {
    id: 'chia_seed',
    name: '奇亞籽',
    name_en: 'Chia Seed',
    categories: ['蛋白質'],
    variants: [
      { id: 'chia_seed--dry',    label: '乾奇亞籽',   state: 'dried', yield_ratio: 1.0 },
      { id: 'chia_seed--soaked', label: '泡發奇亞籽', state: 'raw',   yield_ratio: 9.0 },
    ],
    nutrition_per_100g: {
      calories: 486, protein: 17.0, fat: 31.0, carbs: 42.0, sodium: 16,
    },
    substitutes: ['hemp_seed', 'flaxseed'],
    allergens: [],
    tastes: ['淡'],
    textures: ['顆粒感', '黏稠（泡水後）'],
    storage_tip: '密封常溫保存，可達兩年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 大麻籽（火麻仁）─────────────────────────────────────
  {
    id: 'hemp_seed',
    name: '火麻仁',
    name_en: 'Hemp Seed',
    categories: ['蛋白質'],
    variants: [
      { id: 'hemp_seed--shelled', label: '去殼大麻籽', state: 'raw', yield_ratio: 1.0 },
      { id: 'hemp_seed--whole',   label: '帶殼大麻籽', state: 'raw', yield_ratio: 1.0 },
      { id: 'hemp_seed--powder',  label: '大麻籽蛋白粉', state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 553, protein: 32.0, fat: 49.0, carbs: 8.7, sodium: 5,
    },
    substitutes: ['chia_seed', 'pumpkin_seed'],
    allergens: [],
    tastes: ['堅果香'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '密封冷藏保存，可達六個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ══════════════════════════════════════════════════════════
  //  蛋白質補充品
  // ══════════════════════════════════════════════════════════

  // ── 乳清蛋白粉 ───────────────────────────────────────────
  {
    id: 'whey_protein',
    name: '乳清蛋白粉',
    name_en: 'Whey Protein Powder',
    categories: ['蛋白質'],
    variants: [
      { id: 'whey_protein--concentrate', label: '濃縮乳清蛋白（WPC）', state: 'dried', yield_ratio: 1.0 },
      { id: 'whey_protein--isolate',     label: '分離乳清蛋白（WPI）', state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 352, protein: 80.0, fat: 3.3, carbs: 6.0, sodium: 140,
    },
    substitutes: ['plant_protein_powder'],
    allergens: ['dairy'],
    tastes: ['甜'],
    textures: ['滑順（溶於液體後）'],
    storage_tip: '密封陰涼保存，開封後六個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 植物蛋白粉 ───────────────────────────────────────────
  {
    id: 'plant_protein_powder',
    name: '植物蛋白粉',
    name_en: 'Plant-Based Protein Powder',
    categories: ['蛋白質'],
    variants: [
      { id: 'plant_protein_powder--pea',   label: '豌豆蛋白粉', state: 'dried', yield_ratio: 1.0 },
      { id: 'plant_protein_powder--rice',  label: '米蛋白粉',   state: 'dried', yield_ratio: 1.0 },
      { id: 'plant_protein_powder--blend', label: '複合植物蛋白粉', state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 385, protein: 75.0, fat: 5.0, carbs: 10.0, sodium: 300,
    },
    substitutes: ['whey_protein'],
    allergens: [],
    tastes: ['淡'],
    textures: ['滑順（溶於液體後）'],
    storage_tip: '密封陰涼保存，開封後六個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
