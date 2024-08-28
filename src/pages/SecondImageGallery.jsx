import React, { useState } from 'react';
import './SecondImageGallery.css';

const SecondImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('free');

  const categories = ['free', 'monochrome', 'gothic'];

  const images = {
    free: [
      'assets/analog-film.png',
      'assets/anime.png',
      'assets/cinematic.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
    ],
    monochrome: [
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
    ],
    gothic: [
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
      'assets/anime.png',
    ],
  };

  return (
    <div className="second-image-gallery">
      <div className="tools-section">
        <h2>FREE'S TOOLS</h2>
        <div className="tool">
          <h3>Inspiration</h3>
          <p>
            Drawing inspiration from Quvi.ai offers an impressive and unique
            opportunity for AI to push the boundaries of technology.
          </p>
        </div>
        <div className="tool">
          <h3>Prompt</h3>
          <p>
            Improve your creative thinking skills with prompt writing and use
            data-backed approaches to produce inspiring content.
          </p>
        </div>
        <div className="tool">
          <h3>Canvas</h3>
          <p>
            By typing a prompt with your imagination, you can create and make
            changes to the images you want, from text to image, from image to
            image.
          </p>
        </div>
      </div>

      <div className="main-gallery-section">
        <div className="main-image">
          <img src="assets/anime.png" alt="Main Image" />
        </div>
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="gallery">
          {images[selectedCategory].map((image, index) => (
            <div key={index} className="gallery-image">
              <img src={image} alt={`Gallery ${selectedCategory}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondImageGallery;
