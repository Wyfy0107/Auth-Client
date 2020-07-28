import React from "react";
import { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";

function Login({ getToken, login }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let location = useLocation();
  let history = useHistory();

  let setHistory = () => {
    history.replace(location);
  };
  if (login) {
    setHistory();
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type='text'
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type='password'
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={() => getToken(email, password)}>login</button>
      <br />
      <h3>Not yet a member ?</h3>
      <Link to='/'>Sign Up</Link>
    </div>
  );
}

export default Login;
