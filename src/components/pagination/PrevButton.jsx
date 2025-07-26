import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const PrevButton = ({ setCurrentPage, currentPage, firstPage }) => {
  return (
    <button
      className="nav-btn prev-btn"
      onClick={() => {
        setCurrentPage(currentPage - 1);
      }}
      disabled={currentPage === firstPage} //Disable if currentPage=1 ===1-->firstPage
      aria-label="previous-button"
    >
      <MdOutlineKeyboardArrowLeft />
    </button>
  );
};

export default PrevButton;
