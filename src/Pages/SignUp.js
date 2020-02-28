import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";

import "./Login.css";
import "./SignUp.css";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-11 col-md-4 sign-up-container">
              <div className="login-title">Sign Up</div>
              <label className="label-control" htmlFor="nama">
                Nama Lengkap
              </label>
              <input
                id="nama"
                className="form-control login-input"
                placeholder="Nama Lengkap"
                type="text"
              />
              <label className="label-control" htmlFor="username">
                Username
              </label>
              <label className="label-control" htmlFor="email">
                Username
              </label>
              <input
                id="email"
                className="form-control login-input"
                placeholder="Username"
                type="email"
              />
              <label className="label-control" htmlFor="password">
                Password
              </label>
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
                placeholder="Konfirmasi Password"
                type="password"
              />

              <label className="label-control" htmlFor="password-confirm">
                Konfirmasi Password
              </label>
              <input
                id="password-confirm"
                className="form-control login-input"
                placeholder="Password"
                type="password"
              />

              <NavLink href="/sign-up">
                <button className="btn form-control btn-outline-info mt-3">
                  Sign Up
                </button>
              </NavLink>

              <div className="login-button-label">Already Have an Account?</div>

              <NavLink href="/login">
                <button className="btn form-control btn-success mt-3">
                  Login
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
