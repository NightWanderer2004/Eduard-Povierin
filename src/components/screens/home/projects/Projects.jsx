import { projects } from '@/data'
import s from './Projects.module.scss'
import Project from './Project'

const Projects = () => {
   return (
      <div className={s.projects}>
         <h2>Projects:</h2>
         <ul className={s.projectsList}>
            {projects.map(el => (
               <Project key={el.title} title={el.title} img={el.img} url={el.url} desc={el.desc} />
            ))}
         </ul>
      </div>
   )
}

export default Projects
