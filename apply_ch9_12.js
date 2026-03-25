const fs = require('fs');
const path = require('path');
const util = require('util');

const FILE_PATH = path.join(__dirname, 'src/app/data/book-data.ts');

const chapters = [
  {
    id: 9,
    title: 'Human Development',
    titleKa: 'ადამიანის განვითარება',
    titleRu: 'Развитие человека',
    titleHy: 'Մարդու զարգացումը',
    description: 'Physical, cognitive, and social development across the lifespan.',
    descriptionKa: 'როგორ ვიცვლებით ფიზიკურად, გონებრივად და სოციალურად მთელი ცხოვრების განმავლობაში.',
    descriptionRu: 'Как мы меняемся физически, умственно и социально на протяжении всей жизни.',
    descriptionHy: 'Ինչպես ենք մենք փոխվում ֆիզիկապես, մտավոր և սոցիալապես ողջ կյանքի ընթացքում:',
    icon: 'mdi:baby-face-outline',
    keyTopics: ['Piaget\'s Stages', 'Attachment', 'Erikson\'s Stages', 'Moral Development', 'Aging'],
    keyTopicsKa: ['პიაჟეს სტადიები', 'მიჯაჭვულობა', 'ერიქსონის სტადიები', 'მორალური განვითარება', 'დაბერების პროცესი'],
    keyTopicsRu: ['Стадии Пиаже', 'Привязанность', 'Стадии Эриксона', 'Моральное развитие', 'Процесс старения'],
    keyTopicsHy: ['Պիաժեի փուլերը', 'Կապվածություն', 'Էրիքսոնի փուլերը', 'Բարոյական զարգացում', 'Ծերացում'],
    summary: 'Development is a lifelong process. Piaget described cognitive stages. Erikson outlined psychosocial crises. Bowlby and Ainsworth studied attachment. Traces changes from conception through aging.',
    summaryKa: 'განვითარება უწყვეტი პროცესია დაბადებიდან სიბერემდე. პიაჟემ გონებრივი განვითარების ეტაპები აღწერა, ერიქსონმა კრიზისები, ბოულბიმ და ეინსვორთმა კი — მიჯაჭვულობა.',
    summaryRu: 'Развитие — это непрерывный процесс от рождения до старости. Пиаже описал когнитивные этапы, Эриксон — психосоциальные кризисы, а Боулби и Эйнсворт изучали привязанность.',
    summaryHy: 'Զարգացումը շարունակական գործընթաց է ծննդից մինչև ծերություն: Պիաժեն նկարագրել է ճանաչողական փուլերը, Էրիքսոնը՝ հոգեսոցիալական ճգնաժամերը, իսկ Բոուլբին ու Էյնսվորթը ուսումնասիրել են կապվածությունը:',
    keyPoints: [
      'Nature vs. nurture is a false dichotomy: genes and environment interact continuously. Epigenetics shows that experiences can turn genes on or off.',
      'Piaget\'s 4 cognitive stages: Sensorimotor (0–2, object permanence), Preoperational (2–7, symbolic thinking but egocentric), Concrete operational (7–11, logical thinking), Formal operational (12+, abstract reasoning).',
      'Attachment theory (Bowlby/Ainsworth): Secure attachment (caregiver responsive) leads to healthy social development. Insecure types: avoidant, anxious-ambivalent, disorganized. Measured by the Strange Situation test.',
      'Erikson\'s 8 psychosocial stages span the entire lifespan: Trust vs. Mistrust (infancy), Autonomy vs. Shame (toddler), Initiative vs. Guilt (preschool), Industry vs. Inferiority (school age), Identity vs. Role Confusion (adolescence), Intimacy vs. Isolation (young adult), Generativity vs. Stagnation (middle adult), Integrity vs. Despair (late adult).',
      'Kohlberg\'s moral development: Preconventional (self-interest), Conventional (social norms), Postconventional (universal ethical principles). Most adults operate at the conventional level.',
      'Adolescence brings identity exploration (Erikson\'s "identity crisis"), prefrontal cortex development (not complete until ~25), and heightened emotional volatility due to hormonal changes.',
      'Aging: Fluid intelligence (processing speed) declines with age, but crystallized intelligence (accumulated knowledge) remains stable or even increases. Neuroplasticity continues throughout life.'
    ],
    keyPointsKa: [
      'ვიბადებით თუ ვიზრდებით? ეს მცდარი დილემაა — გენები და გარემო ერთმანეთზე მუდმივად ზემოქმედებენ. ეპიგენეტიკა გვაჩვენებს, რომ ჩვენმა გამოცდილებამ შეიძლება გენებიც კი ჩართოს ან გამორთოს.',
      'პიაჟეს 4 სტადია: სენსომოტორული (0–2 წელი), პრეოპერაციული (2–7 წელი, ეგოცენტრული აზროვნება), კონკრეტული ოპერაციები (7–11 წელი, ლოგიკა) და ფორმალური ოპერაციები (12+ წელი, აბსტრაქტული აზროვნება).',
      'მიჯაჭვულობის თეორია: უსაფრთხო მიჯაჭვულობა (როცა მშობელი ყურადღებიანია) ჯანსაღ სოციალურ განვითარებას იწვევს. არსებობს არაჯანსაღი ტიპებიც: განრიდებული, შფოთვითი და დეზორგანიზებული.',
      'ერიქსონის 8 სტადია მთელ ცხოვრებას მოიცავს: ნდობა-უნდობლობა დაბადებისას, დამოუკიდებლობა-სირცხვილი (ჩვილობაში), ინიციატივა-დანაშაულის გრძნობა და ასე შემდეგ, სიბერეში მთლიანობისა და სასოწარკვეთის ჭიდილამდე.',
      'კოლბერგის მორალური განვითარება: წინაკონვენციური (საკუთარი ინტერესი), კონვენციური (სოციალური ნორმები) და პოსტკონვენციური (უნივერსალური პრინციპები). უმეტესობა მეორე დონეზე ვრჩებით.',
      'მოზარდობისას ადამიანები საკუთარ იდენტობას ეძებენ (ერიქსონის "იდენტობის კრიზისი"). ამ დროს ტვინის შუბლის წილი ჯერ კიდევ ყალიბდება, რის გამოც მოზარდები ასეთი ემოციურები არიან.',
      'ასაკში შესვლა: სისწრაფე და ანალიზის უნარი იკლებს, მაგრამ დაგროვილი ცოდნა და გამოცდილება (კრისტალიზებული ინტელექტი) ნარჩუნდება ან იზრდება კიდეც.'
    ],
    keyPointsRu: [
      'Природа или воспитание? Это ложная дихотомия. Гены и среда постоянно взаимодействуют. Эпигенетика показывает, что наш опыт может включать и выключать гены.',
      '4 когнитивные стадии Пиаже: сенсомоторная (0-2 года), дооперациональная (2-7 лет), стадия конкретных операций (7-11 лет) и формальных операций (12+, абстрактное мышление).',
      'Теория привязанности: безопасная привязанность (когда родитель отзывчив) ведет к здоровому социальному развитию. Существуют и небезопасные типы: избегающий, тревожный и дезорганизованный.',
      '8 стадий Эриксона охватывают всю жизнь: от базового доверия или недоверия в младенчестве до поиска идентичности в подростковом возрасте и подведения итогов в старости.',
      'Моральное развитие по Колбергу: доконвенциональное (личная выгода), конвенциональное (социальные нормы) и постконвенциональное (универсальные принципы). Большинство людей остаются на конвенциональном уровне.',
      'Подростковый возраст приносит поиск идентичности ("кризис идентичности"). Префронтальная кора мозга еще формируется (до ~25 лет), поэтому гормональные изменения вызывают высокую эмоциональность.',
      'Старение: скорость обработки информации падает, но накопленные знания (кристаллизованный интеллект) остаются стабильными или растут. Нейропластичность мозга сохраняется всю жизнь.'
    ],
    keyPointsHy: [
      'Բնույթը թե՞ դաստիարակությունը. սա սխալ երկընտրանք է: Գեներն ու միջավայրը մշտապես փոխազդում են իրար հետ:',
      'Պիաժեի 4 փուլերը՝ սենսոմոտորային, նախաօպերացիոն, կոնկրետ գործողությունների և ֆորմալ գործողությունների (12+ տարեկան, աբստրակտ մտածողություն):',
      'Կապվածության տեսություն. անվտանգ կապվածությունը (երբ ծնողն արձագանքող է) հանգեցնում է առողջ սոցիալական զարգացման:',
      'Էրիքսոնի 8 հոգեսոցիալական փուլերը ընդգրկում են ողջ կյանքը՝ մանկության վստահությունից մինչև ծերության իմաստության որոնում:',
      'Կոլբերգի բարոյական զարգացումը. նախակոնվենցիոնալ, կոնվենցիոնալ և պոստկոնվենցիոնալ (համընդհանուր սկզբունքներ) մակարդակներ:',
      'Դեռահասությունը բերում է ինքնության որոնում: Ուղեղի ճակատային բլթակը դեռ չի ավարտել զարգացումը (մինչև ~25 տարեկան), ինչի պատճառով էմոցիոնալ տատանումները շատ են:',
      'Ծերացում. տեղեկատվության մշակման արագությունը նվազում է, բայց կուտակված գիտելիքները պահպանվում են դրական կամ նույնիսկ աճում են:'
    ],
    funFact: 'Babies can distinguish all speech sounds from all languages until about 10 months of age. After that, their brains "prune" unused neural pathways and specialize in their native language sounds — which is why learning a second language gets harder with age.',
    funFactKa: '10 თვემდე ბავშვებს შეუძლიათ გაარჩიონ მსოფლიოს ნებისმიერი ენის ბგერა. ამის მერე მათი ტვინი "ასუფთავებს" გამოუყენებელ კავშირებს და მხოლოდ მშობლიურ ენაზე ფოკუსირდება — ამიტომაა რთული უცხო ენის მოგვიანებით სწავლა.',
    funFactRu: 'До 10 месяцев младенцы могут различать звуки абсолютно всех языков мира. Затем их мозг "отсекает" неиспользуемые нейронные связи, концентрируясь на родном языке — вот почему так трудно учить языки позже.',
    funFactHy: 'Մինչև 10 ամսական երեխաները կարող են տարբերել աշխարհի բոլոր լեզուների հնչյունները: Դրանից հետո ուղեղը հրաժարվում է չօգտագործվող նեյրոնային կապերից՝ կենտրոնանալով մայրենի լեզվի վրա:',
    realWorld: 'Ainsworth\'s attachment research directly influenced childcare policies worldwide. Secure attachment in infancy predicts better relationships, higher self-esteem, and more resilience in adulthood.',
    realWorldKa: 'ეინსვორთის დაკვირვებებმა პირდაპირ შეცვალა ბავშვთა აღზრდის წესები მთელ მსოფლიოში. ჯანსაღი მიჯაჭვულობა ბავშვობაში პირდაპირ კავშირშია უკეთეს ურთიერთობებთან და თავდაჯერებულობასთან ზრდასრულობისას.',
    realWorldRu: 'Исследования привязанности изменили подход к воспитанию детей во всем мире. Надежная привязанность в детстве напрямую ведет к лучшим отношениям и самооценке во взрослой жизни.',
    realWorldHy: 'Կապվածության հետազոտություններն ուղղակիորեն փոխեցին երեխաների խնամքի մոտեցումներն ամբողջ աշխարհում: Անվտանգ կապվածությունը վաղ տարիքում հանգեցնում է ավելի առողջ հարաբերությունների հասուն տարիքում:',
    keyFigures: ['Jean Piaget', 'Erik Erikson', 'John Bowlby', 'Mary Ainsworth', 'Lawrence Kohlberg', 'Lev Vygotsky']
  },
  {
    id: 10,
    title: 'Motivation and Emotion',
    titleKa: 'მოტივაცია და ემოციები',
    titleRu: 'Мотивация и эмоции',
    titleHy: 'Մոտիվացիա և էմոցիաներ',
    description: 'What drives human behavior and the science of emotions.',
    descriptionKa: 'რა აღგვაგზნებს და განაპირობებს ჩვენს ქცევას, და როგორ მუშაობს ემოციები.',
    descriptionRu: 'Что движет нашим поведением и как работают наши эмоции.',
    descriptionHy: 'Ինչն է ուղղորդում մեր վարքագիծը և փոխում մեր զգացմունքները:',
    icon: 'mdi:fire',
    keyTopics: ['Maslow\'s Hierarchy', 'Hunger & Eating', 'Achievement Motivation', 'Basic Emotions', 'Emotional Intelligence'],
    keyTopicsKa: ['მასლოუს პირამიდა', 'შიმშილი და კვება', 'მიღწევის მოტივაცია', 'ძირითადი ემოციები', 'ემოციური ინტელექტი'],
    keyTopicsRu: ['Пирамида Маслоу', 'Голод и питание', 'Мотивация достижения', 'Базовые эмоции', 'Эмоциональный интеллект'],
    keyTopicsHy: ['Մասլոուի բուրգը', 'Քաղց և սնուցում', 'Նվաճումների մոտիվացիա', 'Հիմնական էմոցիաներ', 'Էմոցիոնալ ինտելեկտ'],
    summary: 'Motivation energizes and directs behavior. Covers Maslow\'s hierarchy, James-Lange theory, Cannon-Bard theory, and Schachter-Singer theory of emotions.',
    summaryKa: 'მოტივაცია გვაძლევს ენერგიას და მიმართულებას ზუსტი მიზნებისკენ. გაეცნობით მასლოუს საჭიროებათა პირამიდას და ემოციების მთავარ თეორიებს.',
    summaryRu: 'Мотивация дает нам энергию и направляет поведение. В этой главе разбираются пирамида Маслоу и главные научные теории эмоций.',
    summaryHy: 'Մոտիվացիան էներգիա է տալիս և ուղղորդում վարքագիծը: Այստեղ քննարկվում են Մասլոուի պահանջմունքների բուրգը և էմոցիաների հիմնական տեսությունները:',
    keyPoints: [
      'Motivation has three components: activation (initiating), persistence (continuing effort), and intensity (how hard you try).',
      'Drive-reduction theory: physiological needs create drives (hunger, thirst) that motivate behavior to restore homeostasis. But it can\'t explain curiosity or thrill-seeking.',
      'Maslow\'s hierarchy of needs (bottom to top): Physiological → Safety → Love/Belonging → Esteem → Self-actualization. Lower needs must be met before higher ones become motivating.',
      'Intrinsic motivation (doing something for its own sake) is more sustainable than extrinsic motivation (rewards/punishments). The overjustification effect: rewarding an already enjoyed activity can decrease intrinsic motivation.',
      'Theories of emotion: James-Lange (body reacts first, then we feel emotion), Cannon-Bard (body reaction and emotion occur simultaneously), Schachter-Singer / Two-factor (physiological arousal + cognitive label = emotion).',
      'Paul Ekman identified 6 universal facial expressions: happiness, sadness, anger, fear, surprise, and disgust. These are recognized across all cultures.',
      'Emotional intelligence (Goleman): the ability to perceive, understand, manage, and use emotions effectively. High EQ predicts better relationships, leadership, and mental health.'
    ],
    keyPointsKa: [
      'მოტივაციას სამი ნაწილი აქვს: დაწყება (აქტივაცია), გაგრძელება (შეუპოვრობა) და ინტენსივობა (რამდენად ბევრს ვცდილობთ).',
      'ლტოლვის შემცირების თეორია: ფიზიოლოგიური მოთხოვნილება ქმნის ლტოლვას (მაგ. შიმშილი), რაც გვიბიძგებს ბალანსის აღდგენისკენ. მაგრამ ეს არ ხსნის რატომ გვიყვარს რისკი ან რატომ ვართ ცნობისმოყვარენი.',
      'მასლოუს პირამიდა (ქვემოდან ზემოთ): ფიზიოლოგიური მოთხოვნები → უსაფრთხოება → სიყვარული/მიკუთვნებულობა → აღიარება → თვითრეალიზაცია. ქვედა საფეხური უნდა დაკმაყოფილდეს, რომ ზედამ მოტივაცია მოგვცეს.',
      'შინაგანი მოტივაცია (როცა რაღაცას ხალისით აკეთებ) უფრო მყარია ვიდრე გარეგანი (ჯილდო/სასჯელი). თუ ადამიანს დააჯილდოებ იმაში, რაც უკვე უყვარს, მისი შინაგანი ინტერესი შეიძლება შემცირდეს.',
      'ემოციის თეორიები: ჯეიმს-ლანგე (ჯერ სხეული რეაგირებს, მერე ვგრძნობთ), ქენონ-ბარდი (სხეული და ემოცია ერთდროულად ირთვება), შახტერ-სინგერი (ფიზიოლოგიური რეაქცია + გონებრივი შეფასება = ემოცია).',
      'კვლევებმა აჩვენა 6 უნივერსალური ემოცია, რომლებსაც მთელ მსოფლიოში ერთნაირად გამოხატავენ: ბედნიერება, უკმაყოფილება, ბრაზი, შიში, გაკვირვება და ზიზღი.',
      'ემოციური ინტელექტი (EQ): საკუთარი და სხვების ემოციების შემჩნევა, გაგება და მართვა. მაღალი EQ გვეხმარება ურთიერთობებში და ამცირებს სტრესს.'
    ],
    keyPointsRu: [
      'У мотивации три компонента: активация (начало), настойчивость (продолжение) и интенсивность (сколько усилий мы прилагаем).',
      'Теория снижения влечения: потребности тела (например, голод) создают импульс для восстановления баланса. Но это не объясняет наше любопытство или тягу к экстриму.',
      'Пирамида Маслоу: физиология → безопасность → любовь/принадлежность → уважение → самоактуализация. Базовые потребности должны быть закрыты первыми.',
      'Внутренняя мотивация (делать то, что искренне нравится) сильнее внешней (награды/штрафы). Эффект сверхоправдания: если вознаграждать за то, что человек и так любит делать, его естественный интерес может упасть.',
      'Теории эмоций: Джеймс-Ланге (сначала реакция тела, потом эмоция), Кеннон-Бард (всё происходит одновременно) и Шехтер-Сингер (реакция тела + наша мысленная оценка = эмоция).',
      'Пол Экман выделил 6 универсальных мимических реакций, понятных в любой культуре: радость, грусть, гнев, страх, удивление и отвращение.',
      'Эмоциональный интеллект (EQ) — способность понимать и управлять эмоциями. Высокий EQ делает нас лучше в общении и лидерстве.'
    ],
    keyPointsHy: [
      'Մոտիվացիան ունի երեք բաղադրիչ՝ ակտիվացում, համառություն և ինտենսիվություն:',
      'Մղումների նվազեցման տեսություն. ֆիզիոլոգիական պահանջները (քաղց, ծարավ) դրդում են մեզ վերականգնել բալանսը:',
      'Մասլոուի բուրգը (ներքևից վերև)՝ Ֆիզիոլոգիական, անվտանգություն, սեր/պատկանելիություն, հարգանք, ինքնաիրացում:',
      'Ներքին մոտիվացիան (անել մի բան հանուն հաճույքի) ավելի կայուն է, քան արտաքինը (պարգևատրումներ): Արդեն սիրելի զբաղմունքի համար վճարելը կարող է ոչնչացնել նախնական հետաքրքրությունը:',
      'Էմոցիաների տեսություններ. Ջեյմս-Լանգե (նախ արձագանքում է մարմինը, ապա՝ զգացմունքը), Քենոն-Բարդ (միաժամանակյա արձագանք), և Շախտեր-Սինգեր (մարմնի արձագանք + միտք = էմոցիա):',
      'Փոլ Էկմանը առանձնացրել է 6 ունիվերսալ դեմքի արտահայտություններ՝ ուրախություն, տխրություն, բարկություն, վախ, զարմանք և զզվանք:',
      'Էմոցիոնալ ինտելեկտ (EQ). սեփական և ուրիշների զգացմունքները հասկանալու ու կառավարելու ունակություն:'
    ],
    funFact: 'The "misattribution of arousal" study showed that men who crossed a scary suspension bridge rated a female interviewer as more attractive than men who crossed a safe bridge — they mistook their fear-based arousal for romantic attraction!',
    funFactKa: 'ერთ ექსპერიმენტში, საშიშ ხიდზე გავლელმა კაცებმა უფრო მიმზიდველად შეაფასეს გამომკითხველი ქალი, ვიდრე უსაფრთხო ხიდზე გავლელებმა — მათ შიშით გამოწვეული ადრენალინი რომანტიკულ მიზიდულობაში აერიათ!',
    funFactRu: 'Эксперимент на подвесном мосту показал: мужчины, перешедшие страшный мост, находили девушку-интервьюера более привлекательной, перепутав адреналин от страха с романтическим волнением!',
    funFactHy: 'Մի փորձարկում ցույց է տվել, որ վտանգավոր կախովի կամրջով անցնող տղամարդիկ հարցազրույց վարող կնոջը ավելի գրավիչ են համարել՝ շփոթելով վախի առաջացրած ադրենալինը ռոմանտիկ ձգողականության հետ:',
    realWorld: 'Companies like Google use Maslow\'s hierarchy to design workplaces: free food (physiological), job security (safety), team activities (belonging), recognition programs (esteem), and "20% time" for passion projects (self-actualization).',
    realWorldKa: 'ისეთი კომპანიები, როგორიცაა Google, მასლოუს პირამიდას იყენებენ სამუშაო გარემოს შესაქმნელად: უფასო საჭმელი (ფიზიოლოგიური), სტაბილურობა (უსაფრთხოება), გუნდური თამაშები (მიკუთვნებულობა) და "20% დრო" საკუთარი იდეებისთვის (თვითრეალიზაცია).',
    realWorldRu: 'Компании вроде Google строят офисы по пирамиде Маслоу: бесплатная еда (физиология), стабильность (безопасность), командные игры (принадлежность) и 20% времени на свои проекты (самоактуализация).',
    realWorldHy: 'Google-ի նման ընկերություններն օգտագործում են Մասլոուի բուրգը աշխատավայր ստեղծելիս՝ անվճար սնունդ (ֆիզիոլոգիական), կայունություն (անվտանգություն) և 20% ժամանակ սեփական առաջադրանքների համար (ինքնաիրացում):',
    keyFigures: ['Abraham Maslow', 'William James', 'Walter Cannon', 'Stanley Schachter', 'Paul Ekman', 'Daniel Goleman']
  },
  {
    id: 11,
    title: 'Personality',
    titleKa: 'პიროვნების ფსიქოლოგია',
    titleRu: 'Психология личности',
    titleHy: 'Անձի հոգեբանություն',
    description: 'Theories of personality: from Freud to the Big Five.',
    descriptionKa: 'თეორიები პიროვნების შესახებ: ფროიდიდან დიდი ხუთეულის მოდელამდე.',
    descriptionRu: 'Теории личности: от Фрейда до модели Большой пятерки.',
    descriptionHy: 'Անձի տեսություններ՝ Ֆրեյդից մինչև Մեծ հնգյակի մոդել:',
    icon: 'mdi:drama-masks',
    keyTopics: ['Psychoanalytic Theory', 'Humanistic Theory', 'Trait Theory', 'Big Five', 'Personality Assessment'],
    keyTopicsKa: ['ფსიქოანალიზი', 'ჰუმანისტური თეორია', 'თვისებათა თეორია', 'დიდი ხუთეული', 'პიროვნების შეფასება'],
    keyTopicsRu: ['Психоанализ', 'Гуманистическая теория', 'Теория черт', 'Большая пятерка', 'Оценка личности'],
    keyTopicsHy: ['Հոգեվերլուծություն', 'Հումանիստական տեսություն', 'Գծերի տեսություն', 'Մեծ հնգյակ', 'Անձի գնահատում'],
    summary: 'Personality is our unique pattern of thinking, feeling, and behaving. From Freud\'s id/ego/superego to the Big Five traits (OCEAN), covers all major personality theories.',
    summaryKa: 'პიროვნება ჩვენი ფიქრების, გრძნობების და ქცევების უნიკალური ნაზავია. თავი მიმოიხილავს ძირითად თეორიებს: ფროიდის ქვეცნობიერიდან დაწყებული თანამედროვე "დიდი ხუთეულის" მოდელით დამთავრებული.',
    summaryRu: 'Личность — это наш уникальный узор мыслей, чувств и поведения. Глава охватывает всё от бессознательного Фрейда до современных стандартов Большой пятерки.',
    summaryHy: 'Անձը մեր մտքերի, զգացմունքների և վարքագծի եզակի միավորումն է: Այստեղ քննարկվում են անձի ուղղությունները՝ Ֆրեյդի տեսությունից մինչև ներկայիս Մեծ հնգյակը:',
    keyPoints: [
      'Freud\'s psychoanalytic theory: Personality is shaped by unconscious conflicts between the Id (primal desires), Ego (rational mediator), and Superego (moral conscience). Defense mechanisms (repression, projection, denial) protect the ego.',
      'Freud\'s psychosexual stages: Oral, Anal, Phallic (Oedipus complex), Latency, Genital. Fixation at any stage can affect adult personality.',
      'Neo-Freudians (Adler, Jung, Horney) kept the unconscious but de-emphasized sexuality. Jung introduced collective unconscious and archetypes. Adler focused on inferiority complex.',
      'Humanistic approaches: Rogers emphasized unconditional positive regard and self-concept. Maslow focused on self-actualization — becoming the best version of yourself.',
      'Trait theories describe personality using stable dimensions. The Big Five (OCEAN): Openness (curiosity), Conscientiousness (organization), Extraversion (sociability), Agreeableness (cooperativeness), Neuroticism (emotional instability).',
      'The Big Five are partially heritable (~40–60%), relatively stable after age 30, and predict job performance, relationship satisfaction, and health outcomes.',
      'Personality assessment: Self-report inventories (MMPI, NEO-PI-R) have good reliability but are subject to social desirability bias. Projective tests (Rorschach, TAT) have weaker validity.'
    ],
    keyPointsKa: [
      'ფროიდის ფსიქოანალიზი: პიროვნებას აყალიბებს ქვეცნობიერი კონფლიქტი ჩვენს ცხოველურ სურვილებს (Id), რაციონალურობას (Ego) და მორალს (Superego) შორის. ფსიქიკურ მექანიზმებს კი ეგოს დასაცავად ვიყენებთ.',
      'ფროიდის ფსიქოსექსუალური სტადიები (ორალური, ანალური, ფალიკური და ა.შ.) ამტკიცებდა, რომ ნებისმიერ ეტაპზე შეფერხება ზრდასრული ადამიანის ხასიათზე აისახება.',
      'ნეო-ფროიდისტებმა (იუნგი, ადლერი) შეინარჩუნეს ქვეცნობიერის იდეა, მაგრამ სექსუალობის როლი შეამცირეს. იუნგმა შემოიტანა არქეტიპების ცნება, ადლერმა კი — არასრულფასოვნების კომპლექსი.',
      'ჰუმანისტური მიდგომა: კარლ როჯერსი ხაზს უსვამდა უპირობო სიყვარულის მნიშვნელობას, მასლოუ კი — თვითრეალიზაციას, ანუ იმაზე ზრუნვას, რომ საკუთარი პოტენციალის მაქსიმუმს მივაღწიოთ.',
      'თვისებათა თეორიები ხასიათს სტაბილური განზომილებებით ხსნიან. საუკეთესოა "დიდი ხუთეული" (OCEAN): ღიაობა გამოცდილების მიმართ, კეთილსინდისიერება, ექსტრავერსია, დამთმობლობა და ნევროტიზმი.',
      'ეს ხუთი თვისება ნაწილობრივ გენეტიკურია, 30 წლის მერე ნაკლებად იცვლება, და საკმაოდ კარგად წინასწარმეტყველებს ადამიანის წარმატებასა და ურთიერთობების გამძლეობას.',
      'პიროვნების ტესტები და კითხვარები საკმაოდ სანდოა (მაგ. MMPI), თუმცა ადამიანებს ზოგჯერ ტყუილის თქმა და თავის უკეთ წარმოჩენა უყვართ.'
    ],
    keyPointsRu: [
      'Психоанализ Фрейда: личность формируется конфликтом между животными импульсами (Ид), рациональным Эго и моральным Суперэго. Защитные механизмы спасают Эго от тревоги.',
      'Фрейдовские стадии развития (психосексуальные): фиксация на любой из них может повлиять на характер взрослого.',
      'Неофрейдисты (Юнг, Адлер) сохранили идею бессознательного, но убрали акцент с сексуальности. Юнг ввел понятие архетипов, а Адлер — комплекс неполноценности.',
      'Гуманистический подход: Роджерс подчеркивал важность безусловной любви, а Маслоу фокусировался на самоактуализации — раскрытии своего полного потенциала.',
      'Теории черт описывают характер стабильными шкалами. Главная из них — "Большая пятерка" (OCEAN): открытость опыту, добросовестность, экстраверсия, покладистость (дружелюбие) и невротизм.',
      'Большая пятерка частично передается по наследству, стабилизируется после 30 лет и отлично предсказывает успехи в карьере и браке.',
      'Оценка личности: опросники (такие как MMPI) довольно надежны, хотя люди и склонны давать социально ожидаемые ответы. Проективные тесты вроде пятен Роршаха менее валидны.'
    ],
    keyPointsHy: [
      'Ֆրեյդի հոգեվերլուծություն. անձը ձևավորվում է անգիտակից կոնֆլիկտների միջոցով՝ ցանկությունների (Id), ռացիոնալության (Ego) և բարոյականության (Superego) միջև:',
      'Ֆրեյդի հոգեսեքսուալ փուլերը (օրալ, անալ, և այլն) ցույց են տալիս, որ նախնական շրջանի խնդիրները կարող են ազդել հասուն բնավորության վրա:',
      'Նեո-ֆրեյդիստներ (Յունգ, Ադլեր). նրանք պահպանեցին անգիտակցականի գաղափարը՝ նվազեցնելով սեքսուալության դերը: Յունգը ներդրեց արխետիպերը, իսկ Ադլերը՝ թերարժեքության բարդույթը:',
      'Հումանիստական մոտեցում. Ռոջերսը շեշտում էր անվերապահ դրական վերաբերմունքը, իսկ Մասլոուն՝ ինքնաիրացումը:',
      'Գծերի տեսությունը անձին նկարագրում է կայուն հատկանիշներով: «Մեծ հնգյակը» (OCEAN) ներառում է՝ բաց լինելը, բարեխղճություն, էքստրավերսիա, զիջողականություն և նևրոտիզմ:',
      'Այս հինգ գծերը մասամբ ժառանգական են և բավականին լավ կանխատեսում են մարդու հաջողությունները:',
      'Անձի գնահատում. թեստերը հուսալի են, չնայած մարդիկ երբեմն ցանկանում են տալ հասարակության կողմից սպասելի պատասխաններ:'
    ],
    funFact: 'The Myers-Briggs Type Indicator (MBTI) is used by 88% of Fortune 500 companies, yet most personality psychologists consider it scientifically unreliable — about 50% of people get a different result when retested. The Big Five is the gold standard in research.',
    funFactKa: 'ბევრი დიდი კომპანია ჯერ კიდევ იყენებს მაიერს-ბრიგსის (MBTI) ტესტს, თუმცა ის მეცნიერულად არასანდოა — ადამიანების 50% განმეორებით ტესტში სრულიად განსხვავებულ შედეგს იღებს. დღეს "დიდი ხუთეული" საუკეთესო ალტერნატივაა.',
    funFactRu: 'Тест Майерс-Бриггс (MBTI) используют многие корпорации, хотя он считается научно ненадежным: при повторном тесте половина людей получает другой результат. "Большая пятерка" — вот настоящий золотой стандарт.',
    funFactHy: 'Շատ ընկերություններ օգտագործում են Մայերս-Բրիգս (MBTI) թեստը, բայց այն գիտականորեն հուսալի չէ. մարդկանց 50%-ը կրկնակի թեստավորման ժամանակ այլ արդյունք է ստանում: «Մեծ հնգյակն» այժմ լավագույնն է:',
    realWorld: 'Recruiters use Big Five assessments because Conscientiousness is the strongest personality predictor of job performance across all occupations. Agreeableness predicts teamwork, and Openness predicts creativity.',
    realWorldKa: 'დამსაქმებლები "დიდი ხუთეულის" მოდელს იყენებენ, რადგან კომპონენტი "კეთილსინდისიერება აჩვენებს, თუ რამდენად კარგი თანამშრომელი იქნება ადამიანი. "დამთმობლობა" გუნდურობაზე მეტყველებს, "ღიაობა" კი კრეატიულობაზე.',
    realWorldRu: 'HR-специалисты уважают Большую пятерку: черта "добросовестность" является лучшим мировым предиктором успешности сотрудника, "открытость" указывает на креативность, а "покладистость" важна для командной работы.',
    realWorldHy: 'Գործատուները նախընտրում են Մեծ հնգյակը, քանի որ «բարեխղճությունը» աշխատանքային հաջողության ամենաուժեղ կանխատեսիչն է:',
    keyFigures: ['Sigmund Freud', 'Carl Jung', 'Alfred Adler', 'Carl Rogers', 'Gordon Allport', 'Hans Eysenck']
  },
  {
    id: 12,
    title: 'Social Psychology',
    titleKa: 'სოციალური ფსიქოლოგია',
    titleRu: 'Социальная психология',
    titleHy: 'Սոցիալական հոգեբանություն',
    description: 'How others influence our thoughts, feelings, and behavior.',
    descriptionKa: 'როგორ ცვლიან სხვები ჩვენს ფიქრებს, ემოციებს და ქცევას.',
    descriptionRu: 'Как другие люди влияют на наши мысли, чувства и поступки.',
    descriptionHy: 'Ինչպես են մարդիկ ազդում մեր մտքերի, զգացմունքների և վարքի վրա:',
    icon: 'mdi:account-group-outline',
    keyTopics: ['Conformity', 'Obedience', 'Attitudes', 'Group Behavior', 'Prejudice'],
    keyTopicsKa: ['კონფორმიზმი', 'მორჩილება', 'დამოკიდებულებები', 'ჯგუფური ქცევა', 'წინასწარგანწყობა'],
    keyTopicsRu: ['Конформизм', 'Повиновение', 'Установки', 'Поведение в группе', 'Предрассудки'],
    keyTopicsHy: ['Կոնֆորմիզմ', 'Հնազանդություն', 'Վերաբերմունքներ', 'Խմբային վարքագիծ', 'Նախապաշարմունքներ'],
    summary: 'Social psychology studies how people think about, influence, and relate to each other. Covers conformity, obedience, cognitive dissonance, group behavior, and prejudice.',
    summaryKa: 'სოციალური ფსიქოლოგია სწავლობს, თუ როგორ მივმართავთ ერთმანეთს და როგორ ვახდენთ გავლენას. აქ განიხილება კონფორმიზმის, მორჩილებისა და ჯგუფური დინამიკის საკითხები.',
    summaryRu: 'Социальная психология изучает, как мы взаимодействуем и влияем друг на друга. Глава покрывает темы подчинения авторитетам, конформизма, когнитивного диссонанса и группового поведения.',
    summaryHy: 'Սոցիալական հոգեբանությունն ուսումնասիրում է, թե ինչպես ենք մենք ներգործում միմյանց վրա․ կոնֆորմիզմից ու հնազանդությունից մինչև կոգնիտիվ դիսոնանս և խմբային վարքագիծ:',
    keyPoints: [
      'Attribution theory: We explain others\' behavior using dispositional (personality) or situational (environment) attributions. The fundamental attribution error: we overestimate personality and underestimate situations when judging others.',
      'Conformity (Asch): People agree with an obviously wrong answer to match the group about 37% of the time. Increases with group size (up to ~5) and unanimity.',
      'Obedience (Milgram): 65% of participants delivered what they believed were lethal electric shocks when instructed by an authority figure. Authority, proximity, and legitimacy increased obedience.',
      'Cognitive dissonance (Festinger): When our actions contradict our beliefs, we feel discomfort and change our attitudes to match our behavior. Explains why hazing rituals increase group loyalty.',
      'Group phenomena: Social facilitation (performing better on easy tasks when watched), Social loafing (working less in groups), Groupthink (cohesive groups suppress dissent), Deindividuation (anonymity reduces self-awareness).',
      'Prejudice involves stereotypes (beliefs), prejudice (attitudes), and discrimination (behaviors). Reduced through intergroup contact when groups have equal status and share common goals.',
      'Bystander effect (Darley & Latané): The more people present, the less likely anyone is to help. Caused by diffusion of responsibility and pluralistic ignorance.'
    ],
    keyPointsKa: [
      'მიწერის (ატრიბუციის) თეორია: სხვის საქციელს ხშირად მათ ხასიათს ვაბრალებთ და გარემოებებს უგულებელვყოფთ — ამას "ატრიბუციის ფუნდამენტური შეცდომა" ჰქვია.',
      'კონფორმიზმი (აშის ექსპერიმენტი): ადამიანები შემთხვევათა 37%-ში ჯგუფის გავლენით აშკარად მცდარ პასუხს ირჩევენ. ემორჩილებიან ჯგუფის აზრს, განსაკუთრებით მაშინ, როცა ჯგუფი დიდია და აზრი — ერთსულოვანი.',
      'მორჩილება (მილგრამის ექსპერიმენტი): მონაწილეთა 65% მზად იყო უცხო ადამიანისთვის სასიკვდილო ელექტროშოკი დაერტყა, თუ ამას ავტორიტეტი (მეცნიერი) ავალებდა.',
      'კოგნიტური დისონანსი (ფესტინგერი): როცა ჩვენი ქცევა და რწმენა ერთმანეთს არ ემთხვევა, დისკომფორტს ვგრძნობთ და ვცდილობთ დამოკიდებულება შევცვალოთ. ამიტომ გვიყვარს ჯგუფი უფრო მეტად, თუ მასში გაწევრიანება რთული იყო.',
      'ჯგუფური მოვლენები: სხვების თანდასწრებით მარტივ საქმეს უკეთ ვაკეთებთ; ჯგუფში უფრო ვზარმაცობთ; შეკრულ გუნდში განსხვავებულ აზრს ვმალავთ; ხოლო ანონიმურობისას კონტროლს ვკარგავთ.',
      'წინასწარგანწყობა (სტერეოტიპები, მტრობა, დისკრიმინაცია) შეიძლება შემცირდეს, თუ განსხვავებულ ჯგუფებს თანაბარი სტატუსი ექნებათ და საერთო მიზნისთვის იშრომებენ.',
      'გამვლელის ეფექტი: რაც უფრო მეტი ხალხია გარშემო, მით უფრო ნაკლებია შანსი, რომ ვინმემ გაჭირვებულს დაეხმაროს — რადგან პასუხისმგებლობა ყველაზე ნაწილდება.'
    ],
    keyPointsRu: [
      'Теория атрибуции: мы часто объясняем чужие поступки их характером, упуская из виду обстоятельства. Это называется "фундаментальной ошибкой атрибуции".',
      'Конформизм (эксперимент Аша): люди часто (в 37% случаев) соглашаются с явно неверным мнением большинства, просто чтобы не выделяться.',
      'Подчинение авторитету (эксперимент Милгрэма): 65% участников готовы были ударить человека смертельным разрядом тока только потому, что ученый в халате приказывал им продолжать.',
      'Когнитивный диссонанс (Фестингер): когда наши поступки расходятся с нашими убеждениями, мы чувствуем дискомфорт и часто меняем свои взгляды, чтобы оправдать свои действия.',
      'Групповая динамика: в толпе мы скрываем инакомыслие (групповое мышление), часто ленимся (социальная леность) и теряем самоконтроль при анонимности.',
      'Предрассудки (стереотипы и дискриминацию) можно уменьшить, если разные группы людей будут работать над общей целью на равных.',
      'Эффект свидетеля: чем больше людей вокруг, тем меньше шансов, что кто-то поможет в беде — так как ответственность "размывается".'
    ],
    keyPointsHy: [
      'Ատրիբուցիայի տեսություն. մենք նկարագրում ենք ուրիշների վարքը՝ շեշտելով նրանց բնավորությունը և անտեսելով իրավիճակը (հիմնարար ատրիբուցիոն սխալ):',
      'Կոնֆորմիզմ (Աշի փորձարկում)․ մարդիկ դեպքերի 37%-ում համաձայնում են մեծամասնության ակնհայտ սխալ կարծիքի հետ, որպեսզի չառանձնանան:',
      'Հնազանդություն (Միլգրեմի փորձարկում). մասնակիցների 65%-ը պատրաստ էր մահացու հոսանքահարել մարդուն, այն պատճառով, որ հեղինակավոր գիտնականը հրամայում էր դա:',
      'Կոգնիտիվ դիսոնանս (Ֆեստինգեր). երբ մեր գործողությունները հակասում են մեր համոզմունքներին, մենք հաճախ փոխում ենք համոզմունքները՝ արդարացնելով այն:',
      'Խմբային դինամիկա՝ մարդիկ հաճախ դառնում են ավելի ծույլ (սոցիալական ծուլություն) կամ կորցնում են ինքնակառավարումը անանունության ժամանակ:',
      'Նախապաշարմունքները կարող են նվազել, երբ տարբեր խմբեր աշխատում են ընդհանուր նպատակի ուղղությամբ՝ հավասար պայմաններում:',
      'Ականատեսի էֆեկտ. որքան շատ մարդիկ են ներկա, այնքան ավելի քիչ է հավանականությունը, որ ինչ-որ մեկը կօգնի տուժածին (պատասխանատվության ցրում):'
    ],
    funFact: 'Zimbardo\'s Stanford Prison Experiment (1971) was meant to last 2 weeks but was stopped after just 6 days because "guards" became sadistic and "prisoners" showed signs of psychological breakdown — demonstrating the power of situational forces on behavior.',
    funFactKa: 'ზიმბარდოს სტენფორდის ციხის ექსპერიმენტი (1971 წ.) 2 კვირა უნდა გაგრძელებულიყო, მაგრამ 6 დღეში შეწყვიტეს. "ზედამხედველები" სადისტები გახდნენ, ხოლო "პატიმრებს" ნერვული აშლილობა დაეწყოთ — ასე ძლიერად მოქმედებს ადამიანზე როლი და გარემო.',
    funFactRu: 'Знаменитый Стэнфордский тюремный эксперимент Зимбардо пришлось прервать всего через 6 дней. Люди, игравшие "охранников", стали садистами, а "заключенные" получили нервные срывы. Сила ролей и ситуации просто потрясает!',
    funFactHy: 'Զիմբարդոյի Սթենֆորդի բանտային փորձարկումն ընդհատվեց ընդամենը 6 օր անց, որովհետև «բանտարկյալների» մոտ նյարդային խանգարումներ սկսվեցին, իսկ «պահակները» դարձան դաժան: Իրավիճակի ու խմբային դերերի ազդեցությունը զարմանալի է:',
    realWorld: 'Understanding conformity and obedience explains everything from workplace culture ("nobody questions the boss") to historical atrocities. Modern organizations use these insights to create psychological safety — environments where people feel safe to speak up.',
    realWorldKa: 'მორჩილებისა და კონფორმიზმის გაგება გვეხმარება ავხსნათ როგორც ტოქსიკური სამუშაო გარემო ("ბოსს არავინ ეწინააღმდეგება"), ისე ისტორიული სისასტიკეები. თანამედროვე ორგანიზაციები ცდილობენ შექმნან გარემო, სადაც თანამშრომლებს ხმის ამოღების არ შეეშინდებათ.',
    realWorldRu: 'Понимание этих явлений объясняет всё: от токсичных корпоративных культур до исторических трагедий. Сегодня компании стараются создавать психологически безопасную среду, где не страшно высказать свое мнение.',
    realWorldHy: 'Հնազանդության հասկանալը բացատրում է և՛ աշխատավայրի տոքսիկ մշակույթը («ոչ ոք չի հակաճառում ղեկավարին»), և՛ պատմական դաժանությունները: Ժամանակակից կազմակերպությունները փորձում են ստեղծել այնպիսի միջավայր, որտեղ անվտանգ է տարբերվող կարծիք հայտնելը:',
    keyFigures: ['Solomon Asch', 'Stanley Milgram', 'Philip Zimbardo', 'Leon Festinger', 'Muzafer Sherif']
  }
];

