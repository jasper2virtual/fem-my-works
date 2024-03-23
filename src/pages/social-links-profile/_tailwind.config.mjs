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
            white: 'hsl(0, 0%, 100%)',
            green: 'hsl(75, 94%, 57%)',
            grey: 'hsl(0, 0%, 20%)',
            'dark-grey': 'hsl(0, 0%, 12%)',
            'off-black': 'hsl(0, 0%, 8%)'
        }
    },
}

