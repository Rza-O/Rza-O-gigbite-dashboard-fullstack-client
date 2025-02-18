import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserFriends, FaCoins } from "react-icons/fa";
import whyUsImg from '../../../assets/whyUs.svg'

const WhyChooseUs = () => {
   return (
      <section className="pt-10 overflow-hidden">
         <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">


            <motion.div
               className="space-y-5"
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7 }}
            >
               <h4 className="text-sm font-bold uppercase text-primary-dark tracking-widest">
                  Why Choose GigBite
               </h4>
               <h2 className="text-3xl md:text-4xl font-extrabold text-primary-content leading-tight">
                  We Go the <span className="text-primary-dark">Extra Mile</span> for Your Success
               </h2>
               <p className="text-gray-600">
                  GigBite is a dynamic micro-task platform that connects skilled freelancers
                  and innovative buyers. We prioritize secure payments, transparent task
                  management, and a supportive community to ensure you get work done
                  efficiently and reliably.
               </p>


               <div className="space-y-4 mt-6">
                  {/* Item 1 */}
                  <motion.div
                     className="flex items-center gap-4"
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 }}

                  >
                     <div className="text-secondary-dark text-3xl">
                        <FaShieldAlt />
                     </div>
                     <div>
                        <h5 className="text-lg font-semibold">Secure Coin System</h5>
                        <p className="text-gray-600">Enjoy safe transactions with our coin-based payment model.</p>
                     </div>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div
                     className="flex items-center gap-4"
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.3 }}

                  >
                     <div className="text-secondary-dark text-3xl">
                        <FaUserFriends />
                     </div>
                     <div>
                        <h5 className="text-lg font-semibold">Real-Time Collaboration</h5>
                        <p className="text-gray-600">Buyers and freelancers connect instantly for faster results.</p>
                     </div>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div
                     className="flex items-center gap-4"
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.5, delay: 0.4 }}

                  >
                     <div className="text-secondary-dark text-3xl">
                        <FaCoins />
                     </div>
                     <div>
                        <h5 className="text-lg font-semibold">Flexible Earnings</h5>
                        <p className="text-gray-600">Withdraw or reinvest coins—your earnings, your choice.</p>
                     </div>
                  </motion.div>
               </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
               className="flex justify-center md:justify-end"
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7 }}
            >
               <img
                  src={whyUsImg}
                  alt="Why choose GigBite illustration"
                  className=" max-w-full h-auto"
               />
            </motion.div>
         </div>
      </section>
   );
};

export default WhyChooseUs;
