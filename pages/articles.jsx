import React, { useState, useRef } from "react";
import Image from 'next/image';
import sanityClient from '../client';
import groq from 'groq';
import { useOnClickOutside } from '../hooks';
import styled from 'styled-components';
import HomeLogo from "../components/HomeLogo";
import { Header } from '../components';
import Articles from '../components/Articles' 

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
  background-color: #C7EDF6;
  padding: 4rem; /* Add padding to create space around the content */
`;



const ArticlesPage = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <PageWrapper>
      <Background src="/pp4/spectacles/page_spectacles_ordinateur_fond solo_2.jpg" alt="image7" /> 
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>           Nos Archives et Articles de Journeaux</h1>
      <Container>
        <Articles {...props} />
        
      </Container>
    </PageWrapper>
  );
};

export const getStaticProps = async () => {
  const client = sanityClient.withConfig({ apiVersion: '2021-06-07' });
  
  // Get the current date in ISO8601 format (e.g., "2023-09-20T00:00:00Z")
  const currentDate = new Date().toISOString();
  
  const posts = await client.fetch(groq`
    *[_type == "article" && publishedAt < $currentDate] | order(publishedAt desc)
  `, { currentDate });
  console.log('Fetched posts:', posts); // Log the fetched posts

  return {
    props: { posts },
  };
};

export default ArticlesPage;
