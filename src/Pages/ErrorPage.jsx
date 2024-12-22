import error404 from "../assets/error404.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <Lottie className="h-[700px]" animationData={error404}></Lottie>
    </div>
  );
};

export default ErrorPage;
