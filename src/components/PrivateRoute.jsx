import React from "react";
import { useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import auth from "../auth/auth";

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate();
  const { user } = auth;
  const currentUser = useAtomValue(user);
  if (!currentUser) {
    navigate("/login");
    return;
  }

  return children;
};

export default PrivateRoute;
