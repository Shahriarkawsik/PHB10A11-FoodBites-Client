import React, { useContext, useEffect, useState } from "react";
import { useAxiosSecure } from "./../../Axios/useAxiosSecure";
import { FoodContext } from "../../AuthContext/AuthContext";
import Loading from "./../../Loading/Loading";
import { useLocation } from "react-router-dom";
import { convertedExpireDate } from "../../convertedExpireDate/convertedExpireDate";

const FoodRequest = () => {
  const secure = useAxiosSecure();
  const { user, loading } = useContext(FoodContext);
  const [myRequestedFoods, setMyRequestedFoods] = useState([]);
  useEffect(() => {
    if (user) {
      secure.post("/manage", { email: user.email }).then((response) => {
        setMyRequestedFoods(response.data.data.requested);
      });
    }
  }, []);
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Food Request | FoodBites";
  }, [pathname]);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto border rounded-xl mt-4">
          {myRequestedFoods.length === 0 ? (
            <h2 className="text-center p-2 text-2xl font-bold">No Requested Food</h2>
          ) : (
            <table className="table">
              {/* table head */}
              <thead>
                <tr className="sm:text-xl text-color2 text-center">
                  <th>Id</th>
                  <th>Donar Name</th>
                  <th>Picup Location</th>
                  <th>Expire Date</th>
                  <th>Request Date</th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {myRequestedFoods.map(
                  ({ _id, donar_name, loc, expr, req_date }, idx) => {
                    return (
                      <tr key={_id} className="text-center hover:bg-color4.05">
                        <th>{idx + 1}</th>
                        <td className="text-color2 sm:text-base font-semibold ">
                          {donar_name}
                        </td>
                        <td>{loc}</td>
                        <td>{convertedExpireDate(expr)}</td>
                        <td>{convertedExpireDate(req_date)}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default FoodRequest;
