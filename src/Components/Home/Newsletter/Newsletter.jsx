import React from 'react';
import newsletterImg from "../../../assets/newsletter.svg";
import Title from '@/Components/Shared/Title/Title';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';

const Newsletter = () => {
   const handleSubmit = (e) => {
      e.preventDefault()
      Swal.fire({
         title: "Subscribed",
         text: "You've successfully subscribed our Newsletter",
         icon: "success",
         confirmButtonColor: '#73AEDE'
      })
   }
   return (
      <div className=''>
         {/* <Title heading={'Newsletter'} subHeading={'Always be updated on latest trends'}></Title> */}
         <div className='w-11/12 lg:container mx-auto rounded-lg px-11 bg-[url("../../../src/assets/Rect-Light.svg")]  bg-cover'>
            <div className='flex justify-center items-center overflow-hidden'>
               <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className='w-1/2 hidden lg:flex'>
                  <img src={newsletterImg} className='' alt="" />
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className='w-full lg:w-1/2 space-y-4 text-center'>
                  <h1 className='text-4xl font-bold'>
                     Subscribe to our Newsletter!
                  </h1>
                  <p>Subscribe to our newsletter and stay updated</p>
                  <div>
                     <form onSubmit={handleSubmit} action="" className='flex-col lg:flex-row justify-center items-center gap-3 space-y-4 space-x-3'>
                        <input type="email" name="email" id="" placeholder='Your email' className='input input-bordered lg:input-lg' required/>
                        <button type="submit" className='btn hover:bg-primary-dark bg-secondary-dark border-none lg:btn-lg'>Subscribe</button>
                     </form>
                  </div>
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default Newsletter;