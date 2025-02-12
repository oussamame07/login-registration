import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import StreamPage from "./components/StreamPage";
import UserDetails from "./components/userDetails";
// import ImageUpload from "./components/imageUpload.";
import UserHome from "./components/userHome";
// import StreamPage from "./components/StreamPage";
function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/StreamPage" element={<StreamPage />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/userHome" element={<UserHome />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
