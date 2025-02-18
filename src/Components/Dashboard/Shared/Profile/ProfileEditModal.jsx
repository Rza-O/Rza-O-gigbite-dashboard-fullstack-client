import React, { useEffect, useRef, useState } from 'react';
import useUser from '@/Hooks/useUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '@/Hooks/useAxiosSecure';

const ProfileEditModal = ({ isModalOpen, setIsModalOpen }) => {
   const [userData] = useUser();
   const modalRef = useRef(null);
   const axiosSecure = useAxiosSecure()
   const queryClient = useQueryClient();

   // State for form fields
   const [formData, setFormData] = useState({
      image: userData?.image || '',
      name: userData?.name || '',
      mobile: userData?.mobile || '',
      email: userData?.email || '',
      location: userData?.location || '',
   });

   useEffect(() => {
      if (isModalOpen && modalRef.current) {
         modalRef.current.showModal();
      }
   }, [isModalOpen]);

   // Handle input change
   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   // Mutation for updating user info
   const updateUser = useMutation({
      mutationFn: async (updatedData) => {
         return axiosSecure.patch(`/user/${userData?.email}`, updatedData);
      },
      onSuccess: () => {
         queryClient.invalidateQueries(['user', userData?.email]);
         setIsModalOpen(false);
      },
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      updateUser.mutate(formData);
   };

   return (
      <dialog ref={modalRef} className="modal">
         <div className="modal-box">
            <form method="dialog">
               <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
               >
                  ✕
               </button>
            </form>
            <h3 className="font-bold text-lg">Edit Profile</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
               {/* Image URL */}
               <div>
                  <label className="block text-gray-700">Image URL</label>
                  <input type="text" name="image" value={formData.image} onChange={handleChange} className="input input-bordered w-full" placeholder="Enter Image URL" />
               </div>

               {/* Full Name */}
               <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="input input-bordered w-full" placeholder="Enter Full Name" />
               </div>

               {/* Mobile */}
               <div>
                  <label className="block text-gray-700">Mobile</label>
                  <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} className="input input-bordered w-full" placeholder="Enter Mobile Number" />
               </div>

               {/* Email (Non-editable) */}
               <div>
                  <label className="block text-gray-700">Email</label>
                  <input type="email" name="email" value={formData.email} className="input input-bordered w-full bg-gray-200" readOnly />
               </div>

               {/* Location */}
               <div>
                  <label className="block text-gray-700">Location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="input input-bordered w-full" placeholder="Enter Location" />
               </div>

               <button type="submit" className="btn bg-primary-dark hover:bg-secondary-dark text-white w-full">Update Profile</button>
            </form>
         </div>
      </dialog>
   );
};

export default ProfileEditModal;
