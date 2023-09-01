import React, { useState, useRef } from "react";
import { PourPourLogo, Header } from '../components';
import BilletsLion  from '../components/Billets_Lion';
import {  Burger, Footer, Menu } from '../components'
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
    <Header />
    {/* <Burger open={open} setOpen={setOpen} aria-controls={menuId} />     */}
    <Image src="/pp4/index_ordinateur_fond.jpg" alt="image7" fill={true} onClick={() => handleClick('/pp4/index_V1607.jpg')} />
    <BilletsLion />
    <PourPourLogo />
    <Menu open={open} setOpen={setOpen} id={menuId} />
    <Footer />
    </div>
  

  )
}

export default PageOne