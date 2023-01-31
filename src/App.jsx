import MainForm from "./pages/mainform";
import SuccessPage from "./pages/successPage";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// const mainPageLayout = () => <Outlet />;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainForm />,
    },
    {
      path: "success",
      element: <SuccessPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
