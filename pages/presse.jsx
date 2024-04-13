import React from 'react'
import Press from '../components/Press'
import Extraitpresse from '../components/Extraitpresse';
import { Header } from '../components'
import sanityClient from "../client";
import groq from "groq";
  

    export default function Presse(props) {
    
    
    return(
    <div>
      
    <Press />
    <Extraitpresse {...props} />
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

