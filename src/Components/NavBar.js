import React, { Component } from "react";

import NavLink from "../Components/NavLink";

import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar  px-md-5 px-sm-0 navbar-expand-lg navbar-dark">
        <NavLink href="/">
          <span className="navbar-brand navbar-brand-custom">
            Personalized Learning
          </span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <NavLink href="/login">
            <button className="btn navbar-button-login my-2 my-sm-0">
              Log In
            </button>
          </NavLink>
          <NavLink href="/sign-up">
            <button className="btn navbar-button-sign-up my-2 my-sm-0">
              Sign Up
            </button>
          </NavLink>
        </div>
      </nav>
    );
  }
}
