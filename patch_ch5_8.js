const fs = require('fs');
const path = require('path');

const updatedChapters = [
  {
    id: 5,
    title: 'States of Consciousness',
    titleKa: 'ცნობიერების მდგომარეობები',
    titleRu: '__TODO__Add Russian title',
    titleHy: '__TODO__Add Armenian title',
    description: 'Sleep, dreams, hypnosis, and altered states of consciousness.',
    descriptionKa: 'ძილი, სიზმრები, ჰიპნოზი და ცნობიერების შეცვლილი მდგომარეობები.',
    descriptionRu: '__TODO__Add Russian description',
    descriptionHy: '__TODO__Add Armenian description',
    icon: 'mdi:sleep',
    keyTopics: ['Sleep Stages', 'Dreams', 'Hypnosis', 'Meditation', 'Psychoactive Substances'],
    keyTopicsKa: ['ძილის სტადიები', 'სიზმრები', 'ჰიპნოზი', 'მედიტაცია', 'ფსიქოაქტიური სუბსტანციები'],
    keyTopicsRu: ['__TODO__Add Russian key topics'],
    keyTopicsHy: ['__TODO__Add Armenian key topics'],
    summary: 'Consciousness is our awareness of ourselves and environment. This chapter explores sleep cycles, theories of dreams, hypnosis, meditation, and how substances alter conscious experience.',
    summaryKa: 'ცნობიერება არის საკუთარი თავისა და გარემოს შეცნობა. ეს თავი შეისწავლის ძილის ციკლებს, სიზმრების თეორიებს, ჰიპნოზს, მედიტაციას და იმას, თუ როგორ ცვლის ფსიქოაქტიური ნივთიერებები ცნობიერების გამოცდილებას.',
    summaryRu: '__TODO__Add Russian summary',
    summaryHy: '__TODO__Add Armenian summary',
    keyPoints: [
      'Consciousness exists on a continuum: from fully alert to deeply asleep, with many states in between (daydreaming, meditation, hypnosis).',
      'Sleep has two main types: NREM (stages 1–3, progressively deeper) and REM (rapid eye movement, where vivid dreaming occurs). A full cycle lasts about 90 minutes.',
      'Stage 3 (slow-wave/deep sleep) is critical for physical restoration and growth hormone release. REM sleep is vital for memory consolidation and emotional processing.',
      'Dream theories: Freud\'s wish fulfillment (dreams express unconscious desires), Activation-synthesis (dreams are the brain\'s interpretation of random neural firing), Information processing (dreams help sort daily memories).',
      'Sleep deprivation impairs attention, memory, immune function, and emotional regulation. Chronic sleep loss is linked to obesity, depression, and heart disease.',
      'Hypnosis is a state of heightened suggestibility and focused attention — it does NOT give the hypnotist control over you. It can help with pain management and some habits.',
      'Psychoactive substances work by mimicking, blocking, or altering neurotransmitter activity: stimulants (caffeine, cocaine), depressants (alcohol, barbiturates), opioids (morphine), hallucinogens (LSD, psilocybin).'
    ],
    keyPointsKa: [
      'ცნობიერება არსებობს კონტინიუმზე: სრული სიფხიზლიდან ღრმა ძილამდე, მათ შორის მრავალი შუალედური მდგომარეობით (ოცნება, მედიტაცია, ჰიპნოზი).',
      'ძილს აქვს ორი ძირითადი ტიპი: NREM (სტადიები 1-3, პროგრესულად უფრო ღრმა) და REM (თვალის სწრაფი მოძრაობა, სადაც ხდება მკვეთრი სიზმრების ხედვა). სრული ციკლი გრძელდება დაახლოებით 90 წუთი.',
      'სტადია 3 (ნელტალღოვანი/ღრმა ძილი) კრიტიკულია ფიზიკური აღდგენისა და ზრდის ჰორმონის გამოყოფისთვის. REM ძილი სასიცოცხლოდ მნიშვნელოვანია მეხსიერების კონსოლიდაციისა და ემოციური გადამუშავებისთვის.',
      'სიზმრების თეორიები: ფროიდის სურვილების ასრულება (სიზმრები გამოხატავს არაცნობიერ სურვილებს), აქტივაცია-სინთეზი (სიზმრები არის ტვინის მიერ შემთხვევითი ნერვული აქტივობის ინტერპრეტაცია), ინფორმაციის გადამუშავება (სიზმრები გვეხმარება ყოველდღიური მოგონებების დახარისხებაში).',
      'უძილობა აუარესებს ყურადღებას, მეხსიერებას, იმუნურ ფუნქციას და ემოციურ რეგულაციას. ქრონიკული ძილის უკმარისობა დაკავშირებულია სიმსუქნესთან, დეპრესიასთან და გულის დაავადებებთან.',
      'ჰიპნოზი არის გაზრდილი შთაგონებადობისა და ფოკუსირებული ყურადღების მდგომარეობა - ის არ აძლევს ჰიპნოტიზიორს თქვენზე კონტროლს. ის შეიძლება დაგეხმაროთ ტკივილის მართვაში და ზოგიერთ მავნე ჩვევასთან ბრძოლაში.',
      'ფსიქოაქტიური ნივთიერებები მოქმედებენ ნეიროტრანსმიტერების აქტივობის მიბაძვით, ბლოკირებით ან შეცვლით: სტიმულატორები (კოფეინი, კოკაინი), დეპრესანტები (ალკოჰოლი, ბარბიტურატები), ოპიოიდები (მორფინი), ჰალუცინოგენები (LSD, ფსილოციბინი).'
    ],
    keyPointsRu: ['__TODO__Add Russian key points'],
    keyPointsHy: ['__TODO__Add Armenian key points'],
    funFact: 'During REM sleep, your brain paralyzes your voluntary muscles (atonia) so you don\'t physically act out your dreams. When this system fails, people develop REM Sleep Behavior Disorder and may punch, kick, or jump out of bed while dreaming.',
    funFactKa: 'REM ძილის დროს ტვინი ახდენს ნებაყოფლობითი კუნთების პარალიზებას (ატონია), რათა ფიზიკურად არ განახორციელოთ თქვენი სიზმრები. როდესაც ეს სისტემა მწყობრიდან გამოდის, ადამიანებს უვითარდებათ REM ძილის ქცევითი აშლილობა და შეიძლება დაარტყან, წიხლი დაარტყან ან გადმოხტნენ საწოლიდან სიზმრის ნახვისას.',
    funFactRu: '__TODO__Add Russian fun fact',
    funFactHy: '__TODO__Add Armenian fun fact',
    realWorld: 'Understanding sleep stages has transformed shift work policies. Many hospitals and airlines now mandate minimum rest periods because research proved that sleep-deprived professionals make as many errors as intoxicated ones.',
    realWorldKa: 'ძილის სტადიების გაგებამ გარდაქმნა ცვლაში მუშაობის პოლიტიკა. ბევრი საავადმყოფო და ავიაკომპანია ახლა მოითხოვს მინიმალურ დასვენების პერიოდებს, რადგან კვლევამ დაამტკიცა, რომ გამოუძინებელი პროფესიონალები იმდენივე შეცდომას უშვებენ, რამდენსაც ნასვამ მდგომარეობაში მყოფნი.',
    realWorldRu: '__TODO__Add Russian real world application',
    realWorldHy: '__TODO__Add Armenian real world application',
    keyFigures: ['Sigmund Freud', 'J. Allan Hobson', 'Ernest Hilgard', 'William Dement']
  },
  {
    id: 6,
    title: 'Learning',
    titleKa: 'სწავლა',
    titleRu: '__TODO__Add Russian title',
    titleHy: '__TODO__Add Armenian title',
    description: 'Classical conditioning, operant conditioning, and observational learning.',
    descriptionKa: 'კლასიკური განპირობება, ოპერანტული განპირობება და დაკვირვებითი სწავლა.',
    descriptionRu: '__TODO__Add Russian description',
    descriptionHy: '__TODO__Add Armenian description',
    icon: 'mdi:book-open-variant',
    keyTopics: ['Classical Conditioning', 'Operant Conditioning', 'Reinforcement & Punishment', 'Observational Learning'],
    keyTopicsKa: ['კლასიკური განპირობება', 'ოპერანტული განპირობება', 'განმტკიცება და დასჯა', 'დაკვირვებითი სწავლა'],
    keyTopicsRu: ['__TODO__Add Russian key topics'],
    keyTopicsHy: ['__TODO__Add Armenian key topics'],
    summary: 'Learning is a relatively permanent change in behavior due to experience. Pavlov\'s classical conditioning, Skinner\'s operant conditioning, and Bandura\'s social learning theory are covered.',
    summaryKa: 'სწავლა არის ქცევის შედარებით მუდმივი ცვლილება გამოცდილების შედეგად. განხილულია პავლოვს კლასიკური განპირობება, სკინერის ოპერანტული განპირობება და ბანდურას სოციალური სწავლების თეორია.',
    summaryRu: '__TODO__Add Russian summary',
    summaryHy: '__TODO__Add Armenian summary',
    keyPoints: [
      'Classical conditioning (Pavlov): Learning by association. A neutral stimulus (bell) paired with an unconditioned stimulus (food) eventually produces a conditioned response (salivation to bell alone). Key terms: UCS, UCR, CS, CR.',
      'Key phenomena in classical conditioning: acquisition, extinction (CR fades when CS presented alone), spontaneous recovery, generalization (responding to similar stimuli), and discrimination (distinguishing between stimuli).',
      'Operant conditioning (Skinner): Learning through consequences. Behaviors followed by reinforcement increase; those followed by punishment decrease.',
      'Reinforcement schedules: Fixed-ratio (every N responses), Variable-ratio (unpredictable, like slot machines — most resistant to extinction), Fixed-interval (first response after N time), Variable-interval (unpredictable time).',
      'Positive = adding something; Negative = removing something. Positive reinforcement (reward), Negative reinforcement (removing discomfort), Positive punishment (adding pain), Negative punishment (taking away privileges).',
      'Bandura\'s social learning theory: We learn by observing others (models). The Bobo doll experiment showed children imitate aggressive behavior they witness. Requires attention, retention, reproduction, and motivation.',
      'Learned helplessness (Seligman): When organisms learn they cannot control outcomes, they stop trying — even when escape becomes possible. Linked to depression in humans.'
    ],
    keyPointsKa: [
      'კლასიკური განპირობება (პავლოვი): ასოციაციური სწავლა. ნეიტრალური სტიმული (ზარი), რომელიც დაწყვილებულია განუპირობებელ სტიმულთან (საკვებთან), საბოლოოდ იწვევს განპირობებულ რეაქციას (ნერწყვის გამოყოფა მხოლოდ ზარზე). საკვანძო ტერმინები: UCS, UCR, CS, CR.',
      'საკვანძო ფენომენები კლასიკურ განპირობებაში: შეძენა, ჩაქრობა (CR ქრება როდესაც CS მარტოა წარმოდგენილი), სპონტანური აღდგენა, გენერალიზაცია (მსგავს სტიმულებზე რეაგირება) და დისკრიმინაცია (სტიმულებს შორის განსხვავების პოვნა).',
      'ოპერანტული განპირობება (სკინერი): შედეგებით სწავლა. განმტკიცებას მოყოლილი ქცევები იზრდება; დასჯას მოყოლილი კი მცირდება.',
      'განმტკიცების განრიგები: ფიქსირებული თანაფარდობა (ყოველი N რეაქცია), ცვლადი თანაფარდობა (არაპროგნოზირებადი, როგორც სათამაშო აპარატები — ყველაზე მდგრადი ჩაქრობის მიმართ), ფიქსირებული ინტერვალი (პირველი რეაქცია N დროის შემდეგ), ცვლადი ინტერვალი (არაპროგნოზირებადი დრო).',
      'პოზიტიური = რაღაცის დამატება; ნეგატიური = რაღაცის ამოღება. პოზიტიური განმტკიცება (ჯილდო), ნეგატიური განმტკიცება (დისკომფორტის მოხსნა), პოზიტიური დასჯა (ტკივილის დამატება), ნეგატიური დასჯა (პრივილეგიების წართმევა).',
      'ბანდურას სოციალური სწავლების თეორია: ჩვენ ვსწავლობთ სხვებზე დაკვირვებით (მოდელები). ბობოს თოჯინას ექსპერიმენტმა აჩვენა, რომ ბავშვები ბაძავენ აგრესიულ ქცევას, რომელსაც ხედავენ. მოითხოვს ყურადღებას, შეკავებას, რეპროდუქციას და მოტივაციას.',
      'ნასწავლი უმწეობა (სელიგმანი): როდესაც ორგანიზმები სწავლობენ, რომ არ შეუძლიათ შედეგების გაკონტროლება, ისინი წყვეტენ მცდელობას — მაშინაც კი როცა თავის დაღწევა შესაძლებელი ხდება. დაკავშირებულია ადამიანებში დეპრესიასთან.'
    ],
    keyPointsRu: ['__TODO__Add Russian key points'],
    keyPointsHy: ['__TODO__Add Armenian key points'],
    funFact: 'Slot machines use a variable-ratio reinforcement schedule — the same principle Skinner discovered makes behavior hardest to extinguish. This is why gambling can be so addictive: you never know when the next reward will come.',
    funFactKa: 'სათამაშო აპარატები იყენებენ ცვლადი თანაფარდობის განმტკიცების განრიგს — იგივე პრინციპს, რომელიც სკინერის აღმოჩენით ხდის ქცევას ყველაზე რთულად ჩასაქრობად. სწორედ ამიტომ შეიძლება იყოს აზარტული თამაშები ასეთი დამოკიდებულების გამომწვევი: არასოდეს იცი როდის მოვა შემდეგი ჯილდო.',
    funFactRu: '__TODO__Add Russian fun fact',
    funFactHy: '__TODO__Add Armenian fun fact',
    realWorld: 'Dog trainers use operant conditioning (clicker training = positive reinforcement). Advertisers pair products with pleasant images (classical conditioning). Social media "likes" use variable-ratio reinforcement to keep you scrolling.',
    realWorldKa: 'ძაღლების მწვრთნელები იყენებენ ოპერანტულ განპირობებას (კლიკერით წვრთნა = პოზიტიური განმტკიცება). რეკლამის განმთავსებლები აწყვილებენ პროდუქტებს სასიამოვნო სურათებთან (კლასიკური განპირობება). სოციალური მედიის "ლაიქები" იყენებს ცვლადი თანაფარდობის განმტკიცებას, რათა განაგრძოთ სქროლვა.',
    realWorldRu: '__TODO__Add Russian real world application',
    realWorldHy: '__TODO__Add Armenian real world application',
    keyFigures: ['Ivan Pavlov', 'B.F. Skinner', 'Albert Bandura', 'John Watson', 'Edward Thorndike']
  },
  {
    id: 7,
    title: 'Memory',
    titleKa: 'მეხსიერება',
    titleRu: '__TODO__Add Russian title',
    titleHy: '__TODO__Add Armenian title',
    description: 'How we encode, store, and retrieve information.',
    descriptionKa: 'როგორ ვაკოდირებთ, ვინახავთ და ვიხსენებთ ინფორმაციას.',
    descriptionRu: '__TODO__Add Russian description',
    descriptionHy: '__TODO__Add Armenian description',
    icon: 'mdi:database-outline',
    keyTopics: ['Encoding', 'Storage', 'Retrieval', 'Forgetting', 'Memory Improvement'],
    keyTopicsKa: ['კოდირება', 'შენახვა', 'აღდგენა', 'დავიწყება', 'მეხსიერების გაუმჯობესება'],
    keyTopicsRu: ['__TODO__Add Russian key topics'],
    keyTopicsHy: ['__TODO__Add Armenian key topics'],
    summary: 'Memory involves encoding, storage, and retrieval. The multi-store model describes sensory, short-term, and long-term memory. Also covers forgetting curves, false memories, and improvement strategies.',
    summaryKa: 'მეხსიერება მოიცავს კოდირებას, შენახვას და აღდგენას. მულტი-საცავის მოდელი აღწერს სენსორულ, მოკლევადიან და გრძელვადიან მეხსიერებას. ასევე ფარავს დავიწყების მრუდს, ცრუ მოგონებებს და გაუმჯობესების სტრატეგიებს.',
    summaryRu: '__TODO__Add Russian summary',
    summaryHy: '__TODO__Add Armenian summary',
    keyPoints: [
      'Three stages of memory: Encoding (converting information), Storage (maintaining it), Retrieval (accessing it later).',
      'Atkinson-Shiffrin model: Sensory memory (brief, <1 sec for visual) → Short-term/Working memory (20–30 sec, capacity ~7±2 items) → Long-term memory (unlimited capacity and duration).',
      'Encoding depth matters: Shallow processing (appearance, sound) produces weaker memories than deep/semantic processing (meaning). Elaborative rehearsal beats rote repetition.',
      'Types of long-term memory: Explicit/Declarative (episodic = personal events, semantic = general knowledge) and Implicit/Nondeclarative (procedural = skills, classical conditioning).',
      'Ebbinghaus\'s forgetting curve: we forget rapidly at first (50% within an hour), then the rate slows. Spaced repetition dramatically improves retention.',
      'Retrieval cues, context-dependent memory (same place), and state-dependent memory (same mood) all improve recall. The testing effect: retrieving information strengthens memory more than re-reading.',
      'Memory is reconstructive, not a perfect recording. Elizabeth Loftus showed that misleading questions can create false memories. Eyewitness testimony is surprisingly unreliable.'
    ],
    keyPointsKa: [
      'მეხსიერების სამი ეტაპი: კოდირება (ინფორმაციის გარდაქმნა), შენახვა (მისი შენარჩუნება), აღდგენა (მასზე მოგვიანებით წვდომა).',
      'ატკინსონ-შიფრინის მოდელი: სენსორული მეხსიერება (ხანმოკლე, <1 წმ ვიზუალურისთვის) → მოკლევადიანი/მუშა მეხსიერება (20-30 წმ, ტევადობა ~7±2 ელემენტი) → გრძელვადიანი მეხსიერება (შეუზღუდავი ტევადობა და ხანგრძლივობა).',
      'კოდირების სიღრმეს აქვს მნიშვნელობა: ზედაპირული გადამუშავება (გარეგნობა, ხმა) ქმნის უფრო სუსტ მოგონებებს, ვიდრე ღრმა/სემანტიკური გადამუშავება (მნიშვნელობა). გამუშავებითი გამეორება ჯობია მექანიკურ დაზეპირებას.',
      'გრძელვადიანი მეხსიერების ტიპები: ექსპლიციტური/დეკლარატიული (ეპიზოდური = პირადი მოვლენები, სემანტიკური = ზოგადი ცოდნა) და იმპლიციტური/არადეკლარატიული (პროცედურული = უნარები, კლასიკური განპირობება).',
      'ებინგჰაუსის დავიწყების მრუდი: თავიდან ჩვენ ვივიწყებთ სწრაფად (50% ერთ საათში), შემდეგ ტემპი ნელდება. განაწილებული გამეორება დრამატულად აუმჯობესებს შენარჩუნებას.',
      'აღდგენის მინიშნებები, კონტექსტ-დამოკიდებული მეხსიერება (იგივე ადგილი) და მდგომარეობაზე დამოკიდებული მეხსიერება (იგივე განწყობა) აუმჯობესებს გახსენებას. ტესტირების ეფექტი: ინფორმაციის აღდგენა უფრო მეტად აძლიერებს მეხსიერებას, ვიდრე ხელახლა წაკითხვა.',
      'მეხსიერება არის რეკონსტრუქციული და არა იდეალური ჩანაწერი. ელიზაბეტ ლოფტუსმა აჩვენა, რომ შეცდომაში შემყვან კითხვებს შეუძლია ცრუ მოგონებების შექმნა. თვითმხილველთა ჩვენება გასაოცრად არასანდოა.'
    ],
    keyPointsRu: ['__TODO__Add Russian key points'],
    keyPointsHy: ['__TODO__Add Armenian key points'],
    funFact: 'The "Google effect" (digital amnesia) is a real phenomenon: people are less likely to remember information they know they can easily look up online. Your brain outsources memory storage to your phone!',
    funFactKa: '"გუგლის ეფექტი" (ციფრული ამნეზია) რეალური ფენომენია: ადამიანებს ნაკლებად ამახსოვრდებათ ის ინფორმაცია, რომლის მოძიებაც ადვილად შეუძლიათ ონლაინ. თქვენი ტვინი მეხსიერების შენახვას თქვენს ტელეფონს აბარებს!',
    funFactRu: '__TODO__Add Russian fun fact',
    funFactHy: '__TODO__Add Armenian fun fact',
    realWorld: 'Spaced repetition (reviewing at increasing intervals) is the single most effective study technique. Apps like Anki use it. Cramming the night before works for short-term recall but fades within days.',
    realWorldKa: 'განაწილებული გამეორება (გადამეორება მზარდი ინტერვალებით) არის ყველაზე ეფექტური სწავლის ტექნიკა. აპლიკაციები როგორებიცაა Anki, იყენებენ მას. წინა ღამით დაზეპირება მუშაობს მოკლევადიანი გახსენებისთვის, მაგრამ ქრება რამდენიმე დღეში.',
    realWorldRu: '__TODO__Add Russian real world application',
    realWorldHy: '__TODO__Add Armenian real world application',
    keyFigures: ['Hermann Ebbinghaus', 'Elizabeth Loftus', 'George Miller', 'Endel Tulving', 'Alan Baddeley']
  },
  {
    id: 8,
    title: 'Cognition and Intelligence',
    titleKa: 'შემეცნება და ინტელექტი',
    titleRu: '__TODO__Add Russian title',
    titleHy: '__TODO__Add Armenian title',
    description: 'Thinking, problem-solving, language, and measuring intelligence.',
    descriptionKa: 'აზროვნება, პრობლემების გადაჭრა, ენა და ინტელექტის გაზომვა.',
    descriptionRu: '__TODO__Add Russian description',
    descriptionHy: '__TODO__Add Armenian description',
    icon: 'mdi:lightbulb-outline',
    keyTopics: ['Problem Solving', 'Decision Making', 'Language', 'Intelligence Testing', 'Creativity'],
    keyTopicsKa: ['პრობლემების გადაჭრა', 'გადაწყვეტილების მიღება', 'ენა', 'ინტელექტის ტესტირება', 'შემოქმედებითობა'],
    keyTopicsRu: ['__TODO__Add Russian key topics'],
    keyTopicsHy: ['__TODO__Add Armenian key topics'],
    summary: 'Cognition encompasses thinking, reasoning, problem-solving, and language. Examines heuristics and biases, theories of intelligence, IQ testing, and the nature vs. nurture debate.',
    summaryKa: 'კოგნიცია მოიცავს აზროვნებას, მსჯელობას, პრობლემების გადაჭრას და ენას. იკვლევს ევრისტიკას და მიკერძოებებს, ინტელექტის თეორიებს, IQ ტესტირებას და ბუნება vs აღზრდის დებატებს.',
    summaryRu: '__TODO__Add Russian summary',
    summaryHy: '__TODO__Add Armenian summary',
    keyPoints: [
      'Cognition includes all mental activities: perceiving, thinking, remembering, and communicating.',
      'Problem-solving strategies: algorithms (step-by-step, guaranteed), heuristics (mental shortcuts, fast but error-prone), and insight (sudden "aha!" moments).',
      'Cognitive biases: Confirmation bias (seeking info that confirms beliefs), Availability heuristic (judging frequency by ease of recall), Anchoring (over-relying on first information), Framing effect (decisions change based on how options are presented).',
      'Language development: Babbling (6 mo) → One-word (12 mo) → Two-word (24 mo) → Full sentences (3–4 yrs). Chomsky argued humans have an innate Language Acquisition Device (LAD).',
      'The Sapir-Whorf hypothesis suggests that language shapes thought. The strong version (language determines thought) is mostly rejected; the weak version (language influences thought) has support.',
      'Intelligence theories: Spearman\'s g (general intelligence), Gardner\'s multiple intelligences (8 types), Sternberg\'s triarchic theory (analytical, creative, practical).',
      'IQ tests (Stanford-Binet, WAIS) have mean = 100, SD = 15. IQ is 50–80% heritable, but environment matters enormously — the Flynn effect shows IQ scores have risen ~3 points per decade worldwide.'
    ],
    keyPointsKa: [
      'კოგნიცია მოიცავს ყველა გონებრივ აქტივობას: აღქმას, აზროვნებას, დამახსოვრებას და კომუნიკაციას.',
      'პრობლემების გადაჭრის სტრატეგიები: ალგორითმები (ნაბიჯ-ნაბიჯ, გარანტირებული), ევრისტიკა (გონებრივი მალსახმობები, სწრაფი მაგრამ შეცდომებისკენ მიდრეკილი) და ინსაიტი (უეცარი "აჰა!" მომენტები).',
      'კოგნიტური მიკერძოებები: დადასტურების მიკერძოება (რწმენის დამადასტურებელი ინფორმაციის ძიება), ხელმისაწვდომობის ევრისტიკა (სიხშირის განსჯა გახსენების სიმარტივით), ღუზის ეფექტი (პირველ ინფორმაციაზე ზედმეტად დაყრდნობა), ჩარჩოს ეფექტი (გადაწყვეტილებები იცვლება ვარიანტების წარმოდგენის მიხედვით).',
      'ენის განვითარება: ღუღუნი (6 თვე) → ერთი სიტყვა (12 თვე) → ორი სიტყვა (24 თვე) → სრული წინადადებები (3-4 წელი). ჩომსკი ამტკიცებდა, რომ ადამიანებს აქვთ თანდაყოლილი ენის ათვისების მექანიზმი (LAD).',
      'სეპირ-უორფის ჰიპოთეზა ვარაუდობს, რომ ენა აყალიბებს აზრს. ძლიერი ვერსია (ენა განსაზღვრავს აზრს) ძირითადად უარყოფილია; მცირე ვერსიას (ენა გავლენას ახდენს აზრზე) აქვს მხარდაჭერა.',
      'ინტელექტის თეორიები: სპირმენის g (ზოგადი ინტელექტი), გარდნერის მრავალმხრივი ინტელექტი (8 ტიპი), სტერნბერგის ტრიარქიული თეორია (ანალიტიკური, კრეატიული, პრაქტიკული).',
      'IQ ტესტებს (Stanford-Binet, WAIS) აქვთ საშუალო = 100, SD = 15. IQ არის 50-80% მემკვიდრეობითი, მაგრამ გარემოს აქვს უდიდესი მნიშვნელობა — ფლინის ეფექტი აჩვენებს, რომ IQ ქულები მთელ მსოფლიოში ყოველ ათწლეულში ~3 ქულით იზრდება.'
    ],
    keyPointsRu: ['__TODO__Add Russian key points'],
    keyPointsHy: ['__TODO__Add Armenian key points'],
    funFact: 'The "Dunning-Kruger effect" shows that people with the least competence in a skill tend to overestimate their ability the most, while experts tend to underestimate theirs. The less you know, the more confident you feel!',
    funFactKa: '"დანინგ-კრიუგერის ეფექტი" აჩვენებს, რომ ადამიანები, რომლებსაც ნაკლები კომპეტენცია აქვთ ამა თუ იმ უნარში, ყველაზე მეტად აჭარბებენ თავიანთი შესაძლებლობების შეფასებას, მაშინ როცა ექსპერტები სათანადოდ არ აფასებენ მას. რაც უფრო ნაკლები იცით, მით უფრო თავდაჯერებულად გრძნობთ თავს!',
    funFactRu: '__TODO__Add Russian fun fact',
    funFactHy: '__TODO__Add Armenian fun fact',
    realWorld: 'Cognitive biases affect everyone: doctors, judges, investors. Daniel Kahneman won a Nobel Prize showing how systematic biases in thinking lead to predictable errors in decision-making — his work reshaped economics and public policy.',
    realWorldKa: 'კოგნიტური მიკერძოებები ყველაზე მოქმედებს: ექიმებზე, მოსამართლეებზე, ინვესტორებზე. დანიელ კანემანმა მიიღო ნობელის პრემია, რევოლუციურად აჩვენა თუ როგორ იწვევს სისტემატური გადახრები აზროვნებაში პროგნოზირებად შეცდომებს გადაწყვეტილების მიღებისას - მისმა ნაშრომმა შეცვალა ეკონომიკა და საჯარო პოლიტიკა.',
    realWorldRu: '__TODO__Add Russian real world application',
    realWorldHy: '__TODO__Add Armenian real world application',
    keyFigures: ['Alfred Binet', 'Charles Spearman', 'Howard Gardner', 'Robert Sternberg', 'Noam Chomsky', 'Daniel Kahneman']
  }
];

