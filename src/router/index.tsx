import Dashboard from "../pages/Dashboard";
import Create from "../pages/Create";
import MyApplications from "../pages/MyApplications";
import Paths from "../paths";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
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
]);

export default router;
