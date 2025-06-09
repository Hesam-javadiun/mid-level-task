import type { RouteObject } from "react-router";
import ResourcesPage from "./resources-page";

const resourcesRoute: RouteObject = {
  path: "/resources",
  element: <ResourcesPage />,
};

export default resourcesRoute;
