import { projects } from '@/data'
import s from './Projects.module.scss'
import Project from './Project'
import Heading from '@/components/UI/Heading'

const Projects = () => {
   return (
      <div className={s.projects}>
         <Heading className='text-center w-full text-5xl lg:text-6xl '>Latest things I made</Heading>
         <Project
            className={`${s['osbb']}`}
            initial={{ scale: 0.85, rotate: 1 }}
            whileHover={{ scale: 0.95, rotate: 2 }}
            transition={{ duration: 0.4, ease: 'backOut' }}
            title={projects[0].title}
            img={projects[0].img}
            url={projects[0].url}
         />
         <Project
            className={`${s['fancy-mbti']}`}
            initial={{ scale: 0.8, rotate: -5 }}
            whileHover={{ scale: 0.9, rotate: -3 }}
            transition={{ duration: 0.4, ease: 'backOut' }}
            title={projects[1].title}
            img={projects[1].img}
            url={projects[1].url}
         />
         <Project
            className={`${s['mbti-days']}`}
            isMobile={false}
            initial={{ scale: 0.8, rotate: 2 }}
            whileHover={{ scale: 0.9, rotate: -2 }}
            transition={{ duration: 0.4, ease: 'backOut' }}
            title={projects[2].title}
            img={projects[2].img}
            url={projects[2].url}
         />
         <Project
            className={`${s['vv']}`}
            isMobile={false}
            initial={{ scale: 0.7, rotate: -4 }}
            whileHover={{ scale: 0.8, rotate: -2 }}
            transition={{ duration: 0.4, ease: 'backOut' }}
            title={projects[3].title}
            img={projects[3].img}
            url={projects[3].url}
         />
         <div className={s.divider}>
            <span></span>
            and more
            <span></span>
         </div>
      </div>
   )
}

export default Projects
