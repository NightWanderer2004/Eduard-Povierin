import { useRouter } from 'next/router'
import Links from './Links'
import s from './Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
   const { pathname } = useRouter()

   return (
      <nav className={s.navbar}>
         <div className={s.content}>
            <Links pathname={pathname} />
            <Link href='/'>
               <Image className={s.logo} src='/logooo.svg' width='92' height='92' priority />
            </Link>
         </div>
      </nav>
   )
}

export default Navbar
