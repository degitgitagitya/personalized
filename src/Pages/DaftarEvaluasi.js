import React, { Component } from "react";

import "./DaftarEvaluasi.css";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";
import NavLink from "../Components/NavLink";

const DATA_CONTENT_EVALUASI = [
  {
    no: 1,
    nama: "Evaluasi 1",
    jumlah: "10",
    mulai: "2020-04-10 11:00:00",
    selesai: "2020-04-10 13:00:00",
    url: "/soal-evaluasi"
  },
  {
    no: 2,
    nama: "Evaluasi 2",
    jumlah: "10",
    mulai: "2020-04-10 11:00:00",
    selesai: "2020-04-10 13:00:00",
    url: "/soal-evaluasi"
  },
  {
    no: 3,
    nama: "Evaluasi 3",
    jumlah: "10",
    mulai: "2020-04-10 11:00:00",
    selesai: "2020-04-10 13:00:00",
    url: "/soal-evaluasi"
  }
];

const ContentEvaluasi = props => {
  return (
    <tr>
      <td>{props.data.nama}</td>
      <td>{props.data.jumlah}</td>
      <td>{props.data.mulai}</td>
      <td>{props.data.selesai}</td>
      <td>
        <NavLink href={props.data.url}>
          <button className="btn btn-info">Mulai</button>
        </NavLink>
      </td>
    </tr>
  );
};

export default class DaftarEvaluasi extends Component {
  state = {
    contentEvaluasi: DATA_CONTENT_EVALUASI
  };
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Daftar Evaluasi"}></PageTitle>
        <div className="container">
          <div className="daftar-evaluasi-container">
            <table className="table">
              <thead>
                <tr>
                  <td>Evaluasi</td>
                  <td>Jumlah Soal</td>
                  <td>Waktu Mulai</td>
                  <td>Waktu Selesai</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                {this.state.contentEvaluasi.map(data => {
                  return (
                    <ContentEvaluasi
                      data={data}
                      key={data.no}
                    ></ContentEvaluasi>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
