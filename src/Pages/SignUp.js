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
    inputKelas: "",
    inputLock: 0,
    error: false,
    errorMsg: "",
    listKelas: [],
  };

  onChangeNama = (event) => {
    this.setState({
      inputNama: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      inputPassword: event.target.value,
    });
  };

  onChangeConfirm = (event) => {
    this.setState({
      inputConfirm: event.target.value,
    });
  };

  onChangeKelas = (event) => {
    this.setState({
      inputKelas: event.target.value,
    });
  };

  onChangeLock = (event) => {
    this.setState({
      inputLock: event.target.checked ? 1 : 0,
    });
  };

  toggleError = (msg) => {
    this.setState({
      error: true,
      errorMsg: msg,
    });
  };

  checkEmail = () => {
    if (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.state.inputEmail)
    ) {
      return true;
    }
    return false;
  };

  checkNull = () => {
    const {
      inputNama,
      inputEmail,
      inputPassword,
      inputConfirm,
      inputKelas
    } = this.state;
    if (
      inputNama === "" ||
      inputEmail === "" ||
      inputPassword === "" ||
      inputConfirm === "" ||
      inputKelas === ""
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
      id_kelas: this.state.inputKelas,
      nama: this.state.inputNama,
      password: this.state.inputPassword,
      lock: this.state.inputLock
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}/siswa`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.props.history.push("/login");
      })
      .catch((error) => console.log("error", error));
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.handleSignUpButton();
    }
  };

  componentDidMount = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}/kelases`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          listKelas: result,
        });
      })
      .catch((error) => console.log("error", error));
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
                onKeyPress={this.handleKeyPress}
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
                onKeyPress={this.handleKeyPress}
                id="email"
                className="form-control login-input"
                placeholder="Email"
                type="email"
              />

              <label className="label-control" htmlFor="kelas">
                Kelas
              </label>
              <select
                className="form-control login-input"
                name="kelas"
                id="kelas"
                onChange={this.onChangeKelas}
                value={this.state.inputKelas}
              >
                <option value="0">Pilih Kelas</option>
                {this.state.listKelas.map((data) => {
                  return (
                    <option value={data.id} key={data.id}>
                      {data.nama}
                    </option>
                  );
                })}
              </select>

              <label className="label-control" htmlFor="password">
                Password
              </label>
              <input
                value={this.state.inputPassword}
                onKeyPress={this.handleKeyPress}
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
                onKeyPress={this.handleKeyPress}
                onChange={this.onChangeConfirm}
                id="password-confirm"
                className="form-control login-input"
                placeholder="Password"
                type="password"
              />

              <div className="form-group">
                <input
                  value={this.state.inputLock}
                  onChange={this.onChangeLock}
                  id="lock-user"
                  type="checkbox"
                />
                <label htmlFor="lock-user">
                  &nbsp;Kunci Gaya belajar
                </label>
              </div>

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
