import React from "react";

const PageButton = ({ pageNo, setCurrentPage, currentPage }) => {
 
  return (
    <button
      className={`${currentPage === pageNo ? "active" : ""} page-btn `}
      onClick={() => setCurrentPage(pageNo)}
    >
      {pageNo}
    </button>
  );
};

export default PageButton;
