import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <div>
        <NavBar/>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
