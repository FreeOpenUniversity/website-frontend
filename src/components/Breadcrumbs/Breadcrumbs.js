import React from "react";
import { withRouter, Link } from "react-router-dom";
import { matchRoutes } from "../../lib/utils";
import { FaHome, FaAngleRight } from "react-icons/fa";

const Breadcrumbs = (props) => {
  const {
    location: { pathname },
    routes,
  } = props;

  const pathnames = pathname.split("/").filter((x) => x);
  return (
    <div>
      {pathnames.length >
        0 /*if pathnames then return the whole crumbs, else nothing*/ && (
        <div className="avenir pa2 ph5 link flex">
          {/* homecrumbs */}
          <Link
            to={"/"}
            className="no-underline avenir link hover-green hover-animate"
            // onClick={() => history.push("/")}
          >
            <FaHome className="link black pl4" /> {/*home logo*/}
          </Link>
          <span className="ph2">
            <FaAngleRight />{" "}
          </span>{" "}
          {/*separator following home*/}
          {/* the rest of the crumbs */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const route = matchRoutes(routeTo, routes);
            if (!route) return null;

            const title = route
              ? typeof route.title == "function"
                ? route.title(props)
                : route.title
              : name;
            const isLast = index === pathnames.length - 1;
            return isLast ? (
              // make the end the crumbs text , not link
              <div className="ttc b" key={name}>
                {title}
              </div>
            ) : (
              <div className="flex" key={name}>
                <Link
                  to={routeTo}
                  key={title}
                  className="no-underline fw4 avenir link hover-green hover-animate flex"
                  // onClick={() => history.push(routeTo)}
                >
                  <div className="ttc b"> {title} </div>
                </Link>
                <span className="ph2"> {">"} </span> {/* breadcrumb separator*/}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default withRouter(Breadcrumbs);
