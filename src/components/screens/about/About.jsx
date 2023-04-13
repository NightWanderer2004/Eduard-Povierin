import Skills from '../home/skills/Skills'
import Bio from './bio/Bio'
import s from './About.module.scss'
import Favs from './favs/Favs'

const About = () => {
   return (
      <div className={s.about}>
         <Bio />
         <Favs />
         <Skills />
      </div>
   )
}

export default About
