import React from "react";
import { Navigate } from "react-router-dom";

function PrivateVendorRoute({ authenticated, component: Component }) {
  return authenticated === "vendor" ? (
    Component
  ) : authenticated === "master" ? (
    <Navigate to="/backoffice" {...alert("접근할 수 없는 페이지입니다.")} />
  ) : (
    <Navigate to="/backoffice/login" {...alert("접근할 수 없는 페이지입니다.")} />
  );
}

export default PrivateVendorRoute;
