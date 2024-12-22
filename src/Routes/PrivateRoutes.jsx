import { useContext } from "react";
import { FoodContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(FoodContext);
  const { pathname } = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={pathname}></Navigate>;
};

export default PrivateRoutes;