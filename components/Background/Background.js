import React, { useState, useEffect } from "react";

const Background = ({ speed, imageSize }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImage = async () => {
      const imagePaths = await require.context("/public/LesAmisTrans", false, /\.(png|jpe?g|svg)$/);
      const images = imagePaths.keys().map((path) => {
        const img = new Image();
        img.src = imagePaths(path).default;
        return img;
      });
      setImages(images);
    };
    loadImage();
  }, []);

  const moveImage = (image) => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const rotate = Math.random() * 160;
    image.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      images.forEach((image) => moveImage(image));
    }, speed);
    return () => clearInterval(interval);
  }, [images, speed]);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 9999 }}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={`trans-image-${index}`}
          style={{ width: imageSize }}
        />
      ))}
    </div>
  );
};

export default Background;


// import React, { useState, useEffect } from "react";

// const Background = ({ speed, imageSize }) => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     const loadImage = async () => {
//       const imagePaths = await require.context("/public/LesAmisTrans", false, /\.(png)$/);
//       const images = imagePaths.keys().map((path) => {
//         const img = new Image();
//         img.src = imagePaths(path).default;
//         return img;
//       });
//       setImages(images);
//     };
//     loadImage();
//   }, []);

//   const moveImage = (image) => {
//     const x = Math.random() * window.innerWidth;
//     const y = Math.random() * window.innerHeight;
//     const rotate = Math.random() * 160;
//     image.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       images.forEach((image) => moveImage(image));
//     }, speed);
//     return () => clearInterval(interval);
//   }, [images, speed]);

//   return (
//     <div style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}>
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image.src}
//           alt={`trans-image-${index}`}
//           style={{ width: imageSize }}
//         />
//       ))}
//     </div>
//   );
// };

// export default Background;
