import IndexPage from "../page";
import Page404 from "../page/page404";
import ProductPage from "../page/product";
import UserPage from "../page/user";

export const routes = [
  { path: "/", component: IndexPage },
  { path: "/user", component: UserPage },
  { path: "/product", component: ProductPage },
  { path: "*", component: Page404 }, //page 404
];
