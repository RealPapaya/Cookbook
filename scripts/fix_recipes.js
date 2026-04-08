const fs = require('fs');

let content = fs.readFileSync('js/recipes.js', 'utf8');

// Quantify measurements
content = content.replace(/qty: 2, unit: '大匙'/g, "qty: 30, unit: 'ml', unit_note: '2大匙'");
content = content.replace(/qty: 1, unit: '大匙'/g, "qty: 15, unit: 'ml', unit_note: '1大匙'");
content = content.replace(/qty: 1, unit: '大匙弱'/g, "qty: 10, unit: 'ml', unit_note: '1大匙弱'");
content = content.replace(/qty: 1, unit: '小匙弱'/g, "qty: 4, unit: 'g', unit_note: '1小匙弱'");
content = content.replace(/qty: 1, unit: '小匙'/g, "qty: 5, unit: 'ml', unit_note: '1小匙'");
content = content.replace(/qty: 2, unit: '小匙'/g, "qty: 10, unit: 'ml', unit_note: '2小匙'");
content = content.replace(/qty: 1.5, unit: '小匙'/g, "qty: 7.5, unit: 'g', unit_note: '1.5小匙'");
content = content.replace(/qty: null, unit: '適量'/g, "qty: 1, unit: 'g', unit_note: '適量'");
content = content.replace(/qty: null, unit: '少許'/g, "qty: 1, unit: 'g', unit_note: '少許'");
content = content.replace(/qty: 1, unit: '硬幣大小'/g, "qty: 10, unit: 'g', unit_note: '硬幣大小'");

// Make everything scalable
content = content.replace(/scalable: false/g, "scalable: true");

// Fix naming matching in recipe text
content = content.replace(/一顆生雞蛋/g, '一顆雞蛋');
content = content.replace(/打入生蛋/g, '打入雞蛋');
content = content.replace(/小白菜漬/g, '小白菜');
content = content.replace(/檸檬片/g, '檸檬');
content = content.replace(/擠入檸檬汁/g, '擠入檸檬');
content = content.replace(/蒜末/g, '大蒜');
content = content.replace(/蒜泥/g, '大蒜');
content = content.replace(/豬肉片/g, '豬肉');
content = content.replace(/起司片/g, '起司');

fs.writeFileSync('js/recipes.js', content, 'utf8');
console.log('Recipes updated!');
