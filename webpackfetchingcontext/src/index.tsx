import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { AppProvider } from "./context/AppContext/AppContext";
import { LoadingProvider } from "./context/LoadingContext/LoadingContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <LoadingProvider>
    <AppProvider>
      <App />
    </AppProvider>
  </LoadingProvider>
);
