import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./page";
import ProductPage from "./page/product";
import UserPage from "./page/user";
import Page404 from "./page/page404";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
