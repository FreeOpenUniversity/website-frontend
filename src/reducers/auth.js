import { REGISTER_SUCCSESS, REGISTER_FAIL } from "../actions/types";

const initialState = {
  token: localStorage.getItem("getItem"),
  isAuthenicated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCSESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenicated: true,
        loading: false,
      };

    case REGISTER_FAIL:
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
