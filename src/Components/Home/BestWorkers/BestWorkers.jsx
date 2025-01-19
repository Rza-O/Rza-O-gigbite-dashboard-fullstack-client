import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import Title from '@/Components/Shared/Title/Title';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { motion } from "framer-motion";

const BestWorkers = () => {
   const axiosPublic = useAxiosPublic();
   const { data: bestWorkers, isLoading } = useQuery({
      queryKey: ['best-workers'],
      queryFn: async () => {
         const { data } = await axiosPublic('/best-workers');
         return data;
      }
   });

   if (isLoading) {
      return <Loading />;
   }

   return (
      <div className=''>
         <Title heading={'Top Workers'} subHeading={'Here are our top workers'} />
         <div className='grid grid-cols-3 lg:grid-cols-6  xl:container mx-auto gap-6 w-11/12'>
            {
               bestWorkers.map((worker, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ y: 0 }}
                     whileHover={{ y: -20 }}
                     transition={{ duration: 0.3, type: 'tween', stiffness: 300 }}
                  >
                     <motion.div

                        className="relative w-28 h-28 rounded-full overflow-hidden group mx-auto"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                     >
                        {/* Image */}
                        <motion.img
                           src={worker.image}
                           className="absolute inset-0 w-full h-full object-cover"
                           alt="Worker"
                           variants={{
                              rest: { scale: 1 },
                              hover: { scale: 0.95 },
                           }}
                           transition={{ type: "tween", stiffness: 300 }}
                        />
                        {/* Coin Details */}
                        <motion.div
                           className="absolute bottom-0 left-0 right-0 text-center text-primary-content bg-primary p-2 rounded-b-full"
                           variants={{
                              rest: { y: "100%" },
                              hover: { y: "0%" },
                           }}
                           transition={{ type: "tween", stiffness: 300 }}
                        >
                           <p className="text-sm">Coin Earned</p>
                           <p className="text-base font-bold">🪙{worker.coin}</p>
                        </motion.div>
                     </motion.div>
                  </motion.div>
               ))
            }
         </div>
      </div>
   );
};

export default BestWorkers;