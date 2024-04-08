/** @type {import('tailwindcss').Config} */

const colors={
    red:'hsl(0, 78%, 62%)',
    cyan:'hsl(180, 62%, 55%)',
    orange:'hsl(34, 97%, 64%)',
    blue:'hsl(212, 86%, 64%)',
    'very-dark-blue':'hsl(234, 12%, 34%)',
    'grayish-blue':'hsl(229, 6%, 66%)',
    'very-light-gray':'hsl(0, 0%, 98%)'
}
export default {
    prefix:'tw-',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        screens:{
            mobile:'375px',
            desktop:'1440px'
        },
        colors,
    },
    safelist:[
        {
            pattern: /tw-from-(red|cyan|orange|blue)/,
        }
    ]
}

