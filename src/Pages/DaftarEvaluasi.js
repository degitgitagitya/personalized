import React, { Component } from "react";

import "./DaftarEvaluasi.css";
import NavBar from "../Components/NavBar";
import PageTitle from "../Components/PageTitle";
import ReactTable from "../Components/ReactTable";

export default class DaftarEvaluasi extends Component {
  state = {
    head: [
      {
        Header: "Evaluasi",
        columns: [
          {
            Header: "No",
            Cell: ({ row }) => <div>{row.index + 1}</div>,
          },
          {
            Header: "Nama Evaluasi",
            accessor: "mata_pelajaran",
            sortType: "basic",
          },
          {
            Header: "Durasi",
            accessor: "durasi",
            sortType: "basic",
            Cell: ({ row }) => <div>{row.original.durasi} Menit</div>,
          },
          {
            Header: "Action",
            accessor: "id",
            Cell: ({ row }) => (
              <div>
                <button
                  onClick={() => {
                    this.handleClickMulai(row.original);
                  }}
                  className="btn btn-success"
                >
                  Mulai
                </button>
              </div>
            ),
          },
        ],
      },
    ],
    body: [],
  };

  handleClickMulai = (data) => {
    this.props.history.push(
      `/soal-evaluasi?x=${data.id}&y=${data.mata_pelajaran}`
    );
  };

  fetchUjian = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_API_URL}/ujian`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          body: result,
        });
      })
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    this.fetchUjian();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={"Daftar Evaluasi"}></PageTitle>
        <div className="container">
          <div className="daftar-evaluasi-container">
            <ReactTable
              head={this.state.head}
              body={this.state.body}
            ></ReactTable>
          </div>
        </div>
      </div>
    );
  }
}
