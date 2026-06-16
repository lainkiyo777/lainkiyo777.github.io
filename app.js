const translations = {
  zh: {
    navWriting: "文章",
    navProjects: "项目",
    navNow: "近况",
    navAbout: "关于",
    heroEyebrow: "Personal Blog · Research Notes · Building Log",
    heroTitle: "林启煜",
    heroSubtitle:
      "这里放你的长期身份：研究兴趣、工程方向、正在构建的产品，和你愿意持续公开记录的思考。",
    profileName: "Lin Qiyu",
    profileLine: "AI builder / independent notes",
    statArticles: "Articles",
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
    writingNote: "先放三篇样例，之后可以改成真实文章链接或 Markdown 生成的页面。",
    article1Title: "如何搭建一个长期可维护的个人博客",
    article1Body: "从主页定位、内容栏目、部署方式到写作节奏，记录这个站点的第一版设计。",
    article2Title: "把聊天记录变成个人知识系统",
    article2Body: "RAG、向量索引和人物画像如何组合成一个真正有用的私人工作台。",
    article3Title: "一篇论文应该如何精读",
    article3Body: "把论文拆成问题、方法、实验、局限和可迁移启发，形成可复用模板。",
    projectsKicker: "Projects",
    projectsTitle: "项目与实验",
    project1Title: "Personal Blog",
    project1Body: "一个轻量、可部署、可持续写作的个人主页模板。",
    project2Title: "Persona Workbench",
    project2Body: "把个人聊天数据整理成可查询、可分析、可复盘的交互系统。",
    project3Title: "Paper Reading System",
    project3Body: "一套用于论文精读、问题追踪和跨论文知识沉淀的方法。",
    projectLink: "查看项目",
    projectLink2: "查看项目",
    projectLink3: "查看项目",
    notesKicker: "Notebook",
    notesTitle: "全部笔记",
    searchPlaceholder: "搜索标题、摘要或标签",
    filterAll: "全部",
    filterReading: "阅读",
    note1Title: "为什么个人博客仍然值得做",
    note1Body: "社交媒体负责传播，个人博客负责沉淀、组织和长期可信的表达。",
    note2Title: "读论文时先找问题定义",
    note2Body: "如果没有先抓住问题定义，方法细节会变成一堆无法判断价值的术语。",
    note3Title: "先做可发布版本，再做内容管理系统",
    note3Body: "早期博客最重要的是能发布、能维护、能表达清楚，而不是功能完整。",
    note4Title: "公开写作是一种思维压缩",
    note4Body: "当读者不存在于脑内时，很多模糊判断会一直留在模糊状态。",
    emptyState: "没有匹配的笔记。",
    aboutKicker: "About",
    aboutTitle: "关于这个站点",
    aboutBody1:
      "这个页面借鉴了参考站点的「个人主页 + 研究/项目索引 + 博客入口」结构，但没有复制内容或视觉细节。它更适合中文个人博客：首屏说明你是谁，随后展示近况、关注方向、文章、项目和笔记。",
    aboutBody2:
      "你可以把这里改成真实履历、研究方向、社交链接和文章列表。后续如果想升级，可以接入 Markdown、Astro、Next.js 或 GitHub Actions 自动构建。",
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
      "Use this space for your long-term identity: research interests, engineering direction, products you are building, and ideas you want to keep in public.",
    profileName: "Lin Qiyu",
    profileLine: "AI builder / independent notes",
    statArticles: "Articles",
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
    writingNote:
      "These are sample entries. Replace them with real links or generate pages from Markdown later.",
    article1Title: "How to build a maintainable personal blog",
    article1Body:
      "Positioning, content structure, deployment, and the writing rhythm behind this first version.",
    article2Title: "Turning chat records into a personal knowledge system",
    article2Body:
      "How RAG, vector search, and persona modeling can become a useful private workbench.",
    article3Title: "How I read a paper deeply",
    article3Body:
      "A reusable template for problem definition, method, experiments, limits, and transferable ideas.",
    projectsKicker: "Projects",
    projectsTitle: "Projects and experiments",
    project1Title: "Personal Blog",
    project1Body: "A lightweight personal homepage template built for publishing and iteration.",
    project2Title: "Persona Workbench",
    project2Body: "An interactive system for querying, analyzing, and reviewing personal chat data.",
    project3Title: "Paper Reading System",
    project3Body: "A method for deep paper reading, question tracking, and cross-paper memory.",
    projectLink: "View project",
    projectLink2: "View project",
    projectLink3: "View project",
    notesKicker: "Notebook",
    notesTitle: "All notes",
    searchPlaceholder: "Search titles, summaries, or tags",
    filterAll: "All",
    filterReading: "Reading",
    note1Title: "Why a personal blog is still worth building",
    note1Body:
      "Social platforms spread ideas; a personal blog organizes them into durable public memory.",
    note2Title: "Find the problem definition before reading a paper",
    note2Body:
      "Without the problem definition, method details become terminology without a value frame.",
    note3Title: "Publish first, then build the CMS",
    note3Body:
      "For an early blog, publishing, maintenance, and clarity matter more than feature breadth.",
    note4Title: "Public writing compresses thought",
    note4Body:
      "When there is no imagined reader, many vague judgments remain vague for too long.",
    emptyState: "No matching notes.",
    aboutKicker: "About",
    aboutTitle: "About this site",
    aboutBody1:
      "This page follows the reference site's structure of homepage, research/project index, and blog entry points, without copying its content or visual details. It is shaped for a Chinese-first personal blog: identity first, then current work, focus areas, writing, projects, and notes.",
    aboutBody2:
      "You can replace this with real background, research interests, social links, and articles. Later, the site can grow into Markdown, Astro, Next.js, or a GitHub Actions build.",
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
