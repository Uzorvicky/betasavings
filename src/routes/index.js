
import { lazy } from "react";
const Dashboard = lazy(() => import("../features/dashboard/Home"))
const routes = [
  {
    path: "",
    component: Dashboard,
  },
  {
    path: "dashboard/*",
    component: Dashboard,
  },
];

export default routes;