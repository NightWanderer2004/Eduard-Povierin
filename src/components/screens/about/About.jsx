import Skills from '../home/skills/Skills'
import Bio from './bio/Bio'
import s from './About.module.scss'

const About = () => {
   return (
      <div className={s.about}>
         <Bio />
         <Skills />
      </div>
   )
}

export default About
