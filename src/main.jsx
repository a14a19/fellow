import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import LoveFellow from "./components/lovefellow/loveFellow"; // Correct import path

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoveFellow /> {/* Render the LoveFellow component */}
  </React.StrictMode>
);
