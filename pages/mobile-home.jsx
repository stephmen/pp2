import React, { useState, useRef } from "react";
import { PPPhoto } from '../components'
import { PourPourLogo, Calendar, LesAmis } from '../components';
import { MainPage }  from '../components/Styled-Component/pageone.styled';
import { useOnClickOutside } from '../hooks';
import Image from 'next/image';
import  { MobilePage } from '../components';

export default function PageTwo()  {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
    <MainPage>
    <LesAmis size="100%" margintop="5rem"/>

    <MobilePage/>
    </MainPage>
    </div>

  )
}

// export default PageTwo