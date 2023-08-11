import React, { useState, useRef } from "react";
import Link from 'next/link'
// import spectaclepng from 'public/pp4/spectacles/typo_page_spectacles_ordinateur_prochains_spectacles.png'
import spectaclepng from '../public/pp4/spectacles/typo_page_spectacles_ordinateur_prochains_spectacles.png';
import sanityClient from '../client'
import groq from 'groq'
import { ThemeProvider } from 'styled-components';
import { theme } from '.././styles/theme';
import { PourPourLogo, Calendar, LesAmis, Show} from '../components';
import { Main } from '../components/Styled-Component/spectacle.styled'
import { useOnClickOutside } from '../hooks';
import Image from 'next/legacy/image'; // Import next/legacy/image
import styled from 'styled-components'; // Import styled-components

const Container = styled.div`
  position: fix;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Header = styled.header`
  position: relative;
  z-index: 1;
`;

const MainContent = styled(Main)`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem  1rem
`;

const ImageContainer = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const Spectacles = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  useOnClickOutside(node, () => setOpen(false));
  
  return (
    <div>
      <BackgroundImage>
        <Image src="/pp4/page_spectacles_ordinateur_fond solo.jpg" alt="image7" layout='fill'  />
      </BackgroundImage>
      
      <MainContent>
        <Image src={spectaclepng} alt="image7"/>
        <Calendar {...props} />
      </MainContent>
    </div>
  );
}

const client = sanityClient.withConfig({apiVersion: '2021-06-07'})

Spectacles.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "spectacle"]
  `)
})

export default Spectacles;
