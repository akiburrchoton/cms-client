import React, { Children, use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";

function PrivateRoute({ children }) {
  const { loggedinUser } = use(AuthContext);
  const navigate = useNavigate();

  if (loggedinUser && loggedinUser?.email) {
    return children;
  }

  return navigate("/login");
}

export default PrivateRoute;
