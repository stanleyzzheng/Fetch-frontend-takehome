import MainForm from "./pages/mainform";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// const mainPageLayout = () => <Outlet />;
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainForm />,
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
