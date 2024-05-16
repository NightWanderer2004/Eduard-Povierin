import Heading from '@/components/UI/Heading'
import s from './Bio.module.scss'

const Bio = () => {
   return (
      <div className={s.bio}>
         <Heading>About Me</Heading>
         <div className={s.info}>
            <p style={{ animationDelay: '0.1s' }}>Hello! I'm Eduard, a fullstack developer from Ukraine, currently studying in Poland</p>
            <p style={{ animationDelay: '0.2s' }}>
               My approach to development is based on creative thinking and a commitment to simplicity and efficiency. I believe that every project
               should not only be functional but also enjoyable for users
            </p>
            <p style={{ animationDelay: '0.3s' }}>
               I'm a big fan of video game soundtracks - they inspire me and help me focus during work. Outside of work, I enjoy sipping on a cup of
               coffee, engaging in philosophical discussions, self-discovery, and reading psychological manga
            </p>
            <p style={{ animationDelay: '0.4s' }}>
               Furthermore, I strive to stay updated on the latest technological trends and innovations, especially in the field of AI. My drive for
               learning and growth allows me to constantly improve my professional skills and achieve better results in my work
            </p>
            <p style={{ animationDelay: '0.5s' }}>
               If you want to know more about me, you can contact me on{' '}
               <a href='https://t.me/nightwanderer2004' target='_blank'>
                  Telegram
               </a>
            </p>
         </div>
      </div>
   )
}

export default Bio
