/**
 * Static data for Psychology and Life by Philip Zimbardo.
 */

export interface Chapter {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAm?: string;
  description: string;
  descriptionKa: string;
  descriptionRu?: string;
  descriptionHy?: string;
  descriptionAm?: string;
  icon: string;
  keyTopics: string[];
  keyTopicsKa: string[];
  keyTopicsRu?: string[];
  keyTopicsHy?: string[];
  keyTopicsAm?: string[];
  summary: string;
  summaryKa?: string;
  summaryRu?: string;
  summaryHy?: string;
  summaryAm?: string;
  keyPoints: string[];
  keyPointsKa?: string[];
  keyPointsRu?: string[];
  keyPointsHy?: string[];
  keyPointsAm?: string[];
  funFact: string;
  funFactKa?: string;
  funFactRu?: string;
  funFactHy?: string;
  funFactAm?: string;
  realWorld: string;
  realWorldKa?: string;
  realWorldRu?: string;
  realWorldHy?: string;
  realWorldAm?: string;
  keyFigures?: string[];
  keyFiguresKa?: string[];
  keyFiguresRu?: string[];
  keyFiguresHy?: string[];
  keyFiguresAm?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionKa?: string;
  questionRu?: string;
  questionHy?: string;
  options: string[];
  optionsKa?: string[];
  optionsRu?: string[];
  optionsHy?: string[];
  correctIndex: number;
  explanation: string;
  explanationKa?: string;
  explanationRu?: string;
  explanationHy?: string;
}

export interface Quiz {
  id: string;
  chapterId: number;
  title: string;
  titleKa?: string;
  titleRu?: string;
  titleHy?: string;
  questions: QuizQuestion[];
}

export interface Psychologist {
  name: string;
  years: string;
  photo: string;
  nationality: string;
  contribution: string;
  contributionKa?: string;
  contributionRu?: string;
  contributionHy?: string;
  details: string;
  detailsKa?: string;
  detailsRu?: string;
  detailsHy?: string;
  field: string;
  fieldKa?: string;
  fieldRu?: string;
  fieldHy?: string;
}

export interface Fact {
  id: number;
  text: string;
  textKa: string;
  textRu?: string;
  textHy?: string;
  source: string;
  category: string;
  icon: string;
}

