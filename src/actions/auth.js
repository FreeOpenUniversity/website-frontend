import axios from "axios";
import { REGISTER_SUCCSESS, REGISTER_FAIL } from "./types";

export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      content_Type: "application/json",
    },
  };

  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("api/users", body, config);
    dispatch({
      type: REGISTER_SUCCSESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
