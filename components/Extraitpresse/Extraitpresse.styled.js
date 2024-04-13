import styled from 'styled-components';

export const Titre = styled.h1`
  /* add any styles you want for the heading */
`;

export const Main = styled.div`
  margin: 0rem;
  margin-top: 0rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  background-color: beige; /* Set the background color to beige */
  padding: 1rem; Add padding for better readability

  @media only screen and (min-width: 390px) and (max-width: 844px) {
    margin: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 845px) {
    margin: 0rem 18rem;
  }
`;
