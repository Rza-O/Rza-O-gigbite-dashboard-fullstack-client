import React from 'react';

const DashboardTitle = ({ title, subtitle }) => {
   return (
      <div className='text-center'>
         <h1 className='font-ubuntu text-primary-content text-4xl'>{title}</h1>
         <p className='font-light'>{subtitle}</p>
      </div>
   );
};

export default DashboardTitle;