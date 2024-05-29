import styled from 'styled-components';

export const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box; /* Ensure padding is included in the width calculation */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige; /* Set the background color to beige */

  @media only screen and (min-width: 390px) and (max-width: 844px) {
    margin: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 845px) {
    margin: 0rem 16rem;
  }
`;
