/**
 * @fileoverview 蔬菜類食材
 * 包含：葉菜、根莖類、蔥蒜、蕈菇（特定品種）等蔬菜
 */

/** @type {import('./_constants.js').Ingredient[]} */
export default [

  // ── 青蔥 ─────────────────────────────────────────────────
  {
    id: 'green_onion',
    name: '青蔥',
    name_en: 'Green Onion',
    categories: ['蔬菜', '香料'],
    variants: [
      { id: 'green_onion--raw',     label: '生青蔥',   state: 'raw' },
      { id: 'green_onion--chopped', label: '蔥花',     state: 'minced' },
      { id: 'green_onion--sliced',  label: '蔥段',     state: 'sliced' },
    ],
  },

  // ── 小白菜 ───────────────────────────────────────────────
  {
    id: 'bok_choy',
    name: '小白菜',
    name_en: 'Baby Bok Choy',
    categories: ['蔬菜'],
    variants: [
      { id: 'bok_choy--raw',     label: '生小白菜',   state: 'raw' },
      { id: 'bok_choy--pickled', label: '小白菜漬',   state: 'pickled' },
      { id: 'bok_choy--cooked',  label: '熟小白菜',   state: 'cooked' },
    ],
  },

];
