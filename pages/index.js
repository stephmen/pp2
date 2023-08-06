// import PageOne from './pageOne'
// import Head from 'next/head'


// export default function Home() {
//   return (
//     <div >
//       <Head>
//         <title>Fanfare PourPour</title>
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>
//       <PageOne />      
//     </div>
//   )
// }
import PageOne from './pageOne';
import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import Router from 'next/router';

export default function Home() {
  if (isMobile) {
    Router.push('/mobile-home');
    return null;
  }

  return (
    <div >
      <Head>
        <title>Fanfare PourPour</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <PageOne />      
    </div>
  );
}