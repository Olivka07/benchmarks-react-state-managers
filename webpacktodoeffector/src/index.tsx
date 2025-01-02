import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { users } from "./consts";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

localStorage.setItem("users", JSON.stringify(users));

root.render(<App />);
