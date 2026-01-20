import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Building the Fitness Tracker App for Anytime Fitness',
            excerpt: 'A deep dive into designing and developing a Python app to log workouts, nutrition, and progress for two gyms. I focused on SQL database architecture, planning Power BI dashboards, and ensuring a smooth user experience.',
            date: 'November, 2025',
            readTime: '6 min read',
            category: 'Software Development'
        },
        {
            id: 2,
            title: 'Leadership and Teamwork in Fitness & Tech',
            excerpt: 'Reflecting on over 10 years as a trainer supervisor, coordinating programs for 100+ clients while mentoring teams. How these skills translate to software development and analytics projects.',
            date: 'Since 2013',
            readTime: '5 min read',
            category: 'Career'
        },
        {
            id: 3,
            title: 'Fast Learning and Career Transition',
            excerpt: 'Sharing my journey from software engineering to data analytics. How self-directed learning, problem-solving, and initiative helped me succeed in new fields.',
            date: 'October, 2025',
            readTime: '5 min read',
            category: 'Career'
        },
        {
            id: 4,
            title: 'Improving Client Outcomes with Data',
            excerpt: 'Analyzing client data trends to improve training results by 30%. How I used analytics and continuous feedback to enhance system reliability and user experience.',
            date: 'January 5, 2026',
            readTime: '6 min read',
            category: 'Data Analysis'
        },
        {
            id: 5,
            title: 'ASVAB Success and Technical Achievements',
            excerpt: 'Achieving an ASVAB score of 71 overall and 81 in Electronics, qualifying for Cyber Systems Operations. Demonstrating technical aptitude and strategic thinking across both fitness and tech projects.',
            date: 'November, 2025',
            readTime: '4 min read',
            category: 'Career'
        }
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
                                        <button className="text-primary-600 dark:text-primary-500 font-semibold hover:underline inline-flex items-center gap-2 group">
                                            Read More
                                            <ArrowRight
                                                size={18}
                                                className="group-hover:translate-x-1 transition-transform"
                                            />
                                        </button>
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