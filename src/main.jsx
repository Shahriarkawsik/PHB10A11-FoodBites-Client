import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthContext from "./AuthContext/AuthContext";
import { ToastContainer } from "react-toastify";
// tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Create a client
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthContext>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose={2000} />
    </AuthContext>
  </QueryClientProvider>
);
