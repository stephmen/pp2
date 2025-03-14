import React, { useState, useRef } from "react";
import Image from "next/image";
import BlockContent from '@sanity/block-content-to-react'
import imageUrlBuilder from '@sanity/image-url'
import sanityClient from '../../client'
import  Background  from '../BackGround'
import Header from "../Header/Header";
import { Text, Titre, Main, ImageContainer } from "./History.styled.js";

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
    <Background src="/pp4/histoire/page_histoire_fond.jpg" alt="image7" />
    <Header/>

    <Titre> {props.posts[0].title}</Titre>
    <BlockContent blocks={props.posts[0].body[0]}/>
    <ImageContainer>    
      <Image src={urlFor(props.posts[0].imagesGallery[0]).url()} alt="0" height={300} width={425} style={{
    maxWidth: '100%', 
    height: 'auto', 
    objectFit: 'contain', // Adjust to 'cover' or 'fill' if needed
    display: 'block',
    margin: '0 auto'
  }} />
    </ImageContainer>
    <BlockContent blocks={props.posts[0].body[1]}/>
    <BlockContent blocks={props.posts[0].body[2]}/>
    <BlockContent blocks={props.posts[0].body[3]}/>
    <BlockContent blocks={props.posts[0].body[4]}/>
    <BlockContent blocks={props.posts[0].body[5]}/>
      <ImageContainer>
            <Image src={urlFor(props.posts[0].imagesGallery[2]).url()} alt="0" height={300} width={470} style={{
      maxWidth: '100%', 
      height: 'auto', 
      objectFit: 'contain', // Adjust to 'cover' or 'fill' if needed
      display: 'block',
      margin: '0 auto'
    }} />
      </ImageContainer>
    <BlockContent blocks={props.posts[0].body[6]}/>
    <BlockContent blocks={props.posts[0].body[7]}/>
    <BlockContent blocks={props.posts[0].body[8]}/>
    <ImageContainer>
          <Image src={urlFor(props.posts[0].imagesGallery[1]).url()} alt="0" height={300} width={470} style={{
    maxWidth: '100%', 
    height: 'auto', 
    objectFit: 'contain', // Adjust to 'cover' or 'fill' if needed
    display: 'block',
    margin: '0 auto'
  }} />
    </ImageContainer>
    <BlockContent blocks={props.posts[0].body[9]}/>
    <BlockContent blocks={props.posts[0].body[10]}/>
    <BlockContent blocks={props.posts[0].body[11]}/>
    <BlockContent blocks={props.posts[0].body[12]}/>
    <BlockContent blocks={props.posts[0].body[13]}/>
    <BlockContent blocks={props.posts[0].body[14]}/>
    <BlockContent blocks={props.posts[0].body[15]}/>
    <BlockContent blocks={props.posts[0].body[16]}/>
    <BlockContent blocks={props.posts[0].body[17]}/>
    <BlockContent blocks={props.posts[0].body[18]}/>
    <BlockContent blocks={props.posts[0].body[19]}/>
    <BlockContent blocks={props.posts[0].body[20]}/>
    <BlockContent blocks={props.posts[0].body[21]}/>
    <BlockContent blocks={props.posts[0].body[22]}/>
    <BlockContent blocks={props.posts[0].body[23]}/>
    <BlockContent blocks={props.posts[0].body[24]}/>
    <BlockContent blocks={props.posts[0].body[25]}/>
    <BlockContent blocks={props.posts[0].body[26]}/>
    <BlockContent blocks={props.posts[0].body[27]}/>
    <BlockContent blocks={props.posts[0].body[28]}/>
    <BlockContent blocks={props.posts[0].body[29]}/>
    <BlockContent blocks={props.posts[0].body[30]}/>

    </Main>
    )
  }
  
  


export default Histoire