import { useEffect } from 'react';
import Head from 'next/head';
import { isMobile } from 'react-device-detect';
import Router from 'next/router';

import PageOne from './pageOne';

export default function Home() {
  useEffect(() => {
    if (isMobile) {
      Router.push('/mobile-home');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Fanfare PourPour</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <PageOne key="page-one" />
    </>
  );
}
// import PageOne from './pageOne';
// import Head from 'next/head';
// import { isMobile } from 'react-device-detect';
// import Router from 'next/router';

// export default function Home() {
//   if (isMobile) {
//     Router.push('/mobile-home');
//     return null;
//   }

//   return (
//     <div >
//       <Head>
//         <title>Fanfare PourPour</title>
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>
//       <PageOne />      
//     </div>
//   );
// }