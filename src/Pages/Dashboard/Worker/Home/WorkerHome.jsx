import ApprovedSubmissions from '@/Components/Dashboard/Worker/Home/ApprovedSubmissions/ApprovedSubmissions';
import WorkerStatsCard from '@/Components/Dashboard/Worker/Home/WorkerStatsCard';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const WorkerHome = () => {
   return (
      <div>
         <Helmet>
            <title>Home | Dashboard</title>
         </Helmet>
         <WorkerStatsCard></WorkerStatsCard>
         <ApprovedSubmissions></ApprovedSubmissions>
      </div>
   );
};

export default WorkerHome;