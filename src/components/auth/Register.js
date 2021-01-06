import React from "react";
import { Link } from "react-router-dom";
import useForm from "./useForm";

const Register = () => {
  const { handleChange, values } = useForm();
  return (
    <div className="w-60 vh-100 mt5 center">
      <h1 className="f1 measure green">Sign Up</h1>
      <p className="f3 measre">
        <i className="fas fa-user"></i> Create Your Account
      </p>

      <form className="">
        <input
          className="w-100 h2 mv2 f4"
          type="text"
          placeholder="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="w-100 h2 f4 mv2"
          value={values.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          minLength="6"
          className="w-100 h2 f4 mv2"
          value={values.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          minLength="6"
          className="w-100 f4 h2 mv2"
          value={values.password2}
          onChange={handleChange}
          required
        />

        <input
          type="submit"
          className="washed-green bg-green f3 measure br1 pv1 ph3 bw0 mt2"
          value="Register"
        />
      </form>
      <p className="f3 measure">
        Already have an account?{" "}
        <Link className="no-underline green" to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
