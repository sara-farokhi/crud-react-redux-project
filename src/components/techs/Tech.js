import React from "react";

const Tech = ({ tech }) => {
  return (
    <>
      <option value={`${tech.firstName} ${tech.lastName}`}>
        {`${tech.firstName} ${tech.lastName}`}
      </option>
    </>
  );
};

export default Tech;
