/**
 * @fileoverview 乳製品類食材
 * 包含：牛奶、起司、奶油、優格、鮮奶油等乳製品（共 40 項）
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
    tastes: ['甜'],
    textures: ['滑順'],
    storage_tip: '開封後冷藏，三天內飲用完畢。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 低脂牛奶 ─────────────────────────────────────────────
  {
    id: 'milk_low_fat',
    name: '低脂牛奶',
    name_en: 'Low-Fat Milk',
    categories: ['乳製品'],
    variants: [
      { id: 'milk_low_fat--standard', label: '低脂牛奶（1%）', state: 'raw', yield_ratio: 1.0 },
      { id: 'milk_low_fat--2pct',     label: '低脂牛奶（2%）', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 42, protein: 3.4, fat: 1.0, carbs: 5.0, sodium: 44,
    },
    substitutes: ['milk', 'milk_skimmed'],
    allergens: ['dairy'],
    tastes: ['甜'],
    textures: ['滑順'],
    storage_tip: '開封後冷藏，三天內飲用完畢。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 脫脂牛奶 ─────────────────────────────────────────────
  {
    id: 'milk_skimmed',
    name: '脫脂牛奶',
    name_en: 'Skimmed Milk',
    categories: ['乳製品'],
    variants: [
      { id: 'milk_skimmed--liquid', label: '脫脂牛奶（液態）', state: 'raw',   yield_ratio: 1.0 },
      { id: 'milk_skimmed--powder', label: '脫脂奶粉',         state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 35, protein: 3.4, fat: 0.1, carbs: 5.0, sodium: 52,
    },
    substitutes: ['milk_low_fat', 'milk'],
    allergens: ['dairy'],
    tastes: ['甜'],
    textures: ['滑順'],
    storage_tip: '液態：開封後冷藏，三天內使用。奶粉：密封陰涼保存，開封後一個月內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 蒸發乳 ───────────────────────────────────────────────
  {
    id: 'evaporated_milk',
    name: '蒸發乳',
    name_en: 'Evaporated Milk',
    categories: ['乳製品'],
    variants: [
      { id: 'evaporated_milk--full_fat', label: '全脂蒸發乳', state: 'concentrated', yield_ratio: 1.0 },
      { id: 'evaporated_milk--low_fat',  label: '低脂蒸發乳', state: 'concentrated', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 135, protein: 7.0, fat: 7.6, carbs: 10.0, sodium: 96,
    },
    substitutes: ['milk', 'heavy_cream'],
    allergens: ['dairy'],
    tastes: ['甜', '奶香'],
    textures: ['濃郁', '滑順'],
    storage_tip: '未開封常溫保存；開封後冷藏，三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 白脫牛奶 ─────────────────────────────────────────────
  {
    id: 'buttermilk',
    name: '白脫牛奶',
    name_en: 'Buttermilk',
    categories: ['乳製品'],
    variants: [
      { id: 'buttermilk--liquid', label: '液態白脫牛奶', state: 'raw',   yield_ratio: 1.0 },
      { id: 'buttermilk--powder', label: '白脫牛奶粉',   state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 40, protein: 3.3, fat: 0.9, carbs: 4.8, sodium: 105,
    },
    substitutes: ['milk', 'yogurt'],
    allergens: ['dairy'],
    tastes: ['酸', '甜'],
    textures: ['滑順'],
    storage_tip: '開封後冷藏，兩週內使用；奶粉密封保存。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 羊奶 ─────────────────────────────────────────────────
  {
    id: 'goat_milk',
    name: '羊奶',
    name_en: 'Goat Milk',
    categories: ['乳製品'],
    variants: [
      { id: 'goat_milk--fresh',  label: '鮮羊奶',   state: 'raw',   yield_ratio: 1.0 },
      { id: 'goat_milk--powder', label: '羊奶粉',   state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 69, protein: 3.6, fat: 4.1, carbs: 4.5, sodium: 50,
    },
    substitutes: ['milk', 'milk_low_fat'],
    allergens: ['dairy'],
    tastes: ['甜', '羶'],
    textures: ['滑順'],
    storage_tip: '鮮羊奶開封後冷藏，三天內飲用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 動物性鮮奶油 ─────────────────────────────────────────
  {
    id: 'heavy_cream',
    name: '動物性鮮奶油',
    name_en: 'Heavy Cream',
    categories: ['乳製品'],
    variants: [
      { id: 'heavy_cream--liquid',  label: '液態鮮奶油', state: 'raw',    yield_ratio: 1.0 },
      { id: 'heavy_cream--whipped', label: '打發鮮奶油', state: 'cooked', yield_ratio: 2.0 },
    ],
    nutrition_per_100g: {
      calories: 340, protein: 2.8, fat: 37.0, carbs: 2.8, sodium: 38,
    },
    substitutes: ['whipping_cream_plant', 'creme_fraiche', 'milk'],
    allergens: ['dairy'],
    tastes: ['甜', '奶香'],
    textures: ['濃郁', '滑順'],
    storage_tip: '開封後冷藏，三天內使用；打發後冷藏當天使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 植物性鮮奶油 ─────────────────────────────────────────
  {
    id: 'whipping_cream_plant',
    name: '植物性鮮奶油',
    name_en: 'Plant-Based Whipping Cream',
    categories: ['乳製品'],
    variants: [
      { id: 'whipping_cream_plant--liquid',  label: '液態植物性鮮奶油', state: 'raw',    yield_ratio: 1.0 },
      { id: 'whipping_cream_plant--whipped', label: '打發植物性鮮奶油', state: 'cooked', yield_ratio: 2.0 },
    ],
    nutrition_per_100g: {
      calories: 300, protein: 0.5, fat: 32.0, carbs: 5.0, sodium: 40,
    },
    substitutes: ['heavy_cream'],
    allergens: [],
    tastes: ['甜', '奶香'],
    textures: ['濃郁', '滑順'],
    storage_tip: '開封後冷藏，三天內使用；打發後冷藏當天使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 凝脂奶油 ─────────────────────────────────────────────
  {
    id: 'clotted_cream',
    name: '凝脂奶油',
    name_en: 'Clotted Cream',
    categories: ['乳製品'],
    variants: [
      { id: 'clotted_cream--standard', label: '凝脂奶油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 586, protein: 1.6, fat: 63.0, carbs: 2.7, sodium: 23,
    },
    substitutes: ['heavy_cream', 'butter'],
    allergens: ['dairy'],
    tastes: ['甜', '奶香'],
    textures: ['濃郁', '黏稠'],
    storage_tip: '冷藏保存，開封後三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 法式酸奶油 ───────────────────────────────────────────
  {
    id: 'creme_fraiche',
    name: '法式酸奶油',
    name_en: 'Crème Fraîche',
    categories: ['乳製品'],
    variants: [
      { id: 'creme_fraiche--standard', label: '法式酸奶油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 292, protein: 2.4, fat: 30.0, carbs: 3.0, sodium: 25,
    },
    substitutes: ['sour_cream', 'heavy_cream'],
    allergens: ['dairy'],
    tastes: ['酸', '奶香'],
    textures: ['濃郁', '滑順'],
    storage_tip: '冷藏保存，開封後一週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 酸奶油 ───────────────────────────────────────────────
  {
    id: 'sour_cream',
    name: '酸奶油',
    name_en: 'Sour Cream',
    categories: ['乳製品'],
    variants: [
      { id: 'sour_cream--full_fat', label: '全脂酸奶油', state: 'raw', yield_ratio: 1.0 },
      { id: 'sour_cream--low_fat',  label: '低脂酸奶油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 193, protein: 2.1, fat: 19.0, carbs: 4.6, sodium: 53,
    },
    substitutes: ['creme_fraiche', 'greek_yogurt'],
    allergens: ['dairy'],
    tastes: ['酸', '奶香'],
    textures: ['濃郁', '滑順'],
    storage_tip: '冷藏保存，開封後兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 奶油（無鹽）─────────────────────────────────────────
  {
    id: 'butter',
    name: '奶油',
    name_en: 'Butter',
    categories: ['乳製品'],
    variants: [
      { id: 'butter--unsalted', label: '無鹽奶油', state: 'raw',    yield_ratio: 1.0 },
      { id: 'butter--salted',   label: '有鹽奶油', state: 'raw',    yield_ratio: 1.0 },
      { id: 'butter--clarified',label: '澄清奶油', state: 'cooked', yield_ratio: 0.75 },
      { id: 'butter--softened', label: '軟化奶油', state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 717, protein: 0.9, fat: 81.0, carbs: 0.1, sodium: 11,
    },
    substitutes: ['ghee', 'cultured_butter', 'heavy_cream'],
    allergens: ['dairy'],
    tastes: ['奶香'],
    textures: ['濃郁'],
    storage_tip: '冷藏保存可達一個月；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 發酵奶油 ─────────────────────────────────────────────
  {
    id: 'cultured_butter',
    name: '發酵奶油',
    name_en: 'Cultured Butter',
    categories: ['乳製品'],
    variants: [
      { id: 'cultured_butter--unsalted', label: '無鹽發酵奶油', state: 'raw', yield_ratio: 1.0 },
      { id: 'cultured_butter--salted',   label: '有鹽發酵奶油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 720, protein: 0.7, fat: 80.0, carbs: 0.5, sodium: 8,
    },
    substitutes: ['butter', 'ghee'],
    allergens: ['dairy'],
    tastes: ['酸', '奶香'],
    textures: ['濃郁'],
    storage_tip: '冷藏保存可達一個月；冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 印度酥油 ─────────────────────────────────────────────
  {
    id: 'ghee',
    name: '印度酥油',
    name_en: 'Ghee',
    categories: ['乳製品'],
    variants: [
      { id: 'ghee--standard', label: '印度酥油', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 900, protein: 0.3, fat: 99.0, carbs: 0.0, sodium: 2,
    },
    substitutes: ['butter', 'cultured_butter'],
    allergens: ['dairy'],
    tastes: ['奶香'],
    textures: ['濃郁'],
    storage_tip: '密封常溫可保存數個月；冷藏可延長至一年。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 優格 ─────────────────────────────────────────────────
  {
    id: 'yogurt',
    name: '優格',
    name_en: 'Yogurt',
    categories: ['乳製品'],
    variants: [
      { id: 'yogurt--plain',    label: '原味優格（全脂）', state: 'raw', yield_ratio: 1.0 },
      { id: 'yogurt--low_fat',  label: '低脂優格',         state: 'raw', yield_ratio: 1.0 },
      { id: 'yogurt--flavored', label: '調味優格',         state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 61, protein: 3.5, fat: 3.3, carbs: 4.7, sodium: 46,
    },
    substitutes: ['greek_yogurt', 'kefir', 'sour_cream'],
    allergens: ['dairy'],
    tastes: ['酸', '甜'],
    textures: ['滑順', '濃郁'],
    storage_tip: '冷藏保存，開封後三天內食用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 希臘優格 ─────────────────────────────────────────────
  {
    id: 'greek_yogurt',
    name: '希臘優格',
    name_en: 'Greek Yogurt',
    categories: ['乳製品'],
    variants: [
      { id: 'greek_yogurt--full_fat', label: '全脂希臘優格', state: 'raw', yield_ratio: 1.0 },
      { id: 'greek_yogurt--non_fat',  label: '脫脂希臘優格', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 97, protein: 9.0, fat: 5.0, carbs: 3.6, sodium: 47,
    },
    substitutes: ['yogurt', 'labneh', 'sour_cream'],
    allergens: ['dairy'],
    tastes: ['酸', '甜'],
    textures: ['濃郁', '黏稠'],
    storage_tip: '冷藏保存，開封後三天內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 克菲爾 ───────────────────────────────────────────────
  {
    id: 'kefir',
    name: '克菲爾',
    name_en: 'Kefir',
    categories: ['乳製品'],
    variants: [
      { id: 'kefir--plain',    label: '原味克菲爾', state: 'raw', yield_ratio: 1.0 },
      { id: 'kefir--flavored', label: '調味克菲爾', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 52, protein: 3.5, fat: 2.0, carbs: 4.5, sodium: 40,
    },
    substitutes: ['yogurt', 'buttermilk'],
    allergens: ['dairy'],
    tastes: ['酸'],
    textures: ['滑順'],
    storage_tip: '冷藏保存，開封後一週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 黎巴嫩濃縮優格 ───────────────────────────────────────
  {
    id: 'labneh',
    name: '濃縮優格',
    name_en: 'Labneh',
    categories: ['乳製品'],
    variants: [
      { id: 'labneh--soft', label: '軟質濃縮優格', state: 'raw',   yield_ratio: 1.0 },
      { id: 'labneh--hard', label: '乾燥濃縮優格球', state: 'dried', yield_ratio: 0.6 },
    ],
    nutrition_per_100g: {
      calories: 150, protein: 8.0, fat: 11.0, carbs: 3.0, sodium: 350,
    },
    substitutes: ['greek_yogurt', 'cream_cheese'],
    allergens: ['dairy'],
    tastes: ['酸', '鹹'],
    textures: ['濃郁', '黏稠'],
    storage_tip: '冷藏保存，軟質版開封後三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 夸克起司 ─────────────────────────────────────────────
  {
    id: 'quark',
    name: '夸克起司',
    name_en: 'Quark',
    categories: ['乳製品'],
    variants: [
      { id: 'quark--plain',    label: '原味夸克', state: 'raw', yield_ratio: 1.0 },
      { id: 'quark--low_fat',  label: '低脂夸克', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 68, protein: 12.0, fat: 0.2, carbs: 4.0, sodium: 37,
    },
    substitutes: ['cottage_cheese', 'greek_yogurt', 'cream_cheese'],
    allergens: ['dairy'],
    tastes: ['酸', '甜'],
    textures: ['濃郁', '滑順'],
    storage_tip: '冷藏保存，開封後三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
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
    tastes: ['鹹', '甜'],
    textures: ['黏稠', '濃郁'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 莫扎瑞拉起司 ─────────────────────────────────────────
  {
    id: 'mozzarella',
    name: '莫扎瑞拉起司',
    name_en: 'Mozzarella',
    categories: ['乳製品'],
    variants: [
      { id: 'mozzarella--fresh',    label: '新鮮莫扎瑞拉', state: 'raw',    yield_ratio: 1.0 },
      { id: 'mozzarella--shredded', label: '絲狀莫扎瑞拉', state: 'raw',    yield_ratio: 1.0 },
      { id: 'mozzarella--melted',   label: '融化莫扎瑞拉', state: 'cooked', yield_ratio: 0.85 },
    ],
    nutrition_per_100g: {
      calories: 280, protein: 20.0, fat: 22.0, carbs: 2.0, sodium: 399,
    },
    substitutes: ['cheese_slice', 'provolone'],
    allergens: ['dairy'],
    tastes: ['鹹', '奶香'],
    textures: ['黏稠', '彈牙'],
    storage_tip: '新鮮版冷藏三天內使用；塑封版開封後冷藏一週。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 帕馬森起司 ───────────────────────────────────────────
  {
    id: 'parmesan',
    name: '帕馬森起司',
    name_en: 'Parmesan',
    categories: ['乳製品'],
    variants: [
      { id: 'parmesan--wedge',   label: '帕馬森起司塊', state: 'raw',   yield_ratio: 1.0 },
      { id: 'parmesan--grated',  label: '帕馬森起司粉', state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 431, protein: 38.0, fat: 29.0, carbs: 4.0, sodium: 1602,
    },
    substitutes: ['gruyere', 'pecorino', 'cheese_slice'],
    allergens: ['dairy'],
    tastes: ['鹹', '鮮'],
    textures: ['酥脆', '濃郁'],
    storage_tip: '起司塊冷藏可保存數週；磨碎後冷藏兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 切達起司 ─────────────────────────────────────────────
  {
    id: 'cheddar',
    name: '切達起司',
    name_en: 'Cheddar',
    categories: ['乳製品'],
    variants: [
      { id: 'cheddar--mild',    label: '輕熟切達', state: 'raw', yield_ratio: 1.0 },
      { id: 'cheddar--sharp',   label: '陳年切達', state: 'raw', yield_ratio: 1.0 },
      { id: 'cheddar--shredded',label: '切達起司絲', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 404, protein: 25.0, fat: 33.0, carbs: 1.3, sodium: 621,
    },
    substitutes: ['gouda', 'cheese_slice', 'colby_jack'],
    allergens: ['dairy'],
    tastes: ['鹹', '奶香'],
    textures: ['濃郁', '嚼勁'],
    storage_tip: '冷藏保存，開封後以保鮮膜包裹，三週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 高達起司 ─────────────────────────────────────────────
  {
    id: 'gouda',
    name: '高達起司',
    name_en: 'Gouda',
    categories: ['乳製品'],
    variants: [
      { id: 'gouda--young',  label: '年輕高達',   state: 'raw', yield_ratio: 1.0 },
      { id: 'gouda--aged',   label: '陳年高達',   state: 'raw', yield_ratio: 1.0 },
      { id: 'gouda--smoked', label: '煙燻高達',   state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 356, protein: 25.0, fat: 27.0, carbs: 2.2, sodium: 700,
    },
    substitutes: ['cheddar', 'havarti'],
    allergens: ['dairy'],
    tastes: ['鹹', '甜', '奶香'],
    textures: ['嚼勁', '濃郁'],
    storage_tip: '冷藏保存，開封後以保鮮膜包裹，三週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 格呂耶爾起司 ─────────────────────────────────────────
  {
    id: 'gruyere',
    name: '格呂耶爾起司',
    name_en: 'Gruyère',
    categories: ['乳製品'],
    variants: [
      { id: 'gruyere--standard', label: '格呂耶爾起司塊', state: 'raw',   yield_ratio: 1.0 },
      { id: 'gruyere--grated',   label: '格呂耶爾起司粉', state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 413, protein: 30.0, fat: 32.0, carbs: 0.4, sodium: 336,
    },
    substitutes: ['emmental', 'parmesan'],
    allergens: ['dairy'],
    tastes: ['鹹', '堅果香'],
    textures: ['濃郁', '嚼勁'],
    storage_tip: '冷藏保存，以錫箔或保鮮膜包裹，三週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 艾曼塔起司 ───────────────────────────────────────────
  {
    id: 'emmental',
    name: '艾曼塔起司',
    name_en: 'Emmental',
    categories: ['乳製品'],
    variants: [
      { id: 'emmental--sliced',  label: '艾曼塔起司片', state: 'raw', yield_ratio: 1.0 },
      { id: 'emmental--block',   label: '艾曼塔起司塊', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 380, protein: 29.0, fat: 29.0, carbs: 1.7, sodium: 450,
    },
    substitutes: ['gruyere', 'gouda'],
    allergens: ['dairy'],
    tastes: ['甜', '堅果香'],
    textures: ['嚼勁', '濃郁'],
    storage_tip: '冷藏保存，開封後以保鮮膜包裹，兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 布里起司 ─────────────────────────────────────────────
  {
    id: 'brie',
    name: '布里起司',
    name_en: 'Brie',
    categories: ['乳製品'],
    variants: [
      { id: 'brie--whole',  label: '整顆布里',   state: 'raw', yield_ratio: 1.0 },
      { id: 'brie--sliced', label: '布里起司片', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 334, protein: 21.0, fat: 28.0, carbs: 0.5, sodium: 629,
    },
    substitutes: ['camembert', 'cream_cheese'],
    allergens: ['dairy'],
    tastes: ['奶香', '鮮'],
    textures: ['濃郁', '軟嫩'],
    storage_tip: '冷藏保存，開封後五天內食用；回溫後更能展現風味。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 卡門貝爾起司 ─────────────────────────────────────────
  {
    id: 'camembert',
    name: '卡門貝爾起司',
    name_en: 'Camembert',
    categories: ['乳製品'],
    variants: [
      { id: 'camembert--standard', label: '卡門貝爾起司', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 300, protein: 20.0, fat: 24.0, carbs: 0.5, sodium: 842,
    },
    substitutes: ['brie', 'cream_cheese'],
    allergens: ['dairy'],
    tastes: ['奶香', '鮮'],
    textures: ['濃郁', '軟嫩'],
    storage_tip: '冷藏保存，開封後五天內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 藍起司 ───────────────────────────────────────────────
  {
    id: 'blue_cheese',
    name: '藍起司',
    name_en: 'Blue Cheese',
    categories: ['乳製品'],
    variants: [
      { id: 'blue_cheese--gorgonzola', label: '戈貢佐拉（義式）', state: 'raw', yield_ratio: 1.0 },
      { id: 'blue_cheese--roquefort',  label: '洛克福（法式）',   state: 'raw', yield_ratio: 1.0 },
      { id: 'blue_cheese--stilton',    label: '斯蒂爾頓（英式）', state: 'raw', yield_ratio: 1.0 },
      { id: 'blue_cheese--crumbled',   label: '藍起司碎',         state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 353, protein: 21.0, fat: 29.0, carbs: 2.3, sodium: 1395,
    },
    substitutes: ['feta', 'parmesan'],
    allergens: ['dairy'],
    tastes: ['鹹', '鮮'],
    textures: ['濃郁', '嚼勁'],
    storage_tip: '冷藏保存，以錫箔包裹避免串味，兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 菲達起司 ─────────────────────────────────────────────
  {
    id: 'feta',
    name: '菲達起司',
    name_en: 'Feta',
    categories: ['乳製品'],
    variants: [
      { id: 'feta--block',     label: '菲達起司塊', state: 'raw', yield_ratio: 1.0 },
      { id: 'feta--crumbled',  label: '菲達起司碎', state: 'raw', yield_ratio: 1.0 },
      { id: 'feta--in_brine',  label: '鹽水漬菲達', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 264, protein: 14.0, fat: 21.0, carbs: 4.0, sodium: 1116,
    },
    substitutes: ['blue_cheese', 'ricotta', 'goat_cheese'],
    allergens: ['dairy'],
    tastes: ['鹹', '酸'],
    textures: ['酥脆', '嚼勁'],
    storage_tip: '鹽水保存冷藏，可保存兩個月；開封後一週內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 瑞可塔起司 ───────────────────────────────────────────
  {
    id: 'ricotta',
    name: '瑞可塔起司',
    name_en: 'Ricotta',
    categories: ['乳製品'],
    variants: [
      { id: 'ricotta--whole_milk', label: '全脂瑞可塔', state: 'raw', yield_ratio: 1.0 },
      { id: 'ricotta--part_skim',  label: '低脂瑞可塔', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 174, protein: 11.0, fat: 13.0, carbs: 3.0, sodium: 84,
    },
    substitutes: ['cottage_cheese', 'cream_cheese', 'mascarpone'],
    allergens: ['dairy'],
    tastes: ['甜', '奶香'],
    textures: ['軟嫩', '濃郁'],
    storage_tip: '冷藏保存，開封後三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 馬斯卡彭起司 ─────────────────────────────────────────
  {
    id: 'mascarpone',
    name: '馬斯卡彭起司',
    name_en: 'Mascarpone',
    categories: ['乳製品'],
    variants: [
      { id: 'mascarpone--standard', label: '馬斯卡彭起司', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 429, protein: 4.6, fat: 44.0, carbs: 3.8, sodium: 36,
    },
    substitutes: ['cream_cheese', 'ricotta', 'heavy_cream'],
    allergens: ['dairy'],
    tastes: ['甜', '奶香'],
    textures: ['濃郁', '黏稠', '滑順'],
    storage_tip: '冷藏保存，開封後三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 奶油起司 ─────────────────────────────────────────────
  {
    id: 'cream_cheese',
    name: '奶油起司',
    name_en: 'Cream Cheese',
    categories: ['乳製品'],
    variants: [
      { id: 'cream_cheese--block',    label: '奶油起司塊', state: 'raw',    yield_ratio: 1.0 },
      { id: 'cream_cheese--whipped',  label: '打發奶油起司', state: 'cooked', yield_ratio: 1.0 },
      { id: 'cream_cheese--low_fat',  label: '低脂奶油起司', state: 'raw',   yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 342, protein: 6.0, fat: 33.0, carbs: 4.0, sodium: 321,
    },
    substitutes: ['mascarpone', 'ricotta', 'labneh'],
    allergens: ['dairy'],
    tastes: ['酸', '奶香'],
    textures: ['濃郁', '滑順'],
    storage_tip: '冷藏保存，開封後一週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 茅屋起司 ─────────────────────────────────────────────
  {
    id: 'cottage_cheese',
    name: '茅屋起司',
    name_en: 'Cottage Cheese',
    categories: ['乳製品'],
    variants: [
      { id: 'cottage_cheese--full_fat', label: '全脂茅屋起司', state: 'raw', yield_ratio: 1.0 },
      { id: 'cottage_cheese--low_fat',  label: '低脂茅屋起司', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 98, protein: 11.0, fat: 4.0, carbs: 3.4, sodium: 364,
    },
    substitutes: ['ricotta', 'quark', 'greek_yogurt'],
    allergens: ['dairy'],
    tastes: ['鹹', '酸'],
    textures: ['顆粒感', '軟嫩'],
    storage_tip: '冷藏保存，開封後三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 普羅沃隆起司 ─────────────────────────────────────────
  {
    id: 'provolone',
    name: '普羅沃隆起司',
    name_en: 'Provolone',
    categories: ['乳製品'],
    variants: [
      { id: 'provolone--sliced', label: '普羅沃隆片', state: 'raw', yield_ratio: 1.0 },
      { id: 'provolone--block',  label: '普羅沃隆塊', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 352, protein: 26.0, fat: 27.0, carbs: 2.1, sodium: 876,
    },
    substitutes: ['mozzarella', 'cheddar'],
    allergens: ['dairy'],
    tastes: ['鹹', '奶香'],
    textures: ['嚼勁', '濃郁'],
    storage_tip: '冷藏保存，開封後以保鮮膜包裹，兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 哈瓦蒂起司 ───────────────────────────────────────────
  {
    id: 'havarti',
    name: '哈瓦蒂起司',
    name_en: 'Havarti',
    categories: ['乳製品'],
    variants: [
      { id: 'havarti--standard', label: '哈瓦蒂起司',    state: 'raw', yield_ratio: 1.0 },
      { id: 'havarti--dill',     label: '蒔蘿哈瓦蒂',    state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 371, protein: 23.0, fat: 30.0, carbs: 1.3, sodium: 700,
    },
    substitutes: ['gouda', 'emmental'],
    allergens: ['dairy'],
    tastes: ['甜', '奶香'],
    textures: ['嚼勁', '濃郁'],
    storage_tip: '冷藏保存，開封後以保鮮膜包裹，兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 羊奶起司 ─────────────────────────────────────────────
  {
    id: 'goat_cheese',
    name: '羊奶起司',
    name_en: 'Goat Cheese',
    categories: ['乳製品'],
    variants: [
      { id: 'goat_cheese--fresh', label: '新鮮羊奶起司', state: 'raw', yield_ratio: 1.0 },
      { id: 'goat_cheese--aged',  label: '陳年羊奶起司', state: 'raw', yield_ratio: 1.0 },
      { id: 'goat_cheese--log',   label: '羊奶起司捲',   state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 364, protein: 22.0, fat: 30.0, carbs: 0.1, sodium: 386,
    },
    substitutes: ['feta', 'cream_cheese', 'ricotta'],
    allergens: ['dairy'],
    tastes: ['羶', '鹹', '酸'],
    textures: ['濃郁', '軟嫩'],
    storage_tip: '冷藏保存，開封後一週內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 起司抹醬 ─────────────────────────────────────────────
  {
    id: 'cheese_spread',
    name: '起司抹醬',
    name_en: 'Cheese Spread',
    categories: ['乳製品'],
    variants: [
      { id: 'cheese_spread--plain',   label: '原味起司抹醬', state: 'raw', yield_ratio: 1.0 },
      { id: 'cheese_spread--herb',    label: '香草起司抹醬', state: 'raw', yield_ratio: 1.0 },
      { id: 'cheese_spread--garlic',  label: '蒜香起司抹醬', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 257, protein: 8.5, fat: 22.0, carbs: 5.5, sodium: 500,
    },
    substitutes: ['cream_cheese', 'labneh'],
    allergens: ['dairy'],
    tastes: ['鹹', '奶香'],
    textures: ['滑順', '濃郁'],
    storage_tip: '冷藏保存，開封後兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 冰淇淋 ───────────────────────────────────────────────
  {
    id: 'ice_cream',
    name: '冰淇淋',
    name_en: 'Ice Cream',
    categories: ['乳製品'],
    variants: [
      { id: 'ice_cream--vanilla',    label: '香草冰淇淋', state: 'frozen', yield_ratio: 1.0 },
      { id: 'ice_cream--chocolate',  label: '巧克力冰淇淋', state: 'frozen', yield_ratio: 1.0 },
      { id: 'ice_cream--strawberry', label: '草莓冰淇淋',   state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 207, protein: 3.5, fat: 11.0, carbs: 24.0, sodium: 80,
    },
    substitutes: ['yogurt', 'heavy_cream'],
    allergens: ['dairy', 'egg'],
    tastes: ['甜', '奶香'],
    textures: ['滑順', '冰涼'],
    storage_tip: '冷凍保存，避免反覆解凍；開封後蓋好，一個月內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 焦糖牛奶醬 ───────────────────────────────────────────
  {
    id: 'dulce_de_leche',
    name: '焦糖牛奶醬',
    name_en: 'Dulce de Leche',
    categories: ['乳製品'],
    variants: [
      { id: 'dulce_de_leche--jar',     label: '罐裝焦糖牛奶醬', state: 'cooked', yield_ratio: 1.0 },
      { id: 'dulce_de_leche--homemade',label: '自製焦糖牛奶醬', state: 'cooked', yield_ratio: 0.6 },
    ],
    nutrition_per_100g: {
      calories: 321, protein: 7.0, fat: 8.0, carbs: 55.0, sodium: 110,
    },
    substitutes: ['evaporated_milk', 'milk'],
    allergens: ['dairy'],
    tastes: ['甜', '焦糖'],
    textures: ['黏稠', '濃郁'],
    storage_tip: '未開封常溫保存；開封後冷藏，兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
