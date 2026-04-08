# Skill: nutrition

## 目的
計算食譜或單一食材的營養成分，
所有數值必須來自 `ingredients.js` 的 `nutrition_per_100g`，
不得自行估算或憑空填入。

---

## 觸發條件
- 「這道菜有幾卡？」
- 「這份食材的蛋白質有多少？」
- 「幫我算一下這道菜的營養」
- 「我吃了多少熱量？」

---

## 執行流程

### Step 1 — 確認計算對象

| 情境 | 動作 |
|------|------|
| 指定食譜 ID | 載入該食譜的所有 `ingredients` |
| 指定食材名稱 | 在 `INGREDIENTS` 中搜尋 |
| 使用者輸入自訂份量 | 以輸入份量為準，覆蓋 `base_servings` |

---

### Step 2 — 單位換算

計算每個食材的「實際重量（g）」：

```
actual_weight_g = qty × servings_ratio × unit_to_g_factor × yield_ratio
```

**常用單位換算參考（unit_to_g_factor）：**

| 單位 | 換算 g | 備註 |
|------|--------|------|
| 大匙（tbsp） | 15g（液體）/ 12g（粉末） | 依食材調整 |
| 小匙（tsp） | 5g（液體）/ 4g（粉末） | |
| 杯（cup） | 240ml ≈ 240g（水）| 依密度調整 |
| 片 | 依食材而定 | 培根 1片≈15g；起司片 1片≈20g |
| 顆（蛋） | 50g（中型蛋） | |
| 塊（冷凍烏龍麵） | 200g | |
| ml | 1g（水性液體近似） | |
| 適量 | 忽略（too_small_to_count） | 標記 ≈0 |

⚠️ **若食材單位無法換算（如「硬幣大小」）**：
- 標記為 `≈ 估算（無法精確計算）`
- 不可自行給出確切數值

---

### Step 3 — 計算各食材營養

```
FOR EACH ingredient_ref IN recipe.ingredients:
  base = INGREDIENTS.find(ingredient_ref.ingredient_id)

  IF base is undefined (_inline):
    → 標記此食材為「無資料，已略過」
    → 在結果中顯示警告

  IF base.nutrition_per_100g exists:
    calories += (actual_weight_g / 100) × base.nutrition_per_100g.calories
    protein  += (actual_weight_g / 100) × base.nutrition_per_100g.protein
    fat      += (actual_weight_g / 100) × base.nutrition_per_100g.fat
    carbs    += (actual_weight_g / 100) × base.nutrition_per_100g.carbs
```

---

### Step 4 — 輸出格式

```
🍜 奶油培根蛋烏龍便當（1人份）
━━━━━━━━━━━━━━━━━━
熱量    約 XXX 大卡
蛋白質  約 XX g
脂肪    約 XX g
碳水    約 XX g
━━━━━━━━━━━━━━━━━━

📊 食材明細：
  冷凍烏龍麵  (200g) → 298 kcal
  培根 3片    (45g)  → 171 kcal
  起司片      (20g)  →  63 kcal
  雞蛋        (50g)  →  76 kcal
  牛奶 2大匙  (30g)  →  18 kcal
  蒜泥        ──── _inline，無資料，已略過
  黑胡椒      ──── 適量，忽略

⚠️ 注意事項：
  - 以下食材因無資料庫記錄，未計入總量：蒜泥、雞粉
  - 實際數值可能因食材品牌而有 ±15% 差異
  - 數值來源：日本食品標準成分表、USDA FoodData Central
```

---

## 進階功能

### 每日攝取比較
若使用者詢問「這樣夠嗎？」或「佔每日多少比例？」，
使用以下每日參考值（DRI，成人平均）：

| 營養素 | 每日參考值 |
|--------|-----------|
| 熱量 | 2000 kcal |
| 蛋白質 | 50 g |
| 脂肪 | 65 g |
| 碳水 | 300 g |
| 鈉 | 2300 mg |

標明這是「一般成人參考值，非個人化建議」。

### 多份量計算
若使用者說「我吃了兩份」，將所有數值 × 倍數。

---

## 禁止行為
- ❌ 不可為 `_inline` 食材估算營養值
- ❌ 不可使用 Claude 訓練資料中的記憶值（必須從 ingredients.js 讀取）
- ❌ 不可給出「這樣健不健康」的醫療建議
- ❌ 結果中不出現「根據我的知識」等語句
