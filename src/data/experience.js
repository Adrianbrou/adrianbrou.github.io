export const experience = [
    {
        id: 1,
        title: 'Backend Developer, Contractor',
        company: 'Juice Labz LLC (Streak Performance)',
        location: 'Remote',
        period: 'Dec 2025 - Present',
        description: [
            'Migrating a golf fitness web app into a mobile app using Go and React Native (Expo).',
            'Working directly with the founder on architecture and feature decisions.',
        ]
    },
    {
        id: 2,
        title: 'Founder & Full-Stack Developer — TrainerOS (aftrainer.app)',
        company: 'Independent · Flagship Product',
        location: 'Remote',
        period: '2025 - Present',
        description: [
            'Designed, built, and shipped TrainerOS — a full-stack PWA for personal trainers, gym owners, and solo gym-goers. Live in production with 50+ trainers and clients using it daily, Stripe in LIVE mode, real paid subscriptions.',
            'Role-based platform: super_admin → admin (gym owners) → trainer ($19/mo) → solo ($7.99/mo) → client (invited, free).',
            'Core features: workout programming, session logging, auto-detected supersets, auto-surfaced PRs, nutrition tracking, progress photos, real-time chat, messaging, and CSV/PDF export.',
            'AI layer — "Coach Assistant" powered by Claude API via Supabase Edge Functions: 7 AI actions including workout suggestions, coaching notes, PR predictions, nutrition plans, and weekly recaps.',
            'Gamification system: XP, 17+ badges across 6 rarities, GitHub-style frequency heatmap, ascension/prestige, and shared-XP (trainers earn 20% of their clients\' XP).',
            'Built the full Supabase backend: 12-table schema, 25 SQL migrations, row-level security policies, Postgres security-definer functions, real-time subscriptions, and private file storage with signed URLs.',
            'PWA with Workbox runtime caching, Web Push notifications (VAPID — RFC 8291 AES-128-GCM), and Capacitor configured for Android.',
            'Infrastructure: Vercel (auto-deploy on push to main) + Vercel serverless functions, Stripe webhooks + customer portal, Sentry (browserTracing + replay on error), Resend for transactional email, Cloudflare DNS.',
        ]
    },
    {
        id: 3,
        title: 'Data Analyst & Backend Developer',
        company: 'Anytime Fitness',
        location: 'Huntersville, NC',
        period: '2022 - Present',
        description: [
            'Architected and built a full-stack analytics platform (Flask API + React frontend) serving 1,500+ member records.',
            'Designed and implemented RESTful APIs with 15+ KPI tracking endpoints for real-time data processing.',
            'Optimized PostgreSQL queries with CTEs and window functions for sub-second response times across 1,500+ records.',
            'Developed automated Excel/CSV export functionality, reducing manual reporting time by 20+ hours monthly.',
            'Led and mentored teams of trainers, coordinating programs for 100+ clients.',
            'Analyzed client data trends, improving training outcomes by 30%.',
        ]
    },
    {
        id: 4,
        title: 'Freelance Full Stack Developer',
        company: 'Independent',
        location: 'Côte d\'Ivoire',
        period: '2020 - 2021',
        description: [
            'Built a restaurant website end-to-end for a client: backend, frontend, menu management, reservations, and customer-facing UI using Python and Flask.',
        ]
    },
    {
        id: 5,
        title: 'Software Engineering Intern',
        company: 'Freelance Projects',
        location: 'Côte d\'Ivoire',
        period: '2018 - 2020',
        description: [
            'Built REST APIs and database schemas for client projects.',
            'Gathered requirements and delivered solutions directly to clients.',
            'Designed SQL solutions for efficient data storage and retrieval.',
        ]
    },
    {
        id: 6,
        title: 'Member — US Air National Guard',
        company: 'United States Air National Guard',
        location: 'North Carolina',
        period: 'Current',
        description: [
            'Active member of the US Air National Guard.',
            'ASVAB score: 71 overall, 81 in Electronics — qualifying for Cyber Systems Operations.',
            'Demonstrates discipline, teamwork, and commitment to service alongside a technical career.'
        ]
    },
]
