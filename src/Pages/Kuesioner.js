import React, { Component } from 'react';

import { AuthContext } from '../Contexts/Authentication';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';

import './Petunjuk.css';
import './Kuesioner.css';
import { withRouter } from 'react-router-dom';

class Pertanyaan extends Component {
  render() {
    return (
      <div className='row mb-4'>
        <div className='col-md-10'>
          {this.props.no}. {this.props.pertanyaan}
        </div>
        <div
          onClick={() => {
            this.props.changeAnswer(this.props.index);
          }}
          className='col-md-2'
        >
          <div className='kuesioner-check text-center'>
            {this.props.jawaban.jawaban
              ? 'Ya'
              : this.props.jawaban.jawaban === false
              ? 'Tidak'
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

class Kuesioner extends Component {
  static contextType = AuthContext;

  state = {
    kuesioner: [],
    jawaban: [],
  };

  fetchAllKuesioner = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(`${process.env.REACT_APP_API_URL}/kuesioners`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        let x = [];
        result.forEach((data) => {
          x.push({
            id: data.id,
            jawaban: undefined,
            kunci: data.id_gaya_belajar,
          });
        });
        this.setState({
          kuesioner: result,
          jawaban: x,
        });
      })
      .catch((error) => console.log('error', error));
  };

  changeAnswer = (id) => {
    let x = this.state.jawaban;
    x[id].jawaban = !x[id].jawaban;
    this.setState({
      jawaban: x,
    });
  };

  onClickTampilkanHasil = () => {
    const { jawaban } = this.state;
    let arrayTemp = [0, 0, 0, 0];
    jawaban.forEach((data) => {
      if (data.jawaban === true) {
        if (data.kunci === 1) {
          arrayTemp[0]++;
        } else if (data.kunci === 2) {
          arrayTemp[1]++;
        } else if (data.kunci === 3) {
          arrayTemp[2]++;
        } else if (data.kunci === 4) {
          arrayTemp[3]++;
        }
      }
    });

    const indexMax = this.indexOfMax(arrayTemp);

    let gaya;

    if (indexMax === 0) {
      gaya = 1;
    } else if (indexMax === 1) {
      gaya = 2;
    } else if (indexMax === 2) {
      gaya = 3;
    } else if (indexMax === 3) {
      gaya = 4;
    }

    this.updateSiswa(gaya);
  };

  updateSiswa = (idGayaBelajar) => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      email: this.context.data.email,
      id_gaya_belajar: idGayaBelajar,
      id_kelas: '',
      nama: this.context.data.nama,
      password: this.context.data.password,
    });

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      `${process.env.REACT_APP_API_URL}/siswa/${this.context.data.id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.context.changeAuthToTrue(result);
        this.props.history.push('/hasil');
      })
      .catch((error) => console.log('error', error));
  };

  indexOfMax = (arr) => {
    if (arr.length === 0) {
      return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }

    return maxIndex;
  };

  componentDidMount() {
    this.fetchAllKuesioner();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={'Kuisioner Gaya Belajar'}></PageTitle>
        <div className='petunjuk-container'>
          <div className='container py-5'>
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
            <div
              className='row justify-content-end'
              style={{ marginBottom: '20rem' }}
            >
              <div className='col-md-2'>
                <button
                  onClick={this.onClickTampilkanHasil}
                  className='btn btn-success mt-2 mt-md-5 kuesioner-button'
                >
                  Tampilkan Hasil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Kuesioner);
