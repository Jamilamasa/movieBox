import React from "react";
import HomePage from '../Components/Pages/HomePage/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieSearchPage from "../Components/Pages/MovieSearchPage/MovieSearchPage";
import MovieDetailsPage from "../Components/Pages/MovieDetailsPage/MovieDetailsPage";

export const ROOT = '/'
export const MOVIESEARCH = '/search/:id'
export const MOVIEDETAILS = '/movies/:id'

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: ROOT,
      element: <HomePage/>,
    }, {
      path: MOVIESEARCH,
      element: <MovieSearchPage/>
    } , {
      path : MOVIEDETAILS,
      element: <MovieDetailsPage/>
    }
  ]);
  return <RouterProvider router={router} />;
};

export default Routers;
