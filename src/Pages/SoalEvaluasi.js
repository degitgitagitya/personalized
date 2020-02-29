import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";
import NavLink from "../Components/NavLink";

import "./SoalEvaluasi.css";

export default class SoalEvaluasi extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Quiz Materi Prosedur"}></PageTitle>
        <div className="container">
          <div className="soal-evaluasi-container">
            1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            optio dignissimos distinctio accusantium totam quos, architecto
            excepturi consequuntur libero vel! Officiis placeat eveniet ut
            numquam aspernatur. Enim dignissimos eaque deserunt!
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
            <div className="row mt-5">
              <div className="col-md-12">
                <NavLink href="/hasil-evaluasi">
                  <button className="btn btn-outline-info form-control">
                    Lihat Hasil
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
