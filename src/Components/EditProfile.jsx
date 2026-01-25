// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { BASE_URL } from "../utils/constants";
// import UserCard from "./UserCard";

// const EditProfile = ({ user }) => {
//   const [firstName, setfirstName] = useState(user.firstName);
//   const [lastName, setlastName] = useState(user.lastName);
//   const [photoUrl, setphotoUrl] = useState(user.photoUrl);
//   const [age, setage] = useState(user.age);
//   const [gender, setgender] = useState(user.gender);
//   const [about, setabout] = useState(user.about);
//   const [skills, setskills] = useState(user.skills);

//   const [showToast, setShowToast] = useState(false);
//   const [error, setError] = useState("");

//   const dispatch = useDispatch();

//   const saveProfile = async () => {
//     try {
//       const res = await axios.patch(
//         BASE_URL + "/profile/edit",
//         {
//           firstName,
//           lastName,
//           photoUrl,
//           age,
//           gender,
//           about,
//           skills,
//         },
//         {
//           withCredentials: true, // to send cookies along with the request
//         },
//       );

//       dispatch(addUser(res?.data?.data));
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//       }, 3000);
//     } catch (err) {
//       setError(
//         err?.response?.data || "Login failed. Please check your credentials.",
//       );
//     }
//   };

//   return (
//     <div className="">
//       <div className="flex justify-center mt-10">
//         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-8">
//           <legend className="fieldset-legend text-2xl ">
//             Edit Your Profile
//           </legend>
//           <label className="label">First Name:</label>
//           <input
//             type="text"
//             value={firstName}
//             className="input w-full"
//             placeholder="Email"
//             onChange={(e) => setfirstName(e.target.value)}
//           />

//           <label className="label">Last Name:</label>
//           <input
//             type="text"
//             value={lastName}
//             className="input w-full"
//             placeholder="Email"
//             onChange={(e) => setlastName(e.target.value)}
//           />

//           <label className="label mt-4">Age</label>
//           <input
//             type="text"
//             value={age}
//             className="input w-full"
//             placeholder="Password"
//             onChange={(e) => setage(e.target.value)}
//           />

//           <label className="label mt-4">Gender</label>
//           <input
//             type="text"
//             value={gender}
//             className="input w-full"
//             placeholder="Password"
//             onChange={(e) => setgender(e.target.value)}
//           />

//           <label className="label mt-4">Skills</label>
//           <input
//             type="text"
//             value={skills}
//             className="input w-full"
//             placeholder="Password"
//             onChange={(e) => setskills(e.target.value)}
//           />

//           <label className="label mt-4">About</label>
//           <input
//             type="text"
//             value={about}
//             className="input w-full"
//             placeholder="Password"
//             onChange={(e) => setabout(e.target.value)}
//           />

//           <label className="label mt-4">PhotoUrl</label>
//           <input
//             type="text"
//             value={photoUrl}
//             className="input w-full"
//             placeholder="Password"
//             onChange={(e) => setphotoUrl(e.target.value)}
//           />

//           <p className="text-rose-700 text-sm">{error}</p>
//           <button
//             className="btn btn-neutral mt-6 w-full bg-black hover:bg-gray-950"
//             onClick={saveProfile}
//           >
//             Save Profile
//           </button>
//         </fieldset>
//       </div>

//       <UserCard
//         user={{ firstName, lastName, photoUrl, age, gender, about, skills }}
//       />

//       {showToast && (
//         <div className="toast toast-top toast-center">
//           <div className="alert alert-success">
//             <span>Profile saved successfully.</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EditProfile;

import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";

const EditProfile = ({ user }) => {
  const [firstName, setfirstName] = useState(user.firstName);
  const [lastName, setlastName] = useState(user.lastName);
  const [photoUrl, setphotoUrl] = useState(user.photoUrl);
  const [age, setage] = useState(user.age);
  const [gender, setgender] = useState(user.gender);
  const [about, setabout] = useState(user.about);
  const [skills, setskills] = useState(user.skills);

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const saveProfile = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
          skills,
        },
        {
          withCredentials: true,
        },
      );

      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(
        err?.response?.data || "Login failed. Please check your credentials.",
      );
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto p-8 justify-center items-start ">
        {/* Left Side - Edit Profile Card */}
        <div className="card w-full max-w-md lg:order-1 bg-base-200 border-base-300 rounded-box shadow-xl">
          <div className="card-body ">
            <h2 className="card-title text-2xl mb-8">Edit Your Profile</h2>

            {/* Row 1: First Name + Last Name - Tight spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-base-300 rounded-box mb-4">
              <div>
                <label className="label">
                  <span className="label-text">First Name:</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full"
                  placeholder="First Name"
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Last Name:</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  className="input input-bordered w-full"
                  placeholder="Last Name"
                  onChange={(e) => setlastName(e.target.value)}
                />
              </div>
            </div>

            {/* Row 2: Age + Gender - Tight spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4  border border-base-300 rounded-box mb-4">
              <div>
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="text"
                  value={age}
                  className="input input-bordered w-full"
                  placeholder="Age"
                  onChange={(e) => setage(e.target.value)}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <input
                  type="text"
                  value={gender}
                  className="input input-bordered w-full"
                  placeholder="Gender"
                  onChange={(e) => setgender(e.target.value)}
                />
              </div>
            </div>

            {/* Row 3: Skills + PhotoUrl - Tight spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border border-base-300 rounded-box mb-4">
              <div>
                <label className="label">
                  <span className="label-text">Skills</span>
                </label>
                <input
                  type="text"
                  value={skills}
                  className="input input-bordered w-full"
                  placeholder="Skills"
                  onChange={(e) => setskills(e.target.value)}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  value={photoUrl}
                  className="input input-bordered w-full"
                  placeholder="Photo URL"
                  onChange={(e) => setphotoUrl(e.target.value)}
                />
              </div>
            </div>

            {/* Single: About - Tight padding */}
            <div className=" border border-base-300 rounded-box mb-8">
              <label className="label">
                <span className="label-text">About</span>
              </label>
              <input
                type="text"
                value={about}
                className="input input-bordered w-full"
                placeholder="About"
                onChange={(e) => setabout(e.target.value)}
              />
            </div>

            <p className="text-rose-700 text-sm mb-6">{error}</p>
            <button
              className="btn btn-neutral w-full bg-black hover:bg-gray-950"
              onClick={saveProfile}
            >
              Save Profile
            </button>
          </div>
        </div>

        {/* Right Side - UserCard */}
        <div className="card w-full max-w-md lg:order-2 bg-base-100 border-base-300 rounded-box shadow-xl">
          <div className="card-body p-0">
            <UserCard
              user={{
                firstName,
                lastName,
                photoUrl,
                age,
                gender,
                about,
                skills,
              }}
            />
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
