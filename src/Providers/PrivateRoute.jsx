import React, { Children, use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../Components/Common/Loading";

function PrivateRoute({ children }) {
  const { loggedinUser, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (loggedinUser) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname}></Navigate>;
}

export default PrivateRoute;
