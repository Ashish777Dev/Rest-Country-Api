import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      Challenge by{" "}
      <Link to={"https://www.frontendmentor.io/home"}>Frontend Mentor.</Link>{" "}
      Coded by Ashish Vasava
    </footer>
  );
};

export default Footer;
