import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Landing from "./components/Landing/LandingPage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
