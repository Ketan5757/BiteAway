import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopMeals } from './TopMeals';
import CarouselItem from './CarouselItem';

const MultiItemCarousel = () => {
  return (
    <div>
        <slider>
            {TopMeals.map((item)=>(
            <CarouselItem image={item.image} title={item.title}/>
            ))}

        </slider>
    </div>
  )
}

export default MultiItemCarousel