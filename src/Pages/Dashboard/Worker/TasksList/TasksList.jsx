import React, { useState } from 'react';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import TaskCard from '@/Components/Dashboard/Worker/AllTaskCard/TaskCard';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { IoMdRefresh } from 'react-icons/io';

const TasksList = () => {
   const axiosSecure = useAxiosSecure();
   const [sortOrder, setSortOrder] = useState(null);

   const fetchTasks = async () => {
      const params = { sort: sortOrder };
      const { data } = await axiosSecure.get('/tasks', { params });
      return data;
   };

   const { data: AllTasks, refetch, isLoading } = useQuery({
      queryKey: ['AllTasks', sortOrder],
      queryFn: fetchTasks,
   });

   if (isLoading) return <Loading />;

   const handleSortToggle = () => {
      setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
   };

   const handleReset = () => {
      setSortOrder(null);
   };

   return (
      <div className='w-11/12 mx-auto space-y-6 my-6 min-h-[600px]'>
         <DashboardTitle title={'All Tasks Available'} subtitle={'You can find all the active tasks here'} />

         {/* Buttons for Sorting and Reset */}
         <div className='flex justify-center items-center lg:justify-end gap-3 mb-5'>
            <button
               onClick={handleSortToggle}
               className='btn bg-primary text-white flex items-center gap-2 hover:bg-secondary transition-all'
            >
               Sort By Payment {sortOrder === 'desc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
            </button>
            <button
               onClick={handleReset}
               className='btn bg-gray-600 text-white flex items-center gap-2 hover:bg-gray-800 transition-all'
            >
               Reset <IoMdRefresh />
            </button>
         </div>

         {/* Task Grid */}
         <div className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  justify-items-center'>
            {AllTasks.map((task) => (
               <TaskCard key={task._id} task={task} />
            ))}
         </div>
      </div>
   );
};

export default TasksList;
