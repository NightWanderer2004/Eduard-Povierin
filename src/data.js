module.exports = {
   age: new Date(2004, 5, 18),
   start: new Date(2021, 8, 1),
   location: 'Poland(Kielce)',
   social: [
      {
         title: 'linkedIn',
         icon: '/icons/linkedin.svg',
         link: 'https://www.linkedin.com/in/eduard-povierin-44920a22a/',
      },
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
      { title: 'Prog. langs', list: ['Javascript', 'C++', 'Python'] },
      { title: 'Frontend', list: ['React', 'NextJS', '11ty', 'TailwindCSS'] },
      { title: 'Backend', list: ['NodeJS', 'MongoDB', 'NestJS', 'JWT'] },
      { title: 'Tools', list: ['Vs Code', 'GitHub', 'Notion'] },
      { title: 'Other', list: ['Browsers', 'MacOS'] },
   ],
   projects: [
      { title: 'Suimiro', url: 'https://suimiro.me', desc: 'web blog', img: '/projects/suimiro.png' },
      { title: 'Actify', url: 'https://actify-you.netlify.app', desc: 'app for activity', img: '/projects/actify.png' },
   ],
   work: [
      { title: 'Fullstack Trainee', company: 'ZenBit', date: 'aug 2022 - oct 2022', desc: 'developing frontend and backend for freelance platform' },
   ],
}
