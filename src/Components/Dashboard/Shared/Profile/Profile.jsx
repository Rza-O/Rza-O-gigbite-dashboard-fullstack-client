import useUser from '@/Hooks/useUser';
import clouds from '../../../../assets/Cloudy.svg'
import Loading from '@/Components/Shared/LoadingSpinner/Loading';

const Profile = () => {
   const [userData, refetch, isLoading] = useUser();

   console.log(userData, 'hello profile')
   if (isLoading) return <Loading />

   return (
      <div>
         {/* header part */}
         <div>
            <div class="w-full h-[250px]">
               <img src={clouds} class="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div class="flex flex-col items-center -mt-20">
               <img src={userData?.image} class="w-24 avatar border-4 border-white rounded-full" />
               <div class="flex items-center space-x-2 mt-2">
                  <p class="text-2xl">{ userData?.name}</p>
                  <span class="bg-blue-500 rounded-full p-1" title="Verified">
                     <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                     </svg>
                  </span>
               </div>
               <p class="text-gray-700 capitalize">{userData?.role}</p>
               <p class="text-sm text-gray-500">Coin Available: { userData?.coin}🪙</p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
               <div class="flex items-center space-x-4 mt-2">
                  <button class="flex items-center bg-primary-dark hover:bg-secondary-dark text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                     </svg>
                     <span>Edit</span>
                  </button>

               </div>
            </div>
         </div>
         {/* personal info */}
         <div className=''>
            <div class="my-4 flex flex-col  2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
               <div class="w-full flex flex-col  2xl:w-1/3">
                  <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                     <h4 class="text-xl text-gray-900 font-bold">Personal Info</h4>
                     <ul class="mt-2 text-gray-700 ">
                        {/* Name */}
                        <li class="flex border-y py-2">
                           <span class="font-bold w-24">Full name:</span>
                           <span class="text-gray-700">{ userData?.name}</span>
                        </li>

                        <li class="flex border-b py-2">
                           <span class="font-bold w-24">Mobile:</span>
                           <span class="text-gray-700">{userData?.mobile ? userData?.mobile : "Not Available"}</span>
                        </li>
                        <li class="flex border-b py-2">
                           <span class="font-bold w-24">Email:</span>
                           <span class="text-gray-700">{ userData?.email}</span>
                        </li>
                        <li class="flex border-b py-2">
                           <span class="font-bold w-24">Location:</span>
                           <span class="text-gray-700">{userData?.location ? userData?.location : "Not Available"}</span>
                        </li>
                     </ul>
                  </div>

               </div>
            </div>
         </div>
      </div>

   );
};

export default Profile;