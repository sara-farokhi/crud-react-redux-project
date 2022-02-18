// import Tech from "../techs/Tech";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { closeAddLogModal, creatNewLog } from "../../actions/logActions";
import Tech from "../techs/Tech";

const AddLogModal = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.log);
  const { techs } = useSelector((state) => state.tech);

  const handleClose = () => {
    dispatch(closeAddLogModal());
  };
  const [attention, setAttention] = useState(false);
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [msgLabel, setMsgLabel] = useState("Log Message");
  const [techLabel, setTechLabel] = useState("Select Technician");

  const newLog = {
    message,
    attention,
    tech,
    date: new Date(),
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
    setMsgLabel("Log Message");
  };
  const techHandler = (e) => {
    setTech(e.target.value);
    setTechLabel("Select Technician");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (message !== "" && tech !== "") {
      dispatch(creatNewLog(newLog));
      handleClose();
      setAttention(false);
      setMessage("");
      setTech("");
    }
    if (message === "") {
      setMsgLabel(
        <span style={{ color: "red" }}>Please leave a message!</span>
      );
    }
    if (tech === "") {
      setTechLabel(
        <span style={{ color: "red" }}>Please select a technician!</span>
      );
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="d-flex justify-content-center align-items-center"
    >
      <Modal.Header closeButton>
        <Modal.Title>Enter System Log</Modal.Title>
      </Modal.Header>

      <form className="p-3" onSubmit={(e) => submitHandler(e)}>
        <div className="form-group mb-3">
          <label htmlFor="message" className="mb-3">
            {msgLabel}
          </label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => messageHandler(e)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="techs" className="mb-3">
            {techLabel}
          </label>
          <select
            className="form-control"
            id="techs"
            value={tech}
            onChange={(e) => techHandler(e)}
          >
            <option>Technicians</option>
            {techs.map((tech, i) => (
              <Tech tech={tech} key={i} />
            ))}
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="attention" className="mx-2">
            Need Attention
          </label>
          <input
            type="checkbox"
            onChange={(e) => setAttention(e.target.checked)}
            checked={attention}
          />
        </div>
        <Modal.Footer>
          <Button type="submit" variant="primary">
            Submit Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default AddLogModal;
