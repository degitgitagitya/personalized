import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";
import PageTitle from "../Components/PageTitle";

import "./Petunjuk.css";
import "./Kuesioner.css";

export default class Kuesioner extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Kuisioner Gaya Belajar"}></PageTitle>
        <div className="petunjuk-container">
          <div className="container p-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
            laboriosam maiores ducimus natus? Quis rerum est mollitia,
            doloremque fuga impedit! Nulla eos asperiores amet? Architecto nam
            soluta impedit sed doloribus?
            <div className="form-check mt-2 mt-md-3">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="radio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="radio1">
                Option 1
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="radio2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="radio2">
                Option 2
              </label>
            </div>
            <div className="row justify-content-end">
              <div className="col-md-2">
                <NavLink href="/hasil">
                  <button className="btn btn-success mt-2 mt-md-5 kuesioner-button">
                    Tampilkan Hasil
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
