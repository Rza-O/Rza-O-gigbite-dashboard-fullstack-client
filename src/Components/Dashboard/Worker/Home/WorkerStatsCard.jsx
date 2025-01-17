import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const StatCard = ({ title, value, percentage, isIncrease }) => {

   return (
      <div className="p-4 bg-white shadow-md rounded-lg">
         <h4 className="text-gray-500 font-medium">{title}</h4>
         <div className="flex items-center justify-between mt-2">
            <p className="text-xl font-bold text-gray-900">{value}</p>
            <p
               className={`text-sm ${isIncrease ? 'text-green-500' : 'text-red-500'
                  }`}
            >
               {isIncrease ? `+${percentage}%` : `-${percentage}%`}
            </p>
         </div>
      </div>
   );
};

const WorkerStatsCard = () => {
   const axiosSecure = useAxiosSecure();
   const { user, loading } = useAuth();

   const { data: statsData = {}, isLoading } = useQuery({
      queryKey: ['worker-stats', user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/worker-dashboard/stats/${user?.email}`)
         return data;
      }
   })

   console.log(statsData)

   const { pendingSubmission, totalEarnings, totalSubmission } = statsData || {}
   console.log(totalSubmission)
   return (
      <div className='p-6'>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
            <StatCard title="Total Submission" value={totalSubmission} percentage="45.0" isIncrease />
            <StatCard title="Submission Pending" value={pendingSubmission} percentage="12.5" />
            <StatCard title="Total Earnings" value={`🪙 ${totalEarnings}`} percentage="35.2" isIncrease />
         </div>
      </div>
   );
};

export default WorkerStatsCard;