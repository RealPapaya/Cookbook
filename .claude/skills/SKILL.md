# Skill: verify-ingredient

## 目的
在將新食材加入 `data/ingredients.js` 之前，
強制透過網路搜尋確認食材的真實存在性與資料正確性。

**核心原則：所有數值必須來自真實的網路資料庫，不可依賴 Claude 的訓練記憶。**

---

## 觸發條件
- 使用者想新增一個食材
- `add-recipe` skill 產生了 `_inline` 食材需要正式建檔
- 使用者說「幫我把 ___ 加進食材庫」
- CLAUDE.md 的 TODO 清單中有待處理食材

---

## 執行流程

### Step 1 — 確認食材名稱

詢問使用者：
1. 食材中文名稱（必填）
2. 食材英文名稱（盡可能填）
3. 常見的加工狀態（例：生/冷凍/乾燥）
4. 所屬分類（主食/蛋白質/蔬菜/...）

---

### Step 2 — 網路搜尋（必做，不可跳過）

使用 `web_search` 工具執行以下搜尋：

#### 2a. 確認食材真實存在
```
搜尋："{食材英文名}" site:fdc.nal.usda.gov
或："{食材中文名} 食品成分" site:consumer.fda.gov.tw
或："{食材日文名}" site:fooddb.mext.go.jp
```

**判斷標準：**
- ✅ 在官方資料庫中找到對應條目 → 繼續
- ⚠️ 只在一般網站找到 → 繼續但需標記來源等級
- ❌ 完全找不到 → 停止，回報使用者「無法確認此食材」

#### 2b. 取得營養數值
```
搜尋："{食材英文名} nutrition per 100g"
或：直接 fetch USDA URL（若 2a 找到）
```

**必須取得的欄位：**
- calories (kcal/100g)
- protein (g/100g)
- fat (g/100g)
- carbs (g/100g)

**選填欄位：**
- fiber, sodium, sugar

**若找不到完整數值：**
- 填入可取得的數值
- 缺少的欄位標記 `null`，並附上搜尋查詢記錄

#### 2c. 確認加工狀態
搜尋確認用戶想要的加工狀態是否真實存在：
```
搜尋："{食材} {加工狀態} 食品"
例：「冷凍雞肉丸 台灣」、「smoked bacon nutrition」
```

---

### Step 3 — 搜尋結果驗證

```
IF 搜尋結果數量 == 0:
  → 回報「找不到此食材的可信來源，建議使用更通用的名稱」

IF 搜尋結果來自非認可來源（部落格、食譜網站）:
  → 標記 verified_source 等級為 "secondary"
  → 在 note 中說明

IF 搜尋結果中的數值互相矛盾（差異 > 20%）:
  → 列出所有找到的數值
  → 詢問使用者要用哪個來源
  → 不可自行選擇
```

---

### Step 4 — 輸出食材物件

輸出一個可貼入 `ingredients.js` 的完整物件：

```javascript
{
  id: 'ingredient_id',          // snake_case，與英文名對應
  name: '中文名',
  name_en: 'English Name',
  categories: ['分類'],
  variants: [
    { id: 'ingredient_id--raw',    label: '生/未加工', state: 'raw',    yield_ratio: 1.0 },
    { id: 'ingredient_id--frozen', label: '冷凍',      state: 'frozen', yield_ratio: 1.0 },
    // 依實際情況新增
  ],
  nutrition_per_100g: {
    calories: XX,
    protein:  XX,
    fat:      XX,
    carbs:    XX,
    fiber:    XX,   // 若有
    sodium:   XX,   // 若有
  },
  substitutes: [],              // 可替換食材 id（若有）
  allergens: [],                // 過敏原
  storage_tip: '...',           // 選填
  verified_source: 'https://...', // 必填，實際搜尋到的 URL
  verified_at: 'YYYY-MM-DD',    // 今天的日期
}
```

---

### Step 5 — 輸出報告

```
✅ 食材驗證完成：黑胡椒（Black Pepper）

🔍 搜尋結果：
  來源 1: USDA FoodData Central
  URL: https://fdc.nal.usda.gov/food-details/170931/nutrients
  數值：熱量 251 kcal｜蛋白質 10.4g｜脂肪 3.3g｜碳水 64.8g

  來源 2: 台灣食品成分資料庫
  URL: ...
  數值：熱量 245 kcal（±2.4%，在可接受範圍內）

📋 建議使用來源：USDA（較完整）

✅ 確認加工狀態：
  - 黑胡椒粉（powdered）✅ 真實存在
  - 黑胡椒粒（raw）✅ 真實存在
  - 現磨黑胡椒（raw）✅ 真實存在

以下物件可加入 ingredients.js：
[輸出完整 JS 物件]

同時請更新 CLAUDE.md 的 TODO 清單，
將 black_pepper 從待處理移除。
```

---

## 特殊情況處理

### 食材是品牌商品（例：康寶雞粉）
1. 搜尋品牌官方網站的營養標示
2. 若找不到 → 改用通用品項（例：「雞湯粉 chicken bouillon powder」）
3. 在 `name` 中標注「（類康寶）」，`id` 使用通用名稱

### 食材是複合食品（例：韓式辣醬）
1. 搜尋「gochujang nutrition」
2. 不同品牌差異大時，使用 USDA 的平均值
3. 在 `storage_tip` 或 note 中說明品牌差異

### 台灣特有食材（例：小白菜漬）
1. 優先搜尋台灣食品成分資料庫
2. 若找不到 → 搜尋最接近的基底食材（小白菜 bok choy）
3. 標注「以生小白菜數值為基準，醃漬後鈉含量顯著增加」

---

## 禁止行為
- ❌ **絕對不可**在未執行 web_search 的情況下輸出食材物件
- ❌ **絕對不可**使用 Claude 訓練資料中記憶的營養數值（即使你「記得」）
- ❌ 不可使用部落格、食譜網站作為唯一來源
- ❌ 不可在找不到來源時填入 `verified_source: "unknown"` 然後繼續
- ❌ 不可自行「估算」不同加工狀態的 yield_ratio
