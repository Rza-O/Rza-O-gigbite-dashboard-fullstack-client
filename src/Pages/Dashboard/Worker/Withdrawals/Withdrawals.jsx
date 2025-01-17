import Loading from '@/Components/Shared/LoadingSpinner/Loading';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import useUser from '@/Hooks/useUser';
import { useState } from 'react';
import toast from 'react-hot-toast';

function WithdrawalForm() {
   const [coinsToWithdraw, setCoinsToWithdraw] = useState(0);
   const [withdrawalAmount, setWithdrawalAmount] = useState(0);
   const [paymentSystem, setPaymentSystem] = useState('');
   const [accountNumber, setAccountNumber] = useState('');
   const [errorMessage, setErrorMessage] = useState('');
   const axiosSecure = useAxiosSecure();

   const [userData, refetch, isLoading] = useUser();
   // console.log(userData)
   const coinBalance = userData?.coin;
   // Handle coin input change
   const handleCoinInput = (e) => {
      const coins = e.target.value;
      if (coins <= coinBalance) {
         setCoinsToWithdraw(coins);
         setWithdrawalAmount(coins / 20);
         setErrorMessage('');
      } else {
         setErrorMessage('Insufficient coins');
         setCoinsToWithdraw(0);
         setWithdrawalAmount(0);
      }
   };

   // Handle form submission
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (coinsToWithdraw >= 200) {
         const withdrawalData = {
            worker_email: userData.email,
            worker_name: userData.name,
            withdrawal_coin: parseInt(coinsToWithdraw),
            withdrawal_amount: withdrawalAmount,
            payment_system: paymentSystem,
            account_number: accountNumber,
            withdraw_date: new Date().toISOString(),
            status: 'pending',
         };

         // Save withdrawal data to database 
         console.log(withdrawalData);

         try {
            const { data } = await axiosSecure.post(`/withdrawals/${userData.email}`, withdrawalData);
            console.log(data)
            refetch();
            toast.success('Withdrawals requested!');
         } catch (error) {
            console.log(error);
            toast.error('Something went wrong. Try again later');
         }
      }
   };

   if (isLoading) return <Loading></Loading>

   return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 container mx-auto mt-4">
         {/* Disclaimer */}
         <div className="p-6 bg-primary/30  rounded-lg text-black max-w-xl">
            <div className="flex items-center space-x-4">
               <span className="text-2xl font-semibold">Withdrawal Logic:</span>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
               </svg>
            </div>
            <p className="mt-4 text-lg">
               <strong className='text-error-content'>Important:</strong> 20 coins = 1 dollar. Workers can only withdraw once they have accumulated at least 200 coins (equivalent to 10 dollars).
               Make sure you have sufficient coins to withdraw. The withdrawal amount will be automatically calculated based on the number of coins entered.
            </p>
         </div>

         <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-primary-content mb-6">Withdrawal Form</h2>
            <p className='mb-3 font-surfer'>Coins Available: <span className='text-error-content'>{ userData.coin}🪙</span></p>
            {/* form */}
            <form onSubmit={handleSubmit}>
               {/* coin amount to withdraw */}
               <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700" htmlFor="coinsToWithdraw">Coin to Withdraw</label>
                  <input
                     type="number"
                     id="coinsToWithdraw"
                     value={coinsToWithdraw}
                     onChange={handleCoinInput}
                     min="1"
                     max={coinBalance}
                     className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
               </div>

               {/* unchanged withdraw amount to dollar */}
               <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700" htmlFor="withdrawAmount">Withdraw Amount ($)</label>
                  <input
                     type="text"
                     id="withdrawAmount"
                     value={withdrawalAmount}
                     readOnly
                     className="w-full p-3 mt-2 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
                  />
               </div>
               {/* payment system */}
               <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700" htmlFor="paymentSystem">Select Payment System</label>
                  <select
                     id="paymentSystem"
                     value={paymentSystem}
                     onChange={(e) => setPaymentSystem(e.target.value)}
                     className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     required
                  >
                     <option value="" disabled>Choose payment method</option>
                     <option value="Bkash">Bkash</option>
                     <option value="Rocket">Rocket</option>
                     <option value="Nagad">Nagad</option>
                     <option value="Other">Other</option>
                  </select>
               </div>
               {/* account number */}
               <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700" htmlFor="accountNumber">Account Number</label>
                  <input
                     type="number"
                     id="accountNumber"
                     value={accountNumber}
                     onChange={(e) => setAccountNumber(e.target.value)}
                     className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                     required
                  />
               </div>

               {/* {errorMessage && } */}

               <div className="flex justify-center">
                  {errorMessage ? <p className="text-red-500 text-center mb-4">{errorMessage}</p> : <button
                     type="submit"
                     disabled={coinsToWithdraw < 200}
                     className={`w-full p-3 mt-4 rounded-lg text-white font-semibold focus:outline-none ${coinsToWithdraw < 200 ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                  >
                     Withdraw
                  </button>}
               </div>
            </form>
         </div>
      </div>
   );
}

export default WithdrawalForm;
