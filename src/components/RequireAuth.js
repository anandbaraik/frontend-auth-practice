import React from "react";
import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "..";

export default function Address({ children }) {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
