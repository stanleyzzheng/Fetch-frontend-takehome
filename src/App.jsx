import MainForm from "./pages/mainform";
import SuccessPage from "./pages/successPage";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// const mainPageLayout = () => <Outlet />;
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainForm />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
