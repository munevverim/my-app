import React, { useState } from 'react';
import './thirdpage.css';

import analogFilmImage from '../assets/images/free/analog-film/image (10).png';
import animeImage from '../assets/images/free/anime/image (10).png';
import cinematicImage from '../assets/images/free/cinematic/image (10).png';
import craftClayImage from '../assets/images/free/craft-clay/image (10).png';
import cubistImage from '../assets/images/free/cubist/image (10).png';
import cyberneticImage from '../assets/images/free/cybernetic/image (10).png';
import cyberpunkImage from '../assets/images/free/cyberpunk/image (10).png';
import fantasyArtImage from '../assets/images/free/fantasy-art/image (10).png';
import fashionImage from '../assets/images/free/fashion/image (10).png';
import gothicImage from '../assets/images/free/gothic/image (10).png';
import isometricImage from '../assets/images/free/isometric/image (10).png';
import longExposureImage from '../assets/images/free/long-exposure/image (10).png';
import lowPolyImage from '../assets/images/free/lowpoly/image (10).png';
import mangaImage from '../assets/images/free/manga/image (10).png';
import monochromeImage from '../assets/images/free/monochrome/image (10).png';
import pixelArtImage from '../assets/images/free/pixel-art/image (10).png';
import silhouetteImage from '../assets/images/free/silhouette/image (10).png';


const ThirdPage = () => {
  const [displayedImage, setDisplayedImage] = useState(animeImage);

  const handleImageChange = (event) => {
    event.preventDefault();
    const newImage = event.target.getAttribute('data-image');
    setDisplayedImage(newImage);
  };

  return (
    <div className="thirdpage-new" id="fp3">
      <div className="thirdpage-left">
        <div className="leftt">
          <div className="free-text">
            <p>FREE'S TOOLS</p>
          </div>
          <div className="free-text2">
            <a href="#" data-image={animeImage} onClick={handleImageChange}>Inspration</a>
            <p>Drawing inspiration from Quvi.ai offers an impressive and unique opportunity for AI to push the boundaries of technology.</p>
            <a href="#" data-image={longExposureImage} onClick={handleImageChange}>Prompt</a>
            <p>Improve your creative thinking skills with prompt writing and use data-backed approaches to produce inspiring content.</p>
            <a href="#" data-image={craftClayImage} onClick={handleImageChange}>Canvas</a>
            <p>By typing a prompt with your imagination, you can create and make changes to the images you want, from text to image, from image to image.</p>
          </div>
        </div>
        <div className="leftt-box">
          <img src={displayedImage} alt="gif" id="displayedImage" />
        </div>
      </div>

      <div className="thirdpage-right">
        <div className="rightt">
          <div className="rg">
            <div className="rightt-text">
              <p>FREE'S GALLERY</p>
            </div>
            <div className="gallerys">
              <div className="scroll">
                <a href="#" data-category="anime">Anime</a>
                <a href="#" data-category="photographic">Photographic</a>
                <a href="#" data-category="pixel-art">Pixel Art</a>
                <a href="#" data-category="silhouette">Silhouette</a>
                <a href="#" data-category="long-exposure">Long Exposure</a>
                <a href="#" data-category="analog-film">Analog Film</a>
                <a href="#" data-category="isometric">Isometric</a>
                <a href="#" data-category="lowpoly">Lowpoly</a>
                <a href="#" data-category="cubist">Cubist</a>
                <a href="#" data-category="origami">Origami</a>
                
                <a href="#" data-category="craft-clay">Craft Clay</a>
                <a href="#" data-category="cinematic">Cinematic</a>
                <a href="#" data-category="cybernetic">Cybernetic</a>
                <a href="#" data-category="texture">Texture</a>
                <a href="#" data-category="sci-fi">Sci-fi</a>
                <a href="#" data-category="fashion">Fashion</a>
                <a href="#" data-category="pop-art">Pop Art</a>
                <a href="#" data-category="cyberpunk">Cyberpunk</a>
                <a href="#" data-category="fantasy-art">Fantasy Art</a>
                <a href="#" data-category="manga">Manga</a>
                <a href="#" data-category="monochrome">Monochrome</a>
                <a href="#" data-category="gothic">Gothic</a>
              </div>
            </div>
          </div>

          <div className="linee" id="imageGallery">
          <div className="card" style={{ backgroundImage: `url(${animeImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${longExposureImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${pixelArtImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${silhouetteImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${analogFilmImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${craftClayImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${cubistImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${cyberneticImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${fantasyArtImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${fashionImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${gothicImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${isometricImage})` }}></div>
  
  <div className="card" style={{ backgroundImage: `url(${lowPolyImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${mangaImage})` }}></div>
  <div className="card" style={{ backgroundImage: `url(${monochromeImage})` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
