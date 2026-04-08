/**
 * @fileoverview 烹飪方法資料庫
 *
 * 分兩層：
 *  1. COOKING_METHODS — 可複用的「烹飪方法實體」，帶有具體參數
 *     （溫度、時間、器具等）
 *  2. 在 recipes.js 的每道食譜中，steps 可引用 method_id，
 *     也可在 recipe 層宣告 available_methods（同一道菜有多種作法）
 *
 * @typedef {Object} CookingMethodParams
 * @property {number}  [power_w]        - 微波功率（瓦）
 * @property {number}  [duration_s]     - 基礎時間（秒）
 * @property {number}  [temp_c]         - 溫度（°C）
 * @property {string}  [vessel]         - 建議容器（例：保鮮盒、鑄鐵鍋）
 * @property {boolean} [cover]          - 是否需要蓋蓋子
 * @property {string}  [cover_note]     - 蓋蓋說明（例：錯開留縫）
 * @property {string}  [heat_level]     - 火力（大火/中火/小火）
 *
 * @typedef {Object} CookingMethod
 * @property {string}             id           - snake_case 唯一 ID
 * @property {string}             name         - 顯示名稱
 * @property {string}             type         - 方法類型（見 METHOD_TYPES）
 * @property {string}             description  - 簡短說明
 * @property {CookingMethodParams} params      - 參數
 * @property {string[]}           suitable_for - 適合的食材 categories
 * @property {string[]}           tags         - 方法標籤（快速 / 無油煙 / 免顧爐 等）
 * @property {string}             [safety_note]- 安全注意事項
 */

// ============================================================
// 常數定義
// ============================================================

/** 烹飪方法類型 */
export const METHOD_TYPES = {
  microwave:  '微波',
  stir:       '攪拌',
  mix:        '混合',
  steam:      '蒸',
  stir_fry:   '炒',
  deep_fry:   '炸',
  stew:       '燉',
  roast:      '烤',
  marinate:   '醃漬',
};

// ============================================================
// 烹飪方法資料
// ============================================================

