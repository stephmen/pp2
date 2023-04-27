import React, { useState, useRef } from "react";
import { MainPage }  from '../components/Styled-Component/pageone.styled';
import { useOnClickOutside } from '../hooks';
import imageGallery from '../components/imageGallery/imageGallery';
import ImageGallery from "../components/imageGallery/imageGallery";

const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <MainPage>
    <div>
    {/* <PourPourLogo className="logo" size="70rem" margin="6rem auto"/> */}
    {/* <PPPhoto className="photo" src="/PlacedesArtsPP1.jpg"/> */}
    <ImageGallery /> 
    </div>
    </MainPage>

  )
}

export default PageOne