import React from 'react';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';
import { useLocation } from 'react-router-dom';

const SlideShow = () => {
  const params = new URLSearchParams(useLocation().search);
  const url = params.get('url');
  console.log(url);

  return (
    <div>
      <NavBar></NavBar>
      <PageTitle title={'Materi'}></PageTitle>
      <div className='container'>
        <div className='bg-white shadow-sm p-3 d-flex justify-content-center'>
          <iframe
            src={url}
            frameborder='0'
            width='960'
            height='569'
            allowfullscreen='true'
            mozallowfullscreen='true'
            webkitallowfullscreen='true'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
