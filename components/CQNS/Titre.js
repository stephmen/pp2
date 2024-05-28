import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #EA465E;
  max-width: 800pt;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
  padding-top: 8rem; /* Increased padding from the top */
`;

const Quote = styled.span`
  font-weight: 700;
  font-size: 2rem;
  color: white; /* Changed color to white */
`;

const Centered = styled.p`
  text-align: center;
  line-height: 1.15;
  margin: 0;
  font-size: 20pt; Adjusted font size to make it smaller
  color: white; /* Changed color to white */
  font-weight: bold; /* Added bold font weight */
`;

export const Titre = () => {
  return (
    <Container>
      <Centered>
        <Quote>Notre 6e Album, sorti le 4 octobre 2023</Quote> {/* Added Quote component */}
      </Centered>
    </Container>
  );
};
