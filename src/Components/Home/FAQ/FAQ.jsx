import React from 'react';
import { motion } from "motion/react";

const FAQ = () => {
   return (
      <div className='2xl:container  mx-auto lg:flex my-8 gap-8 items-center space-y-6 w-11/12 pb-20'>
         {/* text part */}
         <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 0.5, delay: 0.3}}
            className='space-y-3 w-full text-center lg:w-1/2 '>
            <h2 className='text-5xl font-bold text-primary-content'>Frequently asked questions</h2>
            <p className='font-light max-w-xl'>Find answers to your questions instantly. Need more guidance? Dive into our extensive documentation for all your queries.</p>
         </motion.div>
         {/* accordion */}
         <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='w-full space-y-3 '>
            <div className="collapse collapse-plus bg-foreground">
               <input type="radio" name="my-accordion-3" defaultChecked />
               <div className="collapse-title text-xl font-medium">How do I get started as a freelancer?</div>
               <div className="collapse-content">
                  <p>Sign up, complete your profile, and start browsing projects. Submit proposals and communicate with clients to get hired.</p>
               </div>
            </div>
            <div className="collapse collapse-plus bg-foreground">
               <input type="radio" name="my-accordion-3" />
               <div className="collapse-title text-xl font-medium">How do I ensure payment security?</div>
               <div className="collapse-content">
                  <p>Use our secure payment system. Funds are held in escrow until you complete the project and both parties are satisfied.</p>
               </div>
            </div>
            <div className="collapse collapse-plus bg-foreground">
               <input type="radio" name="my-accordion-3" />
               <div className="collapse-title text-xl font-medium">How can I build trust with clients?</div>
               <div className="collapse-content">
                  <p>Maintain clear communication, deliver high-quality work on time, and ask for reviews. A strong portfolio also helps showcase your skills.</p>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default FAQ;