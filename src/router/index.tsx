import Create from "../pages/Create";
import Dashboard from "../pages/Dashboard";
import MainLayout from "../layouts/main";
import MyApplications from "../pages/MyApplications";
import Paths from "../paths";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    // errorElement: <Page404 />,
    path: "/",
    children: [
      {
        index: true,
        path: Paths.dashboard,
        element: <Dashboard />,
      },
      {
        path: Paths.create,
        element: <Create />,
      },
      {
        path: Paths["my-applications"],
        element: <MyApplications />,
      },
    ],
  },
]);

export default router;
