type Skill = {
    id: number,
    name: string,
    icon: string,
    description: string
    level: number
    category: 'hard' | 'soft'
}

export const skills: Skill[] = [
    // ── Hard Skills ──────────────────────────────────────────────
    {
        id: 1,
        name: 'Python',
        icon: '🐍',
        description: 'Backend development, OOP, functional programming, automation, scripting',
        level: 95,
        category: 'hard'
    },
    {
        id: 2,
        name: 'FastAPI / Flask',
        icon: '⚡',
        description: 'REST API design, backend architecture, Swagger UI, ETL pipelines',
        level: 90,
        category: 'hard'
    },
    {
        id: 3,
        name: 'PostgreSQL / SQL',
        icon: '🗄️',
        description: 'Complex JOINs, CTEs, window functions, query optimization — Oracle SQL Certified',
        level: 90,
        category: 'hard'
    },
    {
        id: 4,
        name: 'Authentication & Security',
        icon: '🔐',
        description: 'JWT auth, secure data storage, CRUD operations, user session management',
        level: 85,
        category: 'hard'
    },
    {
        id: 5,
        name: 'Data Structures & Algorithms',
        icon: '🧠',
        description: 'DSA fundamentals, problem-solving, algorithm design — Boot.dev path',
        level: 70,
        category: 'hard'
    },
    {
        id: 6,
        name: 'Data Processing & Analytics',
        icon: '📊',
        description: 'Pandas, NumPy, ETL pipelines, Power BI dashboards, Excel reporting',
        level: 80,
        category: 'hard'
    },
    {
        id: 7,
        name: 'Git / GitHub',
        icon: '🔀',
        description: '179+ contributions, 21 repos, branching, pull requests, daily commits',
        level: 85,
        category: 'hard'
    },
    {
        id: 8,
        name: 'Linux & Deployment',
        icon: '🐧',
        description: 'Linux CLI, server-side logic, Railway & Vercel deployment, system tools',
        level: 75,
        category: 'hard'
    },
    {
        id: 9,
        name: 'React / Frontend',
        icon: '💻',
        description: 'React, React Native Expo, HTML, CSS, Tailwind — functional frontend basics',
        level: 65,
        category: 'hard'
    },
    {
        id: 10,
        name: 'Go (Golang)',
        icon: '🐹',
        description: 'Currently learning via Boot.dev — HTTP servers, system design, concurrency',
        level: 30,
        category: 'hard'
    },
    {
        id: 11,
        name: 'Machine Learning',
        icon: '🤖',
        description: 'Scikit-learn, predictive modeling — ML 300 Certification In Progress',
        level: 60,
        category: 'hard'
    },
    // ── Soft Skills ──────────────────────────────────────────────
    {
        id: 12,
        name: 'Problem-Solving',
        icon: '🔎',
        description: 'Debugging, root-cause analysis, writing code I can explain line by line',
        level: 95,
        category: 'soft'
    },
    {
        id: 13,
        name: 'Fast Learning',
        icon: '🚀',
        description: '569 lessons in 51 days, no days missed — consistent, self-directed learner',
        level: 95,
        category: 'soft'
    },
    {
        id: 14,
        name: 'Leadership',
        icon: '🤝',
        description: '10+ years managing trainer teams, coordinating 100+ clients across two countries',
        level: 90,
        category: 'soft'
    },
    {
        id: 15,
        name: 'Client Communication',
        icon: '💬',
        description: 'Requirements gathering, delivering custom solutions, ongoing stakeholder support',
        level: 88,
        category: 'soft'
    },
    {
        id: 16,
        name: 'Consistency & Discipline',
        icon: '🔥',
        description: '32-day study streak, 65 commits in one month, ships every single day',
        level: 95,
        category: 'soft'
    },
];
