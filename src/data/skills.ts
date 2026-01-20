// export const skills = [
//     { id: 1, name: 'Web Development', icon: '💻', description: 'HTML, CSS, JavaScript, React', level: 85 },
//     { id: 2, name: 'Python', icon: '🐍', description: 'Data Analysis, Pandas, NumPy', level: 80 },
//     { id: 3, name: 'Power BI', icon: '📊', description: 'Dashboards & Visualization', level: 75 },
//     { id: 4, name: 'SQL', icon: '🗄️', description: 'MySQL, PostgreSQL', level: 70 },
//     { id: 5, name: 'React', icon: '⚛️', description: 'Modern React, Hooks, Context', level: 80 },
//     { id: 6, name: 'Git', icon: '🔀', description: 'Version Control', level: 75 }
// ]
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
        description: 'Data Analysis, Flask, FastAPI, Automation',
        level: 85
    },
    {
        id: 2,
        name: 'Java (Basics)',
        icon: '☕',
        description: 'Object-Oriented Programming, Small Projects',
        level: 60
    },
    {
        id: 3,
        name: 'SQL & Oracle',
        icon: '🗄️',
        description: 'Database Design, Queries, Data Management',
        level: 80
    },
    {
        id: 4,
        name: 'Power BI & Excel',
        icon: '📊',
        description: 'Dashboards, Reporting, Data Visualization',
        level: 75
    },
    {
        id: 5,
        name: 'Web Development',
        icon: '💻',
        description: 'HTML, CSS, Front-End Basics, Back-End with Python',
        level: 70
    },
    {
        id: 6,
        name: 'Testing & IT Troubleshooting',
        icon: '🛠️',
        description: 'Problem Solving, Debugging, System Analysis',
        level: 75
    },
    {
        id: 7,
        name: 'Leadership & Collaboration',
        icon: '🤝',
        description: 'Team Management, Mentoring, Strategic Thinking',
        level: 90
    },
    {
        id: 8,
        name: 'Adaptability & Problem-Solving',
        icon: '⚡',
        description: 'Quick Learner, Critical Thinking, Flexible Approach',
        level: 85
    }
];
