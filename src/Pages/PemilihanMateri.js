import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";
import NavLink from "../Components/NavLink";
import { AuthContext } from "../Contexts/Authentication";
import LIST_MATERI from "../Data/ListMateri";

import "./PemilihanMateri.css";

const MateriCard = props => {
  return (
    <div className="materi-card">
      <img
        src={props.data.img}
        className="img-fluid materi-card-img"
        alt={props.data.title}
      />
      <div className="materi-card-detail-container">
        <NavLink href={`${props.data.url}`}>
          <button className="form-control btn btn-outline-info materi-card-button">
            Mulai
          </button>
        </NavLink>
        <div className="materi-card-title">{props.data.title}</div>
        <div className="materi-card-sub-title">{props.data.keterangan}</div>
      </div>
    </div>
  );
};

export default class PemilihanMateri extends Component {
  static contextType = AuthContext;

  state = {
    dataMateri: []
  };

  componentDidMount() {
    let x = [];

    LIST_MATERI.forEach(data => {
      if (this.context.data.id_gaya_belajar === data.no) {
        x.push(data);
      }
    });

    this.setState({
      dataMateri: x
    });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title="Pemilihan Materi"></PageTitle>
        <div className="container mt-2 mt-md-4">
          <div className="materi-card-container">
            {this.state.dataMateri.map(data => {
              return <MateriCard key={data.no} data={data}></MateriCard>;
            })}
          </div>
        </div>
      </div>
    );
  }
}
