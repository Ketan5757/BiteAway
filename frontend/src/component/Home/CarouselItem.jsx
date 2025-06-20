import React from 'react';

const CarouselItem = ({ image, title }) => {
  return (
    <div className='flex flex-col justify-center items-center text-center'>
      <img
        className='w-[10rem] h-[10rem] lg:w-[14rem] lg:h-[14rem] rounded-full object-cover object-center border-4 border-white shadow-md'
        src={image}
        alt={title}
      />
      <span className='py-3 font-semibold text-xl text-gray-600'>{title}</span>
    </div>
  );
};

export default CarouselItem;