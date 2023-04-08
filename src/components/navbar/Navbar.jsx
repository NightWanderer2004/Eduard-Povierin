import { useRouter } from 'next/router'
import Links from './Links'
import s from './Navbar.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const Navbar = () => {
   const { pathname } = useRouter()
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const menuClickHandler = () => setIsMenuOpen(!isMenuOpen)

   return (
      <nav className={`${s.navbar} ${isMenuOpen ? s.expanded : ''}`}>
         <div className={s.content}>
            <h3 className={s.name}>
               Eduard <br /> Povierin
            </h3>
            <button className={s.menuBtn} onClick={menuClickHandler}>
               <Image src='/icons/menu.svg' alt='menu' width={48} height={48} />
            </button>
            <Links pathname={pathname} isMenuOpen={isMenuOpen} />
         </div>
      </nav>
   )
}

export default Navbar
