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
                  Hi, I'm Eduard! <br />
                  Web developer <br />
                  based in {location}
               </h1>
               <p>
                  {getTerm(start)} {spell(getTerm(start))} in web. <br /> Next.js developer
               </p>
            </div>
            <Social />
         </div>
         <div className={s.photo}>
            <Image src='/myPhoto.png' alt='Eduard' width='1316' height='1210' priority />
         </div>
      </div>
   )
}

export default Hero
