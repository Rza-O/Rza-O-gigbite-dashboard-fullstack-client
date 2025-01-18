import AdminStats from '@/Components/Dashboard/Admin/Home/AdminStats';
import WithdrawRequest from '@/Components/Dashboard/Admin/Home/WithdrawRequest';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdminHome = () => {
   const axiosSecure = useAxiosSecure();
   const { data: stats, isLoading: statsLoading, refetch: refetchStats } = useQuery({
      queryKey: ['stats'],
      queryFn: async () => {
         const { data } = await axiosSecure('/admin-stats');
         return data;
      }
   })
   if (statsLoading) return <Loading></Loading>
   return (
      <div className='w-11/12 mx-auto my-6'>
         <div className='container mx-auto'>
            <AdminStats stats={stats}></AdminStats>
         </div>
         <div className='my-6'>
            <DashboardTitle title={'Withdrawals Request'} subtitle={'Approve withdrawals for the worker'}></DashboardTitle>
         </div>
         <div className='container mx-auto'>
            <WithdrawRequest refetchStats={refetchStats}></WithdrawRequest>
         </div>
      </div>
   );
};

export default AdminHome;