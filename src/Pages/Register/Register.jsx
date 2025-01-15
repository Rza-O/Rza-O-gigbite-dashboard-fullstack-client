import React, { useState } from 'react';
import { Select } from '@headlessui/react'
import { useForm } from 'react-hook-form';
import { imageUpload } from '@/API/utils';
import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const axiosPublic = useAxiosPublic();
   const [uploadImage, setUploadImage] = useState({ image: { name: 'Upload button' } });
   const { updateUserProfile, handleEmailRegister } = useAuth();
   const { register, handleSubmit } = useForm();
   const navigate = useNavigate();

   // name
   // email
   // image
   // role

   const handleRegister = async (data) => {
      const name = data.name;
      const email = data.email;
      const role = data.role;
      const password = data.password;
      const photo = uploadImage.image;
      const image = await imageUpload(photo);
      

      // make the data
      const userData = {name, image, email, role }
      console.log(userData)
      try {
         const result = await handleEmailRegister(email, password);
         await updateUserProfile(
            {
               displayName: name,
               photoURL: image
            }
         )
         await axiosPublic.post(`/users/${email}`, userData)
         toast.success('You have been Signed up')
         navigate('/')
      } catch (error) {
         console.log(error);
      }
   }


   return (
      <div className=''>
         <section className=" relative flex size-full max-h-full items-center justify-center bg-[url('https://pixabay.com/get/g584c6d5ae25b7f77952eb8be7d25b9dcb7c54d5b40f7b1da0a9d2133d1b9d997632637610782567410520ecd78c3f92dbc85db6e13e0203371349e875c0cb546_1920.jpg')] bg-cover px-2 py-6 md:px-12 lg:justify-center lg:p-12 ">

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

                  {/* divider */}
                  <div className="mt-8">
                     <div className="relative py-3">
                        <div className="relative flex justify-center">
                           <span className="before:-translate-y-1/2 after:-translate-y-1/2 px-2 text-neutral-500 text-sm before:absolute before:top-1/2 before:left-0 before:h-px before:w-4/12 after:absolute after:top-1/2 after:right-0 after:h-px after:w-4/12 sm:after:bg-neutral-300 sm:before:bg-neutral-300">

                           </span>
                        </div>
                     </div>
                  </div>


                  <form onSubmit={handleSubmit(handleRegister)}>
                     <div className="space-y-3">
                        {/* Profile picture */}
                        <div className=' p-4  w-full  m-auto rounded-lg flex-grow'>
                           <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                              <div className='flex flex-col w-max mx-auto text-center'>
                                 <label>
                                    <input
                                       {...register('image')}
                                       onChange={(e) => setUploadImage({
                                          image: e.target.files[0],
                                          url: URL.createObjectURL(e.target.files[0])
                                       })}
                                       className='text-sm cursor-pointer w-36 hidden'
                                       type='file'
                                       name='image'
                                       id='image'
                                       accept='image/*'
                                       hidden
                                    />
                                    <div className='bg-lime-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-lime-500'>
                                       {uploadImage?.image?.name}
                                    </div>
                                 </label>
                              </div>
                           </div>
                        </div>
                        {
                           uploadImage && uploadImage.image?.size && (
                              <div className='flex items-center gap-5'>
                                 <img src={uploadImage?.url} className='w-20 mx-auto' alt="" />
                                 {/* <p>Image Size: {uploadImage?.image?.size} Bytes</p> */}
                              </div>
                           )
                        }

                        {/* name */}
                        <div>
                           <label
                              className="mb-3 block font-medium text-black text-sm"
                              htmlFor="name"
                           >
                              Name
                           </label>
                           <input
                              {...register('name')}
                              className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-amber-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                              id="name"
                              name='name'
                              placeholder="Your name"
                              type="text"
                           />
                        </div>
                        {/* email */}
                        <div>
                           <label
                              className="mb-3 block font-medium text-black text-sm"
                              htmlFor="email"
                           >
                              Email
                           </label>
                           <input
                              name='email'
                              {...register('email')}
                              className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-amber-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                              id="email"
                              placeholder="Your email"
                              type="email"
                           />
                        </div>

                        {/* password */}
                        <div className="col-span-full">
                           <label
                              className="mb-3 block font-medium text-black text-sm"
                              htmlFor="password"
                           >
                              Password
                           </label>
                           <input
                              {...register('password')}
                              className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-amber-500 placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                              id="password"
                              placeholder="Type password here..."
                              type="password"
                           />
                        </div>
                        {/* role selector */}
                        <div className="col-span-full">
                           <label
                              className="mb-3 block font-medium text-black text-sm"
                              htmlFor="password"
                           >
                              Select Your Role
                           </label>
                           <Select
                              {...register('role')}
                              className='block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-black placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm'
                              name="role" aria-label="Role"

                           >
                              <option value="worker">Worker</option>
                              <option value="buyer">Buyer</option>
                           </Select>

                        </div>

                        {/* submit */}
                        <div className="col-span-full">
                           <button
                              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-neutral-900 px-5 py-3 font-medium text-white duration-200 hover:bg-neutral-700 focus:ring-2 focus:ring-black focus:ring-offset-2"
                              type="submit"
                           >
                              Sign Up
                           </button>
                        </div>
                     </div>

                     <div className="mt-6">
                        <p className="mx-auto flex text-center font-medium text-black text-sm leading-tight">
                           Already have an account?
                           <a
                              className="ml-auto text-amber-500 hover:text-black"
                              href="/login"
                           >
                              Sign In now
                           </a>
                        </p>
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Register;


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