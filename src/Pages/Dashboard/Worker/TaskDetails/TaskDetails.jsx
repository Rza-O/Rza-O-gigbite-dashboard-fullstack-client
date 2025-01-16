import Loading from "@/Components/Shared/LoadingSpinner/Loading";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import DashboardTitle from "@/Components/Dashboard/Shared/Title/DashboardTitle";

const TaskDetails = () => {
   const { id } = useParams();
   console.log(id)
   const axiosSecure = useAxiosSecure();
   const { data: taskDetails, refetch, isLoading } = useQuery({
      queryKey: ['AllTasks', id],
      queryFn: async () => {
         const { data } = await axiosSecure(`/task/${id}`);
         return data;
      }
   })
   if (isLoading) return <Loading></Loading>
   console.log(taskDetails)
   const { task_title, buyer, deadline, payable_amount, required_workers, image, _id, task_details, submission_info } = taskDetails || {};
   return (
      <div className="my-6 w-11/12 mx-auto">
         <DashboardTitle title={'Task Details'} subtitle={'Here you get all information of a task'}></DashboardTitle>
         <div className="lg:items-start bg-base-200 min-h-screen mt-6 gap-6">
            <div className="hero-content flex-col xl:flex-row bg-background">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">{task_title}</h1>
                  <p className="py-2">
                     {task_details}
                  </p>
                  
                  <div className="flex items-center justify-center lg:block">
                     <img src={image} className="w-[400px] h-52 object-cover" alt="" />
                  </div>
                  <p className="py-2">
                     Buyer Name: {buyer.buyer_name}
                  </p>
                  <p className="py-2">
                     Email: {buyer.buyer_email}
                  </p>
                  <p className="py-2">
                     Coins Amount: {payable_amount}🪙
                  </p>
                  <p className="py-2">
                     Last Submission Date: {format(new Date(deadline), "P")}
                  </p>
                  <p className="py-2">
                     Workers Required: {required_workers}
                  </p>
                  <p className="py-3">
                     Include Submission Item: {submission_info}
                  </p>
               </div>


               <div className="card bg-base-100 w-full max-w-sm shrink-0 ml-5">
                  <form className="card-body">
                     <h1>Submit Your Work For Approval</h1>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TaskDetails;