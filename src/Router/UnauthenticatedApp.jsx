import React from "react";

import { Link, Route, Routes } from "react-router-dom";
import RedirectToLogin from "../pages/unAuthApp/RedirectToLogin.jsx";
import Login from "../pages/unAuthApp/Login.jsx";
import Register from "../pages/unAuthApp/Register.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<RedirectToLogin />} />{" "}
    </Routes>
  );
}

function UnauthenticatedApp() {
  return (
    <div>
      <Link to="/login"> login </Link>
      <Link to="/register"> register </Link>
      <AppRoutes />
    </div>
  );
}

export default UnauthenticatedApp;
