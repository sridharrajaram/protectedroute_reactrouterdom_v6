import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ auth, children }) {
  
  if (!auth)
    return <Navigate to="/" replace />;
  return children
}

export default PrivateRoute;
