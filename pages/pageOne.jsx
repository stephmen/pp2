import React, { useState, useRef } from "react";
import { PourPourLogo, Header } from '../components';
// import BilletsLion  from '../components/Billets_Lion';
import { Burger, Footer, Menu } from '../components';
import { MainPage } from '../components/Styled-Component/pageone.styled';
import { useOnClickOutside } from '../hooks';
import Image from 'next/image';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  /* transform: translateY(-18%); Adjusted value to move the image higher */
  /* transform: translateX(-3%); Adjusted value to move the image higher */
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const PageOne = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <Header />
      {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} /> */}
      <Image src="/pp4/index_ordinateur_fond.jpg" alt="image7" fill={true} onClick={() => handleClick('/pp4/index_V1607.jpg')} />
      {/* <BilletsLion /> */}
      <PourPourLogo />
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <Footer />
      {/* <StyledImageContainer>
        <a href="https://www.grandprix.artsmontreal.org/nos-finalistes/fanfare-pourpour/" target="_blank" rel="noopener noreferrer">
          <StyledImage src="/cam2024/CAM_fanfare_pourpour_publication.png" alt="CAM fanfare pourpour publication" width={250} height={250} />
        </a>
      </StyledImageContainer> */}
    </div>
  );
};

export default PageOne;