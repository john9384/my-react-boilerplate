const fs = require('fs');
const path = require('path');
const iconPath = path.join(__dirname, '../src/assets/icons/heroics/outline');
const iconTypingPath = path.join(__dirname, '../src/components/Icon');
const files = fs.readdirSync(iconPath);

let nameString = '';

for (let name of files) {
  nameString += `
  | '${name.replace('.svg', '')}'`;
}

let data = 'export type IconName =' + nameString;

fs.writeFile(iconTypingPath + '/type.ts', data, err => {
  if (err) throw err;
});
