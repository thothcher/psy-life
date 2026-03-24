/**
 * Generates chapter-i18n.ts from the existing book-data.ts
 * Extracts Ka fields and creates a structured i18n map.
 * Run: node _gen_chapter_i18n.js
 */
const fs = require('fs');
const path = require('path');

// We need to parse the TS file to extract chapter data
// Since it's basically JS-compatible, let's eval it carefully
let src = fs.readFileSync(path.join(__dirname, 'src/app/data/book-data.ts'), 'utf8');

// Remove TS-specific syntax for eval
src = src.replace(/export\s+interface\s+\w+\s*\{[^}]*\}/gs, '');
src = src.replace(/export\s+const/g, 'const');
src = src.replace(/:\s*(Chapter|Quiz|QuizQuestion|Psychologist|Fact|Story|MemoryCard|FlashcardSet|Flashcard|GlossaryTerm)\[\]/g, '');

// Execute to get CHAPTERS
let CHAPTERS;
try {
  const fn = new Function(src + '\nreturn CHAPTERS;');
  CHAPTERS = fn();
} catch(e) {
  console.error('Failed to parse:', e.message);
  process.exit(1);
}

console.log(`Found ${CHAPTERS.length} chapters`);

// Build the i18n entries
const lines = [];
lines.push(`import { Lang } from '../services/language.service';`);
lines.push(``);
lines.push(`interface ChapterI18n {`);
lines.push(`  title: Record<Lang, string>;`);
lines.push(`  description: Record<Lang, string>;`);
lines.push(`  keyTopics: Record<Lang, string[]>;`);
lines.push(`  summary: Record<Lang, string>;`);
lines.push(`  keyPoints: Record<Lang, string[]>;`);
lines.push(`  funFact: Record<Lang, string>;`);
lines.push(`  realWorld: Record<Lang, string>;`);
lines.push(`}`);
lines.push(``);
lines.push(`export const CHAPTER_I18N: Record<number, ChapterI18n> = {`);

for (const ch of CHAPTERS) {
  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  const escArr = (arr) => arr.map(s => `'${esc(s)}'`).join(', ');

  lines.push(`  ${ch.id}: {`);
  lines.push(`    title: { en: '${esc(ch.title)}', ka: '${esc(ch.titleKa)}', ru: '${esc(ch.title)}', hy: '${esc(ch.title)}' },`);
  lines.push(`    description: { en: '${esc(ch.description)}', ka: '${esc(ch.descriptionKa)}', ru: '${esc(ch.description)}', hy: '${esc(ch.description)}' },`);
  lines.push(`    keyTopics: {`);
  lines.push(`      en: [${escArr(ch.keyTopics)}],`);
  lines.push(`      ka: [${escArr(ch.keyTopicsKa)}],`);
  lines.push(`      ru: [${escArr(ch.keyTopics)}],`);
  lines.push(`      hy: [${escArr(ch.keyTopics)}],`);
  lines.push(`    },`);
  lines.push(`    summary: { en: '${esc(ch.summary)}', ka: '${esc(ch.summary)}', ru: '${esc(ch.summary)}', hy: '${esc(ch.summary)}' },`);
  lines.push(`    keyPoints: {`);
  lines.push(`      en: [${escArr(ch.keyPoints)}],`);
  lines.push(`      ka: [${escArr(ch.keyPoints)}],`);
  lines.push(`      ru: [${escArr(ch.keyPoints)}],`);
  lines.push(`      hy: [${escArr(ch.keyPoints)}],`);
  lines.push(`    },`);
  lines.push(`    funFact: { en: '${esc(ch.funFact)}', ka: '${esc(ch.funFact)}', ru: '${esc(ch.funFact)}', hy: '${esc(ch.funFact)}' },`);
  lines.push(`    realWorld: { en: '${esc(ch.realWorld)}', ka: '${esc(ch.realWorld)}', ru: '${esc(ch.realWorld)}', hy: '${esc(ch.realWorld)}' },`);
  lines.push(`  },`);
}

lines.push(`};`);
lines.push(``);
lines.push(`/** Get a localized chapter field. Falls back to English. */`);
lines.push(`export function chapterText(chapterId: number, field: keyof ChapterI18n, lang: Lang): string | string[] {`);
lines.push(`  const data = CHAPTER_I18N[chapterId];`);
lines.push(`  if (!data) return '';`);
lines.push(`  const val = data[field];`);
lines.push(`  return (val as Record<Lang, string | string[]>)[lang] ?? (val as Record<Lang, string | string[]>)['en'];`);
lines.push(`}`);

const outPath = path.join(__dirname, 'src/app/data/chapter-i18n.ts');
fs.writeFileSync(outPath, lines.join('\n'), 'utf8');
console.log(`Written to ${outPath}`);
