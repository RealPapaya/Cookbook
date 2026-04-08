/**
 * @fileoverview 食譜資料庫
 *
 * 食譜結構說明：
 *
 * 每道食譜（Recipe）由以下三個核心部分組成：
 *  1. 基本資訊（metadata）
 *  2. 食材清單（ingredients）— 每個項目引用 ingredients.js 的 variant_id
 *  3. 版本/作法（versions）— 同一道菜的不同烹飪方式，每個版本有自己的 steps
 *     並引用 cooking-methods.js 的 method_id
 *
 * @typedef {Object} RecipeIngredientRef
 * @property {string}  ingredient_id   - 對應 INGREDIENTS 的 base id
 * @property {string}  variant_id      - 對應 variant.id（含加工狀態）
 * @property {number}  qty             - 數量（null = 適量）
 * @property {string}  unit            - 單位
 * @property {boolean} scalable        - 是否隨份量等比例縮放
 * @property {boolean} optional        - 是否為選填食材
 * @property {boolean} is_seasoning    - 是否為調味料（對應原本的 star）
 * @property {string}  [note]          - 備註（例：「盡量鋪平不要重疊」）
 *
 * @typedef {Object} RecipeStep
 * @property {number}   order          - 步驟序號（從 1 開始）
 * @property {string}   instruction    - 步驟說明
 * @property {string}   [method_id]    - 引用 COOKING_METHODS 的 id（選填）
 * @property {number}   [duration_s]   - 此步驟預計時間（秒，選填）
 * @property {string[]} [ingredient_ids] - 此步驟涉及的 variant_id 清單（選填）
 *
 * @typedef {Object} RecipeVersion
 * @property {string}      id          - 版本 id（例：microwave / stovetop）
 * @property {string}      label       - 顯示名稱（例：微波版 / 爐灶版）
 * @property {string}      [note]      - 版本說明
 * @property {RecipeStep[]} steps      - 此版本的步驟清單
 *
 * @typedef {Object} Recipe
 * @property {number}   id
 * @property {string}   title
 * @property {string}   subtitle
 * @property {string}   description
 * @property {string}   category        - 見 CATEGORY_LIST
 * @property {string}   cuisine         - 見 CUISINE_LIST
 * @property {string}   meal_type       - 見 MEALTYPE_LIST（camelCase 改 snake_case）
 * @property {string[]} tags
 * @property {number}   base_servings   - 基礎份量（換算基準）
 * @property {string}   time_estimate   - 最快版本的時間估計（顯示用）
 * @property {string}   difficulty
 * @property {string}   image
 * @property {RecipeIngredientRef[]} ingredients
 * @property {RecipeVersion[]}      versions     - 至少一個版本
 * @property {string}   [tips]
 * @property {string}   [source_url]    - 食譜靈感來源（選填）
 */

// ============================================================
// 分類常數
// ============================================================

export const CUISINE_LIST    = ['日式', '韓式', '中式', '義式', '法式', '泰式', '美式', '台式', '日義融合', '其他'];
export const MEALTYPE_LIST   = ['麵條', '飯', '湯品', '點心', '沙拉', '烤物', '炒菜', '便當'];
export const CATEGORY_LIST   = ['便當', '湯品', '炒菜', '點心', '早餐', '下午茶'];
export const DIFFICULTY_LIST = ['簡單', '中等', '困難'];

// ============================================================
// 食譜資料
// ============================================================

