import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ authenticated, component: Component }) {
  return !!authenticated ? <Navigate to="/backOffice" {...alert("로그아웃 후 이동가능합니다")} /> : Component;
}

export default PublicRoute;
