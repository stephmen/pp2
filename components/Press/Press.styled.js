import styled from 'styled-components';

export const StyledPress = styled.div`
  .container {
    margin: 5rem 18rem 2rem; /* Reduce bottom margin */
  }

  .commentaire {
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-bottom: 0; /* Remove bottom margin */
  }

  .c1 {
    margin: 10px 20px 0; /* Reduce bottom margin */
    padding-top: 8pt; /* Reduce padding */
    font-size: 10pt;
  }

  .c2 {
    font-size: 8pt;
    padding-top: 5rem; /* Reduce padding */
    margin-bottom: 0; /* Remove bottom margin */
  }

  .sous-titre {
    padding-bottom: 10pt; /* Reduce padding */
    font-size: 16pt; /* Increase font size */
    margin-bottom: 0; /* Remove bottom margin */
  }

  .c7 {
    max-width: 100%; /* Remove fixed width */
    padding: 2rem 0; /* Reduce vertical padding */
    margin-bottom: 0; /* Remove bottom margin */
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0; /* Remove padding */
    margin: 0; /* Remove margin */
  }

  @media (max-width: 600px) {
    .container {
      margin: 6rem 1rem 2rem; /* Further reduce bottom margin */
    }

    .c1 {
      margin: 10px 0 0; /* Remove horizontal margin */
      padding-top: 4pt; /* Reduce padding */
    }

    .c2 {
      padding-top: 3rem; /* Reduce padding */
      margin-bottom: 0; /* Remove bottom margin */
    }
  }
`;
