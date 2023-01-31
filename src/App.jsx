import MainForm from "./pages/mainform";
import SuccessPage from "./pages/successPage";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { useState } from "react";

// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// const mainPageLayout = () => <Outlet />;

function App() {
  const [id, setId] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainForm setId={setId} />,
    },
    {
      path: "success",
      element: <SuccessPage id={id} />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
