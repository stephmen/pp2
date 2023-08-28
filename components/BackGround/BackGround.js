import React from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import Image from 'next/legacy/image';
import { BackgroundImage } from './BackGround.styled'; // Import the styled component




const Background = ({ src }) => {
  return (
    <BackgroundImage>
      <Image src={src} alt="background-image" layout='fill' objectFit='cover' />
    </BackgroundImage>
  );
}

// Define PropTypes
Background.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Background;
