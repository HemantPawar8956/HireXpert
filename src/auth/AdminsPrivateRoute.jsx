import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthData } from "../utilities/customHooks/useAuthData";

const AdminPrivateRoutes = () => {
  const user = useAuthData();

  if (!user || !user.token) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default AdminPrivateRoutes;
