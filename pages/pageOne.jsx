import React, { useState, useRef } from "react";
//import Footer from '../components/Footer'
import { ThemeProvider } from 'styled-components';
import { theme } from '.././styles/theme';
import { PourPourLogo } from '../Components';
import { LesAmis } from '../Components';
import MainPage from '../components/Styled-Component/pageone.styled'
import { useOnClickOutside } from '../hooks';

const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

    return(
    <MainPage>
    <div className="logoetamis">
    <PourPourLogo className="logo" size="100%"/>
    <LesAmis className="lesAmis" size="200%"/>
    </div>
    <img className="photo" src="PlacedesArtsPP1.jpg" />
    </MainPage>
    )
    
}

export default PageOne