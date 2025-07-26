import React from "react";

const List = ({ label, value }) => {
  return (
    <li>
      <strong>{label}:</strong>
      <p>{value}</p>
    </li>
  );
};

export default List;
