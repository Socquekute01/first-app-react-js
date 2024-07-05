import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import DrawerAppBar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DrawerAppBar>
              <HomePage />
            </DrawerAppBar>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DrawerAppBar>
              <DashboardPage />
            </DrawerAppBar>
          }
        />
        <Route
          path="/contact"
          element={
            <DrawerAppBar>
              <ContactPage />
            </DrawerAppBar>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <DrawerAppBar>
              <DetailPage />
            </DrawerAppBar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
