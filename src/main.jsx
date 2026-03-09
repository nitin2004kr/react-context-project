import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ReceipeContext from "./context/ReceipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReceipeContext>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ReceipeContext>
  </StrictMode>,
);
