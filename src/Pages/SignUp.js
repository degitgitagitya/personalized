import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";

import "./Login.css";
import "./SignUp.css";

class SignUp extends Component {
  state = {
    inputNama: "",
    inputEmail: "",
    inputPassword: "",
    inputConfirm: "",
    error: false,
    errorMsg: ""
  };

  onChangeNama = event => {
    this.setState({
      inputNama: event.target.value
    });
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

  onChangeConfirm = event => {
    this.setState({
      inputConfirm: event.target.value
    });
  };

  toggleError = msg => {
    this.setState({
      error: true,
      errorMsg: msg
    });
  };

  checkEmail = () => {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.state.inputEmail
      )
    ) {
      return true;
    }
    return false;
  };

  checkNull = () => {
    const { inputNama, inputEmail, inputPassword, inputConfirm } = this.state;
    if (
      inputNama === "" ||
      inputEmail === "" ||
      inputPassword === "" ||
      inputConfirm === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  handleSignUpButton = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: this.state.inputEmail,
      id_gaya_belajar: "",
      id_kelas: "",
      nama: this.state.inputNama,
      password: this.state.inputPassword
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://127.0.0.1:5000/siswa", requestOptions)
      .then(response => response.json())
      .then(result => {
        this.props.history.push("/login");
      })
      .catch(error => console.log("error", error));
  };

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
                value={this.state.inputNama}
                onChange={this.onChangeNama}
                id="nama"
                className="form-control login-input"
                placeholder="Nama Lengkap"
                type="text"
              />
              <label className="label-control" htmlFor="email">
                Email
              </label>
              <input
                value={this.state.inputEmail}
                onChange={this.onChangeEmail}
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
                id="password"
                className="form-control login-input"
                placeholder="Konfirmasi Password"
                type="password"
              />

              <label className="label-control" htmlFor="password-confirm">
                Konfirmasi Password
              </label>
              <input
                value={this.state.inputConfirm}
                onChange={this.onChangeConfirm}
                id="password-confirm"
                className="form-control login-input"
                placeholder="Password"
                type="password"
              />

              {this.state.error ? (
                <div className="text-danger"> {this.state.errorMsg} </div>
              ) : (
                ""
              )}

              <button
                onClick={() => {
                  if (this.checkNull() === false) {
                    this.toggleError("Isi Semua Form");
                  } else if (
                    this.state.inputPassword !== this.state.inputConfirm
                  ) {
                    this.toggleError(
                      "Password dan Konfirmasi Password Harus Sama"
                    );
                  } else if (this.checkEmail() === false) {
                    this.toggleError("Invalid Email");
                  } else {
                    this.handleSignUpButton();
                  }
                }}
                className="btn form-control btn-outline-info mt-3"
              >
                Sign Up
              </button>

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

export default withRouter(SignUp);
