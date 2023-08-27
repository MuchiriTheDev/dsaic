import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Landing from "./components/Landing/LandingPage";
import Register from "./components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
]);

export default router;
