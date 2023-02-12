import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import EditCompanyProfile from "./Pages/EditCompanyProfile";
import EditUser from "./Pages/EditUser";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ProtectedRoute from "./Routes/ProtectedRoutes";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="/user" element={<EditUser />} />
            <Route path="/comapny-profile" element={<EditCompanyProfile />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
