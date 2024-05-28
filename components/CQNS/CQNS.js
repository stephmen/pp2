import React from "react";
import Header from "../Header/Header";
import Background from "../BackGround/BackGround";
import { Container, StyledDisques } from "./cqns.styled";
import { Titre } from "./Titre"

const Disques = (props) => {
  return (
    <>
      <Background src="/pp4/cqns/fond du haut.png" alt="image7" />
      <Container>
        <Header />
        <Titre />
        <StyledDisques>
          <img src="/pp4/cqns/page_6album_elements_seuls5.png" alt="album-cover" />
        </StyledDisques>
      </Container>
    </>
  );
};

export default Disques;
