

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

// import Document, { Html, Head, Main, NextScript } from 'next/document';
// // Import styled components ServerStyleSheet
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//   static getInitialProps({ renderPage }) {
//     // Step 1: Create an instance of ServerStyleSheet
//     const sheet = new ServerStyleSheet();

//     // Step 2: Retrieve styles from components in the page
//     const page = renderPage((App) => (props) =>
//       sheet.collectStyles(<App {...props} />),
//     );

//     // Step 3: Extract the styles as <style> tags
//     const styleTags = sheet.getStyleElement();

//     // Step 4: Pass styleTags as a prop
//     return { ...page, styleTags };
//   }

//   render() {
//     return (
//       <Html>
//         <Head>
//           {/* <title>My page</title> */}
//           {/* Step 5: Output the styles in the head  */}
//           {this.props.styleTags}
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }