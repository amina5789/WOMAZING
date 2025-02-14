import { createBrowserRouter } from "react-router-dom";
import { ROUTER_PATHS } from "./routesPaths";
import Layout from "../layouts/Layout";
import Main from "../pages/Main/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATHS.shop,
        element: <p>shop</p>,
      },
      {
        path: ROUTER_PATHS.brand,
        element: <p>brand</p>,
      },
      {
        path: ROUTER_PATHS.contacts,
        element: <p>contacts</p>,
      },
    ],
  },
]);
