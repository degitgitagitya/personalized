import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";

import "./HasilEvaluasi.css";

export default class HasilEvaluasi extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Skor Quiz Materi Prosedur"}></PageTitle>
        <div className="container">
          <div className="hasil-evaluasi-container">
            Skor : 90 <br /> Jumlah Benar : 9 <br /> Jumlah Salah : 1
          </div>
        </div>
      </div>
    );
  }
}
