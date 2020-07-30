import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function UserPage({ token }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = () => {
    axios({
      method: "get",
      url: "https://jsonwebtoken-api.herokuapp.com/api/post",
      headers: {
        "Auth-token": token,
      },
    })
      .then((res) => setInfo(res.data.message))
      .catch((err) => console.log(err));
  };

  return <h2>{info}</h2>;
}

export default UserPage;
