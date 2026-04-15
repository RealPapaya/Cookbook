/**
 * @fileoverview 調味料 & 醬汁類食材（40 種）
 *
 * 調味料（seasoning）：用量少、用於提味的乾性或液態調味品
 * 醬汁（sauce）：有特定風味、用量較多的液態調味品
 * 兩者可共存於同一個 categories[]。
 *
 * 尚未有 verified_source 的項目請使用 verify-ingredient skill 補充。
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 美乃滋 ───────────────────────────────────────────────
  {
    id: 'mayonnaise',
    name: '美乃滋',
    name_en: 'Mayonnaise',
    categories: ['調味料', '醬汁'],
    variants: [
      { id: 'mayonnaise--regular',  label: '一般美乃滋', state: 'raw', yield_ratio: 1.0 },
      { id: 'mayonnaise--light',    label: '低卡美乃滋', state: 'raw', yield_ratio: 1.0 },
      { id: 'mayonnaise--japanese', label: '日式美乃滋', state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 680, protein: 1.1, fat: 75, carbs: 2.5, sodium: 610 },
    substitutes: ['greek_yogurt', 'tofu_mayo'],
    allergens: ['egg'],
    tastes: ['酸', '甜'],
    textures: ['濃郁', '油膩'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172735/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 韓式辣醬 ─────────────────────────────────────────────
  {
    id: 'gochujang',
    name: '韓式辣醬',
    name_en: 'Gochujang',
    categories: ['醬汁', '調味料', '發酵食品'],
    variants: [
      { id: 'gochujang--paste', label: '辣醬（一般）', state: 'paste', yield_ratio: 1.0 },
      { id: 'gochujang--mild',  label: '微辣辣醬',     state: 'paste', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: { calories: 182, protein: 4.5, fat: 0.5, carbs: 39, fiber: 3.5, sodium: 1880 },
    substitutes: ['chili_paste', 'sriracha'],
    allergens: ['gluten', 'soy'],
    tastes: ['辣', '甜', '鹹'],
    textures: ['黏稠', '濃郁'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/2103539/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 麵露 ─────────────────────────────────────────────────
  {
    id: 'mentsuyu',
    name: '麵露',
    name_en: 'Mentsuyu (Noodle Soup Base)',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'mentsuyu--2x',  label: '2倍濃縮麵露', state: 'concentrated' },
      { id: 'mentsuyu--3x',  label: '3倍濃縮麵露', state: 'concentrated' },
      { id: 'mentsuyu--raw', label: '麵露（即飲）', state: 'raw' },
    ],
    allergens: ['soy', 'fish'],
    tastes: ['鹹', '甜'],
    textures: ['滑順'],
  },

  // ── 雞粉（康寶）─────────────────────────────────────────
  {
    id: 'chicken_powder',
    name: '雞粉',
    name_en: 'Chicken Powder (Bouillon)',
    categories: ['調味料'],
    variants: [
      { id: 'chicken_powder--granule', label: '顆粒雞粉', state: 'powdered' },
      { id: 'chicken_powder--powder',  label: '雞粉',     state: 'powdered' },
    ],
  },

  // ── 雞湯粉 ───────────────────────────────────────────────
  {
    id: 'chicken_soup_powder',
    name: '雞湯粉',
    name_en: 'Chicken Soup Powder',
    categories: ['調味料', '湯底'],
    variants: [
      { id: 'chicken_soup_powder--powder', label: '雞湯粉', state: 'powdered' },
    ],
  },

  // ── 醬油 ─────────────────────────────────────────────────
  {
    id: 'soy_sauce',
    name: '醬油',
    name_en: 'Soy Sauce',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'soy_sauce--regular',  label: '一般醬油',   state: 'raw' },
      { id: 'soy_sauce--light',    label: '薄鹽醬油',   state: 'raw' },
      { id: 'soy_sauce--tamari',   label: '濃口醬油（tamari）', state: 'raw' },
      { id: 'soy_sauce--dark',     label: '老抽',        state: 'raw' },
      { id: 'soy_sauce--white',    label: '白醬油',      state: 'raw' },
    ],
    nutrition_per_100g: { calories: 53, protein: 8.1, fat: 0.1, carbs: 4.9, sodium: 5720 },
    substitutes: ['tamari', 'coconut_aminos'],
    allergens: ['soy', 'gluten'],
    tastes: ['鹹'],
    textures: [],
    tastes: ['鹹'],
    textures: [],
    storage_tip: '開封後冷藏保存，避免直射日光。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/175155/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 味醂 ─────────────────────────────────────────────────
  {
    id: 'mirin',
    name: '味醂',
    name_en: 'Mirin',
    categories: ['調味料', '醬汁'],
    variants: [
      { id: 'mirin--hon',   label: '本味醂',     state: 'raw' },
      { id: 'mirin--style', label: '味醂風調味料', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 241, protein: 0.4, fat: 0, carbs: 43.2, sodium: 3 },
    substitutes: ['sake_cooking', 'dry_sherry'],
    allergens: ['gluten'],
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 料理酒 ───────────────────────────────────────────────
  {
    id: 'sake_cooking',
    name: '料理酒',
    name_en: 'Cooking Sake / Rice Wine',
    categories: ['調味料'],
    variants: [
      { id: 'sake_cooking--sake',    label: '清酒（料理用）', state: 'raw' },
      { id: 'sake_cooking--rice',    label: '米酒',           state: 'raw' },
      { id: 'sake_cooking--shaoxing',label: '紹興酒',         state: 'raw' },
    ],
    allergens: ['gluten'],
    tastes: ['甜'],
    textures: [],
  },

  // ── 蠔油 ─────────────────────────────────────────────────
  {
    id: 'oyster_sauce',
    name: '蠔油',
    name_en: 'Oyster Sauce',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'oyster_sauce--regular', label: '一般蠔油',   state: 'raw' },
      { id: 'oyster_sauce--vegan',   label: '素食蠔油（菇蠔油）', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 51, protein: 0.6, fat: 0.3, carbs: 12, sodium: 2010 },
    substitutes: ['hoisin_sauce', 'soy_sauce'],
    allergens: ['shellfish', 'soy', 'gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/173572/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 魚露 ─────────────────────────────────────────────────
  {
    id: 'fish_sauce',
    name: '魚露',
    name_en: 'Fish Sauce',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'fish_sauce--thai',  label: '泰式魚露', state: 'raw' },
      { id: 'fish_sauce--viet',  label: '越南魚露', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 35, protein: 5.1, fat: 0.01, carbs: 3.6, sodium: 7851 },
    substitutes: ['soy_sauce', 'worcestershire'],
    allergens: ['fish'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/175139/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 米醋 ─────────────────────────────────────────────────
  {
    id: 'rice_vinegar',
    name: '米醋',
    name_en: 'Rice Vinegar',
    categories: ['調味料'],
    variants: [
      { id: 'rice_vinegar--white',    label: '白米醋',   state: 'raw' },
      { id: 'rice_vinegar--seasoned', label: '壽司醋',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 18, protein: 0, fat: 0, carbs: 0.04, sodium: 2 },
    substitutes: ['black_vinegar', 'apple_cider_vinegar'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/173468/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 烏醋（黑醋）────────────────────────────────────────
  {
    id: 'black_vinegar',
    name: '烏醋',
    name_en: 'Black Vinegar (Chinkiang)',
    categories: ['調味料', '醬汁'],
    variants: [
      { id: 'black_vinegar--chinkiang', label: '鎮江香醋', state: 'raw' },
      { id: 'black_vinegar--taiwan',    label: '台式烏醋', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 50, protein: 1.0, fat: 0.1, carbs: 9.9, sodium: 680 },
    substitutes: ['rice_vinegar', 'balsamic_vinegar'],
    allergens: ['gluten'],
  },

  // ── 味噌 ─────────────────────────────────────────────────
  {
    id: 'miso',
    name: '味噌',
    name_en: 'Miso Paste',
    categories: ['調味料', '發酵食品'],
    variants: [
      { id: 'miso--white',   label: '白味噌（西京味噌）', state: 'fermented' },
      { id: 'miso--red',     label: '赤味噌',             state: 'fermented' },
      { id: 'miso--mixed',   label: '合せ味噌',           state: 'fermented' },
      { id: 'miso--hatcho',  label: '八丁味噌',           state: 'fermented' },
    ],
    nutrition_per_100g: { calories: 199, protein: 11.7, fat: 6, carbs: 26.5, fiber: 5.4, sodium: 3728 },
    substitutes: ['soy_sauce'],
    allergens: ['soy', 'gluten'],
    storage_tip: '冷藏密封保存，避免接觸空氣氧化變色。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/174252/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 豆瓣醬 ───────────────────────────────────────────────
  {
    id: 'doubanjiang',
    name: '豆瓣醬',
    name_en: 'Doubanjiang (Spicy Bean Paste)',
    categories: ['醬汁', '調味料', '發酵食品'],
    variants: [
      { id: 'doubanjiang--spicy', label: '辣豆瓣醬（郫縣豆瓣）', state: 'paste' },
      { id: 'doubanjiang--mild',  label: '不辣豆瓣醬',           state: 'paste' },
    ],
    nutrition_per_100g: { calories: 80, protein: 5, fat: 2, carbs: 10, sodium: 4800 },
    substitutes: ['gochujang', 'miso'],
    allergens: ['soy', 'gluten'],
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 海鮮醬 ───────────────────────────────────────────────
  {
    id: 'hoisin_sauce',
    name: '海鮮醬',
    name_en: 'Hoisin Sauce',
    categories: ['醬汁'],
    variants: [
      { id: 'hoisin_sauce--regular', label: '海鮮醬', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 220, protein: 3.9, fat: 4.3, carbs: 42, sodium: 1980 },
    substitutes: ['oyster_sauce', 'miso'],
    allergens: ['soy', 'gluten'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172539/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 伍斯特醬 ─────────────────────────────────────────────
  {
    id: 'worcestershire',
    name: '伍斯特醬',
    name_en: 'Worcestershire Sauce',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'worcestershire--regular', label: '伍斯特醬', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 78, protein: 0, fat: 0, carbs: 18, sodium: 980 },
    substitutes: ['soy_sauce', 'oyster_sauce'],
    allergens: ['fish', 'gluten', 'soy'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/175148/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 番茄醬 ───────────────────────────────────────────────
  {
    id: 'ketchup',
    name: '番茄醬',
    name_en: 'Ketchup',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'ketchup--regular', label: '一般番茄醬', state: 'raw' },
      { id: 'ketchup--low_sugar', label: '減糖番茄醬', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 101, protein: 1.7, fat: 0.1, carbs: 26, sodium: 907 },
    substitutes: ['tomato_paste', 'salsa'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168959/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 柚子醋 ───────────────────────────────────────────────
  {
    id: 'ponzu',
    name: '柚子醋',
    name_en: 'Ponzu Sauce',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'ponzu--regular', label: '柚子醋',       state: 'raw' },
      { id: 'ponzu--sudachi', label: '酢橘柚子醋',   state: 'raw' },
    ],
    allergens: ['soy', 'fish', 'gluten'],
  },

  // ── 照燒醬 ───────────────────────────────────────────────
  {
    id: 'teriyaki_sauce',
    name: '照燒醬',
    name_en: 'Teriyaki Sauce',
    categories: ['醬汁'],
    variants: [
      { id: 'teriyaki_sauce--regular', label: '照燒醬',   state: 'raw' },
      { id: 'teriyaki_sauce--honey',   label: '蜂蜜照燒醬', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 89, protein: 6, fat: 0, carbs: 16, sodium: 2800 },
    substitutes: ['soy_sauce', 'mirin'],
    allergens: ['soy', 'gluten'],
  },

  // ── 是拉差辣醬 ───────────────────────────────────────────
  {
    id: 'sriracha',
    name: '是拉差辣醬',
    name_en: 'Sriracha',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'sriracha--regular', label: '是拉差', state: 'paste' },
    ],
    nutrition_per_100g: { calories: 93, protein: 2, fat: 0.8, carbs: 19, sodium: 2090 },
    substitutes: ['gochujang', 'chili_oil'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/2136938/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 辣油 ─────────────────────────────────────────────────
  {
    id: 'chili_oil',
    name: '辣油',
    name_en: 'Chili Oil',
    categories: ['醬汁', '油脂'],
    variants: [
      { id: 'chili_oil--regular',  label: '一般辣油',      state: 'raw' },
      { id: 'chili_oil--crispy',   label: '酥脆辣油（老乾媽）', state: 'raw' },
      { id: 'chili_oil--sichuan',  label: '四川紅油',       state: 'raw' },
    ],
    nutrition_per_100g: { calories: 850, protein: 1, fat: 92, carbs: 5, sodium: 200 },
    substitutes: ['sesame_oil', 'gochujang'],
    allergens: ['sesame'],
  },

  // ── XO 醬 ────────────────────────────────────────────────
  {
    id: 'xo_sauce',
    name: 'XO 醬',
    name_en: 'XO Sauce',
    categories: ['醬汁'],
    variants: [
      { id: 'xo_sauce--regular', label: 'XO 醬', state: 'paste' },
    ],
    substitutes: ['oyster_sauce', 'chili_oil'],
    allergens: ['shellfish', 'fish', 'soy'],
  },

  // ── 鹽 ───────────────────────────────────────────────────
  {
    id: 'salt',
    name: '鹽',
    name_en: 'Salt',
    categories: ['調味料'],
    variants: [
      { id: 'salt--table',  label: '精製鹽',    state: 'raw' },
      { id: 'salt--sea',    label: '海鹽',      state: 'raw' },
      { id: 'salt--kosher', label: '猶太鹽',    state: 'raw' },
      { id: 'salt--fleur',  label: '玫瑰鹽',    state: 'raw' },
    ],
    nutrition_per_100g: { calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 38758 },
    substitutes: [],
    allergens: [],
    tastes: ['鹹'],
    textures: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/173468/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 砂糖 ─────────────────────────────────────────────────
  {
    id: 'sugar',
    name: '砂糖',
    name_en: 'White Sugar',
    categories: ['調味料'],
    variants: [
      { id: 'sugar--white',     label: '白砂糖',    state: 'raw' },
      { id: 'sugar--powdered',  label: '糖粉',      state: 'powdered' },
      { id: 'sugar--rock',      label: '冰糖',      state: 'raw' },
    ],
    nutrition_per_100g: { calories: 387, protein: 0, fat: 0, carbs: 100, sodium: 1 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169655/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 黑糖 ─────────────────────────────────────────────────
  {
    id: 'brown_sugar',
    name: '黑糖',
    name_en: 'Brown Sugar',
    categories: ['調味料'],
    variants: [
      { id: 'brown_sugar--regular', label: '黑糖',     state: 'raw' },
      { id: 'brown_sugar--light',   label: '二砂（淺）', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 380, protein: 0, fat: 0, carbs: 98, sodium: 28 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168833/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 蜂蜜 ─────────────────────────────────────────────────
  {
    id: 'honey',
    name: '蜂蜜',
    name_en: 'Honey',
    categories: ['調味料'],
    variants: [
      { id: 'honey--raw',     label: '原蜂蜜',    state: 'raw' },
      { id: 'honey--regular', label: '蜂蜜',      state: 'raw' },
    ],
    nutrition_per_100g: { calories: 304, protein: 0.3, fat: 0, carbs: 82, sodium: 4 },
    substitutes: ['maple_syrup', 'sugar'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169640/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 味精 ─────────────────────────────────────────────────
  {
    id: 'msg',
    name: '味精',
    name_en: 'MSG (Monosodium Glutamate)',
    categories: ['調味料'],
    variants: [
      { id: 'msg--regular', label: '味精', state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 0, protein: 0, fat: 0, carbs: 0, sodium: 12231 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/171534/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 太白粉 ───────────────────────────────────────────────
  {
    id: 'cornstarch',
    name: '太白粉',
    name_en: 'Cornstarch / Potato Starch',
    categories: ['調味料'],
    variants: [
      { id: 'cornstarch--corn',    label: '玉米澱粉',  state: 'powdered' },
      { id: 'cornstarch--potato',  label: '馬鈴薯澱粉', state: 'powdered' },
      { id: 'cornstarch--tapioca', label: '木薯粉',    state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 381, protein: 0.3, fat: 0.1, carbs: 91, fiber: 0.9, sodium: 9 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169717/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 小蘇打 ───────────────────────────────────────────────
  {
    id: 'baking_soda',
    name: '小蘇打',
    name_en: 'Baking Soda',
    categories: ['調味料'],
    variants: [
      { id: 'baking_soda--regular', label: '小蘇打', state: 'powdered' },
    ],
    allergens: [],
  },

  // ── 白胡椒粉 ─────────────────────────────────────────────
  {
    id: 'white_pepper_powder',
    name: '白胡椒粉',
    name_en: 'White Pepper Powder',
    categories: ['調味料', '香料'],
    variants: [
      { id: 'white_pepper_powder--ground', label: '白胡椒粉',   state: 'powdered' },
      { id: 'white_pepper_powder--whole',  label: '白胡椒粒',   state: 'raw' },
    ],
    nutrition_per_100g: { calories: 296, protein: 10.4, fat: 2.1, carbs: 68, fiber: 26.2, sodium: 5 },
    substitutes: ['black_pepper'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170932/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 五香粉 ───────────────────────────────────────────────
  {
    id: 'five_spice',
    name: '五香粉',
    name_en: 'Five Spice Powder',
    categories: ['調味料', '香料'],
    variants: [
      { id: 'five_spice--powder', label: '五香粉', state: 'powdered' },
    ],
    nutrition_per_100g: { calories: 319, protein: 10.6, fat: 13.8, carbs: 52.7, sodium: 60 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170929/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 咖哩粉 ───────────────────────────────────────────────
  {
    id: 'curry_powder',
    name: '咖哩粉',
    name_en: 'Curry Powder',
    categories: ['調味料', '香料'],
    variants: [
      { id: 'curry_powder--mild',  label: '咖哩粉（溫和）', state: 'powdered' },
      { id: 'curry_powder--hot',   label: '咖哩粉（辛辣）', state: 'powdered' },
      { id: 'curry_powder--japanese', label: '日式咖哩塊',  state: 'paste' },
    ],
    nutrition_per_100g: { calories: 325, protein: 12.7, fat: 14, carbs: 55.8, fiber: 33.2, sodium: 52 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170926/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 柴魚粉 ───────────────────────────────────────────────
  {
    id: 'dashi_powder',
    name: '柴魚粉',
    name_en: 'Dashi Powder (Bonito Stock)',
    categories: ['調味料', '湯底'],
    variants: [
      { id: 'dashi_powder--bonito',  label: '鰹魚出汁粉',  state: 'powdered' },
      { id: 'dashi_powder--kombu',   label: '昆布出汁粉',  state: 'powdered' },
      { id: 'dashi_powder--mixed',   label: '綜合出汁粉',  state: 'powdered' },
    ],
    allergens: ['fish'],
  },

  // ── 芝麻醬 ───────────────────────────────────────────────
  {
    id: 'sesame_paste',
    name: '芝麻醬',
    name_en: 'Chinese Sesame Paste',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'sesame_paste--regular', label: '芝麻醬（中式）', state: 'paste' },
      { id: 'sesame_paste--tahini',  label: '白芝麻醬（tahini）', state: 'paste' },
    ],
    nutrition_per_100g: { calories: 570, protein: 17, fat: 50, carbs: 23, fiber: 9, sodium: 150 },
    substitutes: ['peanut_butter', 'tahini'],
    allergens: ['sesame'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/168591/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 花生醬 ───────────────────────────────────────────────
  {
    id: 'peanut_butter',
    name: '花生醬',
    name_en: 'Peanut Butter',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'peanut_butter--smooth',  label: '滑順花生醬', state: 'paste' },
      { id: 'peanut_butter--chunky',  label: '顆粒花生醬', state: 'paste' },
      { id: 'peanut_butter--natural', label: '天然花生醬', state: 'paste' },
    ],
    nutrition_per_100g: { calories: 588, protein: 22, fat: 50, carbs: 20, fiber: 5, sodium: 459 },
    substitutes: ['sesame_paste', 'almond_butter'],
    allergens: ['peanut'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172470/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 豆豉醬 ───────────────────────────────────────────────
  {
    id: 'black_bean_sauce',
    name: '豆豉醬',
    name_en: 'Black Bean Sauce',
    categories: ['醬汁', '調味料', '發酵食品'],
    variants: [
      { id: 'black_bean_sauce--regular', label: '豆豉醬',      state: 'paste' },
      { id: 'black_bean_sauce--garlic',  label: '蒜蓉豆豉醬',  state: 'paste' },
    ],
    nutrition_per_100g: { calories: 142, protein: 7.8, fat: 6, carbs: 14, sodium: 3800 },
    substitutes: ['doubanjiang', 'miso'],
    allergens: ['soy', 'gluten'],
  },

  // ── 辣椒醬（台式）───────────────────────────────────────
  {
    id: 'chili_paste_tw',
    name: '辣椒醬',
    name_en: 'Chili Paste (Taiwanese)',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'chili_paste_tw--regular', label: '台式辣椒醬', state: 'paste' },
      { id: 'chili_paste_tw--garlic',  label: '蒜蓉辣醬',   state: 'paste' },
    ],
    substitutes: ['sriracha', 'gochujang'],
    allergens: [],
  },

  // ── 沙茶醬 ───────────────────────────────────────────────
  {
    id: 'shacha_sauce',
    name: '沙茶醬',
    name_en: 'Shacha Sauce',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'shacha_sauce--regular', label: '沙茶醬', state: 'paste' },
    ],
    nutrition_per_100g: { calories: 730, protein: 8, fat: 72, carbs: 12, sodium: 890 },
    allergens: ['fish', 'soy', 'peanut', 'sesame'],
    tastes: ['鹹', '鮮', '甜'],
    textures: ['濃郁', '顆粒', '油膩'],
  },

  // ── 甜麵醬 ───────────────────────────────────────────────
  {
    id: 'sweet_bean_sauce',
    name: '甜麵醬',
    name_en: 'Sweet Bean Sauce (Tianmianjiang)',
    categories: ['醬汁', '調味料'],
    variants: [
      { id: 'sweet_bean_sauce--regular', label: '甜麵醬', state: 'paste' },
    ],
    nutrition_per_100g: { calories: 161, protein: 5.3, fat: 1.5, carbs: 32, sodium: 1560 },
    substitutes: ['hoisin_sauce', 'miso'],
    allergens: ['soy', 'gluten'],
  },

  // ── 咖哩醬 ───────────────────────────────────────────────
  {
    id: 'curry_sauce',
    name: '咖哩醬',
    name_en: 'Curry Sauce / Paste',
    categories: ['醬汁'],
    variants: [
      { id: 'curry_sauce--thai_red',   label: '泰式紅咖哩醬', state: 'paste' },
      { id: 'curry_sauce--thai_green', label: '泰式綠咖哩醬', state: 'paste' },
      { id: 'curry_sauce--indian',     label: '印度咖哩醬',   state: 'paste' },
    ],
    substitutes: ['curry_powder'],
    allergens: [],
  },

  // ── 椰漿 ─────────────────────────────────────────────────
  {
    id: 'coconut_milk',
    name: '椰漿',
    name_en: 'Coconut Milk',
    categories: ['醬汁', '湯底'],
    variants: [
      { id: 'coconut_milk--full_fat',  label: '全脂椰漿', state: 'raw' },
      { id: 'coconut_milk--light',     label: '低脂椰漿', state: 'raw' },
      { id: 'coconut_milk--cream',     label: '椰奶油',   state: 'concentrated' },
    ],
    nutrition_per_100g: { calories: 197, protein: 2, fat: 21, carbs: 2.8, sodium: 13 },
    substitutes: ['oat_milk'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170172/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 番茄罐頭（泥）────────────────────────────────────────
  {
    id: 'tomato_paste',
    name: '番茄泥',
    name_en: 'Tomato Paste',
    categories: ['醬汁'],
    variants: [
      { id: 'tomato_paste--can',      label: '罐頭番茄泥',   state: 'concentrated' },
      { id: 'tomato_paste--crushed',  label: '整粒去皮番茄', state: 'canned' },
    ],
    nutrition_per_100g: { calories: 82, protein: 3.8, fat: 0.5, carbs: 18.9, fiber: 4.1, sodium: 59 },
    substitutes: ['ketchup'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/170921/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 奶油（乳製品，但常作調味）────────────────────────────
  {
    id: 'butter',
    name: '奶油',
    name_en: 'Butter',
    categories: ['油脂', '乳製品'],
    variants: [
      { id: 'butter--salted',   label: '有鹽奶油',  state: 'raw' },
      { id: 'butter--unsalted', label: '無鹽奶油',  state: 'raw' },
      { id: 'butter--ghee',     label: '印度酥油',  state: 'raw' },
    ],
    nutrition_per_100g: { calories: 717, protein: 0.9, fat: 81, carbs: 0.1, sodium: 714 },
    substitutes: ['margarine', 'olive_oil'],
    allergens: ['dairy'],
    tastes: ['甜'],
    textures: ['濃郁', '滑順'],
    storage_tip: '冷藏可保存 1 個月，冷凍 3 個月。',
    verified_source: 'https://fdc.nal.usda.gov/food-details/173410/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 橄欖油 ───────────────────────────────────────────────
  {
    id: 'olive_oil',
    name: '橄欖油',
    name_en: 'Olive Oil',
    categories: ['油脂'],
    variants: [
      { id: 'olive_oil--extra_virgin', label: '特級初榨橄欖油', state: 'raw' },
      { id: 'olive_oil--light',        label: '淡味橄欖油',     state: 'raw' },
    ],
    nutrition_per_100g: { calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 2 },
    substitutes: ['sesame_oil', 'vegetable_oil'],
    allergens: [],
    tastes: ['苦'],
    textures: ['油膩'],
    verified_source: 'https://fdc.nal.usda.gov/food-details/748608/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 沙拉油 ───────────────────────────────────────────────
  {
    id: 'vegetable_oil',
    name: '沙拉油',
    name_en: 'Vegetable Oil',
    categories: ['油脂'],
    variants: [
      { id: 'vegetable_oil--canola',     label: '芥花油',    state: 'raw' },
      { id: 'vegetable_oil--sunflower',  label: '葵花油',    state: 'raw' },
      { id: 'vegetable_oil--regular',    label: '沙拉油',    state: 'raw' },
    ],
    nutrition_per_100g: { calories: 884, protein: 0, fat: 100, carbs: 0, sodium: 0 },
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/172337/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 楓糖漿 ───────────────────────────────────────────────
  {
    id: 'maple_syrup',
    name: '楓糖漿',
    name_en: 'Maple Syrup',
    categories: ['調味料'],
    variants: [
      { id: 'maple_syrup--regular', label: '楓糖漿', state: 'raw' },
    ],
    nutrition_per_100g: { calories: 260, protein: 0, fat: 0.1, carbs: 67, sodium: 12 },
    substitutes: ['honey', 'sugar'],
    allergens: [],
    verified_source: 'https://fdc.nal.usda.gov/food-details/169661/nutrients',
    verified_at: '2024-11-01',
  },

  // ── 白酒 ─────────────────────────────────────────────────
  {
    id: 'wine_white',
    name: '白酒',
    name_en: 'White Wine',
    categories: ['調味料'],
    variants: [
      { id: 'wine_white--cooking', label: '料理白酒', state: 'raw' },
      { id: 'wine_white--dry',     label: '不甜白酒', state: 'raw' },
    ],
    allergens: [],
  },

];
