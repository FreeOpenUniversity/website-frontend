import {
  SET_ALERT,
  REMOVE_ALERT,
  USER_LOADED,
  AUTH_ERROR,
  REGISTER_SUCCSESS,
  REGISTER_FAIL,
  LOGIN_SUCCSESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";

export const initialState = {
  token: localStorage.getItem("token"),
  isAuthenicated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenicated: true,
        loaded: false,
        user: payload,
      };
    case LOGIN_SUCCSESS:
    case REGISTER_SUCCSESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenicated: true,
        loading: false,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenicated: false,
        loading: false,
      };

    default:
      return state;
  }
}
