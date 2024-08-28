// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Slider from '../components/Slider'
import Context from '../components/Context'
import ImageGallery from '../pages/ImageGallery';
import SecondImageGallery from './SecondImageGallery';
import ThirdImageGallery from './ThirdImageGallery';
import FourthImageGallery from './FourthImageGallery';
import Fifth from './Fifth';

const Home = () => {
  return (
    <div>
      <Header />
      <Context />
      <Slider />
      <ImageGallery />
      <SecondImageGallery />
      <ThirdImageGallery />
      <FourthImageGallery />
      <Fifth />
      
      <Footer />
     
    </div>
  );
};

export default Home;
