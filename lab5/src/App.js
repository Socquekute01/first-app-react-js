import "bootstrap/dist/css/bootstrap.min.css";
import { publicRoute } from "./routes";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  const PublicRoutesComponent = publicRoute.map((item, index) => {
    const { path, element } = item;
    const Content = element;
    return (
      <Route
        path={path}
        element={
          <div className="px-3">
            <Header />
            <Content />
          </div>
        }
        key={index}
      />
    );
  });
  return (
    <>
      <Routes>{PublicRoutesComponent}</Routes>
    </>
  );
}

export default App;
