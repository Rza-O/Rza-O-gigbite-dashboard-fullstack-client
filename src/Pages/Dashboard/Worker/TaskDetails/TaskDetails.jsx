import Loading from "@/Components/Shared/LoadingSpinner/Loading";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import DashboardTitle from "@/Components/Dashboard/Shared/Title/DashboardTitle";
import useAuth from "@/Hooks/useAuth";
import Swal from "sweetalert2";

const TaskDetails = () => {
   const { user } = useAuth();
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


   const handleSubmit = async (e) => {
      e.preventDefault();
      const submission_details = e.target.submission_worker.value;
      const worker_email = user?.email;
      const worker_name = user?.displayName;
      const submission_date = new Date().toISOString();

      const submissionData = {
         taskId: _id,
         payable_amount,
         task_title,
         worker_email,
         worker_name,
         submission_details,
         buyer_name: buyer.buyer_name,
         buyer_email: buyer.buyer_email,
         submission_date,
         status: 'pending'
      }

      // sending data to the db
      try {
         const { data } = await axiosSecure.post('/work-submit', submissionData);
         refetch();
         console.log(data)
         Swal.fire({
            title: "You have submitted successfully!",
            icon: 'success',
            showClass: {
               popup: `
         animate__animated
         animate__fadeInUp
         animate__faster
      `
            },
            hideClass: {
               popup: `
         animate__animated
         animate__fadeOutDown
         animate__faster
      `
            }
         });
      } catch (error) {
         console.log(error)
      }


   }



   return (
      <div className="my-6 w-11/12 mx-auto">
         <DashboardTitle title={'Task Details'} subtitle={'Here you get all information of a task'}></DashboardTitle>
         <div className="lg:items-start bg-base-200 min-h-screen mt-6 gap-6">
            <div className="hero-content flex-col xl:flex-row bg-background">
               <div className="text-center lg:text-left card border border-border p-6">
                  <h1 className="text-5xl font-bold text-primary-content">{task_title}</h1>
                  <p className="py-2">
                     {task_details}
                  </p>

                  <div className="flex items-center justify-center lg:block">
                     <img src={image} className="w-[400px] h-52 object-cover" alt="" />
                  </div>
                  <p className="py-2">
                     <span className="font-semibold font-surfer">Buyer Name:</span> {buyer.buyer_name}
                  </p>
                  <p className="py-2">
                     <span className="font-semibold font-surfer">Email:</span> {buyer.buyer_email}
                  </p>
                  <p className="py-2">
                     <span className="font-semibold font-surfer">Coins Amount:</span> {payable_amount}🪙
                  </p>
                  <p className="py-2">
                     <span className="font-semibold font-surfer">Last Submission Date:</span> {format(new Date(deadline), "P")}
                  </p>
                  <p className="py-2">
                     <span className="font-semibold font-surfer">Workers Required:</span> {required_workers}
                  </p>
                  <p className="py-3">
                     <span className="font-semibold font-surfer">Include Submission Item:</span> {submission_info}
                  </p>
               </div>

               {/* form */}
               <div className="card bg-base-100 w-full max-w-sm shrink-0 ml-5">
                  <form
                     onSubmit={handleSubmit}
                     className="card-body">
                     <h1 className="text-primary-content text-xl font-semibold">Submit Your Work For Approval</h1>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Submission Details</span>
                        </label>
                        <input type="text" name="submission_worker" placeholder="Put all required fields" className="input input-bordered" required />
                     </div>
                     <div className="form-control mt-6">
                        <button
                           disabled={!required_workers}
                           className="btn bg-secondary hover:bg-primary-dark transition duration-300">Submit</button>
                     </div>
                  </form>
               </div>



            </div>
         </div>
      </div>
   );
};

export default TaskDetails;