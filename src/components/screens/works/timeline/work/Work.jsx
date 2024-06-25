import React from 'react'
import { motion } from 'framer-motion'
import s from './Work.module.scss'

const Work = ({ el, index }) => {
   return (
      <motion.li
         className={s.item}
         style={{ originX: 0, originY: -1 }}
         initial={{ opacity: 0, y: 50, scale: 0.4 }}
         exit={{ opacity: 0, y: 50, scale: 0.4 }}
         whileInView={{ opacity: 1, y: 0, scale: 1, transition: { delay: index * 0.08 } }}
         transition={{ duration: 0.35, type: 'spring', stiffness: 255, damping: 25 }}
      >
         <div className={s.content}>
            <p className={s.company}>
               {el.title} {el.company ? `at ${el.company}` : ''}
            </p>
            <p className={s.date}>{el.date}</p>
            <p className={s.desc}>{el.desc}</p>
         </div>
      </motion.li>
   )
}

export default Work
