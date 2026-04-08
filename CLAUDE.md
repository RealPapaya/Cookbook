# 私藏食譜本 — CLAUDE.md

> 這份文件是給 AI（Claude）協作時的行為指南與專案說明。
> 每次協作前請先閱讀此文件。

---

## 專案概覽

這是一個以 **純 HTML + ES Modules** 實作的 PWA 食譜應用程式，
部署在 GitHub Pages，支援離線瀏覽（Service Worker）。

### 目錄結構

```
cookbook/
├── CLAUDE.md                ← 你在這裡
├── index.html
├── manifest.json
├── service-worker.js
│
├── js/
│   ├── app.js               ← 主程式邏輯（import from ingredients/_registry.js）
│   ├── recipes.js           ← 食譜資料（引用 ingredient_id & method_id）
│   ├── cooking-methods.js   ← 烹飪方法資料庫
│   │
│   └── ingredients/         ← 食材資料層（多檔案架構）
│       ├── _constants.js    ← 常數：PROCESSING_STATES, INGREDIENT_CATEGORIES,
│       │                      ALLERGENS, INGREDIENT_TAG_COLORS
│       ├── _registry.js     ← 聚合器：合併所有分類檔，匯出 INGREDIENTS[] + 查詢函式
│       ├── staple.js        ← 主食（烏龍麵、飯、麵包…）
│       ├── protein.js       ← 蛋白質（雞蛋、培根、豬肉、雞肉丸…）
│       ├── dairy.js         ← 乳製品（牛奶、起司片…）
│       ├── vegetable.js     ← 蔬菜（青蔥、小白菜…）
│       ├── seasoning.js     ← 調味料+醬汁（美乃滋、韓式辣醬、麵露、雞粉…）
│       ├── spice.js         ← 香料（黑胡椒、蒜泥、白芝麻…）
│       ├── oil.js           ← 油脂（麻油…）
│       ├── fermented.js     ← 發酵食品（泡菜…）
│       └── other.js         ← 其他（水、檸檬…）
│
├── css/
│   └── style.css
│
├── skills/                  ← Claude Skill 定義
│   ├── add-recipe/
│   │   └── SKILL.md
│   ├── nutrition/
│   │   └── SKILL.md
│   └── verify-ingredient/
│       └── SKILL.md
│
├── images/                  ← 食譜圖片
└── icons/                   ← PWA 圖示
```

---

## 資料模型（Data Model）

### 三層資料關係

```
Ingredient (ingredients/_registry.js → 各分類檔)
  └── has many Variants（加工狀態）

CookingMethod (cooking-methods.js)
  └── has Params（溫度/時間/器具）

Recipe (recipes.js)
  ├── has many RecipeIngredientRef → 引用 ingredient.id + variant.id
  └── has many RecipeVersion
        └── has many RecipeStep → 引用 cooking_method.id
```

### 關鍵規則

| 規則 | 說明 |
|------|------|
| ingredient_id | 對應各分類檔（透過 `_registry.js`）中的 `id`（snake_case） |
| variant_id | 格式固定為 `{base_id}--{state}` |
| method_id | 對應 `COOKING_METHODS` 陣列中的 `id` |
| 禁止 `_inline` | 不可再使用 `_inline`；食材必須先建檔才能在食譜中引用 |

---

## 新增食材的方式（Tier System）

### Tier 1 — 最低要求（只需 5 個欄位即可讓 UI 正常運作）

```js
{
  id: 'black_pepper',        // snake_case 唯一 ID
  name: '黑胡椒',             // 中文顯示名稱
  name_en: 'Black Pepper',   // 英文名（搜尋用）
  categories: ['香料'],       // 1 或多個分類（見 INGREDIENT_CATEGORIES）
  variants: [                 // 至少一個 variant
    { id: 'black_pepper--ground', label: '黑胡椒粉', state: 'powdered' },
  ],
}
```

### Tier 2 — 選填補強（日後可用 AI Skill 補齊）

