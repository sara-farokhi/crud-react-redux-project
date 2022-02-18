import {
  GET_TECHS,
  SHOW_TECHLIST_MODAL,
  HIDE_TECHLIST_MODAL,
  SHOW_ADD_TECH_MODAL,
  HIDE_ADD_TECH_MODAL,
  ADD_TECH,
} from "../types";

const initState = {
  techs: [],
  show: false,
  showAdd: false,
};

const techReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return { ...state, techs: action.payload };

    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
      };

    case SHOW_TECHLIST_MODAL:
      return { ...state, show: true };

    case HIDE_TECHLIST_MODAL:
      return {
        ...state,
        show: false,
      };

    case SHOW_ADD_TECH_MODAL:
      return { ...state, showAdd: true };

    case HIDE_ADD_TECH_MODAL:
      return { ...state, showAdd: false };

    default:
      return state;
  }
};

export default techReducer;
