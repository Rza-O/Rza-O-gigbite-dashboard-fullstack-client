import StatsCard from '@/Components/Dashboard/Buyer/Home/StatsCard';
import TaskToReview from '@/Components/Dashboard/Buyer/TaskToReview/TaskToReview';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useUser from '@/Hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const BuyerHome = () => {
   const [userData] = useUser();
   const axiosSecure = useAxiosSecure();
   const { data: stats, isLoading: statsLoading, refetch: refetchStats } = useQuery({
      queryKey: ['stats', userData?.email],
      enabled: !!userData?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/buyer-dashboard/stats/${userData?.email}`);
         return data;
      }
   })
   if (statsLoading) return <Loading></Loading>
   console.log(stats)

   return (
      <div>
         <Helmet>
            <title>Home | Dashboard</title>
         </Helmet>
         <StatsCard stats={stats} statsLoading={statsLoading}></StatsCard>
         <TaskToReview refetchStats={refetchStats}></TaskToReview>
      </div>
   );
};

export default BuyerHome;