import React, { useState, useRef } from "react";
import Link from 'next/link'
import sanityClient from '../../client'
import groq from 'groq'
import { ThemeProvider } from '../';
import { theme } from '/styles/theme';
import { Calendar, LesAmis } from '../';
import { Main } from '../'
import { useOnClickOutside } from '../';

const Show = (props) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  useOnClickOutside(node, () => setOpen(false));
  
  return(
    <div>
     <header>
    <div className="col"><h3>Nos Prochains Spectacles</h3></div>
    </header>
    <LesAmis size="100%"/>
    <Main >
    
   
    <Calendar {...props} />
   
    </Main>
    </div>
    )
    
  }
  
  const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
  
  Show.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "spectacle"]
  `)
})

export default Show