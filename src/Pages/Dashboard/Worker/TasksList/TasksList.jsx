import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import TaskCard from '@/Components/Dashboard/Worker/AllTaskCard/TaskCard';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const TasksList = () => {
   const axiosSecure = useAxiosSecure();
   const { data: AllTasks, refetch, isLoading } = useQuery({
      queryKey: ['AllTasks'],
      queryFn: async () => {
         const { data } = await axiosSecure('/tasks');
         return data;
      }
   })
   if (isLoading) return <Loading></Loading>
   return (
      <div className='w-11/12 mx-auto space-y-6 my-6'>
         <DashboardTitle title={'All Tasks Available'} subtitle={'You can find all the active tasks here'}></DashboardTitle>
         <div className=' gap-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-center border items-center'>
            {
               AllTasks.map(task => <TaskCard key={task._id} task={task}></TaskCard>)
            }
         </div>
      </div>
   );
};

export default TasksList;