import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import NeedSomething from '../../Components/Home/NeedSomething/NeedSomething';
import Testimonial from '../../Components/Home/Testimonial/Testimonial';
import FAQ from '@/Components/Home/FAQ/FAQ';

const Home = () => {
   return (
      <div className='space-y-20'>
         <Banner></Banner>
         <NeedSomething></NeedSomething>
         {/* Here will be top workers section */}
         <Testimonial></Testimonial>
         <FAQ></FAQ>
      </div>
   );
};

export default Home;