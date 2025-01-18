import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const AdminStats = ({stats}) => {
   

   return (
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 p-6">
         <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="text-gray-500">Total Workers</h4>
            <p className="text-xl font-bold">{stats.totalWorker}</p>
         </div>
         <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="text-gray-500">Total Buyers</h4>
            <p className="text-xl font-bold">{stats.totalBuyer}</p>
         </div>
         <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="text-gray-500">Total Coins</h4>
            <p className="text-xl font-bold">{stats.totalAvailableCoin}</p>
         </div>
         <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="text-gray-500">Total Payments</h4>
            <p className="text-xl font-bold">{stats.totalPayment}</p>
         </div>
         <div className="p-4 bg-white shadow rounded-lg">
            <h4 className="text-gray-500">Total Withdrawals </h4>
            <p className="text-xl font-bold">{stats.totalWithdrawals}</p>
         </div>
      </div>
   );
};

export default AdminStats;
