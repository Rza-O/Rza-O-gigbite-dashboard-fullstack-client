import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';

const ManageTasksTable = () => {
   const axiosSecure = useAxiosSecure();
   const queryClient = useQueryClient();

   // Fetch all Tasks
   const { data: tasks = [], isLoading } = useQuery({
      queryKey: ['tasks'],
      queryFn: async () => {
         const { data } = await axiosSecure.get('/admin/tasks');
         return data;
      },
   });
   console.log(tasks)

   // delete a task
   const handleDelete = async (id) => {
      try {
         await axiosSecure.delete(`/admin/tasks/${id}`);
         queryClient.invalidateQueries(['tasks']);
         toast.success('Tasks removed successfully');
      } catch (error) {
         toast.error('Failed to remove tasks');
      }
   };


   if (isLoading) return <Loading />;

   return (
      <div className="  bg-background">
         <div className="overflow-x-auto container mx-auto p-6">
            <table className="table w-full static">
               {/* Table Head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Image</th>
                     <th>Task Title</th>
                     <th>Buyer Email</th>
                     <th>Coin Remaining</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {tasks.map((task, idx) => (
                     <tr key={task._id}>
                        <th>
                           {idx + 1}
                        </th>
                        {/* Task Info */}
                        <td>
                           <div className="flex items-center gap-3">
                              <div className="">
                                 <div className="w-12 object-cover">
                                    <img
                                       src={task.image}
                                    />
                                 </div>
                              </div>
                              <div className='static'>
                                 <div className="text-sm text-gray-500">{task.role}</div>
                              </div>
                           </div>
                        </td>
                        {/* Task Title */}
                        <td>{task.task_title}</td>
                        {/* Buyer Email */}
                        <td>{task?.buyer?.buyer_email}</td>

                        {/* Remaining coin Coins */}
                        <td>{task.totalCost}🪙</td>
                        {/* Action Buttons */}
                        <td>
                           <button
                              className="btn btn-error"
                              onClick={() => handleDelete(task._id)}
                           >
                              Remove
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageTasksTable;
