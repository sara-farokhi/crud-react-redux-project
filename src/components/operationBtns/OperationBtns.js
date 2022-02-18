import React from "react";
import { useDispatch } from "react-redux";
import { showAddLogModal } from "../../actions/logActions";
import {
  showTechsModal,
  getTechList,
  showAddTechModal,
} from "../../actions/techActions";

const OperationBtns = () => {
  const dispatch = useDispatch();
  const showAddLogModalHandler = () => {
    dispatch(showAddLogModal());
    dispatch(getTechList());
  };

  const showTechsModalHandler = () => {
    dispatch(getTechList());
    dispatch(showTechsModal());
  };
  const addTechsModalHandler = () => {
    dispatch(showAddTechModal());
  };
  return (
    <div className="operation-btns">
      <div className="tech-list" onClick={showTechsModalHandler}>
        <i className="bi bi-person-lines-fill"></i>
      </div>
      <div className="add-tech">
        <i
          className="bi bi-person-plus-fill"
          onClick={addTechsModalHandler}
        ></i>
      </div>
      <div className="add" onClick={showAddLogModalHandler}>
        <i className="bi bi-plus"></i>
      </div>
    </div>
  );
};

export default OperationBtns;
