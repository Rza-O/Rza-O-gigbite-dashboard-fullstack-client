

import { Sidebar } from '@/Components/Dashboard/Shared/Sidebar/Common/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
   return (
      <div>
         <Sidebar></Sidebar>
         <Outlet></Outlet>
      </div>
   );
};

export default DashboardLayout;