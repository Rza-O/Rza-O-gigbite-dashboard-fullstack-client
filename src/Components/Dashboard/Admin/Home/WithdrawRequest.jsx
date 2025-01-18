import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const WithdrawRequest = ({ refetchStats }) => {
   const axiosSecure = useAxiosSecure();
   const { data: withdrawRequests, isLoading, refetch } = useQuery({
      queryKey: ['withdrawRequest'],
      queryFn: async () => {
         const { data } = await axiosSecure('/admin/withdrawal-requests');
         return data;
      }
   })
   console.log(withdrawRequests);
   if (isLoading) return <Loading></Loading>

   const handleApproval = async (id) => {
      try {
         const { data } = await axiosSecure.patch(`/admin/approval/${id}`)
         // console.log(data);
         refetchStats();
         refetch();
         toast.success('Withdrawal request approved')
      } catch (error) {
         console.log(error);
         toast.error('Approval failed. Please try again!')
      }
   }



   return (
      <div>
         {withdrawRequests.length > 0 ? (
            <div className="overflow-x-auto ">
               <table className="table static">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Worker</th>
                        <th>Coin</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row 1 */}
                     {withdrawRequests.map((request, idx) => (
                        <tr key={request._id} className="hover:bg-primary/30 border-border">
                           <th>{idx + 1}</th>
                           <td>{request?.worker_name}</td>
                           <td>{request?.withdrawal_coin}🪙</td>
                           <td>
                              <button
                                 onClick={() => handleApproval(request?._id)}
                                 className='btn btn-success'>Approve</button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         ) : (
            <div>
               <p className='text-center text-2xl'>There's no withdrawal request yet</p>
            </div>
         )}
      </div>
   );
};

export default WithdrawRequest;