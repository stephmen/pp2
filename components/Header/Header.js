import React, { useState, useRef } from 'react';
import { StyledHeader } from './Header.styled.js';
import { Burger, Menu, HomeLogo, PourPourLogo } from '../../components';
import { useOnClickOutside } from '../../hooks';


export default function Header() {
    
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";

    useOnClickOutside(node, () => setOpen(false));


    return(
        <StyledHeader>
        <header>
        <div className="header-wrapper">
        <PourPourLogo size="5%"/>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
        {/* <HomeLogo/> */}
        </div>
        
        </header>
        </StyledHeader>
    )
}