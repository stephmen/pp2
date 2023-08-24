import styled from 'styled-components';

export const BilletsLionStyle = styled.div`
  .billet-container {
    position: absolute;
    top: 8rem; /* Adjust this value for desired vertical position */
    left: 5rem;
    width: 20%;
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
