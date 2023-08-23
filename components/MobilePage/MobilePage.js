import React from "react";
import Image from 'next/legacy/image'
import billet_lion from '../../public/pp4/billetterie_lion.png'
import { MobilePageStyle } from "./MobilePage.styled";

const MobilePage = (props) => {

  

  return (
    
      <MobilePageStyle>
        <div className="billet-container">
        <a href="https://lepointdevente.com/billets/clo231004001">
        <Image className="billet" src={billet_lion} alt="billet" />
        </a>
        </div>
        <Image className="background" src="/pp4/site_index_telephone_2807_avec titre.jpg" alt="image7" layout='fill' objectFit='cover' />
      </MobilePageStyle>
    
  );
}

export default MobilePage;
