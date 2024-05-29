import React from "react";
import styled from "styled-components";
import { StyledPress } from "./Press.styled";
import Background from '../BackGround';

const Disque = styled.div`
  background-color: #e6e3d1;
  width: 100%;
  padding: 20px;
  box-sizing: border-box; /* Include padding in width calculation */
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Commentaire = styled.div`
  margin-bottom: 20px;
  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
  }
`;

const Quote = styled.p`
  font-size: 1rem;
  margin: 10px 0;
  span {
    display: block;
    margin-bottom: 10px;
  }
  .author {
    font-weight: bold;
    margin-top: 10px;
  }
`;

export default function Press() {
  return (
    <StyledPress>
      <Background src="/pp4/histoire/page_histoire_fond.jpg" alt="Background image" />
      <div className="container">
        <Disque>
          <Title>EXTRAITS DE PRESSE</Title>

          <Commentaire>
            <img alt="Richard Desjardins" src="image1.jpg" />
            <Quote>
              <span>Il y a de ça trente ans. La première édition de la fanfare Pourpour. À l'époque, il n'était pas nécessaire de savoir bien jouer. Il suffisait d'aimer être ensemble. J'avais remarqué une adorable petite femme qui y jouait du cor. J'ai donc appris un peu de trombone pour être plus près d'elle. J'ai eu un enfant d'elle. Aujourd'hui, l'orchestre joue merveilleusement bien. Viva Pourpour!</span>
              <span className="author">Richard Desjardins, 2004</span>
            </Quote>
          </Commentaire>

          <Commentaire>
            <img alt="Patrick Duval" src="image2.jpg" />
            <Quote>
              <span>«Plein de choses en eux m'ont séduit... Leur complicité véritable, la diversité des instruments. La possibilité de les voir subitement déclamer un poème, ce lien musical entre le continent nord-américain et l'Europe... Cette fanfare a un côté très romantique. Elle offre un voyage. On embarque. Et quand on ressort, on est bien.»</span>
              <span className="author">Patrick Duval, directeur de Musiques de Nuit, Bordeaux, France (2008)</span>
            </Quote>
          </Commentaire>

          <Commentaire>
            <img alt="Georges Harrison" src="image3.jpg" />
            <Quote>
              <span>«The most enjoyable music I've heard in a long time.»</span>
              <span className="author">Georges Harrison, avril 2000</span>
            </Quote>
          </Commentaire>
        </Disque>
      </div>
    </StyledPress>
  );
}
