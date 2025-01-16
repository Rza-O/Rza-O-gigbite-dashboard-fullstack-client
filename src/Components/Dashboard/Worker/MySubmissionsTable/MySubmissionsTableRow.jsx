import React from 'react';
import { format } from "date-fns";

const MySubmissionsTableRow = ({ mySubmission, idx }) => {
   return (
      <tr className="hover">
         <th>{idx + 1}</th>
         <td>{mySubmission.task_title}</td>
         <td>{format(new Date(mySubmission.submission_date), "P")}</td>
         {mySubmission.status &&
            <td>{mySubmission.status === 'pending'
               && <div className="badge badge-warning badge-outline">{mySubmission.status}</div>}</td>}
      </tr>
   );
};

export default MySubmissionsTableRow;