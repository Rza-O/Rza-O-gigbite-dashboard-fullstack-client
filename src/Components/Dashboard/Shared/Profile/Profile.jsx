import useUser from '@/Hooks/useUser';
import clouds from '../../../../assets/Cloudy.svg';
import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import ProfileEditModal from './ProfileEditModal';
import { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Profile = () => {
   const [userData, refetch, isLoading] = useUser();
   const [isModalOpen, setIsModalOpen] = useState(false);

   if (isLoading) return <Loading />;

   return (
      <div>
         {/* Header Section */}
         <div>
            <div className="w-full h-[250px]">
               <img src={clouds} className="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div className="flex flex-col items-center -mt-20">
               <img src={userData?.image} className="w-24 avatar border-4 border-white rounded-full" />
               <div className="flex items-center space-x-2 mt-2">
                  <p className="text-2xl">{userData?.name}</p>
                  <span className="bg-blue-500 rounded-full p-1" title="Verified">
                     <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                     </svg>
                  </span>
               </div>
               <p className="text-gray-700 capitalize">{userData?.role}</p>
               <p className="text-sm text-gray-500">Coin Available: {userData?.coin}🪙</p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
               <div class="flex items-center space-x-4 mt-2">
                  <button onClick={() => setIsModalOpen(true)} class="flex items-center bg-primary-dark hover:bg-secondary-dark text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                     </svg>
                     <span>Edit</span>
                  </button>

               </div>
            </div>
         </div>

         {/* Personal Info */}
         <div className="w-11/12 mx-auto">
            <div className="my-6 flex flex-col 2xl:flex-row gap-6 justify-center items-center">
               <div className="w-full 2xl:w-1/3">
                  <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                     <h4 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                        <FaUser className="text-blue-500" /> Personal Info
                     </h4>

                     <ul className="mt-4 text-gray-700">
                        {/* Full Name */}
                        <li className="flex items-center gap-3 border-b py-3">
                           <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
                              <FaUser className="w-5 h-5" />
                           </span>
                           <span className="font-semibold">Full Name:</span> {userData?.name}
                        </li>

                        {/* Mobile */}
                        <li className="flex items-center gap-3 border-b py-3">
                           <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                              <FaPhone className="w-5 h-5" />
                           </span>
                           <span className="font-semibold">Mobile:</span> {userData?.mobile || "Not Available"}
                        </li>

                        {/* Email */}
                        <li className="flex items-center gap-3 border-b py-3">
                           <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600">
                              <FaEnvelope className="w-5 h-5" />
                           </span>
                           <span className="font-semibold">Email:</span> {userData?.email}
                        </li>

                        {/* Location */}
                        <li className="flex items-center gap-3 border-b py-3">
                           <span className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                              <FaMapMarkerAlt className="w-5 h-5" />
                           </span>
                           <span className="font-semibold">Location:</span> {userData?.location || "Not Available"}
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>


         {/* Edit Modal */}
         {isModalOpen && <ProfileEditModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
      </div>
   );
};

export default Profile;
