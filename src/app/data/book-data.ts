/**
 * Static data for Psychology and Life by Philip Zimbardo.
 */

export interface Chapter {
  id: number;
  title: string;
  titleKa: string;
  description: string;
  icon: string;
  keyTopics: string[];
  summary: string;
  keyPoints: string[];
  funFact: string;
  realWorld: string;
  keyFigures?: string[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  chapterId: number;
  title: string;
  questions: QuizQuestion[];
}

export interface Psychologist {
  name: string;
  years: string;
  photo: string;
  nationality: string;
  contribution: string;
  details: string;
  field: string;
}

export interface Fact {
  id: number;
  text: string;
  textKa: string;
  source: string;
  category: string;
  icon: string;
}

export interface Story {
  id: number;
  title: string;
  titleKa: string;
  chapterId: number;
  content: string;
  contentKa: string;
  moral: string;
  moralKa: string;
  icon: string;
}

export interface MemoryCard {
  id: number;
  term: string;
  definition: string;
  category: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: 1, title: 'What is Psychology?', titleKa: '\u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D8\u10D0 \u10E0\u10D0 \u10D0\u10E0\u10D8\u10E1?',
    description: 'Introduction to the science of psychology, its history, and modern approaches.',
    icon: 'mdi:head-cog-outline',
    keyTopics: ['Definition of Psychology', 'History of Psychology', 'Modern Perspectives', 'Research Methods'],
    summary: 'Psychology is the scientific study of behavior and mental processes. It explores how we think, feel, act, and interact. From Wundt\'s first laboratory to modern neuroscience, this chapter traces the evolution of psychology and introduces major theoretical perspectives: biological, psychodynamic, behavioral, cognitive, humanistic, and sociocultural.',
    keyPoints: [
      'Psychology literally means "study of the soul" (Greek: psyche + logos) but today is defined as the scientific study of behavior and mental processes.',
      'Wilhelm Wundt opened the first psychology lab in Leipzig, Germany (1879), marking psychology\'s birth as a science.',
      'Structuralism (Titchener) broke consciousness into basic elements using introspection; Functionalism (James) asked what purpose mental processes serve.',
      'The six major perspectives: Biological (brain & genes), Psychodynamic (unconscious forces), Behavioral (observable actions), Cognitive (thinking & reasoning), Humanistic (free will & growth), Sociocultural (social & cultural influences).',
      'The biopsychosocial model integrates biological, psychological, and social factors to understand behavior holistically.',
      'Psychology\'s four goals: Describe, Explain, Predict, and Influence behavior.'
    ],
    funFact: 'Wundt\'s first lab experiment measured the time it took people to press a button after hearing a sound — about 0.1 seconds. This "reaction time" research is still used in psychology and neuroscience today.',
    realWorld: 'When a marketing team designs an ad that triggers an emotional response, they\'re using principles from cognitive and behavioral psychology. Understanding how people perceive and process information is at the heart of advertising, UX design, and even political campaigns.',
    keyFigures: ['Wilhelm Wundt', 'William James', 'Sigmund Freud', 'John Watson', 'Carl Rogers']
  },
  {
    id: 2, title: 'Research Methods in Psychology', titleKa: '\u10D9\u10D5\u10DA\u10D4\u10D5\u10D8\u10E1 \u10DB\u10D4\u10D7\u10DD\u10D3\u10D4\u10D1\u10D8',
    description: 'How psychologists conduct research: experiments, observations, surveys, and ethics.',
    icon: 'mdi:flask-outline',
    keyTopics: ['Scientific Method', 'Experimental Design', 'Correlation vs. Causation', 'Ethics in Research'],
    summary: 'This chapter covers the tools psychologists use to study behavior scientifically. Learn about variables, control groups, double-blind studies, and the critical distinction between correlation and causation.',
    keyPoints: [
      'The scientific method: Observation \u2192 Hypothesis \u2192 Experiment \u2192 Data Analysis \u2192 Conclusion \u2192 Replication.',
      'Independent variable (IV) is what the researcher manipulates; Dependent variable (DV) is what is measured.',
      'Random assignment eliminates pre-existing differences between groups, making experiments internally valid.',
      'Double-blind studies prevent both experimenter and participant biases from affecting results.',
      'Correlation does NOT equal causation. Two variables may move together without one causing the other (third-variable problem).',
      'Ethical guidelines: informed consent, right to withdraw, debriefing, confidentiality, and minimal harm. The APA code was established after controversial studies like Milgram\'s obedience experiment.',
      'Common methods: experiments (cause-effect), surveys (self-report), naturalistic observation (real-world), case studies (in-depth single cases), and longitudinal studies (over time).'
    ],
    funFact: 'The placebo effect is so powerful that in some studies, sugar pills reduced pain by up to 30%. This is why control groups are essential in psychological research.',
    realWorld: 'Before any new therapy or medication is approved, it must go through rigorous double-blind, placebo-controlled trials. The same research methods from this chapter protect patients from ineffective or harmful treatments.',
    keyFigures: ['Francis Bacon', 'Karl Popper', 'Stanley Milgram']
  },
  {
    id: 3, title: 'Biological Bases of Behavior', titleKa: '\u10E5\u10EA\u10D4\u10D5\u10D8\u10E1 \u10D1\u10D8\u10DD\u10DA\u10DD\u10D2\u10D8\u10E3\u10E0\u10D8 \u10E1\u10D0\u10E4\u10E3\u10EB\u10D5\u10DA\u10D4\u10D1\u10D8',
    description: 'The brain, nervous system, neurons, and how biology shapes our behavior.',
    icon: 'mdi:dna',
    keyTopics: ['Neurons & Synapses', 'Brain Structure', 'Nervous System', 'Neurotransmitters', 'Genetics & Behavior'],
    summary: 'Every thought, emotion, and action has a biological basis. This chapter explores how neurons communicate, the structure of the brain, and how genetics influence behavior.',
    keyPoints: [
      'Neurons are the basic units of the nervous system. They communicate via electrochemical signals: electrical impulses travel down the axon, then release neurotransmitters across the synapse.',
      'Key neurotransmitters: Dopamine (reward, pleasure), Serotonin (mood, sleep), GABA (inhibition, calm), Acetylcholine (memory, muscle movement), Norepinephrine (alertness), Endorphins (pain relief).',
      'The brain has three major regions: Hindbrain (medulla, pons, cerebellum \u2014 basic survival), Midbrain (sensory relay), Forebrain (cerebral cortex \u2014 higher thinking).',
      'The cerebral cortex has four lobes: Frontal (decision-making, personality), Parietal (touch, spatial), Temporal (hearing, language), Occipital (vision).',
      'The limbic system includes the amygdala (fear, emotion), hippocampus (memory formation), and hypothalamus (hunger, thirst, temperature).',
      'Neuroplasticity: the brain can reorganize itself by forming new neural connections throughout life, especially after injury or learning.',
      'The split-brain experiments by Sperry showed that the left hemisphere specializes in language and logic, while the right hemisphere handles spatial tasks and creativity.'
    ],
    funFact: 'Your brain uses about 20% of your body\'s energy despite being only 2% of your body weight. It generates about 20 watts of electrical power \u2014 enough to power a dim light bulb.',
    realWorld: 'Understanding neurotransmitters revolutionized psychiatry. SSRIs (like Prozac) treat depression by increasing serotonin levels in the brain. Parkinson\'s disease treatments target dopamine pathways.',
    keyFigures: ['Roger Sperry', 'Paul Broca', 'Carl Wernicke', 'Santiago Ram\u00f3n y Cajal']
  },
  {
    id: 4, title: 'Sensation and Perception', titleKa: '\u10E8\u10D4\u10D2\u10E0\u10EB\u10DC\u10D4\u10D1\u10D0 \u10D3\u10D0 \u10D0\u10E6\u10E5\u10DB\u10D0',
    description: 'How our senses detect stimuli and our brain interprets them.',
    icon: 'mdi:eye-outline',
    keyTopics: ['Vision', 'Hearing', 'Other Senses', 'Perceptual Organization', 'Illusions'],
    summary: 'Sensation is the process by which our sensory receptors detect stimuli; perception is how the brain interprets this. Covers visual processing, Gestalt principles, and perceptual illusions.',
    keyPoints: [
      'Sensation = detecting physical energy (light, sound, pressure); Perception = organizing and interpreting that sensory information into something meaningful.',
      'Absolute threshold: the minimum stimulation needed to detect a stimulus 50% of the time. Difference threshold (JND): the smallest detectable difference between two stimuli.',
      'Vision: Light enters through the cornea \u2192 pupil \u2192 lens \u2192 retina. Rods detect dim light; cones detect color. Information travels via the optic nerve to the visual cortex.',
      'Gestalt principles of perception: proximity, similarity, closure, continuity, and figure-ground. The brain fills in gaps to create coherent images.',
      'Color vision: Trichromatic theory (3 types of cones for red, green, blue) explains color mixing; Opponent-process theory (red-green, blue-yellow, black-white pairs) explains afterimages.',
      'Hearing: Sound waves \u2192 eardrum \u2192 ossicles \u2192 cochlea \u2192 hair cells \u2192 auditory nerve. Pitch is encoded by place theory (high frequencies) and frequency theory (low frequencies).',
      'Sensory adaptation: when constant stimulation leads to reduced sensitivity (e.g., you stop noticing a smell after a while).'
    ],
    funFact: 'Your eyes can distinguish about 10 million different colors, yet dogs see the world mainly in blues and yellows. The mantis shrimp, however, has 16 types of color receptors compared to our 3!',
    realWorld: 'Optical illusions are not just fun tricks \u2014 they reveal how the brain constructs reality. UX designers use Gestalt principles daily: grouping related buttons, using whitespace, and creating visual hierarchies on websites.',
    keyFigures: ['Gustav Fechner', 'Ernst Weber', 'Max Wertheimer', 'Hermann von Helmholtz']
  },
  {
    id: 5, title: 'States of Consciousness', titleKa: '\u10EA\u10DC\u10DD\u10D1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10DB\u10D3\u10D2\u10DD\u10DB\u10D0\u10E0\u10D4\u10DD\u10D1\u10D4\u10D1\u10D8',
    description: 'Sleep, dreams, hypnosis, and altered states of consciousness.',
    icon: 'mdi:sleep',
    keyTopics: ['Sleep Stages', 'Dreams', 'Hypnosis', 'Meditation', 'Psychoactive Substances'],
    summary: 'Consciousness is our awareness of ourselves and environment. This chapter explores sleep cycles, theories of dreams, hypnosis, meditation, and how substances alter conscious experience.',
    keyPoints: [
      'Consciousness exists on a continuum: from fully alert to deeply asleep, with many states in between (daydreaming, meditation, hypnosis).',
      'Sleep has two main types: NREM (stages 1\u20133, progressively deeper) and REM (rapid eye movement, where vivid dreaming occurs). A full cycle lasts about 90 minutes.',
      'Stage 3 (slow-wave/deep sleep) is critical for physical restoration and growth hormone release. REM sleep is vital for memory consolidation and emotional processing.',
      'Dream theories: Freud\'s wish fulfillment (dreams express unconscious desires), Activation-synthesis (dreams are the brain\'s interpretation of random neural firing), Information processing (dreams help sort daily memories).',
      'Sleep deprivation impairs attention, memory, immune function, and emotional regulation. Chronic sleep loss is linked to obesity, depression, and heart disease.',
      'Hypnosis is a state of heightened suggestibility and focused attention \u2014 it does NOT give the hypnotist control over you. It can help with pain management and some habits.',
      'Psychoactive substances work by mimicking, blocking, or altering neurotransmitter activity: stimulants (caffeine, cocaine), depressants (alcohol, barbiturates), opioids (morphine), hallucinogens (LSD, psilocybin).'
    ],
    funFact: 'During REM sleep, your brain paralyzes your voluntary muscles (atonia) so you don\'t physically act out your dreams. When this system fails, people develop REM Sleep Behavior Disorder and may punch, kick, or jump out of bed while dreaming.',
    realWorld: 'Understanding sleep stages has transformed shift work policies. Many hospitals and airlines now mandate minimum rest periods because research proved that sleep-deprived professionals make as many errors as intoxicated ones.',
    keyFigures: ['Sigmund Freud', 'J. Allan Hobson', 'Ernest Hilgard', 'William Dement']
  },
  {
    id: 6, title: 'Learning', titleKa: '\u10E1\u10EC\u10D0\u10D5\u10DA\u10D0',
    description: 'Classical conditioning, operant conditioning, and observational learning.',
    icon: 'mdi:book-open-variant',
    keyTopics: ['Classical Conditioning', 'Operant Conditioning', 'Reinforcement & Punishment', 'Observational Learning'],
    summary: 'Learning is a relatively permanent change in behavior due to experience. Pavlov\'s classical conditioning, Skinner\'s operant conditioning, and Bandura\'s social learning theory are covered.',
    keyPoints: [
      'Classical conditioning (Pavlov): Learning by association. A neutral stimulus (bell) paired with an unconditioned stimulus (food) eventually produces a conditioned response (salivation to bell alone). Key terms: UCS, UCR, CS, CR.',
      'Key phenomena in classical conditioning: acquisition, extinction (CR fades when CS presented alone), spontaneous recovery, generalization (responding to similar stimuli), and discrimination (distinguishing between stimuli).',
      'Operant conditioning (Skinner): Learning through consequences. Behaviors followed by reinforcement increase; those followed by punishment decrease.',
      'Reinforcement schedules: Fixed-ratio (every N responses), Variable-ratio (unpredictable, like slot machines \u2014 most resistant to extinction), Fixed-interval (first response after N time), Variable-interval (unpredictable time).',
      'Positive = adding something; Negative = removing something. Positive reinforcement (reward), Negative reinforcement (removing discomfort), Positive punishment (adding pain), Negative punishment (taking away privileges).',
      'Bandura\'s social learning theory: We learn by observing others (models). The Bobo doll experiment showed children imitate aggressive behavior they witness. Requires attention, retention, reproduction, and motivation.',
      'Learned helplessness (Seligman): When organisms learn they cannot control outcomes, they stop trying \u2014 even when escape becomes possible. Linked to depression in humans.'
    ],
    funFact: 'Slot machines use a variable-ratio reinforcement schedule \u2014 the same principle Skinner discovered makes behavior hardest to extinguish. This is why gambling can be so addictive: you never know when the next reward will come.',
    realWorld: 'Dog trainers use operant conditioning (clicker training = positive reinforcement). Advertisers pair products with pleasant images (classical conditioning). Social media "likes" use variable-ratio reinforcement to keep you scrolling.',
    keyFigures: ['Ivan Pavlov', 'B.F. Skinner', 'Albert Bandura', 'John Watson', 'Edward Thorndike']
  },
  {
    id: 7, title: 'Memory', titleKa: '\u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0',
    description: 'How we encode, store, and retrieve information.',
    icon: 'mdi:database-outline',
    keyTopics: ['Encoding', 'Storage', 'Retrieval', 'Forgetting', 'Memory Improvement'],
    summary: 'Memory involves encoding, storage, and retrieval. The multi-store model describes sensory, short-term, and long-term memory. Also covers forgetting curves, false memories, and improvement strategies.',
    keyPoints: [
      'Three stages of memory: Encoding (converting information), Storage (maintaining it), Retrieval (accessing it later).',
      'Atkinson-Shiffrin model: Sensory memory (brief, <1 sec for visual) \u2192 Short-term/Working memory (20\u201330 sec, capacity ~7\u00b12 items) \u2192 Long-term memory (unlimited capacity and duration).',
      'Encoding depth matters: Shallow processing (appearance, sound) produces weaker memories than deep/semantic processing (meaning). Elaborative rehearsal beats rote repetition.',
      'Types of long-term memory: Explicit/Declarative (episodic = personal events, semantic = general knowledge) and Implicit/Nondeclarative (procedural = skills, classical conditioning).',
      'Ebbinghaus\'s forgetting curve: we forget rapidly at first (50% within an hour), then the rate slows. Spaced repetition dramatically improves retention.',
      'Retrieval cues, context-dependent memory (same place), and state-dependent memory (same mood) all improve recall. The testing effect: retrieving information strengthens memory more than re-reading.',
      'Memory is reconstructive, not a perfect recording. Elizabeth Loftus showed that misleading questions can create false memories. Eyewitness testimony is surprisingly unreliable.'
    ],
    funFact: 'The "Google effect" (digital amnesia) is a real phenomenon: people are less likely to remember information they know they can easily look up online. Your brain outsources memory storage to your phone!',
    realWorld: 'Spaced repetition (reviewing at increasing intervals) is the single most effective study technique. Apps like Anki use it. Cramming the night before works for short-term recall but fades within days.',
    keyFigures: ['Hermann Ebbinghaus', 'Elizabeth Loftus', 'George Miller', 'Endel Tulving', 'Alan Baddeley']
  },
  {
    id: 8, title: 'Cognition and Intelligence', titleKa: '\u10E8\u10D4\u10DB\u10D4\u10EA\u10DC\u10D4\u10D1\u10D0 \u10D3\u10D0 \u10D8\u10DC\u10E2\u10D4\u10DA\u10D4\u10E5\u10E2\u10D8',
    description: 'Thinking, problem-solving, language, and measuring intelligence.',
    icon: 'mdi:lightbulb-outline',
    keyTopics: ['Problem Solving', 'Decision Making', 'Language', 'Intelligence Testing', 'Creativity'],
    summary: 'Cognition encompasses thinking, reasoning, problem-solving, and language. Examines heuristics and biases, theories of intelligence, IQ testing, and the nature vs. nurture debate.',
    keyPoints: [
      'Cognition includes all mental activities: perceiving, thinking, remembering, and communicating.',
      'Problem-solving strategies: algorithms (step-by-step, guaranteed), heuristics (mental shortcuts, fast but error-prone), and insight (sudden "aha!" moments).',
      'Cognitive biases: Confirmation bias (seeking info that confirms beliefs), Availability heuristic (judging frequency by ease of recall), Anchoring (over-relying on first information), Framing effect (decisions change based on how options are presented).',
      'Language development: Babbling (6 mo) \u2192 One-word (12 mo) \u2192 Two-word (24 mo) \u2192 Full sentences (3\u20134 yrs). Chomsky argued humans have an innate Language Acquisition Device (LAD).',
      'The Sapir-Whorf hypothesis suggests that language shapes thought. The strong version (language determines thought) is mostly rejected; the weak version (language influences thought) has support.',
      'Intelligence theories: Spearman\'s g (general intelligence), Gardner\'s multiple intelligences (8 types), Sternberg\'s triarchic theory (analytical, creative, practical).',
      'IQ tests (Stanford-Binet, WAIS) have mean = 100, SD = 15. IQ is 50\u201380% heritable, but environment matters enormously \u2014 the Flynn effect shows IQ scores have risen ~3 points per decade worldwide.'
    ],
    funFact: 'The "Dunning-Kruger effect" shows that people with the least competence in a skill tend to overestimate their ability the most, while experts tend to underestimate theirs. The less you know, the more confident you feel!',
    realWorld: 'Cognitive biases affect everyone: doctors, judges, investors. Daniel Kahneman won a Nobel Prize showing how systematic biases in thinking lead to predictable errors in decision-making \u2014 his work reshaped economics and public policy.',
    keyFigures: ['Alfred Binet', 'Charles Spearman', 'Howard Gardner', 'Robert Sternberg', 'Noam Chomsky', 'Daniel Kahneman']
  },
  {
    id: 9, title: 'Human Development', titleKa: '\u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8\u10E1 \u10D2\u10D0\u10DC\u10D5\u10D8\u10D7\u10D0\u10E0\u10D4\u10D1\u10D0',
    description: 'Physical, cognitive, and social development across the lifespan.',
    icon: 'mdi:baby-face-outline',
    keyTopics: ['Piaget\'s Stages', 'Attachment', 'Erikson\'s Stages', 'Moral Development', 'Aging'],
    summary: 'Development is a lifelong process. Piaget described cognitive stages. Erikson outlined psychosocial crises. Bowlby and Ainsworth studied attachment. Traces changes from conception through aging.',
    keyPoints: [
      'Nature vs. nurture is a false dichotomy: genes and environment interact continuously. Epigenetics shows that experiences can turn genes on or off.',
      'Piaget\'s 4 cognitive stages: Sensorimotor (0\u20132, object permanence), Preoperational (2\u20137, symbolic thinking but egocentric), Concrete operational (7\u201311, logical thinking), Formal operational (12+, abstract reasoning).',
      'Attachment theory (Bowlby/Ainsworth): Secure attachment (caregiver responsive) leads to healthy social development. Insecure types: avoidant, anxious-ambivalent, disorganized. Measured by the Strange Situation test.',
      'Erikson\'s 8 psychosocial stages span the entire lifespan: Trust vs. Mistrust (infancy), Autonomy vs. Shame (toddler), Initiative vs. Guilt (preschool), Industry vs. Inferiority (school age), Identity vs. Role Confusion (adolescence), Intimacy vs. Isolation (young adult), Generativity vs. Stagnation (middle adult), Integrity vs. Despair (late adult).',
      'Kohlberg\'s moral development: Preconventional (self-interest), Conventional (social norms), Postconventional (universal ethical principles). Most adults operate at the conventional level.',
      'Adolescence brings identity exploration (Erikson\'s "identity crisis"), prefrontal cortex development (not complete until ~25), and heightened emotional volatility due to hormonal changes.',
      'Aging: Fluid intelligence (processing speed) declines with age, but crystallized intelligence (accumulated knowledge) remains stable or even increases. Neuroplasticity continues throughout life.'
    ],
    funFact: 'Babies can distinguish all speech sounds from all languages until about 10 months of age. After that, their brains "prune" unused neural pathways and specialize in their native language sounds \u2014 which is why learning a second language gets harder with age.',
    realWorld: 'Ainsworth\'s attachment research directly influenced childcare policies worldwide. Secure attachment in infancy predicts better relationships, higher self-esteem, and more resilience in adulthood.',
    keyFigures: ['Jean Piaget', 'Erik Erikson', 'John Bowlby', 'Mary Ainsworth', 'Lawrence Kohlberg', 'Lev Vygotsky']
  },
  {
    id: 10, title: 'Motivation and Emotion', titleKa: '\u10DB\u10DD\u10E2\u10D8\u10D5\u10D0\u10EA\u10D8\u10D0 \u10D3\u10D0 \u10D4\u10DB\u10DD\u10EA\u10D8\u10D0',
    description: 'What drives human behavior and the science of emotions.',
    icon: 'mdi:fire',
    keyTopics: ['Maslow\'s Hierarchy', 'Hunger & Eating', 'Achievement Motivation', 'Basic Emotions', 'Emotional Intelligence'],
    summary: 'Motivation energizes and directs behavior. Covers Maslow\'s hierarchy, James-Lange theory, Cannon-Bard theory, and Schachter-Singer theory of emotions.',
    keyPoints: [
      'Motivation has three components: activation (initiating), persistence (continuing effort), and intensity (how hard you try).',
      'Drive-reduction theory: physiological needs create drives (hunger, thirst) that motivate behavior to restore homeostasis. But it can\'t explain curiosity or thrill-seeking.',
      'Maslow\'s hierarchy of needs (bottom to top): Physiological \u2192 Safety \u2192 Love/Belonging \u2192 Esteem \u2192 Self-actualization. Lower needs must be met before higher ones become motivating.',
      'Intrinsic motivation (doing something for its own sake) is more sustainable than extrinsic motivation (rewards/punishments). The overjustification effect: rewarding an already enjoyed activity can decrease intrinsic motivation.',
      'Theories of emotion: James-Lange (body reacts first, then we feel emotion), Cannon-Bard (body reaction and emotion occur simultaneously), Schachter-Singer / Two-factor (physiological arousal + cognitive label = emotion).',
      'Paul Ekman identified 6 universal facial expressions: happiness, sadness, anger, fear, surprise, and disgust. These are recognized across all cultures.',
      'Emotional intelligence (Goleman): the ability to perceive, understand, manage, and use emotions effectively. High EQ predicts better relationships, leadership, and mental health.'
    ],
    funFact: 'The "misattribution of arousal" study showed that men who crossed a scary suspension bridge rated a female interviewer as more attractive than men who crossed a safe bridge \u2014 they mistook their fear-based arousal for romantic attraction!',
    realWorld: 'Companies like Google use Maslow\'s hierarchy to design workplaces: free food (physiological), job security (safety), team activities (belonging), recognition programs (esteem), and "20% time" for passion projects (self-actualization).',
    keyFigures: ['Abraham Maslow', 'William James', 'Walter Cannon', 'Stanley Schachter', 'Paul Ekman', 'Daniel Goleman']
  },
  {
    id: 11, title: 'Personality', titleKa: '\u10DE\u10D8\u10E0\u10DD\u10D5\u10DC\u10D4\u10D1\u10D0',
    description: 'Theories of personality: from Freud to the Big Five.',
    icon: 'mdi:drama-masks',
    keyTopics: ['Psychoanalytic Theory', 'Humanistic Theory', 'Trait Theory', 'Big Five', 'Personality Assessment'],
    summary: 'Personality is our unique pattern of thinking, feeling, and behaving. From Freud\'s id/ego/superego to the Big Five traits (OCEAN), covers all major personality theories.',
    keyPoints: [
      'Freud\'s psychoanalytic theory: Personality is shaped by unconscious conflicts between the Id (primal desires), Ego (rational mediator), and Superego (moral conscience). Defense mechanisms (repression, projection, denial) protect the ego.',
      'Freud\'s psychosexual stages: Oral, Anal, Phallic (Oedipus complex), Latency, Genital. Fixation at any stage can affect adult personality.',
      'Neo-Freudians (Adler, Jung, Horney) kept the unconscious but de-emphasized sexuality. Jung introduced collective unconscious and archetypes. Adler focused on inferiority complex.',
      'Humanistic approaches: Rogers emphasized unconditional positive regard and self-concept. Maslow focused on self-actualization \u2014 becoming the best version of yourself.',
      'Trait theories describe personality using stable dimensions. The Big Five (OCEAN): Openness (curiosity), Conscientiousness (organization), Extraversion (sociability), Agreeableness (cooperativeness), Neuroticism (emotional instability).',
      'The Big Five are partially heritable (~40\u201360%), relatively stable after age 30, and predict job performance, relationship satisfaction, and health outcomes.',
      'Personality assessment: Self-report inventories (MMPI, NEO-PI-R) have good reliability but are subject to social desirability bias. Projective tests (Rorschach, TAT) have weaker validity.'
    ],
    funFact: 'The Myers-Briggs Type Indicator (MBTI) is used by 88% of Fortune 500 companies, yet most personality psychologists consider it scientifically unreliable \u2014 about 50% of people get a different result when retested. The Big Five is the gold standard in research.',
    realWorld: 'Recruiters use Big Five assessments because Conscientiousness is the strongest personality predictor of job performance across all occupations. Agreeableness predicts teamwork, and Openness predicts creativity.',
    keyFigures: ['Sigmund Freud', 'Carl Jung', 'Alfred Adler', 'Carl Rogers', 'Gordon Allport', 'Hans Eysenck']
  },
  {
    id: 12, title: 'Social Psychology', titleKa: '\u10E1\u10DD\u10EA\u10D8\u10D0\u10DA\u10E3\u10E0\u10D8 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D8\u10D0',
    description: 'How others influence our thoughts, feelings, and behavior.',
    icon: 'mdi:account-group-outline',
    keyTopics: ['Conformity', 'Obedience', 'Attitudes', 'Group Behavior', 'Prejudice'],
    summary: 'Social psychology studies how people think about, influence, and relate to each other. Covers conformity, obedience, cognitive dissonance, group behavior, and prejudice.',
    keyPoints: [
      'Attribution theory: We explain others\' behavior using dispositional (personality) or situational (environment) attributions. The fundamental attribution error: we overestimate personality and underestimate situations when judging others.',
      'Conformity (Asch): People agree with an obviously wrong answer to match the group about 37% of the time. Increases with group size (up to ~5) and unanimity.',
      'Obedience (Milgram): 65% of participants delivered what they believed were lethal electric shocks when instructed by an authority figure. Authority, proximity, and legitimacy increased obedience.',
      'Cognitive dissonance (Festinger): When our actions contradict our beliefs, we feel discomfort and change our attitudes to match our behavior. Explains why hazing rituals increase group loyalty.',
      'Group phenomena: Social facilitation (performing better on easy tasks when watched), Social loafing (working less in groups), Groupthink (cohesive groups suppress dissent), Deindividuation (anonymity reduces self-awareness).',
      'Prejudice involves stereotypes (beliefs), prejudice (attitudes), and discrimination (behaviors). Reduced through intergroup contact when groups have equal status and share common goals.',
      'Bystander effect (Darley & Latan\u00e9): The more people present, the less likely anyone is to help. Caused by diffusion of responsibility and pluralistic ignorance.'
    ],
    funFact: 'Zimbardo\'s Stanford Prison Experiment (1971) was meant to last 2 weeks but was stopped after just 6 days because "guards" became sadistic and "prisoners" showed signs of psychological breakdown \u2014 demonstrating the power of situational forces on behavior.',
    realWorld: 'Understanding conformity and obedience explains everything from workplace culture ("nobody questions the boss") to historical atrocities. Modern organizations use these insights to create psychological safety \u2014 environments where people feel safe to speak up.',
    keyFigures: ['Solomon Asch', 'Stanley Milgram', 'Philip Zimbardo', 'Leon Festinger', 'Muzafer Sherif']
  },
  {
    id: 13, title: 'Stress, Health, and Coping', titleKa: '\u10E1\u10E2\u10E0\u10D4\u10E1\u10D8, \u10EF\u10D0\u10DC\u10DB\u10E0\u10D7\u10D4\u10DA\u10DD\u10D1\u10D0 \u10D3\u10D0 \u10D2\u10D0\u10DB\u10D9\u10DA\u10D0\u10D5\u10D4\u10D1\u10D0',
    description: 'How stress affects us and strategies to cope with it.',
    icon: 'mdi:meditation',
    keyTopics: ['Stress Response', 'Stressors', 'Coping Strategies', 'Health Psychology', 'Resilience'],
    summary: 'Stress is the body\'s response to demanding situations. Covers alarm/resistance/exhaustion stages, coping strategies, social support, and resilience.',
    keyPoints: [
      'Stress is the body\'s response to any perceived threat or demand. Eustress (positive) helps performance; distress (negative) harms health.',
      'Selye\'s General Adaptation Syndrome (GAS): Alarm (fight-or-flight activated) \u2192 Resistance (body adapts to ongoing stress) \u2192 Exhaustion (resources depleted, vulnerability to illness).',
      'The fight-or-flight response: the sympathetic nervous system releases adrenaline and cortisol, increasing heart rate, blood pressure, and blood sugar. Useful for short-term threats, harmful when chronic.',
      'Major stressors: catastrophes, significant life changes (Holmes-Rahe scale), and daily hassles. Research shows daily hassles (traffic, deadlines) may affect health more than major events.',
      'Chronic stress suppresses the immune system (psychoneuroimmunology), increases risk of cardiovascular disease, contributes to depression and anxiety, and accelerates cellular aging.',
      'Coping strategies: Problem-focused coping (taking action to solve the problem) works best for controllable situations. Emotion-focused coping (managing feelings) is better for uncontrollable situations.',
      'Protective factors: Social support (the #1 buffer against stress), exercise (reduces cortisol), mindfulness and meditation (reduces amygdala reactivity), perceived control (believing you can influence outcomes), and optimism.'
    ],
    funFact: 'Laughing reduces cortisol by 39% and increases endorphins by 27%. Studies show that even anticipating a funny experience can reduce stress hormones. Hospitals now use "laughter therapy" with positive results.',
    realWorld: 'Burnout (emotional exhaustion, depersonalization, reduced accomplishment) affects 67% of workers at some point. Companies that implement stress management programs see 25% reductions in sick days and higher productivity.',
    keyFigures: ['Hans Selye', 'Richard Lazarus', 'Walter Cannon', 'Martin Seligman', 'Sheldon Cohen']
  },
  {
    id: 14, title: 'Psychological Disorders', titleKa: '\u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D8\u10E3\u10E0\u10D8 \u10D0\u10E8\u10DA\u10D8\u10DA\u10DD\u10D1\u10D4\u10D1\u10D8',
    description: 'Understanding mental disorders: symptoms, causes, and classification.',
    icon: 'mdi:stethoscope',
    keyTopics: ['DSM Classification', 'Anxiety Disorders', 'Mood Disorders', 'Schizophrenia', 'Personality Disorders'],
    summary: 'Psychological disorders cause significant distress or impairment. Covers anxiety, mood disorders, schizophrenia, and personality disorders with biological and social causes.',
    keyPoints: [
      'A psychological disorder is a pattern of thoughts, feelings, or behaviors that is deviant, distressful, and dysfunctional (the "3 D\'s"). Context and culture matter in defining "abnormal."',
      'The DSM-5 (Diagnostic and Statistical Manual) is the standard classification system. It categorizes disorders by symptoms, not causes, and is used for diagnosis and insurance.',
      'Anxiety disorders (most common): Generalized Anxiety Disorder (persistent worry), Panic Disorder (sudden intense fear attacks), Phobias (irrational fear of specific things), OCD (obsessive thoughts + compulsive rituals), PTSD (after trauma).',
      'Mood disorders: Major Depressive Disorder (persistent sadness, loss of interest, lasting 2+ weeks) and Bipolar Disorder (alternating episodes of mania and depression). Depression is the leading cause of disability worldwide.',
      'Schizophrenia: a severe disorder involving positive symptoms (hallucinations, delusions, disorganized speech) and negative symptoms (flat affect, social withdrawal). Dopamine hypothesis: excess dopamine activity in certain brain pathways.',
      'Personality disorders: enduring, inflexible patterns. Antisocial PD (disregard for others\' rights, lack of empathy), Borderline PD (unstable relationships and emotions), Narcissistic PD (grandiosity, need for admiration).',
      'The diathesis-stress model: disorders result from a genetic/biological predisposition (diathesis) + environmental triggers (stress). Neither alone is usually sufficient.'
    ],
    funFact: 'About 1 in 5 adults experiences a mental health condition in any given year. Depression and anxiety cost the global economy $1 trillion annually in lost productivity \u2014 yet most disorders are highly treatable with proper intervention.',
    realWorld: 'The shift from institutionalization to community-based mental health care (deinstitutionalization) transformed treatment. Today, early intervention programs for psychosis can reduce symptoms by 50% and dramatically improve long-term outcomes.',
    keyFigures: ['Emil Kraepelin', 'Aaron Beck', 'David Rosenhan', 'Thomas Szasz', 'Kay Redfield Jamison']
  },
  {
    id: 15, title: 'Therapies', titleKa: '\u10D7\u10D4\u10E0\u10D0\u10DE\u10D8\u10D4\u10D1\u10D8',
    description: 'Approaches to treating psychological disorders.',
    icon: 'mdi:pill',
    keyTopics: ['Psychotherapy', 'CBT', 'Humanistic Therapy', 'Biomedical Therapies', 'Group Therapy'],
    summary: 'Therapy comes in many forms: psychoanalytic, CBT, humanistic, and biomedical. Compares therapeutic approaches and their effectiveness.',
    keyPoints: [
      'Psychoanalytic/Psychodynamic therapy: explores unconscious conflicts through free association, dream analysis, and transference. Long-term, insight-oriented. Less empirically supported than CBT.',
      'Cognitive-Behavioral Therapy (CBT): identifies and changes distorted thinking patterns and maladaptive behaviors. The gold standard for anxiety and depression with strong evidence. Short-term (12\u201320 sessions).',
      'Beck\'s cognitive therapy targets cognitive distortions: all-or-nothing thinking, catastrophizing, overgeneralization, mind reading, and personalization.',
      'Humanistic therapy (Rogers\'s client-centered): provides unconditional positive regard, empathy, and genuineness. The therapist creates a supportive environment for self-exploration.',
      'Biomedical therapies: Antidepressants (SSRIs increase serotonin), Anti-anxiety meds (benzodiazepines), Antipsychotics (block dopamine), Mood stabilizers (lithium for bipolar). ECT (electroconvulsive therapy) remains effective for severe, treatment-resistant depression.',
      'Group therapy and family therapy leverage social support and address relationship dynamics. More cost-effective and can reduce isolation. Self-help groups (AA model) provide peer support.',
      'Evidence-based practice: combining the best research evidence, clinical expertise, and patient preferences. Not all therapies are equally effective for all disorders \u2014 matching treatment to diagnosis matters.'
    ],
    funFact: 'Talking to a therapist actually changes your brain. Brain scans show that CBT produces measurable changes in activity in the prefrontal cortex and amygdala \u2014 the same regions affected by antidepressant medication.',
    realWorld: 'Teletherapy (online therapy) exploded during COVID-19 and research shows it\'s nearly as effective as in-person therapy for most conditions. This massively expanded access to mental health care, especially in rural areas.',
    keyFigures: ['Aaron Beck', 'Carl Rogers', 'Albert Ellis', 'Joseph Wolpe', 'Sigmund Freud']
  },
  {
    id: 16, title: 'Applied Psychology', titleKa: '\u10D2\u10D0\u10DB\u10DD\u10E7\u10D4\u10DC\u10D4\u10D1\u10D8\u10D7\u10D8 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D8\u10D0',
    description: 'Psychology in the real world: work, education, law, and everyday life.',
    icon: 'mdi:earth',
    keyTopics: ['Industrial-Organizational Psychology', 'Educational Psychology', 'Forensic Psychology', 'Positive Psychology'],
    summary: 'Psychology applies to virtually every area of life. I/O psychology, educational psychology, forensic psychology, and positive psychology all make real-world impact.',
    keyPoints: [
      'Industrial-Organizational (I/O) Psychology: applies psychological principles to the workplace. Covers hiring (structured interviews beat unstructured), training design, motivation, leadership, job satisfaction, and reducing turnover.',
      'Educational Psychology: studies how people learn in educational settings. Applies Piaget, Vygotsky (zone of proximal development), and learning styles research. Growth mindset (Dweck): believing intelligence is malleable improves academic performance.',
      'Forensic Psychology: intersection of psychology and law. Includes criminal profiling, eyewitness testimony research, jury selection, competency evaluations, and risk assessment for reoffending.',
      'Health Psychology: promotes healthy behaviors and prevents illness. Covers behavior change models (stages of change), adherence to medical treatment, chronic pain management, and the mind-body connection.',
      'Positive Psychology (Seligman): the scientific study of what makes life worth living. Focuses on strengths, virtues, and optimal functioning rather than pathology. Key concepts: flow (Csikszentmihalyi), grit (Duckworth), gratitude, and character strengths.',
      'Environmental Psychology: how physical environments affect behavior and well-being. Includes workspace design, urban planning, crowding effects, and noise pollution impacts.',
      'Cross-cultural psychology: understanding how culture shapes behavior, cognition, and emotion. Individualistic cultures (US, Western Europe) emphasize personal achievement; collectivistic cultures (East Asia, Latin America) emphasize group harmony.'
    ],
    funFact: 'The "IKEA effect" (discovered by behavioral economists using psychological research) shows that people value things they built themselves 63% more than identical pre-built items \u2014 even when their creation is objectively worse!',
    realWorld: 'Seligman\'s positive psychology research is used by the U.S. Army\'s Comprehensive Soldier Fitness program, training 1.1 million soldiers in resilience skills. Schools worldwide now teach "character strengths" and "growth mindset" as part of their curriculum.',
    keyFigures: ['Martin Seligman', 'Mihaly Csikszentmihalyi', 'Carol Dweck', 'Angela Duckworth', 'Hugo M\u00fcnsterberg']
  }
];



