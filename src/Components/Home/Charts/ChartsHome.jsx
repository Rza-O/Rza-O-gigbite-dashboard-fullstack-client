import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Title from '@/Components/Shared/Title/Title';
import { NumberTicker } from '@/Components/magicui/number-ticker';
import { motion } from 'framer-motion';


ChartJS.register(ArcElement, Tooltip, Legend);

const ChartsHome = () => {
   // Chart Data
   const data = {
      labels: ['Micro Task', 'Full-Time Job'],
      datasets: [
         {
            label: 'Revenue breakdown',
            data: [75, 25],
            backgroundColor: ['#73aede', '#d973de'],
            hoverOffset: 6,
         },
      ],
   };


   const options = {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
         duration: 1000, 
      },
      plugins: {
         legend: {
            position: 'bottom',
         },
      },
   };

   return (
      <div className="w-11/12 md:container mx-auto">
         <Title heading={'Engagement Chart'} subHeading={'Contact us for your solution today!'}></Title>
         <div className="grid grid-cols-1 md:grid-cols-3  gap-6 overflow-hidden">
            {/* Card 1 */}
            <motion.div
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="card bg-foreground shadow-lg p-6 bg-[url('../../../src/assets/Curve-Line2.svg')]  bg-contain">
               <div className='card-body'>
                  <h2 className="text-2xl font-bold mb-4">
                     GigBite&apos;s Services?
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                     <li>Individual project consulting</li>
                     <li>Individual tasks configuration</li>
                     <li>Review of each order/work</li>
                     <li>Fast order placement 24/7</li>
                  </ul>
               </div>
            </motion.div>

            <div className='flex flex-col justify-between gap-3'>
               {/* Card 2 */}
               <motion.div
                  initial={{ opacity: 0, y: -40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-1/2 card bg-foreground shadow-lg p-6 flex flex-col justify-center text-center bg-[url('../../../src/assets/animated-shape.svg')]  bg-cover">
                  <h2 className="text-3xl font-bold text-gray-800">
                     <NumberTicker value={10000} duration={2}></NumberTicker> +
                  </h2>
                  <p className="mt-2 text-gray-600">
                     Workers actively working on our platform
                  </p>
               </motion.div>
               {/* Card 3 */}
               <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="h-1/2 card bg-foreground shadow-lg p-6 flex flex-col justify-center text-center bg-[url('../../../src/assets/Animated-Shape2.svg')]  bg-cover">
                  <h2 className="text-3xl font-bold text-gray-800">
                     <NumberTicker value={5} duration={2} /> years
                  </h2>
                  <p className="mt-2 text-gray-600">
                     Building strong bond with our buyer
                  </p>
               </motion.div>
            </div>

            {/* Card 4 Chart */}
            <motion.div
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="card bg-foreground shadow-lg p-6 bg-[url('../../../src/assets/Curve-Line.svg')]  bg-contain">
               <h2 className="text-2xl font-bold mb-4 text-gray-800">
                  Revenue breakdown
               </h2>
               <div className="relative w-full h-60">
                  <Doughnut data={data} options={options} />
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default ChartsHome;
