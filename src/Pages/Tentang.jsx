import React from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';

const Tentang = () => {
  return (
    <div>
      <NavBar></NavBar>
      <PageTitle title={'Tentang'}></PageTitle>
      <div className='container'>
        <div className='bg-white p-3 shadow-sm'>
          <div className='d-flex justify-content-center'>
            <h4>Tiara Ayu Damayanti</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-center'>
            <h4>1606430</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-center'>
            <h4>Universitas Pendidikan Indonesia</h4>
          </div>
          <hr />
          Media pembelajaran ini dibuat untuk pembelajaran Fungsi pada mata
          pelajaran Pemrograman Dasar dengan pendekatan Personalized Learning
        </div>
      </div>
    </div>
  );
};

export default Tentang;
