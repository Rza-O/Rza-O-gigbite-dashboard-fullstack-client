import { Input, Select } from '@headlessui/react';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddTaskForm = () => {
   const [uploadImage, setUploadImage] = useState({ image: { name: 'Upload button' } });
   const { register, handleSubmit, formState: {errors} } = useForm();
   const handleAddTask = async (data) => {
      console.log(data)
   }
   return (
      <div>
         <form onSubmit={handleSubmit(handleAddTask)}>
                     <div className="space-y-3">
                        {/* Profile picture */}
                        <div className=' p-4  w-full  m-auto rounded-lg flex-grow'>
                           <div className='file_upload px-5 py-3 relative border-4 border-dotted border-border rounded-lg'>
                              <div className='flex flex-col w-max mx-auto text-center'>
                                 <label>
                                    <input
                                       {...register('image', {required: "Image is required"})}
                                       onChange={(e) => {
                                          const file = e.target.files[0];
                                          if (file) {
                                             setUploadImage({
                                                image: file,
                                                url: URL.createObjectURL(file),
                                             });
                                          }
                                       }}
                                       className='text-sm cursor-pointer w-36 hidden'
                                       type='file'
                                       name='image'
                                       id='image'
                                       accept='image/*'
                                       hidden
                                    />
                                    
                                    <div className='bg-primary-dark text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-primary-content transition-colors duration-300 required'>
                                       {uploadImage?.image?.name}
                                    </div>
                                 </label>
                                 {errors?.image && <p className='text-red-600 text-xs'>{ errors?.image?.message}</p>} 
                              </div>
                           </div>
                        </div>
                        {
                           uploadImage && uploadImage.image?.size && (
                              <div className='flex items-center gap-5'>
                                 <img src={uploadImage?.url} className='w-20 mx-auto' alt="" />
                                 <p>Image Size: {uploadImage?.image?.size} Bytes</p>
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
                              {...register('name', {required: 'Name is required'})}
                              className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                              id="name"
                              name='name'
                              placeholder="Your name"
                              type="text"
                           />
                           {errors?.name && <p className='text-red-600 text-xs'>{errors.name.message}</p>} 
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
                              {...register('email', {required: true})}
                              className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                              id="email"
                              placeholder="Your email"
                              type="email"
                           />
                           {errors?.email && <p className='text-red-600 text-xs'>Email is required</p>} 
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
                              {...register('password', {
                                 required: "Password is required!",
                                 validate: {
                                    hasUpperCase: (value) =>
                                       /[A-Z]/.test(value) || "Must include at least one uppercase letter",
                                    hasLoweCase: (value) =>
                                       /[a-z]/.test(value) || "Must include at least one lowercase letter",
                                    isLongEnough: (value) =>
                                       value.length >= 6 || "Must be at least 6 characters long",
                                 }
                              })}
                              className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                              id="password"
                              placeholder="Type password here..."
                              type="password"
                           />
                           {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
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
                              {...register('role', {required: "You need to choose a role"})}
                              className='block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-black placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm'
                              name="role" aria-label="Role"
                              defaultValue=''
                           >
                              <option value="" disabled hidden>Choose your role</option>
                              <option value="worker">Worker</option>
                              <option value="buyer">Buyer</option>
                           </Select>
                           {errors.role && <p className='text-xs text-red-500'>{errors.role.message}</p>}
                        </div>

                        {/* submit */}
                        <div className="col-span-full">
                           <button
                              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-primary-dark px-5 py-3 font-medium text-white duration-200 hover:bg-primary-content focus:ring-2 focus:ring-border focus:ring-offset-2"
                              type="submit"
                           >
                              Sign Up
                           </button>
                        </div>
                     </div>
                  </form>
      </div>
   );
};

export default AddTaskForm;