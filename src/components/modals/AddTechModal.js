import { Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeAddTechModal, addTech } from "../../actions/techActions";
import { useState } from "react";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nameLable, setNameLable] = useState("Technician Name");
  const [lastNameLable, setLastNameLable] = useState("Technician Lastname");

  const newTech = { firstName, lastName };
  const { showAdd } = useSelector((state) => state.tech);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(closeAddTechModal());
  };
  const submiTech = (e) => {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      dispatch(addTech(newTech));
      handleClose();
      setFirstName("");
      setLastName("");
    }

    if (firstName === "") {
      setNameLable(<span className="text-danger">Please enter a name!</span>);

      setTimeout(() => {
        setNameLable("Technician Name");
      }, 2000);
    }
    if (lastName === "") {
      setLastNameLable(
        <span className="text-danger">Please enter a lastname!</span>
      );
      setTimeout(() => {
        setLastNameLable("Technician Last Name");
      }, 2000);
    }
  };

  return (
    <Modal show={showAdd} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Technician</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={submiTech}>
          <label lablefor="name">{nameLable}</label>
          <input
            type="text"
            id="name"
            className="w-100 border-bottom p-2 border-info border-0 mb-3"
            style={{ outline: "none" }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label lablefor="lastname">{lastNameLable} </label>
          <input
            style={{ outline: "none" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastname"
            className="w-100 border-bottom p-2 border-info border-0 mb-3"
          />

          <Modal.Footer>
            <Button variant="primary" type="submit">
              submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddTechModal;
