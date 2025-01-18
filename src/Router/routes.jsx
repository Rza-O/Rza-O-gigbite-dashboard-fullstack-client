import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '@/Pages/Login/Login';
import Register from '@/Pages/Register/Register';
import DashboardLayout from '@/Layouts/DashboardLayout';
import PrivateRoute from './PrivateRoute';
import DashboardHome from '@/Pages/Dashboard/Common/DashboardHome';
import BuyerHome from '@/Pages/Dashboard/Buyer/Home/BuyerHome';
import AddTaskBuyer from '@/Pages/Dashboard/Buyer/AddTask/AddTask';
import MyTasks from '@/Pages/Dashboard/Buyer/MyTasks/MyTasks';
import WorkerHome from '@/Pages/Dashboard/Worker/Home/WorkerHome';
import TasksList from '@/Pages/Dashboard/Worker/TasksList/TasksList';
import TaskDetails from '@/Pages/Dashboard/Worker/TaskDetails/TaskDetails';
import MySubmission from '@/Pages/Dashboard/Worker/MySubmission/MySubmission';
import Withdrawals from '@/Pages/Dashboard/Worker/Withdrawals/Withdrawals';
import BuyerRoute from './BuyerRoute';
import WorkerRoute from './WorkerRoute';
import PurchaseCoin from '@/Pages/Dashboard/Buyer/PurchaseCoin/PurchaseCoin';
import PaymentHistory from '@/Pages/Dashboard/Buyer/PaymentHistory/PaymentHistory';
import Payment from '@/Components/Dashboard/Buyer/PurchaseCoin/Payment';
import AdminRoute from './AdminRoute';
import AdminHome from '@/Pages/Dashboard/Admin/Home/AdminHome';
import ManageUsers from '@/Pages/Dashboard/Admin/ManageUsers/ManageUsers';
import ManageTasks from '@/Pages/Dashboard/Admin/ManageTasks/ManageTasks';


const routes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>,
      children: [
         {
            index: true,
            element: <Home></Home>
         },
         {
            path: 'login',
            element: <Login></Login>
         },
         {
            path: 'register',
            element: <Register></Register>
         }
      ]
   },
   {
      path: 'dashboard',
      element:
         <PrivateRoute>
            <DashboardLayout></DashboardLayout>
         </PrivateRoute>,
      children: [
         {
            index: true,
            element: <PrivateRoute><DashboardHome></DashboardHome></PrivateRoute>
         },
         // TODO: Add Buyer Route in this
         // BUYER
         // buyer home
         {
            path: 'buyer-home',
            element: <PrivateRoute><BuyerRoute><BuyerHome></BuyerHome></BuyerRoute></PrivateRoute>
         },
         // Add task
         {
            path: 'add-task',
            element: <PrivateRoute><BuyerRoute><AddTaskBuyer></AddTaskBuyer></BuyerRoute></PrivateRoute>
         },
         // My Tasks
         {
            path: 'my-tasks',
            element: <PrivateRoute><BuyerRoute><MyTasks></MyTasks></BuyerRoute></PrivateRoute>
         },
         // purchase coin route
         {
            path: 'purchase-coin',
            element: <PrivateRoute><BuyerRoute><PurchaseCoin></PurchaseCoin></BuyerRoute></PrivateRoute>
         },
         // Payment History
         {
            path: 'payment-history',
            element: <PrivateRoute><BuyerRoute><PaymentHistory></PaymentHistory></BuyerRoute></PrivateRoute>
         },
         // Payment Route
         {
            path: 'payment',
            element: <PrivateRoute><BuyerRoute><Payment></Payment></BuyerRoute></PrivateRoute>
         },


         // TODO: add worker route
         // worker
         {
            path: 'worker-home',
            element: <PrivateRoute><WorkerRoute><WorkerHome></WorkerHome></WorkerRoute></PrivateRoute>
         },
         // all tasks
         {
            path: 'tasks-list',
            element: <PrivateRoute><WorkerRoute><TasksList></TasksList></WorkerRoute></PrivateRoute>
         },
         // task details
         {
            path: 'task/:id',
            element: <PrivateRoute><WorkerRoute><TaskDetails></TaskDetails></WorkerRoute></PrivateRoute>
         },
         // single worker submission
         {
            path: 'my-submissions',
            element: <PrivateRoute><WorkerRoute><MySubmission></MySubmission></WorkerRoute></PrivateRoute>
         },
         // Withdrawals for worker
         {
            path: 'withdrawals',
            element: <PrivateRoute><WorkerRoute><Withdrawals></Withdrawals></WorkerRoute></PrivateRoute>
         },

         // Admin routes
         {
            path: 'admin-home',
            element: <PrivateRoute><AdminRoute><AdminHome></AdminHome></AdminRoute></PrivateRoute>
         },
         // Manage users
         {
            path: 'manage-users',
            element: <PrivateRoute><AdminRoute><ManageUsers></ManageUsers></AdminRoute></PrivateRoute>
         },
         // Manage tasks
         {
            path: 'manage-tasks',
            element: <PrivateRoute><AdminRoute><ManageTasks></ManageTasks></AdminRoute></PrivateRoute>
         }

      ]
   }
])

export default routes;