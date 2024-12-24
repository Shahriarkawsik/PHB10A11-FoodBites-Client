import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AvailableFoods from "../Pages/Food/AvailableFoods";
import PrivateRoutes from "./PrivateRoutes";
import AddFood from "./../Pages/Food/AddFood";
import ManageFoods from "./../Pages/Food/ManageFoods";
import FoodRequest from "./../Pages/Food/FoodRequest";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availableFoods",
        element: <AvailableFoods />,
      },
      {
        path: "/availableFoods",
        element: (
          <PrivateRoutes>
            <AvailableFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoutes>
            <AddFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manageFood",
        element: (
          <PrivateRoutes>
            <ManageFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "/foodRequest",
        element: (
          <PrivateRoutes>
            <FoodRequest />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
