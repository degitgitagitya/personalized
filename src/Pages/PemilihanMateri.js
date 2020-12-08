import React, { Component } from 'react';

import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import NavLink from '../Components/NavLink';
import { AuthContext } from '../Contexts/Authentication';
import LIST_MATERI from '../Data/ListMateri';

import './PemilihanMateri.css';

const MateriCard = (props) => {
  return (
    <div className='materi-card'>
      <img
        src={props.data.img}
        className='img-fluid materi-card-img'
        alt={props.data.title}
      />
      <div className='materi-card-detail-container'>
        <NavLink href={`${props.data.url}`}>
          <button className='form-control btn btn-outline-info materi-card-button'>
            Mulai
          </button>
        </NavLink>
        <div className='materi-card-title'>{props.data.title}</div>
        <div className='materi-card-sub-title'>{props.data.keterangan}</div>
      </div>
    </div>
  );
};

export default class PemilihanMateri extends Component {
  static contextType = AuthContext;

  state = {
    dataMateri: [],
  };

  componentDidMount() {
    this.setState({
      dataMateri: LIST_MATERI,
    });
  }

  render() {
    let gayaBelajar = 'Accommodator';
    if (this.context.data.id_gaya_belajar === 2) {
      gayaBelajar = 'Diverger';
    } else if (this.context.data.id_gaya_belajar === 3) {
      gayaBelajar = 'Assimilator';
    } else if (this.context.data.id_gaya_belajar === 4) {
      gayaBelajar = 'Converger';
    }
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle
          title={`Gaya Belajar Kamu Adalah ${gayaBelajar}`}
        ></PageTitle>
        <div className='container mt-2 mt-md-4'>
          <div className='materi-card-container'>
            {this.state.dataMateri.map((data) => {
              if (data.no === this.context.data.id_gaya_belajar && this.context.data.lock === 1) {
                return <MateriCard key={data.no} data={data}></MateriCard>;
              } else {
                return <MateriCard key={data.no} data={data}></MateriCard>;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
