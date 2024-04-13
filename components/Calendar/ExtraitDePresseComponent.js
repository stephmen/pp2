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
      Une belle tournée est en préparation! Calendrier saison estivale 2024, à venir! 
        {/* <Quote>&laquo;</Quote>
        ...Artistes inclassables dont le noyau
      </Centered>
      <Centered>
        s&apos;est formé il y a plus de 30 ans,
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
        -Coup de coeur francophone, 2020 */}
      </Centered>
    </Container>
  );
};
