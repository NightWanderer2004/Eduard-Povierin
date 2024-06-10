import s from './Timeline.module.scss'
import { work } from '@/data'
import Work from './work/Work'
import Heading from '@/components/UI/Heading'

const Timeline = () => {
   return (
      <div className={s.timeline}>
         <Heading>Experience</Heading>
         <ul className={s.list}>
            {work.map((el, i) => (
               <Work key={i} el={el} index={i} />
            ))}
         </ul>
      </div>
   )
}

export default Timeline
