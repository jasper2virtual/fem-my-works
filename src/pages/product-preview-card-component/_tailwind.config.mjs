/** @type {import('tailwindcss').Config} */
export default {
    prefix: 'tw-',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        screens: {
            mobile: '375px',
            desktop: '1440px'
        },
        colors: {
            'dark-cyan': 'hsl(158, 36%, 37%)',
            'cream': 'hsl(30, 38%, 92%)',
            'very-dark-blue': 'hsl(212, 21%, 14%)',
            'dark-grayish-blue': 'hsl(228, 12%, 48%)',
            white: 'hsl(0, 0%, 100%)'
        },
    },
}

