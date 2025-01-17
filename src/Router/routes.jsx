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
         }

      ]
   }
])

export default routes;