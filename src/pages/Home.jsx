import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, Code, Database, Rocket } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

import heroBg from '../assets/images/home-bg1.jpg'

const Home = () => {
    const [text, setText] = useState('')
    const [heroRef, heroVisible] = useScrollAnimation()
    const fullText = ' Adrian'

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            setText(fullText.slice(0, index))
            index++
            if (index > fullText.length) clearInterval(interval)
        }, 150)
        return () => clearInterval(interval)
    }, [])

    const features = [
        {
            icon: Rocket,
            title: 'Shipping to Production',
            description: 'TrainerOS v2.0.0 — PWA for personal trainers. 50+ trainers and clients using it daily. Stripe LIVE, Supabase, Vercel.',
        },
        {
            icon: Code,
            title: 'Backend Development',
            description: 'Python, FastAPI, Flask — clean REST APIs, JWT auth, CRUD, ETL pipelines. Learning Go on Boot.dev.',
        },
        {
            icon: Database,
            title: 'Databases & Cloud',
            description: 'PostgreSQL with RLS, SQL optimization, sub-second queries. AWS: ECS Fargate, RDS, ECR, S3, VPC, IAM, Secrets Manager.',
        },
    ]

    return (
        <div className="min-h-screen">
            <section className="relative text-white py-32 px-4 overflow-hidden flex items-center justify-center">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>

                <div className="absolute inset-0 bg-black/40"></div>

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
                            Backend Developer (Python)
                        </p>
                        <p className="text-lg md:text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
                            I build and ship real products. TrainerOS — a full-stack PWA for personal trainers — is live with 50+ daily users. Currently contracting at Juice Labz LLC on a Go + React Native migration. Python, FastAPI, PostgreSQL, AWS.
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
                            Real backends, shipped products, real users
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
