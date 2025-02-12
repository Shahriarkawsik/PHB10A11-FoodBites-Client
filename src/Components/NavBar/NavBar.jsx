import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FoodContext } from "../../AuthContext/AuthContext";
import { Alert } from "../../Alert/Alert";
import "./navbar.css";

const NavBar = () => {
  const { user, SignOutUser } = useContext(FoodContext);

  const navItems = (
    <>
      <NavLink className="px-3 py-2 rounded-lg" to={"/"}>
        Home
      </NavLink>
      <NavLink className="px-3 py-2 rounded-lg" to={"/food"}>
        Available Foods
      </NavLink>

      {user && (
        <>
          <NavLink className="px-3 py-2 rounded-lg" to={"/addFood"}>
            Add Food
          </NavLink>
          <NavLink className="px-3 py-2 rounded-lg" to={"/manage"}>
            Manage My Food
          </NavLink>
          <NavLink className="px-3 py-2 rounded-lg" to={"/foodRequest"}>
            My Food Request
          </NavLink>
        </>
      )}
    </>
  );
  // handleSignOut
  const handleSignOut = () => {
    SignOutUser()
      .then(() => {
        Alert(true, "Log out successful");
      })
      .catch((error) => {
        Alert(false, "Log out unsuccessful");
      });
  };
  return (
    <section className="w-11/12 lg:w-11/12 mx-auto Rubik my-4 bg-gray-300">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown max-sm:space-x-1">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {navItems}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost hover:bg-[rgba(255, 193, 7, 0.5)] text-2xl sm:text-45 lg:text-4xl font-Rochester tracking-wider"
          >
            FoodBites
          </Link>
        </div>
        <div className="navbar-center hidden font-Poppins lg:flex">
          <ul className="menu menu-horizontal items-center px-1 gap-7 text-xl ">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end font-Poppins">
          {user ? (
            <div className="relative group">
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt="photo"
              />
              <div className="z-10 hidden group-hover:block absolute w-max right-0 top-12 bg-color4.05 p-3 rounded-s-lg space-y-4">
                <h2>{user?.displayName}</h2>
                <button
                  className="btn bg-color4 hover:bg-yellow-500 text-white"
                  onClick={() => handleSignOut()}
                >
                  Log out
                </button>
              </div>
            </div>
          ) : (
            <div className="">
              <NavLink className="px-3 py-2 rounded-lg" to={"/login"}>
                Login
              </NavLink>
              <NavLink className="px-3 py-2 rounded-lg" to={"/register"}>
                Register
              </NavLink>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default NavBar;

// : (
//   <>
//     <NavLink
//
//       to={"/login"}
//     >
//       Login
//     </NavLink>
//     <NavLink
//
//       to={"/register"}
//     >
//       Register
//     </NavLink>
//   </>
// )}
