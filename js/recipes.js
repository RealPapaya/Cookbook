/**
 * @fileoverview 食譜資料庫
 *
 * 食譜結構說明：
 *
 * 每道食譜（Recipe）由以下三個核心部分組成：
 *  1. 基本資訊（metadata）
 *  2. 食材清單（ingredients）— 每個項目引用 ingredients/_registry.js 的 variant_id
 *  3. 版本/作法（versions）— 同一道菜的不同烹飪方式，每個版本有自己的 steps
 *     並引用 cooking-methods.js 的 method_id
 *
 * 重要規則：
 *  - 所有 ingredient_id 必須對應 ingredients/_registry.js 中已定義的食材
 *  - 不可使用 _inline 佔位符；未建檔的食材請先建立 tier-1 entry
 *  - variant_id 格式固定為 {base_id}--{state}
 *
 * @typedef {Object} RecipeIngredientRef
 * @property {string}  ingredient_id  - 對應 INGREDIENTS 的 base id
 * @property {string}  variant_id     - 對應 variant.id（含加工狀態）
 * @property {number}  qty            - 數量（null = 適量）
 * @property {string}  unit           - 單位
 * @property {boolean} scalable       - 是否隨份量等比例縮放
 * @property {boolean} optional       - 是否為選填食材
 * @property {boolean} is_seasoning   - 是否為調味料（顯示 ☆）
 * @property {string}  [note]         - 備註（例：「盡量鋪平不要重疊」）
 *
 * @typedef {Object} RecipeStep
 * @property {number}   order           - 步驟序號（從 1 開始）
 * @property {string}   instruction     - 步驟說明
 * @property {string}   [method_id]     - 引用 COOKING_METHODS 的 id（選填）
 * @property {number}   [duration_s]    - 此步驟預計時間（秒，選填）
 * @property {string[]} [ingredient_ids]- 此步驟涉及的 variant_id 清單（選填）
 *
 * @typedef {Object} RecipeVersion
 * @property {string}       id    - 版本 id（例：microwave / stovetop）
 * @property {string}       label - 顯示名稱（例：微波版 / 爐灶版）
 * @property {string}       [note]- 版本說明
 * @property {RecipeStep[]} steps - 此版本的步驟清單
 *
 * @typedef {Object} Recipe
 * @property {number}   id
 * @property {string}   title
 * @property {string}   subtitle
 * @property {string}   description
 * @property {string}   category          - 見 CATEGORY_LIST
 * @property {string}   cuisine           - 見 CUISINE_LIST
 * @property {string}   meal_type         - 見 MEALTYPE_LIST
 * @property {string[]} tags
 * @property {number}   base_servings     - 基礎份量（換算基準）
 * @property {string}   time_estimate     - 最快版本的時間估計（顯示用）
 * @property {string}   difficulty
 * @property {string}   image
 * @property {RecipeIngredientRef[]} ingredients
 * @property {RecipeVersion[]}       versions   - 至少一個版本
 * @property {string}   [tips]
 * @property {string}   [source_url]      - 食譜靈感來源（選填）
 */

// ============================================================
// 分類常數
// ============================================================

