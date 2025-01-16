import StatsCard from '@/Components/Dashboard/Buyer/Home/StatsCard';
import TaskToReview from '@/Components/Dashboard/Buyer/TaskToReview/TaskToReview';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BuyerHome = () => {
   return (
      <div>
         <Helmet>
            <title>Dashboard | Home</title>
         </Helmet>
         <StatsCard></StatsCard>
         <TaskToReview></TaskToReview>
      </div>
   );
};

export default BuyerHome;