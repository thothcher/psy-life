import { Quiz } from './types';

export const QUIZZES: Quiz[] = [
  {
    id: 'q1',
    chapterId: 1,
    title: 'Intro to Psychology',
    titleKa: 'ფსიქოლოგიის შესავალი',
    titleRu: 'Введение в психологию',
    titleHy: 'Հոգեբանության ներածություն',
    questions: [
      {
        id: 'q1_1',
        question: 'What is the literal meaning of Psychology?',
        questionKa: 'რას ნიშნავს სიტყვასიტყვით ფსიქოლოგია?',
        questionRu: 'Что буквально означает слово «психология»?',
        questionHy: 'Ո՞րն է հոգեբանության բառացի նշանակությունը:',
        options: ['Study of mind', 'Study of behavior', 'Study of the soul', 'Study of brain'],
        optionsKa: ['გონების სწავლლება', 'ქცევის სწავლლება', 'სულის სწავლლება', 'ტვინის სწავლლება'],
        optionsRu: ['Изучение разума', 'Изучение поведения', 'Учение о душе', 'Изучение мозга'],
        optionsHy: ['Մտքի ուսումնասիրություն', 'Վարքագծի ուսումնասիրություն', 'Հոգու ուսումնասիրություն', 'Ուղեղի ուսումնասիրություն'],
        correctIndex: 2,
        explanation: 'The word comes from the Greek psyche (soul) and logos (study).',
        explanationKa: 'სიტყვა მომდინარეობს ბერძნული psyche (სული) და logos (სწავლება)-დან.',
        explanationRu: 'Слово происходит от греческих psyche (душа) и logos (учение).',
        explanationHy: 'Բառն առաջացել է հունարեն psyche (հոգի) և logos (ուսումնասիրություն) բառերից:'
      }
    ]
  }
];
