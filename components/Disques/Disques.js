import React, { useState } from "react";
import Image from "next/image";
import {
  StyledDisques,
  SyledTitle,
  Boutiques,
  BuyingCD,
  Container,
} from "./Disques.styled";
import styled from "styled-components";
import Link from "next/link";

const Disques = (props) => {
  const [player, closePlayer] = useState(true);

  return (
    <Container>
      <SyledTitle> Nos Albums</SyledTitle>
      <StyledDisques>
        <img className="cd" src="/pourtoutlemondedame.jpg" />
        <img className="cd" src="/lapourpour.jpg" />
        <img className="cd" src="/Danse des Breloques.jpg" />
        <img className="cd" src="/Karussel.jpg" />
        <img className="cd" src="/Le Bal.jpg" />
      </StyledDisques>

      <BuyingCD>
        <p>
          <h1>
            Vous pourvez vous procurez nos albums aux endroits suivants:
          </h1>
        </p>
      </BuyingCD>
      <Boutiques>
        <div>
          <Link href="https://actuellecd.com/fr/artiste/fanfarepourpour_/Fanfare_Pourpour">
            <img className="Dame" src="/actuellelogo.png" />
          </Link>
        </div>
        <div>
          <Link href="https://www.facebook.com/Boutiqueloblique/">
            <img className="Apple" src="/Oblique.jpg" />
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