function customStringify(obj, indent = '') {
  let result = [];
  for (const chapter of obj) {
    let str = '  {\n';
    for (const [key, value] of Object.entries(chapter)) {
      if (typeof value === 'string') {
        if (value.startsWith('__TODO__')) {
            const comment = value.replace('__TODO__', '/* TODO: ') + ' */';
            str += `    ${key}: '', ${comment}\n`;
        } else {
            str += `    ${key}: '${value.replace(/'/g, "\\'")}',\n`;
        }
      } else if (typeof value === 'number') {
        str += `    ${key}: ${value},\n`;
      } else if (Array.isArray(value)) {
        if (value.length === 1 && typeof value[0] === 'string' && value[0].startsWith('__TODO__')) {
            const comment = value[0].replace('__TODO__', '/* TODO: ') + ' */';
            str += `    ${key}: [], ${comment}\n`;
        } else {
            str += `    ${key}: [\n      ${value.map(v => `'${typeof v === 'string' ? v.replace(/'/g, "\\'") : v}'`).join(',\n      ')}\n    ],\n`;
        }
      }
    }
    // remove last comma
    str = str.replace(/,\n$/, '\n');
    str += '  }';
    result.push(str);
  }
  return result.join(',\n');
}

const FILE_PATH = path.join(__dirname, 'src', 'app', 'data', 'book-data.ts');
let content = fs.readFileSync(FILE_PATH, 'utf8');

let startIndex = content.indexOf('  {\\n    id: 5,');
if (startIndex === -1) startIndex = content.indexOf('  {\\r\\n    id: 5,');
if (startIndex === -1) startIndex = content.indexOf('  {\n    id: 5,');

let foundEnd = content.indexOf('  {\\n    id: 9,', startIndex);
if (foundEnd === -1) foundEnd = content.indexOf('  {\\r\\n    id: 9,', startIndex);
if (foundEnd === -1) foundEnd = content.indexOf('  {\n    id: 9,', startIndex);

if (startIndex !== -1 && foundEnd !== -1) {
    const stringified = customStringify(updatedChapters) + ',\\n';
    const newContent = content.substring(0, startIndex) + stringified.replace(/\\\\n/g, '\\n') + content.substring(foundEnd);
    fs.writeFileSync(FILE_PATH, newContent, 'utf8');
    console.log('Success! Replaced chapters 5-8.');
} else {
    console.log('Failed to find markers\\nstartIndex: ' + startIndex + '\\nfoundEnd: ' + foundEnd);
}
