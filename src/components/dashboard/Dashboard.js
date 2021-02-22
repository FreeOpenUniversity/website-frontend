import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Link } from "react-router-dom";
import { DashboardActions } from "./DashboardActions";

const Dashboard = ({ getCurrentProfile, auth: { user }, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);
  return (
    <div className="w-80 center vh-100">
      <h1 className="dark-green f2 measure">Dashboard</h1>
      <p>
        {" "}
        <i className="fas fa-user f4"> Welcome {user && user.name}</i>
      </p>

      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          {/*next lines should be in the other fragment but moved here for testing  */}
          <p className="f4">
            You have not yet setup a profile, please add some info{" "}
          </p>
          <Link
            to="create-profile"
            className="no-underline bg-dark-green br1 washed-green ph2 pv1 f4"
          >
            {" "}
            Create Profile
          </Link>
        </Fragment>
      ) : (
        <Fragment></Fragment>
      )}
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
