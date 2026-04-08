import { RECIPES, CUISINE_LIST, MEALTYPE_LIST, CATEGORY_LIST } from './recipes.js';
import { INGREDIENT_TAG_COLORS } from './ingredients.js';

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
  currentRecipeId: null,
  currentServings: 1,
  currentVersionId: null,
  checkedIng: new Set(),
  doneSteps: new Set(),
  filterOpen: false,
};

// ============================================================
// Boot
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  buildFilterPanel();
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

function navigateTo(viewId, recipeId = null) {
  document.querySelectorAll('[data-nav]').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.nav === viewId)
  );
  document.querySelectorAll('.page-view').forEach(v =>
    v.classList.toggle('active', v.id === `view-${viewId}`)
  );
  document.querySelector('.topbar').style.display =
    viewId === 'home' ? 'flex' : 'none';

  if (viewId === 'detail' && recipeId !== null) {
    state.currentRecipeId = recipeId;
    state.checkedIng = new Set();
    state.doneSteps = new Set();
    const recipe = RECIPES.find(r => r.id === recipeId);
    state.currentServings = recipe ? recipe.base_servings : 1;
    state.currentVersionId = recipe?.versions?.[0]?.id ?? null;
    renderDetail(recipeId);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
      const ingNames = r.ingredients.map(i =>
        i.ingredient_id === '_inline' ? (i.inline_name || '') : i.ingredient_id
      );
      const ingCategories = r.ingredients.map(i =>
        i.ingredient_id === '_inline' ? (i.inline_category || '') : ''
      );
      const hay = [
        r.title, r.subtitle, r.description,
        r.cuisine, r.meal_type, r.category,
        ...r.tags,
        ...ingNames,
        ...ingCategories,
      ].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }

    if (state.cuisines.size && !state.cuisines.has(r.cuisine)) return false;
    if (state.mealTypes.size && !state.mealTypes.has(r.meal_type)) return false;
    if (state.categories.size && !state.categories.has(r.category)) return false;

    if (state.recipeTags.size) {
      for (const t of state.recipeTags) {
        if (!r.tags.includes(t)) return false;
      }
    }

    if (state.ingTags.size) {
      const recipeIngCategories = new Set(
        r.ingredients.map(i =>
          i.ingredient_id === '_inline' ? (i.inline_category || '') : ''
        )
      );
      for (const t of state.ingTags) {
        if (!recipeIngCategories.has(t)) return false;
      }
    }

    return true;
  });
}

