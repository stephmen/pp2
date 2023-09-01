import React from 'react';
import Link from 'next/dist/client/link';
import { StyledHomeLogo } from './HomeLogo.styled.js';

export default function HomeLogo({ invisible }) {
  if (invisible) {
    return null; // Return null to make the component invisible
  }

  return (
    <StyledHomeLogo>
      <Link href="/">
        <img src="/pp4/spectacles/page_spectacles_ordinateur_home.png" alt="" width="40" height="40"/>
      </Link>
    </StyledHomeLogo>
  );
}
