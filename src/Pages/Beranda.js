import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";

import "./Beranda.css";

const DATA_DETAIL = [
  {
    no: 1,
    icon: "fa-chalkboard-teacher",
    content: "XII IPA 3"
  },
  {
    no: 2,
    icon: "fa-envelope",
    content: "ronaldo@gmailc.com"
  },
  {
    no: 3,
    icon: "fa-graduation-cap",
    content: "Convergen"
  }
];

const DATA_MATERI = [
  {
    no: 1,
    judul: "Prosedur",
    sub: 4
  },
  {
    no: 2,
    judul: "Fungsi",
    sub: 4
  }
];

const DATA_EVALUASI = [
  {
    no: 1,
    judul: "Evaluasi 1",
    nilai: 90
  },
  {
    no: 2,
    judul: "Evaluasi 2",
    nilai: 50
  }
];

const MateriContent = props => {
  return (
    <tr>
      <td>{props.data.judul}</td>
      <td>{props.data.sub}</td>
    </tr>
  );
};

const DetailProfile = props => {
  return (
    <div className="beranda-detail">
      <i className={`beranda-icon fas ${props.data.icon}`}></i>
      {props.data.content}
    </div>
  );
};

const EvaluasiContent = props => {
  return (
    <tr>
      <td>{props.data.judul}</td>
      <td>{props.data.nilai}</td>
    </tr>
  );
};

export default class Beranda extends Component {
  state = {
    name: "C. Ronaldo",
    detail: DATA_DETAIL,
    materi: DATA_MATERI,
    evaluasi: DATA_EVALUASI
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Beranda"}></PageTitle>
        <div className="container">
          <div className="beranda-container">
            <div className="beranda-nama text-uppercase">{this.state.name}</div>
            <hr />
            <div className="row">
              <div className="col-md-5 text-center">
                <img
                  src="https://www.pmjnews.com/wp-content/uploads/2019/11/Cristiano-Ronaldo-Karier.jpg"
                  className="img-fluid beranda-gambar"
                  alt=""
                />
                <hr />

                {this.state.detail.map(data => {
                  return (
                    <DetailProfile key={data.no} data={data}></DetailProfile>
                  );
                })}
              </div>
              <div className="col-md-7">
                <div className="beranda-sub-title">Daftar Materi</div>
                <table className="table">
                  <thead>
                    <tr>
                      <td>Judul Materi</td>
                      <td>Jumlah Sub Bab</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.materi.map(data => {
                      return (
                        <MateriContent
                          data={data}
                          key={data.no}
                        ></MateriContent>
                      );
                    })}
                  </tbody>
                </table>
                <hr />
                <div className="beranda-sub-title">
                  Evaluasi yang pernah dikerjakan
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <td>Judul Evaluasi</td>
                      <td>Nilai</td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.evaluasi.map(data => {
                      return (
                        <EvaluasiContent
                          data={data}
                          key={data.no}
                        ></EvaluasiContent>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
