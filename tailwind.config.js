/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './common_components/**/*.{js,ts,jsx,tsx,mdx}',
        './helpers/**/*.{js,ts,jsx,tsx,mdx}',
        './context/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-color': '#1a202c',
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
};


