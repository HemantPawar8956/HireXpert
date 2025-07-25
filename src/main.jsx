import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import App from "./App.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>
);
