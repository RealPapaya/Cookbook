// ============================================================
// State
// ============================================================
const state = {
  search: '',
  cuisines: new Set(),    // multi-select
  mealTypes: new Set(),   // multi-select
  categories: new Set(),  // multi-select
  recipeTags: new Set(),  // multi-select
  ingTags: new Set(),     // multi-select (search by ingredient type)
  currentRecipeId: null,
  currentServings: 1,
  checkedIng: new Set(),
  doneSteps: new Set(),
  filterOpen: false,
};

// ============================================================
// Taxonomy Collections (built from RECIPES at runtime)
// ============================================================
const CUISINE_LIST = ['日式', '韓式', '中式', '義式', '法式', '泰式', '美式', '台式', '日義融合', '其他'];
const MEALTYPE_LIST = ['麵條', '飯', '湯品', '點心', '沙拉', '烤物', '炒菜', '便當'];
const CATEGORY_LIST = ['便當', '湯品', '炒菜', '點心', '早餐', '下午茶'];

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
    state.currentServings = recipe ? recipe.servings : 1;
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
    // keyword search: title, subtitle, desc, tags, ingredients, cuisine, mealType
    if (q) {
      const hay = [
        r.title, r.subtitle, r.description,
        r.cuisine, r.mealType, r.category,
        ...r.tags,
        ...r.ingredients.map(i => i.name),
        ...r.ingredients.flatMap(i => i.tags),
      ].join(' ').toLowerCase();
      if (!hay.includes(q)) return false;
    }

    // cuisine filter
    if (state.cuisines.size && !state.cuisines.has(r.cuisine)) return false;

    // meal type filter
    if (state.mealTypes.size && !state.mealTypes.has(r.mealType)) return false;

    // category filter
    if (state.categories.size && !state.categories.has(r.category)) return false;

    // recipe tag filter (AND logic: all selected tags must be present)
    if (state.recipeTags.size) {
      for (const t of state.recipeTags) {
        if (!r.tags.includes(t)) return false;
      }
    }

    // ingredient tag filter: recipe must have ingredients containing ALL selected ing tags
    if (state.ingTags.size) {
      const recipeIngTags = new Set(r.ingredients.flatMap(i => i.tags));
      for (const t of state.ingTags) {
        if (!recipeIngTags.has(t)) return false;
      }
    }

    return true;
  });
}

