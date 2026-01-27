import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import axios from "axios";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  if (!user) return null;

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true },
      );
      console.log(res);

      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      err?.response?.data || "Something went wrong";
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <div className="card card-side bg-base-200 shadow-2xl max-w-md w-full">
        <figure>
          <img src={user.photoUrl} alt="User" className="w-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">
            {user.firstName + " " + user.lastName}
          </h2>
          <p>{user.about}</p>
          <p>Age: {user.age || "Not given yet"} </p>
          <p>Gender: {user.gender}</p>
          <p>Skills: {user.skills.join(", ")}</p> <br />
          <div className="card-actions justify-end ">
            <button
              className="btn btn-outline border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-2 "
              onClick={() => handleSendRequest("ignored", user._id)}
            >
              Ignore
            </button>

            <button
              className="btn btn-outline border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-2"
              onClick={() => handleSendRequest("interested", user._id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
