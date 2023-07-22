import React from "react";
import { PourPourLogo, Calendar } from '/components';
import { CenteredContainer } from './MobilePage.styled';
import Image from 'next/image';

const MobilePage = (props) => {

  const handleClick = (imageUrl) => {
    console.log(`Clicked image with URL: ${imageUrl}`);
  }

  return (
    
      <div>
        <Image src="/pp4/index_V1607.jpg" alt="image7" fill={true} onClick={() => handleClick('/pp4/index_V1607.jpg')} />
      </div>
    
  );
}

export default MobilePage;
