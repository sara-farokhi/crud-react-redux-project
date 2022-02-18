import { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../actions/logActions";

const Search = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const searchHandler = (e) => {
    e.preventDefault();
    dispatch(search(text));
  };

  return (
    <div>
      <div className="container-fluid bg-info py-1 px-5">
        <div className="container">
          <form onSubmit={(e) => searchHandler(e)}>
            <div className="input-group">
              <input
                type="text"
                className="form-control m-0 outline-light bg-transparent border-0"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></input>
              <button
                className="input-group-text bg-transparent border-0 text-white"
                id="basic-addon1"
                type="submit"
              >
                <i className="bi bi-search h2"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
