import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useRole from '@/Hooks/useRole';
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
   const [role, isLoading] = useRole();
   if (isLoading) return <Loading></Loading>;
   if (role === 'admin') return children;

   return <Navigate to='/dashboard' replace='true'></Navigate>
};

export default AdminRoute;