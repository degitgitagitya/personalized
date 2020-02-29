import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";
import NavLink from "../Components/NavLink";

import "./PemilihanMateri.css";

const DATA_MATERI = [
  {
    no: 1,
    title: "Gaya Belajar Divergen",
    img:
      "https://previews.123rf.com/images/studio3321/studio33211510/studio3321151000014/46519784-architecture-plans-and-sketch-of-house-project.jpg"
  },
  {
    no: 2,
    title: "Gaya Belajar Assimilator",
    img:
      "https://previews.123rf.com/images/studio3321/studio33211510/studio3321151000014/46519784-architecture-plans-and-sketch-of-house-project.jpg"
  },
  {
    no: 3,
    title: "Gaya Belajar Convergen",
    img:
      "https://previews.123rf.com/images/studio3321/studio33211510/studio3321151000014/46519784-architecture-plans-and-sketch-of-house-project.jpg"
  },
  {
    no: 4,
    title: "Gaya Belajar Accomodator",
    img:
      "https://previews.123rf.com/images/studio3321/studio33211510/studio3321151000014/46519784-architecture-plans-and-sketch-of-house-project.jpg"
  }
];

const MateriCard = props => {
  return (
    <div className="materi-card-container">
      <div className="materi-card">
        <img
          src={props.data.img}
          className="img-fluid materi-card-img"
          alt={props.data.title}
        />
        <div className="materi-card-detail-container">
          <div className="materi-card-title">{props.data.title}</div>
          <div className="materi-card-sub-title">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus,
            quod! Fuga, atque.
          </div>
          <NavLink href="/daftar-materi">
            <button className="form-control btn btn-outline-info mt-2 mt-md-4">
              Mulai
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default class PemilihanMateri extends Component {
  state = {
    dataMateri: DATA_MATERI
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title="Pemilihan Materi"></PageTitle>
        <div className="container mt-2 mt-md-4">
          {this.state.dataMateri.map(data => {
            return <MateriCard key={data.no} data={data}></MateriCard>;
          })}
        </div>
      </div>
    );
  }
}
