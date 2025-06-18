import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./Routes/Router.jsx";
import { RouterProvider } from "react-router";
import AuthProvider from "./Providers/AuthProvider.jsx";
import Loading from "./Components/Common/Loading.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} fallbackElement={<Loading />} />
    </AuthProvider>
  </StrictMode>
);
