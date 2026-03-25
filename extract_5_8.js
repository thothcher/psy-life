const fs = require('fs');

const content = fs.readFileSync('src/app/data/book-data.ts', 'utf8');

const blocks = [];
const regex = /\{\s*id:\s*(5|6|7|8)\s*,[\s\S]*?\n  \}/g;
let match;
while ((match = regex.exec(content)) !== null) {
  blocks.push(match[0]);
}

fs.writeFileSync('ch5_8.json', '[\n' + blocks.join(',\n') + '\n]');
console.log('Done mapping exactly matching objects');
