import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import NeedSomething from '../../Components/Home/NeedSomething/NeedSomething';
import Testimonial from '../../Components/Home/Testimonial/Testimonial';
import FAQ from '@/Components/Home/FAQ/FAQ';
import StartPosting from '@/Components/Home/StartPosting/StartPosting';
import BestWorkers from '@/Components/Home/BestWorkers/BestWorkers';
import { Helmet } from 'react-helmet-async';
import ChartsHome from '@/Components/Home/Charts/ChartsHome';
import Newsletter from '@/Components/Home/Newsletter/Newsletter';

const Home = () => {
   return (
      <div className='space-y-14'>
         <Helmet>
            <title>Home | GigBite</title>
         </Helmet>
         <Banner></Banner>
         <ChartsHome></ChartsHome>
         {/* Here will be top workers section */}
         <BestWorkers></BestWorkers>
         <NeedSomething></NeedSomething>
         <Testimonial></Testimonial>
         <Newsletter />
         <FAQ></FAQ>
         <StartPosting></StartPosting>
      </div>
   );
};

export default Home;