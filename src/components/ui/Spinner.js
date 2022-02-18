import React from "react";

const spinner = () => {
  return (
    <div className="d-flex justify-content-center my-4 py-4">
      <div
        className="spinner-border text-secondary"
        style={{ width: "4rem", height: "4rem" }}
      ></div>
    </div>
  );
};

export default spinner;
