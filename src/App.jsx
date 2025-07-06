import React from "react";
import AppLayout from "./Components/Layout/AppLayout";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Country from "./Pages/Country";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import CountryDetails from "./Components/Layout/CountryDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
