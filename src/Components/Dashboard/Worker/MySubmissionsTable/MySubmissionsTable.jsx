import React from 'react';
import MySubmissionsTableRow from './MySubmissionsTableRow';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';

const MySubmissionsTable = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();

   const { data: mySubmissions = [], isLoading } = useQuery({
      queryKey: ['mySubmissions'],
      enabled: !loading && !! user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/my-submissions/${user?.email}`)
         return data;
      }
   })

   if(isLoading) return <Loading></Loading>

   console.log(mySubmissions);


   return (
      <div className="overflow-x-auto">
         <table className="table static">
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
                  mySubmissions.map((mySubmission, idx) => <MySubmissionsTableRow idx={idx} mySubmission={mySubmission} key={mySubmission._id}></MySubmissionsTableRow>)
               }
               
            </tbody>
         </table>
      </div>
   );
};

export default MySubmissionsTable;