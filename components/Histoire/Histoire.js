import React, { useState, useRef } from "react";
import Image from "next/image";
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import { Text, Titre, Main } from "./History.styled.js";


const client = sanityClient.withConfig({apiVersion: '2021-06-07'})


function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}


const Histoire = (props) => {
  const {
    title = 'Missing title',
    body = [],
    imagesGallery = [],
  } = {...props}
 
  
  return(
   
    <Main>
    <Titre> {props.posts[0].title}</Titre>
    <Image src={urlFor(props.posts[0].imagesGallery[1]).width(850).url()}/>
    <BlockContent blocks={props.posts[0].body}/>
    <Image src={urlFor(props.posts[0].imagesGallery[0]).width(850).url()}/>
    </Main>
    
    )
    
  }
  
  


export default Histoire