import React from 'react';
import Title from '../../Shared/Title/Title';
import quotes from '../../../assets/quotes.png'
import reviewer1 from '../../../assets/reviews/reviewer1_cropped.png'
import reviewer2 from '../../../assets/reviews/reviewer2_cropped.png'
import reviewer3 from '../../../assets/reviews/reviewer3_cropped.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

import { motion } from "motion/react";


const Testimonial = () => {
   return (
      <div>
         <Title heading={"Testimonials"} subHeading={"Our service is what our customer needed"}></Title>


         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{type:'tween', stiffness: 300, duration: 0.3, delay: 0.2}}
            className='2xl:container w-11/12 mx-auto border rounded-lg shadow-md bg-foreground p-11 bg-[url("../../../src/assets/Curve-Line.svg")]  bg-cover'>
            <Swiper
               pagination={{
                  dynamicBullets: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <div className='text-center  space-y-3 flex flex-col items-center justify-center '>
                     <p className='text-lg flex'><RiDoubleQuotesL className='text-2xl text-primary-content'></RiDoubleQuotesL> This platform is a game-changer! Managing tasks and finding reliable workers has never been easier. The intuitive interface and responsive support team make it a pleasure to use.</p>
                     <p></p>
                     <p className='italic'>— <span className='font-bold text-primary-content'>Emily Carter</span>, Project Manager at Creative Solutions Inc.</p>
                     <img className='w-32 rounded-full' src={reviewer1} alt="Emily Carter" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='text-center  space-y-3 flex flex-col items-center justify-center'>
                     <p className='text-lg flex'><RiDoubleQuotesL className='text-2xl text-primary-content'></RiDoubleQuotesL> I appreciate how quickly tasks are completed and the seamless communication between buyers and workers. It's the perfect solution for micro-task outsourcing!</p>
                     <p></p>
                     <p className='italic'>— <span className='font-bold text-primary-content'>Sophia Lin</span>, Marketing Specialist, Bright Ideas Co.</p>
                     <img className='w-32 rounded-full' src={reviewer2} alt="Emily Carter" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className='text-center  space-y-3 flex flex-col items-center justify-center'>
                     <p className='text-lg flex'><RiDoubleQuotesL className='text-2xl text-primary-content'></RiDoubleQuotesL> The dashboard is so well-designed! I can easily track progress, review submissions, and make payments. It's been an absolute lifesaver for my business operations.</p>
                     <p></p>
                     <p className='italic'>— <span className='font-bold text-primary-content'>Rachel Gomez</span>, Team Lead, InnovateX Studios</p>
                     <img className='w-32 rounded-full' src={reviewer3} alt="Emily Carter" />
                  </div>
               </SwiperSlide>
            </Swiper>
         </motion.div>


      </div>
   );
};

export default Testimonial;