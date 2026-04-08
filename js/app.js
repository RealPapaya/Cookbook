import { RECIPES, CUISINE_LIST, MEALTYPE_LIST, CATEGORY_LIST, DIFFICULTY_LIST } from './recipes.js';
import { INGREDIENTS, INGREDIENT_CATEGORIES, getIngredient, INGREDIENT_TAG_COLORS, INGREDIENT_TASTES, INGREDIENT_TEXTURES } from './ingredients/_registry.js';
import { getCookingMethod, METHOD_TYPES } from './cooking-methods.js';
import { loadMyRecipes, addMyRecipe, deleteMyRecipe } from './my-recipes.js';

// ============================================================
// State
// ============================================================
const state = {
  search: '',
  cuisines: new Set(),
  mealTypes: new Set(),
  categories: new Set(),
  recipeTags: new Set(),
  ingTags: new Set(),
  methodTypes: new Set(),
  tastes: new Set(),
  textures: new Set(),
  currentRecipeId: null,
  currentServings: 1,
  currentVersionId: null,
  checkedIng: new Set(),
  doneSteps: new Set(),
  filterOpen: false,
  // My Recipes
  myRecipes: [],
  currentMyRecipeId: null,
  // Kitchen
  kitchenIngredients: new Set(), // Set of ingredient base-ids
  kitchenOpen: false,
};

// ============================================================
// Boot
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  state.myRecipes = loadMyRecipes();
  buildFilterPanel();
  buildKitchenPanel();
  buildAddRecipeModal();
  renderGrid();
  setupSearch();
  setupNav();
  registerSW();
});

// ============================================================
// Navigation
// ============================================================
function setupNav() {
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.nav));
  });
}

