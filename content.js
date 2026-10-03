// Public faculty-page content. Edit this file, then commit it to the professor's GitHub Pages repository.
window.LAB_CONTENT = {
  lab: {
    fullName: "Data Mining Lab",
    university: "University of Tehran",
    location: "College of Interdisciplinary Science and Technology",
    department: "School of Intelligent Systems",
    labUrl: "https://ut-kdd.github.io/"
  },
  professor: {
    name: "Saman Haratizadeh",
    initials: "SH",
    role: "Associate Professor",
    headline: "A little about my work, teaching, and the ideas I return to.",
    bio: "Associate Professor at the University of Tehran and founder of the Data Mining Lab.",
    biography: [
      "I earned my PhD in Artificial Intelligence from Sharif University of Technology in 2007. Since then, research, teaching, and conversations with students have all been part of my academic life. I especially value the patient work of turning a difficult question into a clearer one."
    ],
    labStatement: "I founded the {lab} at the University of Tehran as a place to explore those questions with students and colleagues.", // {lab} becomes a link to the lab website.
    studentInvitation: "I welcome inquiries from prospective students interested in joining us. The lab site describes our current work, what we look for, and how to apply; you are also welcome to email me.",
    // PHOTO: To use your own picture, put professor.jpg in an "assets" folder beside index.html,
    // then replace this URL with "assets/professor.jpg".
    photo: "assets/professor.png",
    email: "haratizadeh@ut.ac.ir",
    office: "Office 339",
    officeHours: "",
    availability: "",
    meetingNote: "I am usually at my office and happy to meet with students. Please email ahead so we can arrange a time.",
    links: [
      { label: "University profile", url: "https://profile.ut.ac.ir/en/~haratizadeh" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=e603zvIAAAAJ&hl=en" },
      { label: "Curriculum vitae", url: "" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/saman-haratizadeh/" },
      { label: "GitHub", url: "" }
    ]
  },
  research: [
    { number: "01", title: "Machine learning", description: "Designing and studying learning methods, with particular attention to prediction and temporal data.", tags: ["Learning methods", "Time series"] },
    { number: "02", title: "Network science", description: "Understanding connected systems and learning from relational structure, especially in recommender systems.", tags: ["Graphs", "Recommendation"] },
    { number: "03", title: "Data analysis", description: "Working with complex data and practical questions, often in financial markets and recommendation.", tags: ["Finance", "Applications"] }
  ],
  publications: [],
  courses: [
    {
      slug: "machine-learning", code: "", title: "Machine Learning", term: "", level: "Graduate", credits: "", format: "Lectures and practical assignments",
      description: "Foundations, models, optimization, evaluation, and practical applications of machine learning.",
      overview: "An introduction to learning from data, from core models and optimization to careful evaluation and practical use.",
      outcomes: ["Explain core supervised and unsupervised learning concepts.", "Select and evaluate models using appropriate experimental protocols.", "Implement and analyze representative learning algorithms."],
      topics: ["Learning problems and data representation", "Linear models and regularization", "Model selection and evaluation", "Trees and ensemble methods", "Kernel methods", "Neural networks", "Unsupervised learning"],
      assessment: [],
      resources: [{ label: "Syllabus PDF", url: "" }, { label: "Pattern Recognition and Machine Learning · Bishop", url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf" }], enabled: true
    },
    {
      slug: "reinforcement-learning", code: "", title: "Reinforcement Learning", term: "", level: "Graduate", credits: "", format: "Lectures, readings, and implementation work",
      description: "Sequential decision-making, Markov decision processes, value methods, and policy learning.",
      overview: "How an agent learns through interaction, from decision processes and value methods to policy learning and evaluation.",
      outcomes: ["Formulate sequential decision problems as Markov decision processes.", "Compare value-based and policy-based learning methods.", "Implement and evaluate reinforcement-learning agents."],
      topics: ["Sequential decision-making", "Markov decision processes", "Dynamic programming", "Monte Carlo methods", "Temporal-difference learning", "Function approximation", "Policy-gradient methods", "Exploration and evaluation"],
      assessment: [], resources: [], enabled: true
    },
    {
      slug: "big-data-analysis", code: "", title: "Big Data Analysis", term: "", level: "Graduate / advanced undergraduate", credits: "", format: "Lectures, systems exercises, and project work",
      description: "Scalable data processing, distributed analysis, large-scale learning, and big-data infrastructures.",
      overview: "Approaches to analyzing data at scale, including distributed processing, scalable learning, and the tradeoffs involved in real systems.",
      outcomes: ["Explain core principles of distributed data processing.", "Design analysis workflows for data that exceed single-machine limits.", "Evaluate scalability, reliability, and analytical tradeoffs."],
      topics: ["Large-scale data characteristics", "Distributed storage and processing", "Batch and stream computation", "Scalable querying", "Distributed machine learning", "Graph and temporal workloads", "Performance and reliability", "End-to-end analytical systems"],
      assessment: [], resources: [], enabled: true
    }
  ],
  students: [],
  personalPage: {
    title: "Off the syllabus",
    introduction: "A small collection of things I find useful, interesting, or simply worth revisiting.",
    homepageIntro: "A book, film, report, or website sometimes stays with me long after I first encounter it. I keep a few of those finds here, in a collection that can grow in any direction.",
    items: [
      { kind: "Website", title: "Ganjoor", detail: "A rich collection of Persian poetry to read and explore.", url: "https://ganjoor.net/" },
      { kind: "Website", title: "Fingap", detail: "An Iranian stock market dashboard with AI analysis, market heatmaps, and symbol rankings.", url: "https://fingap.ir/#/home" },
      { kind: "Website", title: "Golha Project", detail: "An archive of Persian music and radio programmes worth discovering.", url: "https://www.golha.co.uk/" }
    ]
  },
  links: { fullPublications: "" },
  settings: { sections: { professor: { about: true, research: true, publications: true, teaching: true, supervision: false, personal: true } } },
  ui: { professor: { label2: "Research", label3: "Publications", label4: "Teaching", label5: "Supervision", label9: "Research interests", label10: "Publications", label11: "Courses and materials", label12: "Graduate supervision" } }
};
