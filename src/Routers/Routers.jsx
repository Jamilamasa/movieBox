import React from "react";
import HomePage from '../Components/Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieSearchPage from "../Components/Pages/MovieSearchPage/MovieSearchPage";

export const ROOT = '/'
export const MOVIESEARCH = '/search/:id'

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: ROOT,
      element: <HomePage/>,
    }, {
      path: MOVIESEARCH,
      element: <MovieSearchPage/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Routers;
