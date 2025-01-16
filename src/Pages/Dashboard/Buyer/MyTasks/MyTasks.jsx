import MyTaskTableRow from '@/Components/Dashboard/Buyer/MyTasks/MyTaskTableRow';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const MyTasks = () => {
   const [isOpen, setIsOpen] = useState(false);
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
                     tasks.map((task, idx) => <MyTaskTableRow setIsOpen={setIsOpen} idx={idx} key={task._id} task={task} refetch={refetch}></MyTaskTableRow>)
                  }
               </tbody>
            </table>

            <dialog id="my_modal_3" className="modal" open={isOpen}>
               <div className="modal-box">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Press ESC key or click on ✕ button to close</p>
               </div>
            </dialog>

         </div>
      </div>
   );
};

export default MyTasks;