export const QUIZZES: Quiz[] = [
  {
    id: 'ch1-quiz', chapterId: 1, title: 'What is Psychology? \u2014 Quiz',
    questions: [
      { id: 'q1-1', question: 'Who established the first psychology laboratory in 1879?', options: ['Sigmund Freud', 'Wilhelm Wundt', 'William James', 'John Watson'], correctIndex: 1, explanation: 'Wilhelm Wundt founded the first psychology lab at the University of Leipzig in 1879.' },
      { id: 'q1-2', question: 'Psychology is best defined as the scientific study of:', options: ['The mind only', 'Behavior and mental processes', 'Emotions', 'Brain chemistry'], correctIndex: 1, explanation: 'Psychology is the scientific study of both behavior and mental processes.' },
      { id: 'q1-3', question: 'Which perspective emphasizes observable behavior?', options: ['Psychoanalytic', 'Humanistic', 'Behavioral', 'Cognitive'], correctIndex: 2, explanation: 'Behaviorism focuses on observable, measurable behaviors.' },
      { id: 'q1-4', question: 'The psychoanalytic approach was developed by:', options: ['Carl Rogers', 'Sigmund Freud', 'Abraham Maslow', 'Ivan Pavlov'], correctIndex: 1, explanation: 'Sigmund Freud developed psychoanalysis.' },
      { id: 'q1-5', question: 'Which school used introspection as its primary method?', options: ['Functionalism', 'Structuralism', 'Gestalt', 'Behaviorism'], correctIndex: 1, explanation: 'Structuralism used introspection to analyze conscious experience.' },
      { id: 'q1-6', question: 'The humanistic perspective emphasizes:', options: ['Unconscious desires', 'Free will and self-actualization', 'Stimulus-response', 'Brain chemistry'], correctIndex: 1, explanation: 'Humanistic psychology focuses on personal growth and free will.' },
      { id: 'q1-7', question: 'William James is associated with:', options: ['Structuralism', 'Functionalism', 'Behaviorism', 'Gestalt'], correctIndex: 1, explanation: 'William James founded functionalism.' },
      { id: 'q1-8', question: 'The cognitive perspective focuses on:', options: ['Brain structures', 'Mental processes like thinking and memory', 'Social influences', 'Childhood experiences'], correctIndex: 1, explanation: 'Cognitive psychology studies internal mental processes.' },
      { id: 'q1-9', question: 'The biopsychosocial model includes:', options: ['Biology only', 'Psychology only', 'Social factors only', 'Biological, psychological, and social factors'], correctIndex: 3, explanation: 'It integrates all three factors.' },
      { id: 'q1-10', question: 'Which is NOT a goal of psychology?', options: ['Describe behavior', 'Explain behavior', 'Control the economy', 'Predict behavior'], correctIndex: 2, explanation: 'The four goals are to describe, explain, predict, and influence behavior.' }
    ]
  },
  {
    id: 'ch2-quiz', chapterId: 2, title: 'Research Methods \u2014 Quiz',
    questions: [
      { id: 'q2-1', question: 'The variable manipulated by the researcher is the:', options: ['Dependent variable', 'Independent variable', 'Control variable', 'Confounding variable'], correctIndex: 1, explanation: 'The independent variable is what the researcher manipulates.' },
      { id: 'q2-2', question: 'A positive correlation means:', options: ['One causes the other', 'As one increases the other decreases', 'Both increase together', 'No relationship'], correctIndex: 2, explanation: 'Both variables move in the same direction.' },
      { id: 'q2-3', question: 'The placebo effect demonstrates:', options: ['Power of belief on outcomes', 'Experiments fail', 'Drugs never work', 'Correlation equals causation'], correctIndex: 0, explanation: 'Improvement from belief in treatment.' },
      { id: 'q2-4', question: 'Which method establishes cause and effect?', options: ['Survey', 'Case study', 'Experiment', 'Observation'], correctIndex: 2, explanation: 'Only experiments can establish cause-and-effect.' },
      { id: 'q2-5', question: 'Random assignment helps to:', options: ['Increase sample', 'Equalize groups', 'Make results public', 'Speed research'], correctIndex: 1, explanation: 'Random assignment ensures groups are equivalent.' },
      { id: 'q2-6', question: 'A double-blind study means:', options: ['No one knows hypothesis', 'Neither side knows assignments', 'Two experiments run', 'Both eyes covered'], correctIndex: 1, explanation: 'Neither participants nor researchers know group assignments.' },
      { id: 'q2-7', question: 'Correlation does not equal causation means:', options: ['Correlations are useless', 'Being related does not mean causation', 'All research is flawed', 'Experiments unnecessary'], correctIndex: 1, explanation: 'Correlation does not prove direct causation.' },
      { id: 'q2-8', question: 'Informed consent means participants:', options: ['Are paid well', 'Understand and agree voluntarily', 'Must finish the study', 'Are students'], correctIndex: 1, explanation: 'Participants must understand and agree voluntarily.' },
      { id: 'q2-9', question: 'Which provides most in-depth info about one individual?', options: ['Survey', 'Experiment', 'Case study', 'Correlation study'], correctIndex: 2, explanation: 'Case studies are deeply detailed.' },
      { id: 'q2-10', question: 'The mean is:', options: ['Most frequent score', 'Middle score', 'Arithmetic average', 'Range of scores'], correctIndex: 2, explanation: 'The mean is the arithmetic average.' }
    ]
  },
  {
    id: 'ch3-quiz', chapterId: 3, title: 'Biological Bases \u2014 Quiz',
    questions: [
      { id: 'q3-1', question: 'The gap between two neurons is the:', options: ['Axon terminal', 'Synapse', 'Dendrite', 'Myelin sheath'], correctIndex: 1, explanation: 'The synapse is the gap between neurons.' },
      { id: 'q3-2', question: 'Which neurotransmitter is linked to pleasure and reward?', options: ['Serotonin', 'GABA', 'Dopamine', 'Acetylcholine'], correctIndex: 2, explanation: 'Dopamine plays a key role in reward.' },
      { id: 'q3-3', question: 'The cerebral cortex has how many lobes?', options: ['Two', 'Three', 'Four', 'Five'], correctIndex: 2, explanation: 'Four lobes: frontal, parietal, temporal, occipital.' },
      { id: 'q3-4', question: 'Broca\'s area controls:', options: ['Vision', 'Speech production', 'Hearing', 'Movement'], correctIndex: 1, explanation: 'Broca\'s area controls speech production.' },
      { id: 'q3-5', question: 'Fight-or-flight is activated by:', options: ['Parasympathetic NS', 'Sympathetic NS', 'Somatic NS', 'Central NS'], correctIndex: 1, explanation: 'The sympathetic nervous system activates fight-or-flight.' },
      { id: 'q3-6', question: 'Myelin sheath serves to:', options: ['Generate neurotransmitters', 'Speed up transmission', 'Store memories', 'Connect hemispheres'], correctIndex: 1, explanation: 'Myelin insulates axons for faster signals.' },
      { id: 'q3-7', question: 'Hippocampus is associated with:', options: ['Emotion regulation', 'Memory formation', 'Visual processing', 'Motor control'], correctIndex: 1, explanation: 'The hippocampus is essential for forming memories.' },
      { id: 'q3-8', question: 'Which connects the two hemispheres?', options: ['Cerebellum', 'Corpus callosum', 'Thalamus', 'Hypothalamus'], correctIndex: 1, explanation: 'The corpus callosum connects the hemispheres.' },
      { id: 'q3-9', question: 'Endorphins are chemicals that:', options: ['Increase pain', 'Reduce pain and produce pleasure', 'Cause depression', 'Slow neurons'], correctIndex: 1, explanation: 'Endorphins are natural painkillers.' },
      { id: 'q3-10', question: 'Neuroplasticity is the brain\'s ability to:', options: ['Remain unchanged', 'Form new connections', 'Only work in childhood', 'Produce hormones'], correctIndex: 1, explanation: 'The brain can form new neural connections throughout life.' }
    ]
  },
  {
    id: 'ch4-quiz', chapterId: 4, title: 'Sensation and Perception \u2014 Quiz',
    questions: [
      { id: 'q4-1', question: 'Minimum stimulation detected 50% of the time:', options: ['Difference threshold', 'Absolute threshold', 'Signal detection', 'Weber\'s law'], correctIndex: 1, explanation: 'Absolute threshold: minimum detected 50% of the time.' },
      { id: 'q4-2', question: 'Which Gestalt principle groups nearby objects?', options: ['Similarity', 'Proximity', 'Closure', 'Continuity'], correctIndex: 1, explanation: 'Proximity: nearby objects are grouped.' },
      { id: 'q4-3', question: 'Rods in the retina are for:', options: ['Color vision', 'Dim light vision', 'Detail focus', 'Depth perception'], correctIndex: 1, explanation: 'Rods function in dim light.' },
      { id: 'q4-4', question: 'Converting stimuli to neural signals is:', options: ['Perception', 'Transduction', 'Accommodation', 'Adaptation'], correctIndex: 1, explanation: 'Transduction converts physical energy to signals.' },
      { id: 'q4-5', question: 'Sound frequency determines:', options: ['Loudness', 'Pitch', 'Timbre', 'Duration'], correctIndex: 1, explanation: 'Frequency determines pitch.' },
      { id: 'q4-6', question: 'The blind spot exists because:', options: ['No cones there', 'No receptors where optic nerve exits', 'Imperfect lens', 'Light damage'], correctIndex: 1, explanation: 'No receptors where the optic nerve exits.' },
      { id: 'q4-7', question: 'Top-down processing is guided by:', options: ['Raw sensory data', 'Expectations and prior knowledge', 'Stimulus intensity', 'Receptor cells'], correctIndex: 1, explanation: 'Experience and knowledge guide top-down processing.' },
      { id: 'q4-8', question: 'Sensory adaptation is:', options: ['Learning new skills', 'Decreased sensitivity to constant stimulus', 'Increased pain', 'Improved vision'], correctIndex: 1, explanation: 'Reduced sensitivity to unchanging stimuli.' },
      { id: 'q4-9', question: 'Binocular depth cues require:', options: ['One eye', 'Both eyes', 'Hearing', 'Touch'], correctIndex: 1, explanation: 'Both eyes needed for binocular depth cues.' },
      { id: 'q4-10', question: 'Opponent-process theory explains:', options: ['3D vision', 'Color via opposing pairs', 'Smell adaptation', 'Pain'], correctIndex: 1, explanation: 'Color perception through three opposing pairs.' }
    ]
  },
  {
    id: 'ch5-quiz', chapterId: 5, title: 'Consciousness \u2014 Quiz',
    questions: [
      { id: 'q5-1', question: 'REM sleep features:', options: ['Deep relaxation', 'Rapid eye movements and vivid dreams', 'No brain activity', 'Sleepwalking'], correctIndex: 1, explanation: 'REM: rapid eye movements and vivid dreaming.' },
      { id: 'q5-2', question: 'Freud said dreams represent:', options: ['Random neural firing', 'Wish fulfillment', 'Memory consolidation', 'Nothing meaningful'], correctIndex: 1, explanation: 'Freud: dreams are disguised wish fulfillment.' },
      { id: 'q5-3', question: 'Circadian rhythm is approximately:', options: ['12 hours', '24 hours', '48 hours', '8 hours'], correctIndex: 1, explanation: 'Roughly 24-hour cycle.' },
      { id: 'q5-4', question: 'Sleep deprivation impairs:', options: ['Physical strength', 'Concentration and decisions', 'Height', 'Hearing'], correctIndex: 1, explanation: 'Sleep loss impairs cognitive function.' },
      { id: 'q5-5', question: 'Activation-synthesis says dreams are:', options: ['Unconscious wishes', 'Brain interpreting random neural activity', 'Supernatural', 'Repressed memories'], correctIndex: 1, explanation: 'Brain makes sense of random neural signals.' },
      { id: 'q5-6', question: 'Narcolepsy involves:', options: ['Inability to sleep', 'Sudden sleep attacks', 'Snoring', 'Nightmares only'], correctIndex: 1, explanation: 'Sudden uncontrollable episodes of falling asleep.' },
      { id: 'q5-7', question: 'Hypnosis is best described as:', options: ['Heightened suggestibility', 'Deep sleep', 'Unconsciousness', 'Anesthesia'], correctIndex: 0, explanation: 'Heightened suggestibility and focused attention.' },
      { id: 'q5-8', question: 'Melatonin regulates:', options: ['Hunger', 'Sleep', 'Growth', 'Adrenaline'], correctIndex: 1, explanation: 'Melatonin regulates the sleep-wake cycle.' },
      { id: 'q5-9', question: 'Tolerance means:', options: ['You dislike it', 'Need more for same effect', 'Addicted', 'No longer exists'], correctIndex: 1, explanation: 'Needing more to achieve the same effect.' },
      { id: 'q5-10', question: 'Delta waves are associated with:', options: ['Alertness', 'REM sleep', 'Deep non-REM sleep', 'Light sleep'], correctIndex: 2, explanation: 'Delta waves characterize deep non-REM sleep.' }
    ]
  },
  {
    id: 'ch6-quiz', chapterId: 6, title: 'Learning \u2014 Quiz',
    questions: [
      { id: 'q6-1', question: 'In Pavlov\'s experiment, the bell started as a:', options: ['Conditioned stimulus', 'Unconditioned stimulus', 'Neutral stimulus', 'Conditioned response'], correctIndex: 2, explanation: 'The bell was initially neutral.' },
      { id: 'q6-2', question: 'Negative reinforcement involves:', options: ['Punishment', 'Adding unpleasant stimulus', 'Removing unpleasant stimulus', 'Ignoring behavior'], correctIndex: 2, explanation: 'Removing aversive stimulus strengthens behavior.' },
      { id: 'q6-3', question: 'Bandura\'s Bobo doll showed:', options: ['Classical conditioning', 'Operant conditioning', 'Observational learning', 'Habituation'], correctIndex: 2, explanation: 'Children learned aggression by watching.' },
      { id: 'q6-4', question: 'Extinction occurs when:', options: ['CS presented without US repeatedly', 'Punishment applied', 'Organism dies', 'Response strengthens'], correctIndex: 0, explanation: 'CS without US weakens the response.' },
      { id: 'q6-5', question: 'Variable-ratio schedule produces:', options: ['Slow responding', 'High steady responding', 'Quick extinction', 'No responding'], correctIndex: 1, explanation: 'Variable-ratio produces highest response rates.' },
      { id: 'q6-6', question: 'Shaping involves:', options: ['Punishing all behaviors', 'Reinforcing successive approximations', 'Ignoring organism', 'Only classical conditioning'], correctIndex: 1, explanation: 'Reinforcing progressively closer behaviors.' },
      { id: 'q6-7', question: 'Little Albert learned fear through:', options: ['Operant conditioning', 'Classical conditioning', 'Maturation', 'Insight'], correctIndex: 1, explanation: 'Watson used classical conditioning.' },
      { id: 'q6-8', question: 'Positive punishment example:', options: ['Taking away a toy', 'Getting a speeding ticket', 'Removing a shock', 'Getting a reward'], correctIndex: 1, explanation: 'Adding an aversive consequence.' },
      { id: 'q6-9', question: 'Latent learning was shown by:', options: ['Pavlov', 'Skinner', 'Tolman', 'Bandura'], correctIndex: 2, explanation: 'Tolman showed rats formed cognitive maps.' },
      { id: 'q6-10', question: 'Stimulus generalization means:', options: ['Responding to exact stimuli only', 'Responding to similar stimuli', 'No response', 'Faster extinction'], correctIndex: 1, explanation: 'Responding to stimuli similar to the conditioned one.' }
    ]
  },
  {
    id: 'ch7-quiz', chapterId: 7, title: 'Memory \u2014 Quiz',
    questions: [
      { id: 'q7-1', question: 'Sensory memory lasts:', options: ['A few seconds', 'A fraction of a second to seconds', 'Minutes', 'Hours'], correctIndex: 1, explanation: 'Very brief duration.' },
      { id: 'q7-2', question: 'Short-term memory capacity:', options: ['2 items', '7 +/- 2 items', '15 items', 'Unlimited'], correctIndex: 1, explanation: 'Miller\'s magic number: 7 plus or minus 2.' },
      { id: 'q7-3', question: 'Elaborative rehearsal involves:', options: ['Simple repetition', 'Connecting to existing knowledge', 'Forgetting', 'Writing only'], correctIndex: 1, explanation: 'Connecting new info to existing memories.' },
      { id: 'q7-4', question: 'Ebbinghaus\' forgetting curve shows:', options: ['Linear forgetting', 'Rapid then leveling off', 'No natural forgetting', 'Steady increase'], correctIndex: 1, explanation: 'Forgetting is rapid at first, then levels off.' },
      { id: 'q7-5', question: 'Retrograde amnesia is:', options: ['Can\'t form new memories', 'Loss of past memories', 'Loss of procedural memory', 'Loss of language'], correctIndex: 1, explanation: 'Inability to recall previously stored memories.' },
      { id: 'q7-6', question: 'Primacy effect is better recall of:', options: ['End items', 'Beginning items', 'Middle items', 'Random items'], correctIndex: 1, explanation: 'Better recall of items at the beginning.' },
      { id: 'q7-7', question: 'Implicit memory includes:', options: ['Conscious recall', 'Skills and habits', 'Episodic only', 'Semantic only'], correctIndex: 1, explanation: 'Implicit: procedural skills and habits.' },
      { id: 'q7-8', question: 'Loftus demonstrated:', options: ['Perfect recall', 'False memories can be created', 'Photographic memory', 'Memory never changes'], correctIndex: 1, explanation: 'Misleading info alters memories.' },
      { id: 'q7-9', question: 'Method of loci is a:', options: ['Type of forgetting', 'Mnemonic using locations', 'Brain structure', 'Memory disorder'], correctIndex: 1, explanation: 'Associate items with familiar locations.' },
      { id: 'q7-10', question: 'LTP is:', options: ['Memory loss', 'Strengthening neural connections', 'Amnesia', 'Short-term storage'], correctIndex: 1, explanation: 'Synaptic connections strengthen with repeated use.' }
    ]
  },
  {
    id: 'ch8-quiz', chapterId: 8, title: 'Cognition and Intelligence \u2014 Quiz',
    questions: [
      { id: 'q8-1', question: 'A heuristic is:', options: ['Guaranteed solution', 'Mental shortcut', 'Memory type', 'Brain structure'], correctIndex: 1, explanation: 'Quick mental shortcuts for decisions.' },
      { id: 'q8-2', question: 'Confirmation bias is:', options: ['Seeking confirming info', 'Considering all evidence', 'Changing opinions', 'Ignoring all info'], correctIndex: 0, explanation: 'We search for info confirming our beliefs.' },
      { id: 'q8-3', question: 'Gardner proposed:', options: ['Single intelligence', 'Multiple intelligences', 'IQ is meaningless', 'Emotional intelligence only'], correctIndex: 1, explanation: 'Multiple types of intelligence.' },
      { id: 'q8-4', question: 'Sapir-Whorf hypothesis:', options: ['Language has no effect', 'Language influences thinking', 'Languages are identical', 'Thought determines language'], correctIndex: 1, explanation: 'Language shapes perception and thinking.' },
      { id: 'q8-5', question: 'IQ 100 means:', options: ['Genius', 'Below average', 'Average', 'Disability'], correctIndex: 2, explanation: 'IQ 100 is the average.' },
      { id: 'q8-6', question: 'Functional fixedness is:', options: ['Seeing only typical uses', 'Great problem-solving', 'Math skill', 'Learning disability'], correctIndex: 0, explanation: 'Inability to see alternative uses.' },
      { id: 'q8-7', question: 'Availability heuristic bases judgments on:', options: ['Logic', 'Ease of recall', 'Expert opinions', 'Random chance'], correctIndex: 1, explanation: 'Judgments based on how easily examples come to mind.' },
      { id: 'q8-8', question: 'Sternberg\'s triarchic theory:', options: ['Verbal, math, spatial', 'Analytical, creative, practical', 'Musical, kinesthetic, interpersonal', 'Emotional, social, rational'], correctIndex: 1, explanation: 'Analytical, creative, and practical intelligence.' },
      { id: 'q8-9', question: 'Algorithms vs heuristics:', options: ['Faster', 'Guarantee correct solution', 'Are shortcuts', 'Never work'], correctIndex: 1, explanation: 'Algorithms guarantee a solution.' },
      { id: 'q8-10', question: 'The Flynn effect:', options: ['Declining IQ', 'Rising IQ over generations', 'Stable IQ', 'Gender IQ differences'], correctIndex: 1, explanation: 'IQ scores rise across generations.' }
    ]
  },
  {
    id: 'ch9-quiz', chapterId: 9, title: 'Human Development \u2014 Quiz',
    questions: [
      { id: 'q9-1', question: 'Object permanence is in Piaget\'s:', options: ['Preoperational', 'Sensorimotor', 'Concrete operational', 'Formal operational'], correctIndex: 1, explanation: 'Develops in the sensorimotor stage.' },
      { id: 'q9-2', question: 'Erikson\'s identity crisis occurs in:', options: ['Infancy', 'Early childhood', 'Adolescence', 'Adulthood'], correctIndex: 2, explanation: 'Identity vs. role confusion in adolescence.' },
      { id: 'q9-3', question: 'Secure attachment was described by:', options: ['Freud', 'Ainsworth', 'Piaget', 'Skinner'], correctIndex: 1, explanation: 'Ainsworth identified attachment styles.' },
      { id: 'q9-4', question: 'ZPD was proposed by:', options: ['Piaget', 'Vygotsky', 'Erikson', 'Kohlberg'], correctIndex: 1, explanation: 'Vygotsky proposed the Zone of Proximal Development.' },
      { id: 'q9-5', question: 'Kohlberg focuses on:', options: ['Cognitive development', 'Moral development', 'Physical development', 'Emotional development'], correctIndex: 1, explanation: 'Three levels of moral reasoning.' },
      { id: 'q9-6', question: 'Preoperational children show:', options: ['Abstract thinking', 'Egocentrism', 'Conservation', 'Logical reasoning'], correctIndex: 1, explanation: 'Egocentrism and symbolic play.' },
      { id: 'q9-7', question: 'Teratogens are:', options: ['Vitamins', 'Harmful agents causing birth defects', 'Genes', 'Hormones'], correctIndex: 1, explanation: 'Substances that harm prenatal development.' },
      { id: 'q9-8', question: 'Harlow showed importance of:', options: ['Food over comfort', 'Contact comfort', 'Primate intelligence', 'Visual learning'], correctIndex: 1, explanation: 'Contact comfort matters more than food.' },
      { id: 'q9-9', question: 'Conservation means:', options: ['Protecting nature', 'Quantity stays same despite shape change', 'Memory rehearsal', 'Energy limit'], correctIndex: 1, explanation: 'Properties remain constant despite appearance.' },
      { id: 'q9-10', question: 'Erikson\'s first crisis:', options: ['Autonomy vs. shame', 'Trust vs. mistrust', 'Initiative vs. guilt', 'Industry vs. inferiority'], correctIndex: 1, explanation: 'Trust vs. mistrust in infancy.' }
    ]
  },
  {
    id: 'ch10-quiz', chapterId: 10, title: 'Motivation and Emotion \u2014 Quiz',
    questions: [
      { id: 'q10-1', question: 'Top of Maslow\'s hierarchy:', options: ['Safety', 'Esteem', 'Self-actualization', 'Love'], correctIndex: 2, explanation: 'Self-actualization is the highest level.' },
      { id: 'q10-2', question: 'James-Lange theory:', options: ['Emotions cause physical response', 'Physical response causes emotions', 'They occur simultaneously', 'Emotions are cognitive'], correctIndex: 1, explanation: 'We feel emotions because of body responses.' },
      { id: 'q10-3', question: 'Intrinsic motivation comes from:', options: ['External rewards', 'Internal satisfaction', 'Social pressure', 'Money'], correctIndex: 1, explanation: 'Internal enjoyment and satisfaction.' },
      { id: 'q10-4', question: 'Set-point theory says:', options: ['Body maintains a natural weight range', 'Eat anything freely', 'Metabolism irrelevant', 'Exercise unnecessary'], correctIndex: 0, explanation: 'Body works to maintain a natural weight range.' },
      { id: 'q10-5', question: 'Ekman found emotions are:', options: ['Culturally unique', 'Universal', 'Only learned', 'Different everywhere'], correctIndex: 1, explanation: 'Basic expressions are universal.' },
      { id: 'q10-6', question: 'Yerkes-Dodson law:', options: ['More arousal better', 'Moderate arousal optimal', 'Low arousal best', 'Arousal irrelevant'], correctIndex: 1, explanation: 'Moderate arousal leads to optimal performance.' },
      { id: 'q10-7', question: 'Cannon-Bard says:', options: ['Body causes emotions', 'Emotions and arousal occur simultaneously', 'We label arousal', 'Emotions unnecessary'], correctIndex: 1, explanation: 'Experience and arousal happen simultaneously.' },
      { id: 'q10-8', question: 'Overjustification effect:', options: ['External rewards decrease intrinsic motivation', 'Too much motivation fails', 'More money more effort', 'Emotions too strong'], correctIndex: 0, explanation: 'External rewards can reduce intrinsic motivation.' },
      { id: 'q10-9', question: 'Which theory: label arousal to identify emotions?', options: ['James-Lange', 'Cannon-Bard', 'Schachter-Singer', 'Evolutionary'], correctIndex: 2, explanation: 'Emotion = arousal + cognitive label.' },
      { id: 'q10-10', question: 'Maslow is known for:', options: ['Behaviorism', 'Hierarchy of needs', 'Psychoanalysis', 'CBT'], correctIndex: 1, explanation: 'The hierarchy of needs.' }
    ]
  },
  {
    id: 'ch11-quiz', chapterId: 11, title: 'Personality \u2014 Quiz',
    questions: [
      { id: 'q11-1', question: 'Freud\'s id operates on:', options: ['Reality principle', 'Pleasure principle', 'Moral principle', 'Social principle'], correctIndex: 1, explanation: 'Id seeks immediate gratification.' },
      { id: 'q11-2', question: 'Big Five excludes:', options: ['Openness', 'Conscientiousness', 'Intelligence', 'Neuroticism'], correctIndex: 2, explanation: 'Intelligence is not a Big Five trait.' },
      { id: 'q11-3', question: 'Rogers emphasized:', options: ['Defense mechanisms', 'Unconditional positive regard', 'Conditioning', 'Dream analysis'], correctIndex: 1, explanation: 'Unconditional positive regard is essential.' },
      { id: 'q11-4', question: 'Projection means:', options: ['Denying reality', 'Attributing own feelings to others', 'Returning to earlier stage', 'Channeling impulses'], correctIndex: 1, explanation: 'Projecting unacceptable feelings onto others.' },
      { id: 'q11-5', question: 'Self-efficacy refers to:', options: ['Self-esteem', 'Belief in ability to succeed', 'Personality type', 'Intelligence'], correctIndex: 1, explanation: 'Belief in capability to perform.' },
      { id: 'q11-6', question: 'Freud\'s stages exclude:', options: ['Oral', 'Anal', 'Cognitive', 'Phallic'], correctIndex: 2, explanation: 'Cognitive is Piaget, not Freud.' },
      { id: 'q11-7', question: 'Rorschach test uses:', options: ['True/false', 'Inkblots', 'Sentences', 'Drawings'], correctIndex: 1, explanation: 'Ambiguous inkblots for personality assessment.' },
      { id: 'q11-8', question: 'Ego operates on:', options: ['Pleasure principle', 'Moral principle', 'Reality principle', 'Unconscious'], correctIndex: 2, explanation: 'Ego mediates between id and reality.' },
      { id: 'q11-9', question: 'Locus of control:', options: ['Brain location', 'Whether outcomes are internal or external', 'Coordination', 'Self-esteem'], correctIndex: 1, explanation: 'Internal vs external locus.' },
      { id: 'q11-10', question: 'Adler proposed:', options: ['Collective unconscious', 'Inferiority complex', 'Self-actualization', 'Operant conditioning'], correctIndex: 1, explanation: 'Inferiority feelings motivate growth.' }
    ]
  },
  {
    id: 'ch12-quiz', chapterId: 12, title: 'Social Psychology \u2014 Quiz',
    questions: [
      { id: 'q12-1', question: 'Asch tested conformity with:', options: ['Colors', 'Line lengths', 'Sounds', 'Weights'], correctIndex: 1, explanation: 'Participants conformed about line lengths.' },
      { id: 'q12-2', question: 'Milgram found:', options: ['Refused to shock', 'Often obeyed authority', 'Never followed orders', 'Enjoyed it'], correctIndex: 1, explanation: '65% obeyed authority.' },
      { id: 'q12-3', question: 'Bystander effect:', options: ['More bystanders help', 'Less likely to help with others present', 'Only men help', 'Crowd size helps'], correctIndex: 1, explanation: 'Diffusion of responsibility.' },
      { id: 'q12-4', question: 'Cognitive dissonance:', options: ['Attitude-behavior agreement', 'Discomfort from contradictions', 'Memory error', 'Personality disorder'], correctIndex: 1, explanation: 'Discomfort when attitudes conflict with behavior.' },
      { id: 'q12-5', question: 'Fundamental attribution error:', options: ['Overestimate situation', 'Overestimate personality for others', 'Equal weighing', 'Self-blame'], correctIndex: 1, explanation: 'We overemphasize others\' traits.' },
      { id: 'q12-6', question: 'Stanford Prison Experiment by:', options: ['Milgram', 'Asch', 'Zimbardo', 'Bandura'], correctIndex: 2, explanation: 'Philip Zimbardo conducted it.' },
      { id: 'q12-7', question: 'Groupthink leads to:', options: ['Better decisions', 'Poor decisions from harmony desire', 'Creativity', 'Individuality'], correctIndex: 1, explanation: 'Consensus overrides realistic appraisal.' },
      { id: 'q12-8', question: 'Mere exposure effect:', options: ['Dislike familiar things', 'Repeated exposure increases liking', 'First impressions only', 'Advertising fails'], correctIndex: 1, explanation: 'Familiarity increases liking.' },
      { id: 'q12-9', question: 'Social loafing:', options: ['Working harder in groups', 'Less effort in groups', 'Leadership', 'Role confusion'], correctIndex: 1, explanation: 'People exert less effort in groups.' },
      { id: 'q12-10', question: 'Deindividuation:', options: ['More self-aware', 'Lose self-awareness in groups', 'Groups become cautious', 'Individuals lead'], correctIndex: 1, explanation: 'Loss of self-awareness in group situations.' }
    ]
  },
  {
    id: 'ch13-quiz', chapterId: 13, title: 'Stress and Coping \u2014 Quiz',
    questions: [
      { id: 'q13-1', question: 'GAS stages:', options: ['Start, middle, end', 'Alarm, resistance, exhaustion', 'Stress, cope, recover', 'Fight, flight, freeze'], correctIndex: 1, explanation: 'Alarm, resistance, exhaustion.' },
      { id: 'q13-2', question: 'Type A personality:', options: ['Relaxed', 'Competitive, urgent, hostile', 'Introverted', 'Low motivation'], correctIndex: 1, explanation: 'Type A: competitive and time-pressured.' },
      { id: 'q13-3', question: 'Problem-focused coping:', options: ['Managing emotions', 'Addressing the stressor directly', 'Avoiding', 'Denial'], correctIndex: 1, explanation: 'Directly tackling the problem.' },
      { id: 'q13-4', question: 'Immune system weakened by:', options: ['Exercise', 'Chronic stress', 'Good nutrition', 'Sleep'], correctIndex: 1, explanation: 'Chronic stress suppresses immunity.' },
      { id: 'q13-5', question: 'Burnout features:', options: ['High energy', 'Exhaustion and depersonalization', 'Physical injury', 'Productivity'], correctIndex: 1, explanation: 'Emotional exhaustion and cynicism.' },
      { id: 'q13-6', question: 'Social support helps by:', options: ['Eliminating stress', 'Providing emotional and practical help', 'Replacing medicine', 'Raising blood pressure'], correctIndex: 1, explanation: 'Providing emotional comfort and practical help.' },
      { id: 'q13-7', question: 'Cortisol comes from:', options: ['Thyroid', 'Adrenal glands', 'Pituitary', 'Pineal'], correctIndex: 1, explanation: 'Adrenal glands produce cortisol.' },
      { id: 'q13-8', question: 'Emotion-focused coping:', options: ['Making a plan', 'Relaxation and emotional support', 'Solving problem', 'Confronting'], correctIndex: 1, explanation: 'Managing emotional response to stress.' },
      { id: 'q13-9', question: 'Daily hassles vs. major events:', options: ['Only major events matter', 'Hassles can be equally harmful', 'Hassles irrelevant', 'Major events no impact'], correctIndex: 1, explanation: 'Accumulated hassles are very harmful.' },
      { id: 'q13-10', question: 'Resilience:', options: ['Avoiding all stress', 'Recovery after adversity', 'Physical toughness', 'No negative emotions'], correctIndex: 1, explanation: 'Capacity to recover and adapt.' }
    ]
  },
  {
    id: 'ch14-quiz', chapterId: 14, title: 'Psychological Disorders \u2014 Quiz',
    questions: [
      { id: 'q14-1', question: 'DSM-5 is:', options: ['Therapy technique', 'Diagnostic manual', 'Medication', 'Test'], correctIndex: 1, explanation: 'Standard classification for mental disorders.' },
      { id: 'q14-2', question: 'Major depression involves:', options: ['Brief sadness', 'Persistent depressed mood 2+ weeks', 'Constant happiness', 'Physical only'], correctIndex: 1, explanation: 'At least two weeks of depressed mood.' },
      { id: 'q14-3', question: 'Schizophrenia features:', options: ['Multiple personalities', 'Hallucinations and delusions', 'Extreme anxiety', 'Memory loss only'], correctIndex: 1, explanation: 'Hallucinations, delusions, disordered thinking.' },
      { id: 'q14-4', question: 'A phobia is:', options: ['Normal fear', 'Irrational excessive fear', 'Temporary anxiety', 'Mood disorder'], correctIndex: 1, explanation: 'Intense, irrational fears.' },
      { id: 'q14-5', question: 'Bipolar disorder:', options: ['Only depression', 'Alternating mania and depression', 'Constant mania', 'Anxiety'], correctIndex: 1, explanation: 'Alternating manic and depressive episodes.' },
      { id: 'q14-6', question: 'PTSD develops after:', options: ['Mild stress', 'Traumatic event', 'Normal bad day', 'Puberty'], correctIndex: 1, explanation: 'Following traumatic event exposure.' },
      { id: 'q14-7', question: 'Diathesis-stress model:', options: ['Only genetics', 'Only environment', 'Predisposition + stress', 'Random chance'], correctIndex: 2, explanation: 'Vulnerability interacts with stress.' },
      { id: 'q14-8', question: 'OCD involves:', options: ['Obsessions and compulsions', 'Only sadness', 'Social withdrawal', 'Memory loss'], correctIndex: 0, explanation: 'Intrusive thoughts and repetitive behaviors.' },
      { id: 'q14-9', question: 'GAD is:', options: ['Specific fears', 'Excessive worry about many things', 'Panic attacks only', 'Delusions'], correctIndex: 1, explanation: 'Chronic, excessive worry.' },
      { id: 'q14-10', question: 'Medical model views disorders as:', options: ['Moral failures', 'Biological diseases', 'Personal choices', 'Spiritual'], correctIndex: 1, explanation: 'Disorders as biological illnesses.' }
    ]
  },
  {
    id: 'ch15-quiz', chapterId: 15, title: 'Therapies \u2014 Quiz',
    questions: [
      { id: 'q15-1', question: 'CBT focuses on:', options: ['Dreams', 'Changing thoughts and behaviors', 'Free association', 'Medication'], correctIndex: 1, explanation: 'Restructuring negative thoughts and behaviors.' },
      { id: 'q15-2', question: 'Systematic desensitization treats:', options: ['Depression', 'Phobias via gradual exposure', 'Schizophrenia', 'ADHD'], correctIndex: 1, explanation: 'Gradual exposure paired with relaxation.' },
      { id: 'q15-3', question: 'Client-centered therapy by:', options: ['Freud', 'Skinner', 'Carl Rogers', 'Beck'], correctIndex: 2, explanation: 'Rogers created person-centered therapy.' },
      { id: 'q15-4', question: 'SSRIs increase:', options: ['Dopamine', 'Serotonin availability', 'All brain activity', 'Neuron death'], correctIndex: 1, explanation: 'SSRIs block serotonin reabsorption.' },
      { id: 'q15-5', question: 'Free association is used in:', options: ['CBT', 'Behavioral', 'Psychoanalysis', 'Group therapy'], correctIndex: 2, explanation: 'A psychoanalytic technique.' },
      { id: 'q15-6', question: 'Group therapy offers:', options: ['Lower cost only', 'Shared experiences and skills practice', 'Faster meds', 'Solitary healing'], correctIndex: 1, explanation: 'Peer support and social practice.' },
      { id: 'q15-7', question: 'Exposure therapy based on:', options: ['Psychoanalysis', 'Classical conditioning extinction', 'Humanism', 'Trait theory'], correctIndex: 1, explanation: 'Extinction of fear response.' },
      { id: 'q15-8', question: 'Lithium treats:', options: ['Depression', 'Anxiety', 'Bipolar disorder', 'Schizophrenia'], correctIndex: 2, explanation: 'First-line for bipolar disorder.' },
      { id: 'q15-9', question: 'Eclectic approach:', options: ['One method', 'Integrating various techniques', 'Rejecting evidence', 'Only medication'], correctIndex: 1, explanation: 'Combining different techniques.' },
      { id: 'q15-10', question: 'Therapy works best when:', options: ['One session', 'Strong therapeutic alliance', 'Client passive', 'No diagnosis'], correctIndex: 1, explanation: 'The relationship is the strongest predictor.' }
    ]
  }
];

