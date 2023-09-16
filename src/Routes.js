import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Articles from "./components/Articles/Articles";

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
  {
    path: "/articles",
    element: <Articles />,
  },
]);

export default router;
