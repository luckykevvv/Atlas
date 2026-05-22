export const defaultLocale = 'zh';

export const locales = {
	zh: {
		label: '中文',
		lang: 'zh-CN',
		path: '/',
	},
	en: {
		label: 'English',
		lang: 'en',
		path: '/en/',
	},
} as const;

export type Locale = keyof typeof locales;

const shared = {
	name: 'Atlas',
	email: 'luckykevvv@gmail.com',
	emailIcon: '@',
	avatar: '/avatar.png',
	visitorCount: '0001',
	background: {
		image: '',
		blur: '0px',
		opacity: 0,
		scale: 1,
		overlay: 'radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 30%), linear-gradient(180deg, #050505 0%, #000 55%, #090909 100%)',
		rain: {
			enabled: false,
			mode: 'falling',
			density: 0.7,
			speed: 1,
			dropColor: 'rgba(210, 230, 255, 0.5)',
			rippleColor: 'rgba(210, 230, 255, 0.34)',
			maxDrops: 170,
			maxRipples: 48,
		},
	},
	socials: [
		{ label: 'GitHub', href: 'https://github.com/luckykevvv', icon: 'GH' },
		{ label: 'B站', href: 'https://space.bilibili.com/285705387', icon: 'B' },
		{ label: 'Folo', href: 'https://folo.is', icon: 'F' },
	],
};

