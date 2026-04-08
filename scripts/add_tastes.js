const fs = require('fs');

const updates = {
  udon:               { tastes: ['鹹'], textures: ['嚼勁', '滑順'] },
  milk:               { tastes: ['甜'], textures: ['滑順'] },
  cheese_slice:       { tastes: ['鹹', '甜'], textures: ['黏稠', '濃郁'] },
  butter:             { tastes: ['甜'], textures: ['濃郁', '滑順'] },
  egg_chicken:        { tastes: ['鹹'], textures: ['軟嫩', '滑順'] },
  bacon:              { tastes: ['鹹'], textures: ['酥脆', '嚼勁'] },
  pork_slice:         { tastes: ['鹹'], textures: ['嚼勁', '軟嫩'] },
  chicken_meatball:   { tastes: ['鹹'], textures: ['嚼勁', '軟嫩'] },
  shrimp_frozen:      { tastes: ['鹹'], textures: ['嚼勁', '多汁'] },
  tomato:             { tastes: ['酸', '甜'], textures: ['多汁', '軟嫩'] },
  bok_choy:           { tastes: ['甜'], textures: ['清脆', '軟嫩'] },
  green_onion:        { tastes: ['辣', '甜'], textures: ['清脆'] },
  parsley:            { tastes: ['苦'], textures: ['清脆'] },
  lemon:              { tastes: ['酸'], textures: ['多汁'] },
  mayonnaise:         { tastes: ['酸', '甜'], textures: ['濃郁', '油膩'] },
  mentsuyu:           { tastes: ['鹹', '甜'], textures: ['滑順'] },
  sake_cooking:       { tastes: ['甜'], textures: [] },
  salt:               { tastes: ['鹹'], textures: [] },
  black_pepper:       { tastes: ['辣', '苦'], textures: ['顆粒'] },
  gochujang:          { tastes: ['辣', '甜', '鹹'], textures: ['黏稠', '濃郁'] },
  garlic_paste:       { tastes: ['辣', '苦'], textures: ['黏稠'] },
  garlic_raw:         { tastes: ['辣', '苦'], textures: ['清脆'] },
  sesame_oil:         { tastes: ['甜'], textures: ['油膩', '濃郁'] },
  sesame_seed:        { tastes: ['甜', '苦'], textures: ['顆粒'] },
  chicken_powder:     { tastes: ['鹹'], textures: [] },
  chicken_soup_powder:{ tastes: ['鹹'], textures: [] },
  olive_oil:          { tastes: ['苦'], textures: ['油膩'] },
  water:              { tastes: [], textures: [] },
  kimchi:             { tastes: ['酸', '辣', '鹹'], textures: ['清脆', '嚼勁'] },
};

const files = ['dairy.js','fermented.js','meat.js','oil.js','other.js','protein.js','seafood.js','seasoning.js','spice.js','staple.js','vegetable.js'];
const dir = 'js/ingredients/';

files.forEach(file => {
  let content = fs.readFileSync(dir + file, 'utf8');
  let modified = false;

  Object.entries(updates).forEach(([id, attrs]) => {
    // Match the block: id: 'xxx', followed eventually by allergens: [...]
    const regex = new RegExp("([ \\t]+id:\\s*'" + id + "',[\\s\\S]*?allergens:\\s*\\[[^\\]]*\\])", 'g');
    content = content.replace(regex, (match) => {
      if (match.includes('tastes:') || match.includes('textures:')) return match;
      modified = true;
      const t = attrs.tastes && attrs.tastes.length
        ? "['" + attrs.tastes.join("', '") + "']"
        : '[]';
      const x = attrs.textures && attrs.textures.length
        ? "['" + attrs.textures.join("', '") + "']"
        : '[]';
      return match + ',\n    tastes: ' + t + ',\n    textures: ' + x;
    });
  });

  if (modified) {
    fs.writeFileSync(dir + file, content, 'utf8');
    console.log('Updated: ' + file);
  } else {
    console.log('No change: ' + file);
  }
});
console.log('Done');
