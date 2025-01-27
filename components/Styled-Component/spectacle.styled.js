import styled from 'styled-components';

export const ShowStyle = styled.div`
  /* Container styles for centering */
  margin: 0 auto;
  max-width: 800px; /* Adjust this value as needed for the box width */
  padding: 2rem; /* Adds padding inside the box */
  background-color: #ffffff; /* Optional: set a background color for the box */
  border-radius: 1rem; /* Optional: adds rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow for visual appeal */

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
    padding-top: 2rem;
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
    margin: 1rem auto; /* Centers the image and adds vertical spacing */
  }
  .block {   
    grid-area: block;
  }

  /* Media queries for mobile */
  @media (max-width: 768px) {
    margin: 1rem; /* Reduced margin for smaller screens */
    max-width: 100%; /* Ensure the box doesn't overflow */
    padding: 1rem; /* Adjust padding for mobile */

    .title, .endroit, .adress, .date, img, .block {
      width: 100%;
      padding: 0.5rem; /* Adjust inner padding */
      box-sizing: border-box;
    }
  }
`;
