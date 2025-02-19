import React from 'react';
import errorImg from '../../assets/error.svg'
import InteractiveHoverButton from '@/Components/ui/interactive-hover-button';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
   return (
      <div className='h-svh flex flex-col items-center justify-center gap-5'>
         <img src={errorImg} className='w-[500px]' alt="" />
         <Link to='/'>
            <InteractiveHoverButton text={'Go Back Home'} className="w-[250px]"></InteractiveHoverButton>
         </Link>
      </div>
   );
};

export default ErrorPage;