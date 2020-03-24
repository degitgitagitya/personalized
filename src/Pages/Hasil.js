import React, { Component } from "react";

import { AuthContext } from "../Contexts/Authentication";
import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";
import PageTitle from "../Components/PageTitle";

import GAYA_BELAJAR from "../Data/GayaBelajar";

import "./Petunjuk.css";

export default class Hasil extends Component {
  static contextType = AuthContext;

  state = {
    gayaBelajar: "",
    keteranganGayaBelajar: ""
  };

  componentDidMount() {
    GAYA_BELAJAR.forEach(data => {
      if (data.id === this.context.data.id_gaya_belajar) {
        this.setState({
          gayaBelajar: data.nama,
          keteranganGayaBelajar: data.keterangan
        });
      }
    });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={`Gaya Belajar ${this.state.gayaBelajar}`}></PageTitle>
        <div className="petunjuk-container">
          <div className="container p-5">
            <h4 className="mt-3">Deskripsi Singkat Gaya Belajar</h4>
            {this.state.keteranganGayaBelajar}
            <div className="row justify-content-end">
              <div className="col-md-2">
                <NavLink href="/pemilihan-materi">
                  <button className="btn btn-success mt-2 mt-md-5 petunjuk-button">
                    Lanjutkan
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
