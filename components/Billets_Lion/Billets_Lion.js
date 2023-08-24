import React from "react";
import Image from 'next/legacy/image'
import billet_lion from '../../public/pp4/billetterie_lion.png'
import { BilletsLionStyle } from "./Billets_Lion.styled.js";

export default function BilletsLion () {

  

  return (
    
      <BilletsLionStyle>
        <div className="billet-container">
        <a href="https://lepointdevente.com/billets/clo231004001" target="_blank">
        <Image className="billet" src={billet_lion} alt="billet" />
        </a>
        </div>
      </BilletsLionStyle>
    
  );
}


