import React, { useState, useRef } from "react";
import { useOnClickOutside } from '../hooks';
import { MobilePage, Menu, Burger, Footer, Header } from '../components';
import sanityClient from '../client';
import groq from 'groq';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  padding-right: 2rem;
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto; // Move the Burger component to the right
`;

const RightAlignedBurger = styled(Burger)`
  margin-left: auto; // Move the Burger component to the right
`;

const StyledImageContainer = styled.div`
  position: absolute; /* Position the container at the bottom */
  bottom: 0; /* Align it to the bottom of the screen */
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1; /* Ensure the image is above other elements */
  margin-top: 0; /* Remove any top margin */
`;

const StyledImageLink = styled.a`
  display: inline-block;
`;

const StyledImage = styled.img`
  width: 39%; /* Adjusted width to make the image larger */
  height: auto;
  padding 0 7rem;
`;

const PageTwo = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <HeaderContainer>
        {/* <Header hideHomeLogo={true}/> */}
        <RightAlignedBurger open={open} setOpen={setOpen} aria-controls={menuId} />
      </HeaderContainer>
      <MobilePage {...props} />
      <StyledImageContainer>
        <StyledImageLink href="https://www.grandprix.artsmontreal.org/nos-finalistes/fanfare-pourpour/" target="_blank" rel="noopener noreferrer">
          <StyledImage src="/cam2024/CAM_fanfare_pourpour_publication.png" alt="CAM fanfare pourpour publication" />
        </StyledImageLink>
      </StyledImageContainer>
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <Footer />
    </div>
  );
};

const client = sanityClient.withConfig({apiVersion: '2021-06-07'});

PageTwo.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "spectacle"]
  `)
});

export default PageTwo;
