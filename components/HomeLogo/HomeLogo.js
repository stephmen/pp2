import React from 'react';
import Link from 'next/dist/client/link';
import { StyledHomeLogo } from './HomeLogo.styled.js';

export default function HomeLogo() {

    return(
        <StyledHomeLogo>
        <Link href="/">
        <img src="MaisonToit.png" alt=""/>
        </Link>
        </StyledHomeLogo>
    )
}