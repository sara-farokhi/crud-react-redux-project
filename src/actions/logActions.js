import axios from "axios";
import {
  GET_LOGS,
  SHOW_ADD_LOG_MODAL,
  HIDE_ADD_LOG_MODAL,
  ADD_NEW_LOG,
  DELETE_lOG,
  SHOW_EDITE_LOG_MODAL,
  HIDE_EDITE_LOG_MODAL,
  CURRENT_LOG_INFO,
  UPDATE_LOG_MODAL,
  SEARCH,
  DELETE_CONFIRM,
  HIDE_DELETE_CONFIRM,
  SET_LOADING,
} from "../types";

// get log info
export const getLog = () => async (dispatch) => {
  const res = await axios.get(`http://localhost:3004/logs`);
  dispatch({ type: GET_LOGS, payload: res.data });
};

// create new log

export const creatNewLog = (newlog) => async (dispatch) => {
  const res = await axios.post(`http://localhost:3004/logs`, newlog);
  dispatch({ type: ADD_NEW_LOG, payload: res.data });
};

// delete log

export const deleteLog = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:3004/logs/${id}`);
  dispatch({ type: DELETE_lOG, payload: id });
};

// current log info
export const currentLogInfo = (info) => {
  return { type: CURRENT_LOG_INFO, payload: info };
};
// update log info

export const updateLog = (id, updated) => async (dispatch) => {
  const res = await axios.put(`http://localhost:3004/logs/${id}`, updated);

  dispatch({ type: UPDATE_LOG_MODAL, payload: res.data });
};
// search log

export const search = (text) => async (dispatch) => {
  const res = await axios.get(`http://localhost:3004/logs/?q=${text}`);
  dispatch({ type: SEARCH, payload: res.data });
};

// MODALS

// show add log modals
export const showAddLogModal = () => {
  return { type: SHOW_ADD_LOG_MODAL };
};

// close add log modal

export const closeAddLogModal = () => {
  return { type: HIDE_ADD_LOG_MODAL };
};

export const editLogModal = () => {
  return { type: SHOW_EDITE_LOG_MODAL };
};
export const hideEditLogModal = () => {
  return { type: HIDE_EDITE_LOG_MODAL };
};
export const deletConfirm = () => {
  return { type: DELETE_CONFIRM };
};
export const hideDeletConfirm = () => {
  return { type: HIDE_DELETE_CONFIRM };
};
// LOADING
export const setLoading = () => {
  return { type: SET_LOADING };
};
