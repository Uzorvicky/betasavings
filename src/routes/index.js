
import { lazy } from "react";
const Dashboard = lazy(() => import("../features/dashboard/Home"))
const Member = lazy(() => import ("../features/member"))
const routes = [
  {
    path: "",
    component: Dashboard,
  },
  {
    path: "dashboard/*",
    component: Dashboard,
  },
  {
    path: "members/*",
    component: Member,
  },
];

export default routes;