const siteConfigs = {
	zh: {
		...shared,
		title: '学生 / 设计工程学习者',
		description: '一个黑色系 Astro 个人网站模板，用来放课程记录、小项目、博客笔记、简历经历和个人链接。',
		nav: [
			{ label: '首页', href: '/' },
			{ label: '关于我', href: '/about' },
			{ label: '项目', href: '/projects' },
			{ label: '博客', href: '/blog' },
			{ label: '图谱', href: '/graph' },
			{ label: '简历', href: '/resume' },
			{ label: '联系', href: '/contact' },
		],
		quickLinks: [
			{ label: '博客', href: '/blog', icon: '书' },
			{ label: '项目', href: '/projects', icon: '作' },
			{ label: '关于', href: '/about', icon: '我' },
			{ label: '简历', href: '/resume', icon: '历' },
			{ label: '联系', href: '/contact', icon: '@' },
		],
		today: {
			title: '今日小状态',
			current: '正在：整理课程笔记',
			next: '稍后：改一个小项目',
			note: '今日目标：把 README 写明白',
			timeLabel: '我的当前时间',
			timeZone: 'Asia/Shanghai',
			dateLocale: 'zh-CN',
			greetings: ['凌晨好', '早上好', '上午好', '中午好', '下午好', '晚上好'],
		},
		ui: {
			headerCta: '打个招呼',
			projectCta: '查看项目 ->',
			projectLiveCta: '访问项目',
			projectRepoCta: '查看代码',
			backToList: '返回列表',
			socialCardCta: '查看主页',
		},
		home: {
			eyebrowNote: '一个学生的主页入口，放作品、笔记和正在折腾的东西。',
			visitorText: '访客编号 #{count}，欢迎翻翻这个小角落',
			headline: '把上课、折腾和突然冒出的想法都放在这里。',
			intro: '这是一个更适合学生使用的 Astro 个人主页模板：可以放课程记录、项目作品、博客笔记，也可以塞一点只有自己觉得好玩的入口。',
			primaryCta: { label: '看看项目', href: '/projects' },
			secondaryCta: { label: '打个招呼', href: '/contact' },
			services: [
				{ label: '课程作业与学习记录', href: '/blog' },
				{ label: '小项目和奇怪实验', href: '/projects' },
				{ label: '设计练习与前端复盘', href: '/about' },
				{ label: '博客、书签和日常入口', href: '/contact' },
			],
			projects: {
				kicker: 'Small Builds',
				title: '最近做的小项目',
				description: '不一定成熟，也不一定有很大的目标，但每一个都记录了一点学习过程。',
			},
			notes: {
				kicker: 'Notes',
				title: '最新笔记',
				description: '课堂、前端、设计、生活观察，都可以变成 Markdown 里的碎碎念。',
			},
		},
		pages: {
			about: {
				title: '关于我',
				description: '关于学生个人主页、学习方向、技能和兴趣的介绍。',
				kicker: 'About',
				heading: '我在课程、代码和兴趣项目之间慢慢探索。',
				intro: '这个模板适合介绍一个正在学习设计、前端、内容创作或任何个人兴趣方向的学生。',
				profileLabel: 'Profile',
				profile: '喜欢把学到的东西做成页面、小工具和可以回头看的笔记。',
				paragraphs: [
					'我关心的不只是页面长什么样，也包括内容怎么组织、学习过程怎么留下来、项目以后还能不能继续改。',
					'这里可以写你的专业、兴趣、最近在学的技术、社团经历，或者只是放一些关于自己的碎碎念。',
				],
				servicesTitle: '主页可以放什么',
				servicesDescription: '这些模块都可以在 src/config/site.ts 里替换成自己的栏目。',
				serviceDescription: '把学习过程、作品和日常入口整理在一起，让个人主页更像一个长期使用的小空间。',
				services: [
					{ label: '学习记录', description: '记录课程、阅读、实验和阶段性复盘。' },
					{ label: '项目作品', description: '展示小工具、课程项目、作品集和开源尝试。' },
					{ label: '长期笔记', description: '用 Markdown、双链和知识图谱组织内容。' },
					{ label: '个人入口', description: '集中放置社交链接、简历和联系方式。' },
				],
				skillsTitle: '技能栈',
			},
			projects: {
				title: '项目 / 作品集',
				description: '课程作业、小项目、作品集和实验记录。',
				kicker: 'Portfolio',
				heading: '项目 / 作品集',
				intro: '这里展示课程作业、小工具、设计练习和个人实验。每个项目都可以通过 Markdown 维护详情。',
			},
			blog: {
				title: '博客 / 笔记',
				description: '关于课程、前端、设计、生活和长期学习的笔记。',
				kicker: 'Notes',
				heading: '博客 / 笔记',
				intro: '用 Markdown 记录学习过程、项目复盘、课堂笔记和日常观察。草稿文章会在列表中自动过滤。',
			},
			graph: {
				title: '知识图谱',
				description: '由博客双链生成的知识图谱。',
				kicker: 'Graph',
				heading: '知识图谱',
				intro: '每篇笔记都是一个节点，双链会在这里形成连接。',
				controls: { repulsion: '斥力', distance: '间距', motion: '动态' },
			},
			resume: {
				title: '简历 / 经历',
				description: '学生经历、技能、项目和学习记录。',
				kicker: 'Resume',
				heading: '简历 / 经历',
				intro: '这里适合放置你的学习经历、社团经历、项目记录、技能栈和简历链接。当前内容来自 src/config/site.ts。',
				profileLabel: 'Profile',
				emailLabel: 'Email',
				linksLabel: 'Links',
				skillsLabel: 'Skills',
				highlightsLabel: 'Highlights',
				downloadResumeLabel: '下载 PDF 简历',
			},
			contact: {
				title: '联系方式',
				description: '联系这个个人主页的作者。',
				kicker: 'Contact',
				heading: '有想聊的项目、笔记或者个人网站，都可以发来看看。',
				intro: '适合放邮箱、GitHub、B站、Folo、Telegram 或任何你想公开的联系方式。',
			},
		},
		contactPanel: {
			kicker: 'Message',
			heading: '看到有意思的项目、笔记或者同样在折腾个人网站，可以来聊聊。',
		},
		skills: ['Astro', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'UX Engineering', 'Content Strategy'],
		resume: {
			summary: '一个用于展示学习经历、技能、项目和简历文件的模板化简历区块。',
			details: [
				{ label: 'Location', value: 'Campus / Online' },
				{ label: 'Focus', value: 'Design Engineering / Frontend / Content' },
			],
			links: [
				{ label: '项目', href: '/projects' },
				{ label: '笔记', href: '/blog' },
				{ label: '联系', href: '/contact' },
			],
			files: [],
			highlights: ['可在这里放竞赛、奖项或课程亮点', '可在这里放开源贡献或社团经历'],
			sections: [
				{
					title: '经历',
					items: [
						{
							period: '2025 - Now',
							title: 'Student Builder',
							org: '校园与课余时间',
							description: '把课程作业、个人兴趣和前端练习整理成可以长期维护的项目与笔记。',
							points: ['Learning', 'Projects', 'Notes'],
							link: [],
						},
						{
							period: '2024 - 2025',
							title: 'Frontend Learner',
							org: '自学项目',
							description: '练习 Astro、TypeScript、Tailwind CSS 和内容驱动网站，把想法做成页面。',
							points: ['Astro', 'TypeScript', 'Tailwind CSS'],
							link: [],
						},
					],
				},
			],
		},
	},
	en: {
		...shared,
		title: 'Student / Design Engineering Learner',
		description: 'A dark Astro personal website template for course notes, small projects, writing, resume-style experience, and personal links.',
		nav: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Projects', href: '/projects' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Graph', href: '/graph' },
			{ label: 'Resume', href: '/resume' },
			{ label: 'Contact', href: '/contact' },
		],
		quickLinks: [
			{ label: 'Blog', href: '/blog', icon: 'N' },
			{ label: 'Projects', href: '/projects', icon: 'P' },
			{ label: 'About', href: '/about', icon: 'A' },
			{ label: 'Resume', href: '/resume', icon: 'R' },
			{ label: 'Contact', href: '/contact', icon: '@' },
		],
		today: {
			title: 'Today',
			current: 'Now: organizing course notes',
			next: 'Next: polishing a small project',
			note: 'Goal: make the README clear',
			timeLabel: 'Current time',
			timeZone: 'UTC',
			dateLocale: 'en',
			greetings: ['Good late night', 'Good early morning', 'Good morning', 'Good noon', 'Good afternoon', 'Good evening'],
		},
		ui: {
			headerCta: 'Say hi',
			projectCta: 'View project ->',
			projectLiveCta: 'Visit project',
			projectRepoCta: 'View code',
			backToList: 'Back to list',
			socialCardCta: 'View profile',
		},
		home: {
			eyebrowNote: 'A student homepage for work, notes, and things currently being explored.',
			visitorText: 'Visitor #{count}, welcome to this small corner',
			headline: 'A place for classes, experiments, and sudden ideas.',
			intro: 'Atlas is a student-friendly Astro personal homepage template for course notes, projects, blog posts, and a few links that feel fun to keep around.',
			primaryCta: { label: 'See projects', href: '/projects' },
			secondaryCta: { label: 'Say hi', href: '/contact' },
			services: [
				{ label: 'Course notes and study logs', href: '/blog' },
				{ label: 'Small builds and experiments', href: '/projects' },
				{ label: 'Design practice and frontend reviews', href: '/about' },
				{ label: 'Blog, bookmarks, and daily links', href: '/contact' },
			],
			projects: {
				kicker: 'Small Builds',
				title: 'Recent small projects',
				description: 'Not every project needs to be big. Each one captures a bit of the learning process.',
			},
			notes: {
				kicker: 'Notes',
				title: 'Latest notes',
				description: 'Classes, frontend, design, and daily observations can all become Markdown notes.',
			},
		},
		pages: {
			about: {
				title: 'About',
				description: 'About the student homepage, learning direction, skills, and interests.',
				kicker: 'About',
				heading: 'Exploring between classes, code, and side projects.',
				intro: 'This template works well for students learning design, frontend, content creation, or any personal interest.',
				profileLabel: 'Profile',
				profile: 'I like turning what I learn into pages, small tools, and notes I can revisit.',
				paragraphs: [
					'I care about how content is organized, how the learning process is recorded, and whether projects can keep evolving later.',
					'Use this space for your major, interests, current learning stack, clubs, or a few personal notes.',
				],
				servicesTitle: 'What this site can hold',
				servicesDescription: 'Replace these modules in src/config/site.ts with your own sections.',
				serviceDescription: 'Collect learning, projects, and daily links into a small personal space you can keep using.',
				services: [
					{ label: 'Study logs', description: 'Record classes, reading, experiments, and project reflections.' },
					{ label: 'Project work', description: 'Show small tools, course projects, portfolio pieces, and open-source experiments.' },
					{ label: 'Long-term notes', description: 'Organize Markdown notes with wiki links and a knowledge graph.' },
					{ label: 'Personal links', description: 'Collect social links, resume files, and contact information.' },
				],
				skillsTitle: 'Skills',
			},
			projects: {
				title: 'Projects / Portfolio',
				description: 'Course work, small projects, portfolio pieces, and experiments.',
				kicker: 'Portfolio',
				heading: 'Projects / Portfolio',
				intro: 'Show course work, small tools, design practice, and personal experiments. Each project can be maintained with Markdown.',
			},
			blog: {
				title: 'Blog / Notes',
				description: 'Notes about classes, frontend, design, life, and long-term learning.',
				kicker: 'Notes',
				heading: 'Blog / Notes',
				intro: 'Write learning logs, project reviews, class notes, and daily observations in Markdown. Drafts are hidden from lists automatically.',
			},
			graph: {
				title: 'Knowledge Graph',
				description: 'A knowledge graph generated from wiki links in blog posts.',
				kicker: 'Graph',
				heading: 'Knowledge Graph',
				intro: 'Each note is a node. Wiki links create connections between notes.',
				controls: { repulsion: 'Repulsion', distance: 'Distance', motion: 'Motion' },
			},
			resume: {
				title: 'Resume / Experience',
				description: 'Student experience, skills, projects, and learning records.',
				kicker: 'Resume',
				heading: 'Resume / Experience',
				intro: 'Use this page for education, club experience, projects, skills, and resume files. The current content comes from src/config/site.ts.',
				profileLabel: 'Profile',
				emailLabel: 'Email',
				linksLabel: 'Links',
				skillsLabel: 'Skills',
				highlightsLabel: 'Highlights',
				downloadResumeLabel: 'Download PDF Resume',
			},
			contact: {
				title: 'Contact',
				description: 'Contact the author of this personal website.',
				kicker: 'Contact',
				heading: 'Send a note about projects, writing, or personal websites.',
				intro: 'Add your email, GitHub, Bilibili, Folo, Telegram, or any public contact link here.',
			},
		},
		contactPanel: {
			kicker: 'Message',
			heading: 'If you find an interesting project or note here, feel free to say hi.',
		},
		skills: ['Astro', 'TypeScript', 'Tailwind CSS', 'Design Systems', 'UX Engineering', 'Content Strategy'],
		resume: {
			summary: 'A template resume area for education, skills, projects, highlights, and downloadable resume files.',
			details: [
				{ label: 'Location', value: 'Campus / Online' },
				{ label: 'Focus', value: 'Design Engineering / Frontend / Content' },
			],
			links: [
				{ label: 'Projects', href: '/projects' },
				{ label: 'Notes', href: '/blog' },
				{ label: 'Contact', href: '/contact' },
			],
			files: [],
			highlights: ['Add awards, competitions, or course highlights here', 'Add open-source contributions or club experience here'],
			sections: [
				{
					title: 'Experience',
					items: [
						{
							period: '2025 - Now',
							title: 'Student Builder',
							org: 'Campus and spare time',
							description: 'Turning coursework, personal interests, and frontend practice into maintainable projects and notes.',
							points: ['Learning', 'Projects', 'Notes'],
							link: [],
						},
						{
							period: '2024 - 2025',
							title: 'Frontend Learner',
							org: 'Self-directed projects',
							description: 'Practicing Astro, TypeScript, Tailwind CSS, and content-driven websites by building real pages.',
							points: ['Astro', 'TypeScript', 'Tailwind CSS'],
							link: [],
						},
					],
				},
			],
		},
	},
} as const;

