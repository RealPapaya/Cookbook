/**
 * @fileoverview 其他類食材
 * 包含：水、水果、菇類、湯底等較小分類，或難以歸入其他分類的食材
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 水 ───────────────────────────────────────────────────
  {
    id: 'water',
    name: '水',
    name_en: 'Water',
    categories: ['水'],
    variants: [
      { id: 'water--cold',    label: '冷開水', state: 'raw' },
      { id: 'water--hot',     label: '熱水',   state: 'cooked' },
      { id: 'water--boiling', label: '滾水',   state: 'cooked' },
    ],
  },

  // ── 檸檬 ─────────────────────────────────────────────────
  {
    id: 'lemon',
    name: '檸檬',
    name_en: 'Lemon',
    categories: ['水果', '香料'],
    variants: [
      { id: 'lemon--raw',    label: '檸檬',   state: 'raw' },
      { id: 'lemon--sliced', label: '檸檬片', state: 'sliced' },
      { id: 'lemon--juice',  label: '檸檬汁', state: 'raw' },
    ],
    allergens: [],
    tastes: [],
    textures: [],
    tastes: ['酸'],
    textures: ['多汁'],
    season: '全年',
    storage_tip: '常溫保存 1-2 週，冷藏可保存 1 個月。',
  },

];
