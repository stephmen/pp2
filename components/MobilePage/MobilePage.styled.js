import styled from 'styled-components';



export const CenteredContainer = styled.div`
 
  display: flex;
  align-items: center;
  /* height: 100vh; */
  flex-direction: column; /* added property */
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 8rem;
  //margin: 2rem ;


  p {
  margin: 2rem;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5;
}

h2 {
    margin-top: 4rem
}

iframe {
  display: block;
  padding-top: 2rem
  width: 100%;
  max-width: 480px;
  height: calc((9 / 16) * 100vw);
  max-height: 270px;
  /* margin: 1rem auto; */
}

/* iframe {
    width: 100%;
    max-width: 480px;
    height: calc((9 / 16) * 100vw);
    max-height: 270px;
  } */
`;

