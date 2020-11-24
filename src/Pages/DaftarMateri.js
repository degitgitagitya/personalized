import React, { Component } from 'react';

import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
// import NavLink from '../Components/NavLink';

import './DaftarMateri.css';
import PDFPage from './PDFPage';
import PPTPage from './PPTPage';
import VideoList from './VideoList';
import CodeList from './CodeList';
import FunctionLevel from '../Components/FunctionLevel';
import IndikatorMateri from '../Components/IndikatorMateri';

// const ContentCard = (props) => {
//   return (
//     <div className='daftar-materi-card-container'>
//       <div className='daftar-materi-card'>
//         <div className='daftar-materi-label'>Materi</div>
//         <hr />
//         <div className='daftar-materi-title'>{props.data.judul}</div>
//         <div className='daftar-materi-desc'>{props.data.keterangan}</div>
//         <NavLink
//           href={`/daftar-sub-materi?id_gaya_belajar=${props.url}&id_materi=${props.data.id}&judul=${props.data.judul}`}
//         >
//           <button className='btn btn-outline-info form-control'>
//             Mulai Belajar
//           </button>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

export default class DaftarMateri extends Component {
  state = {
    listMateri: [],
    idGayaBelajar: null,
  };

  fetchDataListMateri = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const idGayaBelajar = params.get('id_gaya_belajar');

    fetch(`${process.env.REACT_APP_API_URL}/materi`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          listMateri: result,
          idGayaBelajar: parseInt(idGayaBelajar),
        });
      })
      .catch((error) => console.log('error', error));
  };

  componentDidMount() {
    this.fetchDataListMateri();
  }

  render() {
    return (
      <div>
        <NavBar />
        <PageTitle title={'Daftar Materi'} />
        <IndikatorMateri />
        {this.state.idGayaBelajar === 2 ? (
          <div className='container'>
            <h3 className='mt-2 text-white'>Materi</h3>
            <hr className='border-white' />
            <PPTPage />
          </div>
        ) : this.state.idGayaBelajar === 3 ? (
          <div className='container'>
            <h3 className='mt-2 text-white'>Materi</h3>
            <hr className='border-white' />
            <VideoList />
          </div>
        ) : this.state.idGayaBelajar === 4 ? (
          <div className='container'>
            <h3 className='mt-2 text-white'>Materi</h3>
            <hr className='border-white' />
            <PDFPage />
          </div>
        ) : (
          <div className='container'>
            <h3 className='text-white'>Pengenalan</h3>
            <hr className='border-white' />
            <FunctionLevel />
            <h3 className='mt-2 text-white'>Materi</h3>
            <hr className='border-white' />
            <CodeList />
          </div>
        )}
      </div>
    );
  }
}
