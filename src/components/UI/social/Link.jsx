import { motion } from 'framer-motion'

const Link = ({ el }) => {
   return (
      <motion.li whileHover={{ scale: 0.925 }} key={el.title} className={el.title}>
         <a href={el.link} target='_blank' rel='noreferrer noopener'>
            <img src={el.icon} alt={el.title} />
         </a>
      </motion.li>
   )
}

export default Link
