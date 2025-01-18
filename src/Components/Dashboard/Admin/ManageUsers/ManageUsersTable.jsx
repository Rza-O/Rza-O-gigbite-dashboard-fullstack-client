import React from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';

const ManageUsersTable = () => {
   const axiosSecure = useAxiosSecure();
   const queryClient = useQueryClient();

   // Fetch all users
   const { data: users = [], isLoading } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const { data } = await axiosSecure.get('/admin/users');
         return data;
      },
   });

   // delete a user
   const handleDelete = async (id) => {
      try {
         await axiosSecure.delete(`/admin/users/${id}`);
         queryClient.invalidateQueries(['users']);
         toast.success('User removed successfully');
      } catch (error) {
         toast.error('Failed to remove user');
      }
   };

   //update a user's role
   const handleRoleChange = async (id, role) => {
      try {
         await axiosSecure.patch(`/admin/users/${id}`, { role });
         queryClient.invalidateQueries(['users']);
         toast.success('User role updated successfully');
      } catch (error) {
         toast.error('Failed to update user role');
      }
   };

   if (isLoading) return <Loading />;
   console.log(users)

   return (
      <div className="container mx-auto p-6">
         <div className="overflow-x-auto">
            <table className="table w-full static">
               {/* Table Head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Email</th>
                     <th>Role</th>
                     <th>Coins</th>
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map((user, idx) => (
                     <tr key={user._id}>
                        <th>
                           {idx + 1}
                        </th>
                        {/* User Info */}
                        <td>
                           <div className="flex items-center gap-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle h-12 w-12">
                                    <img
                                       src={user.image}
                                       alt={user.display_name}
                                    />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">{user.display_name}</div>
                                 <div className="text-sm opacity-50">{user.role}</div>
                              </div>
                           </div>
                        </td>
                        {/* User Email */}
                        <td>{user.email}</td>
                        {/* User Role Dropdown */}
                        <td>
                           <select
                              className="select select-bordered w-full max-w-xs"
                              value={user.role} // Use the role from the backend
                              onChange={(e) => handleRoleChange(user._id, e.target.value)}
                           >
                              <option value="admin">Admin</option>
                              <option value="buyer">Buyer</option>
                              <option value="worker">Worker</option>
                           </select>
                        </td>
                        {/* User Coins */}
                        <td>{user.coin}🪙</td>
                        {/* Action Buttons */}
                        <td>
                           <button
                              className="btn btn-error"
                              onClick={() => handleDelete(user._id)}
                           >
                              Remove
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageUsersTable;
