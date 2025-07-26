import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const NextButton = ({ setCurrentPage, currentPage, lastPage }) => {
  return (
    <button
      className="nav-btn next-btn"
      onClick={() => {
        setCurrentPage(currentPage + 1);
      }}
      disabled={currentPage === lastPage} //Disable if currentPage=17 ===17-->lastPage
      aria-label="next-button"
    >
      <MdOutlineKeyboardArrowRight />
    </button>
  );
};

export default NextButton;
