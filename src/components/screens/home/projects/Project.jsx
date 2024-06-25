import Image from 'next/image'
import s from './Projects.module.scss'
import { motion } from 'framer-motion'

const Project = ({ isMobile = true, title, img, url, ...props }) => {
   return (
      <motion.div
         style={{ borderRadius: isMobile ? '32px' : '24px' }}
         className={`${s.project} ${props.className}`}
         initial={props.initial}
         whileHover={props.whileHover}
         transition={props.transition}
      >
         {isMobile && <Image src='/iphone_bar.png' width='390' height='44' />}
         <a href={url} target='_blank'>
            <Image
               className={`${isMobile ? 'rounded-b-[32px]' : 'rounded-[24px]'} pointer-events-none`}
               src={img}
               alt={title}
               width={isMobile ? 390 : 800}
               height='1600'
            />
         </a>
      </motion.div>
   )
}

export default Project
