
import { Psychologist } from './book-data';

export const PSYCHOLOGIST_TRANSLATIONS: Record<string, any> = {
  en: {
    'Sigmund Freud': {
      contribution: 'Father of Psychoanalysis',
      details: 'Developed psychoanalytic theory, proposing that unconscious conflicts drive behavior. Introduced the id, ego, superego, defense mechanisms, dream analysis, and psychosexual stages.'
    },
    'B.F. Skinner': {
      contribution: 'Pioneer of Operant Conditioning',
      details: 'Developed operant conditioning theory. Invented the Skinner Box and introduced schedules of reinforcement.'
    },
    'Carl Rogers': {
      contribution: 'Founder of Client-Centered Therapy',
      details: 'Pioneered person-centered therapy. Emphasized unconditional positive regard, empathy, and congruence.'
    },
    'Jean Piaget': {
      contribution: 'Theory of Cognitive Development',
      details: 'Proposed four stages of cognitive development: sensorimotor, preoperational, concrete operational, and formal operational.'
    },
    'Ivan Pavlov': {
      contribution: 'Discovery of Classical Conditioning',
      details: 'While studying digestion in dogs, discovered classical conditioning—learning through association.'
    },
    'Abraham Maslow': {
      contribution: 'Hierarchy of Needs',
      details: 'Created the hierarchy of needs—from basic physiological needs to self-actualization. Co-founded humanistic psychology.'
    },
    'Philip Zimbardo': {
      contribution: 'Stanford Prison Experiment',
      details: 'Conducted the Stanford Prison Experiment (1971), demonstrating how social roles and situational forces influence behavior.'
    },
    'Albert Bandura': {
      contribution: 'Social Learning Theory & Self-Efficacy',
      details: 'Demonstrated observational learning through Bobo doll experiment. Developed self-efficacy concept.'
    },
    'Elizabeth Loftus': {
      contribution: 'False Memory Research',
      details: 'Showed memories can be altered through suggestion and misinformation.'
    },
    'Stanley Milgram': {
      contribution: 'Obedience Experiments',
      details: 'Showed ordinary people will follow authority figures even when asked to harm others.'
    },
    'Erik Erikson': {
      contribution: 'Psychosocial Development Theory',
      details: 'Proposed eight stages of psychosocial development spanning the entire lifespan.'
    },
    'Carl Jung': {
      contribution: 'Collective Unconscious & Archetypes',
      details: 'Proposed the collective unconscious, archetypes, introversion/extraversion, and individuation.'
    },
    'Lev Vygotsky': {
      contribution: 'Zone of Proximal Development',
      details: 'Proposed learning is fundamentally social. His ZPD and scaffolding concepts transformed education.'
    },
    'Mary Ainsworth': {
      contribution: 'Attachment Theory Research',
      details: 'Developed the Strange Situation experiment, identifying secure, avoidant, and anxious attachment styles.'
    },
    'Daniel Kahneman': {
      contribution: 'Behavioral Economics & Thinking Biases',
      details: 'Nobel Prize winner. Demonstrated systematic biases. Wrote "Thinking, Fast and Slow."'
    },
    'Martin Seligman': {
      contribution: 'Learned Helplessness & Positive Psychology',
      details: 'Discovered learned helplessness. Founded positive psychology. Developed PERMA model of flourishing.'
    }
  },
  ka: {
    'Sigmund Freud': {
      name: 'ზიგმუნდ ფროიდი',
      contribution: 'ფსიქოანალიზის მამა',
      details: 'შეიმუშავა ფსიქოანალიტიკური თეორია, რომელიც ამტკიცებს, რომ არაცნობიერი კონფლიქტები მართავს ქცევას. შემოიღო იდი, ეგო, სუპერეგო, დაცვის მექანიზმები, სიზმრების ანალიზი და ფსიქოსექსუალური ეტაპები.'
    },
    'B.F. Skinner': {
      name: 'ბ.ფ. სკინერი',
      contribution: 'ოპერანტული განპირობების პიონერი',
      details: 'შეიმუშავა ოპერანტული განპირობების თეორია. გამოიგონა სკინერის ყუთი და შემოიღო განმტკიცების განრიგი.'
    },
    'Carl Rogers': {
      name: 'კარლ როჯერსი',
      contribution: 'კლიენტზე ორიენტირებული თერაპიის დამფუძნებელი',
      details: 'დააარსა პიროვნებაზე ორიენტირებული თერაპია. ხაზს უსვამდა უპირობო პოზიტიურ დამოკიდებულებას, ემპათიას და კონგრუენტულობას.'
    },
    'Jean Piaget': {
      name: 'ჟან პიაჟე',
      contribution: 'კოგნიტური განვითარების თეორია',
      details: 'შემოგვთავაზა კოგნიტური განვითარების ოთხი ეტაპი: სენსომოტორული, პრეოპერაციული, კონკრეტული ოპერაციული და ფორმალური ოპერაციული.'
    },
    'Ivan Pavlov': {
      name: 'ივანე პავლოვი',
      contribution: 'კლასიკური განპირობების აღმოჩენა',
      details: 'ძაღლებში საჭმლის მონელების შესწავლისას აღმოაჩინა კლასიკური განპირობება — სწავლა ასოციაციის გზით.'
    },
    'Abraham Maslow': {
      name: 'აბრაამ მასლოუ',
      contribution: 'მოთხოვნილებათა იერარქია',
      details: 'შექმნა მოთხოვნილებათა იერარქია — ძირითადი ფიზიოლოგიური საჭიროებებიდან თვითაქტუალიზაციამდე. ჰუმანისტური ფსიქოლოგიის თანადამფუძნებელი.'
    },
    'Philip Zimbardo': {
      name: 'ფილიპ ციმბარდო',
      contribution: 'სტენფორდის ციხის ექსპერიმენტი',
      details: 'ჩაატარა სტენფორდის ციხის ექსპერიმენტი (1971), რომელმაც აჩვენა, თუ როგორ მოქმედებს სოციალური როლები და სიტუაციური ძალები ქცევაზე.'
    },
    'Albert Bandura': {
      name: 'ალბერტ ბანდურა',
      contribution: 'სოციალური სწავლის თეორია და თვითეფექტიანობა',
      details: 'ბობოს თოჯინის ექსპერიმენტით აჩვენა დაკვირვებით სწავლა. შეიმუშავა თვითეფექტიანობის კონცეფცია.'
    },
    'Elizabeth Loftus': {
      name: 'ელიზაბეტ ლოფტუსი',
      contribution: 'ცრუ მეხსიერების კვლევა',
      details: 'აჩვენა, რომ მოგონებები შეიძლება შეიცვალოს შთაგონებისა და არასწორი ინფორმაციის საშუალებით.'
    },
    'Stanley Milgram': {
      name: 'სტენლი მილგრამი',
      contribution: 'მორჩილების ექსპერიმენტები',
      details: 'აჩვენა, რომ ჩვეულებრივი ადამიანები მიჰყვებიან ავტორიტეტულ ფიგურებს მაშინაც კი, როდესაც მათ სთხოვენ სხვებისთვის ზიანის მიყენებას.'
    },
    'Erik Erikson': {
      name: 'ერიკ ერიქსონი',
      contribution: 'ფსიქოსოციალური განვითარების თეორია',
      details: 'შემოგვთავაზა ფსიქოსოციალური განვითარების რვა ეტაპი, რომელიც მოიცავს მთელ სიცოცხლეს.'
    },
    'Carl Jung': {
      name: 'კარლ იუნგი',
      contribution: 'კოლექტიური არაცნობიერი და არქეტიპები',
      details: 'შემოგვთავაზა კოლექტიური არაცნობიერი, არქეტიპები, ინტროვერსია/ექსტრავერსია და ინდივიდუაცია.'
    },
    'Lev Vygotsky': {
      name: 'ლევ ვიგოტსკი',
      contribution: 'უახლოესი განვითარების ზონა',
      details: 'ამტკიცებდა, რომ სწავლა ფუნდამენტურად სოციალურია. მისმა ZPD და სკაფოლდინგის კონცეფციებმა შეცვალა განათლება.'
    },
    'Mary Ainsworth': {
      name: 'მერი ეინსვორტი',
      contribution: 'მიჯაჭვულობის თეორიის კვლევა',
      details: 'შეიმუშავა "უცნობი სიტუაციის" ექსპერიმენტი, გამოავლინა უსაფრთხო, განრიდებითი და შფოთვითი მიჯაჭვულობის სტილები.'
    },
    'Daniel Kahneman': {
      name: 'დანიელ კანემანი',
      contribution: 'ბიჰევიორალური ეკონომიკა და აზროვნების მიკერძოებები',
      details: 'ნობელის პრემიის ლაურეატი. აჩვენა სისტემური მიკერძოებები. ავტორი წიგნისა "აზროვნება, სწრაფი და ნელი."'
    },
    'Martin Seligman': {
      name: 'მარტინ სელიგმანი',
      contribution: 'დასწავლილი უმწეობა და პოზიტიური ფსიქოლოგია',
      details: 'აღმოაჩინა დასწავლილი უმწეობა. დააარსა პოზიტიური ფსიქოლოგია. შეიმუშავა კეთილდღეობის PERMA მოდელი.'
    }
  },
  ru: {
    'Sigmund Freud': {
      name: 'Зигмунд Фрейд',
      contribution: 'Отец психоанализа',
      details: 'Разработал психоаналитическую теорию, постулирующую, что бессознательные конфликты определяют поведение. Ввел понятия ид, эго, суперэго, защитные механизмы, анализ сновидений и психосексуальные стадии.'
    },
    'B.F. Skinner': {
      name: 'Б.Ф. Скиннер',
      contribution: 'Пионер оперантного обусловливания',
      details: 'Разработал теорию оперантного обусловливания. Изобрел камеру оперантного обусловливания (ящик Скиннера) и ввел режимы подкрепления.'
    },
    'Carl Rogers': {
      name: 'Карл Роджерс',
      contribution: 'Основатель клиент-центрированной терапии',
      details: 'Пионер личностно-центрированной терапии. Подчеркивал важность безусловного позитивного принятия, эмпатии и конгруэнтности.'
    },
    'Jean Piaget': {
      name: 'Жан Пиаже',
      contribution: 'Теория когнитивного развития',
      details: 'Предложил четыре стадии когнитивного развития: сенсомоторную, дооперациональную, стадию конкретных операций и стадию формальных операций.'
    },
    'Ivan Pavlov': {
      name: 'Иван Павлов',
      contribution: 'Открытие классического обусловливания',
      details: 'Изучая пищеварение у собак, обнаружил классическое обусловливание — обучение через ассоциации.'
    },
    'Abraham Maslow': {
      name: 'Абрахам Маслоу',
      contribution: 'Иерархия потребностей',
      details: 'Создал иерархию потребностей — от базовых физиологических нужд до самоактуализации. Сооснователь гуманистической психологии.'
    },
    'Philip Zimbardo': {
      name: 'Филип Зимбардо',
      contribution: 'Стэнфордский тюремный эксперимент',
      details: 'Провел Стэнфордский тюремный эксперимент (1971), продемонстрировавший влияние социальных ролей и ситуационных сил на поведение.'
    },
    'Albert Bandura': {
      name: 'Альберт Бандура',
      contribution: 'Социально-когнитивная теория и самоэффективность',
      details: 'Продемонстрировал обучение через наблюдение с помощью эксперимента с куклой Бобо. Разработал концепцию самоэффективности.'
    },
    'Elizabeth Loftus': {
      name: 'Элизабет Лофтус',
      contribution: 'Исследование ложных воспоминаний',
      details: 'Показала, что воспоминания могут быть изменены под влиянием внушения и дезинформации.'
    },
    'Stanley Milgram': {
      name: 'Стэнли Милгрэм',
      contribution: 'Эксперименты с подчинением',
      details: 'Показал, что обычные люди будут следовать указаниям авторитетов, даже если их просят причинить вред другим.'
    },
    'Erik Erikson': {
      name: 'Эрик Эриксон',
      contribution: 'Теория психосоциального развития',
      details: 'Предложил восемь стадий психосоциального развития, охватывающих всю жизнь человека.'
    },
    'Carl Jung': {
      name: 'Карл Юнг',
      contribution: 'Коллективное бессознательное и архетипы',
      details: 'Предложил концепцию коллективного бессознательного, архетипов, интроверсии/экстраверсии и индивидуации.'
    },
    'Lev Vygotsky': {
      name: 'Лев Выготский',
      contribution: 'Зона ближайшего развития',
      details: 'Утверждал, что обучение носит принципиально социальный характер. Его концепции ЗБР и строительных лесов (скаффолдинга) изменили образование.'
    },
    'Mary Ainsworth': {
      name: 'Мэри Эйнсворт',
      contribution: 'Исследование теории привязанности',
      details: 'Разработала эксперимент "Незнакомая ситуация", выделив надежный, избегающий и тревожный типы привязанности.'
    },
    'Daniel Kahneman': {
      name: 'Даниэль Канеман',
      contribution: 'Поведенческая экономика и когнитивные искажения',
      details: 'Лауреат Нобелевской премии. Продемонстрировал систематические искажения мышления. Автор книги "Думай медленно... решай быстро".'
    },
    'Martin Seligman': {
      name: 'Мартин Селигман',
      contribution: 'Выученная беспомощность и позитивная психология',
      details: 'Открыл феномен выученной беспомощности. Основал позитивную психологию. Разработал модель благополучия PERMA.'
    }
  },
  hy: {
    'Sigmund Freud': {
      name: 'Զիգմունդ Ֆրեյդ',
      contribution: 'Հոգեվերլուծության հայրը',
      details: 'Մշակել է հոգեվերլուծական տեսությունը՝ պնդելով, որ անգիտակցական կոնֆլիկտները կառավարում են վարքը: Ներմուծել է իդ, էգո, սուպերէգո, պաշտպանական մեխանիզմներ, երազների վերլուծություն և հոգեսեռական փուլեր:'
    },
    'B.F. Skinner': {
      name: 'Բ. Ֆ. Սկիներ',
      contribution: 'Օպերանտ պայմանավորվածության ռահվիրա',
      details: 'Մշակել է օպերանտ պայմանավորվածության տեսությունը: Ստեղծել է Սկիների արկղը և ներմուծել ամրապնդման ռեժիմներ:'
    },
    'Carl Rogers': {
      name: 'Կարլ Ռոջերս',
      contribution: 'Կլիենտակենտրոն թերապիայի հիմնադիր',
      details: 'Անձնակենտրոն թերապիայի հիմնադրն է: Շեշտել է անվերապահ դրական վերաբերմունքի, էմպաթիայի և կոնգրուենտության կարևորությունը:'
    },
    'Jean Piaget': {
      name: 'Ժան Պիաժե',
      contribution: 'Կոգնիտիվ զարգացման տեսություն',
      details: 'Առաջարկել է կոգնիտիվ զարգացման չորս փուլ՝ սենսոմոտոր, նախագործառնական, կոնկրետ գործառնական և ձևական գործառնական:'
    },
    'Ivan Pavlov': {
      name: 'Իվան Պավլով',
      contribution: 'Դասական պայմանավորվածության հայտնագործում',
      details: 'Շների մարսողությունն ուսումնասիրելիս հայտնաբերել է դասական պայմանավորվածությունը՝ ուսուցում ասոցիացիաների միջոցով:'
    },
    'Abraham Maslow': {
      name: 'Աբրահամ Մասլոու',
      contribution: 'Կարիքների հիերարխիա',
      details: 'Ստեղծել է կարիքների հիերարխիան՝ հիմնական ֆիզիոլոգիական կարիքներից մինչև ինքնաիրացում: Մարդասիրական հոգեբանության համահիմնադիրն է:'
    },
    'Philip Zimbardo': {
      name: 'Ֆիլիպ Զիմբարդո',
      contribution: 'Ստենֆորդի բանտային փորձ',
      details: 'Անցկացրել է Ստենֆորդի բանտային փորձը (1971), որը ցույց է տվել, թե ինչպես են սոցիալական դերերն ու իրավիճակային ուժերն ազդում վարքի վրա:'
    },
    'Albert Bandura': {
      name: 'Ալբերտ Բանդուրա',
      contribution: 'Սոցիալական ուսուցման տեսություն և ինքնաարդյունավետություն',
      details: 'Բոբո տիկնիկի փորձի միջոցով ցույց է տվել դիտողական ուսուցումը: Մշակել է ինքնաարդյունավետության հայեցակարգը:'
    },
    'Elizabeth Loftus': {
      name: 'Էլիզաբեթ Լոֆտուս',
      contribution: 'Կեղծ հիշողության հետազոտություն',
      details: 'Ցույց է տվել, որ հիշողությունները կարող են փոփոխվել ներշնչանքի և սխալ տեղեկատվության միջոցով:'
    },
    'Stanley Milgram': {
      name: 'Ստենլի Միլգրամ',
      contribution: 'Հնազանդության փորձեր',
      details: 'Ցույց է տվել, որ սովորական մարդիկ կհետևեն հեղինակավոր անձանց հրահանգներին, նույնիսկ եթե նրանցից պահանջվի վնաս հասցնել այլոց:'
    },
    'Erik Erikson': {
      name: 'Էրիկ Էրիկսոն',
      contribution: 'Հոգեսոցիալական զարգացման տեսություն',
      details: 'Առաջարկել է հոգեսոցիալական զարգացման ութ փուլ՝ ընդգրկելով մարդու ողջ կյանքը:'
    },
    'Carl Jung': {
      name: 'Կառլ Յունգ',
      contribution: 'Կոլեկտիվ անգիտակցական և արխետիպեր',
      details: 'Առաջարկել է կոլեկտիվ անգիտակցականի, արխետիպերի, ինտրովերսիայի/էքստրավերսիայի և ինդիվիդուացիայի հայեցակարգերը:'
    },
    'Lev Vygotsky': {
      name: 'Լև Վիգոտսկի',
      contribution: 'Մերձավոր զարգացման գոտի',
      details: 'Պնդում էր, որ ուսուցումը հիմնարար սոցիալական բնույթ ունի: Նրա ZPD և սկաֆոլդինգի հայեցակարգերը փոխել են կրթությունը:'
    },
    'Mary Ainsworth': {
      name: 'Մերի Էյնսվորթ',
      contribution: 'Կապվածության տեսության հետազոտություն',
      details: 'Մշակել է «Անծանոթ իրավիճակ» փորձը՝ բացահայտելով ապահով, խուսափողական և տագնապային կապվածության ոճերը:'
    },
    'Daniel Kahneman': {
      name: 'Դանիել Կանեման',
      contribution: 'Վարքագծային տնտեսագիտություն և մտածողության կողմնակալություններ',
      details: 'Նոբելյան մրցանակի դափնեկիր: Ցույց է տվել համակարգված կողմնակալությունները: «Մտածիր դանդաղ... որոշիր արագ» գրքի հեղինակն է:'
    },
    'Martin Seligman': {
      name: 'Մարտին Սելիգման',
      contribution: 'Սովորած անօգնականություն և պոզիտիվ հոգեբանություն',
      details: 'Բացահայտել է սովորած անօգնականության ֆենոմենը: Հիմնադրել է պոզիտիվ հոგեբանությունը: Մշակել է PERMA բարեկեցության մոդելը:'
    }
  }
};

export function getPsychologistText(psychologist: Psychologist, lang: string): { name: string, contribution: string, details: string } {
  const trans = PSYCHOLOGIST_TRANSLATIONS[lang]?.[psychologist.name] || PSYCHOLOGIST_TRANSLATIONS['en'][psychologist.name];
  return {
    name: trans?.name || psychologist.name,
    contribution: trans?.contribution || psychologist.contribution,
    details: trans?.details || psychologist.details
  };
}
