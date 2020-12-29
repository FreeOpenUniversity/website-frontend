import { camelCase, isArray, keyBy, keys } from "lodash";
import { fromStateMap } from "./stateToRedux";
import { crossProduct, trie } from "./utils";

/**
 * @typedef {(data:{id?}, options?:{query})=>Promise<Response>} ApiCall
 */
/**
 *@param {string} baseURL the baseURL prepended to each path.
 * @param {string} resourceName the name of the resource.
 * @param {string} method the name of the method
 * @param {import("redux").Dispatch} dispatch dispatch object to connect this api to a redux store
 * @returns {ApiCall}
 * @description An interface to a standard, un-nested RESTful api.
 */
const requestFactory = (
  baseURL,
  resourceName,
  method,
  dispatch,
  actions
) => async (data, userOptions = {}) => {
  const { query } = userOptions;

  const urlQuery = query
    ? Object.entries(query)
        .map(([k, v]) => `${k}=${isArray(v) ? v.join(",") : v}`)
        .join("&")
    : "";

  const id = data?.id;
  if (method === "post" && id)
    throw "can't post with an id. Id creation is the responsibility of the backend";

  if (["patch", "delete"].includes(method) && id === undefined) {
    throw `missing id in call:
       resource: ${resourceName}
       method: ${method}`;
  }

  const url = [baseURL, resourceName, id || ""].join("/") + "?" + urlQuery;
  let options = {
    method,
    headers: {
      Authorization: "Bearer " + localStorage.authToken,
    },
    json: true,
  };
  const body = JSON.stringify(data);
  if (!method === "get") options.body = body;
  const requestAction = {
    type: `${method}_${resourceName}`.toUpperCase(),
    payload: (await fetch(url, options)).json(),
  };
  return dispatch(requestAction).then(({ value }) => {
    isArray(value) && (value = keyBy(value, "id"));
    const key = camelCase("update_" + resourceName);
    return dispatch(actions[key](value));
  });
};

/**
 * @param {string} baseURL the base url for the api
 * @param {{[resource:string]:any}} stateMap object with api resourceNames as keys
 * @param { import("react").Dispatch} dispatch redux dispatch for the redux store
 * @returns {{[resource:string]:
 *  {
 *   create: ApiCall,
 *   read: ApiCall,
 *   get: ApiCall,
 *   update: ApiCall,
 *   delete: ApiCall
 * }]}} api
 *
 * @description
 * ApiFactory is based on the specifications of RESTful (rails like) apis.
 *
 * the apiFactory takes a stateMap like the one used in stateToRedux, and returns
 * crud commands for each of the resources in the map.
 *
 * if the user includes a data object with an id in their crud command, the id will
 * be appended to the url. So api.book.get({id:32}) should retrieve the book with
 * id 32.
 *
 * The tool does not work with nested resources.
 */
export const apiFactory = (baseURL, stateMap, dispatch) => {
  const { actions } = fromStateMap(stateMap);
  const methods = {
    create: "post",
    read: "get",
    get: "get",
    update: "patch",
    delete: "delete",
  };

  const resourceNames = keys(stateMap);

  // From [resource, method, function] triplets, we create a trie (https://en.wikipedia.org/wiki/Trie)
  const paths = crossProduct(
    resourceNames,
    keys(methods)
  ).map(([resource, method]) => [
    resource,
    method,
    requestFactory(baseURL, resource, methods[method], dispatch, actions),
  ]);

  return trie(paths).tree;
};
