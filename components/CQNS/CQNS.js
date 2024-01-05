import React from "react";
import Header from "../Header/Header";
import Background from "../BackGround/BackGround";
import { Container, StyledDisques } from "./cqns.styled";

const Disques = (props) => {
  return (
    <>
      <Background src="/pp4/cqns/6ealbum_fond_haut_avec_texte.png" alt="image7" />
      <Container>
        <Header />
        <StyledDisques>
          <img src="/pp4/cqns/page_6album_elements_seuls3.png" alt="album-cover" />
        </StyledDisques>
      </Container>
    </>
  );
};

export default Disques;
