import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("success");
  };

  return (
    <div className="w-50 w-70-m vh-100 mt5 center">
      <h1 className="f1 measure green">Sign In</h1>
      <p className="f3 measre">
        <i className="fas fa-user"></i> Sign into Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            className="w-100 h2 mv2 f4"
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            className="w-100 h2 mv2 f4"
            required
          />
        </div>
        <input
          type="submit"
          placeholder="Login"
          className="washed-green bg-green f3 measure br1 pv1 ph3 bw0 mt2"
          value="Login"
        />
      </form>
      <p className="f3 measure">
        Don't have an account?{" "}
        <Link className="no-underline green" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
