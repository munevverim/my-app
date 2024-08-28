import React, { useState, useEffect } from 'react';
import './ImageGallery.css';

// Import images from assets folder
import coinImage1 from '../assets/coinn2.png';
import coinImage2 from '../assets/coinn2.png';
import coinImage3 from '../assets/coinn2.png';

const imagesLeft = [
  coinImage1,
  coinImage2,
  coinImage3,
  // Add more images for the left side as needed
];

const imagesRight = [
  coinImage1,
  coinImage2,
  coinImage3,
  // Add more images for the right side as needed
];

const ImageGallery = () => {
  const [mainImage, setMainImage] = useState(imagesLeft[0]);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  // Animation timing
  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex(prev => (prev + 1) % imagesLeft.length);
      setRightIndex(prev => (prev + 1) % imagesRight.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setMainImage(imagesLeft[leftIndex]); // You can change this logic to alternate between left and right
  }, [leftIndex, rightIndex]);

  return (
    <div className="image-gallery">
      <div className="left-gallery">
        {imagesLeft.map((image, index) => (
          <div
            key={index}
            className={`gallery-image ${index === leftIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      <div className="main-image">
        <img src={mainImage} alt="Main display" />
      </div>
      
      <div className="right-gallery">
        {imagesRight.map((image, index) => (
          <div
            key={index}
            className={`gallery-image ${index === rightIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
