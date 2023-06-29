import s from './Timeline.module.scss'
import { work } from '@/data'
import Work from './work/Work'

const Timeline = () => {
   return (
      <div className={s.timeline}>
         <h2>Experience</h2>
         <ul className={s.list}>
            {work.reverse().map((el, i) => (
               <Work key={i} el={el} index={i} />
            ))}
         </ul>
      </div>
   )
}

export default Timeline
