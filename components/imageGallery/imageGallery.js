import styled from 'styled-components';
import { useState } from 'react';
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

  const handleClick = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <GalleryContainer>
        <Image src="/images/image1.jpg" width={300} height={200} onClick={() => handleClick('/images/image1.jpg')} />
        <Image src="/images/image2.jpg" width={300} height={200} onClick={() => handleClick('/images/image2.jpg')} />
        <Image src="/images/image3.jpg" width={300} height={200} onClick={() => handleClick('/images/image3.jpg')} />
        <Image src="/images/image5.jpg" width={300} height={200} onClick={() => handleClick('/images/image5.jpg')} />
        <Image src="/images/image6.jpg" width={300} height={200} onClick={() => handleClick('/images/image6.jpg')} />
        <Image src="/images/image7.jpg" width={300} height={200} onClick={() => handleClick('/images/image7.jpg')} />
        <Image src="/images/image8.jpg" width={300} height={200} onClick={() => handleClick('/images/image8.jpg')} />
        <Image src="/images/image9.jpg" width={300} height={200} onClick={() => handleClick('/images/image9.jpg')} />
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
