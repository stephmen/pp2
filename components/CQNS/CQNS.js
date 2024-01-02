import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header/Header";
import Background from "../BackGround/BackGround";
import {
  StyledDisques,
  SyledTitle,
  Boutiques,
  BuyingCD,
  Container,
} from "./cqns.styled";
import styled from "styled-components";
import Link from "next/link";

const Disques = (props) => {
  const [player, closePlayer] = useState(true);

  return (
    <Container>
      <Background src="/pp4/histoire/page_histoire_fond.jpg" alt="image7" />
      <Header />
      <SyledTitle> Nos Albums</SyledTitle>
      <StyledDisques>
        <img className="cd" src="/pourtoutlemondedame.jpg" />
        <img className="cd" src="/lapourpour.jpg" />
        <img className="cd" src="/Danse des Breloques.jpg" />
        <img className="cd" src="/Karussel.jpg" />
        <img className="cd" src="/Le Bal.jpg" />
        <img className="cd" src="/ce-que-nous-sommes.jpeg" />
      </StyledDisques>

     
      <BuyingCD>
        {/* <p>
          <h1>
           
          </h1>
        </p> */}
      </BuyingCD>
      <Boutiques>
        <div>
          <Link href="https://actuellecd.com/fr/artiste/fanfarepourpour_/Fanfare_Pourpour">
            <img className="Dame" src="/actuellelogo.png" />
          </Link>
        </div>
        <div>
          <Link href="https://fanfarepourpour.bandcamp.com/" target="_blank">
            <img className="Apple" src="/bandcamp-button-bc-circle-green-64.png" />
          </Link>
        </div>
        
        <div>
          <Link href="https://music.apple.com/ca/artist/fanfare-pourpour/419642215">
            <img className="Apple" src="/Apple_logo_black.svg.png" />
          </Link>
        </div>
      </Boutiques>
    </Container>
  );
};

export default Disques;
