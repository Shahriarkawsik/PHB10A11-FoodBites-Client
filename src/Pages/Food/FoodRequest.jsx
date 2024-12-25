import React, { useContext, useEffect, useState } from "react";
import { useAxiosSecure } from "./../../Axios/useAxiosSecure";
import { FoodContext } from "../../AuthContext/AuthContext";

const FoodRequest = () => {
  const secure = useAxiosSecure();
  const { user, loading } = useContext(FoodContext);
  const [myRequestedFoods, setMyRequestedFoods] = useState([]);

  useEffect(() => {
    if (!loading) {
      secure.post("/manage", { email: user.email }).then((response) => {
        setMyRequestedFoods(response.data.data.requested);
      });
    }
  }, []);
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h1>{myRequestedFoods.length}</h1>
        </div>
      )}
    </div>
  );
};

export default FoodRequest;
