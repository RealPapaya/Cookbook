import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { RECIPES } from '../js/recipes.js';
import { getIngredient, INGREDIENTS } from '../js/ingredients/_registry.js';
import { COOKING_METHODS } from '../js/cooking-methods.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const destDir = path.join(__dirname, '../data/recipes');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function getCookingMethod(id) {
  return COOKING_METHODS.find(m => m.id === id);
}

const indexData = [];

for (const r of RECIPES) {
  const slug = r.slug || r.image.replace('images/', '').replace('.png', '').replace(/_/g, '-');
  r.slug = slug;
  
  // write individual recipe json
  fs.writeFileSync(path.join(destDir, `${slug}.json`), JSON.stringify(r, null, 2));

  const methodSet = new Set();
  r.versions.forEach(v => {
    v.steps.forEach(s => {
      if (s.method_id) {
        const m = getCookingMethod(s.method_id);
        if (m) methodSet.add(m.type);
      }
    });
  });

  const tasteSet = new Set();
  const textureSet = new Set();

  r.ingredients.forEach(i => {
    const found = INGREDIENTS.find(ing => ing.id === i.ingredient_id);
    if (found) {
       if (found.tastes) found.tastes.forEach(t => tasteSet.add(t));
       if (found.textures) found.textures.forEach(t => textureSet.add(t));
    }
  });

  let tasteCounts = { '鹹': 0, '甜': 0, '酸': 0, '辣': 0, '苦': 0 };
  r.ingredients.forEach(i => {
    const found = INGREDIENTS.find(ing => ing.id === i.ingredient_id);
    if (found && found.tastes) {
      found.tastes.forEach(t => {
        if (tasteCounts[t] !== undefined) tasteCounts[t]++;
      });
    }
  });
  
  let scores = [...new Set(Object.values(tasteCounts))].filter(s => s > 0).sort((a,b) => b - a);
  let allowedScores = [scores[0], scores[1]].filter(s => s !== undefined);
  let recipeTastes = new Set();
  for (const [t, count] of Object.entries(tasteCounts)) {
    if (allowedScores.includes(count)) recipeTastes.add(t);
  }

  const ingredient_ids = r.ingredients.map(i => i.ingredient_id);

  indexData.push({
    id: r.id,
    slug: slug,
    title: r.title,
    subtitle: r.subtitle,
    description: r.description,
    category: r.category,
    cuisine: r.cuisine,
    meal_type: r.meal_type,
    tags: r.tags,
    difficulty: r.difficulty,
    time_estimate: r.time_estimate,
    base_servings: r.base_servings,
    image: r.image,
    ingredient_ids,
    tastes: Array.from(recipeTastes),
    textures: Array.from(textureSet),
    method_types: Array.from(methodSet),
  });
}

fs.writeFileSync(path.join(destDir, 'index.json'), JSON.stringify(indexData, null, 2));
console.log('Migration complete. Generated', indexData.length, 'recipes.');
