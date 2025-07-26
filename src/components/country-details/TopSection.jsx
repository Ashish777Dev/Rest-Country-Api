import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
const TopSection = () => {
  return (
    <div className="top-section">
      <Link to={`/`} className="back-to-home">
        <IoIosArrowRoundBack className="round-back-icon" /> Back
      </Link>
    </div>
  );
};

export default TopSection;
