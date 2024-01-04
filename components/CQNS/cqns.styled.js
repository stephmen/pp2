import styled from 'styled-components';

export const StyledDisques = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 20px 20px 20px; /* Adjust top margin as needed, other margins are 20px */

  > * {
    width: 40rem;
    margin: 10px;
  }

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    flex-direction: column;
    
    > * {
      width: 100%;
    }
  }
`;

export const Container = styled.div`
  /* Add styles for your container if needed */
  /* max-width: 930px; */
  /* margin: auto; */
`;
