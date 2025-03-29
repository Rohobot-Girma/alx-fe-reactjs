import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

function ProtectedRoute({ element, ...rest }) {
  const isAuthenticated = useAuth(); // Replace with real auth check logic

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Navigate to="/login" />}
    />
  );
}

export default ProtectedRoute;
