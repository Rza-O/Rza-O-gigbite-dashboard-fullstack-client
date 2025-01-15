import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '@/Pages/Login/Login';
import Register from '@/Pages/Register/Register';
import DashboardLayout from '@/Layouts/DashboardLayout';

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
      element: <DashboardLayout></DashboardLayout>
   }
])

export default routes;