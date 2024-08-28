import React, { useState } from 'react';
import './ThirdImageGallery.css';

const imagesLeft = [
  'assets/anime.png',
  'assets/anime.png',
  'assets/anime.png',
  // Daha fazla sol görsel ekleyin
];

const imagesRight = [
  'assets/anime.png',
  'assets/anime.png',
  'assets/anime.png',
  // Daha fazla sağ görsel ekleyin
];

const ThirdImageGallery = () => {
  const [mainImageLeft, setMainImageLeft] = useState(imagesLeft[0]);
  const [mainImageRight, setMainImageRight] = useState(imagesRight[0]);

  return (
    <div className="third-image-gallery">
      <div className="left-section">
        <p className="description-text">
          Push the boundaries of image-to-image conversion by making sense of visual depictions with artificial intelligence. Take your art to the next level.
        </p>
        <div className="side-gallery">
          {imagesLeft.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setMainImageLeft(image)}
            >
              <img src={image} alt={`Left ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="main-gallery">
        <div className="prompt-box">
          <p className="prompt-text">
            A timeless, massive stone ziggurat rises in the heart of the forest, a slowly flowing river winds around the ziggurat
          </p>
        </div>
        <div className="main-images">
          <div className="main-image">
            <img src={mainImageLeft} alt="Main Left" />
          </div>
          <div className="main-image">
            <img src={mainImageRight} alt="Main Right" />
          </div>
        </div>
        <div className="style-buttons">
          <button className="style-button">Fantasy Art</button>
          <button className="style-button">Analog Film</button>
        </div>
      </div>

      <div className="right-section">
        <div className="side-gallery">
          {imagesRight.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setMainImageRight(image)}
            >
              <img src={image} alt={`Right ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdImageGallery;
