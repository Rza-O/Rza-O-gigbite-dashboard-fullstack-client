import AddTaskForm from '@/Components/Dashboard/Buyer/AddTask/AddTaskForm';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import React from 'react';

const AddTaskBuyer = () => {
   return (
      <div className='container   mx-auto'>
         <div className='py-6'>
            <DashboardTitle title={'Add Your Task'} subtitle={'Here you can add your task with all the details'}></DashboardTitle>
         </div>
         <AddTaskForm></AddTaskForm>
      </div>
   );
};

export default AddTaskBuyer;

