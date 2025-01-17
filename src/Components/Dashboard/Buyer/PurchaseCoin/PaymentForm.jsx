import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useUser from '@/Hooks/useUser';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const PaymentForm = ({ coins, price }) => {
   const axiosSecure = useAxiosSecure();
   const [, refetch,] = useUser();
   const { user } = useAuth();
   const stripe = useStripe();
   const elements = useElements();
   const [isProcessing, setIsProcessing] = useState(false);
   const navigate = useNavigate();
   const handlePay = async (e) => {
      e.preventDefault();
      setIsProcessing(true);
      // getting client secret from the payment intent
      const { data } = await axiosSecure.post('/create-payment-intent', { coins, price });
      const { clientSecret } = data;
      const cardElement = elements.getElement(CardElement);

      // confirming payment
      const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
         payment_method: {
            card: cardElement,
            billing_details: {
               email: user?.email,
            }
         }
      });

      if (error) {
         toast.error(error?.message);
         setIsProcessing(false);
      } else if (paymentIntent.status === 'succeeded') {
         const savePayment = await axiosSecure.post('/save-payment', {
            coins,
            price,
            email: user?.email,
            transactionId: paymentIntent.id,
            date: new Date().toISOString()
         })
         console.log(savePayment)
         refetch();
         toast.success('Payment Successful! Coins added.');
         navigate('/dashboard/payment-history');
      }

   }



   return (
      <div className="container mx-auto p-6">
         <h1 className="text-2xl font-bold text-center mb-4">Payment</h1>
         <form onSubmit={handlePay} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="mb-4 text-lg font-semibold">You are purchasing {coins} coins for ${price}.</h2>
            <CardElement className="p-4 border rounded-md" />
            <button
               type="submit"
               disabled={!stripe || isProcessing}
               className="btn btn-primary w-full mt-6 flex items-center justify-center"
            >
               {isProcessing ? (
                  <FaSpinner className="animate-spin mr-2" />
               ) : (
                  `Pay $${price}`
               )}
            </button>
         </form>
      </div>
   );
};

export default PaymentForm;