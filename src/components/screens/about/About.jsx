import Skills from '../home/skills/Skills'
import Bio from './bio/Bio'
import s from './About.module.scss'
import Favs from './favs/Favs'
import Environment from './env/Environment'

const About = () => {
   return (
      <div className={s.about}>
         <Bio />
         <Favs />
         <Skills />
         <Environment />
      </div>
   )
}

export default About
