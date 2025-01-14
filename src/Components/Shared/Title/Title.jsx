import React from 'react';

const Title = ({ heading, subHeading }) => {
   return (
      <div className='text-center my-8 space-y-2'>
         <h3 className='text-2xl sm:text-4xl font-bold font-ubuntu text-primary-content'>{heading}</h3>
         <p className=' '>{subHeading}</p>
      </div>
   );
};

export default Title;