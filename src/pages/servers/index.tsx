import type { RouteObject } from "react-router";
import ServersPage from "./servers-page";

const serversRoute: RouteObject = {
  path: "/servers",
  element: <ServersPage />,
};

export default serversRoute;
