import React, { useContext, useEffect, useState } from "react";
import { LuPencil } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useAxiosSecure } from "../../Axios/useAxiosSecure";
import { FoodContext } from "../../AuthContext/AuthContext";
import { Link, useLocation } from "react-router-dom";
import Loading from "./../../Loading/Loading";
import { convertedExpireDate } from "./../../convertedExpireDate/convertedExpireDate";
import Swal from "sweetalert2";

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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        secure
          .delete(`/food/${id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            // Remove from list
            setManageFoods((prevFoods) =>
              prevFoods.filter((food) => food._id !== id)
            );
          })
          .catch((error) => {
            Swal.fire({
              title: "Error",
              text: "There was a problem deleting the item.",
              icon: "error",
            });
            console.error("Delete failed:", error);
          });
      }
    });
  };

  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Manage | FoodBites";
  }, [pathname]);

  return (
    <div className="w-11/12 lg:w-4/5 mx-auto font-Poppins my-16">
      {loading ? (
        <Loading />
      ) : (
        <div className="overflow-x-auto border rounded-xl">
          {manageFoods.length === 0 ? (
            <h2 className="text-center p-2 text-2xl font-bold">
              No Food is added
            </h2>
          ) : (
            <table className="table">
              {/* table head */}
              <thead>
                <tr className="sm:text-xl text-color2 text-center">
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
                    <td className="text-color2 sm:text-base font-semibold ">
                      {manageFood.name}
                    </td>
                    <td>{manageFood.qtn} gm</td>
                    <td>{manageFood.loc}</td>
                    <td> {convertedExpireDate(manageFood.expr)}</td>
                    <td className="space-x-2 flex items-center justify-center">
                      <Link to={`/updateFood/${manageFood._id}`}>
                        <button className="p-2 bg-color4 hover:bg-yellow-500 text-white rounded-lg">
                          <LuPencil className="text-2xl" />
                        </button>
                      </Link>
                      <button
                        className="p-2 bg-color4 hover:bg-yellow-500 text-white rounded-lg"
                        onClick={() => handleDelete(manageFood._id)}
                      >
                        <MdDelete className="text-2xl" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageFoods;
