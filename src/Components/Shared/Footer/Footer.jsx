import React from 'react';
import logo from '../../../assets/logos/gigbite-high-resolution-logo-transparent.png';
import { Link } from 'react-router-dom';
import { FaMapPin } from 'react-icons/fa';
import { HiPhone } from "react-icons/hi2";
import { MdEmail } from 'react-icons/md';


const Footer = () => {
   return (
      <footer className="px-4 divide-y bg-secondary-content text-gray-800">
         <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
               <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                  <div className="flex items-center justify-center h-12 rounded-full ">
                     <img className='w-40'  src={logo} alt="" />
                  </div>
               </a>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">

               <div className="space-y-3">
                  <h3 className="tracking-wide uppercase text-gray-900">Quick Links</h3>
                  <ul className="space-y-1">
                     <li>

                        <Link to='/'>Home</Link>
                     </li>
                     <li>
                        <Link to='/available-foods'>Available Foods</Link>
                     </li>
                     <li>
                        <Link to='/our-work'>Our Work</Link>
                     </li>
                     <li>
                        <Link to='/contact'>Contact</Link>
                     </li>
                  </ul>
               </div>

               <div className="space-y-3">
                  <h3 className="uppercase text-gray-900">Contact</h3>

                  <p className='flex items-center gap-1'><span className='font-semibold'><FaMapPin /></span> 221B, Baker St, London, UK</p>
                  <p className='flex items-center gap-1'><HiPhone className='font-semibold' /> +8801970853705</p>
                  <p className='flex items-center gap-1'><MdEmail className='font-semibold text-base' /> contact@ShareAMeal.co</p>
               </div>

               <div className="order-2 md:order-none flex w-full md:max-w-xs items-center justify-center md:justify-end gap-4">
                  <Link
                     href="#"
                     className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
                     prefetch={false}
                  >
                     <span className="sr-only">Twitter</span>
                     <TwitterIcon className="w-4 h-4 fill-twitter" />
                  </Link>
                  <Link
                     href="#"
                     className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
                     prefetch={false}
                  >
                     <span className="sr-only">GitHub</span>
                     <GithubIcon className="w-4 h-4 fill-github" />
                  </Link>
                  <Link
                     href="#"
                     className="inline-flex h-8 items-center rounded-full border border-gray-200 dark:border-gray-800 shadow-sm w-8 hover:scale-125 hover:rotate-12 transition-transform p-2"
                     prefetch={false}
                  >
                     <span className="sr-only">YouTube</span>
                     <PlayIcon className="w-4 h-4 fill-youtube" />
                  </Link>
               </div>
            </div>
         </div>
         <div className="py-6 text-sm text-center text-gray-600">© 2024 GigBite Co. All rights reserved.</div>
      </footer>
   );
};

export default Footer;

function GithubIcon(props) {
   return (
      <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
         <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
   )
}


function PlayIcon(props) {
   return (
      <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <polygon points="6 3 20 12 6 21 6 3" />
      </svg>
   )
}


function TwitterIcon(props) {
   return (
      <svg
         {...props}
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
      >
         <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
   )
}