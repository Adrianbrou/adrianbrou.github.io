import { useState } from 'react'
import { ExternalLink, Award, BookOpen, Zap, Star, X, GraduationCap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

import powerbiCert from '../assets/certs/powerbi.png'
import pythonCert from '../assets/certs/python.png'
import linuxCert from '../assets/certs/linux.png'
import bookbotCert from '../assets/certs/bookbot.png'
import gitCert from '../assets/certs/git.png'
import oopCert from '../assets/certs/oop.png'
import asteroidsCert from '../assets/certs/asteroids.png'
import awsCert from '../assets/certs/aws.png'

const bootdevCourses = [
    { title: 'Learn Data Visualization with Power BI', date: 'Feb 20, 2026', icon: '📊', image: powerbiCert },
    { title: 'Introduction to Python Course', date: 'Feb 23, 2026', icon: '🐍', image: pythonCert },
    { title: 'Learn Linux', date: 'Feb 25, 2026', icon: '🐧', image: linuxCert },
    { title: 'Learn Git', date: 'Mar 2, 2026', icon: '🔀', image: gitCert },
    { title: 'Learn Object Oriented Programming in Python', date: 'Mar 6, 2026', icon: '🧩', image: oopCert },
    { title: 'Learn AWS', date: 'Apr 13, 2026', icon: '☁️', image: awsCert },
]

const bootdevProjects = [
    {
        title: 'Build a Bookbot in Python',
        date: 'Feb 25, 2026',
        description: 'Text analysis tool that reads a book and generates word frequency and character statistics.',
        icon: '📚',
        github: 'https://github.com/Adrianbrou/bookbot',
        image: bookbotCert,
    },
    {
        title: 'Build Asteroids using Python and Pygame',
        date: 'Mar 7, 2026',
        description: 'Full arcade game built from scratch — OOP, game loops, collision detection, real-time rendering.',
        icon: '🎮',
        github: 'https://github.com/Adrianbrou/asteroids',
        image: asteroidsCert,
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
        title: 'DevOps Foundations',
        issuer: 'Wells Fargo',
        status: 'Completed',
        icon: '⚙️',
        color: 'bg-red-700',
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

const CertCard = ({ title, date, icon, image, onOpen }) => {
    const [ref, isVisible] = useScrollAnimation()
    return (
        <div
            ref={ref}
            className={`card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <button
                type="button"
                onClick={onOpen}
                className="block w-full mb-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 hover:ring-2 hover:ring-orange-500 transition-all"
                aria-label={`View ${title} certificate`}
            >
                <img
                    src={image}
                    alt={`${title} certificate`}
                    className="w-full h-40 object-cover bg-black"
                    loading="lazy"
                />
            </button>
            <div className="text-3xl mb-2">{icon}</div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                {title}
            </h3>
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                    ✓ Completed
                </span>
            </div>
        </div>
    )
}

const ProjectCertCard = ({ project, onOpen }) => {
    const [ref, isVisible] = useScrollAnimation()
    return (
        <div
            ref={ref}
            className={`card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <button
                type="button"
                onClick={onOpen}
                className="block w-full mb-4 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 hover:ring-2 hover:ring-orange-500 transition-all"
                aria-label={`View ${project.title} certificate`}
            >
                <img
                    src={project.image}
                    alt={`${project.title} certificate`}
                    className="w-full h-40 object-cover bg-black"
                    loading="lazy"
                />
            </button>
            <div className="text-3xl mb-2">{project.icon}</div>
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
}

const AchievementCard = ({ ach }) => {
    const [ref, isVisible] = useScrollAnimation()
    return (
        <div
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
}

const OtherCertCard = ({ cert }) => {
    const [ref, isVisible] = useScrollAnimation()
    return (
        <div
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
}

const Certifications = () => {
    const [heroRef, heroVisible] = useScrollAnimation()
    const [lightbox, setLightbox] = useState(null)

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
                            <a
                                href="https://boot.dev/u/overcookedbath96"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 rounded-2xl overflow-hidden ring-2 ring-orange-500 hover:ring-4 transition-all"
                                aria-label="View Boot.dev profile (live auto-updating stats)"
                            >
                                <img
                                    src="https://api.boot.dev/v1/users/public/078abe3b-90b3-41ab-a3fc-e9d6518a1746/thumbnail"
                                    alt="Boot.dev Profile (live stats)"
                                    className="w-64 h-64 object-contain bg-black"
                                />
                            </a>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Boot.dev</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Back-end Developer Path (Python & Go). Joined January 17, 2026. The card on the left is a live embed from the Boot.dev API and reflects current level, XP, and course count.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <a
                                        href="https://www.linkedin.com/in/adrianbrou"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white"
                                            alt="LinkedIn"
                                        />
                                    </a>
                                    <a
                                        href="https://boot.dev/u/overcookedbath96"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Boot.dev"
                                    >
                                        <img
                                            src="https://img.shields.io/badge/Boot.dev-Profile-7C3AED?style=flat"
                                            alt="Boot.dev Profile"
                                        />
                                    </a>
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

                {/* Professional Training */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                            <GraduationCap className="text-white" size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Professional Training
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="card p-6 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 border-l-4 border-yellow-500">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
                                    📊
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs font-semibold text-yellow-700 dark:text-yellow-400 uppercase tracking-wider mb-1">
                                        Certificate of Achievement
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                                        Power BI
                                    </h3>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                Completed Power BI Training with real-time projects in data analysis, dashboard creation, and business reporting.
                            </p>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-3 space-y-1">
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                                    Yinguru Academy
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Goguru International Pvt. Ltd.
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    Issued by Fathima · CEO, FunnelsDone
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                                    ✓ Completed
                                </span>
                                <a
                                    href="/powerbi-certificate.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-sm text-yellow-700 dark:text-yellow-400 font-semibold hover:underline"
                                >
                                    View PDF <ExternalLink size={13} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Boot.dev Certificates */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                            <Award className="text-white" size={22} />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Boot.dev Certificates <span className="text-orange-500">(6)</span>
                        </h2>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">Click any certificate to enlarge</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bootdevCourses.map((course, index) => (
                            <CertCard
                                key={index}
                                title={course.title}
                                date={course.date}
                                icon={course.icon}
                                image={course.image}
                                onOpen={() => setLightbox({ image: course.image, title: course.title })}
                            />
                        ))}
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
                        {bootdevProjects.map((project, index) => (
                            <ProjectCertCard
                                key={index}
                                project={project}
                                onOpen={() => setLightbox({ image: project.image, title: project.title })}
                            />
                        ))}
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
                        {bootdevAchievements.map((ach, index) => (
                            <AchievementCard key={index} ach={ach} />
                        ))}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {otherCerts.map((cert, index) => (
                            <OtherCertCard key={index} cert={cert} />
                        ))}
                    </div>
                </section>

            </div>

            {/* Lightbox Modal */}
            {lightbox && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${lightbox.title} certificate full view`}
                >
                    <button
                        type="button"
                        onClick={() => setLightbox(null)}
                        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                    <figure className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={lightbox.image}
                            alt={`${lightbox.title} certificate`}
                            className="w-full h-auto rounded-lg shadow-2xl"
                        />
                        <figcaption className="mt-4 text-center text-white font-semibold">
                            {lightbox.title}
                        </figcaption>
                    </figure>
                </div>
            )}
        </div>
    )
}

export default Certifications
