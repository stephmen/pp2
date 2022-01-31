import React, { useState, useRef } from "react";
import Link from 'next/link'
import sanityClient from '../client'
import groq from 'groq'
//import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components';
import { theme } from '.././styles/theme';
import { PourPourLogo, Calendar } from '../Components';
import { Main } from '../components/Styled-Component/spectacle.styled'
import { useOnClickOutside } from '../hooks';
import { Component } from "react";

const Spectacles = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  useOnClickOutside(node, () => setOpen(false));
  
  return(
    <Main>
    <PourPourLogo size="60%"/>
    <Calendar {...props} />
    </Main>
    )
    
  }
  
  const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
  
  Spectacles.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "spectacle"]
  `)
})

export default Spectacles