import IndexPage from "../page";
import EditProjectPage from "../page/edit-project";
import ListEmployeePage from "../page/list-employee";

export const routes = [
  { path: "/", element: IndexPage, title: "List of Projects" },
  {
    path: "/departments/:id/employees",
    element: ListEmployeePage,
    title: "List of Employees",
  },
  {
    path: "/projects/edit/:id",
    element: EditProjectPage,
    title: "Edit Project",
  },
];
