import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthContextProvider, useAuthContext } from "./Context/AuthContext";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
export { useAuthContext };
root.render(
  <StrictMode>
    <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </StrictMode>
);
