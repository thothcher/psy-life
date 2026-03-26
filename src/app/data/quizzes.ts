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
        optionsKa: ['გონების სწავლება', 'ქცევის სწავლება', 'სულის სწავლება', 'ტვინის სწავლება'],
        optionsRu: ['Изучение разума', 'Изучение поведения', 'Учение о душе', 'Изучение мозга'],
        optionsHy: [
          'Մտքի ուսումնասիրություն',
          'Վարքագծի ուսումնասիրություն',
          'Հոգու ուսումնասիրություն',
          'Ուղեղի ուսումնասիրություն',
        ],
        correctIndex: 2,
        explanation: 'The word comes from the Greek psyche (soul) and logos (study).',
        explanationKa: 'სიტყვა მომდინარეობს ბერძნული psyche (სული) და logos (სწავლება)-დან.',
        explanationRu: 'Слово происходит от греческих psyche (душа) и logos (учение).',
        explanationHy:
          'Բառն առաջացել է հունարեն psyche (հոգի) և logos (ուսումնասիրություն) բառերից:',
      },
      {
        id: 'q1_2',
        question: 'Who is considered the father of modern psychology?',
        questionKa: 'ვინ ითვლება თანამედროვე ფსიქოლოგიის მამად?',
        questionRu: 'Кто считается отцом современной психологии?',
        questionHy: 'Ո՞վ է համարվում ժամանակակից հոգեբանության հայրը:',
        options: ['Sigmund Freud', 'Wilhelm Wundt', 'William James', 'B.F. Skinner'],
        optionsKa: ['ზიგმუნდ ფროიდი', 'ვილჰელმ ვუნდტი', 'უილიამ ჯეიმსი', 'ბ.ფ. სკინერი'],
        optionsRu: ['Зигмунд Фрейд', 'Вильгельм Вундт', 'Уильям Джеймс', 'Б.Ф. Скиннер'],
        optionsHy: ['Զիգմունդ Ֆրեյդ', 'Վիլհելմ Վունդտ', 'Ուիլյամ Ջեյմս', 'Բ.Ֆ. Սկիններ'],
        correctIndex: 1,
        explanation: 'Wilhelm Wundt established the first psychology laboratory in 1879.',
        explanationKa: 'ვილჰელმ ვუნდტმა დააარსა პირველი ფსიქოლოგიური ლაბორატორია 1879 წელს.',
        explanationRu: 'Вильгельм Вундт основал первую психологическую лабораторию в 1879 году.',
        explanationHy: 'Վիլհելմ Վունդտը հիմնադրել է առաջին հոգեբանական լաբորատորիան 1879 թվականին:',
      },
      {
        id: 'q1_3',
        question: 'Which psychological perspective emphasizes the role of the unconscious mind?',
        questionKa: 'რომელი ფსიქოლოგიური პერსპექტივა უსვამს ხაზს არაცნობიერი გონების როლს?',
        questionRu: 'Какая психологическая точка зрения подчеркивает роль бессознательного?',
        questionHy: 'Ո՞ր հոգեբանական տեսանկյունն է ընդգծում անգիտակցական մտքի դերը:',
        options: ['Behaviorism', 'Humanism', 'Psychoanalysis', 'Cognitive'],
        optionsKa: ['ბიჰევიორიზმი', 'ჰუმანიზმი', 'ფსიქოანალიზი', 'კოგნიტური'],
        optionsRu: ['Бихевиоризм', 'Гуманизм', 'Психоанализ', 'Когнитивная'],
        optionsHy: ['Վարքագծային', 'Հումանիզմ', 'Հոգեվերլուծություն', 'Ճանաչողական'],
        correctIndex: 2,
        explanation:
          'Psychoanalysis, founded by Sigmund Freud, focuses on unconscious drives and conflicts.',
        explanationKa:
          'ფსიქოანალიზი, რომელიც დააარსა ზიგმუნდ ფროიდმა, ფოკუსირებულია არაცნობიერ ლტოლვებსა და კონფლიქტებზე.',
        explanationRu:
          'Психоанализ, основанный Зигмундом Фрейдом, фокусируется на бессознательных влечениях и конфликтах.',
        explanationHy:
          'Հոգեվերլուծությունը, որը հիմնադրվել է Զիգմունդ Ֆրեյդի կողմից, կենտրոնանում է անգիտակցական դրդապատճառների և հակամարտությունների վրա:',
      },
      {
        id: 'q1_4',
        question: 'Behaviorism focuses solely on:',
        questionKa: 'ბიჰევიორიზმი ფოკუსირებულია მხოლოდ:',
        questionRu: 'Бихевиоризм сосредотачивается исключительно на:',
        questionHy: 'Բիհեյվիորիզմը կենտրոնանում է բացառապես.',
        options: [
          'Unconscious thoughts',
          'Observable behavior',
          'Emotional growth',
          'Brain structures',
        ],
        optionsKa: [
          'არაცნობიერ ფიქრებზე',
          'დაკვირვებად ქცევაზე',
          'ემოციურ ზრდაზე',
          'ტვინის სტრუქტურებზე',
        ],
        optionsRu: [
          'Бессознательных мыслях',
          'Наблюдаемом поведении',
          'Эмоциональном росте',
          'Структурах мозга',
        ],
        optionsHy: [
          'Անգիտակցական մտքերի',
          'Դիտարկելի վարքի',
          'Էմոցիոնալ աճի',
          'Ուղեղի կառուցվածքների',
        ],
        correctIndex: 1,
        explanation:
          'Behaviorists believe psychology should only study observable, measurable behavior.',
        explanationKa:
          'ბიჰევიორისტებს მიაჩნიათ, რომ ფსიქოლოგიამ უნდა შეისწავლოს მხოლოდ დაკვირვებადი და გაზომვადი ქცევა.',
        explanationRu:
          'Бихевиористы считают, что психология должна изучать только наблюдаемое и измеримое поведение.',
        explanationHy:
          'Բիհեյվիորիստները կարծում են, որ հոգեբանությունը պետք է ուսումնասիրի միայն դիտարկելի, չափելի վարքագիծը:',
      },
      {
        id: 'q1_5',
        question: 'What is the modern definition of psychology?',
        questionKa: 'რა არის ფსიქოლოგიის თანამედროვე განმარტება?',
        questionRu: 'Каково современное определение психологии?',
        questionHy: 'Ո՞րն է հոգեբանության ժամանակակից սահմանումը:',
        options: [
          'The study of the soul',
          'The study of mental illness',
          'The scientific study of behavior and mental processes',
          'The study of human philosophy',
        ],
        optionsKa: [
          'სულის შემსწავლელი მეცნიერება',
          'ფსიქიკური დაავადებების შესწავლა',
          'ქცევისა და მენტალური პროცესების მეცნიერული შესწავლა',
          'ადამიანის ფილოსოფიის შესწავლა',
        ],
        optionsRu: [
          'Изучение души',
          'Изучение психических заболеваний',
          'Научное изучение поведения и психических процессов',
          'Изучение человеческой философии',
        ],
        optionsHy: [
          'Հոգու ուսումնասիրություն',
          'Հոգեկան հիվանդությունների ուսումնասիրություն',
          'Վարքագծի և մտավոր գործընթացների գիտական ուսումնասիրություն',
          'Մարդկային փիլիսոփայության ուսումնասիրություն',
        ],
        correctIndex: 2,
        explanation:
          'Today, psychology scientifically studies both observable behavior and internal mental processes.',
        explanationKa:
          'დღეს ფსიქოლოგია მეცნიერულად სწავლობს როგორც დაკვირვებად ქცევას, ასევე შინაგან მენტალურ პროცესებს.',
        explanationRu:
          'Сегодня психология научно изучает как наблюдаемое поведение, так и внутренние психические процессы.',
        explanationHy:
          'Այսօր հոգեբանությունը գիտականորեն ուսումնասիրում է և՛ դիտելի վարքագիծը, և՛ ներքին մտավոր գործընթացները:',
      },
      {
        id: 'q1_6',
        question: 'Which research method involves an in-depth study of a single individual?',
        questionKa: 'რომელი კვლევის მეთოდი გულისხმობს ერთი ინდივიდის სიღრმისეულ შესწავლას?',
        questionRu: 'Какой метод исследования включает углубленное изучение одного человека?',
        questionHy: 'Ո՞ր հետազոտության մեթոդն է ներառում մեկ անհատի խորը ուսումնասիրություն:',
        options: ['Experiment', 'Survey', 'Case study', 'Naturalistic observation'],
        optionsKa: [
          'ექსპერიმენტი',
          'გამოკითხვა',
          'შემთხვევის შესწავლა (Case study)',
          'ბუნებრივი დაკვირვება',
        ],
        optionsRu: [
          'Эксперимент',
          'Опрос',
          'Тематическое исследование (Кейс-стади)',
          'Естественное наблюдение',
        ],
        optionsHy: ['Փորձ', 'Հարցում', 'Դեպքի ուսումնասիրություն', 'Բնական դիտարկում'],
        correctIndex: 2,
        explanation: 'A case study provides deep insights but details may not apply to everyone.',
        explanationKa:
          'შემთხვევის შესწავლა გვაძლევს ღრმა ხედვას, მაგრამ დეტალები შეიძლება ყველას არ მიესადაგებოდეს.',
        explanationRu:
          'Тематическое исследование дает глубокое понимание, но детали могут быть применимы не ко всем.',
        explanationHy:
          'Դեպքի ուսումնասիրությունը տալիս է խորը պատկերացումներ, սակայն մանրամասները կարող են ոչ բոլորին վերաբերել:',
      },
      {
        id: 'q1_7',
        question: 'A testable prediction, often implied by a theory, is called a:',
        questionKa:
          'შემოწმებად წინასწარმეტყველებას, რომელიც ხშირად თეორიიდან გამომდინარეობს, ეწოდება:',
        questionRu: 'Проверяемое предсказание, часто вытекающее из теории, называется:',
        questionHy: 'Ստուգելի կանխատեսումը, որը հաճախ ենթադրվում է տեսության կողմից, կոչվում է.',
        options: ['Variable', 'Hypothesis', 'Correlation', 'Fact'],
        optionsKa: ['ცვლადი', 'ჰიპოთეზა', 'კორელაცია', 'ფაქტი'],
        optionsRu: ['Переменная', 'Гипотеза', 'Корреляция', 'Факт'],
        optionsHy: ['Փոփոխական', 'Վարկած', 'Կորելացիա', 'Փաստ'],
        correctIndex: 1,
        explanation: 'A hypothesis is an educated guess that can be scientifically tested.',
        explanationKa:
          'ჰიპოთეზა არის მეცნიერულად დასაბუთებული ვარაუდი, რომლის შემოწმებაც შესაძლებელია.',
        explanationRu: 'Гипотеза — это обоснованное предположение, которое можно научно проверить.',
        explanationHy: 'Վարկածը գիտականորեն հիմնավորված ենթադրություն է, որը կարող է ստուգվել:',
      },
      {
        id: 'q1_8',
        question: 'What does a correlation coefficient measure?',
        questionKa: 'რას ზომავს კორელაციის კოეფიციენტი?',
        questionRu: 'Что измеряет коэффициент корреляции?',
        questionHy: 'Ի՞նչ է չափում կորելացիայի գործակիցը:',
        options: [
          'Cause and effect',
          'The degree of relationship between two variables',
          'The average of a dataset',
          'Brain wave activity',
        ],
        optionsKa: [
          'მიზეზს და შედეგს',
          'ორ ცვლადს შორის ურთიერთობის ხარისხს',
          'მონაცემთა საშუალოს',
          'ტვინის ტალღების აქტივობას',
        ],
        optionsRu: [
          'Причину и следствие',
          'Степень связи между двумя переменными',
          'Среднее значение набора данных',
          'Активность мозговых волн',
        ],
        optionsHy: [
          'Պատճառ և հետևանք',
          'Երկու փոփոխականների միջև կապի աստիճանը',
          'Տվյալների բազայի միջինը',
          'Ուղեղի ալիքների ակտիվությունը',
        ],
        correctIndex: 1,
        explanation:
          'Correlation describes how strongly two variables vary together, but does not imply causation.',
        explanationKa:
          'კორელაცია აღწერს, თუ რამდენად ძლიერად იცვლება ორი ცვლადი ერთად, მაგრამ არ გულისხმობს მიზეზ-შედეგობრიობას.',
        explanationRu:
          'Корреляция описывает, насколько сильно две переменные изменяются вместе, но не означает причинно-следственную связь.',
        explanationHy:
          'Կորելացիան նկարագրում է, թե որքան ուժեղ են երկու փոփոխականները տատանվում միասին, բայց չի ենթադրում պատճառահետևանքային կապ:',
      },
      {
        id: 'q1_9',
        question: 'In an experiment, the variable that the researcher manipulates is the:',
        questionKa: 'ექსპერიმენტში ცვლადს, რომელსაც იკვლევს/მანიპულირებს მკვლევარი, ეწოდება:',
        questionRu: 'В эксперименте переменная, которой манипулирует исследователь, это:',
        questionHy:
          'Փորձի ընթացքում փոփոխականը, որով մանիպուլյացիա է անում հետազոտողը, հետևյալն է.',
        options: [
          'Dependent variable',
          'Confounding variable',
          'Independent variable',
          'Control variable',
        ],
        optionsKa: [
          'დამოკიდებული ცვლადი',
          'თანმხლები/დამაბრკოლებელი ცვლადი',
          'დამოუკიდებელი ცვლადი',
          'კონტროლის ცვლადი',
        ],
        optionsRu: [
          'Зависимая переменная',
          'Смешивающая переменная',
          'Независимая переменная',
          'Контрольная переменная',
        ],
        optionsHy: [
          'Կախյալ փոփոխական',
          'Շփոթեցնող փոփոխական',
          'Անկախ փոփոխական',
          'Վերահսկվող փոփոխական',
        ],
        correctIndex: 2,
        explanation:
          'The independent variable is the cause; the dependent variable is the measured effect.',
        explanationKa:
          'დამოუკიდებელი ცვლადი არის მიზეზი; დამოკიდებული ცვლადი არის გაზომილი შედეგი.',
        explanationRu:
          'Независимая переменная является причиной; зависимая переменная — измеряемым следствием.',
        explanationHy: 'Անկախ փոփոխականը պատճառն է. կախյալ փոփոխականը չափվող էֆեկտն է:',
      },
      {
        id: 'q1_10',
        question: 'The biopsychosocial approach integrates:',
        questionKa: 'ბიოფსიქოსოციალური მიდგომა აერთიანებს:',
        questionRu: 'Биопсихосоциальный подход объединяет:',
        questionHy: 'Բիոհոգեսոցիալական մոտեցումը միավորում է.',
        options: [
          'Only biological factors',
          'Biological, psychological, and social-cultural factors',
          'Psychological and unobservable factors',
          'Social and cultural factors only',
        ],
        optionsKa: [
          'მხოლოდ ბიოლოგიურ ფაქტორებს',
          'ბიოლოგიურ, ფსიქოლოგიურ და სოციალურ-კულტურულ ფაქტორებს',
          'ფსიქოლოგიურ და დაუკვირვებად ფაქტორებს',
          'მხოლოდ სოციალურ და კულტურულ ფაქტორებს',
        ],
        optionsRu: [
          'Только биологические факторы',
          'Биологические, психологические и социокультурные факторы',
          'Психологические и ненаблюдаемые факторы',
          'Только социальные и культурные факторы',
        ],
        optionsHy: [
          'Միայն կենսաբանական գործոններ',
          'Կենսաբանական, հոգեբանական և սոցիալ-մշակութային գործոններ',
          'Հոգեբանական և աննկատելի գործոններ',
          'Միայն սոցիալական և մշակութային գործոններ',
        ],
        correctIndex: 1,
        explanation:
          'This integrated approach provides a more complete picture of behavior and mental processes.',
        explanationKa:
          'ეს ინტეგრირებული მიდგომა გვაძლევს ქცევისა და მენტალური პროცესების უფრო სრულ სურათს.',
        explanationRu:
          'Этот комплексный подход обеспечивает более полную картину поведения и психических процессов.',
        explanationHy:
          'Այս ինտեգրված մոտեցումն ապահովում է վարքագծի և հոգեկան գործընթացների ավելի ամբողջական պատկեր:',
      },
      {
        id: 'q1_11',
        question:
          'Which ethical principle requires telling participants about the study before they agree to participate?',
        questionKa:
          'რომელი ეთიკური პრინციპი მოითხოვს მონაწილეების ინფორმირებას კვლევის შესახებ, სანამ ისინი დათანხმდებიან მონაწილეობაზე?',
        questionRu:
          'Какое этическое правило требует информировать участников об исследовании до того, как они согласятся на участие?',
        questionHy:
          'Ո՞ր էթիկական սկզբունքն է պահանջում մասնակիցներին պատմել ուսումնասիրության մասին մինչև նրանց մասնակցության համաձայնությունը:',
        options: ['Debriefing', 'Informed consent', 'Confidentiality', 'Deception'],
        optionsKa: ['დებრიფინგი', 'ინფორმირებული თანხმობა', 'კონფიდენციალურობა', 'მოტყუება'],
        optionsRu: ['Дебрифинг', 'Информированное согласие', 'Конфиденциальность', 'Обман'],
        optionsHy: ['Դեբրիֆինգ', 'Տեղեկացված համաձայնություն', 'Գաղտնիություն', 'Խաբեություն'],
        correctIndex: 1,
        explanation:
          'Informed consent ensures participants are aware of any potential risks before participating.',
        explanationKa:
          'ინფორმირებული თანხმობა უზრუნველყოფს, რომ მონაწილეებმა იცოდნენ პოტენციური რისკების შესახებ მონაწილეობამდე.',
        explanationRu:
          'Информированное согласие гарантирует, что участники знают о возможных рисках до участия.',
        explanationHy:
          'Տեղեկացված համաձայնությունը երաշխավորում է, որ մասնակիցները նախքան մասնակցելը տեղյակ են հնարավոր ռիսկերի մասին:',
      },
      {
        id: 'q1_12',
        question: 'Cognitive psychology is the study of:',
        questionKa: 'კოგნიტური ფსიქოლოგია სწავლობს:',
        questionRu: 'Когнитивная психология — это изучение:',
        questionHy: 'Ճանաչողական հոգեբանությունը ուսումնասիրությունն է.',
        options: [
          'How we behave in groups',
          'Mental processes such as thinking, memory, and perception',
          'Neurological structures',
          'Animal behavior',
        ],
        optionsKa: [
          'როგორ ვიქცევით ჯგუფებში',
          'ისეთ მენტალურ პროცესებს, როგორიცაა აზროვნება, მეხსიერება და აღქმა',
          'ნევროლოგიურ სტრუქტურებს',
          'ცხოველთა ქცევას',
        ],
        optionsRu: [
          'Того, как мы ведем себя в группах',
          'Психических процессов, таких как мышление, память и восприятие',
          'Неврологических структур',
          'Поведения животных',
        ],
        optionsHy: [
          'Թե ինչպես ենք մենք մեզ պահում խմբերում',
          'Մտավոր գործընթացների, ինչպիսիք են մտածողությունը, հիշողությունը և ընկալումը',
          'Նյարդաբանական կառույցներ',
          'Կենդանիների վարքագիծ',
        ],
        correctIndex: 1,
        explanation:
          'The cognitive perspective focuses on how people encode, process, store, and retrieve information.',
        explanationKa:
          'კოგნიტური პერსპექტივა ფოკუსირებულია იმაზე, თუ როგორ აღიქვამენ, ამუშავებენ, ინახავენ და აღადგენენ ადამიანები ინფორმაციას.',
        explanationRu:
          'Когнитивная перспектива сосредотачивается на том, как люди кодируют, обрабатывают, хранят и извлекают информацию.',
        explanationHy:
          'Ճանաչողական հեռանկարը կենտրոնանում է այն բանի վրա, թե ինչպես են մարդիկ կոդավորում, մշակում, պահպանում և առբերում տեղեկատվությունը:',
      },
      {
        id: 'q1_13',
        question:
          'Explaining the purpose of the study to participants after it is over is known as:',
        questionKa: 'კვლევის დასრულების შემდეგ მონაწილეებისთვის მისი მიზნის ახსნას ეწოდება:',
        questionRu: 'Объяснение цели исследования участникам после его завершения называется:',
        questionHy:
          'Մասնակիցներին հետազոտության նպատակի բացատրությունը դրա ավարտից հետո հայտնի է որպես.',
        options: [
          'Debriefing',
          'Informed consent',
          'Naturalistic observation',
          'Double-blind procedure',
        ],
        optionsKa: [
          'დებრიფინგი',
          'ინფორმირებული თანხმობა',
          'ბუნებრივი დაკვირვება',
          'ორმაგი ბრმა პროცედურა',
        ],
        optionsRu: [
          'Дебрифинг',
          'Информированное согласие',
          'Естественное наблюдение',
          'Двойная слепая процедура',
        ],
        optionsHy: [
          'Դեբրիֆինգ',
          'Տեղեկացված համաձայնություն',
          'Բնական դիտարկում',
          'Կրկնակի կույր ընթացակարգ',
        ],
        correctIndex: 0,
        explanation:
          'Debriefing is a crucial ethical step, especially if the study involved any deception.',
        explanationKa:
          'დებრიფინგი მნიშვნელოვანი ეთიკური ნაბიჯია, განსაკუთრებით მაშინ, თუ კვლევა შეიცავდა რაიმე სახის მოტყუებას.',
        explanationRu:
          'Дебрифинг — важный этический шаг, особенно если в исследовании использовался обман.',
        explanationHy:
          'Դեբրիֆինգը կարևոր էթիկական քայլ է, հատկապես, եթե ուսումնասիրությունը որևէ խաբեություն է պարունակում:',
      },
      {
        id: 'q1_14',
        question: 'Who was the first woman to earn a Ph.D. in psychology?',
        questionKa: 'ვინ იყო პირველი ქალი, რომელმაც მოიპოვა Ph.D. ხარისხი ფსიქოლოგიაში?',
        questionRu:
          'Кто была первой женщиной, получившей степень доктора философии (Ph.D.) по психологии?',
        questionHy: 'Ո՞վ էր առաջին կինը, ով ստացավ հոգեբանության դոկտորի կոչում:',
        options: ['Mary Whiton Calkins', 'Margaret Floy Washburn', 'Dorothea Dix', 'Anna Freud'],
        optionsKa: ['მერი უიტონ კალკინსი', 'მარგარეტ ფლოი უოშბერნი', 'დოროთეა დიქსი', 'ანა ფროიდი'],
        optionsRu: ['Мэри Уитон Калкинс', 'Маргарет Флой Уошберн', 'Доротея Дикс', 'Анна Фрейд'],
        optionsHy: ['Մերի Ուիթոն Քալքինս', 'Մարգարետ Ֆլոյ Ուաշբերն', 'Դորոթեա Դիքս', 'Աննա Ֆրեյդ'],
        correctIndex: 1,
        explanation:
          'Margaret Floy Washburn became the first woman to officially receive a psychology Ph.D. in 1894.',
        explanationKa:
          'მარგარეტ ფლოი უოშბერნი გახდა პირველი ქალი, რომელმაც ოფიციალურად მიიღო Ph.D. ფსიქოლოგიაში 1894 წელს.',
        explanationRu:
          'Маргарет Флой Уошберн стала первой женщиной, официально получившей степень доктора философии по психологии в 1894 году.',
        explanationHy:
          'Մարգարետ Ֆլոյ Ուոշբերնը դարձավ առաջին կինը, ով պաշտոնապես ստացել է հոգեբանության դոկտորի կոչում 1894 թվականին:',
      },
      {
        id: 'q1_15',
        question: 'A random sample guarantees that:',
        questionKa: 'შემთხვევითი შერჩევა (Random sample) იძლევა გარანტიას, რომ:',
        questionRu: 'Случайная выборка гарантирует, что:',
        questionHy: 'Պատահական նմուշը երաշխավորում է, որ.',
        options: [
          'The sample is entirely unbiased',
          'Every member of the population has an equal chance of being chosen',
          'The exact cause and effect will be found',
          'There will be no confounding variables',
        ],
        optionsKa: [
          'შერჩევა აბსოლუტურად მიუკერძოებელია',
          'პოპულაციის თითოეულ წევრს აქვს არჩევის თანაბარი შანსი',
          'ზუსტი მიზეზი და შედეგი იქნება ნაპოვნი',
          'არ იქნება დამაბრკოლებელი ცვლადები',
        ],
        optionsRu: [
          'Выборка полностью непредвзята',
          'Каждый член популяции имеет равные шансы быть выбранным',
          'Будет найдена точная причина и следствие',
          'Не будет смешивающих переменных',
        ],
        optionsHy: [
          'Նմուշը լիովին անաչառ է',
          'Բնակչության յուրաքանչյուր անդամ ունի ընտրվելու հավասար հնարավորություն',
          'Կգտնվի ճշգրիտ պատճառն ու հետևանքը',
          'Չեն լինի շփոթեցնող փոփոխականներ',
        ],
        correctIndex: 1,
        explanation:
          'Random sampling helps ensure the survey group accurately represents the wider population.',
        explanationKa:
          'შემთხვევითი შერჩევა გვეხმარება უზრუნველვყოთ, რომ საკვლევი ჯგუფი ზუსტად წარმოადგენდეს ფართო პოპულაციას.',
        explanationRu:
          'Случайная выборка помогает гарантировать, что группа опроса точно представляет более широкую популяцию.',
        explanationHy:
          'Պատահական նմուշառումն օգնում է ապահովել, որ հարցվող խումբը ճշգրտորեն ներկայացնում է ավելի լայն բնակչությանը:',
      },
    ],
  },
  {
    id: 'q2',
    chapterId: 2,
    title: 'Research Methods in Psychology',
    titleKa: 'კვლევის მეთოდები ფსიქოლოგიაში',
    titleRu: 'Методы исследования в психологии',
    titleHy: 'Հետազոտության մեթոդները հոգեբանության մեջ',
    questions: [
      {
        id: 'q2_1',
        question: 'What is the primary advantage of the experimental method?',
        questionKa: 'რა არის ექსპერიმენტული მეთოდის მთავარი უპირატესობა?',
        questionRu: 'В чем главное преимущество экспериментального метода?',
        questionHy: 'Ո՞րն է փորձարարական մեթոդի հիմնական առավելությունը:',
        options: [
          'It allows observation in natural settings',
          'It establishes cause-and-effect relationships',
          'It is the most ethical method',
          'It requires no control group',
        ],
        optionsKa: [
          'საშუალებას იძლევა დაკვირვების ბუნებრივ გარემოში',
          'ადგენს მიზეზ-შედეგობრივ კავშირებს',
          'ყველაზე ეთიკური მეთოდია',
          'არ საჭიროებს საკონტროლო ჯგუფს',
        ],
        optionsRu: [
          'Позволяет наблюдать в естественных условиях',
          'Устанавливает причинно-следственные связи',
          'Это самый этичный метод',
          'Не требует контрольной группы',
        ],
        optionsHy: [
          'Թույլ է տալիս դիտարկել բնական միջավայրում',
          'Հաստատում է պատճառահետևանքային կապեր',
          'Ամենաէթիկական մեթոդն է',
          'Չի պահանջում ստուգիչ խումբ',
        ],
        correctIndex: 1,
        explanation:
          'Experiments allow researchers to manipulate variables to determine cause and effect.',
        explanationKa:
          'ექსპერიმენტები მკვლევარებს საშუალებას აძლევს მართონ ცვლადები მიზეზ-შედეგობრიობის დასადგენად.',
        explanationRu:
          'Эксперименты позволяют исследователям манипулировать переменными для определения причин и следствий.',
        explanationHy:
          'Փորձերը թույլ են տալիս հետազոտողներին փոփոխել փոփոխականները պատճառն ու հետևանքը որոշելու համար:',
      },
      {
        id: 'q2_2',
        question: 'In a double-blind study, who is unaware of group assignments?',
        questionKa: 'ორმაგად ბრმა კვლევაში, ვინ არ იცის ჯგუფებში განაწილების შესახებ?',
        questionRu: 'В двойном слепом исследовании, кто не знает о распределении по группам?',
        questionHy: 'Կրկնակի կույր հետազոտության մեջ ո՞վ տեղյակ չէ խմբերի բաշխման մասին:',
        options: [
          'Only the participants',
          'Only the researchers',
          'Both participants and researchers',
          'The ethics committee',
        ],
        optionsKa: [
          'მხოლოდ მონაწილეებმა',
          'მხოლოდ მკვლევარებმა',
          'როგორც მონაწილეებმა, ისე მკვლევარებმა',
          'ეთიკის კომიტეტმა',
        ],
        optionsRu: [
          'Только участники',
          'Только исследователи',
          'И участники, и исследователи',
          'Комитет по этике',
        ],
        optionsHy: [
          'Միայն մասնակիցները',
          'Միայն հետազոտողները',
          'Թե՛ մասնակիցները, թե՛ հետազոտողները',
          'Էթիկայի հանձնաժողովը',
        ],
        correctIndex: 2,
        explanation:
          'This prevents both participant expectations and researcher bias from affecting results.',
        explanationKa:
          'ეს ხელს უშლის როგორც მონაწილეთა მოლოდინების, ისე მკვლევართა მიკერძოების გავლენას შედეგებზე.',
        explanationRu:
          'Это предотвращает влияние ожиданий участников и предвзятости исследователей на результаты.',
        explanationHy:
          'Սա կանխում է արդյունքների վրա մասնակիցների ակնկալիքների և հետազոտողի կողմնակալության ազդեցությունը:',
      },
      {
        id: 'q2_3',
        question: 'What is the placebo effect?',
        questionKa: 'რა არის პლაცებოს ეფექტი?',
        questionRu: 'Что такое эффект плацебо?',
        questionHy: 'Ի՞նչ է պլացեբոյի էֆեկտը։',
        options: [
          'Negative reaction to treatment',
          'Results caused by expectations alone',
          'Perfect correlation between variables',
          'A specific ethical guideline',
        ],
        optionsKa: [
          'მკურნალობაზე უარყოფითი რეაქცია',
          'მხოლოდ მოლოდინით გამოწვეული შედეგები',
          'ცვლადებს შორის იდეალური კორელაცია',
          'კონკრეტული ეთიკური წესი',
        ],
        optionsRu: [
          'Негативная реакция на лечение',
          'Результаты, вызванные исключительно ожиданиями',
          'Идеальная корреляция между переменными',
          'Определенное этическое правило',
        ],
        optionsHy: [
          'Բուժման նկատմամբ բացասական ռեակցիա',
          'Միայն ակնկալիքներով պայմանավորված արդյունքներ',
          'Փոփոխականների միջև կատարյալ հարաբերակցություն',
          'Հատուկ էթիկական ուղեցույց',
        ],
        correctIndex: 1,
        explanation:
          'Believing you are getting treatment can reduce symptoms based on expectations.',
        explanationKa:
          'მკურნალობის რწმენამ შეიძლება შეამციროს სიმპტომები მხოლოდ მოლოდინის საფუძველზე.',
        explanationRu: 'Вера в получение лечения может уменьшить симптомы на основе ожиданий.',
        explanationHy:
          'Բուժում ստանալու հավատը կարող է նվազեցնել ախտանիշները միայն ակնկալիքների հիման վրա:',
      },
      {
        id: 'q2_4',
        question: 'Random assignment is used to:',
        questionKa: 'რანდომიზებული განაწილება გამოიყენება:',
        questionRu: 'Случайное распределение используется для:',
        questionHy: 'Պատահական բաշխումն օգտագործվում է.',
        options: [
          'Select participants',
          'Minimize differences between groups',
          'Ensure study ethics',
          'Calculate statistics',
        ],
        optionsKa: [
          'მონაწილეთა შესარჩევად',
          'ჯგუფებს შორის სხვაობების მინიმიზაციისთვის',
          'კვლევის ეთიკურობის უზრუნველსაყოფად',
          'სტატისტიკის გამოსათვლელად',
        ],
        optionsRu: [
          'Выбора участников',
          'Минимизации различий между группами',
          'Обеспечения этичности исследования',
          'Расчета статистики',
        ],
        optionsHy: [
          'Մասնակիցներ ընտրելու համար',
          'Խմբերի միջև տարբերությունները նվազագույնի հասցնելու համար',
          'Հետազոտության էթիկան ապահովելու համար',
          'Վիճակագրություն հաշվարկելու համար',
        ],
        correctIndex: 1,
        explanation: 'It equals out baseline differences by randomly placing people into groups.',
        explanationKa: 'ის ათანაბრებს საწყის სხვაობებს ადამიანთა ჯგუფებში შემთხვევითი განაწილებით.',
        explanationRu:
          'Оно выравнивает исходные различия путем случайного распределения людей по группам.',
        explanationHy:
          'Այն հավասարեցնում է ելակետային տարբերությունները՝ մարդկանց պատահականորեն խմբերի բաժանելով:',
      },
      {
        id: 'q2_5',
        question: 'What is an operational definition?',
        questionKa: 'რა არის ოპერაციული დეფინიცია?',
        questionRu: 'Что такое операциональное определение?',
        questionHy: 'Ի՞նչ է գործառնական սահմանումը։',
        options: [
          'Dictionary meaning',
          'Precise description of variable measurement',
          'Brain surgery method',
          'Ethical rule',
        ],
        optionsKa: [
          'ლექსიკონის მნიშვნელობა',
          'ცვლადის გაზომვის ზუსტი აღწერა',
          'თავის ტვინის ქირურგიის მეთოდი',
          'ეთიკური წესი',
        ],
        optionsRu: [
          'Словарное значение',
          'Точное описание измерения переменной',
          'Метод хирургии мозга',
          'Этическое правило',
        ],
        optionsHy: [
          'Բառարանային իմաստ',
          'Փոփոխականների չափման ճշգրիտ նկարագրություն',
          'Ուղեղի վիրահատության մեթոդ',
          'Էթիկական կանոն',
        ],
        correctIndex: 1,
        explanation: 'It ensures exactly how a variable is measured so others can replicate.',
        explanationKa:
          'ის უზრუნველყოფს თუ ზუსტად როგორ იზომება ცვლადი, რათა სხვებმა შეძლონ გამეორება.',
        explanationRu:
          'Оно определяет, как именно измеряется переменная, чтобы другие могли повторить.',
        explanationHy:
          'Այն ապահովում է փոփոխականի չափման ճշգրտությունը, որպեսզի մյուսները կարողանան կրկնել այն:',
      },
      {
        id: 'q2_6',
        question: 'Which measure is most affected by extreme values?',
        questionKa: 'რომელ საზომზე ახდენს ექსტრემალური მნიშვნელობები ყველაზე დიდ გავლენას?',
        questionRu: 'На какую меру больше всего влияют экстремальные значения?',
        questionHy: 'Ո՞ր ցուցանիշի վրա են առավելապես ազդում ծայրահեղ արժեքները:',
        options: ['Median', 'Mode', 'Mean', 'Standard Deviation'],
        optionsKa: ['მედიანა', 'მოდა', 'საშუალო', 'სტანდარტული გადახრა'],
        optionsRu: ['Медиана', 'Мода', 'Среднее', 'Стандартное отклонение'],
        optionsHy: ['Միջնարժեք', 'Մոդա', 'Միջին', 'Ստանդարտ շեղում'],
        correctIndex: 2,
        explanation: 'The mean shifts significantly when one number is vastly different.',
        explanationKa:
          'საშუალო მნიშვნელობა საგრძნობლად ინაცვლებს როცა ერთი რიცხვი მკვეთრად განსხვავებულია.',
        explanationRu:
          'Среднее значение значительно смещается, когда одно число сильно отличается.',
        explanationHy: 'Միջինը զգալիորեն տեղաշարժվում է, երբ մեկ թիվ խիստ տարբերվում է:',
      },
      {
        id: 'q2_7',
        question: 'What is replication in research?',
        questionKa: 'რა არის რეპლიკაცია კვლევაში?',
        questionRu: 'Что такое репликация в исследовании?',
        questionHy: 'Ի՞նչ է ռեպլիկացիան (կրկնօրինակումը) հետազոտության մեջ:',
        options: [
          'Plagiarism',
          'Repeating a study to see if findings extend',
          'Faking data',
          'Measuring twice',
        ],
        optionsKa: [
          'პლაგიატი',
          'კვლევის გამეორება შედეგების შესამოწმებლად',
          'მონაცემთა გაყალბება',
          'ორჯერ გაზომვა',
        ],
        optionsRu: [
          'Плагиат',
          'Повторение исследования для проверки результатов',
          'Фальсификация данных',
          'Двойное измерение',
        ],
        optionsHy: [
          'Գրագողություն',
          'Հետազոտության կրկնություն՝ արդյունքները ստուգելու համար',
          'Տվյալների կեղծում',
          'Կրկնակի չափում',
        ],
        correctIndex: 1,
        explanation: 'Replication confirms the validity and reliability of findings.',
        explanationKa: 'რეპლიკაცია ადასტურებს შედეგების ვალიდურობას და საიმედოობას.',
        explanationRu: 'Репликация подтверждает валидность и надежность результатов.',
        explanationHy:
          'Կրկնօրինակումը հաստատում է արդյունքների վավերականությունն ու հուսալիությունը:',
      },
      {
        id: 'q2_8',
        question: 'A negative correlation means that:',
        questionKa: 'უარყოფითი კორელაცია ნიშნავს რომ:',
        questionRu: 'Отрицательная корреляция означает, что:',
        questionHy: 'Բացասական հարաբերակցությունը նշանակում է որ.',
        options: [
          'Both decrease together',
          'As one increases, the other decreases',
          'No relationship exists',
          'Result is negative',
        ],
        optionsKa: [
          'ორივე ერთად მცირდება',
          'როცა ერთი იზრდება, მეორე მცირდება',
          'კავშირი არ არსებობს',
          'შედეგი უარყოფითია',
        ],
        optionsRu: [
          'Обе уменьшаются',
          'Когда одна увеличивается, другая уменьшается',
          'Связи нет',
          'Результат отрицательный',
        ],
        optionsHy: [
          'Երկուսն էլ միասին նվազում են',
          'Երբ մեկը մեծանում է, մյուսը նվազում է',
          'Կապ գոյություն չունի',
          'Արդյունքը բացասական է',
        ],
        correctIndex: 1,
        explanation: 'Variables move in opposite directions in negative correlation.',
        explanationKa: 'უარყოფითი კორელაციისას ცვლადები საპირისპირო მიმართულებით მოძრაობენ.',
        explanationRu:
          'При отрицательной корреляции переменные движутся в противоположных направлениях.',
        explanationHy:
          'Բացասական հարաբերակցության դեպքում փոփոխականները շարժվում են հակառակ ուղղություններով:',
      },
      {
        id: 'q2_9',
        question: 'Which is an example of naturalistic observation?',
        questionKa: 'რომელია ბუნებრივი დაკვირვების მაგალითი?',
        questionRu: 'Что является примером естественного наблюдения?',
        questionHy: 'Ո՞րն է բնական դիտարկման օրինակ։',
        options: [
          'Lab testing',
          'Watching chimps in the wild',
          'Giving a survey',
          'Structured interview',
        ],
        optionsKa: [
          'ლაბორატორიული ტესტირება',
          'შიმპანზეებზე დაკვირვება ველურ ბუნებაში',
          'გამოკითხვის ჩატარება',
          'სტრუქტურირებული ინტერვიუ',
        ],
        optionsRu: [
          'Лабораторное тестирование',
          'Наблюдение за шимпанзе в дикой природе',
          'Проведение опроса',
          'Структурированное интервью',
        ],
        optionsHy: [
          'Լաբորատոր փորձարկում',
          'Շիմպանզեների դիտարկումը վայրի բնությունում',
          'Հարցում անցկացնելը',
          'Կառուցվածքային հարցազրույց',
        ],
        correctIndex: 1,
        explanation: 'It requires watching behavior in real-world settings without manipulation.',
        explanationKa: 'მოითხოვს ქცევაზე დაკვირვებას რეალურ გარემოში მანიპულაციის გარეშე.',
        explanationRu: 'Оно требует наблюдения за поведением в реальных условиях без манипуляций.',
        explanationHy: 'Այն պահանջում է հետևել վարքագծին իրական պայմաններում՝ առանց միջամտության:',
      },
      {
        id: 'q2_10',
        question: 'Standard deviation measures:',
        questionKa: 'სტანდარტული გადახრა ზომავს:',
        questionRu: 'Стандартное отклонение измеряет:',
        questionHy: 'Ստանդարտ շեղումը չափում է.',
        options: [
          'How much scores vary around the mean',
          'The most frequent score',
          'Difference between high and low',
          'Significance',
        ],
        optionsKa: [
          'რამდენად ვარირებს ქულები საშუალოს გარშემო',
          'ყველაზე ხშირ ქულას',
          'განსხვავებას მაღალს და დაბალს შორის',
          'მნიშვნელოვნებას',
        ],
        optionsRu: [
          'Как сильно значения варьируются вокруг среднего',
          'Наиболее частое значение',
          'Разницу между наибольшим и наименьшим',
          'Значимость',
        ],
        optionsHy: [
          'Որքանով են միավորները տատանվում միջինի շուրջ',
          'Ամենահաճախ հանդիպող միավորը',
          'Տարբերությունը բարձր և ցածր միավորների միջև',
          'Նշանակալիությունը',
        ],
        correctIndex: 0,
        explanation: 'It tells if scores are packed together or dispersed.',
        explanationKa: 'გვიჩვენებს, მონაცემები კომპაქტურია თუ გაფანტული.',
        explanationRu: 'Показывает, сгруппированы ли значения вместе или рассеяны.',
        explanationHy: 'Այն ցույց է տալիս, թե արդյոք տվյալները հոծ են, թե ցրված:',
      },
      {
        id: 'q2_11',
        question: 'What is a confounding variable?',
        questionKa: 'რა არის თანმდევი (შემშლელი) ცვლადი?',
        questionRu: 'Что такое сопутствующая (смешивающая) переменная?',
        questionHy: 'Ի՞նչ է խանգարող փոփոխականը։',
        options: [
          'Independent variable',
          'A factor other than independent variable that might affect results',
          'Dependent variable',
          'Constant variable',
        ],
        optionsKa: [
          'დამოუკიდებელი ცვლადი',
          'ფაქტორი გარდა დამოუკიდებელი ცვლადისა, რომელმაც შეიძლება იმოქმედოს',
          'დამოკიდებული ცვლადი',
          'მუდმივი ცვლადი',
        ],
        optionsRu: [
          'Независимая переменная',
          'Фактор, кроме независимой переменной, который может повлиять',
          'Зависимая переменная',
          'Постоянная переменная',
        ],
        optionsHy: [
          'Անկախ փոփոխական',
          'Անկախ փոփոխականից բացի այլ գործոն, որը կարող է ազդել',
          'Կախյալ փոփոխական',
          'Մշտական փոփոխական',
        ],
        correctIndex: 1,
        explanation: "Researchers control these so they don't alter experiment results.",
        explanationKa: 'მკვლევარები აკონტროლებენ მათ, რათა არ შეცვალონ შედეგები.',
        explanationRu: 'Исследователи контролируют их, чтобы они не изменили результаты.',
        explanationHy: 'Հետազոտողները վերահսկում են դրանք, որպեսզի չփոխեն արդյունքները:',
      },
      {
        id: 'q2_12',
        question: "When is a result 'statistically significant'?",
        questionKa: "როდის არის შედეგი 'სტატისტიკურად მნიშვნელოვანი'?",
        questionRu: "Когда результат 'статистически значим'?",
        questionHy: 'Ե՞րբ է արդյունքը «վիճակագրորեն նշանակալի»:',
        options: [
          'When it differs by 100%',
          'When it is likely not due to chance',
          'When sample is >100',
          'When standard deviation is zero',
        ],
        optionsKa: [
          'როცა განსხვავდება 100%-ით',
          'როცა სავარაუდოდ არ არის შემთხვევითი',
          'როცა შერჩევა >100',
          'როცა გადახრა ნულია',
        ],
        optionsRu: [
          'Когда он отличается на 100%',
          'Когда он, вероятно, не случаен',
          'Когда выборка >100',
          'Когда отклонение равно нулю',
        ],
        optionsHy: [
          'Երբ այն տարբերվում է 100%-ով',
          'Երբ հավանական է, որ այն պատահական չէ',
          'Երբ ընտրանքը >100 է',
          'Երբ շեղումը զրո է',
        ],
        correctIndex: 1,
        explanation: 'It indicates the likelihood of result happening by chance is very low.',
        explanationKa: 'მიუთითებს, რომ შედეგის შემთხვევითობის ალბათობა ძალიან დაბალია.',
        explanationRu: 'Указывает на то, что вероятность случайного результата очень низка.',
        explanationHy:
          'Ցույց է տալիս, որ արդյունքի պատահական լինելու հավանականությունը շատ ցածր է:',
      },
      {
        id: 'q2_13',
        question: 'The way a question is framed affecting answers is:',
        questionKa: 'კითხვის ფორმულირების გავლენას პასუხებზე ეწოდება:',
        questionRu: 'Влияние формулировки вопроса на ответы называется:',
        questionHy: 'Հարցի ձևակերպման ազդեցությունը պատասխանների վրա կոչվում է.',
        options: ['Placebo effect', 'Wording effect', 'Sampling error', 'Observer bias'],
        optionsKa: [
          'პლაცებოს ეფექტი',
          'ფორმულირების ეფექტი',
          'შერჩევის შეცდომა',
          'დამკვირვებლის მიკერძოება',
        ],
        optionsRu: [
          'Эффект плацебо',
          'Эффект формулировки',
          'Ошибка выборки',
          'Предвзятость наблюдателя',
        ],
        optionsHy: [
          'Պլացեբոյի էֆեկտ',
          'Ձևակերպման էֆեկտ',
          'Ընտրանքի սխալ',
          'Դիտարկողի կողմնակալություն',
        ],
        correctIndex: 1,
        explanation: 'Subtle changes in wording can sharply alter survey results.',
        explanationKa:
          'ფორმულირების მცირე ცვლილებებმა შეიძლება მკვეთრად შეცვალოს გამოკითხვის შედეგები.',
        explanationRu:
          'Незначительные изменения в формулировке могут резко изменить результаты опроса.',
        explanationHy:
          'Ձևակերպման աննշան փոփոխությունները կարող են կտրուկ փոխել հարցման արդյունքները:',
      },
      {
        id: 'q2_14',
        question: 'Hindsight bias refers to:',
        questionKa: 'უკანდახედვის მიკერძოება (Hindsight bias) ნიშნავს:',
        questionRu: 'Ошибка предвзятости задним числом:',
        questionHy: 'Հետին թվով կողմնակալությունը նշանակում է.',
        options: [
          'Overestimating ability to predict post-event',
          'Forgetting the past',
          'Assuming bad outcomes',
          'Being objective',
        ],
        optionsKa: [
          'მოვლენის მერე პროგნოზირების უნარის გადაჭარბებულად შეფასებას',
          'წარსულის დავიწყებას',
          'ცუდი შედეგების ვარაუდს',
          'ობიექტურობას',
        ],
        optionsRu: [
          'Переоценку способности предсказать после события',
          'Забывание прошлого',
          'Предположение плохих исходов',
          'Объективность',
        ],
        optionsHy: [
          'Իրադարձությունից հետո կանխատեսելու ունակության գերագնահատում',
          'Անցյալը մոռանալը',
          'Վատ արդյունքների ենթադրություն',
          'Օբյեկտիվ լինելը',
        ],
        correctIndex: 0,
        explanation: "The 'I-knew-it-all-along' phenomenon.",
        explanationKa: "'მე-თავიდანვე-ვიცოდი' ფენომენი.",
        explanationRu: "Феномен 'я-так-и-знал'.",
        explanationHy: '«Ես-սկզբից-էլ-գիտեի» ֆենոմենը:',
      },
      {
        id: 'q2_15',
        question: 'Which method establishes cause-and-effect?',
        questionKa: 'რომელი მეთოდი ადგენს მიზეზ-შედეგობრივ კავშირს?',
        questionRu: 'Какой метод устанавливает причинно-следственную связь?',
        questionHy: 'Ո՞ր մեթոդն է հաստատում պատճառահետևանքային կապ։',
        options: ['Correlation', 'Experiment', 'Survey', 'Case Study'],
        optionsKa: ['კორელაცია', 'ექსპერიმენტი', 'გამოკითხვა', 'შემთხვევის შესწავლა (Case Study)'],
        optionsRu: ['Корреляция', 'Эксперимент', 'Опрос', 'Тематическое исследование (Кейс-стади)'],
        optionsHy: [
          'Հարաբերակցություն',
          'Փորձ (Էքսպերիմենտ)',
          'Հարցում',
          'Դեպքի ուսումնասիրություն (Case Study)',
        ],
        correctIndex: 1,
        explanation: 'Only experiments manipulation allows showing cause and effect.',
        explanationKa:
          'მხოლოდ ექსპერიმენტული მანიპულაცია გვაძლევს მიზეზ-შედეგობრიობის ჩვენების საშუალებას.',
        explanationRu:
          'Только экспериментальная манипуляция позволяет показать причину и следствие.',
        explanationHy: 'Միայն փորձնական միջամտությունն է թույլ տալիս ցույց տալ պատճառը և հետևանքը:',
      },
    ],
  },
  {
    id: 'q3',
    chapterId: 3,
    title: 'Biological Bases of Behavior',
    titleKa: 'ქცევის ბიოლოგიური საფუძვლები',
    titleRu: 'Биологические основы поведения',
    titleHy: 'Վարքագծի կենսաբանական հիմքերը',
    questions: [
      {
        id: 'q3_1',
        question: 'What is the basic building block of the nervous system?',
        questionKa: 'რა არის ნერვული სისტემის ძირითადი სტრუქტურული ერთეული?',
        questionRu: 'Что является основным строительным блоком нервной системы?',
        questionHy: 'Ո՞րն է նյարդային համակարգի հիմնական կառուցվածքային միավորը:',
        options: ['Gland', 'Neuron', 'Hormone', 'Synapse'],
        optionsKa: ['ჯირკვალი', 'ნეირონი', 'ჰორმონი', 'სინაფსი'],
        optionsRu: ['Железа', 'Нейрон', 'Гормон', 'Синапс'],
        optionsHy: ['Գեղձ', 'Նեյրոն', 'Հորմոն', 'Սինապս'],
        correctIndex: 1,
        explanation: 'Neurons are specialized cells that transmit chemical and electrical signals.',
        explanationKa:
          'ნეირონები სპეციალიზებული უჯრედებია, რომლებიც გადასცემენ ქიმიურ და ელექტრულ სიგნალებს.',
        explanationRu:
          'Нейроны — это специализированные клетки, которые передают химические и электрические сигналы.',
        explanationHy:
          'Նեյրոնները մասնագիտացված բջիջներ են, որոնք փոխանցում են քիմիական և էլեկտրական ազդանշաններ:',
      },
      {
        id: 'q3_2',
        question: 'The part of the neuron that receives messages is the:',
        questionKa: 'ნეირონის ნაწილი, რომელიც იღებს შეტყობინებებს, არის:',
        questionRu: 'Часть нейрона, принимающая сообщения, это:',
        questionHy: 'Նեյրոնի այն մասը, որը ստանում է հաղորդագրություններ, դա՝',
        options: ['Axon', 'Soma', 'Dendrite', 'Myelin sheath'],
        optionsKa: ['აქსონი', 'სომა', 'დენდრიტი', 'მიელინის გარსი'],
        optionsRu: ['Аксон', 'Сома', 'Дендрит', 'Миелиновая оболочка'],
        optionsHy: ['Աքսոն', 'Սոմա', 'Դենդրիտ', 'Միելինային թաղանթ'],
        correctIndex: 2,
        explanation:
          'Dendrites are branching extensions that receive incoming signals from other neurons.',
        explanationKa:
          'დენდრიტები განშტოებული დანამატებია, რომლებიც იღებენ სიგნალებს სხვა ნეირონებიდან.',
        explanationRu:
          'Дендриты — это разветвленные отростки, которые получают входящие сигналы от других нейронов.',
        explanationHy:
          'Դենդրիտները ճյուղավորված ելուստներ են, որոնք ստանում են մուտքային ազդանշաններ այլ նեյրոններից:',
      },
      {
        id: 'q3_3',
        question: 'What chemical messengers cross the synaptic gap?',
        questionKa: 'რომელი ქიმიური შუამავლები კვეთენ სინაფსურ ნაპრალს?',
        questionRu: 'Какие химические мессенджеры пересекают синаптическую щель?',
        questionHy: 'Ո՞ր քիմիական սուրհանդակներն են հատում սինապտիկ ճեղքը:',
        options: ['Hormones', 'Neurotransmitters', 'Enzymes', 'Genes'],
        optionsKa: ['ჰორმონები', 'ნეიროტრანსმიტერები', 'ფერმენტები', 'გენები'],
        optionsRu: ['Гормоны', 'Нейромедиаторы', 'Ферменты', 'Гены'],
        optionsHy: ['Հորմոններ', 'Նեյրոմեդիատորներ', 'Ֆերմենտներ', 'Գեներ'],
        correctIndex: 1,
        explanation: 'Neurotransmitters travel across synapses to relay messages to the next cell.',
        explanationKa:
          'ნეიროტრანსმიტერები გადაადგილდებიან სინაფსებში მომდევნო უჯრედისთვის შეტყობინების გადასაცემად.',
        explanationRu:
          'Нейромедиаторы проходят через синапсы, чтобы передать сообщения следующей клетке.',
        explanationHy:
          'Նեյրոմեդիատորները անցնում են սինապսներով՝ հաջորդ բջիջին հաղորդագրություն փոխանցելու համար:',
      },
      {
        id: 'q3_4',
        question: 'The central nervous system consists of:',
        questionKa: 'ცენტრალური ნერვული სისტემა შედგება:',
        questionRu: 'Центральная нервная система состоит из:',
        questionHy: 'Կենտրոնական նյարդային համակարգը բաղկացած է.',
        options: [
          'Brain and spinal cord',
          'Somatic and autonomic systems',
          'Sympathetic and parasympathetic systems',
          'Sensory and motor neurons',
        ],
        optionsKa: [
          'თავის ტვინი და ზურგის ტვინი',
          'სომატური და ავტონომიური სისტემები',
          'სიმპათიკური და პარასიმპათიკური სისტემები',
          'სენსორული და მოტორული ნეირონები',
        ],
        optionsRu: [
          'Головного и спинного мозга',
          'Соматической и вегетативной систем',
          'Симпатической и парасимпатической систем',
          'Сенсорных и моторных нейронов',
        ],
        optionsHy: [
          'Գլխուղեղից և ողնուղեղից',
          'Սոմատիկ և ինքնավար համակարգերից',
          'Սիմպաթիկ և պարասիմպաթիկ համակարգերից',
          'Զգայական և շարժիչ նեյրոններից',
        ],
        correctIndex: 0,
        explanation: 'The brain and spinal cord form the central core of the nervous system.',
        explanationKa: 'თავის ტვინი და ზურგის ტვინი ქმნიან ნერვული სისტემის ცენტრალურ ბირთვს.',
        explanationRu: 'Головной и спинной мозг образуют центральное ядро нервной системы.',
        explanationHy: 'Գլխուղեղը և ողնուղեղը կազմում են նյարդային համակարգի կենտրոնական առանցքը:',
      },
      {
        id: 'q3_5',
        question: "Which division of the nervous system is responsible for 'fight or flight'?",
        questionKa:
          "ნერვული სისტემის რომელი განყოფილებაა პასუხისმგებელი 'იბრძოლე ან გაიქეცი' რეაქციაზე?",
        questionRu: "Какой отдел нервной системы отвечает за реакцию 'бей или беги'?",
        questionHy:
          'Նյարդային համակարգի ո՞ր բաժինն է պատասխանատու «պայքարիր կամ փախիր» ռեակցիայի համար:',
        options: ['Parasympathetic', 'Somatic', 'Central', 'Sympathetic'],
        optionsKa: ['პარასიმპათიკური', 'სომატური', 'ცენტრალური', 'სიმპათიკური'],
        optionsRu: ['Парасимпатическая', 'Соматическая', 'Центральная', 'Симпатическая'],
        optionsHy: ['Պարասիմպաթիկ', 'Սոմատիկ', 'Կենտրոնական', 'Սիմպաթիկ'],
        correctIndex: 3,
        explanation:
          'The sympathetic nervous system arouses the body, mobilizing energy in stressful situations.',
        explanationKa:
          'სიმპათიკური ნერვული სისტემა ააქტიურებს სხეულს და მობილიზებას უკეთებს ენერგიას სტრესულ სიტუაციებში.',
        explanationRu:
          'Симпатическая нервная система возбуждает организм, мобилизуя энергию в стрессовых ситуациях.',
        explanationHy:
          'Սիմպաթիկ նյարդային համակարգը գրգռում է մարմինը՝ մոբիլիզացնելով էներգիան սթրեսային իրավիճակներում:',
      },
      {
        id: 'q3_6',
        question: 'The endocrine system relies on what chemical messengers?',
        questionKa: 'რომელ ქიმიურ შუამავლებზეა დამოკიდებული ენდოკრინული სისტემა?',
        questionRu: 'На какие химические мессенджеры опирается эндокринная система?',
        questionHy: 'Ո՞ր քիմիական սուրհանդակների վրա է հիմնված էնդոկրին համակարգը:',
        options: ['Neurotransmitters', 'Hormones', 'Endorphins', 'Action potentials'],
        optionsKa: ['ნეიროტრანსმიტერები', 'ჰორმონები', 'ენდორფინები', 'მოქმედების პოტენციალები'],
        optionsRu: ['Нейромедиаторы', 'Гормоны', 'Эндорфины', 'Потенциалы действия'],
        optionsHy: ['Նեյրոմեդիատորներ', 'Հորմոններ', 'Էնդորֆիններ', 'Գործողության պոտենցիալներ'],
        correctIndex: 1,
        explanation: 'Glands secrete hormones directly into the bloodstream.',
        explanationKa: 'ჯირკვლები გამოყოფენ ჰორმონებს პირდაპირ სისხლში.',
        explanationRu: 'Железы выделяют гормоны непосредственно в кровоток.',
        explanationHy: 'Գեղձերը հորմոններ են արտազատում անմիջապես արյան մեջ:',
      },
      {
        id: 'q3_7',
        question: 'Which brain structure is mostly responsible for balance and coordination?',
        questionKa:
          'რომელი ტვინის სტრუქტურაა ძირითადად პასუხისმგებელი წონასწორობასა და კოორდინაციაზე?',
        questionRu: 'Какая структура мозга в основном отвечает за баланс и координацию?',
        questionHy:
          'Ուղեղի ո՞ր կառույցն է հիմնականում պատասխանատու հավասարակշռության և համակարգման համար:',
        options: ['Amygdala', 'Cerebellum', 'Thalamus', 'Hippocampus'],
        optionsKa: ['ნუშისებრი სხეული', 'ნათხემი', 'თალამუსი', 'ჰიპოკამპუსი'],
        optionsRu: ['Миндалевидное тело', 'Мозжечок', 'Таламус', 'Гиппокамп'],
        optionsHy: ['Նշագեղձ', 'Ուղեղիկ', 'Թալամուս', 'Հիպոկամպ'],
        correctIndex: 1,
        explanation: "The cerebellum 'little brain' coordinates voluntary movements and balance.",
        explanationKa: 'ნათხემი კოორდინაციას უწევს ნებაყოფლობით მოძრაობებს და წონასწორობას.',
        explanationRu: "Мозжечок 'малый мозг' координирует произвольные движения и равновесие.",
        explanationHy: 'Ուղեղիկը համակարգում է կամավոր շարժումներն ու հավասարակշռությունը:',
      },
      {
        id: 'q3_8',
        question: "The 'master gland' of the endocrine system is the:",
        questionKa: "ენდოკრინული სისტემის 'მთავარი ჯირკვალი' არის:",
        questionRu: "'Главная железа' эндокринной системы — это:",
        questionHy: 'Էնդոկրին համակարգի «գլխավոր գեղձը» դա՝',
        options: ['Thyroid', 'Adrenal gland', 'Pituitary gland', 'Pancreas'],
        optionsKa: [
          'ფარისებრი ჯირკვალი',
          'თირკმელზედა ჯირკვალი',
          'ჰიპოფიზი (Pituitary gland)',
          'პანკრეასი',
        ],
        optionsRu: ['Щитовидная железа', 'Надпочечник', 'Гипофиз', 'Поджелудочная железа'],
        optionsHy: ['Վահանագեղձ', 'Մակերիկամ', 'Հիպոֆիզ', 'Ենթաստամոքսային գեղձ'],
        correctIndex: 2,
        explanation:
          'The pituitary gland regulates other endocrine glands under the influence of the hypothalamus.',
        explanationKa: 'ჰიპოფიზი არეგულირებს სხვა ენდოკრინულ ჯირკვლებს ჰიპოთალამუსის გავლენით.',
        explanationRu:
          'Гипофиз регулирует работу других эндокринных желез под влиянием гипоталамуса.',
        explanationHy:
          'Հիպոֆիզը կարգավորում է այլ էնդոկրին գեղձերի աշխատանքը հիպոթալամուսի ազդեցության տակ:',
      },
      {
        id: 'q3_9',
        question: 'Which lobe of the cerebral cortex is involved in vision?',
        questionKa: 'თავის ტვინის ქერქის რომელი წილია ჩართული მხედველობაში?',
        questionRu: 'Какая доля коры головного мозга участвует в зрении?',
        questionHy: 'Գլխուղեղի կեղևի ո՞ր բլիթն է մասնակցում տեսողությանը:',
        options: ['Frontal lobe', 'Parietal lobe', 'Occipital lobe', 'Temporal lobe'],
        optionsKa: ['შუბლის წილი', 'თხემის წილი', 'კეფის წილი (Occipital)', 'საფეთქლის წილი'],
        optionsRu: ['Лобная доля', 'Теменная доля', 'Затылочная доля (Occipital)', 'Височная доля'],
        optionsHy: [
          'Ճակատային բլիթ',
          'Գագաթային բլիթ',
          'Ծոծրակային բլիթ (Occipital)',
          'Քունքային բլիթ',
        ],
        correctIndex: 2,
        explanation: 'The occipital lobes at the back of the head receive visual information.',
        explanationKa: 'თავის უკანა ნაწილში მდებარე კეფის წილები იღებენ ვიზუალურ ინფორმაციას.',
        explanationRu: 'Затылочные доли в задней части головы получают зрительную информацию.',
        explanationHy:
          'Ծոծրակային բլիթները գլխի հետևի մասում ստանում են տեսողական տեղեկատվություն:',
      },
      {
        id: 'q3_10',
        question: 'What is the function of the myelin sheath?',
        questionKa: 'რა არის მიელინის გარსის ფუნქცია?',
        questionRu: 'Какова функция миелиновой оболочки?',
        questionHy: 'Ո՞րն է միելինային թաղանթի գործառույթը:',
        options: [
          'Produce neurotransmitters',
          'Speed up neural impulses',
          'Protect the nucleus',
          'Receive incoming signals',
        ],
        optionsKa: [
          'ნეიროტრანსმიტერების წარმოქმნა',
          'ნერვული იმპულსების დაჩქარება',
          'ბირთვის დაცვა',
          'შემომავალი სიგნალების მიღება',
        ],
        optionsRu: [
          'Вырабатывать нейромедиаторы',
          'Ускорять нервные импульсы',
          'Защищать ядро',
          'Принимать входящие сигналы',
        ],
        optionsHy: [
          'Արտադրել նեյրոմեդիատորներ',
          'Արագացնել նյարդային իմպուլսները',
          'Պաշտպանել կորիզը',
          'Ստանալ մուտքային ազդանշաններ',
        ],
        correctIndex: 1,
        explanation: 'The myelin sheath insulates axons and speeds their impulses.',
        explanationKa: 'მიელინის გარსი იზოლაციას უკეთებს აქსონებს და აჩქარებს მათ იმპულსებს.',
        explanationRu: 'Миелиновая оболочка изолирует аксоны и ускоряет их импульсы.',
        explanationHy:
          'Միելինային թաղանթը մեկուսացնում է աքսոնները և արագացնում նրանց իմպուլսները:',
      },
      {
        id: 'q3_11',
        question: 'Which limbic system structure is closely tied to emotion, especially fear?',
        questionKa:
          'ლიმბური სისტემის რომელი სტრუქტურაა მჭიდროდ დაკავშირებული ემოციებთან, განსაკუთრებით შიშთან?',
        questionRu:
          'Какая структура лимбической системы тесно связана с эмоциями, особенно со страхом?',
        questionHy:
          'Լիմբիական համակարգի ո՞ր կառույցն է սերտորեն կապված հույզերի, հատկապես վախի հետ:',
        options: ['Hippocampus', 'Thalamus', 'Amygdala', 'Hypothalamus'],
        optionsKa: ['ჰიპოკამპუსი', 'თალამუსი', 'ნუშისებრი სხეული (Amygdala)', 'ჰიპოთალამუსი'],
        optionsRu: ['Гиппокамп', 'Таламус', 'Миндалевидное тело (Amygdala)', 'Гипоталамус'],
        optionsHy: ['Հիպոկամպ', 'Թալամուս', 'Նշագեղձ (Amygdala)', 'Հիպոթալամուս'],
        correctIndex: 2,
        explanation:
          'The amygdala processes emotional responses, particularly aggression and fear.',
        explanationKa:
          'ნუშისებრი სხეული ამუშავებს ემოციურ პასუხებს, განსაკუთრებით აგრესიასა და შიშს.',
        explanationRu:
          'Миндалевидное тело обрабатывает эмоциональные реакции, в частности агрессию и страх.',
        explanationHy: 'Նշագեղձը մշակում է հուզական ռեակցիաները, հատկապես ագրեսիան և վախը:',
      },
      {
        id: 'q3_12',
        question: "Neuroplasticity refers to the brain's ability to:",
        questionKa: 'ნეიროპლასტიურობა გულისხმობს ტვინის უნარს:',
        questionRu: 'Нейропластичность — это способность мозга:',
        questionHy: 'Նեյրոպլաստիկությունը վերաբերում է ուղեղի ունակությանը՝',
        options: ['Resist damage', 'Maintain perfect memory', 'Change and adapt', 'Regulate sleep'],
        optionsKa: [
          'წინააღმდეგობა გაუწიოს დაზიანებას',
          'შეინარჩუნოს სრულყოფილი მეხსიერება',
          'შეიცვალოს და მოერგოს',
          'დაარეგულიროს ძილი',
        ],
        optionsRu: [
          'Противостоять повреждениям',
          'Поддерживать идеальную память',
          'Изменяться и адаптироваться',
          'Регулировать сон',
        ],
        optionsHy: [
          'Դիմադրել վնասվածքներին',
          'Պահպանել կատարյալ հիշողություն',
          'Փոխվել և հարմարվել',
          'Կարգավորել քունը',
        ],
        correctIndex: 2,
        explanation:
          'Plasticity allows the brain to reorganize after damage or building new pathways through experience.',
        explanationKa:
          'პლასტიურობა ტვინს საშუალებას აძლევს გადაეწყოს დაზიანების შემდეგ ან გამოცდილებით შექმნას ახალი გზები.',
        explanationRu:
          'Пластичность позволяет мозгу реорганизовываться после повреждения или формировать новые пути через опыт.',
        explanationHy:
          'Պլաստիկությունը թույլ է տալիս ուղեղին վերակազմավորվել վնասվածքից հետո կամ փորձի միջոցով ստեղծել նոր ուղիներ:',
      },
      {
        id: 'q3_13',
        question: 'The corpus callosum connects the:',
        questionKa: 'კოჟიანი სხეული (corpus callosum) აკავშირებს:',
        questionRu: 'Мозолистое тело (corpus callosum) соединяет:',
        questionHy: 'Բրոշային մարմինը (corpus callosum) միացնում է.',
        options: [
          'Brain to spinal cord',
          'Two brain hemispheres',
          'Endocrine and nervous systems',
          'Occipital and frontal lobes',
        ],
        optionsKa: [
          'ტვინს ზურგის ტვინთან',
          'ტვინის ორ ჰემისფეროს',
          'ენდოკრინულ და ნერვულ სისტემებს',
          'კეფისა და შუბლის წილებს',
        ],
        optionsRu: [
          'Мозг со спинным мозгом',
          'Два полушария мозга',
          'Эндокринную и нервную системы',
          'Затылочную и лобную доли',
        ],
        optionsHy: [
          'Ուղեղը ողնուղեղին',
          'Ուղեղի երկու կիսագնդերը',
          'Էնդոկրին և նյարդային համակարգերը',
          'Ծոծրակային և ճակատային բլիթները',
        ],
        correctIndex: 1,
        explanation:
          'It is a broad band of nerve fibers connecting the left and right hemispheres.',
        explanationKa:
          'ეს არის ნერვული ბოჭკოების ფართო ზოლი, რომელიც აკავშირებს მარცხენა და მარჯვენა ჰემისფეროებს.',
        explanationRu: 'Это широкая полоса нервных волокон, соединяющая левое и правое полушария.',
        explanationHy: 'Դա նյարդային մանրաթելերի լայն շերտ է, որը միացնում է ձախ և աջ կիսագնդերը:',
      },
      {
        id: 'q3_14',
        question: "Broca's area is primarily responsible for:",
        questionKa: 'ბროკას არეალი ძირითადად პასუხისმგებელია:',
        questionRu: 'Зона Брока в первую очередь отвечает за:',
        questionHy: 'Բրոկայի շրջանը հիմնականում պատասխանատու է.',
        options: [
          'Speech production',
          'Language comprehension',
          'Visual processing',
          'Motor coordination',
        ],
        optionsKa: [
          'მეტყველების წარმოქმნაზე',
          'ენის გაგებაზე',
          'ვიზუალურ გადამუშავებაზე',
          'მოტორულ კოორდინაციაზე',
        ],
        optionsRu: [
          'Производство речи',
          'Понимание языка',
          'Зрительную обработку',
          'Двигательную координацию',
        ],
        optionsHy: [
          'Խոսքի արտադրության',
          'Լեզվի ըմբռնման',
          'Տեսողական մշակման',
          'Շարժիչ համակարգման',
        ],
        correctIndex: 0,
        explanation:
          "Located in the left frontal lobe, Broca's area controls speech muscles via motor cortex.",
        explanationKa:
          'მდებარეობს მარცხენა შუბლის წილში, ბროკას არეალი აკონტროლებს მეტყველების კუნთებს მოტორული ქერქის საშუალებით.',
        explanationRu:
          'Расположенная в левой лобной доле, зона Брока управляет речевыми мышцами через моторную кору.',
        explanationHy:
          'Գտնվելով ձախ ճակատային բլթում, Բրոկայի շրջանը վերահսկում է խոսքի մկանները շարժիչ կեղևի միջոցով:',
      },
      {
        id: 'q3_15',
        question: 'An action potential is:',
        questionKa: 'მოქმედების პოტენციალი არის:',
        questionRu: 'Потенциал действия — это:',
        questionHy: 'Գործողության պոտենցիալը դա՝',
        options: [
          'A resting state',
          'A brief electrical charge that travels down an axon',
          'A chemical release',
          'A long-lasting brain wave',
        ],
        optionsKa: [
          'მოსვენების მდგომარეობა',
          'ხანმოკლე ელექტრული მუხტი, რომელიც გადაადგილდება აქსონში',
          'ქიმიური გამოყოფა',
          'ხანგრძლივი ტვინის ტალღა',
        ],
        optionsRu: [
          'Состояние покоя',
          'Кратковременный электрический заряд, проходящий по аксону',
          'Химический выброс',
          'Длительная мозговая волна',
        ],
        optionsHy: [
          'Հանգստի վիճակ',
          'Կարճատև էլեկտրական լիցք, որն անցնում է աքսոնով',
          'Քիմիական արտազատում',
          'Երկարատև ուղեղի ալիք',
        ],
        correctIndex: 1,
        explanation: 'It is the neural impulse generated by the movement of charged atoms.',
        explanationKa:
          'ეს არის ნერვული იმპულსი, რომელიც წარმოიქმნება დამუხტული ატომების მოძრაობით.',
        explanationRu: 'Это нервный импульс, генерируемый движением заряженных атомов.',
        explanationHy:
          'Դա նյարդային իմպուլս է, որն առաջանում է լիցքավորված ատոմների շարժման հետևանքով:',
      },
    ],
  },
  {
    id: 'q4',
    chapterId: 4,
    title: 'Sensation and Perception',
    titleKa: 'შეგრძნება და აღქმა',
    titleRu: 'Ощущение и восприятие',
    titleHy: 'Զգայություն և ընկալում',
    questions: [
      {
        id: 'q4_1',
        question: 'What is sensation?',
        questionKa: 'რა არის შეგრძნება?',
        questionRu: 'Что такое ощущение?',
        questionHy: 'Ի՞նչ է զգայությունը:',
        options: [
          'Interpreting sensory info',
          'Detecting physical energy from the environment',
          'A visual illusion',
          'Memory recall',
        ],
        optionsKa: [
          'სენსორული ინფორმაციის ინტერპრეტაცია',
          'გარემოდან ფიზიკური ენერგიის აღმოჩენა',
          'ვიზუალური ილუზია',
          'მეხსიერების აღდგენა',
        ],
        optionsRu: [
          'Интерпретация сенсорной информации',
          'Обнаружение физической энергии из окружающей среды',
          'Визуальная иллюзия',
          'Воспроизведение памяти',
        ],
        optionsHy: [
          'Զգայական տեղեկատվության մեկնաբանում',
          'Շրջակա միջավայրից ֆիզիկական էներգիայի հայտնաբերում',
          'Տեսողական պատրանք',
          'Հիշողության վերականգնում',
        ],
        correctIndex: 1,
        explanation:
          'Sensation is the bottom-up process by which sensory receptors detect stimuli.',
        explanationKa:
          'შეგრძნება არის ქვემოდან-ზემოთ პროცესი, რომლის დროსაც რეცეპტორები აღიქვამენ სტიმულებს.',
        explanationRu:
          'Ощущение — это восходящий процесс, при котором рецепторы обнаруживают стимулы.',
        explanationHy:
          'Զգայությունը ներքևից վերև գործընթաց է, որի միջոցով ռեցեպտորները հայտնաբերում են խթանները:',
      },
      {
        id: 'q4_2',
        question: 'Perception is mainly a process of:',
        questionKa: 'აღქმა ძირითადად არის პროცესი:',
        questionRu: 'Восприятие — это в основном процесс:',
        questionHy: 'Ընկալումը հիմնականում գործընթաց է.',
        options: [
          'Detecting light',
          'Hearing sound waves',
          'Organizing and interpreting sensory information',
          'Sending signals to muscles',
        ],
        optionsKa: [
          'სინათლის აღმოჩენის',
          'ბგერითი ტალღების მოსმენის',
          'სენსორული ინფორმაციის ორგანიზების და ინტერპრეტაციის',
          'კუნთებისთვის სიგნალების გაგზავნის',
        ],
        optionsRu: [
          'Обнаружения света',
          'Слушания звуковых волн',
          'Организации и интерпретации сенсорной информации',
          'Отправки сигналов к мышцам',
        ],
        optionsHy: [
          'Լույսի հայտնաբերման',
          'Ձայնային ալիքների լսելու',
          'Զգայական տեղեկատվության կազմակերպման և մեկնաբանման',
          'Մկաններին ազդանշաններ ուղարկելու',
        ],
        correctIndex: 2,
        explanation: 'Perception is how the brain organizes and interprets sensory input.',
        explanationKa:
          'აღქმა გვიჩვენებს, თუ როგორ აკეთებს ტვინი სენსორული ინფორმაციის ორგანიზებას და ინტერპრეტაციას.',
        explanationRu:
          'Восприятие — это то, как мозг организует и интерпретирует сенсорные данные.',
        explanationHy:
          'Ընկալումն այն է, թե ինչպես է ուղեղը կազմակերպում և մեկնաբանում զգայական տվյալները:',
      },
      {
        id: 'q4_3',
        question: 'What is the absolute threshold?',
        questionKa: 'რა არის აბსოლუტური ზღურბლი?',
        questionRu: 'Что такое абсолютный порог?',
        questionHy: 'Ի՞նչ է բացարձակ շեմը:',
        options: [
          'Difference between two stimuli',
          'Maximum pain a person can tolerate',
          'Minimum stimulus needed for detection 50% of the time',
          'Point where all sensation stops',
        ],
        optionsKa: [
          'სხვაობა ორ სტიმულს შორის',
          'მაქსიმალური ტკივილი, რომლის ატანაც ადამიანს შეუძლია',
          'მინიმალური სტიმული, რომელიც საჭიროა აღმოსაჩენად',
          'წერტილი, სადაც ყველა შეგრძნება წყდება',
        ],
        optionsRu: [
          'Разница между двумя стимулами',
          'Максимальная боль, которую может вынести человек',
          'Минимальный стимул для обнаружения',
          'Точка, где прекращаются все ощущения',
        ],
        optionsHy: [
          'Տարբերություն երկու խթանների միջև',
          'Առավելագույն ցավ, որը մարդը կարող է հանդուրժել',
          'Նվազագույն խթան, որն անհրաժեշտ է այն հայտնաբերելու համար',
          'Կետ, որտեղ դադարում են բոլոր զգայությունները',
        ],
        correctIndex: 2,
        explanation:
          'It marks the lowest level of a stimulus that an organism can reliably detect.',
        explanationKa:
          'ის აღნიშნავს სტიმულის ყველაზე დაბალ დონეს, რომლის აღმოჩენაც ორგანიზმს 50%-იანი სიზუსტით შეუძლია.',
        explanationRu:
          'Он отмечает самый низкий уровень стимула, который организм может надежно обнаружить.',
        explanationHy:
          'Այն նշում է խթանի ամենացածր մակարդակը, որը օրգանիզմը կարող է հուսալիորեն հայտնաբերել:',
      },
      {
        id: 'q4_4',
        question: "Weber's Law relates to:",
        questionKa: 'ვებერის კანონი ეხება:',
        questionRu: 'Закон Вебера относится к:',
        questionHy: 'Վեբերի օրենքը վերաբերում է.',
        options: [
          'Absolute threshold',
          'Difference threshold (JND)',
          'Sensory adaptation',
          'Subliminal perception',
        ],
        optionsKa: [
          'აბსოლუტურ ზღურბლს',
          'სხვაობის ზღურბლს',
          'სენსორულ ადაპტაციას',
          'ქვეცნობიერ აღქმას',
        ],
        optionsRu: [
          'Абсолютному порогу',
          'Порогу различия',
          'Сенсорной адаптации',
          'Подпороговому восприятию',
        ],
        optionsHy: [
          'Բացարձակ շեմին',
          'Տարբերության շեմին',
          'Զգայական հարմարվողականությանը',
          'Ենթագիտակցական ընկալմանը',
        ],
        correctIndex: 1,
        explanation:
          "Weber's law states that to be perceived as different, two stimuli must differ by a constant percentage, not amount.",
        explanationKa:
          'ორი სტიმულის განსხვავება დამოკიდებულია მუდმივ პროცენტზე და არა რაოდენობაზე.',
        explanationRu:
          'Чтобы восприниматься по-разному, два стимула должны отличаться на постоянный процент.',
        explanationHy:
          'Որպեսզի տարբեր ընկալվեն, երկու խթանները պետք է տարբերվեն հաստատուն տոկոսով:',
      },
      {
        id: 'q4_5',
        question: 'Which photoreceptors in the eye are responsible for color vision?',
        questionKa: 'თვალის რომელი ფოტორეცეპტორებია პასუხისმგებელი ფერთა ხედვაზე?',
        questionRu: 'Какие фоторецепторы в глазу отвечают за цветовое зрение?',
        questionHy: 'Աչքի ո՞ր ֆոտոռեցեպտորներն են պատասխանատու գունային տեսողության համար:',
        options: ['Rods', 'Cones', 'Ganglion cells', 'Bipolar cells'],
        optionsKa: [
          'ჩხირები (Rods)',
          'კოლბები (Cones)',
          'განგლიური უჯრედები',
          'ბიპოლარული უჯრედები',
        ],
        optionsRu: ['Палочки', 'Колбочки', 'Ганглиозные клетки', 'Биполярные клетки'],
        optionsHy: [
          'Ցուպիկներ (Rods)',
          'Սրվակներ (Cones)',
          'Գանգլիոնային բջիջներ',
          'Երկբևեռ բջիջներ',
        ],
        correctIndex: 1,
        explanation: 'Cones function in bright light and detect color.',
        explanationKa: 'კოლბები ფუნქციონირებს ნათელ შუქზე და აღიქვამს ფერებს.',
        explanationRu: 'Колбочки функционируют при ярком свете и различают цвета.',
        explanationHy: 'Սրվակները գործում են վառ լույսի ներքո և տարբերակում են գույները:',
      },
      {
        id: 'q4_6',
        question: 'Where does transduction occur in the auditory system?',
        questionKa: 'სად ხდება ტრანსდუქცია სმენის სისტემაში?',
        questionRu: 'Где происходит трансдукция в слуховой системе?',
        questionHy: 'Որտե՞ղ է տեղի ունենում տրանսդուկցիան լսողական համակարգում:',
        options: ['Eardrum', 'Pinna', 'Cochlea', 'Auditory nerve'],
        optionsKa: ['დაფის აპკში', 'ყურის ნიჟარაში', 'ლოკოკინაში (Cochlea)', 'სმენის ნერვში'],
        optionsRu: [
          'В барабанной перепонке',
          'В ушной раковине',
          'В улитке (Cochlea)',
          'В слуховом нерве',
        ],
        optionsHy: ['Թմբկաթաղանթում', 'Ականջախեցիում', 'Խխունջում', 'Լսողական նյարդում'],
        correctIndex: 2,
        explanation:
          'The cochlea contains hair cells that convert sound waves into neural impulses.',
        explanationKa:
          'ლოკოკინა შეიცავს თმის უჯრედებს, რომლებიც გარდაქმნიან ბგერით ტალღებს ნერვულ იმპულსებად.',
        explanationRu:
          'Улитка содержит волосковые клетки, которые преобразуют звуковые волны в нервные импульсы.',
        explanationHy:
          'Խխունջը պարունակում է մազային բջիջներ, որոնք վերածում են ձայնային ալիքները նյարդային իմպուլսների:',
      },
      {
        id: 'q4_7',
        question: 'Gestalt psychology emphasizes that:',
        questionKa: 'გეშტალტ ფსიქოლოგია ხაზს უსვამს, რომ:',
        questionRu: 'Гештальт-психология подчеркивает, что:',
        questionHy: 'Գեշտալտ հոգեբանությունն ընդգծում է, որ.',
        options: [
          'Sensation is only bottom-up',
          'The whole is greater than the sum of its parts',
          'Dreams reveal unconscious desires',
          'Learning shapes perception entirely',
        ],
        optionsKa: [
          'შეგრძნება მხოლოდ ქვემოდან-ზევით ხდება',
          'მთლიანობა მეტია მის ნაწილთა ჯამზე',
          'სიზმრები ავლენენ არაცნობიერ სურვილებს',
          'სწავლა მთლიანად აყალიბებს აღქმას',
        ],
        optionsRu: [
          'Ощущение идет только снизу вверх',
          'Целое больше суммы его частей',
          'Сны раскрывают бессознательные желания',
          'Обучение полностью формирует восприятие',
        ],
        optionsHy: [
          'Զգայությունը միայն ներքևից վերև է',
          'Ամբողջը ավելին է, քան նրա մասերի գումարը',
          'Երազները բացահայտում են անգիտակից ցանկությունները',
          'Ուսուցումն ամբողջությամբ ձևավորում է ընկալումը',
        ],
        correctIndex: 1,
        explanation:
          'Gestalt principles focus on how we group distinct elements into meaningful wholes.',
        explanationKa: 'ჩვენ ვაჯგუფებთ ცალკეულ ელემენტებს მნიშვნელობის მქონე მთლიანობებად.',
        explanationRu: 'Мы группируем отдельные элементы в осмысленные целые конструкции.',
        explanationHy: 'Մենք խմբավորում ենք առանձին տարրերը իմաստալից ամբողջությունների մեջ:',
      },
      {
        id: 'q4_8',
        question: 'Which is a binocular cue for depth perception?',
        questionKa: 'რომელია ბინოკულარული ნიშანი სიღრმის აღქმისთვის?',
        questionRu: 'Что является бинокулярным признаком восприятия глубины?',
        questionHy: 'Ո՞րն է բինոկուլյար (երկակնային) նշան խորության ընկալման համար:',
        options: ['Linear perspective', 'Relative size', 'Retinal disparity', 'Interposition'],
        optionsKa: [
          'ხაზოვანი პერსპექტივა',
          'ფარდობითი ზომა',
          'რეტინალური დისპარატულობა',
          'ინტერპოზიცია',
        ],
        optionsRu: [
          'Линейная перспектива',
          'Относительный размер',
          'Ретинальная диспарность',
          'Интерпозиция',
        ],
        optionsHy: [
          'Գծային հեռանկար',
          'Հարաբերական չափ',
          'Ցանցաթաղանթի անհամապատասխանություն',
          'Ինտերպոզիցիա',
        ],
        correctIndex: 2,
        explanation:
          'Retinal disparity requires two eyes to compare the slightly different images they receive.',
        explanationKa:
          'რეტინალურ დისპარატულობას სჭირდება ორი თვალი სხვადასხვა გამოსახულების შესადარებლად.',
        explanationRu:
          'Ретинальная диспарность требует двух глаз для сравнения слегка разных изображений.',
        explanationHy:
          'Ցանցաթաղանթի անհամապատասխանությունը պահանջում է երկու աչք՝ տարբեր պատկերները համեմատելու համար:',
      },
      {
        id: 'q4_9',
        question: 'Sensory adaptation refers to:',
        questionKa: 'სენსორული ადაპტაცია გულისხმობს:',
        questionRu: 'Сенсорная адаптация — это:',
        questionHy: 'Զգայական հարմարվողականությունը ենթադրում է.',
        options: [
          'Improving vision in the dark',
          'Diminished sensitivity to constant stimulation',
          'Combining smell and taste',
          'Hearing damage from loud noise',
        ],
        optionsKa: [
          'მხედველობის გაუმჯობესებას სიბნელეში',
          'მუდმივი სტიმულაციის მიმართ მგრძნობელობის შემცირებას',
          'ყნოსვის და გემოს შერწყმას',
          'ხმამაღალი ხმაურისგან სმენის დაზიანებას',
        ],
        optionsRu: [
          'Улучшение зрения в темноте',
          'Снижение чувствительности к постоянному раздражителю',
          'Объединение обоняния и вкуса',
          'Повреждение слуха от сильного шума',
        ],
        optionsHy: [
          'Տեսողության բարելավում մթության մեջ',
          'Մշտական ​​խթանման նկատմամբ զգայունության նվազում',
          'Հոտի և համի համադրում',
          'Բարձր աղմուկից լսողության վնասում',
        ],
        correctIndex: 1,
        explanation: 'We stop noticing constant, unchanging stimuli (like the feeling of clothes).',
        explanationKa:
          'ჩვენ ვწყვეტთ მუდმივი, უცვლელი სტიმულების შემჩნევას (მაგ., ტანსაცმლის შეგრძნებას).',
        explanationRu:
          'Мы перестаем замечать постоянные раздражители (например, ощущение одежды на себе).',
        explanationHy: 'Մենք դադարում ենք նկատել մշտական ​​խթանները (օրինակ՝ հագուստի զգացումը):',
      },
      {
        id: 'q4_10',
        question: 'A mental predisposition to perceive one thing and not another is a:',
        questionKa: 'მენტალური წინასწარგანწყობა, აღვიქვათ ერთი რამ და არა მეორე, არის:',
        questionRu: 'Ментальная предрасположенность воспринимать одно и не замечать другое — это:',
        questionHy: 'Մտավոր հակվածությունը՝ ընկալելու մի բան, և ոչ մյուսը դա՝',
        options: ['Blind spot', 'Perceptual set', 'Absolute threshold', 'Sensory illusion'],
        optionsKa: [
          'ბრმა წერტილი',
          'პერცეფციული განწყობა',
          'აბსოლუტური ზღურბლი',
          'სენსორული ილუზია',
        ],
        optionsRu: [
          'Слепое пятно',
          'Перцептивная установка',
          'Абсолютный порог',
          'Сенсорная иллюзия',
        ],
        optionsHy: [
          'Կույր կետ',
          'Ընկալման հավաքածու (Perceptual set)',
          'Բացարձակ շեմ',
          'Զգայական պատրանք',
        ],
        correctIndex: 1,
        explanation:
          'Expectations and context create a perceptual set that influences what we experience.',
        explanationKa:
          'მოლოდინები და კონტექსტი ქმნის განწყობას, რომელიც გავლენას ახდენს იმაზე, თუ რას აღვიქვამთ.',
        explanationRu:
          'Ожидания и контекст создают установку, влияющую на то, что мы воспринимаем.',
        explanationHy: 'Ակնկալիքները և համատեքստը ստեղծում են ընկալման ուղղվածություն:',
      },
      {
        id: 'q4_11',
        question: 'Damage to the fovea would have the greatest effect on:',
        questionKa: 'ყვითელი ხალის (ფოვეას) დაზიანება ყველაზე დიდ გავლენას მოახდენს:',
        questionRu: 'Повреждение центральной ямки (fovea) больше всего повлияет на:',
        questionHy: 'Դեղին բծի (fovea) վնասումը ամենամեծ ազդեցությունը կունենա.',
        options: [
          'Night vision',
          'Peripheral vision',
          'Visual sharpness and detail',
          'Kinaesthetic sensing',
        ],
        optionsKa: [
          'ღამის ხედვაზე',
          'პერიფერიულ ხედვაზე',
          'ვიზუალურ სიმკვეთრესა და დეტალებზე',
          'კინესთეტიკურ შეგრძნებაზე',
        ],
        optionsRu: [
          'Ночное зрение',
          'Периферическое зрение',
          'Остроту зрения и детализацию',
          'Кинестетическое чувство',
        ],
        optionsHy: [
          'Գիշերային տեսողության',
          'Ծայրամասային տեսողության',
          'Տեսողական սրության և մանրուքների վրա',
          'Կինեստետիկ զգացողության',
        ],
        correctIndex: 2,
        explanation:
          "The fovea is the retina's area of central focus, rich in cones for detailed vision.",
        explanationKa: 'ფოვეა არის ბადურის ცენტრალური ფოკუსის არე, მდიდარი კოლბებით.',
        explanationRu: 'Ямка является областью центрального фокуса сетчатки, богатой колбочками.',
        explanationHy:
          'Ֆովեան ցանցաթաղանթի կենտրոնական կետն է, որը հարուստ է սրվակներով մանրամասն տեսողության համար:',
      },
      {
        id: 'q4_12',
        question: 'Which theory explains how we perceive high-pitched sounds?',
        questionKa: 'რომელი თეორია ხსნის, თუ როგორ აღვიქვამთ მაღალი სიხშირის ბგერებს?',
        questionRu: 'Какая теория объясняет, как мы воспринимаем высокочастотные звуки?',
        questionHy:
          'Ո՞ր տեսությունն է բացատրում, թե ինչպես ենք մենք ընկալում բարձր հաճախականությամբ ձայները:',
        options: [
          'Place theory',
          'Frequency theory',
          'Opponent-process theory',
          'Gate-control theory',
        ],
        optionsKa: [
          'ადგილის თეორია (Place theory)',
          'სიხშირის თეორია',
          'ოპონენტ-პროცესების თეორია',
          'კარის კონტროლის თეორია',
        ],
        optionsRu: [
          'Теория места',
          'Теория частоты',
          'Теория оппонентных процессов',
          'Теория воротного контроля',
        ],
        optionsHy: [
          'Տեղի տեսություն (Place theory)',
          'Հաճախականության տեսություն',
          'Ընդդիմադիր-գործընթացների տեսություն',
          'Դարպասների վերահսկման տեսություն',
        ],
        correctIndex: 0,
        explanation:
          'Place theory states that different pitches stimulate different areas of the cochlea.',
        explanationKa:
          'ადგილის თეორია ამტკიცებს, რომ სხვადასხვა სიხშირე ლოკოკინას სხვადასხვა ნაწილს ასტიმულირებს.',
        explanationRu:
          'Теория места утверждает, что разные частоты стимулируют разные участки улитки.',
        explanationHy:
          'Տեղի տեսությունը պնդում է, որ տարբեր ձայները խթանում են խխունջի տարբեր հատվածներ:',
      },
      {
        id: 'q4_13',
        question: 'The gate-control theory primarily relates to which sense?',
        questionKa: 'კარის კონტროლის თეორია ძირითადად რომელ გრძნობას ეხება?',
        questionRu: 'Теория воротного контроля в основном относится к какому чувству?',
        questionHy: 'Դարպասների վերահսկման տեսությունը հիմնականում վերաբերում է ո՞ր զգայարանին:',
        options: ['Smell', 'Taste', 'Balance', 'Pain'],
        optionsKa: ['ყნოსვა', 'გემო', 'წონასწორობა', 'ტკივილი'],
        optionsRu: ['Обоняние', 'Вкус', 'Равновесие', 'Боль'],
        optionsHy: ['Հոտառություն', 'Համ', 'Հավասարակշռություն', 'Ցավ'],
        correctIndex: 3,
        explanation:
          "It proposes that a 'gate' in the spinal cord can block or allow pain signals to the brain.",
        explanationKa:
          "ის ვარაუდობს, რომ ზურგის ტვინში არსებულ 'კარს' შეუძლია დაბლოკოს ან გაატაროს ტკივილის სიგნალები.",
        explanationRu:
          "Предполагается, что 'ворота' в спинном мозге могут блокировать или пропускать сигналы боли.",
        explanationHy:
          'Այն ենթադրում է, որ ողնուղեղի «դարպասը» կարող է արգելափակել կամ թույլ տալ ցավի ազդանշանները:',
      },
      {
        id: 'q4_14',
        question: 'Our sense of the position and movement of individual body parts is:',
        questionKa: 'სხეულის ცალკეული ნაწილების პოზიციისა და მოძრაობის ჩვენი შეგრძნებას ეწოდება:',
        questionRu: 'Наше чувство положения и движения отдельных частей тела — это:',
        questionHy: 'Մարմնի առանձին մասերի դիրքի և շարժման մեր զգացողությունը կոչվում է.',
        options: ['Vestibular sense', 'Kinaesthesia', 'Gustation', 'Olfaction'],
        optionsKa: [
          'ვესტიბულური აპარატი',
          'კინესთეზია (Kinaesthesia)',
          'გემოს შეგრძნება',
          'ყნოსვის შეგრძნება',
        ],
        optionsRu: ['Вестибулярный аппарат', 'Кинестезия', 'Чувство вкуса', 'Обоняние'],
        optionsHy: ['Վեստիբուլյար զգայություն', 'Կինեստեզիա', 'Համի զգայություն', 'Հոտառություն'],
        correctIndex: 1,
        explanation: 'Kinaesthesia involves sensors in joints, tendons, and muscles.',
        explanationKa: 'კინესთეზია მოიცავს სენსორებს სახსრებში, მყესებსა და კუნთებში.',
        explanationRu: 'Кинестезия задействует сенсоры в суставах, сухожилиях и мышцах.',
        explanationHy: 'Կինեստեզիան ներառում է սենսորներ հոդերի, ջլերի և մկանների մեջ:',
      },
      {
        id: 'q4_15',
        question: 'Which of these is NOT an example of a Gestalt grouping principle?',
        questionKa: 'ჩამოთვლილთაგან რომელი არ არის გეშტალტის დაჯგუფების პრინციპი?',
        questionRu: 'Что из этого НЕ является принципом группировки Гештальта?',
        questionHy: 'Հետևյալներից ո՞րը Գեշտալտ խմբավորման սկզբունք ՉԷ:',
        options: ['Proximity', 'Similarity', 'Closure', 'Retinal disparity'],
        optionsKa: ['სიახლოვე', 'მსგავსება', 'შეკვრა (Closure)', 'რეტინალური დისპარატულობა'],
        optionsRu: ['Близость', 'Сходство', 'Замкнутость', 'Ретинальная диспарность'],
        optionsHy: [
          'Մոտիկություն',
          'Նմանություն',
          'Փակում (Closure)',
          'Ցանցաթաղանթի տարբերություն',
        ],
        correctIndex: 3,
        explanation:
          'Retinal disparity is a depth cue, while the others are Gestalt rules of organization.',
        explanationKa:
          'რეტინალური დისპარატულობა სიღრმის ნიშანია, დანარჩენები კი გეშტალტის ორგანიზაციის წესებია.',
        explanationRu:
          'Ретинальная диспарность — признак глубины, а остальное — правила организации.',
        explanationHy:
          'Ցանցաթաղանթի անհամապատասխանությունը խորության նշան է, իսկ մյուսները կազմակերպման կանոններ են:',
      },
    ],
  },
  {
    id: 'q5',
    chapterId: 5,
    title: 'States of Consciousness',
    titleKa: 'ცნობიერების მდგომარეობები',
    titleRu: 'Состояния сознания',
    titleHy: 'Գիտակցության վիճակներ',
    questions: [
      {
        id: 'q5_1',
        question: 'What is the circadian rhythm?',
        questionKa: 'რა არის ცირკადული რიტმი?',
        questionRu: 'Что такое циркадный ритм?',
        questionHy: 'Ի՞նչ է ցիրկադային ռիթմը:',
        options: [
          'The cycle of sleep stages in one night',
          'The 24-hour biological clock determining wakefulness and sleep',
          'A brain wave typical of deep sleep',
          'The rapid eye movement during dreaming',
        ],
        optionsKa: [
          'ძილის სტადიების ციკლი ერთ ღამეში',
          '24-საათიანი ბიოლოგიური საათი, რომელიც განსაზღვრავს სიფხიზლესა და ძილს',
          'ღრმა ძილისთვის დამახასიათებელი ტვინის ტალღა',
          'თვალის სწრაფი მოძრაობა სიზმრის დროს',
        ],
        optionsRu: [
          'Цикл стадий сна за одну ночь',
          '24-часовые биологические часы, определяющие бодрствование и сон',
          'Мозговые волны, типичные для глубокого сна',
          'Быстрое движение глаз во время сновидений',
        ],
        optionsHy: [
          'Քնի փուլերի ցիկլը մեկ գիշերվա ընթացքում',
          '24-ժամյա կենսաբանական ժամացույց, որը որոշում է արթունությունն ու քունը',
          'Խորը քնին բնորոշ ուղեղի ալիք',
          'Աչքի արագ շարժում երազի ժամանակ',
        ],
        correctIndex: 1,
        explanation:
          'The circadian rhythm is our 24-hour biological cycle affecting temperature and wakefulness.',
        explanationKa:
          'ცირკადული რიტმი არის ჩვენი 24-საათიანი ბიოლოგიური ციკლი, რომელიც მოქმედებს ტემპერატურასა და სიფხიზლეზე.',
        explanationRu:
          'Циркадный ритм — это наш 24-часовой биологический цикл, влияющий на температуру и бодрствование.',
        explanationHy:
          'Ցիրկադային ռիթմը մեր 24-ժամյա կենսաբանական ցիկլն է, որն ազդում է ջերմաստիճանի և արթունության վրա:',
      },
      {
        id: 'q5_2',
        question: 'In which stage of sleep do sleep spindles occur?',
        questionKa: 'ძილის რომელ სტადიაზე გვხვდება ძილის თითისტარები?',
        questionRu: 'На какой стадии сна появляются сонные веретена?',
        questionHy: 'Քնի ո՞ր փուլում են առաջանում քնի դեդեր (sleep spindles):',
        options: ['NREM-1', 'NREM-2', 'NREM-3', 'REM'],
        optionsKa: ['NREM-1', 'NREM-2', 'NREM-3', 'REM'],
        optionsRu: ['NREM-1', 'NREM-2', 'NREM-3', 'REM'],
        optionsHy: ['NREM-1', 'NREM-2', 'NREM-3', 'REM'],
        correctIndex: 1,
        explanation:
          'Sleep spindles—bursts of rapid brain activity—are characteristic of NREM-2 sleep.',
        explanationKa:
          'ძილის თითისტარები (ტვინის სწრაფი აქტივობის აფეთქებები) დამახასიათებელია NREM-2 ძილისთვის.',
        explanationRu:
          'Сонные веретена (всплески быстрой активности мозга) характерны для стадии NREM-2.',
        explanationHy:
          'Քնի դեդերը՝ ուղեղի արագ ակտիվության պոռթկումները, բնութագրում են NREM-2 քունը:',
      },
      {
        id: 'q5_3',
        question: 'REM sleep is also known as paradoxical sleep because:',
        questionKa: 'REM ძილს ასევე პარადაქსულ ძილს უწოდებენ, რადგან:',
        questionRu: 'REM-сон также известен как парадоксальный сон, потому что:',
        questionHy: 'REM (Աչքի արագ շարժումով) քունը հայտնի է նաև որպես պարադոքսալ քուն, քանի որ.',
        options: [
          'Heart rate is low but brain activity is high',
          'The brain is highly active but voluntary muscles are essentially paralyzed',
          'The sleeper is easy to wake but hard to put back to sleep',
          'Brain waves match those of a coma',
        ],
        optionsKa: [
          'გულისცემა დაბალია, მაგრამ ტვინის აქტივობა მაღალია',
          'ტვინი უაღრესად აქტიურია, მაგრამ კუნთები არსებითად დამბლადებულია',
          'მძინარეს გაღვიძება ადვილია, მაგრამ უკან დაძინება რთული',
          'ტვინის ტალღები ემთხვევა კომის ტალღებს',
        ],
        optionsRu: [
          'Частота сердечных сокращений низкая, но активность мозга высокая',
          'Мозг очень активен, но произвольные мышцы по сути парализованы',
          'Спящего легко разбудить, но трудно усыпить снова',
          'Мозговые волны совпадают с волнами при коме',
        ],
        optionsHy: [
          'Սրտի բաբախյունը ցածր է, բայց ուղեղի ակտիվությունը՝ բարձր',
          'Ուղեղը խիստ ակտիվ է, բայց կամավոր մկանները հիմնականում կաթվածահար են',
          'Քնածին հեշտ է արթնացնել, բայց դժվար է նորից քնեցնել',
          'Ուղեղի ալիքները համընկնում են կոմայի մեջ գտնվողների հետ',
        ],
        correctIndex: 1,
        explanation:
          'In REM sleep, the brain is awake and dreaming, but motor cortex signals are blocked, paralyzing the body.',
        explanationKa:
          'REM ძილის დროს ტვინი ფხიზლადაა და ხედავს სიზმრებს, მაგრამ მოტორული სიგნალები იბლოკება, რაც სხეულს ადუნებს.',
        explanationRu:
          'В фазе REM мозг бодрствует, но сигналы моторной коры блокируются, парализуя тело.',
        explanationHy:
          'REM քնի ժամանակ ուղեղն արթուն է և երազում է, բայց շարժիչ ազդանշաններն արգելափակված են՝ կաթվածահար անելով մարմինը:',
      },
      {
        id: 'q5_4',
        question: 'Which of the following is associated with delta waves?',
        questionKa: 'ჩამოთვლილთაგან რომელია დაკავშირებული დელტა ტალღებთან?',
        questionRu: 'Что из следующего связано с дельта-волнами?',
        questionHy: 'Հետևյալներից ո՞րն է կապված դելտա ալիքների հետ:',
        options: ['Focused attention', 'Relaxed wakefulness', 'NREM-1 sleep', 'NREM-3 deep sleep'],
        optionsKa: [
          'ფოკუსირებული ყურადღება',
          'მოდუნებული სიფხიზლე',
          'NREM-1 ძილი',
          'NREM-3 ღრმა ძილი',
        ],
        optionsRu: [
          'Сфокусированное внимание',
          'Расслабленное бодрствование',
          'NREM-1 сон',
          'NREM-3 глубокий сон',
        ],
        optionsHy: [
          'Կենտրոնացված ուշադրություն',
          'Հանգիստ արթնություն',
          'NREM-1 քուն',
          'NREM-3 խորը քուն',
        ],
        correctIndex: 3,
        explanation: 'Delta waves are large, slow brain waves associated with deep sleep (NREM-3).',
        explanationKa:
          'დელტა ტალღები არის დიდი, ნელი ტვინის ტალღები, რომლებიც დაკავშირებულია ღრმა ძილთან (NREM-3).',
        explanationRu:
          'Дельта-волны — это большие медленные мозговые волны, связанные с глубоким сном (NREM-3).',
        explanationHy:
          'Դելտա ալիքները մեծ, դանդաղ ուղեղային ալիքներ են, որոնք կապված են խորը քնի հետ (NREM-3):',
      },
      {
        id: 'q5_5',
        question: 'A sleep disorder characterized by uncontrollable sleep attacks is:',
        questionKa: 'ძილის დარღვევა, რომელიც ხასიათდება დაუძლეველი ძილის შეტევებით, არის:',
        questionRu: 'Расстройство сна, характеризующееся неконтролируемыми приступами сна, — это:',
        questionHy: 'Քնի խանգարում, որը բնութագրվում է քնի անվերահսկելի նոպաներով.',
        options: ['Insomnia', 'Sleep apnea', 'Narcolepsy', 'Night terrors'],
        optionsKa: ['ინსომნია', 'ძილის აპნოე', 'ნარკოლეფსია', 'ღამის კოშმარები'],
        optionsRu: ['Бессонница', 'Апноэ во сне', 'Нарколепсия', 'Ночные кошмары'],
        optionsHy: ['Անքնություն', 'Քնի ապնոէ', 'Նարկոլեպսիա', 'Գիշերային սարսափներ'],
        correctIndex: 2,
        explanation:
          "Narcolepsy literally means 'numbness seizure' and involves suddenly falling directly into REM sleep.",
        explanationKa:
          "ნარკოლეფსია ნიშნავს 'დაბუჟების შეტევას', ადამიანი მოულოდნელად ვარდება პირდაპირ REM ძილში.",
        explanationRu:
          'Нарколепсия включает внезапное впадение непосредственно в фазу быстрого сна.',
        explanationHy:
          'Նարկոլեպսիան բառացի նշանակում է «թմրության նոպա» և ենթադրում է հանկարծակի ուղղակիորեն REM քնի մեջ ընկնել:',
      },
      {
        id: 'q5_6',
        question: 'According to Freud, the underlying symbolic meaning of a dream is its:',
        questionKa: 'ფროიდის მიხედვით, სიზმრის ფარული სიმბოლური მნიშვნელობა არის მისი:',
        questionRu: 'По Фрейду, скрытый символический смысл сновидения — это его:',
        questionHy:
          'Ըստ Ֆրեյդի, երազի հիմքում ընկած խորհրդանշական իմաստը նրա մոտ այսպես է կոչվում.',
        options: [
          'Manifest content',
          'Latent content',
          'Activation-synthesis',
          'Information processing',
        ],
        optionsKa: [
          'მანიფესტური შინაარსი',
          'ლატენტური შინაარსი',
          'აქტივაცია-სინთეზი',
          'ინფორმაციის გადამუშავება',
        ],
        optionsRu: [
          'Манифестное содержание',
          'Латентное содержание',
          'Активация-синтез',
          'Обработка информации',
        ],
        optionsHy: [
          'Բացահայտ բովանդակություն',
          'Թաքնված (Latent) բովանդակություն',
          'Ակտիվացում-սինթեզ',
          'Տեղեկատվության մշակում',
        ],
        correctIndex: 1,
        explanation:
          'Freud believed dreams conceal unconscious desires in their symbolic latent content.',
        explanationKa:
          'ფროიდს სჯეროდა, რომ სიზმრები მალავენ არაცნობიერ სურვილებს მათ სიმბოლურ, ლატენტურ შინაარსში.',
        explanationRu:
          'Фрейд верил, что сны скрывают бессознательные желания в своем символическом латентном содержании.',
        explanationHy:
          'Ֆրեյդը կարծում էր, որ երազները թաքցնում են անգիտակից ցանկությունները իրենց խորհրդանշական, թաքնված բովանդակության մեջ:',
      },
      {
        id: 'q5_7',
        question:
          'Which dream theory suggests boundaries between waking and sleeping brain activity are fuzzy, processing everyday experiences?',
        questionKa:
          'რომელი სიზმრის თეორია ვარაუდობს, რომ სიფხიზლისა და ძილში ტვინის აქტივობას შორის საზღვრები ბუნდოვანია და ამუშავებს ყოველდღიურ გამოცდილებას?',
        questionRu:
          'Какая теория сновидений предполагает, что границы между бодрствованием и сном размыты и мозг обрабатывает повседневный опыт?',
        questionHy:
          'Երազների ո՞ր տեսությունն է ենթադրում, որ արթնանալու և քնելու ուղեղի գործունեության միջև սահմանները մշուշոտ են, մշակելով ամենօրյա փորձառությունները:',
        options: [
          'Information-processing theory',
          'Wish-fulfillment theory',
          'Neural-activation theory',
          'Cognitive development theory',
        ],
        optionsKa: [
          'ინფორმაციის გადამუშავების თეორია',
          'სურვილების ასრულების თეორია',
          'ნერვული-აქტივაციის თეორია',
          'კოგნიტური განვითარების თეორია',
        ],
        optionsRu: [
          'Теория обработки информации',
          'Теория исполнения желаний',
          'Теория нейронной активации',
          'Теория когнитивного развития',
        ],
        optionsHy: [
          'Տեղեկատվության մշակման տեսություն',
          'Ցանկությունների իրականացման տեսություն',
          'Նյարդային-ակտիվացման տեսություն',
          'Ճանաչողական զարգացման տեսություն',
        ],
        correctIndex: 0,
        explanation:
          "Information-processing theory claims dreams help sift, sort, and fix the day's experiences into memory.",
        explanationKa:
          'ამ თეორიის მიხედვით, სიზმრები გვეხმარება დღის გამოცდილებების დახარისხებასა და მეხსიერებაში შენახვაში.',
        explanationRu:
          'Теория обработки информации утверждает, что сны помогают сортировать и фиксировать опыт дня в памяти.',
        explanationHy:
          'Տեղեկատվության մշակման տեսությունը պնդում է, որ երազներն օգնում են մաղել, տեսակավորել և հիշողության մեջ ամրագրել օրվա փորձառությունները:',
      },
      {
        id: 'q5_8',
        question: 'What is physical dependence on a drug indicated by?',
        questionKa: 'რით არის გამოხატული ნარკოტიკზე ფიზიკური დამოკიდებულება?',
        questionRu: 'Чем проявляется физическая зависимость от наркотика?',
        questionHy: 'Ինչո՞վ է դրսևորվում ֆիզիկական կախվածությունը թմրամիջոցներից:',
        options: [
          'Cravings without physical pain',
          'A psychological need for the drug',
          'Withdrawal symptoms and tolerance',
          'Taking drugs in social settings only',
        ],
        optionsKa: [
          'ლტოლვა ფიზიკური ტკივილის გარეშე',
          'პრეპარატის ფსიქოლოგიური საჭიროება',
          'აბსტინენციის (აღკვეთის) სიმპტომები და ტოლერანტობა',
          'ნარკოტიკის გამოყენება მხოლოდ სოციალურ გარემოში',
        ],
        optionsRu: [
          'Тяга без физической боли',
          'Психологическая потребность в препарате',
          'Симптомы отмены и толерантность',
          'Прием наркотиков только в социальных условиях',
        ],
        optionsHy: [
          'Փափագ առանց ֆիզիկական ցավի',
          'Դեղամիջոցի հոգեբանական կարիք',
          'Հանման ախտանիշներ (withdrawal) և հանդուրժողականություն',
          'Թմրանյութեր ընդունելը միայն սոցիալական միջավայրում',
        ],
        correctIndex: 2,
        explanation:
          'Physical dependence involves physiological adaptation, resulting in withdrawal upon cessation and tolerance over time.',
        explanationKa:
          "ფიზიკური დამოკიდებულება მოიცავს ფიზიოლოგიურ ადაპტაციას, რაც იწვევს 'ლომკას' და ტოლერანტობას.",
        explanationRu:
          'Физическая зависимость вызывает физиологическую адаптацию, что приводит к ломке и толерантности.',
        explanationHy:
          'Ֆիզիկական կախվածությունը ներառում է ֆիզիոլոգիական հարմարվողականություն, որը հանգեցնում է դադարեցման որոշմանը և ժամանակի ընթացքում հանդուրժողականության:',
      },
      {
        id: 'q5_9',
        question: 'Alcohol is classified as a:',
        questionKa: 'როგორ კლასიფიცირდება ალკოჰოლი?',
        questionRu: 'К какому классу относится алкоголь?',
        questionHy: 'Ալկոհոլը դասակարգվում է որպես.',
        options: ['Stimulant', 'Depressant', 'Hallucinogen', 'Opiate'],
        optionsKa: ['სტიმულატორი', 'დეპრესანტი', 'ჰალუცინოგენი', 'ოპიატი'],
        optionsRu: ['Стимулятор', 'Депрессант', 'Галлюциноген', 'Опиат'],
        optionsHy: ['Խթանիչ', 'Դեպրեսանտ', 'Հալյուցինոգեն', 'Օփիատ'],
        correctIndex: 1,
        explanation:
          'Alcohol slows down brain activity that controls judgment and inhibitions, making it a depressant.',
        explanationKa:
          'ალკოჰოლი ანელებს ტვინის აქტივობას, რაც ამცირებს კონტროლს. შესაბამისად, ის დეპრესანტია.',
        explanationRu: 'Алкоголь замедляет активность мозга, что делает его депрессантом.',
        explanationHy:
          'Ալկոհոլը դանդաղեցնում է ուղեղի ակտիվությունը, որը վերահսկում է դատողությունն ու արգելակումները՝ դարձնելով այն դեպրեսանտ:',
      },
      {
        id: 'q5_10',
        question: 'Which drug mimics the effects of endorphins?',
        questionKa: 'რომელი ნარკოტიკი ბაძავს ენდორფინების ეფექტს?',
        questionRu: 'Какой наркотик имитирует действие эндорфинов?',
        questionHy: 'Ո՞ր դեղամիջոցն է ընդօրինակում էնդորֆինների ազդեցությունը:',
        options: ['Cocaine', 'LSD', 'Heroin (Opiates)', 'Caffeine'],
        optionsKa: ['კოკაინი', 'LSD', 'ჰეროინი (ოპიატები)', 'კოფეინი'],
        optionsRu: ['Кокаин', 'ЛСД', 'Героин (Опиаты)', 'Кофеин'],
        optionsHy: ['Կոկաին', 'ԼՍԴ (LSD)', 'Հերոին (Օփիատներ)', 'Կոֆեին'],
        correctIndex: 2,
        explanation:
          'Opiates like heroin depress neural activity and temporarily lessen pain and anxiety, mimicking natural endorphins.',
        explanationKa:
          'ოპიატები, როგორიცაა ჰეროინი, ამცირებს ნერვულ აქტივობას და დროებით აქრობს ტკივილს (ენდორფინების მსგავსად).',
        explanationRu:
          'Опиаты, такие как героин, подавляют нервную активность и временно уменьшают боль, имитируя эндорфины.',
        explanationHy:
          'Ափիատները, ինչպես հերոինը, ճնշում են նյարդային ակտիվությունը և ժամանակավորապես նվազեցնում են ցավն ու անհանգստությունը՝ ընդօրինակելով բնական էնդորֆինները:',
      },
      {
        id: 'q5_11',
        question: 'What happens when you require larger doses of a drug to feel the same effect?',
        questionKa: 'რა ხდება, როდესაც იგივე ეფექტის მისაღებად უფრო დიდი დოზა გჭირდებათ?',
        questionRu:
          'Что происходит, когда вам требуются большие дозы наркотика для достижения того же эффекта?',
        questionHy:
          'Ի՞նչ է պատահում, երբ նույն ազդեցությունը զգալու համար պահանջվում են դեղամիջոցի ավելի մեծ չափաբաժիններ:',
        options: ['Withdrawal', 'Addiction', 'Tolerance', 'Psychoactive adaptation'],
        optionsKa: [
          'აბსტინენცია (აღკვეთა)',
          'დამოკიდებულება',
          'ტოლერანტობა',
          'ფსიქოაქტიური ადაპტაცია',
        ],
        optionsRu: [
          'Ломка (Абстиненция)',
          'Зависимость',
          'Толерантность',
          'Психоактивная адаптация',
        ],
        optionsHy: [
          'Դադարեցում (Withdrawal)',
          'Կախվածություն',
          'Հանդուրժողականություն',
          'Հոգեակտիվ հարմարվողականություն',
        ],
        correctIndex: 2,
        explanation:
          'Tolerance is the diminishing effect with regular use of the same dose of a drug.',
        explanationKa:
          'ტოლერანტობა არის პრეპარატის იმავე დოზის რეგულარული გამოყენებისას ეფექტის შემცირება.',
        explanationRu:
          'Толерантность — это снижение эффекта при регулярном использовании одной и той же дозы наркотика.',
        explanationHy:
          'Հանդուրժողականությունը նվազող ազդեցությունն է պրեպարատի նույն չափաբաժնի կանոնավոր օգտագործման դեպքում:',
      },
      {
        id: 'q5_12',
        question: 'Hypnosis is best described as:',
        questionKa: 'როგორ აღიწერება ჰიპნოზი ყველაზე კარგად?',
        questionRu: 'Как лучше всего описать гипноз?',
        questionHy: 'Հիպնոսը լավագույնս նկարագրվում է որպես.',
        options: [
          'Mind control by a therapist',
          'A form of deep REM sleep',
          'A state of heightened suggestibility',
          'A truth serum effect',
        ],
        optionsKa: [
          'თერაპევტის მიერ გონების კონტროლი',
          'ღრმა REM ძილის ფორმა',
          'მაღალი შთაგონებადობის (შაგონებისადმი მგრძნობელობის) მდგომარეობა',
          'სიმართლის შრატის ეფექტი',
        ],
        optionsRu: [
          'Контроль сознания со стороны терапевта',
          'Форма глубокого REM-сна',
          'Состояние повышенной внушаемости',
          'Эффект сыворотки правды',
        ],
        optionsHy: [
          'Խելքի վերահսկում թերապևտի կողմից',
          'Խորը REM քնի ձև',
          'Բարձր ներշնչման վիճակ',
          'Ճշմարտության շիճուկի ազդեցությունը',
        ],
        correctIndex: 2,
        explanation:
          'Hypnosis involves a subject being open to suggestions about perceptions and behaviors.',
        explanationKa:
          'ჰიპნოზის დროს ადამიანი ღიაა შთაგონებისთვის მისი აღქმებისა და ქცევის შესახებ.',
        explanationRu: 'При гипнозе субъект открыт для внушения по поводу восприятия и поведения.',
        explanationHy:
          'Հիպնոսը ենթադրում է, որ սուբյեկտը բաց լինի ընկալումների և վարքագծի վերաբերյալ առաջարկությունների համար:',
      },
      {
        id: 'q5_13',
        question: 'Dissociation theory of hypnosis suggests:',
        questionKa: 'ჰიპნოზის დისოციაციის თეორია ვარაუდობს:',
        questionRu: 'Теория диссоциации гипноза предполагает:',
        questionHy: 'Հիպնոսի դիսոցիացիայի տեսությունը հուշում է.',
        options: [
          'People are just acting out a social role',
          'Consciousness splits into two different streams',
          'The unconscious mind takes full control',
          'Memory is permanently erased',
        ],
        optionsKa: [
          'ადამიანები უბრალოდ თამაშობენ სოციალურ როლს',
          'ცნობიერება იყოფა ორ სხვადასხვა ნაკადად',
          'არაცნობიერი გონება იღებს სრულ კონტროლს',
          'მეხსიერება სამუდამოდ იშლება',
        ],
        optionsRu: [
          'Люди просто играют социальную роль',
          'Сознание расщепляется на два разных потока',
          'Бессознательное берет полный контроль',
          'Память стирается навсегда',
        ],
        optionsHy: [
          'Մարդիկ պարզապես խաղում են սոցիալական դեր',
          'Գիտակցությունը բաժանվում է երկու տարբեր հոսքերի',
          'Անգիտակից միտքը վերցնում է լիակատար վերահսկողություն',
          'Հիշողությունը ընդմիշտ ջնջվում է',
        ],
        correctIndex: 1,
        explanation:
          "Hilgard's dissociation theory proposes a split in consciousness, allowing some thoughts to occur simultaneously with others.",
        explanationKa:
          'ჰილგარდის თეორიის მიხედვით, ცნობიერება იყოფა, რაც იძლევა ორი პარალელური პროცესის მიმდინარეობის საშუალებას.',
        explanationRu: 'Теория диссоциации Хилгарда предполагает расщепление сознания.',
        explanationHy:
          'Հիլգարդի դիսոցիացիայի տեսությունը ենթադրում է գիտակցության պառակտում, որը թույլ է տալիս որոշ մտքերի միաժամանակ առաջանալ ուրիշների հետ:',
      },
      {
        id: 'q5_14',
        question: 'Which of these is a major stimulant?',
        questionKa: 'ჩამოთვლილთაგან რომელია ძლიერი სტიმულატორი?',
        questionRu: 'Что из этого является сильным стимулятором?',
        questionHy: 'Հետևյալներից ո՞րն է գլխավոր խթանիչը(ստիմուլյատորը):',
        options: ['Marijuana', 'Alcohol', 'Cocaine', 'Barbiturates'],
        optionsKa: ['მარიხუანა', 'ალკოჰოლი', 'კოკაინი', 'ბარბიტურატები'],
        optionsRu: ['Марихуана', 'Алкоголь', 'Кокаин', 'Барбитураты'],
        optionsHy: ['Մարիխուանա', 'Ալկոհոլ', 'Կոկաին', 'Բարբիտուրատներ'],
        correctIndex: 2,
        explanation:
          'Cocaine is a powerful stimulant that temporarily increases alertness and euphoria.',
        explanationKa:
          'კოკაინი არის ძლიერი სტიმულატორი, რომელიც დროებით ზრდის სიფხიზლესა და ეიფორიას.',
        explanationRu:
          'Кокаин — это мощный стимулятор, временно повышающий бдительность и эйфорию.',
        explanationHy:
          'Կոկաինը հզոր խթանիչ է, որը ժամանակավորապես մեծացնում է զգոնությունն ու էյֆորիան:',
      },
      {
        id: 'q5_15',
        question: 'Sleep terror disorder occurs during which stage of sleep?',
        questionKa: 'ძილის რომელ სტადიაზე ვლინდება ღამის კოშმარები/საშინელებები (Sleep terrors)?',
        questionRu: 'На какой стадии сна возникает расстройство ночных страхов (Sleep terrors)?',
        questionHy: 'Քնի ո՞ր փուլում է առաջանում քնի սարսափի խանգարումը:',
        options: ['REM', 'NREM-1', 'NREM-2', 'NREM-3'],
        optionsKa: ['REM', 'NREM-1', 'NREM-2', 'NREM-3'],
        optionsRu: ['REM', 'NREM-1', 'NREM-2', 'NREM-3'],
        optionsHy: ['REM', 'NREM-1', 'NREM-2', 'NREM-3'],
        correctIndex: 3,
        explanation:
          'Night terrors occur during deep NREM-3 sleep, unlike regular nightmares which occur in REM.',
        explanationKa:
          'ღამის საშინელებები(Night terrors) ხდება ღრმა NREM-3 ძილის დროს, განსხვავებით კოშმარებისგან, რომლებიც REM-ში ხდება.',
        explanationRu:
          'Ночные страхи возникают во время глубокого сна NREM-3, в отличие от кошмаров, которые происходят в REM.',
        explanationHy:
          'Գիշերային սարսափները (Night terrors) առաջանում են խորը NREM-3 քնի ժամանակ՝ ի տարբերություն սովորական մղձավանջների, որոնք տեղի են ունենում REM-ում:',
      },
    ],
  },
  {
    id: 'q6',
    chapterId: 6,
    title: 'Learning',
    titleKa: 'სწავლა',
    titleRu: 'Обучение',
    titleHy: 'Ուսուցում',
    questions: [
      {
        id: 'q6_1',
        question: 'Which of the following best defines learning in psychology?',
        questionKa: 'ჩამოთვლილთაგან რომელი საუკეთესოდ განმარტავს სწავლას ფსიქოლოგიაში?',
        questionRu: 'Что из следующего лучше всего определяет обучение в психологии?',
        questionHy: 'Հետևյալներից ո՞րն է լավագույնս սահմանում ուսուցումը հոգեբանության մեջ:',
        options: [
          'A temporary change in mood',
          'A relatively permanent change in behavior due to experience',
          'Maturation of the nervous system',
          'Instinctive biological responses',
        ],
        optionsKa: [
          'განწყობის დროებითი ცვლილება',
          'გამოცდილების შედეგად ქცევის შედარებით მუდმივი ცვლილება',
          'ნერვული სისტემის მომწიფება',
          'ინსტინქტური ბიოლოგიური რეაქციები',
        ],
        optionsRu: [
          'Временное изменение настроения',
          'Относительно постоянное изменение поведения в результате опыта',
          'Созревание нервной системы',
          'Инстинктивные биологические реакции',
        ],
        optionsHy: [
          'Տրամադրության ժամանակավոր փոփոխություն',
          'Փորձի հետևանքով վարքագծի համեմատաբար մշտական փոփոխություն',
          'Նյարդային համակարգի հասունացում',
          'Բնազդային կենսաբանական արձագանքներ',
        ],
        correctIndex: 1,
        explanation:
          'Learning is defined as a relatively enduring change in behavior or knowledge resulting from experience.',
        explanationKa:
          'სწავლა განიმარტება, როგორც გამოცდილების შედეგად ქცევის ან ცოდნის შედარებით ხანგრძლივი ცვლილება.',
        explanationRu:
          'Обучение определяется как относительно постоянное изменение поведения или знаний в результате опыта.',
        explanationHy:
          'Ուսուցումը սահմանվում է որպես փորձի արդյունքում վարքագծի կամ գիտելիքի համեմատաբար կայուն փոփոխություն:',
      },
      {
        id: 'q6_2',
        question: "In Pavlov's dogs experiment, the food was the:",
        questionKa: 'პავლოვის ძაღლების ექსპერიმენტში საკვები იყო:',
        questionRu: 'В эксперименте с собаками Павлова еда была:',
        questionHy: 'Պավլովի շների փորձի ժամանակ սնունդը հանդիսանում էր.',
        options: [
          'Conditioned stimulus',
          'Unconditioned stimulus',
          'Conditioned response',
          'Unconditioned response',
        ],
        optionsKa: ['პირობითი სტიმული', 'უპირობო სტიმული', 'პირობითი რეაქცია', 'უპირობო რეაქცია'],
        optionsRu: [
          'Условный стимул',
          'Безусловный стимул',
          'Условная реакция',
          'Безусловная реакция',
        ],
        optionsHy: [
          'Պայմանական խթան',
          'Ոչ պայմանական խթան',
          'Պայմանական արձագանք',
          'Ոչ պայմանական արձագանք',
        ],
        correctIndex: 1,
        explanation:
          'The food naturally and automatically triggers salivation, making it an unconditioned stimulus (US).',
        explanationKa:
          'საკვები ბუნებრივად და ავტომატურად იწვევს ნერწყვდენას, რაც მას უპირობო სტიმულად (US) აქცევს.',
        explanationRu:
          'Еда естественно и автоматически вызывает слюноотделение, что делает ее безусловным стимулом.',
        explanationHy:
          'Սնունդը բնականաբար և ավտոմատ կերպով առաջացնում է թուք, ինչը դարձնում է այն ոչ պայմանական խթան (US):',
      },
      {
        id: 'q6_3',
        question: 'In classical conditioning, the sound of the bell before conditioning is a:',
        questionKa: 'კლასიკურ განპირობებულობაში, ზარის ხმა განპირობებამდე არის:',
        questionRu: 'В классическом обусловливании звук колокольчика до обусловливания является:',
        questionHy:
          'Դասական պայմանավորվածության մեջ զանգի ձայնը մինչև պայմանավորելը հանդիսանում է.',
        options: [
          'Neutral stimulus',
          'Unconditioned stimulus',
          'Conditioned stimulus',
          'Positive reinforcer',
        ],
        optionsKa: [
          'ნეიტრალური სტიმული',
          'უპირობო სტიმული',
          'პირობითი სტიმული',
          'პოზიტიური განმამტკიცებელი',
        ],
        optionsRu: [
          'Нейтральный стимул',
          'Безусловный стимул',
          'Условный стимул',
          'Позитивный подкрепляющий фактор',
        ],
        optionsHy: ['Չեզոք խթան', 'Ոչ պայմանական խթան', 'Պայմանական խթան', 'Դրական ամրապնդող'],
        correctIndex: 0,
        explanation:
          'Before pairing with the food, the bell elicits no relevant response, so it is a neutral stimulus.',
        explanationKa:
          'საკვებთან დაკავშირებამდე ზარი არ იწვევს შესაბამის რეაქციას, ამიტომ ის ნეიტრალური სტიმულია.',
        explanationRu:
          'До связи с едой колокольчик не вызывает соответствующей реакции, поэтому это нейтральный стимул.',
        explanationHy:
          'Նախքան սննդի հետ զուգակցելը, զանգը համապատասխան արձագանք չի առաջացնում, ուստի այն չեզոք խթան է:',
      },
      {
        id: 'q6_4',
        question: 'Extinction in classical conditioning occurs when:',
        questionKa: 'კლასიკურ განპირობებულობაში ჩაქრობა ხდება მაშინ, როდესაც:',
        questionRu: 'Угасание в классическом обусловливании происходит, когда:',
        questionHy: 'Դասական պայմանավորվածության մեջ մարումը (էքստինկցիա) տեղի է ունենում, երբ.',
        options: [
          'The CS is presented repeatedly without the US',
          'The animal forgets the trick',
          'Punishment is applied',
          'A new behavior replaces the old one',
        ],
        optionsKa: [
          'პირობითი სტიმული (CS) წარმოდგენილია მრავალჯერ უპირობო სტიმულის (US) გარეშე',
          'ცხოველს ავიწყდება ილეთი',
          'გამოიყენება დასჯა',
          'ახალი ქცევა ანაცვლებს ძველს',
        ],
        optionsRu: [
          'Условный стимул предъявляется многократно без безусловного',
          'Животное забывает трюк',
          'Применяется наказание',
          'Новое поведение заменяет старое',
        ],
        optionsHy: [
          'Պայմանական խթանը (CS) բազմիցս ներկայացվում է առանց ոչ պայմանական խթանի (US)',
          'Կենդանին մոռանում է հնարքը',
          'Կիրառվում է պատիժ',
          'Նոր վարքագիծը փոխարինում է հնին',
        ],
        correctIndex: 0,
        explanation:
          'Extinction is the diminishing of a conditioned response when the CS no longer signals an impending US.',
        explanationKa:
          'ჩაქრობა არის პირობითი რეაქციის შესუსტება, როცა პირობითი სტიმული აღარ მიანიშნებს მომავალ უპირობო სტიმულზე.',
        explanationRu:
          'Угасание — это ослабление условной реакции, когда условный стимул больше не сигнализирует о безусловном.',
        explanationHy:
          'Մարումը պայմանական արձագանքի նվազումն է, երբ CS-ն այլևս չի ազդարարում մոտալուտ US-ի մասին:',
      },
      {
        id: 'q6_5',
        question:
          "Little Albert's fear of all fuzzy things after being conditioned to fear a white rat is an example of:",
        questionKa:
          'პატარა ალბერტის შიში ყველა ბეწვიანი ნივთის მიმართ, თეთრი ვირთხის შიშის განპირობების შემდეგ, არის მაგალითი:',
        questionRu:
          'Страх Маленького Альберта перед всеми пушистыми вещами после того, как его приучили бояться белой крысы, является примером:',
        questionHy:
          'Փոքրիկ Ալբերտի վախը բոլոր մշուշոտ բաներից, երբ նա վարժվել էր սպիտակ առնետից վախենալուն, օրինակ է.',
        options: [
          'Spontaneous recovery',
          'Stimulus discrimination',
          'Stimulus generalization',
          'Higher-order conditioning',
        ],
        optionsKa: [
          'სპონტანური აღდგენის',
          'სტიმულის დისკრიმინაციის',
          'სტიმულის გენერალიზაციის',
          'უმაღლესი რიგის განპირობებულობის',
        ],
        optionsRu: [
          'Спонтанного восстановления',
          'Дискриминации стимулов',
          'Генерализации стимулов',
          'Обусловливания высшего порядка',
        ],
        optionsHy: [
          'Ինքնաբուխ վերականգնման',
          'Խթանի խտրականության',
          'Խթանի ընդհանրացման (գեներալիզացիա)',
          'Բարձր կարգի պայմանավորվածության',
        ],
        correctIndex: 2,
        explanation:
          'Generalization is the tendency for stimuli similar to the conditioned stimulus to elicit similar responses.',
        explanationKa:
          'გენერალიზაცია არის ტენდენცია, რომ პირობითი სტიმულის მსგავსმა სტიმულებმა გამოიწვიოს მსგავსი რეაქციები.',
        explanationRu:
          'Генерализация — это тенденция стимулов, похожих на условный, вызывать аналогичные реакции.',
        explanationHy:
          'Ընդհանրացումը պայմանական խթանին նման խթանների հակվածությունն է՝ առաջացնելու նմանատիպ արձագանքներ:',
      },
      {
        id: 'q6_6',
        question: 'Operant conditioning relates to the association between:',
        questionKa: 'ოპერანტული განპირობებულობა ეხება კავშირს:',
        questionRu: 'Оперантное обусловливание относится к связи между:',
        questionHy: 'Օպերանտային պայմանավորվածությունը վերաբերում է հետևյալի միջև եղած կապին.',
        options: [
          'Two different stimuli',
          'Behaviors and their consequences',
          'Biological needs and drives',
          "Observing someone else's behavior",
        ],
        optionsKa: [
          'ორ სხვადასხვა სტიმულს შორის',
          'ქცევებსა და მათ შედეგებს შორის',
          'ბიოლოგიურ მოთხოვნილებებსა და მისწრაფებებს შორის',
          'სხვისი ქცევის დაკვირვებას შორის',
        ],
        optionsRu: [
          'Двумя разными стимулами',
          'Поведением и его последствиями',
          'Биологическими потребностями и влечениями',
          'Наблюдением за чужим поведением',
        ],
        optionsHy: [
          'Երկու տարբեր խթանների',
          'Վարքագծի և դրանց հետևանքների',
          'Կենսաբանական կարիքների և մղումների',
          'Ուրիշի վարքագծին հետևելու',
        ],
        correctIndex: 1,
        explanation:
          'Operant conditioning (Skinner) involves learning to associate our actions (behavior) with their outcomes.',
        explanationKa:
          'ოპერანტული განპირობებულობა (სკინერი) გულისხმობს ჩვენი მოქმედებების (ქცევის) დაკავშირებას მათ შედეგებთან.',
        explanationRu:
          'Оперантное обусловливание включает обучение связи наших действий (поведения) с их результатами.',
        explanationHy:
          'Օպերանտ պայմանավորվածությունը (Սքիններ) ներառում է մեր գործողությունների (վարքագծի) և դրանց արդյունքների կապը սովորելը:',
      },
      {
        id: 'q6_7',
        question: 'Taking painkillers to relieve a headache is an example of:',
        questionKa: 'თავის ტკივილის შესამსუბუქებლად ტკივილგამაყუჩებლების მიღება არის მაგალითი:',
        questionRu: 'Прием обезболивающих для снятия головной боли — это пример:',
        questionHy: 'Գլխացավը մեղմելու համար ցավազրկողներ ընդունելը օրինակ է.',
        options: [
          'Positive reinforcement',
          'Negative reinforcement',
          'Positive punishment',
          'Negative punishment',
        ],
        optionsKa: [
          'პოზიტიური განმამტკიცებლის',
          'ნეგატიური განმამტკიცებლის',
          'პოზიტიური დასჯის',
          'ნეგატიური დასჯის',
        ],
        optionsRu: [
          'Позитивного подкрепления',
          'Негативного подкрепления',
          'Позитивного наказания',
          'Негативного наказания',
        ],
        optionsHy: [
          'Դրական ամրապնդման',
          'Բացասական ամրապնդման',
          'Դրական պատիժի',
          'Բացասական պատիժի',
        ],
        correctIndex: 1,
        explanation:
          'Negative reinforcement increases a behavior by removing an unpleasant stimulus (the headache).',
        explanationKa:
          'ნეგატიური განმამტკიცებელი ზრდის ქცევის ალბათობას უსიამოვნო სტიმულის (თავის ტკივილის) მოშორებით.',
        explanationRu:
          'Негативное подкрепление усиливает поведение путем устранения неприятного стимула (головной боли).',
        explanationHy:
          'Բացասական ամրապնդումը մեծացնում է վարքագիծը՝ վերացնելով տհաճ խթանը (գլխացավը):',
      },
      {
        id: 'q6_8',
        question: 'A slot machine operates on which schedule of reinforcement?',
        questionKa: 'რომელი განმამტკიცებელი განრიგით მუშაობს სათამაშო აპარატი (slot machine)?',
        questionRu: 'По какому режиму подкрепления работает игровой автомат?',
        questionHy: 'Ամրապնդման ո՞ր ժամանակացույցով է աշխատում խաղային ապարատը (slot machine):',
        options: ['Fixed-ratio', 'Variable-ratio', 'Fixed-interval', 'Variable-interval'],
        optionsKa: [
          'ფიქსირებული პროპორციის',
          'ცვლადი პროპორციის',
          'ფიქსირებული ინტერვალის',
          'ცვლადი ინტერვალის',
        ],
        optionsRu: [
          'С фиксированной пропорцией',
          'С вариативной пропорцией',
          'С фиксированным интервалом',
          'С вариативным интервалом',
        ],
        optionsHy: [
          'Ֆիքսված համամասնության',
          'Փոփոխական համամասնության',
          'Ֆիքսված ընդմիջման',
          'Փոփոխական ընդմիջման',
        ],
        correctIndex: 1,
        explanation:
          'Variable-ratio schedules deliver reinforcement after an unpredictable number of responses (pulls).',
        explanationKa:
          'ცვლადი პროპორციის განრიგი გვაწვდის განმამტკიცებელს არაპროგნოზირებადი რაოდენობის ქცევის შემდეგ.',
        explanationRu:
          'Вариативный режим пропорции доставляет подкрепление после непредсказуемого количества реакций.',
        explanationHy:
          'Փոփոխական համամասնության ժամանակացույցերը խթանում են ապահովում անկանխատեսելի քանակությամբ արձագանքներից (քաշումներից) հետո:',
      },
      {
        id: 'q6_9',
        question: "Taking away a teenager's driving privileges for coming home late is:",
        questionKa:
          'მოზარდისთვის მანქანის მართვის უფლების ჩამორთმევა სახლში დაგვიანებით დაბრუნების გამო არის:',
        questionRu: 'Лишение подростка прав на вождение за позднее возвращение домой — это:',
        questionHy: 'Դեռահասին տուն ուշ գալու համար վարելու իրավունքից զրկելն է.',
        options: [
          'Negative reinforcement',
          'Positive punishment',
          'Negative punishment',
          'Extinction',
        ],
        optionsKa: ['ნეგატიური განმამტკიცებელი', 'პოზიტიური დასჯა', 'ნეგატიური დასჯა', 'ჩაქრობა'],
        optionsRu: [
          'Негативное подкрепление',
          'Позитивное наказание',
          'Негативное наказание',
          'Угасание',
        ],
        optionsHy: ['Բացասական ամրապնդում', 'Դրական պատիժ', 'Բացասական պատիժ', 'Մարում'],
        correctIndex: 2,
        explanation:
          'Negative punishment aims to decrease a behavior (coming in late) by removing a desirable stimulus (driving privileges).',
        explanationKa: 'ნეგატიური დასჯის მიზანია შეამციროს ქცევა სასურველი სტიმულის ჩამორთმევით.',
        explanationRu:
          'Негативное наказание направлено на уменьшение поведения путем лишения желаемого блага.',
        explanationHy:
          'Բացասական պատժի նպատակն է նվազեցնել վարքագիծը (ուշ գալը)՝ հեռացնելով ցանկալի խթանը (վարելու արտոնությունները):',
      },
      {
        id: 'q6_10',
        question:
          "Tolman's rats demonstrated that learning can occur without immediate reinforcement. This is known as:",
        questionKa:
          'ტოლმენის ვირთხებმა აჩვენეს, რომ სწავლა შეიძლება მოხდეს დაუყოვნებელი განმტკიცების გარეშეც. ეს ცნობილია როგორც:',
        questionRu:
          'Крысы Толмана продемонстрировали, что обучение может происходить без немедленного подкрепления. Это известно как:',
        questionHy:
          'Թոլմանի առնետները ցույց են տվել, որ ուսուցումը կարող է տեղի ունենալ առանց անհապաղ ամրապնդման: Սա հայտնի է որպես.',
        options: ['Shaping', 'Modeling', 'Latent learning', 'Insight learning'],
        optionsKa: [
          'შეიპინგი (ფორმირება)',
          'მოდელირება',
          'ლატენტური სწავლა',
          'ინსაიტური სწავლა (წვდომა)',
        ],
        optionsRu: ['Шейпинг', 'Моделирование', 'Латентное обучение', 'Инсайт'],
        optionsHy: [
          'Շեյփինգ (Ձևավորում)',
          'Մոդելավորում',
          'Թաքնված ուսուցում',
          'Ինսայթ (Insight) ուսուցում',
        ],
        correctIndex: 2,
        explanation:
          'Latent learning is learning that is not immediately reflected in behavior but becomes obvious when reinforcement is provided.',
        explanationKa:
          'ლატენტური სწავლა არის სწავლა, რომელიც მაშინვე არ აისახება ქცევაში, მაგრამ აშკარა ხდება განმტკიცების დროს.',
        explanationRu:
          'Латентное обучение не сразу проявляется в поведении, но становится очевидным при наличии стимула.',
        explanationHy:
          'Թաքնված ուսուցումն այն ուսուցումն է, որն անմիջապես չի արտացոլվում վարքագծում, սակայն ակնհայտ է դառնում ամրապնդման դեպքում:',
      },
      {
        id: 'q6_11',
        question: "A mental representation of the layout of one's environment is called a:",
        questionKa: 'საკუთარი გარემოს განლაგების გონებრივ წარმოდგენას ეწოდება:',
        questionRu: 'Ментальное представление схемы окружающей среды называется:',
        questionHy: 'Մարդու միջավայրի դասավորության մտավոր պատկերումը կոչվում է.',
        options: ['Cognitive map', 'Perceptual set', 'Conditioned layout', 'Schema'],
        optionsKa: ['კოგნიტური რუკა', 'პერცეფციული განწყობა', 'განპირობებული განლაგება', 'სქემა'],
        optionsRu: ['Когнитивная карта', 'Перцептивная установка', 'Обусловленная схема', 'Схема'],
        optionsHy: [
          'Ճանաչողական քարտեզ',
          'Ընկալման հավաքածու',
          'Պայմանավորված դասավորություն',
          'Սխեմա',
        ],
        correctIndex: 0,
        explanation:
          'Cognitive maps are internalized spatial representations, like your mental map of your school.',
        explanationKa:
          'კოგნიტური რუკები არის ინტერნალიზებული სივრცითი წარმოდგენები, მაგალითად, სკოლის გონებრივი რუკა.',
        explanationRu:
          'Когнитивная карта — это внутреннее пространственное представление, например, вашей школы.',
        explanationHy:
          'Ճանաչողական քարտեզները ներքինացված տարածական պատկերացումներն են, ինչպես ձեր դպրոցի մտավոր քարտեզը:',
      },
      {
        id: 'q6_12',
        question: "Albert Bandura's Bobo doll experiment demonstrated importance of:",
        questionKa: "ალბერტ ბანდურას 'ბობო თოჯინის' ექსპერიმენტმა აჩვენა რა ფენომენის მნიშვნელობა?",
        questionRu: 'Эксперимент Альберта Бандуры с куклой Бобо продемонстрировал важность:',
        questionHy: 'Ալբերտ Բանդուրայի Բոբո տիկնիկի փորձը ցույց տվեց կարևորությունը.',
        options: [
          'Classical conditioning',
          'Strict behaviorism',
          'Observational learning',
          'Biological preparedness',
        ],
        optionsKa: [
          'კლასიკური განპირობებულობის',
          'მკაცრი ბიჰევიორიზმის',
          'დაკვირვებით სწავლის',
          'ბიოლოგიური მზაობის',
        ],
        optionsRu: [
          'Классического обусловливания',
          'Строгого бихевиоризма',
          'Научения через наблюдение',
          'Биологической готовности',
        ],
        optionsHy: [
          'Դասական պայմանավորվածության',
          'Խիստ բիհեվիորիզմի',
          'Դիտողական ուսուցման',
          'Կենսաբանական պատրաստվածության',
        ],
        correctIndex: 2,
        explanation:
          'Bandura showed that children can learn aggressive behaviors simply by watching adults.',
        explanationKa:
          'ბანდურამ აჩვენა, რომ ბავშვებს შეუძლიათ ისწავლონ აგრესიული ქცევა მხოლოდ უფროსებზე დაკვირვებით.',
        explanationRu:
          'Бандура показал, что дети могут перенимать агрессивное поведение просто наблюдая за взрослыми.',
        explanationHy:
          'Բանդուրան ցույց է տվել, որ երեխաները կարող են սովորել ագրեսիվ վարքագիծ պարզապես մեծահասակներին նայելով:',
      },
      {
        id: 'q6_13',
        question:
          'The neurons that fire both when performing an action and when observing someone else perform it are:',
        questionKa:
          'ნეირონები, რომლებიც აქტიურდებიან როგორც მოქმედების შესრულებისას, ისე სხვისი მოქმედების დაკვირვებისას არის:',
        questionRu:
          'Нейроны, которые срабатывают как при выполнении действия, так и при наблюдении за его выполнением другим, это:',
        questionHy:
          'Նեյրոնները, որոնք կրակում են և՛ գործողություն կատարելիս, և՛ երբ նայում են դրա կատարմանը, դրանք կոչվում են.',
        options: ['Mirror neurons', 'Sensory neurons', 'Motor neurons', 'Interneurons'],
        optionsKa: [
          'სარკისებრი ნეირონები',
          'სენსორული ნეირონები',
          'მოტორული ნეირონები',
          'ინტერნეირონები',
        ],
        optionsRu: [
          'Зеркальные нейроны',
          'Сенсорные нейроны',
          'Двигательные нейроны',
          'Интернейроны',
        ],
        optionsHy: [
          'Հայելային նեյրոններ',
          'Զգայական նեյրոններ',
          'Շարժիչ նեյրոններ',
          'Ինտերնեյրոններ (միջնորդ նեյրոններ)',
        ],
        correctIndex: 0,
        explanation:
          'Mirror neurons are believed to be the neural basis for observational learning and empathy.',
        explanationKa:
          'მიჩნეულია, რომ სარკისებრი ნეირონები წარმოადგენენ დაკვირვებით სწავლისა და ემპათიის ნერვულ საფუძველს.',
        explanationRu:
          'Считается, что зеркальные нейроны являются нейронной основой обучения через наблюдение и эмпатии.',
        explanationHy:
          'Ենթադրվում է, որ հայելային նեյրոնները դիտողական ուսուցման և կարեկցանքի նյարդային հիմքն են:',
      },
      {
        id: 'q6_14',
        question: 'Prosocial behavior refers to:',
        questionKa: 'პროსოციალური ქცევა ეხება:',
        questionRu: 'Просоциальное поведение относится к:',
        questionHy: 'Հասարակամետ (պրոսոցիալական) վարքագիծը վերաբերում է.',
        options: [
          'Violent and aggressive actions',
          'Positive, constructive, helpful behavior',
          'Behaviors intended to rebel against authority',
          'Working only for a reward',
        ],
        optionsKa: [
          'ძალადობრივ და აგრესიულ ქმედებებს',
          'პოზიტიურ, კონსტრუქციულ, დამხმარე ქცევას',
          'ავტორიტეტის წინააღმდეგ მიმართულ ქცევებს',
          'მხოლოდ ჯილდოსთვის მუშაობას',
        ],
        optionsRu: [
          'Насильственным и агрессивным действиям',
          'Позитивному, конструктивному, полезному поведению',
          'Поведению, направленному против авторитетов',
          'Работе только ради награды',
        ],
        optionsHy: [
          'Բռնի և ագրեսիվ գործողություններին',
          'Դրական, կառուցողական, օգտակար վարքագծին',
          'Իշխանության դեմ ընդվզելուն ուղղված վարքագծին',
          'Միայն պարգևի համար աշխատելուն',
        ],
        correctIndex: 1,
        explanation:
          'Prosocial behavior is the opposite of antisocial behavior; it is positive and helpful.',
        explanationKa: 'პროსოციალური ქცევა ანტისოციალურის საპირისპიროა; ის პოზიტიური და დამხმარეა.',
        explanationRu:
          'Просоциальное поведение является противоположностью антисоциального; оно позитивно и полезно.',
        explanationHy:
          'Հասարակամետ (Prosocial) վարքագիծը հակասոցիալական վարքագծի հակառակն է. այն դրական է և օգտակար:',
      },
      {
        id: 'q6_15',
        question: "John Garcia's concept of 'biological preparedness' suggests that:",
        questionKa: "ჯონ გარსიას კონცეფცია 'ბიოლოგიური მზაობის' შესახებ ვარაუდობს, რომ:",
        questionRu: "Концепция 'биологической готовности' Джона Гарсии предполагает, что:",
        questionHy: 'Ջոն Գարսիայի «կենսաբանական պատրաստվածության» հայեցակարգը ենթադրում է, որ.',
        options: [
          'Animals learn equally well regardless of the stimulus',
          'Some associations are learned faster because they promote survival',
          'Only humans can learn through observation',
          'Biologically, learning completely stops at adulthood',
        ],
        optionsKa: [
          'ცხოველები ერთნაირად კარგად სწავლობენ სტიმულის მიუხედავად',
          'ზოგიერთი ასოციაცია უფრო სწრაფად ისწავლება, რადგან ხელს უწყობს გადარჩენას',
          'მხოლოდ ადამიანებს შეუძლიათ სწავლა დაკვირვებით',
          'ბიოლოგიურად, სწავლა ზრდასრულობისას მთლიანად ჩერდება',
        ],
        optionsRu: [
          'Животные учатся одинаково хорошо независимо от стимула',
          'Некоторые ассоциации усваиваются быстрее, потому что они способствуют выживанию',
          'Только люди могут учиться через наблюдение',
          'Биологически обучение полностью прекращается в зрелости',
        ],
        optionsHy: [
          'Կենդանիները հավասարապես լավ են սովորում՝ անկախ խթանից',
          'Որոշ ասոցիացիաներ ավելի արագ են ծանոթանում, քանի որ նպաստում են գոյատևմանը',
          'Միայն մարդիկ կարող են սովորել դիտարկման միջոցով',
          'Կենսաբանորեն ուսուցումն ամբողջությամբ դադարում է հասուն տարիքում',
        ],
        correctIndex: 1,
        explanation:
          'Organisms are biologically predisposed to learn associations that help them survive (like taste aversions to poisonous food).',
        explanationKa:
          'ორგანიზმები ბიოლოგიურად განწყობილი არიან ისწავლონ ის ასოციაციები, რომლებიც გადარჩენაში ეხმარება (მაგ., შხამიანი საკვების მიმართ გემოს ავერსია).',
        explanationRu:
          'Организмы биологически предрасположены к усвоению ассоциаций, помогающих им выжить (например, отвращение к ядовитой пище).',
        explanationHy:
          'Օրգանիզմները կենսաբանորեն հակված են սովորելու ասոցիացիաներ, որոնք օգնում են իրենց գոյատևել (օրինակ՝ թունավոր սննդի նկատմամբ համի զզվանք):',
      },
    ],
  },
  {
    id: 'q7',
    chapterId: 7,
    title: 'Memory',
    titleKa: 'მეხსიერება',
    titleRu: 'Память',
    titleHy: 'Հիշողություն',
    questions: [
      {
        id: 'q7_1',
        question: 'What are the three processes of memory?',
        questionKa: 'რა არის მეხსიერების სამი პროცესი?',
        questionRu: 'Каковы три процесса памяти?',
        questionHy: 'Որո՞նք են հիշողության երեք գործընթացները:',
        options: [
          'Sensing, perceiving, categorizing',
          'Encoding, storage, retrieval',
          'Chunking, rehearsing, forgetting',
          'Receiving, processing, expressing',
        ],
        optionsKa: [
          'შეგრძნება, აღქმა, კატეგორიზაცია',
          'კოდირება, შენახვა, აღდგენა (გახსენება)',
          'დაჯგუფება, გამეორება, დავიწყება',
          'მიღება, დამუშავება, გამოხატვა',
        ],
        optionsRu: [
          'Ощущение, восприятие, категоризация',
          'Кодирование, хранение, извлечение',
          'Чанкинг, повторение, забывание',
          'Получение, обработка, выражение',
        ],
        optionsHy: [
          'Զգայություն, ընկալում, դասակարգում',
          'Կոդավորում, պահպանում, առբերում',
          'Խմբավորում, կրկնություն, մոռացում',
          'Ստացում, մշակում, արտահայտում',
        ],
        correctIndex: 1,
        explanation:
          'Memory involves encoding (getting info in), storage (retaining it), and retrieval (getting it back out).',
        explanationKa:
          'მეხსიერება მოიცავს კოდირებას (ინფორმაციის მიღება), შენახვას (მისი შენარჩუნება) და აღდგენას (უკან ამოღება).',
        explanationRu:
          'Память включает кодирование (ввод информации), хранение (ее удержание) и извлечение (извлечение ее обратно).',
        explanationHy:
          'Հիշողությունը ներառում է կոդավորում (տեղեկատվության ներմուծում), պահպանում (պահելը) և առբերում (այն հետ ստանալը):',
      },
      {
        id: 'q7_2',
        question: 'What is the capacity of short-term memory according to George Miller?',
        questionKa: 'როგორია ხანმოკლე მეხსიერების მოცულობა ჯორჯ მილერის მიხედვით?',
        questionRu: 'Какова емкость кратковременной памяти по Джорджу Миллеру?',
        questionHy: 'Ինչպիսի՞ն է կարճաժամկետ հիշողության կարողությունը ըստ Ջորջ Միլլերի:',
        options: ['Unlimited', 'About 3 items', 'Usually 7 ± 2 items', 'Exactly 10 items'],
        optionsKa: [
          'შეუზღუდავი',
          'დაახლოებით 3 ელემენტი',
          'ჩვეულებრივ 7 ± 2 ელემენტი',
          'ზუსტად 10 ელემენტი',
        ],
        optionsRu: [
          'Неограниченная',
          'Около 3 элементов',
          'Обычно 7 ± 2 элементов',
          'Ровно 10 элементов',
        ],
        optionsHy: ['Անսահմանափակ', 'Մոտ 3 տարր', 'Սովորաբար 7 ± 2 տարր', 'Տաս տարր ճշգրիտ'],
        correctIndex: 2,
        explanation:
          "Miller proposed the 'Magical Number 7, plus or minus 2' for short-term memory capacity.",
        explanationKa:
          "მილერის მიხედვით, ხანმოკლე მეხსიერების მოცულობა არის 'მაგიური რიცხვი 7, პლუს ან მინუს 2'.",
        explanationRu:
          'Миллер предложил «Магическое число 7, плюс-минус 2» для объема кратковременной памяти.',
        explanationHy:
          'Միլլերը առաջարկեց «Կախարդական թիվ 7, պլյուս կամ մինուս 2» կարճաժամկետ հիշողության կարողության համար:',
      },
      {
        id: 'q7_3',
        question: 'Which of these is an example of an implicit (non-declarative) memory?',
        questionKa: 'რომელია იმპლიციტური (არადეკლარატიული) მეხსიერების მაგალითი?',
        questionRu: 'Что из этого является примером имплицитной (недекларативной) памяти?',
        questionHy: 'Այսերից ո՞րն է իմպլիցիտ (ոչ դեկլարատիվ) հիշողության օրինակ:',
        options: [
          'Knowing the capital of France',
          'Remembering your 10th birthday',
          'Knowing how to ride a bicycle',
          'Recalling a grocery list',
        ],
        optionsKa: [
          'საფრანგეთის დედაქალაქის ცოდნა',
          'მე-10 დაბადების დღის გახსენება',
          'ველოსიპედის ტარების ცოდნა',
          'სავაჭრო სიის გახსენება',
        ],
        optionsRu: [
          'Знание столицы Франции',
          'Воспоминание о своем 10-м дне рождения',
          'Умение ездить на велосипеде',
          'Вспоминание списка покупок',
        ],
        optionsHy: [
          'Ֆրանսիայի մայրաքաղաքի իմացությունը',
          'Քո 10-րդ ծննդյան օրը հիշելը',
          'Հեծանիվ վարել իմանալը',
          'Մթերային ցուցակը հիշելը',
        ],
        correctIndex: 2,
        explanation:
          'Implicit memories include procedural memory for automatic skills like riding a bike.',
        explanationKa:
          'იმპლიციტური მეხსიერება მოიცავს პროცედურულ მეხსიერებას ავტომატური უნარებისთვის, როგორიცაა ველოსიპედის ტარება.',
        explanationRu:
          'Имплицитная память включает процедурную память для автоматических навыков, таких как езда на велосипеде.',
        explanationHy:
          'Իմպլիցիտ հիշողությունները ներառում են ընթացակարգային հիշողություն ավտոմատ հմտությունների համար, ինչպիսիք են հեծանիվ վարելը:',
      },
      {
        id: 'q7_4',
        question: 'Conscious, explicit memories of facts and general knowledge are known as:',
        questionKa: 'ფაქტებისა და ზოგადი ცოდნის გაცნობიერებულ, ექსპლიციტურ მეხსიერებას ეწოდება:',
        questionRu: 'Осознанные, эксплицитные воспоминания о фактах и общих знаниях известны как:',
        questionHy:
          'Փաստերի և ընդհանուր գիտելիքների գիտակցված, բացահայտ հիշողությունները հայտնի են որպես.',
        options: ['Episodic memory', 'Semantic memory', 'Procedural memory', 'Flashbulb memory'],
        optionsKa: [
          'ეპიზოდური მეხსიერება',
          'სემანტიკური მეხსიერება',
          'პროცედურული მეხსიერება',
          'ფლეშბულბური (ელვარე) მეხსიერება',
        ],
        optionsRu: [
          'Эпизодическая память',
          'Семантическая память',
          'Процедурная память',
          'Вспышки памяти',
        ],
        optionsHy: [
          'Էպիզոդիկ հիշողություն',
          'Սեմանտիկ հիշողություն',
          'Ընթացակարգային հիշողություն',
          'Ֆլեշ (Flashbulb) հիշողություն',
        ],
        correctIndex: 1,
        explanation:
          'Semantic memory stores basic facts and general knowledge, like a mental encyclopedia.',
        explanationKa: 'სემანტიკური მეხსიერება ინახავს საბაზისო ფაქტებს და ზოგად ცოდნას.',
        explanationRu:
          'Семантическая память хранит основные факты и общие знания, как ментальная энциклопедия.',
        explanationHy:
          'Սեմանտիկ հիշողությունը պահպանում է հիմնական փաստերը և ընդհանուր գիտելիքները, որպես մտավոր հանրագիտարան:',
      },
      {
        id: 'q7_5',
        question:
          'Which brain structure is crucial for transferring explicit memories from short-term to long-term storage?',
        questionKa:
          'ტვინის რომელი სტრუქტურაა კრიტიკული ექსპლიციტური მეხსიერების ხანმოკლედან ხანგრძლივ საცავში გადასატანად?',
        questionRu:
          'Какая структура мозга имеет решающее значение для переноса эксплицитных воспоминаний из кратковременного в долговременное хранилище?',
        questionHy:
          'Ուղեղի ո՞ր կառուցվածքն է շատ կարևոր էքսպլիցիտ հիշողությունները կարճաժամկետից երկարաժամկետ պահեստ տեղափոխելու համար:',
        options: ['Amygdala', 'Hypothalamus', 'Hippocampus', 'Cerebellum'],
        optionsKa: [
          'ამიგდალა (ნუშისებრი სხეული)',
          'ჰიპოთალამუსი',
          'ჰიპოკამპი',
          'ნათხემი (Cerebellum)',
        ],
        optionsRu: ['Миндалина', 'Гипоталамус', 'Гиппокамп', 'Мозжечок'],
        optionsHy: ['Ամիգդալա', 'Հիպոթալամուս', 'Հիպոկամպ', 'Ուղեղիկ'],
        correctIndex: 2,
        explanation:
          'The hippocampus acts as a loading dock that temporarily holds explicit memories before moving them elsewhere for consolidation.',
        explanationKa:
          'ჰიპოკამპი დროებით ინახავს ექსპლიციტურ მოგონებებს, სანამ დანარჩენ ტვინში გადაიტანს მათ ხანგრძლივი შენახვისთვის.',
        explanationRu:
          'Гиппокамп временно удерживает эксплицитные воспоминания перед их перемещением в другие области для консолидации.',
        explanationHy:
          'Հիպոկամպը գործում է որպես բեռնման կետ, որը ժամանակավորապես պահպանում է բացահայտ հիշողությունները՝ նախքան դրանք այլ տեղ տեղափոխելը համախմբման համար:',
      },
      {
        id: 'q7_6',
        question: 'Organizing items into familiar, manageable units to aid memory is called:',
        questionKa:
          'ელემენტების ნაცნობ, მარტივად სამართავ ერთეულებად ორგანიზებას მეხსიერების დასახმარებლად ეწოდება:',
        questionRu:
          'Организация элементов в знакомые, управляемые единицы для улучшения памяти называется:',
        questionHy:
          'Հիշողությանն օգնելու համար իրերը ծանոթ, կառավարելի միավորների կազմակերպումը կոչվում է.',
        options: ['Priming', 'Chunking', 'Spaced practice', 'Interference'],
        optionsKa: ['პრაიმინგი', 'ჩანქინგი (დაჯგუფება)', 'განაწილებული პრაქტიკა', 'ინტერფერენცია'],
        optionsRu: [
          'Прайминг',
          'Чанкинг (Группировка)',
          'Распределенная практика',
          'Интерференция',
        ],
        optionsHy: ['Փրայմինգ', 'Խմբավորում', 'Տարածական պրակտիկա', 'Միջամտություն'],
        correctIndex: 1,
        explanation:
          'Chunking groups info (like remembering a phone number in sections: 555-867-5309).',
        explanationKa:
          'ჩანქინგი აჯგუფებს ინფორმაციას, მაგალითად, ტელეფონის ნომრის სექციებად დამახსოვრება.',
        explanationRu:
          'Чанкинг группирует информацию (например, запоминание номера телефона частями).',
        explanationHy:
          'Խմբավորում է տեղեկատվությունը (ինչպես հեռախոսահամարը բաժիններով հիշելը՝ 555-867-5309):',
      },
      {
        id: 'q7_7',
        question: 'Taking a test in the same room where you studied can boost scores because of:',
        questionKa:
          'გამოცდის იმავე ოთახში დაწერამ, სადაც სწავლობდით, შეიძლება გაზარდოს შედეგები, რადგან:',
        questionRu: 'Сдача экзамена в той же комнате, где вы учились, может повысить баллы из-за:',
        questionHy:
          'Այն նույն սենյակում, որտեղ սովորել եք, թեստ հանձնելը կարող է բարձրացնել գնահատականները՝ վկայակոչելով.',
        options: [
          'State-dependent memory',
          'Context-dependent memory',
          'Serial position effect',
          'Retroactive interference',
        ],
        optionsKa: [
          'მდგომარეობაზე დამოკიდებული მეხსიერება',
          'კონტექსტზე დამოკიდებული მეხსიერება',
          'სერიული პოზიციის ეფექტი',
          'რეტროაქტიული ინტერფერენცია',
        ],
        optionsRu: [
          'Состояние-зависимая память',
          'Контекстно-зависимая память',
          'Эффект края',
          'Ретроактивная интерференция',
        ],
        optionsHy: [
          'Վիճակից կախված հիշողություն',
          'Համատեքստից կախված հիշողություն',
          'Սերիական դիրքի էֆեկտ',
          'Ռետրոակտիվ միջամտություն',
        ],
        correctIndex: 1,
        explanation:
          'Being in the same physical context provides retrieval cues that help you remember.',
        explanationKa:
          'იმავე ფიზიკურ კონტექსტში ყოფნა უზრუნველყოფს აღდგენის მინიშნებებს, რაც გეხმარებათ გახსენებაში.',
        explanationRu:
          'Нахождение в том же физическом контексте предоставляет подсказки для извлечения информации.',
        explanationHy:
          'Նույն ֆիզիկական համատեքստում գտնվելը ապահովում է որոնման հուշումներ, որոնք օգնում են ձեզ հիշել:',
      },
      {
        id: 'q7_8',
        question: 'The tendency to best recall the first and last items in a list is the:',
        questionKa: 'სიაში პირველი და ბოლო ელემენტების საუკეთესოდ გახსენების ტენდენცია არის:',
        questionRu: 'Тенденция лучше всего вспоминать первые и последние элементы в списке — это:',
        questionHy: 'Ցուցակի առաջին և վերջին տարրերը լավագույնս հիշելու միտումը դա է.',
        options: [
          'Spacing effect',
          'Testing effect',
          'Serial position effect',
          'Misinformation effect',
        ],
        optionsKa: [
          'განაწილების ეფექტი',
          'ტესტირების ეფექტი',
          'სერიული პოზიციის ეფექტი',
          'დეზინფორმაციის ეფექტი',
        ],
        optionsRu: [
          'Эффект распределения',
          'Эффект тестирования',
          'Эффект края (серийной позиции)',
          'Эффект дезинформации',
        ],
        optionsHy: [
          'Տարածության էֆեկտ',
          'Թեստավորման էֆեկտ',
          'Սերիական դիրքի էֆեկտ',
          'Ապատեղեկատվության ազդեցություն',
        ],
        correctIndex: 2,
        explanation:
          'The serial position effect includes the primacy effect (remembering the beginning) and recency effect (remembering the end).',
        explanationKa:
          'სერიული პოზიციის ეფექტი მოიცავს დასაწყისისა და დასასრულის საუკეთესოდ დამახსოვრებას (primacy and recency effects).',
        explanationRu:
          'Эффект края включает эффект первичности (запоминание начала) и эффект недавности (запоминание конца).',
        explanationHy:
          'Սերիական դիրքի էֆեկտը ներառում է առաջնահերթության էֆեկտը (հիշել սկիզբը) և վերջին էֆեկտը (հիշելով վերջը):',
      },
      {
        id: 'q7_9',
        question: 'What is proactive interference?',
        questionKa: 'რა არის პროაქტიული ინტერფერენცია?',
        questionRu: 'Что такое проактивная интерференция?',
        questionHy: 'Ի՞նչ է պրոակտիվ միջամտությունը:',
        options: [
          'When old information disrupts the recall of new information',
          'When new information disrupts the recall of old information',
          'Failing to encode information correctly',
          'Repressing traumatic memories',
        ],
        optionsKa: [
          'როდესაც ძველი ინფორმაცია ხელს უშლის ახლის გახსენებას',
          'როდესაც ახალი ინფორმაცია ხელს უშლის ძველის გახსენებას',
          'ინფორმაციის არასწორი კოდირება',
          'ტრავმული მოგონებების რეპრესია',
        ],
        optionsRu: [
          'Когда старая информация мешает вспомнить новую',
          'Когда новая информация мешает вспомнить старую',
          'Неправильное кодирование информации',
          'Подавление травматических воспоминаний',
        ],
        optionsHy: [
          'Երբ հին տեղեկատվությունը խաթարում է նոր տեղեկատվության առբերումը',
          'Երբ նոր տեղեկատվությունը խաթարում է հին տեղեկատվության առբերումը',
          'Տեղեկատվությունը ճիշտ չկոդավորելը',
          'Տրավմատիկ հիշողությունների ճնշում',
        ],
        correctIndex: 0,
        explanation:
          "Proactive interference acts 'forward' in time: older memories interfere with learning new ones.",
        explanationKa:
          "პროაქტიული ინტერფერენცია მოქმედებს 'წინ' დროში: ძველი მოგონებები ხელს უშლის ახლის სწავლას/გახსენებას.",
        explanationRu:
          'Проактивная интерференция действует «вперед» во времени: старые воспоминания мешают новым.',
        explanationHy:
          'Պրոակտիվ միջամտությունը գործում է «առաջ» ժամանակի ընթացքում. հին հիշողությունները խանգարում են նորը սովորելուն:',
      },
      {
        id: 'q7_10',
        question:
          'HM was a patient who had his hippocampus removed. After surgery, he suffered from:',
        questionKa:
          'H.M.-ი იყო პაციენტი, რომელსაც ამოკვეთეს ჰიპოკამპი. ოპერაციის შემდეგ მას აწუხებდა:',
        questionRu: 'Г.М. был пациентом, которому удалили гиппокамп. После операции он страдал от:',
        questionHy: 'HM-ը հիվանդ էր, ում հիպոկամպը հանվել էր: Վիրահատությունից հետո նա տառապում է.',
        options: [
          'Retrograde amnesia',
          'Anterograde amnesia',
          'Infantile amnesia',
          'Source amnesia',
        ],
        optionsKa: [
          'რეტროგრადული ამნეზია',
          'ანტეროგრადული ამნეზია',
          'ინფანტილური ამნეზია',
          'წყაროს ამნეზია',
        ],
        optionsRu: [
          'Ретроградной амнезии',
          'Антероградной амнезии',
          'Инфантильной амнезии',
          'Амнезии источника',
        ],
        optionsHy: [
          'Ռետրոգրադ ամնեզիայից',
          'Անտերոգրադ ամնեզիայից',
          'Մանկական ամնեզիայից',
          'Աղբյուրի ամնեզիայից',
        ],
        correctIndex: 1,
        explanation:
          'Anterograde amnesia is the inability to form new explicit memories after a brain injury.',
        explanationKa:
          'ანტეროგრადული ამნეზია არის ტვინის დაზიანების შემდეგ ახალი ექსპლიციტური მოგონებების შექმნის შეუძლებლობა.',
        explanationRu:
          'Антероградная амнезия — это неспособность формировать новые явные воспоминания после травмы мозга.',
        explanationHy:
          'Անտերոգրադ ամնեզիան ուղեղի վնասվածքից հետո նոր բացահայտ հիշողություններ ձևավորելու անկարողությունն է:',
      },
      {
        id: 'q7_11',
        question: "Elizabeth Loftus' research on the misinformation effect shows that:",
        questionKa: 'ელიზაბეტ ლოფტუსის კვლევამ დეზინფორმაციის ეფექტის შესახებ აჩვენა, რომ:',
        questionRu: 'Исследование Элизабет Лофтус эффекта дезинформации показывает, что:',
        questionHy:
          'Էլիզաբեթ Լոֆտուսի ապատեղեկատվության ազդեցության վերաբերյալ հետազոտությունը ցույց է տալիս, որ.',
        options: [
          'Memories are recorded exactly like videos',
          "Misleading information can be incorporated into a person's memory of an event",
          'Eyewitness testimonies are practically flawless',
          'Children cannot form false memories',
        ],
        optionsKa: [
          'მოგონებები ზუსტად ისე იწერება, როგორც ვიდეოები',
          'შეცდომაში შემყვანი ინფორმაცია შეიძლება ჩაერთოს ადამიანის მეხსიერებაში(მოვლენის გახსენებისას)',
          'თვითმხილველთა ჩვენებები პრაქტიკულად უშეცდომოა',
          'ბავშვებს არ შეუძლიათ ცრუ მოგონებების შექმნა',
        ],
        optionsRu: [
          'Воспоминания записываются точно так же, как видео',
          'Вводящая в заблуждение информация может быть включена в воспоминания',
          'Показания очевидцев практически безупречны',
          'Дети не могут формировать ложные воспоминания',
        ],
        optionsHy: [
          'Հիշողությունները գրանցվում են ճիշտ տեսանյութերի պես',
          'Ապակողմնորոշիչ տեղեկատվությունը կարող է ներառվել իրադարձության մասին մարդու հիշողության մեջ',
          'Ականատեսների վկայությունները գործնականում անթերի են',
          'Երեխաները չեն կարող կեղծ հիշողություններ ձևավորել',
        ],
        correctIndex: 1,
        explanation:
          'Suggestive questions can lead to false memories by altering how the event was actually perceived.',
        explanationKa:
          'შთამაგონებელმა კითხვებმა შეიძლება გამოიწვიოს ცრუ მოგონებები იმ მოვლენის შეცვლით, თუ როგორ იქნა იგი თავდაპირველად აღქმული.',
        explanationRu:
          'Наводящие вопросы могут привести к ложным воспоминаниям, изменяя то, как событие воспринималось.',
        explanationHy:
          'Առաջարկվող հարցերը կարող են հանգեցնել կեղծ հիշողությունների՝ փոխելով իրադարձության իրական ընկալումը:',
      },
      {
        id: 'q7_12',
        question: 'A clear memory of an emotionally significant moment or event is a:',
        questionKa: 'ემოციურად მნიშვნელოვანი მომენტის ან მოვლენის ნათელი მოგონება არის:',
        questionRu: 'Ясное воспоминание об эмоционально значимом моменте или событии — это:',
        questionHy: 'Էմոցիոնալ նշանակալից պահի կամ իրադարձության հստակ հիշողությունն է.',
        options: ['Procedural memory', 'Flashbulb memory', 'Implicit memory', 'Sensory memory'],
        optionsKa: [
          'პროცედურული მეხსიერება',
          'ფლეშბულბური (ელვარე) მეხსიერება',
          'იმპლიციტური მეხსიერება',
          'სენსორული მეხსიერება',
        ],
        optionsRu: [
          'Процедурная память',
          'Вспышка памяти',
          'Имплицитная память',
          'Сенсорная память',
        ],
        optionsHy: [
          'Ընթացակարգային հիշողություն',
          'Ֆլեշ(Flashbulb) տարածության հիշողություն',
          'Իմպլիցիտ հիշողություն',
          'Զգայական հիշողություն',
        ],
        correctIndex: 1,
        explanation:
          'Flashbulb memories are vivid, lasting memories of surprising and highly emotional events.',
        explanationKa:
          'ფლეშბულბური მოგონებები არის გასაოცარი და ემოციური მოვლენების ნათელი, ხანგრძლივი მოგონებები.',
        explanationRu:
          'Вспышки памяти — это яркие, стойкие воспоминания об удивительных и эмоциональных событиях.',
        explanationHy:
          'Ֆլեշ տարածության հիշողությունները զարմանալի և խիստ զգացմունքային իրադարձությունների վառ, երկարատև հիշողություններ են:',
      },
      {
        id: 'q7_13',
        question: 'Which of these is NOT a function of the cerebellum in memory?',
        questionKa: 'ჩამოთვლილთაგან რომელი არ არის ნათხემის (cerebellum) ფუნქცია მეხსიერებაში?',
        questionRu: 'Что из этого НЕ является функцией мозжечка в памяти?',
        questionHy: 'Հետևյալներից ո՞րը ուղեղիկի (cerebellum) գործառույթ ՉԷ հիշողության մեջ:',
        options: [
          'Processing explicit, conscious, factual memories',
          'Forming implicit memories',
          'Forming classically conditioned responses',
          'Procedural memory processes',
        ],
        optionsKa: [
          'ექსპლიციტური, გაცნობიერებული, ფაქტობრივი მოგონებების დამუშავება',
          'იმპლიციტური მოგონებების ფორმირება',
          'კლასიკურად განპირობებული რეაქციების ფორმირება',
          'პროცედურული მეხსიერების პროცესები',
        ],
        optionsRu: [
          'Обработка эксплицитных, сознательных, фактических воспоминаний',
          'Формирование имплицитных воспоминаний',
          'Формирование классически обусловленных реакций',
          'Процессы процедурной памяти',
        ],
        optionsHy: [
          'Բացահայտ, գիտակցված, փաստացի հիշողությունների մշակում',
          'Իմպլիցիտ հիշողությունների ձևավորում',
          'Դասական պայմանավորված արձագանքների ձևավորում',
          'Ընթացակարգային հիշողության գործընթացներ',
        ],
        correctIndex: 0,
        explanation:
          'Explicit, conscious facts are processed by the hippocampus and frontal lobes, not the cerebellum.',
        explanationKa:
          'ექსპლიციტური მოგონებები მუშავდება ჰიპოკამპისა და შუბლის წილების მიერ, და არა ნათხემის მიერ.',
        explanationRu:
          'Эксплицитные сознательные факты обрабатываются гиппокампом и лобными долями, а не мозжечком.',
        explanationHy:
          'Բացահայտ, գիտակցված փաստերը մշակվում են հիպոկամպի և ճակատային բլթերի միջոցով, այլ ոչ թե ուղեղիկի(cerebellum):',
      },
      {
        id: 'q7_14',
        question: 'The spacing effect implies that learning is most effective when:',
        questionKa: 'განაწილების ეფექტი გულისხმობს, რომ სწავლა ყველაზე ეფექტურია მაშინ, როდესაც:',
        questionRu: 'Эффект распределения подразумевает, что обучение наиболее эффективно, когда:',
        questionHy: 'Տարածության էֆեկտը ենթադրում է, որ ուսուցումն առավել արդյունավետ է, երբ.',
        options: [
          'You cram the night before a test',
          'Study sessions are spread out over time',
          'You study just one subject all day',
          'You listen to lectures while sleeping',
        ],
        optionsKa: [
          'გამოცდის წინა ღამეს იზეპირებთ მასალას',
          'სასწავლო სესიები დროში არის განაწილებული',
          'მთელი დღე მხოლოდ ერთ საგანს სწავლობთ',
          'ლექციებს ძილის დროს უსმენთ',
        ],
        optionsRu: [
          'Вы зубрите в ночь перед экзаменом',
          'Учебные занятия распределены по времени',
          'Вы изучаете только один предмет весь день',
          'Вы слушаете лекции во время сна',
        ],
        optionsHy: [
          'Դուք սերտում եք թեստից մեկ գիշեր առաջ',
          'Ուսումնական նիստերը բաշխված են ժամանակի ընթացքում',
          'Ամբողջ օրը միայն մեկ առարկա ես սովորում',
          'Դուք դասախոսություններ եք լսում քնած ժամանակ',
        ],
        correctIndex: 1,
        explanation:
          'Distributed practice (spacing your studying) leads to better long-term retention than massed practice (cramming).',
        explanationKa:
          'დროში განაწილებული პრაქტიკა იძლევა უკეთეს შედეგს ხანგრძლივად დამახსოვრებისთვის, ვიდრე მასიური პრაქტიკა (დაზეპირება).',
        explanationRu:
          'Распределенная практика приводит к лучшему долговременному запоминанию, чем массированная практика (зубрежка).',
        explanationHy:
          'Բաշխված պրակտիկան (ուսումնառության բաշխումը) հանգեցնում է ավելի լավ երկարաժամկետ պահպանման, քան զանգվածային պրակտիկան:',
      },
      {
        id: 'q7_15',
        question: 'What is proactive interference conceptually opposite to?',
        questionKa: 'რისი კონცეპტუალური საპირისპიროა პროაქტიული ინტერფერენცია?',
        questionRu: 'Концептуальной противоположностью чему является проактивная интерференция?',
        questionHy: 'Ինչի՞ն է հայեցակարգորեն հակառակ պրոակտիվ միջամտությունը:',
        options: [
          'Proactive learning',
          'Retroactive interference',
          'Retrograde amnesia',
          'Source amnesia',
        ],
        optionsKa: [
          'პროაქტიული სწავლის',
          'რეტროაქტიული ინტერფერენციის',
          'რეტროგრადული ამნეზიის',
          'წყაროს ამნეზიის',
        ],
        optionsRu: [
          'Проактивного обучения',
          'Ретроактивной интерференции',
          'Ретроградной амнезии',
          'Амнезии источника',
        ],
        optionsHy: [
          'Պրոակտիվ ուսուցում',
          'Ռետրոակտիվ միջամտություն',
          'Ռետրոգրադ ամնեզիա',
          'Աղբյուրի ամնեզիա',
        ],
        correctIndex: 1,
        explanation:
          'Proactive interference is old info disrupting new; retroactive interference is new info disrupting old.',
        explanationKa:
          'პროაქტიული ინტერფერენცია არის ძველი ინფორმაციის მიერ ახლის ხელშეშლა; რეტროაქტიული კი - ახლის მიერ ძველის ხელშეშლა.',
        explanationRu:
          'Проактивная интерференция — это когда старая информация мешает новой; ретроактивная — когда новая мешает старой.',
        explanationHy:
          'Պրոակտիվ միջամտությունը հին տեղեկատվության խանգարումն է նորին. ռետրոակտիվ միջամտությունը նոր տեղեկատվությունն է, որը խաթարում է հինը:',
      },
    ],
  },
  {
    id: 'q8',
    chapterId: 8,
    title: 'Cognition and Intelligence',
    titleKa: 'შემეცნება და ინტელექტი',
    titleRu: 'Познание и интеллект',
    titleHy: 'Ճանաչում և բանականություն',
    questions: [
      {
        id: 'q8_1',
        question: 'What is a step-by-step procedure that guarantees a solution to a problem?',
        questionKa: 'რა არის ეტაპობრივი პროცედურა, რომელიც იძლევა პრობლემის გადაჭრის გარანტიას?',
        questionRu: 'Что такое пошаговая процедура, гарантирующая решение проблемы?',
        questionHy: 'Ի՞նչ է քայլ առ քայլ ընթացակարգը, որը երաշխավորում է խնդրի լուծումը:',
        options: ['Heuristic', 'Algorithm', 'Insight', 'Confirmation bias'],
        optionsKa: ['ჰევრისტიკა', 'ალგორითმი', 'ინსაიტი', 'დადასტურების მიკერძოება'],
        optionsRu: ['Эвристика', 'Алгоритм', 'Инсайт', 'Предвзятость подтверждения'],
        optionsHy: ['Հեվրիստիկա', 'Ալգորիթմ', 'Ինսայթ', 'Հաստատման կողմնակալություն'],
        correctIndex: 1,
        explanation:
          'Algorithms are exhaustive, step-by-step rules that guarantee a correct answer.',
        explanationKa:
          'ალგორითმები არის ამომწურავი, ეტაპობრივი წესები, რომლებიც სწორი პასუხის გარანტიას იძლევა.',
        explanationRu:
          'Алгоритмы — это исчерпывающие, пошаговые правила, гарантирующие правильный ответ.',
        explanationHy:
          'Ալգորիթմները սպառիչ, քայլ առ քայլ կանոններ են, որոնք երաշխավորում են ճիշտ պատասխան:',
      },
      {
        id: 'q8_2',
        question:
          'Judging the likelihood of an event based on how easily examples come to mind is the:',
        questionKa:
          'მოვლენის ალბათობის შეფასება იმის მიხედვით, თუ რამდენად მარტივად გვახსენდება მაგალითები, არის:',
        questionRu:
          'Оценка вероятности события на основе того, насколько легко приходят на ум примеры, это:',
        questionHy:
          'Իրադարձության հավանականության գնահատումը` ելնելով նրանից, թե որքան հեշտությամբ են օրինակները միտք գալիս դա.',
        options: [
          'Representativeness heuristic',
          'Belief perseverance',
          'Availability heuristic',
          'Framing effect',
        ],
        optionsKa: [
          'რეპრეზენტატულობის ჰევრისტიკა',
          'რწმენის (რწმუნებულების) შენარჩუნება',
          'ხელმისაწვდომობის ჰევრისტიკა',
          'ფრეიმინგის (ჩარჩოს) ეფექტი',
        ],
        optionsRu: [
          'Эвристика репрезентативности',
          'Упорство в убеждениях',
          'Эвристика доступности',
          'Эффект фрейминга',
        ],
        optionsHy: [
          'Ներկայացուցչական հեվրիստիկա',
          'Հավատքի հաստատակամություն',
          'Հասանելիության հեվրիստիկա',
          'Շրջանակման (ֆրեյմինգի) էֆեկտ',
        ],
        correctIndex: 2,
        explanation:
          'The availability heuristic makes us overestimate risks of rare but vivid events (like shark attacks) because they are highly memorable.',
        explanationKa:
          'ხელმისაწვდომობის ჰევრისტიკა გვაიძულებს გადავაჭარბოთ იშვიათი, მაგრამ ემოციური მოვლენების (მაგ., ზვიგენის თავდასხმის) რისკებს.',
        explanationRu:
          'Эвристика доступности заставляет нас переоценивать риски редких, но ярких событий (как нападение акул).',
        explanationHy:
          'Հասանելիության հեվրիստիկան ստիպում է մեզ գերագնահատել հազվագյուտ, բայց վառ իրադարձությունների ռիսկերը (օրինակ՝ շնաձկների հարձակումները), քանի որ դրանք հիշարժան են:',
      },
      {
        id: 'q8_3',
        question:
          'The tendency to search for information that supports our preconceptions and ignore contradictory evidence is:',
        questionKa:
          'ინფორმაციის ძიების ტენდენცია, რომელიც მხარს უჭერს ჩვენს წინასწარ შეხედულებებს და იგნორირებას უკეთებს საწინააღმდეგო მტკიცებულებებს, არის:',
        questionRu:
          'Тенденция искать информацию, подтверждающую наши предубеждения, и игнорировать противоречивые доказательства — это:',
        questionHy:
          'Տեղեկատվության որոնման միտումը, որն աջակցում է մեր նախապաշարմունքներին և անտեսում հակասական ապացույցները դա.',
        options: ['Confirmation bias', 'Overconfidence', 'Functional fixedness', 'Mental set'],
        optionsKa: [
          'დადასტურების მიკერძოება',
          'გადაჭარბებული თავდაჯერებულობა',
          'ფუნქციური ფიქსაცია',
          'გონებრივი განწყობა',
        ],
        optionsRu: [
          'Предвзятость подтверждения',
          'Самоуверенность',
          'Функциональная фиксированность',
          'Ментальная установка',
        ],
        optionsHy: [
          'Հաստատման կողմնակալություն',
          'Չափազանց ինքնավստահություն',
          'Գործառնական ֆիքսվածություն',
          'Մտավոր դիրքորոշում',
        ],
        correctIndex: 0,
        explanation:
          'Confirmation bias leads us to seek out agreeing evidence and turn a blind eye to disagreeing evidence.',
        explanationKa:
          'დადასტურების მიკერძოება გვიბიძგებს ვეძებოთ თანმხვედრი მტკიცებულება და თვალი დავხუჭოთ საწინააღმდეგოზე.',
        explanationRu:
          'Предвзятость подтверждения ведет нас к поиску согласующихся доказательств и игнорированию опровергающих.',
        explanationHy:
          'Հաստատման կողմնակալությունը ստիպում է մեզ փնտրել համաձայնեցված ապացույցներ և աչք փակել անհամաձայնության վրա:',
      },
      {
        id: 'q8_4',
        question: "Which of the following describes 'functional fixedness'?",
        questionKa: "ჩამოთვლილთაგან რომელი აღწერს 'ფუნქციურ ფიქსაციას'?",
        questionRu: "Что из следующего описывает 'функциональную фиксированность'?",
        questionHy: 'Հետևյալներից ո՞րն է նկարագրում «ֆունկցիոնալ ֆիքսվածությունը»:',
        options: [
          "A sudden realization of a problem's solution",
          "Clinging to one's beliefs after they've been discredited",
          'Thinking of things only in terms of their usual functions',
          'Reacting to how an issue is framed',
        ],
        optionsKa: [
          'პრობლემის გადაჭრის უცაბედი გააზრება',
          'საკუთარ რწმენებზე ჩაბღაუჭება მათი დისკრედიტაციის შემდეგაც',
          'ნივთებზე ფიქრი მხოლოდ მათი ჩვეული ფუნქციებით',
          'რეაგირება იმაზე, თუ როგორ არის საკითხი წარმოდგენილი (ფრეიმინგი)',
        ],
        optionsRu: [
          'Внезапное осознание решения проблемы',
          'Цепляние за свои убеждения даже после их опровержения',
          'Восприятие вещей только с точки зрения их обычных функций',
          'Реакция на то, как представлена проблема',
        ],
        optionsHy: [
          'Խնդրի լուծման հանկարծակի գիտակցում',
          'Կառչել իր համոզմունքներից դրանց վարկաբեկվելուց հետո',
          'Իրերի մասին մտածել միայն դրանց սովորական գործառույթների տեսանկյունից',
          'Արձագանքել այն բանին, թե ինչպես է ձևակերպվում խնդիրը',
        ],
        correctIndex: 2,
        explanation:
          'Functional fixedness is a cognitive bias that limits a person to using an object only in the way it is traditionally used.',
        explanationKa:
          'ფუნქციური ფიქსაცია არის კოგნიტური მიკერძოება, რომელიც ზღუდავს ობიექტის გამოყენებას მხოლოდ ტრადიციული გზით (მაგ. ვერ იაზრებ, რომ მონეტა შეიძლება სახრახნისად გამოიყენო).',
        explanationRu:
          'Функциональная фиксированность — это когнитивное искажение, при котором человек использует объект только традиционным способом.',
        explanationHy:
          'Գործառնական ֆիքսվածությունը կոգնիտիվ կողմնակալություն է, որը սահմանափակում է մարդուն օգտագործել առարկան միայն այնպես, ինչպես այն ավանդաբար օգտագործվում է:',
      },
      {
        id: 'q8_5',
        question: "What is Noam Chomsky's view on language development?",
        questionKa: 'როგორია ნოამ ჩომსკის შეხედულება ენის განვითარებაზე?',
        questionRu: 'Каков взгляд Ноама Хомского на развитие языка?',
        questionHy: 'Ո՞րն է Նոամ Չոմսկու տեսակետը լեզվի զարգացման վերաբերյալ:',
        options: [
          'Language is learned purely through operant conditioning (rewards)',
          'Children imitate their parents exclusively',
          'Humans are born with an innate Language Acquisition Device',
          'Language completely determines what we can think',
        ],
        optionsKa: [
          'ენა ისწავლება ექსკლუზიურად ოპერანტული განპირობებულობით (ჯილდოები)',
          'ბავშვები ექსკლუზიურად ბაძავენ მშობლებს',
          'ადამიანები იბადებიან ენის ათვისების თანდაყოლილი მექანიზმით',
          'ენა სრულად განსაზღვრავს რაზე შეგვიძლია ვიფიქროთ',
        ],
        optionsRu: [
          'Язык усваивается только через оперантное обусловливание (награды)',
          'Дети исключительно подражают своим родителям',
          'Люди рождаются с врожденным механизмом усвоения языка',
          'Язык полностью определяет, о чем мы можем думать',
        ],
        optionsHy: [
          'Լեզուն սովորում են զուտ օպերանտ պայմանավորվածության միջոցով (պարգևներ)',
          'Երեխաները բացառապես ընդօրինակում են իրենց ծնողներին',
          'Մարդիկ ծնվում են բնածին լեզվի յուրացման սարքով',
          'Լեզուն լիովին որոշում է այն, ինչ կարող ենք մտածել',
        ],
        correctIndex: 2,
        explanation:
          'Chomsky proposed that human brains have a built-in readiness (Language Acquisition Device) to learn grammar rules.',
        explanationKa:
          'ჩომსკიმ ივარაუდა, რომ ადამიანის ტვინს აქვს თანდაყოლილი მზაობა (Language Acquisition Device) გრამატიკის წესების შესასწავლად.',
        explanationRu:
          'Хомский предположил, что человеческий мозг обладает врожденной готовностью (механизм усвоения языка) к изучению грамматики.',
        explanationHy:
          'Չամսկին առաջարկել է, որ մարդու ուղեղն ունի ներկառուցված պատրաստվածություն (Language Acquisition Device)՝ սովորելու քերականության կանոնները:',
      },
      {
        id: 'q8_6',
        question: 'The linguistic relativity hypothesis (Sapir-Whorf) suggests that:',
        questionKa: 'ლინგვისტური ფარდობითობის ჰიპოთეზა (საპირ-ვორფი) გულისხმობს, რომ:',
        questionRu: 'Гипотеза лингвистической относительности (Сепира-Уорфа) предполагает, что:',
        questionHy: 'Լեզվական հարաբերականության վարկածը (Սապիր-Վորֆ) հուշում է, որ.',
        options: [
          'All languages share a universal grammar',
          'Language shapes how we think and perceive the world',
          'Thought comes before language in infant development',
          'Apes can learn human language flawlessly',
        ],
        optionsKa: [
          'ყველა ენას აქვს უნივერსალური გრამატიკა',
          'ენა აყალიბებს იმას, თუ როგორ ვფიქრობთ და აღვიქვამთ სამყაროს',
          'ჩვილის განვითარებაში აზროვნება წინ უსწრებს ენას',
          'მაიმუნებს შეუძლიათ ადამიანის ენის უშეცდომოდ სწავლა',
        ],
        optionsRu: [
          'Все языки имеют универсальную грамматику',
          'Язык формирует то, как мы мыслим и воспринимаем мир',
          'Мышление предшествует языку в развитии младенца',
          'Обезьяны могут безупречно выучить человеческий язык',
        ],
        optionsHy: [
          'Բոլոր լեզուները կիսում են ունիվերսալ քերականությունը',
          'Լեզուն ձևավորում է այն, թե ինչպես ենք մենք մտածում և ընկալում աշխարհը',
          'Մանուկների զարգացման մեջ մտածողությունը գալիս է լեզվից առաջ',
          'Կապիկները կարող են անթերի սովորել մարդկային լեզուն',
        ],
        correctIndex: 1,
        explanation:
          'The hypothesis posits that the language we speak influences our thoughts and worldview.',
        explanationKa:
          'ჰიპოთეზა ამტკიცებს, რომ ენა, რომელზეც ვსაუბრობთ, გავლენას ახდენს ჩვენს აზრებსა და მსოფლმხედველობაზე.',
        explanationRu:
          'Гипотеза утверждает, что язык, на котором мы говорим, влияет на наши мысли и мировоззрение.',
        explanationHy:
          'Վարկածը ենթադրում է, որ լեզուն, որով մենք խոսում ենք, ազդում է մեր մտքերի և աշխարհայացքի վրա:',
      },
      {
        id: 'q8_7',
        question:
          'Charles Spearman believed intelligence is a single underlying capacity, which he called:',
        questionKa: 'ჩარლზ სპირმენს სჯეროდა, რომ ინტელექტი არის ერთიანი უნარი, რომელსაც მან უწოდა:',
        questionRu:
          'Чарльз Спирмен считал, что интеллект — это единая базовая способность, которую он назвал:',
        questionHy:
          'Չարլզ Սփիրմենը կարծում էր, որ ինտելեկտը մեկ հիմքում ընկած կարողություն է, որը նա անվանել է.',
        options: [
          'Multiple intelligences',
          'Triarchic intelligence',
          'General intelligence (g factor)',
          'Emotional intelligence (EQ)',
        ],
        optionsKa: [
          'მრავალმხრივი ინტელექტი',
          'ტრიარქიული ინტელექტი',
          'ზოგადი ინტელექტი (g ფაქტორი)',
          'ემოციური ინტელექტი (EQ)',
        ],
        optionsRu: [
          'Множественный интеллект',
          'Триархический интеллект',
          'Общий интеллект (g-фактор)',
          'Эмоциональный интеллект (EQ)',
        ],
        optionsHy: [
          'Բազմաթիվ ինտելեկտներ',
          'Տրիարխիկ (Triarchic) ինտելեկտ',
          'Ընդհանուր ինտելեկտ (g գործոն)',
          'Էմոցիոնալ ինտելեկտ (EQ)',
        ],
        correctIndex: 2,
        explanation:
          "Spearman concluded that a general intelligence ('g') factor underlies specific mental abilities.",
        explanationKa:
          "სპირმენმა დაასკვნა, რომ ზოგადი ინტელექტის ('g') ფაქტორი უდევს საფუძვლად ყველა სპეციფიკურ გონებრივ უნარს.",
        explanationRu:
          "Спирмен пришел к выводу, что фактор общего интеллекта ('g') лежит в основе специфических умственных способностей.",
        explanationHy:
          "Սփիրմանը եզրակացրեց, որ ընդհանուր ինտելեկտի ('g') գործոնն ընկած է հատուկ մտավոր կարողությունների հիմքում:",
      },
      {
        id: 'q8_8',
        question: 'Howard Gardner is known for his theory of:',
        questionKa: 'ჰოვარდ გარდნერი ცნობილია თავისი თეორიით რა საკითხთან დაკავშირებით?',
        questionRu: 'Говард Гарднер известен какой своей теорией?',
        questionHy: 'Ինչի՞ իր տեսությամբ է հայտնի Հովարդ Գարդները:',
        options: [
          'General intelligence',
          'Multiple intelligences',
          'Fluid vs. Crystallized intelligence',
          'The intelligence quotient (IQ) formula',
        ],
        optionsKa: [
          'ზოგადი ინტელექტის',
          'მრავალმხრივი ინტელექტის (Multiple intelligences)',
          'თხევადი და კრისტალიზებული ინტელექტის',
          'ინტელექტის კოეფიციენტის (IQ) ფორმულის',
        ],
        optionsRu: [
          'Общего интеллекта',
          'Множественного интеллекта',
          'Подвижного и кристаллизованного интеллекта',
          'Формулы коэффициента интеллекта (IQ)',
        ],
        optionsHy: [
          'Ընդհանուր ինտելեկտ',
          'Մուլտիպլիկացիոն (Multiple) ինտելեկտներ',
          'Հեղուկ ընդդեմ բյուրեղացված ինտելեկտի',
          'Ինտելեկտի գործակիցի (IQ) բանաձև',
        ],
        correctIndex: 1,
        explanation:
          'Gardner proposed eight independent intelligences (e.g., musical, spatial, kinesthetic).',
        explanationKa:
          'გარდნერმა ივარაუდა რვა დამოუკიდებელი ინტელექტის არსებობა (მაგ., მუსიკალური, სივრცითი, კინესთეტიკური).',
        explanationRu:
          'Гарднер предложил теорию восьми независимых типов интеллекта (например, музыкальный, пространственный).',
        explanationHy:
          'Գարդներն առաջարկել է ութ անկախ ինտելեկտներ (օրինակ՝ երաժշտական, տարածական, կինեստետիկ):',
      },
      {
        id: 'q8_9',
        question: "Robert Sternberg's triarchic theory of intelligence includes which three types?",
        questionKa: 'რომელ სამ ტიპს მოიცავს რობერტ სტერნბერგის ინტელექტის ტრიარქიული თეორია?',
        questionRu: 'Какие три типа включает триархическая теория интеллекта Роберта Стернберга?',
        questionHy:
          'Ռոբերտ Ստերնբերգի ինտելեկտի եռապետական(triarchic) ​​տեսությունը ներառում է ո՞ր երեք տեսակները:',
        options: [
          'Logical, Musical, Spatial',
          'Analytical, Creative, Practical',
          'Verbal, Mathematical, Physical',
          'General, Specific, Emotional',
        ],
        optionsKa: [
          'ლოგიკური, მუსიკალური, სივრცითი',
          'ანალიტიკური, კრეატიული, პრაქტიკული',
          'ვერბალური, მათემატიკური, ფიზიკური',
          'ზოგადი, სპეციფიკური, ემოციური',
        ],
        optionsRu: [
          'Логический, Музыкальный, Пространственный',
          'Аналитический, Творческий, Практический',
          'Вербальный, Математический, Физический',
          'Общий, Специфический, Эмоциональный',
        ],
        optionsHy: [
          'Տրամաբանական, երաժշտական, տարածական',
          'Անալիտիկ, Ստեղծագործական, Պրակտիկ',
          'Բանավոր, մաթեմատիկական, ֆիզիկական',
          'Ընդհանուր, Յուրահատուկ, Զգացմունքային',
        ],
        correctIndex: 1,
        explanation:
          'Sternberg simplified multiple intelligences into Analytical (academic), Creative (innovation), and Practical (street smarts) domains.',
        explanationKa:
          'სტერნბერგმა მრავალმხრივი ინტელექტი შეამცირა ანალიტიკურ (აკადემიურ), კრეატიულ (ინოვაციურ) და პრაქტიკულ (ქუჩის სიბრძნე) სფეროებად.',
        explanationRu:
          'Стернберг упростил модель множественного интеллекта до аналитического (академического), творческого и практического.',
        explanationHy:
          'Սթերնբերգը պարզեցրեց բազմաթիվ ինտելեկտները՝ անալիտիկ (ակադեմիական), ստեղծագործական (նորարարություն) և գործնական (փողոցային խելք) տիրույթներում:',
      },
      {
        id: 'q8_10',
        question:
          'An IQ test that yields relatively consistent results when taken multiple times has high:',
        questionKa:
          'IQ ტესტს, რომელიც მრავალჯერ ჩატარებისას შედარებით თანმიმდევრულ შედეგებს იძლევა, აქვს მაღალი:',
        questionRu:
          'IQ-тест, который дает относительно стабильные результаты при многократном прохождении, имеет высокую:',
        questionHy:
          'Ինտելեկտի գործակիցը, որը տալիս է համեմատաբար հետևողական արդյունքներ մի քանի անգամ օգտագործելիս, ունի բարձր.',
        options: ['Validity', 'Reliability', 'Standardization', 'Heritability'],
        optionsKa: [
          'ვალიდობა (Validity)',
          'საიმედოობა (Reliability)',
          'სტანდარტიზაცია',
          'მემკვიდრეობითობა',
        ],
        optionsRu: ['Валидность', 'Надежность', 'Стандартизация', 'Наследуемость'],
        optionsHy: [
          'Վավերականություն (Validity)',
          'Հուսալիություն (Reliability)',
          'Ստանդարտացում',
          'Ժառանգականություն',
        ],
        correctIndex: 1,
        explanation: 'Reliability refers to the consistency of test scores over time.',
        explanationKa:
          'საიმედოობა (Reliability) გულისხმობს ტესტის ქულების თანმიმდევრულობასა და მუდმივობას დროთა განმავლობაში.',
        explanationRu:
          'Надежность относится к согласованности и стабильности результатов теста с течением времени.',
        explanationHy:
          'Հուսալիությունը վերաբերում է թեստի միավորների հետևողականությանը ժամանակի ընթացքում:',
      },
      {
        id: 'q8_11',
        question: 'If a test actually measures what it claims to measure, it has high:',
        questionKa: 'თუ ტესტი ნამდვილად ზომავს იმას, რის გაზომვასაც აცხადებს, მას აქვს მაღალი:',
        questionRu:
          'Если тест действительно измеряет то, что он обещает измерить, он имеет высокую:',
        questionHy: 'Եթե թեստն իրականում չափում է այն, ինչ պնդում է, որ չափվում է, այն ունի բարձր.',
        options: ['Reliability', 'Validity', 'Standardization', 'Normal distribution'],
        optionsKa: ['საიმედოობა', 'ვალიდობა', 'სტანდარტიზაცია', 'ნორმალური განაწილება'],
        optionsRu: ['Надежность', 'Валидность', 'Стандартизация', 'Нормальное распределение'],
        optionsHy: ['Հուսալիություն', 'Վավերականություն', 'Ստանդարտացում', 'Նորմալ բաշխում'],
        correctIndex: 1,
        explanation: "Validity asks: 'Does the test measure what it's supposed to measure?'",
        explanationKa:
          "ვალიდობა სვამს კითხვას: 'ზომავს თუ არა ტესტი იმას, რაც უნდა გაზომოს?' (მაგალითად, ინტელექტის ტესტი არ უნდა ამოწმებდეს ისტორიას).",
        explanationRu: "Валидность означает: 'Измеряет ли тест то, что он должен измерять?'",
        explanationHy:
          'Վավերականությունը հարցնում է. «Արդյո՞ք թեստը չափում է այն, ինչ պետք է չափի»:',
      },
      {
        id: 'q8_12',
        question: 'The Flynn effect refers to the finding that:',
        questionKa: 'რას გულისხმობს ფლინის ეფექტი?',
        questionRu: 'На что указывает эффект Флинна?',
        questionHy: 'Ֆլինի էֆեկտը վերաբերում է այն բացահայտմանը, որ.',
        options: [
          'Intelligence decreases continuously as we age',
          'There is a global, steady increase in IQ scores over generations',
          'Genetics account for 100% of intelligence',
          'Women consistently score higher than men on math tasks',
        ],
        optionsKa: [
          'ინტელექტი ასაკთან ერთად მუდმივად მცირდება',
          'თაობების განმავლობაში IQ ქულების გლობალური, სტაბილური ზრდა ფიქსირდება',
          'გენეტიკა განაპირობებს ინტელექტის 100%-ს',
          'ქალები ყოველთვის უკეთეს ქულებს იღებენ მათემატიკაში, ვიდრე კაცები',
        ],
        optionsRu: [
          'Интеллект постоянно снижается с возрастом',
          'Глобальный и устойчивый рост показателей IQ на протяжении поколений',
          'Генетика на 100% определяет интеллект',
          'Женщины показывают лучшие результаты в математике, чем мужчины',
        ],
        optionsHy: [
          'Տարիքի հետ ինտելեկտը անընդհատ նվազում է',
          'Սերունդների ընթացքում նկատվում է IQ-ի գլոբալ կայուն աճ',
          'Գենետիկան կազմում է բանականության 100%-ը',
          'Մաթեմատիկական առաջադրանքներում կանայք անընդհատ ավելի բարձր գնահատականներ են հավաքում, քան տղամարդիկ',
        ],
        correctIndex: 1,
        explanation:
          'The Flynn effect shows average IQ scores have risen significantly over the 20th century, likely due to better nutrition, education, and environments.',
        explanationKa:
          'ფლინის ეფექტი აჩვენებს, რომ მე-20 საუკუნის განმავლობაში საშუალო IQ ქულები საგრძნობლად გაიზარდა (სავარაუდოდ უკეთესი განათლების, კვების გამო).',
        explanationRu:
          'Эффект Флинна показывает значительный рост средних показателей IQ на протяжении 20 века.',
        explanationHy:
          'Ֆլինի էֆեկտը ցույց է տալիս, որ միջին IQ գնահատականները զգալիորեն բարձրացել են 20-րդ դարի ընթացքում:',
      },
      {
        id: 'q8_13',
        question:
          'Which term describes our ability to reason speedily and abstractly, which tends to decrease in late adulthood?',
        questionKa:
          'რომელი ტერმინი აღწერს ჩვენს უნარს, ვიმსჯელოთ სწრაფად და აბსტრაქტულად (რომელიც მცირდება გვიანდელ ასაკში)?',
        questionRu:
          'Какой термин описывает нашу способность рассуждать быстро и абстрактно (снижается в позднем возрасте)?',
        questionHy:
          'Ո՞ր տերմինն է նկարագրում արագ և վերացական դատելու մեր ունակությունը, որը հակված է նվազել մեծ հասուն տարիքում:',
        options: [
          'Crystallized intelligence',
          'Fluid intelligence',
          'Emotional intelligence',
          'Practical intelligence',
        ],
        optionsKa: [
          'კრისტალიზებული ინტელექტი',
          'თხევადი (Fluid) ინტელექტი',
          'ემოციური ინტელექტი',
          'პრაქტიკული ინტელექტი',
        ],
        optionsRu: [
          'Кристаллизованный интеллект',
          'Подвижный (Текучий) интеллект',
          'Эмоциональный интеллект',
          'Практический интеллект',
        ],
        optionsHy: [
          'Բյուրեղացված բանականություն',
          'Հեղուկ (Fluid) բանականություն',
          'Էմոցիոնալ բանականություն',
          'Գործնական բանականություն',
        ],
        correctIndex: 1,
        explanation:
          'Fluid intelligence involves logic, speed, and abstract thinking, which declines slowly up to age 75.',
        explanationKa:
          'თხევადი ინტელექტი მოიცავს ლოგიკას, სისწრაფესა და აბსტრაქტულ აზროვნებას, რაც ასაკთან ერთად ნელ-ნელა მცირდება.',
        explanationRu:
          'Подвижный интеллект включает логику, скорость и абстрактное мышление, которые снижаются с возрастом.',
        explanationHy:
          'Հեղուկ բանականությունը ենթադրում է տրամաբանություն, արագություն և վերացական մտածողություն:',
      },
      {
        id: 'q8_14',
        question: 'Which of these is NOT an aspect of emotional intelligence (EQ)?',
        questionKa: 'ჩამოთვლილთაგან რომელი არ არის ემოციური ინტელექტის (EQ) ასპექტი?',
        questionRu: 'Что из этого НЕ является аспектом эмоционального интеллекта (EQ)?',
        questionHy: 'Հետևյալներից ո՞րը զգացմունքային ինտելեկտի (EQ) կողմ ՉԷ:',
        options: [
          'Perceiving emotions',
          'Understanding emotions',
          'Mathematical computation',
          'Managing emotions',
        ],
        optionsKa: [
          'ემოციების აღქმა',
          'ემოციების გაგება',
          'მათემატიკური გამოთვლა',
          'ემოციების მართვა',
        ],
        optionsRu: [
          'Восприятие эмоций',
          'Понимание эмоций',
          'Математические вычисления',
          'Управление эмоциями',
        ],
        optionsHy: [
          'Զգացմունքների ընկալում',
          'Զգացմունքների ըմբռնում',
          'Մաթեմատիկական հաշվարկ',
          'Զգացմունքների կառավարում',
        ],
        correctIndex: 2,
        explanation:
          'Math relies on logical/analytical intelligence, while EQ involves perceiving, understanding, managing, and using emotions.',
        explanationKa:
          'მათემატიკა ეყრდნობა ლოგიკურ/ანალიტიკურ ინტელექტს, ხოლო EQ მოიცავს ემოციების აღქმას, მართვას და გაგებას.',
        explanationRu:
          'Математика опирается на логический интеллект, а EQ включает восприятие, понимание и управление эмоциями.',
        explanationHy:
          'Մաթեմատիկան հենվում է տրամաբանական/վերլուծական ինտելեկտի վրա, մինչդեռ EQ-ն ներառում է ընկալում, ըմբռնում, կառավարում և հույզերի օգտագործում:',
      },
      {
        id: 'q8_15',
        question: 'The original formula for IQ (Intelligence Quotient) was:',
        questionKa: 'როგორი იყო ინტელექტის კოეფიციენტის (IQ) ორიგინალური ფორმულა?',
        questionRu: 'Какова была первоначальная формула IQ (коэффициента интеллекта)?',
        questionHy: 'IQ-ի բնօրինակ բանաձևն էր.',
        options: [
          'Mental Age / Chronological Age × 100',
          'Chronological Age / Mental Age × 100',
          'Mental Age + Chronological Age × 100',
          'Mental Age × Chronological Age / 100',
        ],
        optionsKa: [
          'გონებრივი ასაკი / ქრონოლოგიური ასაკი × 100',
          'ქრონოლოგიური ასაკი / გონებრივი ასაკი × 100',
          'გონებრივი ასაკი + ქრონოლოგიური ასაკი × 100',
          'გონებრივი ასაკი × ქრონოლოგიური ასაკი / 100',
        ],
        optionsRu: [
          'Умственный возраст / Хронологический возраст × 100',
          'Хронологический возраст / Умственный возраст × 100',
          'Умственный возраст + Хронологический возраст × 100',
          'Умственный возраст × Хронологический возраст / 100',
        ],
        optionsHy: [
          'Մտավոր տարիք / Ժամանակագրական տարիք × 100',
          'Ժամանակագրական տարիք / Մտավոր տարիք × 100',
          'Մտավոր տարիք + Ժամանակագրական տարիք × 100',
          'Մտավոր տարիք × Ժամանակագրական տարիք / 100',
        ],
        correctIndex: 0,
        explanation:
          'William Stern derived this formula, though modern tests use deviation IQ comparing performance to age-group peers.',
        explanationKa:
          'უილიამ სტერნმა შექმნა ეს ფორმულა. თუმცა თანამედროვე ტესტები იყენებენ სხვა მეთოდებს ამავე ასაკის თანატოლებთან შესადარებლად.',
        explanationRu:
          'Уильям Штерн вывел эту формулу, хотя современные тесты используют методы сравнения с ровесниками.',
        explanationHy:
          'Վիլյամ Սթերնը ստացել է այս բանաձևը, թեև ժամանակակից թեստերը օգտագործում են շեղման IQ-ն՝ համեմատելով կատարողականությունը նույն տարիքային խմբի հասակակիցների հետ:',
      },
    ],
  },
  {
    id: 'q9',
    chapterId: 9,
    title: 'Human Development',
    titleKa: 'ადამიანის განვითარება',
    titleRu: 'Человеческое развитие',
    titleHy: 'Մարդկային զարգացում',
    questions: [
      {
        id: 'q9_1',
        question:
          'Which issue in developmental psychology centers on whether our traits are present at birth or acquired through experience?',
        questionKa:
          'განვითარების ფსიქოლოგიის რომელი საკითხი ფოკუსირდება იმაზე, ჩვენი თვისებები თანდაყოლილია თუ შეძენილი გამოცდილებით?',
        questionRu:
          'Какая проблема в психологии развития сосредоточена на том, присутствуют ли наши черты при рождении или приобретаются с опытом?',
        questionHy:
          'Զարգացման հոգեբանության մեջ ո՞ր հարցն է կենտրոնանում այն բանի վրա, թե արդյոք մեր հատկանիշները առկա են ի ծնե, թե ձեռք են բերվել փորձի միջոցով:',
        options: [
          'Continuity vs. Stages',
          'Stability vs. Change',
          'Nature vs. Nurture',
          'Cross-sectional vs. Longitudinal',
        ],
        optionsKa: [
          'უწყვეტობა და ეტაპები',
          'სტაბილურობა და ცვლილება',
          'ბუნება და აღზრდა (Nature vs. Nurture)',
          'განივი და გრძივი კვლევა',
        ],
        optionsRu: [
          'Непрерывность против стадий',
          'Стабильность против изменений',
          'Природа против воспитания (Nature vs. Nurture)',
          'Кросс-секционные против лонгитюдных',
        ],
        optionsHy: [
          'Շարունակականություն ընդդեմ փուլերի',
          'Կայունություն ընդդեմ փոփոխության',
          'Բնությունն ընդդեմ դաստիարակության',
          'Խաչաձև և երկայնական',
        ],
        correctIndex: 2,
        explanation:
          'Nature refers to genetic inheritance, and nurture refers to environmental experiences.',
        explanationKa:
          'ბუნება გულისხმობს გენეტიკურ მემკვიდრეობას, ხოლო აღზრდა - გარემოსა და გამოცდილებას.',
        explanationRu:
          'Природа относится к генетической наследственности, а воспитание — к опыту и среде.',
        explanationHy:
          'Բնությունը վերաբերում է գենետիկական ժառանգությանը, իսկ դաստիարակությունը՝ շրջակա միջավայրի փորձին:',
      },
      {
        id: 'q9_2',
        question:
          'According to Jean Piaget, what is the understanding that objects continue to exist even when they cannot be seen?',
        questionKa:
          'ჟან პიაჟეს თანახმად, რა ეწოდება გაგებას, რომ ობიექტები აგრძელებენ არსებობას მაშინაც კი, როდესაც მათი დანახვა შეუძლებელია?',
        questionRu:
          'Согласно Жану Пиаже, как называется понимание того, что объекты продолжают существовать, даже когда их не видно?',
        questionHy:
          'Ըստ Ջին Պիաժեի, ի՞նչ է այն ըմբռնումը, որ օբյեկտները շարունակում են գոյություն ունենալ նույնիսկ այն ժամանակ, երբ դրանք չեն երևում:',
        options: ['Conservation', 'Egocentrism', 'Object permanence', 'Theory of mind'],
        optionsKa: [
          'კონსერვაცია (შენარჩუნება)',
          'ეგოცენტრიზმი',
          'ობიექტის მუდმივობა',
          'გონების თეორია',
        ],
        optionsRu: [
          'Сохранение',
          'Эгоцентризм',
          'Постоянство объекта',
          'Модель психического состояния (Theory of mind)',
        ],
        optionsHy: ['Պահպանում', 'Էգոցենտրիզմ', 'Օբյեկտի մշտականություն', 'Մտքի տեսություն'],
        correctIndex: 2,
        explanation:
          'Object permanence develops during the sensorimotor stage, typically around 8 months of age.',
        explanationKa:
          'ობიექტის მუდმივობა ყალიბდება სენსომოტორულ ეტაპზე, როგორც წესი, 8 თვის ასაკში (მაგ. ბავშვი ეძებს დამალულ სათამაშოს).',
        explanationRu:
          'Постоянство объекта развивается на сенсомоторной стадии, обычно в возрасте около 8 месяцев.',
        explanationHy:
          'Օբյեկտների մշտականությունը զարգանում է սենսորմոտոր փուլում, սովորաբար մոտ 8 ամսականում:',
      },
      {
        id: 'q9_3',
        question:
          "Which of Piaget's stages is characterized by logical thinking about concrete events and understanding conservation?",
        questionKa:
          'პიაჟეს რომელი ეტაპი ხასიათდება კონკრეტულ მოვლენებზე ლოგიკური აზროვნებითა და კონსერვაციის (შენარჩუნების) გაგებით?',
        questionRu:
          'Какая из стадий Пиаже характеризуется логическим мышлением о конкретных событиях и пониманием сохранения?',
        questionHy:
          'Պիաժեի փուլերից ո՞րն է բնութագրվում կոնկրետ իրադարձությունների տրամաբանական մտածողությամբ և պահպանման ըմբռնմամբ:',
        options: ['Sensorimotor', 'Preoperational', 'Concrete operational', 'Formal operational'],
        optionsKa: [
          'სენსომოტორული',
          'ოპერაციამდელი',
          'კონკრეტული ოპერაციული',
          'ფორმალური ოპერაციული',
        ],
        optionsRu: [
          'Сенсомоторная',
          'Дооперациональная',
          'Конкретных операций',
          'Формальных операций',
        ],
        optionsHy: ['Սենսորմոտորային', 'Նախաօպերացիոն', 'Կոնկրետ օպերացիոն', 'Ֆորմալ օպերացիոն'],
        correctIndex: 2,
        explanation:
          'The concrete operational stage (ages 7-11) is when children grasp conservation (e.g., volume stays same in different shaped glasses).',
        explanationKa:
          'კონკრეტული ოპერაციული ეტაპი (7-11 წელი) არის ის დრო, როდესაც ბავშვები იაზრებენ კონსერვაციას (მაგ. სითხის მოცულობა იგივე რჩება სხვადასხვა ფორმის ჭიქაში).',
        explanationRu:
          'Стадия конкретных операций (7-11 лет) — это период, когда дети понимают принципы сохранения (например, объем жидкости не меняется в стаканах разной формы).',
        explanationHy:
          'Կոնկրետ գործառնական փուլը (7-11 տարեկան) այն ժամանակն է, երբ երեխաները ըմբռնում են պահպանումը (օրինակ՝ տարբեր ձևի բաժակների մեջ ծավալը մնում է նույնը):',
      },
      {
        id: 'q9_4',
        question: 'Lev Vygotsky emphasized the role of ________ in cognitive development.',
        questionKa: 'ლევ ვიგოტსკიმ ხაზი გაუსვა ________-ის როლს კოგნიტურ განვითარებაში.',
        questionRu: 'Лев Выготский подчеркивал роль ________ в когнитивном развитии.',
        questionHy: 'Լև Վիգոտսկին կարևորել է ________ դերը ճանաչողական զարգացման գործում:',
        options: [
          'Genetics',
          'The social environment',
          'Physical brain maturation',
          'Unconscious drives',
        ],
        optionsKa: [
          'გენეტიკის',
          'სოციალური გარემოს',
          'ტვინის ფიზიკური მომწიფების',
          'არაცნობიერი ლტოლვების',
        ],
        optionsRu: [
          'Генетики',
          'Социальной среды',
          'Физического созревания мозга',
          'Бессознательных влечений',
        ],
        optionsHy: [
          'Գենետիկա',
          'Սոցիալական միջավայր',
          'Ուղեղի ֆիզիկական հասունացում',
          'Անգիտակցական մղումներ',
        ],
        correctIndex: 1,
        explanation:
          'Vygotsky believed children learn thinking skills through scaffolding by interacting with parents and teachers.',
        explanationKa:
          'ვიგოტსკის სჯეროდა, რომ ბავშვები აზროვნების უნარებს სწავლობენ მშობლებთან და მასწავლებლებთან ურთიერთობით (სოციალური გარემო).',
        explanationRu:
          'Выготский считал, что дети развивают когнитивные навыки через взаимодействие с родителями и учителями (социальная среда).',
        explanationHy:
          'Վիգոտսկին կարծում էր, որ երեխաները մտածելու հմտություններ են սովորում ծնողների և ուսուցիչների հետ շփվելու միջոցով (Սոցիալական միջավայր):',
      },
      {
        id: 'q9_5',
        question:
          "In the 'Strange Situation' experiment, a child who explores comfortably, is upset when the mother leaves, and is comforted when she returns shows:",
        questionKa:
          "'უცხო სიტუაციის' ექსპერიმენტში, ბავშვი, რომელიც თავისუფლად იკვლევს გარემოს, წუხს დედის წასვლისას და მშვიდდება მისი დაბრუნებისას, ავლენს:",
        questionRu:
          "В эксперименте 'Незнакомая ситуация' ребенок, который спокойно исследует обстановку, расстраивается при уходе матери и успокаивается при ее возвращении, демонстрирует:",
        questionHy:
          '«Տարօրինակ իրավիճակ» փորձի ժամանակ երեխան, ով հարմարավետորեն հետազոտում է շրջապատը, տխրում է, երբ մայրը հեռանում է, և մխիթարվում է նրա վերադառնալուց հետո, ցույց է տալիս.',
        options: [
          'Avoidant attachment',
          'Anxious-ambivalent attachment',
          'Disorganized attachment',
          'Secure attachment',
        ],
        optionsKa: [
          'ამრიდებლურ (განრიდებულ) მიჯაჭვულობას',
          'შფოთვით-ამბივალენტურ მიჯაჭვულობას',
          'დეზორგანიზებულ მიჯაჭვულობას',
          'უსაფრთხო მიჯაჭვულობას',
        ],
        optionsRu: [
          'Избегающую привязанность',
          'Тревожно-амбивалентную привязанность',
          'Дезорганизованную привязанность',
          'Надежную привязанность (Secure attachment)',
        ],
        optionsHy: [
          'Խուսափողական կապվածություն',
          'Անհանգիստ-ամբիվալենտ վերաբերմունք',
          'Անկազմակերպ կապվածություն',
          'Ապահով կապվածություն',
        ],
        correctIndex: 3,
        explanation:
          'Secure attachment results from responsive parenting, giving the child confidence to explore.',
        explanationKa:
          'უსაფრთხო მიჯაჭვულობა ყალიბდება მზრუნველი მშობლის პირობებში, რაც ბავშვს გარემოს შესწავლის თავდაჯერებულობას აძლევს.',
        explanationRu:
          'Надежная привязанность формируется благодаря отзывчивому воспитанию и дает ребенку уверенность в исследовании мира.',
        explanationHy:
          'Ապահով կապվածությունը պատասխանատու դաստիարակության արդյունք է, որը վստահություն է տալիս երեխային կատարել ուսումնասիրություն:',
      },
      {
        id: 'q9_6',
        question:
          'Harry Harlow’s experiments with infant monkeys demonstrated the importance of ________ in attachment.',
        questionKa:
          'ჰარი ჰარლოუს ექსპერიმენტებმა ჩვილ მაიმუნებზე აჩვენა ________-ის მნიშვნელობა მიჯაჭვულობაში.',
        questionRu:
          'Эксперименты Гарри Харлоу с детенышами обезьян продемонстрировали важность ________ в формировании привязанности.',
        questionHy:
          'Հարրի Հարլոուի փորձերը մանկական կապիկների հետ ցույց տվեցին ________ կարևորությունը կապվածության կազմավորման մեջ:',
        options: ['Nourishment / Food', 'Contact comfort', 'Genetics', 'Imprinting'],
        optionsKa: [
          'კვების / საჭმლის',
          'კონტაქტური კომფორტის (სითბო და შეხება)',
          'გენეტიკის',
          'იმპრინტინგის',
        ],
        optionsRu: [
          'Питания / Еды',
          'Контактного комфорта (тепло и прикосновения)',
          'Генетики',
          'Импринтинга',
        ],
        optionsHy: [
          'Սնուցում / Սնունդ',
          'Կոնտակտային հարմարավետություն (ջերմություն և հպում)',
          'Գենետիկա',
          'Իմպրինտինգ',
        ],
        correctIndex: 1,
        explanation:
          'Monkeys preferred the soft cloth mother over the wire mother with food, showing attachment is based on comfort, not just nourishment.',
        explanationKa:
          "მაიმუნები ამჯობინებდნენ რბილ, ნაჭრის დედას 'მავთულის დედაზე' საკვებით. რამაც აჩვენა, რომ მიჯაჭვულობა ეფუძნება კომფორტსა და შეხებას, და არა მხოლოდ კვებას.",
        explanationRu:
          'Обезьяны предпочитали мягкую тканевую мать проволочной с едой, что доказало: привязанность основана на комфорте, а не только на питании.',
        explanationHy:
          'Կապիկները նախընտրում էին փափուկ շորից մայրիկին՝ ուտելիք ունեցող լարից մորից փոխարեն՝ ցույց տալով, որ կապվածությունը հիմնված է հարմարավետության, ոչ վերջապես միայն սնուցման վրա:',
      },
      {
        id: 'q9_7',
        question:
          'According to Erik Erikson, the primary psychosocial task of adolescence is to resolve the conflict of:',
        questionKa:
          'ერიკ ერიკსონის თანახმად, მოზარდობის ძირითადი ფსიქოსოციალური ამოცანაა შემდეგი კონფლიქტის გადაჭრა:',
        questionRu:
          'Согласно Эрику Эриксону, главной психосоциальной задачей подросткового возраста является разрешение конфликта:',
        questionHy:
          'Ըստ Էրիկ Էրիկսոնի, դեռահասության հիմնական հոգեսոցիալական խնդիրն է լուծել հակամարտությունը.',
        options: [
          'Trust vs. Mistrust',
          'Initiative vs. Guilt',
          'Identity vs. Role Confusion',
          'Generativity vs. Stagnation',
        ],
        optionsKa: [
          'ნდობა უნდობლობის წინააღმდეგ',
          'ინიციატივა დანაშაულის წინააღმდეგ',
          'იდენტობა როლური გაურკვევლობის წინააღმდეგ',
          'გენერაციულობა სტაგნაციის წინააღმდეგ',
        ],
        optionsRu: [
          'Доверие против недоверия',
          'Инициатива против вины',
          'Идентичность против смешения ролей',
          'Генеративность против стагнации',
        ],
        optionsHy: [
          'Վստահությունն ընդդեմ անվստահության',
          'Նախաձեռնություն ընդդեմ մեղքի',
          'Ինքնություն ընդդեմ դերերի շփոթության',
          'Սերնդականություն ընդդեմ լճացման',
        ],
        correctIndex: 2,
        explanation:
          'Adolescents explore different roles and beliefs to form a stable sense of identity.',
        explanationKa:
          'მოზარდები იკვლევენ სხვადასხვა როლებსა და შეხედულებებს, რათა ჩამოაყალიბონ იდენტობის სტაბილური გრძნობა.',
        explanationRu:
          'Подростки исследуют разные роли и убеждения, чтобы сформировать стабильное чувство идентичности.',
        explanationHy:
          'Դեռահասներն ուսումնասիրում են տարբեր դերեր և համոզմունքներ՝ ձևավորելու ինքնության կայուն զգացում:',
      },
      {
        id: 'q9_8',
        question: "Lawrence Kohlberg’s 'Conventional' level of moral development focuses on:",
        questionKa: "ლოურენს კოლბერგის მორალური განვითარების 'კონვენციური' დონე ფოკუსირებულია:",
        questionRu:
          "Возрастной уровень 'Конвенционального' морального развития по Лоуренсу Кольбергу фокусируется на:",
        questionHy: 'Լոուրենս Քոլբերգի բարոյական զարգացման «Սովորական» մակարդակը կենտրոնանում է.',
        options: [
          'Avoiding punishment or getting rewards',
          'Upholding laws and social rules simply because they are laws',
          'Following self-chosen universal ethical principles',
          'Acting based purely on biological instincts',
        ],
        optionsKa: [
          'დასჯის არიდებასა ან ჯილდოს მიღებაზე',
          'კანონების და სოციალური წესების დაცვაზე, მხოლოდ იმიტომ რომ ისინი კანონებია',
          'თვითშერჩეულ უნივერსალურ ეთიკურ პრინციპებზე',
          'მხოლოდ ბიოლოგიურ ინსტინქტებზე დაყრდნობით მოქმედებაზე',
        ],
        optionsRu: [
          'Избегании наказания или получении наград',
          'Соблюдении законов и социальных правил просто потому, что это законы',
          'Следовании самостоятельно выбранным универсальным этическим принципам',
          'Действиях, основанных исключительно на биологических инстинктах',
        ],
        optionsHy: [
          'Խուսափել պատժից կամ ստանալ պարգևներ',
          'Պահպանել օրենքներն ու սոցիալական կանոնները պարզապես այն պատճառով, որ դրանք օրենքներ են',
          'Հետևելով ինքնուրույն ընտրված համընդհանուր էթիկական սկզբունքներին',
          'Գործողություն զուտ կենսաբանական բնազդների հիման վրա',
        ],
        correctIndex: 1,
        explanation:
          'Conventional morality judges actions based on conformity to social norms, laws, and expectations.',
        explanationKa:
          'კონვენციური მორალი აფასებს ქმედებებს სოციალურ ნორმებთან, კანონებთან და მოლოდინებთან შესაბამისობის საფუძველზე.',
        explanationRu:
          'Конвенциональная мораль оценивает поступки на основе их соответствия социальным нормам и законам.',
        explanationHy:
          'Սովորական բարոյականությունը դատում է գործողությունները՝ ելնելով սոցիալական նորմերին, օրենքներին և ակնկալիքներին համապատասխանությունից:',
      },
      {
        id: 'q9_9',
        question: 'Which cognitive ability typically declines in late adulthood?',
        questionKa: 'რომელი კოგნიტური უნარი მცირდება, როგორც წესი, გვიანდელ ზრდასრულ ასაკში?',
        questionRu: 'Какая когнитивная способность обычно снижается в позднем зрелом возрасте?',
        questionHy: 'Ինչպիսի՞ ճանաչողական կարողություն է սովորաբար նվազում մեծահասակ տարիքում:',
        options: [
          'Vocabulary size',
          'Crystallized intelligence (accumulated knowledge)',
          'Fluid intelligence (processing speed/logic)',
          'Long-term semantic memory',
        ],
        optionsKa: [
          'ლექსიკური მარაგი',
          'კრისტალიზებული ინტელექტი (დაგროვილი ცოდნა)',
          'თხევადი ინტელექტი (დამუშავების სისწრაფე / ლოგიკა)',
          'გრძელვადიანი სემანტიკური მეხსიერება',
        ],
        optionsRu: [
          'Словарный запас',
          'Кристаллизованный интеллект (накопленные знания)',
          'Подвижный интеллект (скорость обработки/логика)',
          'Долговременная семантическая память',
        ],
        optionsHy: [
          'Բառապաշարի չափը',
          'Բյուրեղացված բանականություն (կուտակված գիտելիքներ)',
          'Հեղուկ բանականություն (մշակման արագություն/տրամաբանություն)',
          'Երկարաժամկետ σημασιοաբանական հիշողություն',
        ],
        correctIndex: 2,
        explanation:
          'Fluid intelligence (mental quickness and abstract reasoning) declines with age, while crystallized intelligence stays stable or grows.',
        explanationKa:
          'თხევადი ინტელექტი (გონებრივი სისწრაფე და აბსტრაქტული აზროვნება) ასაკთან ერთად მცირდება, ხოლო კრისტალიზებული ინტელექტი სტაბილური რჩება ან იზრდება.',
        explanationRu:
          'Подвижный интеллект снижается с возрастом, тогда как кристаллизованный интеллект остается стабильным.',
        explanationHy:
          'Հեղուկ ինտելեկտը (մտավոր արագություն և աբստրակտ տրամաբանություն) տարիքի հետ նվազում է, մինչդեռ բյուրեղացված ինտելեկտը կայուն է մնում կամ աճում:',
      },
      {
        id: 'q9_10',
        question: "What is 'Egocentrism' in the context of Piaget's theory?",
        questionKa: "რა არის 'ეგოცენტრიზმი' პიაჟეს თეორიის კონტექსტში?",
        questionRu: "Что такое 'Эгоцентризм' в контексте теории Пиаже?",
        questionHy: 'Ի՞նչ է «Էգոցենտրիզմը» Պիաժեի տեսության համատեքստում:',
        options: [
          'Intentional selfishness and arrogance',
          "A child's inability to see a situation from another person's point of view",
          'Believing one is superior to others',
          "A teenager's desire for independence",
        ],
        optionsKa: [
          'განზრახი ეგოიზმი და ამპარტავნება',
          'ბავშვის უუნარობა, დაინახოს სიტუაცია სხვა ადამიანის პერსპექტივიდან',
          'რწმენა, რომ ადამიანი სხვებზე აღმატებულია',
          'მოზარდის დემოუკიდებლობის სურვილი',
        ],
        optionsRu: [
          'Намеренный эгоизм и высокомерие',
          'Неспособность ребенка смотреть на ситуацию с точки зрения другого человека',
          'Убеждение в своем превосходстве над другими',
          'Стремление подростка к независимости',
        ],
        optionsHy: [
          'Դիտավորյալ եսասիրություն և ամբարտավանություն',
          'Երեխայի անկարողությունը՝ տեսնել իրավիճակը մեկ ուրիշի տեսանկյունից',
          'Հավատալով, որ մեկը գերադասում է ուրիշներից',
          'Դեռահասի անկախության ցանկությունը',
        ],
        correctIndex: 1,
        explanation:
          'During the preoperational stage, young children genuinely struggle to understand that others have different perspectives.',
        explanationKa:
          'ოპერაციამდელ ეტაპზე მყოფ მცირეწლოვან ბავშვებს ნამდვილად უჭირთ იმის გაგება, რომ სხვებს აქვთ განსხვავებული პერსპექტივა / შეხედულება.',
        explanationRu:
          'На дооперациональной стадии маленькие дети искренне не могут понять, что у других могут быть свои, отличные точки зрения.',
        explanationHy:
          'Նախաօպերացիոն փուլում փոքր երեխաներն անկեղծորեն դժվարանում են հասկանալ, որ ուրիշներն ունեն տարբեր տեսանկյուններ:',
      },
      {
        id: 'q9_11',
        question:
          'A parenting style that is high in demands/control but low in warmth/responsiveness is called:',
        questionKa:
          'მშობლობის (აღზრდის) სტილი, რომელიც გამოირჩევა მაღალი მოთხოვნებით/კონტროლით და დაბალი სითბოთი (მხარდაჭერით), ეწოდება:',
        questionRu:
          'Стиль воспитания, который отличается высокими требованиями/контролем, но низким уровнем теплоты/отзывчивости, называется:',
        questionHy:
          'Դաստիարակության ոճը, որն ունի բարձր պահանջներ/վերահսկողություն, բայց ցածր ջերմություն/արձագանքում, կոչվում է.',
        options: ['Authoritative', 'Authoritarian', 'Permissive', 'Uninvolved'],
        optionsKa: [
          'ავტორიტეტული (Authoritative)',
          'ავტორიტარული (Authoritarian)',
          'პერსიმისიული/ლიბერალური (Permissive)',
          'ჩაურთველი/უყურადღებო',
        ],
        optionsRu: ['Авторитетный', 'Авторитарный', 'Попустительский', 'Отстраненный'],
        optionsHy: ['Հեղինակավոր', 'Ավտորիտար', 'Թույլատրելի', 'Անմասն'],
        correctIndex: 1,
        explanation:
          "Authoritarian parents say 'Because I said so!' without offering explanations or warmth, which can lead to lower self-esteem in children.",
        explanationKa:
          "ავტორიტარული მშობლები ამბობენ 'იმიტომ რომ მე ასე ვთქვი!' ახსნა-განმარტების ან სითბოს გარეშე, რამაც შეიძლება გამოიწვიოს ბავშვებში დაბალი თვითშეფასება.",
        explanationRu:
          'Авторитарные родители говорят «Потому что я так сказал!» без объяснений или теплоты, что может привести к низкой самооценке у детей.',
        explanationHy:
          'Ավտորիտար ծնողներն ասում են՝ «Որովհետև ես այդպես ասացի»: առանց բացատրություններ կամ ջերմություն առաջարկելու, ինչը կարող է հանգեցնել երեխաների ինքնագնահատականի նվազմանը:',
      },
      {
        id: 'q9_12',
        question: 'What is the correct sequence of prenatal development?',
        questionKa: 'რა არის პრენატალური განვითარების სწორი თანმიმდევრობა?',
        questionRu: 'Какова правильная последовательность пренатального развития?',
        questionHy: 'Ո՞րն է նախածննդյան զարգացման ճիշտ հաջորդականությունը:',
        options: [
          'Fetus, Zygote, Embryo',
          'Embryo, Fetus, Zygote',
          'Zygote, Embryo, Fetus',
          'Embryo, Zygote, Fetus',
        ],
        optionsKa: [
          'ნაყოფი, ზიგოტა, ემბრიონი',
          'ემბრიონი, ნაყოფი, ზიგოტა',
          'ზიგოტა, ემბრიონი, ნაყოფი',
          'ემბრიონი, ზიგოტა, ნაყოფი',
        ],
        optionsRu: [
          'Плод, Зигота, Эмбрион',
          'Эмбрион, Плод, Зигота',
          'Зигота, Эмбрион, Плод',
          'Эмбрион, Зигота, Плод',
        ],
        optionsHy: [
          'Պտուղ, Զիգոտ, Սաղմ',
          'Սաղմ, Պտուղ, Զիգոտ',
          'Զիգոտ, Սաղմ, Պտուղ',
          'Սաղմ, Զիգոտ, Պտուղ',
        ],
        correctIndex: 2,
        explanation:
          'Conception forms a zygote (weeks 1-2), which becomes an embryo (weeks 3-8), and finally a fetus (week 9 to birth).',
        explanationKa:
          'განაყოფიერება ქმნის ზიგოტას (1-2 კვირა), რომელიც ხდება ემბრიონი (3-8 კვირა) და ბოლოს ნაყოფი / ფეტუსი (მე-9 კვირიდან დაბადებამდე).',
        explanationRu:
          'При зачатии образуется зигота (1-2 недели), затем эмбрион (3-8 недель), и, наконец, плод (с 9-й недели до рождения).',
        explanationHy:
          'Բեղմնավորումը ձևավորում է զիգոտ (շաբաթներ 1-2), որը դառնում է սաղմ (շաբաթներ 3-8), և վերջապես պտուղ (շաբաթ 9-ից մինչև ծնունդ):',
      },
      {
        id: 'q9_13',
        question:
          'Chemicals or viruses that can enter the placenta and harm the developing fetus are called:',
        questionKa:
          'ქიმიკატებს ან ვირუსებს, რომლებსაც შეუძლიათ პლაცენტაში შეღწევა და ნაყოფის დაზიანება, ეწოდება:',
        questionRu:
          'Химические вещества или вирусы, которые могут проникать через плаценту и наносить вред плоду, называются:',
        questionHy:
          'Քիմիական նյութերը կամ վիրուսները, որոնք կարող են մտնել պլացենտա և վնասել զարգացող պտղին, կոչվում են.',
        options: ['Zygotes', 'Teratogens', 'Endocrines', 'Neurotransmitters'],
        optionsKa: ['ზიგოტები', 'ტერატოგენები', 'ენდოკრინები', 'ნეიროტრანსმიტერები'],
        optionsRu: ['Зиготы', 'Тератогены', 'Эндокрины', 'Нейротрансмиттеры'],
        optionsHy: ['Զիգոտներ', 'Տերատոգեններ', 'Էնդոկրիններ', 'Նեյրոհաղորդիչներ'],
        correctIndex: 1,
        explanation:
          'Teratogens (like alcohol or rubella) cause birth defects by affecting fetal development.',
        explanationKa:
          'ტერატოგენები (მაგ. ალკოჰოლი გამოსხივება) იწვევენ განვითარების დეფექტებს პრენატალურ პერიოდში.',
        explanationRu:
          'Тератогены (такие как алкоголь или краснуха) вызывают врожденные дефекты, влияя на развитие плода.',
        explanationHy:
          'Տերատոգենները (ինչպես ալկոհոլը կամ կարմրախտը) առաջացնում են բնածին արատներ՝ ազդելով պտղի զարգացման վրա:',
      },
      {
        id: 'q9_14',
        question:
          'What mental process does Piaget describe as incorporating new experiences into existing schemas?',
        questionKa:
          'პიაჟეს აღწერით, რომელ გონებრივ პროცესს ეწოდება ახალი გამოცდილების ჩართვა არსებულ სქემებში (ცოდნაში)?',
        questionRu:
          'Какой мыслительный процесс Пиаже описывает как включение нового опыта в существующие схемы?',
        questionHy:
          'Ի՞նչ մտավոր գործընթաց է նկարագրում Պիաժեն որպես նոր փորձառությունների ընդգրկում առկա սխեմաներում:',
        options: ['Accommodation', 'Assimilation', 'Conservation', 'Habituation'],
        optionsKa: ['აკომოდაცია', 'ასიმილაცია', 'კონსერვაცია', 'ჰაბიტუაცია'],
        optionsRu: ['Аккомодация', 'Ассимиляция', 'Сохранение', 'Привыкание'],
        optionsHy: ['Տեղավորում (Ակոմոդացիա)', 'Ասիմիլյացիա', 'Պահպանում', 'Բնակեցում'],
        correctIndex: 1,
        explanation:
          "Assimilation is fitting new info into what you already know (e.g., calling a horse a 'big dog'). Accommodation is changing the schema.",
        explanationKa:
          "ასიმილაცია არის ახალი ინფორმაციის მორგება იმაზე, რაც უკვე იცი (მაგ. ცხენს ეძახი 'დიდ ძაღლს'). აკომოდაცია არის თავად სქემის შეცვლა.",
        explanationRu:
          'Ассимиляция — это вписывание новой информации в уже известные категории (например, называть лошадь «большой собакой»). Аккомодация — это изменение схемы.',
        explanationHy:
          'Ասիմիլյացիան նոր տեղեկատվության տեղավորումն է ձեր իմացածի մեջ (օրինակ՝ ձիուն «մեծ շուն» անվանելը): Բնակեցումը(Ակոմոդացիան) այս սխեմայի փոփոխությունն է:',
      },
      {
        id: 'q9_15',
        question:
          'According to Erikson, older adults reflect on their lives to feel a sense of satisfaction. He called this conflict:',
        questionKa:
          'ერიკსონის თანახმად, მოხუცები აფასებენ თავიანთ განვლილ ცხოვრებას. ის ამ კონფლიქტს უწოდებდა:',
        questionRu: 'По Эриксону, пожилые люди оценивают свою жизнь. Он назвал этот конфликт:',
        questionHy:
          'Ըստ Էրիկսոնի, մեծահասակները անդրադառնում են իրենց կյանքին, որպեսզի գոհունակություն զգան: Նա այս հակամարտությունը անվանեց.',
        options: [
          'Intimacy vs. Isolation',
          'Autonomy vs. Shame',
          'Integrity vs. Despair',
          'Generativity vs. Stagnation',
        ],
        optionsKa: [
          'ინტიმურობა იზოლაციის წინააღმდეგ',
          'ავტონომია სირცხვილის წინააღმდეგ',
          'მთლიანობა (Integrity) სასოწარკვეთის წინააღმდეგ',
          'გენერაციულობა სტაგნაციის წინააღმდეგ',
        ],
        optionsRu: [
          'Близость против изоляции',
          'Автономия против стыда',
          'Целостность (Integrity) против отчаяния',
          'Генеративность против стагнации',
        ],
        optionsHy: [
          'Մտերմություն ընդդեմ մեկուսացման',
          'Ինքնավարություն ընդդեմ ամոթի',
          'Ամբողջականությունն ընդդեմ հուսահատության',
          'Սերնդականություն ընդդեմ լճացման',
        ],
        correctIndex: 2,
        explanation:
          'Integrity vs. Despair occurs in late adulthood as people look back—those satisfied feel integrity; those with regrets feel despair.',
        explanationKa:
          'მთლიანობა (Integrity) სასოწარკვეთის წინააღმდეგ - ვითარდება გვიან ასაკში; წარმატებული ცხოვრების განცდა იძლევა მთლიანობას.',
        explanationRu:
          'Целостность против отчаяния — возникает в пожилом возрасте; удовлетворенные жизнью чувствуют целостность, сожалеющие - отчаяние.',
        explanationHy:
          'Ամբողջականությունն ընդդեմ հուսահատությանը տեղի է ունենում հասուն տարիքում, երբ մարդիկ ետ են նայում. բավարարվածները զգում են ամբողջականություն, հուսահատներն՝ անզորություն:',
      },
    ],
  },
  {
    id: 'q10',
    chapterId: 10,
    title: 'Motivation and Emotion',
    titleKa: 'მოტივაცია და ემოცია',
    titleRu: 'Мотивация и эмоции',
    titleHy: 'Մոտիվացիա և Զգացմունք',
    questions: [
      {
        id: 'q10_1',
        question: 'What are the three core components of motivation?',
        questionKa: 'რა არის მოტივაციის სამი ძირითადი კომპონენტი?',
        questionRu: 'Каковы три основных компонента мотивации?',
        questionHy: 'Որո՞նք են մոտիվացիայի երեք հիմնական բաղադրիչները:',
        options: [
          'Thinking, Feeling, Acting',
          'Instinct, Drive, Arousal',
          'Activation, Persistence, Intensity',
          'Hunger, Thirst, Sex',
        ],
        optionsKa: [
          'ფიქრი, გრძნობა, მოქმედება',
          'ინსტინქტი, ლტოლვა/დრაივი, აღგზნება',
          'აქტივაცია, მდგრადობა, ინტენსივობა',
          'შიმშილი, წყურვილი, სექსი',
        ],
        optionsRu: [
          'Мышление, Чувство, Действие',
          'Инстинкт, Влечение, Возбуждение',
          'Активация, Настойчивость, Интенсивность',
          'Голод, Жажда, Секс',
        ],
        optionsHy: [
          'Մտածել, զգալ, գործել',
          'Բնազդ, քշել, գրգռվածություն',
          'Ակտիվացում, համառություն, ինտենսիվություն',
          'Քաղց, ծարավ, սեքս',
        ],
        correctIndex: 2,
        explanation:
          'Motivation involves deciding to start (activation), continuing despite obstacles (persistence), and the effort put in (intensity).',
        explanationKa:
          'მოტივაცია გულისხმობს დაწყების გადაწყვეტილებას (აქტივიზაცია), გაგრძელებას დაბრკოლებების მიუხედავად (მდგრადობა) და დახარჯულ ძალისხმევას (ინტენსივობა).',
        explanationRu:
          'Мотивация включает в себя решение начать (активация), продолжение действий несмотря на препятствия (настойчивость) и прилагаемые усилия (интенсивность).',
        explanationHy:
          'Մոտիվացիան ներառում է սկսելու որոշում (ակտիվացում), խոչընդոտների հակառակ շարունակել (համառություն) և ջանք գործադրել (ինտենսիվություն):',
      },
      {
        id: 'q10_2',
        question:
          'Which theory suggests that physiological needs create an aroused state that motivates an organism to satisfy the need?',
        questionKa:
          'რომელი თეორია ვარაუდობს, რომ ფიზიოლოგიური მოთხოვნილებები ქმნის აღგზნებულ მდგომარეობას, რაც ორგანიზმს უბიძგებს დაიკმაყოფილოს ეს მოთხოვნილება?',
        questionRu:
          'Какая теория предполагает, что физиологические потребности создают состояние возбуждения, которое побуждает организм удовлетворить эту потребность?',
        questionHy:
          'Ո՞ր տեսությունն է ենթադրում, որ ֆիզիոլոգիական կարիքները ստեղծում են գրգռված վիճակ, որը դրդում է օրգանիզմին բավարարելու կարիքը:',
        options: [
          'Arousal theory',
          'Drive-reduction theory',
          'Instinct theory',
          'Hierarchy of needs',
        ],
        optionsKa: [
          'აღგზნების თეორია',
          'დისკომფორტის (დრაივის) შემცირების თეორია',
          'ინსტინქტების თეორია',
          'მოთხოვნილებათა იერარქია',
        ],
        optionsRu: [
          'Теория возбуждения',
          'Теория снижения влечения (Drive-reduction theory)',
          'Теория инстинктов',
          'Иерархия потребностей',
        ],
        optionsHy: [
          'Գրգռման տեսություն',
          'Դրդման (Drive-reduction) նվազեցման տեսություն',
          'Բնազդի տեսություն',
          'Կարիքների հիերարխիա',
        ],
        correctIndex: 1,
        explanation:
          'Drive-reduction theory focuses on maintaining homeostasis (internal balance), like eating when hungry.',
        explanationKa:
          'დისკომფორტის (დრაივის) შემცირების თეორია ფოკუსირებულია ჰომეოსტაზის (შინაგანი ბალანსის) შენარჩუნებაზე, მაგალითად, ჭამაზე შიმშილის დროს.',
        explanationRu:
          'Теория снижения влечения фокусируется на поддержании гомеостаза (внутреннего баланса), например, когда мы едим при чувстве голода.',
        explanationHy:
          'Drive-reduction նվազեցման տեսությունը կենտրոնանում է հոմեոստազի (ներքին հավասարակշռության) պահպանման վրա, ինչպես օրինակ սոված ժամանակ ուտելը:',
      },
      {
        id: 'q10_3',
        question: 'What is the lowest, foundational level of Abraham Maslow’s hierarchy of needs?',
        questionKa:
          'რა არის აბრაამ მასლოუს მოთხოვნილებათა იერარქიის ყველაზე დაბალი, ფუნდამენტური დონე?',
        questionRu: 'Каков самый низкий, базовый уровень иерархии потребностей Абрахама Маслоу?',
        questionHy: 'Ո՞րն է Աբրահամ Մասլոուի կարիքների հիերարխիայի ամենացածր, հիմնարար մակարդակը:',
        options: [
          'Safety needs',
          'Belongingness and love',
          'Self-actualization',
          'Physiological needs',
        ],
        optionsKa: [
          'უსაფრთხოების მოთხოვნილებები',
          'მიკუთვნებულობა და სიყვარული',
          'თვითაქტუალიზაცია (თვითრეალიზება)',
          'ფიზიოლოგიური მოთხოვნილებები',
        ],
        optionsRu: [
          'Потребности в безопасности',
          'Принадлежность и любовь',
          'Самоактуализация',
          'Физиологические потребности',
        ],
        optionsHy: [
          'Անվտանգության կարիքներ',
          'Պատկանելություն և սեր',
          'Ինքնաիրացում',
          'Ֆիզիոլոգիական կարիքներ',
        ],
        correctIndex: 3,
        explanation:
          'Physiological needs (food, water, warmth, rest) must be met before higher-level psychological needs.',
        explanationKa:
          'ფიზიოლოგიური მოთხოვნილებები (საკვები, წყალი, სითბო, დასვენება) უნდა დაკმაყოფილდეს, სანამ უფრო მაღალი დონის შინაგან მოთხოვნილებებზე გადავალთ.',
        explanationRu:
          'Физиологические потребности (еда, вода, тепло, отдых) должны быть удовлетворены базово, прежде чем возникнут потребности более высокого уровня.',
        explanationHy:
          'Ֆիզիոլոգիական կարիքները (սնունդ, ջուր, ջերմություն, հանգիստ) պետք է բավարարվեն մինչև ավելի բարձր մակարդակի հոգեբանական կարիքները:',
      },
      {
        id: 'q10_4',
        question:
          'Doing an activity for the pure joy and satisfaction of it, without expecting a reward, is an example of:',
        questionKa:
          'საქმიანობის კეთება სუფთა სიხარულისა და კმაყოფილებისთვის, ჯილდოს მოლოდინის გარეშე, არის შემდეგის მაგალითი:',
        questionRu:
          'Выполнение деятельности ради чистой радости и удовлетворения, без ожидания награды — это пример:',
        questionHy:
          'Մաքուր ուրախության և բավարարվածության համար գործունեություն կատարելը, առանց պարգև սպասելու, որի օրինակ է.',
        options: ['Extrinsic motivation', 'Intrinsic motivation', 'Homeostasis', 'Drive-reduction'],
        optionsKa: [
          'ექსტრინსიკული მოტივაცია (გარეგანი)',
          'ინტრინსიკული მოტივაცია (შინაგანი)',
          'ჰომეოსტაზი',
          'დისკომფორტის შემცირება',
        ],
        optionsRu: ['Внешняя мотивация', 'Внутренняя мотивация', 'Гомеостаз', 'Снижение влечения'],
        optionsHy: [
          'Արտաքին մոտիվացիա',
          'Ներքին մոտիվացիա',
          'Հոմեոստազ',
          'Մղման (drive) նվազեցում',
        ],
        correctIndex: 1,
        explanation:
          'Intrinsic motivation comes from within (personal satisfaction), while extrinsic relies on external rewards.',
        explanationKa:
          'ინტრინსიკული მოტივაცია მოდის შიგნიდან (პირადი დაკმაყოფილება), მაშინ როცა გარეგანი მოტივაცია ეყრდნობა გარე ჯილდოებს.',
        explanationRu:
          'Внутренняя мотивация исходит изнутри (личное удовлетворение), а внешняя полагается на внешние стимулы и награды.',
        explanationHy:
          'Ներքին մոտիվացիան գալիս է ներսից (անձնական բավարարվածություն), մինչդեռ արտաքինը հիմնված է արտաքին պարգևների վրա:',
      },
      {
        id: 'q10_5',
        question: 'According to the James-Lange theory of emotion:',
        questionKa: 'ემოციის ჯეიმს-ლანგეს თეორიის თანახმად:',
        questionRu: 'Согласно теории эмоций Джеймса-Ланге:',
        questionHy: 'Համաձայն Ջեյմս-Լանգեի հույզերի տեսության.',
        options: [
          'We feel emotion first, then our body reacts',
          'Physiological arousal and emotion happen at the exact same time',
          'We interpret the situation cognitively before feeling emotion',
          'We experience physiological arousal first, and that arousal causes the emotion',
        ],
        optionsKa: [
          'ჯერ განვიცდით ემოციას, შემდეგ ჩვენი სხეული რეაგირებს',
          'ფიზიოლოგიური აღგზნება და ემოცია ზუსტად ერთსა და იმავე დროს ხდება',
          'ჩვენ კოგნიტურად ვაფასებთ სიტუაციას ემოციის შეგრძნებამდე',
          'ჯერ განვიცდით ფიზიოლოგიურ აღგზნებას, შემდეგ კი ეს აღგზნება იწვევს ემოციას',
        ],
        optionsRu: [
          'Сначала мы испытываем эмоции, затем наше тело реагирует',
          'Физиологическое возбуждение и эмоция происходят одновременно',
          'Мы когнитивно оцениваем ситуацию до возникновения эмоции',
          'Сначала мы испытываем физиологическое возбуждение, а оно вызывает эмоцию',
        ],
        optionsHy: [
          'Սկզբում մենք զգացմունքներ ենք զգում, հետո մեր մարմինը արձագանքում է',
          'Ֆիզիոլոգիական գրգռվածությունը և զգացմունքները տեղի են ունենում միաժամանակ',
          'Մենք ճանաչողականորեն մեկնաբանում ենք իրավիճակը նախքան զգացմունքներ զգալը',
          'Սկզբում մենք ապրում ենք ֆիզիոլոգիական գրգռվածություն, և այդ գրգռվածությունը առաջացնում է հույզեր',
        ],
        correctIndex: 3,
        explanation:
          'James and Lange argued that our body reacts first (e.g., heart racing), and our awareness of that physical reaction IS the emotion (fear).',
        explanationKa:
          'ჯეიმსის და ლანგეს მტკიცებით, პირველ რიგში ჩვენი სხეული რეაგირებს (მაგ., გულისცემა) და ამ ფიზიკური რეაქციის გაცნობიერება არის ემოცია (შიში).',
        explanationRu:
          'Джеймс и Ланге утверждали, что сначала реагирует наше тело (например, учащается сердцебиение), и наше осознание этой физической реакции ЕСТЬ эмоция (страх).',
        explanationHy:
          'Ջեյմսը և Լանգը պնդում էին, որ մեր մարմինն առաջինն է արձագանքում (օրինակ՝ սրտի բաբախում), և այդ ֆիզիկական ռեակցիայի մեր գիտակցումն Է զգացմունքը (վախ):',
      },
      {
        id: 'q10_6',
        question:
          'Which theory states that physical arousal and emotional experience occur simultaneously?',
        questionKa:
          'რომელი თეორია ამტკიცებს, რომ ფიზიკური აღგზნება და ემოციური გამოცდილება ერთდროულად ხდება?',
        questionRu:
          'Какая теория утверждает, что физическое возбуждение и эмоциональное переживание происходят одновременно?',
        questionHy:
          'Ո՞ր տեսությունն է նշում, որ ֆիզիկական գրգռվածությունը և հուզական փորձը տեղի են ունենում միաժամանակ:',
        options: [
          'James-Lange theory',
          'Cannon-Bard theory',
          'Two-factor theory',
          'Cognitive appraisal theory',
        ],
        optionsKa: [
          'ჯეიმს-ლანგეს თეორია',
          'კენონ-ბარდის თეორია',
          'ორ-ფაქტორიანი თეორია',
          'კოგნიტური შეფასების თეორია',
        ],
        optionsRu: [
          'Теория Джеймса-Ланге',
          'Теория Кэннона-Барда',
          'Двухфакторная теория',
          'Теория когнитивной оценки',
        ],
        optionsHy: [
          'Ջեյմս-Լանգի տեսություն',
          'Քեննոն-Բարդի տեսություն',
          'Երկգործոն (Two-factor) տեսություն',
          'Ճանաչողական գնահատման տեսություն',
        ],
        correctIndex: 1,
        explanation:
          'The Cannon-Bard theory argues the brain routes sensory info to both the cortex (emotion) and nervous system (arousal) at the same time.',
        explanationKa:
          'კენონ-ბარდის თეორია ამტკიცებს, რომ ტვინი სენსორულ ინფორმაციას ერთდროულად აგზავნის ქერქში (ემოცია) და ნერვულ სისტემაში (აღგზნება).',
        explanationRu:
          'Теория Кэннона-Барда утверждает, что мозг направляет сенсорную информацию одновременно и в кору (эмоция), и в нервную систему (возбуждение).',
        explanationHy:
          'Քենոն-Բարդի տեսությունը պնդում է, որ ուղեղը սենսորային տեղեկատվությունը միաժամանակ ուղղում է դեպի կեղև (էմոցիա) և նյարդային համակարգ (գրգռում):',
      },
      {
        id: 'q10_7',
        question:
          "Schachter and Singer's Two-Factor theory of emotion differs from others by emphasizing the importance of:",
        questionKa:
          'შახტერისა და ზინგერის ემოციის ორ-ფაქტორიანი თეორია განსხვავდება სხვებისგან იმით, რომ ის ხაზს უსვამს შემდეგის მნიშვნელობას:',
        questionRu:
          'Двухфакторная теория эмоций Шахтера и Зингера отличается от других тем, что подчеркивает важность:',
        questionHy:
          'Շախտերի և Զինգերի երկգործոն էմոցիայի տեսությունը տարբերվում է մյուսներից՝ շեշտելով դրա կարևորությունը.',
        options: [
          'Genetic inheritance',
          'Cognitive labeling of physiological arousal',
          'Facial expressions',
          'Unconscious drives',
        ],
        optionsKa: [
          'გენეტიკური მემკვიდრეობა',
          'ფიზიოლოგიური აღგზნების კოგნიტური ეტიკეტირება / შეფასება',
          'სახის გამომეტყველებები',
          'არაცნობიერი ლტოლვები',
        ],
        optionsRu: [
          'Генетической наследственности',
          'Когнитивной оценки (навешивания ярлыков) физиологического возбуждения',
          'Выражений лица',
          'Бессознательных влечений',
        ],
        optionsHy: [
          'Գենետիկական ժառանգություն',
          'Ֆիզիոլոգիական գրգռվածության ճանաչողական պիտակավորում',
          'Դեմքի արտահայտություններ',
          'Անգիտակցական մղումներ',
        ],
        correctIndex: 1,
        explanation:
          'They argued that to experience emotion, one must be physically aroused AND cognitively label the arousal based on context.',
        explanationKa:
          'მათი აზრით, ემოციის შესაგრძნობად ადამიანი უნდა იყოს ფიზიკურად აღგზნებული და ამასთანავე, კონტექსტიდან გამომდინარე, კოგნიტურად შეაფასოს (ეტიკეტი მიანიჭოს) ეს აღგზნება.',
        explanationRu:
          'Они утверждали, что для возникновения эмоции человек должен быть физиологически возбужден И когнитивно оценить (назвать) это возбуждение исходя из контекста.',
        explanationHy:
          'Նրանք պնդում էին, որ զգացմունքներ զգալու համար մարդը պետք է ֆիզիկապես գրգռված լինի և ճանաչողականորեն պիտակավորի (label) գրգռվածությունը՝ ելնելով համատեքստից:',
      },
      {
        id: 'q10_8',
        question:
          'Which psychologist is famous for researching the universal recognition of six basic facial expressions?',
        questionKa:
          'რომელი ფსიქოლოგია ცნობილი 6 ძირითადი სახის გამომეტყველების უნივერსალური აღიარების კვლევით?',
        questionRu:
          'Какой психолог известен исследованием универсального распознавания шести основных выражений лица?',
        questionHy:
          'Ո՞ր հոգեբանն է հայտնի դեմքի վեց հիմնական արտահայտությունների համընդհանուր ճանաչման ուսումնասիրությամբ:',
        options: ['Sigmund Freud', 'Abraham Maslow', 'Paul Ekman', 'John B. Watson'],
        optionsKa: ['ზიგმუნდ ფროიდი', 'აბრაამ მასლოუ', 'პოლ ეკმანი', 'ჯონ უოტსონი'],
        optionsRu: ['Зигмунд Фрейд', 'Абрахам Маслоу', 'Поль Экман', 'Джон Б. Уотсон'],
        optionsHy: ['Զիգմունդ Ֆրեյդ', 'Աբրահամ Մասլոու', 'Պոլ Էկման', 'Ջոն Բ. Ուոթսոն'],
        correctIndex: 2,
        explanation:
          "Paul Ekman's cross-cultural research showed happiness, sadness, anger, fear, surprise, and disgust are recognized globally.",
        explanationKa:
          'პოლ ეკმანის კროს-კულტურულმა კვლევამ აჩვენა, რომ ბედნიერება, სევდა, ბრაზი, შიში, გაკვირვება და ზიზღი გლობალურად აღიარებულია.',
        explanationRu:
          'Кросс-культурные исследования Поля Экмана показали, что радость, грусть, гнев, страх, удивление и отвращение распознаются во всем мире.',
        explanationHy:
          'Պոլ Էքմանի միջմշակութային հետազոտությունը ցույց է տվել, որ երջանկությունը, տխրությունը, զայրույթը, վախը, անակնկալը և զզվանքը համաշխարհային ճանաչում ունեն:',
      },
      {
        id: 'q10_9',
        question: "The 'overjustification effect' happens when:",
        questionKa: "როდის ხდება 'ჭარბი გამართლების (overjustification) ეფექტი'?",
        questionRu: 'Когда возникает эффект «избыточного оправдания»?',
        questionHy: '«Ավելորդ արդարացման ազդեցությունը» տեղի է ունենում, երբ.',
        options: [
          'People act completely without reason',
          'Giving an external reward for something a person already enjoys reduces their intrinsic motivation',
          'A person justifies their bad behavior by blaming others',
          'Physiological drives are continuously suppressed',
        ],
        optionsKa: [
          'ადამიანები სრულიად უმიზეზოდ მოქმედებენ',
          'ადამიანს აჯილდოვებ იმისთვის, რაც ისედაც სიამოვნებს და ეს ამცირებს მის შინაგან მოტივაციას',
          'ადამიანი ამართლებს თავის ცუდ საქციელს სხვების დადანაშაულებით',
          'ფიზიოლოგიური დრაივები მუდმივად ითრგუნება',
        ],
        optionsRu: [
          'Люди действуют совершенно без причины',
          'Внешняя награда за то, что человеку и так нравится, снижает его внутреннюю мотивацию',
          'Человек оправдывает свое плохое поведение, обвиняя других',
          'Физиологические драйвы постоянно подавляются',
        ],
        optionsHy: [
          'Մարդիկ գործում են ամբողջովին առանց պատճառի',
          'Արտաքին պարգև տալը մի բանի համար, որն արդեն հաճելի է մարդուն, նվազեցնում է նրա ներքին մոտիվացիան:',
          'Մարդն արդարացնում է իր վատ պահվածքը՝ մեղադրելով ուրիշներին',
          'Ֆիզիոլոգիական դրդապատճառները (drive-երը) անընդհատ զսպվում են',
        ],
        correctIndex: 1,
        explanation:
          'If you pay a child to draw (when they already love drawing), they may stop wanting to draw unless they are paid.',
        explanationKa:
          'თუ ბავშვს უხდით ხატვისთვის (როცა მას ისედაც უყვარს ხატვა), შეიძლება დაკარგოს ხატვის სურვილი, თუ აღარ გადაუხდით.',
        explanationRu:
          'Если вы платите ребенку за рисование (которое он и так любит), он может потерять желание рисовать, если ему перестанут платить.',
        explanationHy:
          'Եթե երեխային վճարեք նկարելու համար (երբ նա արդեն սիրում է նկարել), նա կարող է այլևս չցանկանալ նկարել, քանի դեռ նրանց չեն վճարել:',
      },
      {
        id: 'q10_10',
        question: 'Which of these is Daniel Goleman associated with?',
        questionKa: 'ჩამოთვლილთაგან რომელთან არის დაკავშირებული დანიელ გოულმანი?',
        questionRu: 'С чем из перечисленного связан Дэниел Гоулман?',
        questionHy: 'Դրանցից ո՞ր մեկի հետ է կապված Դանիել Գոուլմանը:',
        options: [
          'Drive-reduction theory',
          'The Hierarchy of Needs',
          'The concept of Emotional Intelligence (EQ)',
          'Discovering basic facial expressions',
        ],
        optionsKa: [
          'დისკომფორტის შემცირების თეორიასთან',
          'მოთხოვნილებათა იერარქიასთან',
          'ემოციური ინტელექტის (EQ) კონცეფციასთან',
          'ძირითადი სახის გამომეტყველების აღმოჩენასთან',
        ],
        optionsRu: [
          'Теорией снижения влечения',
          'Иерархией потребностей',
          'Концепцией эмоционального интеллекта (EQ)',
          'Открытием базовых выражений лица',
        ],
        optionsHy: [
          'Drive-reduction տեսություն',
          'Կարիքների հիերարխիա',
          'Էմոցիոնալ ինտելեկտի (EQ) հայեցակարգը',
          'Դեմքի հիմնական արտահայտությունների բացահայտում',
        ],
        correctIndex: 2,
        explanation:
          'Daniel Goleman popularized Emotional Intelligence, highlighting that managing emotions is often as important as IQ.',
        explanationKa:
          'დანიელ გოულმანმა პოპულარული გახადა ემოციური ინტელექტი, მან მიანიშნა, რომ ემოციების მართვა ხშირად ისეთივე მნიშვნელოვანია, როგორც IQ.',
        explanationRu:
          'Дэниел Гоулман популяризировал Эмоциональный Интеллект, подчеркивая, что управление эмоциями часто так же важно, как и IQ.',
        explanationHy:
          'Դանիել Գոուլմանը հանրաճանաչ դարձրեց Էմոցիոնալ Ինտելեկտը՝ ընդգծելով, որ էմոցիաների կառավարումը հաճախ նույնքան կարևոր է, որքան IQ-ն:',
      },
      {
        id: 'q10_11',
        question:
          'If men crossing a scary bridge mistakenly attribute their racing hearts to finding a researcher attractive, this demonstrates:',
        questionKa:
          'თუ შიშისმომგვრელ ხიდზე გადასვლისას კაცები აჩქარებულ გულისცემას მკვლევარის მიმზიდველობას მიაწერენ, რას მიანიშნებს ეს?',
        questionRu:
          'Если мужчины, переходя страшный мост, ошибочно приписывают учащенное сердцебиение привлекательности исследовательницы, это демонстрирует:',
        questionHy:
          'Եթե վախենալու կամրջով անցնող տղամարդիկ իրենց անհանգստացնող սրտերը սխալմամբ վերագրում են հետազոտողին գրավիչ գտնելուն, դա ցույց է տալիս.',
        options: [
          'Apathy',
          'Optimal arousal theory',
          'Misattribution of arousal',
          'Intrinsic motivation',
        ],
        optionsKa: [
          'აპათიას',
          'ოპტიმალური აღგზნების თეორიას',
          'აღგზნების არასწორ ატრიბუციას',
          'შინაგან მოტივაციას',
        ],
        optionsRu: [
          'Апатию',
          'Теорию оптимального возбуждения',
          'Неверную атрибуцию возбуждения',
          'Внутреннюю мотивацию',
        ],
        optionsHy: [
          'Անտարբերություն',
          'Օպտիմալ գրգռման տեսություն',
          'Գրգռվածության սխալ վերագրում',
          'Ներքին մոտիվացիա',
        ],
        correctIndex: 2,
        explanation:
          'This classic study shows we can misinterpret physiological arousal from one source (fear) as coming from another (attraction).',
        explanationKa:
          'ეს კლასიკური კვლევა გვიჩვენებს, რომ ჩვენ შეგვიძლია ერთ-ერთი წყაროდან (შიშისგან) გამოწვეული ფიზიოლოგიური აღგზნება არასწორად მივიჩნიოთ მეორედან (მიზიდულობა).',
        explanationRu:
          'Это классическое исследование показывает, что мы можем ошибочно истолковать физиологическое возбуждение от одного источника (страх) как результат другого (влечение).',
        explanationHy:
          'Այս դասական ուսումնասիրությունը ցույց է տալիս, որ մենք կարող ենք սխալ մեկնաբանել ֆիզիոլոգիական գրգռվածությունը մի աղբյուրից (վախ) որպես մեկ այլ (գրավչություն) աղբյուր:',
      },
      {
        id: 'q10_12',
        question:
          'Which brain structure is most centrally involved in processing emotions like fear and anger?',
        questionKa:
          'რომელი ტვინის სტრუქტურა არის ყველაზე მეტად ჩართული ისეთი ემოციების გადამუშავებაში, როგორიცაა შიში და ბრაზი?',
        questionRu:
          'Какая структура мозга играет центральную роль в обработке таких эмоций, как страх и гнев?',
        questionHy:
          'Ուղեղի ո՞ր կառուցվածքն է առավել կենտրոնացված վախի և զայրույթի նման հույզերի մշակման գործում:',
        options: ['Hippocampus', 'Amygdala', 'Cerebellum', 'Pons'],
        optionsKa: ['ჰიპოკამპუსი', 'ამიგდალა', 'ნათხემი (Cerebellum)', 'ხიდი (Pons)'],
        optionsRu: [
          'Гиппокамп',
          'Миндалина (Амигдала)',
          'Мозжечок (Cerebellum)',
          'Варолиев мост (Pons)',
        ],
        optionsHy: ['Հիպոկամպուս', 'Ամիգդալա', 'Ուղեղիկ', 'Պոնս'],
        correctIndex: 1,
        explanation:
          'The amygdala acts as an emotional threat center, instantly evaluating situations for danger.',
        explanationKa:
          'ამიგდალა მოქმედებს როგორც ემოციური საფრთხის ცენტრი და მყისიერად აფასებს სიტუაციას საშიშროებაზე.',
        explanationRu:
          'Миндалина действует как эмоциональный центр оценки угроз, мгновенно проверяя ситуацию на наличие опасности.',
        explanationHy:
          'Ամիգդալան հանդես է գալիս որպես զգացմունքային սպառնալիքի կենտրոն՝ ակնթարթորեն գնահատելով իրավիճակները վտանգի համար:',
      },
      {
        id: 'q10_13',
        question: "What is 'homeostasis'?",
        questionKa: "რა არის 'ჰომეოსტაზი'?",
        questionRu: "Что такое 'гомеостаз'?",
        questionHy: 'Ի՞նչ է «հոմեոստազը»:',
        options: [
          'The tendency to seek high-adrenaline activities',
          "The body's tendency to maintain a balanced internal state",
          'The loss of intrinsic motivation',
          'An intense fear of being alone',
        ],
        optionsKa: [
          'მაღალი ადრენალინის მქონე აქტივობების ძიების ტენდენცია',
          'სხეულის ტენდენცია, შეინარჩუნოს დაბალანსებული შინაგანი მდგომარეობა',
          'შინაგან მოტივაციის დაკარგვა',
          'მარტოყოფნის ინტენსიური შიში',
        ],
        optionsRu: [
          'Склонность к поиску высокоадреналиновых активностей',
          'Стремление организма поддерживать сбалансированное внутреннее состояние',
          'Потеря внутренней мотивации',
          'Сильный страх одиночества',
        ],
        optionsHy: [
          'Ադրենալինի բարձր պարունակությամբ գործունեություն փնտրելու միտումը',
          'Մարմնի հակումը՝ պահպանելու հավասարակշռված ներքին վիճակը',
          'Ներքին մոտիվացիայի կորուստ',
          'Մենակ մնալու ուժեղ վախ',
        ],
        correctIndex: 1,
        explanation:
          'Homeostasis is biological regulation—like shivering to stay warm or sweating to cool down.',
        explanationKa:
          'ჰომეოსტაზი არის ბიოლოგიური რეგულირება - მაგალითად, კანკალი სითბოს შესანარჩუნებლად ან ოფლიანობა გასაგრილებლად.',
        explanationRu:
          'Гомеостаз — это биологическая регуляция, например, дрожь для согревания или потоотделение для охлаждения.',
        explanationHy:
          'Հոմեոստազը կենսաբանական կանոնակարգ է, օրինակ՝ դողալ՝ տաք մնալու համար կամ քրտնել սառչելու համար:',
      },
      {
        id: 'q10_14',
        question: 'Pursuing challenging tasks purely for the sense of accomplishment shows high:',
        questionKa: 'რთული ამოცანების შესრულება მხოლოდ მიღწევის განცდისთვის, აჩვენებს მაღალ:',
        questionRu:
          'Стремление выполнять сложные задачи ради чувства достижения демонстрирует высокую:',
        questionHy:
          'Զուտ կատարման զգացողության համար դժվար առաջադրանքներ հետապնդելը ցույց է տալիս բարձր.',
        options: [
          'Achievement motivation',
          'Extrinsic motivation',
          'Safety needs',
          'Optimal arousal',
        ],
        optionsKa: [
          'მისწრაფების/მიღწევის მოტივაციას (Achievement motivation)',
          'ექსტრინსიკულ მოტივაციას',
          'უსაფრთხოების მოთხოვნილებას',
          'ოპტიმალურ აღგზნებას',
        ],
        optionsRu: [
          'Мотивацию достижения',
          'Внешнюю мотивацию',
          'Потребность в безопасности',
          'Оптимальное возбуждение',
        ],
        optionsHy: [
          'Նվաճումների մոտիվացիա',
          'Արտաքին մոտիվացիա',
          'Անվտանգության կարիքներ',
          'Օպտիմալ գրգռվածություն',
        ],
        correctIndex: 0,
        explanation:
          'Those with high achievement motivation desire significant accomplishment, mastery of skills, and high standards.',
        explanationKa:
          'მიღწევის  მაღალი მოტივაციის მქონე ადამიანებს სურთ მნიშვნელოვანი შედეგი, უნარების დაუფლება და მაღალი სტანდარტები.',
        explanationRu:
          'Люди с высокой мотивацией достижения стремятся к значительным результатам, мастерству и высоким стандартам.',
        explanationHy:
          'Նրանք, ովքեր ունեն բարձր նվաճումների մոտիվացիա, ցանկանում են զգալի ձեռքբերումներ, հմտությունների տիրապետում և բարձր չափանիշներ:',
      },
      {
        id: 'q10_15',
        question:
          'Which principle states that performance increases with arousal up to a point, after which it decreases?',
        questionKa:
          'რომელი პრინციპი ამტკიცებს, რომ აღგზნებასთან ერთად პერფორმანსი (შესრულება) იზრდება გარკვეულ წერტილამდე, რის შემდეგაც ის მცირდება?',
        questionRu:
          'Какой принцип гласит, что производительность растет вместе с возбуждением до определенного момента, после чего снижается?',
        questionHy:
          'Ո՞ր սկզբունքն է նշում, որ արդյունավետությունը մեծանում է գրգռվածության հետ մինչև որոշակի կետ, որից հետո այն նվազում է:',
        options: [
          "Maslow's Law",
          'Drive-reduction rule',
          'Yerkes-Dodson Law',
          "Cannon's Principle",
        ],
        optionsKa: [
          'მასლოუს კანონი',
          'დრაივის შემცირების წესი',
          'იერკს-დოდსონის კანონი',
          'კენონის პრინციპი',
        ],
        optionsRu: [
          'Закон Маслоу',
          'Правило снижения влечения',
          'Закон Йеркса-Додсона',
          'Принцип Кэннона',
        ],
        optionsHy: [
          'Մասլոուի օրենք',
          'Drive-reduction նվազեցման կանոն',
          'Յերկես-Դոդսոնի (Yerkes-Dodson) օրենքը',
          'Քենոնի սկզբունքը',
        ],
        correctIndex: 2,
        explanation:
          'The Yerkes-Dodson law implies a moderate level of stress/arousal is optimal; too little causes apathy, too much causes anxiety.',
        explanationKa:
          'იერკს-დოდსონის კანონის მიხედვით, სტრესის/აღგზნების ზომიერი დონე ოპტიმალურია; ძალიან დაბალი იწვევს აპათიას, ძალიან მაღალი - შფოთვას.',
        explanationRu:
          'Закон Йеркса-Додсона подразумевает, что умеренный уровень стресса/возбуждения оптимален; слишком низкий вызывает апатию, слишком высокий — тревогу.',
        explanationHy:
          'Յերկես-Դոդսոնի օրենքը ենթադրում է, որ սթրեսի/գրգռվածության չափավոր մակարդակը օպտիմալ է. շատ քիչը առաջացնում է ապատիա, չափազանց շատն առաջացնում է անհանգստություն:',
      },
    ],
  },
  {
    id: 'q11',
    chapterId: 11,
    title: 'Personality',
    titleKa: 'პიროვნება',
    titleRu: 'Личность',
    titleHy: 'Անհատականություն',
    questions: [
      {
        id: 'q11_1',
        question:
          "According to Freud's psychoanalytic theory, which part of the personality operates on the 'pleasure principle'?",
        questionKa:
          "ფროიდის ფსიქოანალიტიკური თეორიის თანახმად, პიროვნების რომელი ნაწილი მოქმედებს 'სიამოვნების პრინციპით'?",
        questionRu:
          'Согласно психоаналитической теории Фрейда, какая часть личности действует по «принципу удовольствия»?',
        questionHy:
          'Ըստ Ֆրեյդի հոգեվերլուծական տեսության՝ անհատականության ո՞ր մասն է գործում «հաճույքի սկզբունքով»:',
        options: ['Ego', 'Superego', 'Id', 'Conscious'],
        optionsKa: ['ეგო', 'სუპერეგო', 'იდი (Id)', 'ცნობიერი'],
        optionsRu: ['Эго', 'Супер-эго', 'Ид (Оно)', 'Сознание'],
        optionsHy: ['Էգո', 'Գերէգո', 'Իդ (Id)', 'Գիտակցություն'],
        correctIndex: 2,
        explanation:
          'The Id is the unconscious, primal part of personality that demands immediate gratification of basic drives.',
        explanationKa:
          'იდი არის პიროვნების არაცნობიერი, პირველყოფილი ნაწილი, რომელიც მოითხოვს ძირითადი ლტოლვების მყისიერ დაკმაყოფილებას.',
        explanationRu:
          'Ид — это бессознательная, первобытная часть личности, требующая немедленного удовлетворения базовых инстинктов.',
        explanationHy:
          'Իդը անհատականության անգիտակցական, առաջնային մղումների մասն է, որը պահանջում է հիմնական դրդապատճառների անհապաղ բավարարում:',
      },
      {
        id: 'q11_2',
        question:
          "Which personality structure did Freud describe as the 'executive' mediator that operates on the reality principle?",
        questionKa:
          "ფროიდის აღწერით, პიროვნების რომელი სტრუქტურაა 'აღმასრულებელი' მედიატორი, რომელიც მოქმედებს რეალობის პრინციპით?",
        questionRu:
          'Какую структуру личности Фрейд описал как «исполнительного» посредника, действующего по принципу реальности?',
        questionHy:
          'Անհատականության ո՞ր կառույցն է Ֆրեյդը նկարագրել որպես «գործադիր» միջնորդ, որը գործում է իրականության սկզբունքով:',
        options: ['Id', 'Ego', 'Superego', 'Preconscious'],
        optionsKa: ['იდი', 'ეგო', 'სუპერეგო', 'წინარეცნობიერი'],
        optionsRu: ['Ид', 'Эго', 'Супер-эго', 'Предсознание'],
        optionsHy: ['Իդ', 'Էգո', 'Գերէգո', 'Նախագիտակցություն'],
        correctIndex: 1,
        explanation:
          'The Ego balances the demands of the Id, the morals of the Superego, and reality.',
        explanationKa: 'ეგო აბალანსებს იდის მოთხოვნებს, სუპერეგოს მორალსა და რეალობას.',
        explanationRu: 'Эго балансирует между требованиями Ид, моралью Супер-эго и реальностью.',
        explanationHy:
          'Էգոն հավասարակշռում է Իդի պահանջները, Գերէգոյի բարոյականությունը և իրականությունը:',
      },
      {
        id: 'q11_3',
        question:
          'A person who is angry at their boss but yells at their spouse instead is demonstrating which defense mechanism?',
        questionKa:
          'ადამიანი, რომელიც გაბრაზებულია თავის უფროსზე, მაგრამ ამის ნაცვლად საკუთარ მეუღლეს უყვირის, ავლენს დაცვის რომელ მექანიზმს?',
        questionRu:
          'Человек, который злится на начальника, но вместо этого кричит на супругу, демонстрирует какой защитный механизм?',
        questionHy:
          'Ի՞նչ պաշտպանական մեխանիզմ է դրսևորում մարդը, ով բարկանում է իր ղեկավարի վրա, բայց փոխարենը բղավում է կնոջ վրա։',
        options: ['Projection', 'Repression', 'Displacement', 'Rationalization'],
        optionsKa: [
          'პროექცია',
          'რეპრესია (განდევნა)',
          'ჩანაცვლება (Displacement)',
          'რაციონალიზაცია',
        ],
        optionsRu: ['Проекция', 'Вытеснение', 'Замещение (Смещение)', 'Рационализация'],
        optionsHy: ['Պրոյեկցիա', 'Ճնշում', 'Տեղաշարժում (Displacement)', 'Ռացիոնալիզացիա'],
        correctIndex: 2,
        explanation:
          'Displacement redirects aggressive or sexual impulses toward a more acceptable or less threatening target.',
        explanationKa:
          'ჩანაცვლება მიმართავს აგრესიულ ან სექსუალურ იმპულსებს უფრო მისაღები ან ნაკლებად საშიში სამიზნისკენ.',
        explanationRu:
          'Замещение перенаправляет агрессивные или сексуальные импульсы на более приемлемую или менее угрожающую цель.',
        explanationHy:
          'Տեղաշարժումը վերաուղղորդում է ագրեսիվ կամ սեռական ազդակները դեպի ավելի ընդունելի կամ պակաս սպառնացող թիրախ:',
      },
      {
        id: 'q11_4',
        question:
          'Carl Jung proposed that humanity shares a shared reservoir of memory traces, which he called the:',
        questionKa:
          'კარლ იუნგმა ივარაუდა, რომ კაცობრიობა იზიარებს მეხსიერების კვალის ერთიან რეზერვუარს, რომელსაც მან უწოდა:',
        questionRu:
          'Карл Юнг предположил, что человечество обладает общим резервуаром следов памяти, который он назвал:',
        questionHy:
          'Կարլ Յունգն առաջարկել է, որ մարդկությունն ունի հիշողության հետքերի ընդհանուր պահեստ, որը նա անվանել է.',
        options: [
          'Personal unconscious',
          'Collective unconscious',
          'Inferiority complex',
          'Archetype system',
        ],
        optionsKa: [
          'პირადი არაცნობიერი',
          'კოლექტიური არაცნობიერი',
          'არასრულფასოვნების კომპლექსი',
          'არქეტიპების სისტემა',
        ],
        optionsRu: [
          'Личное бессознательное',
          'Коллективное бессознательное',
          'Комплекс неполноценности',
          'Система архетипов',
        ],
        optionsHy: [
          'Անձնական անգիտակցական',
          'Կոլեկտիվ անգիտակցական',
          'Թերարժեքության բարդույթ',
          'Արխետիպային համակարգ',
        ],
        correctIndex: 1,
        explanation:
          "Jung's collective unconscious contains archetypes—universal symbols and templates shared by all cultures.",
        explanationKa:
          'იუნგის კოლექტიური არაცნობიერი შეიცავს არქეტიპებს - ყველა კულტურისთვის საზიარო უნივერსალურ სიმბოლოებსა და შაბლონებს.',
        explanationRu:
          'Коллективное бессознательное Юнга содержит архетипы — универсальные символы и шаблоны, общие для всех культур.',
        explanationHy:
          'Յունգի կոլեկտիվ անգիտակցականը պարունակում է արխետիպեր՝ ունիվերսալ խորհրդանիշներ և ձևանմուշներ, որոնք կիսում են բոլոր մշակույթները:',
      },
      {
        id: 'q11_5',
        question: "Which Neo-Freudian placed the strongest emphasis on the 'inferiority complex'?",
        questionKa:
          "რომელმა ნეო-ფროიდიანელმა გააკეთა ყველაზე ძლიერი აქცენტი 'არასრულფასოვნების კომპლექსზე'?",
        questionRu: "Кто из неофрейдистов делал наибольший акцент на 'комплексе неполноценности'?",
        questionHy: 'Ո՞ր նեոֆրեյդականն է ամենաուժեղ շեշտը դրել «թերարժեքության բարդույթի» վրա:',
        options: ['Carl Jung', 'Karen Horney', 'Alfred Adler', 'Erik Erikson'],
        optionsKa: ['კარლ იუნგი', 'კარენ ჰორნი', 'ალფრედ ადლერი', 'ერიკ ერიკსონი'],
        optionsRu: ['Карл Юнг', 'Карен Хорни', 'Альфред Адлер', 'Эрик Эриксон'],
        optionsHy: ['Կարլ Յունգ', 'Կարեն Հորնի', 'Ալֆրեդ Ադլեր', 'Էրիկ Էրիկսոն'],
        correctIndex: 2,
        explanation:
          'Adler believed much of our behavior is driven by efforts to overcome childhood feelings of inferiority.',
        explanationKa:
          'ადლერს სჯეროდა, რომ ჩვენი ქცევის დიდი ნაწილი განპირობებულია ბავშვობის არასრულფასოვნების გრძნობის დაძლევის მცდელობებით.',
        explanationRu:
          'Адлер считал, что большая часть нашего поведения обусловлена попытками преодолеть детское чувство неполноценности.',
        explanationHy:
          'Ադլերը կարծում էր, որ մեր վարքագծի մեծ մասը պայմանավորված է մանկության թերարժեքության զգացումը հաղթահարելու ջանքերով:',
      },
      {
        id: 'q11_6',
        question:
          'Humanistic psychologist Carl Rogers believed that growth and fulfillment require three conditions: genuineness, empathy, and:',
        questionKa:
          'ჰუმანისტ ფსიქოლოგ კარლ როჯერსს სჯეროდა, რომ ზრდისა და განვითარებისთვის საჭიროა სამი პირობა: გულწრფელობა, ემპათია და:',
        questionRu:
          'Гуманистический психолог Карл Роджерс считал, что для роста и самореализации необходимы три условия: искренность, эмпатия и:',
        questionHy:
          'Հումանիստ հոգեբան Կառլ Ռոջերսը կարծում էր, որ աճի և կատարման համար անհրաժեշտ է երեք պայման՝ անկեղծություն, կարեկցանք և.',
        options: [
          'Strict discipline',
          'Unconditional positive regard',
          'Extrinsic motivation',
          'Sublimation',
        ],
        optionsKa: [
          'მკაცრი დისციპლინა',
          'უპირობო პოზიტიური დამოკიდებულება',
          'გარეგანი მოტივაცია',
          'სუბლიმაცია',
        ],
        optionsRu: [
          'Строгая дисциплина',
          'Безусловное позитивное отношение',
          'Внешняя мотивация',
          'Сублимация',
        ],
        optionsHy: [
          'Խիստ կարգապահություն',
          'Անվերապահ դրական վերաբերմունք',
          'Արտաքին մոտիվացիա',
          'Սուբլիմացիա',
        ],
        correctIndex: 1,
        explanation:
          'Unconditional positive regard means totally accepting and supporting someone, regardless of their flaws.',
        explanationKa:
          'უპირობო პოზიტიური დამოკიდებულება ნიშნავს ადამიანის სრულად მიღებას და მხარდაჭერას, მისი ნაკლოვანებების მიუხედავად.',
        explanationRu:
          'Безусловное позитивное отношение означает полное принятие и поддержку человека, независимо от его недостатков.',
        explanationHy:
          'Անվերապահ դրական վերաբերմունք նշանակում է ամբողջությամբ ընդունել և աջակցել մեկին՝ անկախ նրա թերություններից:',
      },
      {
        id: 'q11_7',
        question: "In the Big Five personality model (OCEAN), what does the 'O' stand for?",
        questionKa: "პიროვნების დიდი ხუთეულის მოდელში (OCEAN), რას ნიშნავს 'O'?",
        questionRu: "Что означает буква 'O' в модели личности «Большая пятерка» (OCEAN)?",
        questionHy: 'Մեծ հնգյակի անհատականության մոդելում (OCEAN) ի՞նչ է նշանակում «O»:',
        options: ['Optimism', 'Openness to experience', 'Outgoingness', 'Organization'],
        optionsKa: [
          'ოპტიმიზმი',
          'ღიაობა გამოცდილების მიმართ',
          'კომუნიკაბელურობა (Outgoingness)',
          'ორგანიზებულობა',
        ],
        optionsRu: ['Оптимизм', 'Открытость опыту', 'Общительность', 'Организованность'],
        optionsHy: [
          'Լավատեսություն',
          'Բաց լինել փորձի համար',
          'Շփվողականություն (Outgoingness)',
          'Կազմակերպություն',
        ],
        correctIndex: 1,
        explanation:
          'Openness involves imagination, curiosity, and a preference for variety over routine.',
        explanationKa:
          'ღიაობა (Openness) მოიცავს ფანტაზიას, ცნობისმოყვარეობას და რუტინისთვის მრავალფეროვნების უპირატესობის მინიჭებას.',
        explanationRu:
          'Открытость (Openness) включает воображение, любопытство и предпочтение разнообразия рутине.',
        explanationHy:
          'Բացությունը ենթադրում է երևակայություն, հետաքրքրասիրություն և նախընտրում բազմազանություն, քան առօրյան:',
      },
      {
        id: 'q11_8',
        question:
          'Which Big Five trait is characterized by high levels of anxiety, insecurity, and emotional instability?',
        questionKa:
          'დიდი ხუთეულის რომელი თვისება ხასიათდება შფოთვის, დაუცველობისა და ემოციური არასტაბილურობის მაღალი დონით?',
        questionRu:
          'Какая черта «Большой пятерки» характеризуется высоким уровнем тревожности, неуверенности и эмоциональной нестабильностью?',
        questionHy:
          'Մեծ հնգյակի ո՞ր գիծն է բնութագրվում անհանգստության բարձր մակարդակով, անապահովությամբ և հուզական անկայունությամբ:',
        options: ['Extraversion', 'Agreeableness', 'Conscientiousness', 'Neuroticism'],
        optionsKa: ['ექსტრავერსია', 'კეთილგანწყობა', 'კეთილსინდისიერება', 'ნეიროტიზმი'],
        optionsRu: ['Экстраверсия', 'Доброжелательность', 'Добросовестность', 'Нейротизм'],
        optionsHy: ['Էքստրավերսիա', 'Համաձայնություն', 'Բարեխղճություն', 'Նևրոտիկություն'],
        correctIndex: 3,
        explanation:
          "Neuroticism measures a person's tendency to experience negative emotions like anger or impulsivity.",
        explanationKa:
          'ნეიროტიზმი ზომავს პიროვნების ტენდენციას, განიცადოს უარყოფითი ემოციები, როგორიცაა სიბრაზე ან იმპულსურობა.',
        explanationRu:
          'Нейротизм измеряет склонность человека испытывать негативные эмоции, такие как гнев или импульсивность.',
        explanationHy:
          'Նևրոտիկությունը չափում է մարդու հակումը բացասական էմոցիաներ ապրելու համար՝ ինչպիսիք են բարկությունը կամ իմպուլսիվությունը:',
      },
      {
        id: 'q11_9',
        question: 'A highly careful, organized, and disciplined person scores high in:',
        questionKa: 'ძალიან ფრთხილი, ორგანიზებული და დისციპლინირებული ადამიანი მაღალ ქულას იღებს:',
        questionRu:
          'Очень осторожный, организованный и дисциплинированный человек получает высокие баллы по:',
        questionHy:
          'Չափազանց զգույշ, կազմակերպված և կարգապահ մարդը բարձր գնահատական ​​է տալիս խմբերում.',
        options: ['Openness', 'Extraversion', 'Conscientiousness', 'Agreeableness'],
        optionsKa: [
          'ღიაობაში',
          'ექსტრავერსიაში',
          'კეთილსინდისიერებაში (Conscientiousness)',
          'კეთილგანწყობაში',
        ],
        optionsRu: [
          'Открытость',
          'Экстраверсия',
          'Добросовестность (Conscientiousness)',
          'Доброжелательность',
        ],
        optionsHy: ['Բաց լինելուն', 'էքստրավերտությանը', 'Բարեխղճությանը', 'Համաձայնությանը'],
        correctIndex: 2,
        explanation:
          'Conscientiousness is the trait associated with self-discipline, planning, and goal-directed behavior.',
        explanationKa:
          'კეთილსინდისიერება არის თვისება, რომელიც დაკავშირებულია თვითდისციპლინასთან, დაგეგმვასა და მიზანზე ორიენტირებულ ქცევასთან.',
        explanationRu:
          'Добросовестность — это черта, связанная с самодисциплиной, планированием и целенаправленным поведением.',
        explanationHy:
          'Բարեխղճությունն այն հատկությունն է, որը կապված է ինքնակարգապահության, պլանավորման և նպատակաուղղված վարքագծի հետ:',
      },
      {
        id: 'q11_10',
        question:
          'Which personality test uses a series of ambiguous inkblots to reveal unconscious desires and conflicts?',
        questionKa:
          'რომელი პიროვნების ტესტი იყენებს ორაზროვან მელნის ლაქებს არაცნობიერი სურვილებისა და კონფლიქტების გამოსავლენად?',
        questionRu:
          'Какой личностный тест использует серии неоднозначных чернильных пятен для выявления бессознательных желаний и конфликтов?',
        questionHy:
          'Ի՞նչ անհատականության թեստ է օգտագործում երկիմաստ թանաքաբծերի մի շարք անգիտակցական ցանկություններն ու հակամարտությունները բացահայտելու համար:',
        options: ['MMPI', 'The Rorschach Test', 'TAT (Thematic Apperception Test)', 'NEO-PI-R'],
        optionsKa: ['MMPI', 'რორშახის ტესტი', 'TAT (თემატური აპერცეპციის ტესტი)', 'NEO-PI-R'],
        optionsRu: ['MMPI', 'Тест Роршаха', 'ТАТ (Тематический апперцептивный тест)', 'NEO-PI-R'],
        optionsHy: ['MMPI', 'Ռորշախի թեստ', 'TAT (Թեմատիկ ընկալման թեստ)', 'NEO-PI-R'],
        correctIndex: 1,
        explanation:
          'The Rorschach test is a projective test where subjects interpret inkblots, supposedly projecting their inner feelings.',
        explanationKa:
          'რორშახის ტესტი არის პროექციული ტესტი, სადაც სუბიექტები განმარტავენ მელნის ლაქებს, სავარაუდოდ აპროექტებენ თავიანთ შინაგან გრძნობებს.',
        explanationRu:
          'Тест Роршаха — это проективный тест, в котором испытуемые интерпретируют чернильные пятна, проецируя свои внутренние чувства.',
        explanationHy:
          'Ռորշախի թեստը պրոյեկտիվ թեստ է, որտեղ սուբյեկտները մեկնաբանում են թանաքաբծերը՝ ենթադրաբար նախագծելով իրենց ներքին զգացմունքները:',
      },
      {
        id: 'q11_11',
        question:
          'What is the most widely researched and clinically used objective personality inventory?',
        questionKa:
          'პიროვნების რომელი ობიექტური კითხვარია ყველაზე ფართოდ გამოკვლეული და კლინიკურად გამოყენებული?',
        questionRu:
          'Какой объективный опросник личности является наиболее широко исследованным и клинически используемым?',
        questionHy:
          'Ո՞րն է անհատականության ամենալայն ուսումնասիրված և կլինիկական օգտագործվող օբյեկտիվ գույքագրումը:',
        options: [
          'Myers-Briggs Type Indicator (MBTI)',
          'Thematic Apperception Test (TAT)',
          'Minnesota Multiphasic Personality Inventory (MMPI)',
          'Rorschach Inkblot Test',
        ],
        optionsKa: [
          'მაიერს-ბრიგსის ტიპის ინდიკატორი (MBTI)',
          'თემატური აპერცეპციის ტესტი (TAT)',
          'მინესოტას მრავალფაზიანი პიროვნების კითხვარი (MMPI)',
          'რორშახის მელნის ლაქების ტესტი',
        ],
        optionsRu: [
          'Индикатор типов Майерс-Бриггс (MBTI)',
          'Тематический апперцептивный тест (ТАТ)',
          'Миннесотский многоаспектный личностный опросник (MMPI)',
          'Тест чернильных пятен Роршаха',
        ],
        optionsHy: [
          'Մայերս-Բրիգսի տեսակի ցուցիչ (MBTI)',
          'Թեմատիկ ընկալման թեստ (TAT)',
          'Մինեսոտայի բազմաֆազ անհատականության գույքագրում (MMPI)',
          'Ռորշախի թանաքաբծի թեստ',
        ],
        correctIndex: 2,
        explanation:
          'The MMPI is an empirical, self-report inventory originally developed to identify emotional disorders.',
        explanationKa:
          'MMPI არის ემპირიული კითხვარი, რომელიც თავდაპირველად შემუშავდა ემოციური აშლილობის გამოსავლენად.',
        explanationRu:
          'MMPI — это эмпирический опросник, первоначально разработанный для выявления эмоциональных расстройств.',
        explanationHy:
          'MMPI-ն էմպիրիկ, ինքնազեկուցման գույքագրում է, որն ի սկզբանե մշակվել է հուզական խանգարումները բացահայտելու համար:',
      },
      {
        id: 'q11_12',
        question:
          "Which defense mechanism involves justifying one's negative actions by inventing logical-sounding reasons?",
        questionKa:
          'რომელი დაცვის მექანიზმი გულისხმობს საკუთარი ნეგატიური ქმედებების გამართლებას ლოგიკურად ჟღერადი მიზეზების გამოგონებით?',
        questionRu:
          'Какой защитный механизм предполагает оправдание своих негативных действий путем выдумывания логично звучащих причин?',
        questionHy:
          'Ի՞նչ պաշտպանական մեխանիզմ է ներառում արդարացնել սեփական բացասական գործողությունները՝ հորինելով տրամաբանական հնչող պատճառներ:',
        options: ['Denial', 'Rationalization', 'Reaction Formation', 'Regression'],
        optionsKa: [
          'უარყოფა (Denial)',
          'რაციონალიზაცია',
          'რეაქტიული ფორმაცია',
          'რეგრესია (Regression)',
        ],
        optionsRu: [
          'Отрицание (Denial)',
          'Рационализация',
          'Реактивное образование',
          'Регрессия (Regression)',
        ],
        optionsHy: [
          'Ժխտում (Denial)',
          'Ռացիոնալիզացիա',
          'Արձագանքման ձևավորում',
          'Ռեգրեսիա (Regression)',
        ],
        correctIndex: 1,
        explanation:
          'Rationalization hides the real, unconscious reasons for behavior behind self-justifying explanations.',
        explanationKa:
          'რაციონალიზაცია მალავს ქცევის რეალურ, არაცნობიერ მიზეზებს თვითგამართლების ახსნა-განმარტებების მიღმა.',
        explanationRu:
          'Рационализация скрывает истинные, бессознательные причины поведения за оправдательными объяснениями.',
        explanationHy:
          'Ռացիոնալիզացիան թաքցնում է վարքագծի իրական, անգիտակից պատճառները ինքնաարդարացնող բացատրությունների հետևում:',
      },
      {
        id: 'q11_13',
        question:
          "Albert Bandura's concept of 'reciprocal determinism' highlights the interacting influences of behavior, environment, and:",
        questionKa:
          "ალბერტ ბანდურას 'ორმხრივი დეტერმინიზმის' კონცეფცია ხაზს უსვამს ქცევის, გარემოს და კიდევ რის ურთიერთქმედებას?",
        questionRu:
          'Концепция «взаимного детерминизма» Альберта Бандуры подчеркивает взаимодействующее влияние поведения, окружающей среды и:',
        questionHy:
          'Ալբերտ Բանդուրայի «փոխադարձ դետերմինիզմի» հայեցակարգը ընդգծում է վարքագծի, շրջակա միջավայրի փոխազդող ազդեցությունները, և որի՞․',
        options: [
          'Genetics',
          'Internal cognitive factors',
          'Unconscious drives',
          'Astrological signs',
        ],
        optionsKa: [
          'გენეტიკის',
          'შინაგანი კოგნიტური ფაქტორების (მაგ. ფიქრები, რწმენები)',
          'არაცნობიერი ლტოლვების',
          'ასტროლოგიური ნიშნების',
        ],
        optionsRu: [
          'Генетики',
          'Внутренних когнитивных факторов',
          'Бессознательных влечений',
          'Астрологических знаков',
        ],
        optionsHy: [
          'Գենետիկայի',
          'Ներքին կոգնիտիվ գործոնների',
          'Անգիտակցական մղումների',
          'Աստղագուշակական նշանների',
        ],
        correctIndex: 1,
        explanation:
          'Reciprocal determinism means our thoughts/personality, our behavior, and our environment all constantly influence each other.',
        explanationKa:
          'ორმხრივი დეტერმინიზმი ნიშნავს, რომ ჩვენი აზრები/პიროვნება, ჩვენი ქცევა და გარემო გამუდმებით მოქმედებენ ერთმანეთზე.',
        explanationRu:
          'Взаимный детерминизм означает, что наши мысли/личность, наше поведение и наша среда постоянно влияют друг на друга.',
        explanationHy:
          'Փոխադարձ դետերմինիզմ նշանակում է, որ մեր մտքերը/անհատականությունը, մեր վարքագիծը և մեր միջավայրը մշտապես ազդում են միմյանց վրա:',
      },
      {
        id: 'q11_14',
        question:
          'If you believe that your success is heavily dependent on luck or fate, you have an:',
        questionKa:
          'თუ გჯერათ, რომ თქვენი წარმატება დიდად არის დამოკიდებული იღბალზე ან ბედზე, თქვენ გაქვთ:',
        questionRu: 'Если вы верите, что ваш успех сильно зависит от удачи или судьбы, у вас:',
        questionHy:
          'Եթե ​​կարծում եք, որ ձեր հաջողությունը մեծապես կախված է բախտից կամ ճակատագրից, դուք ունեք․',
        options: [
          'Internal locus of control',
          'External locus of control',
          'Oedipus complex',
          'High self-efficacy',
        ],
        optionsKa: [
          'კონტროლის შინაგანი ლოკუსი',
          'კონტროლის გარეგანი ლოკუსი',
          'ოიდიპოსის კომპლექსი',
          'მაღალი თვითეფექტურობა (Self-efficacy)',
        ],
        optionsRu: [
          'Внутренний локус контроля',
          'Внешний локус контроля',
          'Эдипов комплекс',
          'Высокая самоэффективность',
        ],
        optionsHy: [
          'Վերահսկողության ներքին տեղակայում',
          'Վերահսկողության արտաքին տեղակայում',
          'Էդիպի բարդույթ',
          'Բարձր ինքնաարդյունավետություն',
        ],
        correctIndex: 1,
        explanation:
          "An external locus of control is the perception that outside forces beyond personal control determine one's fate.",
        explanationKa:
          'გარე კონტროლის ლოკუსი არის აღქმა, რომ პიროვნული კონტროლის მიღმა მყოფი გარე ძალები განსაზღვრავენ ადამიანის ბედს.',
        explanationRu:
          'Внешний локус контроля — это восприятие того, что внешние силы, находящиеся вне личного контроля, определяют судьбу человека.',
        explanationHy:
          'Վերահսկողության արտաքին տեղակայումն այն ընկալումն է, որ անձնական վերահսկողությունից դուրս գտնվող արտաքին ուժերը որոշում են մարդու ճակատագիրը:',
      },
      {
        id: 'q11_15',
        question:
          'Which term describes a person switching to acting like a younger stage of development when faced with anxiety?',
        questionKa:
          'რომელი ტერმინი აღწერს ადამიანს, რომელიც შფოთვის დროს იწყებს ისე მოქცევას, თითქოს უფრო ახალგაზრდაა აზროვნებით?',
        questionRu:
          'Какой термин описывает человека, который при столкновении с тревогой переключается на поведение, свойственное более ранней стадии развития?',
        questionHy:
          'Ո՞ր տերմինն է նկարագրում այն ​​մարդուն, ով անհանگստության առջև կանգնելիս անցնում է ավելի երիտասարդ զարգացման փուլի պես գործելուն:',
        options: ['Repression', 'Regression', 'Reaction Formation', 'Sublimation'],
        optionsKa: ['რეპრესია', 'რეგრესია (Regression)', 'რეაქტიული ფორმაცია', 'სუბლიმაცია'],
        optionsRu: ['Вытеснение', 'Регрессия (Regression)', 'Реактивное образование', 'Сублимация'],
        optionsHy: ['Ճնշում', 'Ռեգրեսիա', 'Արձագանքման ձևավորում', 'Սուբլիմացիա'],
        correctIndex: 1,
        explanation:
          'Regression is retreating to a more infantile psychosexual stage (e.g., a stressed child sucking their thumb again).',
        explanationKa:
          'რეგრესია არის უკანდახევა უფრო ინფანტილურ ფსიქოსექსუალურ ეტაპზე (მაგ., სტრესის ქვეშ მყოფი ბავშვი ისევ იწოვს თითს).',
        explanationRu:
          'Регрессия — это отступление на более инфантильную психосексуальную стадию (например, ребенок в стрессе снова начинает сосать палец).',
        explanationHy:
          'Ռեգրեսիան նահանջելն է ավելի ինֆանտիլ հոգեսեռական փուլին (օրինակ՝ սթրեսի ենթարկված երեխան կրկին ծծում է բութ մատը):',
      },
    ],
  },
  {
    id: 'q12',
    chapterId: 12,
    title: 'Social Psychology',
    titleKa: 'სოციალური ფსიქოლოგია',
    titleRu: 'Социальная Психология',
    titleHy: 'Սոցիալական հոգեբանություն',
    questions: [
      {
        id: 'q12_1',
        question: "What is the 'fundamental attribution error'?",
        questionKa: "რა არის 'ფუნდამენტური ატრიბუციის შეცდომა'?",
        questionRu: 'Что такое «фундаментальная ошибка атрибуции»?',
        questionHy: 'Ո՞րն է «ատրիբուտի հիմնարար սխալը» (fundamental attribution error):',
        options: [
          'Assuming others know what we are thinking',
          'Attributing our own bad behavior to our personality',
          'Overestimating personality/disposition and underestimating the situation when judging others',
          'Believing that everyone shares our exact opinions',
        ],
        optionsKa: [
          'იმის ვარაუდი, რომ სხვებმა იციან რას ვფიქრობთ',
          'ჩვენივე ცუდი ქცევის ჩვენს პიროვნებასთან დაკავშირება',
          'სხვების განსჯისას პიროვნების/ხასიათის გადაჭარბებული შეფასება და სიტუაციის სათანადოდ ვერ შეფასება',
          'რწმენა, რომ ყველა იზიარებს ზუსტად ჩვენს მოსაზრებებს',
        ],
        optionsRu: [
          'Предположение, что другие знают, о чем мы думаем',
          'Приписывание нашего собственного плохого поведения нашей личности',
          'Переоценка личностных качеств и недооценка ситуации при суждении о других',
          'Убеждение, что все разделяют наши взгляды',
        ],
        optionsHy: [
          'Ենթադրելով, որ ուրիշները գիտեն, թե ինչ ենք մենք մտածում',
          'Մեր սեփական վատ պահվածքը վերագրել մեր անհատականությանը',
          'Ուրիշներին դատելիս անհատականության գերագնահատում և իրավիճակի թերագնահատում',
          'Հավատալով, որ բոլորը կիսում են մեր ճշգրիտ կարծիքը',
        ],
        correctIndex: 2,
        explanation:
          'We tend to think someone cut us off in traffic because they are a jerk (personality), not because they have an emergency (situation).',
        explanationKa:
          'ჩვენ მიდრეკილნი ვართ ვიფიქროთ, რომ ვინმემ მოძრაობისას გზა იმიტომ გადაგვიჭრა, რომ ის ცუდი ადამიანია (პიროვნება), და არა იმიტომ, რომ საგანგებო მდგომარეობა აქვს (სიტუაცია).',
        explanationRu:
          'Мы склонны думать, что кто-то подрезал нас на дороге, потому что он придурок (личность), а не потому, что у него чрезвычайная ситуация (ситуация).',
        explanationHy:
          'Մենք հակված ենք մտածելու, որ երթևեկության մեջ ինչ-որ մեկը մեզ կանխել է, քանի որ նա ապուշ է (անհատականություն), այլ ոչ թե արտակարգ իրավիճակների պատճառով (իրավիճակ):',
      },
      {
        id: 'q12_2',
        question: "Solomon Asch's famous line-length experiment primarily studied which concept?",
        questionKa:
          'ძირითადად რომელ კონცეფციას სწავლობდა სოლომონ აშის ხაზების სიგრძის ცნობილი ექსპერიმენტი?',
        questionRu:
          'Какую концепцию в первую очередь изучал знаменитый эксперимент Соломона Аша с длиной линий?',
        questionHy:
          'Սողոմոն Աշի աննախադեպ տողերի երկարության փորձը հիմնականում ի՞նչ հայեցակարգ էր ուսումնասիրում:',
        options: ['Obedience', 'Cognitive dissonance', 'Conformity', 'Deindividuation'],
        optionsKa: ['მორჩილებას', 'კოგნიტურ დისონანსს', 'კონფორმულობას', 'დეინდივიდუალიზაციას'],
        optionsRu: [
          'Послушание',
          'Когнитивный диссонанс',
          'Конформность (Соответствие)',
          'Деиндивидуализацию',
        ],
        optionsHy: [
          'Հնազանդություն',
          'Ճանաչողական դիսոնանս',
          'Համապատասխանություն (Conformity)',
          'Անհատականացում',
        ],
        correctIndex: 2,
        explanation:
          'Asch found that people would agree with an obviously incorrect group answer roughly 1/3 of the time to fit in.',
        explanationKa:
          'აშმა აღმოაჩინა, რომ ადამიანები ეთანხმებოდნენ ჯგუფის აშკარად არასწორ პასუხს შემთხვევათა დაახლოებით 1/3-ში, რათა მორგებოდნენ მათ.',
        explanationRu:
          'Аш обнаружил, что люди соглашались с явно неверным ответом группы примерно в 1/3 случаев, чтобы соответствовать ей.',
        explanationHy:
          'Աշը պարզեց, որ մարդիկ համաձայնում են խմբի ակնհայտ սխալ պատասխանի հետ մոտավորապես դեպքերի 1/3-ում, որպեսզի համապատասխանեն:',
      },
      {
        id: 'q12_3',
        question:
          "Stanley Milgram’s controversial 'shock' experiment showed that a surprising number of people will:",
        questionKa:
          "სტენლი მილგრამის საკამათო 'შოკის' ექსპერიმენტმა აჩვენა, რომ ადამიანების გასაოცარი რაოდენობა:",
        questionRu:
          "Скандальный 'шоковый' эксперимент Стэнли Милгрэма показал, что удивительно большое количество людей будут:",
        questionHy: 'Սթենլի Միլգրամի հակասական «շոկ» փորձը ցույց է տվել, որ զարմանալի թվով մարդիկ.',
        options: [
          'Help a stranger in need',
          'Rebel against strict authority figures',
          'Obey an authority figure even if it means harming someone else',
          'Change their beliefs to match their behavior',
        ],
        optionsKa: [
          'ეხმარება უცხო ადამიანს გასაჭირში',
          'უპირისპირდება მკაცრ ავტორიტეტულ ფიგურებს',
          'ემორჩილება ავტორიტეტულ ფიგურას მაშინაც კი, თუ ეს სხვას ავნებს',
          'იცვლის რწმენას/შეხედულებას თავისი ქცევის შესაბამისად',
        ],
        optionsRu: [
          'Помогать незнакомцу в беде',
          'Бунтовать против строгих авторитетов',
          'Подчиняться авторитету, даже если это причиняет вред другому',
          'Менять свои убеждения в соответствии со своим поведением',
        ],
        optionsHy: [
          'Կօգնեն անծանոթ մարդուն',
          'Կապստամբեն խիստ հեղինակության դեմ',
          'Կհնազանդվեն հեղինակությանը, նույնիսկ եթե դա նշանակում է վնասել մեկ ուրիշին',
          'Կփոխեն իրենց համոզմունքները՝ իրենց վարքագծին համապատասխանելու համար',
        ],
        correctIndex: 2,
        explanation:
          "65% of Milgram's participants delivered what they thought was the maximum lethal shock when told to do so by a researcher in a lab coat.",
        explanationKa:
          'მილგრამის მონაწილეების 65%-მა გამოიყენა მათალდ ვოლტიანი შოკი, როდესაც ეს უთხრა ლაბორატორიულ ხალათში გამოწყობილმა მკვლევარმა.',
        explanationRu:
          '65% участников Милгрэма нанесли так называемый смертельный удар током, когда им приказал исследователь в лабораторном халате.',
        explanationHy:
          'Միլգրամի մասնակիցների 65%-ը հասցրեցին այն, ինչ իրենց կարծիքով մահացու հարված էր, երբ դա արեցին լաբորատոր վերարկուով հետազոտողի կողմից:',
      },
      {
        id: 'q12_4',
        question:
          'What tension do we feel when our actions clash with our attitudes, according to Leon Festinger?',
        questionKa:
          'რა დაძაბულობას ვგრძნობთ, როდესაც ჩვენი ქმედებები ეწინააღმდეგება ჩვენს დამოკიდებულებებს (ლეონ ფესტინგერის მიხედვით)?',
        questionRu:
          'Какое напряжение мы испытываем, когда наши действия противоречат нашим установкам, согласно Леону Фестингеру?',
        questionHy:
          'Ինչպիսի՞ լարվածություն ենք մենք զգում, երբ մեր գործողությունները բախվում են մեր վերաբերմունքին, նշում է Լեոն Ֆեստինգերը:',
        options: ['Groupthink', 'Deindividuation', 'Social loafing', 'Cognitive dissonance'],
        optionsKa: [
          'ჯგუფური აზროვნება',
          'დეინდივიდუალიზაცია',
          'სოციალური სიზარმაცე (Social loafing)',
          'კოგნიტური დისონანსი',
        ],
        optionsRu: [
          'Групповое мышление',
          'Деиндивидуализация',
          'Социальная лень',
          'Когнитивный диссонанс',
        ],
        optionsHy: [
          'Խմբակային մտածողություն',
          'Անհատականացում',
          'Սոցիալական ծուլություն',
          'Ճանաչողական դիսոնանս',
        ],
        correctIndex: 3,
        explanation:
          'Cognitive dissonance is the mental discomfort from holding two conflicting beliefs or behavior vs. belief (e.g., smoking while knowing it causes cancer).',
        explanationKa:
          'კოგნიტური დისონანსი არის ფსიქოლოგიური დისკომფორტი, როდესაც აზრები და ქმედებები წინააღმდეგობაში მოდის ერთმანეთთან (მაგ. ეწევი, თუმცა იცი რომ კლავს).',
        explanationRu:
          'Когнитивный диссонанс — это психологический дискомфорт, когда мысли и действия вступают в конфликт друг с другом.',
        explanationHy:
          'Ճանաչողական դիսոնանսը հոգեբանական անհանգստություն է, երբ մտքերն ու գործողությունները հակասում են միմյանց (օրինակ՝ ծխելը՝ իմանալով, որ այն սպանում է):',
      },
      {
        id: 'q12_5',
        question:
          'Philip Zimbardo’s Stanford Prison Experiment primarily demonstrated the powerful influence of:',
        questionKa:
          'ფილიპ ზიმბარდოს სტენფორდის ციხის ექსპერიმენტმა უპირველეს ყოვლისა აჩვენა შემდეგის ძლიერი გავლენა:',
        questionRu:
          'Стэнфордский тюремный эксперимент Филипа Зимбардо в первую очередь продемонстрировал мощное влияние:',
        questionHy:
          'Ֆիլիպ Զիմբարդոյի Սթենֆորդի բանտային փորձը հիմնականում ցույց է տվել ուժեղ ազդեցությունը.',
        options: [
          'Genetics on violent behavior',
          'Roles and the situation on human behavior',
          'Intelligence on leadership',
          'Childhood trauma on adult crime',
        ],
        optionsKa: [
          'გენეტიკის გავლენა ძალადობრივ ქცევაზე',
          'როლებისა და სიტუაციის გავლენა ადამიანის ქცევაზე',
          'ინტელექტის გავლენა ლიდერობაზე',
          'ბავშვობის ტრავმის გავლენა ზრდასრულთა დანაშაულზე',
        ],
        optionsRu: [
          'Генетики на жестокое поведение',
          'Ролей и ситуации на поведение человека',
          'Интеллекта на лидерство',
          'Детской травмы на преступность у взрослых',
        ],
        optionsHy: [
          'Գենետիկան՝ բռնի վարքագծի վրա',
          'Դերերը և իրավիճակը մարդու վարքագծի վրա',
          'Առաջնորդության հետախուզություն',
          'Մանկության տրավմա մեծահասակների հանցագործության վրա',
        ],
        correctIndex: 1,
        explanation:
          "Normal students assigned the role of 'guard' quickly became cruel due to the environment and the power of their assigned social role.",
        explanationKa:
          "ნორმალური სტუდენტები, რომლებსაც 'მცველის' როლი დაეკისრათ, სწრაფად გახდნენ სასტიკი გარემოსა და სოციალური სიტუაციის გავლენით.",
        explanationRu:
          'Обычные студенты, которым была назначена роль «охранника», быстро стали жестокими из-за окружающей среды и власти своей социальной роли.',
        explanationHy:
          'Սովորական ուսանողները, ովքեր նշանակվել են «պահակ» դերով, արագորեն դաժան են դարձել միջավայրի և իրենց սոցիալական դերի ուժի պատճառով:',
      },
      {
        id: 'q12_6',
        question: "What is 'social loafing'?",
        questionKa: "რა არის 'სოციალური სიზარმაცე' (social loafing)?",
        questionRu: 'Что такое «социальная лень» (social loafing)?',
        questionHy: 'Ի՞նչ է «սոցիալական ծուլությունը»:',
        options: [
          'Working much harder when doing a group project',
          'The tendency for people to exert less effort when working in a group compared to working alone',
          'Taking breaks during work to socialize',
          'Copying the exact behaviors of the group',
        ],
        optionsKa: [
          'ბევრად მეტის მუშაობა ჯგუფური პროექტის კეთებისას',
          'ადამიანების ტენდენცია, დახარჯონ ნაკლები ძალისხმევა ჯგუფში მუშაობისას მარტო მუშაობასთან შედარებით',
          'მუშაობის დროს შესვენებების აღება სოციალიზაციისთვის',
          'ჯგუფის ქცევების ზუსტად კოპირება',
        ],
        optionsRu: [
          'Более усердная работа при выполнении группового проекта',
          'Склонность людей прилагать меньше усилий при работе в группе по сравнению с индивидуальной работой',
          'Перерывы в работе для общения',
          'Точное копирование поведения группы',
        ],
        optionsHy: [
          'Շատ ավելի քրտնաջան աշխատել խմբակային նախագիծ անելիս',
          'Խմբում աշխատելիս մարդկանց ավելի քիչ ջանք գործադրելու միտումը, քան մենակ աշխատելիս',
          'Աշխատանքի ընթացքում ընդմիջումներ անելը շփվելու համար',
          'Խմբի ճշգրիտ վարքագիծը պատճենելը',
        ],
        correctIndex: 1,
        explanation:
          'Because individual accountability is reduced in a group, people often slack off (like in a tug-of-war).',
        explanationKa:
          'რადგან ჯგუფში ინდივიდუალური პასუხისმგებლობა მცირდება, ადამიანები ხშირად ზარმაცობენ (მაგ., თოკის გადაქაჩვისას).',
        explanationRu:
          'Поскольку в группе индивидуальная ответственность снижается, люди часто халтурят (как при перетягивании каната).',
        explanationHy:
          'Քանի որ խմբում անհատական ​​պատասխանատվությունը նվազում է, մարդիկ հաճախ թուլանում են (ինչպես պարան ձգելիս):',
      },
      {
        id: 'q12_7',
        question:
          'Which term describes the loss of self-awareness and self-restraint in group situations that foster arousal and anonymity (like a riot)?',
        questionKa:
          'რომელი ტერმინი აღწერს თვითშემეცნებისა და თვითკონტროლის დაკარგვას ჯგუფურ სიტუაციებში, რომლებიც ხელს უწყობენ ანონიმურობას (მაგალითად, არეულობაში / ბუნტში)?',
        questionRu:
          'Какой термин описывает потерю самосознания и самоконтроля в групповых ситуациях, способствующих возбуждению и анонимности (например, в толпе)?',
        questionHy:
          'Ո՞ր տերմինն է նկարագրում ինքնագիտակցության և զսպվածության կորուստը խմբակային իրավիճակներում, որոնք խթանում են գրգռվածություն և անանունություն (ինչպես խռովությունը):',
        options: [
          'Group polarization',
          'Social facilitation',
          'Deindividuation',
          'Bystander effect',
        ],
        optionsKa: [
          'ჯგუფის პოლარიზაცია',
          'სოციალური ფასილიტაცია',
          'დეინდივიდუალიზაცია (Deindividuation)',
          'შემსწრის ეფექტი',
        ],
        optionsRu: [
          'Групповая поляризация',
          'Социальная фасилитация',
          'Деиндивидуализация (Deindividuation)',
          'Эффект свидетеля',
        ],
        optionsHy: [
          'Խմբային բևեռացում',
          'Սոցիալական դյուրացում',
          'Ապաանհատականացում',
          'Ականատեսի էֆեկտ',
        ],
        correctIndex: 2,
        explanation:
          "Deindividuation makes people feel anonymous in a crowd, leading them to do things they normally wouldn't (like looting).",
        explanationKa:
          'დეინდივიდუალიზაცია აგრძნობინებს ადამიანებს თავს ანონიმურად ბრბოში, რაც უბიძგებს გააკეთონ ის, რასაც ჩვეულებრივ არ იზამდნენ (მაგ. ძარცვა).',
        explanationRu:
          'Деиндивидуализация заставляет людей чувствовать себя анонимными в толпе, из-за чего они совершают поступки, которые обычно не сделали бы (например, мародерство).',
        explanationHy:
          'Ապաանհատականացումը (Deindividuation) ստիպում է մարդկանց անանուն զգալ ամբոխի մեջ՝ ստիպելով անել այնպիսի բաներ, ինչ նրանք սովորաբար չէին անի (օրինակ՝ թալանել):',
      },
      {
        id: 'q12_8',
        question: "The 'Bystander effect' states that:",
        questionKa: "რას ამტკიცებს 'შემსწრის (Bystander) ეფექტი'?",
        questionRu: "Что утверждает 'Эффект свидетеля'?",
        questionHy: '«Անցորդի էֆեկտը» նշում է, որ.',
        options: [
          'People are more likely to help if there are many others watching',
          'The presence of other bystanders REDUCES the likelihood that any one person will help',
          'Bystanders always call the police immediately',
          'People only help those who are similar to them',
        ],
        optionsKa: [
          'ადამიანები უფრო მეტად დაეხმარებიან, თუ ბევრი სხვა უყურებს',
          'სხვა შემსწრეების ყოფნა ამცირებს იმის ალბათობას, რომ რომელიმე მათგანი დახმარებას გაწევს',
          'შემსწრეები ყოველთვის დაუყოვნებლივ იძახებენ პოლიციას',
          'ადამიანები ეხმარებიან მხოლოდ მათ, ვინც მათ ჰგავს',
        ],
        optionsRu: [
          'Люди с большей вероятностью помогут, если за ними наблюдают',
          'Присутствие других свидетелей СНИЖАЕТ вероятность того, что кто-то поможет',
          'Свидетели всегда немедленно вызывают полицию',
          'Люди помогают только тем, кто похож на них',
        ],
        optionsHy: [
          'Մարդիկ ավելի հավանական է, որ կօգնեն, եթե շատ ուրիշներ են դիտում',
          'Այլ անցորդների ներկայությունը ՆՎԱԶԵՑՆՈՒՄ է հավանականությունը, որ որևէ մեկը կօգնի',
          'Ականատեսները միշտ և անմիջապես ոստիկանություն են կանչում',
          'Մարդիկ օգնում են միայն նրանց, ովքեր նման են իրենց',
        ],
        correctIndex: 1,
        explanation:
          "Due to 'diffusion of responsibility,' everyone thinks someone else will take action.",
        explanationKa:
          "'პასუხისმგებლობის განაწილების' გამო, ყველას ჰგონია, რომ სხვა მიიღებს ზომებს და თავად არაფერს აკეთებს.",
        explanationRu:
          'Из-за «диффузии ответственности» каждый думает, что кто-то другой предпримет действия.',
        explanationHy:
          '«Պատասխանատվության տարածման» պատճառով բոլորը կարծում են, որ մեկ ուրիշը քայլեր կձեռնարկի:',
      },
      {
        id: 'q12_9',
        question:
          'What is the phenomenon where a group’s attitudes and decisions become more extreme after discussing them with like-minded individuals?',
        questionKa:
          'რა ჰქვია ფენომენს, როდესაც ჯგუფის დამოკიდებულებები და გადაწყვეტილებები უფრო ექსტრემალური / რადიკალური ხდება თანამოაზრეებთან განხილვის შემდეგ?',
        questionRu:
          'Как называется явление, при котором мнения и решения группы становятся более радикальными после обсуждения с единомышленниками?',
        questionHy:
          'Ի՞նչ է այն երևույթը, որի դեպքում խմբի վերաբերմունքն ու որոշումները դառնում են ավելի ծայրահեղ՝ համախոհ անհատների հետ դրանք քննարկելուց հետո:',
        options: [
          'Groupthink',
          'Group polarization',
          'Social facilitation',
          'The mere exposure effect',
        ],
        optionsKa: [
          'ჯგუფური აზროვნება',
          'ჯგუფის პოლარიზაცია (Group polarization)',
          'სოციალური ფასილიტაცია',
          'უბრალო ექსპოზიციის ეფექტი',
        ],
        optionsRu: [
          'Групповое мышление',
          'Групповая поляризация (Group polarization)',
          'Социальная фасилитация',
          'Эффект простого нахождения',
        ],
        optionsHy: [
          'Խմբակային մտածողություն',
          'Խմբային բևեռացում',
          'Սոցիալական դյուրացում',
          'Միայն բացահայտման էֆեկտը',
        ],
        correctIndex: 1,
        explanation:
          'Group polarization causes eco-chambers; discussing prejudices with other prejudiced people makes them more prejudiced.',
        explanationKa:
          'ჯგუფის პოლარიზაცია იწვევს ექო-კამერებს. მაგ, ცრურწმენების განხილვა სხვა ცრუმორწმუნე ადამიანებთან, მათ უფრო მეტად უღრმავებს წრურწმენებს.',
        explanationRu:
          'Групповая поляризация создает эхо-камеры: обсуждение предрассудков с единомышленниками делает их еще более сильными.',
        explanationHy:
          'Խմբային բևեռացումն առաջացնում է էկոխցիկներ. նախապաշարմունքները քննարկելով մյուսների հետ որոնք նույնպես նախապաշարված են մարդկանց դարձնում է ավելի բարձր նախապաշարվածներ:',
      },
      {
        id: 'q12_10',
        question:
          'Which of the following is an attitude composed of beliefs, emotions, and predispositions to action toward a specific group?',
        questionKa:
          'ჩამოთვლილთაგან რომელია დამოკიდებულება, რომელიც შედგება სპეციფიკური ჯგუფის მიმართ რწმენისგან, ემოციებისგან და მოქმედების წინასწარგანწყობისგან?',
        questionRu:
          'Что из нижеперечисленного является установкой, состоящей из убеждений, эмоций и предрасположенности к действиям по отношению к определенной группе?',
        questionHy:
          'Հետևյալներից ո՞րն է վերաբերմունք, որը բաղկացած է համոզմունքներից, զգացմունքներից և որոշակի խմբի նկատմամբ գործելու հակվածությունից:',
        options: ['Discrimination', 'Prejudice', 'Altruism', 'Stereotype'],
        optionsKa: [
          'დისკრიმინაცია',
          'წინასწარშეგონება / ცრურწმენა (Prejudice)',
          'ალტრუიზმი',
          'სტერეოტიპი',
        ],
        optionsRu: ['Дискриминация', 'Предубеждение (Prejudice)', 'Альтруизм', 'Стереотип'],
        optionsHy: ['Խտրականություն', 'Նախապաշարմունք (Prejudice)', 'Ալտրուիզմ', 'Կարծրատիպ'],
        correctIndex: 1,
        explanation:
          'Prejudice is the internal ATTITUDE (usually negative), stereotypes are the beliefs, and discrimination is the BEHAVIOR.',
        explanationKa:
          'ცრურწმენა არის შინაგანი დამოკიდებულება (როგორც წესი, უარყოფითი), სტერეოტიპები არის რწმენები და დისკრიმინაცია არის ქცევა.',
        explanationRu:
          'Предубеждение — это внутреннее ОТНОШЕНИЕ (обычно негативное), стереотипы — это убеждения, а дискриминация — это ПОВЕДЕНИЕ.',
        explanationHy:
          'Նախապաշարմունքը ներքին ՎԵՐԱԲԵՐՄՈՒՆՔՆ է (սովորաբար բացասական), կարծրատիպերը համոզմունքներն են, և խտրականությունը ՎԱՐՔՆ է:',
      },
      {
        id: 'q12_11',
        question: "What does 'Groupthink' describe?",
        questionKa: "რას აღწერს 'ჯგუფური აზროვნება' (Groupthink)?",
        questionRu: "Что описывает 'Групповое мышление' (Groupthink)?",
        questionHy: 'Ի՞նչ է նկարագրում «Խմբակային միտքը»:',
        options: [
          'An intelligent group collaborating perfectly',
          'A group coming up with a highly creative solution',
          'The mode of thinking that occurs when the desire for harmony in a decision-making group overrides realistic appraisal of alternatives',
          'When two opposing groups finally agree on a compromise',
        ],
        optionsKa: [
          'ჭკვიანი ჯგუფის სრულყოფილ თანამშრომლობას',
          'ჯგუფს, რომელიც იღებს უაღრესად კრეატიულ გადაწყვეტილებას',
          'აზროვნების რეჟიმს, როდესაც გადაწყვეტილების მიმღებ ჯგუფში ჰარმონიის სურვილი გადაწონის ალტერნატივების რეალისტურ შეფასებას',
          'როდესაც ორი დაპირისპირებული ჯგუფი საბოლოოდ თანხმდება კომპრომისზე',
        ],
        optionsRu: [
          'Идеальное сотрудничество умной группы',
          'Разработку группой высококреативного решения',
          'Режим мышления, при котором стремление к гармонии подавляет реалистичную оценку альтернатив',
          'Ситуацию, когда две враждующие группы приходят к компромиссу',
        ],
        optionsHy: [
          'Խելացի խումբ, որը կատարյալ համագործակցում է',
          'Խումբ, որը գալիս է խիստ կրեատիվ լուծման',
          'Մտածողության այն ձևը, որն առաջանում է, երբ որոշում կայացնող խմբում ներդաշնակության ցանկությունը գերակայում է այլընտրանքների իրատեսական գնահատմանը։',
          'Երբ երկու հակադիր խմբեր վերջապես համաձայնում են փոխզիջման',
        ],
        correctIndex: 2,
        explanation:
          'Groupthink suppresses dissenting viewpoints out of a desire not to disrupt group cohesion, sometimes leading to disastrous decisions.',
        explanationKa:
          'ჯგუფური აზროვნება თრგუნავს განსხვავებულ შეხედულებებს ჯგუფის ერთიანობის დარღვევის შიშით, რასაც ზოგჯერ კატასტროფულ გადაწყვეტილებებამდე მივყავართ.',
        explanationRu:
          'Групповое мышление подавляет инакомыслие из-за страха нарушить сплоченность, что иногда приводит к катастрофическим решениям.',
        explanationHy:
          'Խմբակային մտածողությունը ճնշում է այլախոհ տեսակետները խմբի համախմբվածությունը չխախտելու ցանկությունից դրդված, ինչը երբեմն հանգեցնում է աղետալի որոշումների:',
      },
      {
        id: 'q12_12',
        question:
          'The tendency for people to perform better on simple or well-learned tasks when in the presence of others is called:',
        questionKa:
          'ადამიანების ტენდენციას, უკეთ შეასრულონ მარტივი ან კარგად შესწავლილი ამოცანები სხვების თანდასწრებით, ეწოდება:',
        questionRu:
          'Склонность людей лучше выполнять простые или хорошо заученные задачи в присутствии других называется:',
        questionHy:
          'Ուրիշների ներկայությամբ պարզ կամ լավ սովորած առաջադրանքները ավելի լավ կատարելու մարդկանց հակումը կոչվում է.',
        options: ['Social facilitation', 'Social lofting', 'Deindividuation', 'Altruism'],
        optionsKa: [
          'სოციალური ფასილიტაცია',
          'სოციალური სიზარმაცე',
          'დეინდივიდუალიზაცია',
          'ალტრუიზმი',
        ],
        optionsRu: ['Социальная фасилитация', 'Социальная лень', 'Деиндивидуализация', 'Альтруизм'],
        optionsHy: [
          'Սոցիալական դյուրացում',
          'Սոցիալական ձեղնահարկ (lofting)',
          'Ապաանհատականացում',
          'Ալտրուիզմ',
        ],
        correctIndex: 0,
        explanation:
          'Social facilitation explains why athletes often set personal records during big competitions with large crowds.',
        explanationKa:
          'სოციალური ფასილიტაცია ხსნის, თუ რატომ ამყარებენ სპორტსმენები ხშირად პირად რეკორდებს დიდი ხალხის თანდასწრებით ჩატარებულ შეჯიბრებებზე.',
        explanationRu:
          'Социальная фасилитация объясняет, почему спортсмены часто устанавливают личные рекорды на крупных соревнованиях с большим числом зрителей.',
        explanationHy:
          'Սոցիալական դյուրացումը բացատրում է, թե ինչու են մարզիկները հաճախ անձնական ռեկորդներ սահմանում մեծ մրցումների ժամանակ մեծ ամբոխի մասնակցությամբ:',
      },
      {
        id: 'q12_13',
        question:
          'Muzafer Sherif’s Robbers Cave experiment demonstrated that prejudice between groups can be reduced through:',
        questionKa:
          "მუზაფერ შერიფის 'Robbers Cave' ექსპერიმენტმა აჩვენა, რომ ჯგუფებს შორის წრურწმენების შემცირება შესაძლებელია:",
        questionRu:
          'Эксперимент Музафера Шерифа «Пещера грабителей» продемонстрировал, что предрассудки между группами могут быть снижены с помощью:',
        questionHy:
          'Մուզաֆեր Շերիֆի Ավազակների քարանձավի փորձը ցույց է տվել, որ խմբերի միջև նախապաշարմունքները կարող են կրճատվել հետևյալի միջոցով.',
        options: [
          'Separating the groups further',
          'Having them compete for scarce resources',
          'Providing superordinate (shared) goals that require cooperation',
          'Punishing the leaders of the in-groups',
        ],
        optionsKa: [
          'ჯგუფების კიდევ უფრო განცალკევებით',
          'მწირი რესურსებისთვის მათი კონკურირებით',
          'საერთო მიზნების დასახვით, რომლებიც თანამშრომლობას მოითხოვს',
          'შიდა ჯგუფების ლიდერების დასჯით',
        ],
        optionsRu: [
          'Дальнейшего разделения групп',
          'Принуждения их конкурировать за ограниченные ресурсы',
          'Постановки общих (высших) целей, требующих сотрудничества',
          'Наказания лидеров групп',
        ],
        optionsHy: [
          'Խմբերի հետագա տարանջատում',
          'Ստիպելով նրանց մրցել սակավ ռեսուրսների համար',
          'Ընդհանուր (վերադաս) նպատակների տրամադրում, որոնք պահանջում են համագործակցություն',
          'Խմբերի ղեկավարներին պատժելը',
        ],
        correctIndex: 2,
        explanation:
          "He created conflict between boys at a summer camp, then fixed it by making them work together to fix the camp's water supply.",
        explanationKa:
          'მან გამოიწვია კონფლიქტი ბიჭებს შორის საზაფხულო ბანაკში, შემდეგ კი გამოასწორა სიტუაცია იმით, რომ ერთად ამუშავა ისინი ბანაკის წყალმომარაგების შესაკეთებლად.',
        explanationRu:
          'Он спровоцировал конфликт между мальчиками в лагере, а затем устранил его, заставив их вместе чинить водопровод.',
        explanationHy:
          'Նա ամառային ճամբարում հակամարտություն է առաջացրել տղաների միջև, այնուհետև այն շտկել՝ ստիպելով նրանց միասին աշխատել՝ շտկելու ճամբարի ջրամատակարարումը:',
      },
      {
        id: 'q12_14',
        question: "What is the 'mere exposure effect'?",
        questionKa: "რა არის 'უბრალო ექსპოზიციის' (mere exposure) ეფექტი?",
        questionRu: 'Что такое «эффект простого нахождения» (mere exposure effect)?',
        questionHy: 'Ի՞նչ է «պարզ բացահայտման էֆեկտը»:',
        options: [
          'Being exposed to violence makes people violent',
          'Repeated exposure to novel stimuli increases our liking for them',
          'We only like people who share our exact genes',
          'Exposure to heat causes aggressive behavior',
        ],
        optionsKa: [
          'ძალადობის ყურება ადამიანებს ძალადობრივად აქცევს',
          'ახალი სტიმულის განმეორებით დასწრება / ყურება ზრდის ჩვენს სიმპათიას მათ მიმართ',
          'ჩვენ მოგვწონს მხოლოდ ისინი, ვისაც ჩვენი ზუსტი გენები აქვს',
          'სიცხის ზემოქმედება იწვევს აგრესიულ ქცევას',
        ],
        optionsRu: [
          'Наблюдение за насилием делает людей жестокими',
          'Многократное воздействие новых стимулов усиливает нашу симпатию к ним',
          'Нам нравятся только те, кто имеет с нами одинаковые гены',
          'Воздействие жары вызывает агрессивное поведение',
        ],
        optionsHy: [
          'Բռնության ենթարկվելը մարդկանց դարձնում է բռնի',
          'Նոր խթանների կրկնվող ազդեցությունը մեծացնում է մեր համակրանքը դրանց նկատմամբ',
          'Մեզ դուր են գալիս միայն այն մարդիկ, ովքեր կիսում են մեր ճշգրիտ գեները',
          'Շոգին ենթարկվելն առաջացնում է ագրեսիվ վարք',
        ],
        correctIndex: 1,
        explanation:
          'Familiarity breeds fondness; the more we see a face, hear a song, or read a word, the more we tend to like it.',
        explanationKa:
          'სიახლოვე და ხშირი ყურება წარმოშობს სიმპათიას; რაც უფრო მეტად ვხედავთ სახეს, გვესმის სიმღერა ან ვკითხულობთ სიტყვას, მით უფრო მოგვწონს იგი.',
        explanationRu:
          'Знакомост порождает симпатию; чем чаще мы видим лицо, слышим песню или читаем слово, тем больше они нам нравятся.',
        explanationHy:
          'Ծանոթությունը ծնում է սիրալիրություն; Որքան շատ ենք տեսնում դեմք, լսում երգ կամ կարդում մի բառ, այնքան հակված ենք հավանել այն:',
      },
      {
        id: 'q12_15',
        question: 'Which of the following is true regarding Altruism?',
        questionKa: 'ჩამოთვლილთაგან რომელია ჭეშმარიტი ალტრუიზმთან დაკავშირებით?',
        questionRu: 'Что из нижеперечисленного верно в отношении альтруизма?',
        questionHy: 'Հետևյալներից ո՞րն է ճիշտ Ալտրուիզմի վերաբերյալ:',
        options: [
          'It is unselfish regard for the welfare of others',
          'It always involves a financial reward',
          'It proves the fundamental attribution error',
          'It shows that people only help family members',
        ],
        optionsKa: [
          'ეს არის უანგარო ზრუნვა სხვების კეთილდღეობაზე',
          'ის ყოველთვის გულისხმობს ფინანსურ ჯილდოს',
          'ის ამტკიცებს ფუნდამენტური ატრიბუციის შეცდომას',
          'ის აჩვენებს, რომ ადამიანები მხოლოდ ოჯახის წევრებს ეხმარებიან',
        ],
        optionsRu: [
          'Это бескорыстная забота о благополучии других',
          'Он всегда включает финансовое вознаграждение',
          'Он доказывает фундаментальную ошибку атрибуции',
          'Он показывает, что люди помогают только членам семьи',
        ],
        optionsHy: [
          'Դա անշահախնդիր հարգանք է ուրիշների բարօրության նկատմամբ',
          'Դա միշտ ենթադրում է ֆինանսական պարգև',
          'Այն ապացուցում է վերագրման (attribution error) հիմնարար սխալը',
          'Այն ցույց է տալիս, որ մարդիկ օգնում են միայն ընտանիքի անդամներին',
        ],
        correctIndex: 0,
        explanation:
          'Altruism is helping others without zero expectation of reciprocity or reward (e.g., heroes saving people from a fire).',
        explanationKa:
          'ალტრუიზმი არის სხვების დახმარება ურთიერთპატივისცემის ან ჯილდოს ყოველგვარი მოლოდინის გარეშე (მაგ., როცა გმირები ხალხს ხანძრისგან იხსნიან).',
        explanationRu:
          'Альтруизм — это помощь другим без малейшего ожидания взаимности или награды (например, как герои спасают людей из пожара).',
        explanationHy:
          'Ալտրուիզմը ուրիշներին օգնելն է՝ առանց փոխադարձության կամ պարգևի ակնկալիքի (օրինակ՝ հերոսները մարդկանց փրկում են կրակից):',
      },
    ],
  },
  {
    id: 'q13',
    chapterId: 13,
    title: 'Stress, Health, and Coping',
    titleKa: 'სტრესი, ჯანმრთელობა და დაძლევა',
    titleRu: 'Стресс, здоровье и преодоление трудностей',
    titleHy: 'Սթրես, առողջություն և հաղթահարում',
    questions: [
      {
        id: 'q13_1',
        question: "What is 'eustress'?",
        questionKa: 'რა არის „ეუსტრესი“?',
        questionRu: 'Что такое «эустресс»?',
        questionHy: 'Ի՞նչ է «էուսթրեսը»:',
        options: [
          'Negative stress that harms health',
          'Positive stress that helps performance',
          'The lack of any stress',
          'Chronic long-term stress',
        ],
        optionsKa: [
          'უარყოფითი სტრესი, რომელიც აზიანებს ჯანმრთელობას',
          'დადებითი სტრესი, რომელიც გვეხმარება ფუნქციონირებაში',
          'ნებისმიერი სტრესის არარსებობა',
          'ქრონიკული ხანგრძლივი სტრესი',
        ],
        optionsRu: [
          'Негативный стресс, вредящий здоровью',
          'Позитивный стресс, улучшающий производительность',
          'Полное отсутствие стресса',
          'Хронический долгосрочный стресс',
        ],
        optionsHy: [
          'Բացասական սթրես, որը վնասում է առողջությանը',
          'Դրական սթրես, որն օգնում է կատարողականությանը',
          'Ցանկացած սթրեսի բացակայություն',
          'Քրոնիկ երկարատև սթրես',
        ],
        correctIndex: 1,
        explanation:
          "Eustress is considered 'good' stress that can motivate and improve performance, unlike distress, which is harmful.",
        explanationKa:
          'ეუსტრესი ითვლება „კარგ“ სტრესად, რომელსაც შეუძლია მოტივაცია მოგვცეს და გააუმჯობესოს ჩვენი ფუნქციონირება.',
        explanationRu:
          'Эустресс считается «хорошим» стрессом, который может мотивировать и улучшать результаты, в отличие от вредного дистресса.',
        explanationHy:
          'Էուսթրեսը համարվում է «լավ» սթրես, որը կարող է մոտիվացնել և բարելավել կատարողականությունը:',
      },
      {
        id: 'q13_2',
        question: 'Who proposed the General Adaptation Syndrome (GAS)?',
        questionKa: 'ვის ეკუთვნის ზოგადი ადაპტაციის სინდრომის (GAS) კონცეფცია?',
        questionRu: 'Кто предложил теорию Общего адаптационного синдрома (GAS)?',
        questionHy: 'Ո՞վ է առաջարկել Ընդհանուր ադապտացիոն համախտանիշը (GAS):',
        options: ['Hans Selye', 'Walter Cannon', 'Richard Lazarus', 'Martin Seligman'],
        optionsKa: ['ჰანს სელიეს', 'უოლტერ კენონს', 'რიჩარდ ლაზარუსს', 'მარტინ სელიგმანს'],
        optionsRu: ['Ганс Селье', 'Уолтер Кэннон', 'Ричард Лазарус', 'Мартин Селигман'],
        optionsHy: ['Հանս Սելյեն', 'Ուոլտեր Քենոնը', 'Ռիչարդ Լազարուսը', 'Մարտին Սելիգմանը'],
        correctIndex: 0,
        explanation:
          "Hans Selye developed the concept of the General Adaptation Syndrome, describing the body's three-stage response to stress.",
        explanationKa:
          'ჰანს სელიემ შეიმუშავა ზოგადი ადაპტაციის სინდრომის კონცეფცია, რომელიც აღწერს სტრესზე ორგანიზმის სამეტაპიან რეაქციას.',
        explanationRu:
          'Ганс Селье разработал концепцию Общего адаптационного синдрома, описывающую трехстадийную реакцию организма на стресс.',
        explanationHy: 'Հանս Սելյեն մշակել է Ընդհանուր ադապտացիոն համախտանիշի հայեցակարգը:',
      },
      {
        id: 'q13_3',
        question: 'What is the first stage of the General Adaptation Syndrome?',
        questionKa: 'რომელია ზოგადი ადაპტაციის სინდრომის პირველი ეტაპი?',
        questionRu: 'Какая первая стадия Общего адаптационного синдрома?',
        questionHy: 'Ո՞րն է Ընդհանուր ադապտացիոն համախտանիշի առաջին փուլը:',
        options: ['Resistance', 'Exhaustion', 'Appraisal', 'Alarm'],
        optionsKa: ['წინააღმდეგობა', 'გამოფიტვა', 'შეფასება', 'განგაში'],
        optionsRu: ['Сопротивление', 'Истощение', 'Оценка', 'Тревога (Alarm)'],
        optionsHy: ['Դիմադրություն', 'Հյուծում', 'Գնահատում', 'Տագնապ (Alarm)'],
        correctIndex: 3,
        explanation:
          "The first stage of GAS is 'Alarm', where the fight-or-flight response is initially activated.",
        explanationKa:
          'GAS-ის პირველი ეტაპი არის „განგაში“, სადაც თავდაპირველად აქტიურდება „ბრძოლა ან გაქცევის“ რეაქცია.',
        explanationRu:
          'Первая стадия GAS — это «Тревога», когда первоначально активируется реакция «бей или беги».',
        explanationHy:
          'GAS-ի առաջին փուլը «Տագնապն» է, երբ ակտիվանում է «կռվել կամ փախչել» արձագանքը:',
      },
      {
        id: 'q13_4',
        question: 'Which hormones are primarily released during the fight-or-flight response?',
        questionKa: 'რომელი ჰორმონები გამოიყოფა უპირველესად „ბრძოლის ან გაქცევის“ რეაქციის დროს?',
        questionRu: 'Какие гормоны в основном выделяются во время реакции «бей или беги»?',
        questionHy:
          'Ո՞ր հորմոններն են հիմնականում արտազատվում «կռվել կամ փախչել» արձագանքի ժամանակ:',
        options: [
          'Serotonin and Dopamine',
          'Adrenaline and Cortisol',
          'Melatonin and Endorphins',
          'Insulin and Glucagon',
        ],
        optionsKa: [
          'სეროტონინი და დოფამინი',
          'ადრენალინი და კორტიზოლი',
          'მელატონინი და ენდორფინები',
          'ინსულინი და გლუკაგონი',
        ],
        optionsRu: [
          'Серотонин и дофамин',
          'Адреналин и кортизол',
          'Мелатонин и эндорфины',
          'Инсулин и глюкагон',
        ],
        optionsHy: [
          'Սերոտոնին և դոֆամին',
          'Ադրենալին և կորտիզոլ',
          'Մելատոնին և էնդորֆիններ',
          'Ինսուլին և գլյուկագոն',
        ],
        correctIndex: 1,
        explanation:
          'During stress, the sympathetic nervous system stimulates the release of adrenaline and cortisol.',
        explanationKa:
          'სტრესის დროს, სიმპათიკური ნერვული სისტემა ასტიმულირებს ადრენალინისა და კორტიზოლის გამოყოფას.',
        explanationRu:
          'Во время стресса симпатическая нервная система стимулирует выброс адреналина и кортизола.',
        explanationHy:
          'Սթրեսի ժամանակ սիմպաթիկ նյարդային համակարգը խթանում է ադրենալինի և կորտիզոլի արտազատումը:',
      },
      {
        id: 'q13_5',
        question:
          'According to research, which type of stressors often affects our daily health the most?',
        questionKa:
          'კვლევების თანახმად, რომელი ტიპის სტრესორები ახდენს ხშირად ყველაზე დიდ გავლენას ჩვენს ჯანმრთელობაზე?',
        questionRu:
          'Согласно исследованиям, какой тип стрессоров часто больше всего влияет на наше здоровье?',
        questionHy:
          'Ըստ հետազոտությունների, ո՞ր տեսակի սթրեսներն են հաճախ ամենաշատը ազդում մեր առողջության վրա:',
        options: [
          'Major catastrophes',
          'Rare life changes',
          'Daily hassles',
          'Positive life events',
        ],
        optionsKa: [
          'დიდი კატასტროფები',
          'იშვიათი ცხოვრებისეული ცვლილებები',
          'ყოველდღიური სირთულეები (hassles)',
          'პოზიტიური ცხოვრებისეული მოვლენები',
        ],
        optionsRu: [
          'Крупные катастрофы',
          'Редкие перемены в жизни',
          'Ежедневные хлопоты (проблемы)',
          'Позитивные жизненные события',
        ],
        optionsHy: [
          'Մեծ աղետներ',
          'Կյանքի հազվադեպ փոփոխություններ',
          'Ամենօրյա դժվարություններ',
          'Դրական կենսական իրադարձություններ',
        ],
        correctIndex: 2,
        explanation:
          'Research indicates that the chronic nature of daily hassles (traffic, deadlines) can take a significant cumulative toll on health.',
        explanationKa:
          'კვლევები აჩვენებს, რომ ყოველდღიური სირთულეების (მაგ. საცობები, დედლაინები) ქრონიკულმა ხასიათმა შეიძლება მნიშვნელოვანი კუმულატიური ზიანი მიაყენოს ჯანმრთელობას.',
        explanationRu:
          'Исследования показывают, что хронический характер повседневных проблем (пробки, дедлайны) может нанести значительный совокупный ущерб здоровью.',
        explanationHy:
          'Հետազոտությունները ցույց են տալիս, որ ամենօրյա դժվարությունների քրոնիկական բնույթը կարող է զգալի վնաս հասցնել առողջությանը:',
      },
      {
        id: 'q13_6',
        question: "What is 'psychoneuroimmunology'?",
        questionKa: 'რა არის „ფსიქონეიროიმუნოლოგია“?',
        questionRu: 'Что такое «психонейроиммунология»?',
        questionHy: 'Ի՞նչ է «հոգենյարդաիմունաբանությունը»:',
        options: [
          'The study of how mental processes affect the immune system',
          'The use of medication to cure mental illness',
          'A type of cognitive therapy for stress',
          'The study of brain anatomy',
        ],
        optionsKa: [
          'შესწავლა იმისა, თუ როგორ მოქმედებს მენტალური პროცესები იმუნურ სისტემაზე',
          'მედიკამენტების გამოყენება ფსიქიკური დაავადებების განსაკურნად',
          'სტრესისთვის განკუთვნილი კოგნიტური თერაპიის სახეობა',
          'ტვინის ანატომიის შესწავლა',
        ],
        optionsRu: [
          'Изучение того, как психические процессы влияют на иммунную систему',
          'Использование лекарств для лечения психических заболеваний',
          'Вид когнитивной терапии стресса',
          'Изучение анатомии мозга',
        ],
        optionsHy: [
          'Ուսումնասիրություն այն մասին, թե ինչպես են մտավոր գործընթացները ազդում իմունային համակարգի վրա',
          'Դեղամիջոցների օգտագործում հոգեկան հիվանդությունները բուժելու համար',
          'Սթրեսի ճանաչողական թերապիայի տեսակ',
          'Ուղեղի անատոմիայի ուսումնասիրություն',
        ],
        correctIndex: 0,
        explanation:
          'Psychoneuroimmunology studies the interactions between psychological processes, the nervous system, and the immune system.',
        explanationKa:
          'ფსიქონეიროიმუნოლოგია შეისწავლის ფსიქოლოგიური პროცესების, ნერვული სისტემისა და იმუნური სისტემის ურთიერთქმედებას.',
        explanationRu:
          'Психонейроиммунология изучает взаимодействие психологических процессов, нервной системы и иммунной системы.',
        explanationHy:
          'Հոգենյարդաիմունաբանությունը ուսումնասիրում է հոգեբանական գործընթացների, նյարդային համակարգի և իմունային համակարգի փոխազդեցությունները:',
      },
      {
        id: 'q13_7',
        question:
          'Which coping strategy involves trying to directly change or solve the stress-causing situation?',
        questionKa:
          'დაძლევის რომელი სტრატეგია მოიცავს სტრესის გამომწვევი სიტუაციის უშუალოდ შეცვლის ან გადაჭრის მცდელობას?',
        questionRu:
          'Какая копинг-стратегия предполагает попытку напрямую изменить или разрешить ситуацию, вызывающую стресс?',
        questionHy:
          'Ո՞ր հաղթահարման ռազմավարությունն է ներառում սթրես առաջացնող իրավիճակը ուղղակիորեն փոխելու կամ լուծելու փորձը:',
        options: ['Emotion-focused coping', 'Avoidance coping', 'Problem-focused coping', 'Denial'],
        optionsKa: [
          'ემოციაზე ორიენტირებული დაძლევა',
          'აცილებისა და არიდების დაძლევა',
          'პრობლემაზე ორიენტირებული დაძლევა',
          'უარყოფა',
        ],
        optionsRu: [
          'Эмоционально-ориентированный копинг',
          'Копинг избегания',
          'Проблемно-ориентированный копинг',
          'Отрицание',
        ],
        optionsHy: [
          'Հույզերի վրա կենտրոնացած հաղթահարում',
          'Խուսափման հաղթահարում',
          'Խնդրի վրա կենտրոնացած հաղթահարում',
          'Ժխտում',
        ],
        correctIndex: 2,
        explanation:
          'Problem-focused coping is tackling the problem head-on to change the stressor itself. It works best for controllable events.',
        explanationKa:
          'პრობლემაზე ორიენტირებული დაძლევა გულისხმობს პრობლემასთან პირისპირ შეჭიდებას, უშუალოდ სტრესორის შესაცვლელად.',
        explanationRu:
          'Проблемно-ориентированный копинг — это решение проблемы для устранения самого источника стресса.',
        explanationHy:
          'Խնդրի վրա կենտրոնացած հաղթահարումը ուղղակիորեն զբաղվում է խնդրով, որպեսզի փոխի բուն սթրեսորը:',
      },
      {
        id: 'q13_8',
        question:
          'When a situation is entirely out of your control, which coping strategy is generally more effective?',
        questionKa:
          'როდესაც სიტუაცია სრულიად უკონტროლოა, დაძლევის რომელი სტრატეგიაა ზოგადად უფრო ეფექტური?',
        questionRu:
          'Когда ситуация полностью выходит из-под вашего контроля, какая копинг-стратегия обычно более эффективна?',
        questionHy:
          'Երբ իրավիճակն ամբողջովին ձեր վերահսկողությունից դուրս է, հաղթահարման ո՞ր ռազմավարությունն է առավել արդյունավետ:',
        options: [
          'Problem-focused coping',
          'Rationalization',
          'Emotion-focused coping',
          'Aggressive confrontation',
        ],
        optionsKa: [
          'პრობლემაზე ორიენტირებული დაძლევა',
          'რაციონალიზაცია',
          'ემოციაზე ორიენტირებული დაძლევა',
          'აგრესიული კონფრონტაცია',
        ],
        optionsRu: [
          'Проблемно-ориентированный копинг',
          'Рационализация',
          'Эмоционально-ориентированный копинг',
          'Агрессивная конфронтация',
        ],
        optionsHy: [
          'Խնդրի վրա կենտրոնացած հաղթահարում',
          'Ռացիոնալիզացիա',
          'Հույզերի վրա կենտրոնացած հաղթահարում',
          'Ագրեսիվ դիմակայություն',
        ],
        correctIndex: 2,
        explanation:
          'Emotion-focused coping helps manage the negative feelings when the stressor itself cannot be directly changed.',
        explanationKa:
          'ემოციაზე ორიენტირებული დაძლევა ეხმარება ნეგატიური გრძნობების მართვაში, როდესაც თავად სტრესორის შეცვლა შეუძლებელია.',
        explanationRu:
          'Эмоционально-ориентированный копинг помогает справиться с негативными чувствами, когда сам стрессор нельзя изменить напрямую.',
        explanationHy:
          'Հույզերի վրա կենտրոնացած հաղթահարումն օգնում է կառավարել բացասական զգացմունքները, երբ բուն սթրեսորն անհնար է փոխել:',
      },
      {
        id: 'q13_9',
        question: 'What is considered the number one buffer against stress?',
        questionKa: 'რა ითვლება სტრესის წინააღმდეგ ნომერ პირველ ბუფერად?',
        questionRu: 'Что считается буфером номер один против стресса?',
        questionHy: 'Ի՞նչն է համարվում սթրեսի դեմ պայքարի թիվ մեկ բուֆերը:',
        options: ['High income', 'Social support', 'Dieting', 'Sleeping a lot'],
        optionsKa: ['მაღალი შემოსავალი', 'სოციალური მხარდაჭერა', 'დიეტა', 'ბევრი ძილი'],
        optionsRu: ['Высокий доход', 'Социальная поддержка', 'Диета', 'Длительный сон'],
        optionsHy: ['Բարձր եկամուտ', 'Սոցիալական աջակցություն', 'Դիետա', 'Շատ քնել'],
        correctIndex: 1,
        explanation:
          'Having a strong social support network is shown to be the most critical protective factor against the negative impacts of stress.',
        explanationKa:
          'ძლიერი სოციალური მხარდაჭერის ქსელის არსებობა ნაჩვენებია, როგორც სტრესის უარყოფითი ზემოქმედებისგან ყველაზე მნიშვნელოვანი დამცავი ფაქტორი.',
        explanationRu:
          'Наличие сильной сети социальной поддержки доказано как наиболее критический защитный фактор от негативных последствий стресса.',
        explanationHy:
          'Ամուր սոցիալական աջակցության ցանց ունենալը համարվում է սթրեսի բացասական ազդեցություններից պաշտպանող կարևորագույն գործոնը:',
      },
      {
        id: 'q13_10',
        question: 'What physiological change is linked to practicing mindfulness and meditation?',
        questionKa:
          'რომელი ფიზიოლოგიური ცვლილებაა დაკავშირებული გონებამახვილობისა (mindfulness) და მედიტაციის პრაქტიკასთან?',
        questionRu:
          'Какое физиологическое изменение связано с практикой осознанности (mindfulness) и медитации?',
        questionHy: 'Ո՞ր ֆիզիոլոգիական փոփոխությունն է կապված մեդիտացիայի պրակտիկայի հետ:',
        options: [
          'Increased blood pressure',
          'Higher cortisol levels',
          'Reduced amygdala reactivity',
          'Faster cellular aging',
        ],
        optionsKa: [
          'სისხლის წნევის მომატება',
          'კორტიზოლის მაღალი დონე',
          'ამიგდალას რეაქტიულობის შემცირება',
          'უჯრედების უფრო სწრაფი დაბერება',
        ],
        optionsRu: [
          'Повышение артериального давления',
          'Более высокий уровень кортизола',
          'Снижение реактивности миндалевидного тела',
          'Ускоренное старение клеток',
        ],
        optionsHy: [
          'Արյան ճնշման բարձրացում',
          'Կորտիզոլի բարձր մակարդակ',
          'Նվազեցված ամիգդալայի ռեակտիվություն',
          'Բջջային արագ ծերացում',
        ],
        correctIndex: 2,
        explanation:
          'Meditation and mindfulness can reduce the reactivity of the amygdala, which processes fear and emotion, thereby lowering stress.',
        explanationKa:
          'მედიტაციას და მაინდფულნესს შეუძლია შეამციროს ამიგდალას რეაქტიულობა (რომელიც ამუშავებს შიშს და ემოციებს), რითაც ამცირებს სტრესს.',
        explanationRu:
          'Медитация и осознанность могут снизить реактивность миндалевидного тела, обрабатывающего страх и эмоции, тем самым снижая стресс.',
        explanationHy:
          'Մեդիտացիան կարող է նվազեցնել ամիգդալայի ռեակտիվությունը, որը մշակում է վախն ու հույզերը՝ դրանով իսկ նվազեցնելով սթրեսը:',
      },
      {
        id: 'q13_11',
        question: 'How does chronic stress generally affect the immune system?',
        questionKa: 'როგორ მოქმედებს ზოგადად ქრონიკული სტრესი იმუნურ სისტემაზე?',
        questionRu: 'Как хронический стресс в целом влияет на иммунную систему?',
        questionHy: 'Ինչպե՞ս է քրոնիկ սթրեսը ընդհանուր առմամբ ազդում իմունային համակարգի վրա:',
        options: [
          'It greatly strengthens it',
          'It suppresses and weakens it',
          'It makes it completely attack the body',
          'It has no significant effect',
        ],
        optionsKa: [
          'ის დიდად აძლიერებს მას',
          'ისი თრგუნავს და ასუსტებს მას',
          'ის აიძულებს მას მთლიანად დაესხას თავს ორგანიზმს',
          'მას არავითარი მნიშვნელოვანი ეფექტი არ აქვს',
        ],
        optionsRu: [
          'Значительно укрепляет ее',
          'Подавляет и ослабляет ее',
          'Заставляет полностью атаковать сам организм',
          'Не оказывает существенного влияния',
        ],
        optionsHy: [
          'Այն մեծապես ուժեղացնում է համակարգը',
          'Այն ճնշում և թուլացնում է համակարգը',
          'Այն ստիպում է նրան ամբողջությամբ հարձակվել մարմնի վրա',
          'Այն զգալի ազդեցություն չունի',
        ],
        correctIndex: 1,
        explanation:
          "Chronic stress consumes the body's resources, shifting energy away from the immune system, thereby suppressing it and making the individual more vulnerable to illness.",
        explanationKa:
          'ქრონიკული სტრესი მოიხმარს ორგანიზმის რესურსებს, ენერგია მიაქვს იმუნური სისტემიდან, თრგუნავს მას და ადამიანს უფრო მოწყვლადს ხდის დაავადებების მიმართ.',
        explanationRu:
          'Хронический стресс потребляет ресурсы организма, отвлекая энергию от иммунной системы, подавляя её и делая человека более уязвимым к болезням.',
        explanationHy:
          'Քրոնիկ սթրեսը սպառում է մարմնի ռեսուրսները՝ էներգիան հեռացնելով իմունային համակարգից, ճնշելով այն և դարձնելով մարդուն ավելի խոցելի հիվանդությունների նկատմամբ:',
      },
      {
        id: 'q13_12',
        question:
          'Which of these is considered a physiological benefit of exercise in managing stress?',
        questionKa:
          'ჩამოთვლილთაგან რომელი ითვლება ვარჯიშის ფიზიოლოგიურ სარგებლად სტრესის მართვაში?',
        questionRu:
          'Что из этого считается физиологическим преимуществом физических упражнений в управлении стрессом?',
        questionHy:
          'Այս թվարկվածներից ո՞րն է համարվում վարժությունների ֆիզիոլոգիական օգուտը սթրեսի կառավարման գործում:',
        options: [
          'It increases cortisol permanently',
          'It reduces cortisol levels',
          'It stops the fight-or-flight response forever',
          'It decreases endorphins',
        ],
        optionsKa: [
          'ისი მუდმივად ზრდის კორტიზოლს',
          'ის ამცირებს კორტიზოლის დონეს',
          'ის სამუდამოდ აჩერებს „ბრძოლის ან გაქცევის“ რეაქციას',
          'ის ამცირებს ენდორფინებს',
        ],
        optionsRu: [
          'Это навсегда повышает кортизол',
          'Это снижает уровень кортизола',
          'Это навсегда останавливает реакцию бить или бежать',
          'Это снижает уровень эндорфинов',
        ],
        optionsHy: [
          'Այն ընդմիշտ բարձրացնում է կորտիզոլը',
          'Այն նվազեցնում է կորտիզոլի մակարդակը',
          'Այն ընդմիշտ դադարեցնում է «կռվել կամ փախչել» արձագանքը',
          'Այն նվազեցնում է էնդորֆինները',
        ],
        correctIndex: 1,
        explanation:
          'Exercise helps buffer against stress by burning off excess stress hormones like cortisol and increasing endorphins.',
        explanationKa:
          'ვარჯიში გვეხმარება სტრესის შემსუბუქებაში სტრესის ჰორმონების (მაგ. კორტიზოლის) დაწვისა და ენდორფინების გაზრდის გზით.',
        explanationRu:
          'Физические упражнения помогают бороться со стрессом, сжигая избыток гормонов стресса (таких как кортизол) и повышая уровень эндорфинов.',
        explanationHy:
          'Վարժություններն օգնում են պայքարել սթրեսի դեմ՝ այրելով ավելցուկային սթրեսի հորմոնները և ավելացնելով էնդորֆինները:',
      },
      {
        id: 'q13_13',
        question: "What does 'perceived control' mean in the context of stress?",
        questionKa: 'რას ნიშნავს სტრესის კონტექსტში „აღქმული კონტროლი“?',
        questionRu: 'Что означает «ощущение контроля» (perceived control) в контексте стресса?',
        questionHy: 'Ի՞նչ է նշանակում «ընկալվող վերահսկողություն» սթրեսի համատեքստում:',
        options: [
          'Believing you are responsible for everything bad',
          'Believing you have power over your stressors and outcomes',
          "Controlling other people's behavior",
          'Suppressing all your natural emotions',
        ],
        optionsKa: [
          'რწმენა, რომ შენ ხარ პასუხისმგებელი ყველაფერ ცუდზე',
          'რწმენა, რომ გაქვს ძალაუფლება შენს სტრესორებზე და შედეგებზე',
          'სხვა ადამიანების ქცევის გაკონტროლება',
          'ყველა ბუნებრივი ემოციის დათრგუნვა',
        ],
        optionsRu: [
          'Вера в то, что вы ответственны за все плохое',
          'Убеждение, что вы можете влиять на стрессоры и результаты',
          'Контроль над поведением других людей',
          'Подавление всех своих естественных эмоций',
        ],
        optionsHy: [
          'Հավատալ, որ դու ես պատասխանատու ամեն վատ բանի համար',
          'Համոզմունք, որ դուք կարող եք ազդել սթրեսների և արդյունքների վրա',
          'Այլ մարդկանց վարքագծի վերահսկում',
          'Ձեր բոլոր բնական հույզերը ճնշելը',
        ],
        correctIndex: 1,
        explanation:
          'Perceived control refers to our belief that we can influence our environment and outcomes, which greatly reduces distress.',
        explanationKa:
          'აღქმული კონტროლი გულისხმობს ჩვენს რწმენას, რომ შეგვიძლია გავლენა მოვახდინოთ ჩვენს გარემოსა და შედეგებზე, რაც დიდად ამცირებს დისტრესს.',
        explanationRu:
          'Ощущение контроля означает нашу веру в то, что мы можем влиять на свое окружение и результаты, что значительно снижает дистресс.',
        explanationHy:
          'Ընկալվող վերահսկողությունը վերաբերում է մեր համոզմունքին, որ մենք կարող ենք ազդել մեր միջավայրի և արդյունքների վրա, ինչը մեծապես նվազեցնում է սթրեսը:',
      },
      {
        id: 'q13_14',
        question:
          'Which psychological condition involves emotional exhaustion, depersonalization, and reduced accomplishment, often affecting workers?',
        questionKa:
          'რომელი ფსიქოლოგიური მდგომარეობა მოიცავს ემოციურ გამოფიტვას, დეპერსონალიზაციას და მიღწევის გრძნობის დაქვეითებას, და ხშირად აწუხებს დასაქმებულებს?',
        questionRu:
          'Какое психологическое состояние включает эмоциональное истощение, деперсонализацию и снижение чувства достижений, и часто влияет на работников?',
        questionHy:
          'Ո՞ր հոգեբանական վիճակն է ներառում հուզական հյուծում և հաճախ ազդում աշխատողների վրա:',
        options: ['Burnout', 'Schizophrenia', 'General Adaptation Syndrome', 'Bipolar Disorder'],
        optionsKa: [
          'პროფესიული გადაწვა (Burnout)',
          'შიზოფრენია',
          'ზოგადი ადაპტაციის სინდრომი',
          'ბიპოლარული აშლილობა',
        ],
        optionsRu: [
          'Выгорание (Burnout)',
          'Шизофрения',
          'Общий адаптационный синдром',
          'Биполярное расстройство',
        ],
        optionsHy: [
          'Մասնագիտական այրում (Burnout)',
          'Շիզոֆրենիա',
          'Ընդհանուր ադապտացիոն համախտանիշ',
          'Երկբևեռ խանգարում',
        ],
        correctIndex: 0,
        explanation:
          'Burnout is a state of physical, emotional, and mental exhaustion caused by long-term involvement in emotionally demanding situations.',
        explanationKa:
          'პროფესიული გადაწვა (ბარნაუტი) არის ფიზიკური, ემოციური და გონებრივი გამოფიტვის მდგომარეობა, რომელიც გამოწვეულია ემოციურად მომთხოვნ სიტუაციებში ხანგრძლივი ჩართულობით.',
        explanationRu:
          'Выгорание — это состояние физического, эмоционального и умственного истощения, вызванное длительным участием в эмоционально тяжелых ситуациях.',
        explanationHy:
          'Այրումը ֆիզիկական, հուզական և մտավոր սպառման վիճակ է, որն առաջանում է էմոցիոնալ պահանջկոտ իրավիճակներում երկարատև ներգրավվածությունից:',
      },
      {
        id: 'q13_15',
        question: 'How can laughter therapy physically help in stress reduction?',
        questionKa: 'როგორ შეუძლია ფიზიკურად დაგვეხმაროს სიცილის თერაპია სტრესის შემცირებაში?',
        questionRu: 'Как смехотерапия физически помогает снизить стресс?',
        questionHy: 'Ինչպե՞ս կարող է ծիծաղի թերապիան ֆիզիկապես օգնել սթրեսի նվազեցմանը:',
        options: [
          'By permanently altering our DNA',
          'By reducing cortisol up to 39% and increasing endorphins',
          'By drastically lowering blood sugar',
          'By instantly curing all physical illnesses',
        ],
        optionsKa: [
          'ჩვენი დნმ-ის მუდმივი შეცვლით',
          'კორტიზოლის 39%-მდე შემცირებით და ენდორფინების გაზრდით',
          'სისხლში შაქრის მკვეთრი დაწევით',
          'ყველა ფიზიკური დაავადების მყისიერი განკურნებით',
        ],
        optionsRu: [
          'Путем необратимого изменения нашей ДНК',
          'Снижением уровня кортизола до 39% и повышением эндорфинов',
          'Резким снижением уровня сахара в крови',
          'Мгновенным излечением всех физических болезней',
        ],
        optionsHy: [
          'Մեր ԴՆԹ-ն ընդմիշտ փոխելով',
          'Կորտիզոլը մինչև 39%-ով նվազեցնելով և էնդորֆինները բարձրացնելով',
          'Արյան մեջ շաքարի մակարդակը կտրուկ նվազեցնելով',
          'Բոլոր ֆիզիկական հիվանդությունները ակնթարթորեն բուժելով',
        ],
        correctIndex: 1,
        explanation:
          'Laughter has been empirically shown to reduce stress hormones like cortisol by up to 39% while increasing mood-lifting endorphins.',
        explanationKa:
          'სიცილი ემპირიულად დადასტურებულია, რომ ამცირებს სტრესის ჰორმონებს (კორტიზოლს) 39%-მდე, ამავდროულად ზრდის გუნება-განწყობის ასამაღლებელ ენდორფინებს.',
        explanationRu:
          'Эмпирически доказано, что смех снижает уровень гормонов стресса (кортизол) до 39%, одновременно повышая уровень эндорфинов.',
        explanationHy:
          'Ապացուցված է, որ ծիծաղը նվազեցնում է սթրեսի հորմոնները (կորտիզոլը) մինչև 39%-ով՝ միաժամանակ ավելացնելով էնդորֆինները:',
      },
    ],
  },
  {
    id: 'q14',
    chapterId: 14,
    title: 'Psychological Disorders',
    titleKa: 'ფსიქოლოგიური დარღვევები',
    titleRu: 'Психологические расстройства',
    titleHy: 'Հոգեբանական խանգարումներ',
    questions: [
      {
        id: 'q14_1',
        question: "What does a psychological disorder typically involve according to the '3 D's'?",
        questionKa: 'რას გულისხმობს ფსიქოლოგიური აშლილობა „3 D-ს“ პრინციპის მიხედვით?',
        questionRu: 'Что включает в себя психологическое расстройство согласно принципу «3 Д»?',
        questionHy: 'Ի՞նչ է իրենից ներկայացնում հոգեբանական խանգարումը ըստ «3 D-ի» սկզբունքի:',
        options: [
          'Delightful, distracting, and desirable behaviors',
          'Deviant, distressful, and dysfunctional behaviors',
          'Dominant, directed, and disciplined behavior',
          'Decreased, delayed, and dismissed thoughts',
        ],
        optionsKa: [
          'სასიამოვნო, ყურადღების გამფანტავი და სასურველი ქცევები',
          'დევიანტური, მტკივნეული (სტრესული) და დისფუნქციური ქცევები',
          'დომინანტური, მიმართული და დისციპლინირებული ქცევა',
          'შემცირებული, დაგვიანებული და უგულებელყოფილი ფიქრები',
        ],
        optionsRu: [
          'Приятное, отвлекающее и желательное поведение',
          'Девиантное, вызывающее дистресс и дисфункциональное поведение',
          'Доминирующее, направленное и дисциплинированное поведение',
          'Подавленные, отсроченные и отвергнутые мысли',
        ],
        optionsHy: [
          'Հաճելի, շեղող և ցանկալի վարքագիծ',
          'Շեղված, տագնապալի և դիսֆունկցիոնալ վարքագիծ',
          'Գերիշխող, ուղղորդված և կարգապահ վարքագիծ',
          'Նվազեցված, հետաձգված և մերժված մտքեր',
        ],
        correctIndex: 1,
        explanation:
          'A psychological disorder is commonly characterized by patterns of thought, feeling, or behavior that are deviant (different from the norm), distressful (causing suffering), and dysfunctional (impairing daily life).',
        explanationKa:
          'ფსიქოლოგიური აშლილობა ხასიათდება აზრების, გრძნობების ან ქცევის ნიმუშებით, რომლებიც არის დევიანტური, მტკივნეული/სტრესული და დისფუნქციური.',
        explanationRu:
          'Психологическое расстройство обычно характеризуется паттернами мышления, чувств или поведения, которые являются девиантными (отклоняющимися от нормы), вызывающими дистресс (страдание) и дисфункциональными.',
        explanationHy:
          'Հոգեբանական խանգարումը սովորաբար բնութագրվում է մտքի, զգացմունքի կամ վարքի օրինաչափություններով, որոնք շեղված են, տագնապալի և դիսֆունկցիոնալ:',
      },
      {
        id: 'q14_2',
        question: 'What is the primary purpose of the DSM-5?',
        questionKa: 'რა არის DSM-5-ის მთავარი დანიშნულება?',
        questionRu: 'Какова основная цель DSM-5?',
        questionHy: 'Ո՞րն է DSM-5-ի հիմնական նպատակը:',
        options: [
          'To provide medical cures for mental illness',
          'To categorize and classify mental disorders by symptoms',
          'To replace all other psychology textbooks',
          'To explain the root causes of every psychiatric disorder',
        ],
        optionsKa: [
          'ფსიქიკური აშლილობების სამედიცინო განკურნების უზრუნველყოფა',
          'ფსიქიკური აშლილობების კატეგორიზაცია და კლასიფიკაცია სიმპტომების მიხედვით',
          'ყველა სხვა ფსიქოლოგიური სახელმძღვანელოს ჩანაცვლება',
          'ყოველი ფსიქიატრიული აშლილობის გამომწვევი მიზეზების ახსნა',
        ],
        optionsRu: [
          'Предоставить медицинские лекарства от психических заболеваний',
          'Категоризировать и классифицировать психические расстройства по симптомам',
          'Заменить все другие учебники по психологии',
          'Объяснить первопричины каждого психиатрического расстройства',
        ],
        optionsHy: [
          'Հոգեկան հիվանդությունների բժշկական բուժում ապահովել',
          'Դասակարգել հոգեկան խանգարումները ըստ ախտանիշների',
          'Փոխարինել հոգեբանության բոլոր այլ դասագրքերը',
          'Բացատրել յուրաքանչյուր հոգեբուժական խանգարման հիմնական պատճառները',
        ],
        correctIndex: 1,
        explanation:
          'The Diagnostic and Statistical Manual of Mental Disorders (DSM-5) is used globally to classify mental disorders based on symptoms, aiding in diagnosis.',
        explanationKa:
          'ფსიქიკური აშლილობების დიაგნოსტიკური და სტატისტიკური სახელმძღვანელო (DSM-5) გლობალურად გამოიყენება დარღვევების სიმპტომების მიხედვით კლასიფიკაციისთვის.',
        explanationRu:
          'Диагностическое и статистическое руководство по психическим расстройствам (DSM-5) используется во всем мире для классификации психических расстройств на основе симптомов, что помогает в диагностике.',
        explanationHy:
          'Հոգեկան խանգարումների ախտորոշիչ և վիճակագրական ձեռնարկը (DSM-5) օգտագործվում է ամբողջ աշխարհում հոգեկան խանգարումները ըստ ախտանիշների դասակարգելու համար:',
      },
      {
        id: 'q14_3',
        question:
          'Which anxiety disorder is characterized by persistent, excessive worry about many things without a specific threat?',
        questionKa:
          'რომელი შფოთვითი აშლილობა ხასიათდება მუდმივი, გადაჭარბებული წუხილით ბევრ რამეზე კონკრეტული საფრთხის გარეშე?',
        questionRu:
          'Какое тревожное расстройство характеризуется постоянным, чрезмерным беспокойством о многом без конкретной угрозы?',
        questionHy:
          'Ո՞ր անհանգստության խանգարումն է բնութագրվում մշտական, չափազանց մեծ անհանգստությամբ շատ բաների նկատմամբ՝ առանց որևէ կոնկրետ սպառնալիքի:',
        options: [
          'Panic Disorder',
          'Generalized Anxiety Disorder (GAD)',
          'Specific Phobia',
          'Obsessive-Compulsive Disorder (OCD)',
        ],
        optionsKa: [
          'პანიკური აშლილობა',
          'გენერალიზებული შფოთვითი აშლილობა (GAD)',
          'სპეციფიკური ფობია',
          'ობსესიურ-კომპულსიური აშლილობა (OCD)',
        ],
        optionsRu: [
          'Паническое расстройство',
          'Генерализованное тревожное расстройство (ГТР)',
          'Специфическая фобия',
          'Обсессивно-компульсивное расстройство (ОКР)',
        ],
        optionsHy: [
          'Խուճապի խանգարում',
          'Ընդհանուր անհանգստության խանգարում (GAD)',
          'Հատուկ ֆոբիա',
          'Օբսեսիվ-կոմպուլսիվ խանգարում (OCD)',
        ],
        correctIndex: 1,
        explanation:
          "Generalized Anxiety Disorder (GAD) is characterized by a state of constant, 'free-floating' anxiety and chronic worry.",
        explanationKa:
          'გენერალიზებული შფოთვითი აშლილობა ხასიათდება მუდმივი შფოთვისა და ქრონიკული წუხილის მდგომარეობით.',
        explanationRu:
          'Генерализованное тревожное расстройство (ГТР) характеризуется состоянием постоянной тревоги и хронического беспокойства.',
        explanationHy:
          'Ընդհանուր անհանգստության խանգարումը (GAD) բնութագրվում է մշտական, «ազատ լողացող» անհանգստության և քրոնիկական մտահոգության վիճակով:',
      },
      {
        id: 'q14_4',
        question: 'What are the two main components of OCD (Obsessive-Compulsive Disorder)?',
        questionKa: 'რა არის OCD-ის (ობსესიურ-კომპულსიური აშლილობის) ორი ძირითადი კომპონენტი?',
        questionRu: 'Каковы два основных компонента ОКР (Обсессивно-компульсивного расстройства)?',
        questionHy: 'Որո՞նք են OCD-ի (Օբսեսիվ-կոմպուլսիվ խանգարում) երկու հիմնական բաղադրիչները:',
        options: [
          'Hallucinations and Delusions',
          'Mania and Depression',
          'Obsessive thoughts and Compulsive behaviors (rituals)',
          'Panic attacks and Phobias',
        ],
        optionsKa: [
          'ჰალუცინაციები და ბოდვები',
          'მანია და დეპრესია',
          'ობსესიური ფიქრები და კომპულსიური ქცევები (რიტუალები)',
          'პანიკის შეტევები და ფობიები',
        ],
        optionsRu: [
          'Галлюцинации и бред',
          'Мания и депрессия',
          'Навязчивые мысли (обсессии) и компульсивное поведение (ритуалы)',
          'Панические атаки и фобии',
        ],
        optionsHy: [
          'Հալյուցինացիաներ և զառանցանքներ',
          'Մանիա և դեպրեսիա',
          'Կպչուն մտքեր (օբսեսիաներ) և կոմպուլսիվ վարքագիծ (ծեսեր)',
          'Խուճապի նոպաներ և ֆոբիաներ',
        ],
        correctIndex: 2,
        explanation:
          'OCD involves persistent, disturbing thoughts (obsessions) and repetitive behaviors or mental acts (compulsions) performed to reduce anxiety.',
        explanationKa:
          'OCD მოიცავს მუდმივ, შემაშფოთებელ ფიქრებს (ობსესიებს) და განმეორებად ქცევებს ან რიტუალებს (კომპულსიებს), რომლებიც სრულდება შფოთვის შესამცირებლად.',
        explanationRu:
          'ОКР включает повторяющиеся тревожные мысли (обсессии) и повторяющееся поведение (компульсии), выполняемые для снижения тревожности.',
        explanationHy:
          'OCD-ն ներառում է մշտական, անհանգստացնող մտքեր (օբսեսիաներ) և կրկնվող վարքագիծ (կոմպուլսիաներ), որոնք ուղղված են անհանգստության նվազեցմանը:',
      },
      {
        id: 'q14_5',
        question:
          'To be diagnosed with Major Depressive Disorder, symptoms like profound sadness or loss of interest must last for at least how long?',
        questionKa:
          'რამდენი ხანი უნდა გაგრძელდეს ისეთი სიმპტომები (როგორიცაა ღრმა სევდა ან ინტერესის დაკარგვა), რომ დაისვას მთავარი დეპრესიული აშლილობის დიაგნოზი?',
        questionRu:
          'Как долго должны длиться симптомы (такие как глубокая грусть или потеря интереса) для постановки диагноза Большое депрессивное расстройство?',
        questionHy: 'Որքա՞ն պետք է տևեն ախտանիշները՝ Խոշոր դեպրեսիվ խանգարում ախտորոշելու համար:',
        options: ['2 days', '1 week', '2 weeks', '6 months'],
        optionsKa: ['2 დღე', '1 კვირა', '2 კვირა', '6 თვე'],
        optionsRu: ['2 дня', '1 неделю', '2 недели', '6 месяцев'],
        optionsHy: ['2 օր', '1 շաբաթ', '2 շաբաթ', '6 ամիս'],
        correctIndex: 2,
        explanation:
          'A diagnosis of Major Depressive Disorder requires five or more specific symptoms (including persistent sadness or loss of interest) present for at least 2 weeks.',
        explanationKa:
          'ძირითადი დეპრესიული აშლილობის დიაგნოსტიკა მოითხოვს სიმპტომების მინიმუმ 2 კვირის განმავლობაში უწყვეტად არსებობას.',
        explanationRu:
          'Для диагностики большого депрессивного расстройства необходимо наличие специфических симптомов (включая стойкую грусть) в течение не менее 2 недель.',
        explanationHy:
          'Խոշոր դեպրեսիվ խանգարման ախտորոշումը պահանջում է հատուկ ախտանիշների առկայություն առնվազն 2 շաբաթվա ընթացքում:',
      },
      {
        id: 'q14_6',
        question: 'Bipolar disorder is characterized by alternating episodes of:',
        questionKa: 'რით ხასიათდება ბიპოლარული აშლილობა?',
        questionRu: 'Биполярное расстройство характеризуется чередующимися эпизодами:',
        questionHy: 'Երկբևեռ խանգարումը բնութագրվում է հետևյալ դրվագների հերթագայությամբ:',
        options: [
          'Anxiety and calm',
          'Mania and depression',
          'Hallucinations and delusions',
          'Obsessions and compulsions',
        ],
        optionsKa: [
          'შფოთვა და სიმშვიდე',
          'მანია და დეპრესია',
          'ჰალუცინაციები და ბოდვები',
          'ობსესიები და კომპულსიები',
        ],
        optionsRu: [
          'Тревога и спокойствие',
          'Мания и депрессия',
          'Галлюцинации и бред',
          'Обсессии и компульсии',
        ],
        optionsHy: [
          'Անհանգստություն և հանգստություն',
          'Մանիա և դեպրեսիա',
          'Հալյուցինացիաներ և զառանցանքներ',
          'Օբսեսիաներ և կոմպուլսիաներ',
        ],
        correctIndex: 1,
        explanation:
          'Bipolar disorder involves dramatic mood swings, alternating between periods of severe depression and extreme elation or agitation known as mania.',
        explanationKa:
          'ბიპოლარული აშლილობა მოიცავს გუნება-განწყობის მკვეთრ ცვალებადობას, შეცვლას მძიმე დეპრესიისა და უკიდურესი ამაღლების (მანიის) პერიოდებს შორის.',
        explanationRu:
          'Биполярное расстройство включает резкие перепады настроения, чередование периодов тяжелой депрессии и крайнего возбуждения, известного как мания.',
        explanationHy:
          'Երկբևեռ խանգարումը ներառում է տրամադրության կտրուկ տատանումներ՝ դեպրեսիայի և մանիայի (չափազանցված ոգևորության) փուլերի հերթագայությամբ:',
      },
      {
        id: 'q14_7',
        question: "Which of the following is considered a 'positive symptom' of schizophrenia?",
        questionKa: "ჩამოთვლილთაგან რომელი ითვლება შიზოფრენიის 'პოზიტიურ სიმპტომად'?",
        questionRu: 'Что из нижеперечисленного считается «позитивным симптомом» шизофрении?',
        questionHy: 'Հետևյալներից ո՞րն է համարվում շիզոֆրենիայի «դրական ախտանիշ»:',
        options: [
          'Flat affect (lack of emotion)',
          'Social withdrawal',
          'Hallucinations',
          'Lack of motivation',
        ],
        optionsKa: [
          'ბრტყელი აფექტი (ემოციების ნაკლებობა)',
          'სოციალური იზოლაცია',
          'ჰალუცინაციები',
          'მოტივაციის ნაკლებობა',
        ],
        optionsRu: [
          'Уплощенный аффект (отсутствие эмоций)',
          'Социальная изоляция',
          'Галлюцинации',
          'Недостаток мотивации',
        ],
        optionsHy: [
          'Հարթ աֆեկտ (հույզերի բացակայություն)',
          'Սոցիալական մեկուսացում',
          'Հալյուցինացիաներ',
          'Մոտիվացիայի պակաս',
        ],
        correctIndex: 2,
        explanation:
          "In schizophrenia, 'positive symptoms' refer to the presence of abnormal behaviors/experiences like hallucinations and delusions, while 'negative symptoms' refer to the absence of normal behaviors (like flat affect).",
        explanationKa:
          'შიზოფრენიის დროს „პოზიტიური სიმპტომები“ გულისხმობს ისეთი არანორმალური მოვლენების დამატებას, როგორიცაა ჰალუცინაციები, ხოლო ნეგატიური სიმპტომები არის ნორმალური ქცევების გაქრობა.',
        explanationRu:
          'При шизофрении «позитивные симптомы» означают появление аномального поведения (например, галлюцинаций), а «негативные симптомы» — отсутствие нормального поведения (например, уплощенный аффект).',
        explanationHy:
          'Շիզոֆրենիայի ժամանակ «դրական ախտանիշները» վերաբերում են աննորմալ վարքագծի/փորձառությունների առկայությանը (օրինակ՝ հալյուցինացիաներ):',
      },
      {
        id: 'q14_8',
        question:
          'The excess activity of which neurotransmitter is strongly linked to schizophrenia?',
        questionKa:
          'რომელი ნეიროტრანსმიტერის ჭარბი აქტივობა არის მჭიდროდ დაკავშირებული შიზოფრენიასთან?',
        questionRu: 'Избыточная активность какого нейромедиатора тесно связана с шизофренией?',
        questionHy:
          'Ո՞ր նեյրոհաղորդիչի ավելցուկային ակտիվությունն է սերտորեն կապված շիզոֆրենիայի հետ:',
        options: ['Serotonin', 'Dopamine', 'GABA', 'Acetylcholine'],
        optionsKa: ['სეროტონინი', 'დოფამინი', 'GABA', 'აცეტილქოლინი'],
        optionsRu: ['Серотонин', 'Дофамин', 'ГАМК (GABA)', 'Ацетилхолин'],
        optionsHy: ['Սերոտոնին', 'Դոֆամին', 'GABA', 'Ացետիլխոլին'],
        correctIndex: 1,
        explanation:
          'The dopamine hypothesis suggests that an overactive dopamine system in the brain contributes to the positive symptoms of schizophrenia.',
        explanationKa:
          'დოფამინის ჰიპოთეზა ვარაუდობს, რომ ტვინში დოფამინის სისტემის ზედმეტი აქტივობა ხელს უწყობს შიზოფრენიის პოზიტიურ სიმპტომებს.',
        explanationRu:
          'Дофаминовая гипотеза предполагает, что гиперактивная дофаминовая система в мозге способствует развитию позитивных симптомов шизофрении.',
        explanationHy:
          'Դոֆամինի վարկածը ենթադրում է, որ ուղեղում գերակտիվ դոֆամինային համակարգը նպաստում է շիզոֆրենիայի դրական ախտանիշներին:',
      },
      {
        id: 'q14_9',
        question:
          "Which personality disorder is characterized by a complete disregard for others' rights and a lack of empathy or remorse?",
        questionKa:
          'პიროვნების რომელი აშლილობა ხასიათდება სხვების უფლებების სრული უგულებელყოფით და ემპათიის ან სინანულის ნაკლებობით?',
        questionRu:
          'Какое расстройство личности характеризуется полным пренебрежением правами других людей и отсутствием эмпатии или раскаяния?',
        questionHy:
          'Անհատականության ո՞ր խանգարումն է բնութագրվում ուրիշների իրավունքների ամբողջական անտեսմամբ և կարեկցանքի կամ զղջման բացակայությամբ:',
        options: [
          'Borderline Personality Disorder',
          'Narcissistic Personality Disorder',
          'Antisocial Personality Disorder',
          'Dependent Personality Disorder',
        ],
        optionsKa: [
          'მოსაზღვრე პიროვნების აშლილობა (Borderline)',
          'ნარცისული პიროვნების აშლილობა',
          'ანტისოციალური პიროვნების აშლილობა',
          'დამოკიდებული პიროვნების აშლილობა',
        ],
        optionsRu: [
          'Пограничное расстройство личности',
          'Нарциссическое расстройство личности',
          'Антисоциальное расстройство личности',
          'Зависимое расстройство личности',
        ],
        optionsHy: [
          'Սահմանային անհատականության խանգարում',
          'Նարցիսիստական ​​անհատականության խանգարում',
          'Հակասոցիալական անհատականության խանգարում',
          'Կախյալ անհատականության խանգարում',
        ],
        correctIndex: 2,
        explanation:
          'Antisocial personality disorder is marked by a pervasive pattern of disregarding the rights of others, often seen in criminal behavior without remorse.',
        explanationKa:
          'ანტისოციალური პიროვნების აშლილობა გამოირჩევა სხვათა უფლებების უგულებელყოფით, რაც ხშირად ვლინდება კრიმინალურ ქცევაში სინანულის გარეშე.',
        explanationRu:
          'Антисоциальное расстройство личности отличается склонностью к пренебрежению правами других, что часто проявляется в криминальном поведении без раскаяния.',
        explanationHy:
          'Հակասոցիալական անհատականության խանգարումը աչքի է ընկնում ուրիշների իրավունքներն անտեսելու օրինաչափությամբ՝ հաճախ առանց զղջման:',
      },
      {
        id: 'q14_10',
        question:
          "What does the 'diathesis-stress model' propose about the onset of psychological disorders?",
        questionKa:
          'რას გულისხმობს „დიათეზ-სტრესის მოდელი“ ფსიქოლოგიური აშლილობების დაწყების შესახებ?',
        questionRu:
          'Что предлагает модель «диатез-стресс» относительно возникновения психологических расстройств?',
        questionHy:
          'Ի՞նչ է ենթադրում «դիաթեզ-սթրեսի մոդելը» հոգեբանական խանգարումների առաջացման վերաբերյալ:',
        options: [
          'Disorders are purely genetic and unavoidable.',
          'Disorders are caused solely by childhood trauma.',
          'A biological vulnerability (diathesis) combines with environmental stress to trigger a disorder.',
          'Diet and nutrition are the primary causes of mental illness.',
        ],
        optionsKa: [
          'აშლილობები წმინდად გენეტიკური და გარდაუვალია.',
          'აშლილობებს მხოლოდ ბავშვობის ტრავმა იწვევს.',
          'ბიოლოგიური მოწყვლადობა (დიათეზი) ერწყმის გარემოს სტრესს და იწვევს აშლილობას.',
          'დიეტა და კვება ფსიქიკური აშლილობების მთავარი მიზეზია.',
        ],
        optionsRu: [
          'Расстройства чисто генетические и неизбежные.',
          'Расстройства вызываются исключительно детскими травмами.',
          'Биологическая уязвимость (диатез) сочетается со стрессом окружающей среды, провоцируя расстройство.',
          'Диета и питание являются основными причинами психических заболеваний.',
        ],
        optionsHy: [
          'Խանգարումները զուտ գենետիկ են և անխուսափելի:',
          'Խանգարումներն առաջանում են միայն մանկության վնասվածքներով:',
          'Բիոլոգիական խոցելիությունը (դիաթեզը) համակցվում է շրջակա միջավայրի սթրեսի հետ՝ հրահրելով խանգարում:',
          'Դիետան և սնունդը հոգեկան հիվանդությունների հիմնական պատճառներն են:',
        ],
        correctIndex: 2,
        explanation:
          'The diathesis-stress model explains that underlying physical or genetic vulnerabilities (diathesis) require significant environmental stressors to cause a disorder.',
        explanationKa:
          'დიათეზ-სტრესის მოდელი ხსნის, რომ ფიზიკური ან გენეტიკური მოწყვლადობა (დიათეზი) მოითხოვს გარემო სტრესორების არსებობას აშლილობის გამოსაწვევად.',
        explanationRu:
          'Модель описывает, что физическая или генетическая уязвимость требует наличия стрессоров окружающей среды для возникновения расстройства.',
        explanationHy:
          'Մոդելը բացատրում է, որ գենետիկ խոցելիությունը (դիաթեզ) պահանջում է շրջակա միջավայրի սթրեսներ՝ խանգարում առաջացնելու համար:',
      },
      {
        id: 'q14_11',
        question:
          'Which disorder features instability in relationships, self-image, and emotions, along with terrifying fears of abandonment?',
        questionKa:
          'რომელი აშლილობა მოიცავს არასტაბილურობას ურთიერთობებში, თვითშეფასებასა და ემოციებში, ასევე მიტოვების საშინელ შიშს?',
        questionRu:
          'Какое расстройство характеризуется нестабильностью в отношениях, самооценке и эмоциях, а также ужасающим страхом быть покинутым?',
        questionHy:
          'Ո՞ր խանգարումն է ներառում անկայունություն հարաբերություններում, ինքնագնահատականում և հույզերում, ինչպես նաև լքված լինելու սարսափելի վախ։',
        options: [
          'Borderline Personality Disorder',
          'Schizophrenia',
          'Bipolar Disorder',
          'Specific Phobia',
        ],
        optionsKa: [
          'მოსაზღვრე პიროვნების აშლილობა (Borderline)',
          'შიზოფრენია',
          'ბიპოლარული აშლილობა',
          'სპეციფიკური ფობია',
        ],
        optionsRu: [
          'Пограничное расстройство личности',
          'Шизофрения',
          'Биполярное расстройство',
          'Специфическая фобия',
        ],
        optionsHy: [
          'Սահմանային անհատականության խանգարում',
          'Շիզոֆրենիա',
          'Երկբևեռ խանգարում',
          'Հատուկ ֆոբիա',
        ],
        correctIndex: 0,
        explanation:
          'Borderline Personality Disorder is defined by a pattern of severe instability in mood, behavior, and relationships, often tied to a deep fear of abandonment.',
        explanationKa:
          'მოსაზღვრე პიროვნების (Borderline) აშლილობა ხასიათდება გუნება-განწყობის, ქცევისა და ურთიერთობების მძიმე არასტაბილურობით.',
        explanationRu:
          'Пограничное расстройство личности определяется тяжелой нестабильностью настроения, поведения и отношений, часто связанной со страхом быть брошенным.',
        explanationHy:
          'Սահմանային անհատականության խանգարումը բնորոշվում է տրամադրության, վարքի և հարաբերությունների ծանր անկայունությամբ:',
      },
      {
        id: 'q14_12',
        question:
          'What is considered the leading cause of disability worldwide according to psychological statistics?',
        questionKa:
          'ფსიქოლოგიური სტატისტიკის მიხედვით, რა ითვლება შრომისუუნარობის მსოფლიოში წამყვან მიზეზად?',
        questionRu:
          'Что, согласно психологической статистике, считается ведущей причиной инвалидности во всем мире?',
        questionHy:
          'Համաձայն վիճակագրության՝ ի՞նչն է համարվում հաշմանդամության գլխավոր պատճառն աշխարհում:',
        options: ['Schizophrenia', 'Depression', 'OCD', 'Phobias'],
        optionsKa: ['შიზოფრენია', 'დეპრესია', 'OCD (ობსესიურ-კომპულსიური აშლილობა)', 'ფობიები'],
        optionsRu: ['Шизофрения', 'Депрессия', 'ОКР', 'Фобии'],
        optionsHy: ['Շիզոֆրենիա', 'Դեպրեսիա', 'OCD', 'Ֆոբիաներ'],
        correctIndex: 1,
        explanation:
          'Due to its high prevalence and impact on functioning, Major Depressive Disorder is ranked globally as the primary driver of disability.',
        explanationKa:
          'მისი მაღალი გავრცელებისა და ფუნქციონირებაზე გავლენის გამო, დეპრესია გლობალურად განიხილება, როგორც შრომისუუნარობის მთავარი მიზეზი.',
        explanationRu:
          'Из-за высокой распространенности и влияния на функционирование депрессия считается ведущей причиной потери трудоспособности.',
        explanationHy:
          'Իր մեծ տարածվածության պատճառով դեպրեսիան գլոբալ մակարդակում դասվում է որպես հաշմանդամության հիմնական պատճառ:',
      },
      {
        id: 'q14_13',
        question:
          'Approximately what ratio of adults experiences a mental health condition in any given year?',
        questionKa:
          'დაახლოებით რა თანაფარდობით განიცდიან ზრდასრულები ფსიქიკურ აშლილობას ნებისმიერ נემ მოცემულ წელს?',
        questionRu:
          'Какое примерно соотношение взрослых сталкивается с проблемами психического здоровья ежегодно?',
        questionHy:
          'Մոտավորապես քանի՞ մեծահասակ է ամեն տարի բախվում հոգեկան առողջության խնդիրների հետ:',
        options: ['1 in 2 (50%)', '1 in 5 (20%)', '1 in 100 (1%)', '1 in 50 (2%)'],
        optionsKa: ['2-დან 1 (50%)', '5-დან 1 (20%)', '100-დან 1 (1%)', '50-დან 1 (2%)'],
        optionsRu: ['1 из 2 (50%)', '1 из 5 (20%)', '1 из 100 (1%)', '1 из 50 (2%)'],
        optionsHy: ['1-ը 2-ից (50%)', '1-ը 5-ից (20%)', '1-ը 100-ից (1%)', '1-ը 50-ից (2%)'],
        correctIndex: 1,
        explanation:
          'Statistics show that psychological disorders are very common, with roughly 1 in 5, or 20%, of adults experiencing some mental health condition each year.',
        explanationKa:
          'სტატისტიკა აჩვენებს, რომ ფსიქოლოგიური აშლილობები ძალიან გავრცელებულია - დაახლოებით 5-დან 1 ზრდასრული განიცდის მას ყოველწლიურად.',
        explanationRu:
          'Статистика показывает, что психологические расстройства очень распространены: примерно 1 из 5 взрослых ежегодно сталкивается с каким-либо заболеванием.',
        explanationHy:
          'Վիճակագրությունը ցույց է տալիս, որ հոգեբանական խանգարումները շատ տարածված են. յուրաքանչյուր 5-ից 1-ն ամեն տարի ունենում է նման խնդիր:',
      },
      {
        id: 'q14_14',
        question: "What does a 'phobia' involve?",
        questionKa: 'რას მოიცავს „ფობია“?',
        questionRu: 'Что включает в себя «фобия»?',
        questionHy: 'Ի՞նչ է ներառում «ֆոբիան»:',
        options: [
          'Loss of memory',
          'Persistent, irrational fear and avoidance of a specific object or situation',
          'Believing you have multiple personalities',
          'Constant hand washing rituals',
        ],
        optionsKa: [
          'მეხსიერების დაკარგვას',
          'კონკრეტული ობიექტის ან სიტუაციის მიმართ მუდმივ, ირაციონალურ შიშს და არიდებას',
          'რწმენას, რომ მრავალი პიროვნება გაქვს',
          'ხელების დაბანის მუდმივ რიტუალებს',
        ],
        optionsRu: [
          'Потерю памяти',
          'Постоянный, иррациональный страх и избегание определенного объекта или ситуации',
          'Веру в наличие нескольких личностей',
          'Постоянные ритуалы мытья рук',
        ],
        optionsHy: [
          'Հիշողության կորուստ',
          'Որոշակի օբյեկտի կամ իրավիճակի մշտական, անտրամաբանական վախ և դրանից խուսափում',
          'Հավատը՝ որ ունես մի քանի անհատականություն',
          'Ձեռքերը լվանալու մշտական ​​ծեսեր',
        ],
        correctIndex: 1,
        explanation:
          'A specific phobia is an anxiety disorder marked by a persistent, irrational fear and avoidance of a specific trigger.',
        explanationKa:
          'სპეციფიკური ფობია არის შფოთვითი აშლილობა, რომელიც ხასიათდება კონკრეტული ობიექტის/სიტუაციის ირაციონალური შიშით და მისგან არიდებით.',
        explanationRu:
          'Специфическая фобия — это тревожное расстройство, характеризующееся стойким иррациональным страхом и избеганием определенного триггера.',
        explanationHy:
          'Հատուկ ֆոբիան անհանգստության խանգարում է, որը բնութագրվում է որոշակի դրդապատճառի անտրամաբանական վախով և խուսափումով:',
      },
      {
        id: 'q14_15',
        question:
          "What significant shift in mental health treatment is referred to as 'deinstitutionalization'?",
        questionKa:
          'ფსიქიკური ჯანმრთელობის მკურნალობის რა მნიშვნელოვან ცვლილებას ეწოდება „დეინსტიტუციონალიზაცია“?',
        questionRu:
          'Какой значительный сдвиг в лечении психических заболеваний называется «деинституционализацией»?',
        questionHy:
          'Հոգեկան առողջության բուժման ո՞ր նշանակալի տեղաշարժն է կոչվում «դեինստիտուցիոնալիզացիա»:',
        options: [
          'Creating massive asylums in remote areas',
          'Moving from long-term psychiatric hospitals to community-based care',
          'Only treating patients online',
          'Making mental illnesses illegal',
        ],
        optionsKa: [
          'დიდი თავშესაფრების შექმნა შორეულ ადგილებში',
          'გრძელვადიანი ფსიქიატრიული საავადმყოფოებიდან სათემო ზრუნვაზე გადასვლა',
          'პაციენტების მკურნალობა მხოლოდ ონლაინ',
          'ფსიქიკური დაავადებების არალეგალურად გამოცხადება',
        ],
        optionsRu: [
          'Создание массивных приютов в отдаленных районах',
          'Переход от долгосрочных психиатрических больниц к лечению по месту жительства',
          'Лечение пациентов только онлайн',
          'Признание психических заболеваний незаконными',
        ],
        optionsHy: [
          'Մեկուսացված շրջաններում մեծ ապաստարանների ստեղծում',
          'Երկարաժամկետ հոգեբուժական հիվանդանոցներից անցում տեղական համայնքային խնամքի',
          'Հիվանդների բուժումը միայն առցանց',
          'Հոգեկան հիվանդությունները անօրինական ճանաչելը',
        ],
        correctIndex: 1,
        explanation:
          'Deinstitutionalization was a movement starting in the mid-20th century to release patients from mental institutions and treat them in their own communities.',
        explanationKa:
          'დეინსტიტუციონალიზაცია იყო მე-20 საუკუნის შუა წლებში დაწყებული მოძრაობა პაციენტების საავადმყოფოებიდან გაწერისა და საზოგადოებაში მკურნალობის მიზნით.',
        explanationRu:
          'Деинституционализация — это переход с середины 20 века от лечения в закрытых учреждениях к лечению в обществе.',
        explanationHy:
          'Դեինստիտուցիոնալիզացիան շարժում էր 20-րդ դարի կեսերին, որն ուղղված էր հիվանդներին հոգեբուժարաններից ազատելուն և նրանց սեփական համայնքներում բուժելուն:',
      },
    ],
  },
  {
    id: 'q15',
    chapterId: 15,
    title: 'Therapies',
    titleKa: 'თერაპიები',
    titleRu: 'Терапия',
    titleHy: 'Թերապիաներ',
    questions: [
      {
        id: 'q15_1',
        question: 'What is the primary focus of psychoanalytic/psychodynamic therapy?',
        questionKa: 'რა არის ფსიქოანალიტიკური/ფსიქოდინამიკური თერაპიის მთავარი ფოკუსი?',
        questionRu:
          'На чем в первую очередь сосредотачивается психоаналитическая/психодинамическая терапия?',
        questionHy: 'Ո՞րն է հոգեվերլուծական/հոգեդինամիկ թերապիայի հիմնական նպատակը:',
        options: [
          'Changing current negative thought patterns',
          'Exploring unconscious conflicts and early childhood experiences',
          'Prescribing psychotropic medications',
          'Providing unconditional positive regard',
        ],
        optionsKa: [
          'ამჟამინდელი ნეგატიური აზროვნების შაბლონების შეცვლა',
          'არაცნობიერი კონფლიქტებისა და ადრეული ბავშვობის გამოცდილების შესწავლა',
          'ფსიქოტროპული მედიკამენტების დანიშვნა',
          'უპირობო პოზიტიური მიღების უზრუნველყოფა',
        ],
        optionsRu: [
          'Изменение текущих негативных паттернов мышления',
          'Исследование бессознательных конфликтов и раннего детского опыта',
          'Назначение психотропных препаратов',
          'Обеспечение безусловного позитивного отношения',
        ],
        optionsHy: [
          'Ընթացիկ բացասական մտածողության ձևերի փոփոխություն',
          'Անգիտակցական կոնֆլիկտների և վաղ մանկության փորձի ուսումնասիրություն',
          'Հոգեմետ դեղերի նշանակում',
          'Անվերապահ դրական վերաբերմունքի տրամադրում',
        ],
        correctIndex: 1,
        explanation:
          "Psychoanalytic therapy, rooted in Freud's theories, emphasizes resolving unconscious conflicts often stemming from childhood.",
        explanationKa:
          'ფსიქოანალიტიკური თერაპია, რომელიც ეფუძნება ფროიდის თეორიებს, ხაზს უსვამს არაცნობიერი კონფლიქტების მოგვარებას, რომლებიც ხშირად ბავშვობიდან მოდის.',
        explanationRu:
          'Психоаналитическая терапия, основанная на теориях Фрейда, подчеркивает разрешение бессознательных конфликтов, часто проистекающих из детства.',
        explanationHy:
          'Հոգեվերլուծական թերապիան շեշտում է հաճախ մանկությունից բխող անգիտակցական կոնֆլիկտների լուծումը:',
      },
      {
        id: 'q15_2',
        question:
          'Which therapy focuses on identifying and changing distorted thinking patterns and maladaptive behaviors?',
        questionKa:
          'რომელი თერაპია ფოკუსირდება დამახინჯებული აზროვნების შაბლონებისა და არაადაპტური ქცევების იდენტიფიკაციასა და შეცვლაზე?',
        questionRu:
          'Какая терапия фокусируется на выявлении и изменении искаженных паттернов мышления и дезадаптивного поведения?',
        questionHy:
          'Ո՞ր թերապիան է կենտրոնանում աղավաղված մտածողության ձևերի և ոչ ադապտիվ վարքագծի բացահայտման ու փոփոխման վրա:',
        options: [
          'Humanistic Therapy',
          'Cognitive-Behavioral Therapy (CBT)',
          'Psychoanalysis',
          'Electroconvulsive Therapy (ECT)',
        ],
        optionsKa: [
          'ჰუმანისტური თერაპია',
          'კოგნიტურ-ბიჰევიორალური თერაპია (CBT)',
          'ფსიქოანალიზი',
          'ელექტროკონვულსიური თერაპია (ECT)',
        ],
        optionsRu: [
          'Гуманистическая терапия',
          'Когнитивно-поведенческая терапия (КПТ/CBT)',
          'Психоанализ',
          'Электросудорожная терапия (ЭСТ)',
        ],
        optionsHy: [
          'Հումանիստական ​​թերապիա',
          'Կոգնիտիվ-վարքագծային թերապիա (CBT)',
          'Հոգեվերլուծություն',
          'Էլեկտրացնցումային թերապիա (ECT)',
        ],
        correctIndex: 1,
        explanation:
          'CBT is a strongly evidence-based, short-term treatment that directly tackles cognitive distortions and harmful behaviors.',
        explanationKa:
          'CBT არის მტკიცებულებებზე დაფუძნებული, მოკლევადიანი თერაპია, რომელიც უშუალოდ უმკლავდება კოგნიტურ დამახინჯებებს და მავნე ქცევებს.',
        explanationRu:
          'КПТ (CBT) — это краткосрочное лечение с сильной доказательной базой, которое напрямую борется с когнитивными искажениями и вредным поведением.',
        explanationHy:
          'CBT-ն ապացույցների վրա հիմնված, կարճաժամկետ բուժում է, որն ուղղակիորեն զբաղվում է ճանաչողական աղավաղումներով և վնասակար վարքագծերով:',
      },
      {
        id: 'q15_3',
        question:
          "What does a humanistic therapist, following Carl Rogers's approach, primarily provide?",
        questionKa:
          'კარლ როჯერსის მიდგომის მიხედვით, რას უზრუნველყოფს ჰუმანისტური თერაპევტი უპირველეს ყოვლისა?',
        questionRu:
          'Что, согласно подходу Карла Роджерса, в первую очередь обеспечивает гуманистический терапевт?',
        questionHy:
          'Կարլ Ռոջերսի մոտեցման համաձայն ի՞նչ է հիմնականում տրամադրում հումանիստական թերապևտը:',
        options: [
          'Strict rules and homework',
          'Deep analysis of dreams',
          'Unconditional positive regard, empathy, and genuineness',
          'Medical diagnoses and prescriptions',
        ],
        optionsKa: [
          'მკაცრ წესებსა და საშინაო დავალებებს',
          'სიზმრების ღრმა ანალიზს',
          'უპირობო პოზიტიურ მიღებას, ემპათიასა და გულწრფელობას',
          'სამედიცინო დიაგნოზებსა და რეცეპტებს',
        ],
        optionsRu: [
          'Строгие правила и домашние задания',
          'Глубокий анализ снов',
          'Безусловное позитивное отношение, эмпатию и искренность',
          'Медицинские диагнозы и рецепты',
        ],
        optionsHy: [
          'Խիստ կանոններ և տնային առաջադրանքներ',
          'Երազների խորը վերլուծություն',
          'Անվերապահ դրական վերաբերմունք, կարեկցանք և անկեղծություն',
          'Բժշկական ախտորոշումներ և դեղատոմսեր',
        ],
        correctIndex: 2,
        explanation:
          'Client-centered therapy hinges on the therapist creating a supportive, non-judgmental environment for self-exploration.',
        explanationKa:
          'კლიენტზე ცენტრირებული თერაპია ეყრდნობა თერაპევტის მიერ შექმნილ მხარდამჭერ, არაგანმსჯელ გარემოს თვითშემეცნებისთვის.',
        explanationRu:
          'Клиент-центрированная терапия опирается на создание терапевтом поддерживающей, безоценочной среды для самоисследования.',
        explanationHy:
          'Հաճախորդի վրա կենտրոնացած թերապիան հենվում է թերապևտի կողմից անվտանգ և չդատապարտող միջավայրի ստեղծման վրա:',
      },
      {
        id: 'q15_4',
        question:
          'What type of medication is commonly used to increase serotonin levels in the treatment of depression?',
        questionKa:
          'როგორი ტიპის მედიკამენტი გამოიყენება დეპრესიის სამკურნალოდ სეროტონინის დონის გასაზრდელად?',
        questionRu:
          'Какой тип лекарств обычно используется для повышения уровня серотонина при лечении депрессии?',
        questionHy:
          'Ինչպիսի՞ դեղամիջոցներ են սովորաբար օգտագործվում դեպրեսիայի բուժման ժամանակ սերոտոնինի մակարդակը բարձրացնելու համար:',
        options: ['Antipsychotics', 'Benzodiazepines', 'SSRIs (Antidepressants)', 'Lithium'],
        optionsKa: [
          'ანტიფსიქოზური საშუალებები',
          'ბენზოდიაზეპინები',
          'SSRI (ანტიდეპრესანტები)',
          'ლითიუმი',
        ],
        optionsRu: ['Антипсихотики', 'Бензодиазепины', 'СИОЗС (антидепрессанты)', 'Литий'],
        optionsHy: [
          'Հակափսիխոտիկներ',
          'Բենզոդիազեպիններ',
          'SSRI-ներ (Հակադեպրեսանտներ)',
          'Լիթիում',
        ],
        correctIndex: 2,
        explanation:
          'Selective Serotonin Reuptake Inhibitors (SSRIs) are the most widely prescribed class of antidepressants, functioning by boosting serotonin availability.',
        explanationKa:
          'სეროტონინის უკუმიტაცების სელექციური ინჰიბიტორები (SSRI) არის ანტიდეპრესანტების ყველაზე ფართოდ დანიშნული კლასი, რომელიც ზრდის სეროტონინის ხელმისაწვდომობას.',
        explanationRu:
          'Селективные ингибиторы обратного захвата серотонина (СИОЗС) являются наиболее широко назначаемым классом антидепрессантов.',
        explanationHy:
          'Սերոտոնինի հետզավթման ընտրողական արգելակիչները (SSRI) հակադեպրեսանտների ամենալայն տարածված դասն են:',
      },
      {
        id: 'q15_5',
        question:
          "What is Aaron Beck's cognitive therapy specifically designed to target and correct?",
        questionKa: 'კონკრეტულად რისკენ არის მიმართული აარონ ბეკის კოგნიტური თერაპია?',
        questionRu: 'На исправление чего конкретно направлена когнитивная терапия Аарона Бека?',
        questionHy: 'Կոնկրետ ի՞նչն է շտկելու համար նախատեսված Աարոն Բեկի կոգնիտիվ թերապիան:',
        options: [
          'Unresolved Oedipus complex',
          'Biological brain tumors',
          'Cognitive distortions (like catastrophizing)',
          'Lack of unconditional positive regard',
        ],
        optionsKa: [
          'მოუგვარებელი ოიდიპოსის კომპლექსი',
          'ტვინის ბიოლოგიური სიმსივნეები',
          'კოგნიტური დამახინჯებები (მაგალითად, კატასტროფიზაცია)',
          'უპირობო პოზიტიური მიღების ნაკლებობა',
        ],
        optionsRu: [
          'Неразрешенный эдипов комплекс',
          'Биологические опухоли головного мозга',
          'Когнитивные искажения (например, катастрофизация)',
          'Отсутствие безусловного позитивного отношения',
        ],
        optionsHy: [
          'Չլուծված Էդիպյան բարդույթ',
          'Ուղեղի կենսաբանական ուռուցքներ',
          'Ճանաչողական աղավաղումներ (օրինակ՝ աղետավորումը)',
          'Անվերապահ դրական վերաբերմունքի բացակայություն',
        ],
        correctIndex: 2,
        explanation:
          "Cognitive therapy aims to change irrational, maladaptive thought processes, termed 'cognitive distortions', such as all-or-nothing thinking.",
        explanationKa:
          'კოგნიტური თერაპია მიზნად ისახავს ირაციონალური, არაადაპტური აზროვნების პროცესების (ე.წ. „კოგნიტური დამახინჯებების“) შეცვლას.',
        explanationRu:
          'Когнитивная терапия направлена на изменение иррациональных, дезадаптивных мыслительных процессов, называемых «когнитивными искажениями».',
        explanationHy:
          'Կոգնիտիվ թերապիան նպատակ ունի փոխել իռացիոնալ, ոչ ադապտիվ մտածողության գործընթացները, որոնք կոչվում են «ճանաչողական աղավաղումներ»:',
      },
      {
        id: 'q15_6',
        question:
          'For which condition is Electroconvulsive Therapy (ECT) primarily used today when other treatments fail?',
        questionKa:
          'დღესდღეობით, რომელ მდგომარეობაში გამოიყენება ძირითადად ელექტროკონვულსიური თერაპია (ECT), როცა სხვა მკურნალობა უშედეგოა?',
        questionRu:
          'Для какого состояния сегодня в основном используется электросудорожная терапия (ЭСТ), когда другие методы лечения не помогают?',
        questionHy:
          'Այսօր հիմնականում ո՞ր հիվանդության դեպքում է օգտագործվում էլեկտրացնցումային թերապիան (ECT), երբ այլ բուժումները ձախողվում են:',
        options: [
          'Mild anxiety',
          'Specific phobias',
          'Severe, treatment-resistant depression',
          'Narcissistic personality disorder',
        ],
        optionsKa: [
          'მსუბუქი შფოთვა',
          'სპეციფიკური ფობიები',
          'მძიმე, მკურნალობისადმი რეზისტენტული დეპრესია',
          'ნარცისული პიროვნების აშლილობა',
        ],
        optionsRu: [
          'Легкая тревога',
          'Специфические фобии',
          'Тяжелая, резистентная к лечению депрессия',
          'Нарциссическое расстройство личности',
        ],
        optionsHy: [
          'Թեթեւ անհանգստություն',
          'Հատուկ ֆոբիաներ',
          'Ծանր, բուժմանը չենթարկվող դեպրեսիա',
          'Նարցիսիստական ​​անհատականության խանգարում',
        ],
        correctIndex: 2,
        explanation:
          'ECT continues to be a highly effective biomedical treatment for severely depressed individuals who do not respond to medications or psychotherapy.',
        explanationKa:
          'ECT კვლავ რჩება უაღრესად ეფექტურ ბიოსამედიცინო მკურნალობად მძიმე დეპრესიის მქონე ადამიანებისთვის, რომლებიც არ რეაგირებენ მედიკამენტებზე ან ფსიქოთერაპიაზე.',
        explanationRu:
          'ЭСТ продолжает оставаться весьма эффективным биомедицинским лечением для людей с тяжелой депрессией, которые не реагируют на лекарства или психотерапию.',
        explanationHy:
          'ECT-ն շարունակում է մնալ բարձր արդյունավետ բուժում ծանր դեպրեսիա ունեցող մարդկանց համար, ովքեր չեն արձագանքում դեղամիջոցներին:',
      },
      {
        id: 'q15_7',
        question: 'What is the primary action of antipsychotic medications used for schizophrenia?',
        questionKa:
          'ქმედების რა ძირითადი მექანიზმი აქვთ ანტიფსიქოზურ მედიკამენტებს, რომლებიც შიზოფრენიის წინააღმდეგ გამოიყენება?',
        questionRu:
          'Каково основное действие антипсихотических препаратов, используемых при шизофрении?',
        questionHy:
          'Ո՞րն է շիզոֆրենիայի բուժման համար օգտագործվող հակափսիխոտիկ դեղամիջոցների հիմնական ազդեցությունը:',
        options: [
          'They increase serotonin',
          'They block dopamine receptors',
          'They stimulate adrenaline',
          'They sedate the nervous system entirely',
        ],
        optionsKa: [
          'ზრდიან სეროტონინს',
          'ბლოკავენ დოფამინის რეცეპტორებს',
          'ასტიმულირებენ ადრენალინს',
          'მთლიანად ამშვიდებენ ნერვულ სისტემას',
        ],
        optionsRu: [
          'Они повышают уровень серотонина',
          'Они блокируют рецепторы дофамина',
          'Они стимулируют адреналин',
          'Они полностью успокаивают нервную систему',
        ],
        optionsHy: [
          'Նրանք ավելացնում են սերոտոնինը',
          'Նրանք արգելափակում են դոֆամինի ընկալիչները',
          'Նրանք խթանում են ադրենալինը',
          'Նրանք ամբողջությամբ հանգստացնում են նյարդային համակարգը',
        ],
        correctIndex: 1,
        explanation:
          'Antipsychotics primarily work by blocking dopamine activity in the brain, mitigating positive symptoms like hallucinations.',
        explanationKa:
          'ანტიფსიქოტიკები პირველ რიგში მოქმედებენ ტვინში დოფამინის აქტივობის დაბლოკვით, რაც ამსუბუქებს ისეთ პოზიტიურ სიმპტომებს, როგორიცაა ჰალუცინაციები.',
        explanationRu:
          'Антипсихотики в основном работают путем блокирования активности дофамина в мозге, смягчая позитивные симптомы, такие как галлюцинации.',
        explanationHy:
          'Հակափսիխոտիկները հիմնականում աշխատում են ուղեղում դոֆամինի ակտիվությունը արգելափակելով՝ մեղմելով դրական ախտանիշները:',
      },
      {
        id: 'q15_8',
        question:
          "What type of therapy is most commonly viewed as the 'gold standard' for both anxiety and depression?",
        questionKa:
          'რომელი ტიპის თერაპია ითვლება ყველაზე ხშირად „ოქროს სტანდარტად“ როგორც შფოთვის, ასევე დეპრესიის სამკურნალოდ?',
        questionRu:
          'Какой тип терапии чаще всего рассматривается как «золотой стандарт» как для тревоги, так и для депрессии?',
        questionHy:
          'Ո՞ր տեսակի թերապիան է առավել հաճախ համարվում հնարավոր «ոսկե ստանդարտ» և՛ անհանգստության, և՛ դեպրեսիայի բուժման համար:',
        options: [
          'Psychoanalysis',
          'Cognitive-Behavioral Therapy (CBT)',
          'Homeopathy',
          'Electroconvulsive Therapy',
        ],
        optionsKa: [
          'ფსიქოანალიზი',
          'კოგნიტურ-ბიჰევიორალური თერაპია (CBT)',
          'ჰომეოპათია',
          'ელექტროკონვულსიური თერაპია',
        ],
        optionsRu: [
          'Психоанализ',
          'Когнитивно-поведенческая терапия (КПТ)',
          'Гомеопатия',
          'Электросудорожная терапия',
        ],
        optionsHy: [
          'Հոգեվերլուծություն',
          'Կոգնիտիվ-վարքագծային թերապիա (CBT)',
          'Հոմեոպաթիա',
          'Էլեկտրացնցումային թերապիա',
        ],
        correctIndex: 1,
        explanation:
          'Because of its vast empirical evidence base, Cognitive-Behavioral Therapy is frequently cited as the gold standard for treating depression and anxiety disorders.',
        explanationKa:
          'მტკიცებულებების უზარმაზარი ბაზის გამო, CBT ხშირად მოიხსენიება როგორც ოქროს სტანდარტი დეპრესიისა და შფოთვითი აშლილობების სამკურნალოდ.',
        explanationRu:
          'Из-за обширной эмпирической базы данных когнитивно-поведенческая терапия часто приводится в качестве золотого стандарта для лечения депрессии и тревожных расстройств.',
        explanationHy:
          'Իր հսկայական էմպիրիկ բազայի շնորհիվ CBT-ն հաճախ նշվում է որպես ոսկե ստանդարտ դեպրեսիայի և անհանգստության խանգարումների բուժման համար:',
      },
      {
        id: 'q15_9',
        question: 'Which medication is widely used as a mood stabilizer for Bipolar Disorder?',
        questionKa:
          'რომელი მედიკამენტი გამოიყენება ფართოდ, როგორც გუნება-განწყობის სტაბილიზატორი ბიპოლარული აშლილობისას?',
        questionRu:
          'Какой препарат широко используется в качестве стабилизатора настроения при биполярном расстройстве?',
        questionHy:
          'Ո՞ր դեղամիջոցն է լայնորեն օգտագործվում որպես տրամադրության կայունացուցիչ Երկբևեռ խանգարման դեպքում:',
        options: ['Lithium', 'Prozac', 'Xanax', 'Valium'],
        optionsKa: ['ლითიუმი', 'პროზაკი', 'ქსანაქსი', 'ვალიუმი'],
        optionsRu: ['Литий', 'Прозак', 'Ксанакс', 'Валиум'],
        optionsHy: ['Լիթիում', 'Պրոզակ', 'Քսանաքս', 'Վալիում'],
        correctIndex: 0,
        explanation:
          'Lithium, a simple salt, is a highly effective mood stabilizer often prescribed to smooth out the severe highs and lows of Bipolar Disorder.',
        explanationKa:
          'ლითიუმი, მარტივი მარილი, არის უაღრესად ეფექტური გუნება-განწყობის სტაბილიზატორი, რომელსაც ხშირად ნიშნავენ ბიპოლარული აშლილობის მძიმე აღმავლობისა და დაცემის შესარბილებლად.',
        explanationRu:
          'Литий, простая соль, является высокоэффективным стабилизатором настроения, часто назначаемым для сглаживания сильных взлетов и падений при биполярном расстройстве.',
        explanationHy:
          'Լիթիումը շատ արդյունավետ տրամադրությունը կայունացնող միջոց է, որը հաճախ նշանակվում է Երկբևեռ խանգարման ծանր վերելքներն ու անկումները հարթելու համար:',
      },
      {
        id: 'q15_10',
        question: 'What is a major advantage of group therapy compared to individual therapy?',
        questionKa:
          'რა არის ჯგუფური თერაპიის მთავარი უპირატესობა ინდივიდუალურ თერაპიასთან შედარებით?',
        questionRu: 'В чем основное преимущество групповой терапии по сравнению с индивидуальной?',
        questionHy:
          'Ո՞րն է խմբային թերապիայի հիմնական առավելությունը՝ անհատական ​​թերապիայի համեմատ:',
        options: [
          'It focuses entirely on unconscious dream analysis',
          'It provides social support, reduces isolation, and is cost-effective',
          'It involves medication management',
          'It guarantees immediate behavioral changes',
        ],
        optionsKa: [
          'ის მთლიანად ფოკუსირებულია არაცნობიერ სიზმრების ანალიზზე',
          'ის უზრუნველყოფს სოციალურ მხარდაჭერას, ამცირებს იზოლაციას და ეკონომიურია',
          'ის მოიცავს მედიკამენტების მართვას',
          'გარანტიას იძლევა მყისიერი ქცევითი ცვლილებებისთვის',
        ],
        optionsRu: [
          'Она полностью фокусируется на анализе бессознательных снов',
          'Она обеспечивает социальную поддержку, снижает изоляцию и является экономически выгодной',
          'Она включает управление медикаментами',
          'Она гарантирует немедленные изменения поведения',
        ],
        optionsHy: [
          'Այն ամբողջովին կենտրոնանում է անգիտակից երազների վերլուծության վրա',
          'Այն ապահովում է սոցիալական աջակցություն, նվազեցնում է մեկուսացումը և ծախսարդյունավետ է',
          'Այն ներառում է դեղորայքի կառավարում',
          'Այն երաշխավորում է վարքագծային անհապաղ փոփոխություններ',
        ],
        correctIndex: 1,
        explanation:
          'Group therapy allows clients to see that they are not alone in their struggles, fostering empathy and peer support, often at a lower cost.',
        explanationKa:
          'ჯგუფური თერაპია საშუალებას აძლევს კლიენტებს დაინახონ, რომ ისინი მარტონი არ არიან თავიანთ ბრძოლაში, ხელს უწყობს ემპათიასა და თანატოლების მხარდაჭერას, და უფრო იაფია.',
        explanationRu:
          'Групповая терапия позволяет клиентам понять, что они не одиноки в своей борьбе, способствуя эмпатии и поддержке сверстников, часто за меньшую стоимость.',
        explanationHy:
          'Խմբային թերապիան թույլ է տալիս հաճախորդներին տեսնել, որ նրանք մենակ չեն իրենց պայքարում՝ խթանելով կարեկցանքը և հասակակիցների աջակցությունը:',
      },
      {
        id: 'q15_11',
        question: "What does 'evidence-based practice' entail in clinical psychology?",
        questionKa: 'რას გულისხმობს „მტკიცებულებებზე დაფუძნებული პრაქტიკა“ კლინიკურ ფსიქოლოგიაში?',
        questionRu: 'Что подразумевает «доказательная практика» в клинической психологии?',
        questionHy:
          'Ի՞նչ է ենթադրում «ապացույցների վրա հիմնված պրակտիկան» կլինիկական հոգեբանության մեջ:',
        options: [
          'Relying solely on ancient philosophies',
          'Combining the best research evidence with clinical expertise and patient preferences',
          'Using experimental drugs without testing',
          'Treating every patient with generic talk therapy',
        ],
        optionsKa: [
          'მხოლოდ უძველეს ფილოსოფიებზე დაყრდნობას',
          'საუკეთესო კვლევითი მტკიცებულებების, კლინიკური ექსპერტიზისა და პაციენტის პრეფერენციების შერწყმას',
          'ექსპერიმენტული წამლების გამოყენებას ტესტირების გარეშე',
          'თითოეული პაციენტის მკურნალობას ზოგადი საუბრის თერაპიით',
        ],
        optionsRu: [
          'Опора исключительно на древние философии',
          'Объединение лучших научных данных с клиническим опытом и предпочтениями пациентов',
          'Использование экспериментальных препаратов без тестирования',
          'Лечение каждого пациента с помощью стандартной разговорной терапии',
        ],
        optionsHy: [
          'Հիմնվել բացառապես հին փիլիսոփայությունների վրա',
          'Լավագույն հետազոտական ​​ապացույցների համադրում կլինիկական փորձաքննության և հիվանդի նախասիրությունների հետ',
          'Փորձարարական դեղամիջոցների օգտագործում առանց փորձարկման',
          'Յուրաքանչյուր հիվանդի բուժում ընդհանուր խոսակցական թերապիայով',
        ],
        correctIndex: 1,
        explanation:
          "Evidence-based practice forms a tripartite approach: scientific research, the therapist's valid clinical experience, and the specific needs/values of the patient.",
        explanationKa:
          'მტკიცებულებებზე დაფუძნებული პრაქტიკა აერთიანებს სამ რამეს: სამეცნიერო კვლევას, თერაპევტის კლინიკურ გამოცდილებას და პაციენტის სპეციფიკურ მოთხოვნილებებს/ღირებულებებს.',
        explanationRu:
          'Доказательная практика включает триединый подход: научные исследования, клинический опыт терапевта и конкретные потребности/ценности пациента.',
        explanationHy:
          'Ապացույցների վրա հիմնված պրակտիկան ձևավորում է եռակողմ մոտեցում՝ գիտական հետազոտություն, թերապևտի վավեր կլինիկական փորձ և հիվանդի հատուկ կարիքներ:',
      },
      {
        id: 'q15_12',
        question:
          'During the COVID-19 pandemic, which form of therapy rapidly grew and proved nearly as effective as in-person practice?',
        questionKa:
          'COVID-19 პანდემიის დროს, თერაპიის რომელმა ფორმამ განიცადა სწრაფი ზრდა და აღმოჩნდა თითქმის ისეთივე ეფექტური, როგორც პირისპირ პრაქტიკა?',
        questionRu:
          'Во время пандемии COVID-19 какая форма терапии быстро выросла и оказалась почти столь же эффективной, как и личная практика?',
        questionHy:
          'Пանդեմիայի ժամանակ թերապիայի ո՞ր ձևը արագ աճեց և գրեթե նույնքան արդյունավետ դարձավ, որքան անձնական պրակտիկան:',
        options: [
          'Dream analysis',
          'Teletherapy (online therapy)',
          'Inpatient institutionalization',
          'Group retreats',
        ],
        optionsKa: [
          'სიზმრების ანალიზმა',
          'ტელეთერაპიამ (ონლაინ თერაპია)',
          'სტაციონარულმა ინსტიტუციონალიზაციამ',
          'ჯგუფურმა განმარტოებებმა',
        ],
        optionsRu: [
          'Анализ сновидений',
          'Телетерапия (онлайн-терапия)',
          'Стационарная институционализация',
          'Групповые ретриты',
        ],
        optionsHy: [
          'Երազների վերլուծություն',
          'Տելեթերապիա (առցանց թերապիա)',
          'Ստացիոնար ինստիտուցիոնալացում',
          'Խմբային նահանջներ',
        ],
        correctIndex: 1,
        explanation:
          'Teletherapy expanded massively and research consistently shows it offers outcomes comparable to traditional, face-to-face therapy for most conditions.',
        explanationKa:
          'ტელეთერაპია (ონლაინ) მასიურად გაფართოვდა და კვლევები სტაბილურად აჩვენებს, რომ ის ისეთივე ეფექტურია, როგორც ტრადიციული, პირისპირ თერაპია.',
        explanationRu:
          'Телетерапия массово расширилась, и исследования стабильно показывают, что она дает результаты, сопоставимые с традиционной очной терапией для большинства состояний.',
        explanationHy:
          'Տելեթերապիան զանգվածաբար ընդլայնվել է, և հետազոտությունները ցույց են տալիս, որ այն ապահովում է ավանդական, դեմ առ դեմ թերապիային համեմատելի արդյունքներ:',
      },
      {
        id: 'q15_13',
        question:
          'What physical change occurs in the brain during successful Cognitive-Behavioral Therapy?',
        questionKa:
          'რა ფიზიკური ცვლილება ხდება ტვინში წარმატებული კოგნიტურ-ბიჰევიორალური თერაპიის (CBT) დროს?',
        questionRu:
          'Какое физическое изменение происходит в мозге во время успешной когнитивно-поведенческой терапии?',
        questionHy:
          'Ի՞նչ ֆիզիկական փոփոխություն է տեղի ունենում ուղեղում հաջողված կոգնիտիվ-վարքագծային թերապիայի ժամանակ:',
        options: [
          'There are no physical changes',
          'Measurable activity changes in the prefrontal cortex and amygdala',
          'The brain shrinks continuously',
          'Dopamine neurons are completely destroyed',
        ],
        optionsKa: [
          'არანაირი ფიზიკური ცვლილება არ ხდება',
          'გაზომვადი აქტივობის ცვლილებები პრეფრონტალურ ქერქსა და ამიგდალაში',
          'ტვინი განუწყვეტლივ მცირდება ზომაში',
          'დოფამინის ნეირონები მთლიანად ნადგურდება',
        ],
        optionsRu: [
          'Не происходит никаких физических изменений',
          'Измеримые изменения активности в префронтальной коре и миндалевидном теле',
          'Мозг постоянно уменьшается в размерах',
          'Дофаминовые нейроны полностью разрушаются',
        ],
        optionsHy: [
          'Ֆիզիկական փոփոխություններ չկան',
          'Չափելի ակտիվության փոփոխություններ նախաճակատային կեղևում և ամիգդալայում',
          'Ուղեղը անընդհատ փոքրանում է',
          'Դոֆամինային նեյրոններն ամբողջությամբ քայքայվում են',
        ],
        correctIndex: 1,
        explanation:
          "Brain imaging scans indicate that 'talk therapy' like CBT literally reshapes brain function, similarly to how certain medications do.",
        explanationKa:
          'ტვინის სკანირება მიუთითებს, რომ CBT ცვლის ტვინის ფუნქციონირებას (პრეფრონტალურ ქერქსა და ამიგდალაში), ისევე როგორც ზოგიერთი მედიკამენტი.',
        explanationRu:
          'Сканирование мозга показывает, что «разговорная терапия», такая как КПТ, буквально изменяет функции мозга (в префронтальной коре и миндалевидном теле).',
        explanationHy:
          'Ուղեղի նկարահանումները ցույց են տալիս, որ խոսակցական թերապիան բառացիորեն ձևափոխում է ուղեղի աշխատանքը (նախաճակատային կեղևում և ամիգդալայում):',
      },
      {
        id: 'q15_14',
        question:
          "What does a 'mind reading' cognitive distortion entail, as addressed in Beck's CBT?",
        questionKa: 'რას გულისხმობს კოგნიტური დამახინჯება „აზრების კითხვა“ ბეკის CBT-ში?',
        questionRu:
          'Что подразумевает когнитивное искажение «чтение мыслей», рассматриваемое в КПТ Бека?',
        questionHy: 'Ի՞նչ է ենթադրում «մտքերի ընթերցման» ճանաչողական աղավաղումը:',
        options: [
          'Possessing literal psychic abilities',
          'Assuming you know what another person is thinking without evidence',
          'A reading disorder like dyslexia',
          'Reading many psychology books',
        ],
        optionsKa: [
          'რეალური ექსტრასენსორული შესაძლებლობების ფლობას',
          'დაშვებას, რომ იცი რაზე ფიქრობს სხვა ადამიანი მტკიცებულებების გარეშე',
          'კითხვის დარღვევას, როგორიცაა დისლექსია',
          'ფსიქოლოგიის ბევრი წიგნის წაკითხვას',
        ],
        optionsRu: [
          'Обладание реальными экстрасенсорными способностями',
          'Предположение, что вы знаете, о чем думает другой человек, без доказательств',
          'Нарушение чтения, подобное дислексии',
          'Чтение множества книг по психологии',
        ],
        optionsHy: [
          'Բառացիորեն էքստրասենսոր կարողություններ ունենալ',
          'Ենթադրել, գիտես, թե ուրիշն ինչ է մտածում՝ առանց ապացույցի',
          'Ընթերցանության խանգարում, ինչպիսին է դիսլեքսիան',
          'Հոգեբանության բազմաթիվ գրքեր կարդալ',
        ],
        correctIndex: 1,
        explanation:
          'Mind reading is a common cognitive distortion where an individual arbitrarily assumes that others have negative thoughts about them.',
        explanationKa:
          'აზრების კითხვა არის გავრცელებული კოგნიტური დამახინჯება, როდესაც ინდივიდი თვითნებურად ვარაუდობს, რომ სხვები მასზე ცუდად ფიქრობენ.',
        explanationRu:
          'Чтение мыслей — это распространенное когнитивное искажение, при котором человек произвольно предполагает, что другие думают о нем плохо.',
        explanationHy:
          'Մտքերի ընթերցումը սովորական ճանաչողական աղավաղում է, երբ անհատը կամայականորեն ենթադրում է, որ ուրիշներն իր մասին բացասական մտքեր ունեն:',
      },
      {
        id: 'q15_15',
        question: 'For the treatment of which condition do we primarily use Benzodiazepines?',
        questionKa: 'რომელი მდგომარეობის სამკურნალოდ ვიყენებთ ძირითადად ბენზოდიაზეპინებს?',
        questionRu: 'Для лечения какого состояния мы в основном используем бензодиазепины?',
        questionHy: 'Ո՞ր հիվանդության բուժման համար են հիմնականում օգտագործվում բենզոդիազեպինները:',
        options: ['Depression', 'Bipolar disorder', 'Anxiety', 'Schizophrenia'],
        optionsKa: ['დეპრესია', 'ბიპოლარული აშლილობა', 'შფოთვა', 'შიზოფრენია'],
        optionsRu: ['Депрессия', 'Биполярное расстройство', 'Тревога', 'Шизофрения'],
        optionsHy: ['Դեպրեսիա', 'Երկբևեռ խանգարում', 'Անհանգստություն', 'Շիզոֆրենիա'],
        correctIndex: 2,
        explanation:
          'Benzodiazepines are anti-anxiety medications commonly used to depress central nervous system activity and calm severe anxiety.',
        explanationKa:
          'ბენზოდიაზეპინები არის შფოთვის საწინააღმდეგო მედიკამენტები, რომლებიც გამოიყენება ცენტრალური ნერვული სისტემის აქტივობის დასათრგუნად და ძლიერი შფოთვის დასამშვიდებლად.',
        explanationRu:
          'Бензодиазепины — это противотревожные препараты, обычно используемые для подавления активности центральной нервной системы и успокоения сильной тревоги.',
        explanationHy:
          'Բենզոդիազեպինները հակաանհանգստության դեղամիջոցներ են, որոնք սովորաբար օգտագործվում են ծանր անհանգստությունը հանգստացնելու համար:',
      },
    ],
  },
  {
    id: 'q16',
    chapterId: 16,
    title: 'Applied Psychology',
    titleKa: 'გამოყენებითი ფსიქოლოგია',
    titleRu: 'Прикладная психология',
    titleHy: 'Կիրառական հոգեբանություն',
    questions: [
      {
        id: 'q16_1',
        question: 'What does Industrial-Organizational (I/O) Psychology primarily focus on?',
        questionKa: 'რაზე ფოკუსირდება ძირითადად ინდუსტრიულ-ორგანიზაციული (I/O) ფსიქოლოგია?',
        questionRu:
          'На чем в первую очередь сосредотачивается производственно-организационная (I/O) психология?',
        questionHy:
          'Ինչի՞ վրա է հիմնականում կենտրոնանում արդյունաբերական-կազմակերպչական (I/O) հոգեբանությունը:',
        options: [
          'Studying childhood development stages',
          'Applying psychological principles to the workplace',
          'Treating severe mental illnesses',
          'Understanding animal behavior',
        ],
        optionsKa: [
          'ბავშვობის განვითარების ეტაპების შესწავლაზე',
          'ფსიქოლოგიური პრინციპების სამუშაო ადგილზე გამოყენებაზე',
          'მძიმე ფსიქიკური აშლილობების მკურნალობაზე',
          'ცხოველთა ქცევის გაგებაზე',
        ],
        optionsRu: [
          'Изучение стадий развития в детстве',
          'Применение психологических принципов на рабочем месте',
          'Лечение тяжелых психических заболеваний',
          'Понимание поведения животных',
        ],
        optionsHy: [
          'Մանկության զարգացման փուլերի ուսումնասիրություն',
          'Հոգեբանական սկզբունքների կիրառում աշխատավայրում',
          'Ծանր հոգեկան հիվանդությունների բուժում',
          'Կենդանիների վարքագծի ըմբռնում',
        ],
        correctIndex: 1,
        explanation:
          'I/O psychology aims to improve productivity, health, and the quality of work life by applying psychological principles to business and organization settings.',
        explanationKa:
          'I/O ფსიქოლოგია მიზნად ისახავს პროდუქტიულობის, ჯანმრთელობისა და სამუშაო ცხოვრების ხარისხის გაუმჯობესებას ფსიქოლოგიური პრინციპების გამოყენებით ორგანიზაციულ გარემოში.',
        explanationRu:
          'I/O психология направлена на повышение производительности, здоровья и качества трудовой жизни путем применения психологических принципов к бизнесу.',
        explanationHy:
          'I/O հոգեբանությունը նպատակ ունի բարելավելու արտադրողականությունը և աշխատանքային կյանքի որակը՝ կիրառելով հոգեբանական սկզբունքներ բիզնեսում:',
      },
      {
        id: 'q16_2',
        question:
          "In the context of Educational Psychology, what does having a 'growth mindset' mean?",
        questionKa:
          'განათლების ფსიქოლოგიის კონტექსტში, რას ნიშნავს გქონდეს „განვითარებაზე ორიენტირებული აზროვნება“ (growth mindset)?',
        questionRu:
          'В контексте педагогической психологии, что означает наличие «установки на рост» (growth mindset)?',
        questionHy:
          'Կրթական հոգեբանության համատեքստում ի՞նչ է նշանակում «աճի մտածելակերպ» ունենալը:',
        options: [
          'Believing your brain physically grows larger every day',
          'Believing that intelligence and abilities can be developed through effort',
          'Believing intelligence is fixed from birth',
          'Believing only adults can learn new skills',
        ],
        optionsKa: [
          'რწმენა, რომ შენი ტვინი ფიზიკურად იზრდება ყოველდღე',
          'რწმენა, რომ ინტელექტი და შესაძლებლობები შეიძლება განვითარდეს ძალისხმევით',
          'რწმენა, რომ ინტელექტი დაბადებიდან ფიქსირებულია',
          'რწმენა, რომ მხოლოდ ზრდასრულებს შეუძლიათ ახალი უნარების სწავლა',
        ],
        optionsRu: [
          'Вера в то, что ваш мозг физически увеличивается с каждым днем',
          'Убеждение, что интеллект и способности можно развить с помощью усилий',
          'Убеждение, что интеллект фиксирован с рождения',
          'Вера в то, что только взрослые могут শিখть новые навыки',
        ],
        optionsHy: [
          'Հավատալ, որ ձեր ուղեղն ամեն օր ֆիզիկապես մեծանում է',
          'Համոզմունք, որ ինտելեկտն ու կարողությունները կարող են զարգանալ ջանքերի միջոցով',
          'Համոզմունք, որ ինտելեկտը ֆիքսված է ի ծնե',
          'Հավատալ, որ միայն մեծահասակները կարող են նոր հմտություններ սովորել',
        ],
        correctIndex: 1,
        explanation:
          'Pioneered by Carol Dweck, a growth mindset is the belief that basic abilities and intelligence can be cultivated through dedication and hard work.',
        explanationKa:
          "კეროლ დვეკის მიერ შემოღებული 'growth mindset' არის რწმენა, რომ ძირითადი შესაძლებლობები და ინტელექტი შეიძლება გამომუშავდეს შრომითა და ძალისხმევით.",
        explanationRu:
          'Концепция «установки на рост», предложенная Кэрол Дуэк, — это вера в то, что базовые способности и интеллект можно развить упорным трудом.',
        explanationHy:
          '«Աճի մտածելակերպը», որն առաջարկել է Քերոլ Դուեքը, այն համոզմունքն է, որ հիմնական կարողություններն ու ինտելեկտը կարող են զարգանալ աշխատասիրության միջոցով:',
      },
      {
        id: 'q16_3',
        question:
          'Which subfield focuses on the intersection of psychology and the legal system, dealing with areas like criminal profiling and eyewitness testimony?',
        questionKa:
          'რომელი ქვესფერო ფოკუსირდება ფსიქოლოგიისა და იურიდიული სისტემის გადაკვეთაზე, და ეხება ისეთ სფეროებს, როგორიცაა კრიმინალური პროფილირება და თვითმხილველთა ჩვენებები?',
        questionRu:
          'Какая область фокусируется на пересечении психологии и правовой системы, занимаясь такими вопросами, как криминальное профилирование и показания свидетелей?',
        questionHy:
          'Ո՞ր ենթաոլորտն է կենտրոնանում հոգեբանության և իրավական համակարգի խաչմերուկի վրա՝ զբաղվելով այնպիսի ոլորտներով, ինչպիսիք են հանցագործների պրոֆիլավորումը և ականատեսների ցուցմունքները:',
        options: [
          'Forensic Psychology',
          'Clinical Psychology',
          'Environmental Psychology',
          'Gestalt Psychology',
        ],
        optionsKa: [
          'სასამართლო ფსიქოლოგია (ფოერენსიკული)',
          'კლინიკური ფსიქოლოგია',
          'გარემოს ფსიქოლოგია',
          'გეშტალტ ფსიქოლოგია',
        ],
        optionsRu: [
          'Судебная психология (форензика)',
          'Клиническая психология',
          'Экологическая психология',
          'Гештальт-психология',
        ],
        optionsHy: [
          'Դատական հոգեբանություն',
          'Կլինիկական հոգեբանություն',
          'Բնապահպանական հոգեբանություն',
          'Գեշտալտ հոգեբանություն',
        ],
        correctIndex: 0,
        explanation:
          'Forensic psychologists apply psychological principles to legal issues, including evaluating witness reliability and defendant competency.',
        explanationKa:
          'სასამართლო ფსიქოლოგები იყენებენ ფსიქოლოგიურ პრინციპებს სამართლებრივ საკითხებში, მოწმეთა სანდოობისა თუ ბრალდებულის კომპეტენტურობის შეფასების ჩათვლით.',
        explanationRu:
          'Судебные психологи применяют психологические принципы к юридическим вопросам, включая оценку надежности свидетелей и компетентности подсудимых.',
        explanationHy:
          'Դատական հոգեբանները հոգեբանական սկզբունքներ են կիրառում իրավական խնդիրների նկատմամբ:',
      },
      {
        id: 'q16_4',
        question: 'What is the main focus of Positive Psychology?',
        questionKa: 'რა არის პოზიტიური ფსიქოლოგიის მთავარი აქცენტი?',
        questionRu: 'В чем заключается основной фокус позитивной психологии?',
        questionHy: 'Ո՞րն է պոզիտիվ հոգեբանության հիմնական ուշադրության կենտրոնը:',
        options: [
          'Diagnosing and treating severe mental disorders',
          'The scientific study of human strengths, virtues, and what makes life worth living',
          'Using positive reinforcement to train animals',
          'Forcing people to smile when they are sad',
        ],
        optionsKa: [
          'მძიმე ფსიქიკური აშლილობების დიაგნოსტიკა და მკურნალობა',
          'ადამიანის ძლიერი მხარეების, სათნოებებისა და იმის შესწავლა, რაც ცხოვრებას ღირებულს ხდის',
          'პოზიტიური განმტკიცების გამოყენება ცხოველების გასაწვრთნელად',
          'ადამიანების იძულება გაიღიმონ, როდესაც ისინი მოწყენილები არიან',
        ],
        optionsRu: [
          'Диагностика и лечение тяжелых психических расстройств',
          'Научное изучение человеческих сильных сторон, добродетелей и того, что делает жизнь стоящей',
          'Использование позитивного подкрепления для дрессировки животных',
          'Принуждение людей улыбаться, когда им грустно',
        ],
        optionsHy: [
          'Ծանր հոգեկան խանգարումների ախտորոշում և բուժում',
          'Մարդկային ուժեղ կողմերի և այն բանի գիտական ուսումնասիրությունը, ինչը կյանքը արժեքավոր է դարձնում',
          'Պոզիտիվ ամրապնդման օգտագործում՝ կենդանիներ վարժեցնելու համար',
          'Մարդկանց ստիպել ժպտալ, երբ նրանք տխուր են',
        ],
        correctIndex: 1,
        explanation:
          'Pioneered by Martin Seligman, Positive Psychology shifted focus away from pathology and onto well-being, resilience, and optimal human functioning.',
        explanationKa:
          'მარტინ სელიგმანის მიერ შემოღებულმა პოზიტიურმა ფსიქოლოგიამ აქცენტი პათოლოგიიდან კეთილდღეობაზე, გამძლეობასა და ადამიანის ოპტიმალურ ფუნქციონირებაზე გადაიტანა.',
        explanationRu:
          'Позитивная психология, основанная Мартином Селигманом, сместила акцент с патологии на благополучие, жизнестойкость и оптимальное функционирование человека.',
        explanationHy:
          'Պոզիտիվ հոգեբանությունը շեշտը տեղափոխեց պաթոլոգիայից դեպի բարեկեցություն, ճկունություն և մարդկային օպտիմալ գործունեություն:',
      },
      {
        id: 'q16_5',
        question: "What does 'grit' mean in psychological terms as introduced by Angela Duckworth?",
        questionKa:
          'რას ნიშნავს ფსიქოლოგიური ტერმინი „grit“ (ჟინი/შეუპოვრობა), ანჯელა დაკვორთის მიხედვით?',
        questionRu:
          'Что означает «grit» (твердость характера) в психологических терминах, предложенных Анджелой Дакворт?',
        questionHy:
          'Ի՞նչ է նշանակում «grit» (տոկունություն) հոգեբանական տերմիններով, ինչպես ներկայացրել է Անջելա Դաքվորթը:',
        options: [
          'A physical measurement of brain strength',
          'Passion and perseverance for long-term goals',
          'The ability to ignore all emotions',
          'An inherited talent for mathematics',
        ],
        optionsKa: [
          'ტვინის სიძლიერის ფიზიკურ გაზომვას',
          'ვნებასა და შეუპოვრობას გრძელვადიანი მიზნების მისაღწევად',
          'ყველა ემოციის იგნორირების უნარს',
          'მათემატიკის მემკვიდრეობით ნიჭს',
        ],
        optionsRu: [
          'Физическое измерение силы мозга',
          'Страсть и настойчивость в достижении долгосрочных целей',
          'Способность игнорировать все эмоции',
          'Унаследованный талант к математике',
        ],
        optionsHy: [
          'Ուղեղի ուժի ֆիզիկական չափում',
          'Կիրք և հաստատակամություն երկարաժամկետ նպատակների համար',
          'Բոլոր հույզերը անտեսելու ունակություն',
          'Մաթեմատիկայի ժառանգական տաղանդ',
        ],
        correctIndex: 1,
        explanation:
          'Grit is defined as a powerful combination of passion and sustained persistence applied toward achieving long-term, meaningful goals.',
        explanationKa:
          'Grit (შეუპოვრობა) განისაზღვრება, როგორც ვნებისა და მდგრადი დაჟინებულობის ძლიერი კომბინაცია, რომელიც გამოიყენება გრძელვადიანი, შინაარსიანი მიზნების მისაღწევად.',
        explanationRu:
          'Твердость характера (Grit) определяется как мощная комбинация страсти и настойчивости, применяемых для достижения долгосрочных, значимых целей.',
        explanationHy:
          'Տոկունությունը սահմանվում է որպես կրքի և կայուն համառության հզոր համադրություն, որը կիրառվում է երկարաժամկետ, նշանակալի նպատակների հասնելու համար:',
      },
      {
        id: 'q16_6',
        question: 'What is the focus of Environmental Psychology?',
        questionKa: 'რას შეისწავლის გარემოს ფსიქოლოგია?',
        questionRu: 'На чем фокусируется экологическая (средовая) психология?',
        questionHy: 'Ո՞րն է բնապահպանական հոգեբանության ուշադրության կենտրոնում:',
        options: [
          'Recycling habits alone',
          'How physical environments affect human behavior and well-being',
          'Studying animals in the wild',
          'Healing trauma through nature walks only',
        ],
        optionsKa: [
          'მხოლოდ გადამუშავების ჩვევებს',
          'იმას, თუ როგორ მოქმედებს ფიზიკური გარემო ადამიანის ქცევასა და კეთილდღეობაზე',
          'ცხოველების შესწავლას ველურ ბუნებაში',
          'ტრავმის განკურნებას მხოლოდ ბუნებაში სეირნობით',
        ],
        optionsRu: [
          'Только привычки переработки отходов',
          'То, как физическая среда влияет на поведение и благополучие человека',
          'Изучение животных в дикой природе',
          'Исцеление травм исключительно прогулками на природе',
        ],
        optionsHy: [
          'Միայն վերամշակման սովորությունները',
          'Ինչպես է ֆիզիկական միջավայրն ազդում մարդու վարքի և բարեկեցության վրա',
          'Կենդանիների ուսումնասիրությունը վայրի բնության մեջ',
          'Տրավմայի բուժում միայն բնության մեջ զբոսանքների միջոցով',
        ],
        correctIndex: 1,
        explanation:
          'Environmental psychology examines the interplay between individuals and their built and natural environments, such as how workspace design impacts employee productivity.',
        explanationKa:
          'გარემოს ფსიქოლოგია იკვლევს ურთიერთქმედებას ადამიანებსა და მათ აშენებულ/ბუნებრივ გარემოს შორის, მაგალითად, როგორ მოქმედებს სამუშაო სივრცის დიზაინი პროდუქტიულობაზე.',
        explanationRu:
          'Средовая психология изучает взаимодействие между людьми и их искусственной и естественной средой, например, как дизайн рабочего места влияет на производительность.',
        explanationHy:
          'Բնապահպանական հոգեբանությունը ուսումնասիրում է անհատների և նրանց կառուցված և բնական միջավայրերի միջև փոխազդեցությունը:',
      },
      {
        id: 'q16_7',
        question: 'What does Health Psychology emphasize?',
        questionKa: 'რას უსვამს ხაზს ჯანმრთელობის ფსიქოლოგია?',
        questionRu: 'На чем делает акцент психология здоровья?',
        questionHy: 'Ինչի՞ն է կարևորություն տալիս առողջության հոգեբանությունը:',
        options: [
          'Medical surgery techniques',
          'Promoting healthy behaviors, preventing illness, and the mind-body connection',
          'Diagnosing schizophrenia',
          'Studying global health policies economically',
        ],
        optionsKa: [
          'სამედიცინო ქირურგიის ტექნიკებს',
          'ჯანსაღი ქცევის ხელშეწყობას, დაავადების პრევენციას და გონება-სხეულის კავშირს',
          'შიზოფრენიის დიაგნოზირებას',
          'შესწავლას გლობალური ჯანდაცვის პოლიტიკისა ეკონომიკურად',
        ],
        optionsRu: [
          'Методы медицинской хирургии',
          'Пропаганду здорового поведения, предотвращение болезней и связь разума и тела',
          'Диагностику шизофрении',
          'Экономическое изучение глобальной политики здравоохранения',
        ],
        optionsHy: [
          'Բժշկական վիրաբուժության տեխնիկա',
          'Առողջ վարքագծի խթանում, հիվանդությունների կանխարգելում և միտք-մարմին կապ',
          'Շիզոֆրենիայի ախտորոշում',
          'Գլոբալ առողջապահական քաղաքականության տնտեսապես ուսումնասիրություն',
        ],
        correctIndex: 1,
        explanation:
          'Health psychology is tasked with understanding how biological, psychological, and social factors influence health and illness.',
        explanationKa:
          'ჯანმრთელობის ფსიქოლოგიის ამოცანაა გაიგოს, თუ როგორ ახდენენ ბიოლოგიური, ფსიქოლოგიური და სოციალური ფაქტორები გავლენას ჯანმრთელობასა და დაავადებაზე.',
        explanationRu:
          'Психология здоровья призвана понять, как биологические, психологические и социальные факторы влияют на здоровье и болезни.',
        explanationHy:
          'Առողջության հոգեբանության խնդիրն է հասկանալ, թե ինչպես են կենսաբանական, հոգեբանական և սոցիալական գործոններն ազդում առողջության և հիվանդության վրա:',
      },
      {
        id: 'q16_8',
        question:
          'What bias highlights the phenomenon where people value things they built themselves much more than identical pre-built items?',
        questionKa:
          'რა მიკერძოება ხაზს უსვამს იმ ფენომენს, როდესაც ადამიანები საკუთარი ხელით აწყობილ ნივთებს ბევრად უფრო აფასებენ, ვიდრე წინასწარ აწყობილს?',
        questionRu:
          'Какое искажение описывает феномен, при котором люди ценят вещи, которые они сделали сами, гораздо больше, чем идентичные готовые вещи?',
        questionHy:
          'Ո՞ր երևույթն է ընդգծում այն փաստը, երբ մարդիկ ավելի շատ գնահատում են իրենց իսկ կառուցած իրերը, քան միանման նախապես կառուցված իրերը:',
        options: [
          'Sunk Cost Fallacy',
          'Confirmation Bias',
          'The IKEA effect',
          'Dunning-Kruger Effect',
        ],
        optionsKa: [
          'დაკარგული დანახარჯების შეცდომა (Sunk Cost Fallacy)',
          'დადასტურების მიკერძოება',
          'IKEA-ს ეფექტი',
          'დანინგ-კრიუგერის ეფექტი',
        ],
        optionsRu: [
          'Ошибочность невозвратных затрат',
          'Предвзятость подтверждения',
          'Эффект ИКЕА',
          'Эффект Даннинга-Крюгера',
        ],
        optionsHy: [
          'Անվերադարձ ծախսերի մոլորություն',
          'Հաստատման կողմնակալություն',
          'IKEA էֆեկտ',
          'Դանինգ-Կրյուգերի էֆեկտ',
        ],
        correctIndex: 2,
        explanation:
          'The IKEA effect is a cognitive bias showing that labor increases affection for the results of that labor.',
        explanationKa:
          'IKEA-ს ეფექტი არის კოგნიტური მიკერძოება, რომელიც აჩვენებს, რომ ჩვენი ჩადებული შრომა ზრდის პროდუქტის მიმართ ჩვენს სიყვარულსა და შეფასებას.',
        explanationRu:
          'Эффект ИКЕА — это когнитивное искажение, показывающее, что вложенный труд повышает привязанность к результатам этого труда.',
        explanationHy:
          'IKEA-ի էֆեկտը ճանաչողական կողմնակալություն է, որը ցույց է տալիս, որ աշխատանքը մեծացնում է կապվածությունը այդ աշխատանքի արդյունքի նկատմամբ:',
      },
      {
        id: 'q16_9',
        question:
          "What defines 'flow' in Positive Psychology, as studied by Mihaly Csikszentmihalyi?",
        questionKa:
          'რას ნიშნავს „მდგომარეობა ნაკადში“ (flow) პოზიტიურ ფსიქოლოგიაში (მიხაი ჩიქსენთმიჰაის მიხედვით)?',
        questionRu:
          'Что определяет состояние «потока» (flow) в позитивной психологии, согласно Михаю Чиксентмихайи?',
        questionHy:
          'Ի՞նչն է սահմանում «հոսքը» պոզիտիվ հոգեբանության մեջ, ինչպես ուսումնասիրել է Միհալի Չիկսենթմիհալին:',
        options: [
          'A state of deep relaxation and sleep',
          'A state of complete absorption and optimal experience in a challenging task',
          'Drinking 8 glasses of water a day',
          'Constant multi-tasking',
        ],
        optionsKa: [
          'ღრმა რელაქსაციისა და ძილის მდგომარეობა',
          'რთულ ამოცანაში სრული შთანთქმისა და ოპტიმალური გამოცდილების მდგომარეობა',
          'დღეში 8 ჭიქა წყლის დალევა',
          'მუდმივი მულტი-ტასკინგი',
        ],
        optionsRu: [
          'Состояние глубокого расслабления и сна',
          'Состояние полного поглощения и оптимального опыта при выполнении сложной задачи',
          'Потребление 8 стаканов воды в день',
          'Постоянная многозадачность',
        ],
        optionsHy: [
          'Խորը հանգստի և քնի վիճակ',
          'Ամբողջական կլանման և օպտիմալ փորձի վիճակ դժվար առաջադրանքում',
          'Օրական 8 բաժակ ջուր խմել',
          'Անընդհատ բազմախնդրություն',
        ],
        correctIndex: 1,
        explanation:
          'Flow is highly focused mental state where a person is fully immersed in an activity, often losing track of time.',
        explanationKa:
          '‘ნაკადი’ არის მაღალკონცენტრირებული მენტალური მდგომარეობა, როდესაც ადამიანი მთლიანად ჩაფლულია საქმიანობაში და ხშირად კარგავს დროის შეგრძნებას.',
        explanationRu:
          'Поток — это состояние высокой концентрации ума, когда человек полностью погружен в деятельность, часто теряя счет времени.',
        explanationHy:
          'Հոսքը խիստ կենտրոնացած մտավոր վիճակ է, երբ մարդն ամբողջությամբ ընկղմված է գործունեության մեջ՝ հաճախ կորցնելով ժամանակի զգացողությունը:',
      },
      {
        id: 'q16_10',
        question:
          'Cross-cultural psychology notes that collectivistic cultures primarily emphasize:',
        questionKa:
          'კროს-კულტურული ფსიქოლოგია აღნიშნავს, რომ კოლექტივისტური კულტურები უპირველესად ხაზს უსვამენ:',
        questionRu:
          'Кросс-культурная психология отмечает, что коллективистские культуры в первую очередь подчеркивают:',
        questionHy:
          'Միջմշակութային հոգեբանությունը նշում է, որ կոլեկտիվիստական մշակույթները հիմնականում շեշտում են.',
        options: [
          'Personal achievement and individual rights',
          'Group harmony and social cohesion',
          'Isolation from society',
          'Rebelling against elders',
        ],
        optionsKa: [
          'პირად მიღწევებს და ინდივიდუალურ უფლებებს',
          'ჯგუფის ჰარმონიას და სოციალურ ერთობას',
          'საზოგადოებისგან იზოლაციას',
          'უფროსების წინააღმდეგ აჯანყებას',
        ],
        optionsRu: [
          'Личные достижения и индивидуальные права',
          'Групповую гармонию и социальную сплоченность',
          'Изоляцию от общества',
          'Бунт против старших',
        ],
        optionsHy: [
          'Անձնական նվաճումներ և անհատական իրավունքներ',
          'Խմբի ներդաշնակություն և սոցիալական համախմբվածություն',
          'Մեկուսացում հասարակությունից',
          'Ըմբոստություն մեծահասակների դեմ',
        ],
        correctIndex: 1,
        explanation:
          'Collectivistic cultures (common in East Asia) prioritize the needs, harmony, and goals of the community or group over individual desires.',
        explanationKa:
          'კოლექტივისტური კულტურები (ხშირად გვხვდება აღმოსავლეთ აზიაში) პრიორიტეტს ანიჭებენ საზოგადოების ან ჯგუფის საჭიროებებს, ჰარმონიასა და მიზნებს ვიდრე ინდივიდუალურ სურვილებს.',
        explanationRu:
          'Коллективистские культуры (распространены в Восточной Азии) ставят потребности, гармонию и цели сообщества или группы выше индивидуальных желаний.',
        explanationHy:
          'Կոլեկտիվիստական մշակույթները գերակայում են համայնքի կամ խմբի կարիքները, ներդաշնակությունը և նպատակները անհատական ցանկություններից:',
      },
      {
        id: 'q16_11',
        question:
          'What type of interview is proven by I/O psychologists to be a better predictor of job performance?',
        questionKa:
          'I/O ფსიქოლოგების მიერ დადასტურებულია, რომ რომელი ტიპის ინტერვიუ უკეთ პროგნოზირებს სამუშაოს შესრულებას?',
        questionRu:
          'Доказано, что какой тип интервью, по мнению I/O психологов, лучше предсказывает производительность труда?',
        questionHy:
          'Ըստ I/O հոգեբանների, որ տեսակի հարցազրույցն է ավելի լավ կանխատեսում աշխատանքի կատարողականությունը:',
        options: [
          'Unstructured, casual conversations',
          'Structured interviews with standardized questions',
          'Guessing based on appearance',
          'Stress tests with yelling',
        ],
        optionsKa: [
          'არასტრუქტურირებული, თავისუფალი საუბრები',
          'სტრუქტურირებული ინტერვიუები სტანდარტიზებული კითხვებით',
          'გარეგნობაზე დაფუძნებული მარჩიელობა',
          'სტრეს-ტესტები ყვირილით',
        ],
        optionsRu: [
          'Неструктурированные, непринужденные беседы',
          'Структурированные интервью со стандартизированными вопросами',
          'Догадки, основанные на внешнем виде',
          'Стресс-тесты с криками',
        ],
        optionsHy: [
          'Ոչ կառուցվածքային, պատահական զրույցներ',
          'Կառուցվածքային հարցազրույցներ ստանդարտացված հարցերով',
          'Արտաքին տեսքի վրա հիմնված գուշակություններ',
          'Սթրես-թեստեր բղավելով',
        ],
        correctIndex: 1,
        explanation:
          'Structured interviews use the same questions and rubrics for every candidate, drastically reducing personal bias and improving predictive validity.',
        explanationKa:
          'სტრუქტურირებული ინტერვიუები იყენებს ერთსა და იმავე კითხვებსა და რუბრიკებს თითოეული კანდიდატისთვის, რაც მკვეთრად ამცირებს პირად მიკერძოებას და აუმჯობესებს პროგნოზს.',
        explanationRu:
          'В структурированных интервью используются одни и те же вопросы для каждого кандидата, что значительно снижает личную предвзятость.',
        explanationHy:
          'Կառուցվածքային հարցազրույցները օգտագործում են նույն հարցերը յուրաքանչյուր թեկնածուի համար՝ կտրուկ նվազեցնելով անձնական կողմնակալությունը:',
      },
      {
        id: 'q16_12',
        question:
          "The implementation of 'Character Strengths' education in modern global school curriculums originated from which subfield?",
        questionKa:
          'თანამედროვე გლობალური სასკოლო სასწავლო გეგმებში „ხასიათის სიძლიერის“ (Character Strengths) სწავლების დანერგვა რომელი ქვესფეროდან იღებს სათავეს?',
        questionRu:
          'Из какой области берет свое начало внедрение обучения «сильным сторонам характера» (Character Strengths) в современных мировых школьных программах?',
        questionHy:
          'Ժամանակակից գլոբալ դպրոցական ծրագրերում «բնավորության ուժեղ կողմերը» կրթության ներդրումը ո՞ր ենթաոլորտից է ծագել:',
        options: [
          'Forensic Psychology',
          'Positive Psychology',
          'Clinical Psychology',
          'Psychoanalysis',
        ],
        optionsKa: [
          'სასამართლო ფსიქოლოგია',
          'პოზიტიური ფსიქოლოგია',
          'კლინიკური ფსიქოლოგია',
          'ფსიქოანალიზი',
        ],
        optionsRu: [
          'Судебная психология',
          'Позитивная психология',
          'Клиническая психология',
          'Психоанализ',
        ],
        optionsHy: [
          'Դատական հոգեբանություն',
          'Դրական հոգեբանություն',
          'Կլինիկական հոգեբանություն',
          'Հոգեվերլուծություն',
        ],
        correctIndex: 1,
        explanation:
          'Concepts like building character strengths, gratitude, and resilience have transitioned from Positive Psychology research directly into school and military training programs.',
        explanationKa:
          'ისეთი ცნებები, როგორიცაა ხასიათის სიძლიერე, მადლიერება და გამძლეობა, პოზიტიური ფსიქოლოგიის კვლევიდან პირდაპირ სასკოლო და სამხედრო პროგრამებში გადმოვიდა.',
        explanationRu:
          'Такие концепции, как развитие сильных сторон характера, благодарности и жизнестойкости, перешли из исследований позитивной психологии прямо в программы школ.',
        explanationHy:
          'Այնպիսի հասկացություններ, ինչպիսիք են բնավորության ուժեղացումը և վճռականությունը, դրական հոգեբանության հետազոտությունից անմիջապես անցել են դպրոցական ուսուցման ծրագրեր:',
      },
      {
        id: 'q16_13',
        question:
          "Which psychological concept involves understanding the 'Zone of Proximal Development', often used in Educational Psychology?",
        questionKa:
          'რომელი ფსიქოლოგიური კონცეფცია მოიცავს „განვითარების უახლოესი ზონის“ (ZPD) გაგებას, რომელიც ხშირად გამოიყენება განათლების ფსიქოლოგიაში?',
        questionRu:
          'Какая психологическая концепция включает в себя понятие «Зона ближайшего развития», часто используемое в педагогической психологии?',
        questionHy:
          'Կրթական հոգեբանության մեջ ո՞ր հոգեբանական հասկացությունն է ներառում «Մոտակա զարգացման գոտու» ըմբռնումը:',
        options: [
          "Skinner's operant conditioning",
          "Freud's Oedipus complex",
          "Vygotsky's sociocultural theory",
          "Bandura's observational learning",
        ],
        optionsKa: [
          'სკინერის ოპერანტული პირობითობა',
          'ფროიდის ოიდიპოსის კომპლექსი',
          'ვიგოტსკის სოციოკულტურული თეორია',
          'ბანდურას დაკვირვებითი სწავლა',
        ],
        optionsRu: [
          'Оперантное обусловливание Скиннера',
          'Эдипов комплекс Фрейда',
          'Социокультурная теория Выготского',
          'Обсервационное обучение Бандуры',
        ],
        optionsHy: [
          'Սկինների օպերանտ պայմանավորումը',
          'Ֆրեյդի Էդիպյան բարդույթը',
          'Վիգոտսկու սոցիոմշակութային տեսությունը',
          'Բանդուրայի դիտողական ուսուցումը',
        ],
        correctIndex: 2,
        explanation:
          "Lev Vygotsky's concept of the ZPD describes the difference between what a learner can do independently and what they can do with guidance.",
        explanationKa:
          'ლევ ვიგოტსკის ZPD-ის კონცეფცია აღწერს განსხვავებას იმას შორის, რისი გაკეთება შეუძლია მოსწავლეს დამოუკიდებლად და რისი გაკეთება შეუძლია ხელმძღვანელობით.',
        explanationRu:
          'Концепция зоны ближайшего развития Льва Выготского описывает разницу между тем, что учащийся может делать самостоятельно, и тем, что он может делать под руководством.',
        explanationHy:
          'Լև Վիգոտսկու ZPD հայեցակարգը նկարագրում է այն տարբերությունը, թե սովորողն ինչ կարող է անել ինքնուրույն, և ինչ կարող է անել ուղղորդման դեպքում:',
      },
      {
        id: 'q16_14',
        question: 'What does a Forensic Psychologist commonly analyze regarding juries?',
        questionKa: 'რას აანალიზებს ძირითადად სასამართლო ფსიქოლოგი ნაფიც მსაჯულებთან მიმართებაში?',
        questionRu: 'Что обычно анализирует судебный психолог в отношении присяжных?',
        questionHy: 'Ի՞նչ է սովորաբար վերլուծում դատական հոգեբանը երդվյալ ատենակալների վերաբերյալ:',
        options: [
          'Their fashion choices',
          'Jury selection processes and group decision-making dynamics',
          'Their athletic abilities',
          'Their musical preferences',
        ],
        optionsKa: [
          'მათი მოდის არჩევანს',
          'მსაჯულთა შერჩევის პროცესებს და ჯგუფური გადაწყვეტილების მიღების დინამიკას',
          'მათ ათლეტურ შესაძლებლობებს',
          'მათ მუსიკალურ პრეფერენციებს',
        ],
        optionsRu: [
          'Их выбор одежды',
          'Процессы отбора присяжных и динамику принятия групповых решений',
          'Их спортивные способности',
          'Их музыкальные предпочтения',
        ],
        optionsHy: [
          'Նրանց նորաձևության ընտրությունը',
          'Ատենակալների ընտրության գործընթացները և խմբային որոշումների կայացման դինամիկան',
          'Նրանց մարզական ունակությունները',
          'Նրանց երաժշտական նախասիրությունները',
        ],
        correctIndex: 1,
        explanation:
          'Forensic psychologists assist in cases by consulting on jury selection to identify biases and predicting how a group of jurors might deliberate.',
        explanationKa:
          'სასამართლო ფსიქოლოგები ეხმარებიან სასამართლო საქმეებში ნაფიცი მსაჯულების შერჩევის საკითხებში, მიკერძოების გამოსავლენად და ჯგუფის დინამიკის პროგნოზირების მიზნით.',
        explanationRu:
          'Судебные психологи помогают в судебных делах, консультируя по вопросам отбора присяжных с целью выявления предвзятости и прогнозирования того, как группа может принимать решения.',
        explanationHy:
          'Դատական հոգեբաններն օգնում են դատական գործերում՝ խորհրդակցելով ժյուրիի ընտրության վերաբերյալ՝ բացահայտելու կողմնակալությունը:',
      },
      {
        id: 'q16_15',
        question:
          'What is the study of how people change their behavior to stick to medical treatments called within applied psychology?',
        questionKa:
          'როგორ ეწოდება გამოყენებით ფსიქოლოგიაში იმის შესწავლას, თუ როგორ იცვლიან ადამიანები თავიანთ ქცევას სამედიცინო მკურნალობის დასაცავად?',
        questionRu:
          'Как в прикладной психологии называется изучение того, как люди меняют свое поведение, чтобы придерживаться медицинского лечения?',
        questionHy:
          'Ինչպե՞ս է կոչվում կիրառական հոգեբանության մեջ այն ուսումնասիրությունը, թե ինչպես են մարդիկ փոխում իրենց վարքագիծը բժշկական բուժումներին հավատարիմ մնալու համար:',
        options: [
          'Cognitive dissonance',
          'Treatment Adherence or Compliance',
          'Diagnostic profiling',
          'Social loafing',
        ],
        optionsKa: [
          'კოგნიტური დისონანსი',
          'მკურნალობისადმი დამყოლობა (Adherence / Compliance)',
          'დიაგნოსტიკური პროფილირება',
          'სოციალური სიზარმაცე (loafing)',
        ],
        optionsRu: [
          'Когнитивный диссонанс',
          'Приверженность лечению или комплаенс (Adherence)',
          'Диагностическое профилирование',
          'Социальная лень',
        ],
        optionsHy: [
          'Ճանաչողական դիսոնանս',
          'Բուժման հավատարմություն կամ համապատասխանություն (Adherence)',
          'Ախտորոշիչ պրոֆիլավորում',
          'Սոցիալական ծուլություն',
        ],
        correctIndex: 1,
        explanation:
          'Health psychologists critically study adherence—understanding why patients fail to take prescribed medication and finding ways to improve compliant behaviors.',
        explanationKa:
          'ჯანმრთელობის ფსიქოლოგები კრიტიკულად შეისწავლიან მკურნალობისადმი დამყოლობას - თუ რატომ არ იღებენ პაციენტები დანიშნულ მედიკამენტებს და როგორ გააუმჯობესონ ეს ქცევა.',
        explanationRu:
          'Психологи здоровья критически изучают приверженность лечению — понимание того, почему пациенты не принимают назначенные лекарства, и поиск способов улучшить это поведение.',
        explanationHy:
          'Առողջապահության հոգեբանները խստորեն ուսումնասիրում են հավատարմությունը՝ հասկանալով, թե ինչու հիվանդները չեն ընդունում նշանակված դեղամիջոցները:',
      },
    ],
  },
];
