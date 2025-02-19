import { useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, LineElement } from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, ArcElement, LineElement);

const AdminStats = ({ stats }) => {
   // Bar Chart Data
   const barData = {
      labels: ['Total Workers', 'Total Buyers', 'Total Coins', 'Total Payments', 'Total Withdrawals'],
      datasets: [
         {
            label: 'Stats Comparison',
            data: [
               stats.totalWorker,
               stats.totalBuyer,
               stats.totalAvailableCoin,
               stats.totalPayment,
               stats.totalWithdrawals,
            ],
            backgroundColor: '#73aede',
            borderColor: '#73aede',
            borderWidth: 1,
         },
      ],
   };

   // Pie Chart Data
   const pieData = {
      labels: ['Total Workers', 'Total Buyers', 'Total Coins', 'Total Payments', 'Total Withdrawals'],
      datasets: [
         {
            data: [
               stats.totalWorker,
               stats.totalBuyer,
               stats.totalAvailableCoin,
               stats.totalPayment,
               stats.totalWithdrawals,
            ],
            backgroundColor: [
               '#d973de',
               '#73aede',
               '#19476c',
               'rgba(54, 162, 235, 0.6)',
               'rgba(255, 99, 132, 0.6)',
            ],
            borderColor: [
               '#d973de',
               '#73aede',
               '#19476c',
               'rgba(54, 162, 235, 1)',
               'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
         },
      ],
   };

   // Line Chart Data (mocked over time)
   const lineData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [
         {
            label: 'Total Workers',
            data: [stats.totalWorker, stats.totalWorker + 50, stats.totalWorker + 100, stats.totalWorker + 150, stats.totalWorker + 200],
            borderColor: '#73aede',
            backgroundColor: '#73aede',
            tension: 0.4,
         },
         {
            label: 'Total Buyers',
            data: [stats.totalBuyer, stats.totalBuyer + 30, stats.totalBuyer + 60, stats.totalBuyer + 90, stats.totalBuyer + 120],
            borderColor: '#d973de',
            backgroundColor: '#d973de',
            tension: 0.4,
         },
      ],
   };

   // Chart Options
   const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
         title: {
            display: true,
            text: 'Admin Stats Overview',
         },
      },
      scales: {
         y: {
            beginAtZero: true,
            ticks: {
               callback: function (value) {
                  return value.toLocaleString(); 
               },
            },
         },
      },
   };

   return (
      <div>

         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-6">
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
               <h4 className="text-gray-500">Total Withdrawals</h4>
               <p className="text-xl font-bold">{stats.totalWithdrawals}</p>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
            {/* Bar Chart */}
            <div className="bg-white p-10 shadow-md rounded-lg h-[350px] flex flex-col">
               <h4 className="text-gray-500">Bar Chart - Stats Comparison</h4>
               <div className="flex-1">
                  <Bar data={barData} options={chartOptions} />
               </div>
            </div>
            {/* Pie Chart */}
            <div className="bg-white p-10 shadow-md rounded-lg h-[350px] flex flex-col">
               <h4 className="text-gray-500">Pie Chart - Stats Proportions</h4>
               <div className="flex-1">
                  <Pie data={pieData} options={chartOptions} />
               </div>
            </div>
            {/* Line Chart */}
            <div className="bg-white p-10 shadow-md rounded-lg h-[350px] flex flex-col">
               <h4 className="text-gray-500">Line Chart - Stats Over Time</h4>
               <div className="flex-1">
                  <Line data={lineData} options={chartOptions} />
               </div>
            </div>
         </div>

      </div>
   );
};

export default AdminStats;
