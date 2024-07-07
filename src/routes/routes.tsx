import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import About from "../pages/About";
import Contract from "../pages/Contract";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about", element: <About /> },
      { path: "contract", element: <Contract /> },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
  { path: "/login", element: <Login /> },
]);

export default router;
