import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import { UserProvider } from "./context/UserContext";  // ✅ 추가

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>          {/* ✅ App을 감싸줌 */}
        <App />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
