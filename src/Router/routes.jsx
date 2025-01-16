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
            element: <PrivateRoute><BuyerHome></BuyerHome></PrivateRoute>
         },
         // Add task
         {
            path: 'add-task',
            element: <PrivateRoute><AddTaskBuyer></AddTaskBuyer></PrivateRoute>
         },
         // My Tasks
         {
            path: 'my-tasks',
            element: <MyTasks></MyTasks>
         },

         // TODO: add worker route
         // worker
         {
            path: 'worker-home',
            element: <PrivateRoute><WorkerHome></WorkerHome></PrivateRoute>
         },
         // all tasks
         {
            path: 'tasks-list',
            element: <PrivateRoute><TasksList></TasksList></PrivateRoute>
         },
         // task details
         {
            path: 'task/:id',
            element: <TaskDetails></TaskDetails>
         }

      ]
   }
])

export default routes;