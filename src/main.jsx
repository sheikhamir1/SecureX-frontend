import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CreateProvider1 } from "./Components/state Manage/CreateOne.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateProvider1>
      <App />
    </CreateProvider1>
  </StrictMode>
);
