import Heading from '@/components/UI/Heading'
import s from './Favs.module.scss'
import { myFavs } from '@/data'

const Favs = () => {
   return (
      <div className={s.favs}>
         <Heading>My favs:</Heading>
         <ul className={s.list}>
            {myFavs.map(el => (
               <li key={el} className={s.item}>
                  {el}
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Favs
