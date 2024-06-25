import getTerm from '@/utils/getTerm'
import spell from '@/utils/spell'
import { start, location } from '@/data'
import s from './Hero.module.scss'
import Image from 'next/image'
import Social from '@/components/UI/social/Social'

const Hero = () => {
   return (
      <div className={s.hero}>
         <div className={s.info}>
            <div>
               <h1>
                  Hi, I'm Eduard! <br />I create functional and enjoyable things with a focus on creative thinking, simplicity, and efficiency
               </h1>
               <p>
                  Fullstack develoer / Designer / Thinker
                  <br />
                  {getTerm(start)} {spell(getTerm(start))} in web
               </p>
            </div>
            <Social />
         </div>
         <div className={s.photo}>
            <Image className={s.me} src='/myPhoto.jpg' alt='Eduard' width='1316' height='1210' priority />
         </div>
      </div>
   )
}

export default Hero
