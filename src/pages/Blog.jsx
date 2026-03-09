import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: '51 Days. 569 Lessons. 7 Courses. Here\'s What I Built.',
            excerpt: 'On January 17, 2026, I started Boot.dev\'s Back-end Developer Path (Python & Go) and committed to showing up every single day. 51 days later: 5 certificates, a deployed full-stack app (FuelCast), a SaaS CRM backend, and a 32-day streak. Here\'s what that actually looks like.',
            date: 'March 9, 2026',
            readTime: '5 min read',
            category: 'Backend Development',
            url: 'https://www.linkedin.com/in/salomon-brou-5b68aa320/'
        },
        {
            id: 2,
            title: 'Building FuelCast — A Full-Stack Fuel Analytics App',
            excerpt: 'How I built and deployed FuelCast end-to-end: FastAPI backend, PostgreSQL database with optimized queries, RESTful API design, authentication, and a React frontend — all deployed on Railway. Lessons learned from real production constraints.',
            date: 'February 2026',
            readTime: '6 min read',
            category: 'Software Development',
            url: 'https://github.com/Adrianbrou/gas-up_demo'
        },
        {
            id: 3,
            title: 'Building the SaaS CRM Backend for Anytime Fitness',
            excerpt: 'A deep dive into designing a full-stack analytics platform serving 1,500+ member records — Flask API, PostgreSQL, 15+ KPI endpoints, sub-second query times, and automated Excel/CSV exports that saved 20+ hours of manual reporting per month.',
            date: 'November 2025',
            readTime: '6 min read',
            category: 'Backend Development',
            url: 'https://github.com/Adrianbrou/Saas-CRM-Backend-gym-trainer-'
        },
        {
            id: 4,
            title: 'SQL Optimization: From Slow Queries to Sub-Second Response',
            excerpt: 'Practical lessons from optimizing PostgreSQL queries for the AF analytics platform — complex JOINs, CTEs, window functions, and indexing strategies that brought response times under 1 second on 1,500+ record datasets.',
            date: 'January 2026',
            readTime: '5 min read',
            category: 'Database Engineering',
            url: 'https://www.linkedin.com/in/salomon-brou-5b68aa320/'
        },
        {
            id: 5,
            title: 'From Trainer to Backend Developer — My Story',
            excerpt: 'Over 10 years leading teams and coaching 100+ clients. A Master\'s in Software Engineering. Freelance dev work in Côte d\'Ivoire. Then a gap. Here\'s how I closed it — and why I can explain every line of code I\'ve written.',
            date: 'October 2025',
            readTime: '5 min read',
            category: 'Career',
            url: 'https://www.linkedin.com/in/salomon-brou-5b68aa320/'
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title">Blog & Learning Journey</h1>
                <p className="section-subtitle">
                    Thoughts, tutorials, and lessons learned
                </p>

                <div className="space-y-8">
                    {blogPosts.map((post, index) => {
                        const [ref, isVisible] = useScrollAnimation()
                        return (
                            <article
                                key={post.id}
                                ref={ref}
                                className={`card overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            >
                                <div className="md:flex">
                                    <div className="md:w-64 h-48 md:h-auto bg-gradient-to-br from-primary-500 to-blue-700 flex items-center justify-center text-white text-6xl font-bold">
                                        {post.title.charAt(0)}
                                    </div>
                                    <div className="p-6 flex-1">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                                            <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 rounded-full font-medium">
                                                {post.category}
                                            </span>
                                            <div className="flex items-center gap-1">
                                                <Calendar size={16} />
                                                {post.date}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock size={16} />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                            {post.title}
                                        </h2>
                                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary-600 dark:text-primary-500 font-semibold hover:underline inline-flex items-center gap-2 group"
                                        >
                                            Read More
                                            <ArrowRight
                                                size={18}
                                                className="group-hover:translate-x-1 transition-transform"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blog