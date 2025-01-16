import React, { useState } from 'react';
import DashboardTitle from '../../Shared/Title/DashboardTitle';
import ReviewTableRow from './ReviewTableRow';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';

const TaskToReview = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [submissionDetails, setSubmissionDetails] = useState('');
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();

   const { data: myWorkSubmissions = [], refetch, isLoading } = useQuery({
      queryKey: ['myWorkSubmissions', user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/my-work/submissions/${user?.email}`)
         return data;
      }
   })

   if(isLoading) return <Loading></Loading>

   console.log(myWorkSubmissions)



   const handleReject = async () => {

   }



   return (
      <div className='container mx-auto'>
         <div className='my-6'>
            <DashboardTitle title={'Task To Review'}></DashboardTitle>
         </div>
         <div>
            <div className="overflow-x-auto">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Worker Name</th>
                        <th>Task Title</th>
                        <th>Payable Amount</th>
                        <th>View Submission</th>
                        <th>Actions</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {
                        myWorkSubmissions.map((singleSubmission, idx) => <ReviewTableRow refetch={refetch} setIsModalOpen={setIsModalOpen} idx={idx} setSubmissionDetails={setSubmissionDetails} singleSubmission={singleSubmission} key={singleSubmission._id}></ReviewTableRow>)
                     }
                  </tbody>
               </table>

               {/* view submission modal */}
               <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle" open={isModalOpen}>
                  <div className="modal-box">
                     <h3 className="font-bold text-lg text-center text-primary-content">Submitted Info Down Below</h3>
                     <p className="py-4">{submissionDetails}</p>
                     <div className="modal-action">
                        <form method="dialog">
                           {/* if there is a button in form, it will close the modal */}
                           <button onClick={() => setIsModalOpen(false)} className="btn">Close</button>
                        </form>
                     </div>
                  </div>
               </dialog>
            </div>
         </div>
      </div>
   );
};

export default TaskToReview;