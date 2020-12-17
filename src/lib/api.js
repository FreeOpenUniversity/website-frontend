import { camelCase, isArray, keyBy } from "lodash";
import { fromStateMap } from "./stateToRedux";

const toObject = (obj, { k, v }) => {
  obj[k] = v;
  return obj;
};

export const apiFactory = (baseURL, stateMap, dispatch) => {
  const { actions } = fromStateMap(stateMap);
  const methods = {
    create: "post",
    read: "get",
    update: "patch",
    delete: "delete",
  };

  const requestShape = (resourceName, method) => async (data) => {
    const id = data?.id;
    if (("update" === method || "delete" === method) && id === undefined) {
      throw `missing id in call:
       resource: ${resourceName}
       method: ${method}`;
    }
    const url = [baseURL, resourceName, id || ""].join("/");
    let options = {
      method,
      headers: {
        Authorization: "Bearer " + localStorage.authToken,
      },
      json: true,
    };
    const body = JSON.stringify(data);
    if (!method === "get") options.body = body;

    return dispatch({
      type: `${method}_${resourceName}`.toUpperCase(),
      payload: (await fetch(url, options)).json(),
    }).then(({ value }) => {
      isArray(value) && (value = keyBy(value, "id"));
      const key = camelCase("update_" + resourceName);
      return dispatch(actions[key](value));
      // return {
      //   post: dispatch(),
      //   update: dispatch(actions[k](data)),
      //   delete: dispatch(actions[k](data))
      // }[key]
    });
  };

  const resourceNames = Object.keys(stateMap);

  const api = resourceNames
    .map((resource) => ({
      k: resource,
      v: Object.keys(methods)
        .map((method) => ({
          k: method,
          v: requestShape(resource, methods[method]),
        }))
        .reduce(toObject, {}),
    }))
    .reduce(toObject, {});
  return api;
};
