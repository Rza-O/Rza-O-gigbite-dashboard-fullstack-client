import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import MySubmissionsTable from '@/Components/Dashboard/Worker/MySubmissionsTable/MySubmissionsTable';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const MySubmission = () => {
   return (
      <div className='w-11/12 mx-auto mt-6 space-y-6'>
         <Helmet>
            <title>Submissions | Dashboard</title>
         </Helmet>
         <DashboardTitle title={'All Your Submissions'} subtitle={'You can find all you submission here'}></DashboardTitle>
         <div className=''>
            <MySubmissionsTable></MySubmissionsTable>
         </div>
      </div>
   );
};

export default MySubmission;