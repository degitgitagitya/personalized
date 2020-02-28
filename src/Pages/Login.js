import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";

import "./Login.css";

export default class Login extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-md-4 login-container">
              <div className="login-title">Login</div>
              <label className="label-control" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="form-control login-input"
                placeholder="Email"
                type="email"
              />
              <label className="label-control" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                className="form-control login-input"
                placeholder="Password"
                type="password"
              />
              <NavLink href="/petunjuk">
                <button className="btn form-control btn-success mt-3">
                  Login
                </button>
              </NavLink>

              <div className="login-button-label">Don't Have an Account?</div>

              <NavLink href="/sign-up">
                <button className="btn form-control btn-outline-info mt-3">
                  Sign Up
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
