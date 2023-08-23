import styled from 'styled-components';

export const MobilePageStyle = styled.div`
  .billet-container {
    position: absolute;
    top: 27rem; /* Adjust this value for desired vertical position */
    left: 0;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  /* .billet {
    width: 50%;
    height: 50%;
    /* Add other styles as needed */
  } */

  .background {
    position: relative;
    z-index: -1;
    /* Define background styles if needed */
  }
`;
