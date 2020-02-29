import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";
import NavLink from "../Components/NavLink";

import "./DaftarSubMateri.css";

const DATA_SUB_MATERI = [
  {
    no: 1,
    nama: "Nama Materi",
    url: "/sub-materi"
  },
  {
    no: 2,
    nama: "Nama Materi",
    url: "/sub-materi"
  },
  {
    no: 3,
    nama: "Nama Materi",
    url: "/sub-materi"
  },
  {
    no: 4,
    nama: "Nama Materi",
    url: "/sub-materi"
  }
];

const ContentSubMateri = props => {
  return (
    <div className="daftar-sub-materi-card-container">
      <div className="daftar-sub-materi-card">
        <div className="daftar-sub-materi-card-title">
          Sub Materi {props.data.no}
        </div>
        <hr />
        <div className="daftar-sub-materi-card-sub-title">
          {props.data.nama}
        </div>
        <NavLink href={props.data.url}>
          <button className="btn btn-outline-info form-control">Mulai</button>
        </NavLink>
      </div>
    </div>
  );
};

export default class DaftarSubMateri extends Component {
  state = {
    listSubMateri: DATA_SUB_MATERI
  };
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Daftar Sub Materi"}></PageTitle>
        <div className="container">
          <div className="daftar-sub-materi-container">
            <div className="daftar-sub-materi-title">Prosedur</div>
            <hr />
            <div className="row">
              <div className="col-6">
                <div className="daftar-sub-materi-sub-title">Indikator</div>
                <hr />
                <div className="daftar-sub-materi-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae voluptates enim a sit itaque consectetur dolorum.
                  Corporis inventore officiis hic ullam quia beatae quam
                  provident commodi libero suscipit, sequi ducimus.
                </div>
              </div>
              <div className="col-6">
                <div className="daftar-sub-materi-sub-title">
                  Tujuan Pembelajaran
                </div>
                <hr />
                <div className="daftar-sub-materi-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae voluptates enim a sit itaque consectetur dolorum.
                  Corporis inventore officiis hic ullam quia beatae quam
                  provident commodi libero suscipit, sequi ducimus.
                </div>
              </div>
            </div>
          </div>
          <div className="daftar-sub-materi-list">
            {this.state.listSubMateri.map(data => {
              return (
                <ContentSubMateri key={data.no} data={data}></ContentSubMateri>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
