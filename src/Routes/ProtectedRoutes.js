import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  //   let isSignIn = isLoggedIn();
  let isSignIn = true;

  return isSignIn ? <Outlet /> : <Navigate to="/login" />; // it should be active
}

export default ProtectedRoute;
