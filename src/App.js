import React from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [token, setToken] = useState(null);

  const getToken = (email, password) => {
    axios
      .post("https://jsonwebtoken-api.herokuapp.com/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setToken(res.headers["auth-token"]);
        setLogin(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          {signUp ? <Redirect to='/Login' /> : <SignUp setSignUp={setSignUp} />}
        </Route>

        <Route path='/Login'>
          {login ? (
            <Redirect to='/Profile' />
          ) : (
            <Login getToken={getToken} login={login} />
          )}
        </Route>

        <PrivateRoute path='/Profile' login={login} token={token} />
      </Switch>
    </div>
  );
}

export default App;
