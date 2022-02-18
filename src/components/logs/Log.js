import { useDispatch } from "react-redux";
import {
  deletConfirm,
  editLogModal,
  currentLogInfo,
} from "../../actions/logActions";
import { getTechList } from "../../actions/techActions";

const Log = ({ log: { tech, message, date, attention, id } }) => {
  const info = { tech, message, date, attention, id };

  const dispatch = useDispatch();
  const handleEditLog = () => {
    dispatch(currentLogInfo(info));
    dispatch(getTechList());
    dispatch(editLogModal());
  };
  const showDelConfirm = () => {
    dispatch(currentLogInfo(info));
    dispatch(deletConfirm());
  };
  return (
    <div className="border-bottom d-flex  justify-content-between">
      <div className="info">
        <p className={`h4 p-3  ${attention ? "text-danger" : "text-success"}`}>
          {message}
        </p>
        <p>
          Updated by <strong>{tech}</strong> on <strong>{date}</strong>
        </p>
      </div>
      <div className="icons m-3">
        <i
          className="bi bi-pencil-square me-3 h4 text-secondary"
          style={{ cursor: "pointer" }}
          onClick={() => handleEditLog()}
        ></i>
        <i
          className="bi bi-trash h4 text-danger"
          style={{ cursor: "pointer" }}
          onClick={() => showDelConfirm(id)}
        ></i>
      </div>
    </div>
  );
};

export default Log;
