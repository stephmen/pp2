import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #C7EDF6;
  max-width: 468pt;
  margin: 0 auto;
  font-family: "Arial", sans-serif;
`;

const Quote = styled.span`
  font-weight: 700;
  font-size: 12pt;
  color: #1c1a00;
`;

const Centered = styled.p`
  text-align: center;
  line-height: 1.50;
  margin: 0;
  font-size: 12pt;
  color: #1c1a00;
`;

export const ExtraitDePresseComponent = () => {
  return (
    <Container>
      <Centered>
        <Quote>&laquo;</Quote>
        ...Artistes inclassables dont le noyau
      </Centered>
      <Centered>
        s'est formé il y a plus de 30 ans,
      </Centered>
      <Centered>
        <Quote className="c4">La fanfare Pourpour</Quote>
        sillonne le monde
      </Centered>
      <Centered>
        avec une joie bouillonnante
      </Centered>
      <Centered>
        et une foisonnante audace...
        <Quote>&raquo;</Quote>
      </Centered>
      <Centered>
        -Coup de coeur francophone, 2020
      </Centered>
    </Container>
  );
};
