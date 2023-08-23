import React, { useState, useRef } from "react";
import Link from 'next/link'
import spectaclepng from '../public/pp4/spectacles/typo_page_spectacles_ordinateur_prochains_spectacles.png';
import contactpng from '../public/pp4/spectacles/typo_page_spectacles_ordinateur_contact.png'
import sanityClient from '../client'
import groq from 'groq'
import { ThemeProvider } from 'styled-components';
import { theme } from '.././styles/theme';
import { PourPourLogo, Calendar, LesAmis, Show} from '../components';
import { Main } from '../components/Styled-Component/spectacle.styled'
import { useOnClickOutside } from '../hooks';
import Image from 'next/legacy/image';
import styled from 'styled-components';
import HomeLogo from "../components/HomeLogo";

const BackgroundImage = styled.div`
  position: fixed;
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
`;

const Spectacles = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  useOnClickOutside(node, () => setOpen(false));
  
  return (
    <div>
      <BackgroundImage>
        <Image src="/pp4/spectacles/page_spectacles_ordinateur_fond solo_2.jpg" alt="image7" layout='fill' objectFit='cover' />
      </BackgroundImage>
      <HomeLogo/>
      <MainContent>
        <Image src={spectaclepng} alt="image7"/>
        <Calendar {...props} />
        <Image src={contactpng}  alt="" />
      </MainContent>
    </div>
  );
}

const client = sanityClient.withConfig({apiVersion: '2021-06-07'})

Spectacles.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "spectacle"]  | order(publishedAt asc)
  `)
})

export default Spectacles;
