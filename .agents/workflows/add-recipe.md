---
description: 新增一道食譜到私藏食譜本（含食材驗證、圖片生成、資料填寫）
---

# 新增食譜 Workflow

## 前置確認事項（MUST ASK BEFORE PROCEEDING）

在開始新增食譜之前，必須先確認以下資訊，**有疑問一律詢問使用者**：

### 1. 食材驗證（必做）
- 列出食譜中所有食材
- 用 grep_search 在 `js/ingredients/*.js` 中確認每個食材的 `id` 是否存在
- **若食材不在既有資料中** → 詢問使用者：
  - 此食材最接近哪個既有食材？（建議替代）
  - 或是否需要新建此食材的資料條目？

### 2. 食譜基本資訊確認
若使用者未提供以下欄位，**必須詢問**：
- **份量（base_servings）**：幾人份？
- **時間（time_estimate）**：大約幾分鐘？
- **分類（category）**：早餐 / 中餐 / 下午茶 / 晚餐 / 宵夜 / 點心 / 甜點
- **國籍料理（cuisine）**：日式 / 韓式 / 中式 / 義式 / 法式 / 泰式 / 美式 / 台式 / 其他
- **主食類型（meal_type）**：麵 / 飯 / 湯 / 沙拉 / 料理
- **難度（difficulty）**：簡單 / 中等 / 困難

### 3. 醃料/醬料不明時的處理
若食譜提到「醃料」但未說明成分，**先 search_web 查詢**標準配方，
將搜尋結果整理後告知使用者，確認後才加入。

---

## 執行步驟

### Step 1：解析食譜所有食材
- 列出全部食材（含醃料、調味料）
- 用 `grep_search` 確認每項食材的：
  - `id`（base id）
  - `variant_id`（選用最接近的 state）

### Step 2：確認 ID 衝突
- 在 `js/ingredients/_registry.js` 確認新食材不會造成重複 ID

### Step 3：生成食譜圖片
圖片風格規則（統一格式）：
```
Anime-style food illustration, close-up [overhead/side] view of [料理名]. 
[主食材視覺描述]. [配料/醬汁描述]. [裝飾香草/點綴描述].
No background distractions — plate fills the frame.
Soft rim lighting, cozy kitchen golden-hour atmosphere.
Style consistent with Japanese food anime illustration — clean lines, vivid colors, appetizing steam.
```

限制：
- **不能出現食譜中沒有的食材**（例：食譜用橄欖油，圖中不能有辣椒）
- 以盤中料理為主，不要過多廚房背景元素
- 圖片存放路徑：`images/{recipe_slug}.png`

### Step 4：新增食譜 JSON 與更新 index.json
- 每道菜寫成獨立 JSON 檔，存放在 `data/recipes/{recipe_slug}.json`
- `id` 使用現存 index 裡最大 id + 1
- `slug` 取一個適當的英文名稱（例：`garlic-butter-shrimp`）
- `image` 路徑為 `images/{recipe_slug}.png`
- ingredients 格式：
  ```json
  {
    "ingredient_id": "xxx",
    "variant_id":    "xxx--yyy",
    "qty": N, "unit": "單位",
    "scalable": true, "optional": false, "is_seasoning": false,
    "note": "補充說明"
  }
  ```
- **重要命名規則**：食譜中的指令與食材名稱，**必須去掉不需要的形容詞**。
  - ❌ 新鮮巴西里 → ✅ 巴西里
  - ❌ 特級初榨橄欖油 → ✅ 橄欖油
  - ❌ 無鹽奶油 → ✅ 奶油 (除非食譜有特別強調理需要區分)
  - 保留真正的食材基元來撰寫作法，確保與 App 中的食材庫匹配一致。
- **食材名稱顯示規則（重要）**：
  - UI 中食材的**主標題**永遠顯示 `INGREDIENTS` 中的 `name` 欄位（即基底名稱）。
  - 食材的狀態、處理方式或品種等資訊，應放在對應食材的 `variants[].label` 中，
    App 會自動在主標題下方以**副標題**形式呈現（若 variant.label ≠ base name）。
  - ❌ 食譜中禁止用「冷凍烏龍麵」當作食材條目的名稱
  - ✅ 應用 `id: 'udon'`（名稱為「烏龍麵」），搭配 `variant_id: 'udon--frozen'`（label「冷凍烏龍麵」），
    UI 顯示為：  主標題：烏龍麵  /  副標題：冷凍烏龍麵
  - 如果現有食材沒有符合的 variant，**先新增該 variant**，再使用它。
- versions: 至少一個 stovetop 版本，步驟根據食譜流程撰寫
- **建立好 JSON 後，不要忘記使用 node 腳本來更新 index.json**（或手動更新 `data/recipes/index.json`）。可以執行 `node scripts/migrate.mjs` 自動重構 index，或者手動添加入 index 陣列，確保 `index.json` 包含該食譜的 metadata。

### Step 5：更新 service-worker.js
- 在 ASSETS 陣列加入新圖片路徑
- 版本號 CACHE_NAME 升一版（例：cookbook-v5 → cookbook-v6）

---

## 新食材建立規則（若需要）
在對應的分類檔新增 Ingredient 物件，tier-1 最少需要：
```js
{
  id: 'xxx',
  name: '中文名',
  name_en: 'English Name',
  categories: ['分類'],
  variants: [
    { id: 'xxx--state', label: '顯示名稱', state: 'raw' },
  ],
  allergens: [],
  tastes: ['酸', '甜'], // 選填 (酸/甜/苦/辣/鹹)
  textures: ['軟嫩', '嚼勁'], // 選填 (軟嫩/嚼勁/酥脆/硬/滑順/黏稠/濃郁/綿密/顆粒/清脆/油膩/多汁/清涼/澀/乾燥)
}
```

---

## 注意事項
- `ingredient_id` 必須對應 `INGREDIENTS` 中已定義的 base id
- `variant_id` 格式固定為 `{base_id}--{state}`
- 不可使用 inline 佔位符，未建檔的食材必須先建立條目
- `is_seasoning: true` 的項目在 UI 會顯示 ☆ 符號
- `scalable: false` 用於「適量」類的調味料
