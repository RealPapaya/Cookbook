import { FormEvent, useMemo, useState } from 'react';
import { addMyRecipe } from '../domain/myRecipes';
import { CATEGORY_LIST, CUISINE_LIST, DIFFICULTY_LIST, MEALTYPE_LIST } from '../domain/recipesCatalog';
import { baseJoin } from '../domain/recipeApi';
import type { MyRecipe, RecipeIndexEntry } from '../domain/types';

interface AddRecipeModalProps {
  open: boolean;
  recipes: RecipeIndexEntry[];
  myRecipes: MyRecipe[];
  onClose: () => void;
  onRecipesChanged: () => void;
  onToast: (message: string) => void;
}

export default function AddRecipeModal({
  open,
  recipes,
  myRecipes,
  onClose,
  onRecipesChanged,
  onToast
}: AddRecipeModalProps) {
  const [tab, setTab] = useState<'online' | 'custom'>('online');

  const addedOnlineIds = useMemo(() => {
    return new Set(myRecipes.filter((item) => item.source === 'online').map((item) => item.source_id));
  }, [myRecipes]);

  const addOnlineRecipe = (recipe: RecipeIndexEntry): void => {
    const saved = addMyRecipe({
      my_id: `my_${Date.now()}`,
      source: 'online',
      source_id: recipe.id,
      title: recipe.title,
      subtitle: recipe.subtitle,
      description: recipe.description,
      image: recipe.image,
      category: recipe.category,
      cuisine: recipe.cuisine,
      meal_type: recipe.meal_type,
      tags: [...recipe.tags],
      time_estimate: recipe.time_estimate,
      difficulty: recipe.difficulty,
      base_servings: recipe.base_servings,
      added_at: new Date().toISOString()
    });

    if (!saved) {
      onToast('食譜已經在清單中了。');
      return;
    }

    onRecipesChanged();
    onToast(`已新增：${recipe.title}`);
  };

  const submitCustomRecipe = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = String(data.get('title') || '').trim();
    if (!title) return;

    const recipe = {
      my_id: `my_${Date.now()}`,
      source: 'custom' as const,
      title,
      subtitle: String(data.get('subtitle') || '').trim(),
      description: String(data.get('description') || '').trim(),
      cuisine: String(data.get('cuisine') || 'Other'),
      meal_type: String(data.get('meal_type') || 'General'),
      category: String(data.get('category') || 'Dinner'),
      difficulty: String(data.get('difficulty') || 'Medium'),
      time_estimate: String(data.get('time_estimate') || '').trim(),
      base_servings: Number(data.get('base_servings') || 1),
      tags: String(data.get('tags') || '')
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean),
      text_ingredients: String(data.get('text_ingredients') || '').trim(),
      text_steps: String(data.get('text_steps') || '').trim(),
      tips: String(data.get('tips') || '').trim(),
      image: null,
      added_at: new Date().toISOString()
    };

    addMyRecipe(recipe);
    onRecipesChanged();
    onToast(`已建立：${title}`);
    onClose();
    event.currentTarget.reset();
    setTab('online');
  };

  return (
    <div
      id="add-recipe-modal"
      className="modal-overlay"
      style={{ display: open ? 'flex' : 'none' }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-box" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <h3>新增食譜</h3>
          <button className="modal-close-btn" type="button" onClick={onClose}>
            X
          </button>
        </div>

        <div className="modal-tabs">
          <button
            className={`modal-tab ${tab === 'online' ? 'active' : ''}`}
            id="modal-tab-online"
            type="button"
            onClick={() => setTab('online')}
          >
            從線上清單新增
          </button>
          <button
            className={`modal-tab ${tab === 'custom' ? 'active' : ''}`}
            id="modal-tab-custom"
            type="button"
            onClick={() => setTab('custom')}
          >
            建立自訂食譜
          </button>
        </div>

        <div id="modal-content-online" className="modal-tab-content" style={{ display: tab === 'online' ? 'block' : 'none' }}>
          <div className="online-recipe-picker" id="online-recipe-picker">
            {recipes.map((recipe) => {
              const added = addedOnlineIds.has(recipe.id);
              return (
                <div
                  key={recipe.id}
                  className={`online-pick-card ${added ? 'already-added' : ''}`}
                  onClick={() => {
                    if (added) return;
                    addOnlineRecipe(recipe);
                  }}
                >
                  <div className="online-pick-img">
                    <img src={baseJoin(recipe.image)} alt={recipe.title} loading="lazy" />
                  </div>
                  <div className="online-pick-info">
                    <div className="online-pick-title">{recipe.title}</div>
                    <div className="online-pick-meta">
                      {recipe.cuisine} | {recipe.category} | {recipe.time_estimate}
                    </div>
                  </div>
                  <div className="online-pick-action">
                    {added ? (
                      <span className="pick-added-badge">已新增</span>
                    ) : (
                      <button className="pick-add-btn" type="button">
                        新增
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="modal-content-custom" className="modal-tab-content" style={{ display: tab === 'custom' ? 'block' : 'none' }}>
          <form id="custom-recipe-form" onSubmit={submitCustomRecipe}>
            <div className="form-row">
              <div className="form-field">
                <label>
                  標題 <span className="required-star">*</span>
                </label>
                <input type="text" name="title" placeholder="例如：蒜香奶油蝦" required />
              </div>
              <div className="form-field">
                <label>副標題</label>
                <input type="text" name="subtitle" placeholder="選填的副標題" />
              </div>
            </div>

            <div className="form-field">
              <label>描述</label>
              <textarea name="description" rows={2} placeholder="簡短的描述" />
            </div>

            <div className="form-row three-col">
              <div className="form-field">
                <label>菜系</label>
                <select name="cuisine">
                  {CUISINE_LIST.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>分類</label>
                <select name="category">
                  {CATEGORY_LIST.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>餐點類型</label>
                <select name="meal_type">
                  {MEALTYPE_LIST.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row three-col">
              <div className="form-field">
                <label>難度</label>
                <select name="difficulty">
                  {DIFFICULTY_LIST.map((value) => (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-field">
                <label>時間</label>
                <input type="text" name="time_estimate" placeholder="例如：30 分鐘" />
              </div>

              <div className="form-field">
                <label>份量</label>
                <input type="number" name="base_servings" defaultValue={1} min={1} max={50} />
              </div>
            </div>

            <div className="form-field">
              <label>
                標籤 <span className="form-hint">請以半形逗點分隔</span>
              </label>
              <input type="text" name="tags" placeholder="例如：快速, 家常" />
            </div>

            <div className="form-field">
              <label>
                食材 <span className="form-hint">一行一項</span>
              </label>
              <textarea name="text_ingredients" rows={5} placeholder="雞胸肉 200g&#10;大蒜 1 小匙" />
            </div>

            <div className="form-field">
              <label>
                步驟 <span className="form-hint">一行一項</span>
              </label>
              <textarea name="text_steps" rows={6} placeholder="熱油&#10;放入大蒜爆香" />
            </div>

            <div className="form-field">
              <label>
                小撇步 <span className="form-hint">選填</span>
              </label>
              <textarea name="tips" rows={2} placeholder="選填的烹飪筆記" />
            </div>

            <div className="form-actions">
              <button className="filter-clear-btn" type="button" onClick={onClose}>
                取消
              </button>
              <button className="submit-recipe-btn" type="submit">
                儲存食譜
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
