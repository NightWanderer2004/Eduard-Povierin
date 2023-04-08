const Link = ({ el }) => {
   return (
      <li key={el.title} className={el.title}>
         <a href={el.link} target='_blank' rel='noreferrer noopener'>
            <img src={el.icon} alt={el.title} />
         </a>
      </li>
   )
}

export default Link
