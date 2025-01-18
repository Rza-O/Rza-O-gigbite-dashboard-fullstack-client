import ManageUsersTable from '@/Components/Dashboard/Admin/ManageUsers/ManageUsersTable';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import React from 'react';

const ManageUsers = () => {
   return (
      <div className='w-11/12 mx-auto bg-background'>
         <div className='py-6'>
            <DashboardTitle title={'Manage All Users'} subtitle={'Change role or delete user from database'}></DashboardTitle>
         </div>
         <div className='container mx-auto'>
            <ManageUsersTable></ManageUsersTable>
         </div>
      </div>
   );
};

export default ManageUsers;