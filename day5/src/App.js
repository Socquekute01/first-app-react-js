import "./App.css";
import { HeaderComponent, FooterComponent } from "./components/HomePage";
import { routes } from "./components/routes";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log(routes);
  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          const path = route.path;
          const Content = route.component;
          return (
            <Route
              key={index}
              path={path}
              element={
                <>
                  <HeaderComponent />
                  <div style={{ padding: "3%", minHeight: "66vh"}}>
                    <Content />
                  </div>
                  <FooterComponent />
                </>
              }
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
