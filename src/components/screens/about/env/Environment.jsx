import Image from 'next/image'
import s from './Environment.module.scss'
import { myEnv } from '@/data'
import Heading from '@/components/UI/Heading'

export default function Environment() {
   const { computer, monitor, keyboard, mouse, image } = myEnv

   return (
      <div className={s.env}>
         <Heading>My environment</Heading>
         <div className='flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-3'>
            <Image src={image} width={1000} height={600} alt='My environment' />
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
