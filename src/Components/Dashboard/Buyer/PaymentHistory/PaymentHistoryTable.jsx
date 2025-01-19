import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useUser from '@/Hooks/useUser';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { format } from 'date-fns'

const PaymentHistoryTable = () => {
   const [userData] = useUser();
   const axiosSecure = useAxiosSecure();
   const { data: paymentHistory = [], isLoading } = useQuery({
      queryKey: ['payment-history', userData.email],
      queryFn: async () => {
         const { data } = await axiosSecure(`/payment-history/${userData.email}`);
         return data
      }
   })
   if (isLoading) return <Loading></Loading>;
   console.log(paymentHistory);
   return (
      <div className="overflow-x-auto">
         {paymentHistory.length > 0 ? (<table className="table static">
            {/* head */}
            <thead>
               <tr>
                  <th>#</th>
                  <th>Transaction ID</th>
                  <th>Coins</th>
                  <th>Paid</th>
                  <th>Date</th>
               </tr>
            </thead>
            <tbody>
               {
                  paymentHistory.map((history, idx) => (
                     <tr key={history._id} className="hover:bg-primary/30 border border-border">
                        <th>{idx + 1}</th>
                        <td>{history.transactionId}</td>
                        <td>{history.coins}</td>
                        <td>{history.price}$</td>
                        <td>{format(new Date(history.date), "P")}</td>
                     </tr>
                  ))
               }
            </tbody>
         </table>):(
         <div>
            <p className='text-center text-2xl min-h-[500px]'>Ypu have not purchased any coin yet</p>
         </div>
         )}
      </div>
   );
};

export default PaymentHistoryTable;