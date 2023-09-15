

import React from 'react';
import Navbar from '../components/Navbar';
import SingleImage from '../components/SingleImage';
import Image1 from "../assets/Img/gallery1.jpg";
import Image2 from "../assets/Img/gallery2.jpg";
import Image3 from "../assets/Img/gallery3.jpg";
import Image4 from "../assets/Img/gallery4.jpg";
import Image5 from "../assets/Img/gallery5.jpg";
import Image6 from "../assets/Img/gallery6.jpg";
import Image7 from "../assets/Img/gallery7.jpg";
import Image8 from "../assets/Img/gallery8.jpg";
import Footer from '../components/Footer';

const Gallary = () => {

  
  return (
    <div className='container mx-auto'>
      <Navbar />
      <div>
        <h1 className='text-5xl text-center py-10 font-bold'>Image Gallary</h1>

        <div className='flex flex-wrap'>
          <SingleImage Image={Image1} />
          <SingleImage Image={Image2} />
          <SingleImage Image={Image3} />
          <SingleImage Image={Image4} />
          <SingleImage Image={Image5} />
          <SingleImage Image={Image6} />
          <SingleImage Image={Image7} />
          <SingleImage Image={Image8} />
        
        </div>

        

      </div>
      <Footer />
    </div>
  );
};

export default Gallary;