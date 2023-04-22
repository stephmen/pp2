// import styled from  'styled-components'

// export const StyledPress = styled.div`

// .container{
//     margin: 8rem 22rem;
// }
// .commentaire{
//     /* padding-top: 2rem; */
//     /* padding-bottom: 2rem; */
//     display:grid;
//     grid-template-columns: 1fr 4fr;
// }
// .c0 {
//   color: #3d3e3d;
//   font-weight: 400;
//   text-decoration: none;
//   vertical-align: baseline;
//   font-size: 10pt;
//   font-family: "Verdana";
//   font-style: italic;
// }
// .c1 {
//   margin: 10px 30px;
//   padding-top: 10pt;
//   padding-bottom: 0pt;
//   line-height: 1.15;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// .c2 {
//   color: #3d3e3d;
//   font-weight: 400;
//   text-decoration: none;
//   vertical-align: baseline;
//   font-size: 10pt;
//   font-family: "Verdana";
//   font-style: normal;
//   padding-top: 10rem;
  
// }
// .c3 {
//   color: #000000;
//   font-weight: 400;
//   text-decoration: none;
//   vertical-align: baseline;
//   font-size: 10pt;
//   font-family: "Verdana";
//   font-style: normal;
// }
// .c6 {
//   color: #000000;
//   font-weight: 400;
//   text-decoration: none;
//   vertical-align: baseline;
//   font-size: 11pt;
//   font-family: "Arial";
//   font-style: normal;
// }
// .sous-titre {
//   padding-bottom: 20pt;
//   color: #000000;
//   font-weight: 900;
//   text-decoration: none;
//   vertical-align: baseline;
//   font-size: 18pt;
//   font-family: "Verdana";
//   font-style: normal;
// }

// .c7 {
//   background-color: #ffffff;
//   max-width: 468pt;
//   padding: 72pt 72pt 72pt 72pt;
// }
// .c5 {
//   height: 11pt;
// }
// .title {
//   padding-top: 0pt;
//   color: #000000;
//   font-size: 26pt;
//   padding-bottom: 3pt;
//   font-family: "Arial";
//   line-height: 1.15;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// .subtitle {
//   padding-top: 0pt;
//   color: #666666;
//   font-size: 15pt;
//   padding-bottom: 16pt;
//   font-family: "Arial";
//   line-height: 1.15;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// li {
//   color: #000000;
//   font-size: 11pt;
//   font-family: "Arial";
// }
// p {
//   margin: 0;
//   color: #000000;
//   font-size: 11pt;
//   font-family: "Arial";
// }
// h1 {
//   padding-top: 20pt;
//   color: #000000;
//   font-size: 20pt;
//   padding-bottom: 6pt;
//   font-family: "Arial";
//   line-height: 1.15;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// h2 {
//   padding-top: 18pt;
//   color: #000000;
//   font-size: 16pt;
//   padding-bottom: 6pt;
//   font-family: "Arial";
//   line-height: 1.15;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// h3 {
//   padding-top: 16pt;
//   color: #434343;
//   font-size: 14pt;
//   padding-bottom: 4pt;
//   font-family: "Arial";
//   line-height: 1.15;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// h4 {
//   padding-top: 14pt;
//   color: #666666;
//   font-size: 12pt;
//   padding-bottom: 4pt;
//   font-family: "Arial";
//   line-height: 1.15;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// h5 {
//   padding-top: 12pt;
//   color: #666666;
//   font-size: 11pt;
//   padding-bottom: 4pt;
//   font-family: "Arial";
//   line-height: 1.15;
//   page-break-after: avoid;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// h6 {
//   padding-top: 12pt;
//   color: #666666;
//   font-size: 11pt;
//   padding-bottom: 4pt;
//   font-family: "Arial";
//   line-height: 1.15;
//   page-break-after: avoid;
//   font-style: italic;
//   orphans: 2;
//   widows: 2;
//   text-align: left;
// }
// `

import styled from 'styled-components';

export const StyledPress = styled.div`
  .container {
    margin: 8rem 2rem; /* Reduce left and right margin */
  }

  .commentaire {
    display: grid;
    grid-template-columns: 1fr 4fr;
  }

  .c0 {
    font-size: 8pt; /* Reduce font size */
  }

  .c1 {
    margin: 10px 20px; /* Reduce margin */
    padding-top: 8pt; /* Reduce padding */
    font-size: 10pt;
  }

  .c2 {
    font-size: 8pt;
    padding-top: 5rem; /* Reduce padding */
  }

  .c3 {
    font-size: 8pt;
  }

  .c6 {
    font-size: 9pt; /* Reduce font size */
  }

  .sous-titre {
    padding-bottom: 10pt; /* Reduce padding */
    font-size: 16pt; /* Increase font size */
  }

  .c7 {
    max-width: 100%; /* Remove fixed width */
    padding: 2rem; /* Reduce padding */
  }

  .c5 {
    height: 5pt; /* Reduce height */
  }

  .title {
    padding-top: 0;
    font-size: 20pt;
    padding-bottom: 3pt;
  }

  .subtitle {
    padding-top: 0;
    font-size: 12pt; /* Reduce font size */
    padding-bottom: 12pt; /* Reduce padding */
  }

  li {
    font-size: 10pt; /* Reduce font size */
  }

  p {
    margin: 0;
    font-size: 10pt; /* Reduce font size */
  }

  h1 {
    padding-top: 10pt; /* Reduce padding */
    font-size: 18pt; /* Reduce font size */
    padding-bottom: 6pt;
  }

  h2 {
    padding-top: 10pt; /* Reduce padding */
    font-size: 16pt; /* Reduce font size */
    padding-bottom: 6pt;
  }

  h3 {
    padding-top: 8pt; /* Reduce padding */
    font-size: 14pt; /* Reduce font size */
    padding-bottom: 4pt;
  }

  h4 {
    padding-top: 6pt; /* Reduce padding */
    font-size: 12pt; /* Reduce font size */
    padding-bottom: 4pt;
  }

  h5 {
    padding-top: 4pt; /* Reduce padding */
    font-size: 10pt; /* Reduce font size */
    padding-bottom: 4pt;
  }

  h6 {
    padding-top: 4pt; /* Reduce padding */
    font-size: 10pt; /* Reduce font size */
    padding-bottom: 4pt;
    font-style: italic;
  }

  @media (max-width: 600px) {
    .container {
      margin: 6rem 1rem; /* Further reduce margin */
    }

    .commentaire {
      grid-template-columns: 1fr; /* Set grid to one column */
      gap: 1rem; /* Add gap between elements */
    }

    .c1 {
      margin: 10px 0; /* Remove horizontal margin */
      padding-top: 4pt; /* Reduce padding */
    }

    .c2 {
      padding-top: 3rem; /* Reduce padding */
    }
    `
