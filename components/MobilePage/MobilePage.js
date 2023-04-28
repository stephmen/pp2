import React, { useState, useRef } from "react";
import { LesAmis } from '../LesAmis/LesAmis';
import { CenteredContainer } from '../MobilePage/MobilePage.styled'
import Image from 'next/image';

const MobilePage = () => {
   
  
  return (
    <di>
    <CenteredContainer>
    
    <Image src="/images/image7.jpg" alt="image7" width={300} height={200} onClick={() => handleClick('/images/image7.jpg')} />
    </CenteredContainer>
    <CenteredContainer>
    <iframe src="https://player.vimeo.com/video/73329450?portrait=0&byline=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

    </CenteredContainer>
    </di>

  )
}

export default MobilePage