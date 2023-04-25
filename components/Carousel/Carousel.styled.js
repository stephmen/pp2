import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 1rem;
  position: relative;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;
