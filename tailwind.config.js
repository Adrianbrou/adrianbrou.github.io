// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     darkMode: 'class',
//     theme: {
//         extend: {
//             colors: {
//                 primary: {
//                     50: '#eff6ff',
//                     100: '#dbeafe',
//                     500: '#3b82f6',
//                     600: '#2563eb',
//                     700: '#1d4ed8',
//                     900: '#1e3a8a',
//                 },
//                 secondary: {
//                     500: '#ef4444',
//                     600: '#dc2626',
//                 },
//                 accent: {
//                     500: '#f59e0b',
//                 }
//             },
//             fontFamily: {
//                 sans: ['Inter', 'system-ui', 'sans-serif'],
//             },
//         },
//     },
//     plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",          // main HTML file
        "./src/**/*.{js,ts,jsx,tsx}", // all JS/TS/React files in src/
    ],
    darkMode: 'class', // enable dark mode via a CSS class
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    900: '#1e3a8a',
                },
                secondary: {
                    500: '#ef4444',
                    600: '#dc2626',
                },
                accent: {
                    500: '#f59e0b',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
