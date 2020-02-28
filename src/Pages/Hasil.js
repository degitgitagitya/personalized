import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";
import PageTitle from "../Components/PageTitle";

import "./Petunjuk.css";

export default class Hasil extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Gaya Belajar"}></PageTitle>
        <div className="petunjuk-container">
          <div className="container p-5">
            <h3>Gaya Belajar</h3>
            <h4 className="mt-3">Deskripsi Singkat Gaya Belajar</h4>
            Ad non eiusmod sunt labore in tempor amet pariatur tempor.
            Adipisicing exercitation aliqua irure culpa fugiat id quis culpa
            sunt esse cupidatat nulla. Ut in mollit fugiat et eu qui non labore
            esse laboris ut aute cupidatat. Tempor occaecat magna occaecat ad.
            Quis veniam aute laboris do veniam occaecat amet reprehenderit
            fugiat. Aliqua cillum ullamco adipisicing nulla minim velit fugiat
            elit laboris. Magna aute do commodo aute veniam non qui et
            reprehenderit.
            <h4 className="mt-3">Rekomendasi Materi</h4>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
            quasi dolore, mollitia nam facilis molestiae quidem temporibus,
            velit suscipit quas nobis fuga consequuntur ea consectetur
            architecto rerum cupiditate quae tempore?
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
