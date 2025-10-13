import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthData } from "../utilities/customHooks/useAuthData";

const CandidatesPrivateRoutes = () => {
  const user = useAuthData();

  if (!user || !user.token) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "user") {
    // Logged in but not a candidate
    return <Navigate to="/unauthorized" replace />;
  }

  // ✅ Logged in & role is candidate → show protected route
  return <Outlet />;
};

export default CandidatesPrivateRoutes;
