import React from "react";
import styled from "styled-components";
import { StyledPress } from "./Press.styled";
import  Background  from '../BackGround'


const Disque = styled.div`
background-color: #e6e3d1;
width: 100%;
`

export default function Presse() {
  return (
    <StyledPress>
      <Background src="/pp4/histoire/page_histoire_fond.jpg" alt="image7" />
      <div className="container">
        <Disque>

        <p className="c1">
          <span className="sous-titre">EXTRAITS DE PRESSE</span>
        </p>

        <div className="commentaire">
          <p className="c1">
            <img alt="richard desjardins" src="image1.jpg" title="" />
          </p>
          <p className="c1">
            <span className="c0">
              Il y a de ça trente ans.
              <br />
              La première édition de la fanfare Pourpour.
              <br />À l&apos;époque, il n&apos;était pas nécessaire de savoir bien jouer.
              <br />
              Il suffisait d&apos;aimer être ensemble.
              <br /> J&apos;avais remarqué une adorable petite femme qui y jouait du
              cor.
              <br />
              J&apos;ai donc appris un peu de trombone pour être plus près d&apos;elle.
              J&apos;ai eu un enfant d&#39;elle.
              <br />
              Aujourd&apos;hui, &nbsp;l&apos;orchestre joue merveilleusement
              bien.
              <br />
              Viva Pourpour !
              <br />
              <br />
              <span className="c3">Richard Desjardins 2004</span>
            </span>
          </p>
        </div>

        <div className="commentaire">
          <p className="c1">
            <img alt="patrick-duval" src="image2.jpg" />
          </p>
          <p className="c1">
            <span className="c0">
              «Plein de choses en eux m&apos;ont séduit...Leur complicité véritable,
              la diversité des instruments. La possibilité de les voir
              subitement déclamer un poème, ce lien musical entre le continent
              nord américain et l&apos;Europe... Cette fanfare a un côté très
              romantique. Elle offre un voyage. On embarque. Et quand on
              ressort, on est bien.»
            </span>
            <br />
            <br />
            

            
              Patrick Duval, directeur de Musiques de Nuit,
            
              Bordeaux, France (2008)
            
          </p>
        </div>

        <div className="commentaire">
          <p className="c1">
            <img alt="Harrisson" src="image3.jpg" title="" />
          </p>
          <p className="c1">
            <span className="c0">
              «The most enjoyful music I&apos;ve heard in a long time.»
            </span>
            <br/>
            <br/>
            Georges Harrison, avril 2000
          </p>
        </div>
        </Disque>
        

      

      </div>
      {/* <Histoire /> */}
    </StyledPress>
    
  );
}
