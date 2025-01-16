import Button_v5 from '@/Components/ui/animated_button_variant_5';
import { Button } from '@/Components/ui/button';
import InteractiveHoverButton from '@/Components/ui/interactive-hover-button';
import React from 'react';
import { Link } from 'react-router-dom';
import { LuBookOpenText } from "react-icons/lu";
import { format } from "date-fns";

// task_title
// Buyer_name
// completion_date
// payable_amount
// required_workers
// View Details Button 


const TaskCard = ({ task }) => {
   console.log(task)
   const { task_title, buyer, deadline, payable_amount, required_workers, image, _id } = task || {};
   return (
      <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
         <img
            src={image}
            alt="Donation Banner"
            className="w-full h-48 object-cover"
         />
         <div className="p-6">
            <div className="flex items-center justify-between">
               <h2 className="text-base font-semibold text-gray-800">
                  {task_title.substring(0, 30)}...
               </h2>
               {/* {foodName} */}
               {/* {quantity} */}
            </div>
            <p className="font-bold">Buyer: {buyer.buyer_name}</p>
            <p className="mt-2 text-gray-600">
               {/* {notes.substring(0, 60)}... */}Workers Required: {required_workers}
            </p>
            <div className="mt-4">
               <div className="flex justify-between items-center text-sm font-medium text-gray-700">
                  <span>
                     Amount: {payable_amount}🪙
                     {/* <span className="text-green-600">{status}</span> */}
                  </span>
                  <span>
                     Deadline: <span className="text-red-600">{format(new Date(deadline), "P")}</span>
                     {/* {format(new Date(task.deadline), 'PPPP')} */}
                  </span>
               </div>
            </div>
            {/* <Link to={`/food/${_id}`}> */}
            <div className='mt-4 flex justify-end'>
               <Link to={`/dashboard/task/${_id}`}>
                  <Button_v5 Icon={<LuBookOpenText />}>View Details</Button_v5>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default TaskCard;