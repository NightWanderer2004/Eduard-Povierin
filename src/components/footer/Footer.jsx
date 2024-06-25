import Social from '../UI/social/Social'
import s from './Footer.module.scss'

const Footer = () => {
   return (
      <div className={s.footer}>
         <div className={s.content}>
            <h2>Call me</h2>
            <Social />
         </div>
      </div>
   )
}

export default Footer
