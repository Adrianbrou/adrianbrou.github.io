import { ExternalLink, Award, BookOpen, Zap, Star } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const bootdevCourses = [
    { title: 'Learn to Code in Python', date: 'Feb 23, 2026', icon: '🐍' },
    { title: 'Learn Object Oriented Programming in Python', date: 'Mar 6, 2026', icon: '🧩' },
    { title: 'Learn Linux', date: 'Feb 25, 2026', icon: '🐧' },
    { title: 'Learn Git', date: 'Mar 2, 2026', icon: '🔀' },
    { title: 'Learn Data Visualization with Power BI', date: 'Feb 20, 2026', icon: '📊' },
]

const bootdevProjects = [
    {
        title: 'Build a Bookbot in Python',
        date: 'Feb 25, 2026',
        description: 'Text analysis tool that reads a book and generates word frequency and character statistics.',
        icon: '📚',
        github: 'https://github.com/Adrianbrou/bootdev',
    },
    {
        title: 'Build Asteroids using Python and Pygame',
        date: 'Mar 7, 2026',
        description: 'Full arcade game built from scratch — OOP, game loops, collision detection, real-time rendering.',
        icon: '🎮',
        github: 'https://github.com/Adrianbrou/pygame',
    },
]

const bootdevAchievements = [
    {
        title: 'Master',
        subtitle: 'Milestone',
        description: '480 exercises completed',
        date: 'Mar 3, 2026',
        color: 'bg-purple-600',
        icon: '⚔️',
    },
    {
        title: 'Diamond Sharpshooter',
        subtitle: 'Sharpshooter',
        description: '15 sharpshooter sprees',
        date: 'Feb 25, 2026',
        color: 'bg-cyan-500',
        icon: '💎',
    },
    {
        title: 'Gold Streak',
        subtitle: 'Streak',
        description: '21 consecutive study days',
        date: 'Feb 26, 2026',
        color: 'bg-yellow-500',
        icon: '🔥',
    },
    {
        title: 'Bronze Fellowship',
        subtitle: 'Fellowship',
        description: '1 karma earned in Discord',
        date: 'Feb 9, 2026',
        color: 'bg-orange-600',
        icon: '🤝',
    },
]

const otherCerts = [
    {
        title: 'SQL Developer Certification',
        issuer: 'Oracle',
        status: 'Completed',
        icon: '🗄️',
        color: 'bg-red-600',
    },
    {
        title: 'Machine Learning 300',
        issuer: 'Boot.dev',
        status: 'In Progress',
        icon: '🤖',
        color: 'bg-blue-600',
    },
    {
        title: 'Back-end Developer Path (Python & Go)',
        issuer: 'Boot.dev',
        status: 'In Progress',
        icon: '⚡',
        color: 'bg-orange-500',
    },
]

const Certifications = () => {
    const [heroRef, heroVisible] = useScrollAnimation()

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="section-title">Certifications & Achievements</h1>
                    <p className="section-subtitle">
                        Courses completed, certificates earned, and milestones reached
                    </p>
                </div>

                {/* Boot.dev Profile Card */}
                <div
                    ref={heroRef}
                    className={`mb-16 transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="card p-8 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-800 border-l-4 border-orange-500">
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-orange-500 flex items-center justify-center text-4xl flex-shrink-0">
                                🎓
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Boot.dev</h2>
                                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-bold rounded-full">
                                        Level 50 Scholar
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Back-end Developer Path (Python & Go) — joined Jan 17, 2026. Not a single day missed.
                                </p>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                    {[
                                        { label: 'Lessons Solved', value: '569' },
                                        { label: 'Courses Done', value: '5' },
                                        { label: 'Current Streak', value: '32 days' },
                                        { label: 'XP Earned', value: '115,816' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="text-center">
                                            <div className="text-2xl font-bold text-orange-500">{stat.value}</div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <a
                                href="https://www.boot.dev/u/overcookedbath96"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors flex-shrink-0"
                            >
                                View Profile
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Boot.dev Certificates */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <Award className="text-white" size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Boot.dev Certificates <span className="text-orange-500">(5)</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bootdevCourses.map((course, index) => {
                            const [ref, isVisible] = useScrollAnimation()
                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className={`card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <div className="text-4xl mb-3">{course.icon}</div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                                        {course.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{course.date}</span>
                                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                                            ✓ Completed
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Boot.dev Projects */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <BookOpen className="text-white" size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Boot.dev Projects <span className="text-orange-500">(2)</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {bootdevProjects.map((project, index) => {
                            const [ref, isVisible] = useScrollAnimation()
                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className={`card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <div className="text-4xl mb-3">{project.icon}</div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-sm text-primary-600 dark:text-primary-500 font-semibold hover:underline"
                                        >
                                            GitHub <ExternalLink size={13} />
                                        </a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Boot.dev Achievements */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <Zap className="text-white" size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Achievements <span className="text-orange-500">(4)</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bootdevAchievements.map((ach, index) => {
                            const [ref, isVisible] = useScrollAnimation()
                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className={`card p-6 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <div className={`w-16 h-16 ${ach.color} rounded-full flex items-center justify-center text-3xl mx-auto mb-4`}>
                                        {ach.icon}
                                    </div>
                                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                                        {ach.subtitle}
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{ach.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{ach.description}</p>
                                    <span className="text-xs text-gray-400">{ach.date}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Other Certifications */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                            <Star className="text-white" size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Other Certifications
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherCerts.map((cert, index) => {
                            const [ref, isVisible] = useScrollAnimation()
                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className={`card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                >
                                    <div className={`w-14 h-14 ${cert.color} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                                        {cert.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{cert.issuer}</p>
                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                        cert.status === 'Completed'
                                            ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                                            : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                    }`}>
                                        {cert.status === 'Completed' ? '✓ ' : '⏳ '}{cert.status}
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Certifications
