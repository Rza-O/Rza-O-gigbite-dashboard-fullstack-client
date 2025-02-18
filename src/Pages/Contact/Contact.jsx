import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import contactBG from '../../../src/assets/Globalization-bro.svg';

const Contact = () => {

   const handleSubmit = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      toast.success(`We have received your mail, ${name}! Be with you shortly.`)
   }


   return (
      <div className='w-full min-h-screen flex items-center justify-center  bg-[url("../../../src/assets/Contour_Line.svg")]  bg-cover '>
         <div className="container mx-auto flex justify-center items-center">
            <div className="xl:w-1/2 hidden xl:flex ">
               <img src={contactBG} className="w-full h-full object-fill" alt="" />
            </div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="max-w-4xl mx-auto px-6 py-12 w-full xl:w-1/2"
            >
               <Card className="relative z-10 flex flex-1 flex-col rounded-3xl border-white/50 border-t bg-white/60 px-4 py-10 backdrop-blur-2xl sm:justify-center md:flex-none md:px-20 lg:rounded-r-none lg:border-t-0 lg:border-l lg:py-24">
                  <CardHeader>
                     <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <p className="text-gray-600 text-lg">
                        Need help? Have a question? Reach out to our support team and we’ll get back to you as soon as possible.
                     </p>
                     <div className="mt-6 space-y-4">
                        <form action="" className="space-y-4" onSubmit={handleSubmit}>
                           <input name="name" required placeholder="Your Name" className="input input-bordered w-full" />
                           <input type="email" placeholder="Your Email" className="input input-bordered w-full" required/>
                           <textarea required placeholder="Your Message" className="w-full textarea textarea-bordered" rows={5}/>
                           <button type="submit" className="w-full bg-primary-dark text-white hover:bg-secondary-dark btn">Send Message</button>
                        </form>
                     </div>
                  </CardContent>
               </Card>
            </motion.div>
         </div>
      </div>
   );
};
export default Contact;