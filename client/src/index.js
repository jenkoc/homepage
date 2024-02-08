import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { appInsights } from "./appInsights";

import "./index.css";

if (localStorage.getItem("cc") === '"a"' /* strange useLocalstorage Bug */) {
  appInsights.loadAppInsights();
  appInsights.trackPageView();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
