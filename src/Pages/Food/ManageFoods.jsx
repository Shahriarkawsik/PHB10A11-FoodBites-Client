import React, { useContext, useEffect, useState } from "react";
import { LuPencil } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useAxiosSecure } from "../../Axios/useAxiosSecure";
import { FoodContext } from "../../AuthContext/AuthContext";
import { Link } from "react-router-dom";
import DeleteModals from "../../Modals/DeleteModals";
const ManageFoods = () => {
  const secure = useAxiosSecure();
  const [manageFoods, setManageFoods] = useState([]);
  const { user, loading } = useContext(FoodContext);

  // here will fetch user's created food;
  useEffect(() => {
    if (user) {
      secure.get(`/manage?email=${user?.email}`).then((response) => {
        setManageFoods(response.data.data);
      });
    }
  }, []);

  const handleDelete = (id) => {
    secure.delete(`/food/${id}`);
  };

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div className=" border-2 border-color3 rounded-lg p-5">
          <table className="border w-full">
            <thead className="text-color1 py-2">
              <tr className="py-2">
                <th>Id</th>
                <th>Food Name</th>
                <th>Food Quantity</th>
                <th>Pickup Location</th>
                <th>Expire Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {manageFoods.map((manageFood, id) => (
                <tr key={manageFood._id}>
                  <th>{id + 1}</th>
                  <td>{manageFood.name}</td>
                  <td>{manageFood.qtn}</td>
                  <td>{manageFood.loc}</td>
                  <td>{manageFood.expr}</td>
                  <td className="space-x-2">
                    <Link to={`/updateFood/${manageFood._id}`}>
                      <button className="p-2 bg-green-400 rounded-sm">
                        <LuPencil />
                      </button>
                    </Link>

                    <button
                      className="p-2 bg-green-400 rounded-sm"
                      // onClick={() => handleDelete(manageFood._id)}
                    >
                      <DeleteModals
                        manageFood={manageFood}
                        handleDelete={handleDelete}
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
