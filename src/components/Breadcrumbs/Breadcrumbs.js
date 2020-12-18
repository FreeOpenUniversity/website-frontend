import React from "react";
import { Breadcrumbs as MUIBreadcrumbs } from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <MUIBreadcrumbs className="avenir pa2 ph5 link green" separator=">">
      {pathnames.length > 0 ? (
        <Link
          className="no-underline avenirlink hover-green hover-animate"
          onClick={() => history.push("/")}
        >
          <i className="fas fa-home link black"></i>
        </Link>
      ) : (
        <i className="fas fa-home link black"></i>
      )}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <div className="ttc" key={name}>
            {name}
          </div>
        ) : (
          <Link
            key={name}
            className="no-underline fw4 avenirlink hover-green hover-animate"
            onClick={() => history.push(routeTo)}
          >
            <div className="ttc"> {name}</div>
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
