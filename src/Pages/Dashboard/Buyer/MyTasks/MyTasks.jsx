import MyTaskTableRow from '@/Components/Dashboard/Buyer/MyTasks/MyTaskTableRow';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyTasks = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const { data: tasks = [], isLoading, refetch } = useQuery({
      queryKey: ['tasks', user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/tasks/${user?.email}`);
         return data;
      }
   })
   console.log(tasks)
   return (
      <div className='space-y-6 mt-6'>
         <DashboardTitle title={'All Tasks Added'} subtitle={'Find the record of all the task added'}></DashboardTitle>
         <div className="overflow-x-auto w-11/12 mx-auto border border-border">
            <table className="table">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Title</th>
                     <th>Deadline</th>
                     <th>Cost</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {/* row  */}
                  {
                     tasks.map((task, idx) => <MyTaskTableRow idx={idx} key={task._id} task={task} refetch={refetch}></MyTaskTableRow>)
                  }
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default MyTasks;