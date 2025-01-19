import { useNavigate } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

const coinOptions = [
   { coins: 10, price: 1 },
   { coins: 150, price: 10 },
   { coins: 500, price: 20 },
   { coins: 1000, price: 35 },
];

const PurchaseCoin = () => {
   const navigate = useNavigate();

   const handleCardClick = (coins, price) => {
      navigate(`/dashboard/payment?coins=${coins}&price=${price}`);
   };

   return (
      <div className="container mx-auto p-6 min-h-[600px]">
         <h1 className="text-3xl font-bold text-center mb-8">Purchase Coins</h1>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {coinOptions.map((option, idx) => {
               // Motion values for creating the 3D effect
               const x = useMotionValue(0);
               const y = useMotionValue(0);

               const rotateX = useTransform(y, [-50, 50], [10, -10]);
               const rotateY = useTransform(x, [-50, 50], [-10, 10]);

               return (
                  <motion.div
                     key={idx}
                     className="relative p-6 bg-white shadow-md rounded-lg flex flex-col items-center justify-center hover:shadow-lg cursor-pointer transition-all duration-300"
                     style={{
                        rotateX, 
                        rotateY,
                     }}
                     whileHover={{ scale: 1.05 }} 
                     onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const mouseX = e.clientX - rect.left - rect.width / 2;
                        const mouseY = e.clientY - rect.top - rect.height / 2;
                        x.set(mouseX); 
                        y.set(mouseY);
                     }}
                     onMouseLeave={() => {
                        x.set(0); 
                        y.set(0);
                     }}
                     onClick={() => handleCardClick(option.coins, option.price)}
                  >
                     <h2 className="text-xl font-bold">{option.coins} Coins</h2>
                     <p className="text-gray-500 mt-2">=</p>
                     <p className="text-lg font-semibold mt-2">${option.price}</p>
                  </motion.div>
               );
            })}
         </div>
      </div>
   );
};

export default PurchaseCoin;