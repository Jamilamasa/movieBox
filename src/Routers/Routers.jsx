import React from "react";
import HomePage from '../Components/Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const ROOT = '/'

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: ROOT,
      element: <HomePage/>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routers;
