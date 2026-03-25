/**
 * Static data for Psychology and Life by Philip Zimbardo.
 */

export interface Chapter {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  description: string;
  descriptionKa: string;
  descriptionRu?: string;
  descriptionHy?: string;
  descriptionAz?: string;
  icon: string;
  keyTopics: string[];
  keyTopicsKa: string[];
  keyTopicsRu?: string[];
  keyTopicsHy?: string[];
  keyTopicsAz?: string[];
  summary: string;
  summaryKa?: string;
  summaryRu?: string;
  summaryHy?: string;
  summaryAz?: string;
  keyPoints: string[];
  keyPointsKa?: string[];
  keyPointsRu?: string[];
  keyPointsHy?: string[];
  keyPointsAz?: string[];
  funFact: string;
  funFactKa?: string;
  funFactRu?: string;
  funFactHy?: string;
  funFactAz?: string;
  realWorld: string;
  realWorldKa?: string;
  realWorldRu?: string;
  realWorldHy?: string;
  realWorldAz?: string;
  keyFigures?: string[];
  keyFiguresKa?: string[];
  keyFiguresRu?: string[];
  keyFiguresHy?: string[];
  keyFiguresAz?: string[];
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
  nameKa: string;
  nameRu?: string;
  nameHy?: string;
  nameAz?: string;
  years: string;
  photo: string;
  nationality: string;
  nationalityKa?: string;
  nationalityRu?: string;
  nationalityHy?: string;
  nationalityAz?: string;

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
  fieldAz?: string;
  contributionAz?: string;
  detailsAz?: string;
}

export interface Fact {
  id: number;
  text: string;
  textKa: string;
  textRu?: string;
  textHy?: string;
  textAz?: string;
  source: string;
  category: string;
  icon: string;
  term?: string;
  title?: string;
}

