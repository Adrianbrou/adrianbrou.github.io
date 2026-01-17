

// import { Link } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { ArrowRight, Code, Database, TrendingUp } from 'lucide-react'
// import { useScrollAnimation } from '../hooks/useScrollAnimation'

// // Import all images you want to rotate
// import bg1 from '../assets/images/home-bg1.jpg'
// import bg2 from '../assets/images/home-bg2.jpg'
// import bg3 from '../assets/images/home-bg3.jpg'

// const Home = () => {
//     const [text, setText] = useState('')
//     const [heroRef, heroVisible] = useScrollAnimation()
//     const [currentBg, setCurrentBg] = useState(0)
//     const fullText = ' Adrian'

//     const backgrounds = [bg1, bg2, bg3]

//     // Typewriter effect
//     useEffect(() => {
//         let index = 0
//         const interval = setInterval(() => {
//             setText(fullText.slice(0, index))
//             index++
//             if (index > fullText.length) clearInterval(interval)
//         }, 150)
//         return () => clearInterval(interval)
//     }, [])

//     // Rotate background images every 6 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentBg((prev) => (prev + 1) % backgrounds.length)
//         }, 6000)
//         return () => clearInterval(interval)
//     }, [])

//     const features = [
//         {
//             icon: Code,
//             title: 'Web Development',
//             description: 'Building responsive, modern web applications with React',
//         },
//         {
//             icon: Database,
//             title: 'Data Analysis',
//             description: 'Transforming complex data into actionable insights',
//         },
//         {
//             icon: TrendingUp,
//             title: 'Data Visualization',
//             description: 'Creating interactive dashboards with Power BI',
//         },
//     ]

//     return (
//         <div className="min-h-screen">
//             <section className="relative text-white py-32 px-4 overflow-hidden flex items-center justify-center">
//                 {/* Background image */}
//                 {backgrounds.map((bg, index) => (
//                     <div
//                         key={index}
//                         className={`absolute inset-0 transition-opacity duration-1000 ${index === currentBg ? 'opacity-100' : 'opacity-0'
//                             }`}
//                         style={{
//                             backgroundImage: `url(${bg})`,
//                             backgroundSize: 'cover',
//                             backgroundPosition: 'center',
//                         }}
//                     ></div>
//                 ))}

//                 {/* Optional overlay */}
//                 <div className="absolute inset-0 bg-black/40"></div>

//                 <div className="max-w-7xl mx-auto text-center relative z-10">
//                     <div
//                         ref={heroRef}
//                         className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                             }`}
//                     >
//                         <h1 className="text-5xl md:text-7xl font-bold mb-6">
//                             Hi, I'm{' '}
//                             <span className="inline-block border-r-4 border-white pr-2 animate-pulse">
//                                 {text}
//                             </span>
//                         </h1>
//                         <p className="text-2xl md:text-3xl mb-4 text-blue-100">
//                             Junior Software Engineer & Data Analyst
//                         </p>
//                         <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
//                             Passionate about building innovative solutions and transforming data into actionable insights.
//                         </p>
//                         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                             <Link
//                                 to="/projects"
//                                 className="btn-primary group flex items-center gap-2"
//                             >
//                                 View Projects
//                                 <ArrowRight
//                                     size={20}
//                                     className="group-hover:translate-x-1 transition-transform"
//                                 />
//                             </Link>
//                             <Link
//                                 to="/contact"
//                                 className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
//                             >
//                                 Contact Me
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20 bg-gray-50 dark:bg-gray-900">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center mb-16">
//                         <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
//                             What I Do
//                         </h2>
//                         <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
//                             Combining technical skills with creative problem-solving
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {features.map((feature, index) => {
//                             const Icon = feature.icon
//                             const [ref, isVisible] = useScrollAnimation()
//                             return (
//                                 <div
//                                     key={index}
//                                     ref={ref}
//                                     className={`card p-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//                                         }`}
//                                 >
//                                     <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                                         <Icon className="text-primary-600 dark:text-primary-500" size={32} />
//                                     </div>
//                                     <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
//                                         {feature.title}
//                                     </h3>
//                                     <p className="text-gray-600 dark:text-gray-400">
//                                         {feature.description}
//                                     </p>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Home


import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, Code, Database, TrendingUp } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Import all background images
import bg1 from '../assets/images/home-bg1.jpg'
import bg2 from '../assets/images/home-bg2.jpg'
import bg3 from '../assets/images/home-bg3.jpg'

const Home = () => {
    const [text, setText] = useState('')
    const [heroRef, heroVisible] = useScrollAnimation()
    const [currentBg, setCurrentBg] = useState(0)
    const fullText = ' Adrian'

    const backgrounds = [bg1, bg2, bg3]

    // Randomize the initial background on first render
    useEffect(() => {
        setCurrentBg(Math.floor(Math.random() * backgrounds.length))
    }, [])

    // Typewriter effect for name
    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.slice(0, index))
            index++
            if (index > fullText.length) clearInterval(interval)
        }, 150)
        return () => clearInterval(interval)
    }, [])

    // Rotate background every 6 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    const features = [
        {
            icon: Code,
            title: 'Web Development',
            description: 'Building responsive, modern web applications with React',
        },
        {
            icon: Database,
            title: 'Data Analysis',
            description: 'Transforming complex data into actionable insights',
        },
        {
            icon: TrendingUp,
            title: 'Data Visualization',
            description: 'Creating interactive dashboards with Power BI',
        },
    ]

    return (
        <div className="min-h-screen">
            <section className="relative text-white py-32 px-4 overflow-hidden flex items-center justify-center">
                {/* Background images */}
                {backgrounds.map((bg, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 transform scale-105 ${index === currentBg ? 'opacity-100 scale-100' : 'opacity-0'
                            }`}
                        style={{
                            backgroundImage: `url(${bg})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                ))}

                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Hero text */}
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div
                        ref={heroRef}
                        className={`transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Hi, I'm{' '}
                            <span className="inline-block border-r-4 border-white pr-2 animate-pulse">
                                {text}
                            </span>
                        </h1>
                        <p className="text-2xl md:text-3xl mb-4 text-blue-100">
                            Junior Software Engineer & Data Analyst
                        </p>
                        <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
                            Passionate about building innovative solutions and transforming data into actionable insights.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/projects"
                                className="btn-primary group flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight
                                    size={20}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </Link>
                            <Link
                                to="/contact"
                                className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            What I Do
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Combining technical skills with creative problem-solving
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            const [ref, isVisible] = useScrollAnimation()
                            return (
                                <div
                                    key={index}
                                    ref={ref}
                                    className={`card p-8 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                        }`}
                                >
                                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="text-primary-600 dark:text-primary-500" size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
