import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: '',
            })
        }
    }

    const validateForm = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newErrors = validateForm()

        if (Object.keys(newErrors).length === 0) {
            setSubmitted(true)
            console.log('Form submitted:', formData)
            setTimeout(() => {
                setFormData({ name: '', email: '', message: '' })
                setSubmitted(false)
            }, 3000)
        } else {
            setErrors(newErrors)
        }
    }

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'adrian690@hotmail.fr',
            href: 'mailto:adrian690@hotmail.fr',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (980) 358-1576',
            href: 'tel:+19803581576',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Troutman, NC, USA',
            href: '#',
        },
    ]

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/Adrianbrou' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/salomon-brou-5b68aa320/' },
    ]

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title">Get In Touch</h1>
                <p className="section-subtitle">
                    Let's connect and build something amazing together!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="card p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                            Send me a message
                        </h2>
                        {submitted && (
                            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.name
                                        ? 'border-red-500'
                                        : 'border-gray-300 dark:border-gray-600'
                                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.email
                                        ? 'border-red-500'
                                        : 'border-gray-300 dark:border-gray-600'
                                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.message
                                        ? 'border-red-500'
                                        : 'border-gray-300 dark:border-gray-600'
                                        } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none`}
                                    placeholder="Tell me about your project..."
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div>
                        <div className="card p-8 mb-6">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                Contact Information
                            </h2>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon
                                    return (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Icon className="text-primary-600 dark:text-primary-500" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                                                    {item.label}
                                                </h3>
                                                {item.href !== '#' ? (
                                                    <a
                                                        href={item.href}
                                                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
                                                    >
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-gray-600 dark:text-gray-400">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                    Follow Me
                                </h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon
                                        return (
                                            <a
                                                key={index}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                                            >
                                                <Icon size={24} />
                                            </a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="card p-8">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                Availability
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                I'm currently available for freelance projects and open to discussing full-time opportunities.
                            </p>
                            <div className="flex items-center gap-2 text-green-600 dark:text-green-500">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-medium">Available for work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact