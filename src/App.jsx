import MainForm from "./pages/mainform";
import "./App.css";

// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// const mainPageLayout = () => <Outlet />;
// const router = createBrowserRouter([{ element: <mainform /> }]);
function App() {
  return (
    <div className="App">
      <h1>Fetch</h1>
      <MainForm />
    </div>
  );
}

export default App;
