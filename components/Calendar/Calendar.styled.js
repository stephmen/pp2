import styled from 'styled-components';

export const CalendarStyle = styled.div`
  .container {
    margin: 1rem 1rem;
    background-color: #eff971;
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
    font-weight: bold;
    font-size: 1.2rem;
  }

  .location {
    margin-top: 0.5rem;
    font-size: 1rem;
  }

  .image {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }

  .image img {
    height: 50px;
  }

  @media (max-width: 768px) {
    .container {
      margin: 1rem 0rem;
      padding: 4rem;
    }

    .row {
      border-bottom: none;
      padding-bottom: 2rem;
    }
  }
`;
