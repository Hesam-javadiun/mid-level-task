import authRoute from "./pages/auth";
import dashboardRoute from "./pages/dashboard";
import serversRoute from "./pages/servers";
import resourcesRoute from "./pages/resources";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  authRoute,
  dashboardRoute,
  serversRoute,
  resourcesRoute,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
