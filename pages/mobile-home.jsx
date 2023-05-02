import React, { useState, useRef } from "react";
import { PPPhoto } from '../components'
import { PourPourLogo, Calendar, LesAmis } from '../components';
import { MainPage }  from '../components/Styled-Component/pageone.styled';
import { useOnClickOutside } from '../hooks';
import Image from 'next/image';
import  { MobilePage } from '../components';
import sanityClient from '../client';
import groq from 'groq';


const  PageTwo = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
    {/* <MainPage> */}
    {/* <LesAmis size="100%" margintop="5rem"/> */}
    {/* <PourPourLogo/> */}
    <MobilePage {...props}/>
    
    {/* </MainPage> */}
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