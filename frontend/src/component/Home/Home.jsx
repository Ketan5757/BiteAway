import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className=''>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl lg:text-6xl text-white font-bold z-10 py-5'>BiteAway</p>
                <p className='z-10 text-blue-500 text-xl lg:text-4xl'>Delicious food, delivered fast—right to your door.</p>

            </div>
            <div className='cover absolute top-0 left-0 right-0'>

            </div>
            <div className='faddeout'>


            </div>


        </section>

    </div>
  )
}

export default Home