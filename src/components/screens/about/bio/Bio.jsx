import s from './Bio.module.scss'

const Bio = () => {
   return (
      <div className={s.bio}>
         <h2>About Me</h2>
         <div className={s.info}>
            <p>
               Hello, I'm Ed! As a frontend developer who uses Next.js, I know a thing or two about creating sleek and stunning websites. <br /> When
               I'm not studying ICT at university, I enjoy writing for blogs and tinkering with my beloved old Apple devices. <br /> I pride myself on
               my talent for creating simple and clear sites.
            </p>
            <p>
               If you're interested in working on projects with me, you can find me on{' '}
               <a href='https://www.linkedin.com/in/eduard-povierin-44920a22a/' target='_blank'>
                  LinkedIn
               </a>{' '}
               or write me a message on{' '}
               <a href='https://t.me/nightwanderer2004' target='_blank'>
                  Telegram
               </a>
               . I'm always looking to collaborate and learn from others.
            </p>
         </div>
      </div>
   )
}

export default Bio
