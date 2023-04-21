/** @type {import('tailwindcss').Config} */

module.exports = {
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            background: 'var(--bg-color)',
            blur: 'var(--blur-color)',
            primary: 'var(--text-color)',
            'link-nav': 'var(--link-nav-color)',
            link: 'var(--link-color)',
         },
         animation: {
            fadeUp: 'fadeUp 550ms ease-out forwards',
            fadeLeft: 'fadeLeft 300ms ease-out forwards',
         },
         keyframes: {
            fadeUp: {
               '0%': {
                  opacity: 0,
                  transform: 'translateY(15px)',
               },
               '100%': {
                  opacity: 1,
                  transform: 'translateY(0)',
               },
            },
            fadeLeft: {
               '0%': {
                  opacity: 0,
                  transform: 'translateX(28px)',
               },
               '100%': {
                  opacity: 1,
                  transform: 'translateX(0)',
               },
            },
         },
      },
   },
   plugins: [],
}