/** @type {CookingMethod[]} */
export const COOKING_METHODS = [

  // ── 微波 ─────────────────────────────────────────────────
  {
    id: 'microwave_600w_4min',
    name: '微波 600W × 4 分鐘',
    type: 'microwave',
    description: '適合冷凍麵條、加熱熟食。',
    params: {
      power_w: 600,
      duration_s: 240,
      vessel: '微波保鮮盒',
      cover: true,
      cover_note: '蓋子蓋上',
    },
    suitable_for: ['主食', '蛋白質', '蔬菜'],
    tags: ['快速', '免顧爐', '無油煙'],
    safety_note: '金屬容器不可微波。',
  },
  {
    id: 'microwave_600w_5min',
    name: '微波 600W × 5 分鐘',
    type: 'microwave',
    description: '適合食材量較多或需要更徹底加熱時。',
    params: {
      power_w: 600,
      duration_s: 300,
      vessel: '微波保鮮盒',
      cover: true,
      cover_note: '蓋子蓋上',
    },
    suitable_for: ['主食', '蛋白質'],
    tags: ['快速', '免顧爐'],
  },
  {
    id: 'microwave_600w_6min_vented',
    name: '微波 600W × 6 分鐘（錯開蓋）',
    type: 'microwave',
    description: '含生肉食材必須錯開蓋子讓蒸氣散出，避免氣爆，並確保肉品全熟。',
    params: {
      power_w: 600,
      duration_s: 360,
      vessel: '微波保鮮盒',
      cover: true,
      cover_note: '蓋子錯開留縫隙，讓蒸氣可以排出',
    },
    suitable_for: ['蛋白質', '主食', '蔬菜'],
    tags: ['快速', '免顧爐', '無油煙'],
    safety_note: '含生肉食材務必確認全熟，必要時追加加熱。',
  },

  // ── 炒 ──────────────────────────────────────────────────
  {
    id: 'stir_fry_high_heat',
    name: '大火快炒',
    type: 'stir_fry',
    description: '高溫短時間翻炒，保留食材口感與色澤。',
    params: {
      heat_level: '大火',
      duration_s: 180,
      vessel: '炒鍋',
    },
    suitable_for: ['蛋白質', '蔬菜', '主食'],
    tags: ['快速', '鑊氣'],
  },
  {
    id: 'stir_fry_medium_heat',
    name: '中火炒',
    type: 'stir_fry',
    description: '適合醬料類需要慢慢滲入食材的料理。',
    params: {
      heat_level: '中火',
      duration_s: 300,
      vessel: '炒鍋或平底鍋',
    },
    suitable_for: ['蛋白質', '蔬菜', '發酵食品'],
    tags: [],
  },

  // ── 煎 ──────────────────────────────────────────────────
  {
    id: 'pan_fry_medium',
    name: '中火乾煎',
    type: 'stir_fry',
    description: '平底鍋少油煎至金黃，適合培根、肉片、豆腐等。',
    params: {
      heat_level: '中火',
      duration_s: 240,
      vessel: '平底鍋',
      cover: false,
    },
    suitable_for: ['蛋白質', '乳製品'],
    tags: ['少油'],
  },

  // ── 水煮 ────────────────────────────────────────────────
  {
    id: 'boil_noodles',
    name: '滾水煮麵',
    type: 'stew',
    description: '大量滾水煮麵，待水再次滾起後計時。',
    params: {
      temp_c: 100,
      duration_s: 180,
      vessel: '湯鍋',
      cover: false,
    },
    suitable_for: ['主食'],
    tags: [],
  },
  {
    id: 'boil_simmer',
    name: '小火燉煮',
    type: 'stew',
    description: '食材加湯底以小火慢煮，讓風味融合。',
    params: {
      heat_level: '小火',
      temp_c: 90,
      duration_s: 900,
      vessel: '湯鍋或砂鍋',
      cover: true,
    },
    suitable_for: ['蛋白質', '蔬菜', '湯底'],
    tags: ['慢煮', '入味'],
  },

  // ── 汆燙 ────────────────────────────────────────────────
  {
    id: 'blanch_vegetables',
    name: '滾水汆燙蔬菜',
    type: 'stew',
    description: '沸水快速汆燙後冰鎮，保持色澤與脆度。',
    params: {
      temp_c: 100,
      duration_s: 60,
      vessel: '湯鍋',
      cover: false,
    },
    suitable_for: ['蔬菜'],
    tags: ['快速', '保色'],
  },

  // ── 氣炸 ────────────────────────────────────────────────
  {
    id: 'air_fry_200c_15min',
    name: '氣炸 200°C × 15 分鐘',
    type: 'roast',
    description: '少油高溫，外酥內嫩。',
    params: {
      temp_c: 200,
      duration_s: 900,
      vessel: '氣炸鍋',
    },
    suitable_for: ['蛋白質', '蔬菜'],
    tags: ['少油', '酥脆'],
  },

  // ── 生食/混合 ────────────────────────────────────────────
  {
    id: 'mix_raw',
    name: '生拌',
    type: 'mix',
    description: '熱食材拌入調味料、醬汁或生蛋，利用餘熱熟成。',
    params: {
      vessel: '碗或保鮮盒',
    },
    suitable_for: ['醬汁', '調味料', '乳製品'],
    tags: ['快速', '免火'],
  },
];

// ============================================================
// 查詢工具函式
// ============================================================

/**
 * @param {string} id
 * @returns {CookingMethod|undefined}
 */
export function getCookingMethod(id) {
  return COOKING_METHODS.find(m => m.id === id);
}

/**
 * 依 type 篩選方法
 * @param {string} type
 * @returns {CookingMethod[]}
 */
export function getMethodsByType(type) {
  return COOKING_METHODS.filter(m => m.type === type);
}

/**
 * 依食材 category 取得適合的烹飪方法
 * @param {string} category
 * @returns {CookingMethod[]}
 */
export function getMethodsForCategory(category) {
  return COOKING_METHODS.filter(m => m.suitable_for.includes(category));
}
