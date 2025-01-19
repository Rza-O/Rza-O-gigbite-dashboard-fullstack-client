import MyTaskTableRow from '@/Components/Dashboard/Buyer/MyTasks/MyTaskTableRow';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import InteractiveHoverButton from '@/Components/ui/interactive-hover-button';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useTasks from '@/Hooks/useTasks';
import useUser from '@/Hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const MyTasks = () => {
   const [, refetch] = useUser();
   const [isOpen, setIsOpen] = useState(false);
   const [task, setTask] = useState(null);
   const [tasks, refetchTask] = useTasks();
   const axiosSecure = useAxiosSecure();
   const handleUpdate = async (e) => {
      e.preventDefault();
      const form = e.target;
      const task_title = form.task_title.value;
      const task_details = form.task_details.value
      const submission_info = form.submission_info.value;
      const updateData = {task_title, task_details, submission_info}
      

      try {
         const {data} = await axiosSecure.patch(`/task/${task?._id}`, updateData);
         refetchTask();
         console.log(data);
         toast.success('Task updated successfully!');
         setIsOpen(false);
      } catch (error) {
         console.log(error)
      }
      
   }

   // delete a task
   const handleDelete = async (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const { data } = await axiosSecure.delete(`/task/${id}`);
               console.log(data);
               refetchTask();
               refetch();
               Swal.fire({
                  title: "Deleted!",
                  text: "Your task has been deleted.",
                  icon: "success"
               });
            } catch (error) {
               console.log(error);
               toast.error(error.response.data.message);
            }
         }
      });
   }

   return (
      <div className='space-y-6 mt-6 min-h-[600px]'>
         <DashboardTitle title={'All Tasks Added'} subtitle={'Find the record of all the task added'}></DashboardTitle>
         <div className="overflow-x-auto w-11/12 mx-auto ">
            {tasks.length > 0 ? (
               <table className="table static border border-border">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Deadline</th>
                        <th>Coin Remaining</th>
                        <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row  */}
                     {
                        tasks.map((task, idx) => <MyTaskTableRow handleDelete={handleDelete} setTask={setTask} setIsOpen={setIsOpen} idx={idx} key={task._id} task={task} refetch={refetch}></MyTaskTableRow>)
                     }
                  </tbody>
               </table>
            ) : (
                  <p className='text-center text-2xl'>You haven't added any task yet!</p>
            )}

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