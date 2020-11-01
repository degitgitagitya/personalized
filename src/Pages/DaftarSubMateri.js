import React, { Component } from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import NavLink from '../Components/NavLink';

import './DaftarSubMateri.css';
import FunctionLevel from '../Components/FunctionLevel';

const ContentSubMateri = (props) => {
  return (
    <div className='daftar-sub-materi-card-container'>
      <div className='daftar-sub-materi-card'>
        <div className='daftar-sub-materi-card-title'>
          Sub Materi {props.no}
        </div>
        <hr />
        <div className='daftar-sub-materi-card-sub-title'>
          {props.data.nama}
        </div>
        <NavLink href={`/sub-materi?id_sub_materi=${props.data.id}`}>
          <button className='btn btn-outline-info form-control'>Mulai</button>
        </NavLink>
      </div>
    </div>
  );
};

export default class DaftarSubMateri extends Component {
  state = {
    listSubMateri: [],
    materi: {},
  };

  fetchDataListSubMateri = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idMateri = params.get('id_materi');
    const idGayaBelajar = params.get('id_gaya_belajar');

    fetch(
      `${process.env.REACT_APP_API_URL}/submateri/${idMateri}/${idGayaBelajar}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          listSubMateri: result,
        });
      })
      .catch((error) => console.log('error', error));
  };

  fetchDataMateri = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idMateri = params.get('id_materi');

    fetch(`${process.env.REACT_APP_API_URL}/materi/${idMateri}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          materi: result,
        });
      })
      .catch((error) => console.log('error', error));
  };

  componentDidMount() {
    this.fetchDataListSubMateri();
    this.fetchDataMateri();
  }

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle title={'Daftar Sub Materi'}></PageTitle>
        <div className='container'>
          <div className='daftar-sub-materi-container'>
            <div className='daftar-sub-materi-title'>
              {this.state.materi.judul}
            </div>
            <hr />
            <div className='row'>
              <div className='col-6'>
                <div className='daftar-sub-materi-sub-title'>Indikator</div>
                <hr />
                <div className='daftar-sub-materi-content'>
                  {this.state.materi.indikator}
                </div>
              </div>
              <div className='col-6'>
                <div className='daftar-sub-materi-sub-title'>
                  Tujuan Pembelajaran
                </div>
                <hr />
                <div className='daftar-sub-materi-content'>
                  {this.state.materi.tujuan_belajar}
                </div>
              </div>
            </div>
          </div>
          <div className='daftar-sub-materi-list'>
            {this.state.listSubMateri.map((data, index) => {
              return (
                <ContentSubMateri
                  key={data.id}
                  no={index + 1}
                  data={data}
                ></ContentSubMateri>
              );
            })}
          </div>
          <FunctionLevel />
        </div>
      </div>
    );
  }
}
