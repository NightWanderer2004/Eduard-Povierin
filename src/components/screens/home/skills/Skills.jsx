import Heading from '@/components/UI/Heading'
import s from './Skills.module.scss'
import { skills } from '@/data'

const Skills = () => {
   return (
      <div className={s.skills}>
         <Heading>Skills</Heading>
         <ul className={s.skillsList}>
            {skills.map(el => (
               <li key={el.title} className={s.list}>
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
