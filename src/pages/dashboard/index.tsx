import type { RouteObject } from "react-router";
import DashboardPage from "./dashboard-page";

const dashboardRoute: RouteObject = {
  path: "/dashboard",
  element: <DashboardPage />,
};

export default dashboardRoute;
