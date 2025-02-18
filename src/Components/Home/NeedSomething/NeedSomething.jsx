import React from 'react';
import Title from '../../Shared/Title/Title';
import { PiNetworkLight } from 'react-icons/pi';
import { GrWorkshop } from 'react-icons/gr';
import { GiReceiveMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { BsPersonWorkspace } from 'react-icons/bs';
import { motion } from 'motion/react';

const network = <PiNetworkLight></PiNetworkLight>;
const chooseFreelancer = <BsPersonWorkspace />;
const paySafe = <GiReceiveMoney />;
const support = <BiSupport />

const NeedSomething = () => {
   return (
      <motion.div
         
         className='w-11/12 mx-auto'>
         {/* dynamic title section */}
         <Title heading={'Need Something Done?'} subHeading={'Hire our top talents to maximize your workflow '}></Title>
         {/* Content */}

         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className=' grid-cols-1 grid md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-16'>
            {/* post a job */}
            <Needs icon={network} title={"Post a job"} subtitle={'It’s free and easy to post a job. Simply fill in a title, description.'}></Needs>
            {/* Choose */}
            <Needs icon={chooseFreelancer} title={'Choose freelancers'} subtitle={"It’s free and easy to post a job. Simply fill in a title, description."}></Needs>
            {/* pay safely */}
            <Needs icon={paySafe} title={'Pay safely'} subtitle={'It’s free and easy to post a job. Simply fill in a title, description.'}></Needs>
            {/* help */}
            <Needs icon={support} title={'We’re here to help'} subtitle={"It’s free and easy to post a job. Simply fill in a title, description."}></Needs>
         </motion.div>   

      </motion.div>
   );
};

export default NeedSomething;

const Needs = ({ icon, title, subtitle }) => (
   <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className='group flex flex-col text-center items-center justify-center gap-3'>
      <motion.div
         variants={{
            rest: { y: 0 },
            hover: { y: -10 }, 
         }}
         transition={{ type: "tween", stiffness: 300 }}
         className='group-hover:bg-primary group-hover:text-white text-7xl p-4 rounded-full border bg-white transition-colors duration-400'>
         {icon}
      </motion.div>
      <h4 className='font-semibold text-xl'>{title}</h4>
      <p className='text-sm'>{subtitle}</p>
   </motion.div>
)