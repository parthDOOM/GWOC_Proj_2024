import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../Images/rev1.jpg';
import img2 from '../Images/rev2.jpg';
import img3 from '../Images/rev3.jpg';
import img4 from '../Images/rev4.jpg';
import img5 from '../Images/rev5.jpg';


export default function MSlider() {
  const sliderRef = useRef(null);
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 768); // Assuming 768px is the breakpoint for small devices

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmall ? 1 : 3, // Adjust the number of slides based on the device size
    slidesToScroll: 1,
  };

  const reviews = [
    {
      Name: 'Kriti Patel',
      Review: 'Really good experience, Fairly priced, Good vibes, Good staff. Do give it a try.',
      imageSrc: img1, // Updated file extension to jpg
    },
    {
      Name: 'Disha Shah',
      Review: 'Fine decor with chill and calm environment. Good variety of options for all different flavor palettes.',
      imageSrc: img2, // Updated file extension to jpg
    },
    {
      Name: 'Kavya Patel',
      Review: 'Well trained staff and good customer service. Terrace section is very pretty. Coffee and Food is delightful.',
      imageSrc: img3, // Updated file extension to jpg
    },
    {
      Name: 'Sam Ladumor',
      Review: 'Different coffee blends and roasts available with impressive manual brew.',
      imageSrc: img4, // Updated file extension to jpg
    },
    {
      Name: 'Mital Semlani',
      Review: 'Love that they make everything from scratch, their pizza bases, pasta and coffee! Service and food on point.',
      imageSrc: img5, // Updated file extension to jpg
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (

    <div className="w-[95%] md:max-h-max max-h-max mx-auto">
      <h2 className="text-3xl md:text-6xl font-semibold mb-8 text-center text-[#82614A]" style={{ fontFamily: 'Monospace' }} >R E V I E W S</h2>
      <div className="max-w-full">
        <Slider ref={sliderRef} {...settings}>
          {reviews.map((review, index) => (
            <div key={index} style={{ width: isSmall ? '100%' : '500px', height: isSmall ? '275px' : '450px', margin: '0 10px' }}>
              <div className="text-center bg-beige pb-4 rounded-xl mx-auto">
                <img
                  src={`${review.imageSrc}`}
                  className={`mx-auto w-44 pt-8 ${isSmall ? 'pb-4' : ''}`}
                  alt={`Person ${index}`}
                />
                <h3 className={`text-4xl py-3 text-[#82614A] font-bold`}>{review.Name}</h3>
                <p className={`md:text-xl text-[#9F825B] font-semibold text-xs md:px-1 md:py-2`}>{review.Review}</p>
              </div>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}