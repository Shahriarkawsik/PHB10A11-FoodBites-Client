import { useContext } from "react";
import { FoodContext } from "../AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(FoodContext);
  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={pathname}></Navigate>;
};

export default PrivateRoutes;
