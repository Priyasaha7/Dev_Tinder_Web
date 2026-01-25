import React from "react";

const UserCard = ({ user }) => {
  if (!user) return null;

  return (
    <div className="flex justify-center mt-10">
      <div className="card card-side bg-base-200 shadow-2xl max-w-md w-full">
        <figure>
          <img src={user.photoUrl} alt="User" className="w-48 object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.firstName + " " + user.lastName}</h2>
          <p>{user.about}</p>
          <p>Age: {user.age || 0} </p>
          <p>Gender: {user.gender}</p>
          <p>Skills: {user.skills.join(", ")}</p> <br />
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-secondary px-2">
              Ignore
            </button>
            <button className="btn btn-outline btn-accent px-2">
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
