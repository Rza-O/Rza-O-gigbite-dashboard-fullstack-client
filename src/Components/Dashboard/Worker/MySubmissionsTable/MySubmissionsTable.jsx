import React, { useState } from 'react';
import MySubmissionsTableRow from './MySubmissionsTableRow';
import { useQuery } from '@tanstack/react-query';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';

const MySubmissionsTable = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;

   const { data = {}, isLoading } = useQuery({
      queryKey: ['mySubmissions', currentPage],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/my-submissions/${user?.email}?page=${currentPage}&limit=${itemsPerPage}`)
         return data;
      }
   })

   const { submissions = [], totalPages } = data;

   const handlePageChange = async (page) => {
      setCurrentPage(page)
   }

   if (isLoading) return <Loading></Loading>

   console.log(submissions)


   return (
      <div>
         <div className="overflow-x-auto h-[530px] md:h-[300px]">
            <table className="table static ">
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
                     submissions.map((mySubmission, idx) => <MySubmissionsTableRow idx={idx +(currentPage - 1) * itemsPerPage} mySubmission={mySubmission} key={mySubmission._id}></MySubmissionsTableRow>)
                  }
               </tbody>
            </table>
         
         </div>
         {/* pagination */}
         <div className="flex justify-center mt-4">
            <div className="join">
               {Array.from({ length: totalPages }, (_, idx) => (
                  <input
                     key={idx}
                     type="radio"
                     name="pagination"
                     aria-label={`Page ${idx + 1}`}
                     className={`join-item btn bg-secondary  ${currentPage === idx + 1 ? 'btn-info' : ''
                        }`}
                     onClick={() => handlePageChange(idx + 1)}
                     defaultChecked={currentPage === idx + 1}
                  />
               ))}
            </div>
         </div>
      </div>
   );
};

export default MySubmissionsTable;