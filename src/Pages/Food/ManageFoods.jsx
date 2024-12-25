import React, { useContext, useEffect, useState } from "react";
import { LuPencil } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useAxiosSecure } from "../../Axios/useAxiosSecure";
import { FoodContext } from "../../AuthContext/AuthContext";
import { Link } from "react-router-dom";
import DeleteModals from "../../Modals/DeleteModals";
import Loading from "./../../Loading/Loading";
import { convertedExpireDate } from "./../../convertedExpireDate/convertedExpireDate";
const ManageFoods = () => {
  const secure = useAxiosSecure();
  const [manageFoods, setManageFoods] = useState([]);
  const { user, loading } = useContext(FoodContext);

  // here will fetch user's created food;
  useEffect(() => {
    if (user) {
      secure.get(`/manage?email=${user.email}`).then((response) => {
        setManageFoods(response.data.data);
      });
    }
  }, []);

  const handleDelete = (id) => {
    secure.delete(`/food/${id}`);
  };

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto font-Poppins my-16">
      {loading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto border rounded-lg">
          <table className="table">
            {/* table head */}
            <thead>
              <tr className="text-xl text-color2 text-center">
                <th>Id</th>
                <th>Food Name</th>
                <th>Food Quantity</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* table body */}
            <tbody>
              {manageFoods.map((manageFood, id) => (
                <tr
                  key={manageFood._id}
                  className="text-center hover:bg-color4.05"
                >
                  <th>{id + 1}</th>
                  <td className="text-color2 text-base font-semibold ">
                    {manageFood.name}
                  </td>
                  <td>{manageFood.qtn} gm</td>
                  <td>{manageFood.loc}</td>
                  <td> {convertedExpireDate(manageFood.expr)}</td>
                  <td className="space-x-2">
                    <Link to={`/updateFood/${manageFood._id}`}>
                      <button className="p-2 bg-color4 hover:bg-yellow-500 text-white rounded-lg">
                        <LuPencil />
                      </button>
                    </Link>
                    <button
                      className="p-2 bg-green-400 rounded-sm"
                      // onClick={() => handleDelete(manageFood._id)}
                    >
                      <DeleteModals
                        manageFood={manageFood}
                        // handleDelete={handleDelete}
                      />
                    </button>
                    {/* <DeleteModals /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageFoods;
