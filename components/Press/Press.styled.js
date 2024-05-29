import styled from 'styled-components';

export const StyledPress = styled.div`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: 600px) {
      margin: 6rem 1rem 2rem;
    }

    @media (min-width: 601px) and (max-width: 844px) {
      margin: 6rem 2rem 2rem;
    }

    @media (min-width: 845px) {
      margin: 6rem 8rem 2rem; /* Adjusted for laptops */
    }

    @media (min-width: 1200px) {
      margin: 6rem 12rem 2rem; /* Adjusted for larger screens */
    }
  }

  .commentaire {
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-bottom: 20px;
  }

  .c1 {
    margin: 10px 0;
    padding-top: 8pt;
    font-size: 10pt;
  }

  .c2 {
    font-size: 8pt;
    padding-top: 5rem;
    margin-bottom: 0;
  }

  .sous-titre {
    padding-bottom: 10pt;
    font-size: 16pt;
    margin-bottom: 0;
  }

  .c7 {
    max-width: 100%;
    padding: 2rem 0;
    margin-bottom: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }
`;
