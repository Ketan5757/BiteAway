import React from 'react'
import './Home.css'
import MultiItemCarousel from './MultiItemCarousel'
import RestaurantCard from '../Restaurant/RestaurantCard'

const restaurant =[1,1,1,1,1]
const Home = () => {
  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
          <div className='absolute top-10 left-1/2 transform -translate-x-1/2 w-[50vw] z-10 text-center'>
          <p className='text-2xl lg:text-6xl text-white font-bold z-10 py-2'>BiteAway</p>
          <p className='z-10 text-blue-200 text-xl lg:text-4xl'>Delicious food, delivered fast—right to your door.</p>
          </div>
            
            <div className='cover absolute top-0 left-0 right-0'>

            </div>
            <div className='faddeout'>


            </div>


        </section>
        <section className='p-10 lg:py-10 lg:px-20'>
          <p className='text-2xl font-semibold text-gray-600 py-3 pb-10'>Top Meals</p>
          <MultiItemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-10'> 
          <h1 className='text-2xl font-semibold  text-gray-600 pb-5'>Top-Rated Restaurants Near You</h1>
          <div className='flex flex-wrap items-center justify-around gap-5'>
            {
              restaurant.map((item)=><RestaurantCard/>)

            }
          </div>
        </section>

    </div>
  )
}

export default Home