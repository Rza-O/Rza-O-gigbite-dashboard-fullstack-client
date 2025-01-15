import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logos/primaryLogo.png'
import logoGray from '../../../assets/logos/logogray.png'
import { Link, useLocation } from 'react-router-dom';
import useAuth from '@/Hooks/useAuth';

const Navbar = () => {
   const { user, logOut } = useAuth();

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
      <li><Link to='https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-Rza-O'>Join as Developer</Link></li>
   </>

   const privateLinks = <>
      <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to='https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-Rza-O'>Join as Developer</Link></li>
      <li><Link>Coins</Link></li>
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
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
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
                              <img
                                 referrerPolicy='no-referrer'
                                 alt="Tailwind CSS Navbar component"
                                 src={user?.photoURL} />

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