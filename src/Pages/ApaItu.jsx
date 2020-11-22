import React from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';

const ApaItu = () => {
  return (
    <div>
      <NavBar></NavBar>
      <PageTitle title={'Apa itu Personalized Learning'}></PageTitle>
      <div className='container'>
        <div className='bg-white p-3 shadow-sm'>
          Personalized learning adalah sebuah media pembelajaran yang dapat
          memfasilitasi siswa belajar sesuai dengan preferensi dan gaya
          belajarnya. Personalized Learning hanya berfokus pada gaya belajar
          yaitu gaya belajar kolb. Teori gaya belajar kolb dikembangkan oleh
          david kolb dengan mendefinisikan gaya belajar sebagai kemampuan siswa
          dalam mengelola suatu informasi dan bagaimana seseorang dapat belajar
          dengan cara terbaik mereka. Kolb mengemukakan terdapat empat jenis
          gaya belajar yaitu gaya belajar diverger, assimilator, converger, dan
          accommodator.
        </div>
      </div>
    </div>
  );
};

export default ApaItu;
