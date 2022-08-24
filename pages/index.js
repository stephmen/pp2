import PageOne from './pageOne'
import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Fanfare PourPour</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <PageOne />      
    </div>
  )
}
