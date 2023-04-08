import Link from './Link'
import { social } from '@/data'
import s from './Social.module.scss'

const Social = ({ isFooter }) => {
   return (
      <ul className={`${s.social} ${isFooter && s.isFooter}`}>
         {social.map(el => {
            return <Link key={el.title} el={el} />
         })}
      </ul>
   )
}

export default Social
