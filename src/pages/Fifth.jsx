import React, { useState, useEffect } from 'react';
import './Fifth.css';

// Arka plan görselleri listesi
const backgroundImages = [
  'assets/header.jpg',
  'assets/coinn2.jpg',
  'assets/header.jpg',
  'assets/coinn2.jpg', ];

const Fifth = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 32000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fifth-container"
      style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
    >
      <div className="fifth-text">
        Save time, increase your productivity, and get the most out of your data with Quvi.ai.
      </div>
    </div>
  );
};

export default Fifth;
