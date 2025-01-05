import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 5rem;
  justify-content: center;
  align-items: center;
  padding: 10rem;
  margin: 0 auto; /* Add this */
  max-width: 1200px; /* Add this */
  style={{ objectFit: 'cover', objectPosition: 'center' }}

  @media (max-width: 768px) {
    padding: 5rem 2.5rem; /* Adjust padding for smaller screens */
    grid-gap: 1rem; /* Adjust grid gap for smaller screens */
  }
`;

const ImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  
`;

const OverlayImage = styled(Image)`
  max-width: 90%;
  max-height: 90%;
`;

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size and update the state
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = (src) => {
    if (!isSmallScreen) {
      setSelectedImage(src);
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <GalleryContainer>
        <Image src="/images/image1.jpg" width={300} height={200} onClick={() => handleClick('/images/image1.jpg')} />
        <Image src="/images/image3.jpg" width={300} height={200} onClick={() => handleClick('/images/image3.jpg')} />
        <Image src="/images/image8.jpg" width={300} height={200} onClick={() => handleClick('/images/image8.jpg')} />
        <Image src="/images/image9.jpg" width={300} height={200} onClick={() => handleClick('/images/image9.jpg')} />
        <Image src="/images/image11.jpg" width={300} height={200} onClick={() => handleClick('/images/image11.jpg')} />
        <Image src="/images/image10.jpg" width={300} height={200} onClick={() => handleClick('/images/image10.jpg')} />
        <Image src="/images/image12.jpg" width={300} height={200} onClick={() => handleClick('/images/image12.jpg')} />
        <Image src="/images/image13.jpg" width={300} height={200} onClick={() => handleClick('/images/image13.jpg')} />
        <Image src="/images/image14.jpg" width={300} height={200} onClick={() => handleClick('/images/image14.jpg')} />
        <Image src="/images/image15.jpg" width={300} height={200} onClick={() => handleClick('/images/image15.jpg')} />
        <Image src="/images/image16.jpg" width={300} height={200} onClick={() => handleClick('/images/image16.jpg')} />
        <Image src="/images/image17.jpg" width={300} height={200} onClick={() => handleClick('/images/image17.jpg')} />
        <Image src="/images/image18.jpg" width={300} height={200} onClick={() => handleClick('/images/image18.jpg')} />
        <Image src="/images/image19.jpg" width={300} height={200} onClick={() => handleClick('/images/image19.jpg')} />
      </GalleryContainer>
      {selectedImage && (
        <ImageOverlay onClick={handleClose}>
          <OverlayImage src={selectedImage} width={800} height={533} />
        </ImageOverlay>
      )}
    </>
  );
}

export default ImageGallery;
