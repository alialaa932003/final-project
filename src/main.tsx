import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import React from "react";

createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
);
