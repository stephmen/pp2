import React from 'react';
import Link from 'next/dist/client/link';
import { StyledHomeLogo } from './HomeLogo.styled.js';

export default function HomeLogo() {

    return(
        <StyledHomeLogo>
        <Link href="/">
        <img src="/pp4/spectacles/page_spectacles_ordinateur_home.png" alt="" width="50" height="50"/>
        </Link>
        </StyledHomeLogo>
    )
}