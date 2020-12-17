// utils.js;
export const crossProduct = (a1, a2) =>
  a1.map((e1) => a2.map((e2) => [e1, e2])).flat();
