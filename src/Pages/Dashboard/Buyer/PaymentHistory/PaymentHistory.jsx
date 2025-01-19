import PaymentHistoryTable from '@/Components/Dashboard/Buyer/PaymentHistory/PaymentHistoryTable';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
   return (
      <div className='container mx-auto my-6'>
         <Helmet>
            <title>Payment History | Dashboard</title>
         </Helmet>
         <div className='mb-6'>
            <DashboardTitle title={'Payment History'} subtitle={'Track all your expenditures here'}></DashboardTitle>
         </div>
         <div className='w-11/12 mx-auto min-h-[600px]'>
            <PaymentHistoryTable></PaymentHistoryTable>
         </div>
      </div>
   );
};

export default PaymentHistory;