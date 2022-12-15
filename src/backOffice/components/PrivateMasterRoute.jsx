import React from "react";
import { Navigate } from "react-router-dom";

const PrivateMasterRoute = ({ authenticated, component: Component }) => {
  return authenticated === "master" ? (
    Component
  ) : authenticated === "vendor" ? (
    <Navigate to="/backoffice" {...alert("접근할 수 없는 페이지입니다.")} />
  ) : (
    <Navigate to="/backOffice/login" {...alert("접근할 수 없는 페이지입니다.")} />
  );
};

export default PrivateMasterRoute;
