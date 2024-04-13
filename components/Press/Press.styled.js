

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
