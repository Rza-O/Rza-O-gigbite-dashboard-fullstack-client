import React from 'react';
import selectFrom from '../../../assets/Selecting team-bro.svg'
import { motion } from "motion/react";
import { Link } from 'react-router-dom';

const StartPosting = () => {
   return (
      <div className='md:flex w-11/12 2xl:container mx-auto justify-between items-center'>
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='w-full'>
            <img src={selectFrom} className=' w-full' alt="" />
         </motion.div>
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='lg:w-1/2 space-y-6 text-center md:text-left'>
            <h1 className='text-5xl font-bold text-primary-content'>Find the talent needed to get your business growing.</h1>
            <p className='font-light'>Advertise your jobs to millions of monthly users and search 15.8 million CVs</p>
            <div className='flex justify-center items-center md:block'>
               <Link to='/register'><button className='btn bg-secondary'>Start posting job</button></Link>
            </div>
         </motion.div>
      </div>
   );
};

export default StartPosting;