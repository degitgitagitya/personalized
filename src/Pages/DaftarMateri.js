import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";
import PageTitle from "../Components/PageTitle";

import "./DaftarMateri.css";

const DATA_MATERI_CONTENT = [
  {
    no: 1,
    judul: "Prosedur",
    desc:
      "Ad et amet id elit ut duis esse exercitation. Officia commodo excepteur non aute deserunt occaecat sit cupidatat nisi nostrud ipsum officia ipsum do.",
    sub: 4,
    url: "/daftar-sub-materi"
  },
  {
    no: 2,
    judul: "Fungsi",
    desc:
      "Ad et amet id elit ut duis esse exercitation. Officia commodo excepteur non aute deserunt occaecat sit cupidatat nisi nostrud ipsum officia ipsum do.",
    sub: 4,
    url: "/daftar-sub-materi"
  }
];

const ContentCard = props => {
  return (
    <div className="daftar-materi-card-container">
      <div className="daftar-materi-card">
        <div className="daftar-materi-label">Materi</div>
        <hr />
        <div className="daftar-materi-title">{props.data.judul}</div>
        <div className="daftar-materi-count">{props.data.sub} Sub Materi</div>
        <div className="daftar-materi-desc">{props.data.desc}</div>
        <NavLink href={props.data.url}>
          <button className="btn btn-outline-info form-control">
            Mulai Belajar
          </button>
        </NavLink>
      </div>{" "}
    </div>
  );
};

export default class DaftarMateri extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Daftar Materi"}></PageTitle>
        <div className="container">
          {DATA_MATERI_CONTENT.map(data => {
            return <ContentCard key={data.no} data={data}></ContentCard>;
          })}
        </div>
      </div>
    );
  }
}
