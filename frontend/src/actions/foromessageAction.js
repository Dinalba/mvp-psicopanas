import {
  FOROMESSAGE_LIST_REQUEST,
  FOROMESSAGE_LIST_SUCCESS,
  FOROMESSAGE_LIST_FAIL,
  FOROMESSAGE_CREATE_REQUEST,
  FOROMESSAGE_CREATE_SUCCESS,
  FOROMESSAGE_CREATE_FAIL,
} from "../constants/foromessageConstants";
import axios from "axios";

export const listForomessages = () => async (dispatch) => {
  try {
    dispatch({ type: FOROMESSAGE_LIST_REQUEST });

    const { data } = await axios.get("/api/foromessages");

    dispatch({ type: FOROMESSAGE_LIST_SUCCESS, payload: data });
    localStorage.setItem("foromessages", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: FOROMESSAGE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createForoMessage =
  (username, message, icon) => async (dispatch, getState) => {
    try {
      dispatch({
        type: FOROMESSAGE_CREATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/foromessages/create`,
        { username, message, icon },
        config
      );

      dispatch({
        type: FOROMESSAGE_CREATE_SUCCESS,
        payload: data,
      });
      window.location.reload(true);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: FOROMESSAGE_CREATE_FAIL,
        payload: message,
      });
    }
  };
