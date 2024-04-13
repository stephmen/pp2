import React from 'react'
import Press from '../components/Press'
import Histoire from '../components/Extraitpresse';
import { Header } from '../components'
import sanityClient from "../client";
import groq from "groq";
  

    export default function Presse(props) {
    
    
    return(
    <div>
    <Header />    
    <Press {...props} />
    <Histoire {...props} />
    </div>

)}
export const getStaticProps = async () => {
    const client = sanityClient.withConfig({ apiVersion: '2021-06-07' });
  
    const posts = await client.fetch(groq`
      *[_type == "extraitpresse" ]
    `);
    console.log('Fetched posts:', posts); // Log the fetched posts
  
    return {
      props: { posts },
    };
  };

