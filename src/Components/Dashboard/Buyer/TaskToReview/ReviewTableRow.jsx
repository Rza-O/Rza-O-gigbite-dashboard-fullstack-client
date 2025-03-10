import useAxiosSecure from '@/Hooks/useAxiosSecure';
import React from 'react';
import toast from 'react-hot-toast';
import { MdOutlinePreview } from "react-icons/md";

const ReviewTableRow = ({ singleSubmission, idx, setIsModalOpen, setSubmissionDetails, refetch, refetchStats }) => {
   const { worker_name, task_title, payable_amount, submission_details, _id } = singleSubmission || {};
   const axiosSecure = useAxiosSecure();

   const handleApprove = async () => {
      try {
         const { data } = await axiosSecure.patch(`/submission/status/${_id}`, {status: 'approved'})
         console.log(data)
         refetch();
         refetchStats()
         toast.success('Task Approved Successfully!')
      } catch (error) {
         console.log(error)
         toast.error('Something went Wrong. Please try again!')
      }
   }


   const handleReject = async () => {
      try {
         const { data } = await axiosSecure.patch(`/submission/status/${_id}`, { status: 'rejected' })
         console.log(data)
         refetch();
         refetchStats();
         toast.success('Task Rejected Successfully!')
      } catch (error) {
         console.log(error)
         toast.error('Something went Wrong. Please try again!')
      }
   }


   return (
      <tr className="hover:bg-primary-light/30  border border-border">
         <th>{idx + 1}</th>
         <td>{worker_name}</td>
         <td>{task_title}</td>
         <td>{payable_amount}🪙</td>
         <td className=''>
            <button
               onClick={() => {
                  setSubmissionDetails(submission_details)
                  setIsModalOpen(true)
               }}
               className='btn btn-outline outline-primary-dark '><MdOutlinePreview className='text-2xl' /></button>
         </td>
         <td className='space-x-4 flex items-center justify-center mt-7 lg:mt-0 xl:block'>
            <button onClick={handleApprove} className='btn bg-primary-dark'>
               Approve
            </button>   
            <button
               onClick={handleReject}
               className='btn bg-secondary-dark'>
               Reject
            </button>
         </td>
      </tr>
   );
};

export default ReviewTableRow;