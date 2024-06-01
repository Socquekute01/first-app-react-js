import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { UserLayout } from "./components/layout";
import "./App.css";
import React, { Suspense } from "react";

function App() {
  const PublicRouteComponent = publicRoutes.map((item, index) => {
    const path = item.path;
    const ContentComponent = item.element;
    const Layout = item.layout ? item.layout : UserLayout;
    return (
      <Route
        key={index}
        path={path}
        element={
          <>
            <Layout>
              <ContentComponent />
            </Layout>
          </>
        }
      ></Route>
    );
  });
  return (
    <>
      <Suspense fallback={<>Loading</>}>
        <Routes>{PublicRouteComponent}</Routes>
      </Suspense>
    </>
  );
}

export default App;
