import React from 'react';
import Title from '../../Shared/Title/Title';
import { PiNetworkLight } from 'react-icons/pi';
import { GrWorkshop } from 'react-icons/gr';
import { GiReceiveMoney } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { BsPersonWorkspace } from 'react-icons/bs';

const network = <PiNetworkLight></PiNetworkLight>;
const chooseFreelancer = <BsPersonWorkspace />;
const paySafe = <GiReceiveMoney />;
const support = <BiSupport />

const NeedSomething = () => {
   return (
      <div className='w-11/12 mx-auto'>
         {/* dynamic title section */}
         <Title heading={'Need Something Done?'} subHeading={'Hire our top talents to maximize your workflow '}></Title>
         {/* Content */}

         <div className=' grid-cols-1 grid md:grid-cols-2 xl:grid-cols-4 justify-center items-center gap-16 p-11'>
            {/* post a job */}
            <Needs icon={network} title={"Post a job"} subtitle={'It’s free and easy to post a job. Simply fill in a title, description.'}></Needs>
            {/* Choose */}
            <Needs icon={chooseFreelancer} title={'Choose freelancers'} subtitle={"It’s free and easy to post a job. Simply fill in a title, description."}></Needs>
            {/* pay safely */}
            <Needs icon={paySafe} title={'Pay safely'} subtitle={'It’s free and easy to post a job. Simply fill in a title, description.'}></Needs>
            {/* help */}
            <Needs icon={support} title={'We’re here to help'} subtitle={"It’s free and easy to post a job. Simply fill in a title, description."}></Needs>
         </div>   

      </div>
   );
};

export default NeedSomething;

const Needs = ({ icon, title, subtitle }) => (
   <div className='group flex flex-col text-center items-center justify-center gap-3'>
      <div className='group-hover:bg-primary group-hover:text-white text-7xl p-4 rounded-full border bg-white transition-colors duration-400'>
         {icon}
      </div>
      <h4 className='font-semibold text-xl'>{title}</h4>
      <p className='text-sm'>{subtitle}</p>
   </div>
)