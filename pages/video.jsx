import React, { useState, useRef } from "react";
import { useOnClickOutside } from '../hooks';
import VideoGallery from "../components/VideoGallery/VideoGallery";
import { Header } from "../components";

const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
    <Header />
    < VideoGallery /> 
    </div>
  
  )
}

export default PageOne