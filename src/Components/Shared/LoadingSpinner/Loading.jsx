import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
   return (
      <div className='min-h-screen flex justify-center items-center'>
         <HashLoader
            color="#359dde"
            loading
            size={100}
            speedMultiplier={1}
         />
      </div>
   );
};

export default Loading;