export const CUISINE_LIST    = ['日式', '韓式', '中式', '義式', '法式', '泰式', '美式', '台式', '其他'];
export const MEALTYPE_LIST   = ['麵', '飯', '湯', '沙拉', '料理'];
export const CATEGORY_LIST   = ['早餐', '中餐', '下午茶', '晚餐', '宵夜', '點心', '甜點'];
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
    description: '被作者戲稱為連羅馬士兵都會驚訝的美味！奶香濃郁，起司片拉絲，一顆生蛋攪下去瞬間升華。',
    category: '中餐',
    cuisine: '義式',
    meal_type: '麵',
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
        qty: 30, unit: 'ml',
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
        qty: 15, unit: 'ml',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'egg_chicken',
        variant_id:    'egg_chicken--raw',
        qty: 1, unit: '顆',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'garlic_paste',
        variant_id:    'garlic_paste--tube',
        qty: 2, unit: 'cm',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'chicken_powder',
        variant_id:    'chicken_powder--granule',
        qty: 4, unit: 'g',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'black_pepper',
        variant_id:    'black_pepper--ground',
        qty: 1, unit: 'g',
        scalable: true, optional: true, is_seasoning: true,
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
            instruction: '在保鮮盒中放入烏龍麵，依序疊上培根、起司片，再加入牛奶、大蒜、雞粉、美乃滋。',
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
            instruction: '趁熱打入一顆雞蛋，用力攪拌均勻即可享用！',
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
            instruction: '同鍋加入大蒜爆香，放入解凍後的烏龍麵，大火翻炒 1 分鐘。',
            method_id: 'stir_fry_high_heat',
            duration_s: 60,
            ingredient_ids: ['udon--frozen', 'garlic_paste--tube'],
          },
          {
            order: 3,
            instruction: '加入牛奶、起司片、美乃滋，轉小火攪拌至起司片融化，關火。',
            method_id: 'stir_fry_medium_heat',
            duration_s: 60,
            ingredient_ids: ['milk--raw', 'cheese_slice--raw', 'mayonnaise--japanese'],
          },
          {
            order: 4,
            instruction: '起鍋後趁熱打入雞蛋，快速攪拌，利用餘熱將蛋液熟成，撒上黑胡椒即完成。',
            method_id: 'mix_raw',
            ingredient_ids: ['egg_chicken--raw', 'black_pepper--ground'],
          },
        ],
      },
    ],

    tips: '剩下的醬汁拌飯也超級好吃。',
  },

  // ── 韓式豬肉片泡菜烏龍 ─────────────────────────────────────
  {
    id: 2,
    title: '韓式豬肉片泡菜烏龍便當',
    subtitle: 'Kimchi Style',
    description: '香辣開胃，是清冰箱的好夥伴。泡菜的酸辣搭配麻油香氣，讓人一口接著一口。',
    category: '中餐',
    cuisine: '韓式',
    meal_type: '麵',
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
        qty: 5, unit: 'ml',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'gochujang',
        variant_id:    'gochujang--paste',
        qty: 10, unit: 'g',
        scalable: true, optional: true, is_seasoning: true,
      },
      {
        ingredient_id: 'egg_chicken',
        variant_id:    'egg_chicken--raw_yolk',
        qty: 1, unit: '顆',
        scalable: true, optional: true, is_seasoning: false,
      },
      {
        ingredient_id: 'mentsuyu',
        variant_id:    'mentsuyu--2x',
        qty: 10, unit: 'ml',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'green_onion',
        variant_id:    'green_onion--chopped',
        qty: 10, unit: 'g',
        scalable: true, optional: true, is_seasoning: false,
      },
      {
        ingredient_id: 'sesame_seed',
        variant_id:    'sesame_seed--toasted',
        qty: 1, unit: 'g',
        scalable: true, optional: true, is_seasoning: true,
      },
    ],

    versions: [
      {
        id: 'microwave',
        label: '微波版',
        steps: [
          {
            order: 1,
            instruction: '在保鮮盒中放入烏龍麵，鋪上豬肉片（盡量不重疊）、泡菜，加入麵露、麻油、韓式辣醬。',
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
            instruction: '務必確認豬肉片是否全熟（無粉紅色），不夠熟請追加加熱。最後可加入蛋黃攪拌。',
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
            instruction: '盛碗，撒上蔥花、白芝麻，放上蛋黃。',
            method_id: 'mix_raw',
            ingredient_ids: ['green_onion--chopped', 'sesame_seed--toasted', 'egg_chicken--raw_yolk'],
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
    category: '中餐',
    cuisine: '日式',
    meal_type: '麵',
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
      {
        ingredient_id: 'bok_choy',
        variant_id:    'bok_choy--pickled',
        qty: 30, unit: 'g',
        scalable: true, optional: false, is_seasoning: false,
        note: '也可用生小白菜替代',
      },
      {
        ingredient_id: 'mentsuyu',
        variant_id:    'mentsuyu--2x',
        qty: 10, unit: 'ml',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'chicken_soup_powder',
        variant_id:    'chicken_soup_powder--powder',
        qty: 7.5, unit: 'g',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'lemon',
        variant_id:    'lemon--sliced',
        qty: 3, unit: '片',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'water',
        variant_id:    'water--cold',
        qty: 150, unit: 'ml',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'green_onion',
        variant_id:    'green_onion--chopped',
        qty: 1, unit: 'g',
        scalable: true, optional: true, is_seasoning: false,
      },
      {
        ingredient_id: 'black_pepper',
        variant_id:    'black_pepper--ground',
        qty: 1, unit: 'g',
        scalable: true, optional: true, is_seasoning: true,
      },
    ],

    versions: [
      {
        id: 'microwave',
        label: '微波版',
        steps: [
          {
            order: 1,
            instruction: '在保鮮盒中放入烏龍麵，依序堆疊雞肉丸、小白菜、檸檬，加入麵露與雞湯粉。',
            ingredient_ids: ['udon--frozen', 'chicken_meatball--frozen', 'bok_choy--pickled', 'lemon--sliced'],
          },
          {
            order: 2,
            instruction: '加入 150ml 冷開水，蓋子錯開留縫隙，600W 微波 6 分鐘。',
            method_id: 'microwave_600w_6min_vented',
            duration_s: 360,
            ingredient_ids: ['water--cold'],
          },
          {
            order: 3,
            instruction: '如果不夠熱，請再短時間追加加熱。完成後撒上蔥花與黑胡椒。',
            ingredient_ids: ['green_onion--chopped', 'black_pepper--ground'],
          },
        ],
      },
    ],

    tips: '剩下的湯頭加入白飯和起司片，做成「起司片燉飯」超讚！',
  },
  // ── 蒜香奶油番茄蝦 ────────────────────────────────────────
  {
    id: 4,
    title: '蒜香奶油番茄蝦',
    subtitle: 'Garlic Butter Cherry Tomato Shrimp',
    description: '大蒜與奶油爆香，小番茄炒出酸甜茄汁，蝦仁彈牙鮮甜，最後以檸檬汁和巴西里收尾，清爽不膩。',
    category: '晚餐',
    cuisine: '地中海',
    meal_type: '料理',
    tags: ['快速', '蒜香', '海鮮', '地中海'],
    base_servings: 2,
    time_estimate: '20 分鐘',
    difficulty: '簡單',
    image: 'images/garlic_butter_tomato_shrimp.png',

    ingredients: [
      // ── 主食材 ──
      {
        ingredient_id: 'shrimp_frozen',
        variant_id:    'shrimp_frozen--standard',
        qty: 200, unit: 'g',
        scalable: true, optional: false, is_seasoning: false,
        note: '開背去腸泥',
      },
      {
        ingredient_id: 'tomato',
        variant_id:    'tomato--cherry',
        qty: 150, unit: 'g',
        scalable: true, optional: false, is_seasoning: false,
        note: '對切備用',
      },
      {
        ingredient_id: 'garlic_raw',
        variant_id:    'garlic_raw--minced',
        qty: 4, unit: '瓣',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'parsley',
        variant_id:    'parsley--fresh',
        qty: 10, unit: 'g',
        scalable: true, optional: false, is_seasoning: false,
        note: '細切備用',
      },
      // ── 蝦仁醃料 ──
      {
        ingredient_id: 'sake_cooking',
        variant_id:    'sake_cooking--rice',
        qty: 5, unit: 'ml',
        scalable: true, optional: false, is_seasoning: true,
        note: '醃蝦用',
      },
      {
        ingredient_id: 'salt',
        variant_id:    'salt--sea',
        qty: 1, unit: 'g',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'black_pepper',
        variant_id:    'black_pepper--ground',
        qty: 1, unit: 'g',
        scalable: true, optional: false, is_seasoning: true,
      },
      // ── 烹調油脂與調味 ──
      {
        ingredient_id: 'olive_oil',
        variant_id:    'olive_oil--extra_virgin',
        qty: 15, unit: 'ml',
        scalable: true, optional: false, is_seasoning: true,
      },
      {
        ingredient_id: 'butter',
        variant_id:    'butter--unsalted',
        qty: 15, unit: 'g',
        scalable: true, optional: false, is_seasoning: false,
      },
      {
        ingredient_id: 'lemon',
        variant_id:    'lemon--juice',
        qty: 15, unit: 'ml',
        scalable: true, optional: false, is_seasoning: true,
      },
    ],

    versions: [
      {
        id: 'stovetop',
        label: '爐灶版',
        note: '全程中小火，奶油不易焦化，蝦肉保持彈嫩。',
        steps: [
          {
            order: 1,
            instruction: '蝦仁開背去腸泥，加入米酒、鹽、黑胡椒抓勻，靜置醃 10 分鐘。巴西里細切、小番茄對切、蒜頭切末備用。',
            method_id: 'marinate',
            duration_s: 600,
            ingredient_ids: ['shrimp_frozen--standard', 'sake_cooking--rice', 'salt--sea', 'black_pepper--ground'],
          },
          {
            order: 2,
            instruction: '熱鍋加入橄欖油，中大火將蝦仁下鍋炒至半熟（兩面開始變紅），起鍋備用。',
            method_id: 'stir_fry_high_heat',
            duration_s: 90,
            ingredient_ids: ['olive_oil--extra_virgin', 'shrimp_frozen--standard'],
          },
          {
            order: 3,
            instruction: '原鍋補少許橄欖油（若鍋底偏乾），下大蒜以中火炒香約 30 秒至微微金黃，放入小番茄翻炒 1~2 分鐘壓出茄汁。',
            method_id: 'stir_fry_medium_heat',
            duration_s: 90,
            ingredient_ids: ['garlic_raw--minced', 'tomato--cherry'],
          },
          {
            order: 4,
            instruction: '加入奶油，中小火炒至完全融化並與醬汁融合。',
            method_id: 'stir_fry_medium_heat',
            duration_s: 60,
            ingredient_ids: ['butter--unsalted'],
          },
          {
            order: 5,
            instruction: '蝦仁回鍋，加入巴西里末、鹽、少許黑胡椒，擠入檸檬快速翻炒均勻，即可起鍋。',
            method_id: 'stir_fry_medium_heat',
            duration_s: 60,
            ingredient_ids: ['shrimp_frozen--standard', 'parsley--fresh', 'lemon--juice', 'salt--sea'],
          },
        ],
      },
    ],

    tips: '奶油容易焦化，步驟 4 要轉中小火。蝦仁不要過度烹調，回鍋後快速翻炒即可，保持彈牙口感。喜歡蒜味更重的人，大蒜用量可以加倍。',
  },
];
