import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./layouts/auth-layout";
import InstructorLayout from "./layouts/instructor-layout";
import OnBoarding from "./components/auth/on-boarding";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/onboarding",
    element: <OnBoarding />,
  },
  {
    path: "/instructor",
    element: <InstructorLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
