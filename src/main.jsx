import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Busca el elemento con id="root" en index.html y renderiza la app ahí
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


