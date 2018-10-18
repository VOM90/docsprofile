import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ authUser, removeAuthUser }) => {
  return (
    <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
      <div className="container">
        <div className="topbar-left">
          <button className="topbar-toggler">☰</button>
          <Link className="topbar-brand" to="/">
            <img
              className="logo-default"
              src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
              alt="logo"
            />
            <img
              className="logo-inverse"
              src={`${process.env.PUBLIC_URL}/assets/img/logo-light.png`}
              alt="logo"
            />
          </Link>
        </div>
        <div className="topbar-right">
          <ul className="topbar-nav nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {authUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/profile/documents/add">
                  Add Document
                </Link>
              </li>
            )}

            {authUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                  <i className="fa fa-caret-down" />
                </Link>
                <div className="nav-submenu">
                  <Link className="nav-link" to="/" onClick={removeAuthUser}>
                    Logout
                  </Link>
                </div>
              </li>
            )}

            {!authUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/signin">
                  Signin
                </Link>
              </li>
            )}

            {!authUser && (
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Signup
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
