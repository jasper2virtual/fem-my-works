/** @type {import('tailwindcss').Config} */

const colors={
    //Primary
    'moderate-violet':'hsl(263, 55%, 52%)',
    'very-dark-grayish-blue':'hsl(217, 19%, 35%)',
    'very-dark-blackish-blue':'hsl(219, 29%, 14%)',
    white:'hsl(0, 0%, 100%)',

    //Neutral
    'light-gray':'hsl(0, 0%, 81%)',
    'light-grayish-blue':'hsl(210, 46%, 95%)',

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
            pattern: /tw-bg-(moderate-violet|very-dark-grayish-blue|very-dark-blackish-blue|white)/,
        }
    ]
}

