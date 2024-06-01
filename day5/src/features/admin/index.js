import { Route, Routes } from "react-router-dom";
import { adminRoutes } from "../../routes";

function AdminRouter() {
  const AdminRouteComponent = adminRoutes.map((item, index) => {
    const path = item.path;
    const ContentComponent = item.element;
    return (
      <Route
        key={index}
        path={path}
        element={
          <>
            <ContentComponent />
          </>
        }
      />
    );
  });
  return (
    <>
      <Routes>{AdminRouteComponent}</Routes>
    </>
  );
}

export default AdminRouter;
