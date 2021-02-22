import React from "react";
import { Link } from "react-router-dom";

export const DashboardActions = () => {
  return (
    <div className="mt2">
      <Link
        to="/edit-profile"
        className=" f4 measure no-underline br1 bg-light-green black ph3 pv1"
      >
        <i class="fas fa-user-circle  "></i> Edit Profile
      </Link>
    </div>
  );
};
