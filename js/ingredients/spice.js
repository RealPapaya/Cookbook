/**
 * @fileoverview 香料類食材
 * 包含：各種香辛料、乾香料、香草、芝麻等
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 黑胡椒 ───────────────────────────────────────────────
  {
    id: 'black_pepper',
    name: '黑胡椒',
    name_en: 'Black Pepper',
    categories: ['香料'],
    variants: [
      { id: 'black_pepper--ground', label: '黑胡椒粉', state: 'powdered' },
      { id: 'black_pepper--whole',  label: '黑胡椒粒', state: 'raw' },
      { id: 'black_pepper--cracked',label: '粗粒黑胡椒',state: 'powdered' },
    ],
  },

  // ── 蒜泥 ─────────────────────────────────────────────────
  {
    id: 'garlic_paste',
    name: '蒜泥',
    name_en: 'Garlic Paste',
    categories: ['香料'],
    variants: [
      { id: 'garlic_paste--tube',  label: '管裝蒜泥', state: 'paste' },
      { id: 'garlic_paste--fresh', label: '自磨蒜泥', state: 'paste' },
    ],
  },

  // ── 白芝麻 ───────────────────────────────────────────────
  {
    id: 'sesame_seed',
    name: '白芝麻',
    name_en: 'White Sesame Seed',
    categories: ['香料'],
    variants: [
      { id: 'sesame_seed--raw',     label: '生白芝麻',   state: 'raw' },
      { id: 'sesame_seed--toasted', label: '熟白芝麻',   state: 'cooked' },
    ],
    allergens: ['sesame'],
  },

];
