import React, { useState, useRef } from "react";
import Image from 'next/image';
import sanityClient from '../client';
import groq from 'groq';
import { useOnClickOutside } from '../hooks';
import styled from 'styled-components';
import HomeLogo from "../components/HomeLogo";
import { Main } from '../components/Styled-Component/spectacle.styled';
import { Calendar } from '../components';
import Background from '../components/BackGround'; // Assume BackgroundImage is in a separate file
import spectaclepng from '../public/pp4/spectacles/typo_page_spectacles_ordinateur_prochains_spectacles.png';
import contactpng from '../public/pp4/spectacles/typo_page_spectacles_ordinateur_contact.png';

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

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
      <Background src="/pp4/spectacles/page_spectacles_ordinateur_fond solo_2.jpg" alt="image7" />
      <HomeLogo />
      <MainContent>
        <Image src={spectaclepng} alt="image7" />
        <Calendar {...props} />
        <Image src={contactpng} alt="" />
      </MainContent>
    </div>
  );
};

export const getStaticProps = async () => {
  const client = sanityClient.withConfig({ apiVersion: '2021-06-07' });
  const posts = await client.fetch(groq`
    *[_type == "spectacle"] | order(publishedAt asc)
  `);

  return {
    props: { posts },
  };
};

export default Spectacles;
