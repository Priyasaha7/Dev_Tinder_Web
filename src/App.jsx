import React from "react";
import Body from "./Body.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Profile from "./Profile.jsx";
import Feed from "./Feed.jsx";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
