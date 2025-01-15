import React from 'react';
import { Sidebar } from '../Sidebar/Common/Sidebar';
import useUser from '@/Hooks/useUser';

const DashboardNavbar = () => {
   const [userData] = useUser();
   console.log(userData)

   return (
      <div className="drawer">
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
               {/* <div className="mx-2 flex-1 px-2">Navbar Title</div> */}
               <div className=" navbar-end flex-1">
                  <ul className="menu menu-horizontal flex items-center">
                     {/* Navbar menu content here */}

                     {/* content */}
                     {/* <div>
                        <div className='flex'>
                           <p>Coin: </p>
                           <p>Role: </p>
                           <p>User Name</p>
                        </div>
                        <div></div>
                     </div> */}
                     {/* <div className='flex gap-3 mr-3'>
                        <li>Coin: <span className='font-semibold'>50🪙</span></li>
                        <li>Role: <span className='font-semibold'>Worker</span></li>
                        <li>Name: <span className='font-semibold'>Sherlock Holmes</span></li>
                     </div> */}
                     <div className='hidden lg:flex font-ubuntu'>
                        <li><a>Name: <span className='font-semibold'>{userData?.name}</span></a></li>
                        <li><a>Role: <span className='font-semibold'>{userData?.role}</span></a></li>
                        {userData?.role === 'admin' || <li><a>Coin: <span className='font-semibold'>{userData?.coin}🪙</span></a></li>}
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
                           className=" lg:hidden menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           {userData?.role === 'admin' || <li><a>Coin: <span className='font-semibold'>{userData?.coin}🪙</span></a></li>}
                           <li><a>Name: <span className='font-semibold'>{userData?.name}</span></a></li>
                           <li><a>Role: <span className='font-semibold'>{userData?.role}</span></a></li>
                        </ul>
                     </div>
                     {/* <li><a>Navbar Item 1</a></li> */}

                     <div className="dropdown dropdown-end">
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
                              <span className="badge badge-xs badge-secondary indicator-item"></span>
                           </div>
                        </div>
                        <div
                           tabIndex={0}
                           className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                           <div className="card-body">
                              <span className="text-lg font-bold">8 Items</span>
                              <span className="text-info">Subtotal: $999</span>
                              <div className="card-actions">
                                 <button className="btn btn-primary btn-block">View cart</button>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <li><a>Navbar Item 2</a></li> */}

                  </ul>
               </div>
            </div>

         </div>
         <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
               {/* Sidebar content here */}
               {/* <li><a>Sidebar Item 1</a></li>
               <li><a>Sidebar Item 2</a></li> */}
               <Sidebar></Sidebar>
            </ul>
         </div>
      </div>
   );
};

export default DashboardNavbar;