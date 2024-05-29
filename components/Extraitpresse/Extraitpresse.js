import React from "react";
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../../client';
import Background from '../BackGround';
import Header from "../Header/Header";
import { Main } from "./Extraitpresse.styled.js";

const client = sanityClient.withConfig({apiVersion: '2021-06-07'});

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Extraitpresse = (props) => {
  return (
    <Main>
      <Background src="/pp4/histoire/page_histoire_fond.jpg" alt="Background image" />
      <Header />
      {props.posts.map((post, index) => (
        <BlockContent key={index} blocks={post.body} />
      ))}
    </Main>
  );
};

export default Extraitpresse;
