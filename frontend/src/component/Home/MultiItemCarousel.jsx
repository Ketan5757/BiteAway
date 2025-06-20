import React from 'react';
import Slider from "react-slick"; // ✅ Correct import
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopMeals } from './TopMeals';
import CarouselItem from './CarouselItem';

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000
  
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     }
    //   },
    //   {
    //     breakpoint: 640,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     }
    //   }
    // ]
  };

  return (
    <div className="px-4 py-8">
      <Slider {...settings}>
        {TopMeals.map((item, index) => (
          <CarouselItem key={index} image={item.image} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default MultiItemCarousel;
