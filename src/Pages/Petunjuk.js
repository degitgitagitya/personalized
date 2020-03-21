import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";
import PageTitle from "../Components/PageTitle";

import "./Petunjuk.css";

export default class Petunjuk extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle
          title={`Petunjuk Pengisian Kuesioner Gaya Belajar`}
        ></PageTitle>
        <div className="petunjuk-container">
          <div className="container py-5">
            Ad non eiusmod sunt labore in tempor amet pariatur tempor.
            Adipisicing exercitation aliqua irure culpa fugiat id quis culpa
            sunt esse cupidatat nulla. Ut in mollit fugiat et eu qui non labore
            esse laboris ut aute cupidatat. Tempor occaecat magna occaecat ad.
            Quis veniam aute laboris do veniam occaecat amet reprehenderit
            fugiat. Aliqua cillum ullamco adipisicing nulla minim velit fugiat
            elit laboris. Magna aute do commodo aute veniam non qui et
            reprehenderit.
            <br />
            <br />
            Selamat Mencoba!
            <div className="row justify-content-end">
              <div className="col-md-2">
                <NavLink href="/kuesioner">
                  <button className="btn btn-success mt-2 mt-md-5 petunjuk-button">
                    Mulai
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
