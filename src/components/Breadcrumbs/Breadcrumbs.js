import React from "react";
import { withRouter, Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <div>
      {pathnames.length >
        0 /*if pathnames then return the whole crumbs, else nothing*/ && (
        <div className="avenir pa2 ph5 link flex">
          {/* homecrumbs */}
          <Link
            className="no-underline avenir link hover-green hover-animate"
            onClick={() => history.push("/")}
          >
            <i className="fas fa-home link black"></i> {/*home logo*/}
          </Link>
          <span className="ph2"> > </span> {/*separator following home*/}
          {/* the rest of the crumbs */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return isLast ? (
              // make the end the crumbs text , not link
              <div className="ttc" key={name}>
                {name}
              </div>
            ) : (
              <div className="flex">
                <Link
                  key={name}
                  className="no-underline  fw4 avenirlink hover-green hover-animate flex"
                  onClick={() => history.push(routeTo)}
                >
                  <div className="ttc"> {name} </div>
                </Link>
                <span className="ph2"> > </span> {/* breadcrumb separator*/}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default withRouter(Breadcrumbs);
