import styled from "styled-components";
export const ArticlesArchivesStyles = styled.div`
  @media (min-width: 930px) {
    .projets {
      max-width: 930px;
      margin: 0 auto;

      
      

      display: grid;
      grid-gap: 10px;
      grid-template-columns: 40;
      grid-auto-flow: row;
    }
    .projetTitre {
      align-items: start;
      font-weight: bold;
      padding-bottom: 1%;
    }
      .projet {
        display: grid;
        grid-template-columns: 1fr;
        align-items: start;
        font-size: larger;
      }
      li {
        padding-left: 10%;
        list-style-type: none;
        font-size: normal;
      }
      li:hover {
    background-color: yellow;
}
      .article {
        
      }
    }
    
  
`;