export const PSYCHOLOGISTS: Psychologist[] = [
  { name: 'Sigmund Freud', years: '1856\u20131939', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg/220px-Sigmund_Freud%2C_by_Max_Halberstadt_%28cropped%29.jpg', nationality: 'Austrian', field: 'Psychoanalysis', contribution: 'Father of Psychoanalysis', details: 'Developed psychoanalytic theory, proposing that unconscious conflicts drive behavior. Introduced the id, ego, superego, defense mechanisms, dream analysis, and psychosexual stages.' },
  { name: 'B.F. Skinner', years: '1904\u20131990', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/B.F._Skinner_at_Harvard_circa_1950.jpg/220px-B.F._Skinner_at_Harvard_circa_1950.jpg', nationality: 'American', field: 'Behaviorism', contribution: 'Pioneer of Operant Conditioning', details: 'Developed operant conditioning theory. Invented the Skinner Box and introduced schedules of reinforcement.' },
  { name: 'Carl Rogers', years: '1902\u20131987', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Carl_Ransom_Rogers.jpg/220px-Carl_Ransom_Rogers.jpg', nationality: 'American', field: 'Humanistic Psychology', contribution: 'Founder of Client-Centered Therapy', details: 'Pioneered person-centered therapy. Emphasized unconditional positive regard, empathy, and congruence.' },
  { name: 'Jean Piaget', years: '1896\u20131980', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Jean_Piaget_in_Ann_Arbor.png/220px-Jean_Piaget_in_Ann_Arbor.png', nationality: 'Swiss', field: 'Developmental Psychology', contribution: 'Theory of Cognitive Development', details: 'Proposed four stages of cognitive development: sensorimotor, preoperational, concrete operational, and formal operational.' },
  { name: 'Ivan Pavlov', years: '1849\u20131936', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ivan_Pavlov_%28Nobel%29.png/220px-Ivan_Pavlov_%28Nobel%29.png', nationality: 'Russian', field: 'Behavioral Psychology', contribution: 'Discovery of Classical Conditioning', details: 'While studying digestion in dogs, discovered classical conditioning\u2014learning through association.' },
  { name: 'Abraham Maslow', years: '1908\u20131970', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg/220px-Photo_of_Abraham_Harold_Maslow_by_William_Carter_%28cropped%29.jpg', nationality: 'American', field: 'Humanistic Psychology', contribution: 'Hierarchy of Needs', details: 'Created the hierarchy of needs\u2014from basic physiological needs to self-actualization. Co-founded humanistic psychology.' },
  { name: 'Philip Zimbardo', years: '1933\u20132024', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg/220px-Philip_Zimbardo_at_his_APS_Keynote_Address_at_the_2007_APS_Convention.jpg', nationality: 'American', field: 'Social Psychology', contribution: 'Stanford Prison Experiment', details: 'Conducted the Stanford Prison Experiment (1971), demonstrating how social roles and situational forces influence behavior.' },
  { name: 'Albert Bandura', years: '1925\u20132021', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Albert_Bandura_in_his_Stanford_University_office_2005.jpg/220px-Albert_Bandura_in_his_Stanford_University_office_2005.jpg', nationality: 'Canadian-American', field: 'Social Learning', contribution: 'Social Learning Theory & Self-Efficacy', details: 'Demonstrated observational learning through Bobo doll experiment. Developed self-efficacy concept.' },
  { name: 'Elizabeth Loftus', years: '1944\u2013present', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Elizabeth_Loftus.jpg/220px-Elizabeth_Loftus.jpg', nationality: 'American', field: 'Cognitive Psychology', contribution: 'False Memory Research', details: 'Showed memories can be altered through suggestion and misinformation.' },
  { name: 'Stanley Milgram', years: '1933\u20131984', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Stanley_Milgram_1974.jpg/220px-Stanley_Milgram_1974.jpg', nationality: 'American', field: 'Social Psychology', contribution: 'Obedience Experiments', details: 'Showed ordinary people will follow authority figures even when asked to harm others.' },
  { name: 'Erik Erikson', years: '1902\u20131994', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Erik_Erikson.png/220px-Erik_Erikson.png', nationality: 'German-American', field: 'Developmental Psychology', contribution: 'Psychosocial Development Theory', details: 'Proposed eight stages of psychosocial development spanning the entire lifespan.' },
  { name: 'Carl Jung', years: '1875\u20131961', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/CGJung.jpg/220px-CGJung.jpg', nationality: 'Swiss', field: 'Analytical Psychology', contribution: 'Collective Unconscious & Archetypes', details: 'Proposed the collective unconscious, archetypes, introversion/extraversion, and individuation.' },
  { name: 'Lev Vygotsky', years: '1896\u20131934', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Lev_Vygotsky_1896-1934.jpg/220px-Lev_Vygotsky_1896-1934.jpg', nationality: 'Russian', field: 'Developmental Psychology', contribution: 'Zone of Proximal Development', details: 'Proposed learning is fundamentally social. His ZPD and scaffolding concepts transformed education.' },
  { name: 'Mary Ainsworth', years: '1913\u20131999', photo: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Mary_Ainsworth.jpg', nationality: 'Canadian-American', field: 'Developmental Psychology', contribution: 'Attachment Theory Research', details: 'Developed the Strange Situation experiment, identifying secure, avoidant, and anxious attachment styles.' },
  { name: 'Daniel Kahneman', years: '1934\u20132024', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Daniel_KAHNEMAN.jpg/220px-Daniel_KAHNEMAN.jpg', nationality: 'Israeli-American', field: 'Cognitive Psychology', contribution: 'Behavioral Economics & Thinking Biases', details: 'Nobel Prize winner. Demonstrated systematic biases. Wrote "Thinking, Fast and Slow."' },
  { name: 'Martin Seligman', years: '1942\u2013present', photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Martin_Seligman.jpg/220px-Martin_Seligman.jpg', nationality: 'American', field: 'Positive Psychology', contribution: 'Learned Helplessness & Positive Psychology', details: 'Discovered learned helplessness. Founded positive psychology. Developed PERMA model of flourishing.' }
];

export const FACTS: Fact[] = [
  { id: 1, text: 'Your brain uses about 20% of your body\'s total energy, despite being only 2% of your body weight.', textKa: '\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10E2\u10D5\u10D8\u10DC\u10D8 \u10E1\u10EE\u10D4\u10E3\u10DA\u10D8\u10E1 \u10DB\u10D7\u10DA\u10D8\u10D0\u10DC\u10D8 \u10D4\u10DC\u10D4\u10E0\u10D2\u10D8\u10D8\u10E1 20%-\u10E1 \u10DB\u10DD\u10D8\u10EE\u10DB\u10D0\u10E0\u10E1, \u10DB\u10D8\u10E3\u10EE\u10D4\u10D3\u10D0\u10D5\u10D0\u10D3 \u10D8\u10DB\u10D8\u10E1\u10D0, \u10E0\u10DD\u10DB \u10E1\u10EE\u10D4\u10E3\u10DA\u10D8\u10E1 \u10EC\u10DD\u10DC\u10D8\u10E1 \u10DB\u10EE\u10DD\u10DA\u10DD\u10D3 2%-\u10E1 \u10E8\u10D4\u10D0\u10D3\u10D2\u10D4\u10DC\u10E1.', source: 'Neuroscience', category: 'Brain', icon: 'fluent:brain-circuit-20-filled' },
  { id: 2, text: 'The average person has about 6,200 thoughts per day, according to a 2020 study.', textKa: '\u10E1\u10D0\u10E8\u10E3\u10D0\u10DA\u10DD \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10E1 \u10D3\u10E6\u10D4\u10E8\u10D8 \u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 6,200 \u10D0\u10D6\u10E0\u10D8 \u10D0\u10E5\u10D5\u10E1, 2020 \u10EC\u10DA\u10D8\u10E1 \u10D9\u10D5\u10DA\u10D4\u10D5\u10D8\u10E1 \u10DB\u10D8\u10EE\u10D4\u10D3\u10D5\u10D8\u10D7.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:head-lightbulb-outline' },
  { id: 3, text: 'Memories are distributed across networks of neurons, not stored in one place.', textKa: '\u10DB\u10DD\u10D2\u10DD\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8 \u10DC\u10D4\u10D8\u10E0\u10DD\u10DC\u10D4\u10D1\u10D8\u10E1 \u10E5\u10E1\u10D4\u10DA\u10D4\u10D1\u10E8\u10D8\u10D0 \u10D2\u10D0\u10DC\u10D0\u10EC\u10D8\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8, \u10D3\u10D0 \u10D0\u10E0\u10D0 \u10D4\u10E0\u10D7 \u10D0\u10D3\u10D2\u10D8\u10DA\u10D0\u10E1.', source: 'Memory Research', category: 'Memory', icon: 'mdi:memory' },
  { id: 4, text: 'The "doorway effect": Walking through a doorway makes you forget what you were thinking.', textKa: '"\u10D9\u10D0\u10E0\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8": \u10D9\u10D0\u10E0\u10E8\u10D8 \u10D2\u10D0\u10D5\u10DA\u10D0 \u10D2\u10D0\u10D2\u10D0\u10D5\u10D8\u10EC\u10E7\u10D4\u10D1\u10D8\u10DC\u10D4\u10D1\u10E1 \u10E0\u10D0\u10D6\u10D4 \u10E4\u10D8\u10E5\u10E0\u10DD\u10D1\u10D3\u10D8\u10D7.', source: 'Cognitive Psychology', category: 'Memory', icon: 'mdi:door-open' },
  { id: 5, text: 'We consciously process about 50 bits per second, despite senses receiving millions.', textKa: '\u10E8\u10D4\u10D2\u10DC\u10D4\u10D1\u10E3\u10DA\u10D0\u10D3 \u10EC\u10D0\u10DB\u10E8\u10D8 \u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 50 \u10D1\u10D8\u10E2\u10E1 \u10EC\u10D0\u10DB\u10E8\u10D8, \u10DB\u10D8\u10E3\u10EE\u10D4\u10D3\u10D0\u10D5\u10D0\u10D3 \u10D8\u10DB\u10D8\u10E1\u10D0, \u10E0\u10DD\u10DB \u10D2\u10E0\u10EB\u10DC\u10DD\u10D1\u10D4\u10D1\u10D8 \u10DB\u10D8\u10DA\u10D8\u10DD\u10DC\u10DD\u10D1\u10D8\u10D7 \u10D8\u10E6\u10D4\u10D1\u10E1.', source: 'Perception Research', category: 'Perception', icon: 'mdi:eye-settings-outline' },
  { id: 6, text: 'In Milgram\'s experiment, 65% administered what they believed were lethal shocks under authority.', textKa: '\u10DB\u10D8\u10DA\u10D2\u10E0\u10D0\u10DB\u10D8\u10E1 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10E8\u10D8 65%-\u10DB\u10D0 \u10DB\u10D8\u10E1\u10EA\u10D0 \u10E1\u10D0\u10E8\u10D8\u10E8\u10D8 \u10D4\u10DA\u10D4\u10E5\u10E2\u10E0\u10DD\u10E8\u10DD\u10D9\u10D8, \u10E0\u10DD\u10DB\u10D4\u10DA\u10D8\u10EA \u10E1\u10D0\u10E1\u10D8\u10D9\u10D5\u10D3\u10D8\u10DA\u10DD\u10D3 \u10DB\u10D8\u10D8\u10E9\u10DC\u10D8\u10D0.', source: 'Social Psychology', category: 'Social', icon: 'mdi:flash-alert-outline' },
  { id: 7, text: 'The placebo effect works even when people know they are taking a placebo.', textKa: '\u10DE\u10DA\u10D0\u10EA\u10D4\u10D1\u10DD\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8 \u10DB\u10E3\u10E8\u10D0\u10DD\u10D1\u10E1 \u10DB\u10D0\u10E8\u10D8\u10DC\u10D0\u10EA, \u10E0\u10DD\u10EA\u10D0 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10DB\u10D0 \u10D8\u10EA\u10D8\u10D0\u10DC, \u10E0\u10DD\u10DB \u10DE\u10DA\u10D0\u10EA\u10D4\u10D1\u10DD\u10E1 \u10D8\u10E6\u10D4\u10D1\u10D4\u10DC.', source: 'Health Psychology', category: 'Health', icon: 'mdi:pill' },
  { id: 8, text: 'Babies recognize their mother\'s voice from birth, having listened in the womb.', textKa: '\u10E9\u10D5\u10D8\u10DA\u10D4\u10D1\u10D8 \u10D3\u10D4\u10D3\u10D8\u10E1 \u10EE\u10DB\u10D0\u10E1 \u10D3\u10D0\u10D1\u10D0\u10D3\u10D4\u10D1\u10D8\u10D3\u10D0\u10DC \u10D0\u10DB\u10DD\u10D8\u10EA\u10DC\u10DD\u10D1\u10D4\u10DC, \u10E0\u10D0\u10D3\u10D2\u10D0\u10DC \u10E1\u10D0\u10E8\u10D5\u10D8\u10DA\u10DD\u10E1\u10DC\u10DD\u10E8\u10D8 \u10E3\u10E1\u10DB\u10D4\u10DC\u10D3\u10DC\u10D4\u10DC.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:baby-carriage' },
  { id: 9, text: 'Even forced smiling can improve your mood via the facial feedback hypothesis.', textKa: '\u10D8\u10EB\u10E3\u10DA\u10D4\u10D1\u10D8\u10D7\u10D8 \u10E6\u10D8\u10DB\u10D8\u10DA\u10D8\u10EA \u10D9\u10D8 \u10E8\u10D4\u10E3\u10EB\u10DA\u10D8\u10D0 \u10D2\u10D0\u10DC\u10EC\u10E7\u10DD\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E3\u10DB\u10EF\u10DD\u10D1\u10D4\u10E1\u10D4\u10D1\u10D0, \u10E1\u10D0\u10EE\u10D8\u10E1 \u10E3\u10D9\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D8 \u10D0\u10E0\u10E1\u10D4\u10D1\u10DD\u10D1\u10D8\u10E1 \u10F0\u10D8\u10DE\u10DD\u10D7\u10D4\u10D6\u10D8\u10E1 \u10DB\u10D8\u10EE\u10D4\u10D3\u10D5\u10D8\u10D7.', source: 'Emotion Research', category: 'Emotion', icon: 'mdi:emoticon-happy-outline' },
  { id: 10, text: 'Dunning-Kruger effect: People with low knowledge overestimate competence; experts underestimate.', textKa: '\u10D3\u10D0\u10DC\u10D8\u10DC\u10D2-\u10D9\u10E0\u10E3\u10D2\u10D4\u10E0\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8: \u10DB\u10EA\u10D8\u10E0\u10D4 \u10EA\u10DD\u10D3\u10DC\u10D8\u10E1 \u10DB\u10E5\u10DD\u10DC\u10D4 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8 \u10D2\u10D0\u10D3\u10D0\u10D0\u10ED\u10D0\u10E0\u10D1\u10D4\u10D1\u10D4\u10DC \u10D9\u10DD\u10DB\u10DE\u10D4\u10E2\u10D4\u10DC\u10EA\u10D8\u10D0\u10E1, \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10E2\u10D4\u10D1\u10D8 \u10D9\u10D8 \u10D0\u10DC\u10D0\u10EA\u10D5\u10D0\u10DA\u10D4\u10D1\u10D4\u10DC.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:chart-bell-curve-cumulative' },
  { id: 11, text: 'Your unconscious processes 11 million info pieces per second; conscious handles about 40.', textKa: '\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10E5\u10D5\u10D4\u10EA\u10DC\u10DD\u10D1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0 \u10EC\u10D0\u10DB\u10E8\u10D8 11 \u10DB\u10D8\u10DA\u10D8\u10DD\u10DC \u10D4\u10E0\u10D7\u10D4\u10E3\u10DA \u10D8\u10DC\u10E4\u10DD\u10E0\u10DB\u10D0\u10EA\u10D8\u10D0\u10E1 \u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10E1; \u10EA\u10DC\u10DD\u10D1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0 \u10DB\u10EE\u10DD\u10DA\u10DD\u10D3 40-\u10E1.', source: 'Cognitive Neuroscience', category: 'Brain', icon: 'mdi:head-sync-outline' },
  { id: 12, text: 'Missing one night of sleep can impair memory by up to 40%.', textKa: '\u10D4\u10E0\u10D7\u10D8 \u10E6\u10D0\u10DB\u10D8\u10E1 \u10EB\u10D8\u10DA\u10D8\u10E1 \u10D2\u10D0\u10DB\u10DD\u10E2\u10DD\u10D5\u10D4\u10D1\u10D0\u10DB \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0 40%-\u10DB\u10D3\u10D4 \u10D2\u10D0\u10D0\u10E3\u10D0\u10E0\u10D4\u10E1\u10DD\u10E1.', source: 'Sleep Research', category: 'Memory', icon: 'mdi:power-sleep' },
  { id: 13, text: 'Mirror neurons fire when you act AND when you watch others act\u2014the basis of empathy.', textKa: '\u10E1\u10D0\u10E0\u10D9\u10D8\u10E1 \u10DC\u10D4\u10D8\u10E0\u10DD\u10DC\u10D4\u10D1\u10D8 \u10D0\u10E5\u10E2\u10D8\u10E3\u10E0\u10D3\u10D4\u10D1\u10D0, \u10E0\u10DD\u10CA \u10DB\u10DD\u10E5\u10DB\u10D4\u10D3\u10D4\u10D1\u10D7 \u10D3\u10D0 \u10E0\u10DD\u10CA \u10E1\u10EE\u10D5\u10D4\u10D1\u10E1 \u10E3\u10E7\u10E3\u10E0\u10D4\u10D1\u10D7\u2014\u10D4\u10DB\u10DE\u10D0\u10D7\u10D8\u10D8\u10E1 \u10E1\u10D0\u10E4\u10E3\u10EB\u10D5\u10D4\u10DA\u10D8.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:mirror-variant' },
  { id: 14, text: 'The Stanford Prison Experiment was stopped after 6 days of a planned 2-week run.', textKa: '\u10E1\u10E2\u10D4\u10DC\u10E4\u10DD\u10E0\u10D3\u10D8\u10E1 \u10EA\u10D8\u10EE\u10D8\u10E1 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8 \u10D3\u10D0\u10D2\u10D4\u10D2\u10DB\u10D8\u10DA\u10D8 2 \u10D9\u10D5\u10D8\u10E0\u10D8\u10D3\u10D0\u10DC \u10DB\u10EE\u10DD\u10DA\u10DD\u10D3 6 \u10D3\u10E6\u10D4\u10E8\u10D8 \u10E8\u10D4\u10EC\u10E7\u10D3\u10D0.', source: 'Social Psychology', category: 'Social', icon: 'mdi:shield-alert-outline' },
  { id: 15, text: 'Fear of public speaking affects ~75% of people\u2014more common than fear of death.', textKa: '\u10E1\u10D0\u10EF\u10D0\u10E0\u10DD\u10D3 \u10D2\u10D0\u10DB\u10DD\u10E1\u10D5\u10DA\u10D8\u10E1 \u10E8\u10D8\u10E8\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8\u10E1 ~75%-\u10E1 \u10D0\u10EC\u10E3\u10EE\u10D4\u10D1\u10E1\u2014\u10D8\u10E1 \u10E1\u10D8\u10D9\u10D5\u10D3\u10D8\u10DA\u10D8\u10E1 \u10E8\u10D8\u10E8\u10D6\u10D4 \u10D2\u10D0\u10D5\u10E0\u10EA\u10D4\u10DA\u10D4\u10D1\u10E3\u10DA\u10D8\u10D0.', source: 'Clinical Psychology', category: 'Anxiety', icon: 'mdi:microphone-off' },
  { id: 16, text: 'Halo effect: Attractive people are rated as more intelligent, kind, and competent.', textKa: '\u10F0\u10D0\u10DA\u10DD\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8: \u10DB\u10D8\u10DB\u10D6\u10D8\u10D3\u10D5\u10D4\u10DA \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10E1 \u10E3\u10E4\u10E0\u10DD \u10D2\u10DD\u10DC\u10D8\u10D4\u10E0\u10D0\u10D3, \u10D9\u10D4\u10D7\u10D8\u10DA\u10D0\u10D3 \u10D3\u10D0 \u10D9\u10DD\u10DB\u10DE\u10D4\u10E2\u10D4\u10DC\u10E2\u10E3\u10E0\u10D0\u10D3 \u10D0\u10E4\u10D0\u10E1\u10D4\u10D1\u10D4\u10DC.', source: 'Social Psychology', category: 'Social', icon: 'mdi:star-circle-outline' },
  { id: 17, text: 'Oxytocin, released during hugging and bonding, promotes trust and empathy.', textKa: '\u10DD\u10E5\u10E1\u10D8\u10E2\u10DD\u10EA\u10D8\u10DC\u10D8, \u10E0\u10DD\u10DB\u10D4\u10DA\u10D8\u10EA \u10D2\u10D0\u10DB\u10DD\u10D8\u10E7\u10DD\u10E4\u10D0 \u10E9\u10D0\u10EE\u10E3\u10E2\u10D4\u10D1\u10D8\u10E1\u10D0\u10E1 \u10D3\u10D0 \u10DB\u10D8\u10D1\u10DB\u10D8\u10E1\u10D0\u10E1, \u10EE\u10D4\u10DA\u10E1 \u10E3\u10EC\u10E7\u10DD\u10D1\u10E1 \u10DC\u10D3\u10DD\u10D1\u10D0\u10E1\u10D0 \u10D3\u10D0 \u10D4\u10DB\u10DE\u10D0\u10D7\u10D8\u10D0\u10E1.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:heart-pulse' },
  { id: 18, text: 'It takes 1/10th of a second to form a first impression\u2014and they tend to be accurate.', textKa: '\u10DE\u10D8\u10E0\u10D5\u10D4\u10DA\u10D8 \u10E8\u10D7\u10D0\u10D1\u10D4\u10ED\u10D3\u10D8\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E9\u10D0\u10DB\u10DD\u10E7\u10D0\u10DA\u10D8\u10D1\u10D4\u10D1\u10D0\u10E1 \u10EC\u10D0\u10DB\u10D8\u10E1 1/10 \u10E1\u10ED\u10D8\u10E0\u10D3\u10D4\u10D1\u10D0\u2014\u10D3\u10D0 \u10D8\u10E1\u10D8\u10DC\u10D8 \u10EE\u10E8\u10D8\u10E0\u10D0\u10D3 \u10D6\u10E3\u10E1\u10E2\u10D8\u10D0.', source: 'Social Psychology', category: 'Social', icon: 'mdi:timer-outline' },
  { id: 19, text: 'Securely attached children have better relationships and self-esteem in adulthood.', textKa: '\u10E3\u10E1\u10D0\u10E4\u10E0\u10D7\u10EE\u10DD\u10D3 \u10DB\u10D8\u10D1\u10DB\u10E3\u10DA \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10E1 \u10DB\u10DD\u10D6\u10E0\u10D3\u10D8\u10DA\u10DD\u10D1\u10D0\u10E8\u10D8 \u10E3\u10D9\u10D4\u10D7\u10D4\u10E1\u10D8 \u10E3\u10E0\u10D7\u10D8\u10D4\u10E0\u10D7\u10DD\u10D1\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10D7\u10D5\u10D8\u10D7\u10E8\u10D4\u10E4\u10D0\u10E1\u10D4\u10D1\u10D0 \u10D0\u10E5\u10D5\u10D7.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:human-female-boy' },
  { id: 20, text: 'Zeigarnik effect: We remember uncompleted tasks better because they stay active in memory.', textKa: '\u10D6\u10D4\u10D8\u10D2\u10D0\u10E0\u10DC\u10D8\u10D9\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8: \u10D3\u10D0\u10E3\u10E1\u10E0\u10E3\u10DA\u10D4\u10D1\u10D4\u10DA \u10D3\u10D0\u10D5\u10D0\u10DA\u10D4\u10D1\u10D4\u10D1\u10E1 \u10E3\u10D9\u10D4\u10D7 \u10D5\u10D8\u10DB\u10D0\u10EE\u10E1\u10DD\u10D5\u10E0\u10D4\u10D1\u10D7, \u10E0\u10D0\u10D3\u10D2\u10D0\u10DC \u10D8\u10E1\u10D8\u10DC\u10D8 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0\u10E8\u10D8 \u10D0\u10E5\u10E2\u10D8\u10E3\u10E0\u10D8 \u10E0\u10E9\u10D4\u10D1\u10D0.', source: 'Cognitive Psychology', category: 'Memory', icon: 'mdi:checkbox-blank-circle-outline' },
  { id: 21, text: 'Synesthesia causes some people to see colors when hearing music or associate numbers with colors.', textKa: '\u10E1\u10D8\u10DC\u10D4\u10E1\u10D7\u10D4\u10D6\u10D8\u10D0 \u10D6\u10DD\u10D2\u10D8\u10D4\u10E0\u10D7 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10E1 \u10D0\u10EF\u10D4\u10DC\u10E1 \u10E4\u10D4\u10E0\u10D4\u10D1\u10E1 \u10D3\u10D0\u10D8\u10DC\u10D0\u10EE\u10DD\u10E1 \u10DB\u10E3\u10E1\u10D8\u10D9\u10D8\u10E1 \u10DB\u10DD\u10E1\u10DB\u10D4\u10DC\u10D8\u10E1\u10D0\u10E1 \u10D0\u10DC \u10E0\u10D8\u10EA\u10EE\u10D5\u10D4\u10D1\u10D8 \u10E4\u10D4\u10E0\u10D4\u10D1\u10D7\u10D0\u10DC \u10D3\u10D0\u10D0\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10DD\u10E1.', source: 'Perception Research', category: 'Perception', icon: 'mdi:palette-outline' },
  { id: 22, text: 'The brain can\'t feel pain\u2014brain surgery can be performed while the patient is awake.', textKa: '\u10E2\u10D5\u10D8\u10DC\u10E1 \u10E2\u10D9\u10D8\u10D5\u10D8\u10DA\u10D8\u10E1 \u10E8\u10D4\u10D2\u10E0\u10EB\u10DC\u10D4\u10D1\u10D0 \u10D0\u10E0 \u10E8\u10D4\u10E3\u10EB\u10DA\u10D8\u10D0\u2014\u10E2\u10D5\u10D8\u10DC\u10D8\u10E1 \u10DD\u10DE\u10D4\u10E0\u10D0\u10EA\u10D8\u10D0 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10DE\u10D0\u10EA\u10D8\u10D4\u10DC\u10E2\u10D8\u10E1 \u10E4\u10EE\u10D8\u10D6\u10D4\u10DA\u10DD\u10D1\u10D8\u10E1\u10D0\u10E1.', source: 'Neuroscience', category: 'Brain', icon: 'fluent:brain-circuit-20-filled' },
  { id: 23, text: 'Humans can detect over 1 trillion distinct smells, far more than previously thought.', textKa: '\u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10E1 \u10E8\u10D4\u10E3\u10EB\u10DA\u10D8\u10D0 1 \u10E2\u10E0\u10D8\u10DA\u10D8\u10DD\u10DC\u10D6\u10D4 \u10DB\u10D4\u10E2\u10D8 \u10D2\u10D0\u10DC\u10E1\u10EE\u10D5\u10D0\u10D5\u10D4\u10D1\u10E3\u10DA\u10D8 \u10E1\u10E3\u10DC\u10D8\u10E1 \u10D0\u10DB\u10DD\u10EA\u10DC\u10DD\u10D1\u10D0, \u10D2\u10D0\u10EA\u10D8\u10DA\u10D4\u10D1\u10D8\u10D7 \u10DB\u10D4\u10E2\u10D8 \u10D5\u10D8\u10D3\u10E0\u10D4 \u10D5\u10D8\u10D3\u10E0\u10D4 \u10E4\u10D8\u10E5\u10E0\u10DD\u10D1\u10D3\u10DC\u10D4\u10DC.', source: 'Perception Research', category: 'Perception', icon: 'mdi:scent' },
  { id: 24, text: 'Cognitive Behavioral Therapy (CBT) is as effective as medication for many anxiety disorders.', textKa: '\u10D9\u10DD\u10D2\u10DC\u10D8\u10E2\u10E3\u10E0\u10D8-\u10D1\u10D8\u10F0\u10D4\u10D5\u10D8\u10DD\u10E0\u10D0\u10DA\u10E3\u10E0\u10D8 \u10D7\u10D4\u10E0\u10D0\u10DE\u10D8\u10D0 (CBT) \u10D8\u10E1\u10D4\u10D5\u10D4 \u10D4\u10E4\u10D4\u10E5\u10E2\u10E3\u10E0\u10D8\u10D0 \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10DB\u10D4\u10D3\u10D8\u10D9\u10D0\u10DB\u10D4\u10DC\u10E2\u10D4\u10D1\u10D8, \u10D1\u10D4\u10D5\u10E0\u10D8 \u10E8\u10E4\u10DD\u10D7\u10D5\u10D8\u10D7\u10D8 \u10D0\u10E8\u10DA\u10D8\u10DA\u10DD\u10D1\u10D8\u10E1 \u10DB\u10D9\u10E3\u10E0\u10DC\u10D0\u10DA\u10DD\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1.', source: 'Clinical Psychology', category: 'Health', icon: 'mdi:head-heart-outline' },
  { id: 25, text: 'Children learn language at an extraordinary rate\u2014about 10 new words per day between ages 2 and 6.', textKa: '\u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10D8 \u10D4\u10DC\u10D0\u10E1 \u10D0\u10E0\u10D0\u10E9\u10D5\u10D4\u10E3\u10DA\u10D4\u10D1\u10E0\u10D8\u10D5\u10D8 \u10E2\u10D4\u10DB\u10DE\u10D8\u10D7 \u10E1\u10EC\u10D0\u10D5\u10DA\u10DD\u10D1\u10D4\u10DC\u2014\u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 10 \u10D0\u10EE\u10D0\u10DA \u10E1\u10D8\u10E2\u10E7\u10D5\u10D0\u10E1 \u10D3\u10E6\u10D4\u10E8\u10D8 2-\u10D3\u10D0\u10DC 6 \u10EC\u10DA\u10D0\u10DB\u10D3\u10D4.', source: 'Developmental Psychology', category: 'Development', icon: 'mdi:message-text-outline' },
  { id: 26, text: 'Stockholm syndrome: Hostages may develop emotional bonds with their captors as a survival mechanism.', textKa: '\u10E1\u10E2\u10DD\u10D9\u10F0\u10DD\u10DA\u10DB\u10D8\u10E1 \u10E1\u10D8\u10DC\u10D3\u10E0\u10DD\u10DB\u10D8: \u10DB\u10EB\u10D4\u10D5\u10DA\u10D4\u10D1\u10DB\u10D0 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10D4\u10DB\u10DD\u10EA\u10D8\u10E3\u10E0\u10D8 \u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D8 \u10D2\u10D0\u10DC\u10D0\u10D5\u10D8\u10D7\u10D0\u10E0\u10DD\u10DC \u10D2\u10D0\u10DB\u10E2\u10D0\u10EA\u10D4\u10D1\u10D4\u10DA\u10D7\u10D0\u10DC, \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10D2\u10D0\u10D3\u10D0\u10E0\u10E9\u10D4\u10DC\u10D8\u10E1 \u10DB\u10D4\u10E5\u10D0\u10DC\u10D8\u10D6\u10DB\u10D8.', source: 'Clinical Psychology', category: 'Social', icon: 'mdi:link-variant' },
  { id: 27, text: 'Your brain generates about 12-25 watts of electricity\u2014enough to power a low-wattage LED bulb.', textKa: '\u10D7\u10E5\u10D5\u10D4\u10DC\u10D8 \u10E2\u10D5\u10D8\u10DC\u10D8 \u10D2\u10D0\u10DB\u10DD\u10D8\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10E1 \u10D3\u10D0\u10D0\u10EE\u10DA\u10DD\u10D4\u10D1\u10D8\u10D7 12-25 \u10D5\u10D0\u10E2 \u10D4\u10DA\u10D4\u10E5\u10E2\u10E0\u10DD\u10DD\u10D1\u10D0\u10E1\u2014\u10E1\u10D0\u10D9\u10DB\u10D0\u10E0\u10D8\u10E1\u10D8 LED \u10DC\u10D0\u10D7\u10E3\u10E0\u10D8\u10E1 \u10D2\u10D0\u10E1\u10D0\u10DC\u10D0\u10D7\u10D4\u10D1\u10DA\u10D0\u10D3.', source: 'Neuroscience', category: 'Brain', icon: 'mdi:lightbulb-on-outline' },
  { id: 28, text: 'Multitasking reduces productivity by up to 40%\u2014your brain rapidly switches, not truly parallel-processes.', textKa: '\u10DB\u10E3\u10DA\u10E2\u10D8\u10E2\u10D0\u10E1\u10D9\u10D8\u10DC\u10D2\u10D8 \u10DE\u10E0\u10DD\u10D3\u10E3\u10E5\u10E2\u10D8\u10E3\u10DA\u10DD\u10D1\u10D0\u10E1 40%-\u10D8\u10D7 \u10D0\u10DB\u10EA\u10D8\u10E0\u10D4\u10D1\u10E1\u2014\u10E2\u10D5\u10D8\u10DC\u10D8 \u10E1\u10EC\u10E0\u10D0\u10E4\u10D0\u10D3 \u10D2\u10D0\u10D3\u10D0\u10E0\u10D7\u10D0\u10D5\u10E1, \u10D3\u10D0 \u10D0\u10E0 \u10DE\u10D0\u10E0\u10D0\u10DA\u10D4\u10DA\u10E3\u10E0\u10D0\u10D3 \u10D0\u10DB\u10E3\u10E8\u10D0\u10D5\u10D4\u10D1\u10E1.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:swap-horizontal-circle-outline' },
  { id: 29, text: 'Laughter is 30 times more likely in social situations than when alone\u2014it\'s primarily social.', textKa: '\u10E1\u10D8\u10EA\u10D8\u10DA\u10D8 30-\u10EF\u10D4\u10E0 \u10E3\u10E4\u10E0\u10DD \u10EE\u10E8\u10D8\u10E0\u10D8\u10D0 \u10E1\u10DD\u10EA\u10D8\u10D0\u10DA\u10E3\u10E0 \u10E1\u10D8\u10E2\u10E3\u10D0\u10EA\u10D8\u10D4\u10D1\u10E8\u10D8 \u10D5\u10D8\u10D3\u10E0\u10D4 \u10DB\u10D0\u10E0\u10E2\u10DD\u10DD\u10D1\u10D8\u10E1\u10D0\u10E1\u2014\u10D8\u10E1 \u10E3\u10DE\u10D8\u10E0\u10D5\u10D4\u10DA\u10D4\u10E1\u10D0\u10D3 \u10E1\u10DD\u10EA\u10D8\u10D0\u10DA\u10E3\u10E0\u10D8 \u10E4\u10D4\u10DC\u10DD\u10DB\u10D4\u10DC\u10D8\u10D0.', source: 'Social Psychology', category: 'Emotion', icon: 'mdi:emoticon-lol-outline' },
  { id: 30, text: 'The serial position effect: We best remember the first and last items in a list.', textKa: '\u10E1\u10D4\u10E0\u10D8\u10E3\u10DA\u10D8 \u10DE\u10DD\u10D6\u10D8\u10EA\u10D8\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8: \u10E1\u10D8\u10D8\u10E1 \u10DE\u10D8\u10E0\u10D5\u10D4\u10DA \u10D3\u10D0 \u10D1\u10DD\u10DA\u10DD \u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D4\u10D1\u10E1 \u10E1\u10D0\u10E3\u10D9\u10D4\u10D7\u10D4\u10E1\u10DD\u10D3 \u10D5\u10D8\u10DB\u10D0\u10EE\u10E1\u10DD\u10D5\u10E0\u10D4\u10D1\u10D7.', source: 'Memory Research', category: 'Memory', icon: 'mdi:format-list-numbered' },
  { id: 31, text: 'Bilingual people may delay the onset of dementia by an average of 4-5 years.', textKa: '\u10DD\u10E0\u10D4\u10DC\u10DD\u10D5\u10D0\u10DC\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8 \u10D3\u10D4\u10DB\u10D4\u10DC\u10EA\u10D8\u10D8\u10E1 \u10D3\u10D0\u10EC\u10E7\u10D4\u10D1\u10D0\u10E1 \u10E1\u10D0\u10E8\u10E3\u10D0\u10DA\u10DD\u10D3 4-5 \u10EC\u10DA\u10D8\u10D7 \u10D0\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10D4\u10DC.', source: 'Cognitive Neuroscience', category: 'Brain', icon: 'mdi:translate' },
  { id: 32, text: 'Emotional memories are stored more vividly because the amygdala strengthens the memory trace.', textKa: '\u10D4\u10DB\u10DD\u10EA\u10D8\u10E3\u10E0\u10D8 \u10DB\u10DD\u10D2\u10DD\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8 \u10E3\u10E4\u10E0\u10DD \u10DC\u10D0\u10D7\u10DA\u10D0\u10D3 \u10D8\u10DC\u10D0\u10EE\u10D4\u10D1\u10D0, \u10E0\u10D0\u10D3\u10D2\u10D0\u10DC \u10D0\u10DB\u10D8\u10D2\u10D3\u10D0\u10DA\u10D0 \u10D0\u10EB\u10DA\u10D8\u10D4\u10E0\u10D4\u10D1\u10E1 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D9\u10D5\u10D0\u10DA\u10E1.', source: 'Memory Research', category: 'Memory', icon: 'mdi:heart-flash' },
  { id: 33, text: 'Sleep deprivation for just 17 hours impairs cognitive function as much as a blood alcohol level of 0.05%.', textKa: '17 \u10E1\u10D0\u10D0\u10D7\u10D8\u10D0\u10DC\u10D8 \u10EB\u10D8\u10DA\u10D8\u10E1 \u10D3\u10D4\u10E4\u10D8\u10EA\u10D8\u10E2\u10D8 \u10D9\u10DD\u10D2\u10DC\u10D8\u10E2\u10E3\u10E0 \u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0\u10E1 \u10D8\u10E1\u10D4 \u10D0\u10E3\u10D0\u10E0\u10D4\u10E1\u10D4\u10D1\u10E1, \u10E0\u10DD\u10D2\u10DD\u10E0\u10EA \u10E1\u10D8\u10E1\u10EE\u10DA\u10E8\u10D8 \u10D0\u10DA\u10D9\u10DD\u10F0\u10DD\u10DA\u10D8\u10E1 \u10D3\u10DD\u10DC\u10D4 0.05%.', source: 'Sleep Research', category: 'Health', icon: 'mdi:weather-night' },
  { id: 34, text: 'Phobias can be inherited\u2014studies show fear responses can be passed through epigenetic changes.', textKa: '\u10E4\u10DD\u10D1\u10D8\u10D4\u10D1\u10D8 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10DB\u10D4\u10DB\u10D9\u10D5\u10D8\u10D3\u10E0\u10D4\u10DD\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10D8\u10EA\u10D4\u10E1\u2014\u10D9\u10D5\u10DA\u10D4\u10D5\u10D4\u10D1\u10D8 \u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10E1, \u10E0\u10DD\u10DB \u10E8\u10D8\u10E8\u10D8\u10E1 \u10E0\u10D4\u10D0\u10E5\u10EA\u10D8\u10D4\u10D1\u10D8 \u10D4\u10DE\u10D8\u10D2\u10D4\u10DC\u10D4\u10E2\u10D8\u10D9\u10E3\u10E0\u10D8 \u10EA\u10D5\u10DA\u10D8\u10DA\u10D4\u10D1\u10D4\u10D1\u10D8\u10D7 \u10D2\u10D0\u10D3\u10D0\u10D4\u10EA\u10D4\u10DB\u10D0.', source: 'Biological Psychology', category: 'Anxiety', icon: 'mdi:spider-thread' },
  { id: 35, text: 'The peak-end rule: We judge experiences mainly by their most intense moment and their ending.', textKa: '\u10DE\u10D8\u10D9\u10D8\u10E1\u10D0 \u10D3\u10D0 \u10D3\u10D0\u10E1\u10D0\u10E1\u10E0\u10E3\u10DA\u10D8\u10E1 \u10EC\u10D4\u10E1\u10D8: \u10D2\u10D0\u10DB\u10DD\u10EA\u10D3\u10D8\u10DA\u10D4\u10D1\u10D4\u10D1\u10E1 \u10D5\u10D0\u10E4\u10D0\u10E1\u10D4\u10D1\u10D7 \u10EB\u10D8\u10E0\u10D8\u10D7\u10D0\u10D3\u10D0\u10D3 \u10DB\u10D0\u10D7\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10D8\u10DC\u10E2\u10D4\u10DC\u10E1\u10D8\u10E3\u10E0\u10D8 \u10DB\u10DD\u10DB\u10D4\u10DC\u10E2\u10D8\u10D7\u10D0 \u10D3\u10D0 \u10D3\u10D0\u10E1\u10D0\u10E1\u10E0\u10E3\u10DA\u10D8\u10D7.', source: 'Cognitive Psychology', category: 'Thinking', icon: 'mdi:chart-timeline-variant-shimmer' }
]

export const STORIES: Story[] = [
  {
    id: 1,
    title: 'Pavlov\'s Accidental Discovery',
    titleKa: '\u10DE\u10D0\u10D5\u10DA\u10DD\u10D5\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D8\u10D7\u10D8 \u10D0\u10E6\u10DB\u10DD\u10E9\u10D4\u10DC\u10D0',
    chapterId: 6,
    icon: 'mdi:bell-ring-outline',
    content: 'In the 1890s, Russian physiologist Ivan Pavlov was conducting research on the digestive systems of dogs at the Institute of Experimental Medicine in St. Petersburg. His work was meticulous\u2014he had surgically implanted tubes in dogs\' cheeks to precisely measure saliva output when food was presented.\n\nBut something unexpected kept disrupting his carefully controlled experiments. The dogs began salivating before any food appeared. They drooled when they heard the footsteps of the lab assistant. They salivated at the sight of the food bowl, or even when they heard the door open.\n\nRather than dismissing this as a nuisance, Pavlov recognized he had stumbled upon something extraordinary. He called these premature responses "psychic secretions" and redesigned his entire research program to study them.\n\nPavlov began systematically pairing a neutral stimulus\u2014a metronome (often misremembered as a bell)\u2014with the presentation of food. After repeated pairings, the dogs would salivate at the sound of the metronome alone, with no food in sight.\n\nHe documented the entire process with scientific rigor: acquisition (learning the association), extinction (unlearning it when food stops coming), spontaneous recovery (the response returning after a rest period), and generalization (responding to similar sounds).\n\nThis accidental discovery became the foundation of classical conditioning and earned Pavlov the Nobel Prize in Physiology in 1904. His work influenced generations of psychologists, from John Watson to modern neuroscientists studying how the brain forms associations.',
    contentKa: '1890-\u10D8\u10D0\u10DC \u10EC\u10DA\u10D4\u10D1\u10E8\u10D8, \u10E0\u10E3\u10E1\u10D8 \u10E4\u10D8\u10D6\u10D8\u10DD\u10DA\u10DD\u10D2\u10D8 \u10D8\u10D5\u10D0\u10DC \u10DE\u10D0\u10D5\u10DA\u10DD\u10D5\u10D8 \u10EB\u10D0\u10E6\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E1\u10D0\u10ED\u10DB\u10DA\u10D8\u10E1 \u10E1\u10D8\u10E1\u10E2\u10D4\u10DB\u10D0\u10E1 \u10D8\u10D9\u10D5\u10DA\u10D4\u10D5\u10D3\u10D0 \u10E1\u10D0\u10DC\u10D9\u10E2-\u10DE\u10D4\u10E2\u10D4\u10E0\u10D1\u10E3\u10E0\u10D2\u10E8\u10D8. \u10DB\u10D0\u10DC \u10E8\u10D4\u10DC\u10D8\u10E8\u10DC\u10D0, \u10E0\u10DD\u10DB \u10EB\u10D0\u10E6\u10DA\u10D4\u10D1\u10D8 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10E1 \u10D3\u10D0\u10D8\u10EC\u10E7\u10D4\u10D1\u10D3\u10DC\u10D4\u10DC \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4\u10CA \u2014 \u10DA\u10D0\u10D1\u10DD\u10E0\u10D0\u10DC\u10E2\u10D8\u10E1 \u10DC\u10D0\u10D1\u10D8\u10EF\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10D2\u10DD\u10DC\u10D8\u10E1\u10D0\u10E1. \u10DE\u10D0\u10D5\u10DA\u10DD\u10D5\u10DB\u10D0 \u10D0\u10DB\u10D0\u10E8\u10D8 \u10DB\u10D4\u10E2\u10E0\u10DD\u10DC\u10DD\u10DB\u10D8\u10E1 \u10EE\u10DB\u10D0 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10E1 \u10D3\u10D0\u10E3\u10D9\u10D0\u10D5\u10E8\u10D8\u10E0\u10D0 \u10D3\u10D0 \u10D0\u10E6\u10DB\u10DD\u10D0\u10E9\u10D8\u10DC\u10D0 \u10D9\u10DA\u10D0\u10E1\u10D8\u10D9\u10E3\u10E0\u10D8 \u10D2\u10D0\u10DC\u10DE\u10D8\u10E0\u10DD\u10D1\u10D4\u10D1\u10D0.',
    moral: 'Great discoveries emerge when curious minds pay attention to the unexpected. Pavlov could have ignored the dogs\' early salivation, but instead he asked "why?" and changed psychology forever.',
    moralKa: '\u10D3\u10D8\u10D3\u10D8 \u10D0\u10E6\u10DB\u10DD\u10E9\u10D4\u10DC\u10D4\u10D1\u10D8 \u10D8\u10D1\u10D0\u10D3\u10D4\u10D1\u10D0, \u10E0\u10DD\u10CA \u10EA\u10DC\u10DD\u10D1\u10D8\u10E1\u10DB\u10DD\u10E7\u10D5\u10D0\u10E0\u10D4 \u10D2\u10DD\u10DC\u10D4\u10D1\u10D0 \u10E7\u10E3\u10E0\u10D0\u10D3\u10E6\u10D4\u10D1\u10D0\u10E1 \u10DB\u10DD\u10E3\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10E1 \u10DB\u10D8\u10D0\u10E5\u10EA\u10D4\u10D5\u10E1.'
  },
  {
    id: 2,
    title: 'The Story of Phineas Gage',
    titleKa: '\u10E4\u10D8\u10DC\u10D4\u10D0\u10E1 \u10D2\u10D4\u10D8\u10EF\u10D8\u10E1 \u10D8\u10E1\u10E2\u10DD\u10E0\u10D8\u10D0',
    chapterId: 3,
    icon: 'fluent:brain-circuit-20-filled',
    content: 'On September 13, 1848, 25-year-old Phineas Gage was working as a railroad construction foreman in Cavendish, Vermont. His crew was blasting rock to clear a path for new rail tracks. Gage\'s job was to pack explosive powder into drilled holes using a specially made iron tamping rod\u201443 inches long, 1.25 inches in diameter, and weighing over 13 pounds.\n\nIn a moment of distraction\u2014perhaps he turned to speak to a colleague\u2014Gage struck the iron rod against the rock before sand had been poured as a buffer. The powder ignited. The explosion launched the iron rod like a missile straight through his skull, entering below his left cheekbone and exiting through the top of his head, landing 80 feet away.\n\nAstonishingly, Gage did not die. He was conscious within minutes, able to walk and talk. The local physician, Dr. John Harlow, treated the gruesome wound. Gage physically recovered over the following months, but something fundamental had changed.\n\nBefore the accident, Gage was described as reliable, well-balanced, and a shrewd businessman\u2014"the most efficient and capable foreman." Afterward, his personality was unrecognizable. He became profane, impulsive, disrespectful, and unable to follow through on plans. Friends said he was "no longer Gage."\n\nHis case became one of the most important in neuroscience history. It provided the first strong evidence that specific brain regions\u2014particularly the prefrontal cortex\u2014are responsible for personality, decision-making, and social behavior. Modern neuroimaging has confirmed the rod destroyed much of his left frontal lobe, especially areas involved in emotional regulation and planning.',
    contentKa: '1848 \u10EC\u10D4\u10DA\u10E1, \u10E4\u10D8\u10DC\u10D4\u10D0\u10E1 \u10D2\u10D4\u10D8\u10EF\u10D8 \u10E0\u10D9\u10D8\u10DC\u10D8\u10D2\u10D6\u10D8\u10E1 \u10DB\u10E8\u10D4\u10DC\u10D4\u10D1\u10DA\u10DD\u10D1\u10D8\u10E1 \u10DD\u10E1\u10E2\u10D0\u10E2\u10D8 \u10D8\u10E7\u10DD. \u10D0\u10E4\u10D4\u10D7\u10E5\u10D4\u10D1\u10D8\u10E1\u10D0\u10E1 \u10E0\u10D9\u10D8\u10DC\u10D8\u10E1 \u10E6\u10D4\u10E0\u10EB\u10D8 \u10DB\u10D8\u10E1 \u10D7\u10D0\u10D5\u10D8\u10E1 \u10E5\u10D0\u10DA\u10D0\u10E8\u10D8 \u10E8\u10D4\u10D5\u10D8\u10D3\u10D0 \u10D3\u10D0 \u10D7\u10D0\u10D5\u10D8\u10E1 \u10D6\u10D4\u10DB\u10DD\u10D3\u10D0\u10DC \u10D2\u10D0\u10DB\u10DD\u10D5\u10D8\u10D3\u10D0. \u10D2\u10D4\u10D8\u10EF\u10D8 \u10D2\u10D0\u10D3\u10D0\u10E0\u10E9\u10D0, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10DB\u10D8\u10E1\u10D8 \u10DE\u10D8\u10E0\u10DD\u10D5\u10DC\u10D4\u10D1\u10D0 \u10E1\u10E0\u10E3\u10DA\u10D8\u10D0\u10D3 \u10E8\u10D4\u10D8\u10EA\u10D5\u10D0\u10DA\u10D0. \u10D4\u10E1 \u10E8\u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D0 \u10DC\u10D4\u10D8\u10E0\u10DD\u10DB\u10D4\u10EA\u10DC\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D8\u10E1\u10E2\u10DD\u10E0\u10D8\u10D0\u10E8\u10D8 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D5\u10D0\u10DC\u10D8 \u10D2\u10D0\u10EE\u10D3\u10D0.',
    moral: 'The brain is the seat of personality\u2014damage to specific areas transforms who we are. Gage\'s case taught us that our sense of self is rooted in biology.',
    moralKa: '\u10E2\u10D5\u10D8\u10DC\u10D8 \u10DE\u10D8\u10E0\u10DD\u10D5\u10DC\u10D4\u10D1\u10D8\u10E1 \u10E1\u10D0\u10D3\u10D2\u10E3\u10E0\u10D8\u10D0\u2014\u10D9\u10DD\u10DC\u10D9\u10E0\u10D4\u10E2\u10E3\u10DA\u10D8 \u10E3\u10D1\u10DC\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10D6\u10D8\u10D0\u10DC\u10D4\u10D1\u10D0 \u10D2\u10D5\u10D0\u10E5\u10CA\u10D4\u10D5\u10E1 \u10E1\u10EE\u10D5\u10D0 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D4\u10D1\u10D0\u10D3.'
  },
  {
    id: 3,
    title: 'Little Albert and the White Rat',
    titleKa: '\u10DE\u10D0\u10E2\u10D0\u10E0\u10D0 \u10D0\u10DA\u10D1\u10D4\u10E0\u10E2\u10D8 \u10D3\u10D0 \u10D7\u10D4\u10D7\u10E0\u10D8 \u10D5\u10D8\u10E0\u10D7\u10EE\u10D0',
    chapterId: 6,
    icon: 'mdi:emoticon-cry-outline',
    content: 'In 1920, John B. Watson and Rosalie Rayner conducted one of psychology\'s most controversial experiments at Johns Hopkins University. Their subject was a 9-month-old infant known as "Little Albert."\n\nAlbert was described as a healthy, stable baby who showed no fear of animals. Watson and Rayner presented him with a white laboratory rat, and Albert reached for it with curiosity and delight. He showed the same calm response to a rabbit, a dog, a monkey, masks, and even burning newspapers.\n\nThen the conditioning began. Each time Albert reached for the white rat, Watson struck a steel bar with a hammer directly behind the infant\'s head, producing a terrifying noise. Albert burst into tears.\n\nAfter just seven pairings of the rat with the loud noise, Albert\'s behavior had fundamentally changed. Now, the mere sight of the white rat\u2014without any noise\u2014caused him to cry, crawl away rapidly, and show visible distress.\n\nMore remarkably, his fear generalized. Albert became afraid of a rabbit, a dog, a fur coat, a Santa Claus mask with a white beard, and even cotton wool. Anything white and furry triggered the same terror.\n\nWatson and Rayner never "unconditioned" Albert\'s fear. The experiment was stopped when Albert\'s mother, a wet nurse at the hospital, left with her child. Albert\'s true identity remained a mystery for decades. Recent research suggests he was Douglas Merritte, who sadly died of hydrocephalus at age six.\n\nThe experiment proved that emotional responses can be learned through classical conditioning. But it also raised profound ethical questions that eventually led to strict research protections for human subjects.',
    contentKa: '1920 \u10EC\u10D4\u10DA\u10E1, \u10EF\u10DD\u10DC \u10E3\u10DD\u10E2\u10E1\u10DD\u10DC\u10DB\u10D0 \u10D3\u10D0 \u10E0\u10DD\u10D6\u10D0\u10DA\u10D8 \u10E0\u10D4\u10D8\u10DC\u10D4\u10E0\u10DB\u10D0 \u10E9\u10D0\u10D0\u10E2\u10D0\u10E0\u10D4\u10E1 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10E1\u10D0\u10D9\u10D0\u10DB\u10D0\u10D7\u10DD \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8. \u10DB\u10D0\u10D7 9 \u10D7\u10D5\u10D8\u10E1 \u10E9\u10D5\u10D8\u10DA\u10E1 \u10D7\u10D4\u10D7\u10E0\u10D8 \u10D5\u10D8\u10E0\u10D7\u10EE\u10D0 \u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10E1 \u10EE\u10DB\u10D0\u10DB\u10D0\u10E3\u10DA \u10E1\u10D0\u10E8\u10D8\u10DC\u10D4\u10DA \u10EE\u10DB\u10D0\u10E1\u10D7\u10D0\u10DC \u10D4\u10E0\u10D7\u10D0\u10D3. 7 \u10D3\u10D0\u10EC\u10E7\u10D5\u10D8\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2, \u10D0\u10DA\u10D1\u10D4\u10E0\u10E2\u10D8 \u10D5\u10D8\u10E0\u10D7\u10EE\u10D0\u10E1 \u10EE\u10D4\u10D3\u10D0\u10D5\u10D3\u10D0 \u10EE\u10DB\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4\u10CA. \u10D4\u10E1 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8 \u10D0\u10DB\u10E2\u10D9\u10D8\u10EA\u10D4\u10D1\u10D3\u10D0, \u10E0\u10DD\u10DB \u10D4\u10DB\u10DD\u10EA\u10D8\u10D4\u10D1\u10D8 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10E1\u10EC\u10D0\u10D5\u10DA\u10D0.',
    moral: 'Fears can be learned through association. This historic experiment also taught us the importance of ethical guidelines in research.',
    moralKa: '\u10E8\u10D8\u10E8\u10D4\u10D1\u10D8 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10D0\u10E1\u10DD\u10EA\u10D8\u10D0\u10EA\u10D8\u10D8\u10D7 \u10E1\u10EC\u10D0\u10D5\u10DA\u10D0. \u10D4\u10E1 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8 \u10D4\u10D7\u10D8\u10D9\u10E3\u10E0\u10D8 \u10EC\u10D4\u10E1\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0\u10E1\u10D0\u10EA \u10D2\u10D5\u10D0\u10E1\u10EC\u10D0\u10D5\u10DA\u10D0.'
  },
  {
    id: 4,
    title: 'The Invisible Gorilla',
    titleKa: '\u10E3\u10EE\u10D8\u10DA\u10D0\u10D5\u10D8 \u10D2\u10DD\u10E0\u10D8\u10DA\u10D0',
    chapterId: 4,
    icon: 'mdi:eye-off-outline',
    content: 'In 1999, psychologists Daniel Simons and Christopher Chabris designed an experiment that would challenge our most basic assumptions about awareness. They asked participants to watch a short video of six people\u2014three in white shirts, three in black\u2014passing basketballs to each other.\n\nThe task was simple: count the number of passes made by the white-shirted team. Participants focused intently, tracking each throw.\n\nHalfway through the video, something extraordinary happened. A person in a full gorilla costume walked slowly into the center of the frame, faced the camera, thumped its chest, and walked out. The gorilla was visible for a full nine seconds.\n\nWhen asked afterward, roughly half the participants had absolutely no idea a gorilla had appeared. They were shocked when shown the video again. Some refused to believe it was the same video.\n\nThe experiment demonstrated what Simons and Chabris called "inattentional blindness"\u2014the failure to notice fully visible but unexpected objects when our attention is focused elsewhere. It\'s not that our eyes didn\'t see the gorilla; our brain simply didn\'t process it because it wasn\'t relevant to the counting task.\n\nThis research has profound real-world implications. Radiologists can miss tumors on X-rays when focused on something else. Drivers may not see pedestrians when distracted. Eyewitnesses miss critical details during crimes.\n\nThe invisible gorilla reminds us that seeing and noticing are two fundamentally different cognitive processes, and that our confident sense of awareness is largely an illusion.',
    contentKa: '1999 \u10EC\u10D4\u10DA\u10E1, \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D4\u10D1\u10DB\u10D0 \u10DB\u10DD\u10DC\u10D0\u10EC\u10D8\u10DA\u10D4\u10D4\u10D1\u10E1 \u10E1\u10D7\u10EE\u10DD\u10D5\u10D4\u10E1 \u10D5\u10D8\u10D3\u10D4\u10DD\u10E8\u10D8 \u10D1\u10D0\u10E1\u10D9\u10D4\u10E2\u10D1\u10DD\u10DA\u10D8\u10E1 \u10D2\u10D0\u10D3\u10D0\u10EA\u10D4\u10DB\u10D4\u10D1\u10D8\u10E1 \u10D3\u10D0\u10D7\u10D5\u10DA\u10D0 \u10D3\u10D0\u10D4\u10D5\u10D0\u10DA\u10D0. \u10D5\u10D8\u10D3\u10D4\u10DD\u10E8\u10D8 \u10D2\u10DD\u10E0\u10D8\u10DA\u10D0\u10E1 \u10D9\u10DD\u10E1\u10E2\u10D8\u10E3\u10DB\u10E8\u10D8 \u10D2\u10D0\u10DB\u10DD\u10EC\u10E7\u10DD\u10D1\u10D8\u10DA\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8 \u10D2\u10D0\u10D8\u10D0\u10E0\u10D0, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10DB\u10DD\u10DC\u10D0\u10EC\u10D8\u10DA\u10D4\u10D4\u10D1\u10D8\u10E1 \u10DC\u10D0\u10EE\u10D4\u10D5\u10D0\u10E0\u10DB\u10D0 \u10D5\u10D4\u10E0 \u10E8\u10D4\u10DC\u10D8\u10E8\u10DC\u10D0. \u10D4\u10E1 \u10D0\u10E9\u10D5\u10D4\u10DC\u10D4\u10D1\u10E1, \u10E0\u10DD\u10DB \u10EC\u10D4\u10DC\u10D0 \u10D3\u10D0 \u10E8\u10D4\u10DB\u10E9\u10DC\u10D4\u10D5\u10D0 \u10E1\u10E0\u10E3\u10DA\u10D8\u10D0\u10D3 \u10D2\u10D0\u10DC\u10E1\u10EE\u10D5\u10D0\u10D5\u10D4\u10D1\u10E3\u10DA\u10D8 \u10DE\u10E0\u10DD\u10EA\u10D4\u10E1\u10D4\u10D1\u10D8\u10D0.',
    moral: 'Our attention is far more limited than we think. We can look directly at something and still fail to see it if our focus is elsewhere.',
    moralKa: '\u10E9\u10D5\u10D4\u10DC\u10D8 \u10E7\u10E3\u10E0\u10D0\u10D3\u10E6\u10D4\u10D1\u10D0 \u10D2\u10D0\u10EA\u10D8\u10DA\u10D4\u10D1\u10D8\u10D7 \u10E3\u10E4\u10E0\u10DD \u10E8\u10D4\u10D6\u10E6\u10E3\u10D3\u10E3\u10DA\u10D8\u10D0, \u10D5\u10D8\u10D3\u10E0\u10D4 \u10D2\u10D5\u10D2\u10DD\u10DC\u10D8\u10D0.'
  },
  {
    id: 5,
    title: 'Harlow\'s Monkeys and the Need for Love',
    titleKa: '\u10F0\u10D0\u10E0\u10DA\u10DD\u10E3\u10E1 \u10DB\u10D0\u10D8\u10DB\u10E3\u10DC\u10D4\u10D1\u10D8 \u10D3\u10D0 \u10E1\u10D8\u10E7\u10D5\u10D0\u10E0\u10E3\u10DA\u10D8\u10E1 \u10E1\u10D0\u10ED\u10D8\u10E0\u10DD\u10D4\u10D1\u10D0',
    chapterId: 9,
    icon: 'mdi:heart-outline',
    content: 'In the 1950s and 60s, psychologist Harry Harlow conducted experiments at the University of Wisconsin that would forever change our understanding of love and attachment. At the time, the prevailing view\u2014promoted by behaviorists like Watson\u2014was that infants bonded with mothers primarily because mothers provided food.\n\nHarlow challenged this assumption by separating infant rhesus monkeys from their biological mothers and giving them two surrogate "mothers." One was made of bare wire mesh with a feeding bottle attached. The other was made of soft terry cloth with no food source.\n\nIf the behaviorists were right, the babies should have preferred the wire mother who provided nourishment. But that\'s not what happened.\n\nThe infant monkeys spent nearly all their time clinging to the soft cloth mother. They went to the wire mother only briefly to feed, then immediately returned to the cloth surrogate. When frightened by a mechanical spider or other threats, they ran to the cloth mother for comfort, clinging desperately.\n\nEven more telling: monkeys raised with only the wire mother developed severe psychological problems. They rocked back and forth, showed signs of depression, were aggressive, and had difficulty socializing with other monkeys. Those with the cloth mother, while not perfectly adjusted, were significantly healthier emotionally.\n\nLater experiments showed that monkeys deprived of all maternal contact became profoundly disturbed as adults\u2014unable to parent their own offspring, some refusing to nurse or even harming their babies.\n\nHarlow\'s work, though ethically controversial by today\'s standards, provided irrefutable evidence that emotional comfort, touch, and security are as fundamental as food and water for healthy development.',
    contentKa: '1950-60-\u10D8\u10D0\u10DC \u10EC\u10DA\u10D4\u10D1\u10E8\u10D8, \u10F0\u10D0\u10E0\u10D8 \u10F0\u10D0\u10E0\u10DA\u10DD\u10E3\u10DB\u10D0 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D4\u10D1\u10D8 \u10E9\u10D0\u10D0\u10E2\u10D0\u10E0\u10D0 \u10E0\u10D4\u10D6\u10E3\u10E1\u10D8\u10E1 \u10DB\u10D0\u10D8\u10DB\u10E3\u10DC\u10D4\u10D1\u10D6\u10D4. \u10DB\u10D0\u10DC \u10E9\u10D5\u10D8\u10DA\u10D4\u10D1\u10E1 \u10DD\u10E0\u10D8 \u10E1\u10E3\u10E0\u10DD\u10D2\u10D0\u10E2\u10D8 \u10D3\u10D4\u10D3\u10D0 \u10DB\u10D8\u10E1\u10EA\u10D0: \u10DB\u10D0\u10D5\u10D7\u10E3\u10DA\u10EE\u10D0\u10D5\u10DA\u10DD\u10D5\u10D0\u10DC\u10D8 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10D8\u10D7 \u10D3\u10D0 \u10E0\u10D1\u10D8\u10DA\u10D8 \u10E5\u10E1\u10DD\u10D5\u10D8\u10DA\u10D8\u10D0\u10DC\u10D8 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4. \u10E9\u10D5\u10D8\u10DA\u10D4\u10D1\u10DB\u10D0 \u10E0\u10D1\u10D8\u10DA \u10D3\u10D4\u10D3\u10D0 \u10D0\u10D8\u10E0\u10E9\u10D8\u10D4\u10E1\u2014\u10D4\u10DB\u10DD\u10EA\u10D8\u10E3\u10E0\u10D8 \u10D9\u10DD\u10DB\u10E4\u10DD\u10E0\u10E2\u10D8 \u10E1\u10D0\u10D9\u10D5\u10D4\u10D1\u10D6\u10D4 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D5\u10D0\u10DC\u10D8\u10D0.',
    moral: 'Love, comfort, and physical touch are fundamental needs that shape healthy development\u2014not luxuries, but biological necessities.',
    moralKa: '\u10E1\u10D8\u10E7\u10D5\u10D0\u10E0\u10E3\u10DA\u10D8, \u10D9\u10DD\u10DB\u10E4\u10DD\u10E0\u10E2\u10D8 \u10D3\u10D0 \u10E4\u10D8\u10D6\u10D8\u10D9\u10E3\u10E0\u10D8 \u10E8\u10D4\u10EE\u10D4\u10D1\u10D0 \u10E4\u10E3\u10DC\u10D3\u10D0\u10DB\u10D4\u10DC\u10E2\u10E3\u10E0\u10D8 \u10E1\u10D0\u10ED\u10D8\u10E0\u10DD\u10D4\u10D1\u10D4\u10D1\u10D8\u10D0 \u10EF\u10D0\u10DC\u10E1\u10D0\u10E6\u10D8 \u10D2\u10D0\u10DC\u10D5\u10D8\u10D7\u10D0\u10E0\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1.'
  },
  {
    id: 6,
    title: 'The Marshmallow Test',
    titleKa: '\u10DB\u10D0\u10E0\u10E8\u10DB\u10D4\u10DA\u10DD\u10E3\u10E1 \u10E2\u10D4\u10E1\u10E2\u10D8',
    chapterId: 10,
    icon: 'mdi:cookie-outline',
    content: 'In the late 1960s and early 1970s, Stanford psychologist Walter Mischel began a deceptively simple experiment. He brought preschool children, typically 4 to 5 years old, into a room one at a time. On the table sat a single marshmallow (or cookie or pretzel\u2014the child could choose their preferred treat).\n\nThe researcher told the child: "You can eat this marshmallow right now. But if you wait until I come back, you can have two marshmallows instead." Then the researcher left the room for about 15 minutes.\n\nHidden cameras recorded what happened next, and the footage became some of psychology\'s most delightful viewing. Some children ate the marshmallow the instant the door closed. Others tried creative strategies: covering their eyes, turning around, singing to themselves, petting the marshmallow like a tiny animal, or licking it and putting it back.\n\nAbout one-third of the children managed to wait the full 15 minutes. Two-thirds could not resist.\n\nYears later, Mischel followed up with the children\u2014now teenagers and adults. The results were striking. Children who had waited longer scored significantly higher on SATs (210 points higher on average), were described as more competent by parents, handled stress better, were less likely to abuse substances, and maintained healthier body weights.\n\nFollow-up studies spanning four decades showed that the ability to delay gratification in childhood predicted better outcomes across nearly every measure of life success.\n\nHowever, later research has added nuance. A 2018 study by Tyler Watts showed that socioeconomic factors and home environment strongly influence the ability to delay gratification\u2014children from stable, resource-rich homes may simply have more reason to trust that the second marshmallow will actually appear.',
    contentKa: '1960-70-\u10D8\u10D0\u10DC \u10EC\u10DA\u10D4\u10D1\u10E8\u10D8, \u10E1\u10E2\u10D4\u10DC\u10E4\u10DD\u10E0\u10D3\u10D8\u10E1 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10DB\u10D0 \u10E3\u10DD\u10DA\u10E2\u10D4\u10E0 \u10DB\u10D8\u10E8\u10D4\u10DA\u10DB\u10D0 \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10E1 \u10DB\u10D0\u10E0\u10E2\u10D8\u10D5\u10D8 \u10D0\u10E0\u10E9\u10D4\u10D5\u10D0\u10DC\u10D8\u10E1 \u10EC\u10D8\u10DC\u10D0\u10E8\u10D4 \u10D3\u10D0\u10D0\u10E7\u10D4\u10DC\u10D0: \u10E8\u10D4\u10EC\u10D0\u10DB\u10D4 \u10D0\u10EE\u10DA\u10D0 \u10D0\u10DC \u10D3\u10D0\u10D4\u10DA\u10DD\u10D3\u10DD \u10D3\u10D0 \u10DD\u10E0\u10D8 \u10DB\u10D8\u10D8\u10E6\u10DD. \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10D8\u10E1 1/3-\u10DB\u10D0 \u10DB\u10DD\u10D8\u10D7\u10DB\u10D8\u10DC\u10D0 15 \u10EC\u10E3\u10D7\u10D8. \u10D0\u10D7\u10EC\u10DA\u10D4\u10E3\u10DA\u10D4\u10D1\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D3\u10D4\u10D2 \u10D0\u10E6\u10DB\u10DD\u10E9\u10DC\u10D3\u10D0, \u10E0\u10DD\u10DB \u10DB\u10DD\u10D7\u10DB\u10D8\u10DC\u10D4 \u10D1\u10D0\u10D5\u10E8\u10D5\u10D4\u10D1\u10E1 \u10E3\u10D9\u10D4\u10D7\u10D4\u10E1\u10D8 \u10E8\u10D4\u10D3\u10D4\u10D2\u10D4\u10D1\u10D8 \u10F0\u10E5\u10DD\u10DC\u10D3\u10D0\u10D7 \u10EA\u10EE\u10DD\u10D5\u10E0\u10D4\u10D1\u10D0\u10E8\u10D8.',
    moral: 'Delayed gratification is a powerful predictor of life success, though environment and trust also play critical roles.',
    moralKa: '\u10D3\u10D0\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D3\u10D0\u10D9\u10DB\u10D0\u10E7\u10DD\u10E4\u10D8\u10DA\u10D4\u10D1\u10D0 \u10EA\u10EE\u10DD\u10D5\u10E0\u10D4\u10D1\u10D8\u10E1 \u10EC\u10D0\u10E0\u10DB\u10D0\u10E2\u10D4\u10D1\u10D8\u10E1 \u10EB\u10DA\u10D8\u10D4\u10E0\u10D8 \u10DE\u10E0\u10DD\u10D2\u10DC\u10DD\u10D6\u10D0\u10E2\u10DD\u10E0\u10D8\u10D0.'
  },
  {
    id: 7,
    title: 'Kitty Genovese and Bystander Apathy',
    titleKa: '\u10D9\u10D8\u10E2\u10D8 \u10EF\u10D4\u10DC\u10DD\u10D5\u10D4\u10D6\u10D4 \u10D3\u10D0 \u10D7\u10D5\u10D0\u10DA\u10D7\u10DB\u10EE\u10D8\u10DA\u10D5\u10D4\u10DA\u10D8\u10E1 \u10D0\u10DE\u10D0\u10D7\u10D8\u10D0',
    chapterId: 12,
    icon: 'mdi:account-alert-outline',
    content: 'On March 13, 1964, 28-year-old Catherine "Kitty" Genovese was returning to her apartment in Kew Gardens, Queens, New York, at about 3:15 AM after finishing her shift as a bar manager. As she walked from her car, she was attacked by Winston Moseley.\n\nKitty screamed for help. Lights went on in the apartment building. A neighbor yelled from a window. Moseley ran away\u2014but returned ten minutes later to attack her again in a stairwell, where he stabbed, robbed, and ultimately killed her.\n\nThe New York Times reported that 38 witnesses watched or heard the attack and did nothing\u2014a claim that became the defining story of urban apathy. The headline shocked the nation.\n\nPsychologists John Darley and Bibb Latan\u00e9 were deeply troubled by the story. Rather than simply condemning the witnesses as uncaring, they hypothesized that the very number of witnesses might have been the problem. They designed a series of experiments to test this.\n\nIn one study, participants were placed in separate rooms and communicated via intercom. When one "participant" (actually a recording) simulated having a seizure, those who believed they were the only one who could hear it responded quickly\u201485% within one minute. But when participants believed four others were also listening, only 31% responded.\n\nDarley and Latan\u00e9 called this the "bystander effect"\u2014the finding that the presence of others reduces individual helping behavior through two mechanisms: diffusion of responsibility ("someone else will help") and pluralistic ignorance ("nobody else seems concerned, so it must not be serious").\n\nNote: Later research revealed that the original Times story was significantly exaggerated\u2014fewer people witnessed the attack than claimed, and some did call police. But the research it inspired has been robustly confirmed.',
    contentKa: '1964 \u10EC\u10D4\u10DA\u10E1, \u10D9\u10D8\u10E2\u10D8 \u10EF\u10D4\u10DC\u10DD\u10D5\u10D4\u10D6\u10D4 \u10DC\u10D8\u10E3-\u10D8\u10DD\u10E0\u10D9\u10E8\u10D8 \u10D7\u10D0\u10D5\u10E1 \u10D3\u10D0\u10E1\u10EE\u10DB\u10E3\u10DA\u10D4\u10E1 \u10D3\u10E0\u10DD\u10E1 \u10DB\u10DD\u10D8\u10D9\u10DA\u10D0. \u10DB\u10E0\u10D0\u10D5\u10D0\u10DA\u10DB\u10D0 \u10D4\u10E1\u10DB\u10D0 \u10D3\u10D0\u10D8\u10DC\u10D0\u10EE\u10D0, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10D0\u10E0\u10D0\u10D5\u10D8\u10DC \u10D3\u10D0\u10D4\u10EE\u10DB\u10D0\u10E0\u10D0. \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D4\u10D1\u10DB\u10D0 \u10D3\u10D0\u10E0\u10DA\u10D8\u10DB \u10D3\u10D0 \u10DA\u10D0\u10E2\u10D0\u10DC\u10D4\u10DB \u10D0\u10E6\u10DB\u10DD\u10D0\u10E9\u10D8\u10DC\u10D4\u10E1 "\u10D7\u10D5\u10D0\u10DA\u10D7\u10DB\u10EE\u10D8\u10DA\u10D5\u10D4\u10DA\u10D8\u10E1 \u10D4\u10E4\u10D4\u10E5\u10E2\u10D8"\u2014\u10E0\u10D0\u10CA \u10DB\u10D4\u10E2\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8\u10D0 \u10D3\u10D0\u10DB\u10E1\u10EC\u10E0\u10D4, \u10DB\u10D8\u10D7 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10D0\u10D3 \u10D7\u10D8\u10D7\u10DD\u10D4\u10E3\u10DA\u10D8 \u10D3\u10D0\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D0\u10DA\u10D1\u10D0\u10D7\u10DD\u10D1\u10D0 \u10DB\u10EA\u10D8\u10E0\u10D3\u10D4\u10D1\u10D0.',
    moral: 'The more people present during an emergency, the less likely any individual is to help\u2014a counterintuitive finding with life-saving implications.',
    moralKa: '\u10E0\u10D0\u10CA \u10DB\u10D4\u10E2\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8 \u10D0\u10E0\u10D8\u10E1 \u10E1\u10D0\u10D2\u10D0\u10DC\u10D2\u10D0\u10E8\u10DD \u10E1\u10D8\u10E2\u10E3\u10D0\u10EA\u10D8\u10D0\u10E8\u10D8, \u10DB\u10D8\u10D7 \u10DC\u10D0\u10D9\u10DA\u10D4\u10D1\u10D0\u10D3\u10D8\u10D0 \u10D7\u10D8\u10D7\u10DD\u10D4\u10E3\u10DA\u10D8\u10E1 \u10D3\u10D0\u10EE\u10DB\u10D0\u10E0\u10D4\u10D1\u10D0.'
  },
  {
    id: 8,
    title: 'Seligman and the Dogs Who Gave Up',
    titleKa: '\u10E1\u10D4\u10DA\u10D8\u10D2\u10DB\u10D0\u10DC\u10D8 \u10D3\u10D0 \u10EB\u10D0\u10E6\u10DA\u10D4\u10D1\u10D8, \u10E0\u10DD\u10DB\u10DA\u10D4\u10D1\u10DB\u10D0\u10CA \u10D3\u10D0\u10DC\u10D4\u10D1\u10D3\u10D4\u10E1',
    chapterId: 10,
    icon: 'mdi:emoticon-sad-outline',
    content: 'In 1967, Martin Seligman and Steven Maier were graduate students at the University of Pennsylvania conducting research on learning. Their experiment would accidentally reveal one of psychology\'s most important concepts.\n\nThe experiment had three groups of dogs. Group 1 received mild electric shocks they could stop by pressing a panel with their noses. Group 2 received the same shocks but had no way to stop them\u2014they were "yoked" to Group 1, receiving the exact same pattern of shocks regardless of what they did. Group 3 received no shocks at all.\n\nLater, all three groups were placed in a shuttle box\u2014a chamber divided by a low barrier the dogs could easily jump over. Shocks were delivered to one side, and the dogs simply needed to jump to the other side to escape.\n\nGroups 1 and 3 quickly learned to jump the barrier. But Group 2\u2014the dogs who had previously been unable to escape\u2014didn\'t even try. They lay down, whimpered, and passively accepted the shock. Two-thirds of them made no attempt to escape, even though the barrier was right there.\n\nSeligman called this "learned helplessness"\u2014the state in which, after experiencing uncontrollable negative events, an organism stops trying to change its situation even when escape becomes possible.\n\nThe implications extended far beyond dogs. Seligman proposed that learned helplessness was a key model for understanding human depression. People who experience repeated failures or uncontrollable negative events may develop a pervasive belief that their actions don\'t matter\u2014leading to passivity, sadness, and withdrawal.\n\nThis insight led Seligman to develop new therapeutic approaches. Crucially, he discovered that learned helplessness could be reversed through "immunization"\u2014earlier experiences of mastery and control. This eventually led him to found the field of positive psychology, studying not just what makes people sick but what makes them flourish.',
    contentKa: '1967 \u10EC\u10D4\u10DA\u10E1, \u10DB\u10D0\u10E0\u10E2\u10D8\u10DC \u10E1\u10D4\u10DA\u10D8\u10D2\u10DB\u10D0\u10DC\u10DB\u10D0 \u10D4\u10E5\u10E1\u10DE\u10D4\u10E0\u10D8\u10DB\u10D4\u10DC\u10E2\u10D8 \u10E9\u10D0\u10D0\u10E2\u10D0\u10E0\u10D0 \u10EB\u10D0\u10E6\u10DA\u10D4\u10D1\u10D6\u10D4, \u10E0\u10DD\u10DB\u10DA\u10D4\u10D1\u10E1\u10D0\u10CA \u10D4\u10DA\u10D4\u10E5\u10E2\u10E0\u10DD\u10E8\u10DD\u10D9\u10D8\u10E1\u10D2\u10D0\u10DC \u10D7\u10D0\u10D5\u10D8\u10E1 \u10D3\u10D0\u10E6\u10EC\u10D4\u10D5\u10D0 \u10D0\u10E0 \u10E8\u10D4\u10D4\u10EB\u10DA\u10DD\u10D7. \u10DB\u10DD\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8\u10D7 \u10DB\u10D0\u10D7 \u10D7\u10D0\u10D5\u10D8\u10E1 \u10D3\u10D0\u10E6\u10EC\u10D4\u10D5\u10D0\u10CA \u10E8\u10D4\u10D4\u10EB\u10DA\u10DD\u10D7, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10D0\u10E0 \u10E1\u10EA\u10D0\u10D3\u10D4\u10E1. \u10E1\u10D4\u10DA\u10D8\u10D2\u10DB\u10D0\u10DC\u10DB\u10D0 \u10D0\u10DB\u10D0\u10E1 "\u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10DA\u10D8 \u10E3\u10EB\u10DA\u10E3\u10E0\u10DD\u10D1\u10D0" \u10E3\u10EC\u10DD\u10D3\u10D0 \u10D3\u10D0 \u10D4\u10E1 \u10D3\u10D4\u10DE\u10E0\u10D4\u10E1\u10D8\u10D8\u10E1 \u10D2\u10D0\u10D2\u10D4\u10D1\u10D8\u10E1 \u10DB\u10DD\u10D3\u10D4\u10DA\u10D0\u10D3 \u10D8\u10E5\u10CA\u10D0. \u10DB\u10DD\u10D2\u10D5\u10D8\u10D0\u10DC\u10D4\u10D1\u10D8\u10D7 \u10DB\u10D0\u10DC \u10DE\u10DD\u10D6\u10D8\u10E2\u10D8\u10E3\u10E0\u10D8 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10D8\u10D0 \u10D3\u10D0\u10D0\u10D0\u10E0\u10E1\u10D0.',
    moral: 'Repeated failure can teach us to stop trying\u2014but helplessness can be unlearned. Experiences of mastery and control can reverse it.',
    moralKa: '\u10D2\u10D0\u10DC\u10DB\u10D4\u10DD\u10E0\u10D4\u10D1\u10E3\u10DA\u10DB\u10D0 \u10EC\u10D0\u10E0\u10E3\u10DB\u10D0\u10E2\u10D4\u10D1\u10D4\u10D1\u10DB\u10D0 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0 \u10D2\u10D5\u10D0\u10E1\u10EC\u10D0\u10D5\u10DA\u10DD\u10E1 \u10D3\u10D0\u10DC\u10D4\u10D1\u10D3\u10D4\u10E1, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10E3\u10EB\u10DA\u10E3\u10E0\u10DD\u10D1\u10D0\u10E1 \u10D2\u10D0\u10D3\u10D0\u10E1\u10EC\u10D0\u10D5\u10DA\u10D0 \u10E8\u10D4\u10D8\u10EB\u10DA\u10D4\u10D1\u10D0.'
  },
  {
    id: 9,
    title: 'The Case of H.M.: A Life Without Memory',
    titleKa: 'H.M.-\u10D8\u10E1 \u10E8\u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D0: \u10EA\u10EE\u10DD\u10D5\u10E0\u10D4\u10D1\u10D0 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D2\u10D0\u10E0\u10D4\u10E8\u10D4',
    chapterId: 7,
    icon: 'mdi:head-question-outline',
    content: 'Henry Gustav Molaison\u2014known for decades in scientific literature only as "H.M." to protect his privacy\u2014is perhaps the most studied individual in the history of neuroscience. His story begins with tragedy and becomes a cornerstone of memory research.\n\nH.M. suffered from severe, debilitating epilepsy that began after a bicycle accident at age seven. By his mid-twenties, the seizures had become so frequent and violent that he could not hold a job or live independently.\n\nIn 1953, neurosurgeon William Beecher Scoville performed an experimental operation. He removed large portions of H.M.\'s medial temporal lobes bilaterally\u2014including most of his hippocampus on both sides.\n\nThe surgery was a medical success: the seizures were dramatically reduced. But the side effect was devastating. H.M. could no longer form new long-term memories. He could remember events from his childhood, his parents\' names, and facts from before the surgery. But anything that happened after 1953 vanished within minutes.\n\nH.M. would read the same magazine over and over, enjoying it fresh each time. He could not recognize the researchers who visited him daily for years. Every day, his father\'s death was news to him again. He described his existence as "like waking from a dream... every day is alone in itself."\n\nYet H.M.\'s memory was not entirely destroyed. He could learn new motor skills\u2014like tracing a star in a mirror\u2014and improve with practice, even though he had no memory of having practiced. This proved that different types of memory (declarative vs. procedural) involve different brain systems.\n\nH.M. cooperated with researchers for over 50 years until his death in 2008. His brain was donated to science, sliced into 2,401 thin sections, and digitized for future study. His case single-handedly established the hippocampus as critical for memory formation and reshaped our understanding of how memories are made.',
    contentKa: '\u10F0\u10D4\u10DC\u10E0\u10D8 \u10DB\u10DD\u10DA\u10D4\u10D8\u10D6\u10DD\u10DC\u10D8 (H.M.) \u10DC\u10D4\u10D8\u10E0\u10DD\u10DB\u10D4\u10EA\u10DC\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10D8\u10E1\u10E2\u10DD\u10E0\u10D8\u10D0\u10E8\u10D8 \u10E7\u10D5\u10D4\u10DA\u10D0\u10D6\u10D4 \u10E8\u10D4\u10E1\u10EC\u10D0\u10D5\u10DA\u10D8\u10DA\u10D8 \u10D0\u10D3\u10D0\u10DB\u10D8\u10D0\u10DC\u10D8\u10D0. 1953 \u10EC\u10D4\u10DA\u10E1 \u10D4\u10DE\u10D8\u10DA\u10D4\u10E4\u10E1\u10D8\u10D8\u10E1 \u10E1\u10D0\u10DB\u10D9\u10E3\u10E0\u10DC\u10D0\u10DA\u10DD\u10D3, \u10E5\u10D8\u10E0\u10E3\u10E0\u10D2\u10DB\u10D0 \u10F0\u10D8\u10DE\u10DD\u10D9\u10D0\u10DB\u10DE\u10D8 \u10D0\u10DB\u10DD\u10D0\u10ED\u10E0\u10D0. \u10D9\u10E0\u10E3\u10DC\u10E9\u10EE\u10D4\u10D1\u10D8 \u10E8\u10D4\u10DB\u10EA\u10D8\u10E0\u10D3\u10D0, \u10DB\u10D0\u10D2\u10E0\u10D0\u10DB \u10D0\u10EE\u10D0\u10DA\u10D8 \u10D2\u10E0\u10EB\u10D4\u10DA\u10D5\u10D0\u10D3\u10D8\u10D0\u10DC\u10D8 \u10DB\u10DD\u10D2\u10DD\u10DC\u10D4\u10D1\u10D4\u10D1\u10D8\u10E1 \u10E9\u10D0\u10DB\u10DD\u10E7\u10D0\u10DA\u10D8\u10D1\u10D4\u10D1\u10D0 \u10D5\u10D4\u10E0 \u10E8\u10D4\u10EB\u10DA\u10DD. \u10DB\u10D8\u10E1\u10DB\u10D0 \u10E8\u10D4\u10DB\u10D7\u10EE\u10D5\u10D4\u10D5\u10D0\u10DB \u10D3\u10D0\u10D0\u10DB\u10E2\u10D9\u10D8\u10EA\u10D0, \u10E0\u10DD\u10DB \u10F0\u10D8\u10DE\u10DD\u10D9\u10D0\u10DB\u10DE\u10D8 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E4\u10DD\u10E0\u10DB\u10D8\u10E0\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10D0\u10E3\u10EA\u10D8\u10DA\u10D4\u10D1\u10D4\u10DA\u10D8\u10D0.',
    moral: 'The hippocampus is critical for memory formation\u2014and different types of memory involve separate brain systems.',
    moralKa: '\u10F0\u10D8\u10DE\u10DD\u10D9\u10D0\u10DB\u10DE\u10D8 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E4\u10DD\u10E0\u10DB\u10D8\u10E0\u10D4\u10D1\u10D8\u10E1\u10D7\u10D5\u10D8\u10E1 \u10D0\u10E3\u10EA\u10D8\u10DA\u10D4\u10D1\u10D4\u10DA\u10D8\u10D0, \u10D3\u10D0 \u10DB\u10D4\u10EE\u10E1\u10D8\u10D4\u10E0\u10D4\u10D1\u10D8\u10E1 \u10E1\u10EE\u10D5\u10D0\u10D3\u10D0\u10E1\u10EE\u10D5\u10D0 \u10E2\u10D8\u10DE\u10D4\u10D1\u10D8 \u10E1\u10EE\u10D5\u10D0\u10D3\u10D0\u10E1\u10EE\u10D5\u10D0 \u10E2\u10D5\u10D8\u10DC\u10D8\u10E1 \u10E1\u10D8\u10E1\u10E2\u10D4\u10DB\u10D4\u10D1\u10E1 \u10D8\u10E7\u10D4\u10DC\u10D4\u10D1\u10E1.'
  },
  {
    id: 10,
    title: 'Rosenhan\'s "Being Sane in Insane Places"',
    titleKa: '\u10E0\u10DD\u10D6\u10D4\u10DC\u10F0\u10D0\u10DC\u10D8\u10E1 "\u10D2\u10DD\u10DC\u10D8\u10D4\u10E0\u10D4\u10D1\u10D0 \u10D2\u10D8\u10DF\u10E3\u10E0 \u10D0\u10D3\u10D2\u10D8\u10DA\u10D4\u10D1\u10E8\u10D8"',
    chapterId: 14,
    icon: 'mdi:hospital-building',
    content: 'In 1973, Stanford psychologist David Rosenhan published one of the most provocative and influential studies in the history of psychiatry: "On Being Sane in Insane Places."\n\nRosenhan recruited eight mentally healthy volunteers\u2014including himself, a psychology graduate student, a pediatrician, a psychiatrist, a painter, and a housewife\u2014to present themselves at twelve different psychiatric hospitals across the United States.\n\nEach pseudo-patient reported a single symptom: they heard a voice saying "empty," "hollow," or "thud." They gave false names and occupations but otherwise described their life histories and emotional states truthfully. All were diagnosed with psychiatric disorders (most commonly schizophrenia) and admitted.\n\nOnce inside, all pseudo-patients immediately stopped reporting any symptoms and behaved completely normally. They took notes openly, cooperated with staff, and told doctors they felt fine. Yet not a single one was identified as healthy by staff.\n\nTheir hospitalizations lasted from 7 to 52 days, averaging 19 days. When discharged, they received the diagnosis "schizophrenia, in remission"\u2014meaning the label stuck even upon release.\n\nIronically, real patients often recognized the pseudo-patients were not mentally ill. "You\'re not crazy. You\'re a journalist or a professor," they said. But staff never questioned the diagnoses.\n\nIn a follow-up study, Rosenhan told a hospital that pseudo-patients would attempt admission over the next three months. Staff confidently identified 41 patients as impostors. In reality, Rosenhan had sent no one.\n\nThe study\'s conclusion was searing: psychiatric institutions cannot reliably distinguish the sane from the insane. Diagnostic labels, once applied, color all subsequent perception and behavior of both patients and staff. The study contributed to major reforms in psychiatric diagnosis and the development of more rigorous diagnostic criteria.',
    contentKa: '1973 \u10EC\u10D4\u10DA\u10E1, \u10E1\u10E2\u10D4\u10DC\u10E4\u10DD\u10E0\u10D3\u10D8\u10E1 \u10E4\u10E1\u10D8\u10E5\u10DD\u10DA\u10DD\u10D2\u10DB\u10D0 \u10E0\u10DD\u10D6\u10D4\u10DC\u10F0\u10D0\u10DC\u10DB\u10D0 8 \u10EF\u10D0\u10DC\u10E1\u10D0\u10E6\u10D8 \u10DB\u10DD\u10EE\u10D0\u10DA\u10D8\u10E1\u10D4 12 \u10E4\u10E1\u10D8\u10E5\u10D8\u10D0\u10E2\u10E0\u10D8\u10E3\u10DA \u10E1\u10D0\u10D0\u10D5\u10D0\u10D3\u10DB\u10E7\u10DD\u10E4\u10DD\u10E8\u10D8 \u10D2\u10D0\u10D2\u10D6\u10D0\u10D5\u10DC\u10D0. \u10DB\u10D0\u10D7 \u10E8\u10D8\u10D6\u10DD\u10E4\u10E0\u10D4\u10DC\u10D8\u10D0 \u10D3\u10D0\u10E3\u10E1\u10D5\u10D4\u10E1 \u10D3\u10D0 7-\u10D3\u10D0\u10DC 52 \u10D3\u10E6\u10D4\u10DB\u10D3\u10D4 \u10D3\u10D0\u10E0\u10E9\u10DC\u10D4\u10DC. \u10D0\u10E0\u10D0\u10D5\u10D8\u10DC \u10DE\u10D4\u10E0\u10E1\u10DD\u10DC\u10D0\u10DA\u10DB\u10D0 \u10D5\u10D4\u10E0 \u10D0\u10DB\u10DD\u10D8\u10EA\u10DC\u10DD \u10D8\u10E1\u10D8\u10DC\u10D8 \u10EF\u10D0\u10DC\u10E1\u10D0\u10E6\u10D0\u10D3. \u10D4\u10E1 \u10D9\u10D5\u10DA\u10D4\u10D5\u10D0\u10DB \u10D3\u10D8\u10D0\u10D2\u10DC\u10DD\u10E1\u10E2\u10D8\u10D9\u10D8\u10E1 \u10E1\u10D4\u10E0\u10D8\u10DD\u10D6\u10E3\u10DA \u10E0\u10D4\u10E4\u10DD\u10E0\u10DB\u10D4\u10D1\u10E1 \u10E8\u10D4\u10E3\u10EC\u10E7\u10DD.',
    moral: 'Labels are powerful\u2014once categorized, everything is seen through that lens. Psychiatric diagnosis must be approached with extreme rigor and humility.',
    moralKa: '\u10D8\u10D0\u10E0\u10DA\u10D8\u10E7\u10D4\u10D1\u10D8 \u10EB\u10D0\u10DA\u10D8\u10D0\u10DC \u10EB\u10DA\u10D8\u10D4\u10E0\u10D8\u10D0\u2014\u10D4\u10E0\u10D7\u10EE\u10D4\u10DA \u10D9\u10D0\u10E2\u10D4\u10D2\u10DD\u10E0\u10D8\u10D6\u10D4\u10D1\u10E3\u10DA\u10D8, \u10E7\u10D5\u10D4\u10DA\u10D0\u10E4\u10D4\u10E0\u10D8 \u10D0\u10DB \u10DA\u10D8\u10DC\u10D6\u10D8\u10D7 \u10D0\u10E6\u10D8\u10E5\u10DB\u10D4\u10D1\u10D0.'
  }
]

export const MEMORY_CARDS: MemoryCard[] = [
  { id: 1, term: 'Psychology', definition: 'The scientific study of behavior and mental processes', category: 'Basics' },
  { id: 2, term: 'Neuron', definition: 'A nerve cell that transmits electrical and chemical signals', category: 'Biology' },
  { id: 3, term: 'Classical Conditioning', definition: 'Learning through association of stimuli (Pavlov)', category: 'Learning' },
  { id: 4, term: 'Operant Conditioning', definition: 'Learning through consequences: reinforcement and punishment (Skinner)', category: 'Learning' },
  { id: 5, term: 'Hippocampus', definition: 'Brain structure essential for forming new long-term memories', category: 'Biology' },
  { id: 6, term: 'Cognitive Dissonance', definition: 'Discomfort from holding contradictory beliefs or attitudes', category: 'Social' },
  { id: 7, term: 'Maslow\'s Hierarchy', definition: 'Five-level model of motivation from basic needs to self-actualization', category: 'Motivation' },
  { id: 8, term: 'Big Five (OCEAN)', definition: 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', category: 'Personality' },
  { id: 9, term: 'Attachment Theory', definition: 'The bond between infant and caregiver shaping later relationships', category: 'Development' },
  { id: 10, term: 'Confirmation Bias', definition: 'Tendency to seek information that supports existing beliefs', category: 'Cognition' },
  { id: 11, term: 'Dopamine', definition: 'Neurotransmitter involved in reward, motivation, and pleasure', category: 'Biology' },
  { id: 12, term: 'REM Sleep', definition: 'Sleep stage with rapid eye movements and vivid dreaming', category: 'Consciousness' },
  { id: 13, term: 'Bystander Effect', definition: 'Less likely to help when others are present', category: 'Social' },
  { id: 14, term: 'Placebo Effect', definition: 'Improvement from belief in treatment rather than treatment itself', category: 'Research' },
  { id: 15, term: 'Schema', definition: 'Mental framework for organizing and interpreting information', category: 'Cognition' },
  { id: 16, term: 'Amygdala', definition: 'Brain structure for processing emotions, especially fear', category: 'Biology' },
  { id: 17, term: 'Self-Efficacy', definition: 'Belief in your ability to succeed at specific tasks (Bandura)', category: 'Personality' },
  { id: 18, term: 'Learned Helplessness', definition: 'Giving up after repeated failures even when escape is possible', category: 'Motivation' },
  { id: 19, term: 'Transference', definition: 'Redirecting feelings about one person onto the therapist', category: 'Therapy' },
  { id: 20, term: 'Heuristic', definition: 'Mental shortcut for quick decisions that can lead to errors', category: 'Cognition' },
  { id: 21, term: 'Synapse', definition: 'The gap between neurons where neurotransmitters cross', category: 'Biology' },
  { id: 22, term: 'Extinction', definition: 'Weakening of conditioned response when reinforcement stops', category: 'Learning' },
  { id: 23, term: 'Superego', definition: 'The moral conscience in Freud\'s personality structure', category: 'Personality' },
  { id: 24, term: 'Neuroplasticity', definition: 'Brain\'s ability to reorganize and form new neural connections', category: 'Biology' }
];
