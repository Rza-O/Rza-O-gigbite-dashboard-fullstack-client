import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PaymentForm from './PaymentForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
   const [searchParams] = useSearchParams();
   const coins = searchParams.get('coins');
   const price = searchParams.get('price')
   return (
      <Elements stripe={stripePromise}>
         <PaymentForm coins={coins} price={price}></PaymentForm>
      </Elements>
   );
};

export default Payment;