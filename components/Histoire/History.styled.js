import styled from 'styled-components';

export const Titre = styled.h1`
  /* add any styles you want for the heading */
`;

export const Main = styled.div`
  margin: 2rem;
  padding: 3rem ;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: beige ;

  @media only screen and (min-width: 390px) and (max-width: 844px) {
    margin: 2rem;
    margin-top: 5rem
  }

  @media only screen and (min-width: 845px) {
    margin: 10rem;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* Adjust the margin as needed */
`;

