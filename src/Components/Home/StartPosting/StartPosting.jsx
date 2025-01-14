import React from 'react';
import selectFrom from '../../../assets/Selecting team-bro.svg'

const StartPosting = () => {
   return (
      <div className='md:flex w-11/12 2xl:container mx-auto justify-between items-center'>
         <div className='w-full'>
            <img src={selectFrom} className=' w-full' alt="" />
         </div>
         <div className='lg:w-1/2 space-y-6 text-center md:text-left'>
            <h1 className='text-5xl font-bold text-primary-content'>Find the talent needed to get your business growing.</h1>
            <p className='font-light'>Advertise your jobs to millions of monthly users and search 15.8 million CVs</p>
            <div className='flex justify-center items-center md:block'><button className='btn bg-secondary'>Start posting job</button></div>
         </div>
      </div>
   );
};

export default StartPosting;