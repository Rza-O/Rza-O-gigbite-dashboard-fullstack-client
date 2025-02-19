import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
   Chart as ChartJS,
   BarElement,
   CategoryScale,
   LinearScale,
   Title,
   Tooltip,
   Legend,
   ArcElement,
   LineElement,
   PointElement,
} from 'chart.js';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, LineElement, PointElement);

const StatCard = ({ title, value }) => (
   <div className="p-4 bg-white shadow-md rounded-lg">
      <h4 className="text-gray-500 font-medium">{title}</h4>
      <p className="text-xl font-bold text-gray-900 mt-2">{value}</p>
   </div>
);

const StatsCard = ({ stats, statsLoading }) => {
   if (statsLoading) return <Loading />;
   // Chart Options
   const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
   };

   // Bar Chart Data - Task Count
   const barData = {
      labels: ['Tasks'],
      datasets: [
         {
            label: 'Total Tasks Added',
            data: [stats?.totalAddedTask],
            backgroundColor: '#73aede',
            borderColor: '#c5def2',
            borderWidth: 1,
         },
      ],
   };

   // Doughnut Chart Data - Pending Tasks
   const doughnutData = {
      labels: ['Pending Tasks', 'Completed Tasks'],
      datasets: [
         {
            data: [stats?.pendingWorkerCount, stats?.totalAddedTask - stats?.pendingWorkerCount],
            backgroundColor: ['#73aede', '#d973de'],
            borderColor: ['#73aede', '#d973de'],
         },
      ],
   };

   // Line Chart Data - Total Paid
   const lineData = {
      labels: ['Dec', 'Jan', 'Feb', ],
      datasets: [
         {
            label: 'Total Paid (€)',
            data: [stats?.totalPaid - 200, stats?.totalPaid - 150, stats?.totalPaid - 100, stats?.totalPaid - 50, stats?.totalPaid],
            borderColor: '#73aede',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            tension: 0.4,
         },
      ],
   };

   return (
      <div className="p-6">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
            <StatCard title="Task Count" value={stats?.totalAddedTask} />
            <StatCard title="Pending Tasks Worker" value={stats?.pendingWorkerCount} />
            <StatCard title="Total Paid" value={`€ ${stats?.totalPaid}`} />
         </div>

         {/* Charts */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 container mx-auto">
            <div className="bg-white p-10 shadow-md rounded-lg h-[350px] flex flex-col">
               <h4 className="text-gray-500">Total Tasks</h4>
               <Bar data={barData} options={chartOptions} />
            </div>
            <div className="bg-white p-10 shadow-md rounded-lg h-[350px] flex flex-col">
               <h4 className="text-gray-500">Pending vs Completed Tasks</h4>
               <Doughnut data={doughnutData} options={chartOptions} />
            </div>
            <div className="bg-white p-10 shadow-md rounded-lg h-[350px] flex flex-col">
               <h4 className="text-gray-500">Total Paid Over Time</h4>
               <Line data={lineData} options={chartOptions}/>
            </div>
         </div>
      </div>
   );
};

export default StatsCard;
