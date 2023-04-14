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
      },
   },
   plugins: [],
}
