import axios from "axios";
import {
  GET_TECHS,
  HIDE_TECHLIST_MODAL,
  SHOW_TECHLIST_MODAL,
  SHOW_ADD_TECH_MODAL,
  HIDE_ADD_TECH_MODAL,
  ADD_TECH,
} from "../types";

// get techs from server

export const getTechList = () => async (dispatch) => {
  const res = await axios.get("http://localhost:3004/techs");
  dispatch({ type: GET_TECHS, payload: res.data });
};

export const addTech = (newTech) => async (dispatch) => {
  const res = await axios.post(`http://localhost:3004/techs`, newTech);
  dispatch({ type: ADD_TECH, payload: res.data });
};

// MODALS
export const showTechsModal = () => {
  return { type: SHOW_TECHLIST_MODAL };
};
export const hideTechModals = () => {
  return {
    type: HIDE_TECHLIST_MODAL,
  };
};
export const showAddTechModal = () => {
  return { type: SHOW_ADD_TECH_MODAL };
};
export const closeAddTechModal = () => {
  return {
    type: HIDE_ADD_TECH_MODAL,
  };
};
