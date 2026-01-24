import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("user1@gmail.com");
  const [password, setPassword] = useState("User1@123");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginButton = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          // frontend call to backend login API
          emailID: emailId,
          password,
        },
        {
          withCredentials: true, // to send cookies along with the request
        },
      );

      dispatch(addUser(res.data));
      navigate("/");
    } catch (err) {
      console.log("Login error:", err);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-8">
        <legend className="fieldset-legend text-2xl ">Login</legend>

        <label className="label">Email ID</label>
        <input
          type="email"
          value={emailId}
          className="input w-full"
          placeholder="Email"
          onChange={(e) => setEmailId(e.target.value)}
        />

        <label className="label mt-4">Password</label>
        <input
          type="password"
          value={password}
          className="input w-full"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="btn btn-neutral mt-6 w-full bg-black hover:bg-gray-950"
          onClick={handleLoginButton}
        >
          Login
        </button>
      </fieldset>
    </div>
  );
};

export default Login;
