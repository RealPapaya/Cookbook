/**
 * @fileoverview 海鮮類食材
 * 包含：蝦、蟹、貝類、魚類、頭足類、海鮮加工品等蛋白質來源
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 白蝦 ─────────────────────────────────────────────────
  {
    id: 'shrimp_white',
    name: '白蝦',
    name_en: 'White Shrimp',
    categories: ['海鮮'],
    variants: [
      { id: 'shrimp_white--raw',      label: '生白蝦（帶殼）', state: 'raw',    yield_ratio: 0.7  },
      { id: 'shrimp_white--peeled',   label: '去殼白蝦',       state: 'raw',    yield_ratio: 1.0  },
      { id: 'shrimp_white--frozen',   label: '冷凍白蝦',       state: 'frozen', yield_ratio: 0.7  },
      { id: 'shrimp_white--cooked',   label: '熟白蝦',         state: 'cooked', yield_ratio: 0.65 },
    ],
    nutrition_per_100g: {
      calories: 85, protein: 18, fat: 0.9, carbs: 0.9, sodium: 119,
    },
    substitutes: ['shrimp_prawn', 'shrimp_frozen'],
    allergens: ['shellfish'],
    storage_tip: '生蝦冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 草蝦 ─────────────────────────────────────────────────
  {
    id: 'shrimp_prawn',
    name: '草蝦',
    name_en: 'Tiger Prawn',
    categories: ['海鮮'],
    variants: [
      { id: 'shrimp_prawn--raw',    label: '生草蝦（帶殼）', state: 'raw',    yield_ratio: 0.65 },
      { id: 'shrimp_prawn--peeled', label: '去殼草蝦',       state: 'raw',    yield_ratio: 1.0  },
      { id: 'shrimp_prawn--cooked', label: '熟草蝦',         state: 'cooked', yield_ratio: 0.6  },
    ],
    nutrition_per_100g: {
      calories: 90, protein: 19, fat: 1.0, carbs: 0.8, sodium: 148,
    },
    substitutes: ['shrimp_white', 'shrimp_frozen'],
    allergens: ['shellfish'],
    storage_tip: '生蝦冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 冷凍蝦仁 ─────────────────────────────────────────────
  {
    id: 'shrimp_frozen',
    name: '冷凍蝦仁',
    name_en: 'Frozen Shrimp',
    categories: ['海鮮'],
    variants: [
      { id: 'shrimp_frozen--standard', label: '冷凍蝦仁', state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 84, protein: 18, fat: 0.9, carbs: 0.7, sodium: 250,
    },
    substitutes: ['shrimp_white', 'shrimp_prawn'],
    allergens: ['shellfish'],
    tastes: ['鹹'],
    textures: ['嚼勁', '多汁'],
    storage_tip: '冷凍可保存三個月；烹調前於冷藏解凍。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 乾蝦米 ───────────────────────────────────────────────
  {
    id: 'dried_shrimp',
    name: '蝦米',
    name_en: 'Dried Shrimp',
    categories: ['海鮮'],
    variants: [
      { id: 'dried_shrimp--small',  label: '小蝦米',   state: 'dried', yield_ratio: 1.0 },
      { id: 'dried_shrimp--medium', label: '中蝦米',   state: 'dried', yield_ratio: 1.0 },
      { id: 'dried_shrimp--large',  label: '大蝦米',   state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 297, protein: 57, fat: 3, carbs: 4, sodium: 3020,
    },
    substitutes: [],
    allergens: ['shellfish'],
    storage_tip: '密封後冷藏，可保存六個月；冷凍可延長至一年。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 花枝（墨魚）─────────────────────────────────────────
  {
    id: 'cuttlefish',
    name: '花枝',
    name_en: 'Cuttlefish',
    categories: ['海鮮'],
    variants: [
      { id: 'cuttlefish--whole',   label: '整隻花枝',   state: 'raw',    yield_ratio: 0.6  },
      { id: 'cuttlefish--cleaned', label: '清理花枝',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'cuttlefish--rings',   label: '花枝圈',     state: 'raw',    yield_ratio: 1.0  },
      { id: 'cuttlefish--cooked',  label: '熟花枝',     state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 79, protein: 16, fat: 1, carbs: 0.8, sodium: 260,
    },
    substitutes: ['squid', 'octopus'],
    allergens: ['shellfish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 透抽（魷魚）─────────────────────────────────────────
  {
    id: 'squid',
    name: '透抽',
    name_en: 'Squid',
    categories: ['海鮮'],
    variants: [
      { id: 'squid--whole',   label: '整隻透抽', state: 'raw',    yield_ratio: 0.65 },
      { id: 'squid--rings',   label: '透抽圈',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'squid--cooked',  label: '熟透抽',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 92, protein: 16, fat: 1.4, carbs: 3, sodium: 230,
    },
    substitutes: ['cuttlefish', 'octopus'],
    allergens: ['shellfish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 乾魷魚 ───────────────────────────────────────────────
  {
    id: 'dried_squid',
    name: '乾魷魚',
    name_en: 'Dried Squid',
    categories: ['海鮮'],
    variants: [
      { id: 'dried_squid--whole',  label: '整條乾魷魚', state: 'dried', yield_ratio: 1.0 },
      { id: 'dried_squid--shred',  label: '魷魚絲',     state: 'dried', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 295, protein: 52, fat: 4, carbs: 9, sodium: 1600,
    },
    substitutes: ['dried_shrimp'],
    allergens: ['shellfish'],
    storage_tip: '密封冷藏，可保存六個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 章魚 ─────────────────────────────────────────────────
  {
    id: 'octopus',
    name: '章魚',
    name_en: 'Octopus',
    categories: ['海鮮'],
    variants: [
      { id: 'octopus--raw',        label: '生章魚',       state: 'raw',    yield_ratio: 0.7  },
      { id: 'octopus--cooked',     label: '熟章魚',       state: 'cooked', yield_ratio: 0.6  },
      { id: 'octopus--baby',       label: '小章魚',       state: 'raw',    yield_ratio: 0.8  },
    ],
    nutrition_per_100g: {
      calories: 82, protein: 15, fat: 1, carbs: 2.2, sodium: 230,
    },
    substitutes: ['squid', 'cuttlefish'],
    allergens: ['shellfish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 蛤蜊 ─────────────────────────────────────────────────
  {
    id: 'clam',
    name: '蛤蜊',
    name_en: 'Clam',
    categories: ['海鮮'],
    variants: [
      { id: 'clam--live',     label: '活蛤蜊',     state: 'raw',    yield_ratio: 0.35 },
      { id: 'clam--shucked',  label: '去殼蛤蜊',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'clam--cooked',   label: '熟蛤蜊',     state: 'cooked', yield_ratio: 0.3  },
    ],
    nutrition_per_100g: {
      calories: 74, protein: 13, fat: 1, carbs: 3, sodium: 56,
    },
    substitutes: ['mussel', 'oyster'],
    allergens: ['shellfish'],
    storage_tip: '活蛤蜊冷藏吐沙後當天使用；蛤蜊肉冷藏兩天。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 牡蠣（蚵仔）─────────────────────────────────────────
  {
    id: 'oyster',
    name: '蚵仔',
    name_en: 'Oyster',
    categories: ['海鮮'],
    variants: [
      { id: 'oyster--shucked',  label: '去殼蚵仔（生）', state: 'raw',    yield_ratio: 1.0 },
      { id: 'oyster--live',     label: '活牡蠣',         state: 'raw',    yield_ratio: 0.2 },
      { id: 'oyster--cooked',   label: '熟蚵仔',         state: 'cooked', yield_ratio: 0.7 },
      { id: 'oyster--dried',    label: '乾蚵',           state: 'dried',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 68, protein: 7, fat: 2, carbs: 4, sodium: 211,
    },
    substitutes: ['clam', 'mussel'],
    allergens: ['shellfish'],
    storage_tip: '冷藏當天使用；乾蚵密封冷藏，可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 淡菜（孔雀蛤）───────────────────────────────────────
  {
    id: 'mussel',
    name: '淡菜',
    name_en: 'Mussel',
    categories: ['海鮮'],
    variants: [
      { id: 'mussel--live',    label: '活淡菜',     state: 'raw',    yield_ratio: 0.3  },
      { id: 'mussel--shucked', label: '去殼淡菜',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'mussel--cooked',  label: '熟淡菜',     state: 'cooked', yield_ratio: 0.28 },
      { id: 'mussel--dried',   label: '乾淡菜',     state: 'dried',  yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 86, protein: 12, fat: 2.2, carbs: 4, sodium: 286,
    },
    substitutes: ['clam', 'oyster'],
    allergens: ['shellfish'],
    storage_tip: '活淡菜冷藏兩天；去殼淡菜冷藏當天使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 干貝 ─────────────────────────────────────────────────
  {
    id: 'scallop',
    name: '干貝',
    name_en: 'Scallop',
    categories: ['海鮮'],
    variants: [
      { id: 'scallop--fresh',  label: '新鮮干貝',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'scallop--frozen', label: '冷凍干貝',   state: 'frozen', yield_ratio: 1.0  },
      { id: 'scallop--dried',  label: '乾干貝',     state: 'dried',  yield_ratio: 1.0  },
      { id: 'scallop--cooked', label: '熟干貝',     state: 'cooked', yield_ratio: 0.7  },
    ],
    nutrition_per_100g: {
      calories: 88, protein: 17, fat: 0.8, carbs: 3, sodium: 161,
    },
    substitutes: ['oyster', 'clam'],
    allergens: ['shellfish'],
    storage_tip: '新鮮干貝冷藏當天使用；冷凍可保存三個月；乾干貝密封冷藏六個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 螃蟹 ─────────────────────────────────────────────────
  {
    id: 'crab',
    name: '螃蟹',
    name_en: 'Crab',
    categories: ['海鮮'],
    variants: [
      { id: 'crab--live',    label: '活螃蟹',   state: 'raw',    yield_ratio: 0.35 },
      { id: 'crab--cooked',  label: '熟螃蟹',   state: 'cooked', yield_ratio: 0.3  },
      { id: 'crab--meat',    label: '蟹肉',     state: 'cooked', yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 97, protein: 19, fat: 1.5, carbs: 0, sodium: 293,
    },
    substitutes: ['lobster', 'shrimp_white'],
    allergens: ['shellfish'],
    storage_tip: '活螃蟹當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 龍蝦 ─────────────────────────────────────────────────
  {
    id: 'lobster',
    name: '龍蝦',
    name_en: 'Lobster',
    categories: ['海鮮'],
    variants: [
      { id: 'lobster--live',   label: '活龍蝦',   state: 'raw',    yield_ratio: 0.3  },
      { id: 'lobster--tail',   label: '龍蝦尾',   state: 'raw',    yield_ratio: 0.5  },
      { id: 'lobster--cooked', label: '熟龍蝦',   state: 'cooked', yield_ratio: 0.28 },
    ],
    nutrition_per_100g: {
      calories: 98, protein: 19, fat: 1.1, carbs: 0.5, sodium: 296,
    },
    substitutes: ['crab', 'shrimp_prawn'],
    allergens: ['shellfish'],
    storage_tip: '活龍蝦當天使用；冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鮭魚 ─────────────────────────────────────────────────
  {
    id: 'salmon',
    name: '鮭魚',
    name_en: 'Salmon',
    categories: ['海鮮'],
    variants: [
      { id: 'salmon--fillet',  label: '鮭魚排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'salmon--slice',   label: '鮭魚片',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'salmon--cooked',  label: '熟鮭魚',   state: 'cooked', yield_ratio: 0.8  },
      { id: 'salmon--smoked',  label: '煙燻鮭魚', state: 'smoked', yield_ratio: 1.0  },
      { id: 'salmon--sashimi', label: '鮭魚生魚片', state: 'raw',  yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 208, protein: 20, fat: 13, carbs: 0, sodium: 59,
    },
    substitutes: ['tuna', 'trout'],
    allergens: ['fish'],
    storage_tip: '冷藏當天或隔天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 煙燻鮭魚 ─────────────────────────────────────────────
  {
    id: 'smoked_salmon',
    name: '煙燻鮭魚',
    name_en: 'Smoked Salmon',
    categories: ['海鮮'],
    variants: [
      { id: 'smoked_salmon--sliced',   label: '煙燻鮭魚片', state: 'smoked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 177, protein: 18, fat: 10, carbs: 0, sodium: 784,
    },
    substitutes: ['salmon', 'tuna'],
    allergens: ['fish'],
    storage_tip: '開封後冷藏，兩週內使用；或冷凍保存。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鮪魚（生鮮）─────────────────────────────────────────
  {
    id: 'tuna',
    name: '鮪魚',
    name_en: 'Tuna',
    categories: ['海鮮'],
    variants: [
      { id: 'tuna--steak',    label: '鮪魚排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'tuna--sashimi',  label: '鮪魚生魚片', state: 'raw',  yield_ratio: 1.0  },
      { id: 'tuna--cooked',   label: '熟鮪魚',   state: 'cooked', yield_ratio: 0.78 },
    ],
    nutrition_per_100g: {
      calories: 184, protein: 30, fat: 6, carbs: 0, sodium: 39,
    },
    substitutes: ['salmon', 'swordfish'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鮪魚罐頭 ─────────────────────────────────────────────
  {
    id: 'canned_tuna',
    name: '鮪魚罐頭',
    name_en: 'Canned Tuna',
    categories: ['海鮮'],
    variants: [
      { id: 'canned_tuna--in_water', label: '水漬鮪魚罐', state: 'cooked', yield_ratio: 1.0 },
      { id: 'canned_tuna--in_oil',   label: '油漬鮪魚罐', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 116, protein: 26, fat: 1, carbs: 0, sodium: 330,
    },
    substitutes: ['canned_sardine', 'tuna'],
    allergens: ['fish'],
    storage_tip: '未開封常溫保存；開封後冷藏，三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鱈魚 ─────────────────────────────────────────────────
  {
    id: 'cod',
    name: '鱈魚',
    name_en: 'Cod',
    categories: ['海鮮'],
    variants: [
      { id: 'cod--fillet',  label: '鱈魚排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'cod--frozen',  label: '冷凍鱈魚', state: 'frozen', yield_ratio: 1.0  },
      { id: 'cod--cooked',  label: '熟鱈魚',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 82, protein: 18, fat: 0.7, carbs: 0, sodium: 54,
    },
    substitutes: ['tilapia', 'sea_bass'],
    allergens: ['fish'],
    storage_tip: '冷藏當天或隔天使用；冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鱸魚 ─────────────────────────────────────────────────
  {
    id: 'sea_bass',
    name: '鱸魚',
    name_en: 'Sea Bass',
    categories: ['海鮮'],
    variants: [
      { id: 'sea_bass--whole',  label: '整尾鱸魚',   state: 'raw',    yield_ratio: 0.45 },
      { id: 'sea_bass--fillet', label: '鱸魚排',     state: 'raw',    yield_ratio: 1.0  },
      { id: 'sea_bass--cooked', label: '熟鱸魚',     state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 97, protein: 19, fat: 2, carbs: 0, sodium: 68,
    },
    substitutes: ['tilapia', 'cod', 'grouper'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 吳郭魚（台灣鯛）─────────────────────────────────────
  {
    id: 'tilapia',
    name: '吳郭魚',
    name_en: 'Tilapia',
    categories: ['海鮮'],
    variants: [
      { id: 'tilapia--whole',  label: '整尾吳郭魚', state: 'raw',    yield_ratio: 0.45 },
      { id: 'tilapia--fillet', label: '吳郭魚片',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'tilapia--cooked', label: '熟吳郭魚',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 96, protein: 20, fat: 1.7, carbs: 0, sodium: 52,
    },
    substitutes: ['sea_bass', 'cod'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鯖魚 ─────────────────────────────────────────────────
  {
    id: 'mackerel',
    name: '鯖魚',
    name_en: 'Mackerel',
    categories: ['海鮮'],
    variants: [
      { id: 'mackerel--whole',    label: '整尾鯖魚',   state: 'raw',    yield_ratio: 0.5  },
      { id: 'mackerel--fillet',   label: '鯖魚排',     state: 'raw',    yield_ratio: 1.0  },
      { id: 'mackerel--salted',   label: '鹽漬鯖魚',   state: 'cured',  yield_ratio: 1.0  },
      { id: 'mackerel--cooked',   label: '熟鯖魚',     state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 205, protein: 19, fat: 14, carbs: 0, sodium: 90,
    },
    substitutes: ['sardine', 'salmon'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月；鹽漬鯖魚冷藏可保存一週。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 沙丁魚 ───────────────────────────────────────────────
  {
    id: 'sardine',
    name: '沙丁魚',
    name_en: 'Sardine',
    categories: ['海鮮'],
    variants: [
      { id: 'sardine--fresh',  label: '新鮮沙丁魚', state: 'raw',    yield_ratio: 0.6  },
      { id: 'sardine--canned', label: '沙丁魚罐頭', state: 'cooked', yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 208, protein: 25, fat: 11, carbs: 0, sodium: 505,
    },
    substitutes: ['mackerel', 'anchovy'],
    allergens: ['fish'],
    storage_tip: '新鮮沙丁魚冷藏當天使用；罐頭未開封常溫保存。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 沙丁魚罐頭 ───────────────────────────────────────────
  {
    id: 'canned_sardine',
    name: '沙丁魚罐頭',
    name_en: 'Canned Sardine',
    categories: ['海鮮'],
    variants: [
      { id: 'canned_sardine--in_oil',   label: '油漬沙丁魚罐', state: 'cooked', yield_ratio: 1.0 },
      { id: 'canned_sardine--in_tomato',label: '番茄沙丁魚罐', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 191, protein: 23, fat: 10, carbs: 1, sodium: 505,
    },
    substitutes: ['canned_tuna', 'sardine'],
    allergens: ['fish'],
    storage_tip: '未開封常溫保存；開封後冷藏，三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鯷魚 ─────────────────────────────────────────────────
  {
    id: 'anchovy',
    name: '鯷魚',
    name_en: 'Anchovy',
    categories: ['海鮮'],
    variants: [
      { id: 'anchovy--canned',  label: '鯷魚罐頭', state: 'cured',  yield_ratio: 1.0 },
      { id: 'anchovy--dried',   label: '小魚乾',   state: 'dried',  yield_ratio: 1.0 },
      { id: 'anchovy--paste',   label: '鯷魚醬',   state: 'paste',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 210, protein: 29, fat: 10, carbs: 0, sodium: 3668,
    },
    substitutes: ['sardine'],
    allergens: ['fish'],
    storage_tip: '罐頭開封後冷藏，一週內使用；小魚乾密封冷藏可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 比目魚 ───────────────────────────────────────────────
  {
    id: 'flounder',
    name: '比目魚',
    name_en: 'Flounder',
    categories: ['海鮮'],
    variants: [
      { id: 'flounder--fillet', label: '比目魚排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'flounder--whole',  label: '整尾比目魚', state: 'raw',    yield_ratio: 0.45 },
      { id: 'flounder--cooked', label: '熟比目魚',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 91, protein: 19, fat: 1.2, carbs: 0, sodium: 81,
    },
    substitutes: ['cod', 'tilapia'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 午仔魚（紅衫）────────────────────────────────────────
  {
    id: 'yellowtail',
    name: '午仔魚',
    name_en: 'Yellowtail',
    categories: ['海鮮'],
    variants: [
      { id: 'yellowtail--fillet',  label: '午仔魚排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'yellowtail--whole',   label: '整尾午仔魚', state: 'raw',    yield_ratio: 0.5  },
      { id: 'yellowtail--sashimi', label: '午仔魚生魚片', state: 'raw',  yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 146, protein: 23, fat: 5.4, carbs: 0, sodium: 40,
    },
    substitutes: ['sea_bass', 'snapper'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 紅魽（鯛魚）─────────────────────────────────────────
  {
    id: 'sea_bream',
    name: '鯛魚',
    name_en: 'Sea Bream',
    categories: ['海鮮'],
    variants: [
      { id: 'sea_bream--whole',   label: '整尾鯛魚', state: 'raw',    yield_ratio: 0.45 },
      { id: 'sea_bream--fillet',  label: '鯛魚排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'sea_bream--cooked',  label: '熟鯛魚',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 115, protein: 21, fat: 3, carbs: 0, sodium: 69,
    },
    substitutes: ['snapper', 'sea_bass'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 石斑魚 ───────────────────────────────────────────────
  {
    id: 'grouper',
    name: '石斑魚',
    name_en: 'Grouper',
    categories: ['海鮮'],
    variants: [
      { id: 'grouper--whole',  label: '整尾石斑魚', state: 'raw',    yield_ratio: 0.45 },
      { id: 'grouper--fillet', label: '石斑魚排',   state: 'raw',    yield_ratio: 1.0  },
      { id: 'grouper--cooked', label: '熟石斑魚',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 92, protein: 19, fat: 1.3, carbs: 0, sodium: 60,
    },
    substitutes: ['sea_bass', 'sea_bream'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 紅鯛（嘉臘魚）───────────────────────────────────────
  {
    id: 'snapper',
    name: '紅鯛',
    name_en: 'Red Snapper',
    categories: ['海鮮'],
    variants: [
      { id: 'snapper--whole',  label: '整尾紅鯛', state: 'raw',    yield_ratio: 0.45 },
      { id: 'snapper--fillet', label: '紅鯛魚排', state: 'raw',    yield_ratio: 1.0  },
      { id: 'snapper--cooked', label: '熟紅鯛',   state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 100, protein: 20, fat: 1.3, carbs: 0, sodium: 64,
    },
    substitutes: ['sea_bream', 'grouper'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鰻魚 ─────────────────────────────────────────────────
  {
    id: 'eel',
    name: '鰻魚',
    name_en: 'Eel',
    categories: ['海鮮'],
    variants: [
      { id: 'eel--fresh',     label: '新鮮鰻魚',     state: 'raw',    yield_ratio: 0.6  },
      { id: 'eel--kabayaki',  label: '蒲燒鰻',       state: 'cooked', yield_ratio: 1.0  },
      { id: 'eel--frozen',    label: '冷凍蒲燒鰻',   state: 'frozen', yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 236, protein: 18, fat: 17, carbs: 0.3, sodium: 72,
    },
    substitutes: ['salmon', 'mackerel'],
    allergens: ['fish'],
    storage_tip: '新鮮鰻魚冷藏當天使用；蒲燒鰻冷藏一週、冷凍三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 旗魚 ─────────────────────────────────────────────────
  {
    id: 'swordfish',
    name: '旗魚',
    name_en: 'Swordfish',
    categories: ['海鮮'],
    variants: [
      { id: 'swordfish--steak',  label: '旗魚排', state: 'raw',    yield_ratio: 1.0  },
      { id: 'swordfish--cooked', label: '熟旗魚', state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 144, protein: 20, fat: 7, carbs: 0, sodium: 90,
    },
    substitutes: ['tuna', 'salmon'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 虱目魚 ───────────────────────────────────────────────
  {
    id: 'milkfish',
    name: '虱目魚',
    name_en: 'Milkfish',
    categories: ['海鮮'],
    variants: [
      { id: 'milkfish--whole',    label: '整尾虱目魚',   state: 'raw',    yield_ratio: 0.45 },
      { id: 'milkfish--fillet',   label: '虱目魚肚',     state: 'raw',    yield_ratio: 1.0  },
      { id: 'milkfish--boneless', label: '無刺虱目魚',   state: 'raw',    yield_ratio: 0.8  },
      { id: 'milkfish--cooked',   label: '熟虱目魚',     state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 148, protein: 21, fat: 6.6, carbs: 0, sodium: 53,
    },
    substitutes: ['tilapia', 'sea_bass'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 魚板 ─────────────────────────────────────────────────
  {
    id: 'fish_cake',
    name: '魚板',
    name_en: 'Fish Cake',
    categories: ['海鮮'],
    variants: [
      { id: 'fish_cake--white',   label: '白魚板',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'fish_cake--red',     label: '紅邊魚板', state: 'cooked', yield_ratio: 1.0 },
      { id: 'fish_cake--frozen',  label: '冷凍魚板', state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 96, protein: 9, fat: 0.9, carbs: 13, sodium: 1100,
    },
    substitutes: ['fish_ball', 'crab_stick'],
    allergens: ['fish'],
    storage_tip: '開封後冷藏，三天內使用；冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 魚丸 ─────────────────────────────────────────────────
  {
    id: 'fish_ball',
    name: '魚丸',
    name_en: 'Fish Ball',
    categories: ['海鮮'],
    variants: [
      { id: 'fish_ball--plain',    label: '普通魚丸',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'fish_ball--stuffed',  label: '包餡魚丸',   state: 'cooked', yield_ratio: 1.0 },
      { id: 'fish_ball--frozen',   label: '冷凍魚丸',   state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 110, protein: 11, fat: 2, carbs: 13, sodium: 620,
    },
    substitutes: ['fish_cake', 'chicken_meatball'],
    allergens: ['fish'],
    storage_tip: '開封後冷藏，三天內使用；冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 蟹肉棒（蟹味棒）─────────────────────────────────────
  {
    id: 'crab_stick',
    name: '蟹味棒',
    name_en: 'Crab Stick',
    categories: ['海鮮'],
    variants: [
      { id: 'crab_stick--standard', label: '蟹味棒', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 95, protein: 8, fat: 0.5, carbs: 15, sodium: 700,
    },
    substitutes: ['fish_cake', 'fish_ball'],
    allergens: ['fish', 'shellfish'],
    storage_tip: '開封後冷藏，三天內使用；冷凍可保存一個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 海參 ─────────────────────────────────────────────────
  {
    id: 'sea_cucumber',
    name: '海參',
    name_en: 'Sea Cucumber',
    categories: ['海鮮'],
    variants: [
      { id: 'sea_cucumber--fresh',   label: '新鮮海參',   state: 'raw',    yield_ratio: 0.5  },
      { id: 'sea_cucumber--dried',   label: '乾海參',     state: 'dried',  yield_ratio: 1.0  },
      { id: 'sea_cucumber--cooked',  label: '熟海參',     state: 'cooked', yield_ratio: 0.45 },
    ],
    nutrition_per_100g: {
      calories: 54, protein: 11, fat: 0.5, carbs: 1.3, sodium: 143,
    },
    substitutes: [],
    allergens: ['shellfish'],
    storage_tip: '新鮮海參冷藏當天使用；乾海參密封常溫保存，發泡後冷藏三天。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鮑魚 ─────────────────────────────────────────────────
  {
    id: 'abalone',
    name: '鮑魚',
    name_en: 'Abalone',
    categories: ['海鮮'],
    variants: [
      { id: 'abalone--fresh',  label: '新鮮鮑魚',   state: 'raw',    yield_ratio: 0.6  },
      { id: 'abalone--canned', label: '鮑魚罐頭',   state: 'cooked', yield_ratio: 1.0  },
      { id: 'abalone--dried',  label: '乾鮑魚',     state: 'dried',  yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 105, protein: 17, fat: 0.8, carbs: 6, sodium: 301,
    },
    substitutes: ['scallop', 'sea_cucumber'],
    allergens: ['shellfish'],
    storage_tip: '新鮮鮑魚冷藏當天使用；罐頭開封後冷藏三天；乾鮑魚密封常溫保存。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 海膽 ─────────────────────────────────────────────────
  {
    id: 'sea_urchin',
    name: '海膽',
    name_en: 'Sea Urchin',
    categories: ['海鮮'],
    variants: [
      { id: 'sea_urchin--fresh',   label: '新鮮海膽',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'sea_urchin--jarred',  label: '罐裝海膽',   state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 172, protein: 13, fat: 6, carbs: 11, sodium: 233,
    },
    substitutes: [],
    allergens: ['shellfish'],
    storage_tip: '新鮮海膽冷藏當天使用；罐裝開封後冷藏兩天。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 花椰菜蝦餅（蝦餅）───────────────────────────────────
  {
    id: 'shrimp_cake',
    name: '蝦餅',
    name_en: 'Shrimp Cake',
    categories: ['海鮮'],
    variants: [
      { id: 'shrimp_cake--frozen', label: '冷凍蝦餅', state: 'frozen', yield_ratio: 1.0 },
      { id: 'shrimp_cake--raw',    label: '自製蝦餅', state: 'raw',    yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 140, protein: 12, fat: 5, carbs: 12, sodium: 580,
    },
    substitutes: ['fish_cake', 'fish_ball'],
    allergens: ['shellfish', 'egg'],
    storage_tip: '冷凍保存，烹調前解凍即可。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 花枝丸 ───────────────────────────────────────────────
  {
    id: 'cuttlefish_ball',
    name: '花枝丸',
    name_en: 'Cuttlefish Ball',
    categories: ['海鮮'],
    variants: [
      { id: 'cuttlefish_ball--frozen', label: '冷凍花枝丸', state: 'frozen', yield_ratio: 1.0 },
      { id: 'cuttlefish_ball--cooked', label: '熟花枝丸',   state: 'cooked', yield_ratio: 0.95 },
    ],
    nutrition_per_100g: {
      calories: 115, protein: 10, fat: 2.5, carbs: 14, sodium: 650,
    },
    substitutes: ['fish_ball', 'shrimp_cake'],
    allergens: ['shellfish'],
    storage_tip: '冷凍保存，開封後冷藏三天內使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鱒魚 ─────────────────────────────────────────────────
  {
    id: 'trout',
    name: '鱒魚',
    name_en: 'Trout',
    categories: ['海鮮'],
    variants: [
      { id: 'trout--rainbow',  label: '彩虹鱒魚排', state: 'raw',    yield_ratio: 1.0  },
      { id: 'trout--whole',    label: '整尾鱒魚',   state: 'raw',    yield_ratio: 0.5  },
      { id: 'trout--smoked',   label: '煙燻鱒魚',   state: 'smoked', yield_ratio: 1.0  },
    ],
    nutrition_per_100g: {
      calories: 141, protein: 20, fat: 6, carbs: 0, sodium: 52,
    },
    substitutes: ['salmon', 'cod'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鰹魚（柴魚原料）─────────────────────────────────────
  {
    id: 'bonito',
    name: '鰹魚',
    name_en: 'Bonito',
    categories: ['海鮮'],
    variants: [
      { id: 'bonito--fresh',     label: '新鮮鰹魚',   state: 'raw',    yield_ratio: 0.6 },
      { id: 'bonito--tataki',    label: '鰹魚半敲燒', state: 'cooked', yield_ratio: 1.0 },
      { id: 'bonito--dried',     label: '柴魚片',     state: 'dried',  yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 165, protein: 26, fat: 6, carbs: 0, sodium: 41,
    },
    substitutes: ['tuna', 'mackerel'],
    allergens: ['fish'],
    storage_tip: '新鮮鰹魚冷藏當天使用；柴魚片密封陰涼處保存，開封後冷藏。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鯰魚 ─────────────────────────────────────────────────
  {
    id: 'catfish',
    name: '鯰魚',
    name_en: 'Catfish',
    categories: ['海鮮'],
    variants: [
      { id: 'catfish--fillet',  label: '鯰魚排', state: 'raw',    yield_ratio: 1.0  },
      { id: 'catfish--whole',   label: '整尾鯰魚', state: 'raw',  yield_ratio: 0.5  },
      { id: 'catfish--cooked',  label: '熟鯰魚', state: 'cooked', yield_ratio: 0.75 },
    ],
    nutrition_per_100g: {
      calories: 105, protein: 18, fat: 2.8, carbs: 0, sodium: 53,
    },
    substitutes: ['tilapia', 'cod'],
    allergens: ['fish'],
    storage_tip: '冷藏當天使用；冷凍可保存三個月。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

  // ── 鯛魚罐頭 ─────────────────────────────────────────────
  {
    id: 'canned_sea_bream',
    name: '鯖魚罐頭',
    name_en: 'Canned Mackerel',
    categories: ['海鮮'],
    variants: [
      { id: 'canned_sea_bream--in_water', label: '水煮鯖魚罐', state: 'cooked', yield_ratio: 1.0 },
      { id: 'canned_sea_bream--miso',     label: '味噌鯖魚罐', state: 'cooked', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 167, protein: 19, fat: 10, carbs: 0, sodium: 480,
    },
    substitutes: ['canned_tuna', 'canned_sardine'],
    allergens: ['fish'],
    storage_tip: '未開封常溫保存；開封後冷藏，三天內使用。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鮭魚卵 ───────────────────────────────────────────────
  {
    id: 'salmon_roe',
    name: '鮭魚卵',
    name_en: 'Salmon Roe',
    categories: ['海鮮'],
    variants: [
      { id: 'salmon_roe--ikura',  label: '醬油漬鮭魚卵', state: 'cured', yield_ratio: 1.0 },
      { id: 'salmon_roe--fresh',  label: '新鮮鮭魚卵',   state: 'raw',   yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 250, protein: 29, fat: 14, carbs: 1.5, sodium: 780,
    },
    substitutes: ['sea_urchin'],
    allergens: ['fish'],
    storage_tip: '冷藏保存，開封後兩天內使用；或冷凍保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 飛魚卵 ───────────────────────────────────────────────
  {
    id: 'flying_fish_roe',
    name: '飛魚卵',
    name_en: 'Flying Fish Roe',
    categories: ['海鮮'],
    variants: [
      { id: 'flying_fish_roe--tobiko',  label: '飛魚卵（橙色）', state: 'raw', yield_ratio: 1.0 },
      { id: 'flying_fish_roe--wasabi',  label: '芥末飛魚卵',     state: 'raw', yield_ratio: 1.0 },
      { id: 'flying_fish_roe--squid',   label: '墨魚飛魚卵',     state: 'raw', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 280, protein: 40, fat: 9, carbs: 5, sodium: 875,
    },
    substitutes: ['salmon_roe'],
    allergens: ['fish'],
    storage_tip: '冷藏保存，開封後三天內使用；或冷凍保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 海草蝦（蝦泥）───────────────────────────────────────
  {
    id: 'shrimp_paste',
    name: '蝦漿',
    name_en: 'Shrimp Paste',
    categories: ['海鮮'],
    variants: [
      { id: 'shrimp_paste--raw',    label: '生蝦漿',   state: 'raw',    yield_ratio: 1.0 },
      { id: 'shrimp_paste--frozen', label: '冷凍蝦漿', state: 'frozen', yield_ratio: 1.0 },
    ],
    nutrition_per_100g: {
      calories: 95, protein: 18, fat: 1.5, carbs: 2, sodium: 480,
    },
    substitutes: ['shrimp_white', 'shrimp_cake'],
    allergens: ['shellfish'],
    storage_tip: '冷藏當天使用；冷凍可保存一個月。',
    verified_source: 'https://fooddb.mext.go.jp/',
    verified_at: '2024-11-01',
  },

  // ── 鮮蝦丸 ───────────────────────────────────────────────
  {
    id: 'shrimp_ball',
    name: '蝦丸',
    name_en: 'Shrimp Ball',
    categories: ['海鮮'],
    variants: [
      { id: 'shrimp_ball--frozen', label: '冷凍蝦丸', state: 'frozen', yield_ratio: 1.0 },
      { id: 'shrimp_ball--raw',    label: '自製蝦丸', state: 'raw',    yield_ratio: 1.0 },
      { id: 'shrimp_ball--cooked', label: '熟蝦丸',   state: 'cooked', yield_ratio: 0.9 },
    ],
    nutrition_per_100g: {
      calories: 105, protein: 14, fat: 2, carbs: 9, sodium: 550,
    },
    substitutes: ['fish_ball', 'cuttlefish_ball'],
    allergens: ['shellfish'],
    storage_tip: '冷凍保存，開封後冷藏三天內使用。',
    verified_source: 'https://fdc.nal.usda.gov/',
    verified_at: '2024-11-01',
  },

];
