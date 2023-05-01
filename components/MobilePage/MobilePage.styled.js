import styled from 'styled-components';



export const CenteredContainer = styled.div`
 
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column; /* added property */
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 8rem;
  //margin: 2rem ;


  p {
  margin: 1rem;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5;
}

iframe {
  display: block;
  /* margin: 1rem auto; */
}
`;

