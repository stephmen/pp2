import React, { useState, useRef } from "react";
import Image from "next/image";
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import  Background  from '../BackGround'
import Header from "../Header/Header";
import { Text, Titre, Main } from "./Extraitpresse.styled.js";

const client = sanityClient.withConfig({apiVersion: '2021-06-07'})

function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

const Extraitpresse = (props) => {
  const {
    title = 'Missing title',
    body = [],
    imagesGallery = [],
  } = {...props}

    return (
      <Main>
        <Background src="/pp4/histoire/page_histoire_fond.jpg" alt="image7" />
        <Header />
        {props.posts[0].body.map((content, index) => (
          <BlockContent key={index} blocks={content} />
        ))}
      </Main>
    );
  }
  
  


export default Extraitpresse