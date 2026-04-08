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
├── data/                    ← 所有資料層（純 JS 模組，無框架依賴）
│   ├── ingredients.js       ← 食材主資料庫（含 variants）
│   ├── cooking-methods.js   ← 烹飪方法資料庫
│   └── recipes.js           ← 食譜資料（引用 ingredient_id & method_id）
│
├── js/
│   ├── app.js               ← 主程式邏輯
│   ├── render.js            ← DOM 渲染函式
│   └── utils.js             ← 工具函式（換算、格式化）
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
Ingredient (ingredients.js)
  └── has many Variants (加工狀態)

CookingMethod (cooking-methods.js)
  └── has Params (溫度/時間/器具)

Recipe (recipes.js)
  ├── has many RecipeIngredientRef → 引用 ingredient.id + variant.id
  └── has many RecipeVersion
        └── has many RecipeStep → 引用 cooking_method.id
```

### 關鍵規則

| 規則 | 說明 |
|------|------|
| ingredient_id | 對應 `INGREDIENTS` 陣列中的 `id`（snake_case） |
| variant_id | 格式固定為 `{base_id}--{state}` |
| method_id | 對應 `COOKING_METHODS` 陣列中的 `id` |
| `_inline` | 食材尚未建檔時的暫時佔位符，**必須盡快補建** |

---

## 核心限制（必須遵守）

### ❌ 不可做的事

1. **不可捏造食材資料**
   - 所有新增食材必須附上 `verified_source`（真實 URL）
   - 營養數值必須來自官方資料庫（見下方認可來源清單）
   - 不可「估算」或「假設」食材的營養成分

2. **不可自行新增烹飪方法**
   - 烹飪方法的 `duration_s` 和 `temp_c` 必須有真實依據
   - 不確定的數值請標記 `TODO` 並留空

3. **不可使用 `_inline` 食材建立正式食譜**
   - `_inline` 僅作為過渡，新增食譜前必須先建立對應食材

4. **不可修改已有食材的 `verified_source`**
   - 若資料來源有誤，請新增 `verified_source_alt` 並說明差異

### ✅ 可以做的事

- 新增新食材：使用 `verify-ingredient` skill 確認後新增
- 新增新食譜：使用 `add-recipe` skill 走完驗證流程
- 新增烹飪方法：有具體來源（食譜網站、廠商說明書）時可新增
- 修改 UI/CSS：前端樣式調整無需驗證流程

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
| 想新增一個新食材到資料庫 | `verify-ingredient` → 確認後手動新增 |

---

## TODO 清單（已知待補食材）

以下食材目前以 `_inline` 方式存在於 recipes.js，
下次使用 `verify-ingredient` skill 時請優先處理：

- [ ] `garlic_paste`（蒜泥）
- [ ] `black_pepper`（黑胡椒）
- [ ] `chicken_powder`（雞粉/康寶）
- [ ] `mentsuyu`（麵露）
- [ ] `green_onion`（青蔥）
- [ ] `sesame_seed`（白芝麻）
- [ ] `bok_choy`（小白菜）
- [ ] `lemon`（檸檬）
- [ ] `water`（水）
- [ ] `chicken_soup_powder`（雞湯粉）

---

## Git Commit 規範

```
feat(data): 新增食材 garlic_paste（附 USDA 來源）
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
