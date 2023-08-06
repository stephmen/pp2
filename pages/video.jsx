import React, { useState, useRef } from "react";
import { useOnClickOutside } from '../hooks';
import VideoGallery from "../components/VideoGallery/VideoGallery";

const PageOne = (props) => {
   
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  useOnClickOutside(node, () => setOpen(false));
  return (
   
    < VideoGallery /> 
  
  )
}

export default PageOne