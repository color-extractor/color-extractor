import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import App from "./App.jsx";
import { GOOGLE_ANALYTICS_ID } from "./config/constants";
import "./index.css";

if (GOOGLE_ANALYTICS_ID) {
  ReactGA.initialize(GOOGLE_ANALYTICS_ID);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
