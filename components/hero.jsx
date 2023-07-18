import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          INDIA'S PREMIER AGRICULTURE
        </p> <p className='text-[#00df9a] font-bold p-2 '>E-PATHSHALA</p>
        <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-5'>
        Nurturing Creativity, Harvesting Innovation.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            We believe in
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500'
            strings={['ASPIRING', 'LEARNING', 'GROWING','ACHIEVING']}
            typeSpeed={150}
            backSpeed={75}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Explore our high quality range of courses, developed by our proficient faculty.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;