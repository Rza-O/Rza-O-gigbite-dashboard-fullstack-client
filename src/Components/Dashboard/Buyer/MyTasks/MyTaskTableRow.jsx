import { format } from 'date-fns';
import { Pencil, Trash2 } from 'lucide-react';
import React, { useState } from 'react';

const MyTaskTableRow = ({ task, refetch, idx, setIsOpen }) => {
   
   
   return (
      <tr className=" hover:bg-primary-light/30 border border-border">
         <th>{idx + 1}</th>
         <td>{ task.task_title}</td>
         <td>{ format(new Date(task.deadline), 'PPPP')}</td>
         <td>{ task.totalCost}🪙</td>
         <td className="flex space-x-4">
            <span className="hover:text-red-700 cursor-pointer">
               <Trash2 className="w-5" />
            </span>
            <span className="hover:text-secondary-dark cursor-pointer">
               <Pencil className="w-5" />
            </span>
         </td>
      </tr>
   );
};

export default MyTaskTableRow;