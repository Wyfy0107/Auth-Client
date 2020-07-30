import React from "react";
import { Redirect } from "react-router-dom";
import UserPage from "./UserPage";

function PrivateRoute({ login, token }) {
  return <>{login ? <UserPage token={token} /> : <Redirect to='/Login' />}</>;
}

export default PrivateRoute;
