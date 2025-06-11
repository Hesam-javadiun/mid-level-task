import type { RouteObject } from "react-router";
import AuthPage from "./auth-page";

const authRoute: RouteObject = {
  path: "/",
  element: <AuthPage />,
};

export default authRoute;
