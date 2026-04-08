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

