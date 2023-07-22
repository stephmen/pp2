import React, { useState, useRef } from "react";
import { useOnClickOutside } from '../hooks';
import Image from 'next/image';
import  { MobilePage , Menu, Burger } from '../components';
import sanityClient from '../client';
import groq from 'groq';



const  PageTwo = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
    <MobilePage {...props}/>
    <Menu open={open} setOpen={setOpen} id={menuId} />

    </div>

  )
}
const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
  
PageTwo.getInitialProps = async () => ({
posts: await client.fetch(groq`
  *[_type == "spectacle"]
`)
})

export default PageTwo