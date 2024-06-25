import Heading from '@/components/UI/Heading'
import { motion } from 'framer-motion'
import s from './Bio.module.scss'

const Bio = () => {
   return (
      <div className={s.bio}>
         <Heading>About Me</Heading>
         <div className={s.info}>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, ease: 'backOut', delay: 0.08 }}>
               Hello! I'm Eduard, a fullstack developer from Ukraine, currently studying in Poland
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, ease: 'backOut', delay: 0.16 }}>
               My approach to development is based on creative thinking and a commitment to simplicity and efficiency. I believe that every project
               should not only be functional but also enjoyable for users
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, ease: 'backOut', delay: 0.24 }}>
               I'm a big fan of video game soundtracks - they inspire me and help me focus during work. Outside of work, I enjoy sipping on a cup of
               coffee, engaging in philosophical discussions, self-discovery, and reading psychological manga
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, ease: 'backOut', delay: 0.32 }}>
               Furthermore, I strive to stay updated on the latest technological trends and innovations, especially in the field of AI. My drive for
               learning and growth allows me to constantly improve my professional skills and achieve better results in my work
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36, ease: 'backOut', delay: 0.4 }}>
               If you want to know more about me, you can contact me on{' '}
               <a href='https://t.me/nightwanderer2004' target='_blank'>
                  Telegram
               </a>
            </motion.p>
         </div>
      </div>
   )
}

export default Bio
