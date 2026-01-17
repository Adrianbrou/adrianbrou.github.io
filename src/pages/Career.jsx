import { Briefcase, Calendar, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experience } from '../data/experience'

const Career = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title">Career Journey</h1>
                <p className="section-subtitle">Professional experience and achievements</p>

                <div className="relative">
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-900"></div>

                    {experience.map((job, index) => {
                        const [ref, isVisible] = useScrollAnimation()
                        return (
                            <div
                                key={job.id}
                                ref={ref}
                                className={`relative mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full -translate-x-1/2 border-4 border-white dark:border-gray-900 z-10"></div>
                                </div>

                                <div className="ml-16 md:ml-0 md:w-full">
                                    <div className="card p-6">
                                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-500 mb-2">
                                            <Calendar size={18} />
                                            <span className="font-semibold">{job.period}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                            {job.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-lg font-semibold text-primary-600 dark:text-primary-500 mb-1">
                                            <Briefcase size={18} />
                                            {job.company}
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                                            <MapPin size={16} />
                                            {job.location}
                                        </div>
                                        <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                                            {job.description.map((item, i) => (
                                                <li key={i}>• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Career