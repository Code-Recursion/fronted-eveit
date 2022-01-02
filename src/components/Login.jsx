import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const username = event.target.email.value;
    const password = event.target.password.value;
    console.log(username, password);
    axios
      .post("http://localhost:4000/api/v1/user", {
        username,
        password,
      })
      .then(() => {
        console.log("created");
      })
      .catch((err) => {
        console.log("error", err);
      });

    console.log("logged in");
  };
  return (
    <form onSubmit={handleLogin}>
      <div className="login">
        <h1>Login</h1>
        <br />
        <div className="input-elem">
          <div>Email</div>
          <div>
            <input type="email" name="email" placeholder="Type your username" />
          </div>
        </div>
        <br />
        <div className="input-elem">
          <div>Password</div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Type your password"
            />
          </div>
        </div>
        <br />
        <br />
        <button className="btn-grad" type="submit">
          Login
        </button>
        <br />
        <br />
        <Link to="/register">Register</Link>
      </div>
    </form>
  );
};

export default Login;