export interface Story {
  id: number;
  title: string;
  titleKa: string;
  titleRu?: string;
  titleHy?: string;
  titleAz?: string;
  chapterId: number;
  content: string;
  contentKa: string;
  contentRu?: string;
  contentHy?: string;
  contentAz?: string;
  moral: string;
  moralKa: string;
  moralRu?: string;
  moralHy?: string;
  moralAz?: string;
  icon: string;
  term?: string;
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
,
  {
    id: 3,
    title: "Biological Bases of Behavior",
    titleKa: "ქცევის ბიოლოგიური საფუძვლები",
    titleRu: "Биологические основы поведения",
    titleHy: "Վարքագծի կենսաբանական հիմքերը",
    titleAz: "Davranışın Bioloji Əsasları",
    description: "The brain, nervous system, neurons, and how biology shapes our behavior.",
    descriptionKa: "ტვინი, ნერვული სისტემა, ნეირონები და როგორ აყალიბებს ბიოლოგია ჩვენს ქცევას.",
    descriptionRu: "Мозг, нервная система, нейроны и то, как биология формирует наше поведение.",
    descriptionHy: "Ուղեղը, նյարդային համակարգը, նեյրոնները և ինչպես է կենսաբանությունը ձևավորում մեր վարքագիծը:",
    descriptionAz: "Beyin, sinir sistemi, neyronlar və biologiya davranışımızı necə formalaşdırır.",
    icon: "mdi:dna",
    keyTopics: ["Neurons & Synapses","Brain Structure","Nervous System","Neurotransmitters","Genetics & Behavior"],
    keyTopicsKa: ["ნეირონები და სინაფსები","ტვინის სტრუქტურა","ნერვული სისტემა","ნეიროტრანსმიტერები","გენეტიკა და ქცევა"],
    keyTopicsRu: ["Нейроны и синапсы","Структура мозга","Нервная система","Нейромедиаторы","Генетика и поведение"],
    keyTopicsHy: ["Նեյրոններ և սինապսներ","Ուղեղի կառուցվածքը","Նյարդային համակարգ","Նեյրոհաղորդիչներ","Գենետիկա և վարքագիծ"],
    keyTopicsAz: ["Neyronlar və Sinapslar","Beyin strukturu","Sinir sistemi","Nörotransmitterlər","Genetika və Davranış"],
    summary: "Every thought, emotion, and action has a biological basis. This chapter explores how neurons communicate, the structure of the brain, and how genetics influence behavior.",
    summaryRu: "Каждая мысль, эмоция и действие имеют биологическую основу. В этой главе рассматривается, как общаются нейроны, структура мозга и то, как генетика влияет на поведение.",
    summaryHy: "Յուրաքանչյուր միտք, հույզ և գործողություն ունի կենսաբանական հիմք: Այս գլխում ուսումնասիրվում է, թե ինչպես են հաղորդակցվում նեյրոնները, ուղեղի կառուցվածքը և ինչպես է գենետիկան ազդում վարքագծի վրա:",
    summaryAz: "Hər bir düşüncə, emosiya və hərəkətin bioloji əsası var. Bu fəsildə neyronların necə ünsiyyət qurduğu, beynin quruluşu və genetikanın davranışa necə təsir etdiyi araşdırılır.",
    keyPoints: [
      "Neurons are the basic units of the nervous system. They communicate via electrochemical signals: electrical impulses travel down the axon, then release neurotransmitters across the synapse.",
      "Key neurotransmitters: Dopamine (reward, pleasure), Serotonin (mood, sleep), GABA (inhibition, calm), Acetylcholine (memory, muscle movement), Norepinephrine (alertness), Endorphins (pain relief).",
      "The brain has three major regions: Hindbrain (medulla, pons, cerebellum — basic survival), Midbrain (sensory relay), Forebrain (cerebral cortex — higher thinking).",
      "The cerebral cortex has four lobes: Frontal (decision-making, personality), Parietal (touch, spatial), Temporal (hearing, language), Occipital (vision).",
      "The limbic system includes the amygdala (fear, emotion), hippocampus (memory formation), and hypothalamus (hunger, thirst, temperature).",
      "Neuroplasticity: the brain can reorganize itself by forming new neural connections throughout life, especially after injury or learning.",
      "The split-brain experiments by Sperry showed that the left hemisphere specializes in language and logic, while the right hemisphere handles spatial tasks and creativity."
    ],
    keyPointsKa: ["ნეირონები ნერვული სისტემის ძირითადი ერთეულებია. ისინი კომუნიკაციას ახორციელებენ ელექტროქიმიური სიგნალებით.", "ძირითადი ნეიროტრანსმიტერები: დოფამინი (ჯილდო, სიამოვნება), სეროტონინი (განწყობა, ძილი), GABA (დამშვიდება), აცეტილქოლინი (მეხსიერება), ნორეპინეფრინი, ენდორფინები.", "ტვინს აქვს სამი ძირითადი რეგიონი: უკანა ტვინი, საშუალო ტვინი და წინა ტვინი (დიდი ტვინის ქერქი).", "დიდი ტვინის ქერქს აქვს ოთხი წილი: შუბლის, თხემის, საფეთქლის და კეფის.", "ლიმბური სისტემა მოიცავს ამიგდალას (შიში, ემოცია), ჰიპოკამპს (მეხსიერება) და ჰიპოთალამუსს.", "ნეიროპლასტიურობა: ტვინის უნარი მოახდინოს საკუთარი თავის რეორგანიზაცია ახალი კავშირების ფორმირებით.", "სპერის ექსპერიმენტებმა აჩვენა, რომ მარცხენა ნახევარსფერო სპეციალიზებულია ენასა და ლოგიკაში, მარჯვენა კი - სივრცით ამოცანებში."],
    keyPointsRu: ["Нейроны — основные единицы нервной системы. Они общаются с помощью электрохимических сигналов.", "Основные нейромедиаторы: дофамин (вознаграждение), серотонин (настроение), ГАМК (торможение), ацетилхолин (память), норадреналин, эндорфины.", "Мозг состоит из трех основных отделов: задний мозг, средний мозг и передний мозг (кора больших полушарий).", "Кора больших полушарий имеет четыре доли: лобную, теменную, височную и затылочную.", "Лимбическая система включает миндалевидное тело (страх), гиппокамп (память) и гипоталамус.", "Нейропластичность: способность мозга перестраиваться, формируя новые нейронные связи.", "Эксперименты Сперри показали специализацию полушарий: левое — логика и язык, правое — пространство и творчество."],
    keyPointsHy: ["Նեյրոնները նյարդային համակարգի հիմնական միավորներն են: Նրանք հաղորդակցվում են էլեկտրաքիմիական ազդանշանների միջոցով:", "Հիմնական նեյրոհաղորդիչներ. Դոֆամին (վարձատրություն), Սերոտոնին (տարադրություն), ԳԱԹԹ (արգելակում), Ացետիլխոլին (հիշողություն), նորեպինեֆրին, էնդորֆիններ:", "Ուղեղն ունի երեք հիմնական շրջան՝ հետին ուղեղ, միջին ուղեղ և առջևի ուղեղ (մեծ կիսագնդերի կեղև):", "Մեծ կիսագնդերի կեղևն ունի չորս բլթակ՝ ճակատային, գագաթային, քունքային և ծոծրակային:", "Լիմբիական համակարգը ներառում է ամիգդալան (վախ), հիպոկամպը (հիշողություն) և հիպոթալամուսը:", "Նեյրոպաստիկություն. ուղեղի՝ վերակազմավորվելու կարողությունը՝ ձևավորելով նոր նյարդային կապեր:", "Սպերիի փորձերը ցույց տվեցին կիսագնդերի մասնագիտացումը. ձախը՝ տրամաբանություն և լեզու, աջը՝ տարածական խնդիրներ և ստեղծագործականություն:"],
    keyPointsAz: ["Neyronlar sinir sisteminin əsas vahidləridir. Onlar elektrokimyəvi siqnallar vasitəsilə ünsiyyət qururlar.", "Əsas neyrotransmitterlər: Dopamin (mükafat), Serotonin (əhval), GABA (sakitlik), Asetilkolin (yaddaş), Norepinefrin, Endorfinlər.", "Beynin üç əsas bölgəsi var: Arxa beyin (medulla, pons, beyincik), Orta beyin və Ön beyin (serebral korteks).", "Serebral korteksin dörd payı var: Frontal, Parietal, Temporal, Oksipital.", "Limbik sistemə amigdala (qorxu), hippokamp (yaddaş) and hipotalamus daxildir.", "Neyroplastiklik: beynin yeni sinir əlaqələri quraraq özünü yenidən təşkil etmək qabiliyyəti.", "Sol yarımkürə dil və məntiqlə, sağ yarımkürə isə məkan və yaradıcılıqla məşğul olur."],
    funFact: "Your brain uses about 20% of your body's energy despite being only 2% of your body weight. It generates about 20 watts of electrical power — enough to power a dim light bulb.",
    funFactKa: "თქვენი ტვინი მოიხმარს ენერგიის 20%-ს, თუმცა წონის მხოლოდ 2%-ს შეადგენს. ის გამოიმუშავებს 20 ვატამდე სიმძლავრეს.",
    funFactRu: "Ваш мозг потребляет около 20% энергии тела, хотя составляет всего 2% его веса. Он вырабатывает около 20 Вт мощности.",
    funFactHy: "Ձեր ուղեղը սպառում է մարմնի էներգիայի մոտ 20%-ը, թեև այն կազմում է նրա քաշի ընդամենը 2%-ը: Այն արտադրում է մոտ 20 վտ հզորություն:",
    funFactAz: "Beyniniz bədən çəkinizin cəmi 2%-ni təşkil etsə də, bədən enerjisinin təxminən 20%-ni istehlak edir. Təxminən 20 vatt gücü istehsal edir.",
    realWorld: "Understanding neurotransmitters revolutionized psychiatry. SSRIs (like Prozac) treat depression by increasing serotonin levels in the brain. Parkinson's disease treatments target dopamine pathways.",
    realWorldKa: "ნეიროტრანსმიტერების გაგებამ რევოლუცია მოახდინა ფსიქიატრიაში (მაგ. SSRI დეპრესიისთვის).",
    realWorldRu: "Понимание нейромедиаторов произвело революцию в психиатрии (например, СИОЗС при депрессии).",
    realWorldHy: "Նեյրոհաղորդիչների ըմբռնումը հեղափոխեց հոգեբուժությունը (օրինակ՝ դեպրեսիայի համար SSRIs):",
    realWorldAz: "Neyrotransmitterlərin başa düşülməsi psixiatriyada inqilab etdi (məsələn, depressiya üçün SSRİ-lər).",
    keyFigures: ["Roger Sperry","Paul Broca","Carl Wernicke","Santiago Ramón y Cajal"],
    keyFiguresKa: ["როჯერ სპერი","პოლ ბროკა","კარლ ვერნიკე","სანტიაგო რამონ ი კახალი"],
    keyFiguresRu: ["Роджер Сперри", "Поль Брока", "Карл Вернике", "Сантьяго Рамон-и-Кахаль"],
    keyFiguresHy: ["Ռոջեր Սպերի", "Պոլ Բրոկա", "Կարլ Վերնիկե", "Սանտյագո Ռամոն ի Կախալ"],
    keyFiguresAz: ["Rocer Sperri", "Pol Broka", "Karl Vernike", "Santiaqo Ramon i Kahal"]
  },
    {
    id: 4,
    title: "Sensation and Perception",
    titleKa: "შეგრძნება და აღქმა",
    titleRu: "Ощущение и восприятие",
    titleHy: "Սենսացիա և ընկալում",
    titleAz: "Hiss və qavrayış",
    description: "How our senses detect stimuli and our brain interprets them.",
    descriptionKa: "როგორ ამოიცნობს ჩვენი გრძნობები სტიმულს და ჩვენი ტვინი განმარტავს მათ.",
    descriptionRu: "Как наши органы чувств обнаруживают стимулы, а мозг их интерпретирует.",
    descriptionHy: "Ինჩպես է მერ զგაიარანները հაიტნაბერუმ գրգռիչները և մեր ուղեղը մեկնաբանում դրանք:",
    descriptionAz: "Hisslərimiz stimulları necə qəbul edir və beynimiz onları necə şərh edir.",
    icon: "mdi:eye-outline",
    keyTopics: ["Vision","Hearing","Other Senses","Perceptual Organization","Illusions"],
    keyTopicsKa: ["ხედვა","სმენა","სხვა გრძნობები","აღქმის ორგანიზაცია","ილუზიები"],
    keyTopicsRu: ["Зрение","Слух","Другие чувства","Перцептивная организация","Иллюзии"],
    keyTopicsHy: ["Տեսիլք","Լսողություն","Այլ զգայարաններ","Ընկալման կազմակերպություն","Պատրանքներ"],
    keyTopicsAz: ["Görmə","Eşitmə","Digər Hisslər","Qavrama təşkilatı","İllüziyalar"],
    summary: "Sensation is the process by which our sensory receptors detect stimuli; perception is how the brain interprets this. Covers visual processing, Gestalt principles, and perceptual illusions.",
    summaryKa: "შეგრძნება არის პროცესი, რომლის დროსაც ჩვენი სენსორული რეცეპტორები აღიქვამენ სტიმულებს; აღქმა კი არის ის, თუ როგორ განმარტავს ამას ტვინი. მოიცავს ვიზუალურ დამუშავებას, გეშტალტის პრინციპებსა და პერცეფციულ ილუზიებს.",
    summaryRu: "Ощущение — это процесс, посредством которого наши сенсорные рецепторы обнаруживают стимулы; восприятие — то, как мозг интерпретирует это. Охватывает визуальную обработку, принципы Гештальта и перцептивные иллюзии.",
    summaryHy: "Զգայությունը այն գործընթացն է, որի միջոցով մեր զգայական ռեցեպտորները հայտնաբերում են գրգռիչները. ընկալումն այն է, թե ինչպես է ուղեղը մեկնաբանում դա: Ներառում է տեսողական մշակումը, Գեշտալտ սկզბუნքները և ընկալման պատրանքները:",
    summaryAz: "Duyğu, hiss orqanlarımızın stimulları aşkar etdiyi prosesdir; qavrayış beynin bunu necə şərh etməsidir. Vizual emal, Geştalt prinsipləri və qavrayış illüziyalarını əhatə edir.",
    keyPoints: [
      "Sensation vs. Perception: Sensation is bottom-up (data-driven); perception is top-down (expectation-driven).",
      "Absolute threshold: the minimum stimulus intensity needed to detect a stimulus 50% of the time. Difference threshold (Weber's Law): the minimum difference between two stimuli required for detection.",
      "Visual system: Light enters the cornea, passes through the pupil and lens, and hits the retina (rods for low light, cones for color/detail).",
      "Auditory system: Sound waves enter the ear canal, vibrate the eardrum, move the ossicles, and reach the cochlea (where transduction happens).",
      "Perceptual organization (Gestalt): we organize sensations into meaningful wholes (proximity, similarity, continuity, closure).",
      "Depth perception: Binocular cues (retinal disparity) and monocular cues (linear perspective, interposition, relative size).",
      "Perceptual set: a mental predisposition to perceive one thing and not another, shaped by experience and context."
    ],
    keyPointsKa: [
      "შეგრძნება აღქმის წინააღმდეგ: შეგრძნება არის ქვემოდან ზევით (მონაცემებზე დაფუძნებული); აღქმა არის ზემოდან ქვევით (მოლოდინზე დაფუძნებული).",
      "აბსოლუტური ზღურბლი: სტიმულის მინიმალური ინტენსივობა, რომელიც საჭიროა სტიმულის აღმოსაჩენად დროის 50%-ში. სხვაობის ზღურბლი (ვებერის კანონი).",
      "ვიზუალური სისტემა: სინათლე ხვდება რქოვანაში, გადის გუგასა და ბროლში და აღწევს ბადურას (ჩხირები დაბალი განათებისთვის, კოლბები ფერისთვის).",
      "სმენის სისტემა: ბგერითი ტალღები შედის ყურის არხში, არხევს დაფის აპკს და აღწევს ლოკოკინას (სადაც ხდება ტრანსდუქცია).",
      "პერცეფციული ორგანიზაცია (გეშტალტი): ჩვენ ვაორგანიზებთ შეგრძნებებს მნიშვნელობის მქონე მთლიანობებად (სიახლოვე, მსგავსება, უწყვეტობა, შეკვრა).",
      "სიღრმის აღქმა: ბინოკულარული ნიშნები (რეტინალური დისპარატულობა) და მონოკულარული ნიშნები (ხაზოვანი პერსპექტივა, ინტერპოზიცია).",
      "პერცეფციული განწყობა: ფსიქიკური წინასწარგანწყობა აღვიქვათ ერთი რამ და არა სხვა, რაც ფორმირდება გამოცდილებითა და კონტექსტით."
    ],
    keyPointsRu: [
      "Ощущение против Восприятия: Ощущение идет снизу вверх (на основе данных); восприятие — сверху вниз (на основе ожиданий).",
      "Абсолютный порог: минимальная интенсивность стимула, необходимая для его обнаружения в 50% случаев. Разностный порог (Закон Вебера).",
      "Зрительная система: Свет входит через роговицу, проходит через зрачок и хрусталик, попадает на сетчатку (палочки для слабого света, колбочки для цвета).",
      "Слуховая система: Звуковые волны входят в ушной канал, вибрируют барабанную перепонку и достигают улитки (где происходит трансдукция).",
      "Перцептивная организация (Гештальт): мы организуем ощущения в осмысленные целые образы (близость, сходство, непрерывность, замкнутость).",
      "Восприятие глубины: Бинокулярные признаки (ретинальная диспарность) и монокулярные признаки (линейная перспектива, интерпозиция).",
      "Перцептивная установка: ментальная предрасположенность воспринимать одно, а не другое, сформированная опытом и контекстом."
    ],
    keyPointsHy: [
      "Զգայությունն ընդդեմ ընկալման. զգայությունը ներքևից վերև է (տվյալների վրա հիմնված). ընկալումը վերևից ներքև է (սպասումների վրա հիմնված):",
      "Բացարձակ շեմ. խթանի նվազագույն ինտենսիվությունը, որն անհրաժեշտ է այն հայտնաբերելու համար ժամանակի 50%-ում: Տարբերության շեմ (Վեբերի օրենք):",
      "Տեսողական համակարգ. լույսը մտնում է եղջերաթաղանթ, անցնում բիբի և ոսպնյակի միջով և հարվածում ցանցաթաղանթին:",
      "Լսողական համակարգ. ձայնային ալիքները թրթռում են թմբկաթաղանթը և հասնում խխունջին (որտեղ տեղի է ունենում տրանսդուկցիան):",
      "Ընկալման կազմակերպում (Գեշտալտ). մենք կազմակերպում ենք զգայությունները իմաստալից ամբողջությունների մեջ (մոտիկություն, ნմանություն):",
      "Խորության ընկալում. բինոկուլյար հուշումներ և մոնոկուլյար հուշումներ (գծային հեռանկար, հարաբերական չափ):",
      "Ընկալման հավաքածու. մտավոր հակվածություն՝ ընկալելու մի բան և ոչ մյուսը՝ ձևավորված փորձով և համատեքստով:"
    ],
    keyPointsAz: [
      "Duyğu və Qavrayış: Duyğu aşağıdan yuxarıdır (məlumat əsaslı); qavrayış yuxarıdan aşağıdır (gözlənti əsaslı).",
      "Mütləq hədd: stimulu 50% hallarda aşkar etmək üçün lazım olan minimum intensivlik. Fərq həddi (Veber qanunu).",
      "Vizual sistem: İşıq buynuz qişaya daxil olur, bəbək və büllurdan keçir və torlu qişaya (retina) çatır.",
      "Eşitmə sistemi: Səs dalğaları qulaq kanalına daxil olur, təbil pərdəsini titrədir və ilbizə (kokleaya) çatır.",
      "Qavrayış təşkili (Geştalt): biz duyğuları mənalı bütövlər halında təşkil edirik (yaxınlıq, oxşarlıq, davamlılıq, qapalılıq).",
      "Dərinlik qavrayışı: Binokulyar işarələr (retinal bərabərsizlik) ve monokulyar işarələr (xətti perspektiv, nisbi ölçü).",
      "Qavrayış dəsti: təcrübə və kontekstlə formalaşan, bir şeyi qavrayıb digərini qavramamağa dair zehni meyl."
    ],
    funFact: "The mantis shrimp has 16 color-receptive cones in its eyes, while humans only have 3. It can see colors that we can't even imagine, including ultraviolet and polarized light.",
    funFactKa: "მანტისის კიბოსნაირს აქვს 16 ფერის აღმქმელი კოლბა თვალებში, მაშინ როდესაც ადამიანებს მხოლოდ 3 გვაქვს. მას შეუძლია დაინახოს ფერები, რომლებიც ჩვენ წარმოგვიდგენია, ულტრაიისფერი და პოლარიზებული სინათლის ჩათვლით.",
    funFactRu: "У рака-богомола в глазах 16 цветовых колбочек, тогда как у человека их всего 3. Он может видеть цвета, которые мы даже не можем себе представить, включая ультрафиолетовый и поляризованный свет.",
    funFactHy: "Մանտիս ծովախեցգետինն իր աչքերում ունի 16 գունային ընկալիչ կոն, մինչդեռ մարդիկ ունեն ընդամենը 3: Այն կարող է տեսնել գույներ, որոնք մենք չենք էլ կարող պատկերացնել:",
    funFactAz: "Mantis krevetinin gözündə 16 rəng qəbul edən konus var, insanlarda isə cəmi 3-dür. O, bizim təsəvvür edə bilmədiyimiz rəngləri, o cümlədən ultrabənövşəyi və qütbləşmiş işığı görə bilir.",
    realWorld: "UI/UX design relies heavily on Gestalt principles. For example, grouping related buttons close together (proximity) helps users understand they perform similar functions.",
    realWorldKa: "UI/UX დიზაინი დიდწილად ეყრდნობა გეშტალტის პრინციპებს. მაგალითად, დაკავშირებული ღილაკების ერთად დაჯგუფება (სიახლოვე) მომხმარებელს ეხმარება გაიგოს, რომ ისინი მსგავს ფუნქციებს ასრულებენ.",
    realWorldRu: "UI/UX-дизайн в значительной степени опирается на принципы Гештальта. Например, группировка связанных кнопок рядом (близость) помогает пользователям понять, что они выполняют схожие функции.",
    realWorldHy: "UI/UX դիզայնը մեծապես հիմնված է Գեշտալտ սկզბունքների վրա: Օրինակ՝ հարակից կոճակների խմբավորումը միասին օգნում է օգտվողներին հասկանալ, որ նրանք նմանատիպ գործառույთներ են կատարում:",
    realWorldAz: "UI/UX dizaynı Geştalt prinsiplərinə çox söykənir. Məsəslən, əlaqəli düymələri bir-birinə yaxın qruplaşdırmaq (yaxınlıq) istifadəçilərə onların oxşar funksiyalarını yerინე yetirdiyini anlamağa kömək edir.",
    keyFigures: ["Gustav Fechner","David Hubel","Torsten Wiesel","Max Wertheimer"],
    keyFiguresKa: ["გუსტავ ფეხნერი", "დევიდ ჰუბელი", "ტორსტენ ვიზელი", "მაქს ვერტჰაიმერი"],
    keyFiguresRu: ["Густав Фехнер", "Дэвид Хьюбел", "Торстен Визель", "Макс Вертгеймер"],
    keyFiguresHy: ["Գուստավ Ֆեխներ", "Դեյվիդ Հյուբել", "Տորստեն Վիզել", "Մաքս Վերտհայմեր"],
    keyFiguresAz: ["Gustav Fexner", "Devid Hubel", "Torsten Vizel", "Maks Vertheimer"]
  },
    {
    id: 5,
    title: "States of Consciousness",
    titleKa: "ცნობიერების მდგომარეობები",
    titleRu: "Состояния сознания",
    titleHy: "Գիտակցության վիճակներ",
    titleAz: "Şüur vəziyyətləri",
    description: "Understanding sleep, dreams, hypnosis, and psychoactive drugs.",
    descriptionKa: "ძილის, სიზმრების, ჰიპნოზისა და ფსიქოაქტიური ნივთიერებების გაგება.",
    descriptionRu: "Понимание сна, сновидений, гипноза и психоактивных веществ.",
    descriptionHy: "Քնի, երազների, հիպնոսի և հոգեակտիվ նյութերի ըմբռնում:",
    descriptionAz: "Yuxu, yuxu görmə, hipnoz və psixoaktiv maddələrin başa düşülməsi.",
    icon: "mdi:moon-waning-crescent",
    keyTopics: ["Sleep Cycles","Dreams","Hypnosis","Drugs","Meditation"],
    keyTopicsKa: ["ძილის ციკლები","სიზმრები","ჰიპნოზი","ნარკოტიკული საშუალებები","მედიტაცია"],
    keyTopicsRu: ["Циклы сна","Сновидения","Гипноз","Наркотики","Медитация"],
    keyTopicsHy: ["Քնի ցիկլեր","Երազներ","Հիպնոզ","Դեղամիჯոցներ","Մեդիտացիա"],
    keyTopicsAz: ["Yuxu dövrləri","Yuxular","Hipnoz","Dərmanlar","Meditasiya"],
    summary: "Consciousness is our awareness of ourselves and our environment. This chapter covers the biological rhythms of sleep, dream theories, and how drugs alter consciousness.",
    summaryKa: "ცნობიერება არის ჩვენი და ჩვენი გარემოს აღქმა. ეს თავი მოიცავს ძილის ბიოლოგიურ რიტმებს, სიზმრების თეორიებსა და იმას, თუ როგორ ცვლის ნივთიერებები ცნობიერებას.",
    summaryRu: "Сознание — это наше осознание себя и окружающей среды. Эта глава охватывает биологические ритмы сна, теории сновидений и то, как наркотики изменяют сознание.",
    summaryHy: "Գիտակցությունը մեր և մեր շրջապատի մասին տեղեկացվածությունն է: Այս գլուխը ներառում է քնի կենսաբանական ռիթմերը, երազների տեսությունները:",
    summaryAz: "Şüur özümüzü və ətrafımızı dərk etməkdir. Bu fəsil yuxunun bioloji ritmlərini, yuxu nəzəriyyələrini və dərmanların şüuru necə dəyişdiyini əhatə edir.",
    keyPoints: [
      "Circadian rhythm: the biological clock; regular bodily rhythms (e.g., temperature and wakefulness) that occur on a 24-hour cycle.",
      "Sleep stages: NREM-1 (light sleep, alpha waves), NREM-2 (sleep spindles), NREM-3 (deep sleep, delta waves), and REM (Rapid Eye Movement, vivid dreaming, muscle paralysis).",
      "Why we sleep: Protection, recuperation, memory consolidation, creative thinking, and supporting growth.",
      "Dream theories: Freud's wish fulfillment (manifest vs. latent content), information-processing, physiological function, neural activation, and cognitive development.",
      "Hypnosis: a social interaction in which one person suggests to another that certain perceptions, feelings, thoughts, or behaviors will spontaneously occur.",
      "Psychoactive drugs: Depressants (alcohol, opiates), Stimulants (caffeine, nicotine, cocaine, amphetamines), and Hallucinogens (LSD, marijuana).",
      "Tolerance, Withdrawal, and Addiction: The physiological and psychological effects of repeated drug use."
    ],
    keyPointsKa: [
      "ცირკადული რიტმი: ბიოლოგიური საათი; სხეულის რეგულარული რიტმები (მაგ., ტემპერატურა და სიფხიზლე), რომლებიც ხდება 24-საათიან ციკლში.",
      "ძილის სტადიები: NREM-1 (მსუბუქი ძილი), NREM-2 (ძილის თითისტარები), NREM-3 (ღრმა ძილი) და REM (თვალის სწრაფი მოძრაობა, სიზმრები).",
      "რატომ გვძინავს: დაცვა, აღდგენა, მეხსიერების კონსოლიდაცია, კრეატიული აზროვნება და ზრდის ხელშეწყობა.",
      "სიზმრების თეორიები: ფროიდის სურვილების ასრულება, ინფორმაციის დამუშავება, ფიზიოლოგიური ფუნქცია, ნეირონული აქტივაცია.",
      "ჰიპნოზი: სოციალური ინტერაქცია, რომლის დროსაც ერთი ადამიანი მეორეს სთავაზობს გარკვეულ აღქმებს, გრძნობებს ან ფიქრებს.",
      "ფსიქოაქტიური ნივთიერებები: დეპრესანტები (ალკოჰოლი), სტიმულატორები (კოფეინი, ნიკოტინი, კოკაინი) და ჰალუცინოგენები (LSD).",
      "ტოლერანტობა, აბსტინენცია და ადიქცია: ნივთიერებების განმეორებითი გამოყენების ფიზიოლოგიური და ფსიქოლოგიური ეფექტები."
    ],
    keyPointsRu: [
      "Циркадный ритм: биологические часы; регулярные телесные ритмы (например, температура и бодрствование), происходящие в 24-часовом цикле.",
      "Стадии сна: NREM-1 (легкий сон), NREM-2 (сонные веретена), NREM-3 (глубокий сон, дельта-волны) и REM (быстрый сон, яркие сновидения).",
      "Почему мы спим: Защита, восстановление, консолидация памяти, творческое мышление и поддержка роста.",
      "Теории сновидений: исполнение желаний по Фрейду, обработка информации, физиологическая функция, нейронная активация.",
      "Гипноз: социальное взаимодействие, при котором один человек внушает другому определенные ощущения, мысли или формы поведения.",
      "Психоактивные вещества: Депрессанты (алкоголь), Стимуляторы (кофеин, никотин, кокаин) и Галлюциногены (ЛСД, марихуана).",
      "Толерантность, Абстиненция и Зависимость: Физиологические и психологические эффекты многократного употребления наркотиков."
    ],
    keyPointsHy: [
      "Ցիրկադային ռիթմ. կենսաբանական ժամացույց. մարմնի կանոնավոր ռիթմեր, որոնք տեղի են ունենում 24-ժամյա ցիկլով:",
      "Քնի փուլերը. NREM-1 (թեթև քուն), NREM-2, NREM-3 (խորը քուն) և REM (աչքերի արագ շարժում, վառ երազներ):",
      "Ինչու ենք մենք քնում. պաշտպանություն, վերականգնում, հիշողության համախմբում, ստեղծագործական մտածողություն:",
      "Երազների տեսություններ. Ֆրեյդի ցանկությունների իրականացում, տեղեկատվության մշակում, ֆիზიոլոգիական գործառույթ:",
      "Հիպնոզ. սոციալական փոխազդեցություն, որտեղ մի անձը մյուսին առաջարկում է որոշակի ընկալումներ կամ մտքեր:",
      "Հոգեակտիվ դեղամիջոցներ. դեպրեսանտներ (ալկոհոլ), խթանիչներ (կոֆեին, նիկոտին) և հալյուցինոգեններ (LSD):",
      "Հանդուրժողականություն և կախվածություն. թմրամիջոցների բազմակի օգտագործման ֆիზიոլոգիական ազդեցությունները:"
    ],
    keyPointsAz: [
      "Sirkad ritm: bioloji saat; 24 saatlıq dövr ərzində baş verən müntəzəm bədən ritmləri (məsələn, temperatur və oyanıqlıq).",
      "Yuxu mərhələləri: NREM-1 (yüngül yuxu), NREM-2, NREM-3 (dərin yuxu) və REM (sürətli göz hərəkəti, parlaq yuxular).",
      "Niyə yatırıq: Qorunma, bərpa, yaddaşın möhkəmlənməsi, yaradıcı düşüncə və böyümənin dəstəklənməsi.",
      "Yuxu nəzəriyyələri: Freydin istəklərin yerinə yetirilməsi, məlumatın emalı, fizioloji funksiya, neyral aktivləşmə.",
      "Hipnoz: bir insanın digərinə müəyyən qavrayışların, hisslərin və ya davranışların kortəbii baş verəcəyini təklif etdiyi sosial qarşılıqlı təsir.",
      "Psixoaktiv maddələr: Depressantlar (alkoqol), Stimulyatorlar (kofein, nikotin, kokain) və Hallüsinogenlər (LSD).",
      "Tolerantlıq, Geri çəkilmə və Asılılıq: təkrar dərman istifadəsinin fizioloji və psixoloji təsirləri."
    ],
    funFact: "While you sleep, your brain is highly active, especially during REM sleep. Your brain actually paralyzes your muscles during REM to prevent you from acting out your dreams!",
    funFactKa: "სანამ გძინავთ, თქვენი ტვინი ძალიან აქტიურია, განსაკუთრებით REM ძილის დროს. REM ძილის დროს თქვენი ტვინი ახდენს კუნთების პარალიზებას, რათა არ იმოძრაოთ სიზმრების შესაბამისად!",
    funFactRu: "Пока вы спите, ваш мозг активно работает, особенно во время быстрого сна. Мозг фактически парализует ваши мышцы, чтобы вы не могли физически воплощать свои сны!",
    funFactHy: "Քնած ժամանակ ձեր ուղեղը շատ ակտիվ է, հատկապես REM քնի ժամանակ: Ձեր ուղեղը փաստացի կաթվածահար է անում ձեր մկանները:",
    funFactAz: "Siz yatarkən beyniniz çox aktivdir, xüsusən də REM yuxusu zamanı. Beyniniz yuxularınızı fiziki olaraq həyata keçirməyinizə mane olmaq üçün REM zamanı əzələlərinizi iflic edir!",
    realWorld: "Understanding sleep hygiene (like avoiding blue light before bed) can significantly improve cognitive performance and overall health.",
    realWorldKa: "ძილის ჰიგიენის გაგებამ (მაგალითად, ძილის წინ ლურჯი შუქის თავიდან აცილება) შეიძლება მნიშვნელოვნად გააუმჯობესოს კოგნიტური შესრულება და ჯანმრთელობა.",
    realWorldRu: "Понимание гигиены сна (например, отказ от синего света перед сном) может значительно улучшить когнитивные способности и общее состояние здоровья.",
    realWorldHy: "Քնի հիგიենայի ըմբռնումը (օրինակ՝ քնելուց առաջ կապույտ լույսից խուսափելը) կարող է զգալիորեն բարելավել ճանաჩողական աշխատանքը:",
    realWorldAz: "Yuxu gigiyenasını başa düşmək (yatmazdan əvvəl mavi işıqdan qaçmaq kimi) idrak performansını və ümumi sağlamlığı əhəmiyyətli dərəcədə yaxşılaşdıra bilər.",
    keyFigures: ["Sigmund Freud","Ernest Hilgard","William James"],
    keyFiguresKa: ["ზიგმუნდ ფროიდი", "ერნესტ ჰილგარდი", "უილიამ ჯეიმსი"],
    keyFiguresRu: ["Зигмунд Фрейд", "Эрнест Хилгард", "Уильям Джеймс"],
    keyFiguresHy: ["Զիգմունդ Ֆրեյդ", "Էռնեստ Հիլգարդ", "Ուիլյամ Ջեյմս"],
    keyFiguresAz: ["Ziqmund Freyd", "Ernest Hilqard", "Uilyam Ceyms"]
  },
    {
    id: 6,
    title: "Learning",
    titleKa: "სწავლა",
    titleRu: "Научение",
    titleHy: "Ուսուցում",
    titleAz: "Öyrənmə",
    description: "Classical conditioning, operant conditioning, and observational learning.",
    descriptionKa: "კლასიკური განპირობებულობა, ოპერანტული განპირობებულობა და დაკვირვებით სწავლა.",
    descriptionRu: "Классическое обусловливание, оперантное обусловливание и научение через наблюдение.",
    descriptionHy: "Դասական պայմանավորվածություն և դիտողական ուսուցում:",
    descriptionAz: "Klassik şərtlənmə, operant şərtlənmə və müşahidə yolu ilə öyrənmə.",
    icon: "mdi:school-outline",
    keyTopics: ["Classical Conditioning","Operant Conditioning","Observational Learning","Cognitive Processes"],
    keyTopicsKa: ["კლასიკური განპირობებულობა","ოპერანტული განპირობებულობა","დაკვირვებით სწავლა","კოგნიტური პროცესები"],
    keyTopicsRu: ["Классическое обусловливание","Оперантное обусловливание","Научение через наблюдение","Когнитивные процессы"],
    keyTopicsHy: ["Դասական պայմանավորվածություն","Օպերանտային պայմանավորվածություն","Դիտողական ուսուցում"],
    keyTopicsAz: ["Klassik Şərtlənmə","Operant Şərtlənmə","Müşahidə yolu ilə öyrənmə","Koqnitiv proseslər"],
    summary: "Learning is a relatively permanent change in behavior due to experience. Key paradigms include Pavlov's classical conditioning, Skinner's operant conditioning, and Bandura's social learning theory.",
    summaryKa: "სწავლა არის ქცევის შედარებით მუდმივი ცვლილება გამოცდილების შედეგად. ძირითადი პარადიგმებია პავლოვს კლასიკური განპირობებულობა, სკინერის ოპერანტული განპირობებულობა და ბანდურას სოციალური სწავლის თეორია.",
    summaryRu: "Научение — это относительно стабильное изменение поведения в результате опыта. Основные парадигмы включают классическое обусловливание Павлова, оперантное обусловливание Скиннера и теорию социального научения Бандуры.",
    summaryHy: "Ուսուցումը վարքագծի համեմատաբար մշտական ​​փոփոխություն է փորձի շնորհիվ: Հիմնական պարադիգմները ներառում են Պավլովի դասական պայմանավորվածությունը:",
    summaryAz: "Öyrənmə təcrübə sayəsində davranışda baş verən nisbətən daimi dəyişiklikdir. Əsas paradiqmalara Pavlovun klassik şərtlənməsi, Skinnerin operant şərtlənməsi və Banduranın sosial öyrənmə nəzəriyyəsi daxildir.",
    keyPoints: [
      "Classical Conditioning: process of associating two stimuli (Pavlov's dogs: bell + food = salivation). Elements: Unconditioned Stimulus (US), Unconditioned Response (UR), Conditioned Stimulus (CS), Conditioned Response (CR).",
      "Operant Conditioning: behavior is strengthened by reinforcement or diminished by punishment (Skinner's Box).",
      "Reinforcement schedules: Continuous vs. Partial (fixed-ratio, variable-ratio, fixed-interval, variable-interval). Variable-ratio results in the highest response rate.",
      "Positive vs. Negative Reinforcement: Positive (adding a reward); Negative (removing something unpleasant). Both increase behavior.",
      "Punishment: Positive punishment (adding an unpleasant stimulus); Negative punishment (taking away a desirable stimulus). Both decrease behavior.",
      "Observational Learning: learning by watching others (Bandura's Bobo doll experiment). Involves modeling and vicarious reinforcement.",
      "Cognitive Learning: latent learning, insight learning, and the role of cognitive maps (Edward Tolman)."
    ],
    keyPointsKa: [
      "კლასიკური განპირობებულობა: ორი სტიმულის ასოცირების პროცესი (პავლოვს ძაღლები). ელემენტები: უპირობო სტიმული, უპირობო რეაქცია, პირობითი სტიმული, პირობითი რეაქცია.",
      "ოპერანტული განპირობებულობა: ქცევა ძლიერდება განმტკიცებით ან მცირდება დასჯით (სკინერის ყუთი).",
      "განმტკიცების განრიგი: უწყვეტი და ნაწილობრივი (ფიქსირებული პროპორცია, ცვლადი პროპორცია). ცვლადი პროპორცია ყველაზე მაღალ შედეგს იძლევა.",
      "დადებითი და უარყოფითი განმტკიცება: დადებითი (ჯილდოს დამატება); უარყოფითი (უსიამოვნოს მოცილება). ორივე ზრდის ქცევას.",
      "დასჯა: დადებითი დასჯა (უსიამოვნო სტიმულის დამატება); უარყოფითი დასჯა (სასურველი სტიმულის წართმევა). ორივე ამცირებს ქცევას.",
      "დაკვირვებით სწავლა: სწავლა სხვების ყურებით (ბანდურას ექსპერიმენტი ბობო თოჯინით).",
      "კოგნიტური სწავლება: ლატენტური სწავლა, ინსაიტ-სწავლა და კოგნიტური რუკების როლი."
    ],
    keyPointsRu: [
      "Классическое обусловливание: процесс ассоциации двух стимулов (собаки Павлова). Элементы: Безусловный стимул (БС), Безусловная реакция (БР), Условный стимул (УС), Условная реакция (УР).",
      "Оперантное обусловливание: поведение усиливается подкреплением или ослабляется наказанием (Ящик Скиннера).",
      "Графики подкрепления: Непрерывное против Частичного (фиксированное соотношение, переменное соотношение). Переменное соотношение дает самую высокую скорость реагирования.",
      "Положительное и Отрицательное подкрепление: Положительное (добавление награды); Отрицательное (удаление неприятного). Оба усиливают поведение.",
      "Наказание: Положительное наказание (неприятный стимул); Отрицательное наказание (лишение желаемого). Оба ослабляют поведение.",
      "Научение через наблюдение: обучение путем наблюдения за другими (эксперимент Бандуры с куклой Бобо).",
      "Когнитивное научение: латентное научение, научение через инсайт и роль когнитивных карт."
    ],
    keyPointsHy: [
      "Դասական պայմանավորվածություն. երկու խթանների ասոցացման գործընթաց (Պավլովի շներ):",
      "Օպերանտային պայմանավորվածություն. վարքագիծն ուժեղանում է ամրապնդմամբ կամ նվազում պատժով (Սկինների տուփ):",
      "Ամրապնդման ժամանակացույցեր. շարունակական ընդդեմ մասնակի: Փոփոխական հարաբերակցությունը տալիս է ամենաբարձր արդյունքը:",
      "Դրական և բացասական ամրապնդում. երկուսն էլ մեծացնում են վարքագիծը:",
      "Պատիժ. դրական պատիժ (տհաճ խթանի ավելացում), բացասական պատիժ (ցանկալի խթանի հեռացում):",
      "Դիտողական ուսուցում. սովորել՝ դիտելով ուրիշներին (Բանդուրայի Բոբո տիկնիկի փորձը):",
      "Ճանաչողական ուսուցում. լատենտային ուսուցում, ինսայթ ուսուցում:"
    ],
    keyPointsAz: [
      "Klassik Şərtlənmə: iki stimulun əlaqələndirilməsi prosesi (Pavlovun itləri: zəng + yemək = tüpürcək ifrazı).",
      "Operant Şərtlənmə: davranış möhkəmləndirmə ilə güclənir və ya cəza ilə azalır (Skinner qutusu).",
      "Möhkəmləndirmə cədvəlləri: Davamlı və ya Qismən. Dəyişən nisbətli cədvəl ən yüksək cavab sürətinə səbəb olur.",
      "Müsbət və Mənfi Möhkəmləndirmə: Müsbət (mükafat əlavə etmək); Mənfi (xoşagəlməz bir şeyi çıxarmaq). Hər ikisi davranışı artırır.",
      "Cəza: Müsbət cəza (xoşagəlməz stimul əlavə etmək); Mənfi cəza (arzuolunan stimulu götürmək). Hər ikisi davranışı azaldır.",
      "Müşahidə yolu ilə öyrənmə: başqalarını izləməklə öyrənmə (Banduranın Bobo gəlincik təcrübəsi).",
      "Koqnitiv Öyrənmə: latent öyrənmə, insayt öyrənmə və koqnitiv xəritələrin rolu."
    ],
    funFact: "Pigeons can be trained to recognize individual human faces and even identify cancer symptoms in X-rays using operant conditioning principles.",
    funFactKa: "მტრედების გაწვრთნა შესაძლებელია ადამიანის სახეების ამოსაცნობად და რენტგენის სურათებზე კიბოს სიმპტომების იდენტიფიცირებისთვისაც კი, ოპერანტული განპირობებულობის პრინციპების გამოყენებით.",
    funFactRu: "Голубей можно научить узнавать лица людей и даже выявлять симптомы рака на рентгеновских снимках, используя принципы оперантного обусловливания.",
    funFactHy: "Աղավնիները կարող են վարժեցվել ճանաչելու մարդկանց դեմքերը և նույնիսկ բացահայտել քաղցկեղի ախտանիշները ռենտգենյան ճառագայթների միջոցով:",
    funFactAz: "Göyərçinlər operant şərtlənmə prinsiplərindən istifadə edərək insan üzlərini tanımaq və hətta rentgen şüalarında xərçəng əlamətlərini aşkar etmək üçün öyrədilə bilər.",
    realWorld: "Marketers often use classical conditioning by pairing their products with pleasant music or attractive images, hoping you'll transfer those positive feelings to the product.",
    realWorldKa: "მარკეტოლოგები ხშირად იყენებენ კლასიკურ განპირობებულობას თავიანთი პროდუქტების სასიამოვნო მუსიკასთან ან მიმზიდველ სურათებთან დაკავშირებით.",
    realWorldRu: "Маркетологи часто используют классическое обусловливание, сочетая свои продукты с приятной музыкой или привлекательными изображениями.",
    realWorldHy: "Մարքեթոլոգները հաճախ օգտագործում են դասական պայմանավորվածություն՝ իրենց արտադրանքը զուգակցելով հաճելի երաժշտության կամ գրավիչ պատկերների հետ:",
    realWorldAz: "Marketoloqlar tez-tez məhsullarını xoş musiqi və ya cəlbedici şəkillərlə birləşdirərək klassik şərtlənmədən istifadə edirlər.",
    keyFigures: ["Ivan Pavlov","B.F. Skinner","Albert Bandura","John B. Watson"],
    keyFiguresKa: ["ივანე პავლოვი", "ბ.ფ. სკინერი", "ალბერტ ბანდურა", "ჯონ ბ. უოტსონი"],
    keyFiguresRu: ["Иван Павлов", "Б.Ф. Скиннер", "Альберт Бандура", "Джон Б. Уотсон"],
    keyFiguresHy: ["Իվան Պավլով", "Բ.Ֆ. Սկիներ", "Ալբերտ Բանդուրա", "Ջոն Բ. Ուոթսոն"],
    keyFiguresAz: ["İvan Pavlov", "B.F. Skinner", "Albert Bandura", "Con B. Uotson"]
  },
    {
    id: 7,
    title: "Memory",
    titleKa: "მეხსიერება",
    titleRu: "Память",
    titleHy: "Հիշողություն",
    titleAz: "Yaddaş",
    description: "How we encode, store, and retrieve information.",
    descriptionKa: "როგორ ხდება ინფორმაციის კოდირება, შენახვა და აღდგენა.",
    descriptionRu: "Как мы кодируем, храним и извлекаем информацию.",
    descriptionHy: "Ինչպես ենք մենք կոդավորում, պահում և առբերում տեղեկատվությունը:",
    descriptionAz: "Məlumatı necə kodlayırıq, saxlayırıq və bərpa edirik.",
    icon: "mdi:brain-freeze-outline",
    keyTopics: ["Encoding","Storage","Retrieval","Forgetting","Memory Construction"],
    keyTopicsKa: ["კოდირება","შენახვა","აღდგენა","დავიწყება","მეხსიერების კონსტრუირება"],
    keyTopicsRu: ["Кодирование","Хранение","Извлечение","Забывание","Конструирование памяти"],
    keyTopicsHy: ["Կոդավորում","Պահպանում","Առբերում","Մոռացում","Հիշողության կառուցում"],
    keyTopicsAz: ["Kodlaşdırma","Saxlama","Bərpa","Unutma","Yaddaşın qurulması"],
    summary: "Memory is any indication that learning has persisted over time. It involves a three-stage model: sensory memory, short-term memory, and long-term memory.",
    summaryKa: "მეხსიერება არის ნებისმიერი მტკიცებულება იმისა, რომ სწავლა შენარჩუნებულია დროთა განმავლობაში. იგი მოიცავს სამეტაპიან მოდელს: სენსორულ, ხანმოკლე და ხანგრძლივ მეხსიერებას.",
    summaryRu: "Память — это любое свидетельство того, что научение сохраняется во времени. Она включает трехстадийную модель: сенсорная память, кратковременная память и долговременная память.",
    summaryHy: "Հիշողությունը ուսուցման պահպանման ցանկացած ցուցում է ժամանակի ընթացքում: Այն ներառում է երեք փուլով մոդել:",
    summaryAz: "Yaddaş öyrənmənin zamanla davam etdiyinin hər hansı bir göstəricisidir. Üç mərhələli modeli əhatə edir: duyğu yaddaşı, qısამüddətli yaddaş və uzunmüddətli yaddaş.",
    keyPoints: [
      "Three-stage model (Atkinson-Shiffrin): Sensory Memory (immediate, brief) → Short-term/Working Memory (active processing, 7+/-2 chunks) → Long-term Memory (permanent storage).",
      "Explicit Memory (declarative): conscious recall of facts (semantic) and events (episodic). Processed in the hippocampus.",
      "Implicit Memory (non-declarative): skills and procedures (procedural). Processed in the cerebellum and basal ganglia.",
      "Encoding strategies: Chunking, Mnemonics, Hierarchies, and the Spacing Effect (spaced study is better than cramming).",
      "Retrieval cues: Context-dependent memory (better recall in same environment) and State-dependent memory (better recall when in same state/mood).",
      "Forgetting: Encoding failure, storage decay, or retrieval failure (proactive vs. retroactive interference).",
      "Memory construction: we don't just 'replay' memories; we reconstruct them. Misinformation effect: incorporating misleading information into one's memory of an event."
    ],
    keyPointsKa: [
      "სამეტაპიანი მოდელი (ატკინსონ-შიფრინი): სენსორული მეხსიერება → ხანმოკლე/სამუშაო მეხსიერება → ხანგრძლივი მეხსიერება.",
      "ექსპლიციტური მეხსიერება: ფაქტების (სემანტიკური) და მოვლენების (ეპიზოდური) გაცნობიერებული გახსენება. მუშავდება ჰიპოკამპში.",
      "იმპლიციტური მეხსიერება: უნარები და პროცედურები. მუშავდება ნათხემსა და ბაზალურ განგლიებში.",
      "კოდირების სტრატეგიები: დაჯგუფება (ჩანქინგი), მნემონიკა, იერარქიები და განაწილების ეფექტი.",
      "აღდგენის მინიშნებები: კონტექსტზე დამოკიდებული და მდგომარეობაზე დამოკიდებული მეხსიერება.",
      "დავიწყება: კოდირების ჩავარდნა, შენახვის გაცვეთა ან აღდგენის ჩავარდნა (პროაქტიული და რეტროაქტიული ინტერფერენცია).",
      "მეხსიერების კონსტრუირება: ჩვენ არ ვუკრავთ მეხსიერებას ჩანაწერის მსგავსად, ჩვენ ვახდენთ მის რეკონსტრუქციას."
    ],
    keyPointsRu: [
      "Трехстадийная модель (Эткинсон-Шиффрин): Сенсорная память → Кратковременная/Рабочая память → Долговременная память.",
      "Эксплицитная память (декларативная): сознательное вспоминание фактов (семантическая) и событий (эпизодическая). Обрабатывается в гиппокампе.",
      "Имплицитная память (недекларативная): навыки и процедуры (процедурная). Обрабатывается в мозжечке и базальных ганглиях.",
      "Стратегии кодирования: Чанкинг (группировка), Мнемоника, Иерархии и Эффект распределения.",
      "Признаки извлечения: Контекстно-зависимая память и Состояние-зависимая память.",
      "Забывание: Ошибка кодирования, распад хранилища или ошибка извлечения (проактивная и ретроактивная интерференция).",
      "Конструирование памяти: мы не просто «воспроизводим» воспоминания; мы реконструируем их. Эффект дезинформации."
    ],
    keyPointsHy: [
      "Երեք փուլով մոդել (Ատկինսոն-Շիֆրին). Սենսորային հիշողություն → Կարճաժամկետ/աշխատանքային հիշողություն → Երկարաժամկետ հիշողություն:",
      "Էքսպլիցիտ հիշողություն. փաստերի (սեմանտիկ) և իրադարձությունների (էպիզոդիկ) գիտակցված վերհիշում:",
      "Իմպլիցիտ հիշողություն. հմտություններ և ընթացակարգեր:",
      "Կոդավորման ռազմավարություններ. խմբավորում, մնեմոնիկա և տարածության էֆեկտ:",
      "Առբերման հուշումներ. համատեքստից կախված հիշողություն և վիճակից կախված հիշողություն:",
      "Մոռացում. կոդավորման ձախողում (պրոակտիվ ընդդեմ ռետროակտիվ միջամտության):",
      "Հիշողության կառուցում. մենք ընդամենը չենք «վերարտադրում» հիշողությունները. մենք վերակառուցում ենք դրանք:"
    ],
    keyPointsAz: [
      "Üç mərhələli model (Atkinson-Shiffrin): Duyğu Yaddaşı → Qısamüddətli/İşçi Yaddaş → Uzunmüddətli Yaddaş.",
      "Açıq Yaddaş (deklarativ): faktların (semantik) və hadisələrin (epizodik) şüurlu şəkildə xatırlanması. Hipokampusda emal olunur.",
      "Gizli Yaddaş (qeyri-deklarativ): bacarıqlar və prosedurlar (prosedur yaddaşı). Beyincik və bazal qanqlialarda emal olunur.",
      "Kodlaşdırma strategiyaları: Qruplaşdırma (Chunking), Mnemonika, İyerarxiyalar və Boşluq Effekti.",
      "Bərpa işarələri: Kontekstdən asılı yaddaş və Vəziyyətdən asılı yaddaş.",
      "Unutma: Kodlaşdırma xətası, saxlama pozulması və ya bərpa xətası (proaktiv və ya retroaktiv müdaxilə).",
      "Yaddaşın qurulması: biz xatirələri sadəcə 'təkrar etmirik'; biz onları yenidən qururuq. Dezinformasiya effekti."
    ],
    funFact: "Your long-term memory has a virtually unlimited capacity. However, every time you retrieve a memory, you alter it slightly — memory is more like a Wikipedia page that can be edited than a static video recording.",
    funFactKa: "თქვენს ხანგრძლივ მეხსიერებას პრაქტიკულად შეუზღუდავი ტევადობა აქვს. თუმცა, ყოველ ჯერზე, როდესაც მეხსიერებიდან რამეს აღადგენთ, მას ოდნავ ცვლით.",
    funFactRu: "Ваша долговременная память имеет практически неограниченную емкость. Однако каждый раз, когда вы извлекаете воспоминание, вы его немного изменяете.",
    funFactHy: "Ձեր երկարաժամկետ հիշողությունը գործնականում անսահմանափակ հզորություն ունի:",
    funFactAz: "Uzunmüddətli yaddaşınız faktiki olaraq məhdudiyyətsiz tutuma malikdir. Bununla belə, hər dəfə bir xatirəni bərpa etdikdə, onu bir az dəyişirsiniz — yaddaş statik video yazıdan daha çox redaktə edilə bilən Wikipedia səhifəsinə bənzəyir.",
    realWorld: "To ace your exams, use the 'Testing Effect' and 'Spaced Practice.' Testing yourself frequently and spreading your study sessions over several days is much more effective than one long cramming session.",
    realWorldKa: "გამოცდების წარმატებით ჩასაბარებლად გამოიყენეთ 'ტესტირების ეფექტი' და 'განაწილებული პრაქტიკა'.",
    realWorldRu: "Чтобы успешно сдать экзамены, используйте «эффект тестирования» и «распределенную практику».",
    realWorldHy: "Քննությունները հաջողությամբ հանձնելու համար օգտագործեք «թեստավորման էֆեկտը» և «տարածված պրակտիկան»:",
    realWorldAz: "İmtahanlarda müvəffəqiyyət qazanmaq üçün 'Sınaq Effekti' və 'Aralıqlı Təcrübə'dən istifadə edin.",
    keyFigures: ["Hermann Ebbinghaus","Elizabeth Loftus","George Miller"],
    keyFiguresKa: ["ჰერმანებინგჰაუსი", "ელიზაბეტ ლოფტუსი", "ჯორჯ მილერი"],
    keyFiguresRu: ["Герман Эббингауз", "Элизабет Лофтус", "Джордж Миллер"],
    keyFiguresHy: ["Հերման Էբինգհաուս", "Էլիզաբեթ Լոֆտուս", "Ջորջ Միլլեր"],
    keyFiguresAz: ["Hermann Ebbinghaus", "Elizabeth Loftus", "George Miller"]
  },
  {
    id: 8,
    title: "Cognition and Intelligence",
    titleKa: "შემეცნება და ინტელექტი",
    titleRu: "Познание и интеллект",
    titleHy: "Ճանաչում և բանականություն",
    titleAz: "İdrak və İntellekt",
    description: "Thinking, problem-solving, language, and measuring intelligence.",
    descriptionKa: "აზროვნება, პრობლემის გადაჭრა, ენა და ინტელექტის გაზომვა.",
    descriptionRu: "Мышление, решение проблем, язык и измерение интеллекта.",
    descriptionHy: "Մտածողություն, խնդիրների լուծում, լեզու և ինտելեկտի չափում:",
    descriptionAz: "Düşünmə, problem həll etmə, dil və zəkanın ölçülməsi.",
    icon: "mdi:lightbulb-outline",
    keyTopics: ["Problem Solving","Decision Making","Language","Intelligence Testing","Creativity"],
    keyTopicsKa: ["პრობლემის გადაჭრა","გადაწყვეტილების მიღება","ენა","დაზვერვის ტესტირება","კრეატიულობა"],
    keyTopicsRu: ["Решение проблем","Принятие решений","Язык","Тестирование интеллекта","Креативность"],
    keyTopicsHy: ["Խնդրի լուծում","Որոշումների կայացում","Լեզու","Հետախուզության թեստավորում","Ստեղծագործականություն"],
    keyTopicsAz: ["Problemin həlli","Qərar vermə","Dil","Kəşfiyyat Testi","Yaradıcılıq"],
    summary: "Cognition encompasses thinking, reasoning, problem-solving, and language. Examines heuristics and biases, theories of intelligence, IQ testing, and the nature vs. nurture debate.",
    summaryKa: "შემეცნება მოიცავს აზროვნებას, მსჯელობას, პრობლემის გადაჭრას და ენას. იკვლევს ჰევრისტიკასა და მიკერძოებებს, ინტელექტის თეორიებს, IQ ტესტირებას და ბუნება-აღზრდის დებატებს.",
    summaryRu: "Познание включает в себя мышление, рассуждение, решение проблем и язык. В главе рассматриваются эвристики и предвзятости, теории интеллекта, тестирование IQ и дебаты о влиянии природы и среды.",
    summaryHy: "Ճանաչողությունը ներառում է մտածողությունը, դատողությունը, խնդիրների լուծումը և լեზուն: Գլուխը քննարկում է հեվրիստիկան և կողմնակալությունները, ինտելեկտի տեսությունները, IQ թեստավորումը:",
    summaryAz: "Koqnisiya (idrak) düşünmə, mühakimə yürütmə, problem həll etmə və dil fəaliyyətlərini əhatə edir. Bu fəsildə evristika və qərəzlər, intellekt nəzəriyyələri, İQ testi və təbiət vs. tərbiyə müzakirələri nəzərdən keçirilir.",
    keyPoints: [
      "Cognition includes all mental activities: perceiving, thinking, remembering, and communicating.",
      "Problem-solving strategies: algorithms (step-by-step, guaranteed), heuristics (mental shortcuts, fast but error-prone), and insight (sudden \"aha!\" moments).",
      "Cognitive biases: Confirmation bias (seeking info that confirms beliefs), Availability heuristic (judging frequency by ease of recall), Anchoring (over-relying on first information), Framing effect (decisions change based on how options are presented).",
      "Language development: Babbling (6 mo) → One-word (12 mo) → Two-word (24 mo) → Full sentences (3–4 yrs). Chomsky argued humans have an innate Language Acquisition Device (LAD).",
      "The Sapir-Whorf hypothesis suggests that language shapes thought. The strong version (language determines thought) is mostly rejected; the weak version (language influences thought) has support.",
      "Intelligence theories: Spearman's g (general intelligence), Gardner's multiple intelligences (8 types), Sternberg's triarchic theory (analytical, creative, practical).",
      "IQ tests (Stanford-Binet, WAIS) have mean = 100, SD = 15. IQ is 50–80% heritable, but environment matters enormously — the Flynn effect shows IQ scores have risen ~3 points per decade worldwide."
    ],
    keyPointsKa: [
      "შემეცნება მოიცავს ყველა ფსიქიკურ აქტივობას: აღქმას, აზროვნებას, დამახსოვრებას და კომუნიკაციას.",
      "პრობლემის გადაჭრის სტრატეგიები: ალგორითმები (ეტაპობრივი), ჰევრისტიკა (გონებრივი მალსახმობები) და ინსაიტი (მოულოდნელი \"აჰა!\" მომენტები).",
      "კოგნიტური მიკერძოებები: დადასტურების მიკერძოება, ხელმისაწვდომობის ჰევრისტიკა, ანკორინგი (დაკავშირება) და ფრეიმინგის (ჩარჩოს) ეფექტი.",
      "ენის განვითარება: ღუღუნი (6 თვე) → ერთი სიტყვა (12 თვე) → ორი სიტყვა (24 თვე) → სრული წინადადებები (3–4 წელი). ჩომსკი ამტკიცებდა, რომ ადამიანებს აქვთ ენის ათვისების თანდაყოლილი მექანიზმი (LAD).",
      "საპირ-ვორფის ჰიპოთეზა ვარაუდობს, რომ ენა აყალიბებს აზროვნებას. სუსტი ვერსია (ენა გავლენას ახდენს აზროვნებაზე) მეცნიერულად მხარდაჭერილია.",
      "ინტელექტის თეორიები: სპირმენის g (ზოგადი ინტელექტი), გარდნერის მრავალმხრივი ინტელექტი (8 ტიპი), სტერნბერგის ტრიარქიული თეორია (ანალიტიკური, კრეატიული, პრაქტიკული).",
      "IQ ტესტებს (სტენფორდ-ბინე, WAIS) აქვთ საშუალო = 100. ფლინის ეფექტი აჩვენებს, რომ IQ ქულები ყოველ ათწლეულში საშუალოდ 3 ქულით იზრდება მთელ მსოფლიოში."
    ],
    keyPointsRu: [
      "Познание включает все виды ментальной деятельности: восприятие, мышление, запоминание и общение.",
      "Стратегии решения задач: алгоритмы (пошаговые), эвристики (упрощенные правила) и инсайт (внезапное озарение).",
      "Когнитивные искажения: предвзятость подтверждения, эвристика доступности, эффект привязки (анкоринг) и эффект фрейминга.",
      "Развитие языка: лепет (6 мес) → одно слово (12 мес) → два слова (24 мес) → полные предложения (3–4 года). Хомский считал способность к языку врожденной.",
      "Гипотеза Сепира-Уорфа утверждает, что язык формирует мышление. Слабая версия (язык влияет на мысли) находит подтверждение.",
      "Теории интеллекта: фактор g Спирмена, множественный интеллект Гарднера (8 типов), триархическая теория Стернберга.",
      "Тесты IQ (Стэнфорд-Бине, WAIS) имеют среднее значение 100. Эффект Флинна: показатели IQ растут примерно на 3 пункта за десятилетие."
    ],
    keyPointsHy: [
      "Ճանաչողությունը ներառում է բոլոր հոգեկան գործողությունները՝ ընկալում, մտածողություն, հիշողություն և հաղորդակցություն:",
      "Խնդիրների լուծման ռազմավարություններ՝ ալգորիթմներ (քայլ առ քայլ), հեվրիստիկա (մտավոր կարճուղիներ) և ինսայթ (հանկարծակի պայծառացում):",
      "Ճանաչողական կողմնակալություններ՝ հաստատման կողմնակալություն, հասանելիության հեվրիստիկա, խարսխման էֆեկտ և ֆրեյմինգի էֆեկտ:",
      "Լեզվի զարգացում՝ թոթოვանք (6 ամս.) → մեկ բառ (12 ամս.) → երկու բառ (24 ամս.) → լրիվ նախադասություններ (3–4 տարի):",
      "Սեպիր-Ուորֆի հիպոթեզը ենթադրում է, որ լեզուն ձևավորում է մտածողությունը:",
      "Ինտելեկտի տեսություններ՝ Սպիրմենի g գործոն, Գարդների բազմապատիկ ինտելեկտ (8 տեսակ), Ստեռնբերգի տրիարխիկ տեսություն:",
      "IQ թեստերը (Ստենֆորդ-Բինե, WAIS) ունեն միջինը = 100: Ֆլինի էֆեկտը ցույց է տալիս, որ IQ միավորները ողջ աշխարհում աճում են:"
    ],
    keyPointsAz: [
      "Koqnisiya (idrak) bütün psixi fəaliyyətləri: qavrayış, düşünmə, yadda saxlama və ünsiyyəti əhatə edir.",
      "Problemin həlli strategiyaları: alqoritmlər (addım-addım), evristikalar (zehni qısayollar) və insayt (qəfil \"aha!\" anları).",
      "Koqnitiv qərəzlər: Təsdiqləmə qərəzi (inancları təsdiqləyən məlumatı axtarmaq), Əlçatanlıq evristikası və Freyminq (çərçivələmə) effekti.",
      "Dilin inkişafı: Qığıldama (6 ay) → Tək söz (12 ay) → İki söz (24 ay) → Tam cümlələr (3–4 yaş). Çomski dil öyrənmə qabiliyyətinin anadangəlmə olduğunu müdafiə edirdi.",
      "Sapir-Whorf hipotezi dilin təfəkkürü formalaşdırdığını irəli sürür. Zəif versiya (dil təfəkkürə təsir edir) geniş qəbul olunur.",
      "İntellekt nəzəriyyələri: Spearman-ın g-faktoru (ümumi intellekt), Gardner-in çoxşaxəli intellekti (8 növ), Sternberg-in triarxik nəzəriyyəsi.",
      "İQ testləri (Stanford-Binet, WAIS): Orta bal 100-dür. Flynn effekti İQ ballarının hər onillikdə dünya üzrə ~3 bal artdığını göstərir."
    ],
    funFact: "The \"Dunning-Kruger effect\" shows that people with the least competence in a skill tend to overestimate their ability the most, while experts tend to underestimate theirs. The less you know, the more confident you feel!",
    funFactKa: "„დანინგ-კრიუგერის ეფექტი“ აჩვენებს, რომ ადამიანები, რომლებსაც აქვთ ყველაზე ნაკლები კომპეტენცია, მიდრეკილნი არიან გადააფასონ საკუთარი შესაძლებლობები. რაც ნაკლები იცით, მით უფრო თავდაჯერებული ხართ!",
    funFactRu: "«Эффект Даннинга-Крюгера» показывает, что люди с наименьшей компетенцией склонны переоценивать свои способности, в то время как эксперты их недооценивают. Чем меньше вы знаете, тем увереннее себя чувствуете!",
    funFactHy: "«Դանինգ-Կրյուգերի էֆեկտը» ցույց է տալիս, որ ամենաքիչ իրազեկված մարդիկ հակված են գերագնահատել իրենց կարողությունները: Որքան քիչ գիտեք, այնքան ավելի վստահ եք զգում ձեզ:",
    funFactAz: "\"Dunning-Kruger effekti\" göstərir ki, bir bacarıqda ən az səriştəsi olan insanlar öz qabiliyyətlərini həddindən artıq qiymətləndirməyə meyillidirlər. Nə qədər az bilsəniz, özünüzü bir o qədər əmin hiss edirsiniz!",
    realWorld: "Cognitive biases affect everyone: doctors, judges, investors. Daniel Kahneman won a Nobel Prize showing how systematic biases in thinking lead to predictable errors in decision-making — his work reshaped economics and public policy.",
    realWorldKa: "კოგნიტური მიკერძოებები ყველაზე მოქმედებს: ექიმებზე, მოსამართლეებზე, ინვესტორებზე. დანიელ კანემანმა ნობელის პრემია მიიღო იმის ჩვენებისთვის, თუ როგორ იწვევს აზროვნების სისტემური ხარვეზები შეცდომებს გადაწყვეტილების მიღებაში.",
    realWorldRu: "Когнитивные искажения влияют на всех: врачей, судей, инвесторов. Даниэль Канеман получил Нобелевскую премию, показав, как систематические ошибки в мышлении ведут к предсказуемым просчетам в экономике.",
    realWorldHy: "Ճանաչողական կողմնակալությունները ազդում են բոլորի վրա՝ բժիշկների, դատավորների, ներդրողների: Դանիել Կանեմանը Նոբելյան մրցանակ ստացավ՝ ցույց տալով, թե ինչպես են մտածողության համակարգային սխալները հանգեցնում սխալ որոշումների:",
    realWorldAz: "Koqnitiv qərəzlər hər kəsə təsir edir: həkimlər, hakimlər, investorlar. Daniel Kahneman düşüncədəki sistematik qərəzlərin qərar qəbulunda proqnozlaşdırıla bilən səhvlərə necə yol açdığını göstərərək Nobel mükafatı qazandı.",
    keyFigures: ["Alfred Binet","Charles Spearman","Howard Gardner","Robert Sternberg","Noam Chomsky","Daniel Kahneman"],
    keyFiguresKa: ["ალფრედ ბინე", "ჩარლზ სპირმენი", "ჰოვარდ გარდნერი", "რობერტ სტერნბერგი", "ნოამ ჩომსკი", "დანიელ კანემანი"],
    keyFiguresRu: ["Альфред Бине", "Чарльз Спирмен", "Говард Гарднер", "Роберт Стернберг", "Ноам Хомский", "Даниэль Канеман"],
    keyFiguresHy: ["Ալֆրեդ Բինե", "Չարլզ Սպիրմեն", "Հովարդ Գարդներ", "Ռոբերտ Ստեռնբերգ", "Նոամ Չոմսկի", "Դանիել Կանեման"],
    keyFiguresAz: ["Alfred Bine", "Çarlz Spirmen", "Hovard Qardner", "Robert Sternberq", "Noam Çomski", "Daniel Kaneman"]
  },
  {
    id: 9,
    title: "Human Development",
    titleKa: "ადამიანის განვითარება",
    titleRu: "Человеческое развитие",
    titleHy: "Մարդկային զարգացում",
    titleAz: "İnsan İnkişafı",
    description: "Physical, cognitive, and social development across the lifespan.",
    descriptionKa: "ფიზიკური, კოგნიტური და სოციალური განვითარება მთელი ცხოვრების მანძილზე.",
    descriptionRu: "Физическое, когнитивное и социальное развитие на протяжении всей жизни.",
    descriptionHy: "Ֆիզիկական, ճանաչողական և սոցիալական զարգացում ողջ կյանքի ընթացքում:",
    descriptionAz: "Həyat boyu fiziki, koqnitiv və sosial inkişaf.",
    icon: "mdi:baby-face-outline",
    keyTopics: ["Piaget's Stages","Attachment","Erikson's Stages","Moral Development","Aging"],
    keyTopicsKa: ["პიაჟეს ეტაპები","დანართი","ერიქსონის სცენები","მორალური განვითარება","დაბერება"],
    keyTopicsRu: ["Этапы Пиаже","Вложение","Этапы Эриксона","Моральное развитие","Старение"],
    keyTopicsHy: ["Պիաժեի փուլերը","Հավելված","Էրիկսոնի փուլերը","Բարոյական զարգացում","Ծերացում"],
    keyTopicsAz: ["Piagetin mərhələləri","Qoşma","Eriksonun mərhələləri","Mənəvi İnkişaf","Yaşlanma"],
    summary: "Development is a lifelong process. Piaget described cognitive stages. Erikson outlined psychosocial crises. Bowlby and Ainsworth studied attachment. Traces changes from conception through aging.",
    summaryRu: "Развитие — это пожизненный процесс. Пиаже описал когнитивные стадии. Эриксон обозначил психосоциальные кризисы. Боулби и Эйнсворт изучали привязанность.",
    summaryHy: "Զարգացումը ողջ կյանքի ընթացքում շարունակվող գործընթաց է: Պիաժեն նկարագրել է ճանաչողական փուլերը: Էրիկսոնը նախանշել է հոգեսոցիալական ճգնաժամերը: Բոուլբին և Էյնսվորթը ուսումնասիրել են կապվածությունը:",
    summaryAz: "İnkişaf ömür boyu davam edən bir prosesdir. Piaget koqnitiv mərhələləri təsvir etdi. Erikson psixososial böhranları qeyd etdi. Bowlby və Ainsworth bağlanma nəzəriyyəsini hazırladılar.",
    keyPoints: [
      "Nature vs. nurture is a false dichotomy: genes and environment interact continuously. Epigenetics shows that experiences can turn genes on or off.",
      "Piaget's 4 cognitive stages: Sensorimotor (0–2, object permanence), Preoperational (2–7, symbolic thinking but egocentric), Concrete operational (7–11, logical thinking), Formal operational (12+, abstract reasoning).",
      "Attachment theory (Bowlby/Ainsworth): Secure attachment (caregiver responsive) leads to healthy social development. Insecure types: avoidant, anxious-ambivalent, disorganized. Measured by the Strange Situation test.",
      "Erikson's 8 psychosocial stages span the entire lifespan: Trust vs. Mistrust (infancy), Autonomy vs. Shame (toddler), Initiative vs. Guilt (preschool), Industry vs. Inferiority (school age), Identity vs. Role Confusion (adolescence), Intimacy vs. Isolation (young adult), Generativity vs. Stagnation (middle adult), Integrity vs. Despair (late adult).",
      "Kohlberg's moral development: Preconventional (self-interest), Conventional (social norms), Postconventional (universal ethical principles). Most adults operate at the conventional level.",
      "Adolescence brings identity exploration (Erikson's \"identity crisis\"), prefrontal cortex development (not complete until ~25), and heightened emotional volatility due to hormonal changes.",
      "Aging: Fluid intelligence (processing speed) declines with age, but crystallized intelligence (accumulated knowledge) remains stable or even increases. Neuroplasticity continues throughout life."
    ],
    keyPointsKa: ["გენები და გარემო მუდმივად ურთიერთქმედებენ (ეპიგენეტიკა).", "პიაჟეს 4 კოგნიტური ეტაპი: სენსომოტორული, ოპერაციამდელი, კონკრეტული ოპერაციული და ფორმალური ოპერაციული.", "მიჯაჭვულობის თეორია (ბოულბი/ეინსვორტი): უსაფრთხო მიჯაჭვულობა ხელს უწყობს ჯანსაღ განვითარებას.", "ერიქსონის 8 ფსიქოსოციალური ეტაპი მოიცავს მთელ ცხოვრებას (მაგ. ნდობა უნდობლობის წინააღმდეგ).", "კოლბერგის მორალური განვითარება: პრეკონვენციური, კონვენციური და პოსტკონვენციური დონეები.", "მოზარდობა მოიცავს იდენტობის ძიებას და ტვინის პრეფრონტალური ქერქის განვითარებას.", "დაბერება: თხევადი ინტელექტი მცირდება, კრისტალიზებული ინტელექტი კი სტაბილური რჩება."],
    keyPointsRu: ["Гены и среда постоянно взаимодействуют (эпигенетика).", "4 стадии когнитивного развития Пиаже: сенсомоторная, дооперациональная, стадия конкретных и формальных операций.", "Теория привязанности (Боулби/Эйнсворт): надежная привязанность ведет к здоровому развитию личности.", "8 психосоциальных стадий Эриксона охватывают всю жизнь (например, доверие против недоверия).", "Моральное развитие по Кольбергу: преконвенциональный, конвенциональный и постконвенциональный уровни.", "Подростковый возраст приносит поиск идентичности и развитие префронтальной коры.", "Старение: «подвижный» интеллект снижается, а «кристаллизованный» остается стабильным."],
    keyPointsHy: ["Գեները և միջավայրը մշտապես փոխազդում են (էպիգենետիկա):", "Պիաժեի ճանաչողական 4 փուլերը՝ սենսոմոտորային, նախաօպերացիոն, կոնկրետ օպերացիոն և ֆորմալ օպերացիոն:", "Կապվածության տեսություն (Բոուլբի/Էյնսվորթ). ապահով կապվածությունը հանգեցնում է առողջ սոցիալական զարգացման:", "Էրիկսոնի 8 հոգեսոցիալական փուլերը ընդգրկում են ողջ կյանքը (օրինակ՝ վստահություն ընդդեմ անվստահության):", "Կոլբերգի բարոյական զարգացումը. նախակոնվենցիոնալ, կոնվենցիոնալ և հետկոնվենցիոնալ մակարդակներ:", "Դեռահասությունը բերում է ինքնության որոնում և նախաճակատային կեղևի զարգացում:", "Ծերացում. հեղուկ ինտելեկտը նվազում է, իսկ բյուրեղացված ինտելեկտը մնում է կայուն:"],
    keyPointsAz: ["Təbiət və tərbiyə: genlər və ətraf mühit davamlı olaraq qarşılıqlı əlaqədədir (Epigenetika).", "Piagetin 4 koqnitiv mərhələsi: Sensorimotor (0–2 yaş), Əməliyyatönü (2–7 yaş), Konkret əməliyyat (7–11 yaş), Formal əməliyyat (12+ yaş).", "Bağlanma nəzəriyyəsi (Bowlby/Ainsworth): Təhlükəsiz bağlanma (qayğı göstərənə reaksiya) sağlam sosial inkişafa səbəb olur. Qəribə Vəziyyət testi ilə ölçülür.", "Eriksonun 8 psixososial mərhələsi: Etibar vs. Etibarsızlıq (körpə), Müstəqilllik vs. Utanc (uşaq), Tşəbbüs vs. Günahkarlıq (məktəbəqədər), İdentiklik vs. Rol çaşqınlığı (yeniyetmə).", "Kohlberqin mənəvi inkişafı: Prekonvensional (öz maraqları), Konvensional (sosial normalar), Postkonvensional (universal etik prinsiplər).", "Yeniyetməlik dövrü şəxsiyyət kəşfini (identiklik böhranı) və prefrontal korteksin inkişafını gətirir.", "Yaşlanma: Maye zəka (emal sürəti) yaşla bərabər azalır, lakin kristallaşmış zəka (toplanmış bilik) sabit qalır və ya artır."],
    funFact: "Babies can distinguish all speech sounds from all languages until about 10 months of age. After that, their brains \"prune\" unused neural pathways and specialize in their native language sounds — which is why learning a second language gets harder with age.",
    funFactKa: "ჩვილები განასხვავებენ ყველა ენის ბგერებს 10 თვემდე. ამის შემდეგ ხდება ნეირონული გზების „გასხვლა“ და სპეციალიზაცია მშობლიურ ენაზე.",
    funFactRu: "Младенцы различают звуки всех языков мира примерно до 10 месяцев. После этого мозг «отсекает» лишние пути и специализируется на родных звуках.",
    funFactHy: "Մինչև մոտ 10 ամսական երեխաները կարող են տարբերել բոլոր լեզուների բոլոր հնչյունները: Դրանից հետո ուղեղը «մասնագիտանում» է մայրենի լեզվի վրա:",
    funFactAz: "Körpələr təxminən 10 aylıq olana qədər bütün dillərdəki bütün nitq səslərini fərqləndirə bilirlər. Bundan sonra beyin istifadə olunmamış yolları silir və ana dili səslərinə ixtisaslaşır.",
    realWorld: "Ainsworth's attachment research directly influenced childcare policies worldwide. Secure attachment in infancy predicts better relationships, higher self-esteem, and more resilience in adulthood.",
    realWorldKa: "ეინსვორტის კვლევამ გავლენა მოახდინა ბავშვზე ზრუნვის პოლიტიკაზე. ჩვილობაში უსაფრთხო მიჯაჭვულობა პროგნოზირებს ჯანსაღ ურთიერთობებს ზრდასრულობაში.",
    realWorldRu: "Исследования Эйнсворт повлияли на политику ухода за детьми. Надежная привязанность в младенчестве предсказывает лучшую самооценку и стрессоустойчивость.",
    realWorldHy: "Էյնսվորթի հետազոտությունները ազդել են երեխաների խնամքի քաղաքականության վրա: Մանկության տարիներին ապահով կապվածությունը կանխատեսում է ավելի լավ հարաբերություններ մեծահասակ տարիքում:",
    realWorldAz: "Ainsworth-un bağlanma araşdırması dünya miqyasında uşaqlara qulluq siyasətinə birbaşa təsir göstərdi. Körpəlikdə təhlükəsiz bağlanma yetkinlikdə daha yaxşı münasibətləri proqnozlaşdırır.",
    keyFigures: ["Jean Piaget","Erik Erikson","John Bowlby","Mary Ainsworth","Lawrence Kohlberg","Lev Vygotsky"],
    keyFiguresKa: ["ჟან პიაჟე", "ერიკ ერიკსონი", "ჯონ ბოულბი", "მერი ეინსვორტი", "ლოურენს კოლბერგი", "ლევ ვიგოტსკი"],
    keyFiguresRu: ["Жан Пиаже", "Эрик Эриксон", "Джон Боулби", "Мэри Эйнсворт", "Лоуренс Кольберг", "Лев Выготский"],
    keyFiguresHy: ["Ժան Պիաժե", "Էրիկ Էրիկսոն", "Ջոն Բոուլբի", "Մերի Էյնսվորթ", "Լոուրենս Կոլբերգ", "Լև Վիգոտսկի"],
    keyFiguresAz: ["Jan Piaje", "Erik Erikson", "Con Boulbi", "Meri Einsvort", "Lourens Kolberq", "Lev Viqotski"]
  },
  {
    id: 10,
    title: "Motivation and Emotion",
    titleKa: "მოტივაცია და ემოცია",
    titleRu: "Мотивация и эмоции",
    titleHy: "Մոտիվացիա և Զգացմունք",
    titleAz: "Motivasiya və Emosiya",
    description: "What drives human behavior and the science of emotions.",
    descriptionKa: "რა ამოძრავებს ადამიანის ქცევას და ემოციების მეცნიერებას.",
    descriptionRu: "Что движет человеческим поведением и наука об эмоциях.",
    descriptionHy: "Ինչն է մղում մարդու վարքը և զգացմունքների գիտությունը:",
    descriptionAz: "İnsan davranışını və duyğular elmini idarə edən nədir.",
    icon: "mdi:fire",
    keyTopics: ["Maslow's Hierarchy","Hunger & Eating","Achievement Motivation","Basic Emotions","Emotional Intelligence"],
    keyTopicsKa: ["მასლოუს იერარქია","შიმშილი და ჭამა","მიღწევის მოტივაცია","ძირითადი ემოციები","ემოციური ინტელექტი"],
    keyTopicsRu: ["Иерархия Маслоу","Голод и еда","Мотивация достижения","Основные эмоции","Эмоциональный интеллект"],
    keyTopicsHy: ["Մասլոուի հիերարխիա","Սով և ուտել","Ձեռքբերման մոտիվացիա","Հիմնական հույզեր","Զգացմունքային ինտելեկտ"],
    keyTopicsAz: ["Maslow iyerarxiyası","Aclıq və Yemək","Nailiyyət Motivasiyası","Əsas Emosiyalar","Emosional İntellekt"],
    summary: "Motivation energizes and directs behavior. Covers Maslow's hierarchy, James-Lange theory, Cannon-Bard theory, and Schachter-Singer theory of emotions.",
    summaryRu: "Мотивация заряжает энергией и направляет поведение. Рассматриваются иерархия Маслоу, теория Джеймса-Ланге, Кэннона-Барда и Шахтера-Зингера.",
    summaryHy: "Մոտիվացիան էներգիա է հաղորդում և ուղղորդում վարքագիծը: Ներառում է Մասլոուի հիերարխիան, Ջեյմս-Լանգի տեսությունը, Քենոն-Բարդի տեսությունը և այլն:",
    summaryAz: "Motivasiya davranışı enerjiləndirir və istiqamətləndirir. Maslow iyerarxiyasını, James-Lange, Cannon-Bard və Schachter-Singer emosiya nəzəriyyələrini əhatə edir.",
    keyPoints: [
      "Motivation has three components: activation (initiating), persistence (continuing effort), and intensity (how hard you try).",
      "Drive-reduction theory: physiological needs create drives (hunger, thirst) that motivate behavior to restore homeostasis. But it can't explain curiosity or thrill-seeking.",
      "Maslow's hierarchy of needs (bottom to top): Physiological → Safety → Love/Belonging → Esteem → Self-actualization. Lower needs must be met before higher ones become motivating.",
      "Intrinsic motivation (doing something for its own sake) is more sustainable than extrinsic motivation (rewards/punishments). The overjustification effect: rewarding an already enjoyed activity can decrease intrinsic motivation.",
      "Theories of emotion: James-Lange (body reacts first, then we feel emotion), Cannon-Bard (body reaction and emotion occur simultaneously), Schachter-Singer / Two-factor (physiological arousal + cognitive label = emotion).",
      "Paul Ekman identified 6 universal facial expressions: happiness, sadness, anger, fear, surprise, and disgust. These are recognized across all cultures.",
      "Emotional intelligence (Goleman): the ability to perceive, understand, manage, and use emotions effectively. High EQ predicts better relationships, leadership, and mental health."
    ],
    keyPointsKa: ["მოტივაცია: აქტივაცია, მდგრადობა და ინტენსივობა.", "დისკომფორტის შემცირების თეორია (ჰომეოსტაზი).", "მასლოუს მოთხოვნილებათა იერარქია: ფიზიოლოგიური → უსაფრთხოება → სიყვარული → აღიარება → თვითაქტუალიზაცია.", "ინტრინსიკული (შინაგანი) და ექსტრინსიკული (გარეგანი) მოტივაცია.", "ემოციის თეორიები: ჯეიმს-ლანგე, კენონ-ბარდი და შახტერ-ზინგერი (ორფაქტორიანი თეორია).", "პოლ ეკმანი: 6 უნივერსალური სახის გამომეტყველება (ბედნიერება, სევდა, ბრაზი, შიში, გაკვირვება, ზიზღი).", "ემოციური ინტელექტი (გოულმანი): ემოციების მართვისა და აღქმის უნარი."],
    keyPointsRu: ["Три компонента мотивации: активация, настойчивость и интенсивность.", "Теория снижения влечения: физиологические потребности создают драйвы (голод, жажда) для восстановления гомеостаза.", "Иерархия Маслоу: физиология → безопасность → любовь → признание → самоактуализация.", "Внутренняя и внешняя мотивация. Эффект избыточного оправдания.", "Теории эмоций: Джеймс-Ланге (сначала тело, потом чувство), Кэннон-Бард (одновременно), Шахтер-Зингер (возбуждение + когнитивная оценка).", "6 универсальных выражений лица Поля Экмана (радость, грусть, гнев, страх, удивление, отвращение).", "Эмоциональный интеллект (Гоулман): способность управлять эмоциями."],
    keyPointsHy: ["Մոտիվացիայի երեք բաղադրիչները՝ ակտիվացում, համառություն և ինտենսիվություն:", "Մասլոուի կարիքների հիերարխիա՝ ֆիզիոլոգիական → անվտանգություն → սեր → հարգանք → ինքնիրացում:", "Ինտրինսիկ (ներքին) և էքստրինսիկ (արտաքին) մոտիվացիա:", "Հույզերի տեսություններ. Ջեյմս-Լանգե (մարմինը արձագանքում է առաջինը), Քենոն-Բարդ, Շախտեր-Զինգեր:", "Պոլ Էկման՝ 6 ունիվերսալ դեմքի արտահայտություններ:", "Հուզական ինտելեկտ (Գոուլման). հույզերը արդյունավետ կառավարելու կարողություն:"],
    keyPointsAz: ["Motivasiyanın üç komponenti: aktivləşdirmə, inadkarlıq və intensivlik.", "Drive-reduction nəzəriyyəsi: fizioloji ehtiyaclar homeostazı bərpa etmək üçün davranışları motivasiya edir.", "Maslow-un ehtiyaclar iyerarxiyası: Fizioloji → Təhlükəsizlik → Sevgi/Aidiyyat → Hörmət → Özünüreallaşdırma.", "Daxili motivasiya (bir şeyi öz xatirinə etmək) xarici motivasiyadan (mükafatlar) daha davamlıdır.", "Emosiya nəzəriyyələri: James-Lange (əvvəl cisim reaksiyası, sonra duyğu), Cannon-Bard (eyni vaxtda), Schachter-Singer (fizioloji oyanış + koqnitiv etiket).", "Paul Ekman 6 universal üz ifadəsini müəyyən etdi: xoşbəxtlik, kədər, qəzəb, qorxu, təəccüb və iyrənmə.", "Emosional intellekt (Goleman): duyğuları effektiv şəkildə qavramaq, anlamaq və idarə etmək bacarığı."],
    funFact: "The \"misattribution of arousal\" study showed that men who crossed a scary suspension bridge rated a female interviewer as more attractive than men who crossed a safe bridge — they mistook their fear-based arousal for romantic attraction!",
    funFactKa: "„აღგზნების არასწორი ატრიბუციის“ კვლევამ აჩვენა, რომ ადამიანებმა შეიძლება შიშით გამოწვეული აღგზნება რომანტიკულ მიზიდულობაში აურიონ.",
    funFactRu: "Исследование «неверной атрибуции возбуждения» показало, что страх можно спутать с романтическим влечением.",
    funFactHy: "«Գրգռվածության սխալ վերագրման» հետազոտությունը ցույց է տալիս, որ մարդիկ կարող են շփոթել վախի գրգռվածությունը ռոմանտիկ հրապուրանքի հետ:",
    funFactAz: "\"Qıcıqlanmanın səhv aid edilməsi\" araşdırması göstərir ki, qorxunc körpüdən keçən insanlar qorxu hissini romantik cəlbediciliklə qarışıq sala bilərlər.",
    realWorld: "Companies like Google use Maslow's hierarchy to design workplaces: free food (physiological), job security (safety), team activities (belonging), recognition programs (esteem), and \"20% time\" for passion projects (self-actualization).",
    realWorldKa: "ისეთი კომპანიები, როგორიცაა Google, იყენებენ მასლოუს იერარქიას სამუშაო გარემოს შესაქმნელად (უფასო საკვები, გუნდური აქტივობები).",
    realWorldRu: "Такие компании, как Google, используют иерархию Маслоу при проектировании рабочих мест (бесплатная еда, командные мероприятия).",
    realWorldHy: "Google-ի նման ընկերությունները օգտագործում են Մասլոուի հիերարխիան աշխատատեղերի ձևավորման համար (անվճար սնունդ, թիմային աշխատանք):",
    realWorldAz: "Google kimi şirkətlər iş yerlərini dizayn etmək üçün Maslow iyerarxiyasından istifadə edirlər: pulsuz yemək (fizioloji), iş təhlükəsizliyi (təhlükəsizlik), komanda fəaliyyətləri (aidiyyat).",
    keyFigures: ["Abraham Maslow","William James","Walter Cannon","Stanley Schachter","Paul Ekman","Daniel Goleman"],
    keyFiguresKa: ["აბრაამ მასლოუ", "უილიამ ჯეიმსი", "უოლტერ კენონი", "სტენლი შახტერი", "პოლ ეკმანი", "დანიელ გოულმანი"],
    keyFiguresRu: ["Абрахам Маслоу", "Уильям Джеймс", "Уолтер Кэннон", "Стэнли Шахтер", "Поль Экман", "Дэниел Гоулман"],
    keyFiguresHy: ["Աբրահամ Մասլոու", "Ուիլյամ Ջեյմս", "Ուոլտեր Քենոն", "Ստենլի Շախտեր", "Պոլ Էկման", "Դանիել Գոուլման"],
    keyFiguresAz: ["Abraham Maslow", "Uilyam Ceyms", "Uolter Kennon", "Stenli Şaxter", "Paul Ekman", "Daniel Goulman"]
  },
  {
    id: 11,
    title: "Personality",
    titleKa: "პიროვნება",
    titleRu: "Личность",
    titleHy: "Անհատականություն",
    titleAz: "Şəxsiyyət",
    description: "Theories of personality: from Freud to the Big Five.",
    descriptionKa: "პიროვნების თეორიები: ფროიდიდან დიდ ხუთამდე.",
    descriptionRu: "Теории личности: от Фрейда до «Большой пятерки».",
    descriptionHy: "Անհատականության տեսություններ. Ֆրեյդից մինչև Մեծ հնգյակ.",
    descriptionAz: "Şəxsiyyət nəzəriyyələri: Freyddən Böyük Beşliyə qədər.",
    icon: "mdi:drama-masks",
    keyTopics: ["Psychoanalytic Theory","Humanistic Theory","Trait Theory","Big Five","Personality Assessment"],
    keyTopicsKa: ["ფსიქოანალიტიკური თეორია","ჰუმანისტური თეორია","თვისების თეორია","დიდი ხუთეული","პიროვნების შეფასება"],
    keyTopicsRu: ["Психоаналитическая теория","Гуманистическая теория","Теория черт","Большая пятерка","Оценка личности"],
    keyTopicsHy: ["Հոգեվերլուծական տեսություն","Հումանիստական ​​տեսություն","Հատկանիշների տեսություն","Մեծ հնգյակ","Անհատականության գնահատում"],
    keyTopicsAz: ["Psixoanalitik nəzəriyyə","Humanist nəzəriyyə","Xüsusiyyətlər nəzəriyyəsi","Böyük beşlik","Şəxsiyyətin qiymətləndirilməsi"],
    summary: "Personality is our unique pattern of thinking, feeling, and behaving. From Freud's id/ego/superego to the Big Five traits (OCEAN), covers all major personality theories.",
    summaryKa: "პიროვნება არის ფიქრის, გრძნობისა და ქცევის ჩვენი უნიკალური ნიმუში. ფროიდის იდი/ეგო/სუპერეგოდან დიდი ხუთეულის თვისებებამდე (OCEAN).",
    summaryRu: "Личность — это наш уникальный паттерн мышления, чувств и поведения. От «Оно»/«Я»/«Сверх-Я» Фрейда до черт «Большой пятерки» (OCEAN).",
    summaryHy: "Անհատականությունը մտածելու, զգալու և վարվելու մեր յուրահատուկ ձևն է: Ֆրեյդի id/ego/superego-ից մինչև Մեծ հնգյակ (OCEAN):",
    summaryAz: "Şəxsiyyət düşünmə, hiss etmə və davranma tərzimizdir. Freydin id/eqo/supereqo-dan tutmuş Böyük Beşlik xüsusiyyətlərinə (OCEAN) qədər.",
    keyPoints: [
      "Freud's psychoanalytic theory: Personality is shaped by unconscious conflicts between the Id (primal desires), Ego (rational mediator), and Superego (moral conscience). Defense mechanisms (repression, projection, denial) protect the ego.",
      "Freud's psychosexual stages: Oral, Anal, Phallic (Oedipus complex), Latency, Genital. Fixation at any stage can affect adult personality.",
      "Neo-Freudians (Adler, Jung, Horney) kept the unconscious but de-emphasized sexuality. Jung introduced collective unconscious and archetypes. Adler focused on inferiority complex.",
      "Humanistic approaches: Rogers emphasized unconditional positive regard and self-concept. Maslow focused on self-actualization — becoming the best version of yourself.",
      "Trait theories describe personality using stable dimensions. The Big Five (OCEAN): Openness (curiosity), Conscientiousness (organization), Extraversion (sociability), Agreeableness (cooperativeness), Neuroticism (emotional instability).",
      "The Big Five are partially heritable (~40–60%), relatively stable after age 30, and predict job performance, relationship satisfaction, and health outcomes.",
      "Personality assessment: Self-report inventories (MMPI, NEO-PI-R) have good reliability but are subject to social desirability bias. Projective tests (Rorschach, TAT) have weaker validity."
    ],
    keyPointsKa: [
      "ფროიდის ფსიქოანალიტიკური თეორია: იდი, ეგო და სუპერეგო. დაცვის მექანიზმები იცავენ ეგოს.",
      "ფროიდის ფსიქოსექსუალური ეტაპები: ორალური, ანალური, ფალური, ლატენტური, გენიტალური.",
      "ნეო-ფროიდიანელები (ადლერი, იუნგი, ჰორნი): კოლექტიური არაცნობიერი და არქეტიპები.",
      "ჰუმანისტური მიდგომები (როჯერსი, მასლოუ): უპირობო პოზიტიური დამოკიდებულება და თვითაქტუალიზაცია.",
      "დიდი ხუთეულის თვისებები (OCEAN): ღიაობა, კეთილსინდისიერება, ექსტრავერსია, კეთილგანწყობა, ნეიროტიზმი.",
      "დიდი ხუთეული ნაწილობრივ მემკვიდრეობითია და პროგნოზირებს ცხოვრებისეულ შედეგებს.",
      "პიროვნების შეფასება: MMPI და პროექციული ტესტები (რორშახი, TAT)."
    ],
    keyPointsRu: [
      "Фрейд: Ид, Эго и Супер-Эго. Защитные механизмы (вытеснение, проекция, отрицание).",
      "Психосексуальные стадии Фрейда: оральная, анальная, фаллическая, латентная, генитальная.",
      "Неофрейдисты (Адлер, Юнг, Хорни): коллективное бессознательное и архетипы.",
      "Гуманистический подход (Роджерс, Маслоу): безусловное позитивное принятие и самоактуализация.",
      "«Большая пятерка» (OCEAN): открытость, добросовестность, экстраверсия, доброжелательность, нейротизм.",
      "Черты Большой пятерки частично наследуемы и стабильны после 30 лет.",
      "Оценка личности: опросники (MMPI) и проективные тесты (тест Роршаха, ТАТ)."
    ],
    keyPointsHy: [
      "Ֆրեյդ. Id, Ego և Superego: Պաշտպանական մեխանիզմներ (ճնշում, պրոյեկցիա, ժխտում):",
      "Ֆրեյդի հոգեսեռական փուլերը՝ օրալ, անալ, ֆալիկ, լատենտ, գենիտալ:",
      "Նեոֆրեյդականներ (Ադլեր, Յունգ, Հորնի). կոլեկտիվ անգիտակցական և արխետիպեր:",
      "Հումանիստական ​​մոտեցումներ (Ռոջերս, Մասլոու). ինքնիրացում:",
      "Մեծ հնգյակ (OCEAN). բացություն, բարեխղճություն, էքստրավերսիա, համաձայնություն, նևրոտիզմ:",
      "Մեծ հնգյակը մասամբ ժառանգական է (~40–60%):",
      "Անհատականության գնահատում. MMPI և պրոյեկտիվ թեստեր (Ռորշախ):"
    ],
    keyPointsAz: [
      "Freyd: Id, Eqo və Supereqo. Müdafiə mexanizmləri (sıxışdırma, proyeksiya, inkar) eqonu qoruyur.",
      "Freydin psixoseksual mərhələləri: Oral, Anal, Fallik, Laten, Genital. Hər hansı bir mərhələdə fiksasiya yetkin şəxsiyyətə təsir edə bilər.",
      "Neo-Freydçilər (Adler, Yunq, Horney): Kollektiv şüuraltı və arxetiplər. Adler natamamlıq kompleksinə diqqət yetirdi.",
      "Humanist yanaşmalar: Rogers şərtsiz müsbət münasibəti vurnğuladı; Maslow özünüreallaşdırmaya (self-actualization) diqqət yetirdi.",
      "Böyük Beşlik (OCEAN): Açıqlıq, Vicdanlılıq, Ekstraversiya, Uyğunluq, Nevrotizm.",
      "Böyük Beşlik xüsusiyyətləri qismən irsi (~40–60%), 30 yaşdan sonra sabitdir və iş performansını proqnozlaşdırır.",
      "Şəxsiyyətin qiymətləndirilməsi: MMPI kimi sorğular və Rorschach (TAT) kimi proyektiv testlər."
    ],
    funFact: "The Myers-Briggs Type Indicator (MBTI) is used by 88% of Fortune 500 companies, yet most personality psychologists consider it scientifically unreliable — about 50% of people get a different result when retested. The Big Five is the gold standard in research.",
    funFactKa: "MBTI არის ყველაზე პოპულარული პიროვნების ტესტი, მაგრამ ფსიქოლოგები უპირატესობას ანიჭებენ „დიდ ხუთეულს“ მისი მეცნიერული სიზუსტის გამო.",
    funFactRu: "Тест Майерс-Бриггс (MBTI) очень популярен, но психологи предпочитают «Большую пятерку» из-за ее научной надежности.",
    funFactHy: "MBTI-ն ամենահայտնի թեստն է, բայց հոգեբանները նախընտրում են Մեծ հնգյակը՝ դրա գիտական ​​հուսալիության համար:",
    funFactAz: "Myers-Briggs (MBTI) testi geniş yayılsa da, bir çox psixoloqlar onu qeyri-elmi sayırlar. Böyük Beşlik (Big Five) tədqiqatlarda əsas qəbul edilir.",
    realWorld: "Recruiters use Big Five assessments because Conscientiousness is the strongest personality predictor of job performance across all occupations. Agreeableness predicts teamwork, and Openness predicts creativity.",
    realWorldKa: "რეკრუტერები იყენებენ „დიდ ხუთეულს“, რადგან კეთილსინდისიერება სამუშაო შესრულების ყველაზე ძლიერი პროგნოზია.",
    realWorldRu: "Рекрутеры используют оценки «Большой пятерки», так как добросовестность — лучший предиктор успеха на работе.",
    realWorldHy: "Ռեկրուտերները օգտագործում են Մեծ հնգյակը, քանի որ բարեխղճությունը աշխատանքի արդյունավետության ամենաուժեղ կանխատեսողն է:",
    realWorldAz: "İşə götürənlər Böyük Beşlik (Big Five) qiymətləndirmələrindən istifadə edirlər; çünki Vicdanlılıq (Conscientiousness) bütün peşələrdə iş performansının ən güclü proqnozlaşdırıcısıdır.",
    keyFigures: ["Sigmund Freud","Carl Jung","Alfred Adler","Carl Rogers","Gordon Allport","Hans Eysenck"],
    keyFiguresKa: ["ზიგმუნდ ფროიდი", "კარლ იუნგი", "ალფრედ ადლერი", "კარლ როჯერსი", "გორდონ ოლპორტი", "ჰანს აიზენკი"],
    keyFiguresRu: ["Зигмунд Фрейд", "Карл Юнг", "Альфред Адлер", "Карл Роджерс", "Гордон Оллпорт", "Ганс Айзенк"],
    keyFiguresHy: ["Զիգմունդ Ֆրեյդ", "Կարլ Յունգ", "Ալֆրედ Ադլեր", "Կարլ Ռոջերս", "Գորդոն Օլպորտ", "Հանս Այզենկ"],
    keyFiguresAz: ["Ziqmund Freyd", "Karl Yunq", "Alfred Adler", "Karl Rocers", "Qordon Ollport", "Hans Ayzenk"]
  },

