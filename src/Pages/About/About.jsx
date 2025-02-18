import React from 'react';
import { motion } from 'framer-motion';
import { NumberTicker } from '@/Components/magicui/number-ticker';

const About = () => {
   const stats = [
      { value: 70, suffix: "%", label: "Works done faster" },
      { value: 10000, suffix: "+", label: "Active Workers Monthly" },
      { value: 500, suffix: "+", label: "Active Buyers Monthly" },
   ];
   return (
      <section className="bg-base-100">
         {/* Hero Section */}
         <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side: Heading & CTA */}
            <motion.div
               className="space-y-6"
               initial={{ opacity: 0, x: -40 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary-content">
                  Helping businesses deliver <span className="text-primary">exceptional</span> buyer experiences.
               </h1>
               <p className="text-lg text-gray-600">
                  GigBite is the go-to platform for micro-task management, connecting businesses with skilled freelancers.
                  Millions of tasks are posted every day, ensuring a vibrant marketplace of innovative ideas.
               </p>
               <button className="btn btn-primary">Sign Up for Free</button>
            </motion.div>

            {/* Right Side: Illustration/Image */}
            <motion.div
               className="flex justify-center"
               initial={{ opacity: 0, x: 40 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
            >
               <img
                  src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero illustration"
                  className="max-w-full h-auto rounded-lg shadow-lg"
               />
            </motion.div>
         </div>

         {/* Middle Section: Subtitle & Info */}
         <div className="container mx-auto px-6 md:px-6 py-16 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-content   ">
               Built for go-to-market teams, powered by AI
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
               We believe in the power of AI to foster human connections and empower talented professionals
               to deliver exceptional experiences. Our integrated platform leverages data-driven insights
               to connect freelancers with tasks that match their expertise, ensuring seamless collaboration
               and powerful results.
            </p>
         </div>

         {/* Stats Section */}
         <section className="py-12 bg-primary-light">
            <div className="container mx-auto text-center">
               <h2 className="text-3xl font-lobster font-medium text-secondary-dark mb-4">
                  Make Your Goals Reachable
               </h2>
               <motion.div
                  className="flex justify-center space-x-12 mt-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={{
                     hidden: { opacity: 0, y: 50 },
                     visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
                  }}
               >
                  {stats.map((stat, index) => (
                     <motion.div
                        key={index}
                        className="text-center"
                        variants={{
                           hidden: { opacity: 0, y: 50 },
                           visible: { opacity: 1, y: 0 },
                        }}
                     >
                        <h3 className="text-2xl font-lobster md:text-4xl font-bold text-gray-800">
                           <NumberTicker value={stat.value} duration={2} />{stat.suffix}
                        </h3>
                        <p className="mt-2 text-gray-500">{stat.label}</p>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>
      </section>
   );
};

export default About;
