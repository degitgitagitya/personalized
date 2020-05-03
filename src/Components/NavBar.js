import React, { Component } from "react";

import NavLink from "../Components/NavLink";
import { AuthContext } from "../Contexts/Authentication";

import "./NavBar.css";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  static contextType = AuthContext;

  handleLogOut = () => {
    this.context.changeAuthToFalse();
    this.props.history.push("/");
  };

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

        {this.context.isAuth ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-5">
              <li
                onClick={() => {
                  this.props.history.push("/pemilihan-materi");
                }}
                className="nav-item mr-5 clickable-item text-white font-weight-bold"
              >
                Materi
              </li>
              <li
                onClick={() => {
                  this.props.history.push("/daftar-evaluasi");
                }}
                className="nav-item clickable-item text-white font-weight-bold"
              >
                Evaluasi
              </li>
            </ul>
            <button
              onClick={this.handleLogOut}
              className="btn navbar-button-login my-2 my-sm-0"
            >
              Log Out
            </button>
          </div>
        ) : (
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
        )}
      </nav>
    );
  }
}

export default withRouter(NavBar);
