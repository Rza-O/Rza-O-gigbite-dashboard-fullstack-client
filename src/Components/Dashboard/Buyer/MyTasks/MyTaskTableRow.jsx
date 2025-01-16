import { format } from 'date-fns';
import { Pencil, Trash2 } from 'lucide-react';
import React from 'react';

const MyTaskTableRow = ({ task, refetch, idx }) => {
   return (
      <tr className=" hover:bg-primary-light/30">
         <th>{idx + 1}</th>
         <td>{ task.task_title}</td>
         <td>{ format(new Date(task.deadline), 'PPPP')}</td>
         <td>{ task.totalCost}🪙</td>
         <div>
            <td className='hover:text-red-700'><Trash2 className='w-6'></Trash2></td>
            <td className='hover:text-secondary-dark'><Pencil className='w-6'></Pencil></td>
         </div>
      </tr>
   );
};

export default MyTaskTableRow;