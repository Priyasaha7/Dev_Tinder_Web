import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("user1@gmail.com");
  const [password, setPassword] = useState("User1@123");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

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
      setError(
        err?.response?.data || "Login failed. Please check your credentials.",
      );
    }
  };

  const handleSignButton = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailID: emailId, password },
        {
          withCredentials: true,
        },
      );

      dispatch(addUser(res?.data?.data));
      return navigate("/profile");
    } catch (err) {
      setError(
        err?.response?.data || "Login failed. Please check your credentials.",
      );
    }
  };
  return (
    <div className="flex justify-center mt-10">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-8">
        <legend className="fieldset-legend text-2xl ">
          {isLoginForm ? "Login" : "Signup"}
        </legend>

        {/* signup */}
        {!isLoginForm && (
          <>
            <label className="label">First Name</label>
            <input
              type="test"
              value={firstName}
              className="input w-full"
              placeholder="First Name"
              onChange={(e) => setfirstName(e.target.value)}
            />
            <label className="label">Last Name</label>
            <input
              type="text"
              value={lastName}
              className="input w-full"
              placeholder="Last Name"
              onChange={(e) => setlastName(e.target.value)}
            />
          </>
        )}

        {/* only login */}
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
        <p className="text-rose-700 text-sm">{error}</p>

        {/* button change logic */}
        <button
          className="btn btn-neutral mt-6 w-full bg-black hover:bg-gray-950"
          onClick={isLoginForm ? handleLoginButton : handleSignButton}
        >
          {isLoginForm ? "Login" : "Signup"}
        </button>
        <p
          onClick={() => setIsLoginForm((value) => !value)}
          className="m-auto cursor-pointer py-2"
        >
          {isLoginForm
            ? "New to DevTinder Signup now "
            : "Existing User Login now to continue"}
        </p>
      </fieldset>
    </div>
  );
};

export default Login;
