export default function Heading({ children, ...props }) {
   return <h2 className={`drop-shadow-sm text-[50px] mb-5 text-primary font-medium ${props.className}`}>{children}</h2>
}
