import React, { useState, useRef } from "react";
import { PourPourLogo } from '../components';
import { MobilePage, Burger, Footer, Menu } from '../components'
import { MainPage }  from '../components/Styled-Component/pageone.styled';
import { useOnClickOutside } from '../hooks';
import Image from 'next/image';


const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    
    <div>
    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />    
    <Image src="/pp4/index_ordinateur_fond.jpg" alt="image7" fill={true} onClick={() => handleClick('/pp4/index_V1607.jpg')} />

    <PourPourLogo />
    <Menu open={open} setOpen={setOpen} id={menuId} />
    <Footer />
    </div>
  

  )
}

export default PageOne