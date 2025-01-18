import AdminStats from '@/Components/Dashboard/Admin/Home/AdminStats';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AdminHome = () => {
   const axiosSecure = useAxiosSecure();
   const { data: stats, isLoading: statsLoading, refetch } = useQuery({
      queryKey: ['stats'],
      queryFn: async () => {
         const { data } = await axiosSecure('/admin-stats');
         return data;
      }
   })
   if (statsLoading) return <Loading></Loading>
   return (
      <div>
         <AdminStats stats={stats}></AdminStats>
      </div>
   );
};

export default AdminHome;