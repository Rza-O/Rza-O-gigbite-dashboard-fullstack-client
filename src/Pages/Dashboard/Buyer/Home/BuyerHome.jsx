import StatsCard from '@/Components/Dashboard/Buyer/Home/StatsCard';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BuyerHome = () => {
   return (
      <div>
         <Helmet>
            <title>Dashboard | Home</title>
         </Helmet>
         <StatsCard></StatsCard>
      </div>
   );
};

export default BuyerHome;