/** @type {Recipe[]} */
export const RECIPES = [

  // ── 奶油培根蛋烏龍 ───────────────────────────────────────
  {
    id: 1,
    title: '奶油培根蛋烏龍便當',
    subtitle: 'Carbonara Style',
    description: '被作者戲稱為連羅馬士兵都會驚訝的美味！奶香濃郁，起司拉絲，一顆生蛋攪下去瞬間升華。',
    category: '便當',
    cuisine: '日義融合',
    meal_type: '麵條',
    tags: ['微波料理', '快速', '奶香'],
    base_servings: 1,
    time_estimate: '10 分鐘',
    difficulty: '簡單',
    image: 'images/carbonara_udon.png',

    ingredients: [
      {
        ingredient_id: 'udon',
        variant_id:    'udon--frozen',
        qty: 1, unit: '塊',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'milk',
        variant_id:    'milk--raw',
        qty: 2, unit: '大匙',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'bacon',
        variant_id:    'bacon--sliced',
        qty: 3, unit: '片',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'cheese_slice',
        variant_id:    'cheese_slice--raw',
        qty: 1, unit: '片',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'mayonnaise',
        variant_id:    'mayonnaise--japanese',
        qty: 1, unit: '大匙',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'egg_chicken',
        variant_id:    'egg_chicken--raw',
        qty: 1, unit: '顆',
        scalable: true, optional: false, is_seasoning: false,
      },
      // 以下為無對應 ingredient 的小量調味料，暫時以 inline 形式記錄
      // TODO: 待新增 garlic_paste、black_pepper、chicken_powder 至 ingredients.js
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 2, unit: 'cm', unit_note: '管裝蒜泥',
        scalable: true, optional: false, is_seasoning: true,
        inline_name: '蒜泥',
        inline_category: '香料',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 1, unit: '小匙弱',
        scalable: true, optional: false, is_seasoning: true,
        inline_name: '康寶/雞粉（顆粒）',
        inline_category: '調味料',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: null, unit: '適量',
        scalable: false, optional: true, is_seasoning: true,
        inline_name: '黑胡椒',
        inline_category: '香料',
      },
    ],

    versions: [
      {
        id: 'microwave',
        label: '微波版',
        note: '保鮮盒直接微波，無需開火，約 10 分鐘完成。',
        steps: [
          {
            order: 1,
            instruction: '在保鮮盒中放入冷凍烏龍麵，依序疊上培根、起司，再加入牛奶、蒜泥、雞粉、美乃滋。',
            ingredient_ids: ['udon--frozen', 'bacon--sliced', 'cheese_slice--raw', 'milk--raw'],
          },
          {
            order: 2,
            instruction: '蓋上蓋子，微波爐 600W 加熱 4~5 分鐘。',
            method_id: 'microwave_600w_5min',
            duration_s: 300,
          },
          {
            order: 3,
            instruction: '趁熱打入一顆生雞蛋，用力攪拌均勻即可享用！',
            method_id: 'mix_raw',
            ingredient_ids: ['egg_chicken--raw'],
          },
        ],
      },
      {
        id: 'stovetop',
        label: '爐灶版',
        note: '用平底鍋煎培根、炒麵，風味更香但需要顧爐。',
        steps: [
          {
            order: 1,
            instruction: '平底鍋中火乾煎培根至微焦，取出備用。',
            method_id: 'pan_fry_medium',
            duration_s: 120,
            ingredient_ids: ['bacon--sliced'],
          },
          {
            order: 2,
            instruction: '同鍋加入蒜泥爆香，放入解凍後的烏龍麵，大火翻炒 1 分鐘。',
            method_id: 'stir_fry_high_heat',
            duration_s: 60,
            ingredient_ids: ['udon--frozen'],
          },
          {
            order: 3,
            instruction: '加入牛奶、起司片、美乃滋，轉小火攪拌至起司融化，關火。',
            method_id: 'stir_fry_medium_heat',
            duration_s: 60,
            ingredient_ids: ['milk--raw', 'cheese_slice--raw', 'mayonnaise--japanese'],
          },
          {
            order: 4,
            instruction: '起鍋後趁熱打入生蛋，快速攪拌，利用餘熱將蛋液熟成，撒上黑胡椒即完成。',
            method_id: 'mix_raw',
            ingredient_ids: ['egg_chicken--raw'],
          },
        ],
      },
    ],

    tips: '剩下的醬汁拌飯也超級好吃。',
  },

  // ── 韓式豬肉泡菜烏龍 ─────────────────────────────────────
  {
    id: 2,
    title: '韓式豬肉泡菜烏龍便當',
    subtitle: 'Kimchi Style',
    description: '香辣開胃，是清冰箱的好夥伴。泡菜的酸辣搭配麻油香氣，讓人一口接著一口。',
    category: '便當',
    cuisine: '韓式',
    meal_type: '麵條',
    tags: ['微波料理', '辣', '發酵'],
    base_servings: 1,
    time_estimate: '12 分鐘',
    difficulty: '簡單',
    image: 'images/kimchi_udon.png',

    ingredients: [
      {
        ingredient_id: 'udon',
        variant_id:    'udon--frozen',
        qty: 1, unit: '塊',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'kimchi',
        variant_id:    'kimchi--fermented',
        qty: 0.5, unit: '保鮮盒',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'pork_slice',
        variant_id:    'pork_slice--raw',
        qty: 50, unit: 'g',
        scalable: true, optional: false, is_seasoning: false,
        note: '盡量鋪平不要重疊，確保受熱均勻',
      },
      {
        ingredient_id: 'sesame_oil',
        variant_id:    'sesame_oil--roasted',
        qty: 1, unit: '小匙',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'gochujang',
        variant_id:    'gochujang--paste',
        qty: 1, unit: '硬幣大小',
        scalable: false, optional: true, is_seasoning: true,
      },
      {
        ingredient_id: 'egg_chicken',
        variant_id:    'egg_chicken--raw_yolk',
        qty: 1, unit: '顆',
        scalable: true, optional: true, is_seasoning: false,
      },
      // TODO: 待新增 mentsuyu、green_onion、sesame_seed 至 ingredients.js
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 1, unit: '大匙弱',
        scalable: true, optional: false, is_seasoning: true,
        inline_name: '2倍濃縮麵露',
        inline_category: '醬汁',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 10, unit: 'g',
        scalable: true, optional: true, is_seasoning: false,
        inline_name: '青蔥',
        inline_category: '蔬菜',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: null, unit: '適量',
        scalable: false, optional: true, is_seasoning: true,
        inline_name: '白芝麻',
        inline_category: '香料',
      },
    ],

    versions: [
      {
        id: 'microwave',
        label: '微波版',
        steps: [
          {
            order: 1,
            instruction: '在保鮮盒中放入冷凍烏龍麵，鋪上豬肉片（盡量不重疊）、泡菜，加入麵露、麻油、韓式辣醬。',
            ingredient_ids: ['udon--frozen', 'pork_slice--raw', 'kimchi--fermented'],
          },
          {
            order: 2,
            instruction: '蓋子錯開留縫隙，600W 微波 6 分鐘。',
            method_id: 'microwave_600w_6min_vented',
            duration_s: 360,
          },
          {
            order: 3,
            instruction: '務必確認豬肉是否全熟（無粉紅色），不夠熟請追加加熱。最後可加入蛋黃攪拌。',
            method_id: 'mix_raw',
            ingredient_ids: ['egg_chicken--raw_yolk'],
          },
        ],
      },
      {
        id: 'stovetop',
        label: '爐灶版',
        note: '炒鍋版鑊氣十足，泡菜炒過更香。',
        steps: [
          {
            order: 1,
            instruction: '熱鍋後不加油，中火炒豬肉片至變色，加入泡菜繼續翻炒 1 分鐘。',
            method_id: 'stir_fry_medium_heat',
            duration_s: 120,
            ingredient_ids: ['pork_slice--raw', 'kimchi--fermented'],
          },
          {
            order: 2,
            instruction: '加入解凍烏龍麵、麵露、韓式辣醬，大火翻炒至收汁，起鍋前淋上麻油。',
            method_id: 'stir_fry_high_heat',
            duration_s: 120,
            ingredient_ids: ['udon--frozen', 'gochujang--paste', 'sesame_oil--roasted'],
          },
          {
            order: 3,
            instruction: '盛碗，撒上青蔥、白芝麻，放上蛋黃。',
            method_id: 'mix_raw',
          },
        ],
      },
    ],

    tips: '不嗜辣的人可省略韓式辣醬。加入蛋黃攪拌後更加濃郁！',
  },

  // ── 鹽味檸檬雞肉丸烏龍 ───────────────────────────────────
  {
    id: 3,
    title: '鹽味檸檬雞肉丸烏龍便當',
    subtitle: 'Chanko-nabe Style',
    description: '清爽系首選，酸甜的檸檬香氣非常解膩。湯頭清澈鮮甜，適合重口味後的解膩之選。',
    category: '便當',
    cuisine: '日式',
    meal_type: '麵條',
    tags: ['微波料理', '清淡', '湯'],
    base_servings: 1,
    time_estimate: '12 分鐘',
    difficulty: '簡單',
    image: 'images/lemon_chicken_udon.png',

    ingredients: [
      {
        ingredient_id: 'udon',
        variant_id:    'udon--frozen',
        qty: 1, unit: '塊',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'chicken_meatball',
        variant_id:    'chicken_meatball--frozen',
        qty: 6, unit: '顆',
        scalable: true, optional: false, is_seasoning: false,
      },
      // TODO: 待新增 bok_choy_pickled、lemon、mentsuyu、chicken_powder、green_onion、black_pepper、water
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 30, unit: 'g',
        scalable: true, optional: false, is_seasoning: false,
        inline_name: '小白菜漬（或小白菜）',
        inline_category: '蔬菜',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 2, unit: '小匙',
        scalable: true, optional: false, is_seasoning: true,
        inline_name: '麵露',
        inline_category: '醬汁',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 1.5, unit: '小匙',
        scalable: true, optional: false, is_seasoning: true,
        inline_name: '雞湯粉',
        inline_category: '調味料',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 3, unit: '片',
        scalable: true, optional: false, is_seasoning: true,
        inline_name: '檸檬片',
        inline_category: '香料',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: 150, unit: 'ml',
        scalable: true, optional: false, is_seasoning: false,
        inline_name: '水',
        inline_category: '水',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: null, unit: '適量',
        scalable: false, optional: true, is_seasoning: true,
        inline_name: '蔥花',
        inline_category: '蔬菜',
      },
      {
        ingredient_id: '_inline',
        variant_id:    '_inline',
        qty: null, unit: '適量',
        scalable: false, optional: true, is_seasoning: true,
        inline_name: '黑胡椒',
        inline_category: '香料',
      },
    ],

    versions: [
      {
        id: 'microwave',
        label: '微波版',
        steps: [
          {
            order: 1,
            instruction: '將所有材料堆疊在冷凍麵上。',
            ingredient_ids: ['udon--frozen', 'chicken_meatball--frozen'],
          },
          {
            order: 2,
            instruction: '加入 150ml 的冷開水，蓋子錯開，600W 微波 6 分鐘。',
            method_id: 'microwave_600w_6min_vented',
            duration_s: 360,
          },
          {
            order: 3,
            instruction: '如果不夠熱，請再短時間追加加熱。完成後撒上蔥花與黑胡椒。',
          },
        ],
      },
    ],

    tips: '剩下的湯頭加入白飯和起司，做成「起司燉飯」超讚！',
  },
];
