import Image from 'next/image'
import s from './Environment.module.scss'
import { myEnv } from '@/data'

export default function Environment() {
   const { computer, monitor, keyboard, mouse } = myEnv

   return (
      <div className={s.env}>
         <h2>My environment:</h2>
         <div className='flex flex-col md:flex-row md:items-start gap-5 md:gap-3'>
            <Image src='/env.jpg' width={1000} height={600} alt='My environment' />
            <ul className={s.list}>
               <li className={s.item}>
                  <h3>Computer</h3> {computer}
               </li>
               <li className={s.item}>
                  <h3>Monitor</h3> {monitor}
               </li>
               <li className={s.item}>
                  <h3>Keyboard</h3> {keyboard}
               </li>
               <li className={s.item}>
                  <h3>Mouse</h3> {mouse}
               </li>
            </ul>
         </div>
      </div>
   )
}
