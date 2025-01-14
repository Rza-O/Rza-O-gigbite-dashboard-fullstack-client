import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import NeedSomething from '../../Components/Home/NeedSomething/NeedSomething';
import Testimonial from '../../Components/Home/Testimonial/Testimonial';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <NeedSomething></NeedSomething>
         {/* Here will be top workers section */}
         <Testimonial></Testimonial>
      </div>
   );
};

export default Home;