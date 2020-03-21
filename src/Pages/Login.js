import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { AuthContext } from "../Contexts/Authentication";
import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";

import "./Login.css";

class Login extends Component {
  static contextType = AuthContext;

  state = {
    inputEmail: "",
    inputPassword: "",
    error: false,
    errorMsg: ""
  };

  onChangeEmail = event => {
    this.setState({
      inputEmail: event.target.value
    });
  };

  onChangePassword = event => {
    this.setState({
      inputPassword: event.target.value
    });
  };

  toggleError = msg => {
    this.setState({
      error: true,
      errorMsg: msg
    });
  };

  handleClickLogin = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: this.state.inputEmail,
      password: this.state.inputPassword
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://127.0.0.1:5000/auth/siswa", requestOptions)
      .then(response => response.json())
      .then(data => {
        if (Object.entries(data).length === 0 && data.constructor === Object) {
          this.toggleError("Wrong Email / Password");
        } else {
          this.context.changeAuthToTrue(data);
          if (data.id_gaya_belajar === "") {
            this.props.history.push("/petunjuk");
          } else {
            this.props.history.push("/pemilihan-materi");
          }
        }
      })
      .catch(error => console.log("error", error));
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.handleClickLogin();
    }
  };

  checkInput = () => {
    if (this.state.inputPassword === "" || this.state.inputEmail === "") {
      return false;
    } else {
      return true;
    }
  };

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
                value={this.state.inputEmail}
                onChange={this.onChangeEmail}
                onKeyPress={this.handleKeyPress}
                id="email"
                className="form-control login-input"
                placeholder="Email"
                type="email"
              />
              <label className="label-control" htmlFor="password">
                Password
              </label>
              <input
                value={this.state.inputPassword}
                onChange={this.onChangePassword}
                onKeyPress={this.handleKeyPress}
                id="password"
                className="form-control login-input"
                placeholder="Password"
                type="password"
              />
              {this.state.error ? (
                <div className="text-danger my-1 text-left">
                  {this.state.errorMsg}
                </div>
              ) : (
                ""
              )}
              <button
                onClick={() => {
                  if (this.checkInput() === true) {
                    this.handleClickLogin(this.props);
                  } else {
                    this.toggleError("Fill Email & Password");
                  }
                }}
                className="btn form-control btn-success mt-3"
              >
                Login
              </button>

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

export default withRouter(Login);
