/** @type {import('tailwindcss').Config} */
export default {
    prefix:'tw-',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        screens:{
            mobile:{'max':'375px'},
            desktop:{'max':'1440px'}
        },
        colors:{
            white:'hsl(0, 0%, 100%)',
            'light-gray':'hsl(212, 45%, 89%)',
            'grayish-blue':'hsl(220, 15%, 55%)',
            'dark-blue':'hsl(218, 44%, 22%)'
        }
    },
}

