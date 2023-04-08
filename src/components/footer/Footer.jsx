import Social from '../UI/social/Social'
import s from './Footer.module.scss'

const Footer = () => {
   return (
      <div className={s.footer}>
         <div className={s.content}>
            <h2>Get in touch</h2>
            <Social isFooter />
         </div>
      </div>
   )
}

export default Footer
