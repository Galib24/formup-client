import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import BioForm from "../Pages/BioForm/BioForm";
import FormUp from "../Pages/Home/FormUp Section/FormUp";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'bioform',
          element: <BioForm></BioForm>
        },
        {
          path: 'formup',
          element: <FormUp></FormUp>
        }
      ]
    },
  ]);