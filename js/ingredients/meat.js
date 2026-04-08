/**
 * @fileoverview 肉類食材
 * 包含：雞肉、豬肉、牛肉、羊肉、加工肉品、內臟、蛋類等蛋白質來源
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 雞蛋 ─────────────────────────────────────────────────
  {
    id: 'egg_chicken',
    name: '雞蛋',
    name_en: 'Chicken Egg',
    categories: ['肉類'],
    variants: [
      { id: 'egg_chicken--raw',        label: '生雞蛋（全蛋）', state: 'raw',    yield_ratio: 1.0  },
      { id: 'egg_chicken--raw_yolk',   label: '生蛋黃',         state: 'raw',    yield_ratio: 0.33 },
      { id: 'egg_chicken--raw_white',  label: '生蛋白',         state: 'raw',    yield_ratio: 0.67 },
      { id: 'egg_chicken--cooked',     label: '水煮蛋',         state: 'cooked', yield_ratio: 1.0  },
      { id: 'egg_chicken--onsen',      label: '溫泉蛋',         state: 'cooked', yield_ratio: 1.0  },
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

  // ── 鴨蛋 ─────────────────────────────────────────────────
  {
    id: 'egg_duck',
    name: '鴨蛋',
    name_en: 'Duck Egg',
    categories: ['肉類'],
    variants: [
      { id: 'egg_duck--raw',     label: '生鴨蛋', state: 'raw',    yield_ratio: 1.0 },
      { id: 'egg_duck--salted',  label: '鹹鴨蛋', state: 'cured',  yield_ratio: 1.0 },
      { id: 'egg_duck--century', label: '皮蛋',   state: 'cured',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 185, protein: 13, fat: 14, carbs: 0.8, sodium: 146,
    },
    substitutes: ['egg_chicken'],
    allergens: ['egg'],
    storage_tip: '冷藏保存，新鮮鴨蛋兩週內使用；皮蛋室溫可保存數月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鵪鶉蛋 ───────────────────────────────────────────────
  {
    id: 'egg_quail',
    name: '鵪鶉蛋',
    name_en: 'Quail Egg',
    categories: ['肉類'],
    variants: [
      { id: 'egg_quail--raw',    label: '生鵪鶉蛋', state: 'raw',    yield_ratio: 1.0 },
      { id: 'egg_quail--cooked', label: '熟鵪鶉蛋', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 158, protein: 13, fat: 11, carbs: 0.4, sodium: 141,
    },
    substitutes: ['egg_chicken'],
    allergens: ['egg'],
    storage_tip: '冷藏保存，兩週內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 雞胸肉 ───────────────────────────────────────────────
  {
    id: 'chicken_breast',
    name: '雞胸肉',
    name_en: 'Chicken Breast',
    categories: ['肉類'],
    variants: [
      { id: 'chicken_breast--raw',     label: '生雞胸肉',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'chicken_breast--cooked',  label: '熟雞胸肉',   state: 'cooked', yield_ratio: 0.75 },
      { id: 'chicken_breast--sliced',  label: '雞胸肉片',   state: 'sliced', yield_ratio: 1.0 },
      { id: 'chicken_breast--minced',  label: '雞胸絞肉',   state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 120, protein: 22, fat: 2.6, carbs: 0, sodium: 74,
    },
    substitutes: ['chicken_thigh', 'turkey_breast'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 雞腿肉 ───────────────────────────────────────────────
  {
    id: 'chicken_thigh',
    name: '雞腿肉',
    name_en: 'Chicken Thigh',
    categories: ['肉類'],
    variants: [
      { id: 'chicken_thigh--bone_in',  label: '帶骨雞腿',   state: 'raw',    yield_ratio: 0.75 },
      { id: 'chicken_thigh--boneless', label: '去骨雞腿',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'chicken_thigh--cooked',   label: '熟雞腿肉',   state: 'cooked', yield_ratio: 0.78 },
    ],
    nutrition_per_100g: {
      calories: 177, protein: 18, fat: 11, carbs: 0, sodium: 79,
    },
    substitutes: ['chicken_breast', 'chicken_drumstick'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 棒棒腿 ───────────────────────────────────────────────
  {
    id: 'chicken_drumstick',
    name: '棒棒腿',
    name_en: 'Chicken Drumstick',
    categories: ['肉類'],
    variants: [
      { id: 'chicken_drumstick--raw',    label: '生棒棒腿', state: 'raw',    yield_ratio: 0.7 },
      { id: 'chicken_drumstick--cooked', label: '熟棒棒腿', state: 'cooked', yield_ratio: 0.65 },
    ],
    nutrition_per_100g: {
      calories: 172, protein: 18, fat: 10, carbs: 0, sodium: 79,
    },
    substitutes: ['chicken_thigh', 'chicken_wing'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 雞翅 ─────────────────────────────────────────────────
  {
    id: 'chicken_wing',
    name: '雞翅',
    name_en: 'Chicken Wing',
    categories: ['肉類'],
    variants: [
      { id: 'chicken_wing--whole',     label: '全雞翅',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'chicken_wing--mid',       label: '二節翅',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'chicken_wing--tip',       label: '翅尖',     state: 'raw',    yield_ratio: 1.0 },
      { id: 'chicken_wing--cooked',    label: '熟雞翅',   state: 'cooked', yield_ratio: 0.7 },
    ],
    nutrition_per_100g: {
      calories: 203, protein: 19, fat: 14, carbs: 0, sodium: 82,
    },
    substitutes: ['chicken_drumstick'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 雞肉丸 ───────────────────────────────────────────────
  {
    id: 'chicken_meatball',
    name: '雞肉丸',
    name_en: 'Chicken Meatball',
    categories: ['肉類'],
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

  // ── 培根 ─────────────────────────────────────────────────
  {
    id: 'bacon',
    name: '培根',
    name_en: 'Bacon',
    categories: ['肉類'],
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
    categories: ['肉類'],
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

  // ── 豬五花 ───────────────────────────────────────────────
  {
    id: 'pork_belly',
    name: '豬五花',
    name_en: 'Pork Belly',
    categories: ['肉類'],
    variants: [
      { id: 'pork_belly--raw',    label: '生豬五花',     state: 'raw',    yield_ratio: 1.0  },
      { id: 'pork_belly--sliced', label: '五花肉片',     state: 'sliced', yield_ratio: 1.0  },
      { id: 'pork_belly--cooked', label: '熟豬五花',     state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 395, protein: 14, fat: 37, carbs: 0, sodium: 60,
    },
    substitutes: ['pork_slice', 'bacon'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豬排（里肌）─────────────────────────────────────────
  {
    id: 'pork_chop',
    name: '豬排',
    name_en: 'Pork Chop',
    categories: ['肉類'],
    variants: [
      { id: 'pork_chop--bone_in',  label: '帶骨豬排', state: 'raw',    yield_ratio: 0.8 },
      { id: 'pork_chop--boneless', label: '去骨豬排', state: 'raw',    yield_ratio: 1.0 },
      { id: 'pork_chop--cooked',   label: '熟豬排',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 231, protein: 20, fat: 16, carbs: 0, sodium: 56,
    },
    substitutes: ['pork_loin', 'pork_slice'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豬里肌 ───────────────────────────────────────────────
  {
    id: 'pork_loin',
    name: '豬里肌',
    name_en: 'Pork Loin',
    categories: ['肉類'],
    variants: [
      { id: 'pork_loin--raw',    label: '生豬里肌', state: 'raw',    yield_ratio: 1.0  },
      { id: 'pork_loin--sliced', label: '里肌肉片', state: 'sliced', yield_ratio: 1.0  },
      { id: 'pork_loin--cooked', label: '熟豬里肌', state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 215, protein: 21, fat: 13, carbs: 0, sodium: 50,
    },
    substitutes: ['pork_chop', 'pork_slice'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豬絞肉 ───────────────────────────────────────────────
  {
    id: 'ground_pork',
    name: '豬絞肉',
    name_en: 'Ground Pork',
    categories: ['肉類'],
    variants: [
      { id: 'ground_pork--lean',   label: '瘦豬絞肉',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'ground_pork--medium', label: '半肥瘦絞肉', state: 'raw',    yield_ratio: 1.0 },
      { id: 'ground_pork--cooked', label: '熟豬絞肉',   state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 263, protein: 18, fat: 21, carbs: 0, sodium: 60,
    },
    substitutes: ['ground_beef', 'ground_chicken'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豬肋排 ───────────────────────────────────────────────
  {
    id: 'pork_ribs',
    name: '豬肋排',
    name_en: 'Pork Ribs',
    categories: ['肉類'],
    variants: [
      { id: 'pork_ribs--spare',  label: '豬肋排',     state: 'raw',    yield_ratio: 0.65 },
      { id: 'pork_ribs--baby',   label: '嫩背肋排',   state: 'raw',    yield_ratio: 0.7  },
      { id: 'pork_ribs--cooked', label: '熟豬肋排',   state: 'cooked', yield_ratio: 0.6  },
    ],
    nutrition_per_100g: {
      calories: 297, protein: 17, fat: 25, carbs: 0, sodium: 75,
    },
    substitutes: ['pork_belly'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豬腳 ─────────────────────────────────────────────────
  {
    id: 'pork_knuckle',
    name: '豬腳',
    name_en: 'Pork Knuckle',
    categories: ['肉類'],
    variants: [
      { id: 'pork_knuckle--raw',    label: '生豬腳', state: 'raw',    yield_ratio: 0.6 },
      { id: 'pork_knuckle--cooked', label: '熟豬腳', state: 'cooked', yield_ratio: 0.55 },
    ],
    nutrition_per_100g: {
      calories: 283, protein: 19, fat: 22, carbs: 0, sodium: 88,
    },
    substitutes: [],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豬肉丸 ───────────────────────────────────────────────
  {
    id: 'pork_meatball',
    name: '豬肉丸',
    name_en: 'Pork Meatball',
    categories: ['肉類'],
    variants: [
      { id: 'pork_meatball--frozen', label: '冷凍豬肉丸', state: 'frozen', yield_ratio: 1.0 },
      { id: 'pork_meatball--raw',    label: '自製豬肉丸', state: 'raw',    yield_ratio: 1.0 },
      { id: 'pork_meatball--cooked', label: '熟豬肉丸',   state: 'cooked', yield_ratio: 0.9 },
    ],
    nutrition_per_100g: {
      calories: 195, protein: 14, fat: 12, carbs: 7, sodium: 530,
    },
    substitutes: ['chicken_meatball', 'beef_meatball'],
    allergens: [],
    storage_tip: '冷凍保存，烹調前解凍即可。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 火腿 ─────────────────────────────────────────────────
  {
    id: 'ham',
    name: '火腿',
    name_en: 'Ham',
    categories: ['肉類'],
    variants: [
      { id: 'ham--sliced',   label: '火腿片',   state: 'sliced', yield_ratio: 1.0 },
      { id: 'ham--block',    label: '整塊火腿', state: 'cured',  yield_ratio: 1.0 },
      { id: 'ham--smoked',   label: '煙燻火腿', state: 'smoked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 145, protein: 17, fat: 6, carbs: 4, sodium: 1200,
    },
    substitutes: ['bacon', 'pancetta'],
    allergens: [],
    storage_tip: '開封後冷藏，一週內食用；或分裝冷凍。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 義式培根（Pancetta）─────────────────────────────────
  {
    id: 'pancetta',
    name: '義式培根',
    name_en: 'Pancetta',
    categories: ['肉類'],
    variants: [
      { id: 'pancetta--flat',   label: '平板義式培根', state: 'cured',  yield_ratio: 1.0 },
      { id: 'pancetta--rolled', label: '捲狀義式培根', state: 'cured',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 420, protein: 16, fat: 39, carbs: 0, sodium: 1500,
    },
    substitutes: ['bacon', 'ham'],
    allergens: [],
    storage_tip: '開封後冷藏，一週內食用；或分裝冷凍。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 香腸 ─────────────────────────────────────────────────
  {
    id: 'sausage_pork',
    name: '豬肉香腸',
    name_en: 'Pork Sausage',
    categories: ['肉類'],
    variants: [
      { id: 'sausage_pork--fresh',   label: '新鮮豬肉腸',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'sausage_pork--taiwan',  label: '台式香腸',     state: 'cured',  yield_ratio: 1.0 },
      { id: 'sausage_pork--smoked',  label: '煙燻香腸',     state: 'smoked', yield_ratio: 1.0 },
      { id: 'sausage_pork--cooked',  label: '熟香腸',       state: 'cooked', yield_ratio: 0.85 },
    ],
    nutrition_per_100g: {
      calories: 301, protein: 14, fat: 26, carbs: 3, sodium: 900,
    },
    substitutes: ['hot_dog', 'ham'],
    allergens: [],
    storage_tip: '冷藏三天，或冷凍保存一個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 熱狗 ─────────────────────────────────────────────────
  {
    id: 'hot_dog',
    name: '熱狗',
    name_en: 'Hot Dog',
    categories: ['肉類'],
    variants: [
      { id: 'hot_dog--pork',    label: '豬肉熱狗',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'hot_dog--chicken', label: '雞肉熱狗',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'hot_dog--combo',   label: '綜合熱狗',   state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 290, protein: 11, fat: 26, carbs: 3, sodium: 870,
    },
    substitutes: ['sausage_pork'],
    allergens: [],
    storage_tip: '開封後冷藏，一週內食用；未開封冷藏可保存至賞味期限。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 午餐肉 ───────────────────────────────────────────────
  {
    id: 'spam',
    name: '午餐肉',
    name_en: 'Spam / Canned Luncheon Meat',
    categories: ['肉類'],
    variants: [
      { id: 'spam--original',   label: '原味午餐肉', state: 'cooked', yield_ratio: 1.0 },
      { id: 'spam--low_sodium', label: '低鈉午餐肉', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 310, protein: 13, fat: 27, carbs: 3, sodium: 1011,
    },
    substitutes: ['ham', 'sausage_pork'],
    allergens: [],
    storage_tip: '未開封常溫保存；開封後冷藏，三天內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 牛肉片 ───────────────────────────────────────────────
  {
    id: 'beef_slice',
    name: '牛肉片',
    name_en: 'Sliced Beef',
    categories: ['肉類'],
    variants: [
      { id: 'beef_slice--raw',    label: '生牛肉片',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'beef_slice--frozen', label: '冷凍牛肉片', state: 'frozen', yield_ratio: 1.0 },
      { id: 'beef_slice--shabu',  label: '涮涮鍋牛肉', state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 250, protein: 20, fat: 18, carbs: 0, sodium: 60,
    },
    substitutes: ['pork_slice', 'lamb_slice'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 牛絞肉 ───────────────────────────────────────────────
  {
    id: 'ground_beef',
    name: '牛絞肉',
    name_en: 'Ground Beef',
    categories: ['肉類'],
    variants: [
      { id: 'ground_beef--lean',   label: '瘦牛絞肉',     state: 'raw',    yield_ratio: 1.0 },
      { id: 'ground_beef--medium', label: '中脂牛絞肉',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'ground_beef--cooked', label: '熟牛絞肉',     state: 'cooked', yield_ratio: 0.78 },
    ],
    nutrition_per_100g: {
      calories: 254, protein: 20, fat: 18, carbs: 0, sodium: 72,
    },
    substitutes: ['ground_pork', 'ground_lamb'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 牛排 ─────────────────────────────────────────────────
  {
    id: 'beef_steak',
    name: '牛排',
    name_en: 'Beef Steak',
    categories: ['肉類'],
    variants: [
      { id: 'beef_steak--ribeye',   label: '肋眼牛排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'beef_steak--sirloin',  label: '沙朗牛排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'beef_steak--tenderloin',label: '菲力牛排',  state: 'raw',    yield_ratio: 1.0  },
      { id: 'beef_steak--cooked',   label: '熟牛排',     state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 271, protein: 21, fat: 20, carbs: 0, sodium: 55,
    },
    substitutes: ['beef_slice'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月；建議回溫後烹調。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 牛腩 ─────────────────────────────────────────────────
  {
    id: 'beef_brisket',
    name: '牛腩',
    name_en: 'Beef Brisket',
    categories: ['肉類'],
    variants: [
      { id: 'beef_brisket--raw',    label: '生牛腩', state: 'raw',    yield_ratio: 1.0  },
      { id: 'beef_brisket--cooked', label: '熟牛腩', state: 'cooked', yield_ratio: 0.65 },
    ],
    nutrition_per_100g: {
      calories: 274, protein: 18, fat: 22, carbs: 0, sodium: 69,
    },
    substitutes: ['beef_rib', 'beef_shank'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 牛肋條 ───────────────────────────────────────────────
  {
    id: 'beef_rib',
    name: '牛肋條',
    name_en: 'Beef Short Rib',
    categories: ['肉類'],
    variants: [
      { id: 'beef_rib--bone_in',  label: '帶骨牛肋', state: 'raw',    yield_ratio: 0.7  },
      { id: 'beef_rib--boneless', label: '去骨牛肋', state: 'raw',    yield_ratio: 1.0  },
      { id: 'beef_rib--cooked',   label: '熟牛肋',   state: 'cooked', yield_ratio: 0.65 },
    ],
    nutrition_per_100g: {
      calories: 301, protein: 17, fat: 26, carbs: 0, sodium: 65,
    },
    substitutes: ['beef_brisket'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 牛腱 ─────────────────────────────────────────────────
  {
    id: 'beef_shank',
    name: '牛腱',
    name_en: 'Beef Shank',
    categories: ['肉類'],
    variants: [
      { id: 'beef_shank--raw',    label: '生牛腱', state: 'raw',    yield_ratio: 1.0  },
      { id: 'beef_shank--cooked', label: '熟牛腱', state: 'cooked', yield_ratio: 0.65 },
    ],
    nutrition_per_100g: {
      calories: 178, protein: 22, fat: 9, carbs: 0, sodium: 58,
    },
    substitutes: ['beef_brisket', 'beef_tendon'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 牛筋 ─────────────────────────────────────────────────
  {
    id: 'beef_tendon',
    name: '牛筋',
    name_en: 'Beef Tendon',
    categories: ['肉類'],
    variants: [
      { id: 'beef_tendon--raw',    label: '生牛筋', state: 'raw',    yield_ratio: 0.8  },
      { id: 'beef_tendon--cooked', label: '熟牛筋', state: 'cooked', yield_ratio: 0.65 },
    ],
    nutrition_per_100g: {
      calories: 150, protein: 24, fat: 5, carbs: 0.4, sodium: 80,
    },
    substitutes: ['beef_shank'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存一個月；熟牛筋冷藏可保存三天。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 牛肉丸 ───────────────────────────────────────────────
  {
    id: 'beef_meatball',
    name: '牛肉丸',
    name_en: 'Beef Meatball',
    categories: ['肉類'],
    variants: [
      { id: 'beef_meatball--frozen', label: '冷凍牛肉丸',   state: 'frozen', yield_ratio: 1.0 },
      { id: 'beef_meatball--teochew',label: '潮州牛肉丸',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'beef_meatball--raw',    label: '自製牛肉丸',   state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 185, protein: 15, fat: 10, carbs: 8, sodium: 560,
    },
    substitutes: ['pork_meatball', 'chicken_meatball'],
    allergens: [],
    storage_tip: '冷凍保存，烹調前解凍即可。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 羊肉片 ───────────────────────────────────────────────
  {
    id: 'lamb_slice',
    name: '羊肉片',
    name_en: 'Sliced Lamb',
    categories: ['肉類'],
    variants: [
      { id: 'lamb_slice--raw',    label: '生羊肉片',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'lamb_slice--frozen', label: '冷凍羊肉片', state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 258, protein: 19, fat: 20, carbs: 0, sodium: 72,
    },
    substitutes: ['beef_slice', 'pork_slice'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 羊排 ─────────────────────────────────────────────────
  {
    id: 'lamb_chop',
    name: '羊排',
    name_en: 'Lamb Chop',
    categories: ['肉類'],
    variants: [
      { id: 'lamb_chop--bone_in',  label: '帶骨羊排', state: 'raw',    yield_ratio: 0.75 },
      { id: 'lamb_chop--boneless', label: '去骨羊排', state: 'raw',    yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 294, protein: 18, fat: 24, carbs: 0, sodium: 72,
    },
    substitutes: ['beef_steak', 'lamb_slice'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 羊絞肉 ───────────────────────────────────────────────
  {
    id: 'ground_lamb',
    name: '羊絞肉',
    name_en: 'Ground Lamb',
    categories: ['肉類'],
    variants: [
      { id: 'ground_lamb--raw',    label: '生羊絞肉', state: 'raw',    yield_ratio: 1.0 },
      { id: 'ground_lamb--cooked', label: '熟羊絞肉', state: 'cooked', yield_ratio: 0.78 },
    ],
    nutrition_per_100g: {
      calories: 282, protein: 18, fat: 23, carbs: 0, sodium: 75,
    },
    substitutes: ['ground_beef', 'ground_pork'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鴨胸 ─────────────────────────────────────────────────
  {
    id: 'duck_breast',
    name: '鴨胸',
    name_en: 'Duck Breast',
    categories: ['肉類'],
    variants: [
      { id: 'duck_breast--raw',        label: '生鴨胸',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'duck_breast--skin_on',    label: '帶皮鴨胸', state: 'raw',    yield_ratio: 1.0  },
      { id: 'duck_breast--cooked',     label: '熟鴨胸',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 201, protein: 19, fat: 13, carbs: 0, sodium: 74,
    },
    substitutes: ['chicken_breast', 'turkey_breast'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 火雞胸 ───────────────────────────────────────────────
  {
    id: 'turkey_breast',
    name: '火雞胸',
    name_en: 'Turkey Breast',
    categories: ['肉類'],
    variants: [
      { id: 'turkey_breast--raw',    label: '生火雞胸', state: 'raw',    yield_ratio: 1.0  },
      { id: 'turkey_breast--cooked', label: '熟火雞胸', state: 'cooked', yield_ratio: 0.75 },
      { id: 'turkey_breast--sliced', label: '火雞胸片', state: 'sliced', yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 135, protein: 25, fat: 3, carbs: 0, sodium: 70,
    },
    substitutes: ['chicken_breast', 'duck_breast'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 火雞培根 ─────────────────────────────────────────────
  {
    id: 'turkey_bacon',
    name: '火雞培根',
    name_en: 'Turkey Bacon',
    categories: ['肉類'],
    variants: [
      { id: 'turkey_bacon--standard', label: '火雞培根', state: 'sliced', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 218, protein: 20, fat: 14, carbs: 2, sodium: 1100,
    },
    substitutes: ['bacon', 'ham'],
    allergens: [],
    storage_tip: '開封後冷藏，三天內食用；或分裝冷凍。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 雞絞肉 ───────────────────────────────────────────────
  {
    id: 'ground_chicken',
    name: '雞絞肉',
    name_en: 'Ground Chicken',
    categories: ['肉類'],
    variants: [
      { id: 'ground_chicken--breast', label: '雞胸絞肉',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'ground_chicken--thigh',  label: '雞腿絞肉',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'ground_chicken--cooked', label: '熟雞絞肉',   state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 172, protein: 20, fat: 10, carbs: 0, sodium: 75,
    },
    substitutes: ['ground_pork', 'ground_turkey'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存一個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豬肝 ─────────────────────────────────────────────────
  {
    id: 'pork_liver',
    name: '豬肝',
    name_en: 'Pork Liver',
    categories: ['肉類'],
    variants: [
      { id: 'pork_liver--raw',    label: '生豬肝',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'pork_liver--sliced', label: '豬肝片',   state: 'sliced', yield_ratio: 1.0  },
      { id: 'pork_liver--cooked', label: '熟豬肝',   state: 'cooked', yield_ratio: 0.8  },
    ],
    nutrition_per_100g: {
      calories: 134, protein: 21, fat: 4, carbs: 3, sodium: 74,
    },
    substitutes: ['chicken_liver', 'beef_liver'],
    allergens: [],
    storage_tip: '冷藏當天使用，或冷凍保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 雞肝 ─────────────────────────────────────────────────
  {
    id: 'chicken_liver',
    name: '雞肝',
    name_en: 'Chicken Liver',
    categories: ['肉類'],
    variants: [
      { id: 'chicken_liver--raw',    label: '生雞肝', state: 'raw',    yield_ratio: 1.0 },
      { id: 'chicken_liver--cooked', label: '熟雞肝', state: 'cooked', yield_ratio: 0.8 },
    ],
    nutrition_per_100g: {
      calories: 119, protein: 17, fat: 4.8, carbs: 0.7, sodium: 78,
    },
    substitutes: ['pork_liver', 'duck_liver'],
    allergens: [],
    storage_tip: '冷藏當天使用，或冷凍保存一個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 豬大腸 ───────────────────────────────────────────────
  {
    id: 'pork_intestine',
    name: '豬大腸',
    name_en: 'Pork Large Intestine',
    categories: ['肉類'],
    variants: [
      { id: 'pork_intestine--raw',    label: '生豬大腸', state: 'raw',    yield_ratio: 0.7 },
      { id: 'pork_intestine--cooked', label: '熟豬大腸', state: 'cooked', yield_ratio: 0.6 },
    ],
    nutrition_per_100g: {
      calories: 120, protein: 13, fat: 6, carbs: 2, sodium: 95,
    },
    substitutes: [],
    allergens: [],
    storage_tip: '清洗後冷藏當天使用，或冷凍保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 牛肚 ─────────────────────────────────────────────────
  {
    id: 'beef_tripe',
    name: '牛肚',
    name_en: 'Beef Tripe',
    categories: ['肉類'],
    variants: [
      { id: 'beef_tripe--raw',    label: '生牛肚', state: 'raw',    yield_ratio: 0.8  },
      { id: 'beef_tripe--cooked', label: '熟牛肚', state: 'cooked', yield_ratio: 0.7  },
    ],
    nutrition_per_100g: {
      calories: 97, protein: 14, fat: 4, carbs: 0.3, sodium: 97,
    },
    substitutes: ['pork_intestine'],
    allergens: [],
    storage_tip: '冷藏 1-2 天，冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豬血糕 ───────────────────────────────────────────────
  {
    id: 'pork_blood_cake',
    name: '豬血糕',
    name_en: 'Pork Blood Cake',
    categories: ['肉類'],
    variants: [
      { id: 'pork_blood_cake--standard', label: '豬血糕', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 121, protein: 8, fat: 2, carbs: 19, sodium: 290,
    },
    substitutes: [],
    allergens: [],
    storage_tip: '冷藏保存，三天內食用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 豬血 ─────────────────────────────────────────────────
  {
    id: 'pork_blood',
    name: '豬血',
    name_en: 'Pork Blood Curd',
    categories: ['肉類'],
    variants: [
      { id: 'pork_blood--cooked', label: '豬血塊', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 55, protein: 7, fat: 0.4, carbs: 5, sodium: 350,
    },
    substitutes: ['pork_blood_cake'],
    allergens: [],
    storage_tip: '冷藏保存，兩天內食用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 薩拉米 ───────────────────────────────────────────────
  {
    id: 'salami',
    name: '薩拉米',
    name_en: 'Salami',
    categories: ['肉類'],
    variants: [
      { id: 'salami--italian',  label: '義式薩拉米', state: 'cured',  yield_ratio: 1.0 },
      { id: 'salami--sliced',   label: '薩拉米片',   state: 'sliced', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 407, protein: 22, fat: 34, carbs: 2, sodium: 1740,
    },
    substitutes: ['pepperoni', 'ham'],
    allergens: [],
    storage_tip: '開封後冷藏，兩週內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 義式辣腸（Pepperoni）────────────────────────────────
  {
    id: 'pepperoni',
    name: '義式辣腸',
    name_en: 'Pepperoni',
    categories: ['肉類'],
    variants: [
      { id: 'pepperoni--sliced',   label: '義式辣腸片', state: 'sliced', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 494, protein: 20, fat: 44, carbs: 2, sodium: 1582,
    },
    substitutes: ['salami', 'chorizo'],
    allergens: [],
    storage_tip: '開封後冷藏，兩週內食用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 西班牙辣腸（Chorizo）────────────────────────────────
  {
    id: 'chorizo',
    name: '西班牙辣腸',
    name_en: 'Chorizo',
    categories: ['肉類'],
    variants: [
      { id: 'chorizo--spanish', label: '西班牙辣腸（乾式）', state: 'cured',  yield_ratio: 1.0 },
      { id: 'chorizo--mexican', label: '墨西哥辣腸（新鮮）', state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 455, protein: 24, fat: 38, carbs: 2, sodium: 1236,
    },
    substitutes: ['salami', 'pepperoni'],
    allergens: [],
    storage_tip: '乾式辣腸室溫保存；新鮮辣腸冷藏三天。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
