import styled from 'styled-components';

export const CalendarStyle = styled.div`
  .container {
    margin: 5rem 5rem;
    background-color: #C7EDF6;
    opacity: 0.8;
    padding: 2rem 8rem ;
  }

  .row {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    cursor: pointer;
  }

  .row:hover {
    background-color: #f7f7f7;
  }

  .date {
    display: flex;
    justify-content: center;
    
    font-size: 1.2rem;
    color: #dc143c
   ;
  }

  .location {
    display: flex;
    margin-top: 0.5rem;
    font-size: 1rem;
    justify-content: center;
  }

  .info {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
  }

  

  @media (max-width: 768px) {
    .container {
      //margin: 3rem 3rem;
      padding: 1rem;
    }

    .row {
      border-bottom: none;
      padding-bottom: 2rem;
    }
  }
`;
