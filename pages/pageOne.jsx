import React, { useState, useRef } from "react";
import { PourPourLogo } from '../components';
import { PPPhoto } from '../components'
import { MainPage }  from '../components/Styled-Component/pageone.styled';
import { useOnClickOutside } from '../hooks';

const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <MainPage>
    <div>
    <PourPourLogo className="logo" size="100%" margin="6rem auto"/>
    <PPPhoto className="photo" src="/PlacedesArtsPP1.jpg"/>
    </div>
    </MainPage>

  )
}

export default PageOne