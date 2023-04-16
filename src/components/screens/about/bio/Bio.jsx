import s from './Bio.module.scss'

const Bio = () => {
   return (
      <div className={s.bio}>
         <h2>About Me</h2>
         <div className={s.info}>
            <p style={{ animationDelay: '0.1s' }}>
               As a frontend developer who uses Next.js, I know a thing about creating sleek and stunning websites. I like to speed up my work process
               and always try to configure my workspace in a better way. This includes tools such as terminals and IDEs.
            </p>
            <p style={{ animationDelay: '0.2s' }}>
               When I'm not studying ICT at university, I enjoy writing for blogs or tinkering with my beloved old Apple devices... or discovering new
               and interesting tools for developing.
               <br /> I pride myself on my talent for creating simple and clear sites.
            </p>
            <p style={{ animationDelay: '0.3s' }}>
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
