import React, { useContext, useEffect } from "react";
import { useAxiosSecure } from "./../../Axios/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loading from "./../../Loading/Loading";
import { useLocation } from "react-router-dom";
import { convertedExpireDate } from "../../convertedExpireDate/convertedExpireDate";
import { FoodContext } from "../../AuthContext/AuthContext";

const FoodRequest = () => {
  const secure = useAxiosSecure();
  const { user } = useContext(FoodContext);

  const { isLoading, data: myRequestedFoods = [] } = useQuery({
    queryKey: ["myRequestedFoods", user?.email],
    queryFn: async () => {
      const response = await secure.post("/manage", { email: user.email });
      return response.data.data?.requested || [];
    },
    enabled: !!user,
  });

  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Food Request | FoodBites";
  }, [pathname]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto border rounded-xl mt-4">
          {myRequestedFoods.length === 0 ? (
            <h2 className="text-center p-2 text-2xl font-bold">
              No Requested Food
            </h2>
          ) : (
            <table className="table">
              {/* Table Head */}
              <thead>
                <tr className="sm:text-xl text-color2 text-center">
                  <th>Id</th>
                  <th>Donar Name</th>
                  <th>Pickup Location</th>
                  <th>Expire Date</th>
                  <th>Request Date</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {myRequestedFoods.map(
                  ({ _id, donator_name, loc, expr, req_date }, idx) => (
                    <tr key={_id} className="text-center hover:bg-color4.05">
                      <th>{idx + 1}</th>
                      <td className="text-color2 sm:text-base font-semibold">
                        {donator_name}
                      </td>
                      <td>{loc}</td>
                      <td>{convertedExpireDate(expr)}</td>
                      <td>{convertedExpireDate(req_date)}</td>
                    </tr>
                  )
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