// ============================================================
// Build Filter Panel
// ============================================================
function buildFilterPanel() {
  // Collect all recipe tags
  const allRecipeTags = [...new Set(RECIPES.flatMap(r => r.tags))];
  const allIngTags = [...new Set(RECIPES.flatMap(r => r.ingredients.flatMap(i => i.tags)))];

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
        ${allIngTags.map(c => chipBtn(c, 'ingtag')).join('')}
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

function toggleChip(el, type, val) {
  const sets = { cuisine: state.cuisines, mealtype: state.mealTypes, category: state.categories, rtag: state.recipeTags, ingtag: state.ingTags };
  const s = sets[type];
  if (s.has(val)) { s.delete(val); el.classList.remove('active'); }
  else { s.add(val); el.classList.add('active'); }
  renderGrid();
  updateActiveFilterCount();
}

function clearAllFilters() {
  state.cuisines.clear(); state.mealTypes.clear();
  state.categories.clear(); state.recipeTags.clear(); state.ingTags.clear();
  state.search = '';
  document.getElementById('search-input').value = '';
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  renderGrid();
  updateActiveFilterCount();
}

function updateActiveFilterCount() {
  const total = state.cuisines.size + state.mealTypes.size + state.categories.size + state.recipeTags.size + state.ingTags.size + (state.search ? 1 : 0);
  const badge = document.getElementById('filter-toggle-badge');
  if (badge) {
    badge.textContent = total > 0 ? total : '';
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
}

function toggleFilterPanel() {
  state.filterOpen = !state.filterOpen;
  const panel = document.getElementById('filter-panel');
  const btn = document.getElementById('filter-toggle-btn');
  panel.classList.toggle('open', state.filterOpen);
  btn.classList.toggle('active', state.filterOpen);
}

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
          <span class="mealtype-badge">${r.mealType}</span>
        </div>
        <div class="card-desc">${r.description}</div>
        <div class="card-meta">
          <div class="card-meta-item"><span>⏱</span><span>${r.time}</span></div>
          <div class="card-meta-item"><span>👤</span><span>${r.servings} 份</span></div>
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

  const detail = document.getElementById('view-detail');
  detail.innerHTML = `
    <button class="detail-back" onclick="navigateTo('home')">← 返回食譜</button>

    <div class="detail-hero">
      <img src="${r.image}" alt="${r.title}">
      <div class="detail-hero-overlay">
        <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap">
          <span class="category-badge">${r.category}</span>
          <span class="cuisine-badge">${r.cuisine}</span>
          <span class="mealtype-badge">${r.mealType}</span>
        </div>
        <div class="detail-title">${r.title}</div>
        <div class="detail-subtitle">${r.subtitle}</div>
      </div>
    </div>

    <div class="detail-meta-row">
      <div class="detail-meta-item">
        <span class="meta-label">烹飪時間</span>
        <span class="meta-value">⏱ ${r.time}</span>
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

    <div class="progress-wrap">
      <div class="progress-label">
        <span>烹飪進度</span>
        <span id="step-progress-text">0 / ${r.steps.length}</span>
      </div>
      <div class="progress-bar"><div class="progress-fill" id="step-progress-fill" style="width:0%"></div></div>
    </div>

    <div class="section-title">📋 作法</div>
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

function scaleQty(qty, baseServings, currentServings) {
  if (qty === null) return null;
  const scaled = qty * (currentServings / baseServings);
  // clean up floating point
  return parseFloat(scaled.toFixed(2));
}

function formatQty(qty, unit) {
  if (qty === null) return unit; // "適量"
  const n = qty % 1 === 0 ? qty : qty;
  return `${n} ${unit}`;
}

function renderIngredients(id) {
  const r = RECIPES.find(x => x.id === id);
  const grid = document.getElementById('ing-grid');
  if (!r || !grid) return;

  grid.innerHTML = r.ingredients.map((ing, i) => {
    const scaledQty = scaleQty(ing.qty, r.servings, state.currentServings);
    const amountStr = formatQty(scaledQty, ing.unit);
    const checked = state.checkedIng.has(i);
    const tagColors = INGREDIENT_TAG_COLORS[ing.tags[0]] || {};
    const tagStyle = tagColors.bg
      ? `background:${tagColors.bg};border-color:${tagColors.border};color:${tagColors.text}`
      : '';

    return `
      <div class="ingredient-item ${checked ? 'checked' : ''}" id="ing-${i}" onclick="toggleIng(${i}, ${id})">
        <div class="ingredient-left">
          <div class="ing-check">${checked ? '✓' : ''}</div>
          <div class="ing-info">
            <span class="ing-name">${ing.name}</span>
            ${ing.star ? '<span class="ing-star">☆</span>' : ''}
            <div class="ing-tags">
              ${ing.tags.map(t => {
                const c = INGREDIENT_TAG_COLORS[t] || {};
                const s = c.bg ? `style="background:${c.bg};border-color:${c.border};color:${c.text}"` : '';
                return `<span class="ing-tag" ${s}>${t}</span>`;
              }).join('')}
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

  list.innerHTML = r.steps.map((step, i) => {
    const done = state.doneSteps.has(i);
    return `
      <div class="step-item ${done ? 'done' : ''}" id="step-${i}" onclick="toggleStep(${i}, ${r.steps.length})">
        <div class="step-num" id="step-num-${i}">${done ? '✓' : i + 1}</div>
        <div class="step-text">${step}</div>
      </div>
    `;
  }).join('');
}

function toggleIng(idx, recipeId) {
  if (state.checkedIng.has(idx)) state.checkedIng.delete(idx);
  else state.checkedIng.add(idx);
  renderIngredients(recipeId);
}

function toggleStep(idx, total) {
  if (state.doneSteps.has(idx)) state.doneSteps.delete(idx);
  else state.doneSteps.add(idx);

  const pct = Math.round((state.doneSteps.size / total) * 100);
  const fillEl = document.getElementById('step-progress-fill');
  const textEl = document.getElementById('step-progress-text');
  if (fillEl) fillEl.style.width = pct + '%';
  if (textEl) textEl.textContent = `${state.doneSteps.size} / ${total}`;

  renderSteps(state.currentRecipeId);
}

// ============================================================
// Servings Control
// ============================================================
function changeServings(delta, recipeId) {
  const newVal = Math.max(1, Math.min(20, state.currentServings + delta));
  if (newVal === state.currentServings) return;
  state.currentServings = newVal;
  document.getElementById('srv-display').textContent = newVal;
  renderIngredients(recipeId);
}

// ============================================================
// Service Worker
// ============================================================
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  }
}
