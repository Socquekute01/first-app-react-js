import { lazy } from "react";
import HomePage from "../features/page";
import Page404 from "../features/page/page404";
import { AdminLayout } from "../components/layout";

export const publicRoutes = [
  { path: "/", element: HomePage },
  {
    path: "/admin/*",
    element: lazy(() => import("../features/admin/")),
    layout: AdminLayout,
  },
  { path: "*", element: Page404 },
];
