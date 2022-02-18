import { getLog, setLoading } from "../../actions/logActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Log from "./Log";
import Spinner from "../ui/Spinner";

const Logs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading());
    dispatch(getLog());
    // eslint-disable-next-line
  }, []);

  const { logs, loading } = useSelector((state) => state.log);
  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="container py-4 border">
        {logs.map((log, i) => (
          <Log log={log} key={i} />
        ))}
      </div>
    </>
  );
};

export default Logs;
