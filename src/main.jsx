import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import App from "./components/App";
import AppEvent from "./components/AppEvent";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <AppEvent />
  </React.StrictMode>
);
