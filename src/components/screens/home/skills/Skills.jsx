import s from './Skills.module.scss'
import { skills } from '@/data'

const Skills = () => {
   return (
      <div className={s.skills}>
         <h2>Skills:</h2>
         <ul className={s.skillsList}>
            {skills.map(el => (
               <li key={el.title} className={s.subList}>
                  <h3>{el.title}</h3>
                  <ul>
                     {el.list.map(el => (
                        <li key={el}>{el}</li>
                     ))}
                  </ul>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Skills
