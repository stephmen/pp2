import React, { useState, useRef } from "react";
import Image from 'next/image';
import sanityClient from '../client';
import groq from 'groq';
import { useOnClickOutside } from '../hooks';
import styled from 'styled-components';
import HomeLogo from "../components/HomeLogo";
import { Calendar, Header } from '../components';
import TextBanner from "../components/Show/TextBanner";
import Background from '../components/BackGround';
import spectaclepng from '../public/pp4/spectacles/typo_page_spectacles_ordinateur_prochains_spectacles.png';
import contactpng from '../public/pp4/spectacles/typo_page_spectacles_ordinateur_contact.png';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* Allow Container to expand and take remaining space */
  padding-top: 4rem; /* Add padding to push content below the fixed header */
`;

const ResponsiveImage = styled(Image)`
  max-width: 100%;
  height: auto;
`;

const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center; /* Center the image horizontally */
  align-items: center; /* Center the image vertically */
  width: 100%; /* Ensure the container spans the full width */
  position: relative; /* Ensure proper positioning within the parent */
  margin: 0 auto; /* Center the container itself if needed */
  text-align: center; /* Ensure text alignment doesn't affect centering */
`;

const StyledImage = styled.img`
  width: 50%; /* Adjusted width to make the image larger */
  height: auto;
  margin: 0 auto; /* Ensure the image itself is centered */
  display: block; /* Ensure the image behaves as a block-level element */
`;

const Spectacles = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <PageWrapper>
      <Background src="/pp4/spectacles/page_spectacles_ordinateur_fond solo_2.jpg" alt="image7" /> 
      <Header />
      <Container>
        <TextBanner />
        {/* <StyledImageContainer>
          <a href="https://www.grandprix.artsmontreal.org/nos-finalistes/fanfare-pourpour/" target="_blank" rel="noopener noreferrer">
            <StyledImage src="/cam2024/CAM_fanfare_pourpour_publication.png" alt="CAM fanfare pourpour publication" />
          </a>
        </StyledImageContainer> */}
        <Calendar {...props} />
        <ResponsiveImage src={contactpng} alt="" />
      </Container>
    </PageWrapper>
  );
};

Spectacles.getInitialProps = async () => {
  const client = sanityClient.withConfig({ apiVersion: '2021-06-07' });
  const currentDate = new Date().toISOString();
  
  const posts = await client.fetch(groq`
    *[_type == "spectacle"] | order(publishedAt desc)
    // *[_type == "spectacle" && publishedAt > $currentDate] | order(publishedAt asc)
  `, { currentDate });

  console.log('Fetched posts:', posts); // Log the fetched posts

  return {
    posts
  };
};

export default Spectacles;
