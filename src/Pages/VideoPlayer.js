import React from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import PageTitle from '../Components/PageTitle';

const VideoPlayer = () => {
  const params = new URLSearchParams(useLocation().search);
  const url = params.get('url');
  console.log(url);

  return (
    <div>
      <NavBar></NavBar>
      <PageTitle title={'Materi'}></PageTitle>
      <div className='container'>
        <div className='bg-white shadow-sm p-3 d-flex justify-content-center'>
          <ReactPlayer url={url} />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
