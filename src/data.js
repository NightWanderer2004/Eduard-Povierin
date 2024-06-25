module.exports = {
   age: new Date(2004, 5, 18),
   start: new Date(2021, 8, 1),
   location: 'Kielce(Poland)',
   social: [
      {
         title: 'tel',
         icon: '/icons/telegram.svg',
         link: 'https://t.me/nightwanderer2004',
      },
      {
         title: 'twitter',
         icon: '/icons/twitter.svg',
         link: 'https://x.com/night2004_',
      },
      {
         title: 'git',
         icon: '/icons/github.svg',
         link: 'https://github.com/NightWanderer2004',
      },
   ],
   skills: [
      { title: 'Frontend', list: ['NextJS', 'TailwindCSS', 'shadcn'] },
      { title: 'Backend', list: ['NestJS', 'MongoDB', 'GraphQL', 'GCP'] },
      { title: 'Tools', list: ['Figma', 'GitHub', 'Notion', 'GPT'] },
      { title: 'Other', list: ['Browsers', 'MacOS'] },
   ],
   projects: [
      {
         url: 'https://dom-osbb.netlify.app',
         desc: 'app for checking apartment dues',
         img: '/projects/dom-osbb.png',
      },
      {
         url: 'https://fancy-mbti.com',
         desc: 'AI to help with well-being',
         img: '/projects/fancy-mbti.png',
      },
      {
         title: 'MBTI Days',
         url: 'https://x.com/night2004_/status/1793207250556793105',
         desc: 'app for comparing MBTI days',
         img: '/projects/mbti-days.png',
      },
      {
         url: 'https://valerii-vasianovych.site',
         desc: 'portfolio page for friend generated based on local data file',
         img: '/projects/valerii-vasianovych.png',
      },
   ],
   myFavs: ['Japan', 'philosophy', 'psychology', 'anime', 'MBTI', 'design'],
   myEnv: {
      computer: 'Macbook Air M1',
      monitor: 'Xiaomi Monitor 1C 23.8"',
      keyboard: 'Anne Pro 2 (brown switches)',
      mouse: 'HP 280 Silent',
      image: '/env3.jpg',
   },
   work: [
      { title: 'Freelancer', date: 'apr 2021 - aug 2021', desc: 'making simple landing pages and fixes in HTML, CSS and logos' },
      {
         title: 'Fullstack Trainee',
         company: 'ZenBit',
         date: 'aug 2022 - oct 2022',
         desc: 'developing frontend and backend for own freelance platform',
      },
      {
         title: '#BuildInPublic',
         date: 'sep 2023 - now',
         desc: 'working as a solo developer, I create indie projects using NextJS. My focus is on sleek design with efficient functionality',
      },
   ],
}
