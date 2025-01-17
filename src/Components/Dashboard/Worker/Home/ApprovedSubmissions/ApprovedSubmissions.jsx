import React from 'react';
import ApprovedSubmissionsTableRow from './ApprovedSubmissionsTableRow';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';

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

   console.log(mySubmissions);


   return (
      <div className="overflow-x-auto my-6 container mx-auto">
         <table className="table">
            {/* head */}
            <thead>
               <tr>
                  <th>#</th>
                  <th>Task Title</th>
                  <th>Submission Date</th>
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
      </div>
   );
};

export default ApprovedSubmissions;