export function isLocale(locale: string | undefined): locale is Locale {
	return locale === 'zh' || locale === 'en';
}

export function getLocaleFromUrl(url: URL): Locale {
	const firstSegment = url.pathname.split('/').filter(Boolean)[0];
	return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function localizePath(locale: Locale, path: string): string {
	if (path.startsWith('http') || path.startsWith('mailto:')) return path;
	if (locale === defaultLocale) return path;
	if (path === '/') return `/${locale}/`;
	if (path.startsWith(`/${locale}/`)) return path;
	return `/${locale}${path}`;
}

function localizeSiteLinks<T extends typeof siteConfigs[Locale]>(config: T, locale: Locale): T {
	return {
		...config,
		nav: config.nav.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		quickLinks: config.quickLinks.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		home: {
			...config.home,
			primaryCta: { ...config.home.primaryCta, href: localizePath(locale, config.home.primaryCta.href) },
			secondaryCta: { ...config.home.secondaryCta, href: localizePath(locale, config.home.secondaryCta.href) },
			services: config.home.services.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		},
		pages: {
			...config.pages,
			about: {
				...config.pages.about,
				services: config.pages.about.services.map((item) => ('href' in item && item.href ? { ...item, href: localizePath(locale, item.href) } : item)),
			},
		},
		resume: {
			...config.resume,
			links: config.resume.links.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		},
	} as T;
}

export function getSiteConfig(localeOrUrl: Locale | URL = defaultLocale) {
	const locale = localeOrUrl instanceof URL ? getLocaleFromUrl(localeOrUrl) : localeOrUrl;
	return localizeSiteLinks(siteConfigs[locale], locale);
}

export const siteConfig = getSiteConfig(defaultLocale);
