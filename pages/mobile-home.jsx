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
      <MobilePage {...props}/>
      <Menu open={open} setOpen={setOpen} id={menuId} />
      <Footer />
    </div>
  )
}

const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
  
PageTwo.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "spectacle"]
  `)
})

export default PageTwo;
