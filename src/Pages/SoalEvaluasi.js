import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";

import "./SoalEvaluasi.css";

export default class SoalEvaluasi extends Component {
  state = {
    soalEvaluasi: [],
    namaEvaluasi: "",
    listJawaban: [],
  };

  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("x");
    const nama = params.get("y");

    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/soal/bank-soal/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let x = [];

        result.forEach((element) => {
          let temp = {
            index: "",
            jawaban: "",
          };

          x.push(temp);
        });

        this.setState({
          namaEvaluasi: nama,
          soalEvaluasi: result,
          listJawaban: x,
        });
      })
      .catch((error) => console.log("error", error));
  }

  onClickJawaban = (isRight, indexPilihan, indexSoal) => {
    let list = this.state.listJawaban;
    list[indexSoal].index = indexPilihan;
    list[indexSoal].jawaban = isRight;

    this.setState({
      listJawaban: list,
    });
  };

  hitungHasil = () => {
    let jumlahSoal = 0;
    let jumlahBenar = 0;
    let jumlahSalah = 0;
    this.state.listJawaban.forEach((data) => {
      jumlahSoal++;
      if (data.jawaban === 1) {
        jumlahBenar++;
      } else {
        jumlahSalah++;
      }
    });

    this.props.history.push(
      `/hasil-evaluasi?x=${
        (jumlahBenar * 100) / jumlahSoal
      }&y=${jumlahSalah}&z=${this.state.namaEvaluasi}`
    );
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={this.state.namaEvaluasi}></PageTitle>
        <div className="container">
          <div className="soal-evaluasi-container">
            {this.state.soalEvaluasi.map((data, index) => {
              let tempIndex = index;
              return (
                <div key={data.id} className="row mb-2">
                  <div className="col-md-12">
                    {index + 1}. {data.pertanyaan}
                    <div className="d-flex flex-column">
                      {data.pilihan.map((item, index) => {
                        return (
                          <div
                            onClick={() => {
                              this.onClickJawaban(
                                item.is_right,
                                index,
                                tempIndex
                              );
                            }}
                            className={`d-flex mt-2 align-items-center`}
                            key={item.id}
                          >
                            <div
                              className={`bullet-pilihan ${
                                this.state.listJawaban[tempIndex].index ===
                                index
                                  ? "selected"
                                  : ""
                              }`}
                            ></div>
                            <div>{item.pilihan}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="row mt-3">
              <div className="col-md-12">
                <button
                  onClick={this.hitungHasil}
                  className="btn btn-outline-info form-control"
                >
                  Lihat Hasil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
