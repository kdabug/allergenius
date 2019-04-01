import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = props => {
  const { currentUser, userData } = props;
  return (
    <div className="header">
      <nav className="header-nav">
        <Link to="/">Home</Link>
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
            <Link to="translate">Translate</Link>
            <Link to="/login">Login</Link>
            <Link className="sign" to="/register">Sign Up</Link>
          </>
        )}
      </nav>
    </div>
  );
};
export default withRouter(Header);
