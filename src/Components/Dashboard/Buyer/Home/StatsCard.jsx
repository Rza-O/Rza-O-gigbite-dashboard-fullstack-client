import React from 'react';

const StatCard = ({ title, value, percentage, isIncrease }) => {
   return (
      <div className="p-4 bg-white shadow-md rounded-lg">
         <h4 className="text-gray-500 font-medium">{title}</h4>
         <div className="flex items-center justify-between mt-2">
            <p className="text-xl font-bold text-gray-900">{value}</p>
            {/* <p
               className={`text-sm ${isIncrease ? 'text-green-500' : 'text-red-500'
                  }`}
            >
               {isIncrease ? `+${percentage}%` : `-${percentage}%`}
            </p> */}
         </div>
      </div>
   );
};

const StatsCard = () => {
   return (
      <div className='p-6'>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mx-auto">
            <StatCard title="Task Count" value="50" percentage="45.0" isIncrease />
            <StatCard title="Pending Tasks" value="20" percentage="12.5" />
            <StatCard title="Total Paid" value="€500" percentage="35.2" isIncrease />
         </div>
      </div>
   );
};

export default StatsCard;