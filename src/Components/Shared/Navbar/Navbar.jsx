import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logos/primaryLogo.png'
import logoGray from '../../../assets/logos/logogray.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
   const [isScroll, setIsScroll] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (scrollY > 50) {
            setIsScroll(true)
         } else {
            setIsScroll(false)
         }
      })
   }, []);



   const publicLinks = <>
      <li><a className=''>Join as Developer</a></li>
   </>
   return (
      <div className={`${isScroll ? 'bg-primary-dark text-black font-semibold bg-opacity-35 backdrop-blur-lg shadow-sm dark' : 'text-white'} fixed top-0 z-50 navbar`}>
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
                     {publicLinks}
                  </ul>
               </div>
               {
                  isScroll ? <Link to='/'><img className='w-32' src={logoGray} alt="" /></Link> : <Link to='/'><img className='w-32' src={logo} alt="" /></Link>   
               }
            </div>
            
            <div className="navbar-end space-x-2">
               <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                     {publicLinks}
                  </ul>
               </div>
               <div className='space-x-3'>
                  <button className='btn btn-ghost'>Login</button>
                  <button className={`btn ${isScroll ? 'bg-secondary' : 'bg-primary-light'} border-none`}>Register</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;