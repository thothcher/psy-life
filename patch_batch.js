const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'src', 'app', 'data', 'book-data.ts');

function patchData() {
  const content = fs.readFileSync(FILE_PATH, 'utf8');

  // Find the start of the CHAPTERS array
  const arrayStartMarker = 'export const CHAPTERS: Chapter[] = [';
  const startIndex = content.indexOf(arrayStartMarker);

  if (startIndex === -1) {
    console.error('Could not find the CHAPTERS array start.');
    return;
  }

  // Find where Chapter 5 begins, to know where our replacement should end.
  // This string exactly matches the indentation and structure in book-data.ts
  const chapter5Marker = '  {\n    id: 5,';
  const endIndex = content.indexOf(chapter5Marker, startIndex);

  if (endIndex === -1) {
    console.error('Could not find Chapter 5 marker. Check the file structure.');
    return;
  }

  // Find the exact insertion point (right after the array opening bracket)
  const insertStart = startIndex + arrayStartMarker.length + 1; // +1 to include the newline

  // Prepare the fully translated first 4 chapters.
  // You can paste your updated 4 chapter objects here.
  const replacementText = `
  {
    id: 1,
    title: 'What is Psychology?',
    titleKa: 'ფსიქოლოგია რა არის?',
    titleRu: 'Что такое психология?', // TODO: fill this
    titleHy: 'Ի՞նչ է հոգեբանությունը:', // TODO: fill this
    description: 'Introduction to the science of psychology, its history, and modern approaches.',
    descriptionKa: 'ფსიქოლოგიის მეცნიერების, მისი ისტორიისა და თანამედროვე მიდგომების შესავალი.',
    descriptionRu: '', // TODO
    descriptionHy: '', // TODO
    icon: 'mdi:head-cog-outline',
    keyTopics: ['Definition of Psychology', 'History of Psychology', 'Modern Perspectives', 'Research Methods'],
    keyTopicsKa: ['ფსიქოლოგიის განმარტება', 'ფსიქოლოგიის ისტორია', 'თანამედროვე პერსპექტივები', 'კვლევის მეთოდები'],
    keyTopicsRu: [],   // TODO
    keyTopicsHy: [],   // TODO
    summary: 'Psychology is the scientific study of behavior and mental processes...',
    summaryKa: '',     // TODO
    summaryRu: '',     // TODO
    summaryHy: '',     // TODO
    keyPoints: [
      'Psychology literally means...'
    ],
    keyPointsKa: [],   // TODO
    keyPointsRu: [],   // TODO
    keyPointsHy: [],   // TODO
    funFact: 'Wundt\\'s first lab experiment...',
    funFactKa: '',     // TODO
    funFactRu: '',     // TODO
    funFactHy: '',     // TODO
    realWorld: 'When a marketing team designs...',
    realWorldKa: '',   // TODO
    realWorldRu: '',   // TODO
    realWorldHy: '',   // TODO
    keyFigures: ['Wilhelm Wundt', 'William James', 'Sigmund Freud', 'John Watson', 'Carl Rogers']
  },
  {
    id: 2,
    // TODO: Paste Chapter 2 full translated object here
  },
  {
    id: 3,
    // TODO: Paste Chapter 3 full translated object here
  },
  {
    id: 4,
    // TODO: Paste Chapter 4 full translated object here
  },
`;

  // Construct the new file content:
  // 1. Everything up to "[\n"
  // 2. The new 4 chapters
  // 3. Everything from "  {\n    id: 5," to the end
  const newContent = content.substring(0, insertStart) + replacementText + content.substring(endIndex);

  // Write the updated content back to the file
  fs.writeFileSync(FILE_PATH, newContent, 'utf8');
  console.log('Successfully patched the first 4 chapters in book-data.ts!');
}

patchData();
