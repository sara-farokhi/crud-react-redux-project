import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideDeletConfirm, deleteLog } from "../../actions/logActions";

const DeleteConfirmModal = () => {
  const { current } = useSelector((state) => state.log);
  const dispatch = useDispatch();
  const { delShow } = useSelector((state) => state.log);

  const handleClose = () => {
    dispatch(hideDeletConfirm());
  };
  const handelDelete = () => {
    dispatch(deleteLog(current.id));
    dispatch(hideDeletConfirm());
  };

  return (
    <Modal show={delShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Log {current.message}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center p-4 h6">Are you sure to delete ?</p>
        <div className="d-flex justify-content-center">
          <button className="btn btn-danger mx-1" onClick={handelDelete}>
            Yes
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClose}>
            No
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteConfirmModal;
