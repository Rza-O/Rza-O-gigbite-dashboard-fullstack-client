import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAuth from '@/Hooks/useAuth';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
   const { user, loading } = useAuth();

   const location = useLocation();

   if (loading) return <Loading></Loading>;
   
   if (user) {
      return children;
   }

   return <Navigate to={'/login'} state={location.pathname}></Navigate>
};

export default PrivateRoute;