function navigateTo(viewId, id = null) {
  document.querySelectorAll('[data-nav]').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.nav === viewId)
  );
  document.querySelectorAll('.page-view').forEach(v =>
    v.classList.toggle('active', v.id === `view-${viewId}`)
  );
  document.querySelector('.topbar').style.display =
    viewId === 'home' ? 'flex' : 'none';

  if (viewId === 'detail' && id !== null) {
    state.currentRecipeId = id;
    state.checkedIng = new Set();
    state.doneSteps = new Set();
    const recipe = RECIPES.find(r => r.id === id);
    state.currentServings = recipe ? recipe.base_servings : 1;
    state.currentVersionId = recipe?.versions?.[0]?.id ?? null;
    renderDetail(id);
  }

  if (viewId === 'my-recipes') {
    renderMyRecipesPage();
  }

  if (viewId === 'my-detail' && id !== null) {
    state.currentMyRecipeId = id;
    renderMyRecipeDetail(id);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.navigateTo = navigateTo;

// ============================================================
// 食材資料解析工具
// ============================================================
function getIngName(ing) {
  const found = getIngredient(ing.ingredient_id);
  if (!found) return ing.ingredient_id;
  return found.name; // 永遠顯示食材基底名稱，不顯示變體名稱
}

// 取得變體副標題（例：冷凍、生、熟，只有在與 base name 不同時才顯示）
function getIngVariantLabel(ing) {
  const found = getIngredient(ing.ingredient_id);
  if (!found) return null;
  const variant = found.variants.find(v => v.id === ing.variant_id);
  if (!variant) return null;
  // 若 variant.label 與 found.name 相同則不顯示
  return variant.label !== found.name ? variant.label : null;
}

function getIngCategories(ing) {
  const found = getIngredient(ing.ingredient_id);
  return found ? found.categories : [];
}

// ============================================================
// Search & Filter
// ============================================================
function setupSearch() {
  document.getElementById('search-input').addEventListener('input', e => {
    state.search = e.target.value.trim();
    renderGrid();
    updateActiveFilterCount();
  });
}

function getFilteredRecipes() {
  const q = state.search.toLowerCase();

  return RECIPES.filter(r => {
    if (q) {
      const ingNames = r.ingredients.map(i => getIngName(i));
      const ingCategories = r.ingredients.flatMap(i => getIngCategories(i));
      const hay = [
        r.title, r.subtitle, r.description,
        r.cuisine, r.meal_type, r.category,
        ...r.tags, ...ingNames, ...ingCategories,
      ].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }

    if (state.cuisines.size && !state.cuisines.has(r.cuisine)) return false;
    if (state.mealTypes.size && !state.mealTypes.has(r.meal_type)) return false;
    if (state.categories.size && !state.categories.has(r.category)) return false;

    if (state.recipeTags.size) {
      for (const t of state.recipeTags) { if (!r.tags.includes(t)) return false; }
    }

    if (state.ingTags.size) {
      const recipeIngCategories = new Set(r.ingredients.flatMap(i => getIngCategories(i)));
      for (const t of state.ingTags) { if (!recipeIngCategories.has(t)) return false; }
    }

    if (state.methodTypes.size) {
      const recipeMethodTypes = new Set(
        r.versions.flatMap(v =>
          v.steps.filter(s => s.method_id).map(s => {
            const m = getCookingMethod(s.method_id);
            return m ? m.type : null;
          }).filter(Boolean)
        )
      );
      for (const t of state.methodTypes) { if (!recipeMethodTypes.has(t)) return false; }
    }

    if (state.tastes.size) {
      let recipeTastes = new Set();
      r.ingredients.forEach(i => {
        const found = getIngredient(i.ingredient_id);
        if (found && found.tastes) found.tastes.forEach(t => recipeTastes.add(t));
      });
      for (const t of state.tastes) { if (!recipeTastes.has(t)) return false; }
    }

    if (state.textures.size) {
      let recipeTextures = new Set();
      r.ingredients.forEach(i => {
        const found = getIngredient(i.ingredient_id);
        if (found && found.textures) found.textures.forEach(t => recipeTextures.add(t));
      });
      for (const t of state.textures) { if (!recipeTextures.has(t)) return false; }
    }

    return true;
  });
}

// ============================================================
// Build Filter Panel
// ============================================================
function buildFilterPanel() {
  const panel = document.getElementById('filter-panel');
  panel.innerHTML = `
    <div class="filter-section">
      <div class="filter-section-title">🌍 國籍料理</div>
      <div class="filter-chips" id="filter-cuisine">
        ${CUISINE_LIST.map(c => chipBtn(c, 'cuisine')).join('')}
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">🍽 主食類型</div>
      <div class="filter-chips" id="filter-mealtype">
        ${MEALTYPE_LIST.map(c => chipBtn(c, 'mealtype')).join('')}
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">📦 料理分類</div>
      <div class="filter-chips" id="filter-category">
        ${CATEGORY_LIST.map(c => chipBtn(c, 'category')).join('')}
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">🔥 烹飪方式</div>
      <div class="filter-chips" id="filter-method">
        ${Object.entries(METHOD_TYPES).map(([k, name]) => chipBtn(name, 'method', k)).join('')}
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">👅 食材口味</div>
      <div class="filter-chips" id="filter-taste">
        ${INGREDIENT_TASTES.map(c => chipBtn(c, 'taste')).join('')}
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">🦷 食材口感</div>
      <div class="filter-chips" id="filter-texture">
        ${INGREDIENT_TEXTURES.map(c => chipBtn(c, 'texture')).join('')}
      </div>
    </div>
    <div class="filter-actions">
      <button class="filter-clear-btn" onclick="clearAllFilters()">清除全部篩選</button>
    </div>
  `;
}

function chipBtn(label, type, value) {
  const val = value ?? label;
  return `<button class="filter-chip" data-type="${type}" data-val="${val}" onclick="toggleChip(this,'${type}','${val}')">${label}</button>`;
}

window.toggleChip = function(el, type, val) {
  const sets = {
    cuisine: state.cuisines, mealtype: state.mealTypes,
    category: state.categories, rtag: state.recipeTags,
    ingtag: state.ingTags, method: state.methodTypes,
    taste: state.tastes, texture: state.textures,
  };
  const s = sets[type];
  if (s.has(val)) { s.delete(val); el.classList.remove('active'); }
  else            { s.add(val);    el.classList.add('active'); }
  renderGrid();
  updateActiveFilterCount();
};

window.clearAllFilters = function() {
  state.cuisines.clear(); state.mealTypes.clear();
  state.categories.clear(); state.recipeTags.clear();
  state.ingTags.clear(); state.methodTypes.clear();
  state.tastes.clear(); state.textures.clear();
  state.search = '';
  document.getElementById('search-input').value = '';
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  renderGrid();
  updateActiveFilterCount();
};

function updateActiveFilterCount() {
  const total =
    state.cuisines.size + state.mealTypes.size + state.categories.size +
    state.recipeTags.size + state.ingTags.size + state.methodTypes.size +
    state.tastes.size + state.textures.size +
    (state.search ? 1 : 0);
  const badge = document.getElementById('filter-toggle-badge');
  if (badge) {
    badge.textContent = total > 0 ? total : '';
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

window.toggleFilterPanel = function() {
  state.filterOpen = !state.filterOpen;
  const panel = document.getElementById('filter-panel');
  const btn = document.getElementById('filter-toggle-btn');
  panel.classList.toggle('open', state.filterOpen);
  btn.classList.toggle('active', state.filterOpen);
};

// ============================================================
// Recipe Grid
// ============================================================
function renderGrid() {
  const filtered = getFilteredRecipes();
  document.getElementById('count-badge').textContent = `${filtered.length} 道食譜`;

  const grid = document.getElementById('recipe-grid');
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🍜</div>
        <p>沒有找到符合的食譜</p>
        <button class="filter-clear-btn" style="margin-top:12px" onclick="clearAllFilters()">清除篩選條件</button>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(r => `
    <div class="recipe-card" onclick="navigateTo('detail', ${r.id})">
      <div class="card-image-wrap">
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <div class="card-image-overlay"></div>
        <span class="card-category">${r.category}</span>
        <span class="card-difficulty">${r.difficulty}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${r.title}</div>
        <div class="card-subtitle">${r.subtitle}</div>
        <div class="card-cuisine-row">
          <span class="cuisine-badge">${r.cuisine}</span>
          <span class="mealtype-badge">${r.meal_type}</span>
        </div>
        <div class="card-desc">${r.description}</div>
        <div class="card-meta">
          <div class="card-meta-item"><span>⏱</span><span>${r.time_estimate}</span></div>
          <div class="card-meta-item"><span>👤</span><span>${r.base_servings} 份</span></div>
        </div>
        <div class="card-tags">
          ${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// Recipe Detail
// ============================================================
function renderDetail(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;

  const currentVersion = r.versions.find(v => v.id === state.currentVersionId) ?? r.versions[0];
  const totalSteps = currentVersion.steps.length;

  const versionTabs = r.versions.length > 1
    ? `<div class="version-tabs">
        ${r.versions.map(v => `
          <button class="version-tab ${v.id === currentVersion.id ? 'active' : ''}"
            onclick="switchVersion(${r.id}, '${v.id}')">${v.label}</button>
        `).join('')}
      </div>`
    : '';

  const detail = document.getElementById('view-detail');
  detail.innerHTML = `
    <button class="detail-back" onclick="navigateTo('home')">← 返回食譜</button>

    <div class="detail-hero">
      <img src="${r.image}" alt="${r.title}">
      <div class="detail-hero-overlay">
        <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap">
          <span class="category-badge">${r.category}</span>
          <span class="cuisine-badge">${r.cuisine}</span>
          <span class="mealtype-badge">${r.meal_type}</span>
        </div>
        <div class="detail-title">${r.title}</div>
        <div class="detail-subtitle">${r.subtitle}</div>
      </div>
    </div>

    <div class="detail-meta-row">
      <div class="detail-meta-item">
        <span class="meta-label">烹飪時間</span>
        <span class="meta-value">⏱ ${r.time_estimate}</span>
      </div>
      <div class="detail-meta-item">
        <span class="meta-label">難度</span>
        <span class="meta-value">📊 ${r.difficulty}</span>
      </div>
      <div class="detail-meta-item">
        <span class="meta-label">份量調整</span>
        <div class="servings-ctrl">
          <button class="srv-btn" onclick="changeServings(-1, ${r.id})">−</button>
          <span class="srv-num" id="srv-display">${state.currentServings}</span>
          <span style="font-size:0.78rem;color:var(--text-muted)">人份</span>
          <button class="srv-btn" onclick="changeServings(1, ${r.id})">＋</button>
        </div>
      </div>
    </div>

    <div class="detail-desc">${r.description}</div>

    <div class="section-title">🧂 食材
      <span style="font-size:0.72rem;font-weight:400;color:var(--text-muted);margin-left:8px">點擊打勾 ｜ ☆ = 調味料</span>
    </div>
    <div class="ingredients-grid" id="ing-grid"></div>

    ${versionTabs}

    <div class="progress-wrap">
      <div class="progress-label">
        <span>烹飪進度</span>
        <span id="step-progress-text">0 / ${totalSteps}</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" id="step-progress-fill" style="width:0%"></div>
      </div>
    </div>

    <div class="section-title">📋 作法
      ${currentVersion.note
        ? `<span style="font-size:0.72rem;font-weight:400;color:var(--text-muted);margin-left:8px">${currentVersion.note}</span>`
        : ''}
    </div>
    <div class="steps-list" id="steps-list"></div>

    ${r.tips ? `
      <div class="tips-box">
        <div class="tips-label">💡 小撇步</div>
        <p>${r.tips}</p>
      </div>
    ` : ''}

    <div class="card-tags" style="margin-bottom:40px">
      ${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}
    </div>
  `;

  renderIngredients(id);
  renderSteps(id);
}

// ── 食材清單 ────────────────────────────────────────────────

function scaleQty(qty, baseServings, currentServings) {
  if (qty === null) return null;
  return parseFloat((qty * (currentServings / baseServings)).toFixed(2));
}

function formatQty(qty, unit, unitNote) {
  if (qty === null) return unit;
  const label = unitNote ? `${unit}（${unitNote}）` : unit;
  return `${qty} ${label}`;
}

function renderIngredients(id) {
  const r = RECIPES.find(x => x.id === id);
  const grid = document.getElementById('ing-grid');
  if (!r || !grid) return;

  grid.innerHTML = r.ingredients.map((ing, i) => {
    const scaledQty = ing.scalable
      ? scaleQty(ing.qty, r.base_servings, state.currentServings)
      : ing.qty;
    const amountStr  = formatQty(scaledQty, ing.unit, ing.unit_note);
    const checked    = state.checkedIng.has(i);
    const name       = getIngName(ing);
    const categories = getIngCategories(ing);

    const tagHtml = categories.map(cat => {
      const c = INGREDIENT_TAG_COLORS[cat] || {};
      const style = c.bg ? `style="background:${c.bg};border-color:${c.border};color:${c.text}"` : '';
      return `<span class="ing-tag" ${style}>${cat}</span>`;
    }).join('');

    const variantLabel = getIngVariantLabel(ing);

    return `
      <div class="ingredient-item ${checked ? 'checked' : ''}" id="ing-${i}" onclick="toggleIng(${i}, ${id})">
        <div class="ingredient-left">
          <div class="ing-check">${checked ? '✓' : ''}</div>
          <div class="ing-info">
            <div class="ing-name-wrap">
              <span class="ing-name">${name}</span>
              ${ing.is_seasoning ? '<span class="ing-star">☆</span>' : ''}
            </div>
            ${variantLabel ? `<span class="ing-variant">${variantLabel}</span>` : ''}
            <div class="ing-tags">
              ${tagHtml}
              ${ing.optional ? '<span class="ing-tag" style="opacity:0.6">選填</span>' : ''}
            </div>
          </div>
        </div>
        <span class="ing-amount ${ing.scalable ? 'scalable' : ''}" id="ing-amount-${i}">${amountStr}</span>
      </div>
    `;
  }).join('');
}

// ── 步驟 ─────────────────────────────────────────────────────

function renderSteps(id) {
  const r = RECIPES.find(x => x.id === id);
  const list = document.getElementById('steps-list');
  if (!r || !list) return;

  const currentVersion = r.versions.find(v => v.id === state.currentVersionId) ?? r.versions[0];
  const steps = currentVersion.steps;

  list.innerHTML = steps.map((step, i) => {
    const done = state.doneSteps.has(i);

    let methodHtml = '';
    if (step.method_id) {
      const method = getCookingMethod(step.method_id);
      if (method) {
        const timeStr = step.duration_s
          ? `${Math.ceil(step.duration_s / 60)} 分鐘`
          : (method.params.duration_s ? `${Math.ceil(method.params.duration_s / 60)} 分鐘` : '');
        const vesselStr = method.params.vessel ? `・${method.params.vessel}` : '';
        methodHtml = `
          <div class="step-method">
            <span class="method-badge">${method.name}</span>
            ${timeStr ? `<span class="method-time">${timeStr}</span>` : ''}
            ${vesselStr ? `<span class="method-vessel">${vesselStr}</span>` : ''}
            ${method.safety_note ? `<span class="method-safety">⚠ ${method.safety_note}</span>` : ''}
          </div>`;
      }
    }

    return `
      <div class="step-item ${done ? 'done' : ''}" id="step-${i}" onclick="toggleStep(${i}, ${steps.length})">
        <div class="step-num" id="step-num-${i}">${done ? '✓' : step.order}</div>
        <div class="step-content">
          <div class="step-text">${step.instruction}</div>
          ${methodHtml}
        </div>
      </div>
    `;
  }).join('');
}

// ── 互動 ─────────────────────────────────────────────────────

window.toggleIng = function(idx, recipeId) {
  if (state.checkedIng.has(idx)) state.checkedIng.delete(idx);
  else                           state.checkedIng.add(idx);
  renderIngredients(recipeId);
};

window.toggleStep = function(idx, total) {
  if (state.doneSteps.has(idx)) state.doneSteps.delete(idx);
  else                          state.doneSteps.add(idx);

  const pct = Math.round((state.doneSteps.size / total) * 100);
  const fillEl = document.getElementById('step-progress-fill');
  if (fillEl) fillEl.style.width = pct + '%';
  const textEl = document.getElementById('step-progress-text');
  if (textEl) textEl.textContent = `${state.doneSteps.size} / ${total}`;
  renderSteps(state.currentRecipeId);
};

window.switchVersion = function(recipeId, versionId) {
  state.currentVersionId = versionId;
  state.doneSteps = new Set();
  renderDetail(recipeId);
};

// ============================================================
// Servings Control
// ============================================================
window.changeServings = function(delta, recipeId) {
  const newVal = Math.max(1, Math.min(20, state.currentServings + delta));
  if (newVal === state.currentServings) return;
  state.currentServings = newVal;
  document.getElementById('srv-display').textContent = newVal;
  renderIngredients(recipeId);
};

// ============================================================
// My Recipes Page
// ============================================================
function renderMyRecipesPage() {
  const view = document.getElementById('view-my-recipes');
  if (!view) return;
  state.myRecipes = loadMyRecipes();

  const headerHtml = `
    <div class="my-recipes-header">
      <div>
        <h2 class="my-recipes-title">📒 我的食譜</h2>
        <p class="my-recipes-sub">收藏心愛料理，隨時查看</p>
      </div>
      <button class="add-recipe-btn" onclick="openAddRecipeModal()">＋ 新增食譜</button>
    </div>
  `;

  if (state.myRecipes.length === 0) {
    view.innerHTML = headerHtml + `
      <div class="empty-state">
        <div class="empty-icon">📒</div>
        <p>還沒有收藏的食譜</p>
        <p style="font-size:0.82rem;color:var(--text-muted);margin-top:6px">從線上食譜加入，或自行新建一道</p>
        <button class="add-recipe-btn" style="margin-top:16px" onclick="openAddRecipeModal()">＋ 新增第一道食譜</button>
      </div>
    `;
    return;
  }

  view.innerHTML = headerHtml + `
    <div class="my-count-label">${state.myRecipes.length} 道食譜</div>
    <div class="recipe-grid">
      ${state.myRecipes.map(r => myRecipeCardHTML(r)).join('')}
    </div>
  `;
}

function myRecipeCardHTML(r) {
  const isOnline = r.source === 'online';
  const imgHtml = r.image
    ? `<img src="${r.image}" alt="${r.title}" loading="lazy">`
    : `<div class="my-card-no-img">🍽</div>`;

  return `
    <div class="recipe-card my-recipe-card" onclick="navigateMyRecipe('${r.my_id}', ${isOnline ? r.source_id : 'null'})">
      <div class="card-image-wrap">
        ${imgHtml}
        <div class="card-image-overlay"></div>
        <span class="card-category">${r.category || '食譜'}</span>
        <span class="my-source-badge ${isOnline ? 'source-online' : 'source-custom'}">${isOnline ? '🌐 線上' : '✏️ 自訂'}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${r.title}</div>
        ${r.subtitle ? `<div class="card-subtitle">${r.subtitle}</div>` : ''}
        <div class="card-cuisine-row">
          ${r.cuisine ? `<span class="cuisine-badge">${r.cuisine}</span>` : ''}
          ${r.meal_type ? `<span class="mealtype-badge">${r.meal_type}</span>` : ''}
        </div>
        ${r.description ? `<div class="card-desc">${r.description}</div>` : ''}
        <div class="card-meta">
          ${r.time_estimate ? `<div class="card-meta-item"><span>⏱</span><span>${r.time_estimate}</span></div>` : ''}
          ${r.difficulty ? `<div class="card-meta-item"><span>📊</span><span>${r.difficulty}</span></div>` : ''}
        </div>
        <div class="my-card-footer">
          <span class="my-added-date">加入 ${new Date(r.added_at).toLocaleDateString('zh-TW')}</span>
          <button class="my-delete-btn" onclick="event.stopPropagation(); confirmDeleteMyRecipe('${r.my_id}')">🗑 刪除</button>
        </div>
      </div>
    </div>
  `;
}

window.navigateMyRecipe = function(myId, sourceId) {
  if (sourceId !== null && sourceId !== undefined && typeof sourceId === 'number') {
    navigateTo('detail', sourceId);
  } else {
    navigateTo('my-detail', myId);
  }
};

window.confirmDeleteMyRecipe = function(myId) {
  if (!confirm('確定要刪除這道食譜？')) return;
  state.myRecipes = deleteMyRecipe(myId);
  renderMyRecipesPage();
  showToast('已刪除食譜');
};

// ── 自訂食譜詳細頁 ──────────────────────────────────────────

function renderMyRecipeDetail(myId) {
  const r = state.myRecipes.find(x => x.my_id === myId)
         || loadMyRecipes().find(x => x.my_id === myId);
  if (!r) return;

  const ingredientLines = (r.text_ingredients || '').split('\n').filter(Boolean);
  const stepLines = (r.text_steps || '').split('\n').filter(Boolean);

  const detail = document.getElementById('view-my-detail');
  detail.innerHTML = `
    <button class="detail-back" onclick="navigateTo('my-recipes')">← 返回我的食譜</button>

    <div class="detail-hero ${!r.image ? 'detail-hero-placeholder' : ''}">
      ${r.image ? `<img src="${r.image}" alt="${r.title}">` : '<div class="detail-placeholder-bg">🍽</div>'}
      <div class="detail-hero-overlay">
        <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap">
          ${r.category ? `<span class="category-badge">${r.category}</span>` : ''}
          ${r.cuisine  ? `<span class="cuisine-badge">${r.cuisine}</span>`   : ''}
          ${r.meal_type? `<span class="mealtype-badge">${r.meal_type}</span>`: ''}
          <span class="my-source-badge source-custom">✏️ 自訂食譜</span>
        </div>
        <div class="detail-title">${r.title}</div>
        ${r.subtitle ? `<div class="detail-subtitle">${r.subtitle}</div>` : ''}
      </div>
    </div>

    <div class="detail-meta-row">
      ${r.time_estimate ? `<div class="detail-meta-item"><span class="meta-label">烹飪時間</span><span class="meta-value">⏱ ${r.time_estimate}</span></div>` : ''}
      ${r.difficulty    ? `<div class="detail-meta-item"><span class="meta-label">難度</span><span class="meta-value">📊 ${r.difficulty}</span></div>` : ''}
      ${r.base_servings ? `<div class="detail-meta-item"><span class="meta-label">份量</span><span class="meta-value">👤 ${r.base_servings} 人份</span></div>` : ''}
    </div>

    ${r.description ? `<div class="detail-desc">${r.description}</div>` : ''}

    ${ingredientLines.length > 0 ? `
      <div class="section-title">🧂 食材</div>
      <div class="my-ingredient-list">
        ${ingredientLines.map(line => `<div class="my-ingredient-item">${line}</div>`).join('')}
      </div>
    ` : ''}

    ${stepLines.length > 0 ? `
      <div class="section-title">📋 作法</div>
      <div class="steps-list" style="margin-bottom:28px">
        ${stepLines.map((line, i) => `
          <div class="step-item">
            <div class="step-num">${i + 1}</div>
            <div class="step-content"><div class="step-text">${line}</div></div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${r.tips ? `
      <div class="tips-box">
        <div class="tips-label">💡 小撇步</div>
        <p>${r.tips}</p>
      </div>
    ` : ''}

    ${r.tags?.length > 0 ? `
      <div class="card-tags" style="margin-bottom:40px">
        ${r.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    ` : ''}
  `;
}

// ============================================================
// Add Recipe Modal
// ============================================================
function buildAddRecipeModal() {
  const modal = document.getElementById('add-recipe-modal');
  if (!modal) return;

  modal.innerHTML = `
    <div class="modal-box" onclick="event.stopPropagation()">
      <div class="modal-header">
        <h3>📒 新增食譜</h3>
        <button class="modal-close-btn" onclick="closeAddRecipeModal()">✕</button>
      </div>

      <div class="modal-tabs">
        <button class="modal-tab active" id="modal-tab-online" onclick="switchAddTab('online')">🌐 從線上食譜加入</button>
        <button class="modal-tab" id="modal-tab-custom" onclick="switchAddTab('custom')">✏️ 自訂新建</button>
      </div>

      <div id="modal-content-online" class="modal-tab-content">
        <div class="online-recipe-picker" id="online-recipe-picker"></div>
      </div>

      <div id="modal-content-custom" class="modal-tab-content" style="display:none">
        <form id="custom-recipe-form" onsubmit="submitCustomRecipe(event)">
          <div class="form-row">
            <div class="form-field">
              <label>菜名 <span class="required-star">*</span></label>
              <input type="text" name="title" placeholder="例：蒜香奶油蝦" required>
            </div>
            <div class="form-field">
              <label>副標題</label>
              <input type="text" name="subtitle" placeholder="例：Garlic Butter Shrimp">
            </div>
          </div>
          <div class="form-field">
            <label>簡介</label>
            <textarea name="description" rows="2" placeholder="一兩句描述這道料理的特色…"></textarea>
          </div>
          <div class="form-row three-col">
            <div class="form-field">
              <label>國籍料理</label>
              <select name="cuisine">
                ${CUISINE_LIST.map(c => `<option value="${c}">${c}</option>`).join('')}
              </select>
            </div>
            <div class="form-field">
              <label>用餐分類</label>
              <select name="category">
                ${CATEGORY_LIST.map(c => `<option value="${c}">${c}</option>`).join('')}
              </select>
            </div>
            <div class="form-field">
              <label>主食類型</label>
              <select name="meal_type">
                ${MEALTYPE_LIST.map(c => `<option value="${c}">${c}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="form-row three-col">
            <div class="form-field">
              <label>難度</label>
              <select name="difficulty">
                ${DIFFICULTY_LIST.map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>
            <div class="form-field">
              <label>烹飪時間</label>
              <input type="text" name="time_estimate" placeholder="例：30 分鐘">
            </div>
            <div class="form-field">
              <label>份量（人）</label>
              <input type="number" name="base_servings" value="1" min="1" max="20">
            </div>
          </div>
          <div class="form-field">
            <label>標籤 <span class="form-hint">逗號分隔</span></label>
            <input type="text" name="tags" placeholder="例：快速, 辣, 清淡">
          </div>
          <div class="form-field">
            <label>食材清單 <span class="form-hint">每行一項</span></label>
            <textarea name="text_ingredients" rows="5" placeholder="雞胸肉 200g&#10;大蒜 3 瓣&#10;橄欖油 2 大匙"></textarea>
          </div>
          <div class="form-field">
            <label>作法步驟 <span class="form-hint">每行一個步驟</span></label>
            <textarea name="text_steps" rows="6" placeholder="熱鍋後加入橄欖油&#10;放入蒜末爆香至金黃&#10;加入雞肉煎至全熟"></textarea>
          </div>
          <div class="form-field">
            <label>小撇步 <span class="form-hint">選填</span></label>
            <textarea name="tips" rows="2" placeholder="可以加入檸檬汁提味…"></textarea>
          </div>
          <div class="form-actions">
            <button type="button" class="filter-clear-btn" onclick="closeAddRecipeModal()">取消</button>
            <button type="submit" class="submit-recipe-btn">✓ 新增食譜</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

window.openAddRecipeModal = function() {
  const modal = document.getElementById('add-recipe-modal');
  if (!modal) return;
  // Refresh online picker with current saved state
  switchAddTab('online');
  buildOnlineRecipePicker();
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
};

window.closeAddRecipeModal = function() {
  const modal = document.getElementById('add-recipe-modal');
  if (!modal) return;
  modal.style.display = 'none';
  document.body.style.overflow = '';
};

window.handleModalBackdrop = function(e) {
  if (e.target === document.getElementById('add-recipe-modal')) closeAddRecipeModal();
};

window.switchAddTab = function(tab) {
  document.getElementById('modal-content-online').style.display = tab === 'online' ? 'block' : 'none';
  document.getElementById('modal-content-custom').style.display = tab === 'custom' ? 'block' : 'none';
  document.getElementById('modal-tab-online').classList.toggle('active', tab === 'online');
  document.getElementById('modal-tab-custom').classList.toggle('active', tab === 'custom');
};

function buildOnlineRecipePicker() {
  const picker = document.getElementById('online-recipe-picker');
  if (!picker) return;
  const myOnlineIds = new Set(
    (loadMyRecipes()).filter(r => r.source === 'online').map(r => r.source_id)
  );

  picker.innerHTML = RECIPES.map(r => {
    const added = myOnlineIds.has(r.id);
    return `
      <div class="online-pick-card ${added ? 'already-added' : ''}" onclick="${added ? '' : `addOnlineRecipe(${r.id})`}">
        <div class="online-pick-img">
          <img src="${r.image}" alt="${r.title}" loading="lazy">
        </div>
        <div class="online-pick-info">
          <div class="online-pick-title">${r.title}</div>
          <div class="online-pick-meta">${r.cuisine} · ${r.category} · ${r.time_estimate}</div>
        </div>
        <div class="online-pick-action">
          ${added ? '<span class="pick-added-badge">✓ 已加入</span>' : '<button class="pick-add-btn">＋ 加入</button>'}
        </div>
      </div>
    `;
  }).join('');
}

window.addOnlineRecipe = function(recipeId) {
  const r = RECIPES.find(x => x.id === recipeId);
  if (!r) return;

  const result = addMyRecipe({
    my_id: `my_${Date.now()}`,
    source: 'online',
    source_id: r.id,
    title: r.title,
    subtitle: r.subtitle,
    description: r.description,
    image: r.image,
    category: r.category,
    cuisine: r.cuisine,
    meal_type: r.meal_type,
    tags: [...r.tags],
    time_estimate: r.time_estimate,
    difficulty: r.difficulty,
    base_servings: r.base_servings,
    added_at: new Date().toISOString(),
  });

  if (result === null) { showToast('這道食譜已在你的收藏中'); return; }
  state.myRecipes = result;
  showToast(`「${r.title}」已加入我的食譜 ✓`);
  buildOnlineRecipePicker();
};

window.submitCustomRecipe = function(event) {
  event.preventDefault();
  const fd = new FormData(event.target);
  const title = fd.get('title')?.trim();
  if (!title) return;

  const tags = (fd.get('tags') || '').split(',').map(t => t.trim()).filter(Boolean);

  const result = addMyRecipe({
    my_id: `my_${Date.now()}`,
    source: 'custom',
    title,
    subtitle:          fd.get('subtitle')?.trim() || '',
    description:       fd.get('description')?.trim() || '',
    cuisine:           fd.get('cuisine') || '其他',
    meal_type:         fd.get('meal_type') || '料理',
    category:          fd.get('category') || '晚餐',
    difficulty:        fd.get('difficulty') || '中等',
    time_estimate:     fd.get('time_estimate')?.trim() || '',
    base_servings:     parseInt(fd.get('base_servings')) || 1,
    tags,
    text_ingredients:  fd.get('text_ingredients')?.trim() || '',
    text_steps:        fd.get('text_steps')?.trim() || '',
    tips:              fd.get('tips')?.trim() || '',
    image:             null,
    added_at:          new Date().toISOString(),
  });

  state.myRecipes = result;
  showToast(`「${title}」已新增到我的食譜 ✓`);
  closeAddRecipeModal();
  event.target.reset();
  // If on my-recipes page, refresh
  if (document.getElementById('view-my-recipes')?.classList.contains('active')) {
    renderMyRecipesPage();
  }
};

// ============================================================
// Toast
// ============================================================
function showToast(msg) {
  const toast = document.getElementById('app-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ============================================================
// Kitchen Panel
// ============================================================
function buildKitchenPanel() {
  const panel = document.getElementById('kitchen-panel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="kitchen-topbar">
      <div class="kitchen-title-area">
        <span class="kitchen-title">🥘 廚房模式</span>
        <span class="kitchen-subtitle">選擇你有的食材，找出能做的料理</span>
      </div>
      <button class="kitchen-close-btn" onclick="closeKitchenPanel()">✕ 關閉</button>
    </div>

    <div class="kitchen-selected-bar" id="kitchen-selected-bar" style="display:none">
      <span class="kitchen-sel-label">已選：</span>
      <div class="kitchen-sel-chips" id="kitchen-sel-chips"></div>
      <button class="kitchen-clear-sel" onclick="clearKitchenIngredients()">清除</button>
    </div>

    <div class="kitchen-body">
      <div class="kitchen-left">
        <div class="kitchen-left-title">點選你有的食材</div>
        <div class="search-wrap" style="margin-bottom:16px;">
          <span class="search-icon">🔍</span>
          <input type="search" id="kitchen-search-input" placeholder="搜尋食材名稱…" autocomplete="off">
        </div>
        <div id="kitchen-categories"></div>
      </div>
      <div class="kitchen-right">
        <div id="kitchen-results-area">
          <div class="kitchen-placeholder">
            <div class="kitchen-placeholder-icon">🥘</div>
            <p>選擇食材後，這裡會顯示能做的料理</p>
          </div>
        </div>
      </div>
    </div>
  `;

  buildKitchenCategories();

  // 設置搜尋
  const kitSearch = document.getElementById('kitchen-search-input');
  if (kitSearch) {
    kitSearch.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      document.querySelectorAll('.kitchen-ing-chip').forEach(chip => {
        const name = chip.dataset.ingName.toLowerCase();
        const show = !q || name.includes(q);
        chip.style.display = show ? 'inline-flex' : 'none';
      });
      document.querySelectorAll('.kitchen-accordion').forEach(acc => {
        const hasVisible = Array.from(acc.querySelectorAll('.kitchen-ing-chip')).some(c => c.style.display !== 'none');
        acc.style.display = hasVisible ? 'block' : 'none';
      });
    });
  }
}

function buildKitchenCategories() {
  const container = document.getElementById('kitchen-categories');
  if (!container) return;

  // Group by INGREDIENT_CATEGORIES
  const byCategory = {};
  INGREDIENT_CATEGORIES.forEach(cat => { byCategory[cat] = []; });

  // Deduplicate INGREDIENTS by base id in case they appear in multiple lists
  const uniqueIngs = Array.from(new Map(INGREDIENTS.map(i => [i.id, i])).values());

  for (const ing of uniqueIngs) {
    for (const cat of ing.categories) {
      if (byCategory[cat]) byCategory[cat].push(ing);
    }
  }

  container.innerHTML = INGREDIENT_CATEGORIES
    .filter(cat => byCategory[cat].length > 0)
    .map((cat, i) => {
      const ings = byCategory[cat];
      const colors = INGREDIENT_TAG_COLORS[cat] || {};
      return `
        <div class="kitchen-accordion ${i < 2 ? 'open' : ''}">
          <button class="kitchen-acc-header" onclick="toggleKitchenAccordion(this)">
            <span class="kitchen-acc-cat">
              <span class="kitchen-acc-dot" style="background:${colors.border || 'var(--accent)'}"></span>
              ${cat}
              <span class="kitchen-acc-count">${ings.length}</span>
            </span>
            <span class="kitchen-acc-arrow">▾</span>
          </button>
          <div class="kitchen-acc-body">
            <div class="kitchen-ing-chips">
              ${ings.map(ing => `
                <button class="kitchen-ing-chip"
                  data-ing-id="${ing.id}"
                  data-ing-name="${ing.name}"
                  onclick="toggleKitchenIngredient('${ing.id}', '${ing.name}')">
                  ${ing.name}
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }).join('');
}

window.toggleKitchenAccordion = function(header) {
  header.closest('.kitchen-accordion').classList.toggle('open');
};

window.toggleKitchenIngredient = function(ingId, ingName) {
  if (state.kitchenIngredients.has(ingId)) state.kitchenIngredients.delete(ingId);
  else state.kitchenIngredients.add(ingId);

  document.querySelectorAll(`.kitchen-ing-chip[data-ing-id="${ingId}"]`)
    .forEach(el => el.classList.toggle('active', state.kitchenIngredients.has(ingId)));

  updateKitchenSelectedBar();
  renderKitchenResults();
};

function updateKitchenSelectedBar() {
  const bar = document.getElementById('kitchen-selected-bar');
  const chipsEl = document.getElementById('kitchen-sel-chips');
  if (!bar || !chipsEl) return;

  if (state.kitchenIngredients.size === 0) { bar.style.display = 'none'; return; }
  bar.style.display = 'flex';

  const chipsMap = new Map();
  document.querySelectorAll('.kitchen-ing-chip.active').forEach(el => {
    chipsMap.set(el.dataset.ingId, el.dataset.ingName);
  });

  const chips = Array.from(chipsMap.entries()).map(([id, name]) => ({ id, name }));

  chipsEl.innerHTML = chips.map(c =>
    `<span class="kitchen-sel-chip" onclick="toggleKitchenIngredient('${c.id}', '${c.name}')">${c.name} ✕</span>`
  ).join('');
}

window.clearKitchenIngredients = function() {
  state.kitchenIngredients.clear();
  document.querySelectorAll('.kitchen-ing-chip.active').forEach(el => el.classList.remove('active'));
  updateKitchenSelectedBar();
  renderKitchenResults();
};

function getKitchenResults() {
  if (state.kitchenIngredients.size === 0) return [];
  return RECIPES
    .map(r => {
      const ids = new Set(r.ingredients.map(i => i.ingredient_id));
      const recipeTotal = ids.size;
      let matchCount = 0;
      for (const sel of state.kitchenIngredients) { if (ids.has(sel)) matchCount++; }
      return { recipe: r, matchCount, recipeTotal };
    })
    .filter(({ matchCount }) => matchCount > 0)
    .sort((a, b) => {
      const matchRateA = a.matchCount / a.recipeTotal;
      const matchRateB = b.matchCount / b.recipeTotal;
      if (matchRateB !== matchRateA) return matchRateB - matchRateA;
      return b.matchCount - a.matchCount;
    });
}

function renderKitchenResults() {
  const area = document.getElementById('kitchen-results-area');
  if (!area) return;
  const results = getKitchenResults();

  if (results.length === 0) {
    area.innerHTML = `
      <div class="kitchen-placeholder">
        <div class="kitchen-placeholder-icon">🔍</div>
        <p>沒有找到符合的料理</p>
        <p class="kitchen-placeholder-sub">試試看選擇不同食材</p>
      </div>
    `;
    return;
  }

  area.innerHTML = `
    <div class="kitchen-results-header">找到 <strong>${results.length}</strong> 道符合的料理</div>
    <div class="kitchen-results-list">
      ${results.map(({ recipe: r, matchCount, recipeTotal }) => `
        <div class="kitchen-result-card" onclick="closeKitchenPanel(); navigateTo('detail', ${r.id})">
          <div class="kitchen-result-img">
            <img src="${r.image}" alt="${r.title}" loading="lazy">
          </div>
          <div class="kitchen-result-info">
            <div class="kitchen-result-title">${r.title}</div>
            <div class="kitchen-result-meta">${r.cuisine} · ${r.time_estimate} · ${r.difficulty}</div>
            <div class="kitchen-match-wrap">
              <div class="kitchen-match-bar">
                <div class="kitchen-match-fill" style="width:${Math.round(matchCount / recipeTotal * 100)}%"></div>
              </div>
              <span class="kitchen-match-label">匹配 ${matchCount}/${recipeTotal} 種食材</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

window.openKitchenPanel = function() {
  state.kitchenOpen = true;
  document.getElementById('kitchen-panel')?.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeKitchenPanel = function() {
  state.kitchenOpen = false;
  document.getElementById('kitchen-panel')?.classList.remove('open');
  document.body.style.overflow = '';
};

// ============================================================
// Service Worker
// ============================================================
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  }
}
