import React from 'react';
import { format } from "date-fns";

const MySubmissionsTableRow = ({ mySubmission, idx }) => {
   return (
      <tr className="hover">
         <th>{idx + 1}</th>
         <td>{mySubmission.task_title}</td>
         <td>{format(new Date(mySubmission.submission_date), "P")}</td>
         {mySubmission.status &&
            <td>
               <div className={`badge badge-outline ${mySubmission.status === 'pending'
                     ? 'badge-warning'
                     : mySubmission.status === 'approved'
                        ? 'badge-success'
                        : 'badge-error'
                  }`}>{mySubmission.status}</div>
            </td>}
      </tr>
   );
};

export default MySubmissionsTableRow;