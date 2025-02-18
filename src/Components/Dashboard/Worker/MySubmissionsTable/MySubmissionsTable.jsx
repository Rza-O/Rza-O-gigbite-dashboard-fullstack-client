import React, { useState } from "react";
import MySubmissionsTableRow from "./MySubmissionsTableRow";
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import Loading from "@/Components/Shared/LoadingSpinner/Loading";
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext } from "@/components/ui/pagination"; // ShadCN Pagination

const MySubmissionsTable = () => {
   const { user, loading } = useAuth();
   const axiosSecure = useAxiosSecure();
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = 5;

   // Fetching Data with React Query
   const { data = {}, isLoading, refetch } = useQuery({
      queryKey: ["mySubmissions", currentPage],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/my-submissions/${user?.email}?page=${currentPage}&limit=${itemsPerPage}`);
         return data;
      },
      keepPreviousData: true,
   });

   const { submissions = [], totalPages = 1 } = data;

   const handlePageChange = (page) => {
      if (page >= 1 && page <= totalPages) {
         setCurrentPage(page);
         refetch();
      }
   };

   if (isLoading) return <Loading />;

   return (
      <div>
         {/* Table Section */}
         <div className="overflow-x-auto h-[530px] md:h-[300px]">
            {submissions.length > 0 ? (
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
                     {submissions.map((mySubmission, idx) => (
                        <MySubmissionsTableRow
                           idx={idx + (currentPage - 1) * itemsPerPage + 1}
                           mySubmission={mySubmission}
                           key={mySubmission._id}
                        />
                     ))}
                  </tbody>
               </table>
            ) : (
               <div>
                  <p className="text-center text-2xl">You have not submitted any tasks yet.</p>
               </div>
            )}
         </div>

         {/* Pagination Using ShadCN */}
         <div className="flex justify-center mt-4">
            <Pagination>
               <PaginationContent>
                  <PaginationItem>
                     <PaginationPrevious className={'cursor-pointer'} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                  </PaginationItem>
                  {Array.from({ length: totalPages }, (_, idx) => (
                     <PaginationItem key={idx}>
                        <Button
                           className={`px-4 py-2 hover:bg-primary-dark ${currentPage === idx + 1 ? "bg-secondary-dark text-white" : "bg-gray-200 text-black"
                              }`}
                           variant={currentPage === idx + 1 ? "default" : "outline"}
                           onClick={() => handlePageChange(idx + 1)}
                        >
                           {idx + 1}
                        </Button>
                     </PaginationItem>
                  ))}
                  <PaginationItem>
                     <PaginationNext className={'cursor-pointer'} onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         </div>
      </div>
   );
};

export default MySubmissionsTable;
