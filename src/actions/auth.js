import axios from "axios";
import {
  LOGIN_SUCCSESS,
  LOGIN_FAIL,
  REGISTER_SUCCSESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";

//load user
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//register user
export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      Content_Type: "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("api/users", body, config);
    dispatch({
      type: REGISTER_SUCCSESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//login user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      Content_Type: "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCSESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//logout
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