export interface Story {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  chapterId: number;
  content: string;
  contentKa: string;
  contentRu?: string;
  contentHy?: string;
  moral: string;
  moralKa: string;
  moralRu?: string;
  moralHy?: string;
  icon: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'What is Psychology?',
    titleKa: 'რა არის ფსიქოლოგია?',
    titleRu: 'Что такое психология?',
    titleHy: 'Ի՞նչ է հոգեբանությունը:',
    description: 'Introduction to the science of psychology, its history, and modern approaches.',
    descriptionKa: 'ფსიქოლოგიის მეცნიერების, მისი ისტორიისა და თანამედროვე მიდგომების შესავალი.',
    descriptionRu: 'Введение в науку психологию, её историю и современные подходы.',
    descriptionHy: 'Հոգեբանության գիտության, նրա պատմության և ժամանակակից մոտեցումների ներածություն:',
    icon: 'mdi:head-cog-outline',
    keyTopics: ['Definition of Psychology', 'History of Psychology', 'Modern Perspectives', 'Research Methods'],
    keyTopicsKa: ['ფსიქოლოგიის განმარტება', 'ფსიქოლოგიის ისტორია', 'თანამედროვე პერსპექტივები', 'კვლევის მეთოდები'],
    keyTopicsRu: ['Определение психологии', 'История психологии', 'Современные перспективы', 'Методы исследования'],
    keyTopicsHy: ['Հոգեբանության սահմանումը', 'Հոգեբանության պատմություն', 'Ժամանակակից հեռանկարներ', 'Հետազոտության մեթոդներ'],
    summary: 'Psychology is the scientific study of behavior and mental processes. It explores how we think, feel, act, and interact. From Wundts first laboratory to modern neuroscience, this chapter traces the evolution of psychology and introduces major theoretical perspectives: biological, psychodynamic, behavioral, cognitive, humanistic, and sociocultural.',
    summaryKa: 'ფსიქოლოგია არის ქცევისა და მენტალური პროცესების მეცნიერული შესწავლა. ის იკვლევს, თუ როგორ ვფიქრობთ, ვგრძნობთ და ვმოქმედებთ. ვუნდტის პირველი ლაბორატორიიდან თანამედროვე ნეირომეცნიერებამდე, ეს თავი მიმოიხილავს ფსიქოლოგიის ევოლუციას.',
    summaryRu: 'Психология — это научное исследование поведения и психических процессов. В этой главе прослеживается эволюция психологии от первой лаборатории Вундта до современной нейронауки.',
    summaryHy: 'Հոգեբանությունը վարքագծի և մտավոր գործընթացների գիտական ուսումնասիրությունն է: Այս գլուխը հետևում է հոգեբանության էվոլյუցիային՝ Վունդտի առաջին լաբորատորիայից մինչև ժամանակակից նեյրոգիտություն:',
    keyPoints: [
      'Psychology literally means study of the soul (Greek: psyche + logos).',
      'Wilhelm Wundt opened the first psychology lab in Leipzig (1879).',
      'The six major perspectives: Biological, Psychodynamic, Behavioral, Cognitive, Humanistic, and Sociocultural.',
      'Psychologys four goals: Describe, Explain, Predict, and Influence behavior.'
    ],
    keyPointsKa: [
      'ფსიქოლოგია სიტყვასიტყვით ნიშნავს სულის სწავლებას (ბერძნული: psyche + logos).',
      'ვილჰელმ ვუნდტმა გახსნა პირველი ფსიქოლოგიური ლაბორატორია ლაიფციგში (1879).',
      'ექვსი ძირითადი პერსპექტივა: ბიოლოგიური, ფსიქოდინამიკური, ბიჰევიორალური, კოგნიტური, ჰუმანისტური და სოციოკულტურული.',
      'ფსიქოლოგიის ოთხი მიზანი: ქცევის აღწერა, ახსნა, წინასწარმეტყველება და გავლენა.'
    ],
    keyPointsRu: [
      'Психология буквально означает «учение о душе» (греч. psyche + logos).',
      'Вильгельм Вундт открыл первую психологическую лабораторию в Лейпциге (1879).',
      'Шесть основных перспектив: биологическая, психодинамическая, поведенческая, когнитивная, гуманистическая и социокультурная.',
      'Четыре цели психологии: описать, объяснить, предсказать и повлиять на поведение.'
    ],
    keyPointsHy: [
      'Հոգեբանությունը բառացիորեն նշանակում է «ուսմունք հոգու մասին» (հունարեն՝ psyche + logos):',
      'Վիլհելմ Վունդտը բացեց առաջին հոգեբանական լաբորատորիան Լայպցիգում (1879):',
      'Վեց հիմնական հեռանկարները՝ կենսաբանական, պսիխոդինամիկ, վարքագծային, կոգնիտիվ, հումանիստական և սոցիոմշակութային:',
      'Հոգեբանության չորս նպատակները՝ նկարագրել, բացատրել, կանխատեսել և ազդել վարքագծի վրա:'
    ],
    funFact: 'Wundts first lab experiment measured the time it took people to press a button after hearing a sound — about 0.1 seconds.',
    funFactKa: 'ვუნდტის პირველი ექსპერიმენტი ზომავდა დროს, რომელიც სჭირდებოდათ ადამიანებს ღილაკზე დასაჭერად ხმის გაგონების შემდეგ — დაახლოებით 0.1 წამი.',
    funFactRu: 'Первый эксперимент Вундта измерял время, необходимое человеку, чтобы нажать кнопку после звука — около 0,1 секунды.',
    funFactHy: 'Վունդտի առաջին լաբորատոր փորձը չափում էր այն ժամանակը, որը պահანջվում էր მարդկանց ձայնը լսելուց հետო կոճակը սեղմելու համար՝ մոտ 0,1 վայրկյան:',
    realWorld: 'Marketing teams use principles from cognitive and behavioral psychology to design ads that trigger emotional responses.',
    realWorldKa: 'მარკეტინგული გუნდები იყენებენ კოგნიტური და ბიჰევიორალური ფსიქოლოგიის პრინციპებს ემოციური რეკლამების შესაქმნელად.',
    realWorldRu: 'Маркетологи используют принципы когнитивной и поведенческой психологии для создания рекламы, вызывающей эмоциональный отклик.',
    realWorldHy: 'Մարքեթինգային թիմերն օգտագործում են կոգնիտիվ և վարքագծային հոգեբանության սկզբունքները՝ հուզական արձագանքներ առաջացնող გովազդներ ստեղծելու համար:',
    keyFigures: ['Wilhelm Wundt', 'William James', 'Sigmund Freud', 'John Watson', 'Carl Rogers']
  },
  {
    id: 2,
    title: 'Research Methods in Psychology',
    titleKa: 'კვლევის მეთოდები ფსიქოლოგიაში',
    titleRu: 'Методы исследования в психологии',
    titleHy: 'Հետազոտության մեթոդները հոգեբանության մեջ',
    description: 'How psychologists conduct research: experiments, observations, surveys, and ethics.',
    descriptionKa: 'როგორ ატარებენ ფსიქოლოგები კვლევას: ექსპერიმენტები, დაკვირვება, გამოკითხვები და ეთიკა.',
    descriptionRu: 'Как психологи проводят исследования: эксперименты, наблюдения, опросы и этика.',
    descriptionHy: 'Ինչպես են հոգեբանները հետազոտություն անցկացնում՝ փորձեր, դիտարկումներ, հարցումներ և էթիկա:',
    icon: 'mdi:flask-outline',
    keyTopics: ['Scientific Method', 'Experimental Design', 'Correlation vs. Causation', 'Ethics in Research'],
    keyTopicsKa: ['სამეცნიერო მეთოდი', 'ექსპერიმენტული დიზაინი', 'კორელაცია vs მიზეზობრიობა', 'ეთიკა კვლევაში'],
    keyTopicsRu: ['Научный метод', 'Экспериментальный дизайн', 'Корреляция и причинно-следственная связь', 'Этика исследований'],
    keyTopicsHy: ['Գիտական մեթոդ', 'Փորձարարական դիզայն', 'Կորելացիան ընդդեմ պատճառահետևանքային կապի', 'Էթիկան հետազոտության մեջ'],
    summary: 'This chapter covers the tools psychologists use to study behavior scientifically. Learn about variables, control groups, and double-blind studies.',
    summaryKa: 'ეს თავი მიმოიხილავს ინსტრუმენტებს, რომლებსაც ფსიქოლოგები იყენებენ ქცევის მეცნიერულად შესასწავლად.',
    summaryRu: 'В этой главе рассматриваются инструменты, которые психологи используют для научного изучения поведения.',
    summaryHy: 'Այս գլուխը ներկայացնում է այն գործիքները, որոնք հոգեբաններն օգտագործում են վարքագիծը գիտականորեն ուսումնասირելու համար:',
    keyPoints: [
      'Scientific method: Observation -> Hypothesis -> Experiment -> Data Analysis.',
      'Independent vs. Dependent variables.',
      'Correlation does NOT equal causation.',
      'Ethical guidelines: informed consent, debriefing, confidentiality.'
    ],
    keyPointsKa: [
      'სამეცნიერო მეთოდი: დაკვირვება -> ჰიპოთეზა -> ექსპერიმენტი -> მონაცემთა ანალიზი.',
      'დამოუკიდებელი და დამოკიდებული ცვლადები.',
      'კორელაცია არ ნიშნავს მიზეზობრიობას.',
      'ეთიკური გაიდლაინები: ინფორმირებული თანხმობა, კონფიდენციალურობა.'
    ],
    keyPointsRu: [
      'Научный метод: Наблюдение -> Гитотеза -> Эксперимент -> Анализ данных.',
      'Независимые и зависимые переменные.',
      'Корреляция НЕ означает причинно-следственную связь.',
      'Этические принципы: информированное согласие, конфиденциальность.'
    ],
    keyPointsHy: [
      'Գիտական մեթոդ. դիտարկում -> հիպոթեզ -> փորձ -> տվյալների վերլուծություն:',
      'Անկախ և կախյալ փոփոխականներ:',
      'Կորելացիան ՉԻ նշանակում պատճառահետևանքային կապ:',
      'Էթիկական ուղեցույցներ՝ իրազեկված համաձայնություն, գաղտնիություն:'
    ],
    funFact: 'The placebo effect can reduce pain by up to 30% even if the pill contains only sugar.',
    funFactKa: 'პლაცებოს ეფექტს შეუძლია ტკივილის 30%-მდე შემცირება, მაშინაც კი, თუ აბი მხოლოდ შაქარს შეიცავს.',
    funFactRu: 'Эффект плацебо может уменьшить боль на 30%, даже если таблетка состоит только из сахара.',
    funFactHy: 'Պլացեբոյի էֆեկտը կարող է նվազեցնել ցավը մինչև 30%-ով, նույնիսկ եթե հաբը պարունակում է միայն շաքար:',
    realWorld: 'Double-blind trials protect patients from ineffective treatments by ensuring neither the doctor nor the patient knows who got the real medicine.',
    realWorldKa: 'ორმაგი ბრმა კვლევები იცავს პაციენტებს არაეფექტური მკურნალობისგან.',
    realWorldRu: 'Двойные слепые испытания защищают пациентов от неэффективного лечения.',
    realWorldHy: 'Կրկնակի կույր փորձարկումները պաշտպանում են պացիենտներին ոչ արդյունավետ բուժումից:',
    keyFigures: ['Francis Bacon', 'Karl Popper', 'Stanley Milgram']
  }
];

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

export const PSYCHOLOGISTS: Psychologist[] = [
  {
    name: 'Wilhelm Wundt',
    years: '1832-1920',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Wilhelm_Wundt.jpg',
    nationality: 'German',
    contribution: 'Founded the first experimental psychology laboratory in 1879.',
    contributionKa: '1879 წელს დააარსა პირველი ექსპერიმენტული ფსიქოლოგიის ლაბორატორია.',
    contributionRu: 'Основал первую лабораторию экспериментальной психологии в 1879 году.',
    contributionHy: '1879 թվականին հիմնադրել է փորձարարական հոգեբանության առաջին լաբորատորիան:',
    details: 'Known as the father of experimental psychology.',
    detailsKa: 'ცნობილია როგორც ექსპერიმენტული ფსიქოლოგიის მამა.',
    detailsRu: 'Известен как отец экспериментальной психологии.',
    detailsHy: 'Հայտնի է որպես փորձարարական հոգեբանության հայր:',
    field: 'Structuralism',
    fieldKa: 'სტრუქტურალიზმი',
    fieldRu: 'Структурализм',
    fieldHy: 'Ստրուկտուրալիզմ'
  }
];
