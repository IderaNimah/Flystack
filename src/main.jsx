import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HowItWorks from "./components/HowItWorks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

  },
  {
    path: "/HowItWorks",
    element: <HowItWorks />,
  },
  {
    path: "/whyfly",
    element: <div>why fly</div>,
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </StrictMode>
);
// const Team = () => ;
