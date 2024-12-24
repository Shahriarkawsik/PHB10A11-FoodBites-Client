import axios from "axios";
// import { useProvideAuth } from "../hooks/useProvideAuth";
import { FoodContext } from "../AuthContext/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
const secure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
export function useAxiosSecure() {
  const { user, SignOutUser } = useContext(FoodContext);
  const navigate = useNavigate();

  // request interceptor to add authorization header for every secure call to teh api
  secure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  secure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        await SignOutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return secure;
}
