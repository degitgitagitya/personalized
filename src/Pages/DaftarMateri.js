import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";
import NavLink from "../Components/NavLink";

import "./DaftarMateri.css";

const ContentCard = props => {
  return (
    <div className="daftar-materi-card-container">
      <div className="daftar-materi-card">
        <div className="daftar-materi-label">Materi</div>
        <hr />
        <div className="daftar-materi-title">{props.data.judul}</div>
        <div className="daftar-materi-desc">{props.data.keterangan}</div>
        <NavLink href={`/daftar-sub-materi?id_materi=${props.data.id}`}>
          <button className="btn btn-outline-info form-control">
            Mulai Belajar
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default class DaftarMateri extends Component {
  state = {
    listMateri: [],
    idGayaBelajar: null
  };

  fetchDataListMateri = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idGayaBelajar = params.get("id_gaya_belajar");

    fetch("http://127.0.0.1:5000/materi", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({
          listMateri: result,
          idGayaBelajar: idGayaBelajar
        });
      })
      .catch(error => console.log("error", error));
  };

  componentDidMount() {
    this.fetchDataListMateri();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Daftar Materi"}></PageTitle>
        <div className="container">
          {this.state.listMateri.map(data => {
            return (
              <ContentCard
                url={this.state.idGayaBelajar}
                key={data.id}
                data={data}
              ></ContentCard>
            );
          })}
        </div>
      </div>
    );
  }
}
