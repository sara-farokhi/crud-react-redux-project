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

const initState = {
  logs: [],
  loading: false,
  show: false,
  editShow: false,
  delShow: false,
  current: {},
};
const logReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_LOGS:
      return { ...state, logs: action.payload, loading: false };
    case ADD_NEW_LOG:
      return { ...state, logs: [...state.logs, action.payload] };

    case SHOW_ADD_LOG_MODAL:
      return { ...state, show: true };

    case HIDE_ADD_LOG_MODAL:
      return {
        ...state,
        show: false,
      };
    case SHOW_EDITE_LOG_MODAL:
      return {
        ...state,
        editShow: true,
      };
    case HIDE_EDITE_LOG_MODAL:
      return {
        ...state,
        editShow: false,
      };
    case DELETE_lOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    case CURRENT_LOG_INFO:
      return {
        ...state,
        current: action.payload,
      };
    case UPDATE_LOG_MODAL:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
      };
    case DELETE_CONFIRM:
      return {
        ...state,
        delShow: true,
      };
    case HIDE_DELETE_CONFIRM:
      return {
        ...state,
        delShow: false,
      };

    case SEARCH:
      return { ...state, logs: action.payload };

    default:
      return state;
  }
};

export default logReducer;
