import React from 'react';
import './slider.css';

import image1 from '../assets/free-image-gallery/analog-film.png';
import image2 from '../assets/free-image-gallery/anime.png';
import image3 from '../assets/free-image-gallery/cinematic.png';
import image4 from '../assets/free-image-gallery/cybernetic.png';
import image5 from '../assets/free-image-gallery/fantasy art.png';
import image6 from '../assets/free-image-gallery/gothic.png';
import image7 from '../assets/free-image-gallery/long-exposure.png';
import image8 from '../assets/free-image-gallery/photographic.png';

const images = [image1, image2, image3, image4, image5, image6, image7, image8];
const Slider = () => {
    return (
      <div className="slider-container">
        {images.map((image, index) => (
          <div className="slider-item" key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    );
  };
  
  export default Slider;