  {
    id: 12,
    title: "Social Psychology",
    titleKa: "სოციალური ფსიქოლოგია",
    titleRu: "Социальная Психология",
    titleHy: "Սոցիալական հոգեբանություն",
    titleAz: "Sosial Psixologiya",
    description: "How others influence our thoughts, feelings, and behavior.",
    descriptionKa: "როგორ ახდენენ სხვები გავლენას ჩვენს აზრებზე, გრძნობებსა და ქცევაზე.",
    descriptionRu: "Как другие влияют на наши мысли, чувства и поведение.",
    descriptionHy: "Ինչպես են ուրիշներն ազդում մեր մտքերի, զգացմունքների և վարքի վրա:",
    descriptionAz: "Başqalarının düşüncələrimizə, hisslərimizə və davranışlarımıza necə təsir etdiyi.",
    icon: "mdi:account-group-outline",
    keyTopics: ["Conformity","Obedience","Attitudes","Group Behavior","Prejudice"],
    keyTopicsKa: ["კონფორმულობა","მორჩილება","დამოკიდებულებები","ჯგუფური ქცევა","ცრურწმენა"],
    keyTopicsRu: ["Соответствие","Послушание","Отношения","Групповое поведение","Предрассудки"],
    keyTopicsHy: ["Համապատասխանություն","Հնազանդություն","Վերաբերմունքներ","Խմբային վարքագիծ","Նախապաշարմունք"],
    keyTopicsAz: ["Uyğunluq","İtaət","Münasibətlər","Qrup Davranışı","Qərəz"],
    summary: "Social psychology studies how people think about, influence, and relate to each other. Covers conformity, obedience, cognitive dissonance, group behavior, and prejudice.",
    keyPoints: [
      "Attribution theory: We explain others' behavior using dispositional (personality) or situational (environment) attributions. The fundamental attribution error: we overestimate personality and underestimate situations when judging others.",
      "Conformity (Asch): People agree with an obviously wrong answer to match the group about 37% of the time. Increases with group size (up to ~5) and unanimity.",
      "Obedience (Milgram): 65% of participants delivered what they believed were lethal electric shocks when instructed by an authority figure. Authority, proximity, and legitimacy increased obedience.",
      "Cognitive dissonance (Festinger): When our actions contradict our beliefs, we feel discomfort and change our attitudes to match our behavior. Explains why hazing rituals increase group loyalty.",
      "Group phenomena: Social facilitation (performing better on easy tasks when watched), Social loafing (working less in groups), Groupthink (cohesive groups suppress dissent), Deindividuation (anonymity reduces self-awareness).",
      "Prejudice involves stereotypes (beliefs), prejudice (attitudes), and discrimination (behaviors). Reduced through intergroup contact when groups have equal status and share common goals.",
      "Bystander effect (Darley & Latané): The more people present, the less likely anyone is to help. Caused by diffusion of responsibility and pluralistic ignorance."
    ],
    funFact: "Zimbardo's Stanford Prison Experiment (1971) was meant to last 2 weeks but was stopped after just 6 days because \"guards\" became sadistic and \"prisoners\" showed signs of psychological breakdown — demonstrating the power of situational forces on behavior.",
    realWorld: "Understanding conformity and obedience explains everything from workplace culture (\"nobody questions the boss\") to historical atrocities. Modern organizations use these insights to create psychological safety — environments where people feel safe to speak up.",
    keyFigures: ["Solomon Asch","Stanley Milgram","Philip Zimbardo","Leon Festinger","Muzafer Sherif"]
  },
  {
    id: 13,
    title: "Stress, Health, and Coping",
    titleKa: "სტრესი, ჯანმრთელობა და დაძლევა",
    titleRu: "Стресс, здоровье и преодоление трудностей",
    titleHy: "Սթրես, առողջություն և հաղթահարում",
    titleAz: "Stress, Sağlamlıq və Mübarizə",
    description: "How stress affects us and strategies to cope with it.",
    descriptionKa: "როგორ მოქმედებს სტრესი ჩვენზე და მასთან გამკლავების სტრატეგიები.",
    descriptionRu: "Как стресс влияет на нас и как с ним справиться.",
    descriptionHy: "Ինչպես է սթրեսը ազդում մեզ վրա և դրա դեմ պայքարի ռազմավարություններ:",
    descriptionAz: "Stress bizə necə təsir edir və bununla mübarizə strategiyaları.",
    icon: "mdi:meditation",
    keyTopics: ["Stress Response","Stressors","Coping Strategies","Health Psychology","Resilience"],
    keyTopicsKa: ["სტრესის რეაქცია","სტრესორები","დაძლევის სტრატეგიები","ჯანმრთელობის ფსიქოლოგია","გამძლეობა"],
    keyTopicsRu: ["Стрессовая реакция","Стрессоры","Стратегии преодоления трудностей","Психология здоровья","Устойчивость"],
    keyTopicsHy: ["Սթրեսի արձագանք","Սթրեսներ","Հաղթահարման ռազմավարություններ","Առողջության հոգեբանություն","Ճկունություն"],
    keyTopicsAz: ["Stress cavabı","Stressorlar","Mübarizə Strategiyaları","Sağlamlıq Psixologiyası","Dözümlülük"],
    summary: "Stress is the body's response to demanding situations. Covers alarm/resistance/exhaustion stages, coping strategies, social support, and resilience.",
    summaryRu: "Стресс — это реакция организма на сложные ситуации. Рассматриваются стадии тревоги/сопротивления/истощения, стратегии преодоления, социальная поддержка и жизнестойкость.",
    summaryHy: "Սթրեսը մարմնի արձագանքն է պահանջկոտ իրավիճակներին: Ներառում է տագնապի/դիմադրության/հյուծման փուլերը, հաղթահարման ռազմավարությունները:",
    summaryAz: "Stress bədənin çətin vəziyyətlərə verdiyi reaksiyadır. Həyəcan/müqavimət/tükənmə mərhələlərini, mübarizə strategiyalarını və sosial dəstəyi əhatə edir.",
    keyPoints: [
      "Stress is the body's response to any perceived threat or demand. Eustress (positive) helps performance; distress (negative) harms health.",
      "Selye's General Adaptation Syndrome (GAS): Alarm (fight-or-flight activated) → Resistance (body adapts to ongoing stress) → Exhaustion (resources depleted, vulnerability to illness).",
      "The fight-or-flight response: the sympathetic nervous system releases adrenaline and cortisol, increasing heart rate, blood pressure, and blood sugar. Useful for short-term threats, harmful when chronic.",
      "Major stressors: catastrophes, significant life changes (Holmes-Rahe scale), and daily hassles. Research shows daily hassles (traffic, deadlines) may affect health more than major events.",
      "Chronic stress suppresses the immune system (psychoneuroimmunology), increases risk of cardiovascular disease, contributes to depression and anxiety, and accelerates cellular aging.",
      "Coping strategies: Problem-focused coping (taking action to solve the problem) works best for controllable situations. Emotion-focused coping (managing feelings) is better for uncontrollable situations.",
      "Protective factors: Social support (the #1 buffer against stress), exercise (reduces cortisol), mindfulness and meditation (reduces amygdala reactivity), perceived control (believing you can influence outcomes), and optimism."
    ],
    keyPointsKa: ["სტრესი: ეუსტრესი (დადებითი) და დისტრესი (უარყოფითი).", "სელიეს ზოგადი ადაპტაციის სინდრომი (GAS): განგაში, წინააღმდეგობა და გამოფიტვა.", "ბრძოლის ან გაქცევის რეაქცია: ადრენალინისა და კორტიზოლის გამოყოფა.", "ძირითადი სტრესორები: კატასტროფები, ცხოვრებისეული ცვლილებები და ყოველდღიური სირთულეები.", "ქრონიკული სტრესი თრგუნავს იმუნურ სისტემას და აჩქარებს დაბერებას.", "დაძლევის სტრატეგიები: პრობლემაზე ორიენტირებული და ემოციაზე ორიენტირებული დაძლევა.", "დამცავი ფაქტორები: სოციალური მხარდაჭერა, ვარჯიში, მედიტაცია და ოპტიმიზმი."],
    keyPointsRu: ["Стресс: эустресс (полезный) и дистресс (вредный).", "Общий адаптационный синдром Селье (GAS): тревога, сопротивление и истощение.", "Реакция «бей или беги»: выброс адреналина и кортизола, повышение давления.", "Основные стрессоры: катастрофы, перемены в жизни и ежедневные проблемы.", "Хронический стресс подавляет иммунную систему (психонейроиммунология).", "Копинг-стратегии: проблемно-ориентированный и эмоционально-ориентированный копинг.", "Защитные факторы: социальная поддержка (буфер №1), спорт, медитация, оптимизм."],
    keyPointsHy: ["Սթրես. էուդթրես (դրական) և դիսթրես (բացասական):", "Սելյեի ընդհանուր ադապտացիոն համախտանիշ (GAS)՝ տագնապ, դիմադրություն և հյուծում:", "«Կռվել կամ փախչել» արձագանք. ադրენալինի և կորտիզոլի արտազատում:", "Հիմնական սթրեսներ. աղետներ, կյանքի փոփոხություններ և ամենօրյա դժվարություններ:", "Քրոնիկ սթրեսը ճնշում է իմունային համակարգը և արագացնում ծերացումը:", "Հաղթահարման ռազմավարություններ՝ խնդրի վրա կենտրոնացած և հույզերի վրա կենտրոնացած:", "Պաշտպանիչ գործոններ՝ սոციալական աջակցություն, վարժություններ, մեդիտացիա:"],
    keyPointsAz: ["Stress bədənin istənilən qavranılan təhlükəyə verdiyi reaksiyadır. Eustress (müsbət) fəaliyyətə kömək edir, distreess (mənfi) sağlamlığa zərər verir.", "Selye-nin Ümumi Adaptasiya Sindromu (GAS): Həyəcan (Alarm) → Müqavimət (Resistance) → Tükənmə (Exhaustion).", "\"Döyüş və ya qaç\" (Fight-or-flight) reaksiyası: simpatik sinir sistemi adrenalin və kortizol ifraz edir.", "Əsas stressorlar: fəlakətlər, mühüm həyat dəyişiklikləri (Holmes-Rahe şkalası) və gündəlik çətinliklər.", "Xroniki stress immun sistemini sıxışdırır (psixoneyroimmunologiya) və ürək-damar xəstəlikləri riskini artırır.", "Mübarizə strategiyaları: Problemyönümlü mübarizə (idarə olunan hallar üçün) və Emosional yönümlü mübarizə (idarə olunmayan hallar üçün).", "Qoruyucu amillər: Sosial dəstək (stressə qarşı 1 nömrəli bufer), idman (kortizolu azaldır), meditasiya və nikbinlik."],
    funFact: "Laughing reduces cortisol by 39% and increases endorphins by 27%. Studies show that even anticipating a funny experience can reduce stress hormones. Hospitals now use \"laughter therapy\" with positive results.",
    funFactKa: "სიცილი ამცირებს კორტიზოლს 39%-ით და ზრდის ენდორფინებს 27%-ით. საავადმყოფოებში იყენებენ „სიცილის თერაპიას“.",
    funFactRu: "Смех снижает уровень кортизола на 39% и повышает уровень эндорфинов на 27%. Исследования подтверждают пользу «смехотерапии».",
    funFactHy: "Ծիծաղը նվազեցնում է կորտիզոլը 39%-ով և բարձրացնում էնդորֆինները 27%-ով: Հիվանդանոցներն օգտագործում են «ծիծաղի թերապիա»:",
    funFactAz: "Gülmək kortizolu 39% azaldır və endorfinləri 27% artırır. Xəstəxanalar indi müsbət nəticələrlə \"gülüş terapiyası\"ndan istifadə edirlər.",
    realWorld: "Burnout (emotional exhaustion, depersonalization, reduced accomplishment) affects 67% of workers at some point. Companies that implement stress management programs see 25% reductions in sick days and higher productivity.",
    realWorldKa: "პროფესიული გადაწვა მუშაკთა 67%-ზე მოქმედებს. კომპანიები, რომლებიც ნერგავენ სტრესის მართვის პროგრამებს, ამცირებენ ბიულეტენების რაოდენობას.",
    realWorldRu: "Выгорание затрагивает до 67% работников. Компании, внедряющие программы управления стрессом, снижают количество больничных на 25%.",
    realWorldHy: "Մասնագիտական ​​այրումը ազդում է աշխատողների 67%-ի վրա: Սթրեսի կառավարման ծրագրերը 25%-ով նվազեցնում են հիվանդության արձակուրդները:",
    realWorldAz: "Tükənmə (Burnout) işçilərin 67%-nə təsir edir. Stressin idarə edilməsi proqramlarını həyata keçirən şirkətlərdə xəstəlik məzuniyyətləri 25% azalır.",
    keyFigures: ["Hans Selye","Richard Lazarus","Walter Cannon","Martin Seligman","Sheldon Cohen"],
    keyFiguresKa: ["ჰანს სელიე", "რიჩარდ ლაზარუსი", "უოლტერ კენონი", "მარტინ სელიგმანი", "შელდონ კოენი"],
    keyFiguresRu: ["Ганс Селье", "Ричард Лазарус", "Уолтер Кэннон", "Мартин Селигман", "Шелдон Коэн"],
    keyFiguresHy: ["Հանս Սելյե", "Ռիչարդ Լազարուս", "Ուոլտեր Քենոն", "Մարտին Սելիգման", "Շելդոն Քոեն"],
    keyFiguresAz: ["Hans Selye", "Riçard Lazarus", "Uolter Kennon", "Martin Seliqman", "Şeldon Koen"]
  }
,
  {
    id: 14,
    title: "Psychological Disorders",
    titleKa: "ფსიქოლოგიური დარღვევები",
    titleRu: "Психологические расстройства",
    titleHy: "Հոգեբանական խանգարումներ",
    titleAz: "Psixoloji pozğunluqlar",
    description: "Understanding mental disorders: symptoms, causes, and classification.",
    descriptionKa: "ფსიქიკური აშლილობის გაგება: სიმპტომები, მიზეზები და კლასიფიკაცია.",
    descriptionRu: "Понимание психических расстройств: симптомы, причины и классификация.",
    descriptionHy: "Հասկանալով հոգեկան խանգարումները. ախտանիշները, պատճառները և դասակարգումը:",
    descriptionAz: "Psixi pozğunluqları başa düşmək: simptomlar, səbəblər və təsnifat.",
    icon: "mdi:stethoscope",
    keyTopics: ["DSM Classification","Anxiety Disorders","Mood Disorders","Schizophrenia","Personality Disorders"],
    keyTopicsKa: ["DSM კლასიფიკაცია","შფოთვითი დარღვევები","განწყობის დარღვევები","შიზოფრენია","პიროვნების დარღვევები"],
    keyTopicsRu: ["Классификация ДСМ","Тревожные расстройства","Расстройства настроения","Шизофрения","Расстройства личности"],
    keyTopicsHy: ["DSM դասակարգում","Անհանգստության խանգարումներ","Տրամադրության խանգարումներ","Շիզոֆրենիա","Անհատականության խանգարումներ"],
    keyTopicsAz: ["DSM təsnifatı","Anksiyete pozğunluqları","Əhval pozğunluqları","Şizofreniya","Şəxsiyyət pozğunluqları"],
    summary: "Psychological disorders cause significant distress or impairment. Covers anxiety, mood disorders, schizophrenia, and personality disorders with biological and social causes.",
    keyPoints: [
      "A psychological disorder is a pattern of thoughts, feelings, or behaviors that is deviant, distressful, and dysfunctional (the \"3 D's\"). Context and culture matter in defining \"abnormal.\"",
      "The DSM-5 (Diagnostic and Statistical Manual) is the standard classification system. It categorizes disorders by symptoms, not causes, and is used for diagnosis and insurance.",
      "Anxiety disorders (most common): Generalized Anxiety Disorder (persistent worry), Panic Disorder (sudden intense fear attacks), Phobias (irrational fear of specific things), OCD (obsessive thoughts + compulsive rituals), PTSD (after trauma).",
      "Mood disorders: Major Depressive Disorder (persistent sadness, loss of interest, lasting 2+ weeks) and Bipolar Disorder (alternating episodes of mania and depression). Depression is the leading cause of disability worldwide.",
      "Schizophrenia: a severe disorder involving positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, social withdrawal). Dopamine hypothesis: excess dopamine activity in certain brain pathways.",
      "Personality disorders: enduring, inflexible patterns. Antisocial PD (disregard for others' rights, lack of empathy), Borderline PD (unstable relationships and emotions), Narcissistic PD (grandiosity, need for admiration).",
      "The diathesis-stress model: disorders result from a genetic/biological predisposition (diathesis) + environmental triggers (stress). Neither alone is usually sufficient."
    ],
    funFact: "About 1 in 5 adults experiences a mental health condition in any given year. Depression and anxiety cost the global economy $1 trillion annually in lost productivity — yet most disorders are highly treatable with proper intervention.",
    funFactKa: "ყოველწლიურად 5-დან 1 ზრდასრული განიცდის ფსიქიკურ ჯანმრთელობასთან დაკავშირებულ მდგომარეობას. დეპრესია და შფოთვა მსოფლიო ეკონომიკას ყოველწლიურად 1 ტრილიონი დოლარი უჯდება.",
    funFactRu: "Примерно каждый пятый взрослый ежегодно сталкивается с проблемами психического здоровья. Депрессия и тревога ежегодно приносят мировой экономике 1 триллион долларов из-за потери производительности.",
    funFactHy: "Յուրաքանչյուր 5 մեծահասակից մոտ 1-ը ամեն տարի հոգեկան առողջության վիճակ է ունենում: Դեպրեսիան և անհանգստությունը համաշխարհային տնտեսությանը տարեկան 1 տրիլիոն դոլար են արժենում:",
    funFactAz: "Hər 5 yetkindən təxminən 1-i hər il psixi sağlamlıq problemi yaşayır. Depressiya və narahatlıq qlobal iqtisadiyyata hər il 1 trilyon dollara başa gəlir.",
    realWorld: "The shift from institutionalization to community-based mental health care (deinstitutionalization) transformed treatment. Today, early intervention programs for psychosis can reduce symptoms by 50% and dramatically improve long-term outcomes.",
    realWorldKa: "ინსტიტუციონალიზაციიდან საზოგადოებაზე დაფუძნებულ ფსიქიკურ ჯანმრთელობაზე გადასვლამ შეცვალა მკურნალობა. ადრეული ინტერვენციის პროგრამებს შეუძლიათ სიმპტომების 50%-ით შემცირება.",
    realWorldRu: "Переход от институционализации к психиатрической помощи по месту жительства (деинституционализация) изменил методы лечения. Раннее вмешательство может уменьшить симптомы на 50%.",
    realWorldHy: "Ինստիտուցիոնալացումից տեղական հոգեկան առողջության խնամքի անցումը (դեինստիտուցիոնալացում) փոխեց բուժումը: Վաղ միջամտությունը կարող է նվազեցնել ախտանիշները 50%-ով:",
    realWorldAz: "İnstitusionallaşmadan icma əsaslı psixi sağlamlıq xidmətinə keçid (deinstitusionallaşma) müalicəni dəyişdirdi. Erkən müdaxilə proqramları simptomları 50% azalda bilər.",
    summaryKa: "ფსიქოლოგიური დარღვევები იწვევს მნიშვნელოვან დისტრესს ან დაზიანებას. მოიცავს შფოთვას, განწყობის დარღვევებს, შიზოფრენიას და პიროვნების დარღვევებს ბიოლოგიური და სოციალური მიზეზებით.",
    summaryRu: "Психологические расстройства вызывают значительный дистресс или ухудшение состояния. Охватывает тревогу, расстройства настроения, шизофрению и расстройства личности с биологическими и социальными причинами.",
    summaryHy: "Հոգեբանական խանգարումները առաջացնում են զգալի տագնապ կամ խանգարում: Ներառում է անհանգստությունը, տրամադրության խանգարումները, շիզոֆրենիան և անհատականության խանգարումները:",
    summaryAz: "Psixoloji pozğunluqlar ciddi sıxıntıya və ya zədələnməyə səbəb olur. Bioloji və sosial səbəbləri olan narahatlıq, əhval pozğunluqları, şizofreniya və şəxsiyyət pozğunluqlarını əhatə edir.",
    keyPointsKa: [
      "ფსიქოლოგიური აშლილობა არის აზრების, გრძნობების ან ქცევის ნიმუში, რომელიც დევიანტური, სტრესული და დისფუნქციურია.",
      "DSM-5 არის სტანდარტული კლასიფიკაციის სისტემა. ის აჯგუფებს დარღვევებს სიმპტომების მიხედვით.",
      "შფოთვითი დარღვევები: გენერალიზებული შფოთვა, პანიკური აშლილობა, ფობიები, OCD, PTSD.",
      "განწყობის დარღვევები: მთავარი დეპრესიული აშლილობა და ბიპოლარული აშლილობა.",
      "შიზოფრენია: მძიმე აშლილობა, რომელიც მოიცავს ჰალუცინაციებს, ბოდვას და არაორგანიზებულ მეტყველებას.",
      "პიროვნების დარღვევები: ანტისოციალური, მოსაზღვრე (Borderline), ნარცისული.",
      "დიათეზ-სტრესის მოდელი: აშლილობები გენეტიკური წინასწარგანწყობისა და გარემო სტრესორების შედეგია."
    ],
    keyPointsRu: [
      "Психологическое расстройство — это паттерн мыслей или поведения, который является девиантным, вызывающим дистресс и дисфункциональным.",
      "DSM-5 — это стандартная система классификации. Она классифицирует расстройства по симптомам, а не по причинам.",
      "Тревожные расстройства: генерализованное тревожное расстройство, паническое расстройство, фобии, ОКР, ПТСР.",
      "Расстройства настроения: большое депрессивное расстройство и биполярное расстройство.",
      "Шизофрения: тяжелое расстройство, сопровождающееся галлюцинациями, бредом и дезорганизованной речью.",
      "Расстройства личности: антисоциальное, пограничное, нарциссическое.",
      "Модель диатеза-стресса: расстройства являются результатом генетической предрасположенности + стрессоров окружающей среды."
    ],
    keyPointsHy: [
      "Հոգեբանական խանգարումը մտքերի կամ վարքագծի օրինաչափություն է, որը շեղված է, տագնապալի և դիսֆունկցիոնալ:",
      "DSM-5-ը դասակարգման ստանդարտ համակարգ է: Այն խանգարումները դասակարգում է ըստ ախտանիշների, այլ ոչ թե պատճառների:",
      "Անհանգստության խանգարումներ. ընդհանուր անհանգստություն, խուճապի խանգարում, ֆոբիաներ, OCD, PTSD:",
      "Տրամադրության խանգարումներ. խոշոր դեպրեսիվ խանգարում և երկբևեռ խանգարում:",
      "Շիզոֆրենիա. ծանր խանգարում, որը ներառում է հալյուցինացիաներ, զառանցանքներ և անկազմակերպ խոսք:",
      "Անհատականության խանգարումներ՝ հակասոցիալական, սահմանային, նարցիսիստական:",
      "Դիաթեզ-սթրես մոդել. խանգարումները գենետիկ հակվածության + շրջակա միջավայրի սթրեսների արդյունք են:"
    ],
    keyPointsAz: [
      "Psixoloji pozğunluq deviant, kədərli və disfunksiyalı olan düşüncələr və ya davranışlar nümunəsidir.",
      "DSM-5 standart təsnifat sistemidir. Pozğunluqları səbəblərinə görə deyil, simptomlarına görə təsnif edir.",
      "Anksiyete pozğunluqları: Ümumi narahatlıq pozğunluğu, Panik pozğunluğu, Fobiyalar, OCD, TSSB.",
      "Əhval pozğunluqları: Böyük Depressiv Pozğunluq və Bipolyar Pozğunluq.",
      "Şizofreniya: halüsinasiyalar, delusions və nizamsız nitqi əhatə edən ağır bir pozğunluqdur.",
      "Şəxsiyyət pozğunluqları: antisosial, sərhəd (Borderline), narsisistik.",
      "Diathesis-stress modeli: pozğunluqlar genetik meyil + ekoloji tetikleyicilerin nəticəsidir."
    ],
    keyFigures: ["Emil Kraepelin","Aaron Beck","David Rosenhan","Thomas Szasz","Kay Redfield Jamison"]
  },
  {
    id: 15,
    title: "Therapies",
    titleKa: "თერაპიები",
    titleRu: "Терапия",
    titleHy: "Թերապիաներ",
    titleAz: "Terapiyalar",
    description: "Approaches to treating psychological disorders.",
    descriptionKa: "ფსიქოლოგიური დარღვევების მკურნალობის მიდგომები.",
    descriptionRu: "Подходы к лечению психологических расстройств.",
    descriptionHy: "Հոգեբանական խանգարումների բուժման մոտեցումներ.",
    descriptionAz: "Psixoloji pozğunluqların müalicəsinə yanaşmalar.",
    icon: "mdi:pill",
    keyTopics: ["Psychotherapy","CBT","Humanistic Therapy","Biomedical Therapies","Group Therapy"],
    keyTopicsKa: ["ფსიქოთერაპია","CBT","ჰუმანისტური თერაპია","ბიოსამედიცინო თერაპია","ჯგუფური თერაპია"],
    keyTopicsRu: ["Психотерапия","ЗБТ","Гуманистическая терапия","Биомедицинская терапия","Групповая терапия"],
    keyTopicsHy: ["Հոգեթերապիա","CBT","Հումանիստական ​​թերապիա","Կենսաբժշկական թերապիա","Խմբային թերապիա"],
    keyTopicsAz: ["Psixoterapiya","CBT","Humanist Terapiya","Biotibbi Müalicələr","Qrup terapiyası"],
    summary: "Therapy comes in many forms: psychoanalytic, CBT, humanistic, and biomedical. Compares therapeutic approaches and their effectiveness.",
    keyPoints: [
      "Psychoanalytic/Psychodynamic therapy: explores unconscious conflicts through free association, dream analysis, and transference. Long-term, insight-oriented. Less empirically supported than CBT.",
      "Cognitive-Behavioral Therapy (CBT): identifies and changes distorted thinking patterns and maladaptive behaviors. The gold standard for anxiety and depression with strong evidence. Short-term (12–20 sessions).",
      "Beck's cognitive therapy targets cognitive distortions: all-or-nothing thinking, catastrophizing, overgeneralization, mind reading, and personalization.",
      "Humanistic therapy (Rogers's client-centered): provides unconditional positive regard, empathy, and genuineness. The therapist creates a supportive environment for self-exploration.",
      "Biomedical therapies: Antidepressants (SSRIs increase serotonin), Anti-anxiety meds (benzodiazepines), Antipsychotics (block dopamine), Mood stabilizers (lithium for bipolar). ECT (electroconvulsive therapy) remains effective for severe, treatment-resistant depression.",
      "Group therapy and family therapy leverage social support and address relationship dynamics. More cost-effective and can reduce isolation. Self-help groups (AA model) provide peer support.",
      "Evidence-based practice: combining the best research evidence, clinical expertise, and patient preferences. Not all therapies are equally effective for all disorders — matching treatment to diagnosis matters."
    ],
    funFact: "Talking to a therapist actually changes your brain. Brain scans show that CBT produces measurable changes in activity in the prefrontal cortex and amygdala — the same regions affected by antidepressant medication.",
    realWorld: "Teletherapy (online therapy) exploded during COVID-19 and research shows it's nearly as effective as in-person therapy for most conditions. This massively expanded access to mental health care, especially in rural areas.",
    keyFigures: ["Aaron Beck","Carl Rogers","Albert Ellis","Joseph Wolpe","Sigmund Freud"]
  },
  {
    id: 16,
    title: "Applied Psychology",
    titleKa: "გამოყენებითი ფსიქოლოგია",
    titleRu: "Прикладная психология",
    titleHy: "Կիրառական հոգեբանություն",
    titleAz: "Tətbiqi Psixologiya",
    description: "Psychology in the real world: work, education, law, and everyday life.",
    descriptionKa: "ფსიქოლოგია რეალურ სამყაროში: სამუშაო, განათლება, სამართალი და ყოველდღიური ცხოვრება.",
    descriptionRu: "Психология в реальном мире: работа, образование, право и повседневная жизнь.",
    descriptionHy: "Հոգեբանությունը իրական աշխարհում. աշխատանք, կրթություն, իրավունք և առօրյա կյանք:",
    descriptionAz: "Real dünyada psixologiya: iş, təhsil, hüquq və gündəlik həyat.",
    icon: "mdi:earth",
    keyTopics: ["Industrial-Organizational Psychology","Educational Psychology","Forensic Psychology","Positive Psychology"],
    keyTopicsKa: ["ინდუსტრიულ-ორგანიზაციული ფსიქოლოგია","განათლების ფსიქოლოგია","სასამართლო ფსიქოლოგია","პოზიტიური ფსიქოლოგია"],
    keyTopicsRu: ["Производственно-организационная психология","Педагогическая психология","Судебная психология","Позитивная психология"],
    keyTopicsHy: ["Արդյունաբերական-կազմակերպչական հոգեբանություն","Կրթության հոգեբանություն","Դատաբժշկական հոգեբանություն","Դրական հոգեբանություն"],
    keyTopicsAz: ["Sənaye-Təşkilati Psixologiya","Təhsil Psixologiyası","Məhkəmə Psixologiyası","Pozitiv Psixologiya"],
    summary: "Psychology applies to virtually every area of life. I/O psychology, educational psychology, forensic psychology, and positive psychology all make real-world impact.",
    keyPoints: [
      "Industrial-Organizational (I/O) Psychology: applies psychological principles to the workplace. Covers hiring (structured interviews beat unstructured), training design, motivation, leadership, job satisfaction, and reducing turnover.",
      "Educational Psychology: studies how people learn in educational settings. Applies Piaget, Vygotsky (zone of proximal development), and learning styles research. Growth mindset (Dweck): believing intelligence is malleable improves academic performance.",
      "Forensic Psychology: intersection of psychology and law. Includes criminal profiling, eyewitness testimony research, jury selection, competency evaluations, and risk assessment for reoffending.",
      "Health Psychology: promotes healthy behaviors and prevents illness. Covers behavior change models (stages of change), adherence to medical treatment, chronic pain management, and the mind-body connection.",
      "Positive Psychology (Seligman): the scientific study of what makes life worth living. Focuses on strengths, virtues, and optimal functioning rather than pathology. Key concepts: flow (Csikszentmihalyi), grit (Duckworth), gratitude, and character strengths.",
      "Environmental Psychology: how physical environments affect behavior and well-being. Includes workspace design, urban planning, crowding effects, and noise pollution impacts.",
      "Cross-cultural psychology: understanding how culture shapes behavior, cognition, and emotion. Individualistic cultures (US, Western Europe) emphasize personal achievement; collectivistic cultures (East Asia, Latin America) emphasize group harmony."
    ],
  
    funFact: "The \"IKEA effect\" (discovered by behavioral economists using psychological research) shows that people value things they built themselves 63% more than identical pre-built items — even when their creation is objectively worse!",
    realWorld: "Seligman's positive psychology research is used by the U.S. Army's Comprehensive Soldier Fitness program, training 1.1 million soldiers in resilience skills. Schools worldwide now teach \"character strengths\" and \"growth mindset\" as part of their curriculum.",
    keyFigures: ["Martin Seligman","Mihaly Csikszentmihalyi","Carol Dweck","Angela Duckworth","Hugo Münsterberg"]
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
    nameKa: 'ვილჰელმ ვუნდტი',
    nameRu: 'Вильгельм Вундт',
    nameHy: 'Վիլհելմ Վունդտ',
    nameAz: 'Vilhelm Vundt',
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
,
  {
    name: "Sigmund Freud",
    nameKa: "ზიგმუნდ ფროიდი",
    nameRu: "Зигмунд Фрейд",
    nameHy: "Զիգմունդ Ֆրեյդ",
    nameAz: "Ziqmund Freyd",
    years: "1856–1939",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg",
    nationality: "Austrian",
    nationalityKa: "ავსტრიელი",
    nationalityRu: "Австриец",
    nationalityHy: "Ավստրիացի",
    nationalityAz: "Avstriyalı",
    contribution: "Father of Psychoanalysis",
    contributionKa: "ფსიქოანალიზის მამა",
    contributionRu: "Отец психоанализа",
    contributionHy: "Հոգեվերլուծության հայրը",
    contributionAz: "Psixoanalizin atası",
    details: "Developed psychoanalytic theory, proposing that unconscious conflicts drive behavior. Introduced the id, ego, superego, defense mechanisms, dream analysis, and psychosexual stages.",
    detailsKa: "შეიმუშავა ფსიქოანალიტიკური თეორია. შემოიტანა იდი, ეგო, სუპერეგო, დაცვის მექანიზმები და ფსიქოსექსუალური ეტაპები.",
    detailsRu: "Разработал психоаналитическую теорию. Ввел понятия Ид, Эго, Супер-Эго, защитные механизмы и психосексуальные стадии.",
    detailsHy: "Մշակել է հոգեվերլուծական տեսությունը: Ներկայացրել է Id, Ego, Superego հասկացությունները և պաշտպանական մեխանիզմները:",
    detailsAz: "Psixoanalitik nəzəriyyəni inkişaf etdirmişdir. İd, eqo, supereqo, müdafiə mexanizmləri və yuxu analizini elmə gətirmişdir.",
    field: "Psychoanalysis",
    fieldKa: "ფსიქოანალიზი",
    fieldRu: "Психоанализ",
    fieldHy: "Հոգեվերլուծություն",
    fieldAz: "Psixoanaliz"
  },
  {
    name: "B.F. Skinner",
    nameKa: "ბ.ფ. სკინერი",
    nameRu: "Б. Ф. Скиннер",
    nameHy: "Բ. Ֆ. Սկիններ",
    nameAz: "B.F. Skinner",
    years: "1904–1990",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/B.F._Skinner_at_Harvard_circa_1950.jpg/220px-B.F._Skinner_at_Harvard_circa_1950.jpg",
    nationality: "American",
    nationalityKa: "ამერიკელი",
    nationalityRu: "Американец",
    nationalityHy: "Ամերիկացի",
    nationalityAz: "Amerikalı",
    contribution: "Pioneer of Operant Conditioning",
    contributionKa: "ოპერანტული განპირობებულობის პიონერი",
    contributionRu: "Пионер оперантного обусловливания",
    contributionHy: "Օպերանտ պայմանավորվածության პիոներ",
    contributionAz: "Operant kondisionerin (öyrənmənin) pioneri",
    details: "Developed operant conditioning theory. Invented the Skinner Box and introduced schedules of reinforcement.",
    detailsKa: "შეიმუშავა ოპერანტული განპირობებულობის თეორია. გამოიგონა „სკინერის ყუთი“ და განმტკიცების განრიგი.",
    detailsRu: "Разработал теорию оперантного обусловливания. Изобрел «ящик Скиннера» и ввел режимы подкрепления.",
    detailsHy: "Մշակել է օպերանտ պայմանավորվածության տեսությունը: Հգոնել է «Սկինների արկղը»:",
    detailsAz: "Operant kondisioner nəzəriyyəsini inkişaf etdirmişdir. Skinner qutusunu icad etmiş və gücləndirmə cədvəllərini təqdim etmişdir.",
    field: "Behaviorism",
    fieldKa: "ბიჰევიორიზმი",
    fieldRu: "Бихевиоризм",
    fieldHy: "Վարքաբանություն",
    fieldAz: "Biheviorizm"
  },
  {
    name: "Carl Rogers",
    nameKa: "კარლ როჯერსი",
    nameRu: "Карл Роджерс",
    nameHy: "Կարլ Ռոջերս",
    nameAz: "Karl Rocers",
    years: "1902–1987",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Carl_Ransom_Rogers.jpg/220px-Carl_Ransom_Rogers.jpg",
    nationality: "American",
    nationalityKa: "ამერიკელი",
    nationalityRu: "Американец",
    nationalityHy: "Ամերիկացի",
    nationalityAz: "Amerikalı",
    contribution: "Founder of Client-Centered Therapy",
    contributionKa: "კლიენტზე ორიენტირებული თერაპიის ფუძემდებელი",
    contributionRu: "Основатель клиент-центрированной терапии",
    contributionHy: "Հաճախորդակենտրոն թերապիայի հիմնադիրը",
    contributionAz: "Müştəri yönümlü terapiyanın qurucusu",
    details: "Pioneered person-centered therapy. Emphasized unconditional positive regard, empathy, and congruence.",
    detailsKa: "შექმნა პიროვნებაზე ორიენტირებული თერაპია. ხაზს უსვამდა უპირობო პოზიტიურ დამოკიდებულებას და ემპათიას.",
    detailsRu: "Основал личностно-ориентированную терапию. Подчеркивал важность безусловного позитивного принятия и эмпатии.",
    detailsHy: "Հիմնադրել է անձնակենտրոն թերապիան: Շեշտել է անվերապահ դրական վերաբերմունքի կարևորությունը:",
    detailsAz: "Şəxsiyyət yönümlü terapiyanın pioneridir. Şərtsiz müsbət münasibət və empatiyanı vurğulamışdır.",
    field: "Humanistic Psychology",
    fieldKa: "ჰუმანისტური ფსიქოლოგია",
    fieldRu: "Гуманистическая психология",
    fieldHy: "Հումանիստական ​​հոգեբանություն",
    fieldAz: "Humanist Psixologiya"
  },
  {
    name: "Jean Piaget",
    nameKa: "ჟან პიაჟე",
    nameRu: "Жан Пиаже",
    nameHy: "Ժան Պիաժե",
    nameAz: "Jan Piaje",
    years: "1896–1980",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jean_Piaget_in_Ann_Arbor.png/220px-Jean_Piaget_in_Ann_Arbor.png",
    nationality: "Swiss",
    nationalityKa: "შვეიცარიელი",
    nationalityRu: "Швейцарец",
    nationalityHy: "Շվեյցարացի",
    nationalityAz: "İsveçrəli",
    contribution: "Theory of Cognitive Development",
    contributionKa: "კოგნიტური განვითარების თეორია",
    contributionRu: "Теория когнитивного развития",
    contributionHy: "Ճանաչողական զարգացման տեսություն",
    contributionAz: "Koqnitiv inkişaf nəzəriyyəsi",
    details: "Proposed four stages of cognitive development: sensorimotor, preoperational, concrete operational, and formal operational.",
    detailsKa: "გამოყო კოგნიტური განვითარების ოთხი ეტაპი: სენსორულ-მოტორული, ოპერაციამდელი, კონკრეტული ოპერაციებისა და ფორმალური ოპერაციების.",
    detailsRu: "Предложил четыре стадии когнитивного развития: сенсомоторную, дооперациональную, стадию конкретных операций и формальных операций.",
    detailsHy: "Առաջարկել է ճանաჩողական զարգացման չորս փուլերը՝ սենսոմոտոր, նախաօպերացիոն, կոնկրետ օպերացիոն և ֆորմալ օպերացիոն:",
    detailsAz: "Koqnitiv inkişafın dörd mərhələsini təklif etmişdir: sensomotor, əməliyyatdan əvvəlki, konkret əməliyyat və formal əməliyyat.",
    field: "Developmental Psychology",
    fieldKa: "განვითარების ფსიქოლოგია",
    fieldRu: "Психология развития",
    fieldHy: "Զարգացման հոգեբանություն",
    fieldAz: "İnkişaf Psixologiyası"
  },
  {
    name: "Ivan Pavlov",
    nameKa: "ივან პავლოვი",
    nameRu: "Иван Павлов",
    nameHy: "Իվան Պավլով",
    nameAz: "İvan Pavlov",
    years: "1849–1936",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivan_Pavlov_%28Nobel%29.png/220px-Ivan_Pavlov_%28Nobel%29.png",
    nationality: "Russian",
    nationalityKa: "რუსი",
    nationalityRu: "Русский",
    nationalityHy: "Ռուս",
    nationalityAz: "Rus",
    contribution: "Discovery of Classical Conditioning",
    contributionKa: "კლასიკური განპირობებულობის აღმოჩენა",
    contributionRu: "Открытие классического обусловливания",
    contributionHy: "Դասական պայմանավորվածության ბაღმოჩენა",
    contributionAz: "Klassik kondisionerin (öyrənmənin) kəşfi",
    details: "While studying digestion in dogs, discovered classical conditioning—learning through association.",
    detailsKa: "ძაღლების საჭმლის მომნელებელ სისტემაზე დაკვირვებისას აღმოაჩინა კლასიკური განპირობებულობა — სწავლა ასოციაციით.",
    detailsRu: "Изучая пищеварение у собак, открыл классическое обусловливание — обучение через ассоциации.",
    detailsHy: "Շների մարսողությունը ուսումնասիրելիս հայտնաբերել է դասական պայմանավորվածությունը:",
    detailsAz: "İtlərin həzm sistemini öyrənərkən klassik kondisioneri - assosiasiya vasitəsilə öyrənməni kəşf etmişdir.",
    field: "Behavioral Psychology",
    fieldKa: "ბიჰევიორული ფსიქოლოგია",
    fieldRu: "Поведенческая психология",
    fieldHy: "Վարքագծային հոգեբանություն",
    fieldAz: "Davranış Psixologiyası"
  },
  {
    name: "Abraham Maslow",
    nameKa: "აბრაამ მასლოუ",
    nameRu: "Абрахам Маслоу",
    nameHy: "Աբրահամ Մասլոու",
    nameAz: "Abraham Maslow",
    years: "1908–1970",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg/220px-Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg",
    nationality: "American",
    nationalityKa: "ამერიკელი",
    nationalityRu: "Американец",
    nationalityHy: "Ամերիկացի",
    nationalityAz: "Amerikalı",
    contribution: "Hierarchy of Needs",
    contributionKa: "მოთხოვნილებათა იერარქია",
    contributionRu: "Иерархия потребностей",
    contributionHy: "Կարիքների հիերարխիա",
    contributionAz: "Ehtiyaclar iyerarxiyası",
    details: "Created the hierarchy of needs—from basic physiological needs to self-actualization. Co-founded humanistic psychology.",
    detailsKa: "შექმნა მოთხოვნილებათა იერარქია — ფიზიოლოგიურიდან თვითაქტუალიზაციამდე. ჰუმანისტური ფსიქოლოგიის თანადამფუძნებელი.",
    detailsRu: "Создал иерархию потребностей — от базовых физиологических до самоактуализации. Один из основателей гуманистической психологии.",
    detailsHy: "Ստեղծել է կարիքների հիերարխիան՝ ֆիზიոլոգիականից մինչև ինքնիրացում:",
    detailsAz: "Əsas fizioloji ehtiyaclardan özünüreallaşdırmaya qədər ehtiyaclar iyerarxiyasını yaratmışdır.",
    field: "Humanistic Psychology",
    fieldKa: "ჰუმანისტური ფსიქოლოგია",
    fieldRu: "Гуманистическая психология",
    fieldHy: "Հումանիստական ​​հոգեբანություն",
    fieldAz: "Humanist Psixologiya"
  },
  {
    name: "Philip Zimbardo",
    years: "1933–2024",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg/220px-Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg",
    nationality: "American",
    contribution: "Stanford Prison Experiment",
    details: "Conducted the Stanford Prison Experiment (1971), demonstrating how social roles and situational forces influence behavior.",
    field: "Social Psychology",
    nameKa: ""
  },
  {
    name: "Albert Bandura",
    years: "1925–2021",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Albert_Bandura_in_his_Stanford_University_office_2005.jpg/220px-Albert_Bandura_in_his_Stanford_University_office_2005.jpg",
    nationality: "Canadian-American",
    contribution: "Social Learning Theory & Self-Efficacy",
    details: "Demonstrated observational learning through Bobo doll experiment. Developed self-efficacy concept.",
    field: "Social Learning",
    nameKa: ""
  },
  {
    name: "Elizabeth Loftus",
    years: "1944–present",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Elizabeth_Loftus.jpg/220px-Elizabeth_Loftus.jpg",
    nationality: "American",
    contribution: "False Memory Research",
    details: "Showed memories can be altered through suggestion and misinformation.",
    field: "Cognitive Psychology",
    nameKa: ""
  },
  {
    name: "Stanley Milgram",
    years: "1933–1984",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Stanley_Milgram_1974.jpg/220px-Stanley_Milgram_1974.jpg",
    nationality: "American",
    contribution: "Obedience Experiments",
    details: "Showed ordinary people will follow authority figures even when asked to harm others.",
    field: "Social Psychology",
    nameKa: ""
  },
  {
    name: "Erik Erikson",
    years: "1902–1994",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Erik_Erikson.png/220px-Erik_Erikson.png",
    nationality: "German-American",
    contribution: "Psychosocial Development Theory",
    details: "Proposed eight stages of psychosocial development spanning the entire lifespan.",
    field: "Developmental Psychology",
    nameKa: ""
  },
  {
    name: "Carl Jung",
    years: "1875–1961",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CGJung.jpg/220px-CGJung.jpg",
    nationality: "Swiss",
    contribution: "Collective Unconscious & Archetypes",
    details: "Proposed the collective unconscious, archetypes, introversion/extraversion, and individuation.",
    field: "Analytical Psychology",
    nameKa: ""
  },
  {
    name: "Lev Vygotsky",
    years: "1896–1934",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lev_Vygotsky_1896-1934.jpg/220px-Lev_Vygotsky_1896-1934.jpg",
    nationality: "Russian",
    contribution: "Zone of Proximal Development",
    details: "Proposed learning is fundamentally social. His ZPD and scaffolding concepts transformed education.",
    field: "Developmental Psychology",
    nameKa: ""
  },
  {
    name: "Mary Ainsworth",
    years: "1913–1999",
    photo: "https://upload.wikimedia.org/wikipedia/en/e/ec/Mary_Ainsworth.jpg",
    nationality: "Canadian-American",
    contribution: "Attachment Theory Research",
    details: "Developed the Strange Situation experiment, identifying secure, avoidant, and anxious attachment styles.",
    field: "Developmental Psychology",
    nameKa: ""
  },
  {
    name: "Daniel Kahneman",
    years: "1934–2024",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Daniel_KAHNEMAN.jpg/220px-Daniel_KAHNEMAN.jpg",
    nationality: "Israeli-American",
    contribution: "Behavioral Economics & Thinking Biases",
    details: "Nobel Prize winner. Demonstrated systematic biases. Wrote \"Thinking, Fast and Slow.\"",
    field: "Cognitive Psychology",
    nameKa: ""
  },
  {
    name: "Martin Seligman",
    years: "1942–present",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Martin_Seligman.jpg/220px-Martin_Seligman.jpg",
    nationality: "American",
    contribution: "Learned Helplessness & Positive Psychology",
    details: "Discovered learned helplessness. Founded positive psychology. Developed PERMA model of flourishing.",
    field: "Positive Psychology",
    nameKa: ""
  }
];


export interface MemoryCard {
  id: number;
  term: string;
  termKa?: string;
  termRu?: string;
  termHy?: string;
  termAz?: string;
  definition: string;
  definitionKa?: string;
  definitionRu?: string;
  definitionHy?: string;
  definitionAz?: string;
  category: string;
}


export const FACTS: Fact[] = [
  {
    "id": 1,
    "text": "Your brain uses about 20% of your body's total energy, despite being only 2% of your body weight.",
    "textKa": "თქვენი ტვინი სხეულის მთლიანი ენერგიის 20%-ს მოიხმარს, მიუხედავად იმისა, რომ სხეულის წონის მხოლოდ 2%-ს შეადგენს.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "fluent:brain-circuit-20-filled",
    "textRu": "Мозг использует около 20% всей энергии вашего тела, несмотря на то, что его масса составляет всего 2% от веса вашего тела.",
    "textHy": "Ձեր ուղեղը օգտագործում է ձեր մարմնի ընդհանուր էներգիայի մոտ 20%-ը, չնայած այն կազմում է ձեր մարմնի քաշի ընդամենը 2%-ը:",
    "textAz": "Beyniniz bədən çəkinizin yalnız 2%-i olmasına baxmayaraq, bədəninizin ümumi enerjisinin təxminən 20%-ni istifadə edir."
  },
  {
    "id": 2,
    "text": "The average person has about 6,200 thoughts per day, according to a 2020 study.",
    "textKa": "საშუალო ადამიანს დღეში დაახლოებით 6,200 აზრი აქვს, 2020 წლის კვლევის მიხედვით.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:head-lightbulb-outline",
    "textRu": "Согласно исследованию 2020 года, у среднестатистического человека в день возникает около 6200 мыслей.",
    "textHy": "Ըստ 2020 թվականի ուսումնասիրության, միջին հաշվով մարդն օրական ունենում է մոտ 6200 միտք:",
    "textAz": "2020-ci il araşdırmasına görə, orta hesabla bir insanın gündə təxminən 6200 düşüncəsi var."
  },
  {
    "id": 3,
    "text": "Memories are distributed across networks of neurons, not stored in one place.",
    "textKa": "მოგონებები ნეირონების ქსელებშია განაწილებული, და არა ერთ ადგილას.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:memory",
    "textRu": "Воспоминания распределены по сетям нейронов, а не хранятся в одном месте.",
    "textHy": "Հիշողությունները բաշխվում են նեյրոնների ցանցերում, այլ ոչ թե պահվում են մեկ տեղում:",
    "textAz": "Yaddaşlar bir yerdə saxlanılmayan neyron şəbəkələri arasında paylanır."
  },
  {
    "id": 4,
    "text": "The \"doorway effect\": Walking through a doorway makes you forget what you were thinking.",
    "textKa": "\"კარის ეფექტი\": კარში გავლა გაგავიწყებინებს რაზე ფიქრობდით.",
    "source": "Cognitive Psychology",
    "category": "Memory",
    "icon": "mdi:door-open",
    "textRu": "«Эффект дверного проема»: проход через дверной проем заставляет вас забыть, о чем вы думали.",
    "textHy": "«Դռների էֆեկտ». Դռան միջով անցնելը ստիպում է մոռանալ, թե ինչ էիք մտածում:",
    "textAz": "\"Qapı effekti\": Qapıdan keçmək nə düşündüyünüzü unutdurur."
  },
  {
    "id": 5,
    "text": "We consciously process about 50 bits per second, despite senses receiving millions.",
    "textKa": "შეგნებულად წამში დაახლოებით 50 ბიტს წამში, მიუხედავად იმისა, რომ გრძნობები მილიონობით იღებს.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:eye-settings-outline",
    "textRu": "Мы сознательно обрабатываем около 50 бит в секунду, несмотря на то, что органы чувств принимают миллионы.",
    "textHy": "Մենք գիտակցաբար մշակում ենք վայրկյանում մոտ 50 բիթ, չնայած զգայարանները ստանում են միլիոններ:",
    "textAz": "Hisslərin milyonlarla qəbul etməsinə baxmayaraq, biz saniyədə təxminən 50 biti şüurlu şəkildə emal edirik."
  },
  {
    "id": 6,
    "text": "In Milgram's experiment, 65% administered what they believed were lethal shocks under authority.",
    "textKa": "მილგრამის ექსპერიმენტში 65%-მა მისცა საშიში ელექტროშოკი, რომელიც სასიკვდილოდ მიიჩნია.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:flash-alert-outline",
    "textRu": "В эксперименте Милгрэма 65% участников эксперимента применяли то, что, по их мнению, было смертельным электрошоком под руководством.",
    "textHy": "Միլգրամի փորձի ժամանակ 65%-ը կառավարել է այն, ինչ նրանք կարծում էին, որ մահացու ցնցումներ էին իշխանության ներքո:",
    "textAz": "Milgramın təcrübəsində, 65% hakimiyyət altında öldürücü şoklar olduğuna inandıqları şeyi tətbiq etdi."
  },
  {
    "id": 7,
    "text": "The placebo effect works even when people know they are taking a placebo.",
    "textKa": "პლაცებოს ეფექტი მუშაობს მაშინაც, როცა ადამიანებმა იციან, რომ პლაცებოს იღებენ.",
    "source": "Health Psychology",
    "category": "Health",
    "icon": "mdi:pill",
    "textHy": "Պլացեբոյի էֆեկտը գործում է նույնիսկ այն դեպքում, երբ մարդիկ գիտեն, որ իրենք պլացեբո են ընդունում:",
    "textRu": "Эффект плацебо работает, даже когда люди знают, что принимают плацебо.",
    "textAz": "Plasebo effekti hətta insanlar plasebo qəbul etdiklərini bilsələr də işləyir."
  },
  {
    "id": 8,
    "text": "Babies recognize their mother's voice from birth, having listened in the womb.",
    "textKa": "ჩვილები დედის ხმას დაბადებიდან ამოიცნობენ, რადგან საშვილოსნოში უსმენდნენ.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:baby-carriage",
    "textRu": "Младенцы узнают голос матери с рождения, прислушавшись к нему еще в утробе матери.",
    "textHy": "Երեխաները ճանաչում են իրենց մոր ձայնը ծննդից՝ լսելով արգանդում:",
    "textAz": "Körpələr ana bətnində dinləyərək anasının səsini doğuşdan tanıyırlar."
  },
  {
    "id": 9,
    "text": "Even forced smiling can improve your mood via the facial feedback hypothesis.",
    "textKa": "იძულებითი ღიმილიც კი შეუძლია განწყობის გაუმჯობესება, სახის უკუკავშირი არსებობის ჰიპოთეზის მიხედვით.",
    "source": "Emotion Research",
    "category": "Emotion",
    "icon": "mdi:emoticon-happy-outline",
    "textRu": "Даже вынужденная улыбка может улучшить ваше настроение благодаря гипотезе обратной связи по лицу.",
    "textHy": "Նույնիսկ հարկադիր ժպտալը կարող է բարելավել ձեր տրամադրությունը դեմքի հետադարձ կապի վարկածի միջոցով:",
    "textAz": "Hətta məcburi təbəssüm də üz rəyi hipotezi vasitəsilə əhvalınızı yaxşılaşdıra bilər."
  },
  {
    "id": 10,
    "text": "Dunning-Kruger effect: People with low knowledge overestimate competence; experts underestimate.",
    "textKa": "დანინგ-კრუგერის ეფექტი: მცირე ცოდნის მქონე ადამიანები გადააჭარბებენ კომპეტენციას, ექსპერტები კი ანაცვალებენ.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:chart-bell-curve-cumulative",
    "textRu": "Эффект Даннинга-Крюгера: люди с низким уровнем знаний переоценивают компетентность; эксперты недооценивают.",
    "textHy": "Դանինգ-Կրյուգերի էֆեկտ. ցածր գիտելիքներ ունեցող մարդիկ գերագնահատում են իրավասությունը. փորձագետները թերագնահատում են.",
    "textAz": "Dunning-Kruger effekti: Biliyi az olan insanlar səriştəni yüksək qiymətləndirir; ekspertlər az qiymətləndirirlər."
  },
  {
    "id": 11,
    "text": "Your unconscious processes 11 million info pieces per second; conscious handles about 40.",
    "textKa": "თქვენი ქვეცნობიერება წამში 11 მილიონ ერთეულ ინფორმაციას ამუშავებს; ცნობიერება მხოლოდ 40-ს.",
    "source": "Cognitive Neuroscience",
    "category": "Brain",
    "icon": "mdi:head-sync-outline",
    "textHy": "Ձեր անգիտակցականը մեկ վայրկյանում մշակում է 11 միլիոն տեղեկատվական կտոր. գիտակից բռնակներ մոտ 40.",
    "textRu": "Ваше подсознание обрабатывает 11 миллионов фрагментов информации в секунду; сознание обрабатывает около 40.",
    "textAz": "Şüursuzluğunuz saniyədə 11 milyon məlumat parçasını emal edir; şüurlu tutacaqlar təxminən 40."
  },
  {
    "id": 12,
    "text": "Missing one night of sleep can impair memory by up to 40%.",
    "textKa": "ერთი ღამის ძილის გამოტოვებამ შეიძლება მეხსიერება 40%-მდე გააუარესოს.",
    "source": "Sleep Research",
    "category": "Memory",
    "icon": "mdi:power-sleep",
    "textHy": "Մեկ գիշեր չքնելը կարող է վատթարանալ հիշողությունը մինչև 40%-ով:",
    "textRu": "Отсутствие сна на одну ночь может ухудшить память до 40%.",
    "textAz": "Bir gecə yuxunu qaçırmaq yaddaşı 40%-ə qədər zəiflədə bilər."
  },
  {
    "id": 13,
    "text": "Mirror neurons fire when you act AND when you watch others act—the basis of empathy.",
    "textKa": "სარკის ნეირონები აქტიურდება, რო჊ მოქმედებთ და რო჊ სხვებს უყურებთ—ემპათიის საფუძველი.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:mirror-variant",
    "textRu": "Зеркальные нейроны активируются, когда вы действуете И когда вы наблюдаете за действиями других — основа эмпатии.",
    "textHy": "Հայելային նեյրոնները կրակում են, երբ դուք գործում եք ԵՎ երբ դիտում եք ուրիշների գործողությունները՝ կարեկցանքի հիմքը:",
    "textAz": "Güzgü neyronları siz hərəkət edəndə və başqalarının hərəkətlərini izlədiyiniz zaman işə düşür - empatiyanın əsasıdır."
  },
  {
    "id": 14,
    "text": "The Stanford Prison Experiment was stopped after 6 days of a planned 2-week run.",
    "textKa": "სტენფორდის ციხის ექსპერიმენტი დაგეგმილი 2 კვირიდან მხოლოდ 6 დღეში შეწყდა.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:shield-alert-outline",
    "textRu": "Стэнфордский тюремный эксперимент был остановлен через 6 дней запланированного двухнедельного эксперимента.",
    "textHy": "Սթենֆորդի բանտային փորձը դադարեցվել է ծրագրված 2-շաբաթյա վազքից 6 օր հետո:",
    "textAz": "Stanford Həbsxana Təcrübəsi 6 günlük planlaşdırılmış 2 həftəlik qaçışdan sonra dayandırıldı."
  },
  {
    "id": 15,
    "text": "Fear of public speaking affects ~75% of people—more common than fear of death.",
    "textKa": "საჯაროდ გამოსვლის შიში ადამიანების ~75%-ს აწუხებს—ის სიკვდილის შიშზე გავრცელებულია.",
    "source": "Clinical Psychology",
    "category": "Anxiety",
    "icon": "mdi:microphone-off",
    "textHy": "Հանրային ելույթից վախը ազդում է մարդկանց մոտ 75%-ի վրա՝ ավելի հաճախ, քան մահվան վախը:",
    "textRu": "Страх публичных выступлений затрагивает около 75% людей — чаще, чем страх смерти.",
    "textAz": "Natiqlik qorxusu insanların ~75%-nə təsir edir - ölüm qorxusundan daha çox."
  },
  {
    "id": 16,
    "text": "Halo effect: Attractive people are rated as more intelligent, kind, and competent.",
    "textKa": "ჰალოს ეფექტი: მიმზიდველ ადამიანებს უფრო გონიერად, კეთილად და კომპეტენტურად აფასებენ.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:star-circle-outline",
    "textRu": "Эффект ореола: привлекательные люди оцениваются как более умные, добрые и компетентные.",
    "textHy": "Հալո էֆեկտ. գրավիչ մարդիկ գնահատվում են որպես ավելի խելացի, բարի և գրագետ:",
    "textAz": "Halo effekti: Cazibədar insanlar daha ağıllı, xeyirxah və bacarıqlı olaraq qiymətləndirilir."
  },
  {
    "id": 17,
    "text": "Oxytocin, released during hugging and bonding, promotes trust and empathy.",
    "textKa": "ოქსიტოცინი, რომელიც გამოიყოფა ჩახუტებისას და მიბმისას, ხელს უწყობს ნდობასა და ემპათიას.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:heart-pulse",
    "textRu": "Окситоцин, выделяемый во время объятий и привязанностей, способствует доверию и сочувствию.",
    "textHy": "Օքսիտոցինը, որն ազատվում է գրկախառնության և կապի ժամանակ, խթանում է վստահությունն ու կարեկցանքը:",
    "textAz": "Qucaqlaşma və bağlanma zamanı ifraz olunan oksitosin inam və empatiya yaradır."
  },
  {
    "id": 18,
    "text": "It takes 1/10th of a second to form a first impression—and they tend to be accurate.",
    "textKa": "პირველი შთაბეჭდილების ჩამოყალიბებას წამის 1/10 სჭირდება—და ისინი ხშირად ზუსტია.",
    "source": "Social Psychology",
    "category": "Social",
    "icon": "mdi:timer-outline",
    "textHy": "Առաջին տպավորություն ստեղծելու համար անհրաժեշտ է վայրկյանի 1/10-րդ մասը, և դրանք հակված են ճշգրիտ լինելու:",
    "textRu": "Для формирования первого впечатления требуется 1/10 секунды, и оно, как правило, точное.",
    "textAz": "İlk təəssürat yaratmaq üçün saniyənin 1/10 hissəsi lazımdır və onlar dəqiq olmağa meyllidirlər."
  },
  {
    "id": 19,
    "text": "Securely attached children have better relationships and self-esteem in adulthood.",
    "textKa": "უსაფრთხოდ მიბმულ ბავშვებს მოზრდილობაში უკეთესი ურთიერთობები და თვითშეფასება აქვთ.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:human-female-boy",
    "textRu": "У детей с надежной привязанностью во взрослой жизни улучшаются отношения и повышается самооценка.",
    "textHy": "Ապահով կապված երեխաներն ավելի լավ հարաբերություններ և ինքնագնահատական ​​ունեն հասուն տարիքում:",
    "textAz": "Təhlükəsiz bağlanan uşaqlar yetkinlik dövründə daha yaxşı münasibətlərə və özünə hörmətə sahib olurlar."
  },
  {
    "id": 20,
    "text": "Zeigarnik effect: We remember uncompleted tasks better because they stay active in memory.",
    "textKa": "ზეიგარნიკის ეფექტი: დაუსრულებელ დავალებებს უკეთ ვიმახსოვრებთ, რადგან ისინი მეხსიერებაში აქტიური რჩება.",
    "source": "Cognitive Psychology",
    "category": "Memory",
    "icon": "mdi:checkbox-blank-circle-outline",
    "textRu": "Эффект Зейгарник: мы лучше запоминаем незавершенные задачи, потому что они остаются активными в памяти.",
    "textHy": "Զեյգարնիկի էֆեկտ. մենք ավելի լավ ենք հիշում չավարտված առաջադրանքները, քանի որ դրանք ակտիվ են մնում հիշողության մեջ:",
    "textAz": "Zeigarnik effekti: Tamamlanmamış işləri daha yaxşı xatırlayırıq, çünki onlar yaddaşda aktiv qalırlar."
  },
  {
    "id": 21,
    "text": "Synesthesia causes some people to see colors when hearing music or associate numbers with colors.",
    "textKa": "სინესთეზია ზოგიერთ ადამიანს აჯენს ფერებს დაინახოს მუსიკის მოსმენისას ან რიცხვები ფერებთან დააკავშიროს.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:palette-outline",
    "textRu": "Синестезия заставляет некоторых людей видеть цвета, когда они слушают музыку, или ассоциировать числа с цветами.",
    "textHy": "Սինեստեզիան ստիպում է որոշ մարդկանց տեսնել գույները երաժշտություն լսելիս կամ թվերը կապել գույների հետ:",
    "textAz": "Sinesteziya bəzi insanların musiqi eşitdikdə rəngləri görməsinə və ya rəqəmləri rənglərlə əlaqələndirməsinə səbəb olur."
  },
  {
    "id": 22,
    "text": "The brain can't feel pain—brain surgery can be performed while the patient is awake.",
    "textKa": "ტვინს ტკივილის შეგრძნება არ შეუძლია—ტვინის ოპერაცია შეიძლება პაციენტის ფხიზელობისას.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "fluent:brain-circuit-20-filled",
    "textRu": "Мозг не чувствует боли — операцию на головном мозге можно проводить, пока пациент бодрствует.",
    "textHy": "Ուղեղը չի կարող ցավ զգալ. ուղեղի վիրահատությունը կարող է իրականացվել, երբ հիվանդը արթուն է:",
    "textAz": "Beyin ağrı hiss edə bilməz - xəstə oyaq ikən beyin əməliyyatı edilə bilər."
  },
  {
    "id": 23,
    "text": "Humans can detect over 1 trillion distinct smells, far more than previously thought.",
    "textKa": "ადამიანს შეუძლია 1 ტრილიონზე მეტი განსხვავებული სუნის ამოცნობა, გაცილებით მეტი ვიდრე ვიდრე ფიქრობდნენ.",
    "source": "Perception Research",
    "category": "Perception",
    "icon": "mdi:scent",
    "textRu": "Люди могут различать более 1 триллиона различных запахов — гораздо больше, чем считалось ранее.",
    "textHy": "Մարդիկ կարող են հայտնաբերել ավելի քան 1 տրիլիոն տարբեր հոտեր, շատ ավելին, քան նախկինում ենթադրվում էր:",
    "textAz": "İnsanlar 1 trilyondan çox fərqli qoxunu aşkar edə bilirlər ki, bu da əvvəllər düşünüldüyündən qat-qat çoxdur."
  },
  {
    "id": 24,
    "text": "Cognitive Behavioral Therapy (CBT) is as effective as medication for many anxiety disorders.",
    "textKa": "კოგნიტური-ბიჰევიორალური თერაპია (CBT) ისევე ეფექტურია როგორც მედიკამენტები, ბევრი შფოთვითი აშლილობის მკურნალობისთვის.",
    "source": "Clinical Psychology",
    "category": "Health",
    "icon": "mdi:head-heart-outline",
    "textRu": "Когнитивно-поведенческая терапия (КПТ) столь же эффективна, как и лекарства, при многих тревожных расстройствах.",
    "textHy": "Ճանաչողական վարքագծային թերապիան (CBT) նույնքան արդյունավետ է, որքան դեղորայքը շատ անհանգստության խանգարումների համար:",
    "textAz": "Koqnitiv Davranış Terapiyası (CBT) bir çox narahatlıq pozğunluğu üçün dərman kimi təsirlidir."
  },
  {
    "id": 25,
    "text": "Children learn language at an extraordinary rate—about 10 new words per day between ages 2 and 6.",
    "textKa": "ბავშვები ენას არაჩვეულებრივი ტემპით სწავლობენ—დაახლოებით 10 ახალ სიტყვას დღეში 2-დან 6 წლამდე.",
    "source": "Developmental Psychology",
    "category": "Development",
    "icon": "mdi:message-text-outline",
    "textRu": "Дети изучают язык с необычайной скоростью — около 10 новых слов в день в возрасте от 2 до 6 лет.",
    "textHy": "Երեխաները լեզուն սովորում են արտասովոր արագությամբ՝ օրական մոտ 10 նոր բառ 2-ից 6 տարեկանում:",
    "textAz": "Uşaqlar dili qeyri-adi sürətlə öyrənirlər - 2-6 yaş arasında gündə təxminən 10 yeni söz."
  },
  {
    "id": 26,
    "text": "Stockholm syndrome: Hostages may develop emotional bonds with their captors as a survival mechanism.",
    "textKa": "სტოკჰოლმის სინდრომი: მძევლებმა შეიძლება ემოციური კავშირი განავითარონ გამტაცებელთან, როგორც გადარჩენის მექანიზმი.",
    "source": "Clinical Psychology",
    "category": "Social",
    "icon": "mdi:link-variant",
    "textRu": "Стокгольмский синдром: заложники могут развивать эмоциональные связи со своими похитителями как механизм выживания.",
    "textHy": "Ստոկհոլմի համախտանիշ. պատանդները կարող են զարգացնել հուզական կապեր իրենց առևանգողների հետ՝ որպես գոյատևման մեխանիզմ:",
    "textAz": "Stokholm sindromu: Girovlar sağ qalma mexanizmi kimi əsir götürənlərlə emosional bağlar yarada bilər."
  },
  {
    "id": 27,
    "text": "Your brain generates about 12-25 watts of electricity—enough to power a low-wattage LED bulb.",
    "textKa": "თქვენი ტვინი გამოიმუშავებს დაახლოებით 12-25 ვატ ელექტროობას—საკმარისი LED ნათურის გასანათებლად.",
    "source": "Neuroscience",
    "category": "Brain",
    "icon": "mdi:lightbulb-on-outline",
    "textRu": "Ваш мозг генерирует около 12–25 Вт электроэнергии — этого достаточно для питания маломощной светодиодной лампы.",
    "textHy": "Ձեր ուղեղը արտադրում է մոտ 12-25 վտ էլեկտրաէներգիա, ինչը բավարար է ցածր հզորությամբ LED լամպը սնուցելու համար:",
    "textAz": "Beyniniz təxminən 12-25 vatt elektrik enerjisi istehsal edir ki, bu da aşağı vattlı bir LED lampanı işə salmaq üçün kifayətdir."
  },
  {
    "id": 28,
    "text": "Multitasking reduces productivity by up to 40%—your brain rapidly switches, not truly parallel-processes.",
    "textKa": "მულტიტასკინგი პროდუქტიულობას 40%-ით ამცირებს—ტვინი სწრაფად გადართავს, და არ პარალელურად ამუშავებს.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:swap-horizontal-circle-outline",
    "textRu": "Многозадачность снижает производительность до 40 % — ваш мозг быстро переключается, а не выполняет по-настоящему параллельные процессы.",
    "textHy": "Բազմաֆունկցիոնալությունը նվազեցնում է արտադրողականությունը մինչև 40%-ով. ձեր ուղեղը արագորեն փոխվում է, այլ ոչ թե իրականում զուգահեռ գործընթացներ:",
    "textAz": "Multitasking məhsuldarlığı 40%-ə qədər azaldır - beyniniz həqiqətən paralel proseslər deyil, sürətlə dəyişir."
  },
  {
    "id": 29,
    "text": "Laughter is 30 times more likely in social situations than when alone—it's primarily social.",
    "textKa": "სიცილი 30-ჯერ უფრო ხშირია სოციალურ სიტუაციებში ვიდრე მარტოობისას—ის უპირველესად სოციალური ფენომენია.",
    "source": "Social Psychology",
    "category": "Emotion",
    "icon": "mdi:emoticon-lol-outline",
    "textRu": "Смех в 30 раз чаще встречается в социальных ситуациях, чем в одиночестве — он в первую очередь социальный.",
    "textHy": "Ծիծաղը 30 անգամ ավելի հավանական է սոցիալական իրավիճակներում, քան միայնակ ժամանակ. դա հիմնականում սոցիալական է:",
    "textAz": "Gülüş sosial vəziyyətlərdə tək olandan 30 dəfə çox olur - bu, ilk növbədə sosialdır."
  },
  {
    "id": 30,
    "text": "The serial position effect: We best remember the first and last items in a list.",
    "textKa": "სერიული პოზიციის ეფექტი: სიის პირველ და ბოლო ელემენტებს საუკეთესოდ ვიმახსოვრებთ.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:format-list-numbered",
    "textRu": "Эффект последовательного положения: мы лучше всего запоминаем первый и последний элементы списка.",
    "textHy": "Սերիական դիրքի էֆեկտ. Մենք լավագույնս հիշում ենք ցուցակի առաջին և վերջին կետերը:",
    "textAz": "Serial mövqe effekti: Siyahıdakı ilk və son elementləri yaxşı xatırlayırıq."
  },
  {
    "id": 31,
    "text": "Bilingual people may delay the onset of dementia by an average of 4-5 years.",
    "textKa": "ორენოვანი ადამიანები დემენციის დაწყებას საშუალოდ 4-5 წლით აგვიანებენ.",
    "source": "Cognitive Neuroscience",
    "category": "Brain",
    "icon": "mdi:translate",
    "textRu": "Двуязычные люди могут отсрочить начало деменции в среднем на 4-5 лет.",
    "textHy": "Երկլեզու մարդիկ կարող են հետաձգել դեմենցիայի առաջացումը միջինը 4-5 տարով։",
    "textAz": "İkidilli insanlar demansın başlanğıcını orta hesabla 4-5 il gecikdirə bilər."
  },
  {
    "id": 32,
    "text": "Emotional memories are stored more vividly because the amygdala strengthens the memory trace.",
    "textKa": "ემოციური მოგონებები უფრო ნათლად ინახება, რადგან ამიგდალა აძლიერებს მეხსიერების კვალს.",
    "source": "Memory Research",
    "category": "Memory",
    "icon": "mdi:heart-flash",
    "textRu": "Эмоциональные воспоминания сохраняются более ярко, потому что миндалевидное тело усиливает след памяти.",
    "textHy": "Զգացմունքային հիշողություններն ավելի վառ են պահվում, քանի որ ամիգդալան ամրացնում է հիշողության հետքը:",
    "textAz": "Duygusal xatirələr daha canlı saxlanılır, çünki amigdala yaddaş izini gücləndirir."
  },
  {
    "id": 33,
    "text": "Sleep deprivation for just 17 hours impairs cognitive function as much as a blood alcohol level of 0.05%.",
    "textKa": "17 საათიანი ძილის დეფიციტი კოგნიტურ ფუნქციას ისე აუარესებს, როგორც სისხლში ალკოჰოლის დონე 0.05%.",
    "source": "Sleep Research",
    "category": "Health",
    "icon": "mdi:weather-night",
    "textRu": "Лишение сна всего на 17 часов ухудшает когнитивные функции так же, как уровень алкоголя в крови 0,05%.",
    "textHy": "Քնի պակասը ընդամենը 17 ժամվա ընթացքում խաթարում է ճանաչողական ֆունկցիան այնքան, որքան արյան մեջ ալկոհոլի մակարդակը 0,05%:",
    "textAz": "Cəmi 17 saat yuxudan məhrum olmaq idrak funksiyasını qanda 0,05% spirt səviyyəsi qədər zəiflədir."
  },
  {
    "id": 34,
    "text": "Phobias can be inherited—studies show fear responses can be passed through epigenetic changes.",
    "textKa": "ფობიები შეიძლება მემკვიდრეობით გადაიცეს—კვლევები აჩვენებს, რომ შიშის რეაქციები ეპიგენეტიკური ცვლილებებით გადაეცემა.",
    "source": "Biological Psychology",
    "category": "Anxiety",
    "icon": "mdi:spider-thread",
    "textRu": "Фобии могут передаваться по наследству: исследования показывают, что реакции страха могут передаваться через эпигенетические изменения.",
    "textHy": "Ֆոբիաները կարող են ժառանգական լինել. ուսումնասիրությունները ցույց են տալիս, որ վախի արձագանքները կարող են փոխանցվել էպիգենետիկ փոփոխությունների միջոցով:",
    "textAz": "Fobiyalar irsi ola bilər - tədqiqatlar göstərir ki, qorxu reaksiyaları epigenetik dəyişikliklərdən keçə bilər."
  },
  {
    "id": 35,
    "text": "The peak-end rule: We judge experiences mainly by their most intense moment and their ending.",
    "textKa": "პიკისა და დასასრულის წესი: გამოცდილებებს ვაფასებთ ძირითადად მათი ყველაზე ინტენსიური მომენტითა და დასასრულით.",
    "source": "Cognitive Psychology",
    "category": "Thinking",
    "icon": "mdi:chart-timeline-variant-shimmer",
    "textRu": "Правило пика-конца: мы судим о переживаниях главным образом по наиболее напряженным моментам и их окончанию.",
    "textHy": "Պիկ վերջի կանոնը.",
    "textAz": "Pik-end qaydası: Biz təcrübələri əsasən onların ən gərgin anına və bitməsinə görə qiymətləndiririk."
  }
];

export const STORIES: Story[] = [
  {
    "id": 1,
    "title": "Pavlov's Accidental Discovery",
    "titleKa": "პავლოვის შემთხვევითი აღმოჩენა",
    "chapterId": 6,
    "icon": "mdi:bell-ring-outline",
    "content": "In the 1890s, Russian physiologist Ivan Pavlov was conducting research on the digestive systems of dogs at the Institute of Experimental Medicine in St. Petersburg. His work was meticulous—he had surgically implanted tubes in dogs' cheeks to precisely measure saliva output when food was presented.\n\nBut something unexpected kept disrupting his carefully controlled experiments. The dogs began salivating before any food appeared. They drooled when they heard the footsteps of the lab assistant. They salivated at the sight of the food bowl, or even when they heard the door open.\n\nRather than dismissing this as a nuisance, Pavlov recognized he had stumbled upon something extraordinary. He called these premature responses \"psychic secretions\" and redesigned his entire research program to study them.\n\nPavlov began systematically pairing a neutral stimulus—a metronome (often misremembered as a bell)—with the presentation of food. After repeated pairings, the dogs would salivate at the sound of the metronome alone, with no food in sight.\n\nHe documented the entire process with scientific rigor: acquisition (learning the association), extinction (unlearning it when food stops coming), spontaneous recovery (the response returning after a rest period), and generalization (responding to similar sounds).\n\nThis accidental discovery became the foundation of classical conditioning and earned Pavlov the Nobel Prize in Physiology in 1904. His work influenced generations of psychologists, from John Watson to modern neuroscientists studying how the brain forms associations.",
    "contentKa": "1890-იან წლებში, რუსი ფიზიოლოგი ივან პავლოვი ძაღლების საჭმლის სისტემას იკვლევდა სანკტ-პეტერბურგში. მან შენიშნა, რომ ძაღლები საკვებს დაიწყებდნენ საკვების გარეშე჊ — ლაბორანტის ნაბიჯების გაგონისას. პავლოვმა ამაში მეტრონომის ხმა საკვებს დაუკავშირა და აღმოაჩინა კლასიკური განპირობება.",
    "moral": "Great discoveries emerge when curious minds pay attention to the unexpected. Pavlov could have ignored the dogs' early salivation, but instead he asked \"why?\" and changed psychology forever.",
    "moralKa": "დიდი აღმოჩენები იბადება, რო჊ ცნობისმოყვარე გონება ყურადღებას მოულოდნელს მიაქცევს.",
    "moralHy": "Մեծ բացահայտումներ են առաջանում, երբ հետաքրքրասեր մտքերը ուշադրություն են դարձնում անսպասելիին: Պավլովը կարող էր անտեսել շների վաղ թքելը, բայց փոխարենը հարցրեց՝ «ինչո՞ւ»։ և ընդմիշտ փոխեց հոգեբանությունը:",
    "contentAz": "1890-cı illərdə rus fizioloqu İvan Pavlov Sankt-Peterburqdakı Eksperimental Tibb İnstitutunda itlərin həzm sistemləri ilə bağlı tədqiqatlar aparırdı. Onun işi vasvası idi - yemək təqdim olunan zaman tüpürcək ifrazını dəqiq ölçmək üçün itlərin yanaqlarına cərrahi yolla borular yerləşdirmişdi.\n\nLakin gözlənilməz bir şey onun diqqətlə idarə olunan təcrübələrini pozmağa davam etdi. Hər hansı bir qida görünməzdən əvvəl itlər tüpürcəyə başladılar. Laborantın ayaq səslərini eşidəndə ağızları sulandı. Yemək qabını görəndə, hətta qapının açıldığını eşidəndə tüpürcək axırdılar.\n\nPavlov bunu bir narahatlıq kimi rədd etmək əvəzinə, qeyri-adi bir şeylə qarşılaşdığını başa düşdü. O, bu erkən cavabları \"psixik ifrazatlar\" adlandırdı və onları öyrənmək üçün bütün tədqiqat proqramını yenidən dizayn etdi.\n\nPavlov sistematik olaraq neytral stimulu - metronomu (çox vaxt zəng kimi xatırlanır) yeməyin təqdimatı ilə birləşdirməyə başladı. Təkrarlanan cütləşmələrdən sonra itlər yalnız metronomun səsinə tüpürcək tökürdülər, heç bir yemək görünmürdü.\n\nO, bütün prosesi elmi ciddiliklə sənədləşdirdi: əldə etmə (assosiasiyanı öyrənmək), məhv olma (yemək gəlməyi dayandırdıqda onu öyrənmə), spontan bərpa (istirahət müddətindən sonra geri qayıdan reaksiya) və ümumiləşdirmə (oxşar səslərə cavab).\n\nBu təsadüfi kəşf klassik kondisionerin təməli oldu və Pavlova 1904-cü ildə Fiziologiya üzrə Nobel Mükafatı qazandırdı. Onun işi Con Uotsondan tutmuş beynin assosiasiyaları necə formalaşdırdığını öyrənən müasir nevroloqlara qədər psixoloqların nəsillərinə təsir etdi.",
    "titleAz": "Pavlovun təsadüfən kəşfi",
    "moralAz": "Maraqlı beyinlər gözlənilməzlərə diqqət yetirdikdə böyük kəşflər ortaya çıxır. Pavlov itlərin erkən tüpürcək ifrazına məhəl qoymaya bilərdi, amma bunun əvəzinə \"niyə?\" və psixologiyanı həmişəlik dəyişdi.",
    "titleRu": "Случайное открытие Павлова",
    "contentHy": "1890-ական թվականներին ռուս ֆիզիոլոգ Իվան Պավլովը Սանկտ Պետերբուրգի Էքսպերիմենտալ բժշկության ինստիտուտում ուսումնասիրություններ էր կատարում շների մարսողական համակարգերի վերաբերյալ: Նրա աշխատանքը բծախնդիր էր. նա վիրաբուժական խողովակներ էր տեղադրել շների այտերին՝ սննդի մատուցման ժամանակ թքի արտազատումը ճշգրիտ չափելու համար:\n\nԲայց ինչ-որ անսպասելի բան շարունակում էր խանգարել նրա մանրակրկիտ վերահսկվող փորձերը: Շները սկսել են թուք արտահոսել նախքան սննդի հայտնվելը: Երբ լսեցին լաբորանտի ոտնաձայները, նրանք թուլացան։ Սննդի ամանի տեսնելուց կամ նույնիսկ երբ լսում էին դռան բացումը, նրանք թքացրին։\n\nՍա անհանգստություն համարելու փոխարեն Պավլովը հասկացավ, որ պատահաբար ինչ-որ արտասովոր բանի է հանդիպել: Նա այս վաղաժամ արձագանքներն անվանեց «հոգեկան սեկրեցներ» և վերամշակեց իր ամբողջ հետազոտական ​​ծրագիրը՝ դրանք ուսումնասիրելու համար:\n\nՊավլովը սկսեց համակարգված կերպով զուգակցել չեզոք գրգռիչը՝ մետրոնոմը (հաճախ սխալ է հիշվում որպես զանգ)՝ սննդի ներկայացման հետ: Բազմիցս զուգավորումներից հետո շները թք էին գալիս մենակ մետրոնոմի ձայնից՝ առանց կերակուրի:\n\nՆա փաստագրեց ողջ գործընթացը գիտական ​​խստությամբ՝ ձեռքբերում (սովորելով ասոցիացիան), վերացում (չսովորել այն, երբ սնունդը դադարում է գալ), ինքնաբուխ վերականգնում (հանգստի շրջանից հետո վերադառնում է պատասխան) ​​և ընդհանրացում (արձագանքելով նմանատիպ հնչյուններին):\n\nԱյս պատահական հայտնագործությունը դարձավ դասական կոնդիցիոներների հիմքը և Պավլովին 1904 թվականին ստացավ Նոբելյան մրցանակ ֆիզիոլոգիայի ոլորտում: Նրա աշխատանքը ազդեց հոգեբանների սերունդների վրա՝ Ջոն Ուոթսոնից մինչև ժամանակակից նյարդաբաններ, որոնք ուսումնասիրում էին, թե ինչպես է ուղեղը ձևավորում ասոցիացիաները:",
    "moralRu": "Великие открытия происходят, когда любознательные умы обращают внимание на неожиданное. Павлов мог бы не обращать внимания на раннее слюноотделение у собак, но вместо этого спросил: «Почему?» и навсегда изменил психологию.",
    "titleHy": "Պավլովի պատահական հայտնագործությունը",
    "contentRu": "В 1890-е годы русский физиолог Иван Павлов проводил исследования пищеварительной системы собак в Институте экспериментальной медицины в Петербурге. Его работа была кропотливой: он хирургическим путем вживлял в щеки собак трубки для точного измерения выделения слюны при подаче еды.\n\nНо что-то неожиданное постоянно мешало его тщательно контролируемым экспериментам. У собак началось выделение слюны еще до того, как появилась еда. У них потекли слюни, когда они услышали шаги лаборанта. У них выделялась слюна при виде миски с едой или даже когда они слышали, как открывается дверь.\n\nВместо того чтобы счесть это неприятностью, Павлов признал, что наткнулся на нечто необычное. Он назвал эти преждевременные реакции «психическими выделениями» и перепроектировал всю свою исследовательскую программу для их изучения.\n\nПавлов начал систематически сочетать нейтральный стимул — метроном (часто ошибочно воспринимаемый как колокольчик) — с представлением еды. После повторных спариваний у собак выделялась слюна только от звука метронома, а еды не было видно.\n\nОн задокументировал весь процесс с научной строгостью: приобретение (обучение ассоциации), угасание (отмена ее, когда еда перестает поступать), спонтанное восстановление (реакция, возвращающаяся после периода отдыха) и генерализация (реакция на похожие звуки).\n\nЭто случайное открытие стало основой классической обусловленности и принесло Павлову Нобелевскую премию по физиологии в 1904 году. Его работа повлияла на поколения психологов, от Джона Ватсона до современных нейробиологов, изучающих, как мозг формирует ассоциации."
  },
  {
    "id": 2,
    "title": "The Story of Phineas Gage",
    "titleKa": "ფინეას გეიჯის ისტორია",
    "chapterId": 3,
    "icon": "fluent:brain-circuit-20-filled",
    "content": "On September 13, 1848, 25-year-old Phineas Gage was working as a railroad construction foreman in Cavendish, Vermont. His crew was blasting rock to clear a path for new rail tracks. Gage's job was to pack explosive powder into drilled holes using a specially made iron tamping rod—43 inches long, 1.25 inches in diameter, and weighing over 13 pounds.\n\nIn a moment of distraction—perhaps he turned to speak to a colleague—Gage struck the iron rod against the rock before sand had been poured as a buffer. The powder ignited. The explosion launched the iron rod like a missile straight through his skull, entering below his left cheekbone and exiting through the top of his head, landing 80 feet away.\n\nAstonishingly, Gage did not die. He was conscious within minutes, able to walk and talk. The local physician, Dr. John Harlow, treated the gruesome wound. Gage physically recovered over the following months, but something fundamental had changed.\n\nBefore the accident, Gage was described as reliable, well-balanced, and a shrewd businessman—\"the most efficient and capable foreman.\" Afterward, his personality was unrecognizable. He became profane, impulsive, disrespectful, and unable to follow through on plans. Friends said he was \"no longer Gage.\"\n\nHis case became one of the most important in neuroscience history. It provided the first strong evidence that specific brain regions—particularly the prefrontal cortex—are responsible for personality, decision-making, and social behavior. Modern neuroimaging has confirmed the rod destroyed much of his left frontal lobe, especially areas involved in emotional regulation and planning.",
    "contentKa": "1848 წელს, ფინეას გეიჯი რკინიგზის მშენებლობის ოსტატი იყო. აფეთქებისას რკინის ღერძი მის თავის ქალაში შევიდა და თავის ზემოდან გამოვიდა. გეიჯი გადარჩა, მაგრამ მისი პიროვნება სრულიად შეიცვალა. ეს შემთხვევა ნეირომეცნიერების ისტორიაში ერთ-ერთი ყველაზე მნიშვნელოვანი გახდა.",
    "moral": "The brain is the seat of personality—damage to specific areas transforms who we are. Gage's case taught us that our sense of self is rooted in biology.",
    "moralKa": "ტვინი პიროვნების სადგურია—კონკრეტული უბნების დაზიანება გვაქ჊ევს სხვა ადამიანებად.",
    "moralAz": "Beyin şəxsiyyətin oturacağıdır - xüsusi sahələrə ziyan vurmaq bizim kim olduğumuzu dəyişir. Gage-in işi bizə öyrətdi ki, mənlik duyğumuz biologiyadan qaynaqlanır.",
    "titleHy": "Ֆինեաս Գեյջի պատմությունը",
    "moralHy": "Ուղեղը անհատականության նստավայրն է. որոշակի տարածքների վնասը փոխում է մեր ով լինելը: Գեյջի դեպքը մեզ սովորեցրեց, որ մեր ինքնազգացողությունը արմատացած է կենսաբանության մեջ:",
    "moralRu": "Мозг — это вместилище личности: повреждение определенных областей меняет то, кем мы являемся. Случай Гейджа научил нас тому, что наше самоощущение коренится в биологии.",
    "titleRu": "История Финеаса Гейджа",
    "contentHy": "1848 թվականի սեպտեմբերի 13-ին 25-ամյա Ֆինես Գեյջը աշխատում էր որպես երկաթուղու շինարարության վարպետ Վերմոնտ նահանգի Քավենդիշ քաղաքում: Նրա անձնակազմը պայթեցնում էր ժայռերը՝ նոր երկաթուղային գծերի համար ճանապարհ բացելու համար: Գեյջի գործն էր պայթուցիկ փոշի փաթեթավորել փորված անցքերի մեջ՝ օգտագործելով հատուկ պատրաստված երկաթե սեղմող ձող՝ 43 դյույմ երկարությամբ, 1,25 դյույմ տրամագծով և 13 ֆունտից ավելի քաշով:\n\nՈւշադրությունը շեղված մի պահի, երևի թե նա շրջվեց, որպեսզի խոսի գործընկերոջ հետ, Գեյջը երկաթե ձողը հարվածեց ժայռին, նախքան ավազը լցնելը որպես բուֆեր: Փոշը բռնկվեց։ Պայթյունը հրթիռի պես երկաթե ձողը արձակեց ուղիղ նրա գանգի միջով, մտնելով ձախ այտոսկրի տակ և դուրս գալով գլխի վերևից՝ վայրէջք կատարելով 80 ոտնաչափ հեռավորության վրա:\n\nԶարմանալի է, որ Գեյջը չի մահացել։ Նա ուշագնաց էր րոպեների ընթացքում, կարողանում էր քայլել և խոսել: Սարսափելի վերքը բուժել է տեղի բժիշկը՝ բժիշկ Ջոն Հարլոուն։ Գեյջը ֆիզիկապես վերականգնվեց հաջորդ ամիսների ընթացքում, բայց ինչ-որ հիմնարար բան փոխվեց:\n\nԴժբախտ պատահարից առաջ Գեյջին նկարագրում էին որպես վստահելի, հավասարակշռված և խորաթափանց գործարար՝ «ամենաարդյունավետ և ընդունակ վարպետ»: Հետո նրա անձը անճանաչելի էր։ Նա դարձավ սրբապիղծ, իմպուլսիվ, անհարգալից և չկարողացավ իրականացնել պլանները: Ընկերներն ասացին, որ նա «այլևս Գեյջը չէ»:\n\nՆրա գործը դարձավ ամենակարևորներից մեկը նյարդագիտության պատմության մեջ: Այն տրամադրեց առաջին ամուր ապացույցն այն մասին, որ ուղեղի հատուկ շրջանները, հատկապես նախաճակատային կեղևը, պատասխանատու են անհատականության, որոշումների կայացման և սոցիալական վարքագծի համար: Ժամանակակից նեյրոպատկերումը հաստատել է, որ ձողը ոչնչացրել է նրա ձախ ճակատային բլթի մեծ մասը, հատկապես այն հատվածները, որոնք ներգրավված են հուզական կարգավորման և պլանավորման մեջ:",
    "contentRu": "13 сентября 1848 года 25-летний Финеас Гейдж работал бригадиром на строительстве железной дороги в Кавендише, штат Вермонт. Его команда взрывала камни, чтобы расчистить путь для новых железнодорожных путей. Работа Гейджа заключалась в том, чтобы засыпать взрывчатый порошок в просверленные отверстия с помощью специально изготовленного железного трамбовочного стержня длиной 43 дюйма, диаметром 1,25 дюйма и весом более 13 фунтов.\n\nВ момент отвлечения — возможно, он повернулся, чтобы поговорить с коллегой, — Гейдж ударил железным стержнем о камень, прежде чем в качестве буфера был насыпан песок. Порошок загорелся. В результате взрыва железный стержень, как ракета, попал прямо ему в череп, вошёл под левую скулу и вышел через макушку головы, приземлившись на расстоянии 80 футов.\n\nУдивительно, но Гейдж не умер. Через несколько минут он пришел в сознание, мог ходить и говорить. Местный врач, доктор Джон Харлоу, обработал ужасную рану. Гейдж физически выздоровел в течение следующих месяцев, но что-то фундаментальное изменилось.\n\nДо аварии Гейджа описывали как надежного, уравновешенного и проницательного бизнесмена — «самого эффективного и способного мастера». После этого его личность стала неузнаваемой. Он стал нечестивцем, импульсивным, неуважительным и неспособным довести до конца свои планы. Друзья сказали, что он «больше не Гейдж».\n\nЕго случай стал одним из самых важных в истории нейробиологии. Это стало первым убедительным доказательством того, что определенные области мозга, особенно префронтальная кора, отвечают за личность, принятие решений и социальное поведение. Современная нейровизуализация подтвердила, что стержень разрушил большую часть его левой лобной доли, особенно области, участвующие в эмоциональной регуляции и планировании.",
    "titleAz": "Phineas Gage-nin Hekayəsi",
    "contentAz": "13 sentyabr 1848-ci ildə 25 yaşlı Phineas Gage Vermont ştatının Cavendish şəhərində dəmir yolu tikintisi üzrə usta işləyirdi. Onun ekipajı yeni dəmir yolu relsləri üçün cığır açmaq üçün qaya partladıb. Gage-nin işi xüsusi hazırlanmış dəmir çubuqdan istifadə edərək qazılmış deliklərə partlayıcı toz yığmaq idi - 43 düym uzunluğunda, 1,25 düym diametrdə və 13 funtdan çox ağırlığında.\n\nDiqqətinin dağıldığı bir anda – bəlkə də həmkarı ilə danışmaq üçün çevrildi – Qeyc bufer kimi qum tökülməmişdən əvvəl dəmir çubuğu qayaya vurdu. Toz alovlandı. Partlayış dəmir çubuğu mərmi kimi birbaşa kəllə sümüyündən atıb, sol yanaq sümüyünün altına girib başının yuxarı hissəsindən çıxıb, 80 fut uzaqlığa düşüb.\n\nTəəccüblüdür ki, Gage ölmədi. Bir neçə dəqiqə ərzində huşunu itirdi, yeriyə və danışa bildi. Yerli həkim, doktor Con Harlou dəhşətli yaranı müalicə etdi. Qeyc sonrakı aylarda fiziki cəhətdən sağaldı, lakin əsaslı bir şey dəyişdi.\n\nQəzadan əvvəl Gage etibarlı, balanslı və fərasətli iş adamı - \"ən səmərəli və bacarıqlı usta\" kimi təsvir edilmişdir. Bundan sonra onun şəxsiyyəti tanınmaz hala gəldi. O, murdar, impulsiv, hörmətsiz oldu və planlarını yerinə yetirə bilmədi. Dostları onun \"artıq Gage olmadığını\" söylədilər.\n\nOnun işi nevrologiya tarixinin ən mühüm hadisələrindən birinə çevrildi. Bu, xüsusi beyin bölgələrinin, xüsusən də prefrontal korteksin şəxsiyyət, qərar qəbul etmə və sosial davranış üçün cavabdeh olduğuna dair ilk güclü sübut təqdim etdi. Müasir neyroimaging çubuqun onun sol frontal hissəsinin çox hissəsini, xüsusən də emosional tənzimləmə və planlaşdırma ilə məşğul olan sahələri məhv etdiyini təsdiqlədi."
  },
  {
    "id": 3,
    "title": "Little Albert and the White Rat",
    "titleKa": "პატარა ალბერტი და თეთრი ვირთხა",
    "chapterId": 6,
    "icon": "mdi:emoticon-cry-outline",
    "content": "In 1920, John B. Watson and Rosalie Rayner conducted one of psychology's most controversial experiments at Johns Hopkins University. Their subject was a 9-month-old infant known as \"Little Albert.\"\n\nAlbert was described as a healthy, stable baby who showed no fear of animals. Watson and Rayner presented him with a white laboratory rat, and Albert reached for it with curiosity and delight. He showed the same calm response to a rabbit, a dog, a monkey, masks, and even burning newspapers.\n\nThen the conditioning began. Each time Albert reached for the white rat, Watson struck a steel bar with a hammer directly behind the infant's head, producing a terrifying noise. Albert burst into tears.\n\nAfter just seven pairings of the rat with the loud noise, Albert's behavior had fundamentally changed. Now, the mere sight of the white rat—without any noise—caused him to cry, crawl away rapidly, and show visible distress.\n\nMore remarkably, his fear generalized. Albert became afraid of a rabbit, a dog, a fur coat, a Santa Claus mask with a white beard, and even cotton wool. Anything white and furry triggered the same terror.\n\nWatson and Rayner never \"unconditioned\" Albert's fear. The experiment was stopped when Albert's mother, a wet nurse at the hospital, left with her child. Albert's true identity remained a mystery for decades. Recent research suggests he was Douglas Merritte, who sadly died of hydrocephalus at age six.\n\nThe experiment proved that emotional responses can be learned through classical conditioning. But it also raised profound ethical questions that eventually led to strict research protections for human subjects.",
    "contentKa": "1920 წელს, ჯონ უოტსონმა და როზალი რეინერმა ჩაატარეს ერთ-ერთი ყველაზე საკამათო ექსპერიმენტი. მათ 9 თვის ჩვილს თეთრი ვირთხა აჩვენეს ხმამაულ საშინელ ხმასთან ერთად. 7 დაწყვილების შემდეგ, ალბერტი ვირთხას ხედავდა ხმის გარეშე჊. ეს ექსპერიმენტი ამტკიცებდა, რომ ემოციები შეიძლება სწავლა.",
    "moral": "Fears can be learned through association. This historic experiment also taught us the importance of ethical guidelines in research.",
    "moralKa": "შიშები შეიძლება ასოციაციით სწავლა. ეს ექსპერიმენტი ეთიკური წესების მნიშვნელობასაც გვასწავლა.",
    "moralHy": "Վախերը կարելի է սովորել ընկերակցության միջոցով: Այս պատմական փորձը նաև մեզ սովորեցրեց հետազոտության մեջ էթիկական ուղեցույցների կարևորությունը:",
    "contentHy": "1920թ.-ին Ջոն Բ. Նրանց առարկան 9 ամսական երեխա էր, որը հայտնի էր որպես «Փոքրիկ Ալբերտ»:\n\nԱլբերտը նկարագրվում էր որպես առողջ, կայուն երեխա, ով չէր վախենում կենդանիներից: Ուոթսոնն ու Ռեյները նրան սպիտակ լաբորատոր առնետ նվիրեցին, իսկ Ալբերտը հետաքրքրությամբ ու հրճվանքով ձեռքը մեկնեց նրան։ Նույն հանգիստ արձագանքը նա ցույց տվեց ճագարին, շանը, կապիկին, դիմակներին և նույնիսկ այրվող թերթերին։\n\nՀետո սկսվեց պայմանավորումը։ Ամեն անգամ, երբ Ալբերտը հասնում էր սպիտակ առնետին, Ուոթսոնը մուրճով հարվածում էր պողպատե ձողին անմիջապես երեխայի գլխի հետևում՝ առաջացնելով սարսափելի աղմուկ: Ալբերտը լաց եղավ։\n\nԸնդամենը յոթ զույգ առնետի բարձր աղմուկից հետո Ալբերտի պահվածքը հիմնովին փոխվել էր։ Այժմ սպիտակ առնետի միայն տեսարանը՝ առանց որևէ աղմուկի, ստիպեց նրան լաց լինել, արագ սողալով հեռանալ և տեսանելի անհանգստություն ցույց տալ։\n\nԱվելի ուշագրավ է, որ նրա վախն ընդհանրացավ։ Ալբերտը վախեցավ նապաստակից, շնից, մուշտակից, սպիտակ մորուքով Ձմեռ պապի դիմակից և նույնիսկ բամբակյա բուրդից։ Ցանկացած սպիտակ և մորթե բան առաջացրել է նույն սարսափը:\n\nՈւոթսոնն ու Ռեյները երբեք «անվերապահ» ​​չեն արել Ալբերտի վախը։ Փորձը դադարեցվեց, երբ Ալբերտի մայրը՝ հիվանդանոցի թաց բուժքույրը, հեռացավ իր երեխայի հետ։ Ալբերտի իրական ինքնությունը տասնամյակներ շարունակ առեղծված մնաց: Վերջին հետազոտությունները ցույց են տալիս, որ նա Դուգլաս Մերիտն էր, որը, ցավոք, մահացել է հիդրոցեֆալուսից վեց տարեկանում:\n\nՓորձը ապացուցեց, որ հուզական արձագանքները կարելի է սովորել դասական պայմանավորման միջոցով: Բայց այն նաև բարձրացրեց խորը բարոյական հարցեր, որոնք ի վերջո հանգեցրին մարդկային սուբյեկտների խիստ հետազոտական ​​պաշտպանությանը:",
    "titleAz": "Balaca Albert və Ağ Siçovul",
    "moralAz": "Qorxular birləşmə yolu ilə öyrənilə bilər. Bu tarixi təcrübə bizə tədqiqatda etik qaydaların vacibliyini də öyrətdi.",
    "titleRu": "Маленький Альберт и Белая Крыса",
    "moralRu": "Страхам можно научиться через ассоциации. Этот исторический эксперимент также научил нас важности этических принципов в исследованиях.",
    "titleHy": "Փոքրիկ Ալբերտը և Սպիտակ առնետը",
    "contentRu": "В 1920 году Джон Б. Уотсон и Розали Рейнер провели один из самых противоречивых экспериментов в области психологии в Университете Джона Хопкинса. Их объектом был 9-месячный ребенок, известный как «Маленький Альберт».\n\nАльберта описывали как здорового, стабильного ребенка, который не боялся животных. Уотсон и Рейнер подарили ему белую лабораторную крысу, и Альберт с любопытством и восторгом потянулся за ней. Он одинаково спокойно реагировал на кролика, собаку, обезьяну, маски и даже горящие газеты.\n\nПотом началось кондиционирование. Каждый раз, когда Альберт тянулся к белой крысе, Ватсон ударял молотком по стальному стержню прямо за головой младенца, производя ужасающий шум. Альберт расплакался.\n\nВсего после семи спариваний крыс с громким шумом поведение Альберта коренным образом изменилось. Теперь один лишь вид белой крысы – без всякого шума – заставлял его плакать, быстро уползать и проявлять видимое беспокойство.\n\nЧто еще более примечательно, его страх распространился. Альберт стал бояться кролика, собаки, шубы, маски Деда Мороза с белой бородой и даже ваты. Все белое и пушистое вызывало тот же ужас.\n\nУотсон и Рейнер никогда не «обезусловливали» страх Альберта. Эксперимент был остановлен, когда мать Альберта, кормилица в больнице, ушла с ребенком. Настоящая личность Альберта оставалась загадкой на протяжении десятилетий. Недавние исследования показывают, что это был Дуглас Мерритт, который, к сожалению, умер от гидроцефалии в возрасте шести лет.\n\nЭксперимент доказал, что эмоциональным реакциям можно научиться с помощью классической обусловленности. Но это также подняло глубокие этические вопросы, которые в конечном итоге привели к строгой защите исследований на людях.",
    "contentAz": "1920-ci ildə John B. Watson və Rosalie Rayner Con Hopkins Universitetində psixologiyanın ən mübahisəli təcrübələrindən birini həyata keçirdilər. Onların mövzusu \"Balaca Albert\" kimi tanınan 9 aylıq körpə idi.\n\nAlbert heyvanlardan qorxmayan sağlam, sabit bir körpə kimi təsvir edilmişdir. Watson və Rayner ona ağ laboratoriya siçovulunu təqdim etdi və Albert maraq və zövqlə ona çatdı. Dovşana, itə, meymuna, maskalara, hətta yanan qəzetlərə də eyni sakit cavabı göstərdi.\n\nSonra kondisioner başladı. Albert hər dəfə ağ siçovula çatanda, Uotson körpənin başının arxasındakı çəkiclə polad çubuqla vurur və dəhşətli səs çıxarırdı. Albert göz yaşlarına boğuldu.\n\nYüksək səs-küylə siçovulların cəmi yeddi cütləşməsindən sonra Albertin davranışı kökündən dəyişdi. İndi ağ siçovulun sadəcə görünüşü - heç bir səs-küy olmadan - onun ağlamasına, sürətlə sürünməsinə və görünən sıxıntı göstərməsinə səbəb oldu.\n\nDaha maraqlısı, onun qorxusu ümumiləşdi. Albert dovşandan, itdən, xəz paltodan, ağ saqqallı Şaxta baba maskasından, hətta pambıq yundan qorxmağa başladı. Ağ və tüklü hər şey eyni qorxuya səbəb olurdu.\n\nWatson və Rayner heç vaxt Albertin qorxusunu \"şərtsiz\" qoymurlar. Xəstəxanada yaş tibb bacısı olan Albertin anası uşağı ilə birlikdə getdikdə təcrübə dayandırıldı. Albertin əsl şəxsiyyəti onilliklər ərzində sirr olaraq qaldı. Son araşdırmalar onun 6 yaşında hidrosefalidən vəfat edən Douglas Merritte olduğunu göstərir.\n\nTəcrübə sübut etdi ki, emosional reaksiyalar klassik kondisioner vasitəsilə öyrənilə bilər. Lakin bu, həm də dərin etik suallar doğurdu ki, nəticədə insan subyektləri üçün ciddi tədqiqat qorunmasına səbəb oldu."
  },
  {
    "id": 4,
    "title": "The Invisible Gorilla",
    "titleKa": "უხილავი გორილა",
    "chapterId": 4,
    "icon": "mdi:eye-off-outline",
    "content": "In 1999, psychologists Daniel Simons and Christopher Chabris designed an experiment that would challenge our most basic assumptions about awareness. They asked participants to watch a short video of six people—three in white shirts, three in black—passing basketballs to each other.\n\nThe task was simple: count the number of passes made by the white-shirted team. Participants focused intently, tracking each throw.\n\nHalfway through the video, something extraordinary happened. A person in a full gorilla costume walked slowly into the center of the frame, faced the camera, thumped its chest, and walked out. The gorilla was visible for a full nine seconds.\n\nWhen asked afterward, roughly half the participants had absolutely no idea a gorilla had appeared. They were shocked when shown the video again. Some refused to believe it was the same video.\n\nThe experiment demonstrated what Simons and Chabris called \"inattentional blindness\"—the failure to notice fully visible but unexpected objects when our attention is focused elsewhere. It's not that our eyes didn't see the gorilla; our brain simply didn't process it because it wasn't relevant to the counting task.\n\nThis research has profound real-world implications. Radiologists can miss tumors on X-rays when focused on something else. Drivers may not see pedestrians when distracted. Eyewitnesses miss critical details during crimes.\n\nThe invisible gorilla reminds us that seeing and noticing are two fundamentally different cognitive processes, and that our confident sense of awareness is largely an illusion.",
    "contentKa": "1999 წელს, ფსიქოლოგებმა მონაწილეებს სთხოვეს ვიდეოში ბასკეტბოლის გადაცემების დათვლა დაევალა. ვიდეოში გორილას კოსტიუმში გამოწყობილი ადამიანი გაიარა, მაგრამ მონაწილეების ნახევარმა ვერ შენიშნა. ეს აჩვენებს, რომ წენა და შემჩნევა სრულიად განსხვავებული პროცესებია.",
    "moral": "Our attention is far more limited than we think. We can look directly at something and still fail to see it if our focus is elsewhere.",
    "moralKa": "ჩვენი ყურადღება გაცილებით უფრო შეზღუდულია, ვიდრე გვგონია.",
    "titleHy": "Անտեսանելի գորիլա",
    "titleRu": "Невидимая горилла",
    "titleAz": "Görünməz Qorilla",
    "moralHy": "Մեր ուշադրությունը շատ ավելի սահմանափակ է, քան կարծում ենք։ Մենք կարող ենք ուղղակիորեն նայել ինչ-որ բանի և դեռևս չտեսնել այն, եթե մեր ուշադրությունը այլ տեղ է:",
    "moralAz": "Diqqətimiz düşündüyümüzdən daha məhduddur. Biz bir şeyə birbaşa baxa bilərik və diqqətimiz başqa yerdədirsə, hələ də onu görə bilmirik.",
    "moralRu": "Наше внимание гораздо более ограничено, чем мы думаем. Мы можем смотреть прямо на что-то и все равно не видеть этого, если наше внимание сосредоточено на чем-то другом.",
    "contentHy": "1999 թվականին հոգեբաններ Դենիել Սայմոնսը և Քրիստոֆեր Չաբրիսը նախագծեցին մի փորձ, որը կվիճարկի իրազեկման վերաբերյալ մեր ամենահիմնական ենթադրությունները: Նրանք խնդրեցին մասնակիցներին դիտել մի կարճ տեսանյութ, որտեղ վեց հոգի՝ երեքը սպիտակ վերնաշապիկներով, երեքը՝ սև, բասկետբոլի գնդակներ փոխանցեցին միմյանց:\n\nԱռաջադրանքը պարզ էր՝ հաշվել սպիտակաշապիկներով կատարած փոխանցումների քանակը։ Մասնակիցները ուշադրությամբ կենտրոնացան՝ հետևելով յուրաքանչյուր նետմանը:\n\nՏեսանյութի կեսին արտառոց բան տեղի ունեցավ. Ամբողջ գորիլայի հագուստով անձը դանդաղ քայլեց դեպի կադրի կենտրոնը, դեմքով դեպի տեսախցիկը հարվածեց նրա կրծքին և դուրս եկավ: Գորիլան տեսանելի էր ամբողջ ինը վայրկյան:\n\nԵրբ հարցրին, մասնակիցների մոտավորապես կեսը բացարձակապես չէր պատկերացնում, որ գորիլա է հայտնվել: Նրանք շոկի մեջ էին, երբ նորից ցուցադրեցին տեսանյութը։ Ոմանք հրաժարվեցին հավատալ, որ դա նույն տեսանյութն է:\n\nՓորձը ցույց տվեց այն, ինչ Սիմոնսը և Չաբրիսը անվանեցին «անուշադիր կուրություն»՝ լիովին տեսանելի, բայց անսպասելի առարկաներ չնկատելու, երբ մեր ուշադրությունը կենտրոնացած է այլ տեղ: Այնպես չէ, որ մեր աչքերը չեն տեսել գորիլան. մեր ուղեղը պարզապես չի մշակել այն, քանի որ այն չի համապատասխանում հաշվելու առաջադրանքին:\n\nԱյս հետազոտությունը խորը ազդեցություն ունի իրական աշխարհի վրա: Ռադիոլոգները կարող են բաց թողնել ուռուցքները ռենտգենյան ճառագայթների վրա, երբ կենտրոնացած են այլ բանի վրա: Վարորդները կարող են չտեսնել հետիոտներին, երբ շեղվում են: Հանցագործությունների ժամանակ ականատեսները բաց են թողնում կարևոր մանրամասները.\n\nԱնտեսանելի գորիլան հիշեցնում է մեզ, որ տեսնելն ու նկատելը երկու սկզբունքորեն տարբեր ճանաչողական գործընթացներ են, և որ գիտակցության մեր վստահ զգացումը մեծ մասամբ պատրանք է:",
    "contentRu": "В 1999 году психологи Дэниел Саймонс и Кристофер Шабрис разработали эксперимент, который бросит вызов нашим самым базовым представлениям об осознанности. Они попросили участников посмотреть короткое видео, в котором шесть человек (трое в белых рубашках и трое в черных) передают друг другу баскетбольные мячи.\n\nЗадача была простая: подсчитать количество передач, сделанных белорубашечной командой. Участники сосредоточились, отслеживая каждый бросок.\n\nВ середине видео произошло нечто экстраординарное. Человек в полном костюме гориллы медленно вошел в центр кадра, повернулся к камере, постучал себя в грудь и вышел. Гориллу было видно целых девять секунд.\n\nКогда их спросили позже, примерно половина участников понятия не имела о появлении гориллы. Они были шокированы, когда им снова показали видео. Некоторые отказывались верить, что это одно и то же видео.\n\nЭксперимент продемонстрировал то, что Саймонс и Шабри назвали «слепотой по невнимательности» — неспособностью замечать полностью видимые, но неожиданные объекты, когда наше внимание сосредоточено в другом месте. Дело не в том, что наши глаза не видели гориллу; наш мозг просто не обработал это, потому что это не имело отношения к задаче подсчета.\n\nЭто исследование имеет глубокие практические последствия. Радиологи могут не заметить опухоли на рентгеновских снимках, если сосредоточивают внимание на чем-то другом. Водители могут не видеть пешеходов, когда отвлекаются. Очевидцы упускают важные детали во время преступлений.\n\nНевидимая горилла напоминает нам, что видение и замечание — это два фундаментально разных когнитивных процесса и что наше уверенное чувство осознания — во многом иллюзия.",
    "contentAz": "1999-cu ildə psixoloqlar Daniel Simons və Christopher Chabris, şüurla bağlı ən əsas fərziyyələrimizə etiraz edəcək bir təcrübə hazırladılar. Onlar iştirakçılardan altı nəfərin – üçü ağ köynəkdə, üçü qara paltarda – basketbol toplarını bir-birinə ötürdükləri qısa videoya baxmağı xahiş etdilər.\n\nTapşırıq sadə idi: ağ köynəkli komandanın ötürmələrinin sayını hesablayın. İştirakçılar hər bir atışı izləyərək diqqətlərini cəmlədilər.\n\nVideonun yarısında qeyri-adi bir şey baş verdi. Tam qorilla kostyumunda olan bir şəxs yavaş-yavaş kadrın mərkəzinə daxil oldu, kameraya üz tutdu, sinəsini döydü və çıxıb getdi. Qorilla tam doqquz saniyə göründü.\n\nDaha sonra soruşduqda, iştirakçıların təxminən yarısı qorillanın peyda olması barədə heç bir fikri yox idi. Videonu yenidən nümayiş etdirəndə şoka düşüblər. Bəziləri bunun eyni video olduğuna inanmaqdan imtina etdi.\n\nTəcrübə Simons və Çabrisin \"diqqətsiz korluq\" adlandırdıqlarını nümayiş etdirdi - diqqətimiz başqa yerə yönəldildiyində tamamilə görünən, lakin gözlənilməz cisimlərin fərqinə varmamaq. Bu, gözlərimizin qorilla görməməsi deyil; bizim beynimiz sadəcə onu emal etmədi, çünki sayma tapşırığına uyğun deyildi.\n\nBu tədqiqatın real dünya üçün dərin təsirləri var. Rentgenoloqlar başqa bir şeyə diqqət yetirdikdə X-şüalarında şişləri əldən verə bilərlər. Sürücülər diqqəti yayındırdıqda piyadaları görməyə bilər. Şahidlər cinayətlər zamanı kritik detalları qaçırırlar.\n\nGözəgörünməz qorilla bizə xatırladır ki, görmək və fərq etmək iki kökündən fərqli idrak prosesidir və bizim inamlı dərketmə duyğumuz əsasən illüziyadır."
  },
  {
    "id": 5,
    "title": "Harlow's Monkeys and the Need for Love",
    "titleKa": "ჰარლოუს მაიმუნები და სიყვარულის საჭიროება",
    "chapterId": 9,
    "icon": "mdi:heart-outline",
    "content": "In the 1950s and 60s, psychologist Harry Harlow conducted experiments at the University of Wisconsin that would forever change our understanding of love and attachment. At the time, the prevailing view—promoted by behaviorists like Watson—was that infants bonded with mothers primarily because mothers provided food.\n\nHarlow challenged this assumption by separating infant rhesus monkeys from their biological mothers and giving them two surrogate \"mothers.\" One was made of bare wire mesh with a feeding bottle attached. The other was made of soft terry cloth with no food source.\n\nIf the behaviorists were right, the babies should have preferred the wire mother who provided nourishment. But that's not what happened.\n\nThe infant monkeys spent nearly all their time clinging to the soft cloth mother. They went to the wire mother only briefly to feed, then immediately returned to the cloth surrogate. When frightened by a mechanical spider or other threats, they ran to the cloth mother for comfort, clinging desperately.\n\nEven more telling: monkeys raised with only the wire mother developed severe psychological problems. They rocked back and forth, showed signs of depression, were aggressive, and had difficulty socializing with other monkeys. Those with the cloth mother, while not perfectly adjusted, were significantly healthier emotionally.\n\nLater experiments showed that monkeys deprived of all maternal contact became profoundly disturbed as adults—unable to parent their own offspring, some refusing to nurse or even harming their babies.\n\nHarlow's work, though ethically controversial by today's standards, provided irrefutable evidence that emotional comfort, touch, and security are as fundamental as food and water for healthy development.",
    "contentKa": "1950-60-იან წლებში, ჰარი ჰარლოუმა ექსპერიმენტები ჩაატარა რეზუსის მაიმუნებზე. მან ჩვილებს ორი სუროგატი დედა მისცა: მავთულხავლოვანი საკვებით და რბილი ქსოვილიანი საკვების გარეშე. ჩვილებმა რბილ დედა აირჩიეს—ემოციური კომფორტი საკვებზე მნიშვნელოვანია.",
    "moral": "Love, comfort, and physical touch are fundamental needs that shape healthy development—not luxuries, but biological necessities.",
    "moralKa": "სიყვარული, კომფორტი და ფიზიკური შეხება ფუნდამენტური საჭიროებებია ჯანსაღი განვითარებისთვის.",
    "titleHy": "Հարլոուի կապիկները և սիրո կարիքը",
    "moralHy": "Սերը, հարմարավետությունը և ֆիզիկական հպումը հիմնարար կարիքներ են, որոնք ձևավորում են առողջ զարգացումը՝ ոչ թե շքեղություն, այլ կենսաբանական անհրաժեշտություն:",
    "moralAz": "Sevgi, rahatlıq və fiziki toxunma sağlam inkişafı formalaşdıran əsas ehtiyaclardır - lüks deyil, bioloji ehtiyaclar.",
    "moralRu": "Любовь, комфорт и физическое прикосновение — это фундаментальные потребности, которые формируют здоровое развитие — не роскошь, а биологические потребности.",
    "titleRu": "Обезьяны Харлоу и потребность в любви",
    "contentHy": "1950-ականներին և 60-ականներին հոգեբան Հարրի Հարլոուն Վիսկոնսինի համալսարանում անցկացրեց փորձեր, որոնք ընդմիշտ կփոխեին մեր պատկերացումները սիրո և կապվածության մասին: Այն ժամանակ գերակշռող տեսակետը, որը տարածվում էր Ուոթսոնի նման վարքագծողների կողմից, այն էր, որ նորածինները կապված են մայրերի հետ հիմնականում այն ​​պատճառով, որ մայրերը սնունդ են մատակարարում:\n\nՀարլոուն վիճարկել է այս ենթադրությունը՝ առանձնացնելով մանկական ռեզուս կապիկներին իրենց կենսաբանական մայրերից և նրանց տալով երկու փոխնակ «մայրեր»: Մեկը պատրաստված էր մերկ մետաղական ցանցից, որի վրա դրված էր կերակրման շիշ: Մյուսը պատրաստված էր փափուկ կտորից, առանց սննդի աղբյուրի:\n\nԵթե ​​վարքագծերը ճիշտ էին, երեխաները պետք է նախընտրեին սնուցող մորը: Բայց այդպես չի եղել:\n\nՆորածին կապիկները գրեթե ամբողջ ժամանակ անցկացնում էին փափուկ կտորի մորից կառչելով: Նրանք գնացին մետաղալար մոր մոտ միայն կարճ ժամանակով կերակրելու, հետո անմիջապես վերադարձան կտորի փոխնակին: Երբ վախեցան մեխանիկական սարդից կամ այլ սպառնալիքներից, նրանք վազեցին կտորե մոր մոտ մխիթարության համար՝ հուսահատ կառչելով։\n\nՆույնիսկ ավելի խոսուն. կապիկները, որոնք մեծացել են միայն մետաղյա մոր հետ, ծանր հոգեբանական խնդիրներ են ունեցել: Նրանք օրորվում էին հետ ու առաջ, ցույց էին տալիս դեպրեսիայի նշաններ, ագրեսիվ էին և դժվարությամբ էին շփվում այլ կապիկների հետ։ Նրանք, ովքեր շորով մոր հետ, թեև կատարյալ հարմարեցված չէին, էմոցիոնալ առումով զգալիորեն ավելի առողջ էին:\n\nԱվելի ուշ փորձերը ցույց տվեցին, որ կապիկները, որոնք զրկված էին մայրական կապից, մեծ անհանգստություն էին զգում մեծահասակների շրջանում՝ չկարողանալով դաստիարակել իրենց սերունդներին, ոմանք հրաժարվում էին կերակրել կամ նույնիսկ վնասում իրենց երեխաներին։\n\nՀարլոուի աշխատանքը, թեև այսօրվա չափանիշներով էթիկապես հակասական է, սակայն անհերքելի ապացույցներ է տվել, որ էմոցիոնալ հարմարավետությունը, հպումը և անվտանգությունը նույնքան կարևոր են, որքան սնունդն ու ջուրը առողջ զարգացման համար:",
    "contentRu": "В 1950-х и 60-х годах психолог Гарри Харлоу проводил в Университете Висконсина эксперименты, которые навсегда изменили наше понимание любви и привязанности. В то время преобладала точка зрения, которую продвигали такие бихевиористы, как Уотсон, что младенцы связаны с матерями прежде всего потому, что матери обеспечивают их едой.\n\nХарлоу бросила вызов этому предположению, отделив детенышей макак-резус от их биологических матерей и дав им двух суррогатных «матерей». Один был сделан из голой проволочной сетки с прикрепленной бутылочкой для кормления. Другой был сделан из мягкой махровой ткани без источника питания.\n\nЕсли бы бихевиористы были правы, младенцы должны были бы предпочесть проволочную мать, которая обеспечивала бы питание. Но это не то, что произошло.\n\nДетеныши обезьян почти все время проводили, цепляясь за мягкую материю. К проволочной матери они ходили ненадолго, чтобы покормить, а затем сразу же возвращались к тканевой суррогатной матери. Напуганные механическим пауком или другими угрозами, они бежали к тканевой матери в поисках утешения, отчаянно цепляясь за нее.\n\nЕще более показательно: у обезьян, выросших только с проволочной матерью, возникли серьезные психологические проблемы. Они раскачивались взад и вперед, проявляли признаки депрессии, были агрессивны и с трудом общались с другими обезьянами. Те, у кого была тканевая мать, хотя и не были идеально приспособлены, были значительно здоровее эмоционально.\n\nБолее поздние эксперименты показали, что обезьяны, лишенные всякого контакта с матерью, повзрослев, стали глубоко обеспокоены: они не могли воспитывать собственное потомство, некоторые отказывались кормить своих детей грудью или даже причиняли им вред.\n\nРабота Харлоу, хотя и противоречивая с этической точки зрения по сегодняшним стандартам, предоставила неопровержимые доказательства того, что эмоциональный комфорт, прикосновения и безопасность так же важны для здорового развития, как еда и вода.",
    "titleAz": "Harlow meymunları və sevgi ehtiyacı",
    "contentAz": "1950-60-cı illərdə psixoloq Harri Harlou Viskonsin Universitetində sevgi və bağlılıq anlayışımızı həmişəlik dəyişəcək təcrübələr apardı. O vaxtlar, Watson kimi davranışçılar tərəfindən irəli sürülən, üstünlük təşkil edən fikir, körpələrin analarla ilk növbədə qida təmin etdiyi üçün bağlanması idi.\n\nHarlou körpə rhesus meymunlarını bioloji analarından ayıraraq və onlara iki surroqat \"ana\" verərək bu fərziyyəyə qarşı çıxdı. Biri qida şüşəsi əlavə edilmiş çılpaq məftildən hazırlanmışdı. Digəri isə qida mənbəyi olmayan yumşaq terri parçadan hazırlanmışdı.\n\nDavranışçılar haqlı olsaydılar, körpələr qida verən tel anaya üstünlük verməli idilər. Amma belə olmadı.\n\nKörpə meymunlar demək olar ki, bütün vaxtlarını yumşaq parça anasına yapışaraq keçirirdilər. Onlar qidalandırmaq üçün yalnız qısa müddətə tel anaya getdilər, sonra dərhal parça surroqatına qayıtdılar. Mexanik hörümçək və ya digər təhdidlərdən qorxduqda, çarəsizcə yapışaraq rahatlıq üçün parça anasına qaçdılar.\n\nDaha çox izah edən: yalnız tel ana ilə böyüdülən meymunlarda ciddi psixoloji problemlər yarandı. Onlar irəli-geri yellənirdilər, depressiya əlamətləri göstərirdilər, aqressiv idilər və digər meymunlarla ünsiyyət qurmaqda çətinlik çəkirdilər. Paltarlı anası olanlar, mükəmməl uyğunlaşmasalar da, emosional cəhətdən əhəmiyyətli dərəcədə sağlam idilər.\n\nSonrakı təcrübələr göstərdi ki, ana ilə hər cür təmasdan məhrum olan meymunlar böyüklər kimi çox narahat olurlar - öz övladlarını yetişdirə bilmirlər, bəziləri süd verməkdən boyun qaçırır və hətta körpələrinə zərər verirdilər.\n\nHarlowun işi, bugünkü standartlara görə etik cəhətdən mübahisəli olsa da, emosional rahatlığın, toxunmanın və təhlükəsizliyin sağlam inkişaf üçün qida və su qədər əsas olduğuna dair təkzibedilməz sübutlar təqdim etdi."
  },
  {
    "id": 6,
    "title": "The Marshmallow Test",
    "titleKa": "მარშმელოუს ტესტი",
    "chapterId": 10,
    "icon": "mdi:cookie-outline",
    "content": "In the late 1960s and early 1970s, Stanford psychologist Walter Mischel began a deceptively simple experiment. He brought preschool children, typically 4 to 5 years old, into a room one at a time. On the table sat a single marshmallow (or cookie or pretzel—the child could choose their preferred treat).\n\nThe researcher told the child: \"You can eat this marshmallow right now. But if you wait until I come back, you can have two marshmallows instead.\" Then the researcher left the room for about 15 minutes.\n\nHidden cameras recorded what happened next, and the footage became some of psychology's most delightful viewing. Some children ate the marshmallow the instant the door closed. Others tried creative strategies: covering their eyes, turning around, singing to themselves, petting the marshmallow like a tiny animal, or licking it and putting it back.\n\nAbout one-third of the children managed to wait the full 15 minutes. Two-thirds could not resist.\n\nYears later, Mischel followed up with the children—now teenagers and adults. The results were striking. Children who had waited longer scored significantly higher on SATs (210 points higher on average), were described as more competent by parents, handled stress better, were less likely to abuse substances, and maintained healthier body weights.\n\nFollow-up studies spanning four decades showed that the ability to delay gratification in childhood predicted better outcomes across nearly every measure of life success.\n\nHowever, later research has added nuance. A 2018 study by Tyler Watts showed that socioeconomic factors and home environment strongly influence the ability to delay gratification—children from stable, resource-rich homes may simply have more reason to trust that the second marshmallow will actually appear.",
    "contentKa": "1960-70-\u10D8\u10D0\u10DC \u10EC\u10DA\u10D4\u10D1\u10E8\u10D8, \u10E1\u10E2\u10D4\u10DC\u10E4\u10DD\u10E0\u10D3\u10D8\u10E1 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10DB\u10D0 \u10E3\u10DD\u10DA\u10E2\u10D4\u10E0 \u10DB\u10D8\u10E8\u10D4\u10DA\u10DB\u10D0 \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10E1 \u10DB\u10D0\u10E0\u10E2\u10D8\u10D5\u10D8 \u10D0\u10E0\u10E9\u10D4\u10D5\u10D0\u10DC\u10D8\u10E1 \u10EC\u10D8\u10DC\u10D0\u10E8\u10D4 \u10D3\u10D0\u10D0\u10E7\u10D4\u10DC\u10D0: \u10E8\u10D4\u10EC\u10D0\u10DB\u10D4 \u10D0\u10EE\u10DA\u10D0 \u10D0\u10DC \u10D3\u10D0\u10D4\u10DA\u10DD\u10D3\u10DD \u10D3\u10D0 \u10DD\u10E0\u10D8 \u10DB\u10D8\u10D8\u10E6\u10DD. \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10D8\u10E1 1/3-\u10DB\u10D0 \u10DB\u10DD\u10D8\u10D7\u10DB\u10D8\u10DC\u10D0 15 \u10EC\u10E3\u10D7\u10D8. \u10D0\u10D7\u10EC\u10DA\u10D4\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10D0\u10E6\u10DB\u10DD\u10E9\u10DC\u10D3\u10D0, \u10E0\u10DD\u10DB \u10DB\u10DD\u10D7\u10DB\u10D8\u10DC\u10D4 \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10E1 \u10E3\u10D9\u10D4\u10D7\u10D4\u10E1\u10D8 \u10E8\u10D4\u10D3\u10D4\u10D2\u10D4\u10D1\u10D8 \u10F0\u10E5\u10DD\u10DC\u10D3\u10D0\u10D7 \u10EA\u10EE\u10DD\u10D5\u10E0\u10D4\u10D1\u10D0\u10E8\u10D8.",
    "moral": "Delayed gratification is a powerful predictor of life success, though environment and trust also play critical roles.",
    "moralKa": "\u10D3\u10D0\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D3\u10D0\u10D9\u10DB\u10D0\u10E7\u10DD\u10E4\u10D8\u10DA\u10D4\u10D1\u10D0 \u10EA\u10EE\u10DD\u10D5\u10E0\u10D4\u10D1\u10D8\u10E1 \u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10E1 \u10EB\u10DA\u10D8\u10D4\u10E0\u10D8 \u10DE\u10E0\u10DD\u10D2\u10DC\u10DD\u10D6\u10D0\u10E2\u10DD\u10E0\u10D8\u10D0.",
    "titleAz": "Marshmallow Testi",
    "contentRu": "В конце 1960-х — начале 1970-х годов психолог из Стэнфорда Уолтер Мишель начал обманчиво простой эксперимент. Он приводил детей дошкольного возраста, обычно от 4 до 5 лет, по одному в комнату. На столе лежал зефир (или печенье, или крендель — ребенок мог выбрать лакомство по своему вкусу).\n\nИсследователь сказал ребенку: «Ты можешь съесть этот зефир прямо сейчас. Но если подождешь, пока я вернусь, вместо этого ты сможешь съесть два зефира». Затем исследователь вышел из комнаты примерно на 15 минут.\n\nСкрытые камеры записали то, что произошло дальше, и отснятый материал стал одним из самых восхитительных фильмов в истории психологии. Некоторые дети съели зефир сразу же, как закрылась дверь. Другие пробовали творческие стратегии: закрывали глаза, поворачивались, напевали про себя, гладили зефир, как крошечного зверька, или облизывали его и клали обратно.\n\nОколо трети детей удалось прождать полные 15 минут. Две трети не смогли устоять.\n\nСпустя годы Мишель последовал за детьми — теперь уже подростками и взрослыми. Результаты были поразительными. Дети, которые ждали дольше, набрали значительно более высокие баллы по SAT (в среднем на 210 баллов выше), родители описывали их как более компетентных, лучше справлялись со стрессом, реже злоупотребляли психоактивными веществами и поддерживали более здоровый вес тела.\n\nПоследующие исследования, охватывающие четыре десятилетия, показали, что способность откладывать удовлетворение в детстве предсказывает лучшие результаты почти по всем показателям жизненного успеха.\n\nОднако более поздние исследования добавили нюансов. Исследование Тайлера Уоттса, проведенное в 2018 году, показало, что социально-экономические факторы и домашняя обстановка сильно влияют на способность откладывать удовлетворение — у детей из стабильных, богатых ресурсами семей просто может быть больше оснований верить в то, что второй зефир действительно появится.",
    "contentAz": "1960-cı illərin sonu və 1970-ci illərin əvvəllərində Stenford psixoloqu Valter Mişel aldadıcı sadə təcrübəyə başladı. O, adətən 4-5 yaşlı məktəbəqədər uşaqları bir-bir otağa gətirirdi. Masada tək zefir (yaxud peçenye və ya simit - uşaq öz istədiyi yeməyi seçə bilər) oturdu.\n\nTədqiqatçı uşağa deyib: \"Bu zefiri indi yeyə bilərsiniz. Amma mən qayıdana qədər gözləsəniz, onun yerinə iki zefir yeyə bilərsiniz\". Sonra tədqiqatçı təxminən 15 dəqiqə otağı tərk etdi.\n\nGizli kameralar sonra baş verənləri qeyd etdi və görüntülər psixologiyanın ən ləzzətli baxışlarından biri oldu. Bəzi uşaqlar qapı bağlanan kimi zefiri yedilər. Digərləri yaradıcı strategiyaları sınadılar: gözlərini örtdülər, ətrafa çevrildilər, öz-özünə mahnı oxudular, zefiri kiçik bir heyvan kimi oxşadılar və ya yalayıb geri qoydular.\n\nUşaqların təxminən üçdə biri tam 15 dəqiqə gözləməyi bacarıb. Üçdə ikisi müqavimət göstərə bilmədi.\n\nİllər sonra Mişel uşaqları - indi yeniyetmələr və böyüklər kimi izlədi. Nəticələr təəccüblü idi. Daha çox gözləyən uşaqlar SAT-da əhəmiyyətli dərəcədə yüksək bal topladılar (orta hesabla 210 bal daha yüksək), valideynlər tərəfindən daha bacarıqlı, streslə daha yaxşı mübarizə aparan, maddələrdən sui-istifadə etmə ehtimalı az idi və bədən çəkilərini daha sağlam saxladılar.\n\nQırx onillikləri əhatə edən təqib tədqiqatları göstərdi ki, uşaqlıqda həzzi gecikdirmək bacarığı, demək olar ki, hər bir həyat uğuru ölçüsündə daha yaxşı nəticələri proqnozlaşdırır.\n\nBununla belə, sonrakı araşdırmalar bir nüans əlavə etdi. Tyler Watts tərəfindən 2018-ci ildə aparılan bir araşdırma göstərdi ki, sosial-iqtisadi amillər və ev mühiti məmnuniyyəti gecikdirmək qabiliyyətinə güclü təsir göstərir - sabit, resursla zəngin evlərdən olan uşaqların ikinci zefirin həqiqətən görünəcəyinə inanmaq üçün daha çox səbəbi ola bilər."
  },
  {
    "id": 7,
    "title": "Kitty Genovese and Bystander Apathy",
    "titleKa": "კიტი ჯენოვეზე და თვალთმხილველის აპათია",
    "chapterId": 12,
    "icon": "mdi:account-alert-outline",
    "content": "On March 13, 1964, 28-year-old Catherine \"Kitty\" Genovese was returning to her apartment in Kew Gardens, Queens, New York, at about 3:15 AM after finishing her shift as a bar manager. As she walked from her car, she was attacked by Winston Moseley.\n\nKitty screamed for help. Lights went on in the apartment building. A neighbor yelled from a window. Moseley ran away—but returned ten minutes later to attack her again in a stairwell, where he stabbed, robbed, and ultimately killed her.\n\nThe New York Times reported that 38 witnesses watched or heard the attack and did nothing—a claim that became the defining story of urban apathy. The headline shocked the nation.\n\nPsychologists John Darley and Bibb Latané were deeply troubled by the story. Rather than simply condemning the witnesses as uncaring, they hypothesized that the very number of witnesses might have been the problem. They designed a series of experiments to test this.\n\nIn one study, participants were placed in separate rooms and communicated via intercom. When one \"participant\" (actually a recording) simulated having a seizure, those who believed they were the only one who could hear it responded quickly—85% within one minute. But when participants believed four others were also listening, only 31% responded.\n\nDarley and Latané called this the \"bystander effect\"—the finding that the presence of others reduces individual helping behavior through two mechanisms: diffusion of responsibility (\"someone else will help\") and pluralistic ignorance (\"nobody else seems concerned, so it must not be serious\").\n\nNote: Later research revealed that the original Times story was significantly exaggerated—fewer people witnessed the attack than claimed, and some did call police. But the research it inspired has been robustly confirmed.",
    "contentKa": "1964 წელს, კიტი ჯენოვეზე ნიუ-იორკში თავს დასხმულეს დროს მოიკლა. მრავალმა ესმა დაინახა, მაგრამ არავინ დაეხმარა. ფსიქოლოგებმა დარლიმ და ლატანემ აღმოაჩინეს \"თვალთმხილველის ეფექტი\"—რა჊ მეტი ადამიანია დამსწრე, მით ნაკლებად თითოეული დახმარების ალბათობა მცირდება.",
    "moral": "The more people present during an emergency, the less likely any individual is to help—a counterintuitive finding with life-saving implications.",
    "moralKa": "რა჊ მეტი ადამიანი არის საგანგაშო სიტუაციაში, მით ნაკლებადია თითოეულის დახმარება.",
    "titleRu": "Китти Дженовезе и апатия свидетеля",
    "titleHy": "Kitty Genovese և Bystander Apathy",
    "contentHy": "1964 թվականի մարտի 13-ին 28-ամյա Քեթրին «Քիթի» Ջենովեզը վերադառնում էր իր բնակարան Քու Գարդենսում, Քուինս, Նյու Յորք, ժամը 03:15-ին, բարի մենեջերի իր հերթափոխն ավարտելուց հետո: Երբ նա քայլում էր իր մեքենայից, նրա վրա հարձակվեց Ուինսթոն Մոզելին:\n\nՔիթին գոռաց օգնության համար։ Բազմաբնակարան շենքում վառվել են լույսերը. Հարևանը պատուհանից գոռաց. Մոզելին փախավ, բայց տասը րոպե անց վերադարձավ, որպեսզի նորից հարձակվի նրա վրա աստիճաններով, որտեղ նա դանակահարեց, կողոպտեց և ի վերջո սպանեց նրան:\n\nThe New York Times-ը հաղորդում է, որ 38 վկաներ դիտել կամ լսել են հարձակումը և ոչինչ չեն արել, մի պնդում, որը դարձավ քաղաքային ապատիայի որոշիչ պատմությունը: Վերնագիրը ցնցեց ազգին.\n\nՀոգեբաններ Ջոն Դարլին և Բիբ Լատանեն խորապես անհանգստացած էին այս պատմությունից: Վկաներին պարզապես չդատապարտելու փոխարեն՝ նրանք ենթադրեցին, որ խնդիրը կարող էր լինել հենց վկաների թիվը: Նրանք նախագծեցին մի շարք փորձեր՝ դա ստուգելու համար:\n\nՀետազոտություններից մեկում մասնակիցներին տեղավորել են առանձին սենյակներում և հաղորդակցվել ինտերկոմի միջոցով: Երբ «մասնակիցներից մեկը» (իրականում ձայնագրություն) նմանակում էր նոպա ունենալը, նրանք, ովքեր հավատում էին, որ միակն է, ով կարող էր դա լսել, արագ արձագանքեցին՝ 85% մեկ րոպեի ընթացքում: Բայց երբ մասնակիցները կարծում էին, որ ևս չորսը նույնպես լսում են, միայն 31%-ն է պատասխանել:\n\nԴարլին և Լատանեն սա անվանեցին «կողմնակի էֆեկտ»՝ այն բացահայտումը, որ ուրիշների ներկայությունը նվազեցնում է անհատական ​​օգնության վարքագիծը երկու մեխանիզմների միջոցով՝ պատասխանատվության բաշխում («ուրիշը կօգնի») և բազմակարծիք տգիտություն («ուրիշ ոչ ոք մտահոգված չէ, ուստի այն չպետք է լուրջ լինի»):\n\nՆշում. Հետագայում հետազոտությունները պարզեցին, որ Times-ի սկզբնական պատմությունը զգալիորեն ուռճացված էր. ավելի քիչ մարդիկ են ականատես եղել հարձակմանը, քան պնդում էին, իսկ ոմանք էլ ոստիկանություն են կանչել: Բայց նրա կողմից ոգեշնչված հետազոտությունը հաստատապես հաստատվել է:",
    "titleAz": "Kitty Genovese və Bystander Apatiyası",
    "contentAz": "13 mart 1964-cü ildə 28 yaşlı Catherine \"Kitty\" Genovese bar meneceri kimi növbəsini bitirdikdən sonra təxminən saat 3:15-də Nyu-Yorkun Kvins ştatındakı Kew Gardensdəki mənzilinə qayıdırdı. O, avtomobilindən gedərkən Uinston Mozilinin hücumuna məruz qalıb.\n\nKitty kömək üçün qışqırdı. Yaşayış binasında işıqlar yanıb. Qonşu pəncərədən qışqırdı. Moseley qaçdı, lakin on dəqiqə sonra geri qayıdıb, pilləkən boşluğunda yenidən ona hücum etdi, burada bıçaqladı, qarət etdi və nəticədə onu öldürdü.\n\nThe New York Times xəbər verir ki, 38 şahid hücumu izləyib və ya eşidib və heç nə etməyib – bu, şəhər laqeydliyinin əsas hekayəsinə çevrilib. Başlıq milləti şoka saldı.\n\nPsixoloqlar Con Darli və Bibb Latane hekayədən çox narahat idilər. Şahidləri sadəcə olaraq diqqətsiz kimi qınamaq əvəzinə, onlar fərz etdilər ki, şahidlərin çoxluğu problem ola bilərdi. Bunu yoxlamaq üçün bir sıra təcrübələr hazırladılar.\n\nBir araşdırmada iştirakçılar ayrı otaqlara yerləşdirilib və interkom vasitəsilə əlaqə saxlanılıb. Bir \"iştirakçı\" (əslində səsyazma) tutma keçirməyi simulyasiya etdikdə, bunu eşidə bilən yeganə şəxs olduğuna inananlar tez cavab verdilər - bir dəqiqə ərzində 85%. Lakin iştirakçılar dörd nəfərin də dinlədiyinə inandıqda, yalnız 31% cavab verdi.\n\nDarley və Latane bunu \"gözdən keçirmə effekti\" adlandırdılar - başqalarının mövcudluğunun iki mexanizm vasitəsilə fərdi yardım davranışını azaldacağının tapılması: məsuliyyətin yayılması (\"başqası kömək edəcək\") və plüralistik cəhalət (\"başqa heç kimi narahat etmir, ona görə də ciddi olmamalıdır\").\n\nQeyd: Sonrakı araşdırmalar orijinal Times hekayəsinin əhəmiyyətli dərəcədə şişirdildiyini ortaya qoydu - iddia ediləndən daha az adam hücumun şahidi oldu və bəziləri polisə zəng etdi. Lakin onun ilham verdiyi tədqiqat möhkəm şəkildə təsdiqləndi.",
    "contentRu": "13 марта 1964 года 28-летняя Кэтрин «Китти» Дженовезе возвращалась в свою квартиру в Кью-Гарденс, Квинс, Нью-Йорк, примерно в 3:15 утра после окончания смены в качестве менеджера бара. Когда она выходила из машины, на нее напал Уинстон Мозли.\n\nКитти звала на помощь. В многоквартирном доме зажегся свет. Сосед кричал из окна. Мозли убежал, но вернулся через десять минут, чтобы снова напасть на нее на лестничной клетке, где он нанес ей удар, ограбил и в конечном итоге убил ее.\n\nГазета New York Times сообщила, что 38 свидетелей наблюдали или слышали нападение и ничего не предприняли — это утверждение стало определяющей историей городской апатии. Заголовок шокировал нацию.\n\nПсихологи Джон Дарли и Бибб Латане были глубоко обеспокоены этой историей. Вместо того, чтобы просто осудить свидетелей как равнодушных, они предположили, что проблема могла быть в самом количестве свидетелей. Чтобы проверить это, они разработали серию экспериментов.\n\nВ одном исследовании участников поместили в отдельные комнаты и общались через интерком. Когда один «участник» (на самом деле запись) имитировал приступ, те, кто считал, что они единственные, кто мог это слышать, отреагировали быстро — 85% в течение одной минуты. Но когда участники поверили, что четверо других тоже слушают, ответил только 31%.\n\nДарли и Латане назвали это «эффектом свидетеля» — обнаружение того, что присутствие других снижает индивидуальное помогающее поведение посредством двух механизмов: распыления ответственности («кто-то другой поможет») и плюралистического невежества («никто больше не обеспокоен, поэтому это не должно быть серьезно»).\n\nПримечание. Более поздние исследования показали, что первоначальная история Times была значительно преувеличена: свидетелями нападения стало меньше людей, чем утверждалось, а некоторые все же вызвали полицию. Но исследования, которые оно вдохновило, получили убедительное подтверждение.",
    "moralHy": "Որքան շատ մարդիկ ներկա գտնվեն արտակարգ իրավիճակների ժամանակ, այնքան քիչ հավանական է, որ որևէ անհատ օգնի, դա հակաինտուիտիվ բացահայտում է, որը փրկում է կյանքին:",
    "moralRu": "Чем больше людей присутствует во время чрезвычайной ситуации, тем меньше вероятность того, что кто-то сможет помочь – а это противоречивый вывод, который может спасти жизни людей.",
    "moralAz": "Fövqəladə vəziyyət zamanı nə qədər çox insan iştirak etsə, hər hansı bir şəxsin kömək etmə ehtimalı bir o qədər az olar - bu, həyat qurtaran nəticələri olan əks-intuitiv tapıntıdır."
  },
  {
    "id": 8,
    "title": "Seligman and the Dogs Who Gave Up",
    "titleKa": "სელიგმანი და ძაღლები, რომლებმა჊ დანებდეს",
    "chapterId": 10,
    "icon": "mdi:emoticon-sad-outline",
    "content": "In 1967, Martin Seligman and Steven Maier were graduate students at the University of Pennsylvania conducting research on learning. Their experiment would accidentally reveal one of psychology's most important concepts.\n\nThe experiment had three groups of dogs. Group 1 received mild electric shocks they could stop by pressing a panel with their noses. Group 2 received the same shocks but had no way to stop them—they were \"yoked\" to Group 1, receiving the exact same pattern of shocks regardless of what they did. Group 3 received no shocks at all.\n\nLater, all three groups were placed in a shuttle box—a chamber divided by a low barrier the dogs could easily jump over. Shocks were delivered to one side, and the dogs simply needed to jump to the other side to escape.\n\nGroups 1 and 3 quickly learned to jump the barrier. But Group 2—the dogs who had previously been unable to escape—didn't even try. They lay down, whimpered, and passively accepted the shock. Two-thirds of them made no attempt to escape, even though the barrier was right there.\n\nSeligman called this \"learned helplessness\"—the state in which, after experiencing uncontrollable negative events, an organism stops trying to change its situation even when escape becomes possible.\n\nThe implications extended far beyond dogs. Seligman proposed that learned helplessness was a key model for understanding human depression. People who experience repeated failures or uncontrollable negative events may develop a pervasive belief that their actions don't matter—leading to passivity, sadness, and withdrawal.\n\nThis insight led Seligman to develop new therapeutic approaches. Crucially, he discovered that learned helplessness could be reversed through \"immunization\"—earlier experiences of mastery and control. This eventually led him to found the field of positive psychology, studying not just what makes people sick but what makes them flourish.",
    "contentKa": "1967 წელს, მარტინ სელიგმანმა ექსპერიმენტი ჩაატარა ძაღლებზე, რომლებსა჊ ელექტროშოკისგან თავის დაღწევა არ შეეძლოთ. მოგვიანებით მათ თავის დაღწევა჊ შეეძლოთ, მაგრამ არ სცადეს. სელიგმანმა ამას \"სწავლილი უძლურობა\" უწოდა და ეს დეპრესიის გაგების მოდელად იქ჊ა. მოგვიანებით მან პოზიტიური ფსიქოლოგია დააარსა.",
    "moral": "Repeated failure can teach us to stop trying—but helplessness can be unlearned. Experiences of mastery and control can reverse it.",
    "moralKa": "განმეორებულმა წარუმატებებმა შეიძლება გვასწავლოს დანებდეს, მაგრამ უძლურობას გადასწავლა შეიძლება.",
    "titleRu": "Селигман и сдавшиеся собаки",
    "moralAz": "Təkrarlanan uğursuzluqlar bizə cəhd etməyi dayandırmağı öyrədə bilər, lakin acizlik öyrənilə bilər. Ustalıq və nəzarət təcrübələri onu geri qaytara bilər.",
    "moralRu": "Повторяющиеся неудачи могут научить нас перестать пытаться, но от беспомощности можно отучиться. Опыт мастерства и контроля может обратить это вспять.",
    "moralHy": "Կրկնվող ձախողումները կարող են սովորեցնել մեզ դադարեցնել փորձերը, բայց անօգնականությունը կարող է չսովորել: Վարպետության և վերահսկողության փորձը կարող է շրջել այն:",
    "titleHy": "Սելիգմանը և շները, ովքեր հանձնվեցին",
    "contentHy": "1967թ.-ին Մարտին Սելիգմանը և Սթիվեն Մայերը Փենսիլվանիայի համալսարանի ասպիրանտներ էին, որոնք ուսումնասիրություններ էին կատարում ուսման վերաբերյալ: Նրանց փորձը պատահաբար կբացահայտեր հոգեբանության ամենակարևոր հասկացություններից մեկը:\n\nՓորձը ունեցել է շների երեք խումբ. 1-ին խումբը ստացել է թեթև էլեկտրական ցնցումներ, որոնք կարող էին դադարեցնել՝ սեղմելով վահանակը իրենց քթով: 2-րդ խումբը ստացավ նույն ցնցումները, բայց չկարողացավ դրանք կանգնեցնել. նրանք «լծվեցին» 1-ին խմբին՝ ստանալով ցնցումների ճիշտ նույն օրինաչափությունը՝ անկախ նրանց արածից: 3-րդ խումբն ընդհանրապես ցնցումներ չի ստացել:\n\nԱվելի ուշ բոլոր երեք խմբերը տեղադրվեցին մաքոքային տուփի մեջ՝ մի խցիկ, որը բաժանված էր ցածր արգելքով, որի վրայով շները հեշտությամբ կարող էին ցատկել։ Ցնցումները հասցվել են մի կողմից, և շներին պարզապես անհրաժեշտ է եղել ցատկել մյուս կողմ՝ փախչելու համար:\n\n1-ին և 3-րդ խմբերն արագ սովորեցին ցատկել արգելապատնեշը: Բայց 2-րդ խումբը՝ շները, որոնք նախկինում չէին կարողանում փախչել, նույնիսկ չփորձեցին: Նրանք պառկեցին, նվնվացին և պասիվ ընդունեցին ցնցումը։ Նրանց երկու երրորդը փախչելու փորձեր չարեցին, չնայած որ պատնեշը հենց այնտեղ էր։\n\nՍելիգմանը սա անվանեց «սովորած անօգնականություն»՝ այն վիճակը, երբ անկառավարելի բացասական իրադարձություններ ապրելուց հետո օրգանիզմը դադարում է փորձել փոխել իր իրավիճակը, նույնիսկ երբ հնարավոր է դառնում փախուստը:\n\nՀետևանքները շատ ավելի հեռու էին շներից: Սելիգմանը առաջարկեց, որ սովորած անօգնականությունը մարդկային դեպրեսիան հասկանալու հիմնական մոդելն է: Մարդիկ, ովքեր ունենում են կրկնվող անհաջողություններ կամ անկառավարելի բացասական իրադարձություններ, կարող են զարգացնել համատարած համոզմունք, որ իրենց գործողությունները նշանակություն չունեն, ինչը հանգեցնում է պասիվության, տխրության և հեռանալու:\n\nԱյս պատկերացումը ստիպեց Սելիգմանին մշակել նոր թերապևտիկ մոտեցումներ: Կարևորն այն է, որ նա բացահայտեց, որ սովորած անօգնականությունը կարող է շրջվել «իմունիզացիայի» միջոցով՝ յուրացման և վերահսկման ավելի վաղ փորձառությունների միջոցով: Սա, ի վերջո, ստիպեց նրան հիմնել դրական հոգեբանության ոլորտը՝ ուսումնասիրելով ոչ միայն այն, ինչն է մարդկանց հիվանդացնում, այլ այն, ինչը նրանց ծաղկում է դարձնում:",
    "titleAz": "Seligman və imtina edən itlər",
    "contentAz": "1967-ci ildə Martin Seligman və Steven Maier Pensilvaniya Universitetində öyrənmə üzrə tədqiqat aparan aspirant idilər. Onların təcrübəsi təsadüfən psixologiyanın ən vacib anlayışlarından birini ortaya çıxaracaqdı.\n\nTəcrübədə üç qrup it var idi. 1-ci qrup burunları ilə panelə basaraq dayandıra bildikləri yüngül elektrik şoku aldılar. 2-ci qrup eyni zərbələri aldı, lakin onları dayandırmaq üçün heç bir yol yox idi - onlar 1-ci qrupa \"boyunduruldular\" və nə etmələrindən asılı olmayaraq eyni zərbə modelini aldılar. 3-cü qrup heç bir zərbə almadı.\n\nDaha sonra hər üç qrup itlərin asanlıqla tullana bildiyi alçaq bir maneə ilə bölünmüş bir kameraya yerləşdirildi. Zərbələr bir tərəfə çatdırıldı və itlər qaçmaq üçün sadəcə digər tərəfə tullanmalı idi.\n\n1 və 3-cü qruplar sədddən tullanmağı tez öyrəndilər. Lakin 2-ci qrup - əvvəllər qaça bilməyən itlər - cəhd belə etmədilər. Onlar uzandılar, sızıldadılar və şoku passiv qəbul etdilər. Onların üçdə ikisi maneənin tam orada olmasına baxmayaraq, qaçmağa cəhd etməyib.\n\nSeliqman bunu \"öyrənilmiş çarəsizlik\" adlandırdı - orqanizmin idarəolunmaz neqativ hadisələrlə qarşılaşdıqdan sonra hətta qaçmaq mümkün olduqda belə vəziyyətini dəyişməyə cəhd etməyi dayandırdığı vəziyyət.\n\nNəticələr itlərdən çox kənara çıxdı. Seligman, öyrənilmiş çarəsizliyin insan depressiyasını anlamaq üçün əsas model olduğunu təklif etdi. Dəfələrlə uğursuzluqlar və ya idarəolunmaz neqativ hadisələrlə qarşılaşan insanlar, hərəkətlərinin heç bir əhəmiyyət kəsb etmədiyinə dair geniş bir inam inkişaf etdirə bilər - passivliyə, kədərə və geri çəkilməyə səbəb olur.\n\nBu fikir Seligmanı yeni terapevtik yanaşmalar inkişaf etdirməyə vadar etdi. Əsas odur ki, o, öyrənilmiş çarəsizliyin “immunizasiya” yolu ilə geri qaytarıla biləcəyini kəşf etdi - əvvəlki mənimsəmə və nəzarət təcrübələri. Bu, nəhayət, onu müsbət psixologiya sahəsini tapmağa vadar etdi, insanları nəinki xəstələndirdiyini, həm də onları çiçəkləndirən şeyi öyrəndi.",
    "contentRu": "В 1967 году Мартин Селигман и Стивен Майер были аспирантами Пенсильванского университета и проводили исследования в области обучения. Их эксперимент случайно раскрыл одну из самых важных концепций психологии.\n\nВ эксперименте участвовали три группы собак. Группа 1 получила легкий удар током, который они могли остановить, нажав носом на панель. Группа 2 получила те же самые потрясения, но не имела возможности их остановить — они были «привязаны» к Группе 1, получая точно такую ​​же схему потрясений, независимо от того, что они делали. Группа 3 вообще не подвергалась никаким потрясениям.\n\nПозже все три группы были помещены в челночный бокс — камеру, разделенную невысоким барьером, через который собаки могли легко перепрыгнуть. Удары наносились в одну сторону, и собакам просто нужно было перепрыгнуть на другую сторону, чтобы спастись.\n\nГруппы 1 и 3 быстро научились перепрыгивать барьер. Но группа 2 — собаки, ранее не сумевшие убежать, — даже не попыталась. Они легли, хныкали и пассивно принимали шок. Две трети из них не пытались бежать, хотя барьер был тут же.\n\nСелигман назвал это «выученной беспомощностью» — состоянием, в котором после переживания неконтролируемых негативных событий организм перестает пытаться изменить свою ситуацию, даже когда бегство становится возможным.\n\nПоследствия распространялись далеко за пределы собак. Селигман предположил, что выученная беспомощность является ключевой моделью для понимания человеческой депрессии. У людей, которые сталкиваются с повторяющимися неудачами или неконтролируемыми негативными событиями, может развиться всепроникающее убеждение, что их действия не имеют значения, что приводит к пассивности, печали и замкнутости.\n\nЭто понимание побудило Селигмана разработать новые терапевтические подходы. Что особенно важно, он обнаружил, что выученную беспомощность можно обратить вспять посредством «иммунизации» — более раннего опыта господства и контроля. В конечном итоге это привело его к созданию области позитивной психологии, изучающей не только то, что делает людей больными, но и то, что помогает им процветать."
  },
  {
    "id": 9,
    "title": "The Case of H.M.: A Life Without Memory",
    "titleKa": "H.M.-ის შემთხვევა: ცხოვრება მეხსიერების გარეშე",
    "chapterId": 7,
    "icon": "mdi:head-question-outline",
    "content": "Henry Gustav Molaison—known for decades in scientific literature only as \"H.M.\" to protect his privacy—is perhaps the most studied individual in the history of neuroscience. His story begins with tragedy and becomes a cornerstone of memory research.\n\nH.M. suffered from severe, debilitating epilepsy that began after a bicycle accident at age seven. By his mid-twenties, the seizures had become so frequent and violent that he could not hold a job or live independently.\n\nIn 1953, neurosurgeon William Beecher Scoville performed an experimental operation. He removed large portions of H.M.'s medial temporal lobes bilaterally—including most of his hippocampus on both sides.\n\nThe surgery was a medical success: the seizures were dramatically reduced. But the side effect was devastating. H.M. could no longer form new long-term memories. He could remember events from his childhood, his parents' names, and facts from before the surgery. But anything that happened after 1953 vanished within minutes.\n\nH.M. would read the same magazine over and over, enjoying it fresh each time. He could not recognize the researchers who visited him daily for years. Every day, his father's death was news to him again. He described his existence as \"like waking from a dream... every day is alone in itself.\"\n\nYet H.M.'s memory was not entirely destroyed. He could learn new motor skills—like tracing a star in a mirror—and improve with practice, even though he had no memory of having practiced. This proved that different types of memory (declarative vs. procedural) involve different brain systems.\n\nH.M. cooperated with researchers for over 50 years until his death in 2008. His brain was donated to science, sliced into 2,401 thin sections, and digitized for future study. His case single-handedly established the hippocampus as critical for memory formation and reshaped our understanding of how memories are made.",
    "contentKa": "ჰენრი მოლეიზონი (H.M.) ნეირომეცნიერების ისტორიაში ყველაზე შესწავლილი ადამიანია. 1953 წელს ეპილეფსიის სამკურნალოდ, ქირურგმა ჰიპოკამპი ამოაჭრა. კრუნჩხები შემცირდა, მაგრამ ახალი გრძელვადიანი მოგონებების ჩამოყალიბება ვერ შეძლო. მისმა შემთხვევამ დაამტკიცა, რომ ჰიპოკამპი მეხსიერების ფორმირებისთვის აუცილებელია.",
    "moral": "The hippocampus is critical for memory formation—and different types of memory involve separate brain systems.",
    "moralKa": "ჰიპოკამპი მეხსიერების ფორმირებისთვის აუცილებელია, და მეხსიერების სხვადასხვა ტიპები სხვადასხვა ტვინის სისტემებს იყენებს.",
    "titleRu": "Дело Х.М.: жизнь без памяти",
    "moralAz": "Hipokampus yaddaşın formalaşması üçün vacibdir və müxtəlif yaddaş növləri ayrı beyin sistemlərini əhatə edir.",
    "moralHy": "Հիպոկամպը կարևոր նշանակություն ունի հիշողության ձևավորման համար, և հիշողության տարբեր տեսակներ ներառում են ուղեղի առանձին համակարգեր:",
    "titleHy": "Հ.Մ.-ի գործը՝ կյանք առանց հիշողության",
    "moralRu": "Гиппокамп имеет решающее значение для формирования памяти, а разные типы памяти задействуют отдельные системы мозга.",
    "contentRu": "Генри Густав Молесон, десятилетиями известный в научной литературе только как «Е.М.» чтобы защитить свою частную жизнь, — пожалуй, самый изученный человек в истории нейробиологии. Его история начинается с трагедии и становится краеугольным камнем исследований памяти.\n\nХ.М. страдал от тяжелой, изнурительной эпилепсии, которая началась после велосипедной аварии в возрасте семи лет. К двадцати годам припадки стали настолько частыми и сильными, что он не мог ни работать, ни жить самостоятельно.\n\nВ 1953 году нейрохирург Уильям Бичер Сковилл провел экспериментальную операцию. Он удалил большие части медиальных височных долей Х. М. с обеих сторон, включая большую часть гиппокампа с обеих сторон.\n\nОперация прошла с медицинской точки зрения успешно: приступы резко уменьшились. Но побочный эффект был разрушительным. Х.М. больше не мог формировать новые долговременные воспоминания. Он мог вспомнить события из своего детства, имена своих родителей и факты, произошедшие до операции. Но все, что произошло после 1953 года, исчезло за считанные минуты.\n\nХ.М. читал один и тот же журнал снова и снова, каждый раз наслаждаясь его свежестью. Он не мог узнать исследователей, которые навещали его ежедневно в течение многих лет. Каждый день смерть отца снова была для него новостью. Он описывал свое существование как «как пробуждение ото сна… каждый день сам по себе одинок».\n\nИ все же память Х.М. не была полностью уничтожена. Он мог освоить новые двигательные навыки — например, рисовать звезду в зеркале — и совершенствоваться по мере практики, хотя у него не было воспоминаний о тренировках. Это доказало, что разные типы памяти (декларативная и процедурная) задействуют разные системы мозга.\n\nХ.М. сотрудничал с исследователями более 50 лет до своей смерти в 2008 году. Его мозг был передан науке, нарезан на 2401 тонкий срез и оцифрован для будущего изучения. Его случай единолично доказал, что гиппокамп играет решающую роль в формировании памяти, и изменил наше понимание того, как создаются воспоминания.",
    "contentHy": "Հենրի Գուստավ Մոլայսոնը, որը տասնամյակներ շարունակ գիտական ​​գրականության մեջ հայտնի է միայն «Հ.Մ. պաշտպանել իր գաղտնիությունը, թերևս ամենաշատ ուսումնասիրված անհատն է նյարդագիտության պատմության մեջ: Նրա պատմությունը սկսվում է ողբերգությամբ և դառնում հիշողության հետազոտության հիմնաքար:\n\nՀ.Մ. տառապում էր ծանր, թուլացնող էպիլեպսիայով, որը սկսվել էր յոթ տարեկանում հեծանվային վթարից հետո: Նրա քսան տարեկանների կեսերին նոպաներն այնքան հաճախակի ու կատաղի էին դարձել, որ նա չէր կարող աշխատանք ունենալ կամ ինքնուրույն ապրել:\n\n1953 թվականին նյարդավիրաբույժ Ուիլյամ Բիչեր Սքովիլը փորձարարական վիրահատություն է կատարել։ Նա երկկողմանի հեռացրել է Հ.Մ.-ի միջին ժամանակային բլթերի մեծ մասը՝ ներառյալ նրա հիպոկամպի մեծ մասը երկու կողմերից:\n\nՎիրահատությունը բժշկական հաջողություն ունեցավ. նոպաները կտրուկ նվազեցին: Բայց կողմնակի ազդեցությունը կործանարար էր: Հ.Մ. այլևս չէր կարող նոր երկարաժամկետ հիշողություններ ձևավորել: Նա կարող էր հիշել իր մանկության դեպքերը, ծնողների անունները և փաստեր վիրահատությունից առաջ: Բայց այն ամենը, ինչ տեղի ունեցավ 1953 թվականից հետո, անհետացավ րոպեների ընթացքում:\n\nՀ.Մ. կարդում էր նույն ամսագիրը նորից ու նորից՝ ամեն անգամ թարմ վայելելով այն: Նա չէր կարողանում ճանաչել այն հետազոտողներին, ովքեր տարիներ շարունակ այցելում էին իրեն։ Ամեն օր հոր մահը նորից նորություն էր նրա համար։ Նա նկարագրել է իր գոյությունը որպես «երազից արթնանալու նման... ամեն օր ինքնին մենակ է»:\n\nՍակայն Հ.Մ.-ի հիշողությունն ամբողջությամբ չի ոչնչացվել։ Նա կարող էր սովորել նոր շարժիչ հմտություններ, օրինակ՝ աստղին հայելու մեջ հետագծելը, և կատարելագործվել պրակտիկայի ընթացքում, թեև նա չէր հիշում, որ մարզվել է: Սա ապացուցեց, որ հիշողության տարբեր տեսակներ (դեկլարատիվ ընդդեմ ընթացակարգային) ներառում են ուղեղի տարբեր համակարգեր:\n\nՀ.Մ. Ավելի քան 50 տարի համագործակցել է հետազոտողների հետ մինչև իր մահը 2008թ.: Նրա ուղեղը նվիրաբերվել է գիտությանը, կտրատվել 2401 բարակ հատվածների և թվայնացվել հետագա ուսումնասիրության համար: Նրա դեպքը միայնակ հաստատեց հիպոկամպը որպես կարևոր նշանակություն հիշողության ձևավորման համար և վերափոխեց մեր պատկերացումները, թե ինչպես են ստեղծվում հիշողությունները:",
    "titleAz": "H.M.-nin işi: Yaddaşsız bir həyat",
    "contentAz": "Henry Gustav Molaison — onilliklər boyu elmi ədəbiyyatda yalnız \"H.M.\" kimi tanınır. şəxsi həyatını qorumaq - bəlkə də nevrologiya tarixində ən çox öyrənilmiş fərddir. Onun hekayəsi faciə ilə başlayır və yaddaş tədqiqatının təməl daşına çevrilir.\n\nH.M. yeddi yaşında velosiped qəzasından sonra başlayan ağır, zəiflədici epilepsiyadan əziyyət çəkirdi. İyirmi yaşlarının ortalarında qıcolmalar o qədər tez-tez və şiddətli olurdu ki, o, nə işlə məşğul ola, nə də müstəqil yaşaya bildi.\n\n1953-cü ildə neyrocərrah William Bicher Scoville eksperimental əməliyyat keçirdi. O, H.M.-nin medial temporal loblarının böyük hissələrini, o cümlədən hər iki tərəfdəki hipokampusunun böyük hissəsini ikitərəfli şəkildə çıxardı.\n\nƏməliyyat tibbi uğur idi: qıcolmalar kəskin şəkildə azaldı. Ancaq yan təsir dağıdıcı oldu. H.M. artıq yeni uzunmüddətli xatirələr formalaşdıra bilmirdi. Uşaqlığından baş verənləri, valideynlərinin adlarını, əməliyyatdan əvvəlki faktları xatırlaya bilirdi. Lakin 1953-cü ildən sonra baş verən hər şey bir neçə dəqiqə ərzində yox oldu.\n\nH.M. eyni jurnalı təkrar-təkrar oxuyar, hər dəfə təzədən zövq alırdı. İllər boyu ona hər gün gələn tədqiqatçıları tanıya bilmirdi. Hər gün atasının ölümü onun üçün yenidən xəbər olurdu. O, varlığını “yuxudan oyanmaq kimi... hər gün öz-özlüyündə təkdir” kimi təsvir edirdi.\n\nBununla belə, H.M.-nin yaddaşı tamamilə məhv edilməmişdir. O, güzgüdə ulduzu izləmək kimi yeni motor bacarıqlarını öyrənə və məşq etdiyini xatırlamasa da, təcrübə ilə təkmilləşə bilərdi. Bu sübut etdi ki, müxtəlif yaddaş növləri (deklarativ və prosessual) müxtəlif beyin sistemlərini əhatə edir.\n\nH.M. 2008-ci ildə ölümünə qədər 50 ildən çox tədqiqatçılarla əməkdaşlıq etdi. Onun beyni elmə verildi, 2401 nazik hissəyə kəsildi və gələcək tədqiqatlar üçün rəqəmsallaşdırıldı. Onun işi tək başına hipokampusun yaddaşın formalaşması üçün kritik olduğunu təyin etdi və xatirələrin necə qurulduğuna dair anlayışımızı yenidən formalaşdırdı."
  },
  {
    "id": 10,
    "title": "Rosenhan's \"Being Sane in Insane Places\"",
    "titleKa": "როზენჰანის \"გონიერება გიჟურ ადგილებში\"",
    "chapterId": 14,
    "icon": "mdi:hospital-building",
    "content": "In 1973, Stanford psychologist David Rosenhan published one of the most provocative and influential studies in the history of psychiatry: \"On Being Sane in Insane Places.\"\n\nRosenhan recruited eight mentally healthy volunteers—including himself, a psychology graduate student, a pediatrician, a psychiatrist, a painter, and a housewife—to present themselves at twelve different psychiatric hospitals across the United States.\n\nEach pseudo-patient reported a single symptom: they heard a voice saying \"empty,\" \"hollow,\" or \"thud.\" They gave false names and occupations but otherwise described their life histories and emotional states truthfully. All were diagnosed with psychiatric disorders (most commonly schizophrenia) and admitted.\n\nOnce inside, all pseudo-patients immediately stopped reporting any symptoms and behaved completely normally. They took notes openly, cooperated with staff, and told doctors they felt fine. Yet not a single one was identified as healthy by staff.\n\nTheir hospitalizations lasted from 7 to 52 days, averaging 19 days. When discharged, they received the diagnosis \"schizophrenia, in remission\"—meaning the label stuck even upon release.\n\nIronically, real patients often recognized the pseudo-patients were not mentally ill. \"You're not crazy. You're a journalist or a professor,\" they said. But staff never questioned the diagnoses.\n\nIn a follow-up study, Rosenhan told a hospital that pseudo-patients would attempt admission over the next three months. Staff confidently identified 41 patients as impostors. In reality, Rosenhan had sent no one.\n\nThe study's conclusion was searing: psychiatric institutions cannot reliably distinguish the sane from the insane. Diagnostic labels, once applied, color all subsequent perception and behavior of both patients and staff. The study contributed to major reforms in psychiatric diagnosis and the development of more rigorous diagnostic criteria.",
    "contentKa": "1973 წელს, სტენფორდის ფსიქოლოგმა როზენჰანმა 8 ჯანსაღი მოხალისე 12 ფსიქიატრიულ საავადმყოფოში გაგზავნა. მათ შიზოფრენია დაუსვეს და 7-დან 52 დღემდე დარჩნენ. არავინ პერსონალმა ვერ ამოიცნო ისინი ჯანსაღად. ეს კვლევამ დიაგნოსტიკის სერიოზულ რეფორმებს შეუწყო.",
    "moral": "Labels are powerful—once categorized, everything is seen through that lens. Psychiatric diagnosis must be approached with extreme rigor and humility.",
    "moralKa": "იარლიყები ძალიან ძლიერია—ერთხელ კატეგორიზებული, ყველაფერი ამ ლინზით აღიქმება.",
    "titleRu": "Розенхан «Быть ​​в здравом уме в безумных местах».",
    "moralAz": "Etiketlər güclüdür - kateqoriyalara bölündükdən sonra hər şey bu obyektivdən görünür. Psixiatrik diaqnoza həddindən artıq ciddilik və təvazökarlıqla yanaşmaq lazımdır.",
    "moralHy": "Պիտակները հզոր են. դասակարգվելուց հետո ամեն ինչ երևում է այդ ոսպնյակի միջով: Հոգեբուժական ախտորոշմանը պետք է մոտենալ ծայրահեղ խստությամբ և խոնարհությամբ:",
    "titleHy": "Ռոզենհանի «Մեղսունակ լինել խելագար վայրերում»",
    "contentHy": "1973 թվականին Սթենֆորդի հոգեբան Դեյվիդ Ռոզենհանը հրապարակեց հոգեբուժության պատմության մեջ ամենասադրիչ և ազդեցիկ հետազոտություններից մեկը՝ «Խելագար վայրերում ողջախոհ լինելու մասին»։\n\nՌոզենհանը հավաքագրեց ութ հոգեպես առողջ կամավորների, այդ թվում՝ ինքը՝ հոգեբանության ասպիրանտ, մանկաբույժ, հոգեբույժ, նկարիչ և տնային տնտեսուհի, որպեսզի ներկայանան Միացյալ Նահանգների տասներկու տարբեր հոգեբուժարաններում:\n\nՅուրաքանչյուր կեղծ հիվանդ հայտնել է մեկ ախտանիշ. նրանք լսել են մի ձայն, որն ասում էր «դատարկ», «խոռոչ» կամ «դուխ»: Նրանք կեղծ անուններ և զբաղմունքներ էին տալիս, բայց այլ կերպ ճշմարիտ նկարագրում էին իրենց կյանքի պատմությունն ու հուզական վիճակները: Բոլորի մոտ ախտորոշվել են հոգեկան խանգարումներ (առավել հաճախ՝ շիզոֆրենիա) և ընդունվել:\n\nՆերս մտնելուց հետո բոլոր պսևդո-հիվանդներն անմիջապես դադարեցրին որևէ ախտանիշ հայտնել և իրենց լիովին նորմալ պահեցին: Նրանք բացահայտ նշումներ էին անում, համագործակցում անձնակազմի հետ և բժիշկներին ասացին, որ իրենց լավ են զգում: Այնուամենայնիվ, անձնակազմի կողմից ոչ մեկը առողջ չի ճանաչվել:\n\nՆրանց հոսպիտալացումները տեւել են 7-ից 52 օր՝ միջինը 19 օր։ Դուրս գրվելիս նրանք ստացել են «շիզոֆրենիա, ռեմիսիայի մեջ» ախտորոշումը, ինչը նշանակում է, որ պիտակը կպչում է նույնիսկ ազատ արձակվելուց հետո:\n\nՃակատագրի հեգնանքով, իրական հիվանդները հաճախ ճանաչում էին, որ կեղծ հիվանդները հոգեկան հիվանդ չեն: «Դու գիժ չես, դու լրագրող ես կամ պրոֆեսոր»,- ասացին նրանք։ Բայց անձնակազմը երբեք կասկածի տակ չի դրել ախտորոշումները:\n\nՀետագա ուսումնասիրության ընթացքում Ռոզենհանը հիվանդանոցում ասաց, որ կեղծ հիվանդները կփորձեն ընդունելություն առաջիկա երեք ամիսների ընթացքում: Անձնակազմը վստահորեն հայտնաբերել է 41 հիվանդի որպես խաբեբաներ: Իրականում Ռոզենհանը ոչ ոքի չէր ուղարկել։\n\nՀետազոտության եզրակացությունը սարսափելի էր. հոգեբուժական հաստատությունները չեն կարող հուսալիորեն տարբերել ողջախոհներին խելագարներից: Ախտորոշիչ պիտակները, կիրառվելուց հետո, գունավորում են ինչպես հիվանդների, այնպես էլ անձնակազմի բոլոր հետագա ընկալումն ու վարքը: Ուսումնասիրությունը նպաստեց հոգեբուժական ախտորոշման հիմնական բարեփոխումներին և ավելի խիստ ախտորոշիչ չափանիշների մշակմանը:",
    "moralRu": "Ярлыки обладают мощной силой: после того, как они классифицированы, все можно увидеть через эту призму. К психиатрическому диагнозу необходимо подходить с предельной строгостью и смирением.",
    "titleAz": "Rosenhanın \"Dəli yerlərdə ağlı başında olmaq\"",
    "contentRu": "В 1973 году психолог из Стэнфорда Дэвид Розенхан опубликовал одно из самых провокационных и влиятельных исследований в истории психиатрии: «О том, как быть в здравом уме в безумных местах».\n\nРозенхан набрал восемь психически здоровых добровольцев, в том числе себя самого, аспиранта психологии, педиатра, психиатра, художника и домохозяйку, чтобы они явились в двенадцать различных психиатрических больниц по всей территории Соединенных Штатов.\n\nКаждый псевдопациент сообщал об одном симптоме: он слышал голос, говорящий «пусто», «пусто» или «стук». Они называли вымышленные имена и род занятий, но в остальном правдиво описывали историю своей жизни и эмоциональное состояние. У всех были диагностированы психические расстройства (чаще всего шизофрения) и госпитализированы.\n\nОказавшись внутри, все псевдопациенты сразу же перестали сообщать о каких-либо симптомах и вели себя совершенно нормально. Они открыто делали записи, сотрудничали с персоналом и говорили врачам, что чувствуют себя хорошо. Однако ни один из них не был признан персоналом здоровым.\n\nИх госпитализация длилась от 7 до 52 дней, в среднем 19 дней. При выписке им поставили диагноз «шизофрения в стадии ремиссии», то есть ярлык приклеился даже после освобождения.\n\nПо иронии судьбы, реальные пациенты часто признавали, что псевдопациенты не были психически больными. «Ты не сумасшедший. Ты журналист или профессор», — сказали они. Но сотрудники никогда не подвергали сомнению диагнозы.\n\nВ ходе последующего исследования Розенхан сообщил больнице, что псевдопациенты будут пытаться госпитализироваться в течение следующих трех месяцев. Персонал уверенно опознал 41 пациента как самозванцев. На самом деле Розенхан никого не послал.\n\nВывод исследования был ошеломляющим: психиатрические учреждения не могут достоверно отличить здравомыслящих от невменяемых. Диагностические ярлыки, однажды примененные, определяют все последующее восприятие и поведение как пациентов, так и персонала. Исследование способствовало крупным реформам в психиатрической диагностике и разработке более строгих диагностических критериев.",
    "contentAz": "1973-cü ildə Stenford psixoloqu David Rosenhan psixiatriya tarixindəki ən təxribatçı və təsirli araşdırmalardan birini nəşr etdi: \"Dəli yerlərdə ağlı başında olmaq haqqında\".\n\nRosenhan, ABŞ-da on iki müxtəlif psixiatriya xəstəxanasında özlərini təqdim etmək üçün özü, psixologiya aspirantı, pediatr, psixiatr, rəssam və ev xanımı daxil olmaqla səkkiz əqli cəhətdən sağlam könüllü işə götürdü.\n\nHər bir psevdo-xəstə tək bir simptom haqqında məlumat verdi: onlar \"boş\", \"boş\" və ya \"tünd\" deyən bir səs eşitdilər. Onlar yalançı adlar və peşələr verdilər, lakin başqa cür öz həyat tarixçələrini və emosional vəziyyətlərini doğru şəkildə təsvir etdilər. Hamısına psixiatrik pozğunluqlar (ən çox şizofreniya) diaqnozu qoyulub və qəbul edilib.\n\nİçəri daxil olduqdan sonra bütün psevdo-xəstələr dərhal hər hansı simptomları bildirməyi dayandırdılar və özlərini tamamilə normal apardılar. Onlar açıq şəkildə qeydlər apardılar, işçilərlə əməkdaşlıq etdilər və həkimlərə özlərini yaxşı hiss etdiklərini söylədilər. Bununla belə, heyət tərəfindən heç birinin sağlam olduğu müəyyən edilmədi.\n\nOnların xəstəxanaya yerləşdirilməsi orta hesabla 19 gün olmaqla 7 gündən 52 günə qədər davam edib. Buraxıldıqda, onlar \"şizofreniya, remissiyada\" diaqnozunu aldılar, yəni etiket buraxıldıqda belə yapışdırıldı.\n\nQəribədir ki, real xəstələr tez-tez psevdo-xəstələrin ruhi xəstə olmadığını tanıyırdılar. “Sən dəli deyilsən, jurnalistsən, professorsan” dedilər. Lakin işçilər heç vaxt diaqnozları şübhə altına almadılar.\n\nSonrakı araşdırmada Rosenhan bir xəstəxanaya dedi ki, psevdo-xəstələr növbəti üç ay ərzində qəbula cəhd edəcəklər. İşçilər 41 xəstəni inamla saxtakar kimi tanıyıblar. Əslində, Rosenhan heç kimi göndərməmişdi.\n\nTədqiqatın nəticəsi dəhşətli idi: psixiatriya institutları sağlam düşüncəli ilə dəlini etibarlı şəkildə ayıra bilmir. Diaqnostik etiketlər tətbiq edildikdən sonra həm xəstələrin, həm də işçilərin bütün sonrakı qavrayışlarını və davranışlarını rəngləndirir. Tədqiqat psixiatrik diaqnostikada əsas islahatlara və daha ciddi diaqnostik meyarların hazırlanmasına kömək etdi."
  }
];

export const MEMORY_CARDS: MemoryCard[] = [
  {
    "id": 1,
    "term": "Psychology",
    "definition": "The scientific study of behavior and mental processes",
    "category": "Basics",
    "termRu": "Психология",
    "termAz": "Psixologiya",
    "definitionRu": "Научное исследование поведения и психических процессов.",
    "definitionKa": "ქცევისა და ფსიქიკური პროცესების მეცნიერული შესწავლა",
    "definitionHy": "Վարքի և մտավոր գործընթացների գիտական ​​ուսումնասիրություն",
    "termKa": "ფსიქოლოგია",
    "termHy": "Հոգեբանություն",
    "definitionAz": "Davranış və psixi proseslərin elmi tədqiqi"
  },
  {
    "id": 2,
    "term": "Neuron",
    "definition": "A nerve cell that transmits electrical and chemical signals",
    "category": "Biology",
    "termRu": "Нейрон",
    "termAz": "Neyron",
    "definitionRu": "Нервная клетка, передающая электрические и химические сигналы.",
    "definitionHy": "Նյարդային բջիջ, որը փոխանցում է էլեկտրական և քիմիական ազդանշաններ",
    "definitionKa": "ნერვული უჯრედი, რომელიც გადასცემს ელექტრულ და ქიმიურ სიგნალებს",
    "termKa": "ნეირონი",
    "termHy": "Նեյրոն",
    "definitionAz": "Elektrik və kimyəvi siqnalları ötürən sinir hüceyrəsi"
  },
  {
    "id": 3,
    "term": "Classical Conditioning",
    "definition": "Learning through association of stimuli (Pavlov)",
    "category": "Learning",
    "termRu": "Классическое кондиционирование",
    "termKa": "კლასიკური კონდიცირება",
    "termHy": "Դասական կոնդիցիոներ",
    "termAz": "Klassik kondisioner",
    "definitionHy": "Սովորում գրգռիչների միավորման միջոցով (Պավլով)",
    "definitionKa": "სწავლა სტიმულის ასოციაციის გზით (პავლოვი)",
    "definitionAz": "Qıcıqlandırıcıların assosiasiyası vasitəsilə öyrənmə (Pavlov)",
    "definitionRu": "Обучение через ассоциацию стимулов (Павлов)"
  },
  {
    "id": 4,
    "term": "Operant Conditioning",
    "definition": "Learning through consequences: reinforcement and punishment (Skinner)",
    "category": "Learning",
    "termHy": "Գործող օդափոխություն",
    "termKa": "ოპერაციული კონდიცირება",
    "termAz": "Operant Kondisioner",
    "termRu": "Оперантное обусловливание",
    "definitionRu": "Обучение через последствия: подкрепление и наказание (Скиннер)",
    "definitionKa": "სწავლა შედეგების მეშვეობით: განმტკიცება და დასჯა (სკინერი)",
    "definitionHy": "Սովորում հետևանքների միջոցով. ամրապնդում և պատիժ (Skinner)",
    "definitionAz": "Nəticələr vasitəsilə öyrənmək: gücləndirmə və cəza (Skinner)"
  },
  {
    "id": 5,
    "term": "Hippocampus",
    "definition": "Brain structure essential for forming new long-term memories",
    "category": "Biology",
    "termRu": "Гиппокамп",
    "termKa": "ჰიპოკამპი",
    "termHy": "Հիպոկամպուս",
    "definitionRu": "Структура мозга необходима для формирования новой долговременной памяти",
    "definitionKa": "ტვინის სტრუქტურა აუცილებელია ახალი გრძელვადიანი მეხსიერების ფორმირებისთვის",
    "definitionHy": "Ուղեղի կառուցվածքը կարևոր է նոր երկարաժամկետ հիշողություններ ձևավորելու համար",
    "definitionAz": "Yeni uzunmüddətli xatirələrin formalaşması üçün vacib olan beyin quruluşu",
    "termAz": "Hipokampus"
  },
  {
    "id": 6,
    "term": "Cognitive Dissonance",
    "definition": "Discomfort from holding contradictory beliefs or attitudes",
    "category": "Social",
    "termRu": "Когнитивный диссонанс",
    "termHy": "Ճանաչողական դիսոնանս",
    "definitionRu": "Дискомфорт от противоречивых убеждений или взглядов.",
    "termKa": "კოგნიტური დისონანსი",
    "definitionKa": "დისკომფორტი ურთიერთსაწინააღმდეგო რწმენის ან დამოკიდებულების შენარჩუნების გამო",
    "definitionHy": "Անհանգստություն հակասական համոզմունքների կամ վերաբերմունքի պատճառով",
    "definitionAz": "Ziddiyyətli inanclara və ya münasibətə sahib olmaqdan narahatlıq",
    "termAz": "Koqnitiv dissonans"
  },
  {
    "id": 7,
    "term": "Maslow's Hierarchy",
    "definition": "Five-level model of motivation from basic needs to self-actualization",
    "category": "Motivation",
    "termAz": "Maslow iyerarxiyası",
    "termHy": "Մասլոուի հիերարխիա",
    "termKa": "მასლოუს იერარქია",
    "termRu": "Иерархия Маслоу",
    "definitionRu": "Пятиуровневая модель мотивации от базовых потребностей до самореализации",
    "definitionKa": "მოტივაციის ხუთ დონის მოდელი ძირითადი მოთხოვნილებებიდან თვითრეალიზაციამდე",
    "definitionHy": "Հիմնական կարիքներից մինչև ինքնաիրականացում մոտիվացիայի հինգ մակարդակի մոդել",
    "definitionAz": "Əsas ehtiyaclardan özünü həyata keçirməyə qədər beş səviyyəli motivasiya modeli"
  },
  {
    "id": 8,
    "term": "Big Five (OCEAN)",
    "definition": "Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism",
    "category": "Personality",
    "termKa": "დიდი ხუთეული (OCEAN)",
    "termHy": "Մեծ հնգյակ (OCEAN)",
    "termRu": "Большая пятерка (ОКЕАН)",
    "termAz": "Böyük beşlik (OCEAN)",
    "definitionRu": "Открытость, Добросовестность, Экстраверсия, Доброжелательность, Невротизм.",
    "definitionHy": "Բացություն, բարեխիղճություն, էքստրավերտություն, համաձայնություն, նևրոտիզմ",
    "definitionKa": "ღიაობა, კეთილსინდისიერება, ექსტრავერსია, თანხმობა, ნევროტიზმი",
    "definitionAz": "Açıqlıq, Vicdanlılıq, Ekstraversiya, Uyğunluq, Nevrotiklik"
  },
  {
    "id": 9,
    "term": "Attachment Theory",
    "definition": "The bond between infant and caregiver shaping later relationships",
    "category": "Development",
    "definitionRu": "Связь между младенцем и лицом, осуществляющим уход, формирует дальнейшие отношения",
    "termRu": "Теория привязанности",
    "termKa": "მიმაგრების თეორია",
    "termHy": "Կցվածության տեսություն",
    "definitionHy": "Երեխայի և խնամողի միջև կապը ձևավորում է հետագա հարաբերությունները",
    "definitionKa": "კავშირი ახალშობილსა და მომვლელს შორის აყალიბებს შემდგომ ურთიერთობებს",
    "termAz": "Qoşma nəzəriyyəsi",
    "definitionAz": "Körpə və baxıcı arasındakı əlaqə sonrakı münasibətləri formalaşdırır"
  },
  {
    "id": 10,
    "term": "Confirmation Bias",
    "definition": "Tendency to seek information that supports existing beliefs",
    "category": "Cognition",
    "termRu": "Предвзятость подтверждения",
    "definitionRu": "Склонность искать информацию, которая поддерживает существующие убеждения.",
    "termKa": "დადასტურების მიკერძოება",
    "termHy": "Հաստատման կողմնակալություն",
    "definitionKa": "ტენდენცია მოიძიოს ინფორმაცია, რომელიც მხარს უჭერს არსებულ რწმენას",
    "definitionHy": "Գոյություն ունեցող համոզմունքները հաստատող տեղեկատվություն փնտրելու միտում",
    "termAz": "Təsdiq qərəzi",
    "definitionAz": "Mövcud inancları dəstəkləyən məlumat axtarmaq meyli"
  },
  {
    "id": 11,
    "term": "Dopamine",
    "definition": "Neurotransmitter involved in reward, motivation, and pleasure",
    "category": "Biology",
    "termKa": "დოფამინი",
    "termRu": "Дофамин",
    "termAz": "Dopamin",
    "termHy": "Դոպամին",
    "definitionRu": "Нейромедиатор, участвующий в вознаграждении, мотивации и удовольствии.",
    "definitionKa": "ნეიროტრანსმიტერი მონაწილეობს ჯილდოში, მოტივაციაში და სიამოვნებაში",
    "definitionHy": "Նեյրոհաղորդիչը ներգրավված է պարգևատրման, մոտիվացիայի և հաճույքի մեջ",
    "definitionAz": "Mükafat, motivasiya və həzzdə iştirak edən neyrotransmitter"
  },
  {
    "id": 12,
    "term": "REM Sleep",
    "definition": "Sleep stage with rapid eye movements and vivid dreaming",
    "category": "Consciousness",
    "termRu": "Быстрый сон",
    "termKa": "REM ძილი",
    "termHy": "REM քուն",
    "definitionKa": "ძილის ეტაპი თვალის სწრაფი მოძრაობით და ნათელი ოცნებებით",
    "definitionHy": "Քնի փուլ՝ աչքերի արագ շարժումներով և վառ երազներով",
    "definitionRu": "Стадия сна с быстрыми движениями глаз и яркими сновидениями.",
    "termAz": "REM yuxusu",
    "definitionAz": "Sürətli göz hərəkətləri və canlı yuxu ilə yuxu mərhələsi"
  },
  {
    "id": 13,
    "term": "Bystander Effect",
    "definition": "Less likely to help when others are present",
    "category": "Social",
    "definitionKa": "ნაკლებად სავარაუდოა, რომ დაეხმაროს, როდესაც სხვები არიან",
    "definitionHy": "Ավելի քիչ հավանական է օգնել, երբ ուրիշները ներկա են",
    "definitionAz": "Başqaları olduqda kömək etmək ehtimalı azdır",
    "termHy": "Bystander Effect",
    "termKa": "Bystander Effect",
    "termRu": "Эффект свидетеля",
    "definitionRu": "Меньше шансов помочь, когда присутствуют другие",
    "termAz": "Baxıcı Effekti"
  },
  {
    "id": 14,
    "term": "Placebo Effect",
    "definition": "Improvement from belief in treatment rather than treatment itself",
    "category": "Research",
    "termRu": "Эффект плацебо",
    "termHy": "Պլացեբոյի էֆեկտ",
    "termKa": "პლაცებოს ეფექტი",
    "definitionHy": "Բուժման նկատմամբ հավատքի բարելավում, այլ ոչ թե ինքնին բուժման",
    "definitionKa": "გაუმჯობესება მკურნალობისადმი რწმენისგან და არა თავად მკურნალობის მიმართ",
    "definitionRu": "Улучшение от веры в лечение, а не от самого лечения",
    "termAz": "Plasebo effekti",
    "definitionAz": "Müalicənin özündən çox müalicəyə inamdan irəli gələn təkmilləşdirmə"
  },
  {
    "id": 15,
    "term": "Schema",
    "definition": "Mental framework for organizing and interpreting information",
    "category": "Cognition",
    "termRu": "Схема",
    "termHy": "Սխեման",
    "termKa": "სქემა",
    "definitionRu": "Ментальная основа для организации и интерпретации информации",
    "definitionHy": "Տեղեկատվության կազմակերպման և մեկնաբանման մտավոր շրջանակ",
    "definitionKa": "ინფორმაციის ორგანიზებისა და ინტერპრეტაციის გონებრივი ჩარჩო",
    "termAz": "Sxem",
    "definitionAz": "Məlumatı təşkil etmək və şərh etmək üçün zehni çərçivə"
  },
  {
    "id": 16,
    "term": "Amygdala",
    "definition": "Brain structure for processing emotions, especially fear",
    "category": "Biology",
    "termKa": "ამიგდალა",
    "definitionRu": "Структура мозга для обработки эмоций, особенно страха",
    "termHy": "Ամիգդալա",
    "termRu": "Миндалевидное тело",
    "definitionHy": "Ուղեղի կառուցվածքը հույզերի, հատկապես վախի մշակման համար",
    "definitionKa": "ტვინის სტრუქტურა ემოციების, განსაკუთრებით შიშის დასამუშავებლად",
    "termAz": "Amigdala",
    "definitionAz": "Duyğuların, xüsusən də qorxunun işlənməsi üçün beyin quruluşu"
  },
  {
    "id": 17,
    "term": "Self-Efficacy",
    "definition": "Belief in your ability to succeed at specific tasks (Bandura)",
    "category": "Personality",
    "definitionRu": "Вера в свою способность добиться успеха в выполнении конкретных задач (Бандура)",
    "termRu": "Самоэффективность",
    "definitionHy": "Հավատք կոնկրետ առաջադրանքներում հաջողության հասնելու ձեր ունակությանը (Բանդուրա)",
    "definitionKa": "რწმენა კონკრეტულ ამოცანებში წარმატების მისაღწევად (ბანდურა)",
    "termKa": "თვითეფექტურობა",
    "termHy": "Ինքնարդյունավետություն",
    "termAz": "Öz-özünə effektivlik",
    "definitionAz": "Müəyyən tapşırıqlarda uğur qazanmaq qabiliyyətinə inam (Bandura)"
  },
  {
    "id": 18,
    "term": "Learned Helplessness",
    "definition": "Giving up after repeated failures even when escape is possible",
    "category": "Motivation",
    "termRu": "Выученная беспомощность",
    "definitionKa": "განმეორებითი წარუმატებლობის შემდეგ დანებება მაშინაც კი, როცა გაქცევა შესაძლებელია",
    "definitionHy": "Կրկնվող անհաջողություններից հետո հանձնվելը, նույնիսկ երբ հնարավոր է փախուստը",
    "termKa": "ისწავლა უმწეობა",
    "termHy": "Սովորած անօգնականություն",
    "definitionRu": "Сдаваться после повторяющихся неудач, даже если побег возможен",
    "termAz": "Çarəsizliyi öyrəndi",
    "definitionAz": "Qaçmaq mümkün olsa belə, təkrarlanan uğursuzluqlardan sonra təslim olmaq"
  },
  {
    "id": 19,
    "term": "Transference",
    "definition": "Redirecting feelings about one person onto the therapist",
    "category": "Therapy",
    "definitionKa": "ერთი ადამიანის მიმართ გრძნობების გადამისამართება თერაპევტზე",
    "termKa": "გადაცემა",
    "termHy": "Փոխանցում",
    "termRu": "перенос",
    "definitionRu": "Перенаправление чувств к одному человеку на терапевта",
    "termAz": "Köçürmə",
    "definitionHy": "Մեկ անձի մասին զգացմունքների վերահղում թերապևտի վրա",
    "definitionAz": "Bir şəxs haqqında hissləri terapevtə yönləndirmək"
  },
  {
    "id": 20,
    "term": "Heuristic",
    "definition": "Mental shortcut for quick decisions that can lead to errors",
    "category": "Cognition",
    "definitionKa": "გონებრივი მალსახმობი სწრაფი გადაწყვეტილების მისაღებად, რამაც შეიძლება გამოიწვიოს შეცდომები",
    "definitionHy": "Մտավոր դյուրանցում արագ որոշումների համար, որոնք կարող են հանգեցնել սխալների",
    "termHy": "Էվրիստիկ",
    "termKa": "ევრისტიკული",
    "termRu": "эвристика",
    "definitionRu": "Ментальный ярлык для быстрых решений, которые могут привести к ошибкам",
    "definitionAz": "Səhvlərə səbəb ola biləcək sürətli qərarlar üçün zehni qısa yol",
    "termAz": "Evristik"
  },
  {
    "id": 21,
    "term": "Synapse",
    "definition": "The gap between neurons where neurotransmitters cross",
    "category": "Biology",
    "termAz": "Sinaps",
    "termRu": "Синапс",
    "termKa": "სინაფსი",
    "termHy": "Սինապս",
    "definitionKa": "უფსკრული ნეირონებს შორის, სადაც ნეიროტრანსმიტერები კვეთენ",
    "definitionHy": "Նեյրոնների միջև ընկած բացը, որտեղ անցնում են նեյրոհաղորդիչները",
    "definitionRu": "Зазор между нейронами, где пересекаются нейротрансмиттеры",
    "definitionAz": "Neyrotransmitterlərin keçdiyi neyronlar arasındakı boşluq"
  },
  {
    "id": 22,
    "term": "Extinction",
    "definition": "Weakening of conditioned response when reinforcement stops",
    "category": "Learning",
    "termRu": "Вымирание",
    "termAz": "Yox olma",
    "definitionKa": "განპირობებული პასუხის შესუსტება, როდესაც გაძლიერება ჩერდება",
    "definitionHy": "Պայմանավորված արձագանքի թուլացում, երբ ամրապնդումը դադարում է",
    "termKa": "გადაშენება",
    "termHy": "Անհետացում",
    "definitionRu": "Ослабление условной реакции при прекращении подкрепления",
    "definitionAz": "Möhkəmləndirmə dayandıqda şərti cavabın zəifləməsi"
  },
  {
    "id": 23,
    "term": "Superego",
    "definition": "The moral conscience in Freud's personality structure",
    "category": "Personality",
    "termKa": "სუპერეგო",
    "termHy": "Սուպերէգո",
    "termRu": "Суперэго",
    "termAz": "Supereqo",
    "definitionRu": "Моральное сознание в структуре личности Фрейда",
    "definitionHy": "Բարոյական խիղճը Ֆրեյդի անձի կառուցվածքում",
    "definitionKa": "მორალური სინდისი ფროიდის პიროვნების სტრუქტურაში",
    "definitionAz": "Freydin şəxsiyyət strukturunda əxlaqi vicdan"
  },
  {
    "id": 24,
    "term": "Neuroplasticity",
    "definition": "Brain's ability to reorganize and form new neural connections",
    "category": "Biology",
    "termAz": "Neyroplastiklik",
    "termRu": "Нейропластичность",
    "definitionRu": "Способность мозга реорганизоваться и сформировать новые нейронные связи",
    "definitionHy": "Վերակազմավորվելու և նոր նյարդային կապեր ձևավորելու ուղեղի կարողությունը",
    "definitionKa": "ტვინის რეორგანიზაციისა და ახალი ნერვული კავშირების ჩამოყალიბების უნარი",
    "definitionAz": "Beynin yenidən təşkil etmək və yeni sinir əlaqələri yaratmaq qabiliyyəti",
    "termHy": "Նեյրոպլաստիկություն",
    "termKa": "ნეიროპლასტიურობა"
  }
];

