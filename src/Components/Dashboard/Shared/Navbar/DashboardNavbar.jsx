import React from 'react';
import { Sidebar } from '../Sidebar/Common/Sidebar';
import useUser from '@/Hooks/useUser';
import { format } from 'date-fns'
import { GrUserAdmin } from 'react-icons/gr';
import { FaUserAlt } from 'react-icons/fa';
import { FaUserGear } from "react-icons/fa6";
import { CiCoinInsert } from "react-icons/ci";
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { data, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';

const DashboardNavbar = () => {
   const [userData, isLoading] = useUser();
   const axiosSecure = useAxiosSecure();
   const navigate = useNavigate();

   // fetching all the notification from db
   const { data: notifications = [], refetch } = useQuery({
      queryKey: ['notifications', userData?.email],
      enabled: !!isLoading && !!userData?.email,
      queryFn: async () => {
         const { data } = await axiosSecure(`/notifications/${userData?.email}`)
         return data;
      }
   });

   // marking notification as read 
   const handleMarkAsRead = useMutation({
      mutationFn: (id) => axiosSecure.patch(`/notifications/read/${id}`),
      onSuccess: () => refetch(),
   })

   // handle notification click
   const handleNotificationClick = (notification) => {
      handleMarkAsRead.mutate(notification._id);
      navigate(notification.actionRoute)
   }

   // keeping notification dropdown clean to only show unread notifications for better ui
   const unreadCount = notifications.filter((n) => n.status === 'unread').length;


   console.log(notifications)

   return (
      <div className="drawer backdrop-blur-lg bg-primary-light">
         <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="navbar bg-base-300 w-full">
               <div className="flex-none lg:hidden">
                  <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current">
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h16M4 18h16"></path>
                     </svg>
                  </label>
               </div>
               <div className=" navbar-end flex-1">
                  <ul className="menu menu-horizontal flex items-center gap-2">
                     {/* Navbar menu content here */}

                     <div className='hidden lg:flex justify-center items-center font-ubuntu gap-4'>
                        <a className='flex gap-1'><FaUserAlt className='text-lg' /> <span className='font-semibold'>{userData?.name}</span></a>

                        <a className='flex gap-1'><FaUserGear className='text-xl' /> <span className='font-semibold uppercase'>{userData?.role}</span></a>

                        {userData?.role === 'admin' || <a className='flex gap-1'>🪙<span className='font-semibold'>{userData?.coin}</span></a>}
                     </div>

                     {/* avatar */}
                     <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                           <div className="w-10 rounded-full">
                              <img
                                 alt="Tailwind CSS Navbar component"
                                 src={userData.image} />
                           </div>
                        </div>
                        <ul
                           tabIndex={0}
                           className=" lg:hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-5 shadow gap-2">
                           {userData?.role === 'admin' || <li><a>Coin: <span className='font-semibold'>{userData?.coin}🪙</span></a></li>}
                           <a>Name: <span className='font-semibold'>{userData?.name}</span></a>
                           <a>Role: <span className='font-semibold'>{userData?.role}</span></a>
                        </ul>
                     </div>

                     {/* indicator will be hidden and there will be message 'no new notification and if there's unread notification then the indicator will be shown' */}
                     {userData?.role === 'admin' || 
                        <div className="dropdown dropdown-end ">
                           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                              <div className="indicator">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       strokeWidth="2"
                                       d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                 </svg>
                                 {unreadCount > 0 && <span className="badge badge-xs badge-secondary indicator-item"></span>}
                              </div>
                           </div>
                           <div
                              tabIndex={0}
                              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                              <div className="card-body ">
                                 {/* this is where notification body will be */}
                                 {
                                    notifications.length > 0 ? (
                                       <ul className='max-h-48 overflow-y-auto divide-y divide-gray-300'>
                                          {
                                             notifications.map((notification) => (
                                                <li
                                                   className={`py-2 px-2 rounded-lg cursor-pointer ${notification?.status === 'unread' ? 'hover:bg-primary/30' : ''}`}
                                                   key={notification._id}
                                                   onClick={() => handleNotificationClick(notification)}
                                                >
                                                   <div className='flex flex-col'>
                                                      <p>{notification?.message}</p>
                                                      <small className='text-gray-700'>{format(new Date(notification?.time), "P")}</small>
                                                   </div>
                                                </li>
                                             ))
                                          }
                                       </ul>
                                    ) : (
                                       <p className="text-sm text-black">No new notifications</p>
                                    )
                                 }

                              </div>
                           </div>
                        </div>
                     }
                     {/* <li><a>Navbar Item 2</a></li> */}

                  </ul>
               </div>
            </div>

         </div>
         <div className="drawer-side lg:hidden z-50 fixed">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-[#e5e6e6]  min-h-full w-80 ">
               <Sidebar></Sidebar>
               {/* Sidebar content here */}
               {/* <li><a>Sidebar Item 1</a></li>
               <li><a>Sidebar Item 2</a></li> */}
            </ul>
         </div>
      </div>
   );
};

export default DashboardNavbar;