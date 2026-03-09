import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Adrianbrou', icon: FaGithub },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/salomon-brou-5b68aa320/', icon: FaLinkedin },
        { name: 'Email', url: 'mailto:adrian690@hotmail.fr', icon: FaEnvelope },
    ]

    const footerLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/certifications', label: 'Certifications' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact', label: 'Contact' },
    ]

    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Adrian Brou</h3>
                        <p className="text-gray-400 mb-4">
                            Backend Developer (Python) — building reliable backends with FastAPI, PostgreSQL, and REST APIs. Shipping every day.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-primary-500 transition-colors"
                                        aria-label={social.name}
                                    >
                                        <Icon size={24} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-primary-500 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Get In Touch</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>📧 adrian690@hotmail.fr</li>
                            <li>📱 +1 (980) 358-1576</li>
                            <li>📍 TROUTMAN</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">
                        &copy; {currentYear} Salomon adrian Brou. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        Built with React, Tailwind CSS, my time and ❤️
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer