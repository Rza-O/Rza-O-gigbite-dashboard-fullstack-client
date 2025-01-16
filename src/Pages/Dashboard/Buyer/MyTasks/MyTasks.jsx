import MyTaskTableRow from '@/Components/Dashboard/Buyer/MyTasks/MyTaskTableRow';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import InteractiveHoverButton from '@/Components/ui/interactive-hover-button';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const MyTasks = () => {
   const { register, handleSubmit } = useForm();
   const [isOpen, setIsOpen] = useState(false);
   const [task, setTask] = useState(null);
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

   const handleUpdate = async (e) => {
      e.preventDefault();
      const form = e.target;
      const task_title = form.task_title.value;
      const task_details = form.task_details.value
      const submission_info = form.submission_info.value;
      const updateData = {task_title, task_details, submission_info}
      

      try {
         const {data} = await axiosSecure.patch(`/task/${task?._id}`, updateData);
         refetch();
         console.log(data);
         toast.success('Task updated successfully!');
         setIsOpen(false);
      } catch (error) {
         console.log(error)
      }
      


   }



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
                     tasks.map((task, idx) => <MyTaskTableRow setTask={setTask} setIsOpen={setIsOpen} idx={idx} key={task._id} task={task} refetch={refetch}></MyTaskTableRow>)
                  }
               </tbody>
            </table>

            <dialog id="my_modal_3" className="modal" open={isOpen}>
               <div className="modal-box">
                  <form method="dialog">
                     {/* if there is a button in form, it will close the modal */}
                     <button onClick={() => setIsOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                  </form>
                  <form onSubmit={handleUpdate}>
                     <div>
                        <label className='label'>
                           Title
                        </label>
                        <input defaultValue={task?.task_title} className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm border border-border" type="text" name="task_title" id="" />

                     </div>
                     <div>
                        <label className='label'>
                           Task Details
                        </label>
                        <input defaultValue={task?.task_details} className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm border border-border" type="text" name="task_details" id="" />

                     </div>
                     <div>
                        <label className='label'>
                           Submission Details
                        </label>
                        <input defaultValue={task?.submission_info} className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm border border-border" type="text" name="submission_info" id="" />

                     </div>
                     <div className='flex items-center justify-center mt-4'>
                        <InteractiveHoverButton text={'Update'} className='bg-secondary'></InteractiveHoverButton>
                     </div>
                  </form>
               </div>
            </dialog>

         </div>
      </div>
   );
};

export default MyTasks;