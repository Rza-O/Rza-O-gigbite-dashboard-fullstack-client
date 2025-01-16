import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DatePicker from "react-datepicker";

const AddTaskForm = () => {
   const [uploadImage, setUploadImage] = useState({ image: { name: 'Upload button' } });
   const [startDate, setStartDate] = useState(new Date());
   const { register, handleSubmit, formState: { errors } } = useForm();
   const handleAddTask = async (data) => {
      console.log(data)
   }
   return (
      <div className="w-11/12 mx-auto">
         <form onSubmit={handleSubmit(handleAddTask)}>
            <div className="space-y-3">
               {/* Profile picture */}
               <div className=' p-4  w-full  m-auto rounded-lg flex-grow'>
                  <div className='file_upload px-5 py-3 relative border-4 border-dotted border-border rounded-lg'>
                     <div className='flex flex-col w-max mx-auto text-center'>
                        <label>
                           <input
                              {...register('image', { required: "Image is required" })}
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
                        {errors?.image && <p className='text-red-600 text-xs'>{errors?.image?.message}</p>}
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

               {/* Task title */}
               <div>
                  <label
                     className="mb-3 block font-medium text-black text-sm"
                     htmlFor="title"
                  >
                     Task Title
                  </label>
                  <input
                     {...register('task_title', { required: 'title is required' })}
                     className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                     id="task_title"
                     name='task_title'
                     placeholder="tile of your task"
                     type="text"
                  />
                  {errors?.task_title && <p className='text-red-600 text-xs'>{errors.task_title.message}</p>}
               </div>

               {/* Required workers */}
               <div>
                  <label
                     className="mb-3 block font-medium text-black text-sm"
                     htmlFor="Required Worker"
                  >
                     Required Workers
                  </label>
                  <input
                     {...register('required_workers', { required: 'required workers' })}
                     className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                     id="name"
                     name='required_workers'
                     placeholder="amount of workers needed"
                     type="number"
                  />
                  {errors?.required_workers && <p className='text-red-600 text-xs'>{errors.required_workers.message}</p>}
               </div>


               {/* Payable amounts */}
               <div className="w-full">
                  <label
                     className="mb-3 block font-medium text-black text-sm"
                     htmlFor="Payable Amount"
                  >
                     Payable Amount(each worker)
                  </label>
                  <input
                     {...register('payable_amount', { required: 'Amount is required' })}
                     className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                     id="name"
                     name='payable_amount'
                     placeholder="Amount to be paid for each worker..."
                     type="number"
                  />
                  {errors?.name && <p className='text-red-600 text-xs'>{errors.name.message}</p>}
               </div>
               
               

               {/* Task details */}
               <div>
                  <label
                     className="mb-3 block font-medium text-black text-sm"
                     htmlFor="Task details"
                  >
                     Task Details
                  </label>
                  <input
                     {...register('task_details', { required: 'details is required' })}
                     className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                     id="task_details"
                     name='task_details'
                     placeholder="write a short task details.."
                     type="text"
                  />
                  {errors?.task_details && <p className='text-red-600 text-xs'>{errors.task_details.message}</p>}
               </div>

               {/* Submission info */}
               <div>
                  <label
                     className="mb-3 block font-medium text-black text-sm"
                     htmlFor="Submission info"
                  >
                     Submission info
                  </label>
                  <input
                     {...register('submission_info', { required: 'info is required' })}
                     className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm"
                     id="submission_info"
                     name='submission_info'
                     placeholder="Type of proof after completion"
                     type="text"
                  />
                  {errors?.name && <p className='text-red-600 text-xs'>{errors.name.message}</p>}
               </div>


               {/* Completion date */}
               <div className="w-full">
                  <label
                     className="mb-3 block font-medium text-black text-sm"
                     htmlFor="name"
                  >
                     Completion Date
                  </label>
                  <DatePicker className="block h-12 w-full appearance-none rounded-xl bg-white px-4 py-2 text-primary-content placeholder-neutral-300 duration-200 focus:outline-none focus:ring-neutral-300 sm:text-sm" selected={startDate} onChange={(date) => setStartDate(date)} />
               </div>


               {/* submit */}
               <div className="flex items-center justify-center">
                  <button
                     className="btn btn-wide inline-flex h-12  items-center justify-center gap-3 rounded-xl bg-primary-dark px-5 py-3 font-medium text-white duration-200 hover:bg-primary-content focus:ring-2 focus:ring-border focus:ring-offset-2"
                     type="submit"
                  >
                     Add Task
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default AddTaskForm;