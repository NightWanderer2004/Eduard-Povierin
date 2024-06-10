import Image from 'next/image'
import s from './Projects.module.scss'
import { motion } from 'framer-motion'

const Project = ({ title, img, url, desc, info }) => {
   return (
      <motion.li className={s.project} initial='rest' whileHover='hover' animate='rest'>
         <a href={url} target='_blank'>
            <motion.div className={s.info}>
               <motion.p
                  variants={{
                     rest: { y: '100%', opacity: 0 },
                     hover: { y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.35, type: 'spring', stiffness: 255, damping: 25 }}
               >
                  {info}
               </motion.p>
               <Image src={img} alt={title} width='828' height='1438' />
            </motion.div>
            <p>{desc}</p>
         </a>
      </motion.li>
   )
}

export default Project
