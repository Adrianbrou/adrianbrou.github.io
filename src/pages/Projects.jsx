// import { useState } from 'react'
// import { ExternalLink, Github } from 'lucide-react'
// import { useScrollAnimation } from '../hooks/useScrollAnimation'
// import { projects } from '../data/projects'

// const Projects = () => {
//     const [filter, setFilter] = useState('all')

//     const filters = ['all', 'React', 'Python', 'Power BI', 'Node.js']

//     const filteredProjects =
//         filter === 'all'
//             ? projects
//             : projects.filter((project) => project.tags.includes(filter))

//     return (
//         <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h1 className="section-title">My Projects</h1>
//                 <p className="section-subtitle">
//                     A collection of my recent work and side projects
//                 </p>

//                 <div className="flex flex-wrap justify-center gap-4 mb-12">
//                     {filters.map((item) => (
//                         <button
//                             key={item}
//                             onClick={() => setFilter(item)}
//                             className={`px-6 py-2 rounded-full font-medium transition-all ${filter === item
//                                 ? 'bg-primary-600 text-white shadow-lg'
//                                 : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
//                                 }`}
//                         >
//                             {item}
//                         </button>
//                     ))}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {filteredProjects.map((project, index) => {
//                         const [ref, isVisible] = useScrollAnimation()
//                         return (
//                             <div
//                                 key={project.id}
//                                 ref={ref}
//                                 className={`card overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//                             >
//                                 <div className="h-48 bg-gradient-to-br from-primary-500 to-blue-700 flex items-center justify-center text-white text-6xl">
//                                     {project.title.charAt(0)}
//                                 </div>

//                                 <div className="p-6">
//                                     <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
//                                         {project.title}
//                                     </h3>
//                                     <p className="text-gray-600 dark:text-gray-400 mb-4">
//                                         {project.description}
//                                     </p>

//                                     <div className="flex flex-wrap gap-2 mb-4">
//                                         {project.tags.map((tag) => (
//                                             <span
//                                                 key={tag}
//                                                 className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 rounded-full text-sm font-medium"
//                                             >
//                                                 {tag}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     <div className="flex gap-4">
//                                         {project.github && (
//                                             <a
//                                                 href={project.github}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="flex items-center gap-2 text-primary-600 dark:text-primary-500 hover:underline"
//                                             >
//                                                 <Github size={18} />
//                                                 Code
//                                             </a>
//                                         )}
//                                         {project.demo && (
//                                             <a
//                                                 href={project.demo}
//                                                 target="_blank"
//                                                 rel="noopener noreferrer"
//                                                 className="flex items-center gap-2 text-primary-600 dark:text-primary-500 hover:underline"
//                                             >
//                                                 <ExternalLink size={18} />
//                                                 Live Demo
//                                             </a>
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Projects

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { projects } from '../data/projects'

const Projects = () => {
    const [filter, setFilter] = useState('all')

    const filters = ['all', 'React', 'Python', 'Power BI', 'Node.js']

    const filteredProjects =
        filter === 'all'
            ? projects
            : projects.filter((project) => project.tags.includes(filter))

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="section-title">My Projects</h1>
                <p className="section-subtitle">
                    A collection of my recent work and side projects
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {filters.map((item) => (
                        <button
                            key={item}
                            onClick={() => setFilter(item)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${filter === item
                                ? 'bg-primary-600 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => {
                        const [ref, isVisible] = useScrollAnimation()
                        return (
                            <div
                                key={project.id}
                                ref={ref}
                                className={`card overflow-hidden rounded-xl shadow-md transition-all duration-700 transform ${isVisible
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-10'
                                    } hover:-translate-y-1 hover:scale-105 hover:shadow-xl cursor-pointer`}
                            >
                                {/* Project Image */}
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover"
                                    />
                                ) : (
                                    <div className="h-48 bg-gradient-to-br from-primary-500 to-blue-700 flex items-center justify-center text-white text-6xl">
                                        {project.title.charAt(0)}
                                    </div>
                                )}

                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tags / Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-500 rounded-full text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-primary-600 dark:text-primary-500 hover:underline"
                                            >
                                                <Github size={18} />
                                                Code
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-primary-600 dark:text-primary-500 hover:underline"
                                            >
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        )}
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

export default Projects
