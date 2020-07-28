import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp({ setSignUp }) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const registerUser = () => {
    axios
      .post("https://jsonwebtoken-api.herokuapp.com/api/user/register", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        setSignUp(true);
        alert("success, you can now log in");
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <div>
      <h1>Sign up</h1>
      <input
        type='text'
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
      />
      <br />
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
      <button onClick={registerUser}>Sign Up</button>
      <br />
      <h2>Already registered ?</h2>
      <Link to='/Login'>Login</Link>
    </div>
  );
}

export default SignUp;
