import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #EA465E;
  max-width: 800pt;
  margin: 0 auto;
  font-family: "Arial", sans-serif, bold;
`;

const Quote = styled.span`
  font-weight: 700;
  font-size: 9pt;
  color: #1c1a00;
`;

const Centered = styled.p`
  text-align: center;
  line-height: 1.15;
  margin: 0;
  font-size: 30pt;
  color: #1c1a00;
`;

export const ExtraitDePresseComponent = () => {
  return (
    <Container>
      <Centered>
      Une belle tournée estivale 2024 ! 
      </Centered>
    </Container>
  );
};
