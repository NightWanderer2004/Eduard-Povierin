import Link from './Link'
import { social } from '@/data'
import s from './Social.module.scss'

const Social = () => {
   return (
      <ul className={s.social}>
         {social.map(el => {
            return <Link key={el.title} el={el} />
         })}
      </ul>
   )
}

export default Social
