import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./utility/darkmode/ThemeContext";
import "./i18n";
import { InfoProvider } from "./utility/InfoContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider>
        <InfoProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </InfoProvider>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>
);
