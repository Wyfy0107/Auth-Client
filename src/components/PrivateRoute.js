import React from "react";
import { Redirect } from "react-router-dom";
import UserPage from "./UserPage";

function PrivateRoute({ login, userInfo }) {
  return (
    <>{login ? <UserPage userInfo={userInfo} /> : <Redirect to='/Login' />}</>
  );
}

export default PrivateRoute;
