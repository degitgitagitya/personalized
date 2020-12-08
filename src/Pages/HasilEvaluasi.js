import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import { AuthContext } from '../Contexts/Authentication';

import './HasilEvaluasi.css';

export default class HasilEvaluasi extends Component {
  static contextType = AuthContext;

  state = {
    nilai: 0,
    namaEvaluasi: '',
    listJawaban: [],
  };

  fetchListJawaban = () => {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('ujian');

    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/jawaban/siswa/${this.context.data.id}/${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          listJawaban: result,
        });
      })
      .catch((error) => console.log('error', error));
  };

  componentDidMount() {
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const nilai = params.get('x');
    const nama = params.get('z');

    this.fetchListJawaban();

    this.setState({
      nilai: nilai,
      namaEvaluasi: nama,
    });
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={'Skor ' + this.state.namaEvaluasi}></PageTitle>
        <div className='container'>
          <div className='hasil-evaluasi-container text-center'>
            <h2>Nilai</h2>
            <h1>{this.state.nilai}</h1>

            <hr />

            <table className='table'>
              <thead className='bg-primary text-white'>
                <tr>
                  <td>No</td>
                  <td>Pertanyaan</td>
                  <td>Jawaban</td>
                  <td>Kunci</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                {this.state.listJawaban.map((data, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{data.pertanyaan}</td>
                      <td>{data.jawaban}</td>
                      <td>{data.kunci}</td>
                      <td>
                        {data.status === 0 ? (
                          <span className='text-danger'>Salah</span>
                        ) : (
                          <span className='text-success'>Benar</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
