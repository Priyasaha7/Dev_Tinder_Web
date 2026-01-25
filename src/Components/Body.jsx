import React from "react";
import { Outlet } from "react-router-dom"; // <-- import Outlet
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";
import { BASE_URL } from "../utils/constants.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice.js";
import { useEffect } from "react";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;

    try {
      const res = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }

      console.error(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // useEffect(() => {
  //   if (!userData) {
  //     fetchUser();
  //   }
  // }, [userData]);

  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
