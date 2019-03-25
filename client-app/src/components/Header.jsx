import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { show, currentUser, userData } = props;
  return (
    show && (
      <div className="header">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/places">Places</Link>
          <Link to="/food-allergens">Food Allergies</Link>
          <Link to="/travel-tips">Travel Tips</Link>
          {currentUser && (
            <Link
              to={
                "/user/" +
                userData.user.id +
                "/username/" +
                userData.user.username
              }
            >
              Profile
            </Link>
          )}
          {!currentUser && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </div>
    )
  );
};
export default withRouter(Header);
