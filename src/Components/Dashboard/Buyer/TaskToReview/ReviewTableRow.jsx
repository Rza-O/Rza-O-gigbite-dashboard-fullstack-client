import React from 'react';
import { MdOutlinePreview } from "react-icons/md";

const ReviewTableRow = ({ singleSubmission, idx, setIsModalOpen, setSubmissionDetails }) => {
   const { worker_name, task_title, payable_amount, submission_details } = singleSubmission || {};
   return (
      <tr className="hover border border-border">
         <th>{idx + 1}</th>
         <td>{ worker_name}</td>
         <td>{ task_title}</td>
         <td>{ payable_amount}🪙</td>
         <td className=''>
            <button
               onClick={() => {
                  setSubmissionDetails(submission_details)
                  setIsModalOpen(true)
               }}
               className='btn btn-outline outline-primary-dark '><MdOutlinePreview className='text-2xl' /></button>
         </td>
         <td className='space-x-4'>
            <button className='btn btn-success'>
               Approve
            </button>
            <button className='btn btn-error'>
               Reject
            </button>
         </td>
      </tr>
   );
};

export default ReviewTableRow;