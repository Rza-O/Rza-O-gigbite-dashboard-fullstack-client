import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentForm = ({ coins, price }) => {
   const stripe = useStripe();
   const elements = useElements();
   const [isProcessing, setIsProcessing] = useState(false);
   const navigate = useNavigate();


   return (
      <div className="container mx-auto p-6">
         <h1 className="text-2xl font-bold text-center mb-4">Payment</h1>
         <form className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="mb-4 text-lg font-semibold">You are purchasing {coins} coins for ${price}.</h2>
            <CardElement className="p-4 border rounded-md" />
            <button
               type="submit"
               className="btn btn-primary w-full mt-6 flex items-center justify-center"
            >
               pay
            </button>
         </form>
      </div>
   );
};

export default PaymentForm;