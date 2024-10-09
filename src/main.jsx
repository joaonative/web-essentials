import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import MercadoVivo from "./pages/mercado-vivo/Page.jsx";
import Tinto from "./pages/tinto/Page.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/mercado-vivo" element={<MercadoVivo />} />
        <Route path="/tinto" element={<Tinto />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
