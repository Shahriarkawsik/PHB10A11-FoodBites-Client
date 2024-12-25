import { useLocation } from "react-router-dom";
import error404 from "../assets/error404.json";
import Lottie from "lottie-react";
import { useEffect } from "react";

const ErrorPage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Error | FoodBites";
  }, [pathname]);
  return (
    <div className="h-screen">
      <Lottie className="h-[700px]" animationData={error404}></Lottie>
    </div>
  );
};

export default ErrorPage;
