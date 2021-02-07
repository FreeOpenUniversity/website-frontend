import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import { login } from "../../actions/auth";
import { actions, api } from "../../store";

const Login = ({ isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    api.auth.post({ email, password }).then(({ payload }) => {
      localStorage.setItem("token", payload.token);
      actions.auth.update({ token: payload.token });
    });
  };

  //redirect if loggedin
  //below line should be if(isAuthenticated) I am using ! for testing
  if (!isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
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
        <Link className="no-underline orange b" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProp = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProp)(Login);
