import { Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import { Container } from "react-bootstrap";

function App() {
  const RouteComponents = routes.map((route, index) => {
    const { path, element, title } = route;
    const ContentComponent = element;
    return (
      <Route
        key={index}
        path={path}
        element={
          <>
            <Container>
              <h2 style={{ textAlign: "center", marginBottom: "3%" }}>
                {title}
              </h2>
              <ContentComponent />
            </Container>
          </>
        }
      />
    );
  });
  return (
    <>
      <Routes>{RouteComponents}</Routes>
    </>
  );
}

export default App;
