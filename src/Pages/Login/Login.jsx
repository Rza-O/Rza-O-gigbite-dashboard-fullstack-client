import CredentialsDrawer from '@/Components/Login/CredentialsDrawer';
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const { handleGoogleLogin, handleLogin } = useAuth();
   const axiosSecure = useAxiosSecure();
   const { register, handleSubmit, formState: { errors } } = useForm();
   const navigate = useNavigate();
   const [logging, setLogging] = useState(false);

   const handleSocialSignIn = async () => {
      setLogging(true);
      try {
         const response = await handleGoogleLogin();
         toast.success(`${response?.user?.displayName}, Welcome back!`)
         if (response.user) {
            const name = response.user?.displayName;
            const email = response.user?.email;
            const image = response.user?.photoURL;
            const role = 'worker';
            const userData = { name, email, image, role }
            const { data } = await axiosSecure.post(`/users/${email}`, userData);
            setLogging(false);
            navigate('/dashboard')
            // console.log(data)
         }

      } catch (error) {
         setLogging(false)
         toast.error(error.message)
         console.log(error)
      }
   }

   const loginHandler = async (data) => {
      setLogging(true)
      try {
         const login = await handleLogin(data.email, data.password);
         console.log(login)
         setLogging(false);
         toast.success(`${login?.user?.displayName}, Welcome back!`)
         navigate('/dashboard')
      } catch (error) {
         setLogging(false);
         toast.error('Uh oh! Please check your email & password again...')
         console.log(error)
      }
   }


   return (
      <div className=''>
         <section className=" relative flex size-full max-h-full items-center justify-center bg-[url('https://i.ibb.co.com/Vxx5QKk/loginBG.jpg')] bg-cover px-2 py-6 md:px-12 lg:justify-center lg:p-12 ">


            {/* content div */}
            <div className="relative z-10 flex flex-1 flex-col  rounded-3xl border-white/50 border-t bg-white/60 px-4 py-10 backdrop-blur-2xl sm:justify-center md:flex-none md:px-20 lg:rounded-r-none lg:border-t-0 lg:border-l lg:py-24">

               {/* content inside the card */}
               <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">

                  {/* Title and subtitle */}
                  <h1 className="font-semibold text-3xl text-neutral-900 tracking-tighter">
                     Complete tasks faster, <br />
                     <span className="text-neutral-600">with ease</span>
                  </h1>
                  <p className="mt-4 font-medium text-base text-neutral-500">
                     A quick and seamless way to manage tasks and earn rewards.
                  </p>

                  <div className='flex justify-center items-center'>
                     {/* You can open the modal using document.getElementById('ID').showModal() method */}
                     <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Users Credentials</button>
                     <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                           <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                           </form>
                           <div className='space-y-5'>
                              <div>
                                 <h2 className="text-lg text-black">Admin Email: shahreza.dev@gmail.com</h2>
                                 <h2 className="text-lg text-black">Admin Password: HappyCoding01</h2>
                              </div>
                              <div>
                                 <h2 className="text-lg text-black">Buyer Password: martin@gary.com</h2>
                                 <h2 className="text-lg text-black">Buyer Password: Shann007</h2>
                              </div>
                              <div>
                                 <h2 className="text-lg text-black">Worker Email: john@david.com</h2>
                                 <h2 className="text-lg text-black">Worker Password: Shann007</h2>
                              </div>
                           </div>
                        </div>
                     </dialog>
                  </div>

                  {/* google sign in button */}
                  {/* <div className='flex justify-center items-center'>
                        <CredentialsDrawer />
                     </div> */}
                  <div className="mt-8">
                     <button
                        onClick={handleSocialSignIn}
                        aria-label="Sign in with Google"
                        className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3 font-medium duration-200 hover:bg-white/50 focus:ring-2 focus:ring-primary-dark focus:ring-offset-2"
                        type="button"
                     >
                        <GoogleIcon className="size-6" />
                        <span>Sign in with Google</span>
                     </button>
                     {/* divider */}
                     <div className="relative py-3">
                        <div className="relative flex justify-center">
                           <span className="before:-translate-y-1/2 after:-translate-y-1/2 px-2 text-neutral-500 text-sm before:absolute before:top-1/2 before:left-0 before:h-px before:w-4/12 after:absolute after:top-1/2 after:right-0 after:h-px after:w-4/12 sm:after:bg-neutral-300 sm:before:bg-neutral-300">
                              Or continue with
                           </span>
                        </div>
                     </div>
                  </div>


                  <form onSubmit={handleSubmit(loginHandler)}>
                     <div className="space-y-3">
                        <div>
                           <label
                              className="mb-3 block font-medium text-black text-sm"
                              htmlFor="email"
                           >
                              Email
                           </label>
                           <input
                              {...register('email', { required: "Must input an email address" })}
                              className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                              id="name"
                              placeholder="Your Email"
                              type="email"
                           />
                           {errors?.email && <p className='text-red-600 text-xs'>{errors.email.message}</p>}
                        </div>
                        <div className="col-span-full">
                           <label
                              className="mb-3 block font-medium text-black text-sm"
                              htmlFor="password"
                           >
                              Password
                           </label>
                           <input
                              {...register('password', { required: "Must input a password" })}
                              className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                              id="password"
                              placeholder="Type password here..."
                              type="password"
                           />
                           {errors?.password && <p className='text-red-600 text-xs'>{errors.password.message}</p>}
                        </div>
                        <div className="col-span-full">
                           <button
                              className={`inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-primary-dark px-5 py-3 font-medium text-white duration-200 hover:bg-primary-content focus:ring-2 focus:ring-border focus:ring-offset-2 ${logging ? "cursor-not-allowed opacity-70" : "hover:bg-primary-content"
                                 }`}
                              type="submit"
                           >
                              {logging ? (
                                 <>
                                    <FaSpinner className="animate-spin" />
                                    logging in...
                                 </>
                              ) : (
                                 "Login"
                              )}
                           </button>
                        </div>
                     </div>
                     <div className="mt-6">
                        <p className="mx-auto flex text-center font-medium text-black text-sm leading-tight">
                           Do not have an account?
                           <a
                              className="ml-auto text-blue-800 hover:text-black"
                              href="/register"
                           >
                              Sign up now
                           </a>
                        </p>
                     </div>
                  </form>
               </div>
            </div >
         </section >
      </div >
   );
};

export default Login;


function GoogleIcon(props) {
   return (
      <svg
         height="100"
         viewBox="0 0 48 48"
         width="100"
         x="0px"
         xmlns="http://www.w3.org/2000/svg"
         y="0px"
         {...props}
      >
         <title>Google Logo</title>
         <path
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            fill="#FFC107"
         />
         <path
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            fill="#FF3D00"
         />
         <path
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            fill="#4CAF50"
         />
         <path
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            fill="#1976D2"
         />
      </svg>
   );
}