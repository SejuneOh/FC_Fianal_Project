import React from "react";
import { Navigate } from "react-router-dom";

function PrivatePublicRoute({ authenticated, component: Component }) {
  return !!authenticated ? Component : <Navigate to="/backoffice/login" {...alert("접근할 수 없는 페이지입니다.")} />;
}

export default PrivatePublicRoute;
