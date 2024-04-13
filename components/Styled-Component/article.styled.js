import styled from 'styled-components';

export const ArticleStyle = styled.div`
  /* Set background color */
  background-color: beige;

  /* Center the content horizontally */
  margin: 4rem auto 2rem auto;

  /* Set padding */
  padding: 2rem;

  /* Set maximum width */
  max-width: 800px;

  /* Align text to the left */
  text-align: left;

  /* Style the title */
  .title {
    padding-top: 2rem;
    font-size: 2rem;
    /* Adjust as needed */
  }

  /* Style the date */
  .date {
    font-size: 1rem;
    margin-top: 1rem;
  }

  /* Style the block content */
  .block {
    margin-top: 12rem;
    line-height: 1.6;
  }

  /* Style the container for text and image */
  .text-and-image-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }

  /* Style the text */
  .text-content {
    line-height: 1.6;
    font-weight: 500;
  }

  /* Style the image */
  img {
    display: block;
    margin: 0 auto; /* Center the image */
    max-width: 100%; /* Ensure image doesn't exceed container width */
  }
`;
