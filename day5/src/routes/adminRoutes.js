import UserManagementPage from "../features/admin/page/user-management";
import Page404 from "../features/page/page404";

export const adminRoutes = [
  {
    path: "",
    element: UserManagementPage,
  },
  {
    path: "user-management",
    element: UserManagementPage,
  },
  { path: "*", element: Page404 },
];
