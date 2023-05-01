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
    <BlockContent blocks={props.posts[0].body[1]}/>
    <Image src={urlFor(props.posts[0].imagesGallery[0]).url()} alt="0" height={300} width={425} />
    <BlockContent blocks={props.posts[0].body[2]}/>
    <BlockContent blocks={props.posts[0].body[3]}/>
    <BlockContent blocks={props.posts[0].body[4]}/>
    <BlockContent blocks={props.posts[0].body[5]}/>
    <BlockContent blocks={props.posts[0].body[6]}/>
    <Image src={urlFor(props.posts[0].imagesGallery[1]).url()} alt="0" height={300} width={470} /> 
    </Main>
    )
  }
  
  


export default Histoire