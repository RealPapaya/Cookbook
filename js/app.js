/* ---- State ---- */
let currentFilter = 'all';
let currentSearch = '';
let currentRecipeId = null;

/* ---- DOM refs ---- */
const searchInput = document.getElementById('search-input');
const countBadge = document.getElementById('count-badge');
const recipeGrid = document.getElementById('recipe-grid');

/* ---- Boot ---- */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  setupFilter();
  setupSearch();
  setupNav();
  registerSW();
});

/* ---- Navigation ---- */
function setupNav() {
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.nav;
      navigateTo(target);
    });
  });
}

function navigateTo(viewId, recipeId = null) {
  // update active state
  document.querySelectorAll('[data-nav]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === viewId);
  });

  // show/hide views
  document.querySelectorAll('.page-view').forEach(v => {
    v.classList.toggle('active', v.id === `view-${viewId}`);
  });

  // topbar search: only show on home
  document.querySelector('.topbar').style.display =
    viewId === 'home' ? 'flex' : 'none';

  if (viewId === 'detail' && recipeId !== null) {
    currentRecipeId = recipeId;
    renderDetail(recipeId);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---- Grid ---- */
function getFilteredRecipes() {
  return RECIPES.filter(r => {
    const matchFilter =
      currentFilter === 'all' ||
      r.tags.includes(currentFilter) ||
      r.category === currentFilter;
    const q = currentSearch.toLowerCase();
    const matchSearch =
      !q ||
      r.title.includes(q) ||
      r.subtitle.toLowerCase().includes(q) ||
      r.description.includes(q) ||
      r.tags.some(t => t.includes(q)) ||
      r.ingredients.some(i => i.name.includes(q));
    return matchFilter && matchSearch;
  });
}

function renderGrid() {
  const filtered = getFilteredRecipes();
  countBadge.textContent = `${filtered.length} 道食譜`;

  if (filtered.length === 0) {
    recipeGrid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="empty-icon">🍜</div>
        <p>沒有找到符合的食譜</p>
      </div>`;
    return;
  }

  recipeGrid.innerHTML = filtered.map(r => `
    <div class="recipe-card" onclick="navigateTo('detail', ${r.id})" id="card-${r.id}">
      <div class="card-image-wrap">
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <div class="card-image-overlay"></div>
        <span class="card-category">${r.category}</span>
        <span class="card-difficulty">${r.difficulty}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${r.title}</div>
        <div class="card-subtitle">${r.subtitle}</div>
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

/* ---- Filter ---- */
function setupFilter() {
  // collect all unique tags + categories
  const all = new Set();
  RECIPES.forEach(r => {
    all.add(r.category);
    r.tags.forEach(t => all.add(t));
  });

  const filterRow = document.getElementById('filter-row');
  filterRow.innerHTML = `
    <button class="filter-tag active" data-filter="all" onclick="setFilter('all', this)">全部</button>
    ${[...all].map(t => `
      <button class="filter-tag" data-filter="${t}" onclick="setFilter('${t}', this)">${t}</button>
    `).join('')}
  `;
}

function setFilter(filter, btn) {
  currentFilter = filter;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid();
}

/* ---- Search ---- */
function setupSearch() {
  searchInput.addEventListener('input', e => {
    currentSearch = e.target.value;
    renderGrid();
  });
}

/* ---- Detail ---- */
function renderDetail(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;

  const detail = document.getElementById('view-detail');
  detail.innerHTML = `
    <button class="detail-back" onclick="navigateTo('home')">← 返回食譜</button>

    <div class="detail-hero">
      <img src="${r.image}" alt="${r.title}">
      <div class="detail-hero-overlay">
        <span class="category-badge">${r.category}</span>
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
        <span class="meta-label">份量</span>
        <span class="meta-value">👤 ${r.servings} 人份</span>
      </div>
      <div class="detail-meta-item">
        <span class="meta-label">難度</span>
        <span class="meta-value">📊 ${r.difficulty}</span>
      </div>
      <div class="detail-meta-item">
        <span class="meta-label">分類</span>
        <span class="meta-value">🏷 ${r.category}</span>
      </div>
    </div>

    <div class="detail-desc">${r.description}</div>

    <div class="section-title">🧂 食材</div>
    <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px;margin-top:-8px;">
      ☆ 標記為調味料 | 點擊食材可打勾</div>
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

  // render ingredients
  const ingGrid = detail.querySelector('#ing-grid');
  ingGrid.innerHTML = r.ingredients.map((ing, i) => `
    <div class="ingredient-item" id="ing-${i}" onclick="toggleIng(${i})">
      <div class="ingredient-left">
        <div class="ing-check" id="ing-check-${i}">✓</div>
        <span class="ing-name">${ing.name}</span>
        ${ing.star ? '<span class="ing-star">☆</span>' : ''}
      </div>
      <span class="ing-amount">${ing.amount}</span>
    </div>
  `).join('');

  // render steps
  const stepsList = detail.querySelector('#steps-list');
  stepsList.innerHTML = r.steps.map((step, i) => `
    <div class="step-item" id="step-${i}" onclick="toggleStep(${i}, ${r.steps.length})">
      <div class="step-num" id="step-num-${i}">${i + 1}</div>
      <div class="step-text">${step}</div>
    </div>
  `).join('');
}

function toggleIng(idx) {
  const el = document.getElementById(`ing-${idx}`);
  el.classList.toggle('checked');
}

let doneSteps = new Set();
function toggleStep(idx, total) {
  const el = document.getElementById(`step-${idx}`);
  const numEl = document.getElementById(`step-num-${idx}`);

  if (doneSteps.has(idx)) {
    doneSteps.delete(idx);
    el.classList.remove('done');
    numEl.textContent = idx + 1;
  } else {
    doneSteps.add(idx);
    el.classList.add('done');
    numEl.textContent = '✓';
  }

  // update progress
  const pct = Math.round((doneSteps.size / total) * 100);
  document.getElementById('step-progress-fill').style.width = pct + '%';
  document.getElementById('step-progress-text').textContent =
    `${doneSteps.size} / ${total}`;

  // reset on new detail view
  if (doneSteps.size === 0 || !document.getElementById(`step-0`)) {
    doneSteps = new Set();
  }
}

/* ---- Service Worker ---- */
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .catch(() => {}); // silent fail for local dev
  }
}
