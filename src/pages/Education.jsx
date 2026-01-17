import { GraduationCap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { education } from '../data/education'

const Education = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title">Education</h1>
                <p className="section-subtitle">Academic background</p>

                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
                        <GraduationCap className="text-primary-600" size={32} />
                        Education
                    </h2>
                    <div className="grid gap-6">
                        {education.map((edu) => {
                            const [ref, isVisible] = useScrollAnimation()
                            return (
                                <div
                                    key={edu.id}
                                    ref={ref}
                                    className={`card p-8 transition-all duration-700 ${isVisible
                                            ? 'opacity-100 translate-y-0 hover:scale-105 hover:shadow-xl cursor-pointer'
                                            : 'opacity-0 translate-y-10'
                                        }`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-xl text-primary-600 dark:text-primary-500 font-semibold">
                                                {edu.institution}
                                            </p>
                                        </div>
                                        <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                                            <p className="font-semibold">{edu.period}</p>
                                            <p>GPA: {edu.gpa}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
