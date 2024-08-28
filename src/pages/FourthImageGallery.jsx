import React, { useState } from 'react';
import './FourthImageGallery.css';

const leftImages = [
  'assets/coinn2.png',
  'assets/coinn2.png',
  'assets/coinn2.png',
  'assets/coinn2.png',
];

const rightImages = [
  'assets/coinn2.png',
  'assets/coinn2.png',
  'assets/coinn2.png',
  'assets/coinn2.png',
];

const FourthImageGallery = () => {
  const [mainImage, setMainImage] = useState(leftImages[0]);

  return (
    <div className="fourth-image-gallery">
      <div className="left-gallery">
        <div className="gallery-title">Fantasy Art</div>
        <div className="side-gallery">
          {leftImages.map((image, index) => (
            <div key={index} className="side-image" onClick={() => setMainImage(image)}>
              <img src={image} alt={`Fantasy ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="main-gallery">
        <div className="main-image-container">
          <img src={mainImage} alt="Main Fantasy" className="main-image" />
        </div>
        <div className="prompt-text">
          Let the dancing fairy land on the shoulder of the golden-haired princess, around the golden waterfall shining in the depths of the forest, and let the moon be in the sky.
        </div>
      </div>

      <div className="right-gallery">
        <div className="gallery-title">City View</div>
        <div className="side-gallery">
          {rightImages.map((image, index) => (
            <div key={index} className="side-image">
              <img src={image} alt={`City View ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FourthImageGallery;
