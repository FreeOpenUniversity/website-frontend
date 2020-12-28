import { matchPath } from "react-router-dom";

// utils.js;
export const crossProduct = (a1, a2) =>
  a1.map((e1) => a2.map((e2) => [e1, e2])).flat();

export const matchRoutes = (path, routes) => {
  return routes.filter((r) => matchPath(path, r))[0];
};