// ============================================================
// Build Filter Panel
// ============================================================
function buildFilterPanel() {
  const allRecipeTags = [...new Set(RECIPES.flatMap(r => r.tags))];
  const allIngCategories = [...new Set(
    RECIPES.flatMap(r =>
      r.ingredients.map(i =>
        i.ingredient_id === '_inline' ? (i.inline_category || '') : ''
      )
    ).filter(Boolean)
  )];

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
      <div class="filter-section-title">🏷 食譜標籤</div>
      <div class="filter-chips" id="filter-rtag">
        ${allRecipeTags.map(c => chipBtn(c, 'rtag')).join('')}
      </div>
    </div>
    <div class="filter-section">
      <div class="filter-section-title">🧂 食材類別</div>
      <div class="filter-chips" id="filter-ingtag">
        ${allIngCategories.map(c => chipBtn(c, 'ingtag')).join('')}
      </div>
    </div>
    <div class="filter-actions">
      <button class="filter-clear-btn" onclick="clearAllFilters()">清除全部篩選</button>
    </div>
  `;
}

function chipBtn(label, type) {
  return `<button class="filter-chip" data-type="${type}" data-val="${label}" onclick="toggleChip(this,'${type}','${label}')">${label}</button>`;
}

window.toggleChip = function(el, type, val) {
  const sets = { cuisine: state.cuisines, mealtype: state.mealTypes, category: state.categories, rtag: state.recipeTags, ingtag: state.ingTags };
  const s = sets[type];
  if (s.has(val)) { s.delete(val); el.classList.remove('active'); }
  else { s.add(val); el.classList.add('active'); }
  renderGrid();
  updateActiveFilterCount();
};

window.clearAllFilters = function() {
  state.cuisines.clear(); state.mealTypes.clear();
  state.categories.clear(); state.recipeTags.clear(); state.ingTags.clear();
  state.search = '';
  document.getElementById('search-input').value = '';
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  renderGrid();
  updateActiveFilterCount();
};

function updateActiveFilterCount() {
  const total = state.cuisines.size + state.mealTypes.size + state.categories.size + state.recipeTags.size + state.ingTags.size + (state.search ? 1 : 0);
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
window.navigateTo = navigateTo;

window.renderDetail = function(id) { renderDetail(id); };

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
      <div class="progress-bar"><div class="progress-fill" id="step-progress-fill" style="width:0%"></div></div>
    </div>

    <div class="section-title">📋 作法${currentVersion.note ? `<span style="font-size:0.72rem;font-weight:400;color:var(--text-muted);margin-left:8px">${currentVersion.note}</span>` : ''}</div>
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

function getIngName(ing) {
  if (ing.ingredient_id === '_inline') return ing.inline_name || '（未知食材）';
  return ing.ingredient_id;
}

function getIngCategory(ing) {
  if (ing.ingredient_id === '_inline') return ing.inline_category || '';
  return '';
}

function scaleQty(qty, baseServings, currentServings) {
  if (qty === null) return null;
  return parseFloat((qty * (currentServings / baseServings)).toFixed(2));
}

function formatQty(qty, unit) {
  if (qty === null) return unit;
  return `${qty} ${unit}`;
}

function renderIngredients(id) {
  const r = RECIPES.find(x => x.id === id);
  const grid = document.getElementById('ing-grid');
  if (!r || !grid) return;

  grid.innerHTML = r.ingredients.map((ing, i) => {
    const scaledQty = ing.scalable ? scaleQty(ing.qty, r.base_servings, state.currentServings) : ing.qty;
    const amountStr = formatQty(scaledQty, ing.unit);
    const checked = state.checkedIng.has(i);
    const name = getIngName(ing);
    const category = getIngCategory(ing);
    const tagColors = INGREDIENT_TAG_COLORS[category] || {};
    const tagStyle = tagColors.bg
      ? `background:${tagColors.bg};border-color:${tagColors.border};color:${tagColors.text}`
      : '';

    return `
      <div class="ingredient-item ${checked ? 'checked' : ''}" id="ing-${i}" onclick="toggleIng(${i}, ${id})">
        <div class="ingredient-left">
          <div class="ing-check">${checked ? '✓' : ''}</div>
          <div class="ing-info">
            <span class="ing-name">${name}</span>
            ${ing.is_seasoning ? '<span class="ing-star">☆</span>' : ''}
            <div class="ing-tags">
              ${category ? `<span class="ing-tag" ${tagStyle ? `style="${tagStyle}"` : ''}>${category}</span>` : ''}
              ${ing.optional ? '<span class="ing-tag" style="opacity:0.6">選填</span>' : ''}
            </div>
          </div>
        </div>
        <span class="ing-amount ${ing.scalable ? 'scalable' : ''}" id="ing-amount-${i}">${amountStr}</span>
      </div>
    `;
  }).join('');
}

function renderSteps(id) {
  const r = RECIPES.find(x => x.id === id);
  const list = document.getElementById('steps-list');
  if (!r || !list) return;

  const currentVersion = r.versions.find(v => v.id === state.currentVersionId) ?? r.versions[0];
  const steps = currentVersion.steps;

  list.innerHTML = steps.map((step, i) => {
    const done = state.doneSteps.has(i);
    return `
      <div class="step-item ${done ? 'done' : ''}" id="step-${i}" onclick="toggleStep(${i}, ${steps.length})">
        <div class="step-num" id="step-num-${i}">${done ? '✓' : step.order}</div>
        <div class="step-text">${step.instruction}</div>
      </div>
    `;
  }).join('');
}

window.toggleIng = function(idx, recipeId) {
  if (state.checkedIng.has(idx)) state.checkedIng.delete(idx);
  else state.checkedIng.add(idx);
  renderIngredients(recipeId);
};

window.toggleStep = function(idx, total) {
  if (state.doneSteps.has(idx)) state.doneSteps.delete(idx);
  else state.doneSteps.add(idx);

  const pct = Math.round((state.doneSteps.size / total) * 100);
  const fillEl = document.getElementById('step-progress-fill');
  const textEl = document.getElementById('step-progress-text');
  if (fillEl) fillEl.style.width = pct + '%';
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
// Service Worker
// ============================================================
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  }
}
