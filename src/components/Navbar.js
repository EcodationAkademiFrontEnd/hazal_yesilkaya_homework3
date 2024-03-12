import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container justify-content-center">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item me-4">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="home"
                exact
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-4">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
