import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";

import "./HasilEvaluasi.css";

export default class HasilEvaluasi extends Component {
  state = {
    nilai: 0,
    namaEvaluasi: "",
  };

  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const nilai = params.get("x");
    const nama = params.get("z");

    this.setState({
      nilai: nilai,
      namaEvaluasi: nama,
    });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Skor " + this.state.namaEvaluasi}></PageTitle>
        <div className="container">
          <div className="hasil-evaluasi-container text-center">
            <h2>Nilai</h2>
            <h1>{this.state.nilai}</h1>
          </div>
        </div>
      </div>
    );
  }
}
