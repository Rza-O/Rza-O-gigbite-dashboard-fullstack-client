import React, { useEffect, useState } from 'react';
import freelancer from '../../../assets/banner/whitehairwoman.mp4'

const Banner = () => {
   const [isScroll, setIsScroll] = useState(false);
   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (scrollY > 80) {
            setIsScroll(true)
         } else {
            setIsScroll(false)
         }
      })
   }, []);
   return (
      <div className='relative w-full h-svh md:h-[700px]'>
         {/* video */}
         <video src={freelancer} autoPlay muted loop className='w-full h-full object-cover'></video>
         {/* dark overlay */}
         <div className='absolute inset-0 bg-black bg-opacity-50'></div>
         {/* titles */}
         <div className='absolute inset-0 flex flex-col justify-center items-center text-center text-white  mx-auto gap-5 font-ubuntu'>
            <p className='text-lg text-primary-light'>Complete Tasks, Earn Rewards</p>
            <h2 className='text-6xl max-w-4xl leading'>Maximize Productivity With <br /> <span className='font-surfer font-semibold text-primary-dark'>Freelance Marketplace</span> <br />Solution</h2>
            <div>
               <button className={isScroll ? 'btn bg-secondary border-none px-9' : 'btn bg-primary-light border-none px-9'}>Get Started</button>
            </div>
         </div>
      </div>
   );
};

export default Banner;