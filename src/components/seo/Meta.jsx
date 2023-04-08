import Head from 'next/head'

const Meta = ({ title, description }) => {
   return (
      <Head>
         <title>{title}</title>
         {description ? <meta name='description' content={description} /> : null}
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <link rel='icon' href='/favicon.ico' />
      </Head>
   )
}

export default Meta
