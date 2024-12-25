// import React from 'react'
import laptop from '../assets/laptop.png';
const Home = ({onNavigate}) => {

  return (
    <div className='flex flex-col md:flex-row bg-slate-900 p-5'>
      <div className='w-full md:w-[50%] flex flex-col items-start justify-center p-4 gap-2'>
        <h3 className='font-bold text-4xl md:text-5xl text-gray-400'>Hi!</h3>

        <h3 className='font-bold text-2xl md:text-3xl text-orange-400'>
          I am a freelance <span className='text-3xl md:text-4xl text-gray-400'>Software Developer</span>
        </h3>
        <h3 className='font-bold text-2xl md:text-3xl text-orange-400'>&</h3>
        <h3 className='font-bold text-3xl md:text-4xl text-gray-400'>Content Writer</h3>

        <button
        onClick={()=>onNavigate('contact')} className='text-slate-900 font-bold text-lg md:text-xl bg-orange-400 px-6 md:px-8 py-2 mt-8 md:mt-12 rounded-md hover:bg-orange-500'>
          Hire Me
        </button>
      </div>
      <div className='hidden md:flex w-full md:w-[50%] justify-center items-center'>
        <img className='w-full max-w-sm md:max-w-full' src={laptop} alt='Laptop' />
      </div>
    </div>
  );
};

export default Home;
