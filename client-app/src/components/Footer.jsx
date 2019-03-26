import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = props => {
  return (
    <div className="footer">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/privacy">Privacy</Link>
        <Link to="/FAQ">FAQ</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};
export default withRouter(Footer);
