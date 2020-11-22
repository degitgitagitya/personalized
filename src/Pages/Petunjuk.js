import React, { Component } from 'react';

import NavBar from '../Components/NavBar';
import NavLink from '../Components/NavLink';
import PageTitle from '../Components/PageTitle';

import './Petunjuk.css';

export default class Petunjuk extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <PageTitle
          title={`Petunjuk Pengisian Kuesioner Gaya Belajar`}
        ></PageTitle>
        <div className='petunjuk-container'>
          <div className='container py-5'>
            Kuesioner gaya belajar kolb merupakan sebuah test yang digunakan
            untuk mengetahui gaya belajar seseorang berdasarkan teroi gaya
            belajar kolb.
            <hr />
            <h5>Aturan</h5>
            <ul>
              <li>Berikut terdapat beberapa pertanyaan,</li>
              <li>
                Tekan tombol jika terdapat pernyataan yang sesuai dengan keadaan
                kamu,
              </li>
              <li>
                Jika pernyatan dirasa kurang sesuai kamu tidak perlu menekan
                tombol yang ada,
              </li>
              <li>
                Jawablah setiap pertanyaan dengan jujur. Setiap soal dalam tes
                ini hanya bisa kamu jawab SATU KALI, jadi kerjakanlah dengan
                teliti,
              </li>
            </ul>
            <br />
            <br />
            Selamat Mencoba!
            <div className='row justify-content-end'>
              <div className='col-md-2'>
                <NavLink href='/kuesioner'>
                  <button className='btn btn-success mt-2 mt-md-5 petunjuk-button'>
                    Mulai
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
