import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