```js
{
  // ...tier 1 欄位...
  nutrition_per_100g: { calories, protein, fat, carbs, fiber?, sodium? },
  substitutes: ['white_pepper'],
  allergens: ['sesame'],
  season: '全年',
  storage_tip: '密封避光保存',
  verified_source: 'https://fdc.nal.usda.gov/...',  // 填 nutrition 時必填
  verified_at: '2024-11-01',
}
```

### 要放入哪個分類檔？

| 分類 | 檔案 |
|------|------|
| 主食（麵、飯） | `staple.js` |
| 蛋白質（肉、蛋、海鮮） | `protein.js` |
| 乳製品 | `dairy.js` |
| 蔬菜 | `vegetable.js` |
| 調味料 / 醬汁 | `seasoning.js` |
| 香料（乾香料、芝麻、蒜） | `spice.js` |
| 油脂 | `oil.js` |
| 發酵食品 | `fermented.js` |
| 水、水果、菇類、其他 | `other.js` |

> 一個食材的 `categories[]` 可以有多個分類（例如韓式辣醬同時是「醬汁、調味料、發酵食品」），
> 但它本身只存放在一個最主要的分類檔中。

---

## 核心限制（必須遵守）

### ❌ 不可做的事

1. **不可捏造食材的營養數值**
   - 填寫 `nutrition_per_100g` 時必須附上 `verified_source`（真實 URL）
   - 數值必須來自官方資料庫（見下方認可來源清單）
   - 不可「估算」或「假設」營養成分

2. **不可自行新增烹飪方法**
   - 烹飪方法的 `duration_s` 和 `temp_c` 必須有真實依據
   - 不確定的數值請標記 `TODO` 並留空

3. **不可使用 `_inline` 食材**
   - `_inline` 已廢除；新增食譜前必須先在對應分類檔建立 Tier-1 食材條目

4. **不可修改已有食材的 `verified_source`**
   - 若資料來源有誤，請新增 `verified_source_alt` 並說明差異

5. **不可直接修改 `_registry.js`**
   - 食材資料一律在各分類檔新增；`_registry.js` 只負責匯入與聚合，不存放食材物件

### ✅ 可以做的事

- 新增新食材：在對應分類檔末尾追加一個 Tier-1 物件即可
- 新增新食譜：使用 `add-recipe` skill 走完驗證流程
- 新增烹飪方法：有具體來源（食譜網站、廠商說明書）時可新增
- 修改 UI/CSS：前端樣式調整無需驗證流程
- 新增分類檔：若現有分類不足，在 `js/ingredients/` 新增檔案，並在 `_registry.js` 加入 import

---

## 認可的營養資料來源

| 資料庫 | URL | 地區 |
|--------|-----|------|
| 日本食品標準成分表 | https://fooddb.mext.go.jp/ | 日本 |
| USDA FoodData Central | https://fdc.nal.usda.gov/ | 美國 |
| 台灣食品營養成分資料庫 | https://consumer.fda.gov.tw/Food/TFND.aspx | 台灣 |
| Open Food Facts | https://world.openfoodfacts.org/ | 國際 |

---

## Skill 使用指南

### 何時使用哪個 Skill

| 情境 | 使用 Skill |
|------|-----------|
| 想新增一道食譜 | `add-recipe` |
| 想計算某食譜的熱量/蛋白質 | `nutrition` |
| 想確認某食材是否真實存在 | `verify-ingredient` |
| 想為食材補充營養數據 | `verify-ingredient` → 確認後補填 Tier-2 欄位 |

---

## Git Commit 規範

```
feat(data): 新增食材 garlic_paste（spice.js，tier-1）
feat(data): 補充食材 udon 的 nutrition（附 fooddb 來源）
feat(recipe): 新增食譜 #4 — 麻婆豆腐烏龍
fix(ui): 修正食材換算浮點數顯示問題
docs(claude): 更新 TODO 清單
skill(verify): 更新食材驗證流程
```

---

## 版本記錄

| 版本 | 日期 | 說明 |
|------|------|------|
| v1.0 | 2024-01 | 初始版本，單一 recipes.js |
| v2.0 | 2025-01 | 拆分三層資料模型，新增 skills |
| v3.0 | 2026-04 | 食材多層級架構（ingredients/ 子目錄），廢除 _inline，修復 app.js 食材名稱解析，新增烹飪方法 UI |
