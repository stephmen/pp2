// ArticlesPage.js
import React, { useState, useRef } from "react";
import sanityClient from '../client';
import groq from 'groq';
import { useOnClickOutside } from '../hooks';
import { PageArticlesArchives, Container } from '../components/Styled-Component/pageArticlesArchives'; // Import the styled component
import { Header } from '../components';
import Articles from '../components/Articles' 
import Background from '../components/BackGround';


const ArticlesPage = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <PageArticlesArchives> {/* Use the PageArticlesArchives styled component */}
      <Background src="/pp4/spectacles/page_spectacles_ordinateur_fond solo_2.jpg" alt="image7" /> 
      <Header />
      <Container> {/* Use the Container styled component */}
      <h1>           Nos Archives et Articles de Journeaux</h1>
        <Articles {...props} />
      </Container>
    </PageArticlesArchives>
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
