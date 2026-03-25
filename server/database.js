const { createClient } = require('@libsql/client');
const bcrypt = require('bcryptjs');

function createDb() {
  if (process.env.TURSO_DATABASE_URL) {
    return createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });
  }
  const path = require('path');
  return createClient({
    url: 'file:' + path.join(__dirname, 'psylearn.db'),
  });
}

async function initDatabase() {
  const db = createDb();

  await db.executeMultiple(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      username TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      display_name TEXT NOT NULL,
      role TEXT DEFAULT 'user' CHECK(role IN ('user', 'admin')),
      email_verified INTEGER DEFAULT 0,
      subscription_status TEXT DEFAULT 'trial' CHECK(subscription_status IN ('trial', 'active', 'expired')),
      trial_start_date TEXT DEFAULT (datetime('now')),
      avatar TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      last_login TEXT
    );

    CREATE TABLE IF NOT EXISTS email_verification_codes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      code TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS password_reset_codes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      code TEXT NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS quiz_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      chapter_id INTEGER NOT NULL,
      quiz_id TEXT NOT NULL,
      score INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      book_id TEXT NOT NULL DEFAULT 'psy',
      completed_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS chapter_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      chapter_id INTEGER NOT NULL,
      status TEXT DEFAULT 'not_started' CHECK(status IN ('not_started', 'in_progress', 'completed')),
      book_id TEXT NOT NULL DEFAULT 'psy',
      updated_at TEXT DEFAULT (datetime('now')),
      UNIQUE(user_id, chapter_id, book_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS notes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      chapter_id INTEGER,
      color TEXT DEFAULT '#f0e6ff',
      book_id TEXT NOT NULL DEFAULT 'psy',
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS contact_messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS memory_game_scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      level TEXT NOT NULL,
      moves INTEGER NOT NULL,
      time_seconds INTEGER NOT NULL,
      book_id TEXT NOT NULL DEFAULT 'psy',
      completed_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS user_xp (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      amount INTEGER NOT NULL,
      source TEXT NOT NULL,
      source_id TEXT,
      book_id TEXT NOT NULL DEFAULT 'psy',
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS streaks (
      user_id INTEGER PRIMARY KEY,
      current_streak INTEGER DEFAULT 0,
      longest_streak INTEGER DEFAULT 0,
      last_activity_date TEXT,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS badges (
      id TEXT PRIMARY KEY,
      name_en TEXT NOT NULL,
      name_ka TEXT NOT NULL,
      description_en TEXT NOT NULL,
      description_ka TEXT NOT NULL,
      icon TEXT NOT NULL,
      category TEXT NOT NULL,
      condition_type TEXT NOT NULL,
      condition_value INTEGER NOT NULL
    );

    CREATE TABLE IF NOT EXISTS user_badges (
      user_id INTEGER NOT NULL,
      badge_id TEXT NOT NULL,
      earned_at TEXT DEFAULT (datetime('now')),
      PRIMARY KEY (user_id, badge_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (badge_id) REFERENCES badges(id)
    );

    CREATE TABLE IF NOT EXISTS flashcards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      chapter_id INTEGER NOT NULL,
      front_en TEXT NOT NULL,
      front_ka TEXT NOT NULL,
      back_en TEXT NOT NULL,
      back_ka TEXT NOT NULL,
      category TEXT DEFAULT 'general',
      book_id TEXT NOT NULL DEFAULT 'psy'
    );

    CREATE TABLE IF NOT EXISTS user_flashcard_progress (
      user_id INTEGER NOT NULL,
      flashcard_id INTEGER NOT NULL,
      difficulty TEXT DEFAULT 'unseen',
      review_count INTEGER DEFAULT 0,
      next_review TEXT,
      last_reviewed TEXT,
      PRIMARY KEY (user_id, flashcard_id),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (flashcard_id) REFERENCES flashcards(id) ON DELETE CASCADE
    );
  `);

  // Seed badges if empty
  const badgeCount = await db.execute('SELECT COUNT(*) as c FROM badges');
  if (badgeCount.rows[0].c === 0) {
    const badges = [
      ['first_quiz', 'Quiz Rookie', 'პირველი ვიქტორინა', 'Complete your first quiz', 'გაიარეთ პირველი ვიქტორინა', 'mdi:help-circle', 'quiz', 'quizzes_completed', 1],
      ['quiz_5', 'Quiz Enthusiast', 'ვიქტორინის მოყვარული', 'Complete 5 quizzes', 'გაიარეთ 5 ვიქტორინა', 'mdi:clipboard-check', 'quiz', 'quizzes_completed', 5],
      ['quiz_master', 'Quiz Master', 'ვიქტორინის ოსტატი', 'Score 100% on any quiz', 'მიიღეთ 100% ნებისმიერ ვიქტორინაში', 'mdi:trophy', 'quiz', 'perfect_quiz', 1],
      ['quiz_all', 'Quiz Champion', 'ვიქტორინის ჩემპიონი', 'Complete all 16 chapter quizzes', 'გაიარეთ ყველა 16 თავის ვიქტორინა', 'mdi:trophy-variant', 'quiz', 'quizzes_completed', 16],
      ['chapter_1', 'First Chapter', 'პირველი თავი', 'Complete your first chapter', 'დაასრულეთ პირველი თავი', 'mdi:flag-checkered', 'learning', 'chapters_completed', 1],
      ['chapter_8', 'Halfway There', 'ნახევარი გზა', 'Complete 8 chapters', 'დაასრულეთ 8 თავი', 'mdi:star-half-full', 'learning', 'chapters_completed', 8],
      ['chapter_16', 'Book Complete', 'წიგნი დასრულებულია', 'Complete all 16 chapters', 'დაასრულეთ ყველა 16 თავი', 'mdi:crown', 'learning', 'chapters_completed', 16],
      ['streak_3', 'Getting Warm', 'თბება', 'Maintain a 3-day study streak', 'შეინარჩუნეთ 3-დღიანი სტრიკი', 'mdi:fire', 'streak', 'streak_days', 3],
      ['streak_7', 'On Fire', 'ცეცხლზეა', 'Maintain a 7-day study streak', 'შეინარჩუნეთ 7-დღიანი სტრიკი', 'mdi:fire-circle', 'streak', 'streak_days', 7],
      ['streak_30', 'Unstoppable', 'შეუჩერებელი', 'Maintain a 30-day study streak', 'შეინარჩუნეთ 30-დღიანი სტრიკი', 'mdi:lightning-bolt', 'streak', 'streak_days', 30],
      ['xp_100', 'XP Hunter', 'XP მონადირე', 'Earn 100 XP', 'მიიღეთ 100 XP', 'mdi:star', 'milestone', 'xp_total', 100],
      ['xp_500', 'XP Warrior', 'XP მებრძოლი', 'Earn 500 XP', 'მიიღეთ 500 XP', 'mdi:star-circle', 'milestone', 'xp_total', 500],
      ['xp_1000', 'XP Champion', 'XP ჩემპიონი', 'Earn 1000 XP', 'მიიღეთ 1000 XP', 'mdi:star-shooting', 'milestone', 'xp_total', 1000],
      ['xp_5000', 'XP Legend', 'XP ლეგენდა', 'Earn 5000 XP', 'მიიღეთ 5000 XP', 'mdi:medal', 'milestone', 'xp_total', 5000],
      ['memory_easy', 'Memory Match', 'მეხსიერების მატჩი', 'Win the easy memory game', 'მოიგეთ მეხსიერების მარტივი თამაში', 'mdi:puzzle', 'game', 'memory_game_win', 1],
      ['memory_hard', 'Memory Genius', 'მეხსიერების გენიოსი', 'Win the hard memory game', 'მოიგეთ მეხსიერების რთული თამაში', 'mdi:puzzle-check', 'game', 'memory_game_hard', 1],
      ['notes_5', 'Note Taker', 'ჩამნიშვნელი', 'Write 5 study notes', 'დაწერეთ 5 ჩანაწერი', 'mdi:notebook', 'learning', 'notes_created', 5],
      ['notes_20', 'Dedicated Writer', 'ერთგული მწერალი', 'Write 20 study notes', 'დაწერეთ 20 ჩანაწერი', 'mdi:notebook-multiple', 'learning', 'notes_created', 20],
      ['flashcard_1', 'Card Flipper', 'ბარათის მბრუნავი', 'Complete your first flashcard session', 'დაასრულეთ პირველი ფლეშქარდ სესია', 'mdi:cards', 'learning', 'flashcard_sessions', 1],
      ['flashcard_10', 'Flash Master', 'ფლეშ ოსტატი', 'Complete 10 flashcard sessions', 'დაასრულეთ 10 ფლეშქარდ სესია', 'mdi:brain', 'learning', 'flashcard_sessions', 10],
    ];
    await db.batch(
      badges.map(b => ({ sql: 'INSERT INTO badges (id, name_en, name_ka, description_en, description_ka, icon, category, condition_type, condition_value) VALUES (?,?,?,?,?,?,?,?,?)', args: b })),
      'write'
    );
  }

  // Seed flashcards if empty
  const flashcardCount = await db.execute('SELECT COUNT(*) as c FROM flashcards');
  if (flashcardCount.rows[0].c === 0) {
    const cards = [
      [1, 'Psychology', 'ფსიქოლოგია', 'The scientific study of behavior and mental processes', 'ქცევისა და ფსიქიკური პროცესების მეცნიერული შესწავლა', 'definition'],
      [1, 'Structuralism', 'სტრუქტურალიზმი', 'Early school of psychology using introspection to analyze conscious experience', 'ფსიქოლოგიის ადრეული სკოლა, ინტროსპექციის გამოყენებით ცნობიერი გამოცდილების ანალიზი', 'concept'],
      [1, 'Functionalism', 'ფუნქციონალიზმი', 'School of psychology focused on how behavior helps organisms adapt to their environment', 'ფსიქოლოგიის სკოლა ქცევის ადაპტაციურ ფუნქციებზე ორიენტირებული', 'concept'],
      [1, 'Wilhelm Wundt', 'ვილჰელმ ვუნდტი', 'Founded the first psychology laboratory in 1879 in Leipzig, Germany', 'დააარსა პირველი ფსიქოლოგიის ლაბორატორია 1879 წელს, ლაიფციგში', 'concept'],
      [1, 'Biopsychosocial Model', 'ბიოფსიქოსოციალური მოდელი', 'Integrates biological, psychological, and social factors to explain behavior', 'ბიოლოგიურ, ფსიქოლოგიურ და სოციალურ ფაქტორებს აერთიანებს ქცევის ასახსნელად', 'concept'],
      [2, 'Independent Variable', 'დამოუკიდებელი ცვლადი', 'The variable that the experimenter manipulates in an experiment', 'ცვლადი, რომელსაც ექსპერიმენტატორი მართავს', 'definition'],
      [2, 'Dependent Variable', 'დამოკიდებული ცვლადი', 'The variable that is measured in an experiment', 'ცვლადი, რომელიც იზომება ექსპერიმენტში', 'definition'],
      [2, 'Correlation', 'კორელაცია', 'A statistical measure of the relationship between two variables (-1 to +1)', 'ორ ცვლადს შორის კავშირის სტატისტიკური ზომა (-1-დან +1-მდე)', 'definition'],
      [2, 'Double-Blind Study', 'ორმაგი ბრმა კვლევა', 'Neither participants nor researchers know who is in the experimental or control group', 'არც მონაწილეებმა და არც მკვლევარებმა არ იციან ვინ რომელ ჯგუფშია', 'concept'],
      [2, 'Placebo Effect', 'პლაცებოს ეფექტი', 'Improvement caused by the expectation of treatment rather than actual treatment', 'გაუმჯობესება, რომელიც გამოწვეულია მკურნალობის მოლოდინით და არა რეალური მკურნალობით', 'concept'],
      [3, 'Neuron', 'ნეირონი', 'A nerve cell that communicates through electrical and chemical signals', 'ნერვული უჯრედი, რომელიც ელექტრული და ქიმიური სიგნალებით კომუნიცირებს', 'definition'],
      [3, 'Synapse', 'სინაფსი', 'The gap between two neurons where neurotransmitters are released', 'უფსკრული ორ ნეირონს შორის, სადაც ნეიროტრანსმიტერები გამოიყოფა', 'definition'],
      [3, 'Neurotransmitter', 'ნეიროტრანსმიტერი', 'Chemical messengers that cross the synapse to transmit signals', 'ქიმიური მესინჯერები, რომლებიც სინაფსს კვეთენ სიგნალის გადასაცემად', 'definition'],
      [3, 'Cerebral Cortex', 'თავის ტვინის ქერქი', 'Outer layer of the brain responsible for higher cognitive functions', 'ტვინის გარე ფენა, პასუხისმგებელი უმაღლეს კოგნიტურ ფუნქციებზე', 'definition'],
      [3, "Broca's Area", 'ბროკას არე', 'Brain region in the left frontal lobe that controls speech production', 'ტვინის რეგიონი მარცხენა შუბლის წილში, მეტყველების წარმოებას აკონტროლებს', 'concept'],
      [4, 'Sensation', 'შეგრძნება', 'Detection of physical energy by sense organs', 'ფიზიკური ენერგიის აღმოჩენა გრძნობის ორგანოების მიერ', 'definition'],
      [4, 'Perception', 'აღქმა', 'The process of organizing and interpreting sensory information', 'სენსორული ინფორმაციის ორგანიზებისა და ინტერპრეტაციის პროცესი', 'definition'],
      [4, 'Absolute Threshold', 'აბსოლუტური ზღურბლი', 'Minimum stimulation needed to detect a stimulus 50% of the time', 'მინიმალური სტიმულაცია, რომელიც საჭიროა სტიმულის 50%-ით აღსაქმელად', 'definition'],
      [4, "Weber's Law", 'ვებერის კანონი', 'The principle that the just noticeable difference is proportional to the stimulus intensity', 'პრინციპი, რომ შესამჩნევი სხვაობა პროპორციულია სტიმულის ინტენსივობის', 'concept'],
      [5, 'Consciousness', 'ცნობიერება', 'Our awareness of ourselves and our environment', 'ჩვენი თვითშეცნობა და გარემოს აღქმა', 'definition'],
      [5, 'REM Sleep', 'REM ძილი', 'Rapid Eye Movement sleep stage associated with vivid dreaming', 'სწრაფი თვალის მოძრაობის ძილის სტადია, კავშირში ნათელ სიზმრებთან', 'definition'],
      [5, 'Circadian Rhythm', 'ცირკადული რიტმი', 'Biological clock that regulates the 24-hour sleep-wake cycle', 'ბიოლოგიური საათი, რომელიც 24-საათიან ძილ-ღვიძილის ციკლს არეგულირებს', 'concept'],
      [6, 'Classical Conditioning', 'კლასიკური განპირობება', 'Learning through association of a neutral stimulus with an unconditioned stimulus', 'სწავლა ნეიტრალური სტიმულის არაგანპირობებულ სტიმულთან ასოციაციით', 'definition'],
      [6, 'Operant Conditioning', 'ოპერანტული განპირობება', 'Learning through consequences: reinforcement increases behavior, punishment decreases it', 'სწავლა შედეგებით: განმტკიცება ზრდის ქცევას, დასჯა ამცირებს', 'definition'],
      [6, 'Reinforcement', 'განმტკიცება', 'Any consequence that strengthens/increases a behavior', 'ნებისმიერი შედეგი, რომელიც ქცევას აძლიერებს/ზრდის', 'definition'],
      [7, 'Encoding', 'კოდირება', 'The process of converting information into a form that can be stored in memory', 'ინფორმაციის მეხსიერებაში შენახვის ფორმაში გარდაქმნის პროცესი', 'definition'],
      [7, 'Long-term Memory', 'ხანგრძლივი მეხსიერება', 'Memory system with unlimited capacity that stores information for long periods', 'მეხსიერების სისტემა შეუზღუდავი ტევადობით, ინფორმაციას ხანგრძლივად ინახავს', 'definition'],
      [7, 'Forgetting Curve', 'დავიწყების მრუდი', "Ebbinghaus's finding that forgetting is rapid at first and then levels off", 'ებინგჰაუსის აღმოჩენა - დავიწყება თავიდან სწრაფია, შემდეგ სტაბილიზდება', 'concept'],
      [8, 'IQ (Intelligence Quotient)', 'IQ (ინტელექტის კოეფიციენტი)', 'A score derived from standardized tests designed to measure intelligence', 'ქულა სტანდარტიზებული ტესტებიდან ინტელექტის გასაზომად', 'definition'],
      [8, 'Confirmation Bias', 'დადასტურების ტენდენცია', 'Tendency to search for information that confirms our preexisting beliefs', 'ტენდენცია, მოვძებნოთ ინფორმაცია, რომელიც ადასტურებს ჩვენს არსებულ რწმენებს', 'concept'],
      [9, 'Schema (Piaget)', 'სქემა (პიაჟე)', 'Mental frameworks that organize and interpret information', 'ფსიქიკურ ჩარჩოები, რომლებიც ორგანიზებენ და ინტერპრეტირებენ ინფორმაციას', 'definition'],
      [9, 'Attachment', 'მიჯაჭვულობა', 'A strong emotional bond between child and caregiver (Bowlby)', 'ძლიერი ემოციური კავშირი ბავშვსა და მზრუნველს შორის (ბოულბი)', 'definition'],
      [10, "Maslow's Hierarchy", 'მასლოუს იერარქია', 'Pyramid of needs from basic (physiological) to self-actualization', 'მოთხოვნილებათა პირამიდა ბაზისურიდან (ფიზიოლოგიური) თვითრეალიზაციამდე', 'concept'],
      [10, 'Intrinsic Motivation', 'შინაგანი მოტივაცია', 'Desire to do something for its own sake, not for external reward', 'სურვილი რაღაცის გაკეთებისა თავისთავად, არა გარეგანი ჯილდოსთვის', 'definition'],
      [11, 'Big Five (OCEAN)', 'დიდი ხუთეული', 'Five major personality traits: Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', 'ხუთი ძირითადი პიროვნული თვისება: ღიაობა, კეთილსინდისიერება, ექსტრავერსია, თანხმობა, ნეიროტიზმი', 'concept'],
      [11, 'Id, Ego, Superego', 'იდ, ეგო, სუპერეგო', "Freud's three components of personality: instincts, reality, and morality", 'ფროიდის პიროვნების სამი კომპონენტი: ინსტინქტები, რეალობა და მორალი', 'concept'],
      [12, 'Conformity', 'კონფორმიზმი', 'Adjusting behavior or thinking to match a group standard (Asch)', 'ქცევის ან აზროვნების შეცვლა ჯგუფის სტანდარტთან შესაბამისობაში (აში)', 'definition'],
      [12, 'Cognitive Dissonance', 'კოგნიტური დისონანსი', 'Discomfort from holding conflicting attitudes, leading to attitude change (Festinger)', 'დისკომფორტი ურთიერთსაწინააღმდეგო დამოკიდებულებებიდან (ფესტინგერი)', 'concept'],
      [13, 'General Adaptation Syndrome', 'ზოგადი ადაპტაციის სინდრომი', "Selye's 3-stage stress response: alarm, resistance, exhaustion", 'სელიეს 3-ეტაპიანი სტრესის რეაქცია: სიგნალი, წინააღმდეგობა, გამოფიტვა', 'concept'],
      [13, 'Coping Strategies', 'გამკლავების სტრატეგიები', 'Problem-focused (tackle the issue) vs emotion-focused (manage feelings) coping', 'პრობლემაზე ორიენტირებული vs ემოციაზე ორიენტირებული გამკლავება', 'definition'],
      [14, 'DSM (Diagnostic Manual)', 'DSM (დიაგნოსტიკური სახელმძღვანელო)', 'Standard classification system for psychological disorders', 'ფსიქოლოგიური აშლილობების სტანდარტული კლასიფიკაციის სისტემა', 'definition'],
      [14, 'Schizophrenia', 'შიზოფრენია', 'Severe disorder with hallucinations, delusions, and disorganized thinking', 'მძიმე აშლილობა ჰალუცინაციებით, ბოდვებით და დეზორგანიზებული აზროვნებით', 'definition'],
      [15, 'CBT', 'კბთ (კოგნიტურ-ბიჰევიორული თერაპია)', 'Therapy combining cognitive (thinking) and behavioral techniques', 'თერაპია, რომელიც აერთიანებს კოგნიტურ (აზროვნების) და ქცევით ტექნიკებს', 'definition'],
      [15, 'Psychoanalysis', 'ფსიქოანალიზი', "Freud's therapy exploring unconscious conflicts through free association", 'ფროიდის თერაპია, ქვეცნობიერი კონფლიქტების შესწავლა თავისუფალი ასოციაციებით', 'definition'],
      [16, 'I/O Psychology', 'ი/ო ფსიქოლოგია', 'Applies psychology to workplace behavior, productivity, and well-being', 'ფსიქოლოგიას სამუშაო ადგილზე ქცევის, პროდუქტიულობისა და კეთილდღეობისთვის იყენებს', 'definition'],
      [16, 'Positive Psychology', 'პოზიტიური ფსიქოლოგია', 'Study of strengths and virtues that enable individuals to thrive (Seligman)', 'ძლიერი მხარეებისა და ღირსებების შესწავლა (სელიგმენი)', 'concept'],
    ];
    await db.batch(
      cards.map(c => ({ sql: 'INSERT INTO flashcards (chapter_id, front_en, front_ka, back_en, back_ka, category) VALUES (?,?,?,?,?,?)', args: c })),
      'write'
    );
  }

  // Create default admin user if not exists
  const adminExists = await db.execute({ sql: 'SELECT id FROM users WHERE role = ?', args: ['admin'] });
  if (adminExists.rows.length === 0) {
    const hash = bcrypt.hashSync('admin123', 10);
    await db.execute({
      sql: "INSERT INTO users (email, username, password_hash, display_name, role, subscription_status, email_verified) VALUES (?, ?, ?, ?, 'admin', 'active', 1)",
      args: ['admin@psylearn.ge', 'admin', hash, 'Administrator'],
    });
  } else {
    await db.execute({ sql: 'UPDATE users SET email_verified = 1 WHERE role = ?', args: ['admin'] });
  }

  // Create default test user for local development
  const testExists = await db.execute({ sql: "SELECT id FROM users WHERE username = ?", args: ['test'] });
  if (testExists.rows.length === 0) {
    const testHash = bcrypt.hashSync('test123', 10);
    await db.execute({
      sql: "INSERT INTO users (email, username, password_hash, display_name, role, subscription_status, email_verified) VALUES (?, ?, ?, ?, 'user', 'active', 1)",
      args: ['test@psylearn.ge', 'test', testHash, 'Test User'],
    });
  }

  // Migrations for existing databases
  try {
    await db.execute('ALTER TABLE users ADD COLUMN avatar TEXT');
  } catch (_) { /* column already exists */ }

  // Add book_id columns to existing databases
  const bookIdMigrations = [
    "ALTER TABLE quiz_progress ADD COLUMN book_id TEXT NOT NULL DEFAULT 'psy'",
    "ALTER TABLE chapter_progress ADD COLUMN book_id TEXT NOT NULL DEFAULT 'psy'",
    "ALTER TABLE notes ADD COLUMN book_id TEXT NOT NULL DEFAULT 'psy'",
    "ALTER TABLE memory_game_scores ADD COLUMN book_id TEXT NOT NULL DEFAULT 'psy'",
    "ALTER TABLE user_xp ADD COLUMN book_id TEXT NOT NULL DEFAULT 'psy'",
    "ALTER TABLE flashcards ADD COLUMN book_id TEXT NOT NULL DEFAULT 'psy'",
  ];
  for (const sql of bookIdMigrations) {
    try { await db.execute(sql); } catch (_) { /* column already exists */ }
  }

  // Recreate unique constraint on chapter_progress to include book_id
  try {
    await db.execute('CREATE UNIQUE INDEX IF NOT EXISTS idx_chapter_progress_user_chapter_book ON chapter_progress(user_id, chapter_id, book_id)');
  } catch (_) { /* index already exists */ }

  // Seed shta flashcards if not present
  const shtaFlashcardCount = await db.execute("SELECT COUNT(*) as c FROM flashcards WHERE book_id = 'shta'");
  if (shtaFlashcardCount.rows[0].c === 0) {
    const shtaCards = [
      [1, 'უხილავი ხელი', 'უხილავი ხელი', 'ადამ სმითის კონცეფცია — ბაზარი თვითრეგულირებადია ინდივიდუალური ინტერესების მეშვეობით', 'ადამ სმითის კონცეფცია — ბაზარი თვითრეგულირებადია ინდივიდუალური ინტერესების მეშვეობით', 'concept', 'shta'],
      [1, 'შრომის განაწილება', 'შრომის განაწილება', 'სპეციალიზაცია სამუშაო პროცესში, რომელიც ზრდის პროდუქტიულობას — სმითის ეკონომიკური თეორიის საფუძველი', 'სპეციალიზაცია სამუშაო პროცესში, რომელიც ზრდის პროდუქტიულობას — სმითის ეკონომიკური თეორიის საფუძველი', 'definition', 'shta'],
      [1, 'მერკანტილიზმი', 'მერკანტილიზმი', 'ეკონომიკური სისტემა, რომელიც ეფუძნებოდა ძვირფასი ლითონების დაგროვებას — სმითი აკრიტიკებდა ამ მიდგომას', 'ეკონომიკური სისტემა, რომელიც ეფუძნებოდა ძვირფასი ლითონების დაგროვებას — სმითი აკრიტიკებდა ამ მიდგომას', 'concept', 'shta'],
      [1, 'Laissez-faire', 'Laissez-faire', 'სამეურნეო თავისუფლების პრინციპი — სახელმწიფომ მინიმალურად უნდა ჩაერიოს ეკონომიკაში', 'სამეურნეო თავისუფლების პრინციპი — სახელმწიფომ მინიმალურად უნდა ჩაერიოს ეკონომიკაში', 'concept', 'shta'],
      [1, 'შრომის ღირებულების თეორია', 'შრომის ღირებულების თეორია', 'საქონლის ღირებულება განისაზღვრება მის წარმოებაზე დახარჯული შრომით', 'საქონლის ღირებულება განისაზღვრება მის წარმოებაზე დახარჯული შრომით', 'definition', 'shta'],
      [2, 'განმანათლებლობა', 'განმანათლებლობა', 'კანტის განმარტებით — ადამიანის გამოსვლა თვითგამოწვეული არასრულწლოვანებიდან, გონების თავისუფალი გამოყენება', 'კანტის განმარტებით — ადამიანის გამოსვლა თვითგამოწვეული არასრულწლოვანებიდან, გონების თავისუფალი გამოყენება', 'definition', 'shta'],
      [2, 'Sapere aude', 'Sapere aude', '"გაბედე ცოდნა!" — განმანათლებლობის დევიზი კანტის მიხედვით', '"გაბედე ცოდნა!" — განმანათლებლობის დევიზი კანტის მიხედვით', 'concept', 'shta'],
      [2, 'გონების საჯარო გამოყენება', 'გონების საჯარო გამოყენება', 'ადამიანის უფლება, საკუთარი აზრები საჯაროდ გამოხატოს — კანტის აზრით, ეს არასოდეს უნდა შეიზღუდოს', 'ადამიანის უფლება, საკუთარი აზრები საჯაროდ გამოხატოს — კანტის აზრით, ეს არასოდეს უნდა შეიზღუდოს', 'concept', 'shta'],
      [3, 'კლასთა ბრძოლა', 'კლასთა ბრძოლა', 'მარქსის თეორია — ისტორია არის ექსპლუატატორებისა და ექსპლუატირებულების ბრძოლის ისტორია', 'მარქსის თეორია — ისტორია არის ექსპლუატატორებისა და ექსპლუატირებულების ბრძოლის ისტორია', 'definition', 'shta'],
      [3, 'პროლეტარიატი', 'პროლეტარიატი', 'მუშათა კლასი, რომელიც საკუთარი შრომის ძალის გაყიდვით ცხოვრობს', 'მუშათა კლასი, რომელიც საკუთარი შრომის ძალის გაყიდვით ცხოვრობს', 'definition', 'shta'],
      [3, 'ბურჟუაზია', 'ბურჟუაზია', 'კაპიტალისტური კლასი, წარმოების საშუალებების მფლობელი', 'კაპიტალისტური კლასი, წარმოების საშუალებების მფლობელი', 'definition', 'shta'],
      [3, 'კომუნიზმი', 'კომუნიზმი', 'მარქსის იდეალი — უკლასო საზოგადოება, სადაც წარმოების საშუალებები საზოგადოებრივ საკუთრებაშია', 'მარქსის იდეალი — უკლასო საზოგადოება, სადაც წარმოების საშუალებები საზოგადოებრივ საკუთრებაშია', 'concept', 'shta'],
      [4, 'ბუნებრივი გადარჩევა', 'ბუნებრივი გადარჩევა', 'დარვინის მთავარი მექანიზმი — გარემოსთან უკეთ ადაპტირებული ორგანიზმები უფრო ხშირად გადარჩებიან', 'დარვინის მთავარი მექანიზმი — გარემოსთან უკეთ ადაპტირებული ორგანიზმები უფრო ხშირად გადარჩებიან', 'definition', 'shta'],
      [4, 'ევოლუცია', 'ევოლუცია', 'სახეობების თანდათანობითი ცვლილება თაობებს შორის მემკვიდრეობითი ვარიაციების მეშვეობით', 'სახეობების თანდათანობითი ცვლილება თაობებს შორის მემკვიდრეობითი ვარიაციების მეშვეობით', 'definition', 'shta'],
      [4, 'არსებობისთვის ბრძოლა', 'არსებობისთვის ბრძოლა', 'ორგანიზმებს შორის კონკურენცია შეზღუდული რესურსებისთვის — ევოლუციის მამოძრავებელი ძალა', 'ორგანიზმებს შორის კონკურენცია შეზღუდული რესურსებისთვის — ევოლუციის მამოძრავებელი ძალა', 'concept', 'shta'],
      [4, 'მენდელის კანონები', 'მენდელის კანონები', 'მემკვიდრეობის კანონები, რომლებიც დარვინის თეორიას გენეტიკურ საფუძველს უქმნის', 'მემკვიდრეობის კანონები, რომლებიც დარვინის თეორიას გენეტიკურ საფუძველს უქმნის', 'concept', 'shta'],
      [5, 'თავისუფლება', 'თავისუფლება', 'მილის მიხედვით — ინდივიდის უფლება, იმოქმედოს როგორც სურს, სანამ სხვებს არ აზიანებს', 'მილის მიხედვით — ინდივიდის უფლება, იმოქმედოს როგორც სურს, სანამ სხვებს არ აზიანებს', 'definition', 'shta'],
      [5, 'უტილიტარიზმი', 'უტილიტარიზმი', 'ფილოსოფიური მიმდინარეობა — მოქმედება მართებულია, თუ ის მაქსიმალურ ბედნიერებას მოაქვს მაქსიმალურ რაოდენობას', 'ფილოსოფიური მიმდინარეობა — მოქმედება მართებულია, თუ ის მაქსიმალურ ბედნიერებას მოაქვს მაქსიმალურ რაოდენობას', 'concept', 'shta'],
      [5, 'აზრის თავისუფლება', 'აზრის თავისუფლება', 'მილი ამტკიცებს, რომ ნებისმიერი აზრის ჩახშობა მავნეა საზოგადოებისთვის, თუნდაც ის მცდარი იყოს', 'მილი ამტკიცებს, რომ ნებისმიერი აზრის ჩახშობა მავნეა საზოგადოებისთვის, თუნდაც ის მცდარი იყოს', 'concept', 'shta'],
      [5, 'უმრავლესობის ტირანია', 'უმრავლესობის ტირანია', 'საფრთხე, რომ უმრავლესობა შეიძლება ჩაგრავდეს უმცირესობის აზრებსა და თავისუფლებებს', 'საფრთხე, რომ უმრავლესობა შეიძლება ჩაგრავდეს უმცირესობის აზრებსა და თავისუფლებებს', 'concept', 'shta'],
      [6, 'ლიბერალიზმი', 'ლიბერალიზმი', 'ილია ჭავჭავაძის პოლიტიკური ხედვის საფუძველი — პიროვნული თავისუფლების და განათლების მხარდაჭერა', 'ილია ჭავჭავაძის პოლიტიკური ხედვის საფუძველი — პიროვნული თავისუფლების და განათლების მხარდაჭერა', 'concept', 'shta'],
      [6, 'ეროვნული იდენტობა', 'ეროვნული იდენტობა', 'ჭავჭავაძის მთავარი თემა — ქართული კულტურისა და ენის შენარჩუნების აუცილებლობა', 'ჭავჭავაძის მთავარი თემა — ქართული კულტურისა და ენის შენარჩუნების აუცილებლობა', 'concept', 'shta'],
      [6, 'განათლება', 'განათლება', 'ილიას აზრით, ერის განვითარების უმთავრესი საშუალება და მომავლის გასაღები', 'ილიას აზრით, ერის განვითარების უმთავრესი საშუალება და მომავლის გასაღები', 'concept', 'shta'],
    ];
    await db.batch(
      shtaCards.map(c => ({ sql: 'INSERT INTO flashcards (chapter_id, front_en, front_ka, back_en, back_ka, category, book_id) VALUES (?,?,?,?,?,?,?)', args: c })),
      'write'
    );
  }

  return db;
}

module.exports = { initDatabase };
