import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';

const routes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout></MainLayout>
   }
])

export default routes;