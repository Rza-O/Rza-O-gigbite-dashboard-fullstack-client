

import DashboardNavbar from '@/Components/Dashboard/Shared/Navbar/DashboardNavbar';
import { Sidebar } from '@/Components/Dashboard/Shared/Sidebar/Common/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
   return (
      <div className='min-h-screen md:flex'>
         <aside className='hidden lg:flex'>
            <Sidebar></Sidebar>
         </aside>
         <div className='flex-1'>
            <DashboardNavbar></DashboardNavbar>
            <h3>hello</h3>
         </div>
      </div>
   );
};

export default DashboardLayout;