let content = fs.readFileSync(FILE_PATH, 'utf-8');

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'");
}

function formatObject(obj) {
  let str = "  {\n";
  const entries = Object.entries(obj);

  for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    const isLast = (i === entries.length - 1);

    if (Array.isArray(value)) {
      str += `    ${key}: [\n      ${value.map(v => typeof v === 'string' ? `'${escapeQuotes(v)}'` : v).join(",\n      ")}\n    ]`;
    } else if (typeof value === 'string') {
      str += `    ${key}: '${escapeQuotes(value)}'`;
    } else {
      str += `    ${key}: ${value}`;
    }

    if (!isLast) str += ",";
    str += "\n";
  }
  str += "  }";
  return str;
}

let chaptersIdx = content.indexOf('export const CHAPTERS: Chapter[]');
let factsIdx = content.indexOf('export const FACTS:');

if (chaptersIdx === -1 || factsIdx === -1) {
    console.error("Could not find delimiters.");
    process.exit(1);
}

let chaptersBlock = content.substring(chaptersIdx, factsIdx);

for (const ch of chapters) {
  // Try finding block up to the next { id: N+1
  const regex = new RegExp(`(?<=\\b|\\s)\\{\\s*id:\\s*${ch.id},[\\s\\S]*?(?=\\n\\s*\\{[\\s]*id:\\s*${ch.id + 1},|\\n\\s*\\];)`);
  const match = chaptersBlock.match(regex);
  if (match) {
    const formatted = formatObject(ch) + ",";
    chaptersBlock = chaptersBlock.replace(regex, formatted);
    console.log(`Replaced chapter ${ch.id}`);
  } else {
    console.log(`Could not find chapter ${ch.id} strictly with regex, trying relaxed regex...`);
    // Fallback: match from { id: N to just prior to next { id: ...
    const relaxedRegex = new RegExp(`\\{\\s*id:\\s*${ch.id},[\\s\\S]*?\\n\\s*\\}(?=\\s*,\\s*\\n\\s*\\{[\\s]*id:|\\s*\\]|,)`);
    const relMatch = chaptersBlock.match(relaxedRegex);
    if(relMatch) {
        chaptersBlock = chaptersBlock.replace(relaxedRegex, formatObject(ch));
        console.log(`Replaced chapter ${ch.id} (relaxed)`);
    } else {
        console.error(`Failed to replace chapter ${ch.id}`);
    }
  }
}

content = content.substring(0, chaptersIdx) + chaptersBlock + content.substring(factsIdx);

fs.writeFileSync(FILE_PATH, content, 'utf-8');
console.log('Done padding Chapters 9-12 with Ka/Ru/Am!');
