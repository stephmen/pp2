import styled from 'styled-components';

export const ShowStyle = styled.div`
  /* Default styles for desktop */
  margin: 4rem 4rem 2rem 4rem;
  display: grid;
  grid-gap: 0px;
  grid-template-areas: 
    "title"
    "endroit"
    "adress"
    "date"
    "block"
    "image";

  .title {
    padding-top: 5rem;
    grid-area: title;
  }
  .endroit {
    grid-area: endroit;
  }
  .adress {  
    flex-direction: column;
    align-self: end;
    grid-area: adress;
  }
  .date {
    flex-direction: column;
    align-self: end;
    grid-area: date;
  }
  img {
    grid-area: image;
    margin: 0 auto; /* This will horizontally center the image */
  }
  .block {   
    grid-area: block;
  }

  /* Media queries for mobile */
  @media (max-width: 768px) {
    margin: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title, .endroit, .adress, .date, img, .block {
      width: 100%;
      max-width: 100%; /* Ensure the content doesn't overflow */
      padding: 0 1rem; /* Add padding to ensure equal margins */
      box-sizing: border-box;
    }

    img {
      padding: 0; /* Remove padding from the image itself */
    }
  }
`
