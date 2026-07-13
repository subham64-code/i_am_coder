import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Seed the full I AM CODER curriculum as per the official course roadmap.
 * Categories are derived directly from the program structure — no duplicates.
 */
const courses = [
  // Mathematics
  { slug: "aptitude", title: "Aptitude", category: "Mathematics", level: "BEGINNER", description: "Quantitative aptitude: number systems, percentages, profit-loss, time-speed, permutations and probability.", tags: ["Aptitude", "Quant", "Arithmetic"] },
  { slug: "reasoning", title: "Logical Reasoning", category: "Mathematics", level: "BEGINNER", description: "Verbal & non-verbal reasoning, puzzles, series, seating arrangement and analytical reasoning.", tags: ["Reasoning", "Puzzles", "Logic"] },
  { slug: "english", title: "English Communication", category: "Mathematics", level: "BEGINNER", description: "Grammar, vocabulary, reading comprehension and written English for exams and the workplace.", tags: ["English", "Grammar", "Comprehension"] },

  // Personal Interview (PI)
  { slug: "soft-skills", title: "Soft Skills", category: "Personal Interview", level: "BEGINNER", description: "Body language, confidence, public speaking and professional etiquette for interviews.", tags: ["Soft Skills", "Communication"] },
  { slug: "resume-building", title: "CV / Resume Building", category: "Personal Interview", level: "BEGINNER", description: "Craft an ATS-friendly resume, write a cover letter and build a standout portfolio.", tags: ["Resume", "CV", "Portfolio"] },

  // Group Discussion (GD)
  { slug: "current-affairs", title: "Current Affairs", category: "Group Discussion", level: "BEGINNER", description: "Daily current affairs, national/international news and trending topics for GDs.", tags: ["Current Affairs", "News"] },
  { slug: "general-knowledge", title: "General Knowledge (GK)", category: "Group Discussion", level: "BEGINNER", description: "Static GK, history, geography, polity and science for group discussions and PI rounds.", tags: ["GK", "Static GK"] },

  // Programming Languages
  { slug: "c-language", title: "C Programming", category: "Programming Languages", level: "BEGINNER", description: "Master C from basics: pointers, memory, and systems programming.", tags: ["C", "Pointers", "Loops"] },
  { slug: "cpp", title: "C++ Programming", category: "Programming Languages", level: "INTERMEDIATE", description: "OOP, STL, and competitive programming with C++.", tags: ["C++", "OOP", "STL"] },
  { slug: "java", title: "Java Programming", category: "Programming Languages", level: "BEGINNER", description: "Core Java, OOP, collections, and JVM fundamentals.", tags: ["Java", "OOP", "JVM"] },
  { slug: "python", title: "Python Programming", category: "Programming Languages", level: "BEGINNER", description: "Python from zero to automation, scripting and problem solving.", tags: ["Python", "Scripting"] },

  // Full Stack Web Development
  { slug: "html", title: "HTML", category: "Full Stack", level: "BEGINNER", description: "Semantic HTML, forms, and modern markup.", tags: ["HTML", "Web"] },
  { slug: "css", title: "CSS", category: "Full Stack", level: "BEGINNER", description: "Flexbox, grid, animations and responsive design.", tags: ["CSS", "Design"] },
  { slug: "javascript", title: "JavaScript", category: "Full Stack", level: "INTERMEDIATE", description: "ES2022, DOM, async/await, and browser APIs.", tags: ["JavaScript", "ES6"] },
  { slug: "react", title: "React", category: "Full Stack", level: "INTERMEDIATE", description: "Components, hooks, state management and Next.js basics.", tags: ["React", "Hooks"] },
  { slug: "express", title: "Express.js", category: "Full Stack", level: "INTERMEDIATE", description: "Routing, middleware, auth and production patterns.", tags: ["Express", "Middleware"] },
  { slug: "nodejs", title: "Node.js", category: "Full Stack", level: "INTERMEDIATE", description: "Event loop, streams, and building REST APIs with Node.", tags: ["Node.js", "API"] },
  { slug: "nextjs", title: "Next.js", category: "Full Stack", level: "INTERMEDIATE", description: "App Router, SSR/SSG, server actions and full-stack React apps.", tags: ["Next.js", "React"] },
  { slug: "typescript", title: "TypeScript", category: "Full Stack", level: "INTERMEDIATE", description: "Static typing, generics, and type-safe full-stack development.", tags: ["TypeScript", "Types"] },
  { slug: "git-github", title: "Git & GitHub", category: "Full Stack", level: "BEGINNER", description: "Version control, branching, pull requests and collaboration workflows.", tags: ["Git", "GitHub", "VCS"] },

  // Python Frameworks
  { slug: "django", title: "Django", category: "Python Frameworks", level: "INTERMEDIATE", description: "Django ORM, admin, REST framework and auth.", tags: ["Django", "Python"] },
  { slug: "tkinter", title: "Tkinter", category: "Python Frameworks", level: "BEGINNER", description: "Build desktop GUI apps with Tkinter widgets and events.", tags: ["Tkinter", "GUI"] },
  { slug: "wsgi", title: "WSGI & Deployment", category: "Python Frameworks", level: "INTERMEDIATE", description: "WSGI servers (Gunicorn/uWSGI), app servers and Python deployment.", tags: ["WSGI", "Gunicorn", "Deploy"] },

  // Databases
  { slug: "dbms", title: "DBMS", category: "Databases", level: "INTERMEDIATE", description: "ER models, normalization, transactions and indexing concepts.", tags: ["DBMS", "Normalization"] },
  { slug: "sql", title: "SQL", category: "Databases", level: "INTERMEDIATE", description: "Relational design, joins, transactions and performance tuning.", tags: ["SQL", "MySQL"] },
  { slug: "mongodb", title: "MongoDB", category: "Databases", level: "INTERMEDIATE", description: "Document modeling, aggregation and indexing.", tags: ["MongoDB", "NoSQL"] },

  // Data Structures & Algorithms
  { slug: "dsa-leetcode", title: "LeetCode & Codeforces DSA", category: "DSA", level: "ADVANCED", description: "Solve LeetCode & Codeforces problems: arrays, trees, graphs, DP and contest strategy.", tags: ["LeetCode", "Codeforces", "DSA"] },

  // AI & Machine Learning
  { slug: "machine-learning", title: "Machine Learning", category: "AI & ML", level: "ADVANCED", description: "Regression, classification, clustering and model evaluation.", tags: ["ML", "Scikit-learn"] },
  { slug: "deep-learning", title: "Deep Learning", category: "AI & ML", level: "ADVANCED", description: "DNN, RNN, CNN with TensorFlow/PyTorch.", tags: ["DL", "TensorFlow", "PyTorch"] },
  { slug: "nlp", title: "NLP", category: "AI & ML", level: "ADVANCED", description: "Tokenization, embeddings, transformers and language models.", tags: ["NLP", "Transformers"] },
  { slug: "computer-vision", title: "Computer Vision", category: "AI & ML", level: "ADVANCED", description: "Image classification, object detection and CNN-based vision.", tags: ["CV", "CNN"] },
  { slug: "gnn", title: "Graph Neural Networks", category: "AI & ML", level: "ADVANCED", description: "Graph learning, GCN/GAT and relational data modeling.", tags: ["GNN", "Graphs"] },
  { slug: "mlops", title: "MLOps & AWS Deployment", category: "AI & ML", level: "ADVANCED", description: "ML pipelines, model serving, monitoring and AWS deployment strategy.", tags: ["MLOps", "AWS", "Deploy"] },

  // Generative & Agentic AI
  { slug: "generative-ai", title: "Generative AI", category: "GenAI & Agentic AI", level: "ADVANCED", description: "Prompt engineering, LangChain, RAG and OpenAI APIs.", tags: ["GenAI", "LLM"] },
  { slug: "agentic-ai", title: "Agentic AI", category: "GenAI & Agentic AI", level: "ADVANCED", description: "CrewAI, LangGraph and building autonomous AI agents.", tags: ["Agents", "LangGraph"] },
  { slug: "prompt-engineering", title: "Prompt Engineering Tools", category: "GenAI & Agentic AI", level: "BEGINNER", description: "Master prompting and AI tools to build apps from idea to launch.", tags: ["Prompt", "Tools"] },

  // Data Analytics
  { slug: "excel", title: "Excel for Analytics", category: "Data Analytics", level: "BEGINNER", description: "Formulas, pivot tables and dashboards in Excel.", tags: ["Excel", "Pivot"] },
  { slug: "powerbi", title: "Power BI", category: "Data Analytics", level: "INTERMEDIATE", description: "Data modeling, DAX and interactive dashboards.", tags: ["Power BI", "DAX"] },
  { slug: "tableau", title: "Tableau", category: "Data Analytics", level: "INTERMEDIATE", description: "Visual analytics and storytelling with Tableau.", tags: ["Tableau", "Viz"] },

  // Microsoft & No-Code Tools
  { slug: "ms-office", title: "Microsoft Office Tools", category: "Microsoft & No-Code", level: "BEGINNER", description: "Word, PowerPoint and productivity with MS Office.", tags: ["Office", "Productivity"] },
  { slug: "scratch-microbit", title: "Scratch & Micro:bit", category: "Microsoft & No-Code", level: "BEGINNER", description: "Block coding with Scratch and physical computing with Micro:bit.", tags: ["Scratch", "Microbit"] },
  { slug: "ai-no-code-tools", title: "NotebookLM, Wokwi, PictoBlox & Teachable Machine", category: "Microsoft & No-Code", level: "BEGINNER", description: "Explore NotebookLM, Wokwi, PictoBlox, MIT App Inventor and Teachable Machine.", tags: ["NotebookLM", "Wokwi", "Teachable Machine"] },

  // Build from Scratch to Deploy
  { slug: "build-deploy", title: "Build Website & App from Scratch to Deploy", category: "Build & Deploy", level: "INTERMEDIATE", description: "Idea → design → code → AI-assisted build → deploy any web/mobile app end to end.", tags: ["Build", "Deploy", "No-Code"] },

  // Game Development with AI
  { slug: "game-dev-ai", title: "Game Development using AI", category: "Game Development", level: "INTERMEDIATE", description: "Prototype and ship games using AI-assisted tools and game engines.", tags: ["Game Dev", "AI"] },

  // Tools Exploration (understanding)
  { slug: "ai-tools-exploration", title: "AI & Extra Tools Exploration", category: "Tools Exploration", level: "BEGINNER", description: "Hands-on exploration of all the latest AI tools and productivity utilities.", tags: ["AI Tools", "Exploration"] },
];

async function main() {
  for (const c of courses) {
    await prisma.course.upsert({
      where: { slug: c.slug },
      update: { ...c, published: true },
      create: { ...c, published: true, isFree: true, rating: 4.5, enrolled: 0 },
    });
  }
  console.log(`✅ Seeded ${courses.length} courses`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
