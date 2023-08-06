import styled from 'styled-components';

export const VideoGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 4rem; /* adjust to match the height of your header */
  padding-bottom: 3rem; /* adjust to match the height of your footer */
`;


export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin: 1rem;
  }

 
  & iframe {
    width: 100%;
    max-width: 480px;
    height: calc((9 / 16) * 100vw);
    max-height: 270px;
  }
`;
export const IframeContainer = styled.div`
  flex-grow: 2;
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */

`;