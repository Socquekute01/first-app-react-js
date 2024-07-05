import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
axios.defaults.baseURL = "https://6686bda083c983911b03749a.mockapi.io";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
