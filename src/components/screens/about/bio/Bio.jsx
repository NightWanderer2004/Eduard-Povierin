import s from './Bio.module.scss'

const Bio = () => {
   return (
      <div className={s.bio}>
         <h2>About Me</h2>
         <div className={s.info}>
            <p style={{ animationDelay: '0.1s' }}>
               I’m studying network programming at the university, I also like to create cool systems in conjunction with AI that simplify learning in
               a group. <br /> I love startups and I want something like that myself try.
            </p>
            <p style={{ animationDelay: '0.2s' }}>
               I love mbti, ennegrams, tritypes and all that stuff (mine is INTP, 5w6, 593), I continually explore the depths of human psychology and
               behavior.
            </p>
            <p style={{ animationDelay: '0.3s' }}>
               If you want to know more about me, you can contact me on{' '}
               <a href='https://t.me/nightwanderer2004' target='_blank'>
                  Telegram
               </a>
            </p>
         </div>
      </div>
   )
}

export default Bio
