import React, { useState } from "react";
import { connect } from "../../lib/stateToRedux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import { api } from "../../store";

const SignUpForm = ({ setAlert, register, isAuthenicated }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      setAlert("passwords don't match", "danger");
    } else {
      api.user.create({ username, email, password }).then(({ data }) => {
        console.log(data);
      });
      // register({ username, email, password });
    }
  };

  //redirect if registered
  if (isAuthenicated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="w-60 vh-100 mt3 center">
      <h1 className="f1 measure green">Sign Up</h1>
      <p className="f3 measre">
        <i className="fas fa-user green"></i> Create Your Account
      </p>

      <form className="" onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            className="w-100 h2 mv2 f4"
            type="text"
            placeholder="Name"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="w-100 h2 f4 mv2"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-100 h2 f4 mv2"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            className="w-100 f4 h2 mv2"
            value={password2}
            onChange={(e) => onChange(e)}
          />
        </div>

        <input
          type="submit"
          className="washed-green bg-green f3 measure br1 pv1 ph3 bw0 mt2"
          value="Register"
        />
      </form>
      <p className="f3 measure">
        Already have an account?
        <Link className="ml1 no-underline orange b" to="/login">
          Sign In
        </Link>
      </p>
    </div>
  );
};

SignUpForm.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenicated: PropTypes.bool,
};

const mapStateToProp = (state) => ({
  isAuthenicated: state.auth.isAuthenticated,
});

export default connect(mapStateToProp, { setAlert, register })(SignUpForm);
