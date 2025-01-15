import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useRole from '@/Hooks/useRole';
import React from 'react';
import { Navigate } from 'react-router-dom';
import AdminHome from '../Admin/Home/AdminHome';
import { Helmet } from 'react-helmet-async';

const DashboardHome = () => {
   const [role, isLoading] = useRole();
   if (isLoading) {
      return <Loading></Loading>
   }

   if (role === 'buyer') {
      return <Navigate to='/dashboard/buyer-home'></Navigate>
   }

   if (role === 'worker') {
      return <Navigate to='/dashboard/worker-home'/>
   }
   return (
      <div>
         <Helmet>
            <title>Dashboard | Home</title>
         </Helmet>
         {role=== 'admin' && <AdminHome></AdminHome>}
      </div>
   );
};

export default DashboardHome;