import { ExternalLink, Code } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { FaFilePdf } from 'react-icons/fa'

const Links = () => {
    const links = [
        {
            name: 'GitHub',
            url: 'https://github.com/Adrianbrou',
            icon: FaGithub,
            description: 'Code repositories, open source contributions, and side projects',
            color: 'bg-gray-800 dark:bg-gray-700',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/salomon-brou-5b68aa320/',
            icon: FaLinkedin,
            description: 'Professional network, career history, and recommendations',
            color: 'bg-blue-600',
        },
        {
            name: 'Boot.dev',
            url: 'https://www.boot.dev/u/overcookedbath96',
            icon: Code,
            description: 'Level 50 Scholar — 569 lessons solved, 7 courses completed, 32-day streak on the Back-end Developer Path',
            color: 'bg-orange-500',
        },
        {
            name: 'Resume',
            url: '/resume.pdf', // points to public/resume.pdf
            icon: FaFilePdf,    // optional: import { FaFilePdf } from 'react-icons/fa'
            description: 'Download my latest resume',
            color: 'bg-red-600',
        },
    ]

    // Ripple / drip effect function
    const createRipple = (event) => {
        const button = event.currentTarget
        const circle = document.createElement('span')
        const diameter = Math.max(button.clientWidth, button.clientHeight)
        const radius = diameter / 2

        circle.style.width = circle.style.height = `${diameter}px`
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`
        circle.classList.add('ripple')

        button.appendChild(circle)

        setTimeout(() => {
            circle.remove()
        }, 600)
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title">My Links</h1>
                <p className="section-subtitle">Connect with me across the web</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {links.map((link, index) => {
                        const [ref, isVisible] = useScrollAnimation()
                        const Icon = link.icon
                        return (
                            <a
                                key={index}
                                ref={ref}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={createRipple}
                                className={`card p-6 transition-all duration-700 ripple ${isVisible
                                    ? 'opacity-100 translate-y-0 hover:scale-105 hover:shadow-xl cursor-pointer'
                                    : 'opacity-0 translate-y-10'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`${link.color} w-14 h-14 rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                                    >
                                        <Icon size={28} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                {link.name}
                                            </h3>
                                            <ExternalLink
                                                className="text-gray-400 group-hover:text-primary-600 transition-colors"
                                                size={20}
                                            />
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-400">{link.description}</p>
                                    </div>
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Links
