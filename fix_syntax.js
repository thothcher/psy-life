const fs = require('fs');
let content = fs.readFileSync('src/app/data/book-data.ts', 'utf8');

const badFactsIndex = content.indexOf('export const FACTS: Fact[] = [', 3000);
if (badFactsIndex > -1 && badFactsIndex < 4000) {
    const fix1 = '      }\n    ]\n  }\n];\n\n';
    content = content.substring(0, badFactsIndex) + fix1 + content.substring(badFactsIndex);
}

const badStoriesIndex = content.indexOf('export const STORIES: Story[] = [', 3800);
if (badStoriesIndex > -1 && badStoriesIndex < 4500) {
    const fix2 = '\"\n  }\n];\n\n';
    content = content.substring(0, badStoriesIndex) + fix2 + content.substring(badStoriesIndex);
}

const badCardsIndex = content.indexOf('export const MEMORY_CARDS: MemoryCard[] = [', 3900);
if (badCardsIndex > -1 && badCardsIndex < 5000) {
    const fix3 = '\"\n    }\n  ]\n];\n\n';
    content = content.substring(0, badCardsIndex) + fix3 + content.substring(badCardsIndex);
}

const badArmenianStart = content.indexOf(']բ դուռը', 4200);
if (badArmenianStart > -1) {
    const endFix = content.indexOf('export const FACTS', badArmenianStart);
    if (endFix > -1) {
        content = content.substring(0, badArmenianStart + 1) + ';\n\n/* ' + content.substring(badArmenianStart + 1, endFix) + ' */\n' + content.substring(endFix);
    }
}

fs.writeFileSync('src/app/data/book-data.ts', content, 'utf8');
console.log('Fixed syntax boundaries.');
