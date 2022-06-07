import React, { useState, useRef } from "react";
import { PourPourLogo } from '../components';
import { LesAmis } from '../components';
import MainPage from '../components/Styled-Component/pageone.styled'
import { useOnClickOutside } from '../hooks';

const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <MainPage>
    <div className="logoetamis">
    <PourPourLogo className="logo" size="75%" margin="6rem auto"/>
    {/* <LesAmis className="lesAmis" size="400%"/> */}
    </div>
    <img className="photo" src="/PlacedesArtsPP1.jpg"/>
    </MainPage>
  )
}

export default PageOne