import React, { useState } from "react";
import Image from "next/image";
import Header from "../Header/Header";
import Background from "../BackGround/BackGround";
import {
  StyledDisques,
  Container,
} from "./cqns.styled";
import styled from "styled-components";
import Link from "next/link";

const Disques = (props) => {
  const [player, closePlayer] = useState(true);

  return (
    <Container>
      <Background src="/pp4/cqns/6ealbum_fond_haut_avec_texte.png" alt="image7" />
      <Header />
      {/* <SyledTitle> Notre 6e Album, sorti le 4 octobre 2023</SyledTitle> */}
      <StyledDisques>
        <img src="/pp4/cqns/page_6album_elements_seuls3.png" />
        
      </StyledDisques>

     
      
     
    </Container>
  );
};

export default Disques;
