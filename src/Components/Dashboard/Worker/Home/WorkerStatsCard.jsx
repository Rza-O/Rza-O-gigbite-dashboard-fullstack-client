import React from 'react';
import { Bar, PolarArea, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, RadialLinearScale } from 'chart.js';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


// Register Chart.js components
ChartJS.register(
   CategoryScale,
   LinearScale,
   RadialLinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   ArcElement,
   PointElement,
   LineElement
);

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
         const { data } = await axiosSecure(`/worker-dashboard/stats/${user?.email}`);
         return data;
      }
   });

   const { pendingSubmission = 0, totalEarnings = 0, totalSubmission = 0 } = statsData || {};
   const completedSubmissions = Math.max(0, totalSubmission - pendingSubmission);

   // Bar Chart Data (Total Submissions)
   const barData = {
      labels: ['Total Submissions'],
      datasets: [
         {
            label: 'Submissions',
            data: [totalSubmission],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
         }
      ]
   };

   // Polar Area Chart Data (Submission Breakdown)
   const polarData = {
      labels: ['Total', 'Pending', 'Completed'],
      datasets: [
         {
            label: 'Submissions',
            data: [totalSubmission, pendingSubmission, completedSubmissions],
            backgroundColor: [
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 206, 86, 0.6)',
               'rgba(75, 192, 192, 0.6)'
            ],
            borderWidth: 1
         }
      ]
   };

   // Line Chart Data (Total Earnings)
   const lineData = {
      labels: ['Total Earnings'],
      datasets: [
         {
            label: 'Earnings (🪙)',
            data: [totalEarnings],
            borderColor: '#4CAF50',
            backgroundColor: 'rgba(76, 175, 80, 0.3)',
            fill: true,
            tension: 0.4
         }
      ]
   };

   return (
      <div className='p-6'>
         {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto my-6">
            <StatCard title="Total Submission" value={`${isLoading ? 0 : totalSubmission}`} percentage="45.0" isIncrease />
            <StatCard title="Submission Pending" value={`${isLoading ? 0 : pendingSubmission}`} percentage="12.5" />
            <StatCard title="Total Earnings" value={`🪙 ${isLoading ? 0 : totalEarnings}`} percentage="35.2" isIncrease />
         </div>
         {/* Charts Section */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto mb-11">
            {/* Bar Chart */}
            <div className="bg-white p-4 shadow-md rounded-lg h-[250px]">
               <h3 className="text-lg font-semibold text-center mb-2">Total Submissions</h3>
               <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>

            {/* Polar Area Chart */}
            <div className="bg-white p-10 shadow-md rounded-lg h-[250px]">
               <h3 className="text-lg font-semibold text-center mb-2">Submission Breakdown</h3>
               <PolarArea
                  data={polarData}
                  options={{
                     responsive: true,
                     maintainAspectRatio: false,
                     scales: {
                        r: {
                           beginAtZero: true
                        }
                     }
                  }}
               />
            </div>

            {/* Line Chart */}
            <div className="bg-white p-4 shadow-md rounded-lg h-[250px]">
               <h3 className="text-lg font-semibold text-center mb-2">Total Earnings</h3>
               <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
         </div>


      </div>
   );
};

export default WorkerStatsCard;