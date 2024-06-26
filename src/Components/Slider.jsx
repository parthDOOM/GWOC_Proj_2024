import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Images/1.jpeg';
import img2 from '../Images/2.jpeg';
import img3 from '../Images/3.jpeg';
import img4 from '../Images/4.jpeg';
import img5 from '../Images/5.jpeg';
import img6 from '../Images/6.jpeg';
import img7 from '../Images/7.jpeg';
import img8 from '../Images/8.jpeg';
import img9 from '../Images/9.jpeg';

export default function MSlider() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200">
    <div className="w-[90%] mx-auto mt-32 z-0">
      <div>
        <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <img className="h-[650px]" src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
}