const translations = {
  zh: {
    navWriting: "文章",
    navProjects: "项目",
    navNow: "近况",
    navAbout: "关于",
    heroEyebrow: "Personal Blog · Research Notes · Building Log",
    heroTitle: "林启煜",
    heroSubtitle:
      "西安交通大学计算机在读硕士研究生，研究兴趣：时间序列、世界模型、异常检测、因果分析。",
    profileName: "林启煜",
    profileLine: "热爱生活，喜欢捣鼓新奇玩意的计算机硕士研究生",
    statNotes: "Notes",
    statProjects: "Projects",
    statSince: "Since",
    nowKicker: "Now",
    nowTitle: "最近在做什么",
    nowItem1Title: "构建个人知识与 Agent 工具链",
    nowItem1Body:
      "把微信记录、读书笔记、代码项目和论文理解整理成可检索、可复用的个人系统。",
    nowItem2Title: "研究 AI 应用与长期学习方法",
    nowItem2Body:
      "关注大模型工具、RAG、个人效率系统，以及如何把想法变成可持续迭代的产品。",
    nowItem3Time: "长期",
    nowItem3Title: "写作、实验、复盘",
    nowItem3Body: "这个博客会沉淀公开笔记：技术细节、项目复盘、论文阅读和个人观察。",
    focusKicker: "Focus",
    focusTitle: "关注方向",
    focus1Title: "AI Agents",
    focus1Body: "从提示词、工作流、工具调用到长期记忆，记录能实际落地的 Agent 系统。",
    focus2Title: "Knowledge Systems",
    focus2Body: "个人数据、检索增强、知识库和可追溯问答的工程实践。",
    focus3Title: "Product Experiments",
    focus3Body: "把小想法快速做成可用原型，验证再迭代。",
    focus4Title: "Thinking in Public",
    focus4Body: "用公开写作逼迫自己把问题、证据和判断说清楚。",
    writingKicker: "Writing",
    writingTitle: "精选文章",
    writingNote: "文章暂无，敬请期待。",
    article1Title: "文章即将上线",
    article1Body: "正在准备中，敬请期待。",
    projectsKicker: "Projects",
    projectsTitle: "项目与实验",
    projectLink: "查看项目",
    notesKicker: "Notebook",
    notesTitle: "全部笔记",
    searchPlaceholder: "搜索标题、摘要或标签",
    filterAll: "全部",
    filterReading: "阅读",
    note1Title: "笔记即将上线",
    note1Body: "正在准备中，敬请期待。",
    emptyState: "没有匹配的笔记。",
    aboutKicker: "About",
    aboutTitle: "关于我",
    aboutBody1: "我是林启煜。",
    aboutBody2: "这个网站用于沉淀我的项目、研究笔记、论文阅读和长期学习过程。",
    backTop: "回到顶部",
  },
  en: {
    navWriting: "Writing",
    navProjects: "Projects",
    navNow: "Now",
    navAbout: "About",
    heroEyebrow: "Personal Blog · Research Notes · Building Log",
    heroTitle: "Lin Qiyu",
    heroSubtitle:
      "Master's student in Computer Science at Xi'an Jiaotong University. Research interests: time series, world models, anomaly detection, causal analysis.",
    profileName: "Lin Qiyu",
    profileLine: "A life-loving CS master's student who enjoys tinkering with novel ideas",
    statNotes: "Notes",
    statProjects: "Projects",
    statSince: "Since",
    nowKicker: "Now",
    nowTitle: "What I am working on",
    nowItem1Title: "Building a personal knowledge and agent toolchain",
    nowItem1Body:
      "Turning chat records, reading notes, code projects, and paper insights into a searchable and reusable personal system.",
    nowItem2Title: "Studying AI applications and durable learning methods",
    nowItem2Body:
      "Focusing on LLM tools, RAG, personal productivity systems, and the path from idea to iterative product.",
    nowItem3Time: "Long term",
    nowItem3Title: "Writing, experimenting, and reviewing",
    nowItem3Body:
      "This blog is a public notebook for technical details, project retrospectives, paper reading, and personal observations.",
    focusKicker: "Focus",
    focusTitle: "Areas of interest",
    focus1Title: "AI Agents",
    focus1Body:
      "Practical agent systems from prompting and workflows to tool use and long-term memory.",
    focus2Title: "Knowledge Systems",
    focus2Body: "Personal data, retrieval augmentation, knowledge bases, and traceable answers.",
    focus3Title: "Product Experiments",
    focus3Body: "Small ideas turned into usable prototypes, validated and improved over time.",
    focus4Title: "Thinking in Public",
    focus4Body: "Public writing as a way to make problems, evidence, and judgment clearer.",
    writingKicker: "Writing",
    writingTitle: "Selected writing",
    writingNote: "No articles yet. Stay tuned.",
    article1Title: "Articles coming soon",
    article1Body: "In preparation. Stay tuned.",
    projectsKicker: "Projects",
    projectsTitle: "Projects and experiments",
    projectLink: "View project",
    notesKicker: "Notebook",
    notesTitle: "All notes",
    searchPlaceholder: "Search titles, summaries, or tags",
    filterAll: "All",
    filterReading: "Reading",
    note1Title: "Notes coming soon",
    note1Body: "In preparation. Stay tuned.",
    emptyState: "No matching notes.",
    aboutKicker: "About",
    aboutTitle: "About me",
    aboutBody1: "I am Lin Qiyu.",
    aboutBody2: "This site is for collecting my projects, research notes, paper reading, and long-term learning.",
    backTop: "Back to top",
  },
};

const root = document.documentElement;
const themeToggle = document.querySelector("#themeToggle");
const langButtons = document.querySelectorAll("[data-lang]");
const searchInput = document.querySelector("#noteSearch");
const filterButtons = document.querySelectorAll("[data-filter]");
const noteCards = document.querySelectorAll(".note-card");
const emptyState = document.querySelector("#emptyState");

let activeFilter = "all";

function applyTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("blog-theme", theme);
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.zh;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dict[key]) node.placeholder = dict[key];
  });

  root.lang = lang === "zh" ? "zh-CN" : "en";
  localStorage.setItem("blog-lang", lang);

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  filterNotes();
}

function filterNotes() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  let visibleCount = 0;

  noteCards.forEach((card) => {
    const tags = card.dataset.tags || "";
    const matchesTag = activeFilter === "all" || tags.includes(activeFilter);
    const matchesQuery = card.textContent.toLowerCase().includes(query);
    const isVisible = matchesTag && matchesQuery;

    card.classList.toggle("hidden", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  emptyState?.classList.toggle("hidden", visibleCount > 0);
}

themeToggle?.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    filterNotes();
  });
});

searchInput?.addEventListener("input", filterNotes);

applyTheme(localStorage.getItem("blog-theme") || "light");
applyLanguage(localStorage.getItem("blog-lang") || "zh");
