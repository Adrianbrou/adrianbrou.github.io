import { Download } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { skills } from '../data/skills'
import profilePic from '../assets/images/profile.jpg' // profile image
import aboutBg from '../assets/images/about-bg.jpg' // background image for About section

const About = () => {
    return (
        <div
            className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${aboutBg})`,
                backgroundBlendMode: 'overlay',
                backgroundColor: 'rgba(0,0,0,0.4)', // subtle overlay for readability
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 text-white">
                    <h1 className="section-title text-white">About Me</h1>
                    <p className="section-subtitle text-gray-200">
                        Skills, Experience & Background
                    </p>
                </div>

                {/* Profile Card */}
                <div className="mb-20">
                    <div className="card p-8 md:p-12 max-w-4xl mx-auto bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            {/* Profile Image with ripple effect */}
                            <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl flex-shrink-0 relative group cursor-pointer">
                                <img
                                    src={profilePic}
                                    alt="Adrian"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                            </div>

                            {/* Bio */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                                    Hi, I'm Adrian
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    I'm a Backend Developer specializing in Python, FastAPI, Flask, and PostgreSQL.
                                    I hold a Master's in Software Engineering and have been building real-world backends ever since —
                                    from a full-stack analytics platform serving 1,500+ member records to FuelCast, a deployed
                                    data-driven app with real-time fuel price analytics.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    In 51 days on Boot.dev's Back-end Developer Path, I completed 7 courses, earned 5 certificates,
                                    solved 569 lessons, and maintained a 32-day streak — without skipping a single day.
                                    I ship clean, tested code every day and can explain every line I've written.
                                </p>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="btn-primary inline-flex items-center gap-2"
                                >
                                    <Download size={20} />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                        My Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill) => {
                            const [ref, isVisible] = useScrollAnimation()
                            return (
                                <div
                                    key={skill.id}
                                    ref={ref}
                                    className={`card p-6 transition-all duration-700 ${isVisible
                                            ? 'opacity-100 translate-y-0'
                                            : 'opacity-0 translate-y-10'
                                        }`}
                                >
                                    <div className="text-5xl mb-4">{skill.icon}</div>
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {skill.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {skill.description}
                                    </p>
                                    <div className="relative">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                Proficiency
                                            </span>
                                            <span className="text-sm font-bold text-primary-600 dark:text-primary-500">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-primary-600 to-blue-500 h-2 rounded-full transition-all duration-1000"
                                                style={{
                                                    width: isVisible ? `${skill.level}%` : '0%',
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
