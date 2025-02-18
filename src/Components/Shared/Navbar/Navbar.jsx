import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logos/primaryLogo.png'
import logoGray from '../../../assets/logos/logogray.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import useAuth from '@/Hooks/useAuth';
import defaultAvatar from '../../../assets/avatar.png'
import useUser from '@/Hooks/useUser';

const Navbar = () => {
   const { user, logOut } = useAuth();
   const [userData] = useUser();

   const [isScroll, setIsScroll] = useState(false);
   const location = useLocation();
   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (scrollY > 50) {
            setIsScroll(true)
         } else {
            setIsScroll(false)
         }
      })
   }, []);

   const handleLogOut = () => {
      logOut();
   }



   const publicLinks = <>
      <li><NavLink className={({ isActive }) =>
      isActive ? "focus:text-secondary-dark" : "hover:text-secondary-dark"} to={'/'}>Home</NavLink></li>
      <li><NavLink className={({ isActive }) =>
         isActive ? "focus:text-secondary-dark" : "hover:text-secondary-dark"} to={'/about'}>About</NavLink></li>
      <li><NavLink className={({ isActive }) =>
      isActive ? " focus:text-secondary-dark" : "hover:text-secondary-dark"} to={'/contact'}>Contact </NavLink></li>
   </>

   const privateLinks = <>
      <li><NavLink className={({ isActive }) =>
         isActive ? "focus:text-secondary-dark" : "hover:text-secondary-dark"} to={'/'}>Home</NavLink></li>
      <li><NavLink className={({ isActive }) =>
         isActive ? "focus:text-secondary-dark" : "hover:text-secondary-dark"} to={'/about'}>About</NavLink></li>
      <li><NavLink className={({ isActive }) =>
         isActive ? " focus:text-secondary-dark" : "hover:text-secondary-dark"} to={'/contact'}>Contact </NavLink></li>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='https://github.com/Rza-O/Rza-O-gigbite-dashboard-fullstack-client'>Join as Developer</Link></li>
      <li><Link to='/dashboard'>🪙{userData?.coin}</Link></li>
   </>



   return (
      <div
         className={`${location.pathname === '/' ? `${isScroll ? 'bg-primary-dark text-black font-semibold bg-opacity-35 backdrop-blur-lg shadow-sm dark' : 'text-white'} fixed top-0 z-50 navbar` : `${isScroll ? 'bg-primary-dark text-black font-semibold bg-opacity-35 backdrop-blur-lg shadow-sm dark fixed top-0 z-50' : 'bg-primary-dark text-white font-semibold'} navbar`}
         `}>
         <div className='navbar container mx-auto md:px-4 2xl:px-0 '>
            <div className="navbar-start">
               <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                           d="M4 6h16M4 12h8m-8 6h16" />
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box text-primary-content mt-3 w-52 p-2 shadow z-50">
                     {user ? privateLinks : publicLinks}
                  </ul>
               </div>
               <Link to='/'>
                  <img
                     className='w-32'
                     src={location.pathname === '/' ? (isScroll ? logoGray : logo) : logoGray} alt="Logo" />
               </Link>
               {/* {
                  isScroll ? <Link to='/'><img className='w-32' src={logoGray} alt="" /></Link> : <Link to='/'><img className='w-32' src={logo} alt="" /></Link>   
               } */}
            </div>

            <div className="navbar-end space-x-2">
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                     {user ? privateLinks : publicLinks}
                  </ul>
               </div>
               {
                  user ? (
                     <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                           <div className="w-10 rounded-full">
                              {user?.photoURL ? <img
                                 referrerPolicy='no-referrer'
                                 alt="Tailwind CSS Navbar component"
                                 src={user?.photoURL} /> :
                                 <img src={defaultAvatar} alt="" />
                              }

                           </div>
                        </div>
                        <ul
                           tabIndex={0}
                           className="menu menu-sm dropdown-content bg-background text-base-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                           <li onClick={handleLogOut}><a>Logout</a></li>
                        </ul>
                     </div>
                  ) : (
                     <div className='space-x-3'>
                        <Link to='/login'>
                           <button className='btn btn-ghost'>Login</button>
                        </Link>
                        <Link to='/register'>
                           <button className={`btn ${isScroll ? 'bg-secondary' : 'bg-primary-light'} border-none`}>Register</button>
                        </Link>
                     </div>
                  )
               }
            </div>
         </div>
      </div>
   );
};

export default Navbar;