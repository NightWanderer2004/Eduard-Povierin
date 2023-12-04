import Head from 'next/head'

const Meta = ({ title, description }) => {
   return (
      <Head>
         <title>{title}</title>
         {description ? <meta name='description' content={description} /> : null}
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <meta name='theme-color' content='#80a9e7' />
         <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
         <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
         <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
         <link rel='manifest' href='/site.webmanifest' />
      </Head>
   )
}

export default Meta
