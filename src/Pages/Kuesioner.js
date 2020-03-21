import React, { Component } from "react";

import NavBar from "../Components/NavBar";
import NavLink from "../Components/NavLink";
import PageTitle from "../Components/PageTitle";

import "./Petunjuk.css";
import "./Kuesioner.css";

class Pertanyaan extends Component {
  render() {
    return (
      <div className="row mb-4">
        <div className="col-md-10">
          {this.props.no}. {this.props.pertanyaan}
        </div>
        <div
          onClick={() => {
            this.props.changeAnswer(this.props.index);
          }}
          className="col-md-2"
        >
          <div className="kuesioner-check text-center">
            {this.props.jawaban.jawaban ? "Ya" : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default class Kuesioner extends Component {
  state = {
    kuesioner: [],
    jawaban: []
  };

  fetchAllKuesioner = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("http://127.0.0.1:5000/kuesioners", requestOptions)
      .then(response => response.json())
      .then(result => {
        let x = [];
        result.forEach(data => {
          x.push({
            id: data.id,
            jawaban: false,
            kunci: data.id_gaya_belajar
          });
        });
        this.setState({
          kuesioner: result,
          jawaban: x
        });
      })
      .catch(error => console.log("error", error));
  };

  changeAnswer = id => {
    let x = this.state.jawaban;
    x[id].jawaban = !x[id].jawaban;
    this.setState({
      jawaban: x
    });
  };

  componentDidMount() {
    this.fetchAllKuesioner();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Kuisioner Gaya Belajar"}></PageTitle>
        <div className="petunjuk-container">
          <div className="container py-5">
            {this.state.kuesioner.map((data, index) => {
              return (
                <Pertanyaan
                  key={data.id}
                  id={data.id}
                  pertanyaan={data.pertanyaan}
                  jawaban={this.state.jawaban[index]}
                  index={index}
                  no={index + 1}
                  changeAnswer={this.changeAnswer}
                ></Pertanyaan>
              );
            })}
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
