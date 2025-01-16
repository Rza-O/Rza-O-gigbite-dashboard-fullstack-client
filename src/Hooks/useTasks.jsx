import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useTasks = () => {
   const axiosSecure = useAxiosSecure();
   const { user, loading } = useAuth();
   const { data: tasks = [], refetch: refetchTask } = useQuery({
      queryKey: ['tasks', user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/tasks/${user?.email}`);
         return data;
      }
   })
   return [tasks, refetchTask]
};

export default useTasks;