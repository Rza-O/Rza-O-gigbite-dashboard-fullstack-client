import ManageTasksTable from '@/Components/Dashboard/Admin/ManageTasks/ManageTasksTable';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import React from 'react';

const ManageTasks = () => {
   return (
      <div className='w-11/12 mx-auto bg-background'>
         <div className='py-6'>
            <DashboardTitle title={'Manage All Tasks'} subtitle={'Delete invalid tasks from here'}></DashboardTitle>
         </div>
         <div className='container mx-auto'>
            <ManageTasksTable></ManageTasksTable>
         </div>
      </div>
   );
};

export default ManageTasks;