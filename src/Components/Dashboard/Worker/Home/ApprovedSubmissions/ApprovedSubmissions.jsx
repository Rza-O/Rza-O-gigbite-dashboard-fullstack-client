import React from 'react';
import ApprovedSubmissionsTableRow from './ApprovedSubmissionsTableRow';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import DashboardTitle from '@/Components/Dashboard/Shared/Title/DashboardTitle';

const ApprovedSubmissions = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();

   const { data: mySubmissions = [], isLoading } = useQuery({
      queryKey: ['mySubmissions'],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/approved-submission/${user?.email}`)
         return data;
      }
   })

   if (isLoading) return <Loading></Loading>

   // console.log(mySubmissions);


   return (
      <div className="overflow-x-auto  container mx-auto">
         <div className='my-6'>
            <DashboardTitle title='All Approved Submission'></DashboardTitle>
         </div>
         {
            mySubmissions.length > 0 ? (
               <table className="table static">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>#</th>
                        <th>Task Title</th>
                        <th>Payable Amount</th>
                        <th>Buyer Name</th>
                        <th>Status</th>
                     </tr>
                  </thead>
                  <tbody>
                     {/* row  */}
                     {
                        mySubmissions.map((mySubmission, idx) => <ApprovedSubmissionsTableRow idx={idx} mySubmission={mySubmission} key={mySubmission._id}></ApprovedSubmissionsTableRow>)
                     }

                  </tbody>
               </table>
            ) : (
                  <div>
                     <p className='text-center text-2xl'>There's no approved task yet</p>
                  </div>
            )
         }
      </div>
   );
};

export default ApprovedSubmissions;