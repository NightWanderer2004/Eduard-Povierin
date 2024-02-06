module.exports = {
   age: new Date(2004, 5, 18),
   start: new Date(2021, 8, 1),
   location: 'Kielce(Poland)',
   social: [
      // {
      //    title: 'linkedIn',
      //    icon: '/icons/linkedin.svg',
      //    link: 'https://www.linkedin.com/in/eduard-povierin-44920a22a/',
      // },
      {
         title: 'tel',
         icon: '/icons/telegram.svg',
         link: 'https://t.me/nightwanderer2004',
      },
      {
         title: 'git',
         icon: '/icons/github.svg',
         link: 'https://github.com/NightWanderer2004',
      },
   ],
   skills: [
      { title: 'Prog. langs', list: ['JS / TS', 'C / C++', 'Python'] },
      { title: 'Frontend', list: ['React+Redux', 'NextJS', 'TailwindCSS', '11ty'] },
      { title: 'Backend', list: ['NestJS / Express', 'MongoDB / PostgreSQL', 'GraphQL'] },
      { title: 'Tools', list: ['VS Code', 'GitHub', 'Notion', 'Docker'] },
      { title: 'Other', list: ['Browsers', 'Terminals', 'MacOS'] },
   ],
   projects: [
      {
         title: 'Beauty.Laboratorie',
         url: 'https://cosmetcab.dp.ua/',
         desc: 'landing page for cosmetology studio',
         img: '/projects/beauty.laboratorie.png',
      },
      { title: 'Suimiro', url: 'https://suimiro.me', desc: 'web blog', img: '/projects/suimiro.png' },
      { title: 'Actify', url: 'https://actify-you.netlify.app', desc: 'app for activity', img: '/projects/actify.png' },
      { title: 'Tokners', url: 'https://my-tokners.netlify.app', desc: 'landing page for crypto company', img: '/projects/tokners.png' },
   ],
   myFavs: ['Japan', 'philosophy', 'anime', 'retro devices', 'piano', 'music'],
   myEnv: {
      computer: 'Macbook Pro 2014 13"',
      monitor: 'Xiaomi Monitor 1C 23.8"',
      keyboard: 'Anne Pro 2 (brown switches)',
      mouse: 'Logitech M171',
      image: '/env.jpg',
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
         title: 'Freelancer',
         date: 'sep 2023 - now',
         desc: 'developing landing pages and small projects for clients using NextJS',
      },
   ],
}
