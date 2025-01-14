import React from 'react';
import Title from '../../Shared/Title/Title';
import quotes from '../../../assets/quotes.png'
import reviewer1 from '../../../assets/reviews/reviewer1_cropped.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { RiDoubleQuotesL } from 'react-icons/ri';

const Testimonial = () => {
   return (
      <div>
         <Title heading={"Testimonials"} subHeading={"Our service is what our customer needed"}></Title>

         <div className='container mx-auto border p-11'>
            <Swiper
               pagination={{
                  dynamicBullets: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <div className='text-center p-8 space-y-3'>
                     <p className='flex justify-center items-center text-lg'><RiDoubleQuotesL className='text-2xl'></RiDoubleQuotesL> This platform is a game-changer! Managing tasks and finding reliable workers has never been easier. The intuitive interface and responsive support team make it a pleasure to use.</p>
                     <p></p>
                     <p>— Emily Carter, Project Manager at Creative Solutions Inc.</p>
                     <img className='w-32 rounded-full' src={reviewer1} alt="Emily Carter" />
                  </div>
               </SwiperSlide>
               <SwiperSlide>Slide 2</SwiperSlide>
               <SwiperSlide>Slide 3</SwiperSlide>
               <SwiperSlide>Slide 4</SwiperSlide>
               <SwiperSlide>Slide 5</SwiperSlide>
               <SwiperSlide>Slide 6</SwiperSlide>
               <SwiperSlide>Slide 7</SwiperSlide>
               <SwiperSlide>Slide 8</SwiperSlide>
               <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
         </div>


      </div>
   );
};

export default Testimonial;