import { useRouter } from 'next/router'
import Links from './Links'
import s from './Navbar.module.scss'
import Link from 'next/link'

const Navbar = () => {
   const { pathname } = useRouter()

   return (
      <nav className={s.navbar}>
         <div className={s.content}>
            <h3 className={s.name}>
               <Link href='/'>
                  Eduard <br /> Povierin
               </Link>
            </h3>
            <Links pathname={pathname} />
         </div>
      </nav>
   )
}

export default Navbar
