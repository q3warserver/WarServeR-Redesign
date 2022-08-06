import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../src/routes/App";
import ClientInfoPage from "./routes/clientInfo";
import ServerPage from "./routes/servers";
import MapsPage from "./routes/maps";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="clientinfo" element={<ClientInfoPage />} />
      <Route path="maps" element={<MapsPage />} />
      <Route path="servers" element={<ServerPage />} />
    </Routes>
  </BrowserRouter>
);
