import styled from 'styled-components';

export const CalendarStyle = styled.div`
  .container {
    margin: 2rem 4rem 3rem;
    background-color: #E5E7EB; /* Light grayish background */
    opacity: 0.95;
    padding: 2rem 6rem;
  }

  .row {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ccc;
    padding: 1.5rem;
    cursor: pointer;
    background-color: #F0F0F5; /* Soft blue-gray */
  }

  .row:nth-child(odd) {
    background-color: #D8D8E5; /* Slightly darker alternate rows */
  }

  .row:hover {
    background-color: #C7EDF6; /* Subtle blue highlight on hover */
  }

  .date {
    display: flex;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: bold;
    color: #DC143C; /* Strong red for date emphasis */
  }

  .location {
    display: flex;
    margin-top: 0.5rem;
    font-size: 1.1rem;
    justify-content: center;
    color: #3B3B58; /* Deep purple for contrast */
  }

  .info {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
    font-weight: bold;
    color: #3B3B58;
  }

  @media (max-width: 768px) {
    .container {
      margin: 4rem 1rem;
      padding: 1rem;
    }

    .row {
      padding: 1rem;
    }
  }
`;
