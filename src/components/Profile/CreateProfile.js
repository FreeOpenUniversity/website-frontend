import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { createProfile } from "../../actions/profile";

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    summary: "",
  });

  const { name, occupation, summary } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <div className="w-80 center vh-100">
      <h1 className="f2 measure dark-green mt4">Create your profile</h1>

      <form class="" onSubmit={(e) => onSubmit(e)}>
        <input
          className="w-100 pa2 mv2"
          name="name"
          type="text"
          value={name}
          onChange={(e) => onChange(e)}
          placeholder="Your Name"
        />

        <select
          name="occupation"
          value={occupation}
          onChange={(e) => onChange(e)}
          className="w-100 pa2 mv2"
        >
          <option value="0"> Select Professional Status</option>
          <option value="Student">Student</option>
          <option value="Other">Other</option>
        </select>

        <textarea
          className="w-100 pa2 mv2 vh-20"
          placeholder="A short symmary of yourself"
          name="summary"
          value={summary}
          onChange={(e) => onChange(e)}
        ></textarea>
        <small class="db">Tell us a little about yourself</small>
        <div className="mv3">
          <input
            type="submit"
            className="no-underline bg-dark-green br1 washed-green ph3 pv1 f4 bn"
          />
          <Link className="no-underline mh2 dark-green f4" to="/dashboard">
            Go Back
          </Link>
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
