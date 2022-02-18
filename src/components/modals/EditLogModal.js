import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateLog, hideEditLogModal } from "../../actions/logActions";
import Tech from "../techs/Tech";

const EditLogModal = () => {
  const { editShow, current } = useSelector((state) => state.log);
  const { techs } = useSelector((state) => state.tech);

  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(hideEditLogModal());
  };

  const [message, setMessage] = useState(current.message);
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState("");
  useEffect(() => {
    setMessage(current.message);
    setTech(current.tech);
    setAttention(current.attention);
  }, [current]);
  const updateInfo = { message, attention, tech, date: new Date() };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateLog(current.id, updateInfo));
    handleClose();
  };

  return (
    <Modal
      show={editShow}
      onHide={handleClose}
      className="d-flex justify-content-center align-items-center"
    >
      <Modal.Header closeButton>
        <Modal.Title>Edite Log</Modal.Title>
      </Modal.Header>

      <form className="p-3" onSubmit={(e) => submitHandler(e)}>
        <div className="form-group mb-3">
          <label htmlFor="message" className="mb-3">
            Log Message
          </label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="techs" className="mb-3">
            Select Technician
          </label>
          <select
            className="form-control"
            id="techs"
            value={tech}
            onChange={(e) => setTech(e.target.value)}
          >
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
            checked={attention}
            onChange={(e) => setAttention(e.target.checked)}
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

export default EditLogModal;
