import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { hideTechModals } from "../../actions/techActions";
import Tech from "../techs/Tech";
import Spinner from "../ui/Spinner";

const ShowTechlistModal = () => {
  const dispatch = useDispatch();
  const { show, techs } = useSelector((state) => state.tech);

  const handleClose = () => {
    dispatch(hideTechModals());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Technician List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {techs.length === 0 && <p>There is no technician in the list</p>}

        {techs.map((tech, i) => (
          <Tech tech={tech} key={i} />
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default ShowTechlistModal;
