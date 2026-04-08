/**
 * @fileoverview 我的食譜 — localStorage CRUD
 */

const LS_KEY = 'cookbook_my_recipes';

export function loadMyRecipes() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); }
  catch { return []; }
}

export function saveMyRecipes(list) {
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}

/**
 * 新增一道食譜到我的收藏
 * @returns {Array|null} 更新後的清單；null 表示重複（online）
 */
export function addMyRecipe(data) {
  const list = loadMyRecipes();
  if (
    data.source === 'online' &&
    list.some(r => r.source === 'online' && r.source_id === data.source_id)
  ) return null;
  list.unshift(data);
  saveMyRecipes(list);
  return list;
}

export function deleteMyRecipe(myId) {
  const list = loadMyRecipes().filter(r => r.my_id !== myId);
  saveMyRecipes(list);
  return list;
}
