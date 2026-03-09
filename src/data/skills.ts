type Skill = {
    id: number,
    name: string,
    icon: string,
    description: string
    level: number
}

export const skills: Skill[] = [
    {
        id: 1,
        name: 'Python',
        icon: '🐍',
        description: 'Backend Development, OOP, Automation, Data Processing',
        level: 95
    },
    {
        id: 2,
        name: 'FastAPI / Flask',
        icon: '⚡',
        description: 'REST APIs, ETL Pipelines, Backend Architecture, Swagger UI',
        level: 90
    },
    {
        id: 3,
        name: 'PostgreSQL / SQL',
        icon: '🗄️',
        description: 'Query Optimization, Complex JOINs, CTEs, Window Functions — Oracle Certified',
        level: 90
    },
    {
        id: 4,
        name: 'Data Processing',
        icon: '📊',
        description: 'Pandas, NumPy, ETL Pipelines, Power BI Dashboards, Analytics',
        level: 80
    },
    {
        id: 5,
        name: 'Git / GitHub',
        icon: '🔀',
        description: '179+ contributions, 21 repositories, daily shipping',
        level: 85
    },
    {
        id: 6,
        name: 'React / Frontend',
        icon: '💻',
        description: 'React, React Native Expo, HTML, CSS, Tailwind — Frontend Basics',
        level: 65
    },
    {
        id: 7,
        name: 'Linux / DevOps',
        icon: '🐧',
        description: 'Linux CLI, Deployment, Server-side Logic, System Tools',
        level: 75
    },
    {
        id: 8,
        name: 'Machine Learning',
        icon: '🤖',
        description: 'Scikit-learn — ML 300 Certification In Progress',
        level: 60
    }
];
