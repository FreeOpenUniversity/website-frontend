// utils.js;
export const crossProduct = (a1, a2) =>
  a1.map((e1) => a2.map((e2) => [e1, e2])).flat();

export const trie = (paths) => {
  let _tree = {};
  const that = {
    add: (inpPath) => {
      let [value, ...path] = inpPath.reverse();
      let parent = _tree;
      let cursor = _tree;
      let key = null;
      while (path.length) {
        key = path.pop();
        if (!cursor[key]) {
          cursor[key] = {};
        }
        parent = cursor;
        cursor = cursor[key];
      }
      parent[key] = value;

      return cursor.value;
    },

    get: (inpPath) => {
      let path = inpPath.reverse();
      let key = null;
      let cursor = _tree;
      while (path.length) {
        key = path.pop();
        if (!cursor[key]) {
        }
      }
    },
    tree: _tree,
  };
  paths && paths.forEach((p) => that.add(p));
  return that;
};
